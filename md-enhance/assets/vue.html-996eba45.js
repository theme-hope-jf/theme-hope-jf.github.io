import{a2 as c,Y as p,Z as i,_ as e,$ as o,a4 as n,F as B,a0 as s,a1 as l}from"./framework-aea579b9.js";const t={},r=n(`<h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: vue-demo Optional title text</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`vue</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;!-- ↑ You can also use \`html\` --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;!-- vue template --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">export default {</span></span>
<span class="line"><span style="color:#ABB2BF;">  // vue component</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">/* css code */</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`json</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// Config (Optional)</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">Attention</p><ul><li>We only support Vue3</li><li>You must export your component through <code>export default</code></li><li>We use &quot;ShadowDOM&quot; to make style isolation, and we already replace <code>document</code> with <code>shadowRoot</code>. To access the page document, please visit <code>window.document</code>.</li></ul></div><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h2>`,4),d=s("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"<"),s("span",{style:{color:"#E06C75"}},"template"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  <"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#D19A66"}},"class"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"box"'),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    <"),s("span",{style:{color:"#E06C75"}},"code"),s("span",{style:{color:"#ABB2BF"}},">vuepress-theme-hope</"),s("span",{style:{color:"#E06C75"}},"code"),s("span",{style:{color:"#ABB2BF"}},"> is")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    <"),s("span",{style:{color:"#E06C75"}},"span"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#D19A66"}},"@click"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"handler"'),s("span",{style:{color:"#ABB2BF"}},">{{ message }}</"),s("span",{style:{color:"#E06C75"}},"span")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    >!")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  </"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"</"),s("span",{style:{color:"#E06C75"}},"template"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"<"),s("span",{style:{color:"#E06C75"}},"script"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"const"),s("span",{style:{color:"#ABB2BF"}}," { "),s("span",{style:{color:"#E5C07B"}},"ref"),s("span",{style:{color:"#ABB2BF"}}," } "),s("span",{style:{color:"#56B6C2"}},"="),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#E06C75"}},"Vue"),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"export"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#C678DD"}},"default"),s("span",{style:{color:"#ABB2BF"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#61AFEF"}},"setup"),s("span",{style:{color:"#ABB2BF"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    "),s("span",{style:{color:"#C678DD"}},"const"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#E5C07B"}},"message"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#56B6C2"}},"="),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#61AFEF"}},"ref"),s("span",{style:{color:"#ABB2BF"}},"("),s("span",{style:{color:"#98C379"}},'"powerful"'),s("span",{style:{color:"#ABB2BF"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    "),s("span",{style:{color:"#C678DD"}},"const"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#61AFEF"}},"handler"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#56B6C2"}},"="),s("span",{style:{color:"#ABB2BF"}}," () "),s("span",{style:{color:"#C678DD"}},"=>"),s("span",{style:{color:"#ABB2BF"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"      "),s("span",{style:{color:"#E5C07B"}},"message"),s("span",{style:{color:"#ABB2BF"}},"."),s("span",{style:{color:"#E06C75"}},"value"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#56B6C2"}},"="),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},'"very "'),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#56B6C2"}},"+"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#E5C07B"}},"message"),s("span",{style:{color:"#ABB2BF"}},"."),s("span",{style:{color:"#E06C75"}},"value"),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    };")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    "),s("span",{style:{color:"#C678DD"}},"return"),s("span",{style:{color:"#ABB2BF"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"      "),s("span",{style:{color:"#E06C75"}},"message"),s("span",{style:{color:"#ABB2BF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"      "),s("span",{style:{color:"#E06C75"}},"handler"),s("span",{style:{color:"#ABB2BF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"};")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"</"),s("span",{style:{color:"#E06C75"}},"script"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"<"),s("span",{style:{color:"#E06C75"}},"style"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D19A66"}},".box"),s("span",{style:{color:"#C678DD"}}," "),s("span",{style:{color:"#E06C75"}},"span"),s("span",{style:{color:"#ABB2BF"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  color: "),s("span",{style:{color:"#D19A66"}},"red"),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"</"),s("span",{style:{color:"#E06C75"}},"style"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),y=n(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: vue-demo A Vue Composition Demo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`vue</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;div class=&quot;box&quot;&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;code&gt;vuepress-theme-hope&lt;/code&gt; is</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;span @click=&quot;handler&quot;&gt;{{ message }}&lt;/span</span></span>
<span class="line"><span style="color:#ABB2BF;">    &gt;!</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">const { ref } = Vue;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">export default {</span></span>
<span class="line"><span style="color:#ABB2BF;">  setup() {</span></span>
<span class="line"><span style="color:#ABB2BF;">    const message = ref(&quot;powerful&quot;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    const handler = () =&gt; {</span></span>
<span class="line"><span style="color:#ABB2BF;">      message.value = &quot;very &quot; + message.value;</span></span>
<span class="line"><span style="color:#ABB2BF;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    return {</span></span>
<span class="line"><span style="color:#ABB2BF;">      message,</span></span>
<span class="line"><span style="color:#ABB2BF;">      handler,</span></span>
<span class="line"><span style="color:#ABB2BF;">    };</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">.box span {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: red;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1),v=s("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"<"),s("span",{style:{color:"#E06C75"}},"template"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  <"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#D19A66"}},"class"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"box"'),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    <"),s("span",{style:{color:"#E06C75"}},"code"),s("span",{style:{color:"#ABB2BF"}},">vuepress-theme-hope</"),s("span",{style:{color:"#E06C75"}},"code"),s("span",{style:{color:"#ABB2BF"}},"> is")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    <"),s("span",{style:{color:"#E06C75"}},"span"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#D19A66"}},"@click"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"handler"'),s("span",{style:{color:"#ABB2BF"}},">{{ message }}</"),s("span",{style:{color:"#E06C75"}},"span")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    >!")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  </"),s("span",{style:{color:"#E06C75"}},"div"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"</"),s("span",{style:{color:"#E06C75"}},"template"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"<"),s("span",{style:{color:"#E06C75"}},"script"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"export"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#C678DD"}},"default"),s("span",{style:{color:"#ABB2BF"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#61AFEF"}},"data"),s("span",{style:{color:"#ABB2BF"}},": () "),s("span",{style:{color:"#C678DD"}},"=>"),s("span",{style:{color:"#ABB2BF"}}," ({ "),s("span",{style:{color:"#E06C75"}},"message"),s("span",{style:{color:"#ABB2BF"}},": "),s("span",{style:{color:"#98C379"}},'"powerful"'),s("span",{style:{color:"#ABB2BF"}}," }),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#E06C75"}},"methods"),s("span",{style:{color:"#ABB2BF"}},": {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    "),s("span",{style:{color:"#61AFEF"}},"handler"),s("span",{style:{color:"#ABB2BF"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"      "),s("span",{style:{color:"#E5C07B"}},"this"),s("span",{style:{color:"#ABB2BF"}},"."),s("span",{style:{color:"#E06C75"}},"message"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#56B6C2"}},"="),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},'"very "'),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#56B6C2"}},"+"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#E5C07B"}},"this"),s("span",{style:{color:"#ABB2BF"}},"."),s("span",{style:{color:"#E06C75"}},"message"),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"};")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"</"),s("span",{style:{color:"#E06C75"}},"script"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"<"),s("span",{style:{color:"#E06C75"}},"style"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D19A66"}},".box"),s("span",{style:{color:"#C678DD"}}," "),s("span",{style:{color:"#E06C75"}},"span"),s("span",{style:{color:"#ABB2BF"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  color: "),s("span",{style:{color:"#D19A66"}},"red"),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"</"),s("span",{style:{color:"#E06C75"}},"style"),s("span",{style:{color:"#ABB2BF"}},">")]),l(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),u=n(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: vue-demo A Vue Option Demo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`vue</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;div class=&quot;box&quot;&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;code&gt;vuepress-theme-hope&lt;/code&gt; is</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;span @click=&quot;handler&quot;&gt;{{ message }}&lt;/span</span></span>
<span class="line"><span style="color:#ABB2BF;">    &gt;!</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">export default {</span></span>
<span class="line"><span style="color:#ABB2BF;">  data: () =&gt; ({ message: &quot;powerful&quot; }),</span></span>
<span class="line"><span style="color:#ABB2BF;">  methods: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    handler() {</span></span>
<span class="line"><span style="color:#ABB2BF;">      this.message = &quot;very &quot; + this.message;</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">.box span {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: red;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1);function m(A,F){const a=B("CodeDemo");return p(),i("div",null,[r,e(a,{id:"code-demo-26",type:"vue",title:"A%20Vue%20Composition%20Demo",code:"eJxlkU1ugzAQha8y9SpRm7BPDeopuvLGNUNBNdjyD02EfPeODbSNsgGP573vjcYLmyOyC+MBR6tlwEZMALwdZlBael8L9mGugpVraijTYkMW69D7U+hxxFNvLPKqdGDwm9BbOcGb0oP6IkYvp1ajI86ywEhW+YmQEq+ybHU0TyW5omgK49W/gbhXbrCBTspMPsACDjtIUMN7xFdBALxa4wK02MmoSZBRHkO0h+NaAKzWPbvOiINg1nyj66IW7FhAf8ptZFISo252DOyI8yx1zCDBZnQ3+sHzfY+AWZ9+wY4mctMD6WWvt8itzj76UpVPtKp9CdyHm857OdPTQFl0QSqjjbtQSkv6VCybkKUfJq6hVA=="},{default:o(()=>[d]),_:1}),y,e(a,{id:"code-demo-32",type:"vue",title:"A%20Vue%20Option%20Demo",code:"eJxVUEtuwyAQvcorq0Rt4r1LrB7EGwqT2io2CLCbyOLuHWOnajaA5n2ZRcwTiVrIRIO3KlHTjoA0/QxtVYyXVny6WyvKmAHtDDUs8YFiPKWOBjp1zpOsCoI+7sTo1YgPbXv9zR6dGo2lwD7LgoGl6ouQs6xW2qZoXkpyxdEcJqt/hWTUofeJX3TzLiQYuqrJJiyrxKikahyOuDQ4/LnXaIV3PxSuk20F8vFt5Q6UOmdivSmBvReL9wGQuj6eHxUv7DJTuPOF1yfofePnYruemSf8n0dTGdPdruXPvD+UbZQI7awLNQIZ5uci2Yki/wLx9ISI"},{default:o(()=>[v]),_:1}),u])}const C=c(t,[["render",m],["__file","vue.html.vue"]]);export{C as default};
