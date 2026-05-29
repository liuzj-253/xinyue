# 小心悦的日常

这是一个纯 HTML + CSS + JavaScript 的个人日常记录网站，不需要安装复杂框架。

## 文件结构

```text
心悦网站/
├── index.html
├── style.css
├── data.js
├── script.js
├── README.md
└── images/
    └── shiba-hero.png
```

## 每个文件是做什么的

- `index.html`：网页骨架，放标题、今日记录、照片墙、碎碎念这些区域。
- `style.css`：网页样式，控制颜色、圆角、阴影、手机适配、柴犬手账风背景。
- `data.js`：每天要改的内容都在这里，日期、标题、文字、图片路径都集中在这里。
- `script.js`：自动把 `data.js` 的内容显示到网页上，平时不用改。
- `images/`：放图片的文件夹，自己的照片都复制到这里。

## 每天怎么更新

1. 把今天要用的照片复制到 `images` 文件夹。
2. 双击 `edit-data.bat`，它会自动用记事本打开 `data.js`。
3. 修改 `today` 里面的日期、标题、文字和图片路径。
4. 保存后刷新浏览器页面。

如果你直接双击 `data.js` 没有进入编辑界面，这是正常的。因为 `.js` 是网页脚本文件，Windows 可能会用浏览器或脚本程序打开它。以后请双击 `edit-data.bat` 修改内容。

例如：

```js
today: {
  date: "2026年5月30日 星期六",
  title: "今天去散步啦",
  text: "今天阳光很好，记录一个很开心的小瞬间。",
  images: [
    "images/today-1.jpg",
    "images/today-2.jpg"
  ]
}
```

图片最多建议放 1-3 张。如果只想放 1 张，就只保留 1 行图片路径。

## 怎么改照片墙

打开 `data.js`，修改 `gallery`：

```js
{
  image: "images/photo-1.jpg",
  tag: "开心",
  title: "今天的小快乐"
}
```

想增加照片卡片，就复制一整段 `{ ... }`，改成新的图片和文字。

## 怎么改今日碎碎念

打开 `data.js`，修改 `notes`：

```js
{
  title: "今日碎碎念",
  text: "这里写今天的小心情。"
}
```

## 在浏览器打开网站

最简单的方法：

1. 找到 `index.html`。
2. 用鼠标双击它。
3. 浏览器会直接打开网站。

如果双击后图片没有刷新，可以按 `Ctrl + F5` 强制刷新。

## 部署到 GitHub Pages

1. 注册并登录 GitHub。
2. 新建一个仓库，比如 `xiaoxinyue-daily`。
3. 把本文件夹里的所有文件上传到仓库。
4. 打开仓库的 `Settings`。
5. 找到 `Pages`。
6. 在 `Build and deployment` 里选择 `Deploy from a branch`。
7. Branch 选择 `main`，文件夹选择 `/root`。
8. 保存后等一会儿，GitHub 会给你一个网址。

以后更新网站时，只要重新上传修改后的 `data.js` 和新图片就可以。
