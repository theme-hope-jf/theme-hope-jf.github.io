import{a3 as r,Z as t,_ as c,a1 as n,a2 as s,$ as e,a0 as i,a5 as l,D as o}from"./framework-61fc4e0a.js";const B={},h=n("h2",{id:"介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),s(" 介绍")],-1),u={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin-api.html",target:"_blank",rel:"noopener noreferrer"},d=n("h2",{id:"社区插件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#社区插件","aria-hidden":"true"},"#"),s(" 社区插件")],-1),_={href:"https://www.npmjs.com/search?q=keywords:vuepress-plugin",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.npmjs.com/search?q=%40vuepress%20keywords%3Aplugin",target:"_blank",rel:"noopener noreferrer"},g={href:"https://v2.vuepress.vuejs.org/zh/reference/config.html#plugins",target:"_blank",rel:"noopener noreferrer"},f={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin/google-analytics.html",target:"_blank",rel:"noopener noreferrer"},v=l(`<div class="language-javascript" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">googleAnalyticsPlugin</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;@vuepress/plugin-google-analytics&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">plugins</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">googleAnalyticsPlugin</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;G-XXXXXXXXXX&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    }),</span></span>
<span class="line"><span style="color:#ABB2BF;">  ],</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre></div>`,1),A={class:"hint-container tip"},F=n("p",{class:"hint-container-title"},"提示",-1),m=n("p",null,"大部分插件只能使用一次，如果同一个插件被多次使用，那么只有最后一次会生效。",-1),k={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin/container.html",target:"_blank",rel:"noopener noreferrer"},D=n("h2",{id:"本地插件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#本地插件","aria-hidden":"true"},"#"),s(" 本地插件")],-1),C=n("p",null,"如果你想要使用自己的插件，但是又不想发布它，你可以创建一个本地插件。",-1),E={href:"https://v2.vuepress.vuejs.org/zh/reference/config.html#%E6%8F%92%E4%BB%B6-api",target:"_blank",rel:"noopener noreferrer"},b=l(`<p>但是如果你在配置文件中要做的事情太多了，你可以考虑将它们提取到单独的插件中，然后在你的配置文件中使用它们:</p><div class="language-javascript" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">myPlugin</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;./path/to/my-plugin.js&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">plugins</span><span style="color:#ABB2BF;">: [</span><span style="color:#61AFEF;">myPlugin</span><span style="color:#ABB2BF;">()],</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre></div>`,2),x={href:"https://v2.vuepress.vuejs.org/zh/advanced/plugin.html",target:"_blank",rel:"noopener noreferrer"};function j(X,w){const a=o("ExternalLinkIcon"),p=o("RouterLink");return t(),c("div",null,[h,n("p",null,[s("借助于 "),n("a",u,[s("插件 API"),e(a)]),s(" ， VuePress 插件可以为你提供各种不同的功能。")]),d,n("p",null,[s("社区用户创建了很多插件，并将它们发布到了 "),n("a",_,[s("NPM"),e(a)]),s(" 上。 VuePress 团队也在 "),n("a",y,[s("@vuepress"),e(a)]),s(" Scope 下维护了一些官方插件。查看插件本身的文档可以获取更详细的指引。")]),n("p",null,[s("一般而言，你需要将插件放入到 "),n("a",g,[s("plugins"),e(a)]),s(" 配置项中来使用它。举例来说，你可以使用 "),n("a",f,[s("@vuepress/plugin-google-analytics"),e(a)]),s(" 来使用 Google Analytics :")]),v,n("div",A,[F,m,n("p",null,[s("然而，部分插件是可以被多次使用的 (例如 "),n("a",k,[s("@vuepress/plugin-container"),e(a)]),s(")，你应该查看插件本身的文档来获取详细指引。")])]),D,C,n("p",null,[s("推荐你直接将 "),e(p,{to:"/zh/cookbook/vuepress/config.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},{default:i(()=>[s("配置文件")]),_:1}),s(" 作为插件使用，因为 "),n("a",E,[s("几乎所有的插件 API 都可以在配置文件中使用"),e(a)]),s("，这在绝大多数场景下都更为方便。")]),b,n("p",null,[s("前往 "),n("a",x,[s("深入 > 开发插件"),e(a)]),s(" 学习如何开发你自己的插件。")])])}const q=r(B,[["render",j],["__file","plugin.html.vue"]]);export{q as default};
