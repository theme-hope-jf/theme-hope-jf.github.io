import{a2 as i,Y as p,Z as c,a0 as s,a1 as n,_ as e,a4 as a,F as d}from"./framework-aea579b9.js";const o={},r=s("h2",{id:"传统模式",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#传统模式","aria-hidden":"true"},"#"),n(" 传统模式")],-1),t=s("p",null,[n("你可以在调用 "),s("code",null,"mdEnhancePlugin"),n(" 时传递第二个参数 "),s("code",null,"true"),n(" 以启用传统模式，插件将尝试以 V1 行为运行。")],-1),v=s("h2",{id:"新功能",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#新功能","aria-hidden":"true"},"#"),n(" 新功能")],-1),B=a(`<li><p>Markdown 链接检查</p><p>该插件现在检查你的 Markdown 链接，并在检测到损坏的链接时警告你。</p><p>你可以通过 <code>linkCheck</code> 选项控制此行为</p></li><li><p>图像标记支持</p><p>通过 <code>imgMark</code> 选项使用 <code>#light</code> 和 <code>#dark</code> 后缀标记图像以在日间模式或夜间模式下显示它们。</p></li><li><p><code>v-pre</code> 支持</p><p>VuePress 2 从 <code>@vuepress/core</code> 中删除了以下容器支持，因此添加了 <code>vPre</code> 选项</p><div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: v-pre</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">一些 {{vue 语法}}。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span></code></pre></div></li>`,3),u=s("p",null,"Chart.js 支持",-1),m=s("code",null,"chart",-1),b={href:"https://www.chartjs.org/docs/latest/",target:"_blank",rel:"noopener noreferrer"},y=a(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: chart 标题</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`json</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// chart.js 配置</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::: chart 标题</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`js</span></span>
<span class="line"><span style="color:#E5C07B;">module</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">exports</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// chart.js 配置</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),F=s("p",null,"ECharts 支持",-1),h=s("code",null,"echarts",-1),A={href:"https://echarts.apache.org/en/index.html",target:"_blank",rel:"noopener noreferrer"},_=a(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: echarts 标题</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`json</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// echarts 配置</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::: echarts 标题</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`js</span></span>
<span class="line"><span style="color:#E5C07B;">module</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">exports</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// echarts 配置</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),g=a("<li><p>包含文件支持</p><p>新增 <code>include</code> 选项使用 <code>@include()</code> 将其他文件内容导入到 Markdown 中。</p><p>使用 <code>@include(filename)</code> 导入文件。</p><p>如果要部分导入文件，你可以指定导入的行数</p><ul><li><code>@include(filename{start-end})</code></li><li><code>@include(filename{start-})</code></li><li><code>@include(filename{-end})</code></li></ul><p>同时你也可以导入文件区域:</p><ul><li><code>@include(filename#region)</code></li></ul></li><li><p>选项卡支持</p><p>新增 <code>tabs</code> 选项通过 <code>tabs</code> 容器创建选项卡。</p></li>",2),k=a(`<h2 id="变更" tabindex="-1"><a class="header-anchor" href="#变更" aria-hidden="true">#</a> 变更</h2><ul><li><p>重命名 <code>codegroup</code> 为 <code>codetabs</code></p></li><li><p>现在所有选项均默认不开启</p></li><li><p>代码演示语法变更</p><p>旧语法:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: demo Title</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!-- demo content --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::: demo [</span><span style="color:#61AFEF;">vue</span><span style="color:#ABB2BF;">] Title</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!-- demo content --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::: demo [</span><span style="color:#61AFEF;">react</span><span style="color:#ABB2BF;">] Title</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!-- demo content --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新语法:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: normal-demo Title</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!-- demo content --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::: vue-demo Title</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!-- demo content --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::: react-demo Title</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!-- demo content --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>代码组语法变更</p><p>旧语法:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">:::: code-group</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::: code-group-item pnpm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`bash</span></span>
<span class="line"><span style="color:#ABB2BF;">pnpm </span><span style="color:#98C379;">create</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">vuepress-theme-hope</span><span style="color:#ABB2BF;"> [dir]</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::: code-group-item npm:active</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`bash</span></span>
<span class="line"><span style="color:#ABB2BF;">npm </span><span style="color:#98C379;">init</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">vuepress-theme-hope</span><span style="color:#ABB2BF;"> [dir]</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新语法:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: code-tabs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">@tab pnpm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`bash</span></span>
<span class="line"><span style="color:#ABB2BF;">pnpm </span><span style="color:#98C379;">create</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">vuepress-theme-hope</span><span style="color:#ABB2BF;"> [dir]</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">@tab:active npm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`bash</span></span>
<span class="line"><span style="color:#ABB2BF;">npm </span><span style="color:#98C379;">init</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">vuepress-theme-hope</span><span style="color:#ABB2BF;"> [dir]</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="移除的选项" tabindex="-1"><a class="header-anchor" href="#移除的选项" aria-hidden="true">#</a> 移除的选项</h2><ul><li><p><code>enableAll</code> 被移除</p><p>有太多不知道自己在做什么的菜鸟用户，他们只是启用此选项而没有使用提供的所有功能，但他们抱怨加载速度。</p></li><li><p><code>lineNumbers</code> 被移除</p><p>VuePress 2 现在支持每个代码块的行号配置。</p></li><li><p><code>imageFix</code> 被移除</p><p>Mr.Hope 已经做了一个 PR 来修复 Markdown 中损坏的图片链接</p></li></ul>`,4);function f(x,E){const l=d("ExternalLinkIcon");return p(),c("div",null,[r,t,v,s("ul",null,[B,s("li",null,[u,s("p",null,[n("新增 "),m,n(" 选项提供 "),s("a",b,[n("chart.js"),e(l)]),n(" 支持")]),y]),s("li",null,[F,s("p",null,[n("新增 "),h,n(" 选项提供 "),s("a",A,[n("ECharts"),e(l)]),n(" 支持。")]),_]),g]),k])}const w=i(o,[["render",f],["__file","migration.html.vue"]]);export{w as default};
