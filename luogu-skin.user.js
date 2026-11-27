// ==UserScript==
// @name         Luogu preference better
// @namespace    https://www.luogu.com.cn/
// @version      1.0.0.1.0.9
// @description  洛谷界面优化：统一 8px 圆角、主题背景图与中景跟随、明暗自动识别、文章页分区分层蒙版、犇犇块级圆角、右下角全局搜索（题目/用户/帖子/文章/比赛/题单）。
// @author       luogu-skin
// @match        *://www.luogu.com.cn/*
// @match        *://luogu.com.cn/*
// @match        *://*.luogu.com.cn/*
// @match        *://luogu.com/*
// @match        *://*.luogu.com/*
// @run-at       document-start
// @noframes
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @connect      cdn.jsdelivr.net
// @connect      raw.githubusercontent.com
// @grant        unsafeWindow
// @updateURL    https://raw.githubusercontent.com/Null-in-null/Luogu-Preference-Better/main/luogu-skin.user.js
// @downloadURL  https://raw.githubusercontent.com/Null-in-null/Luogu-Preference-Better/main/luogu-skin.user.js
// ==/UserScript==
/*
 * 洛谷皮肤：圆角 · 主题壁纸跟随 · 明暗自适应 · 半透明纸色 · 磨砂 · 全局搜索 · 卡片化
 *
 * V1.0.0.1.0.9：修复了暗色下图表悬停浮层白底和统计卡先白后黑的bug，优化了首页统计卡的半透明模糊显示体验
 * V1.0.0.1.0.8：修复了切换页面后题号高亮消失需要刷新的bug，优化了页面切换时的显示体验
 * V1.0.0.1.0.7：修复了暗色下用户卡片先白后黑的bug，优化了用户卡片的半透明模糊显示体验
 * V1.0.0.1.0.6：修复了暗色下统计图表白底白字的bug，优化了暗色首页图表的显示体验
 * V1.0.0.1.0.5：修复了暗色白块诊断工具误报头像的bug，优化了白块问题的排查体验
 * V1.0.0.1.0.4：修复了暗色下白块清扫范围过窄的bug，优化了暗色首页和用户卡的显示体验
 * V1.0.0.1.0.3：修复了暗色下首页白块没被覆盖的bug，优化了暗色首页的阅读体验
 * V1.0.0.1.0.2：修复了暗色悬停高亮漏掉实心白的bug，优化了全站暗色悬停的显示体验
 * V1.0.0.1.0.1：新增了对 luogu.com 域名的支持，优化了换域名访问时的兼容体验
 * V1.0.0.0.5.1：修复了暗色悬停高亮只在首页生效的bug，优化了全站暗色悬停的显示体验
 * V1.0.0.0.4.9：修正了版本日志的措辞，优化了更新说明的阅读体验
 * V1.0.0.0.4.8：修正了功能描述与实际不符的bug，优化了脚本介绍的用户体验
 * V1.0.0.0.4.7：修复了暗色首页悬停高亮发白的bug，优化了暗色下的视觉体验
 * V1.0.0.0.4.6：修复了更新按钮指向过期源的bug，优化了检查更新的用户体验
 * V1.0.0.0.4.5：修复了换页后题号整页发灰的bug，优化了翻页浏览的用户体验
 * V1.0.0.0.4.4：修复了更新按钮缺少主题时变蓝的bug，优化了按钮标题的显示体验
 * V1.0.0.0.4.3：修复了搜索超时误报 0 条的bug，优化了弱网下的搜索体验
 * V1.0.0.0.4.2：修复了团队帖白名单不全的bug，优化了团队帖搜索的准确性
 * V1.0.0.0.4.1：修复了模糊搜索失效和题单异常的bug，优化了搜索的速度与命中率
 * V1.0.0.0.4.0：修复了检查更新结果不准的bug，优化了版本提示的用户体验
 * V1.0.0.0.3.9：修复了自己团队帖子搜不到的bug，优化了自己团队的搜索体验
 * V1.0.0.0.3.8：修复了更新按钮配色不统一的bug，优化了按钮的视觉体验
 * V1.0.0.0.3.7：修复了搜索结果混入其他团队帖子的bug，优化了边搜边出的响应体验
 * V1.0.0.0.3.6：新增了首页检查脚本更新的入口，优化了版本更新的用户体验
 * V1.0.0.0.3.5：修复了自己和已拉黑用户仍显示关注按钮的bug，优化了用户卡片的用户体验
 * V1.0.0.0.3.4：优化了脚本自动更新的用户体验
 * V1.0.0.0.3.3：修复了首页暗色下左侧栏字色闪动的bug，优化了竖栏的可读性
 * V1.0.0.0.3.2：修复了暗色下左侧栏字色闪动的bug，优化了主题切换的用户体验
 * V1.0.0.0.3.1：修复了个人中心滚动发沉的bug，优化了长页面的用户体验
 * V1.0.0.0.2.9：修复了个人中心卡死的bug，优化了个性化卡片出现的用户体验
 * V1.0.0.0.2.8：修复了别人主页「…」下拉里多出主题颜色的bug，优化了个性化卡片弹出的用户体验
 * V1.0.0.0.2.7：修复了个性化卡片在文章页低一截的bug
 * V1.0.0.0.2.6：修复了个性化卡片跟随滚动的bug
 * V1.0.0.0.2.4：修复了个性化卡片位置和原站不一致的bug
 * V1.0.0.0.2.3：优化了代码太长影响阅读的用户体验
 * V1.0.0.0.2.2：修复了侧栏悬停出两层影的bug
 * V1.0.0.0.2.1：修复了「更改封面」弹窗被压住的bug
 * V1.0.0.0.1.9：修复了个性化卡片跟着滚的bug
 * V1.0.0.0.1.8：修复了搜索不模糊的bug
 * V1.0.0.0.1.7：优化了搜索太慢的用户体验
 * V1.0.0.0.1.6：修复了悬停气泡位置偏的bug
 * V1.0.0.0.1.5：优化了代码排版的用户体验
 * V1.0.0.0.1.4：修复了翻页后题号掉色的bug
 * V1.0.0.0.1.3：修复了个性化面板跑偏的bug
 * V1.0.0.0.1.2：修复了翻页后题号掉色的bug
 * V1.0.0.0.1.1：修复了改勾选结果不更新的bug
 * V1.0.0.0.0.9：修复了帖子搜不出的bug，优化了模糊匹配的用户体验
 * V1.0.0.0.0.8：修复了比赛气泡位置偏的bug
 * V1.0.0.0.0.7：修复了提及名字不出用户卡的bug
 * V1.0.0.0.0.6：修复了个性化卡片偏左的bug
 * V1.0.0.0.0.5：优化了代码排版和注释的用户体验
 * V1.0.0.0.0.4：修复了切主题要刷新的bug
 * V1.0.0.0.0.2：修复了页脚白块偏白的bug
 * V1.0.0.0.0.1：首个发布版，功能并入——8px 圆角、主题壁纸跟随、明暗自适应、半透明纸色与磨砂、
 *                全局搜索、题号难度色带、个人中心卡片化、下拉与气泡定位
 */
;(function(){'use strict'
/*带 @grant 时脚本跑在沙箱里，版本号要挂到 unsafeWindow 才查得到*/
	const VERSION='V1.0.0.1.0.9';const WIN=typeof unsafeWindow!=='undefined'?unsafeWindow:window
/*主站有两套域名：luogu.com.cn 和 luogu.com（.com 在部分地区被 Cloudflare 挡成 451 提示页）。
	cookie 的 domain 必须落在当前域名下，写死 .com.cn 在 .com 上会被浏览器静默丢掉*/
	const HOSTNAME=String(location.hostname||'')
	const SITE_SUFFIX=/(^|\.)luogu\.com$/i.test(HOSTNAME)?'.luogu.com':'.luogu.com.cn'
/*部分环境里 unsafeWindow 没有 addEventListener，统一走这里*/
	const onWin=(ev,fn,opt)=>{const t=WIN&&typeof WIN.addEventListener==='function'?WIN:window;t.addEventListener(ev,fn,opt)}
/*脚本可能被重复注入（刷新/SPA/扩展重载），只认第一次*/
	try{if(WIN.__lgvBoot===VERSION)return
		WIN.__lgvBoot=VERSION}catch(e){}
	try{WIN.__lgvVer=VERSION;document.documentElement.setAttribute('data-lgv-ver',VERSION);console.info('%c[lgv]','color:#0e90d2','skin',VERSION)}catch(e){}
/*===== 高亮 / 光标 / 选区：方角，配色交回站点 ===== 不打 .lgv-r、不打半透明底色*/
	const NO_ROUND=[
	'mark',
	'[class*="highlight"]',
	'[class*="Highlight"]',
	'[class*="caret"]',
	'[class*="cursor"]',
	'[class*="Cursor"]',
	'[class*="insert"]',
	'[class*="Insert"]',
	'[class*="selection"]',
	'[class*="Selection"]',
	'[class*="active-line"]',
	'[class*="activeLine"]',
	'[class*="activeline"]',
	'[class*="current-line"]',
	'[class*="currentLine"]',
	'.ace_active-line',
	'.ace_marker-layer .ace_active-line',
	'.CodeMirror-activeline-background',
	'.CodeMirror-selected',
	'.CodeMirror-cursor',
	'.lgv-noround',
	].join(',')
	const NO_ROUND_CLS=[
	'lgv-r',
	'lgv-chip',
	'lgv-chip-solid',
	'lgv-alpha',
	'lgv-feed',
	'lgv-comment',
	'lgv-top-r',
	'lgv-bot-r',
	'lgv-hug',
	'lgv-flat',
	'lgv-noframe',
	'lgv-a80',
	'lgv-a65',
	'lgv-clear',
	]
	const NO_ROUND_VAR=['--lgv-rgb','--lgv-feed-rgb','--lgv-chip-bg'];let extraSel=''
	function isNoRound(el){if(!el||el.nodeType!==1||!el.matches)return false
		try{return el.matches(NO_ROUND)||(!!extraSel&&el.matches(extraSel))}catch(e){return false}}
	const EDITOR_SEL= 'textarea,input,[contenteditable=""],[contenteditable="true"],[contenteditable="plaintext-only"],[class*="editor"],[class*="Editor"]'
	function isEditor(el){if(!el||el.nodeType!==1||!el.matches)return false
		try{return el.matches(EDITOR_SEL)}catch(e){return false}}
	function cleanOne(el){if(!el||el.nodeType!==1||!el.classList)return false
		let hit=false
		for(const c of NO_ROUND_CLS){if(el.classList.contains(c)){el.classList.remove(c);hit=true}}
		if(el.hasAttribute('data-lgv')){const keep=(el.getAttribute('data-lgv')||'') .split(/\s+/) .filter(Boolean) .filter((c)=>NO_ROUND_CLS.indexOf(c)===-1)
			if(keep.length)el.setAttribute('data-lgv',keep.join(' '))
			else el.removeAttribute('data-lgv')}
		for(const p of NO_ROUND_VAR){if(el.style&&el.style.getPropertyValue(p))el.style.removeProperty(p)}
		return hit}
	function unroundHighlights(){let list;const sel=extraSel?NO_ROUND+','+extraSel:NO_ROUND
		try{list=document.querySelectorAll(sel)}catch(e){return}
		let n=0
		for(const el of list){if(++n>400)break
			if(cleanOne(el)&&n<=6){console.log('%c[lgv]','color:#0e90d2','高亮块还原方角/原色:',el.className)}
			el.querySelectorAll('.lgv-r,.lgv-chip,.lgv-chip-solid,.lgv-alpha,.lgv-comment,.lgv-feed,.lgv-a80,.lgv-a65').forEach(cleanOne)}
	}
	const CSS=`
 :root{--lgv-paper:255,255,255;--lgv-r:8px;--lgv-tag-r:2px;--lgv-sb-bg:255,255,255;--lgv-sb-fg:0,0,0;--lgv-hair:rgba(28,40,56,.10);--lgv-fl:0 1px 2px rgba(28,40,56,.10),0 3px 9px rgba(28,40,56,.17),0 7px 18px rgba(28,40,56,.10);
	--lgv-fl2:0 2px 4px rgba(28,40,56,.13),0 6px 16px rgba(28,40,56,.21),0 10px 26px rgba(28,40,56,.11)}
	/*犇犇「我关注的 / 我发布的」切换条：站点默认直角，补上 8px 圆角（含 hover/active）*/ html body .feed-selector,html body .feed-selector>a{border-radius:var(--lgv-r)!important}
	html body .feed-selector>a:hover,html body .feed-selector>a:active,html body .feed-selector>a:focus{border-radius:var(--lgv-r)!important}
	/*大块 8px；小标签（Tab、徽章、题目标签、Rated 等）统一 3px*/ .lgv-r{border-radius:var(--lgv-r)!important}
	.lgv-chip{border-radius:var(--lgv-tag-r)!important}
	/*个人中心整块卡：首帧就是上圆下直，别等 JS 打标记才改，否则站点 4px 会闪一下*/html body .l-card:has(>.user-header-top){border-radius:8px 8px 0 0!important}
	html body .user-header-bottom{border-radius:0!important}
	/*滚动条不常驻：没有滚动条的页面（/chat 等）右侧不能留 10px 空槽，主区域要铺满*//*站内跳转不做淡入/位移动画*/
	/*站内跳转不做淡入/位移动画*/
	/*首帧别动：样式是脚本后贴的，带头画会让内容从别处滑过来*/
 html.lgv-boot *,html.lgv-boot{transition:none!important;animation:none!important} .lgv-notr,.lgv-notr *{transition:none!important;animation:none!important}
	/*hover / active / focus 沿用同一圆角*/ .lgv-r:hover,.lgv-r:active,.lgv-r:focus{border-radius:var(--lgv-r)!important}
 .lgv-chip:hover,.lgv-chip:active,.lgv-chip:focus{border-radius:var(--lgv-tag-r)!important} html body a.lgv-chip,html body button.lgv-chip,html body span.lgv-chip,html body li.lgv-chip{border-radius:var(--lgv-tag-r)!important}
	/*选项标签（犇犇 Tab、个人主页 Tab 等）：底色 80% 不透明，文字保持清晰*/ .lgv-chip.lgv-alpha:not(:hover){background-color:var(--lgv-chip-bg)!important}
	/*专栏/题解正文纸面：90% 不透明，透出主题背景*/ /*蒙版只叠在背景图上方，不动元素自身颜色*/ /*主题开毛玻璃时，板也跟着毛玻璃*/
	/*犇犇/评论这类自绘半透明面，玻璃档同样降一档*/
 html.lgv-glass-all :is(.lgv-feed,.lgv-comment):is([data-lgv-gb],[data-lgv-gbs]){background-color:rgba(var(--lgv-feed-rgb,var(--lgv-paper,29,32,37)),.58)!important}
	/*毛玻璃开：纸面只留一层、浓度 .68（白就地白、黑就地黑），不是全透也不是实板。
	站点把纸画在 ::before 上的，就改那一层、并把元素自身底色让开——两层叠起来会变成又实又糊的一坨*/
 html.lgv-glass-all [data-lgv-pb]{background-color:transparent!important} html.lgv-glass-all [data-lgv-pb]:is([data-lgv-gb],[data-lgv-gbs])::before{background-color:rgba(var(--lgv-paper,29,32,37),.58)!important;
	backdrop-filter:none!important;-webkit-backdrop-filter:none!important}
	/*只有「这块面真的挂了模糊」才降浓度：没开毛玻璃时一个标记都没有，纸面就一定是 .82/.75 实底*/
 html.lgv-glass-all body :is(.l-card,.am-panel,[data-lgv-hp],[data-lgv-gb],[data-lgv-gbs]):not([data-lgv-pb]):is([data-lgv-gb],[data-lgv-gbs]){background-color:rgba(var(--lgv-paper,29,32,37),.58)!important}
	/*首页的纸面是 .lg-article（不是 .l-card/.am-panel），站点也没给模糊，玻璃开了要整块开：亮暗同一档*/
	html.lgv-glass-all .lg-index-content :is(.lg-article,.am-panel)[data-lgv-gb]{background-color:rgba(var(--lgv-paper,255,255,255),.58)!important;
	backdrop-filter:var(--lgv-blur,blur(12px) saturate(1.3))!important;-webkit-backdrop-filter:var(--lgv-blur,blur(12px) saturate(1.3))!important}
	/*毛玻璃只补站点没给模糊的纸面，补过打 data-lgv-gb，免得叠两层发亮*/
 html.lgv-glass-all [data-lgv-gb]{backdrop-filter:var(--lgv-blur,blur(12px) saturate(1.3))!important;-webkit-backdrop-filter:var(--lgv-blur,blur(12px) saturate(1.3))!important}
	/*站点 background 带 !important 时，用更高特异性压过去*/ html body .lgv-feed,html body .lgv-comment{background-color:rgba(var(--lgv-feed-rgb,var(--lgv-paper,
	29,32,37)),.8)!important;border-radius:var(--lgv-r)!important}
	/*评论：小圆角 + 80% 透明（同犇犇动态）*/ .lgv-comment{border-radius:var(--lgv-r)!important;background-color:rgba(var(--lgv-feed-rgb,var(--lgv-paper,29,32,37)),
	.8)!important}
	/*话语框外面那圈蓝线：跟着话语框一起圆*/ .lgv-hug{border-radius:var(--lgv-r)!important}
	.lgv-hug::before,.lgv-hug::after{border-radius:inherit!important}
	/*上下拼接的两半：上半只圆上角，下半只圆下角*/ .lgv-top-r{border-radius:var(--lgv-r) var(--lgv-r) 0 0!important}
 .lgv-bot-r{border-radius:0 0 var(--lgv-r) var(--lgv-r)!important} .lgv-flat{border-radius:0!important}
 .lgv-feed.lgv-top-r{border-radius:var(--lgv-r) var(--lgv-r) 0 0!important} .lgv-feed.lgv-bot-r{border-radius:0 0 var(--lgv-r) var(--lgv-r)!important}
	/*犇犇每条动态：小圆角 + 80% 透明*/ .lgv-feed{border-radius:var(--lgv-r)!important;background-color:rgba(var(--lgv-feed-rgb,var(--lgv-paper,29,
32,37)),.8)!important}
	/*只调 alpha，不改色相*/ .lgv-a80{background-color:rgba(var(--lgv-rgb,var(--lgv-paper,29,32,37)),.8)!important}
	.lgv-a65{background-color:rgba(var(--lgv-rgb,var(--lgv-paper,29,32,37)),.65)!important}
	/*专栏那页的蒙版比别处深 5 个百分点*/
 .lgv-a85{background-color:rgba(var(--lgv-rgb,var(--lgv-paper,29,32,37)),.85)!important} .lgv-a70{background-color:rgba(var(--lgv-rgb,var(--lgv-paper,29,32,37)),.7)!important}
	/*玻璃生效：这一档纸面统一再让 10 个百分点，磨砂才透得出来*/ html.lgv-glass-all .lgv-a85{background-color:rgba(var(--lgv-rgb,var(--lgv-paper,29,32,37)),.75)!important}
 html.lgv-glass-all .lgv-a80{background-color:rgba(var(--lgv-rgb,var(--lgv-paper,29,32,37)),.7)!important} html.lgv-glass-all .lgv-a70{background-color:rgba(var(--lgv-rgb,var(--lgv-paper,29,32,37)),.6)!important}
	html.lgv-glass-all .lgv-a65{background-color:rgba(var(--lgv-rgb,var(--lgv-paper,29,32,37)),.55)!important}
	/*比赛题目打钩（自己=绿，队友=灰）*/ .contest-problem-switch a.contest-problem.lgv-has-cmark{overflow:visible!important}
 .lgv-cmark{position:absolute;right:-5px;top:-5px;width:15px;height:15px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-style:normal;font-size:10px;line-height:1;font-weight:700;
 color:#fff;box-shadow:0 0 0 2px rgba(255,255,255,.9);pointer-events:none;z-index:3} .lgv-cmark.lgv-ok{background:#52c41a}
	.lgv-cmark.lgv-team{background:#b9b9b9}
	/*隐藏站点自带的悬浮用户卡*/ .l-card.float-card{display:none!important;visibility:hidden!important;pointer-events:none!important}
	.dropdown.shown:has(>.l-card.float-card){display:none!important}
	/*蒙版单独一层：盖在主题背景图之上、内容之下，只调透明度不改颜色*/ html.lgv-mask body{position:relative}
	/*蒙版只盖正文一条；用真元素，body::before 当 backdrop 根取不到壁纸*/ #lgv-band{display:none}
 html.lgv-mask #lgv-band{display:block;position:absolute;left:0;top:var(--lgv-band-a,0px);width:100%;height:calc(var(--lgv-band-b,0px) - var(--lgv-band-a,0px));background:var(--lgv-band-tone,rgba(255,255,255,.55));
	pointer-events:none;z-index:0}
	/*毛玻璃：糊的就是这条蒙版本身（整条带宽一起糊），不再只糊正文那张卡、也不铺满整屏*/ /*模糊只在蒙版内部：把这条蒙版上下各多铺 28px 再 clip 回来。backdrop-filter 的卷积核在元素边界会被夹取，
	贴着边界的那一圈就会出现一条「渐变」似的糊边（上边糊进 banner、下边糊进评论区）。放大后裁掉，接缝就是硬边*/
	/*只用 blur，不加 saturate：壁纸本身的颜色被 saturate 放大后，整条模糊区看着就是一层彩色渐变*/html.lgv-glass.lgv-mask #lgv-band{backdrop-filter:blur(var(--lgv-band-br,14px));
	-webkit-backdrop-filter:blur(var(--lgv-band-br,14px))}
	/*v-popper 按视口算坐标，外层只要有 filter/transform 就偏，这里把口径钉死*/
 .v-popper__popper{filter:none!important;backdrop-filter:none!important;contain:none!important;z-index:2147481000!important}
 .v-popper__popper *{filter:none!important;backdrop-filter:none!important} html.lgv-tipopen .lgv-noblur{filter:none!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;
	transform:none!important;perspective:none!important;contain:none!important;will-change:auto!important}
	/*页脚那块纯白：直接把这块自己的底色改成 35%（不叠蒙版），开毛玻璃时这块自己糊*/
	html.lgv-dark footer,html.lgv-dark .lfe-footer{background-color:rgba(var(--lgv-mk,0,0,0),.35)!important}
/*站点自己的用户悬浮卡（右上角「个性化卡片」）：暗色下还是白纸黑字，这里统一压成纸色。
	类名各家写法不一，用属性片段兜住 user-card / usercard / float-card 三种常见命名*/
 html.lgv-dark body :is([class*="user-card"],[class*="usercard"],[class*="float-card"]):not(#lgv-ucard){background-color:rgba(29,32,37,.97)!important;color:#e6e6e6!important;border-color:rgba(255,255,255,.14)!important;box-shadow:0 14px 38px rgba(0,0,0,.5),0 0 0 1px rgba(255,255,255,.12)!important}
 html.lgv-dark body :is([class*="user-card"],[class*="usercard"],[class*="float-card"]):not(#lgv-ucard) :is(h1,h2,h3,h4,p,span,div,a,li,strong,b,em){color:#e6e6e6!important}
 html.lgv-dark body :is([class*="user-card"],[class*="usercard"],[class*="float-card"]):not(#lgv-ucard) :is(a,button):hover{background-color:rgba(255,255,255,.10)!important}
/*Highcharts 的图表背景是 SVG 里一个 fill="#ffffff" 的 rect，不是 CSS 背景色，
	所以按 background-color 判白的清扫永远摸不到它——这是首页「累计通过数 / 当日通过数」
	那块一直白着的真正原因。fill 是 SVG 属性，CSS 可以盖住它。*/
 /*首页「累计通过数 / 当日通过数」那张卡：半透明 + 恒定磨砂（不读 --lgv-glass，毛玻璃关掉也模糊）*/
 html.lgv-dark .lg-index-stat,html.lgv-dark .lg-article.lg-index-stat{
	background:rgba(var(--lgv-paper),.55)!important;
	backdrop-filter:blur(14px) saturate(1.2)!important;-webkit-backdrop-filter:blur(14px) saturate(1.2)!important}
 html.lgv-dark .lg-index-stat .highcharts-container{border-radius:6px;overflow:hidden}
 html.lgv-dark .highcharts-background{fill:transparent!important}
 html.lgv-dark .highcharts-plot-background,html.lgv-dark .highcharts-plot-border{fill:transparent!important;stroke:rgba(255,255,255,.12)!important}
 html.lgv-dark .highcharts-grid-line,html.lgv-dark .highcharts-grid-line path,html.lgv-dark .highcharts-grid path{stroke:rgba(255,255,255,.10)!important}
 html.lgv-dark .highcharts-axis-line,html.lgv-dark .highcharts-tick,html.lgv-dark .highcharts-axis path{stroke:rgba(255,255,255,.20)!important}
 html.lgv-dark .highcharts-axis-labels text,html.lgv-dark .highcharts-title,html.lgv-dark .highcharts-subtitle,html.lgv-dark .highcharts-legend-item text,html.lgv-dark .highcharts-credits{fill:#c9c9c9!important;color:#c9c9c9!important}
 html.lgv-dark .highcharts-legend-item.highcharts-legend-item-hidden text{fill:#7a7a7a!important}
 /*悬停跟随鼠标那块浮层：底色由 tooltip 自己的 <rect fill> 画（Highcharts 默认 rgba(247,247,247,.85)），
	不属于「表格背景」，所以只压 .highcharts-background 时它照样白。各种结构一并覆盖。*/
 html.lgv-dark .highcharts-tooltip rect,html.lgv-dark .highcharts-tooltip .highcharts-tooltip-box,
 html.lgv-dark rect.highcharts-tooltip-box,html.lgv-dark .highcharts-tooltip-box{fill:rgba(29,32,37,.97)!important;stroke:rgba(255,255,255,.18)!important}
 html.lgv-dark .highcharts-tooltip text,html.lgv-dark .highcharts-tooltip tspan,
 html.lgv-dark .highcharts-tooltip .highcharts-tooltip-header{fill:#f2f2f2!important;color:#f2f2f2!important}
 html.lgv-dark .highcharts-label-box,html.lgv-dark .highcharts-tooltip .highcharts-label-box{fill:rgba(29,32,37,.94)!important;stroke:rgba(255,255,255,.16)!important}
 html.lgv-dark .highcharts-data-label text,html.lgv-dark .highcharts-label text{fill:#e8e8e8!important}
 /*useHTML 的 tooltip 是 div，颜色在 style 上*/
 html.lgv-dark .highcharts-tooltip-container,html.lgv-dark div.highcharts-tooltip{
	background:rgba(29,32,37,.97)!important;border-color:rgba(255,255,255,.18)!important;color:#f2f2f2!important}
 html.lgv-dark .highcharts-no-data text{fill:#9a9a9a!important}
 html.lgv-dark .highcharts-navigator-mask-inside{fill:rgba(255,255,255,.06)!important}
 html.lgv-dark .highcharts-scrollbar-track{fill:rgba(255,255,255,.08)!important;stroke:rgba(255,255,255,.14)!important}
 html.lgv-dark .highcharts-scrollbar-thumb{fill:rgba(255,255,255,.24)!important;stroke:rgba(255,255,255,.3)!important}
 html.lgv-dark .highcharts-button-box{fill:rgba(255,255,255,.10)!important;stroke:rgba(255,255,255,.2)!important}
 html.lgv-dark .highcharts-button-symbol{stroke:#c9c9c9!important}
 html.lgv-glass.lgv-dark footer,html.lgv-glass.lgv-dark .lfe-footer,html.lgv-glass-all.lgv-dark footer,html.lgv-glass-all.lgv-dark .lfe-footer{backdrop-filter:blur(var(--lgv-band-br,
	14px))!important;-webkit-backdrop-filter:blur(var(--lgv-band-br,14px))!important}
	/*最下方那块原本是纯白的：直接把这块自己的底色改成 35% 不透明度（不叠蒙版），开毛玻璃时这块自己糊*/
 html.lgv-glass.lgv-dark .lgv-botwhite,html.lgv-glass-all.lgv-dark .lgv-botwhite{backdrop-filter:blur(var(--lgv-band-br,14px))!important;-webkit-backdrop-filter:blur(var(--lgv-band-br,14px))!important}
	/*个性化下拉：出现时不要任何过渡/动画（站点原本带 opacity+transform 的 transition，看着像滑出来）*/
 .dropdown.shown{transition:none!important;animation:none!important} .dropdown.shown *{animation:none!important}
 #lgv-band-blur{display:none} html.lgv-mask #lgv-band-up{display:block;position:absolute;left:0;top:0;width:100%;height:var(--lgv-band-a,0px);background:rgba(var(--lgv-mk,255,255,255),.25);pointer-events:none;z-index:-1}
 html.lgv-mask #lgv-band-dn{display:block;position:absolute;left:0;top:var(--lgv-band-b,0px);width:100%;height:calc(var(--lgv-band-h,0px) - var(--lgv-band-b,0px));background:rgba(var(--lgv-mk,255,255,255),.25);
	pointer-events:none;z-index:-1}
	/*最下方那条（页脚/纯白带）：45%，开毛玻璃时才一起糊*/
 @keyframes lgv-mask-in{from{opacity:0} to{opacity:1}
	}
	/*首页轮播广告：容器自己裁圆角，切图时也不会变方*/ .lgv-ad-box{background-color:transparent!important;border:0!important;
 box-shadow:none!important;border-radius:var(--lgv-r)!important;overflow:hidden!important;isolation:isolate} .lgv-ad-box img{transform:translateY(2px)}
	/*犇犇：两个方框上下拼接，上面那块只圆上两角，下面那块只圆下两角*/ .lgv-benben{border-radius:var(--lgv-r)!important}
 .lgv-benben-top{border-radius:var(--lgv-r) var(--lgv-r) 0 0!important} .lgv-benben-bot{border-radius:0 0 var(--lgv-r) var(--lgv-r)!important}
	/*按钮、输入、图片、表格：全部同一个圆角*/ button,[type="submit"],[type="button"],[type="reset"],.am-btn,.btn,[class*="btn"],[role="button"],a.am-btn,
button[class]:not([class*="lgv"]),input,textarea,select,table,pre,blockquote,kbd{border-radius:var(--lgv-r)!important}
	/*比赛模块那些 OI / IOI / Rated 小徽章（.am-badge.am-radius）恢复站点自己的 2px，别跟着 8px 圆角走*/ html body .am-badge.am-radius{border-radius:2px!important}
 img{border-radius:var(--lgv-r)} img[src*="usericon"],img[src*="avatar"],img[src*="headimg"]{border-radius:50%!important}
	/*主题背景图：原图铺满，不叠任何蒙版；html 也铺一份，否则滚动条那条白边露在外面*//*滚动条：亮色整条白、暗色整条黑，滑块取反色；新版内核走标准属性，老内核走 ::-webkit 那套*/ /*主滚动条：原生那条收成 0，浮层滑块由 JS 画在内容上方（见 sbBoot）*/html{
scrollbar-width:none} html::-webkit-scrollbar{width:0;height:0}
 #lgv-sbf{position:fixed;right:3px;top:0;width:5px;border-radius:5px;background:rgba(var(--lgv-sb-fg),.34);opacity:0;transition:opacity .22s ease;z-index:2147483040;will-change:transform,height;cursor:grab}
 #lgv-sbf:hover{background:rgba(var(--lgv-sb-fg),.52)} #lgv-sbf.lgv-drag{cursor:grabbing;background:rgba(var(--lgv-sb-fg),.6)}
	/*左边栏自己的滚动条（窗口矮时才出现）：轨道透明，只留一条半透明圆角滑块，别再是一根灰杠*/html body .sidebar.lside{scrollbar-width:thin;
 scrollbar-color:rgba(var(--lgv-sb-fg),.26) transparent} html body .sidebar.lside::-webkit-scrollbar{width:5px;height:5px}
 html body .sidebar.lside::-webkit-scrollbar-track,html body .sidebar.lside::-webkit-scrollbar-corner{background:transparent} html body .sidebar.lside::-webkit-scrollbar-thumb{background:rgba(var(--lgv-sb-fg),.26);border-radius:999px}
	html body .sidebar.lside::-webkit-scrollbar-thumb:hover{background:rgba(var(--lgv-sb-fg),.5)}
	/*站内其它滚动条（题面标签框、代码块、评测量表…横竖都算）：跟左栏同款 5px 透明轨道 + 半透明圆角滑块*/html body *{scrollbar-width:thin;
 scrollbar-color:rgba(var(--lgv-sb-fg),.28) transparent} html body *::-webkit-scrollbar{width:5px;height:5px}
 html body *::-webkit-scrollbar-track,html body *::-webkit-scrollbar-corner{background:transparent} html body *::-webkit-scrollbar-thumb{background:rgba(var(--lgv-sb-fg),.28);border-radius:999px}
	html body *::-webkit-scrollbar-thumb:hover{background:rgba(var(--lgv-sb-fg),.5)}
	/*题号链接：难度色由行内 color 给，暗色下整体提亮才看得清*/a.lgv-pid{text-decoration:none;font-weight:700;cursor:pointer;
 color:inherit!important} a.lgv-auto,a.lgv-auto:visited{color:inherit!important;font-weight:700}
 .lgv-ptx{font-style:normal;font-weight:inherit;color:inherit} a.lgv-pid:hover{text-decoration:underline}
	/*练习页：题号文字保持原色，难度用一条半高色带压在字符下半截（像荧光笔），不跟主题混*/.lgv-pid[data-lgv-hl]{position:relative;z-index:0}
 .lgv-pid[data-lgv-hl]::after{content:'';position:absolute;left:-2px;right:-2px;bottom:.02em;height:.52em;background:var(--lgv-hl);opacity:.65;border-radius:2px;z-index:-1}
	/*暗色下色带压到 .35，浅色正文压在浅色带上才看得清；浅色页保持 .65*/
	html.lgv-dark .lgv-pid[data-lgv-hl]::after{opacity:.35}
	/*比赛页题面切换器：选中项原本是 80% 实心蓝，糊成一片；改成极浅蓝 + 一圈细描边（同时喂 --lgv-chip-bg，压过 .lgv-chip 那条 80% 底色）*/html body .contest-problem-switch a.contest-problem:is(.router-link-active,
 .current){--lgv-chip-bg:rgba(52,152,219,.09);background:rgba(52,152,219,.09)!important;color:rgb(52,152,219)!important;box-shadow:inset 0 0 0 1px rgba(52,152,219,.34)!important}
	html body .contest-problem-switch a.contest-problem:is(.router-link-active,.current):hover{background:rgba(52,152,219,.15)!important}
 html.lgv-bg{background-color:var(--lgv-mid,transparent)!important;background-image:var(--lgv-bg)!important;background-size:var(--lgv-bg-size,cover)!important;background-position:var(--lgv-bg-pos,center)!important;
 background-attachment:fixed!important;background-repeat:no-repeat!important} html.lgv-bg body{background-color:var(--lgv-mid,transparent)!important;background-image:var(--lgv-bg)!important;
 background-size:var(--lgv-bg-size,cover)!important;background-position:var(--lgv-bg-pos,center)!important;background-attachment:fixed!important;background-repeat:no-repeat!important}
	/*蒙版在 z-index:-1，backdrop-filter 取不到下层，改成把这层壁纸副本自己 blur*/
	html.lgv-bg #app,html.lgv-bg #app-old,html.lgv-bg main{background-color:transparent!important}
	/*主页会用一个 rgb(239,239,239) 的整页底色把图盖住，这里清掉*/ .lgv-clear{background-color:transparent!important}
	/*筛选栏里"所属题库"那一组的小联合框：去掉框与底色，只留文字*/ .lgv-noframe{background:none!important;border:0!important;
	box-shadow:none!important;border-radius:0!important}
	/*===== 高亮 / 光标 / 当前插入位置：一律方角，颜色一律交给站点自己 =====*/ /*用 html body 抬高特异性，压过上面的 .lgv-r / .lgv-chip 等 !important*/ html body mark,html body [class*="highlight"],
	html body [class*="Highlight"],html body [class*="caret"],html body [class*="cursor"],html body [class*="Cursor"],html body [class*="insert"],
	html body [class*="Insert"],html body [class*="selection"],html body [class*="Selection"],html body [class*="active-line"],html body [class*="activeLine"],
	html body [class*="activeline"],html body [class*="current-line"],html body [class*="currentLine"],html body .ace_active-line,html body .CodeMirror-activeline-background,
 html body .CodeMirror-selected,html body .CodeMirror-cursor,html body .lgv-noround{border-radius:0!important;background-clip:border-box!important}
	/*这些块即使被上面的扫描器打了 .lgv-r / .lgv-comment，也不留圆角*/ html body mark.lgv-r,html body [class*="highlight"].lgv-r,html body [class*="caret"].lgv-r,
html body [class*="insert"].lgv-r,html body [class*="selection"].lgv-r,html body [class*="active-line"].lgv-r{border-radius:0!important}
	/*原生按钮 hover 不改形状*/ html body a[class*="btn"]:hover,html body button[class*="btn"]:hover,html body a[class*="button"]:hover,html body button[class*="button"]:hover,
	html body input[type="submit"]:hover,html body input[type="button"]:hover{border-radius:6px!important}
	html body a[class*="btn"],html body button[class*="btn"],html body a[class*="button"],html body button[class*="button"]{border-radius:6px!important}
	/*── 最终：小标签 3px、按钮 6px，hover 与常态一致；顶栏一律不改 ──*/ html body a[class]:not(.top-bar a[class]),html body a[class]:not(.top-bar a[class]):hover,
html body a[class]:not(.top-bar a[class]):active,
	html body button:not(.top-bar button),html body button:not(.top-bar button):hover,html body button:not(.top-bar button):active,html body input[type="submit"]:not(.top-bar input[type="submit"]),
	html body input[type="submit"]:not(.top-bar input[type="submit"]):hover,html body input[type="submit"]:not(.top-bar input[type="submit"]):active,
 html body input[type="button"]:not(.top-bar input[type="button"]),html body input[type="button"]:not(.top-bar input[type="button"]):hover,html body input[type="button"]:not(.top-bar input[type="button"]):active,
 html body [role="button"]:not(.top-bar [role="button"]),html body [role="button"]:not(.top-bar [role="button"]):hover,html body [role="button"]:not(.top-bar [role="button"]):active{border-radius:6px!important}
	html body [class].lgv-chip:not([class*="btn"]),html body [class].lgv-chip:not([class*="btn"]):hover,html body [class].lgv-chip:not([class*="btn"]):active,
	html body [class].lgv-chip:not([class*="btn"]):focus{border-radius:var(--lgv-tag-r)!important}
 html body [class].lgv-r:not([class*="lgv-chip"]),html body [class].lgv-r:not([class*="lgv-chip"]):hover,html body [class].lgv-r:not([class*="lgv-chip"]):active{border-radius:var(--lgv-r,8px)!important}
	/*编辑 / 回复输入区：85% 透明*/ html body .l-card:has(textarea),html body .l-card:has(.cm-editor),html body .l-card:has([class*="editor"]){background-color:rgba(255,
 255,255,.75)!important;border-radius:8px!important} html.lgv-dark body .l-card:has(textarea),html.lgv-dark body .l-card:has(.cm-editor),html.lgv-dark body .l-card:has([class*="editor"]){background-color:rgba(var(--lgv-paper,
 255,255,255),.75)!important} html body .am-comment:has(textarea){background-color:rgba(255,255,255,.75)!important;border-radius:8px!important}
 html body .lg-article:has(textarea),html body .am-form:has(textarea){background-color:rgba(255,255,255,.75)!important;border-radius:8px!important}
 html.lgv-dark body .lg-article:has(textarea),html.lgv-dark body .am-form:has(textarea){background-color:rgba(var(--lgv-paper,255,255,255),.75)!important}
 html body #lgv-ucard [class] #lgv-uc-btns a,html body #lgv-ucard [class] #lgv-uc-btns button,html body #lgv-ucard #lgv-uc-btns a:hover,html body #lgv-ucard #lgv-uc-btns button:hover{
 border-radius:6px!important} html body #lgv-ucard #lgv-uc-tags span{border-radius:var(--lgv-tag-r)!important}
	/*帮助中心（Docusaurus 文档站）：选中态 + 版面加宽 + 纸色卡片，亮暗自适应 文档站自己有一套 data-theme 开关，跟主站 lgv-dark 无关，这里只认它自己的*/ :root{--lgv-doc-paper:255,255,255;
 --lgv-doc-line:rgba(0,0,0,.07);--lgv-doc-ink:#1c1e21;--lgv-doc-bg1:#eef1f5;--lgv-doc-bg2:#e2e8f1} html[data-theme="dark"]{--lgv-doc-paper:30,33,39;--lgv-doc-line:rgba(255,255,255,.09);--lgv-doc-ink:#e3e3e3;
	--lgv-doc-bg1:#14171d;--lgv-doc-bg2:#0d1015}
	/*底色铺一层很淡的渐变，卡片才有"浮在纸上"的层次*/ html.docs-wrapper,html.mdx-wrapper{background-color:var(--lgv-doc-bg1)!important}
 html.docs-wrapper body,html.mdx-wrapper body{background:transparent!important} html.docs-wrapper::before,html.mdx-wrapper::before{content:'';position:fixed;inset:0;z-index:-1;
 pointer-events:none;background:linear-gradient(180deg,var(--lgv-doc-bg1),var(--lgv-doc-bg2));animation:lgv-mask-in .42s cubic-bezier(.22,.61,.36,1) both}
	/*主站主题有壁纸时：文档站把渐变让给壁纸（纸卡照样透出来）*/ html.docs-wrapper.lgv-bg::before,html.mdx-wrapper.lgv-bg::before,html[class*="docusaurus-search-local"].lgv-bg::before{
 background:var(--lgv-bg) center/cover no-repeat;background-color:var(--lgv-doc-bg1)} html.docs-wrapper.lgv-bg,html.docs-wrapper.lgv-bg body,html.mdx-wrapper.lgv-bg,html.mdx-wrapper.lgv-bg body,html[class*="docusaurus-search-local"].lgv-bg,
	html[class*="docusaurus-search-local"].lgv-bg body{background:transparent!important}
	/*铺了壁纸之后，卡片/侧栏/目录的底色要再实一点，否则文字压在图案上发糊*/ html.docs-wrapper.lgv-bg article,html.mdx-wrapper.lgv-bg article{background:rgba(var(--lgv-doc-paper),
 .88)!important;-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px)} html.docs-wrapper.lgv-bg .theme-doc-sidebar-container{background:rgba(var(--lgv-doc-paper),.9)!important;
 -webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px)} html.docs-wrapper.lgv-bg .theme-doc-toc-desktop,html.docs-wrapper.lgv-bg .pagination-nav__link{background:rgba(var(--lgv-doc-paper),.9)!important}
 html.docs-wrapper.lgv-bg,html.mdx-wrapper.lgv-bg,html[class*="docusaurus-search-local"].lgv-bg{background-image:none!important;background-color:var(--lgv-doc-bg1)!important}
 html.docs-wrapper.lgv-bg body,html.mdx-wrapper.lgv-bg body{background:transparent!important} html.docs-wrapper .navbar,html.docs-wrapper footer{background:rgba(var(--lgv-doc-paper),.72)!important;backdrop-filter:blur(10px)}
	/*版面：侧栏收窄一点、正文列放宽、目录列定宽，1440 下正文从 823 拉到 950+*/ html.docs-wrapper .theme-doc-sidebar-container{width:250px!important;
 min-width:250px!important;max-width:250px!important;flex:0 0 250px!important;border-right:1px solid var(--lgv-doc-line)!important} html.docs-wrapper main{max-width:calc(100% - 250px)!important}
	html.docs-wrapper .container{max-width:1680px!important;padding:18px 16px 40px!important}
	/*正文列 + 目录列改成定死的两栏网格，避免 bootstrap 的百分比列叠出横向滚动条*/ html.docs-wrapper .row{display:grid!important;
 grid-template-columns:minmax(0,1fr) 216px!important;gap:18px!important;margin:0!important;width:100%!important} html.docs-wrapper .row>[class*="col"]{padding-left:0!important;padding-right:0!important;width:auto!important;
 max-width:none!important;flex:none!important} html.docs-wrapper [class*="docItemCol"]{grid-column:1;min-width:0!important}
	html.docs-wrapper [class*="col"]:has(>.theme-doc-toc-desktop){grid-column:2}
 @media (max-width:996px){html.docs-wrapper .row{grid-template-columns:minmax(0,1fr)!important} }
 html.docs-wrapper .theme-doc-toc-desktop{width:216px!important;max-height:calc(100vh - 140px);overflow:auto;padding:14px 16px!important;background:rgba(var(--lgv-doc-paper),.78)!important;
 border:1px solid var(--lgv-doc-line);border-radius:var(--lgv-r)!important;box-shadow:0 1px 2px rgba(0,0,0,.04),0 14px 34px -18px rgba(0,0,0,.22)!important;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}
	html.docs-wrapper .table-of-contents__link{font-size:.86em}
	/*导航栏搜索框里的 ctrl / K 键帽：收成小方标，底色和字色不动*/ .navbar [class*="searchHintContainer"]{gap:3px!important}
 .navbar kbd[class*="searchHint"]{border-radius:4px!important;padding:1px 3px!important;font-size:10.5px!important;line-height:1.55!important;min-width:0!important;box-shadow:none!important;letter-spacing:.2px}
	html.docs-wrapper .table-of-contents__link--active{color:#3498db!important;font-weight:600}
	/*站内示例图：外框原先自带一块浅灰底，跟纸卡打架，改成透明的细边容器*/ html.docs-wrapper .theme-doc-markdown.markdown div:has(>img){background:transparent!important;
 padding:2px 0!important} html.docs-wrapper .theme-doc-markdown.markdown img{max-width:100%;border:1px solid var(--lgv-doc-line);border-radius:6px}
	/*暗色下白底截图太刺眼，压一档亮度*/ html[data-theme="dark"] .theme-doc-markdown.markdown img{filter:brightness(.9)}
	html[data-theme="dark"] .theme-doc-markdown.markdown{--ifm-color-content-secondary:#b9b9b9}
	/*正文做成一张纸卡：圆角 + 细边 + 轻阴影，透出底下的渐变*/ html.docs-wrapper article{max-width:1120px!important;margin-left:auto!important;
	margin-right:auto!important;background:rgba(var(--lgv-doc-paper),.78)!important;border:1px solid var(--lgv-doc-line)!important;
 border-radius:var(--lgv-r)!important;padding:26px 30px 32px!important;box-shadow:0 1px 2px rgba(0,0,0,.04),0 14px 34px -18px rgba(0,0,0,.22)!important;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}
	html[data-theme="dark"] article{box-shadow:0 1px 2px rgba(0,0,0,.35),0 14px 34px -18px rgba(0,0,0,.6)!important}
	html.docs-wrapper article>.theme-doc-markdown.markdown>:first-child,html.docs-wrapper .theme-doc-markdown.markdown>:first-child{margin-top:0!important}
	/*正文字距行距：16px / 1.78，段落之间留够气口*/ html.docs-wrapper .theme-doc-markdown.markdown{font-size:16px!important;
 line-height:1.78!important;color:var(--lgv-doc-ink)} html.docs-wrapper .theme-doc-markdown.markdown p,html.docs-wrapper .theme-doc-markdown.markdown li{margin:.75em 0}
 html.docs-wrapper .theme-doc-markdown.markdown h1{font-size:1.9em!important;line-height:1.3!important;margin:0 0 .9em!important}
 html.docs-wrapper .theme-doc-markdown.markdown h2{font-size:1.35em!important;margin:2em 0 .8em!important;padding-bottom:.35em!important;border-bottom:1px solid var(--lgv-doc-line)!important}
 html.docs-wrapper .theme-doc-markdown.markdown h3{font-size:1.12em!important;margin:1.5em 0 .5em!important} html.docs-wrapper .theme-doc-markdown.markdown img{border-radius:6px}
 html.docs-wrapper .theme-doc-markdown.markdown code{background:rgba(127,127,127,.14)!important;border-radius:4px;padding:.12em .38em}
	html.docs-wrapper .theme-doc-markdown.markdown pre{border-radius:6px!important}
	/*侧栏与分页也统一成纸卡，跟正文同一套透明度*/ html.docs-wrapper .theme-doc-sidebar-container{background:rgba(var(--lgv-doc-paper),.55)!important}
 html.docs-wrapper .theme-doc-sidebar-container{font-size:13.5px!important} html.docs-wrapper .theme-doc-sidebar-container .menu__link{border-radius:var(--lgv-tag-r)!important;
 font-size:13.5px!important;font-weight:400!important;white-space:normal!important;line-height:1.45!important;padding:4px 8px!important}
 html.docs-wrapper .theme-doc-sidebar-container .menu__link--sublist{font-weight:600!important} html.docs-wrapper .theme-doc-sidebar-container .menu__list-item-collapsible>.menu__link{font-size:13.5px!important}
 html.docs-wrapper .theme-doc-sidebar-container .menu__link--active,html.docs-wrapper .theme-doc-sidebar-container .menu__link--active:hover{background:rgba(52,
 152,219,.16)!important;color:var(--lgv-doc-ink)!important;font-weight:600!important;box-shadow:inset 2px 0 0 #3498db} html.docs-wrapper .pagination-nav__link{background:rgba(var(--lgv-doc-paper),.7)!important;
	border:1px solid var(--lgv-doc-line)!important;border-radius:var(--lgv-r)!important}
	/*帮助中心里另外两类页面：关于我们/联系我们/更新日志（mdx-wrapper）和站内搜索页， 它们不吃 docs-wrapper 那套选择器，单独补一份，配色变量与上面共用*/ html.mdx-wrapper,html.mdx-wrapper body,
html[class*="docusaurus-search-local"],html[class*="docusaurus-search-local"] body{background:linear-gradient(180deg,var(--lgv-doc-bg1),var(--lgv-doc-bg2)) fixed!important;background-size:100% 100%!important}
 html.mdx-wrapper .navbar,html[class*="docusaurus-search-local"] .navbar{background:rgba(var(--lgv-doc-paper),.72)!important;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}
 html.mdx-wrapper main.container{margin:18px auto!important;padding:0 16px!important;max-width:1184px!important} html.mdx-wrapper article{max-width:1120px;margin:0 auto;background:rgba(var(--lgv-doc-paper),.78)!important;
 border:1px solid var(--lgv-doc-line)!important;border-radius:var(--lgv-r)!important;padding:28px 34px 32px!important;box-shadow:0 1px 2px rgba(0,0,0,.04),0 14px 34px -18px rgba(0,0,0,.22)!important;-webkit-backdrop-filter:blur(12px);
 backdrop-filter:blur(12px)} html[class*="docusaurus-search-local"] .container.margin-vert--lg{max-width:1184px!important;padding:0 16px!important}
	html[class*="docusaurus-search-local"] .container.margin-vert--lg>section{background:rgba(var(--lgv-doc-paper),.78)!important;
 border:1px solid var(--lgv-doc-line)!important;border-radius:var(--lgv-r)!important;padding:24px 28px 28px!important;box-shadow:0 1px 2px rgba(0,0,0,.04),0 14px 34px -18px rgba(0,0,0,.22)!important;-webkit-backdrop-filter:blur(12px);
	backdrop-filter:blur(12px)}
	/*面板里所有小标签类名（我们自己的 + 站点渲染进来的）统一 2px，别再漏掉某个*/ html body #lgv-search [class*="tag"],html body #lgv-s2 [class*="tag"],html body #lgv-ucard [class*="tag"]{
	border-radius:var(--lgv-tag-r)!important}
	/*个人中心：封面与下面的条接成一张卡——封面下沿、条的上沿都不留圆角，中间用一条细线分开*/html body .user-header-top,html body div.user-header-top[class][class]{border-radius:8px 8px 0 0!important}
 html body .user-header-bottom,html body div.user-header-bottom[class][class]{border-radius:0!important;border-top:1px solid var(--lgv-hair)!important}
	html body div.l-card.lgv-uhd[class][class][class]{border-radius:8px 8px 0 0!important}
	/*“更改封面”浮层贴着封面，圆角跟封面一致，内容不许溢出*/html body div.cover-upload[class][class]{border-radius:8px!important;
 overflow:hidden!important;background-color:rgba(var(--lgv-paper,255,255,255),.94)!important;box-shadow:0 10px 26px rgba(28,40,56,.18),0 0 0 1px var(--lgv-hair)!important;-webkit-backdrop-filter:blur(10px) saturate(1.15);
	backdrop-filter:blur(10px) saturate(1.15)}
	/*个性化下拉里补的那条亮暗开关*//*主页下拉框里的主题行照内页那一组画（主页没带这组按钮的站点样式，类名一样但得自己补外观）*/
 .lgv-throw{list-style:none;margin:0;padding:0} .lgv-throw .theme-options-control{display:flex;border-radius:3px;overflow:hidden}
 .lgv-throw .theme-option-button{flex:1;margin:0;padding:3.5px 10.5px;font-size:14px;line-height:1.1;font-weight:400;color:#595959;background:#fff;border:0;border-radius:0!important;cursor:pointer;appearance:none;box-shadow:none!important}
 .lgv-throw .theme-option-button+.theme-option-button{box-shadow:inset 1px 0 0 rgba(0,0,0,.06)} .lgv-throw .theme-option-button:hover{background:#f5f5f5}
 .lgv-throw .theme-option-button.active,.lgv-throw .theme-option-button.active:hover{background:#3498db;color:#fff}
	/*全局按钮圆角规则带 !important，这里按官方分段按钮的直角盖回去*/
 html body .lgv-throw .theme-option-button,html body .lgv-throw .theme-option-button:hover{border-radius:0!important;box-shadow:none!important}
 html.lgv-dark .lgv-throw .theme-option-button{background:rgba(255,255,255,.08);color:#cfcfcf} html.lgv-dark .lgv-throw .theme-option-button:hover{background:rgba(255,255,255,.14)}
 html.lgv-dark .lgv-throw .theme-option-button.active,html.lgv-dark .lgv-throw .theme-option-button.active:hover{background:#3498db;color:#fff}
	/*首页老版块是 Amaze UI，跟内页不是一套类名，暗色得单独铺一遍；色值一律取站点主题令牌，不写死*/
	/*正文色也用 luogu 自己的令牌，不再自己定*/
	/*站点没有 --lfe-color--text-1 这套令牌，以前满篇 var 全空，面板字色退回浅色*/
 html{--lgv-ink:#222;--lgv-ink-2:#666;--lgv-surface:#fff;--lgv-line:rgba(0,0,0,.12);--lgv-feed-rgb:255,255,255} html:not(.lgv-dark){--lgv-rgb:var(--lgv-paper,255,255,255);--lgv-feed-rgb:var(--lgv-paper,255,255,255);
 --lgv-paper:255,255,255;--lgv-ink:#1f2328;--lgv-ink-2:#5c636b} html.lgv-dark{--lgv-paper:29,32,37;--lgv-ink:#f5f5f5;--lgv-ink-2:#bfbfbf;--lgv-surface:rgb(29,32,37);
 --lgv-line:rgba(255,255,255,.14);--lgv-rgb:var(--lgv-paper,29,32,37);--lgv-feed-rgb:var(--lgv-paper,29,32,37)} html.lgv-dark body{color:var(--lgv-ink,#f5f5f5)}
	/*首页这套老前端的文字/链接也跟着内页走：正文浅色，链接用主题主色*/
	/*首页暗色：站点自己那套把实心按钮刷成了描边灰字，照亮色主页的做法恢复实心（红/蓝底白字）*/
 html.lgv-dark body .lg-index-content .am-btn-danger{background-color:#dd514c!important;border-color:#dd514c!important;color:#fff!important}
 html.lgv-dark body .lg-index-content .am-btn-primary{background-color:#0e90d2!important;border-color:#0e90d2!important;color:#fff!important}
	html.lgv-dark .lg-index-content,html.lgv-dark .lg-index-content .am-panel,html.lgv-dark .lg-index-content .am-panel :not([class*="lg-fg-"]):not(.am-badge):not(.am-label):not(.lgv-chip):not([class*="lg-bg-"]){
	color:var(--lgv-ink,#f5f5f5)!important}
	/*小徽章保持站点原色，别被整片染色盖住*/
	html.lgv-dark .am-badge,html.lgv-dark .am-label{color:#fff!important}
	/*名字/标签自带站点色（lg-fg-*），暗色主页也照亮色主页那份走，不统一染白*/
 html.lgv-dark .lg-index-content a[href]:not([class*="lg-fg-"]):not(.am-btn):not(.am-badge):not(.am-active):not(.am-panel-hd *){color:#3498db!important} html.lgv-dark .lg-index-content a.am-active{color:#fff!important}
 html.lgv-dark .lg-index-content .am-control-nav a.am-active{color:#fff!important} html.lgv-dark .lg-index-content .am-panel.am-panel-success>.am-panel-hd{color:#5eb95e!important;
 background:rgba(94,185,94,.15)!important;border-color:rgba(94,185,94,.42)!important} html.lgv-dark .lg-index-content .am-panel.am-panel-success>.am-panel-hd a{color:#5eb95e!important}
 html.lgv-dark .lg-index-content .am-panel.am-panel-danger>.am-panel-hd{color:#dd514c!important;background:rgba(221,81,76,.15)!important;border-color:rgba(221,81,76,.42)!important}
 html.lgv-dark .lg-index-content .am-panel.am-panel-danger>.am-panel-hd a{color:#dd514c!important} html.lgv-dark .lg-index-content .am-panel.am-panel-primary>.am-panel-hd{color:#0e90d2!important;
 background:rgba(14,144,210,.15)!important;border-color:rgba(14,144,210,.42)!important} html.lgv-dark .lg-index-content .am-panel.am-panel-primary>.am-panel-hd a{color:#0e90d2!important}
 html.lgv-dark .lg-index-content .am-panel.am-panel-warning>.am-panel-hd{color:#f37b1d!important;background:rgba(243,123,29,.15)!important;border-color:rgba(243,123,29,.42)!important}
 html.lgv-dark .lg-index-content .am-panel.am-panel-warning>.am-panel-hd a{color:#f37b1d!important} html.lgv-dark .lg-index-content .am-panel.am-panel-secondary>.am-panel-hd{color:#3bb4f2!important;
 background:rgba(59,180,242,.15)!important;border-color:rgba(59,180,242,.42)!important} html.lgv-dark .lg-index-content .am-panel.am-panel-secondary>.am-panel-hd a{color:#3bb4f2!important}
 html.lgv-dark .lg-index-content .am-panel .am-panel-hd,html.lgv-dark .lg-index-content .am-panel .am-panel-title{border-bottom:1px solid var(--lgv-line,rgba(255,255,255,.14))!important}
	html.lgv-dark .am-panel{background:rgba(var(--lgv-paper,255,255,255),.82)!important;border-color:var(--lgv-line,rgba(255,255,255,.14))!important;
 box-shadow:none!important;color:var(--lgv-ink,#f5f5f5)!important;backdrop-filter:blur(12px) saturate(1.3)} html.lgv-dark .am-panel-hd,html.lgv-dark .am-panel-title{background:transparent!important;border-color:var(--lgv-line,rgba(255,255,
255,.14))!important;color:var(--lgv-ink,#f5f5f5)!important}
 html.lgv-dark .am-panel-bd{color:var(--lgv-ink,#f5f5f5)!important;background:transparent!important} html.lgv-dark .am-comment,html.lgv-dark .am-comment-main{background:transparent!important;border-color:var(--lgv-line,rgba(255,255,
255,.14))!important;color:var(--lgv-ink,#f5f5f5)!important}
	/*犇犇/评论的「头 + 正文」两半：底色留给 paint 引擎识别，再由 .lgv-feed 统一换成暗色纸面；
	这里要是也刷成透明，引擎认不出两半，就会退化成「在正文里套一个小方块」——尺寸和亮色对不上*/
 html.lgv-dark .am-comment-hd,html.lgv-dark .am-comment-bd{color:var(--lgv-ink,#f5f5f5)!important} html.lgv-dark .am-comment-meta{color:var(--lgv-ink-2,#bfbfbf)!important}
	html.lgv-dark .am-btn:not(.am-btn-warning):not(.am-btn-primary):not(.am-btn-success):not(.am-btn-danger):not(.am-btn-secondary),html.lgv-dark .am-btn-default{
 background:transparent!important;border-color:var(--lgv-line,rgba(255,255,255,.14))!important;color:var(--lgv-ink,#f5f5f5)!important}
	html.lgv-dark .am-form-field,html.lgv-dark input:not([type=checkbox]):not([type=radio]),html.lgv-dark textarea,html.lgv-dark select{background:var(--lgv-surface,
	rgb(29,32,37))!important;border-color:var(--lgv-line,rgba(255,255,255,.14))!important;color:var(--lgv-ink,#f5f5f5)!important}
	html.lgv-dark .am-panel-bd a:not([class*="lg-fg-"]),html.lgv-dark .am-comment-bd a:not([class*="lg-fg-"]){color:var(--lfe-color--primary-1)!important}
	/*首页最外层那个包住轮播的大容器：亮色下它就是透明的，暗色也别给它刷实底——
	刷上去就是一整块盖住整屏的黑框（用户点名的「非常大的黑色框」就是它）*/
	/*首页 .lg-article：亮色是 .7 的半透纸，暗色照这个厚度给，别整块实心*/
	/*首页各板块的纸面：亮色站点给的是 rgba(255,255,255,.7)，暗色照这个厚度来*/
 html.lgv-dark .lg-index-content .lg-article{background-color:rgba(var(--lgv-paper,29,32,37),.7)!important;border:0!important;border-radius:var(--lgv-r,8px)!important;box-shadow:none!important}
	/*顶部那块（轮播 + 运势/打卡）是一整张纸：纸给最外层 .lg-article，
	里面的运势卡不再单独开框，否则就是「大框里再套小框」*/
 html.lgv-dark .lg-index-content .lg-punch{background:transparent!important;border:0!important;box-shadow:none!important}
	/*犇犇正文里的评论块不再单独上底色*/
 html.lgv-dark .lg-index-content .feed-comment{background:transparent!important;border:0!important;color:inherit!important}
	/*暗色首页的悬停高亮：站点给的是亮色那套半透明白，落在深色纸上就是一块发光的框。
	  具体元素由 hhv 在真悬停时量出来再换成黑，这里兜底画在 ::before / ::after 上的那两层；
	  另外站点导航列表那条 hover 是 10% 前景色（暗色下前景变浅，叠出来就是白框），直接压一条。
	  范围是全站暗色，不再只管首页那一块*/
 html.lgv-dark body .lgv-hhpb::before{background-color:rgba(0,0,0,var(--lgv-hhpb-a,.28))!important}
 html.lgv-dark body .lgv-hhpa::after{background-color:rgba(0,0,0,var(--lgv-hhpa-a,.28))!important}
 html.lgv-dark li[data-v-71f35d47]:hover{background-color:rgba(0,0,0,.12)!important}
 html.lgv-dark{--lgv-hair:rgba(255,255,255,.12);--lgv-sb-bg:0,0,0;--lgv-sb-fg:255,255,255} html body .cover-upload .lgv-r{border-radius:2px!important}
	html body .cover-upload input{border-radius:2px!important;background-color:rgba(var(--lgv-paper,255,255,255),.96)!important}
	/*站点框架保持原样（顶栏/左右竖栏/底条不透明化，只有个人中心那块做 85%）*/`
	function inject(){try{if(typeof GM_addStyle==='function')GM_addStyle(CSS)}catch(e){}
		if(document.getElementById('lgv-round'))return
		const el=document.createElement('style');el.id='lgv-round';el.textContent=CSS ;(document.head||document.documentElement).appendChild(el)}
	window.__lgvNoRound=function(sel){if(!sel)return'用法：__lgvNoRound(".某个类名")'
		extraSel=extraSel?extraSel+','+sel:String(sel)
		try{const st=document.createElement('style');st.textContent='html body '+sel+'{border-radius:0!important}' ;(document.head||document.documentElement).appendChild(st)
		}catch(e){}
		unroundHighlights();return'已加入：'+sel+'（本页立即生效）'}
	function mark(el,cls){if(el&&el.closest&&el.closest('#lgv-ucard,#lgv-s2,#lgv-s2-mask'))return
		if(isNoRound(el))return
		if(!el.classList.contains(cls))el.classList.add(cls)
		const roles=(el.getAttribute('data-lgv')||'').split(/\s+/).filter(Boolean)
		if(roles.indexOf(cls)===-1){roles.push(cls);el.setAttribute('data-lgv',roles.join(' '))}}
	function isBar(r){const vw=window.innerWidth||1200;const vh=window.innerHeight||800;const top=r.top+(window.scrollY||0)
		if(top<=6&&r.height<=110)return true
		if(r.width>=vw*0.99&&r.height<=130)return true
		if(r.width<=96&&r.height>=200)return true
		if(r.width>=vw*0.9)return true
		if(r.width>=vw*0.7&&r.height>=vh*0.6)return true
		if(r.left<=2&&r.right>=vw-2)return true
		return false}
	function bindHoverFix(el){if(el.getAttribute('data-lgv-hoverfix'))return
		el.setAttribute('data-lgv-hoverfix','1');let snap=null
		el.addEventListener(
		'mouseenter',
		()=>{
			snap=[el].concat(Array.prototype.slice.call(el.querySelectorAll('*'))).map((n)=>({
				n,
				b:n.style.background,
				c:n.style.backgroundColor,
				f:n.style.color,
				o:n.style.opacity,
			}))
		},
		true,
		)
		el.addEventListener(
		'mouseleave',
		()=>{if(!snap)return
			snap.forEach((s)=>{s.n.style.background=s.b;s.n.style.backgroundColor=s.c;s.n.style.color=s.f;s.n.style.opacity=s.o});snap=null},
		true,
		)
	}
/*站点是不是正开着毛玻璃：开着的时候它会把纸色画到 ::before 上做成半透明（关着是实底、伪元素透明）。
				只认这个痕迹，不认主题里的档位数字*/
	function siteGlassOn(){const els=document.querySelectorAll('.l-card,.am-panel')
		for(let i=0;i<els.length&&i<40;i++){let bg=''
			try{bg=getComputedStyle(els[i],'::before').backgroundColor||''}catch(e){continue}
			const m=/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/.exec(bg)
			if(!m)continue
			const a=m[4]===undefined?1:parseFloat(m[4])
			if(a>=0.05&&a<=0.95)return true}
		return false}
	function siteGlass(){
		const cands=[document.querySelector('header')]
		.concat(
		Array.prototype.slice.call(document.querySelectorAll('#app > div, #app > div > div, [class*="navi"], [class*="panel"], [class*="card"]'),0,60),
		)
		.filter(Boolean)
		for(const el of cands){
/*别把自己加的模糊当成站点的：毛玻璃开关那条规则会给 [data-lgv-gb] 和蒙版上 backdrop-filter，
					  这里如果算进去，关掉毛玻璃也永远读到 blur，开关就变成「要手动刷新」*/
			if(el.hasAttribute('data-lgv-gb')||el.hasAttribute('data-lgv-gbs')||el.hasAttribute('data-lgv-pb'))continue
			if(el.id&&el.id.indexOf('lgv-')===0)continue
			let v=''
			try{v=getComputedStyle(el).backdropFilter||getComputedStyle(el).webkitBackdropFilter||''}catch(e){}
			if(v&&v!=='none')return v}
		return''}
/*主题缓存：进新页面先套上次的壁纸，别等接口*/
	const BG_CK='lgv_tbg'
	function bgCacheLoad(){const r0=document.documentElement
		if(!r0)return
		try{const c=JSON.parse(localStorage.getItem(BG_CK)||'0')
			if(!c)return
			const r=r0
			if(c.d!=null){r.classList.toggle('lgv-dark',!!c.d);r.classList.toggle('lgv-light',!c.d);r.style.setProperty('--lgv-mk',c.d?'0,0,0':'255,255,255')}
			if(c.u){r.style.setProperty('--lgv-bg','url("'+c.u+'")');r.style.setProperty('--lgv-bg-size',c.s||'cover');r.style.setProperty('--lgv-bg-pos',c.p||'center');r.classList.add('lgv-bg')}
		}catch(e){}
	}
	function bgCacheSave(u,sz,pos,mid){
		try{localStorage.setItem( BG_CK, JSON.stringify({u:u||'',s:sz||'cover',p:pos||'center',d:document.documentElement.classList.contains('lgv-dark')?1:0}), )}catch(e){}
	}
/*首屏：在站点渲染之前就把底色铺上，避免暗色偏好时先白一下再变黑*/
	try{const th=localStorage.getItem('lgv-theme')
		if(th==='dark'){document.documentElement.style.setProperty('background','#1d2025');document.documentElement.style.setProperty('color-scheme','dark')}}catch(e){}
	function syncMaskTone(){const rootEl=document.documentElement
		if(!rootEl)return
		const dark=detectDark();const tone=dark?'0,0,0':'255,255,255'
		if(rootEl.style.getPropertyValue('--lgv-mk')!==tone)rootEl.style.setProperty('--lgv-mk',tone)
/*纸色不写死：直接从站点令牌换算，站点换主题这里就跟着换。
					老前端首页没有令牌层，用内页取到的同一个值（缓存的那份），别退回到白纸*/
		let paper='255,255,255'
		if(!dark)paper='255,255,255'
		else{const t=tokTriplet()
			if(t){paper=t
				try{localStorage.setItem('lgv-dk-rgb',t)}catch(e){}}else{const cur=(rootEl.style.getPropertyValue('--lgv-paper')||'').trim();let ck=''
				try{ck=localStorage.getItem('lgv-dk-rgb')||''}catch(e){}
/*都没有时才用站点暗色容器面的常量 #1d2025，不是主题色兜底*/
				paper=cur&&cur!=='255,255,255'?cur:ck||'29,32,37'}
		}
		if(rootEl.style.getPropertyValue('--lgv-paper')!==paper)rootEl.style.setProperty('--lgv-paper',paper)
		rootEl.classList.toggle('lgv-dark',dark);rootEl.classList.toggle('lgv-light',!dark)
		/*卡片上那三个内联是「抢在 lgv-dark 之前定色」用的，类挂上后就该交回 CSS，否则切主题不跟*/
		try{const uc=document.getElementById('lgv-ucard')
			if(uc){uc.style.removeProperty('--lgv-uc-paper');uc.style.removeProperty('--lgv-uc-fg');uc.style.removeProperty('--lgv-uc-ring')}}catch(e){}
		try{const c=JSON.parse(localStorage.getItem(BG_CK)||'0')
			if(!c||c.d!==(dark?1:0))bgCacheSave(c&&c.u,c&&c.s,c&&c.p)}catch(e){}}
	function articlePaper(){const root=document.documentElement
		if(location.pathname.indexOf('/article/')!==0){if(root.classList.contains('lgv-mask'))root.classList.remove('lgv-mask')
			if(root.classList.contains('lgv-glass'))root.classList.remove('lgv-glass')
			return}
		const ac=document.querySelector('.article-content');const toc=document.querySelector('.toc-wrapper')
		if(!ac)return
/*蒙版这条模糊跟「毛玻璃」开关走，不再去嗅站点身上的 backdrop-filter——那一嗅就把我们自己加的也算进去，
			  关掉开关永远读到 blur，表现为要手动刷新*/
		const glassPref=(function(){try{const v=localStorage.getItem('themeBlurPreference')
				if(v==='disabled')return false
				if(v==='enabled')return true}catch(e){}
			const c=document.getElementById('LCheck-2');return!!(c&&c.checked)})()
		const glass=glassPref?getComputedStyle(root).getPropertyValue('--lgv-blur').trim()||'blur(12px) saturate(1.3)':''
		if(glass){root.style.setProperty('--lgv-glass',glass)
			if(!root.classList.contains('lgv-glass'))root.classList.add('lgv-glass')}else if(root.classList.contains('lgv-glass')){root.classList.remove('lgv-glass')}
		syncMaskTone()
/*切深浅色：旧档位带着旧底色，不清掉画不回新主题*/
		{const m0=root.classList.contains('lgv-dark')?'dark':'light'
			if(window.__lgvArtMode&&window.__lgvArtMode!==m0){
/*只清内联 --lgv-rgb，档位类留着，规则自己回落到新纸色*/
				document.querySelectorAll('.lgv-a65,.lgv-a80,.lgv-a85,.lgv-a70').forEach((el)=>{if(el.style.getPropertyValue('--lgv-rgb'))el.style.removeProperty('--lgv-rgb')})
/*纸色的旧内联值也清掉，交给 html.lgv-dark 的默认值*/
				if(root.style.getPropertyValue('--lgv-paper'))root.style.removeProperty('--lgv-paper')}
			window.__lgvArtMode=m0}
		const ar=ac.getBoundingClientRect();let top=ar.top+window.scrollY, bottom=ar.bottom+window.scrollY
		if(toc){const tr=toc.getBoundingClientRect();top=Math.min(top,tr.top+window.scrollY);bottom=Math.max(bottom,tr.bottom+window.scrollY)}
		const base=document.body.getBoundingClientRect().top+window.scrollY
/*蒙版上线别压在 banner 图上，否则图片下沿被糊成渐变*/
		const bnr=document.querySelector('.article-banner, .lg-article-banner, .card-banner')
		const bnrBot=bnr?Math.round(bnr.getBoundingClientRect().bottom+window.scrollY-base):0;const A=Math.max(0,Math.round(top-base),bnrBot)
		const B=Math.max(A,Math.round(bottom-base))
		const paint=(el,a)=>{const bg=getComputedStyle(el).backgroundColor||'';const m=/rgba?\(([^)]+)\)/.exec(bg)
			if(!m)return false
			const c=m[1].split(',').map(Number)
			if((c.length>3?c[3]:1)<0.9)return false
			el.style.setProperty('--lgv-rgb',c[0]+','+c[1]+','+c[2]);el.classList.remove('lgv-a80','lgv-a65','lgv-a85','lgv-a70')
			el.classList.add(a===0.8?'lgv-a80':'lgv-a65');return true}
		paint(ac,0.8)
		if(toc)paint(toc,0.8)
		let n=0
		for(const el of document.querySelectorAll('#app div, main div')){if(++n>200)break
			if(el===ac||el===toc)continue
			if(el.closest('[data-lgv-bar]')||el.closest('.lgv-benben'))continue
			if(el.closest('.lgv-a85')||el.closest('.lgv-a70')||el.closest('.lgv-a80')||el.closest('.lgv-a65'))continue
			if(el.classList.contains('lgv-comment')||el.classList.contains('lgv-feed'))continue
			const r=el.getBoundingClientRect()
			if(r.width<400||r.height<60)continue
			paint(el,0.65)}
/*带子几何单独给 CSS 用：蒙版只铺这一段，模糊也只作用于这一段*/
		if(root.style.getPropertyValue('--lgv-band-a')!==A+'px')root.style.setProperty('--lgv-band-a',A+'px')
		if(root.style.getPropertyValue('--lgv-band-b')!==B+'px')root.style.setProperty('--lgv-band-b',B+'px')
		const tone='rgba(var(--lgv-mk,255,255,255),.55)'/*原来是 .75 压在壁纸上没这层效果，现在直接盖上去会偏白，按旧观感调回来*/
		if(root.style.getPropertyValue('--lgv-band-tone')!==tone)root.style.setProperty('--lgv-band-tone',tone)
/*蒙版用真元素，body 伪元素拿不到壁纸当 backdrop*/
		let band=document.getElementById('lgv-band')
		if(band){let bl=document.getElementById('lgv-band-blur')
			if(!bl){bl=document.createElement('div');bl.id='lgv-band-blur'}
			if(bl.parentNode!==band)band.appendChild(bl)}
		if(!band){band=document.createElement('div');band.id='lgv-band'}
		if(band.parentNode!==document.body||document.body.firstElementChild!==band)document.body.insertBefore(band,document.body.firstElementChild)
		const mkTone='rgba('+(getComputedStyle(root).getPropertyValue('--lgv-mk')||'255,255,255').trim().replace(/^,\s*/,'')+',.55)'
		if(band.style.getPropertyValue('background-color')!==mkTone)band.style.setProperty('background-color',mkTone,'important')
/*露背景区域：上下各 25%，底部那条 45%*/
		{const bodyH=Math.round(document.body.getBoundingClientRect().height);let ft=bodyH
			for(const e of document.querySelectorAll('footer,.lfe-footer,.lcolor-bg-background')){const r=e.getBoundingClientRect()
				if(r.height<40||r.width<400)continue
				const y=Math.round(r.top+window.scrollY-base)
				if(y>B-4)ft=Math.min(ft,y)}
			if(root.style.getPropertyValue('--lgv-band-h')!==bodyH+'px')root.style.setProperty('--lgv-band-h',bodyH+'px')
			if(root.style.getPropertyValue('--lgv-band-f')!==ft+'px')root.style.setProperty('--lgv-band-f',ft+'px')
/*壁纸参数抄一份给模糊层用（站点可能把壁纸放在 html 也可能放 body）*/
			try{const bs=getComputedStyle(document.body), hs=getComputedStyle(document.documentElement)
				const pick=(k)=>{const v=(bs.getPropertyValue(k)||'').trim()
					if(v&&v!=='none')return v
					const h2=(hs.getPropertyValue(k)||'').trim();return h2&&h2!=='none'?h2:''}
				const img=pick('background-image'), sz=pick('background-size'), pos=pick('background-position')
				if(img){if(root.style.getPropertyValue('--lgv-band-bg')!==img)root.style.setProperty('--lgv-band-bg',img)
					const sz2=sz||'cover', pos2=pos||'center'
					if(root.style.getPropertyValue('--lgv-band-bgsz')!==sz2)root.style.setProperty('--lgv-band-bgsz',sz2)
					if(root.style.getPropertyValue('--lgv-band-bgpos')!==pos2)root.style.setProperty('--lgv-band-bgpos',pos2)}
			}catch(e){}
			for(const id of['lgv-band-up','lgv-band-dn']){let el=document.getElementById(id)
				if(!el){el=document.createElement('div');el.id=id}
				if(el.parentNode!==document.body)document.body.appendChild(el)}
		}
		if(!root.classList.contains('lgv-mask'))root.classList.add('lgv-mask')}
	function adNudge(){const home=location.pathname===''||location.pathname==='/'||location.pathname==='/index'||location.pathname==='/home'
		if(!home)return
		let n=0
		for(const box of document.querySelectorAll('[class*="banner"],[class*="carousel"],[class*="swiper"],[class*="slider"],[class*="ad"]')){if(++n>12)break
			const r=box.getBoundingClientRect()
			if(r.width<300||r.height<80)continue
			if(box.closest('.lgv-benben')||box.closest('[data-lgv-bar]'))continue
			if(!box.classList.contains('lgv-ad-box'))box.classList.add('lgv-ad-box')}
	}
	function markBenben(force){try{if(localStorage.getItem('lgv-off-benben')==='1')return}catch(e){}
		const hit=(el,light)=>{if(!el||el===document.body||el===document.documentElement)return
			const er=el.getBoundingClientRect();const big=er.height>innerHeight*0.9||er.width>innerWidth*0.75
			if(el.classList.contains('lgv-r')&&!el.classList.contains('lgv-benben'))el.classList.remove('lgv-r')
			if(!el.classList.contains('lgv-benben'))el.classList.add('lgv-benben')
			let c=0
			for(const box of el.querySelectorAll('div,span,a,button,li')){if(++c>200)break
				if(box.classList.contains('lgv-r')||box.classList.contains('lgv-benben'))continue
				const br=box.getBoundingClientRect()
				if(br.width<16||br.width>320||br.height<12||br.height>56)continue
				const bg=getComputedStyle(box).backgroundColor||''
				if(!/^rgba?\(/.test(bg)||/rgba\([^)]*,\s*0\)$/.test(bg))continue
				box.classList.add('lgv-r')}
			const paint=(node)=>{if(isNoRound(node)){cleanOne(node);return}
				let rgb=node.getAttribute('data-lgv-feed-rgb')
				if(!rgb){const bg=getComputedStyle(node).backgroundColor||'';const m2=/rgba?\(([^)]+)\)/.exec(bg);let got=''
					if(m2){const c2=m2[1].split(',').map(Number)
						if((c2 .length>3?c2[3]:1)>0.5)got=c2[0]+','+c2[1]+','+c2[2]}
					if(!got){const isEntry=node.matches('li.feed-li,li[class*="feed"],.am-comments-list>li,li.am-comment,li[class*="am-comment"]')
						if(!isEntry){node.removeAttribute('data-lgv-feed-rgb')
							if(node.classList.contains('lgv-feed'))node.classList.remove('lgv-feed')
							if(node.style.getPropertyValue('--lgv-feed-rgb'))node.style.removeProperty('--lgv-feed-rgb')
							mark(node,'lgv-r');node.setAttribute('data-lgv-done','1');return}
						got=detectDark()?darkPaper():'255,255,255'}
					rgb=got;node.setAttribute('data-lgv-feed-rgb',rgb)}
/*暗色：站点给的纸还是浅色的（#f8f8f8 / #fff），照抄就是白纸配深字，
							反过来又成了浅纸配白字。凡是偏亮的纸一律换成暗色纸，再交给 .lgv-feed 上色*/
				if(detectDark()){const q3=String(rgb).split(',').map(Number)
					if(q3 .length===3&&(0.299*q3[0]+0.587*q3[1]+0.114*q3[2])/255>0.55){rgb=darkPaper();node.setAttribute('data-lgv-feed-rgb',rgb)}}
				if(node.style.getPropertyValue('--lgv-feed-rgb')!==rgb)node.style.setProperty('--lgv-feed-rgb',rgb)
				node.setAttribute('data-lgv-done','1')
				if(!node.classList.contains('lgv-feed'))node.classList.add('lgv-feed')
				if(node.classList.contains('lgv-r'))node.classList.remove('lgv-r')}
			const solidKids=(node)=>{const nr=node.getBoundingClientRect()
				return Array.prototype.filter.call(node.children,(c)=>{const cr=c.getBoundingClientRect()
					if(cr.width<nr.width*0.5||cr.height<20)return false
					const cb=getComputedStyle(c).backgroundColor||'';const cm=/rgba?\(([^)]+)\)/.exec(cb);const ca=cm?cm[1].split(',').map(Number):[0,0,0,0];return(ca.length>3?ca[3]:1)>0.5})
			}
			const processItem=(item)=>{if(!item||item.nodeType!==1)return
				if(/(^|\s)lgv-/.test(String(item.className||'')))return
				const ir=item.getBoundingClientRect()
				if(ir.width<200||ir.height<36)return
				const realEntry=item.matches( 'li.feed-li,ul#feed>li,ul[id*="feed"]>li,li[class*="feed"],.am-comments-list>li,li.am-comment,li[class*="am-comment"]', )
				if(!realEntry){if(ir.height>innerHeight*0.85||ir.width>innerWidth*0.95)return
					if(big&&ir.height>innerHeight*0.5)return}
				let partsBox=null, depthBest=-1
				for(const cand of item.querySelectorAll('*')){if(!cand.children.length)continue
					if(solidKids(cand).length<2)continue
					let d=0, p2=cand
					while(p2&&p2!==item){d++;p2=p2 .parentElement}
					if(d>depthBest){depthBest=d;partsBox=cand}}
				if(partsBox){if(item.classList.contains('lgv-feed'))item.classList.remove('lgv-feed')
					if(item.style.getPropertyValue('--lgv-feed-rgb'))item.style.removeProperty('--lgv-feed-rgb')
					const kids=solidKids(partsBox).sort((a,b)=>a.getBoundingClientRect().top-b.getBoundingClientRect().top);kids.forEach(paint)
					item.setAttribute('data-lgv-done','1')
					kids.forEach((k,i)=>{k.classList.toggle('lgv-top-r',i===0);k.classList.toggle('lgv-bot-r',i===kids.length-1&&kids.length>1)})
					const pcs=getComputedStyle(partsBox);const pbw=parseFloat(pcs.borderTopWidth)||0;const pbc=pcs.borderTopColor||''
					const pOutline=parseFloat(pcs.outlineWidth)||0;const pShadow=pcs.boxShadow||'none'
					const boxHasLine=(pbw>0&&!/rgba\([^)]*,\s*0\)$/.test(pbc))||pOutline>0||(pShadow&&pShadow!=='none')
					if(boxHasLine){if(!partsBox.classList.contains('lgv-hug'))partsBox.classList.add('lgv-hug')
						partsBox.classList.remove('lgv-flat')}else if(!partsBox.classList.contains('lgv-flat')){partsBox.classList.add('lgv-flat')}
					let up=partsBox.parentElement
					for(let k=0;k<4&&up&&up!==document.body;k++,up=up.parentElement){const cs2=getComputedStyle(up);const bw=parseFloat(cs2 .borderTopWidth)||0;const bc=cs2 .borderTopColor||'';const ow=parseFloat(cs2 .outlineWidth)||0;const shadow=cs2 .boxShadow||'none';const hasBorder=(bw>0&&!/rgba\([^)]*,\s*0\)$/.test(bc))||ow>0
						if(!(hasBorder||(shadow&&shadow!=='none')))continue
						const hk=solidKids(up)
						if(hk.length>=2){hk.sort((a,b)=>a.getBoundingClientRect().top-b.getBoundingClientRect().top)
							hk.forEach((x,i)=>{x.classList.toggle('lgv-top-r',i===0);x.classList.toggle('lgv-bot-r',i===hk.length-1)})
							if(!up.classList.contains('lgv-flat'))up.classList.add('lgv-flat')}else if(!up.classList.contains('lgv-hug')){up.classList.add('lgv-hug')}
						break}
					return}
				let host=null
				for(const kid of item.querySelectorAll('div,span,p,article,section')){const kr=kid.getBoundingClientRect()
					if(kr.width<ir.width*0.35||kr.height<24)continue
					const kb=getComputedStyle(kid).backgroundColor||'';const km=/rgba?\(([^)]+)\)/.exec(kb)
					if(!km)continue
					const ka=km[1].split(',').map(Number)
					if((ka.length>3?ka[3]:1)<0.5)continue
					host=kid}
				if(host){if(item.classList.contains('lgv-feed'))item.classList.remove('lgv-feed')
					if(item.style.getPropertyValue('--lgv-feed-rgb'))item.style.removeProperty('--lgv-feed-rgb')
					paint(host)}else{paint(item)}
				item.setAttribute('data-lgv-done','1')}
			let work=0;let more=false;const seen=new Set()
			const run=(item)=>{if(!item||item.nodeType!==1)return
				if(!force&&item.getAttribute('data-lgv-done'))return
				if(seen.has(item))return
				seen.add(item)
				if(++work>1500){more=true;return}
				processItem(item)}
			if(!light){
				const sel=big
				?'[class*="feed"],[class*="benben"]'
				:'[class*="feed"],[class*="item"],[class*="card"],[class*="talk"],[class*="post"],[class*="message"],.am-comment,[class*="am-comment"]'
				for(const item of el.querySelectorAll(sel)){if(/(^|\s)lgv-/.test(String(item.className||'')))continue
					run(item)}
				for(const wrap of big?[]:el.querySelectorAll('div,section,ul')){const kids=wrap.children
					if(!kids||kids.length<3)continue
					const wr=wrap.getBoundingClientRect()
					if(wr.width<300||wr.height<160)continue
					let ok=0
					for(const k of kids){const kr=k.getBoundingClientRect()
						if(kr.width>=wr.width*0.6&&kr.height>=55)ok++}
					if(ok<3)continue
					for(const k of kids){const kr=k.getBoundingClientRect()
						if(kr.width>=wr.width*0.6&&kr.height>=55)run(k)}}
				if(more)setTimeout(()=>markBenben(),50)}
			const box=el.getBoundingClientRect()
			const parts=Array.prototype.filter.call(el.children,(c)=>{const cr=c.getBoundingClientRect();return cr.height>=40&&cr.width>=box.width*0.6})
			if(parts.length>=2){const first=parts[0], last=parts[parts.length-1]
				if(first!==last){if(first.classList.contains('lgv-r'))first.classList.remove('lgv-r')
					if(last.classList.contains('lgv-r'))last.classList.remove('lgv-r')
					if(!first.classList.contains('lgv-benben-top'))first.classList.add('lgv-benben-top')
					if(!last.classList.contains('lgv-benben-bot'))last.classList.add('lgv-benben-bot')}
			}
		}
		const targets=new Set()
		for(const ul of document.querySelectorAll('ul#feed,ul[id*="feed"],ul[class*="feed"]')){const ur=ul.getBoundingClientRect()
			if(ur.width<360||ur.height<120)continue
			let box=null, up=ul.parentElement
			for(let k=0;k<4&&up&&up!==document.body;k++,up=up.parentElement){const r=up.getBoundingClientRect()
				if(r.width<ur.width*0.9)break
				if(r.height>ur.height*1.35+140)break
				box=up}
			targets.add(box||ul)}
		for(const el of document.querySelectorAll('[data-lgv-benben],.lgv-benben')){if(el===document.body||el===document.documentElement)continue
			const ul=el.querySelector('ul#feed,ul[id*="feed"],ul[class*="feed"]')
			if(!ul)continue
			const r=el.getBoundingClientRect(), ur=ul.getBoundingClientRect()
			if(ur.height>0&&r.height>ur.height*1.6+200){el.removeAttribute('data-lgv-benben');el.classList.remove('lgv-benben','lgv-benben-top','lgv-benben-bot','lgv-r');el.style.removeProperty('--lgv-feed-rgb');el.style.removeProperty('background-color')}
		}
		for(const el of document.querySelectorAll('[data-lgv-benben]'))targets.add(el)
		let n=0
		for(const el of targets){if(++n>20)break
			const r=el.getBoundingClientRect()
			if(r.width<400||r.height<200)continue
			el.setAttribute('data-lgv-benben','1');hit(el)
			if(!el.__lgvMO&&el.nodeType===1){let t=0;el.__lgvMO=new MutationObserver(()=>{clearTimeout(t);t=setTimeout(()=>{revalidate();markBenben()},260)})
				el.__lgvMO.observe(el,{childList:true,subtree:true})}
			let up=el.parentElement
			for(let k=0;k<3&&up;k++,up=up.parentElement){const pr=up.getBoundingClientRect()
				if(pr.width<400||pr.height<200)break
				if(pr.width>r.width*1.08||pr.height>r.height*1.25)break
				hit(up,true)}
		}
	}
	function markComments(){let n=0
		for(const el of document.querySelectorAll('[class*="comment"],[class*="reply"]')){if(++n>200)break
			if(el.closest('#lgv-search,#lgv-search-fab'))continue
			if(el.closest('[data-lgv-bar]')||el.closest('.lgv-benben'))continue
			if(el.closest('.lgv-feed'))continue
			if(isNoRound(el)){cleanOne(el);continue}
			if(isEditor(el))continue
			if(el.querySelector('[class*="comment"],[class*="reply"]'))continue
			const r=el.getBoundingClientRect()
			if(r.width<200||r.height<30)continue
			const tt=(el.textContent||'').trim()
			if(tt.length<24&&/(条评论|评论\(|共\s*\d+|\d+\s*条)/.test(tt)&&r.height<=56){el.classList.remove('lgv-comment','lgv-r')
				if(el.style.getPropertyValue('--lgv-feed-rgb'))el.style.removeProperty('--lgv-feed-rgb')
				continue}
			const bg=getComputedStyle(el).backgroundColor||'';const m=/rgba?\(([^)]+)\)/.exec(bg);let rgb=''
			if(m){const c=m[1].split(',').map(Number)
				if((c.length>3?c[3]:1)>0.5)rgb=c[0]+','+c[1]+','+c[2]}
			if(!rgb){if(el.classList.contains('lgv-comment'))el.classList.remove('lgv-comment')
				if(el.style.getPropertyValue('--lgv-feed-rgb'))el.style.removeProperty('--lgv-feed-rgb')
				mark(el,'lgv-r');continue}
			el.style.setProperty('--lgv-feed-rgb',rgb)
			if(!el.classList.contains('lgv-comment'))el.classList.add('lgv-comment')
			if(el.classList.contains('lgv-r')&&!el.classList.contains('lgv-benben'))el.classList.remove('lgv-r')}
	}
	function tagBars(){const vh=window.innerHeight||800;let n=0
		for(const el of document.querySelectorAll('div,aside,section,ul,ol,nav')){if(++n>1200)break
			const r=el.getBoundingClientRect()
			if(r.width<8||r.width>96)continue
			if(r.height<Math.min(160,vh*0.4))continue
			el.setAttribute('data-lgv-bar','1');bindHoverFix(el);el.classList.remove('lgv-r','lgv-chip','lgv-alpha','lgv-clear','lgv-noframe')
			el.style.removeProperty('--lgv-chip-bg')
			el.querySelectorAll('.lgv-r,.lgv-chip,.lgv-alpha,.lgv-clear,.lgv-noframe').forEach((k)=>{k.classList.remove('lgv-r','lgv-chip','lgv-alpha','lgv-clear','lgv-noframe');k.style.removeProperty('--lgv-chip-bg')})
		}
	}
	function isChipRow(el,r){if(r.height>56)return false
		const kids=el.children
		if(!kids||kids.length<2||kids.length>14)return false
		let small=0
		for(const c of kids){const cr=c.getBoundingClientRect()
			if(cr.width>0&&cr.width<200&&cr.height<=48)small++}
		return small>=kids.length-1}
	function scanBlocks(){const nodes=document.querySelectorAll('div,section,article,aside,main,td,form')
		for(const el of nodes){if(el.closest('#lgv-search,#lgv-search-fab'))continue
			if(el.classList.contains('lgv-r'))continue
			if(el.closest('[data-lgv], nav, header'))continue
			if(typeof el.className==='string'&&el.className.indexOf('lgv-')!==-1)continue
			if(el.closest('[data-lgv-bar]'))continue
			if(el.closest('.lgv-benben,.lgv-benben-top,.lgv-benben-bot'))continue
			const r=el.getBoundingClientRect()
			if(r.width<100||r.height<36)continue
			if(isBar(r))continue
			if(isChipRow(el,r))continue
			const cs=getComputedStyle(el)
			if(cs.display==='inline'||cs.visibility==='hidden')continue
			const bg=cs.backgroundColor||'';const hasBg=/^rgba?\(/.test(bg)&&!/rgba\([^)]*,\s*0\)$/.test(bg);const bw=parseFloat(cs.borderTopWidth)||0
			const heading=el.querySelector('h1,h2,h3,h4,h5,h6,[class*="title"],[class*="head"],[class*="Title"]')
			if(!hasBg&&bw<=0&&!heading)continue
			mark(el,'lgv-r')}
	}
	function scanModules(){const nodes=document.querySelectorAll('#app div, #app-old div, main div, body > div, body > section');let i=0
		for(const el of nodes){if(++i>1200)break
			if(el.closest('#lgv-search,#lgv-search-fab'))continue
			if(el.hasAttribute('data-lgv'))continue
			if(el.closest('nav, header'))continue
			if(el.querySelector('[data-lgv]'))continue
			if(el.closest('.lgv-benben,.lgv-benben-top,.lgv-benben-bot'))continue
			const r=el.getBoundingClientRect()
			if(r.width<200||r.height<80)continue
			if(isBar(r))continue
			if(isChipRow(el,r))continue
			if(!(el.textContent||'').trim())continue
			mark(el,'lgv-r')}
	}
	function scanTiles(){
		document.querySelectorAll('[class*="card"],[class*="tile"],[class*="Card"],[class*="Tile"]').forEach((el)=>{
			if(el.closest('#lgv-search,#lgv-search-fab,#lgv-ucard,#lgv-s2,#lgv-s2-mask'))return
			if(el.hasAttribute('data-lgv'))return
			if(el.closest('nav, header'))return
			if(el.closest('.lgv-benben,.lgv-benben-top,.lgv-benben-bot'))return
			const r=el.getBoundingClientRect()
			if(r.width<60||r.height<36)return
			if(isBar(r))return
			mark(el,'lgv-r')})
	}
	function stripBankGroup(){const all=document.querySelectorAll('div,section,form,p,span,label,li');let n=0
		for(const el of all){if(++n>800)break
			const own=Array.prototype.filter .call(el.childNodes,(x)=>x.nodeType===3) .map((x)=>x.textContent) .join('') .trim()
			if(own.indexOf('所属题库')!==0)continue
			const row=el.parentElement
			if(!row)continue
			for(const g of row.children){if(g===el||g.contains(el))continue
				if(g.querySelectorAll('a,button,span,label').length<2)continue
				g.classList.add('lgv-noframe');g.classList.remove('lgv-chip','lgv-r');break}
		}
	}
	const DIFF_RGB=[ [254,76,97], [243,156,17], [255,193,22], [82,196,26], [52,152,219], [157,61,207], [20,33,92], ]
	function isDifficulty(el){
		if(!el||!el.className||typeof el.className!=='string'){if(el&&el.className&&el.className.baseVal!==undefined)return/difficulty|badge/i.test(el.className.baseVal)}
		const tag=(el&&el.className?el.className:'')+' '+(el&&el.id?el.id:'')
		if(/difficulty|difficulity|lfe-badge-diff/i.test(tag))return true
		const t=(el.textContent||'').trim()
		if(/^(暂无评定|入门|普及-|普及|普及\+|提高\+|省选|NOI|NOI-|CTSC|IOI)$/.test(t))return true
		if(!/^(暂无评定|入门|普及-|普及|普及\+|提高\+|省选|NOI|NOI-|CTSC|IOI)$/.test(t))return false
		const cs=getComputedStyle(el);const bg=cs.backgroundColor||'';const m=/rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(bg)
		if(m){const r=+m[1], g=+m[2], b=+m[3]
			for(const c of DIFF_RGB){if(Math.abs(r-c[0])<12&&Math.abs(g-c[1])<12&&Math.abs(b-c[2])<12)return true}}
		return true}
	function scanChips(){
		document.querySelectorAll('a,button,span,div,li').forEach((el)=>{if(el.closest('#lgv-search,#lgv-search-fab'))return
			if(el.closest('.theme-doc-sidebar-container'))return
			if(el.classList.contains('lgv-alpha')||el.classList.contains('lgv-chip-solid'))return
			if(isNoRound(el))return
			if(el.classList.contains('lgv-noframe'))return
			if(el.closest('[data-lgv-bar]'))return
			if(el.closest('.lgv-benben-top,.lgv-benben-bot'))return
			if(el.closest('[class*="difficulty"],[class*="difficulity"]'))return
			if(!el.firstChild)return
			const r=el.getBoundingClientRect()
			if(r.width<28||r.width>320||r.height<18||r.height>56)return
			const cs=getComputedStyle(el)
			if(cs.backgroundImage!=='none')return
			const br=parseFloat(cs.borderTopLeftRadius)||0
			if(br>=18)return
			const bg=cs.backgroundColor||''
			if(!/^rgba?\(/.test(bg)||/rgba\([^)]*,\s*0\)$/.test(bg))return
			if(isDifficulty(el))return
			if(el.closest('table,tbody,thead,tr,td,th'))return
			if(r.width<=30&&r.height<=30)return
			const absTop=r.top+(window.scrollY||0)
/*按钮随状态换色，不冻结底色、不改其圆角*/
			if(el.tagName==='BUTTON'||el.getAttribute('role')==='button'||/\b(solid|outline|l-button|lfe-button)\b/.test(String(el.className)))return
/*只给圆角，颜色一律按站点原样：AC/WA 状态、算法标签、Rated 这些小 tag 的底色和字色
							都是站点自己算好的，以前这里把底色改成 80% 透明、再把字刷白，颜色就全歪了*/
			mark(el,'lgv-chip');const solid=!!el.querySelector('img')||absTop<180
			if(solid)mark(el,'lgv-chip-solid')})
	}
	function revalidate(){
		document.querySelectorAll('[data-lgv]').forEach((el)=>{if(isNoRound(el)){cleanOne(el);return}
			;(el.getAttribute('data-lgv')||'')
			.split(/\s+/)
			.filter(Boolean)
			.forEach((c)=>{if(!el.classList.contains(c))el.classList.add(c)})})
	}
/*===== 主题背景图 =====*/
	const CAT_KEY='lgv-cat';const CAT_T='lgv-cat-t';let catalog=null;let curBg=''
	const hex2rgb=(h)=>{const s=String(h||'') .replace('#','') .slice(0,6)
		if(s.length!==6)return null
		return{r:parseInt(s.slice(0,2),16),g:parseInt(s.slice(2,4),16),b:parseInt(s.slice(4,6),16)}}
	const parseRgb=(v)=>{const m=/^rgba?\(([^)]+)\)$/.exec(v||'')
		if(!m)return null
		const a=m[1].split(',').map(Number);return{r:a[0],g:a[1],b:a[2]}}
	const dist=(a,b)=>(a&&b?Math.abs(a.r-b.r)+Math.abs(a.g-b.g)+Math.abs(a.b-b.b):999)
	async function getText(url){try{const r=await fetch(url,{credentials:'include'});return await r.text()}catch(e){return''}}
	function parseCatalog(html){const m=/<script[^>]*>\s*(\{"instance"[\s\S]*?\})\s*<\/script>/.exec(html||'')
		if(!m)return null
		try{const d=JSON.parse(m[1]);return(d.data&&d.data.themes&&d.data.themes.result)||null}catch(e){return null}}
	async function ensureCatalog(){if(catalog)return catalog
		try{const c=localStorage.getItem(CAT_KEY);const t=Number(localStorage.getItem(CAT_T)||0)
			if(c&&Date.now()-t<36e5){const list=JSON.parse(c)
				if(list&&list.length){catalog=list;return catalog}}}catch(e){}
/*不在页面里批量抓主题列表（用户协议 3.4.10 + 跨域必挂）：只用当前页已有数据和本地缓存*/
		return catalog||[]}
/*自己的亮暗偏好：auto 跟站点，light/dark 强制（首页原本没有亮暗开关，靠这个补）*/
	function lgvPref(){try{return localStorage.getItem('lgv-theme')||'auto'}catch(e){return'auto'}}
/*站点自己的暗色令牌：只有新前端页面里有一份 html[data-lcolor-theme="dark"] 的规则；
				首页是老前端、没有这份，所以把内页读到的原值存一份，首页照搬，不自己编色*/
	const DK_CK='lgv-dk-tok'
	function siteDarkTokens(){const out={}
		try{
			const walk=(rules)=>{
				for(const r of rules){if(!r)continue
					if(r.cssRules&&!r.selectorText){walk(r.cssRules);continue}
					if(!r.selectorText||!r.style)continue
					if(!/(lcolor-theme-dark|data-lcolor-theme\s*=\s*["']?dark)/.test(r.selectorText))continue
					for(const k of r.style){if(k.indexOf('--')!==0)continue
						const v=(r.style.getPropertyValue(k)||'').trim()
						if(v)out[k]=v}}
			}
			for(const ss of document.styleSheets){let rs=null
				try{rs=ss.cssRules}catch(e){continue}
				if(rs)walk(rs)}}catch(e){}
		if(Object.keys(out).length>=50)
		try{localStorage.setItem(DK_CK,JSON.stringify(out))}catch(e){}
		return out}
/*首页没有暗色令牌时，把内页那份原样借过来（读不到就什么都不做）*/
	function ensureDarkVars(){const root=document.documentElement;let st=document.getElementById('lgv-dark-vars');const dark=(root.getAttribute('data-lcolor-theme')||'')==='dark';const home=!!document.querySelector('.lg-index-content')
/*只管首页这套老前端；内页站点自己会写这 182 条令牌，别重复*/
		if(!home||!dark){if(st)st.remove()
			return}
/*判断站点到底给没给暗色令牌：这次现取，不缓存——缓存跨模式就会一直拿到浅色的那一份*/
		const cur=(getComputedStyle(root).getPropertyValue('--lfe-color--bg-container')||'').trim();const m=/^#([0-9a-f]{6})$/i.exec(cur)
/*首页老前端根本没有这条令牌（空值），内页站点会给出真实值；有值且是深色说明站点已经切好了*/
		if(m){const l=(parseInt(m[1].slice(0,2),16)*299+parseInt(m[1].slice(2,4),16)*587+parseInt(m[1].slice(4,6),16)*114)/255000
			if(l<=0.5){if(st)st.remove()
				return}}
		let tk=null
		try{tk=JSON.parse(localStorage.getItem(DK_CK)||'null')}catch(e){}
		if(!tk||Object.keys(tk).length<50){if(st)st.remove()
			return}
		const body=Object.keys(tk) .map((k)=>k+':'+tk[k]) .join(';')
		if(!st){st=document.createElement('style');st.id='lgv-dark-vars';document.head.appendChild(st)}
		if(st.textContent!==':root{'+body+'}'){st.textContent=':root{'+body+'}';__dkSeen=null}}
/*外壳配色：直接读当前主题的暗色配置（#luogu-theme 里的 dNavi/dBody），
				直接写到元素上；没有任何中间变量、没有兜底色值*/
/*站点主题令牌（#luogu-theme）常常晚 2~3 秒才解析出来，那之前 lgv-dark 没挂、--lgv-paper 还是白，
	首页那张「累计通过数 / 当日通过数」就先白着一张脸，等令牌到了才刷黑——用户看到的「点开白、3 秒变黑」。
	这里先按站点属性/偏好快速判一次（只加不加 light，判错也不会把亮色页面弄黑），令牌到了 paintShell 自会校正。*/
	function earlyPaint(){
		let dark=false
		try{dark=!!detectDarkRaw()}catch(e){return}
		if(!dark)return
		const rootEl=document.documentElement
		rootEl.classList.add('lgv-dark');rootEl.classList.remove('lgv-light')
		let t=''
		try{t=localStorage.getItem('lgv-dk-rgb')||''}catch(e){}
		if(!(rootEl.style.getPropertyValue('--lgv-paper')||'').trim())
			rootEl.style.setProperty('--lgv-paper',/^\d+,\d+,\d+$/.test(t)?t:'29,32,37')}
	WIN.__lgvEarlyPaint=earlyPaint
	function paintShell(){const root=document.documentElement;let t=null
		try{const el=document.getElementById('luogu-theme')
			if(el)t=JSON.parse(el.textContent||'null')}catch(e){}
		const dk=root.getAttribute('data-lcolor-theme')==='dark';const nav=dk&&t&&t.dNavi, body=dk&&t&&t.dBody
/*内页照常取样，首页照抄；两边都走同一份「复制」数据，不再自己配色*/
		try{navSkinSave()}catch(e){}
/*只在暗色首页抄；亮色首页保持站点原样*/
		const clearNav=()=>
		document.querySelectorAll('[data-lgv-nav]').forEach((el)=>{el.removeAttribute('data-lgv-nav') ;['background-color','color','border-right-color','border-left-color','box-shadow'].forEach((k)=>el.style.removeProperty(k))
		})
/*暗色：顶条/竖栏按当前主题的 dNavi 上色（站点自己不区分亮暗，取样拿到的是浅色那套）。
					走自定义属性 + 样式表 !important，比直接写 elements.style 更扛得住站点重绘*/
/*#luogu-theme 会被站点自己重绘掉一瞬，读到了就缓存，免得那一瞬把暗色外壳撤掉*/
		if(t&&t.dNavi){WIN.__lgvDn=t.dNavi
			try{localStorage.setItem('lgv-dnav',JSON.stringify(t.dNavi))}catch(e){}}
/*首页没有 #luogu-theme，亮色那套也存一份，免得首页的更新按钮只能退回默认蓝*/
		if(t&&t.lNavi){WIN.__lgvLn=t.lNavi
			try{localStorage.setItem('lgv-lnav',JSON.stringify(t.lNavi))}catch(e){}}
/*首页没有 #luogu-theme（这套老前端不吐主题 JSON），用别处读到的同一套 dNavi，
				否则首页退回默认值、内页是真值，两边字色对不上，而且每 800ms 在两种值之间来回写=一直闪*/
		if(!WIN.__lgvDn){try{const c=JSON.parse(localStorage.getItem('lgv-dnav')||'null')
				if(c&&c.back)WIN.__lgvDn=c}catch(e){}}
		const dn=dk&&((t&&t.dNavi)||WIN.__lgvDn)
/*每 800ms 都会走到这：只有值真的变了才写，别做无意义的属性重写（重写会触发整页样式重算）*/
		if(root.classList.contains('lgv-dark')&&dn&&dn.back){
			const df=dn.fore||dn.back
			/*三个色值放独立样式表：满页重画会清掉 html 上的内联变量，清一次字色闪一次*/
			const css='html.lgv-dark{--lgv-dnav-back:'+dn.back+';--lgv-dnav-fore:'+df+';--lgv-lside-fore:'+df+'}';let st=document.getElementById('lgv-dnav-var')
			if(!st){st=document.createElement('style');st.id='lgv-dnav-var';document.head.appendChild(st)}
			if(st.textContent!==css)st.textContent=css
			if(!root.classList.contains('lgv-dnav'))root.classList.add('lgv-dnav')}else if(!root.classList.contains('lgv-dark')){
/*只有真的不是暗色了才撤；暗色下这一拍没读到主题（#luogu-theme 被站点重绘、或首页压根没有）
				  就保持上一次的值——以前这里无条件撤，下一拍读到了又写回去，字色就在两种之间来回跳=一直闪*/
			if(root.classList.contains('lgv-dnav'))root.classList.remove('lgv-dnav')
			const st0=document.getElementById('lgv-dnav-var')
			if(st0&&st0.textContent)st0.textContent=''}
		if(!root.classList.contains('lgv-dark'))clearNav()
/*顶条：首页已经照抄内页那套，这里只处理没有 .lg-index-content 的内页（站点自己会画，不做）
						——内页也不再按主题 JSON 硬填，颜色以站点渲染为准*/
/*body 的底色不在这里管：谁写谁负责（paintBg 一个入口决定），这里再删一次就会和它打架，
					每 800ms 摘上摘下，首页壁纸跟着重绘 = 闪*/
	}
/*暗色：直接把站点自己的主题开关拨到 dark，整页由站点按当前主题的暗色配置渲染；
				auto 不碰这个属性，跟着站点自己走*/
	function applySiteTheme(t,force){const root=document.documentElement
		if(!root)return
		const cur=root.getAttribute('data-lcolor-theme')
/*站点自己已经给了亮暗设置（内页右上/设置页那个开关）→ 以站点为准，不许插件反着掰回来；
					只有站点压根没这个属性（老首页）或用户自己点了插件的开关（force）才写*/
		if(!force&&(cur==='dark'||cur==='light'))return
		if(t==='dark'){if(cur!=='dark'){if(WIN.__lgvPrev===undefined)WIN.__lgvPrev=cur
				root.setAttribute('data-lcolor-theme','dark')}
			return}
		if(t==='light'){
			if(WIN.__lgvPrev!==undefined){const pv=WIN.__lgvPrev;WIN.__lgvPrev=undefined
				if(pv===null||pv===undefined)root.removeAttribute('data-lcolor-theme')
				else if(cur==='dark')root.setAttribute('data-lcolor-theme',pv)}else if(cur==='dark'){root.removeAttribute('data-lcolor-theme')}
		}
	}
/*hex 容器色转 rgb 三元组，读不到就空着*/
	function tokTriplet(){
		try{const v=getComputedStyle(document.documentElement).getPropertyValue('--lfe-color--bg-container').trim();const m=/^#([0-9a-f]{6})$/i.exec(v)
			if(m){const n=parseInt(m[1],16);return((n>>16)&255)+','+((n>>8)&255)+','+(n&255)}}catch(e){}
		return''}
/*暗色纸色跟站点令牌走（当前主题的暗色配置），取不到才用旧值*/
	function darkPaper(){return tokTriplet()}
/*换主题要让所有标签页一起重来：站点自己的亮暗是首帧渲染的，光靠我们改类站点那边不会跟着变*/
	const THEME_REV='lgv-theme-rev'
/*只走 localStorage：storage 事件不会回到本页，正好用来通知“别的标签页”*/
	let themeBroadcast=()=>{}
/*别的标签页改了主题：整页重载一次*/
/*别的标签页收到后不重载：直接把站点自己的亮暗重新渲一遍（css 变量跟着属性走）*/
/*整页重画：把插件自己写过的变量、壁纸、缓存标记全清干净，再从头算一遍——切亮暗就走这里*/
	let __lgvLastRender=0
	const fullRender=(force)=>{
/*防抖：站点改属性会连着触发好几次，重画一次就够，连着来就是闪*/
		try{const now=Date.now()
			if(!force&&now-__lgvLastRender<900)return
			__lgvLastRender=now}catch(e){}
		try{const r=document.documentElement;curKey='';lastSig='';curBg='';curBgStyle=null;__dkSeen=null;r.dataset.lgvSig='' ;[
			'--lgv-bg',
			'--lgv-bg-size',
			'--lgv-bg-pos',
			'--lgv-mid',
			'--lgv-mk',
			'--lgv-paper',
			].forEach((k)=>r.style.removeProperty(k))
			r.classList.remove('lgv-bg')
			if(document.body)
			['background-image','background-size','background-position','background-attachment','background-repeat','background-color'].forEach((k)=>
			document.body.style.removeProperty(k),
			)
			document.querySelectorAll('[data-lgv-gf]').forEach((el)=>el.removeAttribute('data-lgv-gf'))}catch(e){}
		try{applySiteTheme(lgvPref())}catch(e){}
		try{if(lgvPref()!=='dark')clearNav()}catch(e){}
		try{syncBg()}catch(e){}
		try{themeSync()}catch(e){}
		try{sync()}catch(e){}}
	const repaintAll=(f)=>{try{fullRender(f)}catch(e){}}
/*回到某个标签页时，把这个页面的站点亮暗和插件配色一起对齐到当前偏好（含壁纸那一档）*/
	const alignTab=()=>{
		try{if(document.hidden)return
			const want=lgvPref()
			if(want!=='dark'&&want!=='light')return
			const root=document.documentElement;const cur=(root.getAttribute('data-lcolor-theme')||'').toLowerCase();const wantDark=want==='dark'
			if(cur===(wantDark?'dark':'light')&&root.classList.contains('lgv-dark')===wantDark)return
			fullRender()}catch(e){}
	}
	document.addEventListener('visibilitychange',()=>{if(!document.hidden)alignTab()});window.addEventListener('focus',alignTab)
	window.addEventListener('pageshow',()=>alignTab());themeBroadcast=(v)=>{try{localStorage.setItem(THEME_REV,v+'|'+Date.now())}catch(e){}}
/*主题开关只认点击：盯 html[data-lcolor-theme] 会和站点来回刷，死循环*/
	window.addEventListener('storage',(e)=>{if(e.key!==THEME_REV||!e.newValue)return
		repaintAll(true)})
/*切主题之后要真的重来一遍：站点自己的亮暗是服务端渲染的（class、图表、图标都按那边的值出），
		  光靠我们重画，站点那半边还是老的。这里刷一次页面，防连环用 sessionStorage 记时间*/
	const themeReload=(delayMs)=>{
		try{const stampKey='lgv-rl-at';const nowMs=Date.now()
			if(nowMs-(+sessionStorage.getItem(stampKey)||0)<10000)return
			sessionStorage.setItem(stampKey,String(nowMs))}catch(e){}
		setTimeout(()=>{try{location.reload()}catch(e){}},delayMs||260)}
	window.__lgvThemeReload=themeReload
	function lgvSetTheme(t,reload){try{localStorage.setItem('lgv-theme',t)}catch(e){}
/*插件这边的切换等同于点洛谷自己的「浅色/暗色」：两边必须落成同一个值*/
		try{const root=document.documentElement
			if(t==='dark'||t==='light'){window.__lgvThemeAt=Date.now();root.setAttribute('data-lcolor-theme',t);root.style.setProperty('color-scheme',t)}}catch(e){}
		__dkSeen=null
		try{fullRender(true)}catch(e){}
		themeBroadcast(t)
		if(reload)
		try{themeReload(300)}catch(e){}}
	function detectDarkRaw(){const pref=lgvPref();const rootEl=document.documentElement
/*站点自己写明的亮暗最可信：用户在洛谷里切了，插件必须跟着切，不能被本地偏好顶掉*/
		const siteAttr=(rootEl.getAttribute('data-lcolor-theme')||'').toLowerCase()
		if(siteAttr==='dark')return true
		if(siteAttr==='light')return false
		if(pref==='dark')return true
		if(pref==='light')return false
/*站点自己的主题设置最可信（内页那个 系统/浅色/暗色 写的就是它）*/
		const st=(rootEl.getAttribute('data-lcolor-theme')||rootEl.style.colorScheme||'').toLowerCase()
		if(/\bdark\b/.test(st))return true
		if(/\blight\b/.test(st))return false
		const pth=location.pathname;const isHome=(pth==='/'||pth===''||pth==='/index')&&!/^help\./.test(location.hostname)
		const strip=(v)=> String(v||'') .replace(/lgv-[a-z0-9-]+/gi,' ') .toLowerCase()
		const cls=strip(rootEl.className)+' '+strip(document.body?document.body.className:'')
		if(isHome&&!/\bdark\b|night|暗|\blight\b|亮/.test(cls))return!!(WIN.matchMedia&&WIN.matchMedia('(prefers-color-scheme: dark)').matches)
		if(/\bdark\b|night|暗/.test(cls))return true
		if(/\blight\b|亮/.test(cls))return false
		const attrs=['data-theme','data-color-mode','data-mode','data-dark','theme']
		for(const el of[rootEl,document.body]){if(!el)continue
			for(const a of attrs){const v=(el.getAttribute(a)||'').toLowerCase()
				if(/dark|night/.test(v))return true
				if(/light|day/.test(v))return false}}
		if(rootEl&&(rootEl.hasAttribute('data-dark')||rootEl.hasAttribute('dark')))return true
		const bars=[document.querySelector('header')] .concat(Array.prototype.slice.call(document.querySelectorAll('body > div, #app > div'),0,8)) .filter(Boolean)
		for(const el of bars){const r=el.getBoundingClientRect()
			if(r.top>8||r.height<30||r.height>120)continue
			const c=parseRgb(getComputedStyle(el).backgroundColor)
			if(!c)continue
			return 0.2126*c.r+0.7152*c.g+0.0722*c.b<128}
		return false}
	let __dkLast=null, __dkAt=0, __dkCand=null, __dkCandAt=0, __dkCandN=0
	function detectDark(){let raw
		try{raw=!!detectDarkRaw()}catch(e){raw=__dkLast===null?false:__dkLast}
		const now=Date.now()
		if(__dkLast===null){__dkLast=raw;__dkAt=now;return raw}
		if(raw===__dkLast){__dkCand=null;__dkCandN=0;return __dkLast}
		if(__dkCand!==raw){__dkCand=raw;__dkCandAt=now;__dkCandN=1;return __dkLast}
		__dkCandN++
		if(__dkCandN>=2&&now-__dkCandAt>=200&&now-__dkAt>=450){__dkLast=raw;__dkAt=now;__dkCand=null;__dkCandN=0;return raw}
		return __dkLast}
	function pageSig(){let bg=parseRgb(getComputedStyle(document.body).backgroundColor);const mid=document.documentElement.style.getPropertyValue('--lgv-mid')
		if(bg&&mid&&dist(bg,hex2rgb(mid))<6)bg=null
		if(!bg)bg=parseRgb(getComputedStyle(document.documentElement).backgroundColor)
		const fg=parseRgb(getComputedStyle(document.body).color);let nav=null
		const cands=[document.querySelector('header')] .concat(Array.prototype.slice.call(document.querySelectorAll('body > div, #app > div'),0,8)) .filter(Boolean)
		for(const el of cands){const r=el.getBoundingClientRect()
			if(r.top>8||r.height<30||r.height>120)continue
			const c=parseRgb(getComputedStyle(el).backgroundColor)
			if(c){nav=c;break}}
		return{bg,fg,nav,dark:detectDark()}}
	function pickTheme(list,sig){let best=null, score=1e9
		for(const t of list){const cfg=t.config||{};const body=sig.dark?cfg.dBody:cfg.lBody;const nav=sig.dark?cfg.dNavi:cfg.lNavi
			if(!body)continue
			const bc=hex2rgb(body.back);const tc=hex2rgb((body.color&&body.color[0])||(nav&&nav.fore));const nc=hex2rgb(nav&&nav.back);let s=0
			s+=bc&&sig.bg?dist(sig.bg,bc):120;s+=tc&&sig.fg?dist(sig.fg,tc)*3:200;s+=nc&&sig.nav?dist(sig.nav,nc)*0.5:60
			if(s<score){score=s;best=t}
			if(score===0)break}
		return best}
	function saveCatalog(){try{localStorage.setItem(CAT_KEY,JSON.stringify(catalog));localStorage.setItem(CAT_T,String(Date.now()))}catch(e){}}
	async function mergeMine(){if(!catalog||!catalog.length)catalog=await ensureCatalog()
		if(!catalog)return 0
		const bag={}
		for(let p=1;p<=1;p++){
/*只回查第一页，不做翻页批量抓取*/
			const list=parseCatalog(await getText('/theme?type=my&page='+p))
			if(!list||!list.length)break
			list.forEach((t)=>{if(t&&t.id!=null)bag[t.id]=t})
			if(list.length<15)break}
		const ids=new Set(catalog.map((t)=>t.id));let added=0
		for(const k in bag){if(ids.has(bag[k].id))continue
			catalog.push(bag[k]);added++}
		if(added){saveCatalog();curKey='';console.log('%c[lgv]','color:#0e90d2','新主题已加入回查单：',added,'套，共',catalog.length,'套')}
		return added}
	function siteImage(){
		const urlOf=(el,ps)=>{
			try{const bi=getComputedStyle(el,ps||null).backgroundImage||'';const m=/url\(["']?([^"')]+)["']?\)/.exec(bi);return m?m[1]:null}catch(e){return null}}
		for(const el of[document.body,document.documentElement,document.querySelector('#app')]){const u=el&&urlOf(el)
			if(u)return u}
		for(const el of[document.documentElement,document.body]){for(const ps of['::before','::after']){const u=el&&urlOf(el,ps)
				if(u)return u}}
		const pool=document.querySelectorAll('body > div, #app > *, #app img');let n=0
		for(const el of pool){if(n++>200)break
			const cs=getComputedStyle(el)
			if(cs.position!=='fixed'&&cs.position!=='absolute')continue
			const r=el.getBoundingClientRect()
			if(r.width<(window.innerWidth||1200)*0.7||r.height<(window.innerHeight||800)*0.5)continue
			const u=el.tagName==='IMG'?el.currentSrc||el.src:urlOf(el)
			if(u)return u}
		return null}
	let curKey='';let lastSig=''
	async function appliedTheme(fresh){const tag=document.getElementById('luogu-theme')
		if(tag){
			try{const j=JSON.parse(tag.textContent)
				if(j&&j.lBody){
/*给没有这份标签的页面（文章页等）留一份，避免半亮半暗*/
					localStorage.setItem('lgv-applied',JSON.stringify(j));localStorage.setItem('lgv-applied-t',String(Date.now()));return j}
			}catch(e){}
		}
/*本页没有 #luogu-theme（文章页、部分老页）就用最近一次拿到的主题配置，别让页面半亮半暗*/
		try{const c=localStorage.getItem('lgv-applied');const t=Number(localStorage.getItem('lgv-applied-t')||0)
			if(c)return JSON.parse(c)}catch(e){}
		return null/*当前页没有 #luogu-theme 就用不上主题了，不再另开请求去抓别的页面*/
	}
	const sigKey=(s)=>[s.bg,s.fg,s.nav].map((o)=>(o?o.r+','+o.g+','+o.b:'')).join('|')+(s.dark?'D':'L')
	function clearOpaque(){if(!document.documentElement.classList.contains('lgv-bg'))return
		const vw=window.innerWidth||1200;const vh=window.innerHeight||800
		const pool=document.querySelectorAll('#app, #app-old, main, body > div, #app > div, #app-old > div, #app > div > div');let n=0
		for(const el of pool){if(n++>60)break
			if(
			el.id==='lgv-s2'||
			el.id==='lgv-s2-mask'||
			el.id==='lgv-search'||
			el.id==='lgv-ucard'||
			el.id==='lgv-search-fab'||
			el.id==='lgv-band'||
			el.id==='lgv-band-up'||
			el.id==='lgv-band-dn'
			)
			continue
			if(el.closest&&el.closest('#lgv-s2,#lgv-s2-mask,#lgv-search,#lgv-ucard,#lgv-search-fab'))continue
			const r=el.getBoundingClientRect()
			if(r.width<vw*0.8||r.height<vh*0.5)continue
			const bg=parseRgb(getComputedStyle(el).backgroundColor)
			if(!bg)continue
/*已存在就别再 add，class 重写会触发全量重算*/
			if(!el.classList.contains('lgv-clear'))el.classList.add('lgv-clear')}
	}
	let ourUrl='';let curBgStyle=null
/*壁纸同时写内联到 body/#app/main，防站点重挂载*/
/*浏览器会把颜色串正规化成 "rgb(20, 19, 16)"，直接拿我们写的原串比永远不相等 → 每轮都重写一遍，
				属性重写会让壁纸层重新截图重绘（首页就是一闪一闪）。比较前把空白全去掉*/
	const norm=(v)=>String(v==null?'':v).replace(/\s+/g,'')
	const setIf=(el,k,v)=>{if(norm(el.style.getPropertyValue(k))!==norm(v)||el.style.getPropertyPriority(k)!=='important')el.style.setProperty(k,v,'important')}
	function paintBg(url,size,pos,mid){const b=document.body
		if(!b)return
		setIf(b,'background-attachment','fixed')
		if(url){setIf(b,'background-image','url("'+url+'")');setIf(b,'background-size',size||'cover');setIf(b,'background-position',pos||'center')
			setIf(b,'background-repeat','no-repeat')}
/*有壁纸就交给壁纸，没图才用中景色；两套都填会被 paintShell 反复摘掉，页面闪*/
		if(url){if(b.style.getPropertyValue('background-color'))b.style.removeProperty('background-color')}else if(mid)setIf(b,'background-color',mid) ;['app','app-old'].forEach((id)=>{const e=document.getElementById(id)
			if(e)setIf(e,'background-color','transparent')})
		document.querySelectorAll('main').forEach((e)=>setIf(e,'background-color','transparent'))}
	let curBlur=null, lastGlassOn=null
/*卡片毛玻璃档位：主题配置里 blur 0=关闭、1000=标准、1010=轻量（编辑器三个单选）*/
	function syncGlassAll(){const root=document.documentElement
		if(!root)return
		let ov=null
		try{ov=localStorage.getItem('lgv_glass')}catch(e){}
/*右上角个性化里的「启用毛玻璃效果」是唯一真开关：面板一开就在 DOM 里，勾/取消立刻跟*/
		let cbOn=null
		try{const cb=document.querySelector('#LCheck-2');const lb=document.querySelector('label[for="LCheck-2"]')
			if(cb&&(!lb||/毛玻璃/.test(lb.textContent||'')))cbOn=!!cb.checked}catch(e){}
/*模糊开关只看 localStorage.themeBlurPreference，其余判据都是反的*/
		let bp=null
		try{bp=localStorage.getItem('themeBlurPreference')}catch(e){}
		let on
		if(bp==='disabled')on=false
		else if(bp==='enabled')on=true
		else if(cbOn!=null)on=cbOn
		else on=true
		lastGlassOn=on;const has=root.classList.contains('lgv-glass-all')
		if(on){const g=siteGlass()||'';const m=/blur\(([\d.]+)px\)/.exec(g)
/*照站点那档 blur(12px) saturate(1.3)*/
			const val=m&&parseFloat(m[1])>=4?g:'blur(12px) saturate(1.3)'
			if(root.style.getPropertyValue('--lgv-blur')!==val)root.style.setProperty('--lgv-blur',val)
			if(!has)root.classList.add('lgv-glass-all')}else if(has){root.classList.remove('lgv-glass-all')
			try{paintCards()}catch(e){}}/*关掉玻璃：只靠玻璃那层撑着的纸面会回落到 --lgv-rgb，这里补画一次实底*/
		try{glassMark(on)}catch(e){}
		try{flattenGlass()}catch(e){}
		WIN.__lgvGlass=()=>({ themeBlur:curBlur, on:root.classList.contains('lgv-glass-all'), value:root.style.getPropertyValue('--lgv-blur')||'none', siteGlass:siteGlass(), })
	}
/*毛玻璃标记：只给站点没给模糊的纸面补，并且只补一次。
				同一元素绝对不能叠第二层（叠了就发亮），所以自带 backdrop-filter 的元素直接放过、只记 data-lgv-gbs*/
	let glassSig=''
	function glassMark(on){const root=document.documentElement
		if(!on){
			document.querySelectorAll('[data-lgv-gb],[data-lgv-gbs]').forEach((el)=>{
				if(el.hasAttribute('data-lgv-gb')){el.style.removeProperty('backdrop-filter');el.style.removeProperty('-webkit-backdrop-filter')}
				el.removeAttribute('data-lgv-gb');el.removeAttribute('data-lgv-gbs');el.removeAttribute('data-lgv-pb')})
			glassSig='';return}
		const sig=[root.style.getPropertyValue('--lgv-blur'),location.pathname].join('|')
/*档位没变、也没有新冒出来的纸面：不做第二次判定*/
		if(
		sig===glassSig&&
		!document.querySelector(
		'.l-card:not([data-lgv-gb]):not([data-lgv-gbs]),.am-panel:not([data-lgv-gb]):not([data-lgv-gbs]),.lg-index-content .lg-article:not([data-lgv-gb]):not([data-lgv-gbs])',
		)
		)
		return
		glassSig=sig
		document.querySelectorAll('.l-card,.am-panel,.lg-index-content .lg-article,[data-lgv-hp],.lgv-feed,.lgv-comment').forEach((el)=>{
			if(el.hasAttribute('data-lgv-gb')||el.hasAttribute('data-lgv-gbs'))return
			if(el.parentElement&&el.parentElement.closest('[data-lgv-gb]')){el.setAttribute('data-lgv-gbs','1');return}/*套在外层玻璃里：只模糊外层*/
			let bf=''
			try{bf=getComputedStyle(el).backdropFilter||getComputedStyle(el).webkitBackdropFilter||''}catch(e){}
			if(bf&&bf!=='none'){el.setAttribute('data-lgv-gbs','1');return}/*站点已经模糊过：再叠一层就发光*/
			let pb=''
			try{pb=getComputedStyle(el,'::before').backgroundColor||''}catch(e){}
			const m=/rgba?\(\d+,\s*\d+,\s*\d+(?:,\s*([\d.]+))?\)/.exec(pb)
			if(m&&(m[1]===undefined?1:parseFloat(m[1]))>=0.05)el.setAttribute('data-lgv-pb','1')/*站点把纸画在伪元素上：纸的浓度改那一层*/
			el.setAttribute('data-lgv-gb','1')})
	}
	function applyThemeConfig(body,nav,name,dark){if(!body)return false
/*同一套主题配置不要每个 tick 都重刷：签名一致就直接返回*/
		const sigStr=[dark?1:0,name,body.image||'',body.back||'',body.size||'',(body.pos||[]).join(',')].join('|');const sigEl=document.documentElement
		if(sigEl.dataset.lgvSig===sigStr)return true
		const root=document.documentElement;const dm=dark?'d':'l';const url=body.image?String(body.image).replace(/\{d\}/g,dm).replace(/\{l\}/g,'l'):''
		const pos=(body.midOpts&&body.midOpts.position)||[50,50];const size=(body.midOpts&&body.midOpts.size)||'cover';const back=body.back||''
/*档位只在真的读到数字时更新，读到 undefined 就沿用上一次，别把毛玻璃抖掉*/
		if(body.blur!=null&&!isNaN(Number(body.blur)))curBlur=Number(body.blur)
		const key=url+'|'+back+'|'+size+'|'+pos.join(',')
		if(key===curKey)return true
		curKey=key;document.documentElement.dataset.lgvSig=sigStr;const posTxt=pos[0]+'% '+pos[1]+'%'
		if(url){ourUrl=url;root.style.setProperty('--lgv-bg','url("'+url+'")');root.style.setProperty('--lgv-bg-size',size);root.style.setProperty('--lgv-bg-pos',posTxt);root.classList.add('lgv-bg')}
		if(back)root.style.setProperty('--lgv-mid',back)
		if(url||back){curBgStyle={url:url||ourUrl||'',size:size,pos:posTxt,mid:back||''};paintBg(curBgStyle.url,curBgStyle.size,curBgStyle.pos,curBgStyle.mid)
			bgCacheSave(curBgStyle.url,curBgStyle.size,curBgStyle.pos,curBgStyle.mid)}
		console.log('%c[lgv]','color:#0e90d2','中景 →',name,'| 图:',url||'无','| 中景色:',back);syncGlassAll();clearOpaque();return true}
/*帮助中心取 cookie 里的亮暗两套，跟主站对齐*/
	const DOC_CK='lgv_theme_cfg';const isDocHost=()=>/^help\./.test(location.hostname);let lastDocCk=null
	function writeDocTheme(name,lBody,dBody){if(isDocHost()||(!lBody&&!dBody))return
		const pack=(c)=>[String(c.image||''),String(c.back||'')];const prev=readDocTheme()||{};let val
		try{
			val=encodeURIComponent( JSON.stringify({ n:String(name||prev.n||'').slice(0,40), l:lBody?pack(lBody):prev.l||['',''], d:dBody?pack(dBody):prev.d||['',''], }), )}catch(e){return}
		if(val===lastDocCk)return
		lastDocCk=val
		try{document.cookie=DOC_CK+'='+val+';domain='+SITE_SUFFIX+';path=/;max-age='+86400*30+';SameSite=Lax'}catch(e){}}
	function readDocTheme(){const m=new RegExp('(?:^|; )'+DOC_CK+'=([^;]*)').exec(document.cookie)
		if(!m)return null
		try{return JSON.parse(decodeURIComponent(m[1]))}catch(e){return null}}
	function applyDocTheme(){if(!isDocHost())return
		const cfg=readDocTheme()
		if(!cfg)return
		const root=document.documentElement;const dark=root.getAttribute('data-theme')==='dark'||/(^|\s)(dark|night)(\s|$)/i.test(root.getAttribute('data-theme')||'')
		const c=dark?cfg.d:cfg.l
		if(!c)return
		const dm=dark?'d':'l';let url=c[0]?String(c[0]).replace(/\{d\}/g,dm).replace(/\{l\}/g,'l'):'';let scrim=''
		if(!url&&dark&&cfg.l&&cfg.l[0]){url=String(cfg.l[0]).replace(/\{d\}/g,'d').replace(/\{l\}/g,'l');scrim='linear-gradient(rgba(10,12,16,.74),rgba(10,12,16,.74)),'}
		const want=url?scrim+'url("'+url+'")':''
		if(root.style.getPropertyValue('--lgv-bg')!==want){if(want)root.style.setProperty('--lgv-bg',want)
			else root.style.removeProperty('--lgv-bg')}
		root.classList.toggle('lgv-bg',!!url);const back=c[1]||'';const bc=hex2rgb(back);let paper=''
		if(bc){const lum=(0.2126*bc.r+0.7152*bc.g+0.0722*bc.b)/255
			if((dark&&lum<0.34)||(!dark&&lum>0.6))paper=[bc.r,bc.g,bc.b].join(',')}
		if(paper)root.style.setProperty('--lgv-doc-paper',paper)
		else root.style.removeProperty('--lgv-doc-paper')
		if(!url&&bc){const g1='rgb('+bc.r+','+bc.g+','+bc.b+')';root.style.setProperty('--lgv-doc-bg1',g1);root.style.setProperty('--lgv-doc-bg2',g1)}else{root.style.removeProperty('--lgv-doc-bg1');root.style.removeProperty('--lgv-doc-bg2')}
	}
/*文档站的亮暗开关要立刻生效：只盯 data-theme 变化，避免自己写 style 触发自己*/
	if(isDocHost()){
		try{let lastDT=document.documentElement.getAttribute('data-theme')
			new MutationObserver(()=>{const v=document.documentElement.getAttribute('data-theme')
				if(v===lastDT)return
				lastDT=v;applyDocTheme()}).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']})
		}catch(e){}
	}
	async function syncBg(){applyDocTheme();const sig0=pageSig();const k0=sigKey(sig0);const fresh=k0!==lastSig;lastSig=k0;const at=await appliedTheme(fresh)
		if(at){const body=sig0 .dark?at.dBody:at.lBody
			if(body){writeDocTheme(at.name,at.lBody,at.dBody);applyThemeConfig(body,sig0 .dark?at.dNavi:at.lNavi,'已应用主题 #'+at.id,sig0 .dark);return}}
		let own=siteImage()
		if(own&&own===ourUrl)own=null
		const sig=pageSig();let list=null
		if(!own){list=await ensureCatalog()
			if(!list||!list.length)return
			const t=pickTheme(list,sig)
			if(!t||!t.config)return
			writeDocTheme(t.name,t.config.lBody,t.config.dBody)
			applyThemeConfig(sig.dark?t.config.dBody:t.config.lBody,sig.dark?t.config.dNavi:t.config.lNavi,t.name,sig.dark);return}
		if(own!==curBg){curBg=own;document.documentElement.style.setProperty('--lgv-bg','url("'+own+'")');document.documentElement.classList.add('lgv-bg')
			curBgStyle={url:own,size:'cover',pos:'center',mid:''};paintBg(own,'cover','center','')}
		list=await ensureCatalog()
		if(!list||!list.length)return
		const t=pickTheme(list,sig)
		if(t&&t.config){const body=sig.dark?t.config.dBody:t.config.lBody
			if(body&&body.back)document.documentElement.style.setProperty('--lgv-mid',body.back)
			writeDocTheme(t.name,sig.dark?null:body,sig.dark?body:null)}
	}
/*===== 圆角扫描 =====*/
	let timer=null
/*── 比赛题目打钩：自己过的题打绿钩，小队成员过的题打灰钩 ──*/
	const CM_CACHE=new Map()
	function cmCid(){const m=/[?&]contestId=(\d+)/.exec(location.search)
		if(m)return m[1]
		return''}
	function cmPick(a){const m=/\/problem\/([A-Za-z0-9_]+)/.exec(a.getAttribute('href')||'');return m?m[1]:''}
	function cmClear(a){const b=a.querySelector(':scope > .lgv-cmark')
		if(b)b.remove()
		a.classList.remove('lgv-has-cmark')}
	function cmMark(a,kind){let b=a.querySelector(':scope > .lgv-cmark')
		if(!b){b=document.createElement('i');a.appendChild(b);a.classList.add('lgv-has-cmark')}
		b.className='lgv-cmark '+(kind==='team'?'lgv-team':'lgv-ok');b.textContent='✓'}
	function cmDraw(mine,squad){let n=0
		document.querySelectorAll('.contest-problem-switch a.contest-problem').forEach((a)=>{const pid=cmPick(a)
			if(!pid){cmClear(a);return}
			if(mine.has(pid)){cmMark(a,'ok');n++}else if(squad.has(pid)){cmMark(a,'team');n++}else cmClear(a)})
		return n}
	function pageUid(){const m=/(?:^|;\s*)_uid=(\d+)/.exec(document.cookie||'')
		if(m)return m[1]
		try{if(window._feInjection&&_feInjection.currentUser&&_feInjection.currentUser.uid)return String(_feInjection.currentUser.uid)}catch(e){}
		try{const el=document.getElementById('lentille-context')
			if(el){const cu=(JSON.parse(el.textContent)||{}).data
				if(cu&&cu.currentUser&&cu.currentUser.uid)return String(cu.currentUser.uid)}}catch(e){}
		return''}
	async function cmLoad(cid){const now=Date.now();const hit=CM_CACHE.get(cid)
		if(hit&&now-hit.t<60000)return hit
		const mine=new Set(), squad=new Set();const uid=pageUid()
		if(!uid)return{t:0,mine,squad}
		try{const first=await fetch('/record/list?contestId='+cid+'&user='+encodeURIComponent(uid)+'&page=1',{credentials:'include'});const pages=[];const html=await first.text();pages.push(html);let per=20, count=0
			try{const doc0=new DOMParser().parseFromString(html,'text/html');const c0=JSON.parse(doc0 .getElementById('lentille-context').textContent).data.records;per=c0 .perPage||20;count=c0 .count||0}catch(e){}
			const more=Math.min(4,Math.max(0,Math.ceil(count/per)-1))
			for(let i=0;i<more;i++){const r=await fetch('/record/list?contestId='+cid+'&user='+encodeURIComponent(uid)+'&page='+(i+2),{credentials:'include'});pages.push(await r.text())}
			pages.forEach((t)=>{
				try{const doc=new DOMParser().parseFromString(t,'text/html');const el=doc.getElementById('lentille-context')
					if(!el)return
					const d=JSON.parse(el.textContent).data ;((d.records&&d.records.result)||[]).forEach((x)=>{const ru=x.user&&(x.user.uid||x.user.id)
						if(ru&&String(ru)!==uid)return
						if(Number(x.status)===12&&x.problem&&x.problem.pid)mine.add(x.problem.pid)})
				}catch(e){}
			})
		}catch(e){}
		try{const j=await(await fetch('/contest/'+cid+'/scoreboard',{credentials:'include'})).json();const det=j&&j.userScore&&j.userScore.details
			if(det)
			Object.keys(det).forEach((pid)=>{const v=det[pid]||{}
				if(Number(v.runningTime)>0&&Number(v.score)>=0)squad.add(pid)})}catch(e){}
		const out={t:now,mine,squad};CM_CACHE.set(cid,out);return out}
	let cmRunning=false
	function contestMarks(){if(!document.querySelector('.contest-problem-switch'))return 0
		const cid=cmCid()
		if(!cid||cmRunning)return 0
		const hit=CM_CACHE.get(cid)
		if(hit){cmDraw(hit.mine,hit.squad)}
		if(hit&&Date.now()-hit.t<60000)return 1
		cmRunning=true;cmLoad(cid)
		.then((d)=>{cmRunning=false
			try{cmDraw(d.mine,d.squad)}catch(e){}})
		.catch(()=>{cmRunning=false});return 1}
	function sync(){
/*切主题：卡片档位按旧纸色量的，清掉 --lgv-rgb 才跟着变*/
		{const m0=document.documentElement.classList.contains('lgv-dark')?'dark':'light'
			if(window.__lgvPageMode&&window.__lgvPageMode!==m0){
				document.querySelectorAll('.lgv-a65,.lgv-a80,.lgv-a85,.lgv-a70,.lgv-feed').forEach((el)=>{
					if(el.style.getPropertyValue('--lgv-rgb'))el.style.removeProperty('--lgv-rgb')})
				if(document.documentElement.style.getPropertyValue('--lgv-paper'))document.documentElement.style.removeProperty('--lgv-paper')}
			window.__lgvPageMode=m0}
		revalidate();syncMaskTone()
		try{tagUser()}catch(e){}
		markComments();articlePaper();adNudge();markBenben();tagBars();stripBankGroup();scanBlocks();scanModules();scanTiles();scanChips();unroundHighlights()
		try{contestMarks()}catch(e){}}
	let bgTimer=null;let mineTimer=null;let lastPath=location.pathname
	function kickMine(){mergeMine().then((n)=>{if(n)syncBg()})}
	function watchMode(){if(window.__lgvWatch)return
		window.__lgvWatch=true;let t=0
		const kick=()=>{clearTimeout(t)
			t=setTimeout(()=>{curKey='';revalidate();syncMaskTone();articlePaper();markBenben();clearOpaque();syncBg() ;[180,450,900,1600].forEach((d)=>setTimeout(()=>syncMaskTone(),d))
			},80)
		}
		const stripLgv=(v)=> String(v||'') .replace(/lgv-[a-z0-9-]+/g,'') .replace(/\s+/g,' ') .trim()
		const stripStyle=(v)=> String(v||'') .replace(/--lgv-[a-z0-9-]+\s*:\s*[^;]*;?/gi,'') .replace(/\s+/g,'')
		const mo=new MutationObserver((list)=>{
			for(const m of list){
				if(m.type==='attributes'){
/*站点自己改了亮暗：把偏好跟着改成站点的值，再整页重画，别两边各说各话*/
					if(m.attributeName==='data-lcolor-theme'){const raw=(m.target.getAttribute('data-lcolor-theme')||'').toLowerCase()
/*站点用「去掉属性」表示浅色，所以空值也算一次有效的亮暗变更*/
						if(raw==='dark'||raw==='light'||raw===''){const isDark=raw==='dark';const want=isDark?'dark':'light'
							try{if(lgvPref()!==want){localStorage.setItem('lgv-theme',want)}}catch(e){}
							if(document.documentElement.classList.contains('lgv-dark')===isDark)continue
							try{fullRender(true)}catch(e){}
							continue}
					}
					if(m.attributeName==='class'&&stripLgv(m.oldValue)===stripLgv(m.target.getAttribute('class')))continue
					if(m.attributeName==='style'&&stripStyle(m.oldValue)===stripStyle(m.target.getAttribute('style')))continue
					kick();return}
				if(m.type==='childList'||m.type==='characterData'){kick();return}}
		})
		try{
			mo.observe(document.documentElement,{ attributes:true, attributeOldValue:true, attributeFilter:['class','style','data-theme','data-mode','data-lcolor-theme'], })}catch(e){mo.observe(document.documentElement,{attributes:true,attributeOldValue:true,attributeFilter:['class','style','data-theme','data-mode']})}
		if(document.body)mo.observe(document.body,{attributes:true,attributeOldValue:true,attributeFilter:['class','style']})
		const tag=document.getElementById('luogu-theme')
		if(tag)mo.observe(tag,{childList:true,characterData:true,subtree:true})
		window.addEventListener('storage',(e)=>{if(!e.key)return
			if(/theme|dark|light|mode|pref/i.test(e.key))kick()})
		if(window.matchMedia){try{window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',kick)}catch(e){}}}
	function startBg(){if(bgTimer)return
		syncBg();kickMine()
		bgTimer=setInterval(()=>{revalidate();markComments();syncMaskTone();articlePaper();adNudge();markBenben();unroundHighlights();syncBg();syncGlassAll();clearOpaque()
			if(curBgStyle&&document.body){
				if(curBgStyle.url&&!document.body.style.getPropertyValue('background-image'))
				paintBg(curBgStyle.url,curBgStyle.size,curBgStyle.pos,curBgStyle.mid)
				if(document.body.style.getPropertyValue('background-color')!==curBgStyle.mid&&curBgStyle.mid)
				document.body.style.setProperty('background-color',curBgStyle.mid,'important')
			}
			if(location.pathname!==lastPath){lastPath=location.pathname
				if(location.pathname.indexOf('/theme')===0)kickMine()}},4000)
		mineTimer=setInterval(kickMine,180000);let st=0;WIN.__lgvDirty=1
		window.addEventListener(
		'scroll',
		()=>{if(!WIN.__lgvDirty)return
			WIN.__lgvDirty=0;clearTimeout(st);st=setTimeout(()=>markBenben(),200)},
		{passive:true,capture:true},
		)
		document.addEventListener(
		'click',
		(ev)=>{clearTimeout(st);const t2=ev.target&&ev.target.closest?ev.target:null;const panel=t2?t2 .closest('.lg-index-benben')||t2 .closest('[class*="benben"]'):null
			if(panel){panel.querySelectorAll('[data-lgv-done]').forEach((e)=>e.removeAttribute('data-lgv-done'));st=setTimeout(()=>{markBenben(true);revalidate()},120)}else{st=setTimeout(()=>markBenben(),120)}
		},
		true,
		)
		let bt=0
		try{
			const bodyMo=new MutationObserver((muts)=>{let added=false
				for(const m of muts){for(const n of m.addedNodes){if(n.nodeType===1&&!/lgv-/.test(n.className||'')){added=true;break}}
					if(added)break}
				WIN.__lgvDirty=1
				if(!added)return
				clearTimeout(bt);bt=setTimeout(()=>{revalidate();markBenben()},320)})
			bodyMo.observe(document.body,{childList:true,subtree:true})}catch(e){}
		document.addEventListener('visibilitychange',()=>{if(!document.hidden)syncBg()})}
/*===== 全局搜索 =====*/
/*候选项分类色表（生成 CSS）*/
	const TAG_COLOR={
		题目:'#3b82f6',
		用户:'#a855f7',
		帖子:'#14b8a6',
		文章:'#f59e0b',
		比赛:'#ef4444',
		题单:'#22c55e',
		页面:'#64748b',
		讨论:'#14b8a6',
		评测:'#8b5cf6',
		记录:'#8b5cf6',
		队伍:'#ec4899',
		团队:'#ec4899',
		动态:'#0ea5e9',
		专栏:'#f59e0b',
	}
	const TAG_CSS=Object.keys(TAG_COLOR)
	.map((k)=>{const c=TAG_COLOR[k];return'body .lgv-stag[data-t="'+k+'"],body .lgv-s2-tag[data-t="'+k+'"]{color:'+c+';border-color:'+c+'59;background:'+c+'14}'})
	.join('\n')
	const SEARCH_CSS=`
/*题库分类条：拆联合框成独立胶囊，支持折叠与滑块*/ html body .block-item.category ul.lgv-tabs{position:relative!important;display:inline-flex!important;
align-items:center!important;gap:6px!important;background:transparent!important;border:0!important;padding:0!important;
border-radius:0!important}
html body .block-item.category ul.luogu.lgv-tabs{color:inherit!important}
html body .block-item.category ul.lgv-tabs>li{position:relative!important;z-index:1;display:inline-flex!important;
align-items:center!important;padding:2px 9px!important;border-radius:3px!important;background:transparent!important;
color:inherit!important;white-space:nowrap;overflow:hidden;transition:color .2s ease,max-width .32s cubic-bezier(.22,.72,.25,1),opacity .22s ease,
padding .32s cubic-bezier(.22,.72,.25,1),margin .32s cubic-bezier(.22,.72,.25,1)}
html body .block-item.category ul.lgv-tabs>li.selected{color:#fff!important;background:transparent!important}
html body .block-item.category ul.lgv-tabs>li.lgv-folded{max-width:0!important;opacity:0!important;padding-left:0!important;
padding-right:0!important;margin-left:-6px;pointer-events:none}
/*展开时给整组套一层联合阴影（不是每个标签各自一块），收起后只剩洛谷，阴影自然消失*/ html body .block-item.category ul.lgv-tabs{border-radius:3px!important;
transition:box-shadow .24s ease,background-color .24s ease!important}
html body .block-item.category ul.luogu.lgv-tabs{padding:3px 7px!important;margin:-3px -7px!important}
html body .block-item.category ul.luogu.lgv-tabs.lgv-open{background:rgba(var(--lgv-paper,255,255,255),.34)!important;
box-shadow:var(--lgv-fl2)!important}
html body .block-item.category ul.lgv-tabs>li.selected,html body .block-item.category ul.lgv-tabs>li{box-shadow:none!important}
html body .block-item.category .lgv-slide{position:absolute;left:0;top:0;height:100%;width:0;border-radius:3px;
z-index:0;background:#3498db;opacity:0;pointer-events:none;transition:transform .3s cubic-bezier(.22,.72,.25,1),width .3s cubic-bezier(.22,
.72,.25,1),opacity .18s ease}
html body .block-item.category .lgv-caret{display:inline-block;width:0;height:0;margin-left:5px;opacity:.55;
border-left:4px solid currentColor;border-top:4px solid transparent;border-bottom:4px solid transparent;
transform:rotate(0deg);transition:transform .3s cubic-bezier(.22,.72,.25,1),opacity .2s ease;cursor:pointer}
/*展开后箭头不再朝下，而是挪到「入门与面试」右边变成一个小圆点（点它收起）*/ html body .block-item.category .lgv-caret.lgv-caret-end{width:5px!important;
height:5px!important;margin:0 0 0 3px!important;border:0!important;border-radius:50%!important;background:currentColor;
opacity:.4;transform:none!important}
/*暗色首页顶部那张纸描一道亮边，否则看不出是卡*/\nhtml.lgv-dark .lg-index-content .lg-article:has(.lg-punch){box-shadow:0 0 0 1px rgba(255,
255,255,.09)!important}
\n/*暗色外壳：顶条与左右竖栏直接用当前主题 dNavi 的底/字色（亮色一条都不生效）*/
html.lgv-dark .top-bar,html.lgv-dark nav.lside,html.lgv-dark .user-nav.rside{background-color:var(--lgv-dnav-back)!important;
color:var(--lgv-dnav-fore)!important;border-color:transparent!important;background-image:none!important}
html.lgv-dark.lgv-dnav .top-bar :not(.breadcrumb):not(.breadcrumb *),html.lgv-dark.lgv-dnav nav.lside *,html.lgv-dark.lgv-dnav .user-nav.rside :not(.breadcrumb):not(.breadcrumb *):not(.luogu-username):not(.luogu-username *){
color:var(--lgv-dnav-fore)!important}
/*竖栏字色改中性前景，SVG 靠 currentColor 一起覆盖*/
/*站点会重写 --theme-navi-back，用 !important 钉死*/html.lgv-dark nav.lside,html.lgv-dark .top-bar,html.lgv-dark .user-nav.rside{--theme-navi-back:var(--lgv-dnav-back)!important;
--theme-navi-fore:var(--lgv-dnav-fore)!important}
html.lgv-dark nav.lside,html.lgv-dark nav.lside *{color:var(--lgv-lside-fore,var(--lgv-dnav-fore))!important}
html.lgv-dark nav.lside svg,html.lgv-dark nav.lside svg path{fill:currentColor!important;stroke:currentColor!important}
/*悬停不改字色（原站也不改），只留 3px 圆角浮起*/
html.lgv-dark nav.lside a:hover,html.lgv-dark nav.lside a:hover *{color:var(--lgv-lside-fore,var(--lgv-dnav-fore))!important}
/*暗色浮影换黑系，蓝灰影在深底上是灰雾*/
/*面包屑一律用浅色模式那套浮影（--lgv-fl），深浅色不再各写一份*/
/*左上角面包屑：悬停给 3px 圆角 + 浮起阴影，不动底色字色*/ html body .breadcrumb:has(>a:hover){overflow:visible!important}
html body .breadcrumb>a{display:inline-flex!important;align-items:center!important;justify-content:center!important;
padding:4px 8px!important;border-radius:3px!important;line-height:1.35!important;transition:box-shadow .16s ease,background-color .16s ease!important}
html body .breadcrumb>span{padding:0!important;margin:0 -5px!important;opacity:1!important;line-height:1!important;
align-self:center!important;display:inline-flex!important;align-items:center!important}
html body .breadcrumb>a:hover,html body .breadcrumb>a:focus-visible,html body .breadcrumb>span:hover,html body .breadcrumb>a:active,
html body .breadcrumb>a:hover *{filter:none!important;background:transparent!important;background-image:none!important;
outline:none!important;border-radius:3px!important;box-shadow:var(--lgv-fl)!important;color:inherit!important;
-webkit-text-fill-color:currentColor!important}
html body .breadcrumb>a:active{border-radius:3px!important;box-shadow:0 1px 2px rgba(28,40,56,.12)!important}
/*分隔符/末级纯文本也能悬停：只加圆角与浮起，不参与链接色*/
html body .breadcrumb:has(>span:hover){overflow:visible!important}
html body .breadcrumb>span{padding:4px 8px!important;margin:0 -3px!important;border-radius:3px!important;
transition:box-shadow .16s ease,background-color .16s ease}
html body .breadcrumb>span:hover{box-shadow:var(--lgv-fl)!important}
/*logo 也吃面包屑：3px 圆角 + 悬停浮起*/
html body a.logo-link,html body a.logo-link .header-logo{border-radius:3px!important;transition:box-shadow .16s ease!important}
html body a.logo-link:hover,html body a.logo-link:focus-visible{box-shadow:var(--lgv-fl)!important}
/*左右竖栏条目：沿用面包屑那套悬停——3px 圆角 + 浮起阴影，不涂底色不改字色*/html body nav.sidebar.lside a[href],html body nav.sidebar.lside li,html body nav.lside.drawer a[href],
html body nav.lside.drawer li,html body .user-nav.rside a[href],html body .user-nav.rside li,html body .side-toggle{border-radius:3px!important;
transition:box-shadow .16s ease!important}
/*只给最里那一层加浮影：站点把条目做成 li/div 套 a 两层，两层都加就是「两层面包屑」；
   外层一律清掉，只留 a（或者里面没 a 的 li，比如那些纯文字条目）*/
html body nav.sidebar.lside a[href]:hover,html body nav.lside.drawer a[href]:hover,html body .user-nav.rside a[href]:hover,
html body nav.sidebar.lside li:not(:has(a)):hover,html body nav.lside.drawer li:not(:has(a)):hover,
html body .user-nav.rside li:not(:has(a)):hover,html body .side-toggle:hover{filter:none!important;
box-shadow:var(--lgv-fl)!important}
html body nav.sidebar.lside li:has(>a[href]:hover),html body nav.sidebar.lside div:has(>a[href]:hover),
html body nav.lside.drawer li:has(>a[href]:hover),html body nav.lside.drawer div:has(>a[href]:hover),
html body .user-nav.rside li:has(>a[href]:hover),html body .user-nav.rside div:has(>a[href]:hover){box-shadow:none!important;
filter:none!important}
/*竖栏悬停不涂底色，站点刷的白层在暗色里发灰*/
html body nav.sidebar.lside li:hover,html body nav.sidebar.lside a[href]:hover,html body nav.lside.drawer li:hover,html body nav.lside.drawer a[href]:hover,
html body .user-nav.rside li:hover,html body .user-nav.rside a[href]:hover{background-color:transparent!important;
background-image:none!important}
/*暗色外壳里换暗影 + 一圈高光，柔影压上去看不见*/
html.lgv-dark.lgv-dnav nav.lside a[href]:hover,html.lgv-dark.lgv-dnav nav.lside.drawer a[href]:hover,
html.lgv-dark.lgv-dnav nav.lside li:not(:has(a)):hover,html.lgv-dark.lgv-dnav nav.lside.drawer li:not(:has(a)):hover,
html.lgv-dark.lgv-dnav .side-toggle:hover{box-shadow:0 1px 2px rgba(0,0,0,.5),0 3px 9px rgba(0,
0,0,.42),0 7px 18px rgba(0,0,0,.28)!important}
html.lgv-dark.lgv-dnav nav.lside li:has(>a[href]:hover),html.lgv-dark.lgv-dnav nav.lside div:has(>a[href]:hover),
html.lgv-dark.lgv-dnav nav.lside.drawer li:has(>a[href]:hover),html.lgv-dark.lgv-dnav nav.lside.drawer div:has(>a[href]:hover){box-shadow:none!important}
/*搜索面板里这套只给按钮，输入框和面板本体不浮起来*/html body #lgv-search .lgv-shead:hover,html body #lgv-search-input:hover,html body #lgv-search .lgv-sbody:hover{box-shadow:none!important}
html body #lgv-search .lgv-sbtn{border-radius:3px!important;transition:box-shadow .16s ease}
html body #lgv-search .lgv-sbtn:hover{box-shadow:var(--lgv-fl)!important}
/*顶部四个小钮跟面包屑同一套悬停*/
html body .top-bar .nav-search,html body .top-bar .nav-search>a,html body .top-bar a.link,html body .top-bar span:has(>svg),html body .top-bar span:has(>svg)>span{
border-radius:3px!important;transition:box-shadow .16s ease,background-color .16s ease}
html body .top-bar .nav-search:hover,html body .top-bar .nav-search>a:hover,html body .top-bar a.link:hover,html body .top-bar span:has(>svg):hover,
html body .top-bar span:has(>svg)>span:hover{box-shadow:var(--lgv-fl)!important;background:transparent!important}
/*暗色：路径用中性色，别跟链接色；顶条变深后靠这个才看得见*/
/*面包屑（左上角路径）：原站整条就是导航字体色一种色，链接/当前页/斜杠都不分层。
	暗色下站点仍按亮色配置给 #224466，压在深红顶条上等于看不见，所以统一换成主题暗色配置的字体色*/
html.lgv-dark .top-bar .breadcrumb,html.lgv-dark .top-bar .breadcrumb *,
html.lgv-dark .top-bar .breadcrumb>a,html.lgv-dark .top-bar .breadcrumb>a:hover,html.lgv-dark .top-bar .breadcrumb>a:focus-visible,
html.lgv-dark .top-bar .breadcrumb>a[aria-current="page"],html.lgv-dark .top-bar .breadcrumb>a.router-link-active,
html.lgv-dark .top-bar .breadcrumb>span{color:var(--lgv-lside-fore,var(--lgv-dnav-fore))!important;background-image:none!important}
#lgv-search-fab{position:fixed;right:22px;bottom:22px;width:46px;height:46px;min-width:46px;padding:0;
border:0!important;border-radius:50%!important;display:flex;align-items:center;justify-content:center;
cursor:pointer;background:#161616!important;color:#fafafa!important;box-shadow:0 6px 18px rgba(0,0,0,.28);
z-index:2147483000;transition:transform .16s ease,box-shadow .16s ease,background .16s ease,color .16s ease}
#lgv-search-fab:hover{transform:scale(1.07);box-shadow:0 9px 24px rgba(0,0,0,.38)}
#lgv-search-fab.lgv-dark{background:#fff!important;color:#111!important;box-shadow:0 6px 18px rgba(0,0,0,.45)}
/*暗色：白底黑放大镜（浅色是黑底白放大镜，见上面默认那条）*/
/*帮助中心：圆钮跟着文档站自己的 data-theme 走，别在暗色里翻成一块白*/ html.docs-wrapper #lgv-search-fab,html[data-theme="light"] #lgv-search-fab{background:rgba(255,
255,255,.96)!important;color:#31363d!important;border:1px solid rgba(16,22,30,.10)!important;box-shadow:0 1px 3px rgba(16,22,30,.10),
0 6px 16px rgba(16,22,30,.14)!important}
html[data-theme="dark"] #lgv-search-fab{background:#252a31!important;color:#e7e9ec!important;border:1px solid rgba(255,255,255,.12)!important;
box-shadow:0 1px 3px rgba(0,0,0,.45),0 8px 20px rgba(0,0,0,.55)!important}
#lgv-search-fab.lgv-on{transform:rotate(90deg)}#lgv-search-fab svg{width:22px;height:22px;display:block;pointer-events:none}
#lgv-search{position:fixed;right:22px;bottom:80px;width:min(800px,calc(100vw - 24px));height:min(560px,calc(100vh - 104px));
height:min(560px,calc(100dvh - 104px));max-height:calc(100vh - 104px);max-height:calc(100dvh - 104px);
display:flex;flex-direction:column;overflow:hidden;z-index:2147483001;font:14px/1.55 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,
"PingFang SC","Microsoft YaHei",sans-serif;--lgv-sp-paper:255,255,255;background:rgba(var(--lgv-sp-paper),.82);
backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);color:#1c1c1c;border-radius:14px!important;
box-shadow:0 18px 50px rgba(0,0,0,.28);visibility:hidden;opacity:0;pointer-events:none;transform:scale(.94) translateY(10px);
transform-origin:calc(100% - 23px) calc(100% + 58px);transition:opacity .26s ease,transform .44s cubic-bezier(.22,.72,.25,1),visibility 0s linear .44s}
#lgv-search.lgv-open{visibility:visible;opacity:1;pointer-events:auto;transform:none;transition:opacity .26s ease,transform .44s cubic-bezier(.22,
.72,.25,1),visibility 0s}
#lgv-search.lgv-dark{--lgv-sp-paper:29,32,37;color:#e9e9e9;box-shadow:0 18px 50px rgba(0,0,0,.6)}
html.lgv-dark #lgv-search{--lgv-sp-paper:29,32,37;color:#e9e9e9}
.lgv-shead{display:flex;align-items:center;gap:8px;padding:10px 12px;border-bottom:1px solid rgba(127,127,127,.18);flex:0 0 auto}
.lgv-shead svg{width:18px;height:18px;flex:0 0 auto;opacity:.55}
#lgv-search-input{flex:1 1 auto;min-width:0;border:0!important;outline:0!important;background:transparent!important;
color:inherit!important;font:inherit!important;padding:4px 2px!important;box-shadow:none!important;border-radius:6px!important}
.lgv-sbtn{border:0!important;background:transparent!important;color:inherit!important;opacity:.5;cursor:pointer;
font-size:12px!important;line-height:1!important;padding:5px 7px!important;border-radius:6px!important;
box-shadow:none!important}
.lgv-sbtn:hover{opacity:1;background:rgba(127,127,127,.16)!important}.lgv-sbody{overflow:auto;padding:6px;flex:1 1 auto;overscroll-behavior:contain}
.lgv-ssec{padding:8px 8px 3px;font-size:11px;letter-spacing:.06em;opacity:.5}#lgv-s2-list .lgv-ssec{padding:8px 14px 2px}
/*检索中的转圈：一圈小点绕中心转，每点错开淡出（windows 开机那种味道），颜色跟随面板文字色*/ .lgv-spin{position:relative;width:36px;height:36px;
margin:22px auto;color:currentColor;animation:lgvSpinIn .2s ease-out,lgvSpinRot 2s linear infinite;will-change:transform}
.lgv-spin i{position:absolute;left:50%;top:50%;width:4px;height:4px;margin:-2px;border-radius:50%;background:currentColor;
transform:rotate(calc(var(--i) * 36deg)) translateY(-15px);animation:lgvSpinFade 1.6s cubic-bezier(.35,0,.35,1) infinite;
animation-delay:calc(var(--i) * .16s);will-change:opacity}
@keyframes lgvSpinRot{to{transform:rotate(360deg)}}@keyframes lgvSpinIn{from{opacity:0}to{opacity:1}}@keyframes lgvSpinFade{0%,100%{opacity:.12}
38%{opacity:1}
62%{opacity:.55}
}
.lgv-sres{display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:8px!important;cursor:pointer;
text-decoration:none!important;color:inherit!important}
.lgv-sres:nth-of-type(even){background:rgba(127,127,127,.055)}
.lgv-sres u,.lgv-s2-row u{text-decoration:underline!important;text-underline-offset:2px;text-decoration-thickness:1px;
font-style:normal;font-weight:inherit;color:inherit}
.lgv-sres:hover,.lgv-sres.lgv-sel{background:rgba(0,0,0,.075)}.lgv-dark .lgv-sres:hover,.lgv-dark .lgv-sres.lgv-sel{background:rgba(255,255,255,.12)}
/*候选项左侧标签：按分类上色（描边 + 淡底，字色跟站点色板）*/ ${TAG_CSS}
 .lgv-stag[data-t=""],.lgv-s2-tag[data-t=""]{color:#64748b;border-color:rgba(127,127,127,.34);background:transparent}
.lgv-stag{flex:0 0 auto;display:inline-flex;align-items:center;justify-content:center;height:16px;font-size:10.5px;
line-height:1;padding:0 5px;border-radius:var(--lgv-tag-r)!important;border:1px solid rgba(127,127,127,.34);
background:rgba(0,0,0,.05);white-space:nowrap;box-sizing:border-box}
.lgv-dark .lgv-stag{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.26)}
.lgv-smain{flex:1 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.lgv-ssub{flex:0 0 auto;font-size:12px;opacity:.45;max-width:44%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.lgv-sempty{padding:20px 14px;text-align:center;font-size:13px;opacity:.55;line-height:1.75;white-space:pre-line}
.lgv-pv-title{font-size:15px;font-weight:600;line-height:1.5;margin-bottom:6px}
.lgv-pv-meta{font-size:11px;opacity:.5;margin-bottom:10px;line-height:1.75}
/*翻页器：当前页高亮（兜底，防止换页后高亮停在旧页）*/ .page-bar .lgv-pg-on,.pagination .lgv-pg-on{background-color:#217dbb!important;
color:#fff!important;border-color:#217dbb!important;border-radius:8px!important;display:inline-flex!important;
align-items:center!important;justify-content:center!important;height:24px!important;min-height:24px!important;
line-height:24px!important;padding:0 6px!important;box-sizing:border-box!important}
/*预览里的 markdown：内容直接用站点渲染结果（.lfe-marked），这里只管尺寸/溢出*/ .lgv-md{font-size:12.5px;line-height:1.68;word-break:break-word;overflow-wrap:anywhere}
.lgv-md>*:first-child{margin-top:0}
.lgv-md>*:last-child{margin-bottom:0}
.lgv-md p{margin:5px 0}
.lgv-md h1,.lgv-md h2,.lgv-md h3,.lgv-md h4,.lgv-md h5,.lgv-md h6{font-size:13px!important;line-height:1.4;
margin:9px 0 5px;font-weight:600}
.lgv-md h1{font-size:14px!important}
.lgv-md ul,.lgv-md ol{margin:5px 0;padding-left:1.3em}
.lgv-md li{margin:2px 0}
.lgv-md code{font-size:11.5px;padding:1px 4px;border-radius:4px;background:rgba(127,127,127,.16)}
.lgv-md pre{font-size:11.5px;line-height:1.55;padding:8px 10px;border-radius:6px;background:rgba(127,127,127,.12);overflow:auto;margin:6px 0}
.lgv-md pre code{padding:0;background:none}.lgv-md blockquote{margin:6px 0;padding:2px 10px;border-left:3px solid rgba(127,127,127,.35);opacity:.86}
.lgv-md img{max-width:100%!important;height:auto!important;border-radius:6px;display:block;margin:6px 0}
.lgv-md .lgv-tblw{overflow:auto;max-width:100%;margin:6px 0}
.lgv-md table{display:table;border-collapse:collapse;font-size:11.5px;min-width:100%}
.lgv-md th,.lgv-md td{border:1px solid rgba(127,127,127,.3);padding:3px 7px;vertical-align:top}
.lgv-md th{background:rgba(127,127,127,.10);font-weight:600;white-space:nowrap}.lgv-md details.lgv-spoiler>div{padding-top:5px}
.lgv-md hr{border:0;border-top:1px solid rgba(127,127,127,.25);margin:8px 0}.lgv-md a{color:#0e90d2;text-decoration:none}
.lgv-md a:hover{text-decoration:underline}
/*:::info 一类提示块*/ .lgv-md .lgv-box{margin:6px 0;padding:6px 10px 7px;
border-radius:6px;border-left:3px solid var(--bc,#3b82f6);background:var(--bb,rgba(59,130,246,.10))}
.lgv-md .lgv-box-t{font-size:11.5px;font-weight:600;color:var(--bc,#3b82f6);margin-bottom:3px;letter-spacing:.02em}
.lgv-md .lgv-box-info{--bc:#3b82f6;--bb:rgba(59,130,246,.10)}
.lgv-md .lgv-box-warning{--bc:#e6a23c;--bb:rgba(230,162,60,.12)}.lgv-md .lgv-box-success{--bc:#22c55e;--bb:rgba(34,197,94,.10)}
.lgv-md .lgv-box-error{--bc:#ef4444;--bb:rgba(239,68,68,.10)}.lgv-md .lgv-box-tip{--bc:#0e90d2;--bb:rgba(14,144,210,.10)}
.lgv-md .lgv-box-note{--bc:#64748b;--bb:rgba(100,116,139,.10)}
.lgv-md .lgv-box p:last-child{margin-bottom:0}
/*:::spoiler 折叠块*/ .lgv-md .lgv-spoiler{margin:6px 0;border:1px solid rgba(127,127,127,.28);border-radius:6px;
padding:4px 9px}
.lgv-md .lgv-spoiler>summary{cursor:pointer;font-size:12px;font-weight:600;opacity:.9;list-style:none;
user-select:none}
.lgv-md .lgv-spoiler>summary::-webkit-details-marker{display:none}
.lgv-md .lgv-spoiler>summary::before{content:'▸';display:inline-block;width:12px;opacity:.6;transition:transform .2s ease}
.lgv-md .lgv-spoiler[open]>summary::before{transform:rotate(90deg)}.lgv-md .lgv-spoiler[open]>summary::before{content:'▾ '}
.lgv-md .lgv-spoiler-bd{padding-top:4px}
/*公式：$$…$$ 块级、$…$ 行内*/ .lgv-md .lgv-math{font-family:"Cambria Math",Cambria,"Times New Roman",serif;font-size:1.02em;
padding:0 1px}
.lgv-md .lgv-mathb{display:block;text-align:center;padding:4px 0;overflow-x:auto;font-size:1.05em}.lgv-mathb .tx{display:inline-block}
.tx{font-family:"Cambria Math",Cambria,"Times New Roman",serif;font-style:italic;white-space:nowrap}
.tx sup,.tx sub{font-size:.72em;line-height:0;font-style:normal}
.tx-f{display:inline-flex;flex-direction:column;vertical-align:-.52em;align-items:center;margin:0 .14em;
font-size:.94em}
.tx-n{border-bottom:1px solid currentColor;padding:0 .2em;line-height:1.25}
.tx-d{padding:0 .2em;line-height:1.25}
.tx-sq .tx-r{border-top:1px solid currentColor;padding:0 .14em;margin-left:-.04em}
.tx-fn{font-style:normal;margin-right:.12em}
.tx-t{font-style:normal}
.lgv-md details{margin:6px 0}
.lgv-md summary{cursor:pointer;opacity:.86}
.lgv-pv-empty{font-size:12px;opacity:.45;line-height:1.8;padding-top:4px}
.lgv-sprev{display:none;flex:0 0 auto;overflow:auto;padding:10px 14px 12px;border-top:1px solid rgba(127,127,127,.18);
background:rgba(127,127,127,.04)}
/*半屏：左候选 / 右预览*/ #lgv-search .lgv-srow{display:flex;flex:1 1 auto;min-height:0;overflow:hidden}
#lgv-search .lgv-srail{flex:0 0 84px;border-right:1px solid rgba(127,127,127,.14);padding:10px 6px;overflow:auto}
.lgv-rcat{display:flex;align-items:center;justify-content:center;height:22px;border-radius:8px!important;
font-size:11px;color:#5f6470;cursor:pointer;user-select:none;border:1px solid transparent;margin-bottom:9px;
position:relative}
.lgv-rcat::before{content:'';width:5px;height:5px;border-radius:50%;background:var(--c);opacity:.85;margin-right:5px}
.lgv-rcat.on{color:color-mix(in srgb,var(--c) 45%,transparent);background:#fff;border-color:var(--c);
box-shadow:none}
/*暗色：底色压成黑，描边还是分类色*/html.lgv-dark .lgv-rcat,html.lgv-dark .lgv-s2-cat{color:#c9c9c9}
html.lgv-dark .lgv-rcat.on,html.lgv-dark .lgv-s2-cat.on,#lgv-search.lgv-dark .lgv-rcat.on,#lgv-s2.lgv-dark .lgv-s2-cat.on{background:#000;
color:color-mix(in srgb,var(--c) 45%,transparent);border-color:var(--c);box-shadow:none}
/*标签勾选框右半边：暂时仅查找（单选）——圆角框，选中后框内涂满该分类色*/
.lgv-rcat,.lgv-s2-cat{position:relative}
.lgv-catlab{pointer-events:none}
.lgv-catonly{position:absolute;top:3px;bottom:3px;right:3px;width:16px;border-radius:5px;box-sizing:border-box;
border:1px solid color-mix(in srgb,var(--c) 55%,transparent);background:transparent;cursor:pointer;transition:background-color .16s ease,
border-color .16s ease}
.lgv-catonly:hover{border-color:var(--c);background:color-mix(in srgb,var(--c) 22%,transparent)}
.lgv-catonly.on{background:var(--c);border-color:var(--c)}
.lgv-rcat{padding-right:26px!important}.lgv-s2-cat{padding-right:26px!important}
/*标签勾选：彩色点 85%、文字 45%；悬停 .75、按下 1，半屏全屏同一套*/.lgv-rcat,.lgv-s2-cat,.lgv-rcat.on,
.lgv-s2-cat.on{opacity:1;color:color-mix(in srgb,currentColor 45%,transparent)}
.lgv-rcat .lgv-catlab,.lgv-s2-cat .lgv-catlab{color:color-mix(in srgb,var(--lgv-ink,#f5f5f5) 45%,transparent)!important}
.lgv-rcat:hover .lgv-catlab,.lgv-s2-cat:hover .lgv-catlab{color:color-mix(in srgb,var(--lgv-ink,#f5f5f5) 75%,transparent)!important}
.lgv-rcat:active .lgv-catlab,.lgv-s2-cat:active .lgv-catlab{color:var(--lgv-ink,#f5f5f5)!important}
.lgv-rcat:hover,.lgv-s2-cat:hover{color:color-mix(in srgb,currentColor 75%,transparent)}
.lgv-rcat.on:hover{color:color-mix(in srgb,var(--c) 75%,transparent)}
.lgv-s2-cat.on:hover{color:color-mix(in srgb,var(--c) 75%,transparent)}
.lgv-rcat:active,.lgv-s2-cat:active{color:color-mix(in srgb,currentColor 100%,transparent)}
#lgv-search .lgv-sbody{flex:1 1 auto;min-width:0;height:100%;overflow:auto;padding:6px}
#lgv-search .lgv-sprev{display:none;flex:0 0 320px;height:100%;max-height:none;overflow:auto;border-top:0;
border-left:1px solid rgba(127,127,127,.16);background:rgba(127,127,127,.04);padding:12px 14px}
#lgv-search .lgv-sprev.lgv-show{display:block}
@media (max-height:600px){#lgv-search{right:10px;bottom:10px;height:calc(100vh - 20px);height:calc(100dvh - 20px);
max-height:calc(100vh - 20px);max-height:calc(100dvh - 20px);width:min(800px,calc(100vw - 20px))}
}
/*搜索框右侧的「题面」勾选框*/ .lgv-stmt{display:inline-flex!important;align-items:center!important;gap:4px;flex:0 0 auto;
height:22px;font-size:12px;line-height:1;white-space:nowrap;cursor:pointer;user-select:none;padding:0 2px;
opacity:.55;transition:opacity .2s ease}
.lgv-stmt:hover,.lgv-stmt.on{opacity:.85}
.lgv-stmt input{position:absolute;width:1px;height:1px;margin:0;padding:0;opacity:0;pointer-events:none;
appearance:none;-webkit-appearance:none;border:0;background:none}
.lgv-cbx{position:relative;display:inline-block;flex:0 0 auto;box-sizing:border-box;width:13px;height:13px;
background:transparent;border:1.4px solid rgba(0,0,0,.30);border-radius:var(--lgv-tag-r)!important;opacity:1;
transition:border-color .18s,opacity .18s}
.lgv-stmt:hover .lgv-cbx{border-color:rgba(0,0,0,.48)}
.lgv-stmt input:checked+.lgv-cbx{border-color:rgba(0,0,0,.62)}
.lgv-stmt input:checked+.lgv-cbx::after{content:"";position:absolute;left:50%;top:50%;width:3.4px;height:6.4px;
border:solid currentColor;border-width:0 1.5px 1.5px 0;transform:translate(-50%,-58%) rotate(42deg)}
.lgv-stmt input:focus-visible+.lgv-cbx{outline:1px solid currentColor;outline-offset:1px}
html.lgv-dark .lgv-cbx{background:#000!important;border-color:rgba(255,255,255,.16)!important}
html.lgv-dark .lgv-stmt:hover .lgv-cbx{border-color:rgba(255,255,255,.34)!important}
html.lgv-dark .lgv-stmt input:checked+.lgv-cbx{background:#000!important;border-color:rgba(255,255,255,.45)!important}
html.lgv-dark .lgv-stmt input:checked+.lgv-cbx::after{border-color:rgba(255,255,255,.72)}`
	const SEARCH_MAG=
	'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"></circle><path d="M20.5 20.5l-4.2-4.2"></path></svg>'
	function sEl(tag,cls,txt){const n=document.createElement(tag)
		if(cls)n.className=cls
		if(txt!=null)n.textContent=txt
		return n}
	function initSearch(){if(!document.body)return
/*重复注入残留的旧面板先拆掉再重建*/
		const oldFab=document.getElementById('lgv-search-fab')
		if(oldFab){if(oldFab.dataset.lgvVer===VERSION)return
			;['lgv-search','lgv-search-fab','lgv-s2','lgv-s2-mask','lgv-search-style'].forEach((id)=>{const e=document.getElementById(id)
				if(e)e.remove()})}
		if(!document.getElementById('lgv-search-style')){const st=document.createElement('style');st.id='lgv-search-style';st.textContent=SEARCH_CSS ;(document.head||document.documentElement).appendChild(st)
		}
/*---------- 右下角悬浮按钮 ----------*/
		const fab=document.createElement('button');fab.id='lgv-search-fab';fab.dataset.lgvVer=VERSION;fab.type='button';fab.title='全局搜索 · 题目 / 用户 / 帖子 / 文章 / 比赛 / 题单';fab.setAttribute('aria-label','全局搜索');fab.innerHTML=SEARCH_MAG
/*---------- 小搜索框 ----------*/
		const panel=document.createElement('div');panel.id='lgv-search';panel.setAttribute('role','dialog');const head=sEl('div','lgv-shead')
		const icon=document.createElement('span');icon.innerHTML=SEARCH_MAG;const input=document.createElement('input');input.id='lgv-search-input';input.type='text';input.autocomplete='off';input.spellcheck=false;input.placeholder='题目 / 用户名 / UID / 帖子号 / 关键词';const expandBtn=sEl('button','lgv-sbtn','⤢');expandBtn.type='button';expandBtn.title='打开全屏标签搜索';const closeBtn=sEl('button','lgv-sbtn','Esc');closeBtn.type='button'
		const stmtLab=sEl('label','lgv-stmt'+(S2_STMT?' on':''));stmtLab.title='同时匹配题目正文（题面）';const stmtBox=document.createElement('input');stmtBox.type='checkbox';stmtBox.checked=S2_STMT;stmtLab.appendChild(stmtBox);stmtLab.appendChild(sEl('span','lgv-cbx'));stmtLab.appendChild(document.createTextNode('题面'));head.appendChild(icon);head.appendChild(input);head.appendChild(stmtLab);head.appendChild(expandBtn);head.appendChild(closeBtn);const body=sEl('div','lgv-sbody');const sprev=sEl('div','lgv-sprev');const rail=sEl('div','lgv-srail');const HALF_CATS=S2_CATS
		const halfOn=(window.__lgvCats=window.__lgvCats||new Set(HALF_CATS.map((c)=>c[0])))
		try{const v=JSON.parse(localStorage.getItem('lgv-cats')||'null')
			if(Array.isArray(v)&&v.length){halfOn.clear();v.forEach((x)=>halfOn.add(x))}}catch(e){}
		window.__lgvCatsSave=()=>{try{localStorage.setItem('lgv-cats',JSON.stringify([...window.__lgvCats]))}catch(e){}};window.__lgvOnly=window.__lgvOnly||null
		window.__lgvCatPaint=()=>{
			document.querySelectorAll('.lgv-rcat,.lgv-s2-cat').forEach((b)=>{const n=b.dataset&&b.dataset.cat
				if(!n)return
				b.classList.toggle('on',!!window.__lgvCats&&window.__lgvCats.has(n));const on=window.__lgvOnly===n;b.classList.toggle('only',on)
				const r=b.querySelector('.lgv-catonly')
				if(r)r.classList.toggle('on',on)})
		}
		window.__lgvEffective=()=>(window.__lgvOnly?new Set([window.__lgvOnly]):window.__lgvCats)
		window.__lgvCatOnly=(name,rerun)=>{window.__lgvOnly=window.__lgvOnly===name?null:name
/*勾「仅」= 只看这一类，那普通勾选也该跟着落下，否则取消「仅」之后这一类反而不参与搜索*/
			if(window.__lgvOnly&&window.__lgvCats){window.__lgvCats.add(name);if(window.__lgvCatsSave)window.__lgvCatsSave()}
			if(window.__lgvCatPaint)window.__lgvCatPaint()
			if(rerun)
			try{rerun()}catch(e){}}
		window.__lgvCatsSync=()=>{if(window.__lgvCatPaint)window.__lgvCatPaint()}
		window.__lgvCatToggle=(name)=>{if(window.__lgvOnly)window.__lgvOnly=null/*有暂时仅查找：先退出，再改普通勾选*/
			const H=window.__lgvCats
			if(H.has(name))H.delete(name)
			else H.add(name)
			if(window.__lgvCatsSave)window.__lgvCatsSave()
			if(window.__lgvCatsSync)window.__lgvCatsSync()}
		HALF_CATS.forEach(([name,color])=>{const b=sEl('div','lgv-rcat'+(halfOn.has(name)?' on':''),'');b.dataset.cat=name;b.style.setProperty('--c',color);b.title='左边勾选 / 取消这类结果';b.innerHTML='<span class="lgv-catlab">'+name+'</span><b class="lgv-catonly" title="暂时只查这一类（再按一次取消）"></b>'
			b.addEventListener('click',(e)=>{e.preventDefault();e.stopPropagation();const only=e.target&&e.target.closest?e.target.closest('.lgv-catonly'):null
				if(only){window.__lgvCatOnly(name,run);return}
				window.__lgvCatToggle(name)
/*手里已经攥着这个词的全部结果（六类各 50），点一下只是换个看法：
				  缓存对得上就本地切显示，对不上（换词了）才重新捞一次*/
				const kw=String(M.small.input.value||'').trim()
				if(window.__lgvPack&&window.__lgvPack.k===kw&&M.small.rows.length)
					try{halfFilter()}catch(err){}
				else
					try{run()}catch(err){}})
			rail.appendChild(b)})
		if(window.__lgvCatPaint)window.__lgvCatPaint()
		const bodyRow=sEl('div','lgv-srow');bodyRow.appendChild(rail);bodyRow.appendChild(body);bodyRow.appendChild(sprev);panel.appendChild(head);panel.appendChild(bodyRow)
/*本地筛要按「分区」来：结果的分类挂在 .lgv-ssec 小标题上，行本身没有标签。
			  老代码逐行找 .lgv-stag（根本不存在），所以取消一类勾选后列表纹丝不动*/
		function halfFilter(){const eff=window.__lgvEffective?window.__lgvEffective():window.__lgvCats
			const keep=(t)=>{const k=String(t||'').trim();let hit=false;eff.forEach((n)=>{if(!hit&&k.indexOf(n)===0)hit=true});return hit};let cur=null
			Array.prototype.forEach.call(body.children,(el)=>{
				if(el.classList.contains('lgv-ssec')){cur=el.textContent;el.style.display=keep(cur)?'':'none'}else if(el.classList.contains('lgv-sres')){el.style.display=cur===null||keep(cur)?'':'none'}
			})
		}
		window.__lgvHalfFilter=halfFilter;document.body.appendChild(fab);document.body.appendChild(panel)
		const M={small:{root:panel,input:input,body:body,prev:sprev,rows:[],sel:-1}};let token={cancelled:false};let timer=0
		WIN.__lgvApplyDark=function(){try{applyDark()}catch(e){}}
		function applyDark(){const d=detectDark();fab.classList.toggle('lgv-dark',d);panel.classList.toggle('lgv-dark',d)}
		function mark(s){s.rows.forEach((r,i)=>{const on=i===s.sel;r.classList.toggle('lgv-sel',on)
				if(on)r.scrollIntoView({block:'nearest'})})}
		function hlNode(tag,cls,txt,q){const el=sEl(tag,cls);const t=String(txt==null?'':txt), k=String(q||'').trim();const i=k?t.toLowerCase().indexOf(k.toLowerCase()):-1
			if(i<0){el.textContent=t;return el}
			el.appendChild(document.createTextNode(t.slice(0,i)));const u=document.createElement('u');u.textContent=t.slice(i,i+k.length);el.appendChild(u);el.appendChild(document.createTextNode(t.slice(i+k.length)));return el}
		function row(s,it){const a=sEl('a','lgv-sres');const q=(panel.querySelector('input')||{}).value||'';a.href=it.href;const tg=sEl('span','lgv-stag',it.cat||'');tg.setAttribute('data-t',String(it.cat||'').trim());a.appendChild(tg);a.appendChild(hlNode('span','lgv-smain',it.title,q))
			if(it.sub)a.appendChild(sEl('span','lgv-ssub',it.sub))
			a.__it=it;a.addEventListener('mouseenter',()=>selectRow(s,s.rows.indexOf(a)));s.rows.push(a);return a}
		let pvToken=0
		function clearPrev(s){if(!s.prev)return
			s.prev.textContent='';s.prev.classList.remove('lgv-show')}
		async function showPrev(s,it){if(!s.prev)return
			const my=++pvToken
			if(!it){clearPrev(s);return}
			s.prev.textContent='';s.prev.appendChild(sEl('div','lgv-pv-meta','加载预览…'));s.prev.classList.add('lgv-show');let d=null
			try{d=await Promise.race([previewData(it),new Promise((r)=>setTimeout(()=>r(null),6500))])}catch(e){}
			if(my!==pvToken)return
			s.prev.textContent=''
			if(!d)s.prev.appendChild(sEl('div','lgv-pv-empty','没有可预览的内容'))
			else{if(d.title)s.prev.appendChild(sEl('div','lgv-pv-title',d.title))
				if(d.meta)s.prev.appendChild(sEl('div','lgv-pv-meta',d.meta))
				if(d.md)s.prev.insertAdjacentHTML('beforeend','<div class="lgv-md">'+d.md+'</div>')}
			s.prev.classList.add('lgv-show')}
/*预览里的折叠块：点 summary 直接开合，原始 <details> 也照办*/
		function spoilerClick(ev){const sm=ev.target&&ev.target.closest?ev.target.closest('.lgv-md summary'):null
			if(!sm)return
			const d=sm.parentElement
			if(!d||d.tagName!=='DETAILS')return
			ev.preventDefault();ev.stopPropagation();d.open=!d.open}
		document.addEventListener('click',spoilerClick,true)
		function selectRow(s,i){if(!s.rows.length){s.sel=-1;mark(s);showPrev(s,null);return}
			s.sel=Math.max(0,Math.min(i,s.rows.length-1));mark(s);const rowEl=s.rows[s.sel];showPrev(s,rowEl.__it||null)}
		function paint(s,items){s.body.textContent='';s.rows=[];s.sel=-1;const seen=new Set();const list=[]
			for(const it of items){if(seen.has(it.href))continue
				seen.add(it.href);list.push(it)}
			for(const tag of S2_CATS.map((c)=>c[0])){const g=list.filter((x)=>(x.cat||x.section||x.tag)===tag)
				if(!g.length)continue
				const tot=items.counts&&items.counts[tag];s.body.appendChild(sEl('div','lgv-ssec',tag+(tot&&tot>g.length?'  ·  共 '+tot+' 条':'')))
				for(const it of g)s.body.appendChild(row(s,it))}
			if(!list.length)s.body.appendChild(sEl('div','lgv-sempty','没有找到匹配项\n换个关键词，或勾选「搜索题目内容」'))
			s.body.scrollTop=0
			if(s.rows.length)selectRow(s,0)
			else showPrev(s,null)
			if(window.__lgvHalfFilter)
			try{window.__lgvHalfFilter()}catch(e){}}
		async function run(){const q=String(M.small.input.value||'').trim();const onlyAtStart=window.__lgvOnly||null;token.cancelled=true;token={cancelled:false};const my=token
			if(!q){M.small.body.textContent='';M.small.rows=[];M.small.sel=-1;M.small.body.appendChild(sEl('div','lgv-sempty','输入题目编号（如 P1001、CF1A）、用户名、UID、帖子号或关键词'));clearPrev(M.small);return}
			const sp=spinShow(M.small.body);let rows=null
			/*同一个词只捞一次：六类各 50 条全拿回来，改勾选只是把不要的段落藏起来，
			  不再发请求。cache 挂在 window 上，全屏搜索和半屏共用一份*/
			const hit=window.__lgvPack&&window.__lgvPack.k===q?window.__lgvPack.rows:null
			if(hit)rows=hit
			else
			try{rows=await powerSearch( q, window.__lgvEffective?window.__lgvEffective():new Set(S2_CATS.map((c)=>c[0])), ()=>my.cancelled, {} )
				if(rows&&rows.length)window.__lgvPack={k:q,rows}}catch(e){}
			sp.stop()
			if(my.cancelled||M.small.input.value.trim()!==q)return
			if(!rows){M.small.body.textContent='';M.small.rows=[];M.small.sel=-1;M.small.body.appendChild(sEl('div','lgv-sempty','搜索失败，稍后再试一次'));clearPrev(M.small);return}
			paint(M.small,rows);halfFilter()}
/*高度按视口实测，半屏也装得下*/
		function fitPanel(){const vh=WIN.innerHeight||document.documentElement.clientHeight||800;const gap=Math.max(10,Math.min(80,Math.round(vh*0.09)))
			const h=Math.max(260,Math.min(560,vh-gap-14));panel.style.setProperty('bottom',gap+'px','important');panel.style.setProperty('top','auto','important');panel.style.setProperty('height',h+'px','important');panel.style.setProperty('max-height',h+'px','important')}
		function openSmall(fast){applyDark();fitPanel()
			if(fast)panel.style.transition='none'
			panel.classList.add('lgv-open');animHint(panel,fast?60:500);fab.classList.add('lgv-on')
			if(fast)
			requestAnimationFrame(()=>{panel.style.transition=''})
			setTimeout(()=>{try{input.focus();input.select()}catch(e){}},30);run()}
/*全屏缩回半屏时用：带着草稿打开，并立刻按这串词搜一遍*/
		WIN.__lgvOpenHalf=function(v,fast,fromRect){if(v!=null)input.value=v
			openSmall(fast)
			if(fast&&fromRect){flipRect(fromRect,panel,520)
				if(input.value.trim())setTimeout(run,540)}else if(input.value.trim())run()
			try{input.focus();input.setSelectionRange(input.value.length,input.value.length)}catch(e){}}
		function closeAll(fast){if(!fast){try{animHint(panel,500)}catch(e){}}
			if(fast)panel.style.transition='none'
			panel.classList.remove('lgv-open');fab.classList.remove('lgv-on');token.cancelled=true
			if(fast)
			requestAnimationFrame(()=>{panel.style.transition=''})}
		function bindInput(s){s.input.addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(run,240)})
			s.input.addEventListener('keydown',(e)=>{
				if(e.key==='ArrowDown'||e.key==='ArrowUp'){if(!s.rows.length)return
					e.preventDefault();const next=e.key==='ArrowDown'?Math.min(s.sel+1,s.rows.length-1):Math.max(s.sel-1,0);selectRow(s,next)
					try{s.rows[s.sel].scrollIntoView({block:'nearest'})}catch(err){}}else if(e.key==='Enter'){e.preventDefault();const t=s.rows[s.sel>=0?s.sel:0]
					if(t)t.click()}else if(e.key==='Escape'){e.preventDefault();closeAll()}
			})
		}
		bindInput(M.small);fab.addEventListener('mousedown',(e)=>e.stopPropagation())
		fab.addEventListener('click',(e)=>{e.preventDefault();e.stopPropagation();const open=panel.classList.contains('lgv-open')
			if(open)closeAll()
			else openSmall()})
		expandBtn.addEventListener('click',(e)=>{e.preventDefault();e.stopPropagation()
			if(typeof s2Open!=='function'){closeAll();return}
			const r0=panel.getBoundingClientRect()
			try{panelDraft(input.value)}catch(e){}
			closeAll(true);s2Open(true);flipRect(r0,s2Panel,520);s2MaskFade(520,false)})
		closeBtn.addEventListener('click',(e)=>{e.preventDefault();closeAll()})
		stmtBox.addEventListener('change',()=>{setStmt(stmtBox.checked);syncStmtUI()
			if(panel.classList.contains('lgv-open'))run()})
		document.addEventListener(
		'keydown',
		(e)=>{if(e.key==='Escape')closeAll()},
		true,
		)
		document.addEventListener(
		'mousedown',
		(e)=>{if(!panel.classList.contains('lgv-open'))return
			if(panel.contains(e.target)||fab.contains(e.target))return
			closeAll()},
		true,
		)
		applyDark();onWin('resize',()=>{if(panel.classList.contains('lgv-open'))fitPanel()})
		const watch=setInterval(()=>{if(!document.body.contains(fab)){clearInterval(watch);return}
			applyDark()},2000)}
/*翻页高亮兜底：按地址栏 page 同步*/
/*轻量：面板不模糊，底色再实 10 点*/
	function themeLite(){let j=null
		try{const tag=document.getElementById('luogu-theme')
			if(tag)j=JSON.parse(tag.textContent)}catch(e){}
		if(!j){try{j=JSON.parse(localStorage.getItem('lgv-applied')||'null')}catch(e){}}
		if(!j)return false
		const dark=document.documentElement.classList.contains('lgv-dark');const body=dark?j.dBody:j.lBody;const blur=body&&typeof body.blur==='number'?body.blur:1000;return blur<=200}
/*纸色三档的唯一来源：卡片 75%、含输入控件 80%、文章专栏 85%；轻量主题各 +6*/
	function paperTiers(dark){const lite=themeLite()?6:0
/*纸色 = 运行时读到的 luogu 令牌值（tokTriplet），这里只负责叠 alpha*/
		const rgb=tokTriplet()||'255,255,255'
/*开毛玻璃时纸面要更透，不然模糊等于白开*/
		const glass=document.documentElement.classList.contains('lgv-glass-all');const a=(v)=>'rgba('+rgb+',.'+(glass?Math.max(35,v+lite-25):v+lite)+')';return{card:a(75),input:a(80),article:a(80)}}
	function pagerSync(){
		try{const pgs=document.querySelectorAll('.page-bar, .pagination')
			if(!pgs.length)return
			const m=/[?&]page=(\d+)/.exec(location.search);const cur=m?m[1]:'1'
			pgs.forEach((pg)=>{let btns=[...pg.querySelectorAll('button, a')].filter((e)=>/^\d+$/.test((e.textContent||'').trim()))
				if(!btns.length)
				btns=[...pg.querySelectorAll('li, span')].filter((e)=>/^\d+$/.test((e.textContent||'').trim())&&!e.querySelector('li, span, button, a'))
				btns.forEach((b)=>b.classList.toggle('lgv-pg-on',(b.textContent||'').trim()===cur))})
		}catch(e){}
	}
/*提交记录翻页兜底：首行没变就硬刷一次*/
	function recordPagerGuard(){if(!/^\/record\/list/.test(location.pathname))return
		if(WIN.__lgvRecGuard)return
		WIN.__lgvRecGuard=true
		const firstRow=()=>{const row=document.querySelector('.main-container tbody tr, .main-container .record-item, .main-container .l-card')
			return row?(row.textContent||'').replace(/\s+/g,' ').trim().slice(0,140):''}
		let busy=false
		document.addEventListener(
		'click',
		(ev)=>{if(!ev.target||!ev.target.closest)return
			const a=ev.target.closest('.page-bar a, .pagination a, .page-bar button, .pagination button, .page-bar li, .pagination li')
			if(!a)return
			const want=(a.textContent||'').trim()
			if(!/^\d+$/.test(want))return
			const before=firstRow()
			if(!before||busy)return
			busy=true;let n=0
			const t=setInterval(()=>{if(++n>25){clearInterval(t);busy=false;return}
				const m=/[?&]page=(\d+)/.exec(location.search)
				if(!m||m[1]!==want)return
				clearInterval(t);setTimeout(()=>{const now=firstRow();busy=false
					if(now&&now===before){try{location.reload()}catch(e){}}},1500)},120)
		},
		true,
		)
	}
/*页面切换过渡：接管 history，路由一变就给 #app 重放一次淡入*/
/*只认 pathname 变化，查询串切换不算换页*/
	function pageFade(){if(WIN.__lgvFade)return
		WIN.__lgvFade=true
/*只给正文容器放淡入：动 #app 会把顶栏和左右竖栏一起淡掉，看着像整页重刷*/
		const app=()=>document.querySelector('#app>.main-container')||document.querySelector('.main-container')||null;let last=location.pathname, armed=false, t=0;setTimeout(()=>{armed=true;last=location.pathname},1200);const fire=()=>{const a=app()
			if(!armed||document.readyState!=='complete'||!a)return}
/*同外壳子页切换：用标签条当指纹比对，不重放淡入*/
		const shellSig=()=>
		['ul.items','.lfe-tabs','.user-nav','.nav-tabs']
		.map((q)=>{const t=document.querySelector(q)
			return t&&!t.closest('.top-bar')?t.outerHTML.replace(/\s(class|style|aria-current|data-active)="[^"]*"/g,'').replace(/\s+/g,''):''})
		.join('|')
		let clickShell=''
		document.addEventListener(
		'click',
		(ev)=>{const t=ev.target;const a=t&&t.closest?t.closest('a,li,button,[role="tab"],[role="menuitem"]'):null
			if(a)clickShell=shellSig()},
		true,
		)
		const sync=()=>{if(location.pathname===last)return
			last=location.pathname;const prev=clickShell;clickShell=''
			if(prev){setTimeout(()=>{if(shellSig()===prev)return
					fire()},260);return}
			fire()}
		;['pushState','replaceState'].forEach((k)=>{const orig=WIN.history&&WIN.history[k]
			if(typeof orig!=='function'||orig.__lgv)return
			const f=function(){const r=orig.apply(this,arguments)
				try{sync()}catch(e){}
				try{routeKick()}catch(e){}
				return r};f.__lgv=true
			try{WIN.history[k]=f}catch(e){}})
/*站点是 SPA：换页面不重载，只在挂载时跑一次的渲染不补，就会「刷新一下才出来」。
			  这里把路由变化接上，延迟一拍整体重画一次*/
		const routeKick=()=>{try{clearTimeout(window.__lgvRouteT)}catch(e){}
			window.__lgvRouteT=setTimeout(()=>{try{if(typeof fullRender==='function')fullRender(true)}catch(e){}
				try{if(typeof navSkinApply==='function')navSkinApply()}catch(e){}
				try{document.documentElement.classList.toggle('lgv-art',/^\/article\//.test(location.pathname))}catch(e){}},240)
		}
		onWin('popstate',()=>{last=location.pathname
			try{routeKick()}catch(e){}});setInterval(sync,2400)}
/*路径条（面包屑）里的用户名保持站点原色：早前版本按用户名色染过，这里把残留还原*/
	function bcUncolor(){
		document.querySelectorAll('.breadcrumb a[data-lgv-bc]').forEach((a)=>{const nm=a.querySelector('.lgv-bcname');const name=nm?(nm.textContent||'').trim():a.dataset.lgvBc||'';a.textContent=name?name+' - 个人中心':a.textContent||'';delete a.dataset.lgvBc})
	}
	function start(){if(WIN.__lgvOff)return true/*451 提示页：已经收工，别再往上刷类*/
		if(!document.body)return false
		if(WIN.__lgvStarted)return true
		WIN.__lgvStarted=true;inject();initSearch()
		try{pageFade()}catch(e){}
		try{catTabs();setInterval(catTabs,900)}catch(e){}
		try{syncStmtUI()}catch(e){}
		try{injectMcCss()}catch(e){}
		try{mentionColor()}catch(e){}
		try{feedCardFix()}catch(e){}
		try{pagerSync()}catch(e){}
		try{recordPagerGuard()}catch(e){}
/*切页面立刻重画一遍：站点是 SPA，只靠 2 秒轮询会有一瞬间没颜色*/
		try{let RL=location.pathname
			const kick=()=>{const now=location.pathname+location.search
				if(now===RL)return
				RL=now
/*站点挂新页要 1~2 秒，早先只在 280/1100 各描一次，赶不上就整页没色；多补几拍，描的都是已缓存的，不发请求*/
				;try{pidReseedReset()}catch(e){}
				;[280,1100,2200,3600].forEach((ms)=>setTimeout(()=>{try{repaintPids();paintPids()}catch(e){}},ms))}
			setInterval(kick,600);addEventListener('popstate',kick)}catch(e){}
		document.addEventListener(
		'click',
		(ev)=>{if(!ev.target||!ev.target.closest)return
			if(!ev.target.closest('.page-bar, .pagination'))return
			setTimeout(()=>{try{pagerSync()}catch(e){}},300);setTimeout(()=>{try{pagerSync()}catch(e){}},1000)},
		true,
		)
		setInterval(()=>{try{pagerSync()}catch(e){}},1200);window.addEventListener('popstate',()=>{try{pagerSync()}catch(e){}})
		if(!window.__lgvMcTimer)
		window.__lgvMcTimer=setInterval(()=>{try{mentionColor()}catch(e){}
			try{feedCardFix()}catch(e){}
			try{bcUncolor()}catch(e){}},1800)
		watchMode();sync();clearOpaque()
		startBg()
/*首帧可能站点自己的主题跟偏好不一致（站点把暗色记在服务端），起完再对齐一次*/
/*冷启动：站点把亮暗记在服务端，前端要过一会儿才改 data-lcolor-theme；
					盯 5 秒、每次只做一次便宜的比较，对上了就停，别整页反复重画*/
		;(()=>{let n=0;const t=setInterval(()=>{try{alignTab()}catch(e){}
				if(++n>12)clearInterval(t)},400)})()
		new MutationObserver(()=>{if(timer)return
			timer=setTimeout(()=>{timer=null;sync()},350)}).observe(document.body,{childList:true,subtree:true});return true}
/*个人中心：只处理资料卡、tab 条、右侧导航*/
/*── 用户悬停卡（独立模块：不动任何配色/主题，只用站点默认色 + 透明度） ──*/
/*站点用户名色：蓝/绿/橙/红/紫/灰*/
	const LG_COLOR={
		Gray:'#bfbfbf',
		Blue:'#3498db',
		Green:'#52c41a',
		Orange:'#f39c11',
		Yellow:'#f1c40f',
		Red:'#fe4c61',
		Purple:'#9d3dcf',
		Gold:'#f1c40f',
		Black:'#34495e',
		Cheater:'#bfbfbf',
	}
	const UC_CACHE=new Map();const UC_PEND=new Map();const UC_REL=new Map();const UC_REV=new Map()
	let ucEl=null, ucTimer=0, ucUid='', ucAnchor=null, ucBound=false, ucOver=false;let ucDir='', ucDirUid=''
	function ucDom(){if(ucEl&&document.body.contains(ucEl))return ucEl
		if(!document.getElementById('lgv-uc-style')){const st=document.createElement('style');st.id='lgv-uc-style'
			st.textContent=`
#lgv-ucard{position:fixed;left:0;top:0;z-index:900;width:390px;max-width:calc(100vw - 24px);padding:0;display:none;--lgv-uc-paper:255,255,255;--lgv-uc-fg:#1c1c1c;--lgv-uc-ring:#fff;background:rgba(var(--lgv-uc-paper),.82);backdrop-filter:blur(14px) saturate(1.25);-webkit-backdrop-filter:blur(14px) saturate(1.25);/*卡片恒定磨砂，跟「毛玻璃」开关无关：这里不读 --lgv-glass*/
color:var(--lgv-uc-fg);border-radius:10px!important;overflow:hidden;box-shadow:0 14px 38px rgba(0,0,0,.22),0 0 0 1px rgba(127,127,127,.16)}
/*跟随站点亮/暗：暗色下卡片不能还是白纸，头像描边也要跟着纸色走。
		站点自己的 data-lcolor-theme 通常一加载就有，比 lgv-dark 先到；两个都认，省掉那 3 秒白闪*/
 html.lgv-dark #lgv-ucard,html[data-lcolor-theme="dark"] #lgv-ucard{--lgv-uc-paper:29,32,37;--lgv-uc-fg:#e6e6e6;
--lgv-uc-ring:#1e2127;box-shadow:0 14px 38px rgba(0,0,0,.5),0 0 0 1px rgba(255,255,255,.12)} #lgv-ucard.lgv-on{display:block}
#lgv-uc-cover{height:78px;position:relative;background-color:#0e90d2;background-size:cover;background-position:center;background-image:linear-gradient(120deg,rgba(14,144,210,.55),rgba(23,208,180,.45))}
#lgv-uc-body{padding:0 12px 10px;position:relative;z-index:2} #lgv-uc-av{width:52px;height:52px;border-radius:50%!important;object-fit:cover;margin-top:-26px;display:block;
position:relative;z-index:4;background:var(--lgv-uc-ring);box-shadow:0 0 0 3px var(--lgv-uc-ring),0 2px 8px rgba(0,0,0,.18)} #lgv-uc-nm .lgv-uc-ver{width:16px;height:16px;vertical-align:-3px;margin-left:5px;display:inline-block;
flex:0 0 auto} .lgv-uc-bal{width:13px;height:17px;vertical-align:-3px;margin-left:4px;display:inline-block;flex:0 0 auto}
#lgv-uc-nm .lgv-uc-nm-t{white-space:normal;word-break:break-word} #lgv-uc-nm{font-size:15px;font-weight:600;line-height:1.35;margin-top:5px;position:relative;z-index:2;white-space:normal;word-break:break-word}
#lgv-uc-sub{font-size:11.5px;opacity:.55;margin-top:3px} #lgv-uc-tags{margin-top:6px;display:flex;flex-wrap:wrap;gap:4px;max-height:none;overflow:visible}
#lgv-uc-tags span{white-space:nowrap;line-height:1.65} #lgv-uc-tags span{font-size:11px;padding:0 5px;border-radius:var(--lgv-tag-r)!important;border:1px solid currentColor;opacity:.9}
#lgv-uc-slogan{margin-top:7px;font-size:11.5px;opacity:.72;line-height:1.5;white-space:pre-wrap;word-break:break-word;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}
#lgv-uc-nums{display:flex;gap:6px;margin-top:8px} #lgv-uc-nums div{flex:1;text-align:center;padding:4px 0;border-radius:6px!important;background:rgba(127,127,127,.08)}
#lgv-uc-nums b{display:block;font-size:13px}#lgv-uc-nums span{font-size:11px;opacity:.6}#lgv-uc-btns{display:flex;gap:6px;margin-top:9px}
#lgv-uc-btns a,#lgv-uc-btns button{flex:1 1 0;min-width:0;text-align:center;padding:4px 0;font-size:11.5px;line-height:1.5;border-radius:6px!important;border:1px solid transparent;background:rgba(127,127,127,.10);
color:#404040;text-decoration:none;cursor:pointer;font-family:inherit;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:background-color .12s ease,color .12s ease,border-color .12s ease}
#lgv-uc-btns a:hover,#lgv-uc-btns button:hover{background:rgba(127,127,127,.20);border-color:rgba(127,127,127,.22)} #lgv-uc-btns .lgv-uc-follow{background:rgba(14,144,210,.16);color:#0e90d2;border-color:rgba(14,144,210,.26)}
#lgv-uc-btns .lgv-uc-follow:hover{background:rgba(14,144,210,.26)} #lgv-uc-btns .lgv-uc-follow.lgv-on{background:rgba(127,127,127,.14);color:#4b5563;border-color:rgba(127,127,127,.20)}
#lgv-uc-btns .lgv-uc-follow.lgv-on:hover{background:rgba(192,57,43,.14);color:#c0392b;border-color:rgba(192,57,43,.26)}
html.lgv-dark body #lgv-uc-btns .lgv-uc-follow{background:rgba(14,144,210,.24);color:#6fc6f5;border-color:rgba(14,144,210,.36)} html.lgv-dark body #lgv-uc-btns .lgv-uc-follow:hover{background:rgba(14,144,210,.34)}
html.lgv-dark body #lgv-uc-btns .lgv-uc-follow.lgv-on{background:rgba(255,255,255,.10);color:rgba(255,255,255,.90);border-color:rgba(255,255,255,.20)}
#lgv-uc-btns .lgv-uc-follow.lgv-mutual{background:rgba(94,185,94,.16);color:#4a9e4a;border-color:rgba(94,185,94,.30)}
#lgv-uc-btns .lgv-uc-follow.lgv-mutual:hover{background:rgba(192,57,43,.14);color:#c0392b;border-color:rgba(192,57,43,.26)}
#lgv-uc-btns .lgv-uc-follow.lgv-self,#lgv-uc-btns .lgv-uc-follow.lgv-self:hover{background:rgba(127,127,127,.14);color:#9aa0a6;border-color:rgba(127,127,127,.18);cursor:default;pointer-events:none}
#lgv-uc-btns .lgv-uc-follow.lgv-blocked,#lgv-uc-btns .lgv-uc-follow.lgv-blocked:hover{background:rgba(192,57,43,.12);color:#c0392b;border-color:rgba(192,57,43,.30);cursor:default;pointer-events:none}
html.lgv-dark body #lgv-uc-btns .lgv-uc-follow.lgv-self,html.lgv-dark body #lgv-uc-btns .lgv-uc-follow.lgv-self:hover{background:rgba(255,255,255,.07);color:rgba(255,255,255,.50);border-color:rgba(255,255,255,.12)}
html.lgv-dark body #lgv-uc-btns .lgv-uc-follow.lgv-blocked,html.lgv-dark body #lgv-uc-btns .lgv-uc-follow.lgv-blocked:hover{background:rgba(231,76,60,.18);color:#ff8a7a;border-color:rgba(231,76,60,.36)}
html.lgv-dark body #lgv-uc-btns .lgv-uc-follow.lgv-on:hover{background:rgba(231,76,60,.24);color:#ff9a8f;border-color:rgba(231,76,60,.42)}
html.lgv-dark body #lgv-uc-btns .lgv-uc-follow.lgv-mutual{background:rgba(94,185,94,.22);color:#8fd48f;border-color:rgba(94,185,94,.38)} #lgv-uc-btns .lgv-uc-dm{background:rgba(127,127,127,.10);color:#404040}
#lgv-uc-btns .lgv-uc-dm:hover{background:rgba(94,185,94,.18);color:#3d8b3d;border-color:rgba(94,185,94,.3)} #lgv-uc-btns a:active,#lgv-uc-btns button:active{transform:translateY(.5px);background:rgba(127,127,127,.20)!important}
html.lgv-dark body #lgv-uc-btns a:active,html.lgv-dark body #lgv-uc-btns button:active{background:rgba(255,255,255,.22)!important}
.lgv-rcat:active,.lgv-s2-cat:active{transform:scale(.96);background:rgba(127,127,127,.18)}.lgv-sres:active{background:rgba(127,127,127,.18)!important}
html body .l-card button:hover,html body .l-card .btn:hover{background-color:rgba(127,127,127,.10)!important} html body .l-card button:active,html body .l-card .btn:active{background-color:rgba(127,127,127,.22)!important}
html.lgv-dark body .l-card button:hover,html.lgv-dark body .l-card .btn:hover{background-color:rgba(255,255,255,.10)!important}
html.lgv-dark body .l-card button:active,html.lgv-dark body .l-card .btn:active{background-color:rgba(255,255,255,.22)!important}
/*暗色：卡片底已经变深，底栏按钮不能再写死 #404040*/ html.lgv-dark body #lgv-uc-btns a,html.lgv-dark body #lgv-uc-btns button{background:rgba(255,255,255,
.08);color:rgba(255,255,255,.86)} html.lgv-dark body #lgv-uc-btns a:hover,html.lgv-dark body #lgv-uc-btns button:hover{background:rgba(255,255,255,.16);border-color:rgba(255,255,255,.20)}
html.lgv-dark body #lgv-uc-btns .lgv-uc-dm{background:rgba(255,255,255,.08);color:rgba(255,255,255,.86)} html.lgv-dark body #lgv-uc-btns .lgv-uc-dm:hover{background:rgba(94,185,94,.26);color:#a8e6a8;border-color:rgba(94,185,94,.42)}
.lgv-uc-ghost{display:block;border-radius:4px;background:rgba(127,127,127,.22)}`
			document.head.appendChild(st)}
		ucEl=document.createElement('div');ucEl.id='lgv-ucard'
		ucEl.addEventListener('click',(ev)=>{const b=ev.target&&ev.target.closest?ev.target.closest('.lgv-uc-follow'):null
			if(!b||b.disabled)return
			ev.preventDefault();ev.stopPropagation();ucFollow(b)})
		ucEl.addEventListener('mouseenter',()=>{clearTimeout(ucTimer);ucOver=true});ucEl.addEventListener('mouseleave',()=>{ucOver=false;ucHideSoon()});document.body.appendChild(ucEl);return ucEl}
	let ucLastX=-1, ucLastY=-1;document.addEventListener(
	'mousemove',
	(e)=>{ucLastX=e.clientX;ucLastY=e.clientY},
	true,
	)
	function ucSkip(t){if(!t||!t.closest)return false
		if(t.closest('#lfe-header,.l-header,.top-bar,#lfe-nav,.lfe-nav,[class*="navbar"],[class*="nav-bar"],[class*="user-menu"],[class*="avatar-menu"]'))
		return true
		if(t.closest('.user-nav,.lside,[class*="breadcrumb"]'))return true}
	let ucOwnCache=null
/*自己是谁：新前端的 lentille-context 里已经没有 currentUser，旧的三个来源全空，
	  结果"自己"被当成陌生人，卡片能关注自己。顶栏头像永远指向登录者，最靠得住，放最后兜底*/
	function ucOwnUid(){if(ucOwnCache)return ucOwnCache
		let v=pageUid()
		if(!v){const as=document.querySelectorAll('#lfe-header a[href^="/user/"],.user-nav a[href^="/user/"],header a[href^="/user/"]')
			for(const a of as){const m=/^\/user\/(\d+)\/?$/.exec(a.getAttribute('href')||'')
				if(m){v=m[1];break}}}
		if(v)ucOwnCache=v
		return v}
	function ucDate(v){const n=Number(v);const d=n>1e9?new Date(n*1000):new Date(v)
		if(isNaN(d.getTime()))return''
		const p2=(k)=>(k<10?'0':'')+k;return d.getFullYear()+'-'+p2(d.getMonth()+1)+'-'+p2(d.getDate())}
	async function ucFetch(uid){if(UC_CACHE.has(uid))return UC_CACHE.get(uid)
		if(UC_PEND.has(uid))return UC_PEND.get(uid)
		const job=(async()=>{let u=null
			try{const r=await fetch('/user/'+encodeURIComponent(uid),{credentials:'include'});const txt=await r.text()
				const m=/<script id="lentille-context" type="application\/json">([\s\S]*?)<\/script>/.exec(txt)
				if(m){const j=JSON.parse(m[1]);u=(j.data&&(j.data.user||(j.data.currentData&&j.data.currentData.user)))||null}}catch(e){u=null}
			UC_CACHE.set(uid,u||'x');UC_PEND.delete(uid);return UC_CACHE.get(uid)})()
		UC_PEND.set(uid,job);return job}
/*预取附近用户资料：每次 ≤8 个、并发 2*/
	let ucPfBusy=false, ucPfTimer=0;const ucPfDone=new Set()
	function ucPrefetch(){if(ucPfBusy||document.hidden)return
		const vh=innerHeight||800;const seen=new Set(), list=[]
		for(const a of document.querySelectorAll('a[href]')){const m=/^\/user\/(\d+)$/.exec(a.getAttribute('href')||'')
			if(!m)continue
			const uid=m[1]
			if(seen.has(uid)||ucPfDone.has(uid)||UC_CACHE.has(uid))continue
			const r=a.getBoundingClientRect()
			if(r.width<8||r.bottom<-240||r.top>vh+240)continue
			seen.add(uid);list.push(uid)
			if(list.length>=8)break}
		if(!list.length)return
		ucPfBusy=true;list.forEach((u)=>ucPfDone.add(u)) ;(async()=>{
			for(let i=0;i<list.length;i+=2){await Promise.all(list.slice(i,i+2).map((u)=>ucFetch(u).catch(()=>{})));await new Promise((r)=>setTimeout(r,180))
				if(document.hidden)break}
			ucPfBusy=false})()
	}
	function ucPrefetchSoon(){clearTimeout(ucPfTimer);ucPfTimer=setTimeout(ucPrefetch,700)}
/*亮暗一换，卡片里提亮过的文字/勾色就过期了；themeSync 调它把当前这张重画一遍*/
	window.__lgvUcRepaint=function(){const d=ucDom()
		if(!d||!d.dataset.uid)return
		if(d.dataset.lgvDark===(document.documentElement.classList.contains('lgv-dark')?'1':'0'))return
		const u=UC_CACHE.get(String(d.dataset.uid))
		if(u)ucPaint(u)}
	function ucPaint(u){const d=ucDom();const esc=(v)=>String(v==null?'':v).replace(/[<>&"]/g,(c)=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'})[c]);const uid=u.uid!=null?u.uid:'';let bg=u.background?String(u.background):''
		if(bg&&!/^https?:/.test(bg))bg='https://cdn.luogu.com.cn/upload/'+bg.replace(/^\/+/,'')
		if(!bg)bg='https://cdn.luogu.org/images/bg/fe/DSCF0530-shrink.jpg'
		bg=bg.replace(/[\\'"()]/g,'');const dark=document.documentElement.classList.contains('lgv-dark')
/*作弊者色值写法不统一也常缺失，统一按灰处理，亮色再压深一档*/
		const ckey=String(u.color||'').trim();const isCheat=/cheat|ban/i.test(ckey)||!!(u.isBanned||u.isCheated||u.cheated||u.isCheater)
		const cheatInk=dark?'#bfbfbf':'#9a9a9a';const ucolorRaw=isCheat?cheatInk:LG_COLOR[ckey]||(dark?'#c9ccd1':'#5f6470')
/*暗底上原色太深就提亮：只改亮度，色相不动*/
		const ink=(c)=>{if(!dark||!/^#[0-9a-f]{6}$/i.test(c))return c
			const n=parseInt(c.slice(1),16), r=(n>>16)&255, g=(n>>8)&255, b=n&255;const lum=(0.299*r+0.587*g+0.114*b)/255
			if(lum>=0.42)return c
			const k=Math.min(0.62,0.42-lum);const mix=(v)=>Math.round(v+(255-v)*k);return'#'+[mix(r),mix(g),mix(b)].map((v)=>v.toString(16).padStart(2,'0')).join('')}
		const ucolor=ink(ucolorRaw);const ccf=Number(u.ccfLevel)||0
/*认证勾只看 CCF 等级：1-5 绿、6-7 蓝、8+ 金*/
		const vtColor=ccf>=8?'#ffc116':ccf>=6?'#3498db':ccf>0?'#52c41a':'';const tags=[]
		if(u.isAdmin)tags.push(['管理员',ucolor])
		if(isCheat)tags.push(['作弊者',cheatInk])
/*牌子（tag）颜色一律跟用户名一致，跟上面的勾色不同*/
		if(ccf>0)tags.push(['CCF '+ccf+' 级',ucolor])
		if(u.xcpcLevel)tags.push(['XCPC '+u.xcpcLevel,LG_COLOR.Orange])
		if(u.badge)tags.push([String(u.badge),ucolor])
		const nums=[]
		if(u.passedProblemCount!=null)nums.push([u.passedProblemCount,'通过'])
		if(u.followerCount!=null)nums.push([u.followerCount,'粉丝'])
		if(u.followingCount!=null)nums.push([u.followingCount,'关注'])
		if(u.ranking)nums.push([u.ranking,'排名'])
		let relVal=UC_REL.has(String(uid))?UC_REL.get(String(uid)):u.userRelationship
		if(relVal==null&&u.relation!=null)relVal=u.relation
		if(relVal==null&&u.isFollowing!=null)relVal=u.isFollowing?1:0
		const rel=Number(relVal)===1;const rev=UC_REV.has(String(uid))?UC_REV.get(String(uid)):!!Number(u.reverseUserRelationship);const mutual=rel&&rev;const mine=ucOwnUid()
/*站点关系只有三态：0 无关、1 已关注、2 已拉黑；字段偶尔直接给字符串，两种都认*/
		const own=!!mine&&String(uid)===String(mine)
		const relRaw=u.userRelationship!=null?u.userRelationship:u.relation
		const blocked=!own&&(Number(relRaw)===2||/blacklist/i.test(String(relRaw||''))||!!u.isBlacklisted||!!u.blacklisted)
		d.innerHTML=
		'<div id="lgv-uc-cover" style="background-image:url(\''+
		bg+
		'\'),linear-gradient(120deg,rgba(0,0,0,.10),rgba(0,0,0,.32))"></div>'+
		'<div id="lgv-uc-body">'+
		'<img id="lgv-uc-av" alt="" src="'+
		esc(u.avatar||'https://cdn.luogu.com.cn/upload/usericon/'+uid+'.png')+
		'">'+
		'<div id="lgv-uc-nm" style="color:'+
		ucolor+
		'"><span class="lgv-uc-nm-t">'+
		esc(u.name||'UID '+uid)+
		'</span>'+
		(ccf>0
		?'<svg class="lgv-uc-ver" viewBox="0 0 512 512" role="img" aria-label="洛谷认证"><title>洛谷认证</title>'+
		'<path fill="'+
		vtColor+
		'" d="M0 256C0 292.8 20.7 324.8 51.1 340.9 41 373.8 49 411 75 437s63.3 34 96.1 23.9C187.2 491.3 219.2 512 256 '+
		'512s68.8-20.7 84.9-51.1C373.8 471 411 463 437 437s34-63.3 23.9-96.1C491.3 324.8 512 292.8 512 '+
		'256s-20.7-68.8-51.1-84.9C471 138.2 463 101 437 75s-63.3-34-96.1-23.9C324.8 20.7 292.8 0 256 0s-68.8 20.7-84.9 '+
		'51.1C138.2 41 101 49 75 75s-34 63.3-23.9 96.1C20.7 187.2 0 219.2 0 256zm152.3 41.6c-9.2-9.5-9-24.7 .6-33.9 9.5-9.2 '+
		'24.7-8.9 33.9 .6l35.8 37 106.1-145.8c7.8-10.7 22.8-13.1 33.5-5.3 10.7 7.8 13.1 22.8 5.3 33.5L244.7 352.7c-4.2 '+
		'5.7-10.7 9.4-17.8 9.8-7.1 .5-14-2.2-18.9-7.3l-55.7-57.6z"/>'+
		'<path fill="#fff" d="M328.7 155.5c7.8-10.7 22.8-13.1 33.5-5.3 10.7 7.8 13.1 22.8 5.3 33.5L244.7 352.7c-4.2 '+
		'5.7-10.7 9.4-17.8 9.8-7.1 .5-14-2.2-18.9-7.3l-55.7-57.6c-9.2-9.5-9-24.7 .6-33.9 9.5-9.2 24.7-8.9 33.9 .6l35.8 37 '+
		'106.1-145.8z"/></svg>'
		:'')+
		'</div>'+
		'<div id="lgv-uc-sub">UID '+
		esc(uid)+
		(u.registerTime?' · '+ucDate(u.registerTime)+' 加入':'')+
		'</div>'+
		(tags.length
		?'<div id="lgv-uc-tags">'+tags.map((t)=>'<span style="color:'+ink(t[1])+'">'+esc(t[0])+'</span>').join('')+'</div>'
		:'')+
		(u.slogan?'<div id="lgv-uc-slogan" style="-webkit-line-clamp:'+ucSloganLines(u.slogan)+'">'+esc(u.slogan)+'</div>':'')+
		(nums.length
		?'<div id="lgv-uc-nums">'+nums.map((n)=>'<div><b>'+esc(n[0])+'</b><span>'+n[1]+'</span></div>').join('')+'</div>'
		:'')+
		'<div id="lgv-uc-btns">'+
		'<a class="lgv-uc-main" href="/user/'+
		esc(uid)+
		'">主页</a>'+
		(own
		?'<button class="lgv-uc-follow lgv-self" disabled title="这是你自己">自己</button>'
		:blocked
		?'<button class="lgv-uc-follow lgv-blocked" disabled title="已加入黑名单，解除后才能关注">已拉黑</button>'
		:'<button class="lgv-uc-follow'+
		(rel?(mutual?' lgv-on lgv-mutual':' lgv-on'):'')+
		'" data-uid="'+
		esc(uid)+
		'" data-rel="'+
		(rel?1:0)+
		'">'+
		(mutual?'互相关注':rel?'已关注':'关注')+
		'</button>'+
		'<a class="lgv-uc-dm" href="/chat?uid='+
		esc(uid)+
		'" target="_blank" rel="noopener">私信</a>')+
		'<a href="/user/'+
		esc(uid)+
		'?lgvt=activity">动态</a>'+
		'</div>'+
		'</div>'
		UC_REV.set(String(uid),rev);d.dataset.uid=uid;d.dataset.lgvDark=dark?'1':'0'
/*气球认证：xcpC 奖项认证，站点用 FA duotone 气球，这里画同一个*/
		if(Number(u.xcpcLevel)>0){const nm=d.querySelector('#lgv-uc-nm')
			if(nm&&!nm.querySelector('.lgv-uc-bal')){const bl=document.createElementNS('http://www.w3.org/2000/svg','svg');bl.setAttribute('class','lgv-uc-bal');bl.setAttribute('viewBox','0 0 384 512');bl.setAttribute('role','img');bl.setAttribute('aria-label','气球认证')
				bl.innerHTML=
				'<title>气球认证</title><path fill="#fff" d="M56 176c0 13.3 10.7 24 24 24s24-10.7 24-24c0-39.8 32.2-72 72-72 13.3 0 '+
				'24-10.7 24-24s-10.7-24-24-24C109.7 56 56 109.7 56 176z"/><path fill="#ffc116" d="M0 192C0 86 86 0 192 0S384 86 384 '+
				'192c0 128-160 240-160 240l27.9 41.8c2.7 4 4.1 8.8 4.1 13.6 0 13.6-11 24.6-24.6 24.6l-78.9 0c-13.6 '+
				'0-24.6-11-24.6-24.6 0-4.8 1.4-9.6 4.1-13.6L160 432S0 320 0 192zm104-16c0-39.8 32.2-72 72-72 13.3 0 24-10.7 '+
				'24-24s-10.7-24-24-24c-66.3 0-120 53.7-120 120 0 13.3 10.7 24 24 24s24-10.7 24-24z"/>'
				nm.appendChild(bl)}
		}
	}
	function ucSloganLines(txt){const s=String(txt||'');let units=0
		for(const ch of s)units+=/[\x00-\xff]/.test(ch)?0.55:1
		return Math.max(1,Math.min(4,Math.ceil(units/30)))}
	let ucPos={uid:'',x:0,y:0,t:0}
/*z-index：站点顶栏/侧栏最大值 - 1，量不到用 900*/
	let ucZ=0
	function ucZaTop(){if(ucZ)return ucZ
		let m=0
		const bars=document.querySelectorAll(
		'header,.top-bar,#lfe-header,.l-header,#lfe-nav,.lfe-nav,[class*="navbar"],[class*="sidebar"],[class*="side-bar"],[class*="rail"]',
		)
		for(const el of bars){if(el.closest('#lgv-ucard,#lgv-search,#lgv-s2'))continue
			const r=el.getBoundingClientRect()
			if(r.width<40||r.height<20)continue
			const z=parseInt(getComputedStyle(el).zIndex,10)
			if(z>m)m=z}
		return(ucZ=m>10?Math.max(60,m-1):900)}
	function ucPlace(anchor,force){const d=ucDom(), W=innerWidth, H=innerHeight
/*评论区/题解里那些块自己带 z-index 或开了层叠上下文，光比顶栏高不够——这里给个下限*/
		const z=String(Math.max(parseInt(ucZaTop(),10)||0,2147482000))
		if(d.style.zIndex!==z)d.style.zIndex=z
		const w=d.offsetWidth||390, h=d.offsetHeight||260;const a0=anchor&&anchor.getBoundingClientRect?anchor.getBoundingClientRect():null
		const halfNow=a0?(a0 .top+a0 .height/2>H/2?'up':'down'):''
		if(!force&&ucPos.uid===ucUid&&ucPos.el===anchor&&ucPos.half===halfNow&&Date.now()-ucPos.t<10000){d.style.left=ucPos.x+'px';d.style.top=ucPos.y+'px';ucPos.t=Date.now();return
		}
		let left=8, top=12, up=false, affix=null
		if(a0){let r=ucTightRect(anchor);affix=r
			if(!r.width&&!r.height){const box=anchor.closest('li.feed-li,.am-comment')||anchor.parentElement
				if(box)r=box.getBoundingClientRect()}
			if(ucDirUid!==ucUid){ucDir=r.top+r.height/2>H/2?'up':'down';ucDirUid=ucUid}
			up=ucDir==='up';left=Math.min(Math.max(8,r.left+r.width/2-w/2),Math.max(8,W-w-12))
			top=up?r.top-h:r.bottom
			if(up&&top<12)top=r.bottom+2>=H?H-h-8:12
			if(!up&&top+h>H-8)top=Math.max(12,H-h-8)}
		left=Math.round(left);top=Math.round(top);d.style.left=left+'px';d.style.top=top+'px'
		if(up&&affix){
			const fix=()=>{const hh=d.getBoundingClientRect().height||h;const t2=Math.max(12,Math.round(affix.top-hh))
				if(Math.abs(t2-(parseFloat(d.style.top)||top))>=1){d.style.top=t2+'px'
					if(ucPos.uid===ucUid)ucPos.y=t2}}
			fix();requestAnimationFrame(fix);setTimeout(fix,160);setTimeout(fix,420)}
		ucPos={uid:ucUid,x:left,y:top,half:halfNow,el:anchor,t:Date.now()};ucWatch()
	}
/*内容变长后，向上展开的底边贴住锚点上沿*/
	function ucReflow(){const d=ucEl
		if(!d||!ucUid||!ucAnchor||!d.classList.contains('lgv-on'))return
		const h=d.getBoundingClientRect().height||0
		if(!h)return
		let r=null
		try{r=ucAnchor.getBoundingClientRect()}catch(e){}
		let top=parseFloat(d.style.top)||0
		if(ucDir==='up'){if(r)top=r.top-h
			if(top<12)top=12}else if(top+h>innerHeight-8){top=Math.max(12,innerHeight-h-8)}
		top=Math.round(top)
		if(Math.abs(top-(parseFloat(d.style.top)||0))>=1)d.style.top=top+'px'
		if(ucPos.uid===ucUid)ucPos.y=top}
	let ucRO=null
	function ucWatch(){if(!ucEl||typeof ResizeObserver==='undefined')return
		if(!ucRO)
		ucRO=new ResizeObserver(()=>{try{ucReflow()}catch(e){}})
		ucRO.disconnect()
		try{ucRO.observe(ucEl)}catch(e){}}
/*打开那一瞬间就定色：lgv-dark 是 paintShell 里挂的，主题图/站点令牌没到位时会晚 2~3 秒，
	这期间 CSS 里的 html.lgv-dark 还没命中，卡片就先白一下。这里用 detectDarkRaw() 直接判，
	把三个变量内联上去；等 lgv-dark 挂上后 paintShell 会把内联清掉，交回 CSS。*/
	function ucTheme(d){
		if(!d)return
		let dark=false
		try{dark=document.documentElement.classList.contains('lgv-dark')||!!detectDarkRaw()}catch(e){}
		d.style.setProperty('--lgv-uc-paper',dark?'29,32,37':'255,255,255')
		d.style.setProperty('--lgv-uc-fg',dark?'#e6e6e6':'#1c1c1c')
		d.style.setProperty('--lgv-uc-ring',dark?'#1e2127':'#fff')}
	function ucShowNow(d){if(!d)return;ucTheme(d);d.classList.add('lgv-on')}
	function ucHide(){clearTimeout(ucTimer);ucUid='';ucOver=false
		if(ucRO){try{ucRO.disconnect()}catch(e){}}
		if(ucEl)ucEl.classList.remove('lgv-on')}
	function ucHideCancel(){clearTimeout(ucTimer)
		if(ucEl&&ucUid)ucShowNow(ucEl)}
	function ucHideSoon(delay){clearTimeout(ucTimer)
		ucTimer=setTimeout(
		()=>{if(ucOver)return
			const el=document.elementFromPoint(ucLastX,ucLastY)
			if(el&&el.closest&&el.closest('#lgv-ucard'))return
			ucHide()},
		delay==null?320:delay,
		)
	}
	function ucSkeleton(uid,anchor){const d=ucDom()
		d.innerHTML=
		'<div id="lgv-uc-cover"></div><div id="lgv-uc-body">'+
		'<img id="lgv-uc-av" alt="" src="https://cdn.luogu.com.cn/upload/usericon/'+
		String(uid).replace(/\D/g,'')+
		'.png">'+
		'<div class="lgv-uc-ghost" style="width:80px;height:13px;margin-top:8px"></div>'+
		'<div class="lgv-uc-ghost" style="width:112px;height:10px;margin-top:8px"></div></div>'
		d.dataset.uid=uid;ucPlace(anchor);ucShowNow(d)}
	async function ucShow(uid,anchor){const cached=UC_CACHE.get(uid)
		if(ucUid===uid&&ucEl&&ucEl.classList.contains('lgv-on')){ucAnchor=anchor||ucAnchor
			return}
		ucUid=uid;ucAnchor=anchor||null
		if(cached&&cached!=='x'){ucPaint(cached);ucPlace(ucAnchor,true)
			ucShowNow(ucDom());return}
		if(cached==='x')return
		ucSkeleton(uid,anchor);const u=await ucFetch(uid)
		if(ucUid!==uid)return
		if(!u||u==='x'){ucHide();return}
		ucPaint(u);ucPlace(ucAnchor,true)
	}
	function ucFollow(btn){const uid=btn.dataset.uid
		if(!uid||btn.disabled||uid===ucOwnUid())return
		const next=Number(btn.dataset.rel)===1?0:1;const tok=(document.querySelector('meta[name=csrf-token]')||{}).content||'';btn.disabled=true
		fetch('/user/mine/relation-update?target='+encodeURIComponent(uid),{
			method:'POST',
			credentials:'include',
			headers:{'Content-Type':'application/json','x-csrf-token':tok},
			body:JSON.stringify({relationship:next}),
		})
		.then((r)=>(r.ok?r.json():Promise.reject(r.status)))
		.then(()=>{btn.dataset.rel=String(next);const revNow=UC_REV.get(String(uid))||false;const mutNow=!!next&&revNow;btn.textContent=mutNow?'互相关注':next?'已关注':'关注';btn.classList.toggle('lgv-on',!!next);btn.classList.toggle('lgv-mutual',mutNow);UC_REL.set(String(uid),next);const c=UC_CACHE.get(uid)
			if(c&&c!=='x'){c.userRelationship=next
				if(c.followerCount!=null)c.followerCount=Math.max(0,c.followerCount+(next?1:-1))
				ucPaint(c);ucPlace(ucAnchor,true)}})
		.catch(()=>{btn.textContent='失败';btn.disabled=false})
	}
/*洛谷用户名/成员名颜色（官方色值）：@ 提及也吃这套*/
	const MC_CSS=
	'html body a.lg-fg-Gray{color:#bbb!important}'+
	'html body a.lg-fg-Blue{color:#0e90d2!important}'+
	'html body a.lg-fg-Green{color:#5eb95e!important}'+
	'html body a.lg-fg-Orange{color:#e67e22!important}'+
	'html body a.lg-fg-Red{color:#e74c3c!important}'+
	'html body a.lg-fg-Purple{color:#8e44ad!important}'+
	'html body a.lg-fg-Gold{color:#f1c40f!important}'+
	'html body a.lg-fg-Cheater{color:#bbb!important}'+
	'html body a.lg-fg-Black{color:#34495e!important}'
	function injectMcCss(){if(document.getElementById('lgv-mc-css')||!document.head)return
		const st=document.createElement('style');st.id='lgv-mc-css';st.textContent=MC_CSS;document.head.appendChild(st)}
/*@ 提及的名字：按 TA 的评定颜色上色（站点 lg-fg-{Color}）*/
	const MC_CACHE=new Map()
	function isMention(a){const t=(a.textContent||'').trim()
		if(t.charAt(0)==='@')return true
		const prev=a.previousSibling
		if(prev&&prev.nodeType===3&&/@\s*$/.test(prev.nodeValue||''))return true
		return false}
	function mentionColor(){if(document.hidden)return
		const list=Array.prototype.filter
		.call(document.querySelectorAll('a[href^="/user/"]'),(a)=>{if(a.getAttribute('data-lgv-mc'))return false
			if(!isMention(a))return false
			if(/(^|\s)lg-fg-/.test(a.className||'')){a.setAttribute('data-lgv-mc','1');return false}
			return true})
		.slice(0,24)
		list.forEach((a)=>{const m=/^\/user\/(\d+)/.exec(a.getAttribute('href')||'')
			if(!m)return
			const uid=m[1];const paint=(color)=>{if(!color)return
				a.setAttribute('data-lgv-mc','1')
				if(!/(^|\s)lg-fg-/.test(a.className||''))a.classList.add('lg-fg-'+color)}
			if(MC_CACHE.has(uid)){paint(MC_CACHE.get(uid));return}
			s2Get('/user/'+uid)
			.then((d)=>{const c=d&&d.user&&d.user.color
				if(!c)return
				MC_CACHE.set(uid,c);paint(c)})
			.catch(()=>null)})
	}
/*/feed/watching 这类页面：犇犇条目直挂 body 且自身透明，会裸露在背景图上*/
	function feedCardFix(){
		try{const dark=detectDark()
			document.querySelectorAll('li.feed-li,ul.am-comments-list>li,li.am-comment').forEach((li)=>{if(li.getAttribute('data-lgv-card'))return
				if(li.parentElement!==document.body)return
				const cs=getComputedStyle(li);const m=/rgba?\(([^)]+)\)/.exec(cs.backgroundColor||'');const a=m?m[1].split(',').map(Number):[0,0,0,0]
				if((a.length>3?a[3]:1)>0.5)return
				if(li.getBoundingClientRect().height<40)return
				li.setAttribute('data-lgv-card','1')
				li.style.setProperty('background-color',dark?'rgba('+(tokTriplet()||'255,255,255')+',.88)':'rgba(255,255,255,.88)','important')
				li.style.setProperty('border-radius','8px','important');li.style.setProperty('margin-bottom','10px','important')})
		}catch(e){}
	}
/*有图取图，有字取文字矩形；块级 a 的盒子常是整行宽*/
	function ucTightRect(a){const img=a.querySelector('img')
		if(img){const r=img.getBoundingClientRect()
			if(r.width)return r}
		try{const rg=document.createRange();rg.selectNodeContents(a);const rects=[...rg.getClientRects()].filter((r)=>r.width>0&&r.height>0)
			if(rects.length){
				return rects.reduce(
				(acc,r)=>({
					left:Math.min(acc.left,r.left),
					top:Math.min(acc.top,r.top),
					right:Math.max(acc.right,r.right),
					bottom:Math.max(acc.bottom,r.bottom),
					width:Math.max(acc.right,r.right)-Math.min(acc.left,r.left),
					height:Math.max(acc.bottom,r.bottom)-Math.min(acc.top,r.top),
				}),
				{left:1e9,top:1e9,right:-1e9,bottom:-1e9,width:0,height:0},
				)
			}
		}catch(e){}
		return a.getBoundingClientRect()}
	function ucHitAt(x,y,alt){let el=null
		try{el=document.elementFromPoint?document.elementFromPoint(x,y):null}catch(e){}
		if(!el){try{const r=document.caretRangeFromPoint(x,y);el=r?(r.startContainer.nodeType===3?r.startContainer.parentElement:r.startContainer):null}catch(e){}}
		if(!el)el=alt||null
		if(!el||!el.closest)return null
		const a=el.closest('a[href^="/user/"]')
		if(!a)return null
		const box=ucTightRect(a)
		if(box.width&&box.height&&(x<box.left-4||x>box.right+4||y<box.top-4||y>box.bottom+4))return null
		return a}
	function ucBind(){
		const idle=(fn)=>{if(window.requestIdleCallback)requestIdleCallback(fn,{timeout:2500})
			else setTimeout(fn,600)}
		const pf=()=>
		idle(()=>{try{ucPrefetch()}catch(e){}})
		if(document.readyState==='complete')pf()
		else addEventListener('load',pf,{once:true})
		addEventListener('scroll',ucPrefetchSoon,{passive:true})
		if(ucBound||!document.body)return
		ucBound=true;window.__lgvUcReady=true
		document.addEventListener(
		'mouseover',
		(e)=>{const t=e.target
			if(ucSkip(t)){ucHide();return}
			let a=ucHitAt(e.clientX,e.clientY,t)
			if(a&&!(a.textContent||'').trim()){const box=a.closest('li.feed-li,.am-comment,.am-comment-bd,.lg-left,.user-header-top')||a.parentElement
				if(box){const named=[...box.querySelectorAll('a[href^="/user/"]')].find((x)=>x!==a&&(x.textContent||'').trim().length>0)
					if(named)a=named}}
			if(!a){if(t&&t.closest&&t.closest('#lgv-ucard')){clearTimeout(ucTimer);return}
				if(ucUid)ucHideSoon()
				return}
			const ar0=a.getBoundingClientRect()
			if(!ar0 .width||ar0 .bottom<0||ar0 .top>innerHeight){if(ucUid)ucHide()
				return}
			const m=/^\/user\/(\d+)(?:[/?#]|$)/.exec(a.getAttribute('href')||'')
			if(!m)return
			const uid=m[1]
/*自己不再静默吞卡：弹出来，关注框位置是灰色的「自己」*/
			const pm=/^\/user\/(\d+)/.exec(location.pathname)
			if(pm&&pm[1]===uid){ucHide();return}
			clearTimeout(ucTimer)
			if(ucUid===uid&&ucEl&&ucEl.classList.contains('lgv-on')){clearTimeout(ucTimer);ucHideCancel()
/*同一个人的另一个名字：卡不能留在原地（题解/评论区里同名链接一大把），跟着新锚点重贴*/
				if(ucAnchor!==a){ucAnchor=a
					try{ucPlace(a,true)}catch(e){}}
				return}
			ucTimer=setTimeout(()=>{try{ucShow(uid,a)}catch(err){console.error('[lgv-uc]',err)}},100)},
		true,
		)
		const ucOnScroll=()=>{if(!ucUid)return
			const a=ucAnchor
			if(!a||!a.isConnected){ucHide();return}
			const r=a.getBoundingClientRect()
			if(r.bottom<-24||r.top>innerHeight+24||!r.width){ucHide();return}
			ucPlace(a,true)}
		document.addEventListener('scroll',ucOnScroll,true);window.addEventListener('resize',ucOnScroll)
		const kill=()=>{
			document.querySelectorAll('div[class*="user-card"],div[class*="usercard"],div[class*="userCard"],div[class*="hover-card"]').forEach((n)=>{
				if(n.id!=='lgv-ucard')n.style.setProperty('display','none','important')})
		}
		kill()
		try{
			const mo=new MutationObserver((list)=>{
				for(const m of list){
					for(const n of m.addedNodes){if(n.nodeType!==1)continue
						if(n.classList&&n.classList.contains('float-card'))n.style.setProperty('display','none','important')
						const inner=n.querySelector&&n.querySelector('.float-card')
						if(inner)inner.style.setProperty('display','none','important')}
				}
			})
			mo.observe(document.body,{childList:true,subtree:true})}catch(e){}
		setInterval(kill,1200)}
	window.__uc={show:(uid,el)=>ucShow(String(uid),el||null),hide:()=>ucHide(),cache:()=>Array.from(UC_CACHE.keys())}
/* ── 搜索面板：左分类竖条 + 列表 + 右栏预览 ── */
	const S2_CATS=[ ['题目','#3b82f6'], ['用户','#a855f7'], ['帖子','#14b8a6'], ['文章','#f59e0b'], ['比赛','#ef4444'], ['题单','#22c55e'], ['页面','#64748b'], ]
	const s2Cache=new Map();const s2QCache=new Map()
	const s2On=(window.__lgvCats=window.__lgvCats||new Set(['题目','用户','帖子','文章','比赛','题单','页面']))
	try{const v=JSON.parse(localStorage.getItem('lgv-cats')||'null')
		if(Array.isArray(v)&&v.length){s2On.clear();v.forEach((x)=>s2On.add(x))}}catch(e){}
	let s2Panel=null, s2Timer=0, s2Seq=0, s2Sel=0, s2Rows=[], s2Prev=null
/*「题面」开关：对标题/标签命中的前 12 个候选拉正文核验*/
	let S2_STMT=false
	try{S2_STMT=localStorage.getItem('lgv-stmt')==='1'}catch(e){}
	function setStmt(v){S2_STMT=!!v
		try{localStorage.setItem('lgv-stmt',S2_STMT?'1':'0')}catch(e){}
		s2QCache.clear()
	}
	function syncStmtUI(){
		document.querySelectorAll('.lgv-stmt').forEach((lb)=>{const box=lb.querySelector('input')
			if(box&&box.checked!==S2_STMT)box.checked=S2_STMT
			lb.classList.toggle('on',S2_STMT)})
	}
	function s2Esc(v){return String(v==null?'':v).replace(/[<>&"]/g,(c)=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'})[c])}
	function s2Ctx(html){const m=/<script id="lentille-context" type="application\/json">([\s\S]*?)<\/script>/.exec(html)
		if(!m)return null
		try{return JSON.parse(m[1]).data||null}catch(e){return null}}
	const s2Raw=new Map()
/*所有站内请求排一条队：同时最多 3 个、彼此至少隔 150ms。一次搜索要问 5~6 个接口，
	  排队慢慢问，别一口气甩出去——洛谷不允许短时间连续访问*/
	const S2_Q=[];let s2Busy=0,s2LastAt=0,S2TO=0
	function s2Pump(){
		if(!S2_Q.length||s2Busy>=3)return
		const wait=Math.max(0,150-(Date.now()-s2LastAt))
		if(wait){setTimeout(s2Pump,wait);return}
		const t=S2_Q.shift();s2Busy++;s2LastAt=Date.now()
		fetch(t.url,t.opt||{credentials:'include'}).then(t.ok,t.no).finally(()=>{s2Busy--;s2Pump()})
		if(S2_Q.length&&s2Busy<3)s2Pump()}
	function s2Fetch(url,opt){return new Promise((ok,no)=>{S2_Q.push({url:url,opt:opt,ok:ok,no:no});s2Pump()})}
	function s2Text(url){if(s2Raw.has(url))return s2Raw.get(url)
		const job=s2Fetch(url) .then((r)=>r.text()) .catch(()=>'');s2Raw.set(url,job);setTimeout(()=>s2Raw.delete(url),300000);return job}
	async function s2Get(url){if(s2Cache.has(url))return s2Cache.get(url)
		const job=s2Text(url) .then((t)=>s2Ctx(t)) .catch(()=>null);s2Cache.set(url,job);setTimeout(()=>s2Cache.delete(url),300000);return job}
/*markdown 渲染：标题/列表/表格/代码块/提示块/折叠/公式*/
	const lgvEsc=(v)=> String(v==null?'':v) .replace(/&/g,'&amp;') .replace(/</g,'&lt;') .replace(/>/g,'&gt;') .replace(/"/g,'&quot;')
/*轻量 TeX：预览里的公式自己渲染，覆盖上下标 / 分数 / 根号 / 希腊字母 / 常用符号*/
	const TEX_SYM={
		alpha:'α',
		beta:'β',
		gamma:'γ',
		delta:'δ',
		epsilon:'ε',
		varepsilon:'ε',
		zeta:'ζ',
		eta:'η',
		theta:'θ',
		iota:'ι',
		kappa:'κ',
		lambda:'λ',
		mu:'μ',
		nu:'ν',
		xi:'ξ',
		pi:'π',
		rho:'ρ',
		sigma:'σ',
		tau:'τ',
		upsilon:'υ',
		phi:'φ',
		chi:'χ',
		psi:'ψ',
		omega:'ω',
		Gamma:'Γ',
		Delta:'Δ',
		Theta:'Θ',
		Lambda:'Λ',
		Xi:'Ξ',
		Pi:'Π',
		Sigma:'Σ',
		Phi:'Φ',
		Psi:'Ψ',
		Omega:'Ω',
		times:'×',
		cdot:'·',
		div:'÷',
		pm:'±',
		mp:'∓',
		le:'≤',
		leq:'≤',
		ge:'≥',
		geq:'≥',
		ne:'≠',
		neq:'≠',
		approx:'≈',
		equiv:'≡',
		sim:'∼',
		propto:'∝',
		infty:'∞',
		to:'→',
		rightarrow:'→',
		leftarrow:'←',
		Rightarrow:'⇒',
		Leftarrow:'⇐',
		leftrightarrow:'↔',
		sum:'∑',
		prod:'∏',
		int:'∫',
		oint:'∮',
		partial:'∂',
		nabla:'∇',
		forall:'∀',
		exists:'∃',
		emptyset:'∅',
		in:'∈',
		notin:'∉',
		subset:'⊂',
		subseteq:'⊆',
		supset:'⊃',
		cup:'∪',
		cap:'∩',
		angle:'∠',
		perp:'⊥',
		parallel:'∥',
		ldots:'…',
		cdots:'⋯',
		dots:'…',
		quad:' ',
		qquad:'  ',
		'%':'%',
	}
	const TEX_FN=/^(log|ln|lg|exp|sin|cos|tan|cot|sec|csc|arcsin|arccos|arctan|sinh|cosh|tanh|max|min|gcd|lcm|lim|sup|inf|det|deg|mod)$/
	function lgvTex(src){const s=String(src==null?'':src);let i=0
		function skip(){while(i<s.length&&/\s/.test(s[i]))i++}
		function atom(){skip()
			if(i>=s.length)return''
			if(s[i]==='\\'){i++;let name=''
				if(/[a-zA-Z]/.test(s[i]||'')){while(i<s.length&&/[a-zA-Z]/.test(s[i]))name+=s[i++]}else name=s[i++]||''
				if(name==='frac')return'<span class="tx-f"><span class="tx-n">'+group()+'</span><span class="tx-d">'+group()+'</span></span>'
				if(name==='sqrt')return'<span class="tx-sq">√<span class="tx-r">'+group()+'</span></span>'
				if(/^(text|mathrm|textrm|operatorname|mathbf|mathit)$/.test(name))return'<span class="tx-t">'+group()+'</span>'
				if(name==='left'||name==='right'){const d=s[i++]||'';return d==='.'?'':lgvEsc(d)}
				if(/^(displaystyle|textstyle|limits|nolimits|big|Big|bigg|Bigg)$/.test(name))return''
				if(TEX_SYM[name]!=null)return TEX_SYM[name]===' '?'&nbsp;':TEX_SYM[name]
				if(TEX_FN.test(name))return'<span class="tx-fn">'+name+'</span>'
				return lgvEsc(name)}
			i++;return lgvEsc(s[i-1])}
		function group(){skip()
			if(s[i]==='{'){i++;let depth=1, st=i
				while(i<s.length&&depth){if(s[i]==='\\'){i+=2;continue}
					if(s[i]==='{')depth++
					else if(s[i]==='}')depth--
					i++}
				return lgvTex(s.slice(st,i-1))}
			return atom()}
		let out=''
		while(i<s.length){skip()
			if(i>=s.length)break
			const c=s[i]
			if(c==='^'||c==='_'){i++;const v=group();out+=(c==='^'?'<sup>':'<sub>')+v+(c==='^'?'</sup>':'</sub>');continue}
			if(c==='{'){out+=group();continue}
			out+=atom()}
		return'<span class="tx">'+out+'</span>'}
	function lgvInline(t){let x=lgvEsc(t);const slots=[];const keep=(h)=>'\u0000'+(slots.push(h)-1)+'\u0000';x=x.replace(/\x60([^\x60\n]+)\x60/g,(m,c)=>keep('<code>'+c+'</code>'))
		x=x.replace(/\$\$([^$]+?)\$\$/g,(m,c)=>keep('<span class="lgv-mathb">'+lgvTex(c)+'</span>'))
		x=x.replace(/(^|[^\\$])\$([^$\n]+?)\$/g,(m,a,c)=>a+keep('<span class="lgv-math">'+lgvTex(c)+'</span>'))
		x=x.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;([^&]*)&quot;)?\)/g,(m,alt,src,title)=>
		keep('<img src="'+src+'" alt="'+alt+'"'+(title?' title="'+title+'"':'')+' loading="lazy">'),
		)
		x=x.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g,(m,txt,href)=> keep('<a href="'+href+'" target="_blank" rel="noreferrer noopener">'+txt+'</a>'), )
		x=x.replace( /(^|[\s(])(https?:\/\/[^\s<)]+)/g, (m,pre,url)=>pre+keep('<a href="'+url+'" target="_blank" rel="noreferrer noopener">'+url+'</a>'), )
		x=x.replace(/\*\*\*([^*]+)\*\*\*/g,'<strong><em>$1</em></strong>');x=x.replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>')
		x=x.replace(/(^|\W)\*([^*\n]+)\*(?=\W|$)/g,'$1<em>$2</em>');x=x.replace(/~~([^~]+)~~/g,'<del>$1</del>');x=x.replace(/\n/g,'<br>')
		return x.replace(/\u0000(\d+)\u0000/g,(m,i)=>slots[+i]||'')}
	const LGV_BOXES={info:'信息',warning:'警告',success:'通过',error:'错误',tip:'提示',note:'备注'}
	function lgvMd(src){const lines=String(src==null?'':src) .replace(/\r\n?/g,'\n') .replace(/\t/g,' ') .split('\n');const out=[];let i=0;const take=()=>lines[i++];const blank=(l)=>!l||!l.trim()
		while(i<lines.length){const line=lines[i]
			if(blank(line)){i++;continue}
			let f=/^\s*(\x60{3,}|~~~+)\s*([\w+-]*)\s*$/.exec(line)
			if(f){const fence=f[1][0].repeat(3), lang=f[2]||'';i++;const buf=[]
				while(i<lines.length&&!new RegExp('^\\s*'+fence).test(lines[i]))buf.push(take())
				i++;out.push('<pre><code'+(lang?' class="lang-'+lgvEsc(lang)+'"':'')+'>'+lgvEsc(buf.join('\n'))+'</code></pre>');continue}
			let c=/^\s*:::\s*([a-zA-Z]+)?\s*(.*)$/.exec(line)
			if(c){const type=(c[1]||'info').toLowerCase();const title=(c[2]||'').trim();i++;const buf=[]
				while(i<lines.length&&!/^\s*:::\s*$/.test(lines[i]))buf.push(take())
				i++;const inner=lgvMd(buf.join('\n'))
				if(type==='spoiler'||type==='fold'||type==='collapse'){
					out.push( '<details class="lgv-spoiler"><summary>'+lgvEsc(title||'展开查看')+'</summary><div class="lgv-spoiler-bd">'+inner+'</div></details>', )}else{out.push( '<div class="lgv-box lgv-box-'+ lgvEsc(type)+ '"><div class="lgv-box-t">'+ lgvEsc(title||LGV_BOXES[type]||type)+ '</div>'+ inner+ '</div>', )}
				continue}
			if(/^\s*<details[\s>]/i.test(line)){const buf=[]
				while(i<lines.length){buf.push(take())
					if(/<\/details>/i.test(buf[buf.length-1]))break}
				out.push(buf.join('\n').replace(/<\/?(script|iframe|style)[^>]*>/gi,''));continue}
			let h=/^\s{0,3}(#{1,6})\s+(.*)$/.exec(line)
			if(h){out.push('<h'+h[1].length+'>'+lgvInline(h[2].replace(/\s+#+\s*$/,''))+'</h'+h[1].length+'>');i++;continue}
			if(/^\s{0,3}([-*_])(\s*\1){2,}\s*$/.test(line)){out.push('<hr>');i++;continue}
			if(/\|/.test(line)&&i+1<lines.length&&/^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)+\|?\s*$/.test(lines[i+1])){
				const cells=(row)=> row .replace(/^\s*\|/,'') .replace(/\|\s*$/,'') .split('|') .map((x)=>x.trim());const head=cells(take())
				const aligns=cells(take()).map((a)=>(/^:-+:$/.test(a)?'center':/^-+:$/.test(a)?'right':''));const rows=[]
				while(i<lines.length&&/\|/.test(lines[i])&&!blank(lines[i]))rows.push(cells(take()))
				let tbl= '<table><thead><tr>'+ head.map((t,k)=>'<th'+(aligns[k]?' style="text-align:'+aligns[k]+'"':'')+'>'+lgvInline(t)+'</th>').join('')+ '</tr></thead><tbody>'
				rows.forEach((r)=>{tbl+= '<tr>'+ head.map((_,k)=>'<td'+(aligns[k]?' style="text-align:'+aligns[k]+'"':'')+'>'+lgvInline(r[k]||'')+'</td>').join('')+ '</tr>'})
				out.push('<div class="lgv-tblw">'+tbl+'</tbody></table></div>');continue}
			if(/^\s{0,3}>/.test(line)){const buf=[]
				while(i<lines.length&&/^\s{0,3}>/.test(lines[i]))buf.push(take().replace(/^\s{0,3}>\s?/,''))
				out.push('<blockquote>'+lgvMd(buf.join('\n'))+'</blockquote>');continue}
			let li=/^(\s*)([-*+]|\d{1,3}[.)])\s+(.*)$/.exec(line)
			if(li){const ordered=/\d/.test(li[2]);const buf=[]
				while(i<lines.length){const l2=lines[i]
					if(/^\s*([-*+]|\d{1,3}[.)])\s+/.test(l2)){buf.push({ind:(l2 .match(/^\s*/)||[''])[0].length,t:l2 .replace(/^\s*([-*+]|\d{1,3}[.)])\s+/,'')});i++}else if(!blank(l2)&&/^\s{2,}/.test(l2)){if(buf.length)buf[buf.length-1].t+='\n'+l2 .trim()
						i++}else break
				}
				const base=Math.min.apply( null, buf.map((b)=>b.ind), );let html=ordered?'<ol>':'<ul>';let depth=0
				buf.forEach((b)=>{const d=Math.min(2,Math.round((b.ind-base)/2))
					if(d>depth){html+=ordered?'<ol>':'<ul>';depth=d}else if(d<depth){while(depth>d){html+='</li>'+(ordered?'</ol>':'</ul>');depth--}}else if(html.slice(-4)!=='<ul>'&&html.slice(-4)!=='<ol>')html+='</li>'
					html+='<li>'+lgvInline(b.t)})
				while(depth-->0)html+='</li>'+(ordered?'</ol>':'</ul>')
				out.push(html+'</li></'+(ordered?'ol':'ul')+'>');continue}
			const buf=[]
			while(
			i<lines.length&&
			!blank(lines[i])&&
			!/^\s*(\x60{3,}|~~~+|:::|#{1,6}\s|>|([-*+]|\d{1,3}[.)])\s)/.test(lines[i])&&
			!/^\s{0,3}([-*_])(\s*\1){2,}\s*$/.test(lines[i])
			)
			buf.push(take())
			if(buf.length)out.push('<p>'+lgvInline(buf.join('\n'))+'</p>')
			else i++}
		return out.join('\n')}
	function probMd(p){if(!p)return''
		const c=p.content&&typeof p.content==='object'?p.content:{description:String(p.content||'')}
		const seg=[ ['题目背景',c.background], ['题目描述',c.description], ['输入格式',c.formatI||c.input], ['输出格式',c.formatO||c.output], ['提示',c.hint], ['说明',c.translation], ]
		const parts=[];seg.forEach(([t,v])=>{if(v&&String(v).trim())parts.push('## '+t+'\n\n'+String(v))})
		if(Array.isArray(c.samples)&&c.samples.length){const sp=[]
			c.samples.forEach((x,n)=>{if(!x||typeof x!=='object')return
				const tag=c.samples.length>1?'样例 '+(n+1):'样例'
				if(x.input!=null&&String(x.input).trim())sp.push('### '+tag+' 输入\n\n```\n'+String(x.input).replace(/\s+$/,'')+'\n```')
				if(x.output!=null&&String(x.output).trim())sp.push('### '+tag+' 输出\n\n```\n'+String(x.output).replace(/\s+$/,'')+'\n```')})
			if(sp.length)parts.push(sp.join('\n\n'))}
		return parts.join('\n\n')}
	function mdFromData(cd){if(!cd)return''
		if(cd.problem)return probMd(cd.problem)
		const pick=(o)=>String((o&&(o.content||o.description||o.slogan))||'')
		if(cd.article)return pick(cd.article)
		if(cd.post||cd.discussion)return pick(cd.post||cd.discussion)
		if(cd.contest)return pick(cd.contest)
		if(cd.training)return pick(cd.training)
		if(cd.paste)return'```\n'+String(cd.paste.content||'')+'\n```'
		return''}
	const S2_DIFF={0:'暂无',1:'入门',2:'普及-',3:'普及/提高-',4:'普及+/提高',5:'提高+/省选-',6:'省选/NOI-',7:'NOI/NOI+/CTSC'}
	const S2_PAGES=[
	['我的主页','/user/me'],
	['我的团队','/team/list'],
	['我的犇犇','/feed'],
	['我的记录','/record/list'],
	['我的专栏','/article/list'],
	['我的题库','/problem/list'],
	['题库','/problem/list'],
	['比赛','/contest/list'],
	['讨论区','/discuss/latest'],
	['专栏','/article/list'],
	['题单','/training/list'],
	['评测记录','/record/list'],
	['排名','/ranking'],
	['剪贴板','/paste/list'],
	['设置','/settings'],
	]
/*题面正文按块拼成纯文本再搜*/
	const STMT_CACHE=new Map()
	async function stmtText(pid){if(STMT_CACHE.has(pid))return STMT_CACHE.get(pid)
		const d=await s2Get('/problem/'+pid);const cd=(d&&(d.currentData||d.data||d))||null;const pr=cd&&(cd.problem||null);let txt=''
		if(pr&&pr.content){const c=pr.content;txt=typeof c==='string'?c:['background','description','formatI','formatO','hint'].map((x)=>(c&&c[x])||'').join('\n')}
		STMT_CACHE.set(pid,txt)
		if(STMT_CACHE.size>300)STMT_CACHE.clear()
		return txt}
	function stmtSnippet(txt,k){const i=txt.toLowerCase().indexOf(String(k).toLowerCase())
		if(i<0)return''
		const a=Math.max(0,i-34), b=Math.min(txt.length,i+k.length+46)
		return(
		(a>0?'…':'')+
		txt
		.slice(a,b)
		.replace(/[\s\u00a0]+/g,' ')
		.replace(/[*_\x60>#]/g,'')
		.trim()+
		(b<txt.length?'…':'')
		)}
	async function pMap(list,n,fn){let i=0;const runOne=async()=>{while(i<list.length){const x=list[i++]
				try{await fn(x)}catch(e){}}}
		await Promise.all(Array.from({length:Math.min(n,list.length)},runOne))}
	/*带 _contentOnly=1 一页 50 条；不带的话服务端只渲染 20 条——「仅题目」要 50 条全靠这个*/
	async function s2Problems(k,stmt){const d=await s2Get('/problem/list?_contentOnly=1&keyword='+encodeURIComponent(k)+'&page=1');const arr=(d&&d.problems&&d.problems.result)||[]
		const rows=arr.map((p)=>{const pid=String(p.pid||'')
/*接口偶尔不给 difficulty（老题/远程题），就用练习页、题面里缓存过的档位补*/
			let d=Number(p.difficulty)
			if(!isFinite(d)||d<0||d>8){const c=PID_DIFF[pid];d=c&&c.d!=null?c.d:-1}
			return{
				cat:'题目',
				title:pid+' '+(p.name||''),
				href:'/problem/'+pid,
				sub:(d>=0?PID_NAME[d]||'':'')+' · 通过 '+(p.totalSubmit==null?'-':p.totalSubmit),
				diff:d,
				name:String(p.name||''),
				pid:pid,
			}
		})
		if(!stmt)return rows
/*勾了「题面」：只核验头一个候选，一条一条来、间隔 400ms——别一开口就是十几条并发*/
		const q=String(k).toLowerCase();const pool=rows.slice(0,1)
		for(const r of pool){if(r.name.toLowerCase().indexOf(q)>=0){r.hit='title';continue}
			const t=await stmtText(r.pid);const sn=t?stmtSnippet(t,k):''
			if(sn){r.hit='stmt';r.snip=sn}
			await new Promise((res)=>setTimeout(res,400))}
		const keep=pool.filter((r)=>r.hit);return(keep.length?keep:rows.slice(0,12)).map((r)=>(r.hit==='stmt'?Object.assign({},r,{sub:'题面：'+r.snip}):r))}
	async function s2Users(k){const out=[];const seen=new Set();const urls=['/user/search?keyword='+encodeURIComponent(k)+'&page=1','/api/user/search?keyword='+encodeURIComponent(k)]
		for(const u of urls){
			if(out.length)break
			try{const r=await s2Fetch(u);const j=await r.json();const list=(j&&(j.users||j.data||j.result))||[] ;(Array.isArray(list)?list:[]).forEach((x)=>{
					const id=String(x.uid)
					if(seen.has(id))return
					seen.add(id);out.push({ cat:'用户', title:(x.name||'')+' (UID '+x.uid+')', href:'/user/'+x.uid, sub:(x.slogan||x.introduction||'').slice(0,40), uid:x.uid, })})
			}catch(e){}
			if(out.length>=20)break}
		return out.slice(0,20)}
	async function s2Posts(k,limit){
/*团队帖放不放行只看一件事：这个 teamid 我是不是成员。
	  成员关系存在 localStorage（24 小时），来源有两处：进团队页时顺手记（0 请求），
	  或者搜索时发现没见过的团队，排队去问一次（每次搜索最多问 2 个，走同一条请求队列）*/
	const TEAM_KEY='lgv-myteams'
	function teamCache(){try{const o=JSON.parse(localStorage.getItem(TEAM_KEY)||'{}')
		if(o&&o._t&&Date.now()-o._t<86400000)return o}catch(e){}
		return{_t:Date.now()}}
	function teamGet(id){const o=teamCache();return o[id]}
	function teamSet(id,v){const o=teamCache();if(o[id]===v)return
		o[id]=v;o._t=Date.now();try{localStorage.setItem(TEAM_KEY,JSON.stringify(o))}catch(e){}}
	function teamIdOf(f){const m=/^g(\d+)$/.exec((f&&f.InternalName)||'');return m?m[1]:''}
	const TQ=[];let TBusy=0
/*「我加入了哪些团队」一次就能问全：/user/mine/team 的 data.teams 就是我加入的（type=1）与申请中的，
	  比按团队页逐个探测准得多，也省请求——这是白名单的主来源*/
	const TM={done:0}
	function teamMine(){if(TM.done)return
		TM.done=1
		try{const o=JSON.parse(localStorage.getItem(TEAM_KEY)||'{}');if(o&&o._mine&&o._t&&Date.now()-o._t<86400000)return}catch(e){}
		s2Get('/user/mine/team?_contentOnly=1') .then((d)=>{const arr=(d&&d.teams)||[]
			if(!arr.length)return
			const o={_t:Date.now(),_mine:1}
			arr.forEach((x)=>{const id=x&&x.team&&x.team.id;if(id&&Number(x.type)===1)o[id]=1})
			try{localStorage.setItem(TEAM_KEY,JSON.stringify(o))}catch(e){}
			if(TT.repaint)TT.repaint()}) .catch(()=>{})}
	const TT=WIN.__lgvTeam=WIN.__lgvTeam||{n:0}
	TT.get=teamGet;TT.idOf=teamIdOf;TT.repaint=s2Repaint
	function teamAsk(id){if(!id||teamGet(id)!=null||TT.n>=2)return
		if(!ucOwnUid())return
		if(TQ.indexOf(id)>=0)return
		TQ.push(id);TT.n++;teamPump()}
	function teamPump(){if(TBusy||!TQ.length)return
		const id=TQ.shift();TBusy=1
		s2Text('/team/'+id) .then((t)=>{if(!t)return
/*只有明确的 true 才记 1。null 表示未登录或站点没给，记成 0 会污染 24 小时缓存*/
			const m=/"currentMember":(null|true|\{)/.exec(t);if(m&&m[1]!=='null')teamSet(id,1)})
		.finally(()=>{TBusy=0;teamPump();if(TT.repaint)TT.repaint()})}
/*在团队页里把「我是不是成员」记下来，省得搜索时再问*/
	function teamHook(){const m=/^\/team\/(\d+)/.exec(location.pathname);if(!m)return
		if(!ucOwnUid())return
		const el=document.getElementById('lentille-context');if(!el)return
		try{const d=JSON.parse(el.textContent||'{}').data
			if(!d||!(d.team&&d.team.id==Number(m[1])))return
			teamSet(m[1],d.currentMember?1:0)}catch(e){}}
	TT.hook=teamHook
	function s2Repaint(){if(!s2Panel)return
		if(typeof s2Paint!=='function')return
		const box=document.getElementById('lgv-s2-list');if(!box||!box.offsetParent)return
		const k=((document.getElementById('lgv-s2-input')||{}).value||'').trim();if(!k)return
		const hit=s2QCache.get(k+(S2_STMT?'|T':''));if(!hit)return
		const cats=window.__lgvEffective?window.__lgvEffective():s2On
		const rows=hit.rows.filter((r)=>cats.has(r.cat)&&(!r.team||teamGet(r.team)===1))
		if(!rows.length&&!s2Rows.length)return
		s2Rows=rows;s2Paint(rows);s2SetFoot(rows.length+' 条结果')}
/*只问第一页：一页 20 条，翻 4 页就是 4 次请求，又慢又踩频控。keyword 服务端已经筛过一轮，
	  剩下的交给本地 fxRank 排序*/
		teamMine()
		let arr=[]
		try{const r=await s2Fetch('/api/discuss?page=1&keyword='+encodeURIComponent(k))
			const d=await r.json();arr=(d&&d.data&&d.data.result)||[]}catch(e){}
		const out=[];const seen=new Set()
		for(const p of arr){
			const id=p.PostID||p.postId||p.id
			if(!id||seen.has(id))continue
			const fname=(p.Forum&&p.Forum.Name)||''
/*团队帖：自己的团队放行，别人的藏起来（判定见 teamGet），没见过的顺手排一次判断*/
			const tid=teamIdOf(p.Forum)
			if(tid&&teamGet(tid)!==1)teamAsk(tid)
			seen.add(id);const when=p.SubmitTime?new Date(p.SubmitTime*1000).toISOString().slice(0,10):''
			out.push({ cat:'帖子', title:p.Title||p.title||'', href:'/discuss/'+id, team:tid, sub:(fname||'综合')+(when?' · '+when:'')+' · '+(p.RepliesCount||0)+' 回复' })}
		return out}
	async function s2Articles(k,limit){const want=limit||20;const list=[]
		/*三页一起要：一页 15 条，串着翻到第 4 页要好几秒，凑 50 条尤其明显*/
		const d=await s2Get('/article?keyword='+encodeURIComponent(k)+'&page=1').catch(()=>null)
		list.push(...((d&&d.articles&&d.articles.result)||[]))
		return list.map((a)=>({
			cat:'文章',
			title:a.title||'',
			href:'/article/'+(a.lid||a.id),
			sub:'作者 '+((a.author&&a.author.name)||'')+' · 赞 '+(a.voteCount==null?'-':a.voteCount),
		}))
	}
	async function s2Contests(k,limit){const want=limit||20;const list=[]
		const d=await s2Get('/contest/list?name='+encodeURIComponent(k)+'&page=1').catch(()=>null)
		list.push(...((d&&d.contests&&d.contests.result)||[]))
		return list.map((c)=>({
			cat:'比赛',
			title:c.name||'',
			href:'/contest/'+c.id,
			sub:(c.startTime?new Date(c.startTime*1000).toISOString().slice(0,10):'')+' · '+((c.ruleType||'')+''),
		}))
	}
/*题单这栏站点没做关键词接口：/training/list 的 keyword、type、order、category 全被忽略，恒回 18 条官方题单
	  （实测带不带 keyword 都是同样 18 条，type=1..5 直接 404）。所以只取一次全量，靠本地模糊匹配*/
	async function s2Trainings(k){const d=await s2Get('/training/list?_contentOnly=1');const arr=(d&&d.trainings&&d.trainings.result)||[];const q=(k||'').toLowerCase()
		return arr.filter((t)=>{if(!q)return true
			const nm=String(t.name||t.title||'').toLowerCase()
			return nm.indexOf(q)>=0||fxScore(k,nm)>=0.62})
		.map((t)=>({
			cat:'题单',
			title:t.title||t.name||'',
			href:'/training/'+t.id,
			sub:'题目 '+(t.problemCount==null?'-':t.problemCount),
		}))
	}
	function s2PageList(k){const q=(k||'').toLowerCase()
		return S2_PAGES.filter((p)=>{if(!q)return true
			const t=p[0].toLowerCase(), h=p[1].toLowerCase();return t.indexOf(q)>=0||h.indexOf(q)>=0||fxScore(k,t)>=0.62}).map((p)=>({
			cat:'页面',
			title:p[0],
			href:p[1],
			sub:p[1],
		}))
	}
/*半屏 / 全屏共用：同一批接口、同一套字段*/
/*题库分类条：ul.luogu / ul.rmj 改滑块样式，选中项常展开，点箭头可收起*/
	function catTabs(){const w=document.querySelector('.block-item.category')
		if(!w)return
		const uls=[...w.querySelectorAll('ul.luogu,ul.rmj')]
		if(!uls.length)return
		uls.forEach((ul)=>{if(!ul.dataset.lgvTabbed){ul.dataset.lgvTabbed='1';ul.classList.add('lgv-notr');setTimeout(()=>ul.classList.remove('lgv-notr'),120)}
			if(!ul.classList.contains('lgv-tabs'))ul.classList.add('lgv-tabs')
			if(!ul.querySelector(':scope>.lgv-slide')){const sl=document.createElement('i');sl.className='lgv-slide';ul.insertBefore(sl,ul.firstChild)}})
		const lu=w.querySelector('ul.luogu')
		if(lu){const lis=[...lu.children].filter((e)=>e.tagName==='LI');const on=lis.some((l)=>l.classList.contains('selected'));let care=lu.querySelector('.lgv-caret')
			if(lis[0]&&!care){care=document.createElement('i');care.className='lgv-caret'
				care.addEventListener('click',(e)=>{e.preventDefault();e.stopPropagation();const cur=lis.find((l)=>l.classList.contains('selected'))
					if(lu.classList.contains('lgv-shut')){delete lu.dataset.lgvShut;lu.classList.remove('lgv-shut');lu.classList.add('lgv-manual')}else{lu.dataset.lgvShut=cur?cur.textContent.trim():'';lu.classList.add('lgv-shut');lu.classList.remove('lgv-manual')}
					catTabs()})
				lis[0].appendChild(care)}
			const selTxt=(lis.find((l)=>l.classList.contains('selected'))||{textContent:''}).textContent.trim();const shut=lu.dataset.lgvShut
			if(shut!=null&&shut!==selTxt){delete lu.dataset.lgvShut;lu.classList.remove('lgv-shut')}
			const open=!lu.classList.contains('lgv-shut')&&(on||lu.classList.contains('lgv-manual'));lu.classList.toggle('lgv-open',open)
			if(care){
				if(open){if(care.parentNode!==lu)lu.appendChild(care)
					care.classList.add('lgv-caret-end')}else{if(care.parentNode!==lis[0])lis[0].appendChild(care)
					care.classList.remove('lgv-caret-end')}
			}
			lis.forEach((l,i)=>l.classList.toggle('lgv-folded',!open&&i>0))}
		uls.forEach((ul)=>{const sl=ul.querySelector(':scope>.lgv-slide');const sel=ul.querySelector('li.selected')
			if(!sl)return
			if(!sel){sl.style.opacity='0';return}
			sl.style.opacity='1';sl.style.width=sel.offsetWidth+'px';sl.style.transform='translateX('+sel.offsetLeft+'px)'})
	}
/*转圈延迟 140ms 出现，返回句柄 stop() 收掉*/
	function spinShow(box){const h={el:null,timer:0}
		if(!box){h.stop=()=>{};return h}
		const seq=(box.__lgvSpinSeq=(box.__lgvSpinSeq||0)+1)
		h.timer=setTimeout(()=>{if(box.__lgvSpinSeq!==seq||!box.isConnected)return
			const d=document.createElement('div');d.className='lgv-spin'
			d.innerHTML=
			'<i style="--i:0"></i><i style="--i:1"></i><i style="--i:2"></i><i style="--i:3"></i><i style="--i:4"></i><i '+
			'style="--i:5"></i><i style="--i:6"></i><i style="--i:7"></i><i style="--i:8"></i><i style="--i:9"></i>'
			box.textContent='';const mv=Math.round((box.clientHeight||240)/2-38);d.style.marginTop=Math.max(14,Math.min(340,mv))+'px';box.appendChild(d);h.el=d},60)
		h.stop=()=>{clearTimeout(h.timer)
			if(h.el&&h.el.parentNode)h.el.remove()
			h.el=null};return h}
/*模糊查找：分隔符归一，再编辑距离兜底；完全 1 / 包含 .97 / 反向 .9 / 其余滑窗*/
	const FXN=(s)=> String(s||'') .toLowerCase() .replace(/[\s\-_.·/\\|]+/g,'')
	function fxLev(a,b){const m=a.length, n=b.length
		if(!m)return n
		if(!n)return m
		let prev=new Array(n+1), cur=new Array(n+1)
		for(let j=0;j<=n;j++)prev[j]=j
		for(let i=1;i<=m;i++){cur[0]=i;const ca=a.charCodeAt(i-1)
			for(let j=1;j<=n;j++)cur[j]=Math.min(prev[j]+1,cur[j-1]+1,prev[j-1]+(ca===b.charCodeAt(j-1)?0:1))
			const t=prev;prev=cur;cur=t}
		return prev[n]}
	function fxScore(q,txt){const a=FXN(q), b=FXN(txt)
		if(!a||!b)return 0
		if(a===b)return 1
		if(b.indexOf(a)>=0)return 0.97
		if(a.length>=3&&a.indexOf(b)>=0)return 0.9
		const L=a.length;let best=0
		for(let i=0;i<b.length;i++){for(const w of[L-2,L-1,L,L+1,L+2]){if(w<3||i+w>b.length)continue
				const sc=1-fxLev(a,b.substr(i,w))/Math.max(L,w)
				if(sc>best)best=sc}
			if(best>=0.99)break}
		return best}
/*查询计划：原串 → 分隔符统一成下划线（null-in-null 与 null_in_null 是同一个名字）。
			不再退化到「最长词」：接口是语义/全文匹配，拿个单词去查只会捞回一堆无关结果*/
	function fxPlans(k){const q=String(k||'').trim(), out=[];const push=(v)=>{v=String(v||'').trim()
			if(v&&out.indexOf(v)<0)out.push(v)};push(q);push(q.replace(/[\s\-.·/\\|]+/g,'_'));return out}
/*拼错兜底：接口是按名字精确/前缀匹配的，只能自己造拼写。逐个词元改一个元音（o↔u、a↔e、i↔y）。
			noll_in_null → null_in_null 就是这么来的*/
	const FX_VOW={o:'u',u:'o',a:'e',e:'a',i:'y',y:'i'}
	function fxVariants(k){const parts=String(k||'') .trim() .split(/([\s\-_.·/\\|]+)/);const out=[]
		const push=(v)=>{v=String(v||'') .trim() .replace(/[\s\-.·/\\|]+/g,'_')
			if(v&&v!==String(k).replace(/[\s\-.·/\\|]+/g,'_')&&out.indexOf(v)<0)out.push(v)}
		/*中文没法靠改元音：多词就拆开逐个查，长词就裁头裁尾，
		  这样才能把「最短路 算法」「最短路算」这类拖泥带水的输入落到「最短路」上*/
		const words=parts.filter((t)=>t&&!/^[\s\-_.·/\\|]+$/.test(t))
		if(words.length>1)words.forEach((w)=>push(w))
		const whole=words.join('')
		for(const w of words){if(w.length<3)continue
			push(w.slice(0,-1));push(w.slice(1))
			if(w.length>=5){push(w.slice(0,-2));push(w.slice(2))}}
		push(whole.replace(/\s+/g,''))
		for(let i=0;i<parts.length&&out.length<10;i++){const tok=parts[i]
			if(!tok||/^[\s\-_.·/\\|]+$/.test(tok))continue
			for(let c=0;c<tok.length&&out.length<10;c++){const ch=tok[c].toLowerCase(), to=FX_VOW[ch]
				if(!to)continue
				const nt=tok.slice(0,c)+(tok[c]!==ch?to.toUpperCase():to)+tok.slice(c+1);const copy=parts.slice();copy[i]=nt;push(copy.join(''))}
		}
		return out}
/*每类里按匹配度排序、最多 50 条；放宽计划捞回来的、分数太低的丢掉，免得噪音淹了结果*/
	function fxRank(rows,k,limit){const seen=new Set(), out=[]
		rows.forEach((r,i)=>{if(!r||!r.href||seen.has(r.href))return
			seen.add(r.href);const txt=(r.title||'')+' '+(r.name||'')+' '+(r.sub||'');r.sc=Math.max(fxScore(k,txt),r.__sc||0);r.__i=i;out.push(r)})
		const keep=out.filter((r)=>!(r.__fx&&r.sc<0.62));keep.sort((a,b)=>b.sc-a.sc||a.__i-b.__i);return keep.slice(0,limit||50)}
	async function powerSearch(k,cats,isDead,opt){const out=[];const jobs=[];const want=(c)=>cats&&cats.has(c)
		const perCat=opt&&opt.limit?opt.limit:cats&&cats.size===1?50:20;const plans=fxPlans(k)
		const vmax=cats&&cats.size===1?2:1
/*同一类按计划串行捞，命中够了(>=60)就停；放宽计划捞回来的打上 __fx 标记*/
		const gather=async(fn,allowVar)=>{const all=[]
			for(const p of plans){let l=[]
				try{l=(await fn(p,p===k))||[]}catch(e){}
				if(p!==k)
				l.forEach((r)=>{r.__fx=1})
				all.push(...l)
				if(all.length>=perCat)return all}
			/*0 条固然要兜，只有个位数条也得兜：多半是输入的词比站里的长/散，
			  裁一刀或者拆开就有了。变体捞回来的打 __fx，靠 fxScore 决定留不留*/
			if(all.length<3&&allowVar)
			try{let used=0
				for(const p of fxVariants(k)){if(used>=vmax)break
					used++;let l=[]
					try{l=(await fn(p,false))||[]}catch(e){}
					if(!l.length)continue
					l.forEach((r)=>{r.__fx=1;const txt=(r.title||'')+' '+(r.name||'')+' '+(r.sub||'');const sc=fxScore(p,txt)
						if(!(r.__sc>=sc))r.__sc=sc});all.push(...l)}
			}catch(err){;(window.__lgvDbg=window.__lgvDbg||[]).push('var:'+String(err).slice(0,80))}
			return all}
		const done=()=>{if(opt&&opt.onPartial)try{opt.onPartial(out)}catch(e){}}
		if(want('题目')&&k)jobs.push(gather((q,first)=>s2Problems(q,S2_STMT&&first),1).then((l)=>{out.push(...fxRank(l,k,perCat));done()}))
		if(want('用户')&&k)jobs.push(gather((q)=>s2Users(q)).then((l)=>{out.push(...fxRank(l,k,perCat));done()}))
		if(want('帖子')&&k)jobs.push(gather((q)=>s2Posts(q,perCat),1).then((l)=>{out.push(...fxRank(l,k,perCat));done()}))
		if(want('文章')&&k)jobs.push(gather((q)=>s2Articles(q,perCat)).then((l)=>{out.push(...fxRank(l,k,perCat));done()}))
		if(want('比赛')&&k)jobs.push(gather((q)=>s2Contests(q,perCat)).then((l)=>{out.push(...fxRank(l,k,perCat));done()}))
		if(want('题单')&&k)jobs.push(gather((q)=>s2Trainings(q)).then((l)=>{out.push(...fxRank(l,k,perCat));done()}))
		if(want('页面')&&k)out.push(...fxRank(s2PageList(k),k,perCat))
/*站内全文搜索偶尔要 12s 才回（实测 /api/discuss?keyword=月赛 12000ms+，200）。
		  这里只是兜底，不是体验上限：先到先上屏，慢的那几个仍会各自 resolve 后 repaint*/
		const cap=(pr)=>Promise.race([pr,new Promise((r)=>setTimeout(()=>{S2TO=1;r(null)},15000))]);await Promise.all(jobs.map((j)=>cap(j).catch(()=>null)))
		if(isDead&&isDead())return[]
		const ORD=S2_CATS.map((c)=>c[0]), key=(x)=>x.cat||x.section||x.tag
		out.sort((a,b)=>{const ia=ORD.indexOf(key(a)), ib=ORD.indexOf(key(b));const d=(ia<0?99:ia)-(ib<0?99:ib);return d||(b.sc||0)-(a.sc||0)});return out}
/*预览：两个面板共用一份取数 + 渲染，返回 {title, meta, md}*/
	async function previewData(row){const d=await s2Get(row.href);const cd=(d&&(d.currentData||d))||null
		if(!cd||cd.errorCode)return null
		let head=row.title, meta=row.sub||''
		if(cd.problem){const p=cd.problem;head=p.pid?p.pid+' '+(p.name||p.title||row.title):p.name||p.title||row.title
			const diff=['暂无','入门','普及-','普及/提高-','普及+/提高','提高+/省选-','省选/NOI-','NOI/NOI+/CTSC'][Number(p.difficulty)]||''
			meta=[diff,p.totalSubmit!=null?'提交 '+p.totalSubmit:'',p.acceptCount!=null?'通过 '+p.acceptCount:''] .filter(Boolean) .join(' · ')}else if(cd.user){const u=cd.user;head=u.name||row.title
			meta=[
			'UID '+u.uid,
			u.passedProblemCount!=null?'通过 '+u.passedProblemCount:'',
			u.followerCount!=null?'粉丝 '+u.followerCount:'',
			u.rating!=null?'等级分 '+u.rating:'',
			]
			.filter(Boolean)
			.join(' · ')
		}else if(cd.post||cd.discussion){const q=cd.post||cd.discussion;head=q.title||row.title
			meta=[
			q.author&&q.author.name?q.author.name:'',
			q.time?new Date(q.time*1000).toLocaleString():'',
			q.replyCount!=null?q.replyCount+' 条回复':'',
			]
			.filter(Boolean)
			.join(' · ')
		}else if(cd.article){const a=cd.article;head=a.title||row.title
			meta=[a.author&&a.author.name?a.author.name:'',a.time?new Date(a.time*1000).toLocaleString():''].filter(Boolean).join(' · ')}else if(cd.contest){const q=cd.contest;head=q.name||row.title
			meta=[q.startTime?new Date(q.startTime*1000).toLocaleString():'',q.ruleType!=null?'赛制 '+q.ruleType:''] .filter(Boolean) .join(' · ')}else if(cd.training){const q=cd.training;head=q.title||row.title;meta=['题单',q.problemCount!=null?q.problemCount+' 题':''].filter(Boolean).join(' · ')}
		const src=mdFromData(cd);const md=src?lgvMd(src):'';return{title:head,meta:meta,md:md}}
/*这套样式原本挂在 s2Build 里，只开半屏（右下角放大镜）时根本不会建，半屏的标签勾选框就还是满不透明；
		   抽出来在脚本启动时就注入，两套搜索无论先开哪个都一致*/
	function s2Style(){if(document.getElementById('lgv-s2-style')||!document.documentElement)return
		const host=document.head||document.documentElement;const st=document.createElement('style');st.id='lgv-s2-style'
		st.textContent=`
#lgv-s2{position:fixed;inset:0;margin:auto;width:min(1240px,94vw);height:min(880px,calc(100vh - 96px));height:min(880px,calc(100dvh - 96px));max-height:calc(100vh - 96px);max-height:calc(100dvh - 96px);display:flex;flex-direction:column;z-index:2147483030;--lgv-s2-paper:255,255,255;background-color:rgba(var(--lgv-s2-paper),.82)!important;-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);color:#1c1c1c;visibility:hidden;opacity:0;pointer-events:none;transform:scale(.965);transition:opacity .3s ease,transform .5s cubic-bezier(.22,.72,.25,1),visibility 0s linear .5s;border-radius:12px!important;overflow:hidden;box-shadow:0 22px 60px rgba(0,0,0,.3),0 0 0 1px rgba(127,127,127,.16)}
#lgv-s2.lgv-on{visibility:visible;opacity:1;pointer-events:auto;transform:none;transition:opacity .3s ease,transform .5s cubic-bezier(.22,.72,.25,1),visibility 0s}
#lgv-s2-mask{position:fixed;inset:0;background:rgba(0,0,0,.42);z-index:2147483020;display:block;visibility:hidden;opacity:0;pointer-events:none;transition:opacity .3s ease,visibility 0s linear .3s}
#lgv-s2-mask.lgv-on{visibility:visible;opacity:1;pointer-events:auto;background:rgba(0,0,0,.42)!important;transition:opacity .3s ease,visibility 0s}
/*全屏上条复用半屏的 .lgv-shead*/
.lgv-s2-mag{display:flex;align-items:center;flex:0 0 auto;opacity:.55;pointer-events:none}.lgv-s2-mag svg{width:18px;height:18px;display:block}
#lgv-s2-input{flex:1 1 auto;min-width:0;border:0!important;outline:0!important;background:transparent!important;box-shadow:none!important;color:inherit!important;font:inherit!important;font-size:13.5px!important;padding:3px 2px!important;border-radius:6px!important}
#lgv-s2-close{display:inline-flex;align-items:center;cursor:pointer} #lgv-s2-min{display:inline-flex;align-items:center;justify-content:center;cursor:pointer;padding:5px!important;line-height:0!important}
#lgv-s2-min svg{display:block;width:12px!important;height:12px!important}#lgv-s2-body{flex:1;display:flex;min-height:0}
#lgv-s2-rail{flex:0 0 88px;border-right:1px solid rgba(127,127,127,.14);padding:12px 6px;overflow:auto}.lgv-s2-cat{display:flex;align-items:center;justify-content:center;height:22px;padding:0;border-radius:8px!important;font-size:11px;color:#5f6470;cursor:pointer;user-select:none;border:1px solid transparent;margin-bottom:9px}
.lgv-s2-cat i{width:5px;height:5px;border-radius:50%;background:var(--c);opacity:.85;margin-right:5px;flex:0 0 auto}.lgv-s2-cat.on{color:color-mix(in srgb,var(--c) 45%,transparent);background:#fff;border-color:var(--c);box-shadow:none;font-weight:400}
.lgv-s2-cat.on i{opacity:.85}
/*分类标签勾选态压到 45%，未选再退一档*/
#lgv-s2-list{flex:1;min-width:0;overflow:auto;padding:6px 0}.lgv-s2-row{display:flex;gap:8px;align-items:baseline;padding:7px 14px;cursor:pointer;text-decoration:none;color:inherit}
.lgv-s2-row:nth-child(even){background:rgba(127,127,127,.055)}#lgv-s2.lgv-dark .lgv-s2-row:nth-child(even){background:rgba(255,255,255,.055)}
.lgv-s2-row:hover,.lgv-s2-row.lgv-sel{background:rgba(0,0,0,.05)}.lgv-s2-tag{flex:0 0 auto;display:inline-flex;align-items:center;justify-content:center;height:16px;box-sizing:border-box;font-size:10.5px;line-height:1;text-align:center;padding:0 5px;border:1px solid rgba(127,127,127,.34);border-radius:var(--lgv-tag-r)!important;white-space:nowrap}
.lgv-s2-t{flex:1;min-width:0;font-size:13.5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.lgv-s2-s{flex:0 0 auto;font-size:11px;opacity:.45;max-width:40%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
/*搜索面板题号：题号本身不染色，只在字下面垫一条半高难度带（和练习页/题库同一条）*/
.lgv-s2-pid{position:relative;z-index:0;font-style:normal} .lgv-s2-pid::after{content:'';position:absolute;left:-2px;right:-2px;bottom:.02em;height:.52em;background:var(--lgv-hl);opacity:.65;border-radius:2px;z-index:-1}
.lgv-s2-pid[data-lgv-d="0"]{--lgv-hl:#bfbfbf} .lgv-s2-pid[data-lgv-d="1"]{--lgv-hl:#fe4c61}
.lgv-s2-pid[data-lgv-d="2"]{--lgv-hl:#f39c11} .lgv-s2-pid[data-lgv-d="3"]{--lgv-hl:#ffc116}
.lgv-s2-pid[data-lgv-d="4"]{--lgv-hl:#52c41a} .lgv-s2-pid[data-lgv-d="5"]{--lgv-hl:#13c2c2}
.lgv-s2-pid[data-lgv-d="6"]{--lgv-hl:#3498db} .lgv-s2-pid[data-lgv-d="7"]{--lgv-hl:#9d3dcf}
.lgv-s2-pid[data-lgv-d="8"]{--lgv-hl:#0e1d69} html.lgv-dark .lgv-s2-pid[data-lgv-d="0"]{--lgv-hl:#bfbfbf}
html.lgv-dark .lgv-s2-pid[data-lgv-d="1"]{--lgv-hl:#ff9ea3} html.lgv-dark .lgv-s2-pid[data-lgv-d="2"]{--lgv-hl:#ffce63}
html.lgv-dark .lgv-s2-pid[data-lgv-d="3"]{--lgv-hl:#ffe169} html.lgv-dark .lgv-s2-pid[data-lgv-d="4"]{--lgv-hl:#94d66d}
html.lgv-dark .lgv-s2-pid[data-lgv-d="5"]{--lgv-hl:#5cdbd3} html.lgv-dark .lgv-s2-pid[data-lgv-d="6"]{--lgv-hl:#89d1f5}
html.lgv-dark .lgv-s2-pid[data-lgv-d="7"]{--lgv-hl:#ce8ee8} html.lgv-dark .lgv-s2-pid[data-lgv-d="8"]{--lgv-hl:#728dcf}
#lgv-s2-prev{flex:0 0 330px;border-left:1px solid rgba(127,127,127,.14);overflow:auto;padding:14px;font-size:13px;line-height:1.65}
#lgv-s2-prev h3{font-size:15px;margin:0 0 6px}#lgv-s2-prev .m{font-size:11.5px;opacity:.55;margin-bottom:10px}#lgv-s2-foot{flex:0 0 auto;padding:6px 14px;border-top:1px solid rgba(127,127,127,.14);font-size:11.5px;opacity:.55}
#lgv-s2.lgv-dark{--lgv-s2-paper:29,32,37;color:#e9e9e9}html.lgv-dark #lgv-s2{--lgv-s2-paper:29,32,37;color:#e9e9e9}html.lgv-lite #lgv-s2,html.lgv-lite #lgv-search{-webkit-backdrop-filter:none!important;backdrop-filter:none!important}
/*动画期只提合成层、屏蔽命中测试*/ #lgv-search.lgv-anim,#lgv-s2.lgv-anim{will-change:transform,opacity;contain:layout paint;pointer-events:none}
/*动画期改用静态模糊层（同壁纸、同 14px、同 .82），只栅格化一次*/ #lgv-search,#lgv-s2{-webkit-backdrop-filter:none!important;backdrop-filter:none!important;background-color:transparent!important}
#lgv-search::before,#lgv-s2::before{content:'';position:absolute;inset:-26px;z-index:0;pointer-events:none;background:var(--lgv-bg) center/cover no-repeat;-webkit-filter:blur(20px);filter:blur(20px)}
#lgv-search::after,#lgv-s2::after{content:'';position:absolute;inset:0;z-index:0;pointer-events:none;border-radius:inherit;background:rgba(var(--lgv-sp-paper),.82)}
#lgv-s2::after{background:rgba(var(--lgv-s2-paper),.82)}#lgv-search>*,#lgv-s2>*{position:relative;z-index:1}#lgv-ucard.lgv-anim{will-change:transform,opacity}
@media (prefers-reduced-motion:reduce){#lgv-s2,#lgv-s2-mask,#lgv-search{transition:none!important}#lgv-s2{transform:none} }`
		host.appendChild(st)}
	function s2Build(){if(s2Panel&&document.body.contains(s2Panel))return s2Panel
		s2Style();const mask=document.createElement('div');mask.id='lgv-s2-mask';mask.addEventListener('click',()=>s2Close());s2Panel=document.createElement('div');s2Panel.id='lgv-s2'
		s2Panel.innerHTML=
		'<div id="lgv-s2-head" class="lgv-shead"><span class="lgv-s2-mag">'+
		SEARCH_MAG+
		'</span><input id="lgv-s2-input" placeholder="题目 / 用户 / 帖子 / 文章 / 比赛 / 题单 / 页面   Ctrl+` 唤出" autocomplete="off">'+
		'<label class="lgv-stmt'+
		(S2_STMT?' on':'')+
		'" title="同时匹配题目正文（题面）"><input type="checkbox"'+
		(S2_STMT?' checked':'')+
		'><span class="lgv-cbx"></span><span>题面</span></label>'+
		'<button id="lgv-s2-min" class="lgv-sbtn" title="缩成半屏（保留当前输入）">'+
		'<svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">'+
		'<path d="M1.4 1.4 4.8 4.8"/><path d="M4.8 2.1v2.7H2.1"/>'+
		'<path d="M10.6 10.6 7.2 7.2"/><path d="M7.2 9.9V7.2h2.7"/></svg>'+
		'</button>'+
		'<button id="lgv-s2-close" class="lgv-sbtn">Esc</button></div>'+
		'<div id="lgv-s2-body">'+
		'<div id="lgv-s2-rail"></div>'+
		'<div id="lgv-s2-list"></div>'+
		'<div id="lgv-s2-prev"></div>'+
		'</div>'+
		'<div id="lgv-s2-foot">就绪</div>'
		document.body.appendChild(mask);document.body.appendChild(s2Panel);const rail=s2Panel.querySelector('#lgv-s2-rail')
		S2_CATS.forEach(([name,color])=>{const b=document.createElement('div');b.className='lgv-s2-cat'+(s2On.has(name)?' on':'');b.dataset.cat=name;b.style.setProperty('--c',color)
			b.innerHTML='<i></i><span class="lgv-catlab">'+name+'</span><b class="lgv-catonly" title="暂时只查这一类（再按一次取消）"></b>'
			b.addEventListener('click',(e)=>{const only=e.target&&e.target.closest?e.target.closest('.lgv-catonly'):null
				if(only){window.__lgvCatOnly(name,()=>s2Run(true));return}
				window.__lgvCatToggle(name);s2Run(true)})
			rail.appendChild(b)})
		if(window.__lgvCatPaint)window.__lgvCatPaint()
		const input=s2Panel.querySelector('#lgv-s2-input');input.addEventListener('input',()=>{clearTimeout(s2Timer);s2Timer=setTimeout(()=>s2Run(true),220)})
		input.addEventListener('keydown',(e)=>{if(e.key==='Escape'){s2Close();return}
			if(e.key==='Enter'){const row=s2Rows[s2Sel]
				if(row)location.href=row.href
				return}
			if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();s2Sel=Math.max(0,Math.min(s2Rows.length-1,s2Sel+(e.key==='ArrowDown'?1:-1)));s2PaintSel()}})
		s2Panel.querySelector('#lgv-s2-close').addEventListener('click',()=>s2Close());const minBtn=s2Panel.querySelector('#lgv-s2-min')
		if(minBtn)
		minBtn.addEventListener('click',(ev)=>{ev.preventDefault();ev.stopPropagation();const draft=s2Panel.querySelector('#lgv-s2-input').value;panelDraft(draft);const r0=s2Panel.getBoundingClientRect();s2Close(true,180)
			if(WIN.__lgvOpenHalf)WIN.__lgvOpenHalf(draft,true,r0)})
		const s2StmtBox=s2Panel.querySelector('.lgv-stmt input')
		if(s2StmtBox)
		s2StmtBox.addEventListener('change',()=>{setStmt(s2StmtBox.checked);syncStmtUI()
			if(input.value.trim())s2Run(true)})
		s2Panel.addEventListener('click',(e)=>{if(e.target===s2Panel)s2Close()})
		s2Panel.querySelector('#lgv-s2-list').addEventListener('mouseover',(e)=>{const r=e.target.closest('.lgv-s2-row')
			if(r)s2Preview(Number(r.dataset.i))})
		return s2Panel}
	function s2SetFoot(t){const p=s2Panel&&s2Panel.querySelector('#lgv-s2-foot')
		if(p)p.textContent=t}
	function s2Hi(txt){const t=String(txt==null?'':txt);const el=s2Panel&&s2Panel.querySelector('#lgv-s2-input');const k=((el&&el.value)||'').trim()
		if(!k)return s2Esc(t)
		const i=t.toLowerCase().indexOf(k.toLowerCase())
		if(i<0)return s2Esc(t)
		return s2Esc(t.slice(0,i))+'<u>'+s2Esc(t.slice(i,i+k.length))+'</u>'+s2Esc(t.slice(i+k.length))}
	function s2Paint(list){const box=s2Panel.querySelector('#lgv-s2-list')
		if(!list.length){box.innerHTML='<div style="padding:26px;text-align:center;opacity:.5;font-size:13px">没有结果</div>';return}
		const rowHtml=(r,i)=>{
/*只有「题目」这一类的题号上色，其他分类原样输出*/
			let t=''
			if(r.cat==='题目'&&r.pid){const rest=String(r.title||'') .slice(r.pid.length) .replace(/^\s+/,'')
				t='<i class="lgv-s2-pid"'+(r.diff>=0?' data-lgv-d="'+r.diff+'"':'')+'>'+s2Esc(r.pid)+'</i>'+(rest?' '+s2Hi(rest):'')}else t=s2Hi(r.title)
			return(
			'<a class="lgv-s2-row" data-i="'+
			i+
			'" href="'+
			s2Esc(r.href)+
			'">'+
			'<span class="lgv-s2-tag" data-t="'+
			s2Esc(r.cat)+
			'">'+
			s2Esc(r.cat)+
			'</span>'+
			'<span class="lgv-s2-t">'+
			t+
			'</span>'+
			'<span class="lgv-s2-s">'+
			s2Hi(r.sub||'')+
			'</span>'+
			'</a>'
			)
		}
		const counts=list.counts||{};const used=new Set();let html=''
		for(const tag of S2_CATS.map((c)=>c[0])){const hits=[];list.forEach((r,i)=>{if(String(r.cat||r.section||r.tag||'')===tag)hits.push(i)})
			if(!hits.length)continue
			const tot=counts[tag];html+='<div class="lgv-ssec">'+s2Esc(tag)+(tot&&tot>hits.length?'  ·  共 '+tot+' 条':'')+'</div>'
			hits.forEach((i)=>{html+=rowHtml(list[i],i);used.add(i)})}
		const rest=[];list.forEach((r,i)=>{if(!used.has(i))rest.push(i)})
		if(rest.length){if(used.size)html+='<div class="lgv-ssec">其他</div>'
			rest.forEach((i)=>{html+=rowHtml(list[i],i)})}
		box.innerHTML=html;s2Sel=0;s2PaintSel();clearTimeout(window.__s2PvT);window.__s2PvT=setTimeout(()=>{try{s2Preview(0)}catch(e){}},150)}
	function s2PaintSel(){const box=s2Panel&&s2Panel.querySelector('#lgv-s2-list')
		if(!box)return
		;[...box.querySelectorAll('.lgv-s2-row')].forEach((r,i)=>{const on=i===s2Sel;r.classList.toggle('lgv-sel',on)
			if(on)r.scrollIntoView({block:'nearest'})})}
	async function s2Preview(i){const r=s2Rows[i];const box=s2Panel&&s2Panel.querySelector('#lgv-s2-prev')
		if(!box)return
		if(!r){box.innerHTML='';return}
		const my=(window.__s2PvSeq=(window.__s2PvSeq||0)+1)
		box.innerHTML= '<h3>'+ s2Esc(r.title)+ '</h3><div class="m">'+ s2Esc(r.cat)+ (r.sub?' · '+s2Esc(r.sub):'')+ '</div>'+ '<div class="m" style="opacity:.4">正在加载预览…</div>'
		const d=await previewData(r)
		if(my!==(window.__s2PvSeq||0))return
		box.innerHTML=
		'<h3>'+
		s2Esc(d?d.title:r.title)+
		'</h3>'+
		(d&&d.meta?'<div class="m">'+s2Esc(d.meta)+'</div>':'')+
		(d&&d.md?'<div class="lgv-md">'+d.md+'</div>':'<div class="m" style="opacity:.45">暂无预览</div>')
	}
	async function s2Run(reset){if(WIN.__lgvTeam)WIN.__lgvTeam.n=0;S2TO=0
		const input=s2Panel.querySelector('#lgv-s2-input');const k=input.value.trim();const seq=++s2Seq;const cats=window.__lgvEffective?window.__lgvEffective():s2On
		/*缓存按「关键词」算，不按勾选算：一次把六类各 50 条都捞回来存着，
		  之后点分类只是从这份里筛，不再发请求*/
		/*缓存得连勾选一起算：单类 50 条、多类每类 20 条，混着用会让多类命中单类那份*/
		let cut=0
		const ck=k+(S2_STMT?'|T':'')+'|'+[...cats].sort().join(',');const pick=(list)=>{cut=0;return list.filter((r)=>{if(!cats.has(r.cat))return false
			if(r.team&&(WIN.__lgvTeam&&WIN.__lgvTeam.get(r.team))!==1){cut++;return false}
			return true})};const hit=k?s2QCache.get(ck):null
		if(hit&&Date.now()-hit.t<600000){s2Panel.querySelector('#lgv-s2-prev').innerHTML='';s2Rows=pick(hit.rows);s2Paint(s2Rows);s2SetFoot(s2Rows.length+' 条结果 · 已缓存')
			if(s2Rows[0])s2Preview(0)
			return}
		s2Rows=[];s2Paint([]);s2Panel.querySelector('#lgv-s2-prev').innerHTML='';const t0=Date.now();s2SetFoot('搜索中…')
/*谁先回来谁先上屏：题目接口最快，一般 1 秒内就能看见东西，不用干等最慢的那个。
		  200ms 合并一次，免得边流边抖*/
		let tLast=0,pend=0
		const draw=(arr)=>{if(seq!==s2Seq)return
			const rows=pick(arr);if(!rows.length)return
			s2Rows=rows;s2Paint(rows);s2SetFoot(rows.length+' 条 · 检索中…')}
		const onPartial=(arr)=>{if(seq!==s2Seq)return
			const now=Date.now()
			if(now-tLast<200){if(!pend)pend=setTimeout(()=>{pend=0;tLast=Date.now();draw(arr)},200-(now-tLast))}
			else{tLast=now;draw(arr)}}
		const sp=spinShow(s2Panel.querySelector('#lgv-s2-list'));const all=await powerSearch(k,window.__lgvEffective?window.__lgvEffective():new Set(S2_CATS.map((c)=>c[0])),null,{onPartial});sp.stop()
		if(pend){clearTimeout(pend);pend=0}
		if(seq!==s2Seq)return
		if(k&&all.length){if(s2QCache.size>40)s2QCache.clear()
			s2QCache.set(ck,{t:Date.now(),rows:all})}
		const rows=pick(all||[]);s2Rows=rows;s2Paint(rows)
/*一条都没捞到又恰好是被兜底砍断的，就别写成「0 条结果」——那会让人以为真没有*/
		const el=((Date.now()-t0)/1000).toFixed(2)+'s'
		s2SetFoot(!rows.length&&S2TO?'站点响应超时（全文搜索较慢），稍后重试 · '+el:rows.length+' 条结果'+(cut?'（已滤掉 '+cut+' 条非本团队帖子）':'')+' · '+el)
		if(rows[0])s2Preview(0)}
/*两个面板共用一份草稿，来回切不清空*/
	function panelDraft(v){const a=document.getElementById('lgv-s2-input');const b=document.getElementById('lgv-search-input')
		if(v==null)return(a&&a.value)||(b&&b.value)||''
		if(a)a.value=v
		if(b)b.value=v}
/*FLIP：目标面板从起点矩形过渡到自身形状*/
/*动画期降级：关模糊、提合成层*/
	function animHint(el,ms){if(!el||!el.classList)return
		el.classList.add('lgv-anim');clearTimeout(el.__lgvAnim);el.__lgvAnim=setTimeout(()=>{try{el.classList.remove('lgv-anim')}catch(e){}},ms)}
	function flipRect(fromRect,el,dur){if(!fromRect||!el||!fromRect.width||!fromRect.height)return null
		const r=el.getBoundingClientRect()
		if(!r.width||!r.height)return null
		const sx=fromRect.width/r.width, sy=fromRect.height/r.height;const dx=fromRect.left-r.left, dy=fromRect.top-r.top;el.style.transformOrigin='0 0';animHint(el,(dur||520)+80)
		const an=el.animate(
		[
		{transform:'translate('+dx+'px,'+dy+'px) scale('+sx+','+sy+')',opacity:0.7},
		{transform:'none',opacity:1},
		],
		{duration:dur||520,easing:'cubic-bezier(.22,.72,.25,1)'},
		)
		try{an.onfinish=()=>{el.style.transformOrigin=''}}catch(e){}
		return an}
/*蒙版渐变跟 FLIP 对齐，退场结束才摘类*/
	function s2MaskFade(ms,out){const m=document.getElementById('lgv-s2-mask')
		if(!m)return
		m.style.pointerEvents='none'
		try{m.getAnimations().forEach((a)=>{try{a.cancel()}catch(e){}})}catch(e){}
		const an=m.animate([{opacity:out?1:0},{opacity:out?0:1}],{duration:ms,easing:'ease',fill:'forwards'})
		an.onfinish=()=>{
/*摘类会先回 opacity:1 再过渡，看着闪黑；这一帧关过渡再撤动画*/
			m.style.transition='none'
			if(out){m.classList.remove('lgv-on');m.style.opacity='0'}else{m.classList.add('lgv-on');m.style.opacity=''}
			void m.offsetWidth;requestAnimationFrame(()=>{try{an.cancel()}catch(e){}
				m.style.transition=''
				if(out)m.style.opacity=''
				m.style.pointerEvents=''})}
	}
/*fast=true：不带过渡直接摆位，给 FLIP 当终点*/
	function s2Open(fast){s2Build();const keep=panelDraft();const s2r=document.querySelectorAll('#lgv-s2,#lgv-s2-mask,#lgv-search')
		s2r.forEach((e)=>{e.classList.remove('lgv-clear');e.style.removeProperty('background-color')});const mk=document.getElementById('lgv-s2-mask');animHint(s2Panel,fast?60:560)
		if(fast){s2Panel.style.transition='none';mk.style.transition='none'}
		mk.classList.add('lgv-on');s2Panel.classList.add('lgv-on')
		if(fast)
		requestAnimationFrame(()=>{s2Panel.style.transition='';mk.style.transition=''})
		s2Panel.classList.toggle('lgv-dark',document.documentElement.classList.contains('lgv-dark'));const input=s2Panel.querySelector('#lgv-s2-input')
		if(keep&&!input.value)input.value=keep
		input.focus();input.setSelectionRange(input.value.length,input.value.length)
		if(input.value.trim())s2Run(true)}
	function s2Close(fast,maskMs){if(!s2Panel)return
		panelDraft(s2Panel.querySelector('#lgv-s2-input').value);const m=document.getElementById('lgv-s2-mask')
		if(fast){
/*交接给半屏：蒙版和面板一起淡出，别「面板瞬间消失、整页还压着 .42 黑」——
				   那一帧就是肉眼看到的「缩完闪黑一下」。等淡完再摘 .lgv-on 收掉*/
			if(m&&maskMs){s2MaskFade(maskMs,true);s2Panel.style.transition='opacity '+maskMs+'ms ease';s2Panel.style.opacity='0'
				setTimeout(()=>{s2Panel.style.transition='none';s2Panel.classList.remove('lgv-on');s2Panel.style.removeProperty('opacity');void s2Panel.offsetWidth
					requestAnimationFrame(()=>{s2Panel.style.transition=''})},maskMs+20)
				return}
			s2Panel.style.transition='none';s2Panel.classList.remove('lgv-on')
			if(m&&!maskMs){m.style.transition='none';m.classList.remove('lgv-on')}
			void s2Panel.offsetWidth;requestAnimationFrame(()=>{s2Panel.style.transition=''
				if(m&&!maskMs)m.style.transition=''});return}
		s2Panel.classList.remove('lgv-on')
		if(m)m.classList.remove('lgv-on')}
	function s2Toggle(){if(s2Panel&&s2Panel.classList.contains('lgv-on'))s2Close()
		else s2Open()}
	document.addEventListener(
	'keydown',
	(e)=>{if((e.ctrlKey||e.metaKey)&&(e.key==='`'||e.key==='~'||e.code==='Backquote')){e.preventDefault();s2Toggle()}},
	true,
	)
	window.__s2={open:s2Open,close:s2Close}
/*带 lgvt=activity 进来就切「动态」页签*//*首页底色：站点的配色表只有浅色一版，壁纸以外的底子这里自己铺；用户设了壁纸就不动*/function homeBase(
	d,
	){const pth=location.pathname
		if(!(pth==='/'||pth===''||pth==='/index'))return
		const b=document.body
		if(!b)return
/*暗色直接吃当前主题的令牌*/const want=d?'rgb(var(--lcolor--background))':'#f5f5f5'
		if(b.style.getPropertyValue('background-color')!==want)b.style.setProperty('background-color',want,'important')}
/*主页缺亮暗开关，照内页类名补一条*/function themeRow(){/*只认顶栏笔图标那个面板；别人主页「…」的下拉、其他下拉都不许塞这一行*/
		let dd=null
		for(const d of document.querySelectorAll('.dropdown.shown')){
			if(!/毛玻璃|强制收缩/.test(d.textContent||''))continue
			dd=d;break}
		if(!dd)return
		if(dd.querySelector('.lgv-throw'))return
/*只看站点是不是已经有一组"系统/浅色/暗色"，别被别的"主题"字样挡住*/const bare=(dd.textContent||'').replace(/\s+/g,'')
		if(bare.indexOf('系统')>=0&&bare.indexOf('浅色')>=0&&bare.indexOf('暗色')>=0)return
		const ul=dd.querySelector('ul')||dd;const li=document.createElement('li');li.className='theme-options lgv-throw'
		li.innerHTML=
		'<div class="lfe-caption">主题颜色</div><div class="theme-options-control">'+
		['auto:系统','light:浅色','dark:暗色']
		.map((x)=>{const kv=x.split(':');return'<button class="theme-option-button" type="button" data-t="'+kv[0]+'">'+kv[1]+'</button>'})
		.join('')+
		'</div>'
		ul.appendChild(li);rowMark()}
/*高亮跟当前偏好对齐（站点自己是 .active）*/function rowMark(){const cur=lgvPref();const name={auto:'系统',light:'浅色',dark:'暗色'}[cur]
/*主页是我们补的那行，内页是站点自己那行，两边高亮都对齐当前偏好*/document.querySelectorAll('.theme-options .theme-option-button').forEach((b)=>{const mine=b.dataset&&b.dataset.t?b.dataset.t:(b.textContent||'').replace(/\s+/g,'');b.classList.toggle('active',mine===cur||mine===name)})
	}
	document.addEventListener(
	'click',
	(ev)=>{const penBtn=ev.target&&ev.target.closest?ev.target.closest('.user-nav .link'):null
		if(penBtn&&penBtn.querySelector('svg[data-icon="pen-swirl"]')){
/*站点是先开面板后渲染内容，紧跟着补两次就够了*/setTimeout(()=>{try{themeRow()}catch(e){}},0);setTimeout(()=>{try{themeRow()}catch(e){}},120)
			__lgvPenBtn=penBtn;__lgvPenAt=performance.now()
			/*有的页面面板是带 .shown 一起插进来的，attribute 观察不到，这里补一手*/
			let n=0
			const find=()=>{let dd=null
				for(const d of document.querySelectorAll('.dropdown.shown'))
					if(/毛玻璃|强制收缩/.test(d.textContent||'')){dd=d;break}
				if(dd){try{penBurst(dd)}catch(e){};return}
				if(n++<90)requestAnimationFrame(find)}
			requestAnimationFrame(find)}
		const b=ev.target&&ev.target.closest?ev.target.closest('.lgv-throw .theme-option-button'):null
		if(!b)return
		ev.preventDefault();ev.stopPropagation();lgvSetTheme(b.dataset.t,true);rowMark();const trg=document.querySelector('.user-nav .link svg[data-icon="pen-swirl"]')
		if(trg&&trg.closest('a'))trg.closest('a').click()},
	true,
	)/*顶栏 fixed、下拉在页面里：按打开位置补 transform*/
	let __ddTick=0, __ddEls=[], __ddSeen=false, __lgvPenBtn=null, __lgvPenAt=0;const __ddWant=new WeakMap()
/*哪些下拉是「真的开着」：.shown 之外还要有实际尺寸，别去动隐藏的兄弟节点*/
	const ddVis=(el)=>{const cs=getComputedStyle(el)
		if(cs.display==='none'||cs.visibility==='hidden')return false
		const r=el.getBoundingClientRect();return r.width>8&&r.height>8}
	/*名单里只排掉显式标了 nopin 的；个性化卡也要钉住，滚动时不许跟走*/
	const ddIsPen=(el)=>!!(el&&el.dataset&&el.dataset.lgvNopin==='1')
/*个性化卡按笔图标定位：文章页它的「站位」比图标低了一个顶栏高，这里按图标底边重算*/
/*站点弹窗挂在 body 上、层级只有几百，被我们的层压住：整屏遮罩提到用户卡下面一层*/
	const MODAL_Z=2147481900
	const modalLift=(el)=>{if(!el||el.nodeType!==1)return
		if(el.id&&el.id.indexOf('lgv-')===0)return
		if(el.closest&&el.closest('#lgv-s2,#lgv-search,#lgv-ucard'))return
		if(el.style&&el.style.getPropertyValue('z-index')===String(MODAL_Z))return
		try{el.style.setProperty('z-index',String(MODAL_Z),'important')}catch(e){}}
	const modalMask=(el)=>{if(!el||el.nodeType!==1)return false
		if(el.id&&el.id.indexOf('lgv-')===0)return false
		if(el.closest&&el.closest('#lgv-s2,#lgv-search,#lgv-ucard'))return false
		let cs
		try{cs=getComputedStyle(el)}catch(e){return false}
		if(cs.position!=='fixed'&&cs.position!=='absolute')return false
		const r=el.getBoundingClientRect();return r.width>=innerWidth*0.9&&r.height>=innerHeight*0.9}
	const modalTry=(el)=>{if(modalMask(el))modalLift(el)}
	const modalScan=()=>{let kids=[]
		try{kids=Array.prototype.slice.call(document.body.children)}catch(e){return}
		for(const el of kids)modalTry(el)}
	const modalWatch=()=>{if(!document.body){setTimeout(modalWatch,60);return}
		try{
			new MutationObserver((list)=>{
				for(const m of list)
					for(const n of m.addedNodes){if(!n||n.nodeType!==1)continue
						modalTry(n)
						/*站点先插空壳再把尺寸撑开，量一次多半还是 0×0，隔两拍再量*/
						setTimeout(()=>modalTry(n),120);setTimeout(()=>modalTry(n),420)}
			}).observe(document.body,{childList:true})
		}catch(e){}
		/*点「更改封面」这类按钮时再补扫两遍：节点可能是复用的，不会触发新增*/
		document.addEventListener(
			'click',
			(ev)=>{const t=ev.target&&ev.target.closest?ev.target.closest('button,a,div,span,label'):null
				if(!t||!/更改封面|上传封面|更换封面/.test(t.textContent||''))return
				setTimeout(modalScan,150);setTimeout(modalScan,600)},
			true,
		)
	}
/*面板一拿 .shown 就摆正，别让用户先看到错的再跳*/
	const penTry=(el)=>{if(!el||!el.classList||!el.classList.contains('dropdown')||!el.classList.contains('shown'))return
		if(!(__lgvPenBtn&&el.textContent&&/毛玻璃|强制收缩|主题/.test(el.textContent)))return
		try{penBurst(el)}catch(e){}}
	try{new MutationObserver((list)=>{for(const m of list){
		if(m.type==='attributes'){if(m.attributeName!=='class')continue;penTry(m.target);continue}
		if(m.type!=='childList')continue
		for(const n of m.addedNodes){if(!n||n.nodeType!==1)continue
			penTry(n)
			if(n.querySelectorAll)for(const d of n.querySelectorAll('.dropdown.shown'))penTry(d)}}})
		.observe(document.documentElement,{subtree:true,attributes:true,attributeFilter:['class']})}catch(e){}
	modalWatch();const ddList=()=>Array.prototype.filter.call(document.querySelectorAll('.dropdown.shown'),(el)=>ddVis(el)&&!ddIsPen(el))
/*站点可能自己给面板写过 transform，先记一份底，我们的位移只往上叠，不覆盖*/
	const ddStrip=(t)=>(t||'').replace(/translate3d\(0(?:px)?,[^)]*\)/g,'').trim()
	const ddBase=(el)=>{if(el.dataset.lgvDdbase===undefined)el.dataset.lgvDdbase=ddStrip(el.style.transform)
		return el.dataset.lgvDdbase}
	const ddPut=(el,v)=>{const b=ddBase(el);const s=(b?b+' ':'')+(v?'translate3d(0,'+v+'px,0)':'')
		if(s)el.style.setProperty('transform',s,'important')
		else el.style.removeProperty('transform')}
/*个性化卡：每帧按笔图标底边 + 7px 摆，图标在哪它就在哪；滚动、开关、重开都走这一条*/
	const penRef=(pb)=>(pb&&pb.querySelector?pb.querySelector('svg')||pb:pb)
	const penPlace=(el)=>{const pb=penRef(__lgvPenBtn)
		if(!pb||!pb.isConnected)return false
		const ir=pb.getBoundingClientRect(),r=el.getBoundingClientRect()
		if(ir.height<4||r.width<80||r.height<40)return false
		/*这张卡的位置只由我们的位移决定，站点那点入场 transform 一律不叠*/
		if(el.dataset.lgvDdbase!=='')el.dataset.lgvDdbase=''

		const mt=/translate3d\(0(?:px)?,\s*(-?[\d.]+)px/.exec(el.style.transform||'');const cur=mt?parseFloat(mt[1]):0
		const v=Math.round(ir.bottom+7-(r.top-cur))
		if(Math.abs(v-cur)>0.5)ddPut(el,v)
		return Math.abs(el.getBoundingClientRect().top-(ir.bottom+7))<0.6}
/*开卡只在头 500ms 忙：贴住两帧才放出来，之后靠滚动/尺寸事件跟，不逐帧空转*/
	const penBurst=(el)=>{if(!el||el.dataset.lgvPenBurst==='1')return
		penBind()
		el.dataset.lgvPenBurst='1';el.dataset.lgvPen='1'
		el.style.setProperty('animation','none','important')
		el.style.setProperty('transition','none','important')
		el.style.setProperty('opacity','0','important')
		const t0=performance.now();let lastL=null,stable=0,out=false,tail=0
		const loop=()=>{if(!el.isConnected||!el.classList.contains('shown')){delete el.dataset.lgvPen;delete el.dataset.lgvPenBurst;return}
			let ok=false;try{ok=penPlace(el)}catch(e){}
			/*站点会先把它摆在 32 再挪到 42：等它连续三帧不动、并且真贴住了才显示*/
			const mt=/translate3d\(0(?:px)?,\s*(-?[\d.]+)px/.exec(el.style.transform||'')
			const L=Math.round((el.getBoundingClientRect().top-(mt?parseFloat(mt[1]):0))*10)/10
			stable=(lastL!=null&&Math.abs(L-lastL)<0.5)?stable+1:0
			lastL=L
			if(!out){
				const warm=performance.now()-t0<180
				if(!(ok&&stable>=2&&!warm)&&performance.now()-t0<900){requestAnimationFrame(loop);return}
				el.style.setProperty('opacity','1','important');out=true;tail=performance.now()+260
				requestAnimationFrame(loop);return}
			/*露出来之后再跟 260ms，站点这时才把最终位置坐实*/
			if(performance.now()<tail){requestAnimationFrame(loop);return}
			delete el.dataset.lgvPenBurst}
	}
	const penFollow=()=>{const n=document.querySelectorAll('.dropdown.shown[data-lgv-pen]')
		for(const el of n)if(el.classList.contains('shown')){try{penPlace(el)}catch(e){}}}
	let __penEv=false
	const penBind=()=>{if(__penEv)return;__penEv=true
		const kick=()=>requestAnimationFrame(penFollow)
		addEventListener('scroll',kick,{passive:true})
		addEventListener('resize',kick,{passive:true})
		setInterval(()=>{if(document.querySelector('.dropdown.shown[data-lgv-pen]'))penFollow()},300)}
	const ddFree=(el)=>{if(!el)return
		const b=el.dataset&&el.dataset.lgvDdbase||''
		if(b)el.style.setProperty('transform',b)
		else el.style.removeProperty('transform')
		el.style.removeProperty('will-change')
		if(el.dataset)delete el.dataset.lgvPen}
/*钉住：记打开位置逐帧补差，不能只听 scroll；藏起来时不量，出来重记*/
/*只认真正画出来的面板：display:none 的 .shown 不算，否则空转一帧不落地、rAF 停不下来*/
	const ddStep=()=>{const now=ddList().filter((el)=>{const b=el.getBoundingClientRect();return b.width>0&&b.height>0})
		for(const el of __ddEls)if(now.indexOf(el)<0){ddFree(el);__ddWant.delete(el)}
		if(!now.length){for(const el of __ddEls)ddFree(el)
			__ddEls=[];__ddSeen=false;return false}
		const t=performance.now()
		for(const el of now){const box=el.getBoundingClientRect()
/*display:none 的时候量出来是 0×0，这时候补位移只会把下次打开的位置写歪*/
			if(!box.width||!box.height){ddFree(el);__ddWant.delete(el);continue}
			if(el.dataset&&el.dataset.lgvPen==='1')continue
			let e=__ddWant.get(el)
			if(!e){e={t:null,at:t,last:null};__ddWant.set(el,e)}
/*入场位移还在跑：连量两拍一样了才当锚点*/
			if(e.t==null){if(t-e.at<120)continue
				if(e.last==null||Math.abs(e.last-box.top)>0.5){e.last=box.top;e.at=t;continue}
				e.t=box.top;continue}
			const mt=/translate3d\(0(?:px)?,\s*(-?[\d.]+)px/.exec(el.style.transform||'');const cur=mt?parseFloat(mt[1]):0;const d=e.t-box.top
			if(Math.abs(d)>0.6)ddPut(el,Math.round(cur+d))
		}
		__ddEls=now;__ddSeen=true;return true}
	const ddLoop=()=>{__ddTick=0
		/*只在滚动/尺寸/点击/120ms 兜底时校一次，面板开着不动就不再逐帧写样式*/
		ddStep()};const ddKick=()=>{if(!__ddTick)__ddTick=requestAnimationFrame(ddLoop)}
	try{let repaintTimer=0
		const softRepaint=()=>{clearTimeout(repaintTimer)
			repaintTimer=setTimeout(()=>{try{__dkSeen=null}catch(e){}
				try{if(typeof fullRender==='function')fullRender(true)}catch(e){}
				try{if(typeof navSkinApply==='function')navSkinApply()}catch(e){}
				try{if(typeof paintCards==='function')paintCards()}catch(e){}
				try{if(typeof articlePaper==='function')articlePaper()}catch(e){}},240)
		}
		window.__lgvSoftRepaint=softRepaint
		document.addEventListener('change',(ev)=>{const el=ev.target
			if(!el||!el.closest)return
			if(el.closest('.dropdown')||el.closest('label[for^="LCheck"]'))softRepaint()},true)
		document.addEventListener('click',(ev)=>{const el=ev.target
			if(!el||!el.closest)return
			if(el.closest('.theme-option-button,.theme-options-control')){setTimeout(()=>{try{(window.__lgvThemeReload||function(){})(260)}catch(e){}},420);return}
			if(el.closest('.dropdown .lgv-throw'))softRepaint()},true)
	}catch(e){}
/*页脚那块纯白：不改它的结构，只把它自己的底色换成 35%（站点重绘成白色就再换一次）*/
	try{
		const botWhite=()=>{const blocks=document.querySelectorAll('footer,.lfe-footer,#footer,footer *,footer * *,.lfe-footer *')
			for(const el of blocks){const box=el.getBoundingClientRect()
				if(box.height<18||box.width<200)continue
				const rgba=/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/.exec(getComputedStyle(el).backgroundColor||'')
				if(!rgba)continue
				const brightness=(+rgba[1]+ +rgba[2]+ +rgba[3])/3;const alpha=rgba[4]===undefined?1:+rgba[4]
				if(brightness>235&&alpha>0.5){el.classList.add('lgv-botwhite')
					if(el.style.getPropertyValue('background-color')!=='rgba(var(--lgv-mk,0,0,0),.35)')
					el.style.setProperty('background-color','rgba(var(--lgv-mk,0,0,0),.35)','important')
				}
			}
		}
/*注意：这里以前写的是 addInterval（脚本里根本没这个函数），ReferenceError 被 try 吞掉，
			  于是这段从来没跑过——页脚那块白一直是白的，根子就在这*/
		try{botWhite()}catch(e){}
		setInterval(botWhite,1200);addEventListener('load',()=>{try{botWhite()}catch(e){}})
		addEventListener(
		'scroll',
		()=>{try{botWhite()}catch(e){}},
		{passive:true},
		)}catch(e){}
/*气泡偏：祖层带 blur/transform，或它自己算不准*/
	let tipRef=null
	addEventListener('mouseover',(ev)=>{const t=ev.target&&ev.target.closest?ev.target.closest('.v-popper--has-tooltip[aria-describedby],.v-popper--has-tooltip'):null
		if(t){tipRef=t
			for(const ms of[80,220,480])setTimeout(()=>{try{fixTip()}catch(e){}},ms)}},true)
	const visiblePopper=()=>{let last=null
		for(const el of document.querySelectorAll('.v-popper__popper')){const r=el.getBoundingClientRect()
			if(r.width>0&&r.height>0)last=el}
		return last}
/*气泡偏：祖先带滤镜或自己没对齐；开时摘滤镜再掰*/
	const fixTip=()=>{const root=document.documentElement;const po=visiblePopper()
		if(!po){
			if(root.classList.contains('lgv-tipopen')){root.classList.remove('lgv-tipopen');document.querySelectorAll('.lgv-noblur').forEach((e)=>e.classList.remove('lgv-noblur'))
			}
			document.querySelectorAll('.v-popper__popper[data-lgv-tip-base]').forEach((e)=>e.removeAttribute('data-lgv-tip-base'));return}
		root.classList.add('lgv-tipopen');let node=po.parentElement, depth=0
		while(node&&node!==document.documentElement&&depth++<14){const cs=getComputedStyle(node)
			if(
			cs.filter!=='none'||
			(cs.backdropFilter||'none')!=='none'||
			(cs.transform||'none')!=='none'||
			(cs.perspective||'none')!=='none'||
			(cs.contain||'none')!=='none'
			)
			node.classList.add('lgv-noblur')
			node=node.parentElement}
		if(!tipRef||!tipRef.isConnected)return
		if(po.dataset.lgvTipBase===undefined)po.dataset.lgvTipBase=po.style.transform||''
		po.style.transform=po.dataset.lgvTipBase;const box=po.getBoundingClientRect();const ref=tipRef.getBoundingClientRect()
		if(!box.width||!ref.width)return
		const placement=po.getAttribute('data-popper-placement')||'top';let dx=0, dy=0
		if(/^right/.test(placement)){
			dx=Math.round(ref.right+6-box.left);dy=Math.round(ref.top+ref.height/2-(box.top+box.height/2))}else if(/^left/.test(placement)){dx=Math.round(ref.left-6-box.right);dy=Math.round(ref.top+ref.height/2-(box.top+box.height/2))}else{dx=Math.round(ref.left+ref.width/2-(box.left+box.width/2));dy=/^bottom/.test(placement)?Math.round(ref.bottom+6-box.top):Math.round(ref.top-6-box.bottom)}
		if(Math.abs(dx)>20||Math.abs(dy)>20)po.style.transform=(po.dataset.lgvTipBase+' translate('+dx+'px,'+dy+'px)').trim()}
	try{new MutationObserver(fixTip).observe(document.documentElement,{ childList:true, subtree:true, attributes:true, attributeFilter:['class','style'], });fixTip()
		setInterval(()=>{try{fixTip()}catch(e){}},400)}catch(e){}
	addEventListener('scroll',ddKick,{passive:true,capture:true});addEventListener('resize',ddKick,{passive:true})
	document.addEventListener('click',()=>setTimeout(ddKick,0),true)/*开/关后可能是新节点，补一帧对齐*/
/*rAF 在后台会挂起，另留轮询兜底*/
	setInterval(()=>{ddKick();if(__lgvPenBtn&&performance.now()-__lgvPenAt<3000){
		for(const d of document.querySelectorAll('.dropdown.shown'))
			if(/毛玻璃|强制收缩/.test(d.textContent||'')){try{penBurst(d)}catch(e){};break}}},120)
/*站点自己的亮暗属性变了（用户在内页那个主题面板里点浅色/暗色、或别的脚本改的），
	  插件这边得跟着换类并重画——否则专栏这种重渲染的页面就要手动刷新才变*/
	const __lgvThemeMO=()=>{
		try{
			new MutationObserver(()=>{const root=document.documentElement
				if(!root)return
				const t=(root.getAttribute('data-lcolor-theme')||'').toLowerCase()
				if(t!=='dark'&&t!=='light')return
				const isDark=t==='dark'
				if(root.classList.contains('lgv-dark')===isDark)return
				root.classList.toggle('lgv-dark',isDark)
				try{root.style.setProperty('color-scheme',t)}catch(e){}
/*站点是唯一真相源：把插件偏好一起对齐，否则 fullRender 会按旧偏好又掰回暗色*/
				try{localStorage.setItem('lgv-theme',t)}catch(e){}
				document.querySelectorAll('.lgv-a65,.lgv-a80,.lgv-a85,.lgv-a70,.lgv-feed').forEach((el)=>{
					if(el.style.getPropertyValue('--lgv-rgb'))el.style.removeProperty('--lgv-rgb')})
				try{fullRender(true)}catch(e){}}).observe(document.documentElement,{attributes:true,attributeFilter:['data-lcolor-theme']})
		}catch(e){}
	}
	if(document.documentElement)__lgvThemeMO()
	else document.addEventListener('DOMContentLoaded',__lgvThemeMO,{once:true})
/*脚本可能在 <html> 还没建出来时注入：那时 observe 会抛，等一帧再装一次*/setTimeout(()=>{try{if(!window.__lgvThemeMOOn){window.__lgvThemeMOOn=1;__lgvThemeMO()}}catch(e){}},600)
/*单独盯主题值：一变就立刻改标记并重刷卡片和面板*/let __dkSeen=null
	function themeSync(){
/*注入早于 <html> 建出来时先不动，等下一轮（800ms 后）*/const root=document.documentElement
		if(!root)return
/*每轮都看一眼：下拉框是点开才出现的，不能只在主题变化时补*/try{themeRow()}catch(e){}
		try{applySiteTheme(lgvPref())}catch(e){}
		try{paintShell()}catch(e){}
		try{homePaper()}catch(e){}
		try{homeTextFix()}catch(e){}
		try{chartInk()}catch(e){}
		try{sideNameFix()}catch(e){}
		try{glassFlattenSolid()}catch(e){}
		try{siteDarkTokens();ensureDarkVars()}catch(e){}
/*毛玻璃开关不经我们，700ms 复核一次*/if(
		Date.now()-(WIN.__lgvGT||0)>
		700
		){WIN.__lgvGT=Date.now()
			try{syncGlassAll()}catch(e){}}
		try{rowMark()}catch(e){}
		let d
		try{d=detectDark()}catch(e){return}
/*暗色要有当前主题的令牌才有意义：一条都拿不到就别硬套，免得铺出一堆透明块*/if(d===__dkSeen)return
		__dkSeen=d;root.classList.toggle('lgv-dark',d)
/*切明暗后蒙版、文章纸面、首页文字色都要跟着换，不然还留着上一套*/try{syncMaskTone()}catch(e){}
		try{articlePaper()}catch(e){}
		try{homePaper()}catch(e){}
		try{homeTextFix()}catch(e){}
		try{sideNameFix()}catch(e){}
		try{glassFlattenSolid()}catch(e){}
		try{homeBase(d)}catch(e){}
		try{repaintPids()}catch(e){}
		try{tagUser()}catch(e){}
		try{paintCards()}catch(e){}
		try{if(WIN.__lgvApplyDark)WIN.__lgvApplyDark()}catch(e){}
		try{if(WIN.__lgvUcRepaint)WIN.__lgvUcRepaint()}catch(e){}}
/*内页点的是站点自己那组按钮：把偏好记下来，主页/其它页就跟着走*/document.addEventListener(
	'click',
	(ev)=>{const b=ev.target&&ev.target.closest?ev.target.closest('.theme-option-button'):null
		if(!b||b.closest('.lgv-throw'))return
		if(!ev.isTrusted||WIN.__lgvClick)return
/*脚本自己点的那次不算用户改偏好，否则会来回广播*/const t=(b.textContent||'').replace(/\s+/g,'');const v=t==='暗色'?'dark':t==='浅色'?'light':t==='系统'?'auto':''
		if(!v)return
		try{localStorage.setItem('lgv-theme',v)}catch(e){}
		__dkSeen=null
		try{themeBroadcast(v)}catch(e){}
		setTimeout(()=>{try{fullRender(true)}catch(e){}},120)},
	true,
	)
	setInterval(themeSync,800)
/*顶层这一次是"尽早定主题"，任何异常都不能中断后面的模块*/try{themeSync()}catch(e){}
	function fixBorders(){const root=document.documentElement
		try{root.classList.toggle('lgv-lite',themeLite())}catch(e){}
		const isProb=/^\/problem\/(?!list(?:$|\/))/.test(location.pathname)
		if(isProb!==root.classList.contains('lgv-prob'))root.classList.toggle('lgv-prob',isProb)
		try{if(WIN.__lgvUserPut)WIN.__lgvUserPut()}catch(e){}
		try{tagUser()}catch(e){}
		try{const d2=detectDark()
			if(d2!==root.classList.contains('lgv-dark'))root.classList.toggle('lgv-dark',d2)}catch(e){}
		if(root.style.getPropertyValue('--lgv-bg')&&!root.classList.contains('lgv-bg'))root.classList.add('lgv-bg')
		const dark=root.classList.contains('lgv-dark');const lim=dark?200:60;const good=dark?'rgba(255,255,255,.16)':'rgba(0,0,0,.12)'
		document.querySelectorAll('button,.btn,[class*=button]').forEach((b)=>{if(b.dataset.lgvBd||b.closest('#lgv-ucard,#lgv-search,#lgv-s2,#lgv-search-fab'))return
			const tag=dark?'2':'1'
			if(b.dataset.lgvScan===tag)return
			b.dataset.lgvScan=tag;const cs=getComputedStyle(b)
			if(parseFloat(cs.borderTopWidth)<0.5)return
			const m=/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/.exec(cs.borderTopColor)
			if(!m)return
			if(m[4]!==undefined&&parseFloat(m[4])<0.25)return
			const l=+m[1]*0.299+ +m[2]*0.587+ +m[3]*0.114
			if(!(dark?l>lim:l<lim))return
			b.dataset.lgvBd='1';b.style.setProperty('border-color',good,'important')})
	}
/*个人中心卡片：打标记 + 底色写一份内联 !important，CSS 只是兜底*//*站点是否已自带半透明：新版把底色画在 .l-card::before + backdrop-filter 上，自身 background-color 是 rgba(0,0,0,0)。返回 {a, from}
	 */function alpha(css){const m=/rgba?\(([^)]+)\)/.exec(css||'')
		if(!m)return 0
		const p=m[1].split(',').map(Number);return p.length>3?p[3]:1}
	function paperMeasure(el){let a=0, from='self'
		try{a=alpha(getComputedStyle(el).backgroundColor)}catch(e){}
		if(a<0.9){
			try{const ps=getComputedStyle(el,'::before')
				if(ps&&ps.content&&ps.content!=='none'&&ps.content!=='normal'){const pa=alpha(ps.backgroundColor)
					if(pa>a){a=pa;from='before'}}}catch(e){}
		}
		return{a:a,from:from}}
/*只量一次，结果记在 data-lgv-a / -from*/function paperInfo(el){const cached=el.getAttribute('data-lgv-a')
		if(cached)return{a:parseFloat(cached)||0,from:el.getAttribute('data-lgv-from')||'self'}
		const r=paperMeasure(el);el.setAttribute('data-lgv-a',String(r.a));el.setAttribute('data-lgv-from',r.from);return r}
/*个人中心卡片：按站点底色决定要不要压纸色*/function tagUser(){const pth=location.pathname;const onUser=/^\/user\/(?:\d+|mine)(?:\/|$)/.test(pth);const onAm=/^\/article\/mine(?:\/|$)/.test(pth)
		if(!onUser&&!onAm)return
		const root=document.documentElement
		if(onUser!==root.classList.contains('lgv-u'))root.classList.toggle('lgv-u',onUser)
		if(onAm!==root.classList.contains('lgv-am'))root.classList.toggle('lgv-am',onAm)
		const dark=root.classList.contains('lgv-dark');const T=paperTiers(dark);const PAPER=/^\/(article|paste)/.test(location.pathname)?T.article:T.card
		document.querySelectorAll('.l-card').forEach((c)=>{if(c.closest('#lgv-ucard,#lgv-s2,#lgv-search'))return
			const hd=!!c.querySelector('.user-header-top');const headCard=onAm&&c.classList.contains('header-card');const cls=hd?'lgv-uhd':'lgv-utl'
			if(!c.classList.contains(cls))c.classList.add(cls,'lgv-r')
			if(!hd&&headCard&&!c.classList.contains('lgv-uhc'))c.classList.add('lgv-uhc')
			if(hd){c.classList.remove('lgv-opq','lgv-nb');c.style.setProperty('background-color','transparent','important');c.style.setProperty('overflow','visible','important');return}
			const pi=paperInfo(c);c.classList.add('lgv-opq')
			if(pi.from==='before')c.classList.add('lgv-nb')
			else c.classList.remove('lgv-nb')
			if(c.closest('.main-container')){
				const hasInput=!!c.querySelector( 'textarea,input:not([type=checkbox]):not([type=radio]),[contenteditable="true"],[contenteditable=""],.cm-editor,.CodeMirror', )
/*玻璃开时这层底色让开，否则叠成死板*/const glassPB= document.documentElement.classList.contains('lgv-glass-all')&&pi.from==='before'
				const want=glassPB?'transparent':headCard?T.card:hasInput?T.input:PAPER
				if(c.style.getPropertyValue('background-color')!==want)c.style.setProperty('background-color',want,'important')}
		})
		document
		.querySelectorAll('.main-container textarea,.main-container .cm-editor,.main-container .CodeMirror,.main-container [contenteditable="true"]')
		.forEach((e)=>{if(e.style.getPropertyValue('background-color')!==T.input)e.style.setProperty('background-color',T.input,'important')})
		document.querySelectorAll('.user-header-top,.user-header-bottom,.main-container .user-nav').forEach((e)=>{
			if(!e.classList.contains('lgv-up'))e.classList.add('lgv-up')
			if(e.style.getPropertyValue('background-color')!==PAPER)e.style.setProperty('background-color',PAPER,'important')})
		document.querySelectorAll('.main-container .user-nav').forEach((e)=>e.style.setProperty('border-radius','8px','important'))
		if(!root.style.getPropertyValue('--lgv-bg')){const hd=document.querySelector('.user-header-top');const im=hd&&hd.style.backgroundImage
			if(im&&im!=='none'){root.style.setProperty('--lgv-bg',im);root.classList.add('lgv-bg');const m=/url\(["']?([^"')]+)["']?\)/.exec(im)
				if(m)paintBg(m[1],'cover','center','')}
		}
	}
	let fbTimer=0
	const fixSoon=()=>{clearTimeout(fbTimer);fbTimer=setTimeout(()=>{try{if(document.querySelector('.lgv-anim')){fixSoon();return}
				fixBorders()}catch(e){}},350)}
/*玻璃开时把站点纸色内层压平*/function flattenGlass(){const root=document.documentElement;const on=root.classList.contains('lgv-glass-all')||root.classList.contains('lgv-glass')
		document.querySelectorAll('.main-container .l-card *').forEach((el)=>{if(el.closest('#lgv-search,#lgv-s2,#lgv-s2-mask,#lgv-ucard,.lgv-s2-cat'))return
			if(el.classList.contains('lgv-chip'))return
			const had=el.hasAttribute('data-lgv-bg0')
			if(!on){if(had){el.style.removeProperty('background-color');el.removeAttribute('data-lgv-bg0')}
				return}
			if(had)return
			const m=/rgba?\(([^)]+)\)/.exec(getComputedStyle(el).backgroundColor||'')
			if(!m)return
			const c=m[1].split(',').map(Number);const a=c.length>3?c[3]:1
			if(!(a>0.02&&a<0.98))return
/*近中性色才算“纸色遮罩”，彩色的（难度/标签/提示）保持原样*/if(Math.max(c[0],c[1],c[2])-Math.min(c[0],c[1],c[2])>18)return
			el.setAttribute('data-lgv-bg0','1');el.style.setProperty('background-color','transparent','important')})
	}
/*全站卡片底色：卡片 65%、输入区 75%、专栏 85%*//*玻璃档：站点把输入框/下拉/表格行写成实心深灰（#1d2025 这种），叠在玻璃上就是一块死色，统一压成半透明*/function glassFlattenSolid(){
		if(!document.documentElement.classList.contains('lgv-glass-all')){
			document.querySelectorAll('[data-lgv-gf]').forEach((el)=>{el.removeAttribute('data-lgv-gf') ;['background-color','backdrop-filter','-webkit-backdrop-filter'].forEach((k)=>el.style.removeProperty(k))})
			return}
		const paper=(document.documentElement.style.getPropertyValue('--lgv-paper')||'').trim()||'29,32,37'
		const box=document.querySelector('.main-container')||document.body
		if(!box)return
		box
		.querySelectorAll('input,select,textarea,.refined-input,.lform-size-middle,.text,.bottom-wrap,.am-dropdown-content,.am-popover,.am-modal,.l-pager')
		.forEach((el)=>{const m=/^rgb\((\d+), (\d+), (\d+)\)$/.exec(getComputedStyle(el).backgroundColor||'')
			if(!m)return
			if(m[1]+','+m[2]+','+m[3]!==paper)return
/*只动和纸面同色的实心块，彩色按钮/标签不碰*/el.setAttribute('data-lgv-gf','1');el.style.setProperty('background-color','rgba('+paper+',.6)','important')
			el.style.setProperty('backdrop-filter','blur(10px)','important');el.style.setProperty('-webkit-backdrop-filter','blur(10px)','important')})
	}
/*暗色外壳自愈：切抽屉时站点会写回亮色，盯左竖条压回暗色，亮色模式不动*/
	const healShell=()=>{
		try{const root=document.documentElement
			if(!root.classList.contains('lgv-dark'))return
			const n=document.querySelector('nav.lside')
			if(!n)return
			const nb=n.getBoundingClientRect()
			if(nb.width<8||nb.height<120)return
			const back=(getComputedStyle(root).getPropertyValue('--lgv-dnav-back')||'').trim()
			if(!back)return/*没有主题给的值就不画，别自己造*/
			const light=(e)=>{const m=/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/.exec(getComputedStyle(e).backgroundColor||'')
				if(!m)return false
				if(m[4]!==undefined&&+m[4]<0.2)return false
				return(0.299*+m[1]+0.587*+m[2]+0.114*+m[3])/255>0.55}
			if(light(n))navSkinApply()
			const cands=[n]
			for(let e=n.parentElement;e&&e!==document.body;e=e.parentElement)cands.push(e)
			n.querySelectorAll('*').forEach((e)=>cands.push(e));const c=document.querySelectorAll('.lside,.sidebar')
			for(const e of c)cands.push(e)
			for(const e of cands){const b=e.getBoundingClientRect()
				if(b.width<20||b.height<200||b.left>nb.right*0.5)continue
				if(e.hasAttribute('data-lgv-shell')||light(e)===false)continue
				e.style.setProperty('background-color',back,'important');e.style.setProperty('background-image','none','important');e.setAttribute('data-lgv-shell','1')}
		}catch(e){}
	}
	setInterval(healShell,1200)
/*竖栏不自己配色：内页怎么渲染就照抄一份（背景/字色/边框/阴影/图标色），存起来给首页用*/const NAV_CK='lgv-nav-skin'
	function navSkinSave(){if(document.querySelector('.lg-index-content'))return
/*只在正常内页取样*/const ls=document.querySelector('nav.lside'), rs=document.querySelector('.user-nav.rside'), tb=document.querySelector('.top-bar')
		if(!ls&&!rs)return
		const read=(el)=>{if(!el)return null
			const c=getComputedStyle(el);const a=el.querySelector('a,svg,i,button')
			return{
				bg:c.backgroundColor,
				color:c.color,
				bd:c.borderColor,
				bdr:c.borderRightColor,
				bdl:c.borderLeftColor,
				sh:c.boxShadow,
				f:c.backdropFilter,
				kid:a?getComputedStyle(a).color:null,
			}
		}
		try{const all=JSON.parse(localStorage.getItem(NAV_CK)||'{}');const mode=document.documentElement.classList.contains('lgv-dark')?'dark':'light';all[mode]={l:read(ls),r:read(rs),t:read(tb)};localStorage.setItem(NAV_CK,JSON.stringify(all))}catch(e){}
	}
	function navSkinApply(){const ls=document.querySelector('nav.lside'), rs=document.querySelector('.user-nav.rside'), tb=document.querySelector('.top-bar')
		if(!ls&&!rs)return
		let all=null
		try{all=JSON.parse(localStorage.getItem(NAV_CK)||'null')}catch(e){}
		const mode=document.documentElement.classList.contains('lgv-dark')?'dark':'light'
/*暗色一律不写内联：底色/字色只由 --lgv-dnav-* 一条线给。内联 !important 会和那条抢同一属性，
		  两边每 800ms 各写一次就是「一直闪」；压缩态下抽屉底色也会被这一笔写歪*/
		if(mode==='dark')return
		let src=all&&all[mode]
/*暗色：只认「暗色内页」实测出来的那套（字色/底色都是站点自己渲染的）。
			浅色取样一律丢弃；没有样本就什么都不写——不自己造颜色兜底*/
		if(mode==='dark'){if(!src||!src.l)return
			const m0=/rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(src.l.bg||'')
			if(!m0||(0.299*+m0[1]+0.587*+m0[2]+0.114*+m0[3])/255>0.55)return}
		if(!src)return
/*只抄底色和边框；字色不写内联（内联 !important 会盖住主题那条，也会跟 hover 打架）*/
		const put=(el,st)=>{if(!el||!st)return
			const set=(k,v)=>{if(v&&v!=='none'&&v!=='rgba(0, 0, 0, 0)')el.style.setProperty(k,v,'important')
				else el.style.removeProperty(k)};set('background-color',st.bg);set('border-right-color',st.bdr);set('border-left-color',st.bdl)}
		put(ls,src.l);put(rs,src.r);put(tb,src.t)}
/*首页栅格没底色，只给顶层区块补纸色*/function homePaper(){
		const box=document.querySelector('.lg-index-content')
		if(!box)return
		const root=document.documentElement;const dark=root.classList.contains('lgv-dark');const glass=root.classList.contains('lgv-glass-all')
		if(!dark){
/*亮色首页保持站点原样，不铺纸底、不描线*/document.querySelectorAll('[data-lgv-hp]').forEach((el)=>{el.removeAttribute('data-lgv-hp');el.style.removeProperty('background-color');el.style.removeProperty('border-radius');el.style.removeProperty('box-shadow')})
			document.querySelectorAll('[data-lgv-hps]').forEach((el)=>{el.removeAttribute('data-lgv-hps');el.style.removeProperty('box-shadow')});return}
		const rgb=(getComputedStyle(root).getPropertyValue('--lgv-paper')||'').trim()||tokTriplet()||'255,255,255'
/*暗色厚度统一 .7，跟亮色对齐*/const want= 'rgba('+rgb+',.7)'
/*.am-g 是栅格行不是卡片，铺纸会盖出一整块深色板*//*犇犇那列和打卡外板不是卡片，不铺纸*/const list= box.querySelectorAll('.am-panel,.lg-article')
		for(const el of list){if(el.closest('#lgv-search,#lgv-s2,.lgv-benben,.am-slider,.lgv-ad-box'))continue
			const inPainted=!!(el.parentElement&&el.parentElement.closest('[data-lgv-hp]'));const r=el.getBoundingClientRect()
			if(r.width<280||r.height<60)continue
/*已经在大底上的块：只描一道细分隔线，别再叠一层 alpha，不然全糊成不透明*/if(inPainted){el.setAttribute('data-lgv-hps','1');el.style.setProperty('box-shadow','inset 0 0 0 1px rgba(255,255,255,.07)');continue}
			if(el.hasAttribute('data-lgv-hp')){if(el.style.getPropertyValue('background-color')!==want)el.style.setProperty('background-color',want,'important')
				continue}
			const bg=getComputedStyle(el).backgroundColor.match(/rgba?\(([^)]+)\)/);const ba=bg?(bg[1].split(',').length>3?Number(bg[1].split(',')[3]):1):0
			if(ba>0.5)continue
/*站点自己已经给了底色*/el.setAttribute('data-lgv-hp','1');el.style.setProperty('background-color',want,'important');el.style.setProperty('border-radius','8px')}
	}
/*暗色下补正文和链接的字色，带底色的标签不动*/const HT_SKIP= '.lgv-pid,.am-badge,.am-label,.am-btn,.am-tag,.am-alert,[class*="badge"],[class*="tag"],[class*="btn"],[class*="label"],canvas,pre,code'
/*图表刻度 fill 太暗，只动灰阶；切回亮色还原*/function chartInk(){
		const dark=document.documentElement.classList.contains('lgv-dark');let nodes=document.querySelectorAll('.lg-index-content svg text,.lg-index-content svg tspan')
		nodes.forEach((t)=>{if(!dark){if(t.getAttribute('data-lgv-ink')==='1'){t.style.removeProperty('fill');t.removeAttribute('data-lgv-ink')}
				return}
			const m=/rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(getComputedStyle(t).fill||'')
			if(!m)return
			const r=+m[1], g=+m[2], b=+m[3]
			if(Math.max(r,g,b)-Math.min(r,g,b)>6)return
			const lum=(0.299*r+0.587*g+0.114*b)/255
			if(lum<0.62&&t.getAttribute('data-lgv-ink')!=='1'){t.style.setProperty('fill','#cdcdcd','important');t.setAttribute('data-lgv-ink','1')}})
/*网格线描边压淡，彩色描边不动*/document
		.querySelectorAll('.lg-index-content svg line,.lg-index-content svg path,.lg-index-content svg rect')
		.forEach((e)=>{if(!dark){if(e.getAttribute('data-lgv-dim')==='1'){e.style.removeProperty('stroke');e.removeAttribute('data-lgv-dim')}
				return}
			const m=/rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(getComputedStyle(e).stroke||'')
			if(!m)return
			const r=+m[1], g=+m[2], b=+m[3]
			if(Math.max(r,g,b)-Math.min(r,g,b)>45)return
			const lum=(0.299*r+0.587*g+0.114*b)/255
			if(lum>0.72&&e.getAttribute('data-lgv-dim')!=='1'){e.style.setProperty('stroke','rgba(255,255,255,.16)','important');e.setAttribute('data-lgv-dim','1')}})
	}
/*暗色：悬停高亮沿用亮色那套「半透明白」，压在深色纸上就是一块发着光的框（用户原话：透明白）。
	不猜类名——真悬停时量一次实际底色，凡是「浅色 + 半透明」就按同一个 alpha 换成黑，指针移开还原。
	4.7 只管首页 .lg-index-content，用户说没修完；5.1 放开到全站，用户说还是没修好。
	真正的原因是判据太窄——只认「半透明」，站点要是 hover 时直接给实心 #fff 就全放过了。
	1.0.0.1.0.2 改成「深底上贴了一块中性亮面」：不看 alpha，只看这层是不是白、底下是不是深。
	同时覆盖 background-color、::before、::after、inset 白色内阴影四种画法。
	pointerover 时向上问 7 层（站点常把高亮挂 li/a 上，指针落到的却是里面的 span）。*/
const HHV_SKIP='#lgv-search,#lgv-s2,#lgv-ucard,#lgv-upd,#lgv-tip,.lgv-tip,.lgv-sres,.lgv-cbx,.lgv-chip,.lgv-throw,.lgv-feed,.lgv-comment'
	let hhvLast=null, hhvPend=0
	function hhvRGB(c){const m=/rgba?\(\s*(\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\s*\)/.exec(c||'')
		if(!m)return null
		return{r:+m[1],g:+m[2],b:+m[3],a:m[4]===undefined?1:+m[4]}}
	function hhvLum(c){return .2126*c.r+.7152*c.g+.0722*c.b}
/*中性色：三通道差得少才当白，彩色的高亮（蓝底按钮之类）一律放过*/
	function hhvNeutral(c){return Math.max(c.r,c.g,c.b)-Math.min(c.r,c.g,c.b)<=26}
/*白 .9 → 黑 .36；白 .1 → 黑 .12。alpha 不照抄：深色纸上照抄 .9 会变成一块死黑*/
	function hhvInk(a){return Math.min(Math.max(a*.55,.12),.36).toFixed(2)}
/*元素底下真正露出来的颜色：往上找第一个不透明的底*/
	let hhvBaseCache=new WeakMap()
/*缓存的理由：祖先被压黑之后，后一轮再算「底下是什么颜色」就变成黑的，
	子元素会被级联判成白块——一整片连坐。原始底色只算一次，之后都按它判。*/
	function hhvBase(el){
		if(hhvBaseCache.has(el))return hhvBaseCache.get(el)
		let n=el.parentElement, got=null
		while(n&&n.nodeType===1){
			let bg=''
			try{bg=getComputedStyle(n).backgroundColor}catch(e){}
			const c=hhvRGB(bg)
			if(c&&c.a>=.5){got=c;break}
			n=n.parentElement}
		if(!got)got={r:29,g:32,b:37,a:1}
		hhvBaseCache.set(el,got)
		return got}
/*判据是「深底上贴了一块亮面」，不是「半透明」——4.7/5.1 只认半透明白，
	站点要是 hover 时直接给个实心 #fff，就白白放过了，用户看到的白块大概就是这种。
	只要这层亮面盖上去之后明显比底亮，且是中性色，就算；彩色不碰。*/
	function hhvWhiteOnDark(c,base){
		if(!c||c.a<=0)return false
		if(!hhvNeutral(c)||c.r<150||c.g<150||c.b<150)return false
/*判亮不判合成：白 .1 叠在 29,32,37 上合成才 52，但视觉上仍然是一块灰白；
	要的是「这层本身是白的」+「底下是深的」，不是「合成后多亮」*/
		return hhvLum(base)<=115}
	function hhvSwap(el){
		if(!el||el.nodeType!==1||el.hasAttribute('data-lgv-hhb')||el.hasAttribute('data-lgv-hhc'))return false
		const tag=el.tagName
		if(tag==='IMG'||tag==='SVG'||tag==='VIDEO'||tag==='CANVAS'||tag==='IFRAME')return false
		let cs=null
		try{cs=getComputedStyle(el)}catch(e){return false}
		if(cs.backgroundImage&&cs.backgroundImage!=='none')return false/*渐变底不动，改了只剩一块死色*/
		const c=hhvRGB(cs.backgroundColor)
		if(!c||!hhvWhiteOnDark(c,hhvBase(el)))return false
		el.setAttribute('data-lgv-hhb',el.style.getPropertyValue('background-color')||'')
		el.setAttribute('data-lgv-hhbp',el.style.getPropertyPriority('background-color')||'')
		el.style.setProperty('background-color','rgba(0,0,0,'+hhvInk(c.a)+')','important')
		return true}
/*inset 白色阴影也是常见做法：底色不变，靠一层内阴影画白*/
	function hhvShadow(el,cs){
		if(el.hasAttribute('data-lgv-hhs'))return false
		const sh=(cs&&cs.boxShadow)||''
		if(!sh||sh==='none'||sh.indexOf('inset')<0)return false
		const re=/rgba?\(([^)]+)\)/g
		let m=null, out=sh, hit=false
		while((m=re.exec(sh))){
			const p=m[1].split(',').map((x)=>parseFloat(x))
			if(p.length<3)continue
			const lo=Math.min(p[0],p[1],p[2]), hi=Math.max(p[0],p[1],p[2])
			if(lo>=150&&hi-lo<=26){
				hit=true
				out=out.split(m[0]).join('rgba(0,0,0,'+hhvInk(p.length>3&&!isNaN(p[3])?p[3]:1)+')')}}
		if(!hit)return false
		el.setAttribute('data-lgv-hhs',el.style.getPropertyValue('box-shadow')||'')
		el.style.setProperty('box-shadow',out,'important')
		return true}
/*伪元素那两层：按它自己的底色配元素底，命中就挂类，由 CSS 换成黑*/
	function hhvPseudo(n,which,cls,varName){
		let pc=''
		try{pc=getComputedStyle(n,which).backgroundColor}catch(e){}
		const c=hhvRGB(pc)
		if(!c)return false
		const own=hhvRGB(getComputedStyle(n).backgroundColor)
		const base=(own&&own.a>=.5)?own:hhvBase(n)
		if(!hhvWhiteOnDark(c,base))return false
		n.classList.add(cls);n.style.setProperty(varName,hhvInk(c.a));return true}
	function hhvBack(el){if(!el||el.nodeType!==1)return
		if(el.hasAttribute('data-lgv-hhb')){
			const v=el.getAttribute('data-lgv-hhb')||'', p=el.getAttribute('data-lgv-hhbp')||''
			if(v)el.style.setProperty('background-color',v,p)
			else el.style.removeProperty('background-color')
			el.removeAttribute('data-lgv-hhb');el.removeAttribute('data-lgv-hhbp')}
		if(el.hasAttribute('data-lgv-hhs')){
			const v2=el.getAttribute('data-lgv-hhs')||''
			if(v2)el.style.setProperty('box-shadow',v2)
			else el.style.removeProperty('box-shadow')
			el.removeAttribute('data-lgv-hhs')}
		if(el.classList.contains('lgv-hhpb')){el.classList.remove('lgv-hhpb');el.style.removeProperty('--lgv-hhpb-a')}
		if(el.classList.contains('lgv-hhpa')){el.classList.remove('lgv-hhpa');el.style.removeProperty('--lgv-hhpa-a')}}
/*自身透明就问 7 层祖先：站点常把高亮挂在 <a>/<li> 上，指针落到的却是里面的文字 span*/
	function hhvProbe(el){
		let n=el, i=0
		while(n&&i++<7){
			if(n.nodeType!==1)break
			if(n.closest&&n.closest(HHV_SKIP))return
			let cs=null
			try{cs=getComputedStyle(n)}catch(e){cs=null}
			if(cs){
				if(hhvSwap(n))return
				if(hhvShadow(n,cs))return}
			if(hhvPseudo(n,'::before','lgv-hhpb','--lgv-hhpb-a'))return
			if(hhvPseudo(n,'::after','lgv-hhpa','--lgv-hhpa-a'))return
			n=n.parentElement}}
/*常驻清扫：用户那块白的既锁不到、也不是 hover 出来的（登录后的统计栏之类），
	pointerover 那套天然管不到。暗色下整页扫一遍，凡是「深底上的中性亮面」直接压黑，
	不看类名、不看是不是 hover——这是给未知结构留的兜底。改过的打 data-lgv-hhc，不还原。*/
	let hhvSweepT=0
/*范围收在首页内容区：全站乱扫会把 legit 的浅色容器（亮区、图墙）也压黑，得不偿失。
	先收集再统一改——边扫边改会让子元素的「底下是什么颜色」跟着变，一圈下来整片都被判成白块。*/
	function hhvSweep(){
		if(!document.body)return
		if(!document.documentElement.classList.contains('lgv-dark'))return
		/*范围放到整页：登录后的首页结构跟未登录不一样，收窄到某几个容器就会漏。
		代价是要挡住大块（整页背景纸、图墙），只动小块；元素自己的祖先链不参与判断。*/
		const roots=[...document.body.querySelectorAll('*')]
		const vh=(innerWidth||1440)*(innerHeight||900)
		const jobs=[], seen=new Set()
		for(const r of roots){
			if(seen.has(r))continue
			seen.add(r)
			if(r.closest&&r.closest(HHV_SKIP))continue
			if(r.closest&&r.closest('svg,canvas,video,iframe,object,embed'))continue
			if(r.tagName==='IMG'||r.tagName==='PICTURE')continue
			const rc=r.getBoundingClientRect()
			if(rc.width*rc.height>vh*0.25)continue
			let el=r
			if(!(el.hasAttribute('data-lgv-hhb')||el.hasAttribute('data-lgv-hhc')||el.hasAttribute('data-lgv-hhs'))){
				let cs=null
				try{cs=getComputedStyle(el)}catch(e){cs=null}
				if(cs){
					const base=hhvBase(el)
					const c=hhvRGB(cs.backgroundColor)
					if(c&&c.a>0&&hhvWhiteOnDark(c,base))jobs.push([el,c.a,'bg'])
					else if((cs.backgroundImage||'').indexOf('gradient')>=0&&/(?:rgba?|#)(?=\(?\s*(?:2[0-5]\d|1[5-9]\d)|fff\b)/i.test(cs.backgroundImage))jobs.push([el,0,'bi'])
					else{
						/*伪元素和白色投影也是画白的老办法，常驻这一档一并处理*/
						let pb='', pa=''
						try{pb=getComputedStyle(el,'::before').backgroundColor}catch(e){}
						try{pa=getComputedStyle(el,'::after').backgroundColor}catch(e){}
						const cb=hhvRGB(pb), ca=hhvRGB(pa)
						if(cb&&cb.a>0&&hhvWhiteOnDark(cb,c.a>0?c:base))jobs.push([el,cb.a,'pb'])
						else if(ca&&ca.a>0&&hhvWhiteOnDark(ca,c.a>0?c:base))jobs.push([el,ca.a,'pa'])
						else if(cs.boxShadow&&cs.boxShadow!=='none'&&/inset/.test(cs.boxShadow))jobs.push([el,0,'sh'])
					}
				}
			}
			if(jobs.length>400)break
		}
		for(const j of jobs){
			const el=j[0]
			if(j[2]==='pb'){el.classList.add('lgv-hhpb');el.style.setProperty('--lgv-hhpb-a',hhvInk(j[1]));continue}
			if(j[2]==='pa'){el.classList.add('lgv-hhpa');el.style.setProperty('--lgv-hhpa-a',hhvInk(j[1]));continue}
			if(j[2]==='sh'){try{const cs2=getComputedStyle(el);hhvShadow(el,cs2)}catch(e){}continue}
			if(j[2]==='bg'){
				el.setAttribute('data-lgv-hhc','1')
				el.style.setProperty('background-color','rgba(0,0,0,'+hhvInk(j[1])+')','important')
			}else{
				let cs=null
				try{cs=getComputedStyle(el)}catch(e){continue}
				const bi=cs.backgroundImage
				const fixed=bi.replace(/rgba?\(([^)]+)\)/g,(m0,inner)=>{
					const p=inner.split(',').map((x)=>parseFloat(x))
					if(p.length<3)return m0
					const lo=Math.min(p[0],p[1],p[2]), hi=Math.max(p[0],p[1],p[2])
					if(lo>=150&&hi-lo<=26)return 'rgba(0,0,0,'+hhvInk(p.length>3&&!isNaN(p[3])?p[3]:1)+')'
					return m0})
				if(fixed!==bi){
					el.setAttribute('data-lgv-hhc','2')
					el.style.setProperty('background-image',fixed,'important')}}}}
/*诊断：把页面上所有「亮底」元素列出来，不过滤、不猜，按面积从大到小。
	上一次把 url() 背景也当可疑（评论头像各占一条），16 条全是头像，真正那块反而没进来。*/
	function hhvDiag(){
		const out=[]
		if(!document.body)return out
		const all=document.body.querySelectorAll('*')
		for(let i=0;i<all.length;i++){
			const el=all[i]
			const tn=el.tagName, tnl=tn.toLowerCase()/*SVG 元素的 tagName 是小写的，不能用大写比*/
			if(tnl==='img'||tnl==='picture'||tnl==='svg'||tnl==='canvas'||tnl==='video'||tnl==='iframe'||tnl==='script'||tnl==='style')continue
			const r=el.getBoundingClientRect()
			const area=Math.round(r.width*r.height)
			if(area<400)continue
			let cs=null
			try{cs=getComputedStyle(el)}catch(e){continue}
			/*SVG 里的白是 fill 属性，getComputedStyle().backgroundColor 永远是透明的——
			图表白底、白色蒙层都藏在这一层，之前完全看不见*/
			if(el.namespaceURI==='http://www.w3.org/2000/svg'){
				const fc=hhvRGB(cs.fill)
				const shape=(tnl==='rect'||tnl==='path'||tnl==='polygon'||tnl==='circle'||tnl==='ellipse')
				if(shape&&fc&&fc.a>.2&&hhvLum(fc)>=235){
					out.push({tag:tn.toLowerCase(),cls:'(svg) '+(el.getAttribute('class')||''),id:el.id,
						bg:'fill='+cs.fill,L:Math.round(hhvLum(fc)),baseL:Math.round(hhvLum(hhvBase(el))),
						bi:'',bs:'',f:'',bf:'',op:'',bm:'',box:Math.round(r.width)+'x'+Math.round(r.height),
						area:area,y:Math.round(r.top),txt:'',done:false})}
				continue}
			const bg=cs.backgroundColor
			const c=hhvRGB(bg)
			if(!c||c.a<=0)continue
			const L=hhvLum(c)
			if(L<128)continue
			out.push({tag:tn.toLowerCase(),cls:(el.className||'').toString().slice(0,48),id:el.id,
				bg:bg,L:Math.round(L),baseL:Math.round(hhvLum(hhvBase(el))),
				bi:(cs.backgroundImage||'').slice(0,60),bs:(cs.boxShadow||'').slice(0,40),
				f:cs.filter,bf:(cs.backdropFilter||cs.webkitBackdropFilter||'none'),op:cs.opacity,bm:cs.mixBlendMode,
				box:Math.round(r.width)+'x'+Math.round(r.height),area:area,y:Math.round(r.top),
				txt:(el.textContent||'').replace(/\s+/g,' ').trim().slice(0,16),
				done:el.hasAttribute('data-lgv-hhc')})
		}
		out.sort((a,b)=>b.area-a.area)
		return out.slice(0,40)}
	function hhvSweepSoon(){
		if(hhvSweepT)return
		hhvSweepT=setTimeout(()=>{hhvSweepT=0
			try{hhvSweep()}catch(e){}},800)}
	let hhvBound=0
	function hhvBind(){if(hhvBound)return
		hhvBound=1
		setTimeout(()=>{try{hhvSweep()}catch(e){}},1200)
		try{
			const mo=new MutationObserver(()=>{hhvSweepSoon()})
			mo.observe(document.documentElement,{childList:true,subtree:true})
			/*亮/暗切换后要重扫一遍：切过去时页面可能已经渲染完了，childList 不会再动*/
			new MutationObserver(()=>{hhvBaseCache=new WeakMap();if(document.documentElement.classList.contains('lgv-dark'))hhvSweepSoon()})
				.observe(document.documentElement,{attributes:true,attributeFilter:['class']})
		}catch(e){}
		WIN.__lgvHvScan=()=>{try{hhvSweep();return document.querySelectorAll('[data-lgv-hhc]').length}catch(e){return -1}}
		WIN.__lgvWhite=()=>{try{return hhvDiag()}catch(e){return []}}
		/*锁定不上就用这个：按住 Alt 在那块白上点一下，把该点最上层元素和 7 层祖先的
		  底色/背景图/阴影/filter/混合模式/opacity/伪元素全打出来，并拷进剪贴板*/
		WIN.__lgvPick=function(x,y){
			const out=[]
			let el=null
			try{el=document.elementFromPoint(x,y)}catch(e){}
			for(let i=0;el&&i<7;i++){
				const cs=getComputedStyle(el)
				let pb='',pa=''
				try{const b=getComputedStyle(el,'::before');pb=b.backgroundColor+' '+b.backgroundImage.slice(0,40)}catch(e){}
				try{const a=getComputedStyle(el,'::after');pa=a.backgroundColor+' '+a.backgroundImage.slice(0,40)}catch(e){}
				const r=el.getBoundingClientRect()
				const svgFill=(el.namespaceURI==='http://www.w3.org/2000/svg')?(cs.fill+' / attr='+(el.getAttribute('fill')||'-')):''
				const svgStroke=(el.namespaceURI==='http://www.w3.org/2000/svg')?(cs.stroke+' / attr='+(el.getAttribute('stroke')||'-')):''
				out.push({lv:i,tag:el.tagName.toLowerCase(),cls:(el.className||'').toString().slice(0,50),id:el.id,
					svgFill:svgFill,svgStroke:svgStroke,
					bg:cs.backgroundColor,bi:cs.backgroundImage.slice(0,80),bs:cs.boxShadow.slice(0,50),
					f:cs.filter,bf:(cs.backdropFilter||cs.webkitBackdropFilter||'none'),op:cs.opacity,bm:cs.mixBlendMode,
					pos:cs.position,z:cs.zIndex,pe:cs.pointerEvents,
					before:pb,after:pa,box:Math.round(r.width)+'x'+Math.round(r.height),
					txt:(el.textContent||'').replace(/\s+/g,' ').trim().slice(0,20)})
				el=el.parentElement}
			const json=JSON.stringify(out,null,1)
			try{console.log('[lgv] pick '+x+','+y+'\n'+json)}catch(e){}
			try{navigator.clipboard.writeText(json)}catch(e){}
			return out}
		if(!WIN.__lgvPickBound){
			WIN.__lgvPickBound=1
			document.addEventListener('click',(e)=>{
				if(!e.altKey)return
				e.preventDefault();e.stopPropagation()
				try{WIN.__lgvPick(e.clientX,e.clientY)}catch(x){}
			},true)}
		setTimeout(()=>{try{
			if(!document.documentElement.classList.contains('lgv-dark'))return
			const left=hhvDiag().filter((x)=>!x.done)
			if(left.length)console.warn('[lgv] 暗色下还剩 '+left.length+' 处白块没处理掉，执行 __lgvWhite() 看清单：',left)
		}catch(e){}},3000)
		document.addEventListener('pointerover',(e)=>{
			if(!document.documentElement.classList.contains('lgv-dark'))return
			const t=e.target
			if(!t||t.nodeType!==1)return
			if(t.closest(HHV_SKIP))return
			if(hhvLast&&(hhvLast===t||hhvLast.contains(t)))return
			hhvLast=t
/*hover 的样式在 pointerover 之后才算进 computed，等这一帧再量；同一帧只量最后一个，划得快也不卡*/
			if(hhvPend)return
			hhvPend=1
			const run=()=>{hhvPend=0
				const el=hhvLast
				if(el)try{hhvProbe(el)}catch(_){}}
			if(window.requestAnimationFrame)requestAnimationFrame(run);else setTimeout(run,16)
		},true)
		document.addEventListener('pointerout',(e)=>{
			const t=e.target
			if(!t||t.nodeType!==1)return
			hhvLast=null
			const to=e.relatedTarget
			if(to&&to.nodeType===1&&t.contains(to))return
			let n=t, i=0
			while(n&&i++<6){hhvBack(n);n=n.parentElement}
		},true)
	}
	function homeTextFix(){const root=document.documentElement;const dark=root.classList.contains('lgv-dark')
/*外壳（左右竖栏、顶栏）的字色只由主题那条规则给，这里一个字都不许刷；
		  之前首页把人扫进 body 档，把竖栏刷成白字 !important，和主题那条每轮抢一次就是「一闪一闪」*/
		const chrm='nav.lside,.user-nav.rside,.top-bar,.breadcrumb'
		document.querySelectorAll(chrm+' [data-lgv-ht]').forEach((el)=>{el.style.removeProperty('color');el.removeAttribute('data-lgv-ht')})
		if(!dark){document.querySelectorAll('[data-lgv-ht]').forEach((el)=>{el.style.removeProperty('color');el.removeAttribute('data-lgv-ht')});return}
		const home=!!document.querySelector('.lg-index-content')
/*首页整块都要补；其他页只补右栏（用户指定的范围，正文交给站点）*/const scopes=home ?[document.body] :[document.querySelector('.user-nav.rside')];const tk=(n,f)=>getComputedStyle(root).getPropertyValue(n).trim()||f
		const txt=tk('--lfe-color--text-1','#f5f5f5'), pri=tk('--lfe-color--primary-1','#0e90d2')
		const lum=(c)=>{const m=/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/.exec(c||'')
			if(!m)return null
			return{
				l:(+m[1]*0.299+ +m[2]*0.587+ +m[3]*0.114)/255,
				a:m[4]===undefined?1:+m[4],
				chroma:Math.max(+m[1],+m[2],+m[3])-Math.min(+m[1],+m[2],+m[3]),
			}}
/*往上找第一层不透明的底，判断这块文字到底压在深色还是浅色上*/const surface=(el)=>{let n=el, i=0
			while(n&&i++<24){const c=lum(getComputedStyle(n).backgroundColor)
				if(c&&c.a>0.5)return c.l
				n=n.parentElement}
			return 0.1/*一路都透明：底下就是壁纸/暗色画布*/
		}
		for(const box of scopes){if(!box)continue
			let n=0
			for(const el of box.querySelectorAll('*')){if(++n>4000)break
				if(el.closest(HT_SKIP)||el.closest('.top-bar')||el.closest('nav.lside,.user-nav.rside'))continue
/*右栏字色由外壳统一给，这里不再刷*/if(el.closest('.user-nav.rside'))continue
				if(el.closest('.lgv-chip'))continue
/*小 tag（AC 状态、算法标签）保持洛谷自己的字色*/if(el.closest('.am-control-nav,.am-direction-nav'))continue
/*轮播页码点是站点自己的装饰，别动*/const hasText=[...el.childNodes].some((k)=>k.nodeType===3&&k.nodeValue.trim())
				if(!hasText)continue
				if(surface(el)>0.5)continue
/*压在浅色底上的（白徽章、白按钮）保持原字色*//*首页徽章不刷白字，只还原以前刷过的*/try{
					document.querySelectorAll('.lg-index-content .am-badge,.lg-index-content .am-label').forEach((b)=>{
						if(b.getAttribute('data-lgv-bc')==='1'){b.style.removeProperty('color');b.removeAttribute('data-lgv-bc')}})
				}catch(e){}
				const f=lum(getComputedStyle(el).color)
				if(!f||f.l>0.55)continue
/*本来就是浅色字*//*深底上分不开的字提亮，亮彩色保留*/const sfc= surface(el);const cr=(Math.max(f.l,sfc)+0.05)/(Math.min(f.l,sfc)+0.05)
/*lg-fg-* 是站点给的名字色，一律不碰*/if(
				el.closest('[class*="lg-fg-"]')
				)
				continue
				if(f.chroma>36&&cr>=2.2)continue
/*底色本身是彩色的（蓝/红/绿按钮式底）→ 用白字；中性深底 → 正文色/链接色*/const bgCol=(()=>{let n=el, i=0
					while(n&&i++<24){const c=lum(getComputedStyle(n).backgroundColor)
						if(c&&c.a>0.5)return c
						n=n.parentElement}
					return null})()
				const onColor=!!bgCol&&bgCol.chroma>26;el.style.setProperty('color',onColor?'#fff':el.tagName==='A'?pri:txt,'important');el.setAttribute('data-lgv-ht','1')}
		}
	}
/*右栏用户名按站点原样显示，别改色；这里只还原历史版本提亮过的残留*/function sideNameFix(){
		const rs=document.querySelector('.user-nav.rside')
		if(!rs)return
		for(const el of rs.querySelectorAll('.luogu-username span,.luogu-username')){if(!el.hasAttribute('data-lgv-nc'))continue
			const v=el.getAttribute('data-lgv-nc')||'', pr=el.getAttribute('data-lgv-ncp')||''
			if(v)el.style.setProperty('color',v,pr)
			else el.style.removeProperty('color')
			el.removeAttribute('data-lgv-nc');el.removeAttribute('data-lgv-ncp')}
	}
	function paintCards(){if(document.querySelector('.lgv-anim'))return
		const dark=document.documentElement.classList.contains('lgv-dark');const T=paperTiers(dark);const art=/^\/(article|paste)\b/.test(location.pathname)
		const frosted=document.documentElement.classList.contains('lgv-prob')||!!document.querySelector('.theme-page.theme-frosted,.theme-frosted')
		document.querySelectorAll('.main-container .l-card').forEach((el)=>{if(el.closest('#lgv-search,#lgv-s2,#lgv-s2-mask,#lgv-ucard'))return
			if(el.classList.contains('lgv-uhd')||el.classList.contains('user-header-top'))return
			if(el.style.getPropertyValue('background-color')==='transparent')return
			let from=el.getAttribute('data-lgv-from')
			if(!el.hasAttribute('data-lgv-a')){const pi=paperMeasure(el);el.setAttribute('data-lgv-a',String(pi.a));el.setAttribute('data-lgv-from',pi.from);from=pi.from}
			if(!el.classList.contains('lgv-opq'))el.classList.add('lgv-opq')
			el.classList.toggle('lgv-nb',from==='before'||frosted)
			const hasInput=!!el.querySelector('textarea,input:not([type=checkbox]):not([type=radio]),[contenteditable="true"],.cm-editor,.CodeMirror')
			const want= document.documentElement.classList.contains('lgv-glass-all')&&from==='before'?'transparent':art?T.article:hasInput?T.input:T.card
			if(el.style.getPropertyValue('background-color')!==want)el.style.setProperty('background-color',want,'important')})
		try{flattenGlass()}catch(e){}
		try{homeTextFix()}catch(e){}
		try{sideNameFix()}catch(e){}}
/*题号上色：页面 JSON → 30 天缓存 → 限量拉取*//*难度色取站点色阶（lcolor--* 第 3 档，最高用 lapis-4）：0 灰 1 入门 2 普及− 3 普及/提高− 4 普及+/提高 5 提高 6 提高+/省选− 7 省选/NOI− 8 NOI/NOI+/CTS*/const PID_OFF= {0:'#bfbfbf',1:'#fe4c61',2:'#f39c11',3:'#ffc116',4:'#52c41a',5:'#13c2c2',6:'#3498db',7:'#9d3dcf',8:'#0e1d69'}
/*暗色纸面用同色相的第 2 档（亮一档），深蓝换 lapis-2，否则糊成一片黑*/const PID_DARK={ 0:'#bfbfbf', 1:'#ff9ea3', 2:'#ffce63', 3:'#ffe169', 4:'#94d66d', 5:'#5cdbd3', 6:'#89d1f5', 7:'#ce8ee8', 8:'#728dcf', }
	const PID_NAME=['暂无评定','入门','普及−','普及/提高−','普及+/提高','提高','提高+/省选−','省选/NOI−','NOI/NOI+/CTSC']
/*脚本自己的搜索面板自带配色，一点都不碰*/const PID_SKIP= 'pre,code,textarea,script,style,svg,math,.lgv-noframe,#lgv-s2,#lgv-search,.lgv-s2-cat,.lgv-s2-item,.breadcrumb,.top-bar'
	const PID_TTL=30*24*3600e3;let PID_DIFF={}, PID_SAVE=0, PID_SIG='', PID_SEEDED=''
	try{PID_DIFF=JSON.parse(localStorage.getItem('lgv-pid-diff2')||'{}')||{}}catch(e){PID_DIFF={}}
/*缓存项 {d,t}
，d=-1 表示没查到*/function pidCached(pid){const it=PID_DIFF[pid]
		if(!it)return null
		const d=typeof it==='object'?it.d:it
		if(typeof it==='object'&&Date.now()-it.t>PID_TTL)return null
		return d==null?-1:d}
	function pidColor(d){if(!(d>=0&&d<=8))return null
		const dark=document.documentElement&&document.documentElement.classList.contains('lgv-dark');return(dark?PID_DARK:PID_OFF)[d]}
/*难度一律从本地拿：页面自己的 JSON 里就带着 pid+difficulty，一个请求都不发*/function pidSeedFromPage(){
		const push=(o)=>{if(!o||typeof o!=='object')return
			if(Array.isArray(o)){o.forEach(push);return}
			if(typeof o.pid==='string'&&o.difficulty!=null)PID_DIFF[o.pid]={d:Number(o.difficulty),t:Date.now()}
			for(const k in o)push(o[k])}
		try{const ctx=document.getElementById('lentille-context')
			if(ctx)push(JSON.parse(ctx.textContent))
/*题单/题库/评测列表这类页面把整批题目塞在别的 JSON 块里*/document.querySelectorAll('script[type="application/json"]').forEach((el)=>{if(el.id==='lentille-context')return
				const t=el.textContent
				if(!t||t.length>900000||t.indexOf('"difficulty"')<0)return
				try{push(JSON.parse(t))}catch(e){}})
		}catch(e){}
	}
/*当前页自己的题目：同样白拿*/function pidOwnPage(pid){const el=document.getElementById('lentille-context')
		if(!el)return null
		try{const j=JSON.parse(el.textContent);const pr=j&&j.data&&j.data.problem
			if(pr&&pr.difficulty!=null&&(!pr.pid||pr.pid===pid))return Number(pr.difficulty)}catch(e){}
		return null}
	function pidSaveSoon(){clearTimeout(PID_SAVE);PID_SAVE=setTimeout(()=>{try{localStorage.setItem('lgv-pid-diff2',JSON.stringify(PID_DIFF))}catch(e){}},1500)}
/*题库行/搜索结果里站点自己就带着难度（小色块或"入门/提高+"文字），就地读，一个请求都不发*/const PID_TOKEN={ pink:1, orange:2, gold:3, green:4, cyan:5, blue:6, purple:7, lapis:8, }
	function pidFromBadge(el){const row=el.closest('.row,tr,li')||el.parentElement
		if(!row)return null
		const cand=row.querySelector('[style*="lcolor--"],[class*="lcolor--"]')
		if(!cand)return null
		const src=(cand.getAttribute('style')||'')+' '+(cand.className||'');const m=/lcolor--(pink|orange|gold|green|cyan|blue|purple|lapis|grey)/.exec(src)
		if(!m)return null
		if(m[1]==='grey')return 0
		return PID_TOKEN[m[1]]||null}
	function pidFromText(t){const s=(t||'').trim()
		for(let i=8;i>=1;i--){if(s.indexOf(PID_NAME[i])===0)return i}
		return null}
/*题库列表、搜索面板：跟练习页同一套半高色带*/function pidBandMode(){return pidOnPractice()||/^\/problem(\/list)?\/?$/.test(location.pathname)}
/*练习页：色带压在题号下半截，字还是正文色，深浅两套各取一套色*/function pidMark(a,d){const col=pidColor(d)
		if(!col){a.removeAttribute('data-lgv-hl');return}
		a.setAttribute('data-lgv-hl','');a.style.setProperty('--lgv-hl',col);a.title=PID_NAME[d]||''}
	function pidOnPractice(){return/^\/user\/[^/]+\/practice/.test(location.pathname)}
	function pidApply(a){const pid=a.dataset.pid, d=pidCached(pid)
		if(d==null)return
/*统一走色带：题号文字保持正文色，难度只体现在下半截那条带子上*/a.style.color='';a.classList.remove('lgv-pid-nodiff');pidMark(a,d)}
/*table-cell 里的题号包成行内 i，色带才跟着文字*/function pidInline(
	el,
	){const inner=el.querySelector(':scope > i.lgv-ptx')
		if(inner)return inner
		const i=document.createElement('i');i.className='lgv-ptx lgv-pid';i.textContent=(el.textContent||'').trim();el.textContent='';el.appendChild(i);return i}
/*查不到的题号慢慢补：8s 一条、每页 8 条*/const PID_GAP=8000, PID_PER_PAGE=8;let PID_Q=[], PID_BUSY=false, PID_LAST=0, PID_LEFT=PID_PER_PAGE
	function pidRead(t){const m=/<script id="lentille-context"[^>]*>([\s\S]*?)<\/script>/.exec(t||'')
		if(!m)return-1
		try{const pr=JSON.parse(m[1]).data.problem;return pr&&pr.difficulty!=null?Number(pr.difficulty):-1}catch(e){return-1}}
	function pidAsk(pid){if(pidCached(pid)!=null||PID_Q.indexOf(pid)>=0)return
		PID_Q.push(pid);pidPump()}
	function pidPump(){if(PID_BUSY||!PID_Q.length||PID_LEFT<=0||document.hidden)return
		const wait=PID_GAP-(Date.now()-PID_LAST)
		if(wait>0){setTimeout(pidPump,wait);return}
		const pid=PID_Q.shift();PID_BUSY=true;PID_LAST=Date.now();PID_LEFT--
		fetch('/problem/'+pid,{credentials:'include'})
		.then((r)=>(r.ok?r.text():''))
		.then((t)=>{PID_DIFF[pid]={d:pidRead(t),t:Date.now()};document.querySelectorAll('.lgv-pid[data-pid="'+pid+'"]').forEach(pidApply);pidSaveSoon()})
		.catch(()=>{PID_DIFF[pid]={d:-1,t:Date.now()}})
		.finally(()=>{PID_BUSY=false;pidPump()})
	}
	const pidIO=new IntersectionObserver(
	(es)=>
	es.forEach((e)=>{if(!e.isIntersecting)return
		pidIO.unobserve(e.target);pidAsk(e.target.dataset.pid)}),
	{rootMargin:'120px'},
	)
	function pidWatch(a){try{pidIO.observe(a)}catch(e){}}
/*SPA 换页时 JSON 常比 DOM 晚到一秒多：那一拍播种读到空/旧数据，签名也就定了型。
	盯「还有没上色的题号」，有就再播一次，每页最多 3 次、间隔 1.2s，别让大 JSON 反复解析。*/
	let pidReseedAt=0, pidReseedN=0
	function pidReseedReset(){pidReseedN=0;pidReseedAt=0}
	function pidReseedIfNeeded(){
		if(pidReseedN>=3)return
		const now=Date.now()
		if(now-pidReseedAt<1200)return
		let lack=false
		const list=document.querySelectorAll('.lgv-pid')
		for(let i=0;i<list.length;i++){if(!list[i].hasAttribute('data-lgv-hl')&&pidCached(list[i].dataset.pid)==null){lack=true;break}}
		if(!lack)return
		pidReseedAt=now;pidReseedN++
		try{pidSeedFromPage()}catch(e){}
		try{repaintPids()}catch(e){}}
	function repaintPids(){document.querySelectorAll('.lgv-pid').forEach(pidApply)}
/*站点就地换 DOM（翻页/切章），题号得补描；插的 <a> 会再触发一轮，第二轮自然停*/
	let pidSoonTimer=0;const pidSoon=()=>{if(pidSoonTimer)return
		pidSoonTimer=setTimeout(()=>{pidSoonTimer=0
			try{paintPids()}catch(e){}},140)}
	window.__lgvPidSoon=pidSoon
	try{
		new MutationObserver((muts)=>{
			for(const m of muts){const added=m.addedNodes
				if(!added||!added.length)continue
				for(const n of added){if(!n||n.nodeType!==1)continue
					if(n.matches&&n.matches('div.pid,a[href^="/problem/"],.lgv-pid,.page-bar'))return pidSoon()
					if(n.querySelector&&n.querySelector('div.pid,a[href^="/problem/"]'))return pidSoon()}
			}
		}).observe(document.body,{childList:true,subtree:true})
	}catch(e){}
/*翻页按钮点下去之后，站点是「先清空 → 占位 → 再塞行」三步走的，
	   中间那几百毫秒里表格是空的，光靠 mutation 会补在空表上。所以点了就分几拍再描*/
	document.addEventListener(
	'click',
	(ev)=>{const t=ev.target&&ev.target.closest?ev.target.closest('.page-bar button,.pagination a,.page-bar a'):null
		if(!t)return
		for(const ms of[260,700,1400])setTimeout(pidSoon,ms)},
	true,
	)
/*正文里手打的题号包成链接，代码公式不碰*/const PID_AUTO_RE= /(?<![A-Za-z0-9_])((?:P|B|T|U)\d{3,5}|CF\d{1,4}[A-Z]\d?|SP\d{3,5}|UVA\d{2,4}|AT_[A-Za-z0-9_]{2,40})(?![A-Za-z0-9_])/
	const PID_AUTO_SKIP= 'a,code,pre,script,style,textarea,input,select,button,svg,math,.katex,#lgv-search,#lgv-s2,.top-bar,.breadcrumb,table,div.pid,.lgv-pid,.lgv-sbf'
	function pidAutoLink(root){
/*首页这种页面正文节点能到 1500+，预算按"看过的节点"算、不按命中的算*/let seen=0;const jobs=[];const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,null);let n
		while((n=w.nextNode())){if(jobs.length>=40||++seen>4000)break
			const t=n.nodeValue
			if(!t||t.length<3)continue
			if(
			t.indexOf('P')<0&&
			t.indexOf('C')<0&&
			t.indexOf('A')<0&&
			t.indexOf('S')<0&&
			t.indexOf('U')<0&&
			t.indexOf('B')<0&&
			t.indexOf('T')<0
			)
			continue
			if(!PID_AUTO_RE.test(t))continue
			const par=n.parentElement
			if(!par||par.closest(PID_AUTO_SKIP))continue
			jobs.push(n)}
		for(const node of jobs){const txt=node.nodeValue;const frag=document.createDocumentFragment();let last=0, m;const re=new RegExp(PID_AUTO_RE.source,'g')
			while((m=re.exec(txt))){const pid=m[1];const at=m.index+(m[0].length-pid.length)
				if(at>last)frag.appendChild(document.createTextNode(txt.slice(last,at)))
				const a=document.createElement('a');a.className='lgv-auto';a.href='/problem/'+pid;const box=document.createElement('i');box.className='lgv-ptx lgv-pid';box.dataset.pid=pid;box.setAttribute('data-lgv-band','');box.textContent=pid;a.appendChild(box);frag.appendChild(a);last=at+pid.length;pidApply(box)
				if(pidCached(pid)==null)pidWatch(box)}
			if(!last)continue
			if(last<txt.length)frag.appendChild(document.createTextNode(txt.slice(last)))
			node.parentNode.replaceChild(frag,node)}
	}
	function paintPids(){const root=document.body
		if(!root)return
		try{pidAutoLink(root)}catch(e){}
		if(PID_SIG!==location.pathname){PID_SIG=location.pathname;PID_LEFT=PID_PER_PAGE}
/*播种得按「这页的 JSON 到底换没换」算，不能按路径：SPA 换页时路径先变、DOM 后挂，
		  在路径变的那一瞬播种，读到的还是上一页的 JSON，新页整批题号就被当成"未知"，
		  只能一条条慢慢问——看着就是"没高亮，得刷新一下才好"*/
		const _ctx=document.getElementById('lentille-context')
		const _raw=_ctx?(_ctx.textContent||''):''
		/*只按长度算签名不够：题库翻页两页数据长度常常一样，签名不变就不重播，
		  新页题号全成「未知」，只能一条条去问——表现就是「没高亮，刷新一下才出来」*/
		const _sig=location.pathname+location.search+'#'+_raw.length+':'+_raw.slice(0,64)+':'+_raw.slice(-64)
		if(_sig!==PID_SEEDED){PID_SEEDED=_sig;try{pidSeedFromPage()}catch(e){}pidSaveSoon()
			if(WIN.__lgvDbg){const D=WIN.__lgvPidDbg=WIN.__lgvPidDbg||{seed:0,paint:0,sig:''};D.seed++;D.sig=_sig}}
		if(WIN.__lgvDbg){const D=WIN.__lgvPidDbg=WIN.__lgvPidDbg||{seed:0,paint:0,sig:''};D.paint++}
		const practice=pidOnPractice()
/*题库列表：题号是 div.pid 裸文本，不是链接；难度从同一行的徽章上读*/if(/^\/problem(\/list)?\/?$/.test(location.pathname)){
			root.querySelectorAll('div.pid').forEach((el)=>{const pid=(el.getAttribute('title')||el.textContent||'').trim()
				if(!/^(?:P|B|T|U)\d{3,5}$/.test(pid))return
				const box=pidInline(el)
				if(!box.dataset.pid)box.dataset.pid=pid
				box.setAttribute('data-lgv-band','')
				if(pidCached(pid)==null){const d=pidFromBadge(el)
					if(d!=null)PID_DIFF[pid]={d,t:Date.now()}}
				pidApply(box)
				if(pidCached(pid)==null)pidWatch(box)})
		}
/*搜索面板：题号在 <u> 里，难度文字在同行 .lgv-s2-s 开头*/root.querySelectorAll('.lgv-s2-row').forEach((row)=>{
/*面板自己的题号（.lgv-s2-pid）在渲染时就带好了档位，这里只管站点原生的 <u>*/if(row.querySelector('.lgv-s2-pid'))return
			const u=row.querySelector('u');const pid=u?(u.textContent||'').trim():''
			if(!/^(?:P|B|T|U)\d{3,5}$/.test(pid))return
			if(!u.dataset.pid)u.dataset.pid=pid
			u.classList.add('lgv-pid');u.setAttribute('data-lgv-band','')
			if(pidCached(pid)==null){const d=pidFromText((row.querySelector('.lgv-s2-s')||{}).textContent)
				if(d!=null)PID_DIFF[pid]={d,t:Date.now()}}
			pidApply(u)
			if(pidCached(pid)==null)pidWatch(u)})
		root.querySelectorAll('a[href^="/problem/"]').forEach((a)=>{if(a.closest(PID_SKIP))return
			const t=(a.textContent||'').trim();const m=/^((?:P|B|T|U)\d{3,5}|CF\d{1,4}[A-Z]\d?|SP\d{3,5}|UVA\d{2,4}|AT_[A-Za-z0-9_]{2,40})$/.exec(t)
			if(!m)return
/*a 自带 padding，色带画在行内 i 上*/a.classList.remove( 'lgv-pid', );a.removeAttribute('data-lgv-hl');const box=pidInline(a)
			if(!box.dataset.pid)box.dataset.pid=m[1]
			box.setAttribute('data-lgv-band','');const pid=box.dataset.pid;const own=pidOwnPage(pid)
			if(own!=null)PID_DIFF[pid]={d:own,t:Date.now()}
			pidApply(box)
			if(pidCached(pid)==null)pidWatch(box)
			if(!practice){const chip=a.parentNode&&a.parentNode.querySelector('.lgv-diffchip')
				if(chip)chip.remove()}})
		try{pidReseedIfNeeded()}catch(e){}
	}
/*首帧保护解除：等站点渲染完再放开过渡，最多死等 2.6 秒*/;	/*首帧保护解除：等站点渲染完再放开过渡，最多死等 2.6 秒*/;(function unBoot(){let n=0
		const go=()=>{if(++n<14&&document.readyState!=='complete'){setTimeout(go,200);return}
			setTimeout(()=>document.documentElement.classList.remove('lgv-boot'),260)}
		setTimeout(go,200)})()
	const bootBorders=()=>{try{paintCards()}catch(e){}
		try{fixBorders()}catch(e){}
		try{paintPids()}catch(e){}
		try{new MutationObserver(fixSoon).observe(document.documentElement,{childList:true,subtree:true})}catch(e){}
		setInterval(()=>{
/*动画期只跳过重绘底色，题号/自动链接得继续跑，否则首页这种常有动画的页面永远不上色*/if(!document.querySelector('.lgv-anim')){try{paintCards()}catch(e){}
				try{fixBorders()}catch(e){}}
			try{paintPids()}catch(e){}},2000)
	}
	if(document.documentElement)setTimeout(bootBorders,700)
	else document.addEventListener('DOMContentLoaded',bootBorders,{once:true})
	if(document.documentElement&&/^\/(article|paste)\b/.test(location.pathname)){document.documentElement.classList.add('lgv-art')}
	if(document.documentElement&&/^\/problem\//.test(location.pathname)){document.documentElement.classList.add('lgv-prob')}
	if(document.body)ucBind()
	else document.addEventListener('DOMContentLoaded',ucBind,{once:true})
/*── 自检：__lgvDiag() 打印当前生效状态 ──*/WIN.__lgvDiag=function(){const root=document.documentElement
		const card= document.querySelector('.main-container .l-card.lgv-utl')||document.querySelector('.main-container .l-card')||document.querySelector('.l-card')
		const cs=card?getComputedStyle(card):null
		const out={
			版本:VERSION,
			路径:location.pathname,
			html的class:root.className,
			暗色:root.classList.contains('lgv-dark'),
			主样式表:!!document.getElementById('lgv-round'),
			个人中心样式表:!!document.getElementById('lgv-user-tiles'),
			壁纸变量:(root.style.getPropertyValue('--lgv-bg')||'').slice(0,46),
			body壁纸:(document.body.style.getPropertyValue('background-image')||getComputedStyle(document.body).backgroundImage).slice(0,46),
			卡片class:card?card.className:'(页面没有 .l-card)',
			卡片底色:cs?cs.backgroundColor:'',
			卡片圆角:cs?cs.borderTopLeftRadius:'',
		}
		try{console.table(out)}catch(e){console.log(out)}
		return out}
/*手动兜底：__lgvFix() 立刻重跑标记、纸色、壁纸*/WIN.__lgvFix=function(){
		document.querySelectorAll('[data-lgv-a]').forEach((e)=>{e.style.removeProperty('background-color');e.removeAttribute('data-lgv-a');e.removeAttribute('data-lgv-from')})
		try{if(WIN.__lgvUserPut)WIN.__lgvUserPut()}catch(e){}
		try{tagUser()}catch(e){}
		try{syncMaskTone()}catch(e){}
		try{if(curBgStyle)paintBg(curBgStyle.url,curBgStyle.size,curBgStyle.pos,curBgStyle.mid)}catch(e){}
		return true}
/*── 启动：放在最末尾，此时所有 const 已初始化 ──*/
/*luogu.com 在部分地区会被 Cloudflare 挡成 451 提示页（Luogu cannot serve content），
	那种页面上没有洛谷的 DOM，跑起来只会空转 10 秒，直接退出*/
function notSitePage(){try{return /Luogu cannot serve content/i.test(document.title||'')}catch(e){return false}}
/*document-start 阶段还不知道标题，类已经挂上去了；确认是提示页就把挂过的痕迹收拾干净*/
function siteCleanup(){try{WIN.__lgvOff=1
		;[document.documentElement,document.body].forEach((el)=>{if(!el)return
			;[...el.classList].filter((c)=>c.indexOf('lgv-')===0).forEach((c)=>el.classList.remove(c))})
		document.documentElement.removeAttribute('data-lgv-ver')
		document.querySelectorAll('style[id^="lgv-"],link[id^="lgv-"]').forEach((n)=>n.remove())}catch(e){}}
function boot(){
		/*document-start 时标题可能还没解析出来，DOM 就绪后再确认一次*/
		try{document.addEventListener('DOMContentLoaded',()=>{if(notSitePage()){siteCleanup()
			/*站点/皮肤的亮暗与玻璃类可能在 DOM 就绪后又刷一轮，隔一会儿再收一次*/
			setTimeout(()=>{if(notSitePage())siteCleanup()},1600)}},{once:true})}catch(e){}
		if(notSitePage()){siteCleanup();return}
		try{console.info('%c[lgv]','color:#0e90d2','v'+VERSION.replace(/^V/,''),'host',HOSTNAME,'cookie-domain',SITE_SUFFIX)}catch(e){}
		try{earlyPaint()}catch(e){}
		try{sbBoot()}catch(e){}
		try{hhvBind()}catch(e){}
		if(start())return
		let n=0;const iv=setInterval(()=>{if(start()||++n>40)clearInterval(iv)},250)}
/*── 首页面包屑尾巴挂一条「检查更新」：只比脚本头部的 @version。
	国内直连 raw 常被墙，先问 jsdelivr，再退回 raw；有新版本就打开下载页让 Tampermonkey 接住 ──*/
	const UPD_CDN='https://cdn.jsdelivr.net/gh/Null-in-null/Luogu-Preference-Better@main/luogu-skin.user.js'
	const UPD_RAW='https://raw.githubusercontent.com/Null-in-null/Luogu-Preference-Better/main/luogu-skin.user.js'
	let updCss=0
/*按钮字色跟主题走。面包屑所在的顶栏背景本身就是主题主色（back），所以字色用主题为它配的 fore，
	  天然有对比度；万一只拿到 back（暗色首页没有 dNavi），再按底色明暗折一次亮度*/
	function updCol(){
		const dk=document.documentElement.classList.contains('lgv-dark')
		let ln=null,dn=null
		try{const el=document.getElementById('luogu-theme')
			if(el){const j=JSON.parse(el.textContent||'{}')||{};ln=j.lNavi||null;dn=j.dNavi||null}}catch(e){}
		if(!ln)try{ln=JSON.parse(localStorage.getItem('lgv-lnav')||'null')}catch(e){}
		if(!dn)try{dn=JSON.parse(localStorage.getItem('lgv-dnav')||'null')}catch(e){}
		if(!dn&&WIN.__lgvDn)dn=WIN.__lgvDn
		const nav=(dk&&dn)||ln
		if(nav&&nav.fore)return nav.fore
		if(nav&&nav.back)return fixLum(nav.back,dk?0.82:0.48)
		if(dn&&dn.back)return fixLum(dn.back,0.82)
/*首页没有 <script id="luogu-theme">、缓存也还没攒出来的话，上面全落空，字色就只剩硬编码的蓝。		  这时候直接量顶栏的实际底色，按它的明暗压/提——不依赖任何配置*/		try{const el=document.querySelector('.nav')||document.querySelector('#luogu-nav')||document.querySelector('header')
			const m=/rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(el?getComputedStyle(el).backgroundColor:'')
			if(m){const c='#'+[1,2,3].map((i)=>Number(m[i]).toString(16).padStart(2,'0')).join('')
/*顶栏底色本身就是主题色：亮色主题直接拿它当字色（白底上正好），深色主题提亮；
				  要是量到的是灰白/灰黑（站点没上主题色），那它不是主题色，按明暗折一次而已*/
				const v=[1,2,3].map((i)=>Number(m[i]))
				const sat=Math.max(...v)-Math.min(...v)
				if(sat<=24)return fixLum(c,dk?0.82:0.48)
				if(dk)return fixLum(c,0.82)
/*饱和色＝主题色，但顶栏用的多半是它的浅色档（洛谷默认是那抹绿），白底上偏亮，压到 0.48 才算字色*/
				return (0.299*v[0]+0.587*v[1]+0.114*v[2])/255>0.55?fixLum(c,0.48):c}}catch(e){}
		return''}
/*主题主色当字色时按底色压/提亮度：白底压到 0.48，深底提到 0.82*/
	function fixLum(c,aim){
		const m=/^#?([0-9a-f]{6})$/i.exec(String(c).trim())
		if(!m)return c
		let r=parseInt(m[1].slice(0,2),16),g=parseInt(m[1].slice(2,4),16),b=parseInt(m[1].slice(4,6),16)
		const lum=(0.299*r+0.587*g+0.114*b)/255
		if(!lum||Math.abs(lum-aim)<0.04)return'#'+m[1]
		const k=aim/lum
		r=Math.min(255,Math.round(r*k));g=Math.min(255,Math.round(g*k));b=Math.min(255,Math.round(b*k))
		return'#'+[r,g,b].map((v)=>v.toString(16).padStart(2,'0')).join('')}
	function updPaint(){if(updCss)return;updCss=1
		try{GM_addStyle('html body .breadcrumb #lgv-upd{color:var(--lgv-upd-col,#0e90d2)!important;text-decoration:none!important;cursor:pointer;opacity:.92;margin-left:12px;transition:opacity .12s}\nhtml body .breadcrumb #lgv-upd:hover{color:var(--lgv-upd-col,#0e90d2)!important;text-decoration:none!important;opacity:1}\nhtml body .breadcrumb #lgv-upd.lgv-busy{opacity:.5;pointer-events:none}')}catch(e){}}
	function updLink(){
		if(location.pathname!=='/')return
		const bc=document.querySelector('.breadcrumb')
		if(!bc||bc.querySelector('#lgv-upd'))return
		updPaint()
		try{const col=updCol();if(col)document.documentElement.style.setProperty('--lgv-upd-col',col)}catch(e){}
		const a=document.createElement('a');a.id='lgv-upd';a.target='_blank';a.rel='noopener';a.href=UPD_RAW
		a.title='本地 '+VERSION+' · 点一下跟线上比'
		a.textContent='检查「Luogu preference better」更新'
		a.addEventListener('click',(e)=>{
			e.preventDefault()
			if(a.classList.contains('lgv-busy'))return
			a.classList.add('lgv-busy')
			const old=a.textContent
			const back=()=>{a.textContent=old;a.classList.remove('lgv-busy')}
			const stay=(t)=>{a.textContent=t}
			/*要开的是「刚才报出那个版本」的地址：raw 更新时还去开 jsdelivr，等于把新版换成 CDN 上那份旧的*/
			let SRC=UPD_RAW
			const open=()=>{location.href=SRC}
			/*洛谷的 CSP 只放行自家 connect-src，页面里 fetch 别家一律被拒，得走 GM 的特权请求*/
			const grab=(u)=>new Promise((ok,no)=>{
				const full=u+'?t='+Date.now()
				if(typeof GM_xmlhttpRequest==='function'){
					try{GM_xmlhttpRequest({method:'GET',url:full,timeout:9000,onload:(r)=>{r&&r.status>=200&&r.status<400?ok(r.responseText||''):no()},onerror:no,ontimeout:no});return}catch(e){}
				}
				fetch(full,{cache:'no-store'}).then((r)=>r.text()).then(ok,no)})
			let p=null
			try{p=grab(UPD_RAW)}catch(e){}
			const chain=(p||Promise.reject(0)).then((t)=>{SRC=UPD_RAW;return t}).catch(()=>grab(UPD_CDN).then((t)=>{SRC=UPD_CDN;return t}))
			chain.then((txt)=>{
				const m=/@version\s+(V?[\d.]+)/.exec(txt||'')
				if(!m)throw 0
				const nv=m[1].replace(/^V/,''),cur=VERSION.replace(/^V/,'')
				/*比大小，不是比是否相等：自己先装上更高版本时，CDN 上的旧版不该算"有更新"*/
				const cmp=(a,b)=>{const x=a.split('.').map(Number),y=b.split('.').map(Number)
					for(let i=0;i<Math.max(x.length,y.length);i++){const d=(x[i]||0)-(y[i]||0)
						if(d)return d>0?1:-1}
					return 0}
				const c=cmp(nv,cur)
				a.href=SRC
				if(c>0){stay('发现 V'+nv+'，正在打开…');setTimeout(open,700)}
				else if(c===0){stay('已是最新 V'+cur+'（线上同版）');setTimeout(back,1600)}
/*线上还没本地新：以前这里也报"已是最新"，看着像检查坏了，其实该说清楚*/
				else{stay('线上 V'+nv+'，本地 V'+cur+' 更新');setTimeout(back,2600)}
			}).catch(()=>{stay('检查失败，正在打开下载页…');setTimeout(open,700)})
		})
		bc.appendChild(a)
	}
	;(function updBoot(){let n=0
/*团队页顺手记一笔「我是不是这个队的成员」，0 请求；当时 s2 模块还没起来，这里内联一份*/
		const teamNote=()=>{const m=/^\/team\/(\d+)/.exec(location.pathname);if(!m)return
			if(!ucOwnUid())return
			const el=document.getElementById('lentille-context');if(!el)return
			try{const d=JSON.parse(el.textContent||'{}').data
				if(!d||!d.team||d.team.id!=Number(m[1]))return
				const o=JSON.parse(localStorage.getItem('lgv-myteams')||'{}')
				o[m[1]]=d.currentMember?1:0;o._t=Date.now()
				localStorage.setItem('lgv-myteams',JSON.stringify(o))
			}catch(e){}}
		let tn=0
		const go=()=>{updLink();if(!tn){tn=1;teamNote()};if(document.getElementById('lgv-upd')||++n>120)clearInterval(iv)}
		const iv=setInterval(go,250);go()})()
/*document-start 下先塞样式和上次的主题*/;(function earlyPaint(n){if(!document.documentElement){if(n<60)setTimeout(()=>earlyPaint(n+1),0)
			return}
		try{document.documentElement.classList.add('lgv-boot')}catch(e){}
		try{inject()}catch(e){}
		try{bgCacheLoad()}catch(e){}})(0)
	if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true})
	else boot()})()
