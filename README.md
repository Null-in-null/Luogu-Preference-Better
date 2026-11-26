# Luogu preference better

洛谷（luogu.com.cn）界面优化的单文件用户脚本：统一圆角、主题壁纸与毛玻璃、明暗自适应、全屏搜索、卡片化。

## 安装

1. 浏览器装 [Tampermonkey](https://www.tampermonkey.net/)（或 Violentmonkey）。
2. 点这个链接，Tampermonkey 会弹出安装页：

https://raw.githubusercontent.com/Null-in-null/Luogu-Preference-Better/main/luogu-skin.user.js

> raw 地址有几分钟 CDN 缓存，刚推上去可能还是旧版，等一会儿或强制刷新。

脚本里已写好 `@updateURL` / `@downloadURL`，装完以后新版本会自动更新（Tampermonkey 默认 24 小时查一次，也可以在脚本列表点「检查更新」立刻查）。

## 功能

- 全站统一圆角与卡片化版面
- 跟随洛谷主题壁纸：顶栏、左右竖栏、卡片同一套半透明纸色，可开毛玻璃
- 明暗自动识别；暗色下左竖栏、顶栏、面包屑的字色取主题里配置的字体色
- 分区分层蒙版、犇犇块级圆角
- 全屏搜索：题目 / 用户 / 文章 / 比赛 / 讨论 / 题单 六类，支持模糊匹配
