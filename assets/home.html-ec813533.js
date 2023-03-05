import{a3 as e,Z as p,_ as o,a4 as c,a1 as s,a2 as n,$ as i,a0 as r,a5 as a,D as t}from"./framework-61fc4e0a.js";const B="/v2/assets/home-light-048c8ffb.jpg",d="/v2/assets/home-dark-c80b26db.jpg",y={},v=s("p",null,[s("code",null,"vuepress-theme-hope"),n(" 保留了默认主题的首页配置，在此基础上改进样式与配置。")],-1),m=s("p",null,[n("如果想要使用它，请在 frontmatter 中设置 "),s("code",null,"home: true"),n("。任何 frontmatter 之后的内容将会以普通的 Markdown 被渲染，并插入到主页渲染内容的底部。")],-1),u=s("p",null,[s("img",{src:B,alt:"首页截图","data-mode":"lightmode-only",loading:"lazy"}),s("img",{src:d,alt:"首页截图","data-mode":"darkmode-only",loading:"lazy"})],-1),C=a('<h2 id="站点信息" tabindex="-1"><a class="header-anchor" href="#站点信息" aria-hidden="true">#</a> 站点信息</h2><p>你可以使用 <code>heroText</code> 设置主标题，并通过 <code>tagline</code> 设置副标题。</p><p>如果你有一个 Logo，你可以将其放置在 <code>public</code> 文件夹中，并通过 <code>heroImage</code> 设置它，如果你在夜间模式希望展示另一个 Logo， 可以使用 <code>heroImageDark</code>。为了更好的 A11y，我们建议你设置 Logo 的描述到 <code>heroAlt</code>。</p><h2 id="主页按钮" tabindex="-1"><a class="header-anchor" href="#主页按钮" aria-hidden="true">#</a> 主页按钮</h2><p>你可以将一些重要的链接以按钮的形式展示在主页中。</p><p>你可以通过 <code>actions</code> 设置它们，它是一个数组，每个元素都是一个对象，包含以下键值:</p><ul><li><code>text</code>: 按钮文字</li><li><code>link</code>: 按钮链接</li><li><code>type</code>: 按钮类型 (仅支持 <code>&quot;primary&quot;</code> 与 <code>&quot;default&quot;</code> (默认))</li></ul><h2 id="项目特性" tabindex="-1"><a class="header-anchor" href="#项目特性" aria-hidden="true">#</a> 项目特性</h2><p>你可以通过 <code>features</code> 设置并展示项目特性，它是一个数组，每个元素都是一个对象，包含以下键值:</p><ul><li><code>title</code>: 标题</li><li><code>details</code>: 详情</li><li><code>icon</code>(可选): 可填入完整路径或绝对路径的图片链接，或 FontClass</li><li><code>link</code>(可选): 链接地址</li></ul>',10),A={class:"hint-container info"},F=s("p",{class:"hint-container-title"},"相关信息",-1),b=a(`<h2 id="配置案例" tabindex="-1"><a class="header-anchor" href="#配置案例" aria-hidden="true">#</a> 配置案例</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">---</span></span>
<span class="line"><span style="color:#E06C75;">home</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span></span>
<span class="line"><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">主页</span></span>
<span class="line"><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">home</span></span>
<span class="line"><span style="color:#E06C75;">heroImage</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/logo.svg</span></span>
<span class="line"><span style="color:#E06C75;">heroText</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">VuePress Theme Hope</span></span>
<span class="line"><span style="color:#E06C75;">tagline</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">一个具有强大功能的 vuepress 主题✨</span></span>
<span class="line"><span style="color:#E06C75;">actions</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">text</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">使用教程 🧭</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/zh/cookbook/tutorial/</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">type</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">primary</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">text</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">介绍 💡</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/zh/guide/get-started/intro.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">text</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">配置 🛠</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/zh/config/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">text</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">在线案例 🪀</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">https://stackblitz.com/fork/vuepress-theme-hope</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">features</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Markdown 增强</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">fab fa-markdown</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">新增文字对齐、上下角标、脚注、标记、任务列表、数学公式、流程图、图表与幻灯片支持</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/zh/guide/markdown/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">幻灯片页面</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">person-chalkboard</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">添加幻灯片页面以显示你喜欢的内容</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/zh/guide/layout/slides</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">布局增强</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">object-group</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">添加路径导航、页脚、改进的导航栏、改进的页面导航等。</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/zh/guide/layout/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">浏览量与评论</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">comment-dots</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">配合 Waline 来开启阅读量统计与评论支持</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/zh/guide/feature/comment.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">文章信息</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">circle-info</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">为你的文章添加作者、写作日期、预计阅读时间、字数统计等信息</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/zh/guide/feature/page-info.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">博客支持</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">blog</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">使用一些很棒的布局提供博客功能，通过文章的日期、标签和分类，自动生成文章、分类、标签与时间轴列表</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/zh/guide/blog/intro.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">主题色切换</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">palette</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">支持自定义主题色并允许用户在预设的主题颜色之间切换</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/zh/guide/interface/theme-color.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">深色模式</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">circle-half-stroke</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">可以自由切换浅色模式与深色模式</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/zh/guide/interface/darkmode.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">完整的无障碍支持</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">universal-access</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">为你的网站带来完整的无障碍支持</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/zh/guide/interface/accessibility.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">文章加密</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">lock</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">你可以为你的特定页面或特定目录进行加密，以便陌生人不能随意访问它们</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/zh/guide/feature/encrypt.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">搜索支持</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">search</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">支持 docsearch 和基于客户端的搜索</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/zh/guide/feature/search.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">代码复制</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">copy</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">一键复制代码块中的代码</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/zh/guide/feature/copy-code.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">图片预览</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">image</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">像相册一样允许你浏览、缩放并分享你的页面图片</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/zh/guide/feature/photo-swipe.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">SEO 增强</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">dumbbell</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">将最终生成的网页针对搜索引擎进行优化。</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/zh/guide/advanced/seo.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Sitemap</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">sitemap</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">自动为你的网站生成 Sitemap</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/zh/guide/advanced/sitemap.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Feed 支持</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">rss</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">生成你的 Feed，并通知你的用户订阅它</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/zh/guide/advanced/feed.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">PWA 支持</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">mobile-screen</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">让你的网站更像一个 APP</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/zh/guide/advanced/pwa.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">更多新特性</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">ellipsis</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">包括图标支持、全屏按钮、返回顶部按钮等</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/zh/guide/feature/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">copyright</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span></span>
<span class="line"><span style="color:#E06C75;">footer</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">MIT Licensed | Copyright © 2019-present Mr.Hope</span></span>
<span class="line"><span style="color:#ABB2BF;">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function h(E,g){const l=t("RouterLink");return p(),o("div",null,[v,m,u,c(" more "),C,s("div",A,[F,s("p",null,[n("关于完整的配置项目，请参见 "),i(l,{to:"/zh/config/frontmatter/home.html"},{default:r(()=>[n("主页 Frontmatter 配置")]),_:1}),n("。")])]),b])}const f=e(y,[["render",h],["__file","home.html.vue"]]);export{f as default};
