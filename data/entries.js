window.KB_ENTRIES = [
  {
    title: "Mac 基础快捷键",
    category: "Mac",
    tags: ["mac", "快捷键", "基础"],
    body: "最常用的一组：复制、粘贴、剪切、撤销、重做、全选、保存、查找。",
    code: "Command + C  复制\nCommand + V  粘贴\nCommand + X  剪切\nCommand + Z  撤销\nShift + Command + Z  重做\nCommand + A  全选\nCommand + S  保存\nCommand + F  查找"
  },
  {
    title: "Mac 截图与录屏",
    category: "Mac",
    tags: ["mac", "截图", "录屏"],
    body: "截图工具是 Mac 高频操作。按住 Control 可以把截图直接放入剪贴板。",
    code: "Shift + Command + 3  截取全屏\nShift + Command + 4  截取选区\nShift + Command + 4, 再按 Space  截取窗口\nShift + Command + 5  打开截图/录屏面板\nControl + 截图快捷键  保存到剪贴板"
  },
  {
    title: "Mac 窗口和应用切换",
    category: "Mac",
    tags: ["mac", "窗口", "效率"],
    body: "适合在多个应用、多个窗口之间快速切换。",
    code: "Command + Tab  切换应用\nCommand + `  在同一应用的窗口间切换\nCommand + H  隐藏当前应用\nOption + Command + H  隐藏其他应用\nControl + ↑  打开调度中心\nControl + ← / →  切换桌面"
  },
  {
    title: "Mac Finder 常用操作",
    category: "Mac",
    tags: ["mac", "finder", "文件"],
    body: "Finder 中常用的查看、移动、删除和路径操作。",
    code: "Command + N  新建 Finder 窗口\nShift + Command + N  新建文件夹\nCommand + Delete  移到废纸篓\nShift + Command + Delete  清倒废纸篓\nCommand + I  显示简介\nOption + Command + C  复制路径名"
  },
  {
    title: "Git 仓库初始化与克隆",
    category: "GitHub / Git",
    tags: ["git", "github", "仓库"],
    body: "开始一个仓库时最常用的命令。",
    code: "git init\ngit clone git@github.com:USER/REPO.git\ngit remote -v\ngit remote add origin git@github.com:USER/REPO.git"
  },
  {
    title: "Git 查看状态和历史",
    category: "GitHub / Git",
    tags: ["git", "状态", "历史"],
    body: "改代码前后都适合先看状态和最近提交。",
    code: "git status\ngit diff\ngit diff --staged\ngit log --oneline --graph --decorate -n 20\ngit show HEAD"
  },
  {
    title: "Git 提交基础流程",
    category: "GitHub / Git",
    tags: ["git", "commit", "提交"],
    body: "最常见的 add、commit、push 流程。",
    code: "git add .\ngit add path/to/file\ngit commit -m \"描述这次修改\"\ngit push origin main"
  },
  {
    title: "Git 分支操作",
    category: "GitHub / Git",
    tags: ["git", "branch", "分支"],
    body: "创建功能分支、切换分支、合并分支的基本命令。",
    code: "git branch\ngit switch -c feature/name\ngit switch main\ngit merge feature/name\ngit branch -d feature/name"
  },
  {
    title: "Git 拉取远端更新",
    category: "GitHub / Git",
    tags: ["git", "pull", "fetch"],
    body: "同步远端仓库时常用。多人协作时建议先看状态再拉取。",
    code: "git fetch origin\ngit pull origin main\ngit pull --rebase origin main"
  },
  {
    title: "Git 撤销常见操作",
    category: "GitHub / Git",
    tags: ["git", "撤销", "恢复"],
    body: "撤销命令要分清是撤销工作区、暂存区，还是提交记录。",
    code: "git restore path/to/file\ngit restore --staged path/to/file\ngit commit --amend\ngit revert COMMIT_SHA"
  },
  {
    title: "GitHub Pull Request 基本流程",
    category: "GitHub / Git",
    tags: ["github", "pull request", "协作"],
    body: "功能开发通常走分支和 PR，方便审查、讨论、合并。",
    code: "git switch -c feature/name\ngit add .\ngit commit -m \"实现某个功能\"\ngit push -u origin feature/name\n# 然后在 GitHub 上打开 Pull Request"
  },
  {
    title: "GitHub CLI 常用命令",
    category: "GitHub / Git",
    tags: ["github", "gh", "cli"],
    body: "如果安装了 GitHub CLI，可以直接在终端创建和查看 PR。",
    code: "gh auth login\ngh repo clone USER/REPO\ngh pr create --fill\ngh pr list\ngh pr view --web\ngh pr checks"
  },
  {
    title: "把 Public GitHub 项目发布成网页",
    category: "GitHub / Git",
    tags: ["github", "pages", "public", "网页", "部署"],
    body: "Public 仓库里的静态页面可以用 GitHub Pages 发布，别人就能通过网址直接访问网页，而不只是看代码。",
    code: "1. 打开 GitHub 仓库页面\n2. 确认仓库是 Public：Settings -> General -> Danger Zone -> Change visibility\n3. 进入 Settings -> Pages\n4. Source 选择 Deploy from a branch\n5. Branch 选择 main，Folder 选择 / root\n6. 点击 Save\n7. 等待几十秒到几分钟\n8. 访问 https://USERNAME.github.io/REPO/\n\n示例：\nhttps://tliu1999.github.io/knowledge-base/\n\n以后更新网页：\ngit add .\ngit commit -m \"Update knowledge base\"\ngit push"
  },
  {
    title: "对党员角色的理解",
    category: "党员角色",
    tags: ["党员", "责任", "先进性", "服务"],
    body: "在党的领导下，当今我们处于国家安康，人民幸福的时代，党员角色与过去为家国冲锋陷阵有所不同的是，党员更多的是榜样。成为党员，既是在约束自己，也是在潜移默化中引导他人做出正确的选择。",
    code: "可继续追问：\n1. 我在哪些场景里真正体现过“先做一步”？\n2. 先进性如何避免停留在口号？\n3. 面对利益冲突时，我会怎样排序个人、团队与组织？"
  },
  {
    title: "我现在最大的困难",
    category: "自我复盘",
    tags: ["实习", "坚持", "成长"],
    body: "找实习中，坚持下去必有回响",
    code: ""
  },
  {
    title: "你遇到最大的困难是什么",
    category: "自我复盘",
    tags: ["困难", "复盘", "成长", "面试"],
    body: "我的回答：我在听到这个问题时，一时之间我想不到我遇到的最大的困难是什么。仔细回想，我其实在成长过程中遇到过很多困难，但是我都淡化了这些过程，我也想不起来这些过程后的结果是不是好的。<br>如果非要我说一个困难，那可能是我的第一篇论文经历了一年才发表，这是个好的结果。但是因为时间不久，我还是会记得在这一年中，我经历了多少黑暗时刻，现在想起论文被拒，孤立无援时不会心悸，想起一个月从早到凌晨改返修论文时也没有了感觉。经过这一个思考历程，我觉得是可能是因为我遇到困难时，我不纠结于困难本身，而是一直在想着该怎么解决这个困难，一直在行动，所以困难就对于我来言在慢慢减弱。我觉得只要行动起来，无论是何种方式问题和困难都会解决，慢的时候可能是方式不对，还在摸索。现在在AI和互联网的帮助下，很多问题都不再是难题，因此在遇到困难和问题时，可以最大程度发挥我们的主观能动性：<br>1.自己先摸索，通过网络资源如谷歌搜索，甚至社交平台如微信搜索、小红书搜索，初步定位问题在哪，结合AI尝试解决；<br>2.自己的手段无法解决，沟通交流有时候能解决很多难题，尝试外援，并详细描述什么场景遇到什么问题困难，尝试了什么手段，结果如何；<br>3.不要放弃，坚持下去，通过这样的流程下来，很多时候问题都会解决，不再是困难。<br>AI的回答：这个问题不适合只讲挫折本身，更重要的是讲清楚：当时为什么难、我怎样拆解问题、求助或调整策略、最后留下了什么方法论。真正有价值的答案，是让别人看到我面对不确定性时的稳定性。",
    code: "回答结构：\n背景：困难出现在哪里，约束是什么。\n行动：我做了哪些判断、沟通和取舍。\n结果：事情怎样推进，指标或反馈如何。\n反思：这件事改变了我后来的哪一个工作习惯。"
  },
  {
    title: "产品经理最重要的是什么",
    category: "产品思考",
    tags: ["产品经理", "判断力", "用户", "取舍"],
    body: "我的回答：还在思考中\nAI的回答：产品经理最重要的不是会画原型或写需求，而是判断力：判断真实问题、关键用户、当前阶段最值得做的事，以及什么应该暂时不做。好的产品经理要把用户价值、业务目标、技术约束和团队节奏放在同一张桌子上做取舍。",
    code: "可展开成三层：\n1. 问题判断：这是用户真实痛点，还是表层诉求？\n2. 优先级判断：此刻做它，是否比其他事情更值得？\n3. 落地判断：团队能否用可控成本验证，而不是一次性赌大。"
  },
  {
    title: "AI 时代对产品经理的看法",
    category: "AI 时代",
    tags: ["AI", "产品经理", "能力", "趋势"],
    body: "我的回答：还在思考中<br>AI的回答：AI 会削弱一部分重复性的产品工作，比如资料整理、竞品初筛、文档草拟和原型辅助，但会放大产品经理的高阶能力：定义问题、设计验证路径、理解人和组织、判断什么值得自动化。AI 时代的产品经理更像“问题架构师”和“验证负责人”。",
    code: "我可以继续补充：\n- AI 能替代哪些产品工作？\n- AI 替代不了哪些判断？\n- 产品经理如何把 AI 当作工作流，而不是只当工具？"
  },
  {
    title: "如何判断一个想法值得做",
    category: "产品思考",
    tags: ["机会判断", "需求", "验证"],
    body: "我的回答：还在思考中<br>AI的回答：一个想法值得做，至少要同时回答三个问题：谁真的需要它、为什么现在需要、我们怎样用最小成本证明它。想法本身不稀缺，稀缺的是能把想法压缩成可验证假设，并尽快接触真实反馈。",
    code: "小检查表：\n用户是谁？\n痛点发生频率高吗？\n用户现在怎么解决？\n不做会有什么损失？\n最小验证方式是什么？"
  },
  {
    title: "我希望自己的思考呈现出什么气质",
    category: "自我复盘",
    tags: ["表达", "思考", "长期主义"],
    body: "我的回答：还在思考中<br>AI的回答：我希望自己的思考不是为了显得正确，而是为了更接近事实和行动。好的表达应该有立场，但不僵硬；有判断，但保留证据；能从具体经历里抽象出方法，也能再回到具体问题中检验。",
    code: "写作提醒：\n先写真实判断，再写理由。\n少用大词，多写场景。\n每个观点最好配一个经历、一个反例或一个可验证标准。"
  }
];
