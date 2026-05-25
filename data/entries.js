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
  }
];
