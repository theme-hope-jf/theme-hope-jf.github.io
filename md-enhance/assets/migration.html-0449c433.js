import{a2 as i,Y as p,Z as c,a0 as s,a1 as n,_ as l,a4 as a,F as o}from"./framework-aea579b9.js";const d={},r=s("h2",{id:"legacy-mode",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#legacy-mode","aria-hidden":"true"},"#"),n(" Legacy Mode")],-1),t=s("p",null,[n("You can pass the second argument "),s("code",null,"true"),n(" to enable legacy mode when calling "),s("code",null,"mdEnhancePlugin"),n(", and the plugin will try to run with V1 behavior.")],-1),v=s("h2",{id:"new-features",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#new-features","aria-hidden":"true"},"#"),n(" New Features")],-1),B=a(`<li><p>Markdown link check</p><p>The plugin now check your Markdown links and warn you when broken links are detected.</p><p>You can control this behavior with <code>linkCheck</code> option</p></li><li><p>image mark support</p><p>Use <code>#light</code> and <code>#dark</code> suffix to mark images to display them in light mode or dark mode via <code>imgMark</code> option.</p></li><li><p><code>v-pre</code> support</p><p>The following container support is removed from <code>@vuepress/core</code>, so <code>vPre</code> option is added</p><div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: v-pre</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">Some {{vue syntax}}.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span></code></pre></div></li>`,3),u=s("p",null,"Chart.js support",-1),m={href:"https://www.chartjs.org/docs/latest/",target:"_blank",rel:"noopener noreferrer"},b=s("code",null,"chart",-1),y=a(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: chart Title</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`json</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// chart.js config</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::: chart Title</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`js</span></span>
<span class="line"><span style="color:#E5C07B;">module</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">exports</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// chart.js config</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),h=s("p",null,"ECharts support",-1),F={href:"https://echarts.apache.org/en/index.html",target:"_blank",rel:"noopener noreferrer"},A=s("code",null,"echarts",-1),g=a(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: echarts Title</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`json</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// chart.js config</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::: echarts Title</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`js</span></span>
<span class="line"><span style="color:#E5C07B;">module</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">exports</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// chart.js config</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),k=a("<li><p>content include support</p><p>use <code>@include()</code> to include other file content in Markdown via <code>include</code> options.</p><p>Use <code>@include(filename)</code> to include a file.</p><p>To partially import the file, you can specify the range of lines to be included:</p><ul><li><code>@include(filename{start-end})</code></li><li><code>@include(filename{start-})</code></li><li><code>@include(filename{-end})</code></li></ul><p>Also you can include file region:</p><ul><li><code>@include(filename#region)</code></li></ul></li><li><p>tabs support</p><p>Use <code>tabs</code> container to create tabs via <code>tabs</code> option.</p></li>",2),f=a(`<h2 id="changed" tabindex="-1"><a class="header-anchor" href="#changed" aria-hidden="true">#</a> Changed</h2><ul><li><p>renamed <code>codegroup</code> to <code>codetabs</code></p></li><li><p>Now all options are disabled by default</p></li><li><p>Code demo syntax changed</p><p>Before:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: demo Title</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: normal-demo Title</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Code Group changed to code tab</p><p>Before:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">:::: code-group</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: code-tabs</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="removed-options" tabindex="-1"><a class="header-anchor" href="#removed-options" aria-hidden="true">#</a> Removed Options</h2><ul><li><p><code>enableAll</code> removed</p><p>There are too many noob users who don’t know what they are doing, and they just enable this option without using all the feature provided, yet they complain about load speed.</p></li><li><p><code>lineNumbers</code> removed</p><p>VuePress 2 supports line number config per code block now.</p></li><li><p><code>imageFix</code> removed</p><p>Mr.Hope already made a PR to fix broken image links in Markdown, so it’s no longer needed</p></li></ul>`,4);function _(x,w){const e=o("ExternalLinkIcon");return p(),c("div",null,[r,t,v,s("ul",null,[B,s("li",null,[u,s("p",null,[n("Adds "),s("a",m,[n("chart.js"),l(e)]),n(" support via "),b,n(" option")]),y]),s("li",null,[h,s("p",null,[n("Adds "),s("a",F,[n("ECharts"),l(e)]),n(" support via "),A,n(" option")]),g]),k]),f])}const E=i(d,[["render",_],["__file","migration.html.vue"]]);export{E as default};
