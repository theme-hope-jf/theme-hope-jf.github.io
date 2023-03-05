import{a3 as B,Z as d,_ as u,a4 as v,$ as l,a0 as i,a1 as s,a2 as n,a5 as a,D as c}from"./framework-61fc4e0a.js";const m={},b=s("p",null,"让你的 VuePress 站点中的 Markdown 文件支持 vue 交互演示。",-1),y=s("h2",{id:"配置",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),n(" 配置")],-1),A=s("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"// .vuepress/config.ts")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"import"),s("span",{style:{color:"#ABB2BF"}}," { "),s("span",{style:{color:"#E06C75"}},"defineUserConfig"),s("span",{style:{color:"#ABB2BF"}}," } "),s("span",{style:{color:"#C678DD"}},"from"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},'"vuepress"'),s("span",{style:{color:"#ABB2BF"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"import"),s("span",{style:{color:"#ABB2BF"}}," { "),s("span",{style:{color:"#E06C75"}},"hopeTheme"),s("span",{style:{color:"#ABB2BF"}}," } "),s("span",{style:{color:"#C678DD"}},"from"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},'"vuepress-theme-hope"'),s("span",{style:{color:"#ABB2BF"}},";")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"export"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#C678DD"}},"default"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#61AFEF"}},"defineUserConfig"),s("span",{style:{color:"#ABB2BF"}},"({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#E06C75"}},"theme"),s("span",{style:{color:"#ABB2BF"}},": "),s("span",{style:{color:"#61AFEF"}},"hopeTheme"),s("span",{style:{color:"#ABB2BF"}},"({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    "),s("span",{style:{color:"#E06C75"}},"plugins"),s("span",{style:{color:"#ABB2BF"}},": {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"      "),s("span",{style:{color:"#E06C75"}},"mdEnhance"),s("span",{style:{color:"#ABB2BF"}},": {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 启用 vue 交互演示")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        "),s("span",{style:{color:"#E06C75"}},"vuePlayground"),s("span",{style:{color:"#ABB2BF"}},": "),s("span",{style:{color:"#D19A66"}},"true"),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"      },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  }),")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"});")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("br"),s("br"),s("br"),s("br")]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),F=s("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"// .vuepress/config.js")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"import"),s("span",{style:{color:"#ABB2BF"}}," { "),s("span",{style:{color:"#E06C75"}},"mdEnhance"),s("span",{style:{color:"#ABB2BF"}}," } "),s("span",{style:{color:"#C678DD"}},"from"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},'"vuepress-plugin-md-enhance"'),s("span",{style:{color:"#ABB2BF"}},";")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"export"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#C678DD"}},"default"),s("span",{style:{color:"#ABB2BF"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#E06C75"}},"theme"),s("span",{style:{color:"#ABB2BF"}},": "),s("span",{style:{color:"#61AFEF"}},"hopeTheme"),s("span",{style:{color:"#ABB2BF"}},"({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    "),s("span",{style:{color:"#E06C75"}},"plugins"),s("span",{style:{color:"#ABB2BF"}},": {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"      "),s("span",{style:{color:"#E06C75"}},"mdEnhance"),s("span",{style:{color:"#ABB2BF"}},": {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 启用 vue 交互演示")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        "),s("span",{style:{color:"#E06C75"}},"vuePlayground"),s("span",{style:{color:"#ABB2BF"}},": "),s("span",{style:{color:"#D19A66"}},"true"),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"      },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  }),")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"};")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("br"),s("br"),s("br")]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),g=a('<h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><p>要使用 Vue 交互演示，你应该使用一个名为 <code>vue-playground</code> 的容器。</p><p>在其中，你可以使用 3 个指令：</p><ul><li><code>@file 文件名</code> 紧跟文件的代码块</li><li><code>@import</code> 紧跟一个自定义“导入映射”的 json 块</li><li><code>@setting</code> 紧跟一个自定义设置的 json 块</li></ul><p>你可以查看以下案例以查看更多详细信息。</p><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2>',6),h=a(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: vue-playground Vue 交互演示</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">@file App.vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`vue</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">import { ref } from &quot;vue&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">const msg = ref(&quot;你好交互演示!&quot;);</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;h1&gt;{{ msg }}&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;input v-model=&quot;msg&quot; /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1),C=a(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: vue-playground 自定义导入与映射的 Vue 交互演示</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">@file App.vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`vue</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">import { ref } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#ABB2BF;">import Comp from &quot;./Comp.vue&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">const msg = ref(&quot;Hello Playground!&quot;);</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;h1&gt;{{ msg }}&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;input v-model=&quot;msg&quot; /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;Comp /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">@file Comp.vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`vue</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">import { useBattery } from &quot;@vueuse/core&quot;;</span></span>
<span class="line"><span style="color:#ABB2BF;">import { ref } from &quot;vue&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">const { charging, level } = useBattery();</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;h1&gt;Battery status&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;p&gt;Charging: {{ charging }}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;p&gt;Level: {{ level * 100 }}%&lt;/p&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">@import</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`json</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;imports&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;@vueuse/core&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;https://unpkg.com/@vueuse/core/index.mjs&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;@vueuse/shared&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;https://unpkg.com/@vueuse/shared/index.mjs&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;vue-demi&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;https://unpkg.com/vue-demi/lib/index.mjs&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">@setting</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`json</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;showCompileOutput&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1);function I(X,E){const p=c("CodeTabs"),e=c("VuePlayground");return d(),u("div",null,[b,v(" more "),y,l(p,{id:"7",data:[{title:"TS"},{title:"JS"}],"tab-id":"config"},{tab0:i(({title:o,value:t,isActive:r})=>[A]),tab1:i(({title:o,value:t,isActive:r})=>[F]),_:1}),g,l(e,{title:"Vue%20%E4%BA%A4%E4%BA%92%E6%BC%94%E7%A4%BA",key:"60553547",settings:"%7B%7D",files:"eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcblxuY29uc3QgbXNnID0gcmVmKFwi5L2g5aW95Lqk5LqS5ryU56S6IVwiKTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU%2BXG4gIDxoMT57eyBtc2cgfX08L2gxPlxuICA8aW5wdXQgdi1tb2RlbD1cIm1zZ1wiIC8%2BXG48L3RlbXBsYXRlPlxuIn0%3D"}),h,l(e,{title:"%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AF%BC%E5%85%A5%E4%B8%8E%E6%98%A0%E5%B0%84%E7%9A%84%20Vue%20%E4%BA%A4%E4%BA%92%E6%BC%94%E7%A4%BA",key:"435c4bd4",settings:"%7B%22showCompileOutput%22%3Atrue%7D",files:"eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcbmltcG9ydCBDb21wIGZyb20gXCIuL0NvbXAudnVlXCI7XG5cbmNvbnN0IG1zZyA9IHJlZihcIkhlbGxvIFBsYXlncm91bmQhXCIpO1xuPC9zY3JpcHQ%2BXG5cbjx0ZW1wbGF0ZT5cbiAgPGgxPnt7IG1zZyB9fTwvaDE%2BXG4gIDxpbnB1dCB2LW1vZGVsPVwibXNnXCIgLz5cbiAgPENvbXAgLz5cbjwvdGVtcGxhdGU%2BXG4iLCJDb21wLnZ1ZSI6IjxzY3JpcHQgc2V0dXA%2BXG5pbXBvcnQgeyB1c2VCYXR0ZXJ5IH0gZnJvbSBcIkB2dWV1c2UvY29yZVwiO1xuaW1wb3J0IHsgcmVmIH0gZnJvbSBcInZ1ZVwiO1xuXG5jb25zdCB7IGNoYXJnaW5nLCBsZXZlbCB9ID0gdXNlQmF0dGVyeSgpO1xuPC9zY3JpcHQ%2BXG5cbjx0ZW1wbGF0ZT5cbiAgPGgxPkJhdHRlcnkgc3RhdHVzPC9oMT5cbiAgPHA%2BQ2hhcmdpbmc6IHt7IGNoYXJnaW5nIH19PC9wPlxuICA8cD5MZXZlbDoge3sgbGV2ZWwgKiAxMDAgfX0lPC9wPlxuPC90ZW1wbGF0ZT5cbiIsImltcG9ydC1tYXAuanNvbiI6IntcbiAgXCJpbXBvcnRzXCI6IHtcbiAgICBcIkB2dWV1c2UvY29yZVwiOiBcImh0dHBzOi8vdW5wa2cuY29tL0B2dWV1c2UvY29yZS9pbmRleC5tanNcIixcbiAgICBcIkB2dWV1c2Uvc2hhcmVkXCI6IFwiaHR0cHM6Ly91bnBrZy5jb20vQHZ1ZXVzZS9zaGFyZWQvaW5kZXgubWpzXCIsXG4gICAgXCJ2dWUtZGVtaVwiOiBcImh0dHBzOi8vdW5wa2cuY29tL3Z1ZS1kZW1pL2xpYi9pbmRleC5tanNcIlxuICB9XG59XG4ifQ%3D%3D"}),C])}const x=B(m,[["render",I],["__file","vue-playground.html.vue"]]);export{x as default};
