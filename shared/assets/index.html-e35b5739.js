import{N as r}from"./NetlifyBadge-6e87a1a5.js";import{c as d,Y as i,Z as p,_ as n,$ as a,u as h,a0 as e,a1 as s,a2 as B,F as u,a3 as _}from"./framework-c87634b9.js";import"./app-12a82d6a.js";const y=e("h2",{id:"安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),s(" 安装")],-1),v=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#ABB2BF"}},"pnpm "),e("span",{style:{color:"#98C379"}},"add"),e("span",{style:{color:"#ABB2BF"}}," "),e("span",{style:{color:"#D19A66"}},"-D"),e("span",{style:{color:"#ABB2BF"}}," "),e("span",{style:{color:"#98C379"}},"vuepress-shared")]),s(`
`),e("span",{class:"line"})])])],-1),m=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#ABB2BF"}},"yarn "),e("span",{style:{color:"#98C379"}},"add"),e("span",{style:{color:"#ABB2BF"}}," "),e("span",{style:{color:"#D19A66"}},"-D"),e("span",{style:{color:"#ABB2BF"}}," "),e("span",{style:{color:"#98C379"}},"vuepress-shared")]),s(`
`),e("span",{class:"line"})])])],-1),b=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#ABB2BF"}},"npm "),e("span",{style:{color:"#98C379"}},"i"),e("span",{style:{color:"#ABB2BF"}}," "),e("span",{style:{color:"#D19A66"}},"-D"),e("span",{style:{color:"#ABB2BF"}}," "),e("span",{style:{color:"#98C379"}},"vuepress-shared")]),s(`
`),e("span",{class:"line"})])])],-1),x=B('<h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><div class="hint-container warning"><p class="hint-container-title">注意</p><p>VuePress 同时运行在 Node.js 端和浏览器端，我们称之为 <code>node</code> 和 <code>client</code>。</p><p>因此，你应该注意导入正确的文件，因为 Node.js 具有内置模块并能够访问文件系统，并且浏览器具有全局变量，如 <code>window</code> 或 <code>navigator</code>。</p></div><ul><li>在 Node 端，你应该从 <code>vuepress-shared/node</code> 导入函数。</li><li>在客户端，你应该从 <code>vuepress-shared/client</code> 导入函数。</li></ul>',3),A=d({__name:"index.html",setup(f){return(g,k)=>{const c=u("CodeTabs");return i(),p("div",null,[y,n(c,{id:"3",data:[{title:"pnpm"},{title:"yarn"},{title:"npm"}],"tab-id":"shell"},{tab0:a(({title:o,value:l,isActive:t})=>[v]),tab1:a(({title:o,value:l,isActive:t})=>[m]),tab2:a(({title:o,value:l,isActive:t})=>[b]),_:1}),x,n(h(r),{alt:"通过 Netlify 部署"})])}}}),D=_(A,[["__file","index.html.vue"]]);export{D as default};
