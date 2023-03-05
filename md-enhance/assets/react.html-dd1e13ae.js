import{a2 as p,Y as c,Z as B,_ as e,$ as o,a4 as n,F as t,a0 as s,a1 as l}from"./framework-aea579b9.js";const r={},i=n('<h2 id="格式" tabindex="-1"><a class="header-anchor" href="#格式" aria-hidden="true">#</a> 格式</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: react-demo 可选的标题文字</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF;">```js</span></span>\n<span class="line"><span style="color:#7F848E;font-style:italic;">// 放置脚本，并通过 `export default` 导出你的 react 组件</span></span>\n<span class="line"><span style="color:#ABB2BF;">```</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF;">```css</span></span>\n<span class="line"><span style="color:#7F848E;font-style:italic;">/* 你的 css 内容 */</span></span>\n<span class="line"><span style="color:#ABB2BF;">```</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF;">```json</span></span>\n<span class="line"><span style="color:#7F848E;font-style:italic;">// 配置 (可选)</span></span>\n<span class="line"><span style="color:#ABB2BF;">```</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF;">:::</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意事项</p><ul><li>使用 React 的时候，为了解析 JSX 必须引入 Babel，此过程由插件自动完成。</li><li>必须将组件通过 <code>export default</code> 默认导出</li><li>我们使用 &quot;ShadowDOM&quot; 进行样式隔离，并已经将 <code>document</code> 替换为了 <code>shadowRoot</code> 对象。如果需要访问页面的 document，请访问 <code>window.document</code>。</li></ul></div><h2 id="演示" tabindex="-1"><a class="header-anchor" href="#演示" aria-hidden="true">#</a> 演示</h2>',4),y=s("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"const"),s("span",{style:{color:"#ABB2BF"}}," { "),s("span",{style:{color:"#E5C07B"}},"useState"),s("span",{style:{color:"#ABB2BF"}}," } "),s("span",{style:{color:"#56B6C2"}},"="),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#E06C75"}},"React"),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"export"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#C678DD"}},"default"),s("span",{style:{color:"#ABB2BF"}}," () "),s("span",{style:{color:"#C678DD"}},"=>"),s("span",{style:{color:"#ABB2BF"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#C678DD"}},"const"),s("span",{style:{color:"#ABB2BF"}}," ["),s("span",{style:{color:"#E5C07B"}},"message"),s("span",{style:{color:"#ABB2BF"}},", "),s("span",{style:{color:"#E5C07B"}},"setMessage"),s("span",{style:{color:"#ABB2BF"}},"] "),s("span",{style:{color:"#56B6C2"}},"="),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#61AFEF"}},"useState"),s("span",{style:{color:"#ABB2BF"}},"("),s("span",{style:{color:"#98C379"}},'" 强大"'),s("span",{style:{color:"#ABB2BF"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#C678DD"}},"const"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#61AFEF"}},"handler"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#56B6C2"}},"="),s("span",{style:{color:"#ABB2BF"}}," () "),s("span",{style:{color:"#C678DD"}},"=>"),s("span",{style:{color:"#ABB2BF"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    "),s("span",{style:{color:"#61AFEF"}},"setMessage"),s("span",{style:{color:"#ABB2BF"}},"("),s("span",{style:{color:"#98C379"}},"`十分"),s("span",{style:{color:"#C678DD"}},"${"),s("span",{style:{color:"#E06C75"}},"message"),s("span",{style:{color:"#C678DD"}},"}"),s("span",{style:{color:"#98C379"}},"`"),s("span",{style:{color:"#ABB2BF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  };")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#C678DD"}},"return"),s("span",{style:{color:"#ABB2BF"}}," (")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    <"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#D19A66","font-style":"italic"}},"className"),s("span",{style:{color:"#56B6C2"}},"="),s("span",{style:{color:"#98C379"}},'"box"'),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"      <"),s("span",{style:{color:"#E06C75"}},"code"),s("span",{style:{color:"#ABB2BF"}},">vuepress-theme-hope</"),s("span",{style:{color:"#E06C75"}},"code"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"      <"),s("span",{style:{color:"#E06C75"}},"span"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#D19A66","font-style":"italic"}},"id"),s("span",{style:{color:"#56B6C2"}},"="),s("span",{style:{color:"#98C379"}},'"powerful"'),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#D19A66","font-style":"italic"}},"onClick"),s("span",{style:{color:"#56B6C2"}},"="),s("span",{style:{color:"#C678DD"}},"{"),s("span",{style:{color:"#E06C75"}},"handler"),s("span",{style:{color:"#C678DD"}},"}"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        "),s("span",{style:{color:"#C678DD"}},"{"),s("span",{style:{color:"#E06C75"}},"message"),s("span",{style:{color:"#C678DD"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"      </"),s("span",{style:{color:"#E06C75"}},"span"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    </"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"};")]),l(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),d=s("div",{class:"language-css","data-ext":"css"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D19A66"}},".box"),s("span",{style:{color:"#C678DD"}}," "),s("span",{style:{color:"#61AFEF"}},"#powerful"),s("span",{style:{color:"#ABB2BF"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  color: "),s("span",{style:{color:"#D19A66"}},"blue"),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"}")]),l(`
`),s("span",{class:"line"})])])],-1),A=n(`<details class="hint-container details"><summary>代码</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: react-demo 一个函数式 React Demo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`js</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">useState</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">React</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> () </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> [</span><span style="color:#E5C07B;">message</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">setMessage</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">useState</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot; 强大&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">handler</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> () </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">setMessage</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">\`十分</span><span style="color:#C678DD;">\${</span><span style="color:#E06C75;">message</span><span style="color:#C678DD;">}</span><span style="color:#98C379;">\`</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> (</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;font-style:italic;">className</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;box&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">code</span><span style="color:#ABB2BF;">&gt;vuepress-theme-hope&lt;/</span><span style="color:#E06C75;">code</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">span</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;font-style:italic;">id</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;powerful&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;font-style:italic;">onClick</span><span style="color:#56B6C2;">=</span><span style="color:#C678DD;">{</span><span style="color:#E06C75;">handler</span><span style="color:#C678DD;">}</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">{</span><span style="color:#E06C75;">message</span><span style="color:#C678DD;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;/</span><span style="color:#E06C75;">span</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  );</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`css</span></span>
<span class="line"><span style="color:#D19A66;">.box</span><span style="color:#C678DD;"> </span><span style="color:#61AFEF;">#powerful</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">blue</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1),F=s("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"export"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#C678DD"}},"default"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#C678DD"}},"class"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#E5C07B"}},"App"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#C678DD"}},"extends"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#E5C07B"}},"React"),s("span",{style:{color:"#ABB2BF"}},"."),s("span",{style:{color:"#E5C07B"}},"Component"),s("span",{style:{color:"#ABB2BF"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#C678DD"}},"constructor"),s("span",{style:{color:"#ABB2BF"}},"("),s("span",{style:{color:"#E06C75","font-style":"italic"}},"props"),s("span",{style:{color:"#ABB2BF"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    "),s("span",{style:{color:"#E5C07B","font-style":"italic"}},"super"),s("span",{style:{color:"#ABB2BF"}},"("),s("span",{style:{color:"#E06C75"}},"props"),s("span",{style:{color:"#ABB2BF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    "),s("span",{style:{color:"#E5C07B"}},"this"),s("span",{style:{color:"#ABB2BF"}},"."),s("span",{style:{color:"#E06C75"}},"state"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#56B6C2"}},"="),s("span",{style:{color:"#ABB2BF"}}," { "),s("span",{style:{color:"#E06C75"}},"message"),s("span",{style:{color:"#ABB2BF"}},": "),s("span",{style:{color:"#98C379"}},'"强大"'),s("span",{style:{color:"#ABB2BF"}}," };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#61AFEF"}},"handler"),s("span",{style:{color:"#ABB2BF"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    "),s("span",{style:{color:"#E5C07B"}},"this"),s("span",{style:{color:"#ABB2BF"}},"."),s("span",{style:{color:"#61AFEF"}},"setState"),s("span",{style:{color:"#ABB2BF"}},"(("),s("span",{style:{color:"#E06C75","font-style":"italic"}},"state"),s("span",{style:{color:"#ABB2BF"}},") "),s("span",{style:{color:"#C678DD"}},"=>"),s("span",{style:{color:"#ABB2BF"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"      "),s("span",{style:{color:"#E06C75"}},"message"),s("span",{style:{color:"#ABB2BF"}},": "),s("span",{style:{color:"#98C379"}},"`十分"),s("span",{style:{color:"#C678DD"}},"${"),s("span",{style:{color:"#E5C07B"}},"state"),s("span",{style:{color:"#ABB2BF"}},"."),s("span",{style:{color:"#E06C75"}},"message"),s("span",{style:{color:"#C678DD"}},"}"),s("span",{style:{color:"#98C379"}},"`"),s("span",{style:{color:"#ABB2BF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    }));")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#61AFEF"}},"render"),s("span",{style:{color:"#ABB2BF"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    "),s("span",{style:{color:"#C678DD"}},"return"),s("span",{style:{color:"#ABB2BF"}}," (")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"      <"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#D19A66","font-style":"italic"}},"className"),s("span",{style:{color:"#56B6C2"}},"="),s("span",{style:{color:"#98C379"}},'"box"'),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        <"),s("span",{style:{color:"#E06C75"}},"code"),s("span",{style:{color:"#ABB2BF"}},">vuepress-theme-hope</"),s("span",{style:{color:"#E06C75"}},"code"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        <"),s("span",{style:{color:"#E06C75"}},"span"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#D19A66","font-style":"italic"}},"id"),s("span",{style:{color:"#56B6C2"}},"="),s("span",{style:{color:"#98C379"}},'"powerful"'),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#D19A66","font-style":"italic"}},"onClick"),s("span",{style:{color:"#56B6C2"}},"="),s("span",{style:{color:"#C678DD"}},"{"),s("span",{style:{color:"#E5C07B"}},"this"),s("span",{style:{color:"#ABB2BF"}},"."),s("span",{style:{color:"#E5C07B"}},"handler"),s("span",{style:{color:"#ABB2BF"}},"."),s("span",{style:{color:"#61AFEF"}},"bind"),s("span",{style:{color:"#ABB2BF"}},"("),s("span",{style:{color:"#E5C07B"}},"this"),s("span",{style:{color:"#ABB2BF"}},")"),s("span",{style:{color:"#C678DD"}},"}"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          "),s("span",{style:{color:"#C678DD"}},"{"),s("span",{style:{color:"#E5C07B"}},"this"),s("span",{style:{color:"#ABB2BF"}},"."),s("span",{style:{color:"#E5C07B"}},"state"),s("span",{style:{color:"#ABB2BF"}},"."),s("span",{style:{color:"#E06C75"}},"message"),s("span",{style:{color:"#C678DD"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        </"),s("span",{style:{color:"#E06C75"}},"span"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"      </"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"}")]),l(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),v=s("div",{class:"language-css","data-ext":"css"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D19A66"}},".box"),s("span",{style:{color:"#C678DD"}}," "),s("span",{style:{color:"#61AFEF"}},"#powerful"),s("span",{style:{color:"#ABB2BF"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  color: "),s("span",{style:{color:"#D19A66"}},"blue"),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"}")]),l(`
`),s("span",{class:"line"})])])],-1),u=n(`<details class="hint-container details"><summary>代码</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: react-demo 一个类式 React Demo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`js</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">App</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">extends</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">React</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">Component</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">constructor</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">props</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;font-style:italic;">super</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">props</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">state</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">message</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;强大&quot;</span><span style="color:#ABB2BF;"> };</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">handler</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">setState</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">state</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> ({</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">message</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">\`十分</span><span style="color:#C678DD;">\${</span><span style="color:#E5C07B;">state</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">message</span><span style="color:#C678DD;">}</span><span style="color:#98C379;">\`</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    }));</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">render</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> (</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;font-style:italic;">className</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;box&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">code</span><span style="color:#ABB2BF;">&gt;vuepress-theme-hope&lt;/</span><span style="color:#E06C75;">code</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">span</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;font-style:italic;">id</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;powerful&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;font-style:italic;">onClick</span><span style="color:#56B6C2;">=</span><span style="color:#C678DD;">{</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">handler</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">bind</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">)</span><span style="color:#C678DD;">}</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#C678DD;">{</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">state</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">message</span><span style="color:#C678DD;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;/</span><span style="color:#E06C75;">span</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    );</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`css</span></span>
<span class="line"><span style="color:#D19A66;">.box</span><span style="color:#C678DD;"> </span><span style="color:#61AFEF;">#powerful</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">blue</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1);function C(m,b){const a=t("CodeDemo");return c(),B("div",null,[i,e(a,{id:"code-demo-26",type:"react",title:"%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0%E5%BC%8F%20React%20Demo",code:"eJxNkD1OxDAQha8yMhRZaZf0S5KGGgooMdJ6nVkScOzIP8tKkQsaRMMtkLgD4jq5B3b+tN1I771v3kxHXgzZEq6ksdCBM/hgmUXwkMM9Mm6vqaQST63SFko8MCcsJCvIC+ioBBiDjw0aw55xDQbt7Tg/BcKMSyiB/u+3//6hZDUQ52TFZClQB+8ZFM4wya7/eu8/Py67aYffRQKAnzgardMSkjGYlfURuGDG3LEGc0r26kRJMYpB5qrE4uiw1YG2sRU2uKlUi1k6KIvPtExCXQZAq95QH5wIJyh5I2r+mndTa7/4AZZ6CyKNjMmRpaHXMMfysTpZE27i669CQ7iYt8xfFUpvYS8cRntw+3+/Wo8y"},{default:o(()=>[y,d]),_:1}),A,e(a,{id:"code-demo-33",type:"react",title:"%E4%B8%80%E4%B8%AA%E7%B1%BB%E5%BC%8F%20React%20Demo",code:"eJxVUUtOwzAQvcrIsEikNt2XphLqngVss6hrT0nAsS1/SqUoCzaIDbdA4g6I6+QeOHFSgmRZ8ps3783zNOTJkjXBs1bGAccj9cIBE9RauNUa8OxQcgv3SJnLdqrWSqJ00BQSgClpnfHMKZNoo7RNIw5gvcYJu4mQKyubWUcdQg4N1GgtfcQ1FKT7+e4+vwoC7UBt+6ukkosgcVGM7egeeoUkGYRSyLeQjAT4k9x3H6/d+9t1M7CyEW/3i8hs0zjTYGRCvLmPQeeNhGQS3fDqFP/jjtaYF+SgzgXZTuVAYIrj9uRRm+CzdCXWuCyVxs1qqMyYVlMJFQ8iWr2gOXoRQiu5ExV7zpsh4Zg7O1SSJz2StjMFgMj6n2vmsOotLg2bVRh+fF0ih0MWhNl+7VkIA1fTMNNShTJrOAiPoaVnt7+oyLW3"},{default:o(()=>[F,v]),_:1}),u])}const E=p(r,[["render",C],["__file","react.html.vue"]]);export{E as default};