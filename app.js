const STORAGE_KEY = "personal-kb-local-entries";

const state = {
  query: "",
  category: "全部",
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
  const categories = ["全部", ...new Set(entries.map((entry) => entry.category))];
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
  const text = [entry.title, entry.body, entry.code].filter(Boolean).join("\n\n");
  await navigator.clipboard.writeText(text);
  const original = button.textContent;
  button.textContent = "✓";
  window.setTimeout(() => {
    button.textContent = original;
  }, 900);
}

function renderEntries(entries) {
  entriesEl.replaceChildren();

  for (const entry of entries) {
    const node = template.content.cloneNode(true);
    node.querySelector(".entry-category").textContent = entry.category;
    node.querySelector("h3").textContent = entry.title;
    node.querySelector(".entry-body").textContent = entry.body;

    const codeWrap = node.querySelector(".entry-code");
    const code = node.querySelector("code");
    if (entry.code) {
      code.textContent = entry.code;
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
  localEntries.push({
    title: formData.get("title"),
    category: formData.get("category"),
    tags: String(formData.get("tags") || "")
      .split(/[,\uFF0C]/)
      .map((tag) => tag.trim())
      .filter(Boolean),
    body: formData.get("body"),
    code: ""
  });
  saveLocalEntries(localEntries);
  quickAddForm.reset();
  render();
});

clearLocalBtn.addEventListener("click", () => {
  saveLocalEntries([]);
  render();
});

render();
