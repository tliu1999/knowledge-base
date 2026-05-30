const STORAGE_KEY = "thinking-library-local-entries";
const SUBMISSION_ISSUE_URL = "https://github.com/tliu1999/knowledge-base/issues/new";
const WIDE_ENTRY_LENGTH = 260;
const CATEGORY_ORDER = [
  "自我复盘",
  "产品思考",
  "AI 时代",
  "大模型概念",
  "机器学习基础",
  "党员角色",
  "面试题库",
  "Mac",
  "GitHub / Git",
  "Shell",
  "其他"
];

const state = {
  query: "",
  category: "自我复盘",
  tag: "全部"
};

const entriesEl = document.querySelector("#entries");
const template = document.querySelector("#entryTemplate");
const searchInput = document.querySelector("#searchInput");
const categoryFilters = document.querySelector("#categoryFilters");
const tagFilters = document.querySelector("#tagFilters");
const resultCount = document.querySelector("#resultCount");
const resultTitle = document.querySelector("#resultTitle");
const emptyState = document.querySelector("#emptyState");
const quickAddForm = document.querySelector("#quickAddForm");
const clearLocalBtn = document.querySelector("#clearLocalBtn");

function getLocalEntries() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveLocalEntries(entries) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

function allEntries() {
  return [...window.KB_ENTRIES, ...getLocalEntries()];
}

function normalize(value) {
  return String(value || "").trim().toLowerCase();
}

function formatAnswer(value) {
  return String(value || "").replace(/<br\s*\/?>/gi, "\n");
}

function isWideEntry(entry) {
  return [entry.body, entry.code].map(formatAnswer).join("\n").length >= WIDE_ENTRY_LENGTH;
}

function buildSubmissionIssueUrl(entry) {
  const tags = (entry.tags || []).join(", ") || "未填写";
  const issueTitle = `新增思考：${entry.title}`;
  const issueBody = [
    "## 新增思考",
    "",
    `**分类**：${entry.category}`,
    `**标签**：${tags}`,
    "",
    "### 核心想法",
    "",
    formatAnswer(entry.body),
    "",
    "---",
    "这条内容来自思考库网页提交。"
  ].join("\n");
  const params = new URLSearchParams({
    title: issueTitle,
    body: issueBody
  });
  return `${SUBMISSION_ISSUE_URL}?${params.toString()}`;
}

function matchesEntry(entry) {
  const query = normalize(state.query);
  const searchable = normalize([
    entry.title,
    entry.category,
    entry.body,
    entry.code,
    ...(entry.tags || [])
  ].join(" "));

  const queryMatch = !query || searchable.includes(query);
  const categoryMatch = state.category === "全部" || entry.category === state.category;
  const tagMatch = state.tag === "全部" || (entry.tags || []).includes(state.tag);

  return queryMatch && categoryMatch && tagMatch;
}

function makeButton(label, active, onClick, className = "filter-btn") {
  const button = document.createElement("button");
  button.type = "button";
  button.className = className;
  button.textContent = label;
  button.setAttribute("aria-pressed", String(active));
  button.addEventListener("click", onClick);
  return button;
}

function renderFilters() {
  const entries = allEntries();
  const entryCategories = [...new Set(entries.map((entry) => entry.category))];
  const orderedCategories = CATEGORY_ORDER.filter((category) => entryCategories.includes(category));
  const remainingCategories = entryCategories.filter((category) => !CATEGORY_ORDER.includes(category));
  const categories = ["全部", ...orderedCategories, ...remainingCategories];
  const tags = ["全部", ...new Set(entries.flatMap((entry) => entry.tags || []))].slice(0, 28);

  categoryFilters.replaceChildren(
    ...categories.map((category) =>
      makeButton(category, state.category === category, () => {
        state.category = category;
        render();
      })
    )
  );

  tagFilters.replaceChildren(
    ...tags.map((tag) =>
      makeButton(tag, state.tag === tag, () => {
        state.tag = tag;
        render();
      }, "tag-btn")
    )
  );
}

async function copyEntry(entry, button) {
  const text = [entry.title, formatAnswer(entry.body), formatAnswer(entry.code)].filter(Boolean).join("\n\n");
  await navigator.clipboard.writeText(text);
  const original = button.textContent;
  button.textContent = "✓";
  window.setTimeout(() => {
    button.textContent = original;
  }, 900);
}

function createPlaceholderCard() {
  const placeholder = document.createElement("article");
  placeholder.className = "entry-card entry-card-placeholder";
  placeholder.innerHTML = `
    <p class="entry-category">继续更新中</p>
    <h3>新的思考正在补充</h3>
    <p class="entry-body">这里会继续沉淀更多问题、回答和复盘。先把真实想法写下来，再慢慢补充经历、反例和判断依据。</p>
    <div class="entry-tags">
      <span>草稿</span>
      <span>待补充</span>
    </div>
  `;
  return placeholder;
}

function renderEntries(entries) {
  entriesEl.replaceChildren();
  let compactEntriesInRow = 0;

  for (const entry of entries) {
    const node = template.content.cloneNode(true);
    const card = node.querySelector(".entry-card");
    if (isWideEntry(entry)) {
      if (compactEntriesInRow === 1) {
        entriesEl.appendChild(createPlaceholderCard());
        compactEntriesInRow = 0;
      }
      card.classList.add("entry-card-wide");
    } else {
      compactEntriesInRow = (compactEntriesInRow + 1) % 2;
    }

    node.querySelector(".entry-category").textContent = entry.category;
    node.querySelector("h3").textContent = entry.title;
    node.querySelector(".entry-body").textContent = formatAnswer(entry.body);

    const codeWrap = node.querySelector(".entry-code");
    const code = node.querySelector("code");
    if (entry.code) {
      code.textContent = formatAnswer(entry.code);
      codeWrap.hidden = false;
    }

    const tags = node.querySelector(".entry-tags");
    tags.replaceChildren(...(entry.tags || []).map((tag) => {
      const chip = document.createElement("span");
      chip.textContent = tag;
      return chip;
    }));

    node.querySelector(".copy-btn").addEventListener("click", (event) => {
      copyEntry(entry, event.currentTarget);
    });

    entriesEl.appendChild(node);
  }

  if (compactEntriesInRow === 1) {
    entriesEl.appendChild(createPlaceholderCard());
  }
}

function render() {
  renderFilters();

  const entries = allEntries().filter(matchesEntry);
  renderEntries(entries);

  resultCount.textContent = entries.length;
  resultTitle.textContent = state.query ? `搜索：${state.query}` : state.category === "全部" ? "全部条目" : state.category;
  emptyState.hidden = entries.length > 0;
}

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

quickAddForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(quickAddForm);
  const localEntries = getLocalEntries();
  const newEntry = {
    title: formData.get("title"),
    category: formData.get("category"),
    tags: String(formData.get("tags") || "")
      .split(/[,\uFF0C]/)
      .map((tag) => tag.trim())
      .filter(Boolean),
    body: formData.get("body"),
    code: ""
  };
  localEntries.push(newEntry);
  saveLocalEntries(localEntries);
  state.query = "";
  state.category = newEntry.category;
  state.tag = "全部";
  searchInput.value = "";
  quickAddForm.reset();
  render();
  window.open(buildSubmissionIssueUrl(newEntry), "_blank", "noopener");
});

clearLocalBtn.addEventListener("click", () => {
  saveLocalEntries([]);
  render();
});

render();
