import{a3 as B,Z as d,_ as y,$ as n,a0 as a,a1 as s,a2 as e,a5 as c,D as o}from"./framework-61fc4e0a.js";const b={},u=c(`<h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><p>如果没有任何配置，你的 VuePress 站点仅有一些最基础的功能。为了更好地自定义你的网站，让我们首先在你的文档目录下创建一个 <code>.vuepress</code> 目录，所有 VuePress 相关的文件都将会被放在这里。你的项目结构可能是这样:</p><div class="language-text" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">├─ docs</span></span>
<span class="line"><span style="color:#abb2bf;">│  ├─ .vuepress</span></span>
<span class="line"><span style="color:#abb2bf;">│  │  └─ config.js</span></span>
<span class="line"><span style="color:#abb2bf;">│  └─ README.md</span></span>
<span class="line"><span style="color:#abb2bf;">├─ .gitignore</span></span>
<span class="line"><span style="color:#abb2bf;">└─ package.json</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>VuePress 站点的基本配置文件是 <code>.vuepress/config.js</code> ，但也同样支持 TypeScript 配置文件。你可以使用 <code>.vuepress/config.ts</code> 来得到更好的类型提示。</p><p>一个基础的配置文件是这样的:</p>`,5),h=s("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"import"),s("span",{style:{color:"#ABB2BF"}}," { "),s("span",{style:{color:"#E06C75"}},"defineUserConfig"),s("span",{style:{color:"#ABB2BF"}}," } "),s("span",{style:{color:"#C678DD"}},"from"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},'"vuepress"'),s("span",{style:{color:"#ABB2BF"}},";")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"import"),s("span",{style:{color:"#ABB2BF"}}," { "),s("span",{style:{color:"#E06C75"}},"hopeTheme"),s("span",{style:{color:"#ABB2BF"}}," } "),s("span",{style:{color:"#C678DD"}},"from"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},'"vuepress-theme-hope"'),s("span",{style:{color:"#ABB2BF"}},";")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"export"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#C678DD"}},"default"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#61AFEF"}},"defineUserConfig"),s("span",{style:{color:"#ABB2BF"}},"({")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 站点配置")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#E06C75"}},"lang"),s("span",{style:{color:"#ABB2BF"}},": "),s("span",{style:{color:"#98C379"}},'"zh-CN"'),s("span",{style:{color:"#ABB2BF"}},",")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#E06C75"}},"title"),s("span",{style:{color:"#ABB2BF"}},": "),s("span",{style:{color:"#98C379"}},'"你好， VuePress ！"'),s("span",{style:{color:"#ABB2BF"}},",")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#E06C75"}},"description"),s("span",{style:{color:"#ABB2BF"}},": "),s("span",{style:{color:"#98C379"}},'"这是我的第一个 VuePress 站点"'),s("span",{style:{color:"#ABB2BF"}},",")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 主题")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#E06C75"}},"theme"),s("span",{style:{color:"#ABB2BF"}},": "),s("span",{style:{color:"#61AFEF"}},"hopeTheme"),s("span",{style:{color:"#ABB2BF"}},"({")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 主题配置")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    "),s("span",{style:{color:"#E06C75"}},"logo"),s("span",{style:{color:"#ABB2BF"}},": "),s("span",{style:{color:"#98C379"}},'"https://vuejs.org/images/logo.png"'),s("span",{style:{color:"#ABB2BF"}},",")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  }),")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"});")]),e(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),F=s("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"import"),s("span",{style:{color:"#ABB2BF"}}," { "),s("span",{style:{color:"#E06C75"}},"hopeTheme"),s("span",{style:{color:"#ABB2BF"}}," } "),s("span",{style:{color:"#C678DD"}},"from"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},'"vuepress-theme-hope"'),s("span",{style:{color:"#ABB2BF"}},";")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"export"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#C678DD"}},"default"),s("span",{style:{color:"#ABB2BF"}}," {")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 站点配置")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#E06C75"}},"lang"),s("span",{style:{color:"#ABB2BF"}},": "),s("span",{style:{color:"#98C379"}},'"zh-CN"'),s("span",{style:{color:"#ABB2BF"}},",")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#E06C75"}},"title"),s("span",{style:{color:"#ABB2BF"}},": "),s("span",{style:{color:"#98C379"}},'"你好， VuePress ！"'),s("span",{style:{color:"#ABB2BF"}},",")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#E06C75"}},"description"),s("span",{style:{color:"#ABB2BF"}},": "),s("span",{style:{color:"#98C379"}},'"这是我的第一个 VuePress 站点"'),s("span",{style:{color:"#ABB2BF"}},",")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 主题")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#E06C75"}},"theme"),s("span",{style:{color:"#ABB2BF"}},": "),s("span",{style:{color:"#61AFEF"}},"hopeTheme"),s("span",{style:{color:"#ABB2BF"}},"({")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 主题配置")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    "),s("span",{style:{color:"#E06C75"}},"logo"),s("span",{style:{color:"#ABB2BF"}},": "),s("span",{style:{color:"#98C379"}},'"https://vuejs.org/images/logo.png"'),s("span",{style:{color:"#ABB2BF"}},",")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  }),")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"};")]),e(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),A={class:"hint-container tip"},m=s("p",{class:"hint-container-title"},"提示",-1),v={href:"https://v2.vuepress.vuejs.org/zh/reference/config.html",target:"_blank",rel:"noopener noreferrer"},f=c(`<h2 id="配置作用域" tabindex="-1"><a class="header-anchor" href="#配置作用域" aria-hidden="true">#</a> 配置作用域</h2><h3 id="站点配置" tabindex="-1"><a class="header-anchor" href="#站点配置" aria-hidden="true">#</a> 站点配置</h3><p>站点配置的意思是，无论你使用什么主题，这些配置项都可以生效。</p><p>我们知道，每一个站点都应该有它的 <code>lang</code>, <code>title</code> 和 <code>description</code> 等属性，因此 VuePress 内置支持了这些属性的配置。</p><h3 id="主题配置" tabindex="-1"><a class="header-anchor" href="#主题配置" aria-hidden="true">#</a> 主题配置</h3><p>主题配置将会被 VuePress 主题来处理，所以它取决于你使用的主题是什么。</p><p>对于 <code>vuepress-theme-hope</code> 来说，你应该导入 <code>hopeTheme</code> 并设置 设置 <code>theme: hopeTheme(options)</code>。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如果你没有设置 VuePress 配置的 <code>theme</code> 配置项，则代表使用的是默认主题。</p></div><h2 id="客户端配置文件" tabindex="-1"><a class="header-anchor" href="#客户端配置文件" aria-hidden="true">#</a> 客户端配置文件</h2><p>在大多数情况下，配置文件已经足够帮助你配置好你的 VuePress 站点。不过，有些时候用户们可能希望直接添加一些客户端代码。 VuePress 通过客户端配置文件来支持这种需求：</p><div class="language-text" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">├─ docs</span></span>
<span class="line"><span style="color:#abb2bf;">│  ├─ .vuepress</span></span>
<span class="line"><span style="color:#abb2bf;">│  │  ├─ client.js   &lt;--- 客户端配置文件</span></span>
<span class="line"><span style="color:#abb2bf;">│  │  └─ config.js   &lt;--- 配置文件</span></span>
<span class="line"><span style="color:#abb2bf;">│  └─ README.md</span></span>
<span class="line"><span style="color:#abb2bf;">├─ .gitignore</span></span>
<span class="line"><span style="color:#abb2bf;">└─ package.json</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div><p>一个基础的客户端配置文件是这样的：</p><div class="language-typescript" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">defineClientConfig</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;@vuepress/client&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">defineClientConfig</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">enhance</span><span style="color:#ABB2BF;">({ </span><span style="color:#E06C75;font-style:italic;">app</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">router</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">siteData</span><span style="color:#ABB2BF;"> }) {},</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">setup</span><span style="color:#ABB2BF;">() {},</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">rootComponents</span><span style="color:#ABB2BF;">: [],</span></span>
<span class="line"><span style="color:#ABB2BF;">});</span></span>
<span class="line"></span></code></pre></div>`,13),C={class:"hint-container tip"},g=s("p",{class:"hint-container-title"},"提示",-1),_=s("p",null,"和配置文件不同，客户端配置文件不能通过命令行接口的选项来指定。",-1),E={href:"https://v2.vuepress.vuejs.org/zh/advanced/cookbook/usage-of-client-config.html",target:"_blank",rel:"noopener noreferrer"};function D(x,k){const p=o("CodeTabs"),l=o("ExternalLinkIcon");return d(),y("div",null,[u,n(p,{id:"13",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:t,value:r,isActive:i})=>[h]),tab1:a(({title:t,value:r,isActive:i})=>[F]),_:1}),s("div",A,[m,s("p",null,[e("前往 "),s("a",v,[e("配置参考"),n(l)]),e(" 查看所有 VuePress 配置。")])]),f,s("div",C,[g,_,s("p",null,[e("可以前往 "),s("a",E,[e("深入 > Cookbook > 客户端配置的使用方法"),n(l)]),e(" 来了解更多信息。")])])])}const P=B(b,[["render",D],["__file","config.html.vue"]]);export{P as default};