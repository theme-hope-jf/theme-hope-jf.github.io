import{a3 as p,Z as i,_ as r,a4 as d,$ as u,a0 as e,a1 as s,a5 as t,D as B,a2 as a}from"./framework-61fc4e0a.js";const h={},v=s("p",null,"В этом руководстве представлены команды проекта VuePress.",-1),y=t(`<h2 id="общие-команды" tabindex="-1"><a class="header-anchor" href="#общие-команды" aria-hidden="true">#</a> Общие команды</h2><ul><li><code>vuepress dev [dir]</code> запустит сервер разработки, чтобы вы могли локально разрабатывать свой сайт VuePress.</li><li><code>vuepress build [dir]</code> соберет ваш сайт VuePress в статические файлы для последующего развертывания.</li></ul><div class="hint-container info"><p class="hint-container-title">Использование шаблона</p><p>Если вы используете шаблон VuePress Theme Hope, вы можете найти следующие три команды в <code>package.json</code>:</p><div class="language-json" data-ext="json"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;scripts&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;docs:build&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;vuepress build docs&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;docs:clean-dev&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;vuepress dev docs --clean-cache&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;docs:dev&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;vuepress dev docs&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre></div><p>Это означает, что вы можете использовать:</p><ul><li><code>pnpm docs:dev</code> запускает сервер разработки</li><li><code>pnpm docs:build</code> собирает проект и выводит</li><li><code>pnpm docs:clean-dev</code> для очистки кеша и запуска сервера разработки</li></ul></div><div class="hint-container info"><p class="hint-container-title">Завершить DevServer</p><p>Чтобы завершить работу сервера разработки, нажмите в терминале дважды <code>Ctrl + C</code>.</p></div><h2 id="обновить-версию" tabindex="-1"><a class="header-anchor" href="#обновить-версию" aria-hidden="true">#</a> Обновить версию</h2><p>Если вам нужно обновить тему и версию VuePress, выполните следующую команду:</p>`,6),m=s("div",{class:"language-bash","data-ext":"sh"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"pnpm "),s("span",{style:{color:"#98C379"}},"dlx"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},"vp-update")]),a(`
`),s("span",{class:"line"})])])],-1),_=s("div",{class:"language-bash","data-ext":"sh"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"yarn "),s("span",{style:{color:"#98C379"}},"dlx"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},"vp-update")]),a(`
`),s("span",{class:"line"})])])],-1),b=s("div",{class:"language-bash","data-ext":"sh"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"npx "),s("span",{style:{color:"#98C379"}},"vp-update")]),a(`
`),s("span",{class:"line"})])])],-1),g=t('<div class="hint-container warning"><p class="hint-container-title">Примечание</p><p>Any official plugins starting with <code>@vuepress/plugin-</code> should be the same version as VuePress.</p><p>I.E.: if you are using <code>@vuepress/plugin-search</code> and <code>@vuepress/utils</code> , you should ensure they have the same version number as <code>vuepress</code>.</p><p>Also, if you&#39;re using another third-party plugin, make sure it&#39;s compatible with the version of VuePress you&#39;re upgrading to.</p></div>',1);function A(C,x){const c=B("CodeTabs");return i(),r("div",null,[v,d(" more "),y,u(c,{id:"56",data:[{title:"pnpm"},{title:"yarn"},{title:"npm"}],"tab-id":"shell"},{tab0:e(({title:n,value:o,isActive:l})=>[m]),tab1:e(({title:n,value:o,isActive:l})=>[_]),tab2:e(({title:n,value:o,isActive:l})=>[b]),_:1}),g])}const f=p(h,[["render",A],["__file","command.html.vue"]]);export{f as default};