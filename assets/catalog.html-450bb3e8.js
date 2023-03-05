import{a3 as r,Z as i,_ as u,a1 as a,a2 as e,$ as o,a0 as c,a4 as t,a5 as l,D as s}from"./framework-61fc4e0a.js";const p={},_=a("code",null,"vuepress-plugin-catalog",-1),h=a("code",null,"README.md",-1),g=l('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>你可以在主题选项中使用 <code>plugin.autoCatalog</code> 来控制此功能。 如果要禁用它，请将 <code>plugin.autoCatalog</code> 设置为 <code>false</code>。</p><p>你可以使用 <code>plugin.autoCatalog.exclude</code> 从目录生成中排除一些文件夹，也可以使用 <code>plugin.autoCatalog.frontmatter</code> 来控制 frontmatter 的生成。</p>',3),m=a("h2",{id:"示例",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#示例","aria-hidden":"true"},"#"),e(" 示例")],-1),f=a("p",null,"主页目录:",-1),C={class:"catalog-display-container"},k=l(`<div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;AutoCatalog base=&#39;/zh/&#39; /&gt;</span></span>
<span class="line"></span></code></pre></div>`,1);function x(b,v){const n=s("ProjectLink"),d=s("AutoCatalog");return i(),u("div",null,[a("p",null,[e("VuePress Theme Hope 默认使用 "),o(n,{name:"auto-catalog",path:"/zh/"},{default:c(()=>[_]),_:1}),e(" 为每个文件夹自动生成带有目录的 "),h,e("。")]),t(" more "),g,a("p",null,[e("有关详细信息，请参阅 "),o(n,{name:"auto-catalog",path:"/zh/"},{default:c(()=>[e("Auto Catalog 插件文档")]),_:1}),e("。")]),m,f,t(" markdownlint-disable MD033 "),a("div",C,[o(d,{base:"/zh/"})]),t(" markdownlint-enable MD033 "),k])}const B=r(p,[["render",x],["__file","catalog.html.vue"]]);export{B as default};