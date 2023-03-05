import{a2 as d,Y as y,Z as v,a3 as u,_ as l,$ as i,a0 as s,a1 as n,a4 as a,F as c}from"./framework-aea579b9.js";const m={},F=s("p",null,"插件为你带来了交互演示支持。",-1),A=s("h2",{id:"配置",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),n(" 配置")],-1),b=s("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"// .vuepress/config.ts")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"import"),s("span",{style:{color:"#ABB2BF"}}," { "),s("span",{style:{color:"#E06C75"}},"mdEnhance"),s("span",{style:{color:"#ABB2BF"}}," } "),s("span",{style:{color:"#C678DD"}},"from"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},'"vuepress-plugin-md-enhance"'),s("span",{style:{color:"#ABB2BF"}},";")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"export"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#C678DD"}},"default"),s("span",{style:{color:"#ABB2BF"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#E06C75"}},"plugins"),s("span",{style:{color:"#ABB2BF"}},": [")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    "),s("span",{style:{color:"#61AFEF"}},"mdEnhance"),s("span",{style:{color:"#ABB2BF"}},"({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"      "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 在此放置交互演示配置")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"      "),s("span",{style:{color:"#E06C75"}},"playground"),s("span",{style:{color:"#ABB2BF"}},": {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 添加预设")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        "),s("span",{style:{color:"#E06C75"}},"presets"),s("span",{style:{color:"#ABB2BF"}},": [")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          "),s("span",{style:{color:"#98C379"}},'"ts"'),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          "),s("span",{style:{color:"#98C379"}},'"vue"'),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            "),s("span",{style:{color:"#E06C75"}},"name"),s("span",{style:{color:"#ABB2BF"}},": "),s("span",{style:{color:"#98C379"}},'"playground#language"'),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            "),s("span",{style:{color:"#E06C75"}},"component"),s("span",{style:{color:"#ABB2BF"}},": "),s("span",{style:{color:"#98C379"}},'"PlaygroundComponent"'),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            "),s("span",{style:{color:"#61AFEF"}},"propsGetter"),s("span",{style:{color:"#ABB2BF"}},": (")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"              "),s("span",{style:{color:"#E06C75","font-style":"italic"}},"playgroundData"),s("span",{style:{color:"#ABB2BF"}},": "),s("span",{style:{color:"#E5C07B"}},"PlaygroundData")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            ): "),s("span",{style:{color:"#E5C07B"}},"Record"),s("span",{style:{color:"#ABB2BF"}},"<"),s("span",{style:{color:"#E5C07B"}},"string"),s("span",{style:{color:"#ABB2BF"}},", "),s("span",{style:{color:"#E5C07B"}},"string"),s("span",{style:{color:"#ABB2BF"}},"> "),s("span",{style:{color:"#C678DD"}},"=>"),s("span",{style:{color:"#ABB2BF"}}," ({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"              "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 交互演示属性")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            }),")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        ],")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 设置内置预设 (可选)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        "),s("span",{style:{color:"#E06C75"}},"config"),s("span",{style:{color:"#ABB2BF"}},": {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          "),s("span",{style:{color:"#E06C75"}},"ts"),s("span",{style:{color:"#ABB2BF"}},": {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// ...")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          "),s("span",{style:{color:"#E06C75"}},"vue"),s("span",{style:{color:"#ABB2BF"}},": {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// ...")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"      },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    }),")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  ],")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"};")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("br"),s("br")]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),g=s("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"// .vuepress/config.js")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"import"),s("span",{style:{color:"#ABB2BF"}}," { "),s("span",{style:{color:"#E06C75"}},"mdEnhance"),s("span",{style:{color:"#ABB2BF"}}," } "),s("span",{style:{color:"#C678DD"}},"from"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},'"vuepress-plugin-md-enhance"'),s("span",{style:{color:"#ABB2BF"}},";")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"export"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#C678DD"}},"default"),s("span",{style:{color:"#ABB2BF"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#E06C75"}},"plugins"),s("span",{style:{color:"#ABB2BF"}},": [")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    "),s("span",{style:{color:"#61AFEF"}},"mdEnhance"),s("span",{style:{color:"#ABB2BF"}},"({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"      "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 在此放置交互演示配置")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"      "),s("span",{style:{color:"#E06C75"}},"playground"),s("span",{style:{color:"#ABB2BF"}},": {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 添加预设")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        "),s("span",{style:{color:"#E06C75"}},"presets"),s("span",{style:{color:"#ABB2BF"}},": [")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          "),s("span",{style:{color:"#98C379"}},'"ts"'),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          "),s("span",{style:{color:"#98C379"}},'"vue"'),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            "),s("span",{style:{color:"#E06C75"}},"name"),s("span",{style:{color:"#ABB2BF"}},": "),s("span",{style:{color:"#98C379"}},'"playground#language"'),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            "),s("span",{style:{color:"#E06C75"}},"component"),s("span",{style:{color:"#ABB2BF"}},": "),s("span",{style:{color:"#98C379"}},'"PlaygroundComponent"'),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            "),s("span",{style:{color:"#61AFEF"}},"propsGetter"),s("span",{style:{color:"#ABB2BF"}},": (")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"              "),s("span",{style:{color:"#E06C75","font-style":"italic"}},"playgroundData"),s("span",{style:{color:"#ABB2BF"}},": "),s("span",{style:{color:"#E5C07B"}},"PlaygroundData")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            ): "),s("span",{style:{color:"#E5C07B"}},"Record"),s("span",{style:{color:"#ABB2BF"}},"<"),s("span",{style:{color:"#E5C07B"}},"string"),s("span",{style:{color:"#ABB2BF"}},", "),s("span",{style:{color:"#E5C07B"}},"string"),s("span",{style:{color:"#ABB2BF"}},"> "),s("span",{style:{color:"#C678DD"}},"=>"),s("span",{style:{color:"#ABB2BF"}}," ({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"              "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 交互演示属性")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            }),")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        ],")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 设置内置预设 (可选)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        "),s("span",{style:{color:"#E06C75"}},"config"),s("span",{style:{color:"#ABB2BF"}},": {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          "),s("span",{style:{color:"#E06C75"}},"ts"),s("span",{style:{color:"#ABB2BF"}},": {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// ...")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          "),s("span",{style:{color:"#E06C75"}},"vue"),s("span",{style:{color:"#ABB2BF"}},": {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// ...")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"      },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    }),")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  ],")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"};")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("br"),s("br")]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),h=a('<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>你应该通过插件选项中的 <code>playground.presets</code> 添加预设。</p><p>要使用交互演示，你应该使用一个名为 <code>playground#preset</code> 的容器。</p><p>在其中，你可以使用 3 个指令：</p><ul><li><code>@file fileName</code> 紧跟文件的代码块</li><li><code>@import importMapFileName</code> 紧跟一个自定义“导入映射”的 json 代码块</li><li><code>@setting</code> 紧跟一个自定义设置的 json 代码块</li></ul><p>你可以查看以下演示以查看更多详细信息。</p><h2 id="可用预设" tabindex="-1"><a class="header-anchor" href="#可用预设" aria-hidden="true">#</a> 可用预设</h2><p>目前，我们支持 <code>ts</code> 和 <code>vue</code> 预设，我们期待更多来自 PR 的预设。</p><p>如果你想添加自己的交互演示，可以在 <a href="#%E9%AB%98%E7%BA%A7%E7%94%A8%E6%B3%95">高级用法</a> 中添加你自己的预设。同时我们欢迎为你的精彩预设创建 PR。</p><div class="hint-container info"><p class="hint-container-title">TS 预设</p><p>TS 预设默认使用官方交互演示，不支持多个 ts 文件，所以你需要做的就是通过 <code>@file xxx.ts</code> 指令添加一个 ts 文件 (文件名不重要，但需要 <code>.ts</code> 文件扩展名)。</p><p>要使用定制化的编译器选项，你可以通过 <code>@setting</code> 指令提供一个。但请注意，官方 TS Playground 并不支持所有的编译器。</p><p>同时，你可以通过插件选项中的 <code>playground.config.ts</code> 自定义默认的 compilerOption，通过 <code>service</code> 选项可以使用官方交互演示之外的其他服务，以防你想部署自己的交互演示站点。</p></div>',10),E={class:"hint-container info"},C=s("p",{class:"hint-container-title"},"Vue 预设",-1),f=s("p",null,[n("但是如果你只想要几个演示而不是捆绑整个 Vue 交互演示，你可以使用这个预设来创建一个 "),s("code",null,"<iframe>"),n("。")],-1),D=s("p",null,[s("code",null,"@setting"),n(" 指令中只有 "),s("code",null,"service"),n("、"),s("code",null,"dev"),n(" 和 "),s("code",null,"ssr"),n(" 选项可用。")],-1),_=s("h2",{id:"案例",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#案例","aria-hidden":"true"},"#"),n(" 案例")],-1),k=s("h3",{id:"ts",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#ts","aria-hidden":"true"},"#"),n(" TS")],-1),I=a(`<details class="hint-container details"><summary>代码</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: playground#ts TS 案例 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">@file index.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`ts</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">msg</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;你好世界&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">speak</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;">msg</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">msg</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">speak</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">msg</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1),x=a(`<details class="hint-container details"><summary>代码</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: playground#ts TS 案例 2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">@file index.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`ts</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">msg</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;你好世界&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">speak</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;">msg</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">msg</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">speak</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">msg</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">@setting</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`json</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;target&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;es5&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> Vue</h3>`,2),Z=a(`<details class="hint-container details"><summary>代码</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: playground#vue 使用自定义导入的 Vue 案例</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">@file App.vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`vue</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">import { ref } from &quot;vue&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">import Comp from &quot;./Comp.vue&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">const msg = ref(&quot;Hello World!&quot;);</span></span>
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
<span class="line"><span style="color:#ABB2BF;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;div&gt;Comp&lt;/div&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">@import</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`json</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;imports&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;vue&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;https://sfc.vuejs.org/vue.runtime.esm-browser.js&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1),w=a(`<details class="hint-container details"><summary>代码</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: playground#vue 使用自定义设置的 Vue 案例</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">@file App.vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`vue</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">import { ref } from &quot;vue&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">const msg = ref(&quot;Hello Playground!&quot;);</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;h1&gt;{{ msg }}&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;input v-model=&quot;msg&quot; /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">@setting</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`json</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;dev&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;ssr&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="高级用法" tabindex="-1"><a class="header-anchor" href="#高级用法" aria-hidden="true">#</a> 高级用法</h2><p>你可以提供自己的预设。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">interface</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">PlaygroundCodeConfig</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * 代码块扩展名</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   *</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * </span><span style="color:#C678DD;font-style:italic;">@description</span><span style="color:#7F848E;font-style:italic;"> 它基于文件名，而不是代码块语言</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">ext</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * 代码块内容</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">content</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">interface</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">PlaygroundData</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * 交互演示标题</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">title</span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Import map 文件名</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   *</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * </span><span style="color:#C678DD;font-style:italic;">@default</span><span style="color:#7F848E;font-style:italic;"> </span><span style="color:#E06C75;font-style:italic;">&#39;</span><span style="color:#E06C75;font-style:italic;">import-map.json</span><span style="color:#E06C75;font-style:italic;">&#39;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">importMap</span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * 交互演示件信息</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">files</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * 文件名</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * 文件详情</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">PlaygroundCodeConfig</span></span>
<span class="line"><span style="color:#ABB2BF;">  &gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * 交互演示设置</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   *</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * </span><span style="color:#C678DD;font-style:italic;">@description</span><span style="color:#7F848E;font-style:italic;"> 它是设置指令后的 json 内容的解析结果</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">settings</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">unknown</span><span style="color:#ABB2BF;">&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * 根据交互演示内容生成的 hash key</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">interface</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">PlaygroundOptions</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * 交互演示容器名</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * 交互演示组件名称</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   *</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * </span><span style="color:#C678DD;font-style:italic;">@default</span><span style="color:#7F848E;font-style:italic;"> </span><span style="color:#E06C75;font-style:italic;">&#39;</span><span style="color:#E06C75;font-style:italic;">Playground</span><span style="color:#E06C75;font-style:italic;">&#39;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">component</span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * 属性获取器</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">propsGetter</span><span style="color:#ABB2BF;">: (</span><span style="color:#E06C75;font-style:italic;">data</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">PlaygroundData</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">&gt;;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们为 <code>getter</code> 函数提供了一个 <code>playgroundData</code> 对象，你应该提供下列内容:</p><ul><li>通过 <code>name</code> 选项提供容器名称</li><li>通过 <code>component</code> 选项提供客户端组件名称</li><li>通过 <code>propsGetter</code> 选项提供一个接收 playgroundData 并返回格式为 <code>attr</code> → <code>value</code> 属性映射的函数</li></ul>`,6);function V(G,q){const p=c("CodeTabs"),o=c("RouterLink"),e=c("Playground");return y(),v("div",null,[F,u(" more "),A,l(p,{id:"7",data:[{title:"TS"},{title:"JS"}],"tab-id":"config"},{tab0:i(({title:t,value:r,isActive:B})=>[b]),tab1:i(({title:t,value:r,isActive:B})=>[g]),_:1}),h,s("div",E,[C,s("p",null,[n("Vue 预设默认使用官方 playground，并不像 "),l(o,{to:"/zh/guide/vue-playground.html"},{default:i(()=>[n("Vue Playground")]),_:1}),n(" 支持自定义选项。因此，如果你严重依赖 Vue 交互演示，我们建议你改用 "),l(o,{to:"/zh/guide/vue-playground.html"},{default:i(()=>[n("Vue 交互演示")]),_:1}),n("。")]),f,D]),_,k,l(e,{key:"655a2fb5",title:"TS%20%E6%A1%88%E4%BE%8B%201",link:"https%3A%2F%2Fwww.typescriptlang.org%2Fplay%23code%2FMYewdgzgLgBAthA5jAvDARIA3lC%2BmoNDlAyrugNwBQJoksEADgKYCGA1qjABQKIBcM0ATgJZhEASlQA%2BGBQggANrQB0MkInZJhpEjQaNVI0kA"}),I,l(e,{key:"311ac2d3",title:"TS%20%E6%A1%88%E4%BE%8B%202",link:"https%3A%2F%2Fwww.typescriptlang.org%2Fplay%3F1%23code%2FMYewdgzgLgBAthA5jAvDARIA3lC%2BmoNDlAyrugNwBQJoksEADgKYCGA1qjABQKIBcM0ATgJZhEASlQA%2BGBQggANrQB0MkInZJhpEjQaNVI0kA"}),x,l(e,{key:"1f590bcb",title:"%E4%BD%BF%E7%94%A8%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AF%BC%E5%85%A5%E7%9A%84%20Vue%20%E6%A1%88%E4%BE%8B",link:"https%3A%2F%2Fsfc.vuejs.org%2F%23eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcblxuaW1wb3J0IENvbXAgZnJvbSBcIi4vQ29tcC52dWVcIjtcblxuY29uc3QgbXNnID0gcmVmKFwiSGVsbG8gV29ybGQhXCIpO1xuPC9zY3JpcHQ%2BXG5cbjx0ZW1wbGF0ZT5cbiAgPGgxPnt7IG1zZyB9fTwvaDE%2BXG4gIDxpbnB1dCB2LW1vZGVsPVwibXNnXCIgLz5cbiAgPENvbXAgLz5cbjwvdGVtcGxhdGU%2BXG4iLCJDb21wLnZ1ZSI6Ijx0ZW1wbGF0ZT5cbiAgPGRpdj5Db21wPC9kaXY%2BXG48L3RlbXBsYXRlPlxuIiwiaW1wb3J0LW1hcC5qc29uIjoie1wiaW1wb3J0c1wiOntcInZ1ZVwiOlwiaHR0cHM6Ly9zZmMudnVlanMub3JnL3Z1ZS5ydW50aW1lLmVzbS1icm93c2VyLmpzXCJ9fSJ9"}),Z,l(e,{key:"3b6fc8ec",title:"%E4%BD%BF%E7%94%A8%E8%87%AA%E5%AE%9A%E4%B9%89%E8%AE%BE%E7%BD%AE%E7%9A%84%20Vue%20%E6%A1%88%E4%BE%8B",link:"https%3A%2F%2Fsfc.vuejs.org%2F%23__DEV____SSR__eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcblxuY29uc3QgbXNnID0gcmVmKFwiSGVsbG8gUGxheWdyb3VuZCFcIik7XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8aDE%2Be3sgbXNnIH19PC9oMT5cbiAgPGlucHV0IHYtbW9kZWw9XCJtc2dcIiAvPlxuPC90ZW1wbGF0ZT5cbiIsImltcG9ydC1tYXAuanNvbiI6IntcbiAgXCJpbXBvcnRzXCI6IHtcbiAgICBcInZ1ZVwiOiBcImh0dHBzOi8vc2ZjLnZ1ZWpzLm9yZy92dWUucnVudGltZS5lc20tYnJvd3Nlci5qc1wiLFxuICAgIFwidnVlL3NlcnZlci1yZW5kZXJlclwiOiBcImh0dHBzOi8vc2ZjLnZ1ZWpzLm9yZy9zZXJ2ZXItcmVuZGVyZXIuZXNtLWJyb3dzZXIuanNcIlxuICB9XG59In0%3D"}),w])}const X=d(m,[["render",V],["__file","playground.html.vue"]]);export{X as default};
