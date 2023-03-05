import{a3 as i,Z as n,_ as d,a1 as e,a2 as o,$ as c,a4 as a,a5 as r,D as l}from"./framework-61fc4e0a.js";const s={},p={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin/git.html",target:"_blank",rel:"noopener noreferrer"},h=e("code",null,"@vuepress/plugin-git",-1),u=e("p",null,"主题同时根据侧边栏配置提供上一页和下一页的导航按钮。",-1),_=e("h2",{id:"基于-git-的信息",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#基于-git-的信息","aria-hidden":"true"},"#"),o(" 基于 Git 的信息")],-1),g=e("code",null,"vuepress-theme-hope",-1),m={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin/git.html",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"@vuepress/plugin-git",-1),v=r('<p>插件会通过页面文件最后一次 <code>git</code> 提交的 UNIX 时间戳 (ms) 来自动生成页面创建时间和最后更新时间，同时根据提交记录生成贡献者。</p><p>主题将以合适的日期格式将最后更新时间显示在每一页的底部，同时显示该页面所有贡献者。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>主题会使用 <code>Date.toLocaleString(pageLang)</code> 自动根据当前语言，本地化最后更新时间的表述文字。</p></div><div class="hint-container warning"><p class="hint-container-title">使用限制</p><ol><li><p>由于贡献者、最后更新时间以及文件创建日期基于 <code>git</code> , 所以你只能在一个基于 <code>git</code> 的项目中启用它。</p></li><li><p>由于使用的时间戳来自 git commit，因此它将仅在给定页的第一次提交之后显示，并且仅在该页面后续提交更改时更新。</p></li><li><p>由于 <code>git</code> 插件需要调用 Git 程序并且涉及文件 IO，因此此功能会对启动与热更新速度造成严重影响，所以默认情况下<strong>主题不会在开发模式下启用</strong>。如有需要，请在主题选项中设置 <code>plugins.git: true</code> 或 <code>hotReload: true</code>。</p></li></ol></div><h2 id="编辑此页链接" tabindex="-1"><a class="header-anchor" href="#编辑此页链接" aria-hidden="true">#</a> 编辑此页链接</h2><p>你可以通过在主题选项中中设置如下项目，来自动为每个页面生成编辑此页链接:</p><ul><li><code>docsRepo</code>: 文档仓库地址，默认同主题选项中的 <code>repo</code></li><li><code>docsDir</code>: 文档在仓库中的目录，默认为根目录</li><li><code>docsBranch</code>: 文档存放的分值，默认为 <code>&quot;main&quot;</code></li></ul><h2 id="显示控制" tabindex="-1"><a class="header-anchor" href="#显示控制" aria-hidden="true">#</a> 显示控制</h2><p>如果你想要全局禁用这些项目的显示，请在主题选项中中，将以下对应项目设置为 <code>false</code>。你也可以通过 <code>YAML front matter</code> 中设置这些项目来启用/禁用指定页面:</p><ul><li><code>lastUpdated</code>: 是否显示页面最后更新时间</li><li><code>contributors</code>: 是否显示页面贡献者</li><li><code>editLink</code>: 是否展示编辑此页链接</li></ul>',10);function x(k,b){const t=l("ExternalLinkIcon");return n(),d("div",null,[e("p",null,[o("主题通过 "),e("a",p,[h,c(t)]),o(" 插件在页面底部显示页面的最后更新时间与贡献者，并提供了“编辑此页”按钮的支持。")]),u,a(" more "),_,e("p",null,[g,o(" 通过内置 "),e("a",m,[f,c(t)]),o(" 插件，实现了页面创建时间、最后更新时间与贡献者的自动生成。")]),v])}const N=i(s,[["render",x],["__file","meta.html.vue"]]);export{N as default};
