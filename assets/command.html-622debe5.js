import{a3 as p,Z as r,_ as d,a4 as i,$ as u,a0 as e,a1 as s,a5 as c,D as B,a2 as a}from"./framework-61fc4e0a.js";const h={},v=s("p",null,"本教程介绍 VuePress 项目命令。",-1),y=c(`<h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><ul><li><code>vuepress dev [dir]</code> 会启动一个开发服务器，以便让你在本地开发你的 VuePress 站点。</li><li><code>vuepress build [dir]</code> 会将你的 VuePress 站点构建成静态文件，以便你进行后续部署。</li></ul><div class="hint-container info"><p class="hint-container-title">使用模板</p><p>如果你在使用 VuePress Theme Hope 模板，你可以在 <code>package.json</code> 中发现下列三个命令:</p><div class="language-json" data-ext="json"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;scripts&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;docs:build&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;vuepress build src&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;docs:clean-dev&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;vuepress dev src --clean-cache&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;docs:dev&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;vuepress dev src&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre></div><p>这意味着你可以使用:</p><ul><li><code>pnpm docs:dev</code> 启动开发服务器</li><li><code>pnpm docs:build</code> 构建项目并输出</li><li><code>pnpm docs:clean-dev</code> 清除缓存并启动开发服务器</li></ul></div><div class="hint-container tip"><p class="hint-container-title">终止开发服务器</p><p>如果你需要终止开发服务器，请点击终端，并连续两次按下 <code>Ctrl + C</code>。</p></div><h2 id="升级版本" tabindex="-1"><a class="header-anchor" href="#升级版本" aria-hidden="true">#</a> 升级版本</h2><p>如果你需要升级主题和 VuePress 版本，请执行以下命令:</p>`,6),_=s("div",{class:"language-bash","data-ext":"sh"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"pnpm "),s("span",{style:{color:"#98C379"}},"dlx"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},"vp-update")]),a(`
`),s("span",{class:"line"})])])],-1),b=s("div",{class:"language-bash","data-ext":"sh"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"yarn "),s("span",{style:{color:"#98C379"}},"dlx"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},"vp-update")]),a(`
`),s("span",{class:"line"})])])],-1),m=s("div",{class:"language-bash","data-ext":"sh"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"npx "),s("span",{style:{color:"#98C379"}},"vp-update")]),a(`
`),s("span",{class:"line"})])])],-1),A=c('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>任何以 <code>@vuepress/</code> 开头的官方包应该和 VuePress 保持相同版本。</p><p>比如，如果你正在使用 <code>@vuepress/plugin-search</code> 和 <code>@vuepress/utils</code>，你应该确保他们和 <code>vuepress</code> 版本相同</p><p>另外，如果你使用了其他第三方插件，请确保它兼容你要升级到的 VuePress 版本。</p></div>',1);function C(x,F){const t=B("CodeTabs");return r(),d("div",null,[v,i(" more "),y,u(t,{id:"56",data:[{title:"pnpm"},{title:"yarn"},{title:"npm"}],"tab-id":"shell"},{tab0:e(({title:n,value:o,isActive:l})=>[_]),tab1:e(({title:n,value:o,isActive:l})=>[b]),tab2:e(({title:n,value:o,isActive:l})=>[m]),_:1}),A])}const k=p(h,[["render",C],["__file","command.html.vue"]]);export{k as default};
