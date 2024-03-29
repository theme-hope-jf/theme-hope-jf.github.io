import{a2 as d,Y as y,Z as v,a3 as u,_ as l,$ as i,a0 as s,a1 as n,a4 as a,F as o}from"./framework-aea579b9.js";const m={},F=s("p",null,"The plugin provides you playground support.",-1),b=s("h2",{id:"config",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#"),n(" Config")],-1),A=s("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"// .vuepress/config.ts")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"import"),s("span",{style:{color:"#ABB2BF"}}," { "),s("span",{style:{color:"#E06C75"}},"mdEnhance"),s("span",{style:{color:"#ABB2BF"}}," } "),s("span",{style:{color:"#C678DD"}},"from"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},'"vuepress-plugin-md-enhance"'),s("span",{style:{color:"#ABB2BF"}},";")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"export"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#C678DD"}},"default"),s("span",{style:{color:"#ABB2BF"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#E06C75"}},"plugins"),s("span",{style:{color:"#ABB2BF"}},": [")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    "),s("span",{style:{color:"#61AFEF"}},"mdEnhance"),s("span",{style:{color:"#ABB2BF"}},"({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"      "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// playground config here")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"      "),s("span",{style:{color:"#E06C75"}},"playground"),s("span",{style:{color:"#ABB2BF"}},": {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// add presets here")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        "),s("span",{style:{color:"#E06C75"}},"presets"),s("span",{style:{color:"#ABB2BF"}},": [")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          "),s("span",{style:{color:"#98C379"}},'"ts"'),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          "),s("span",{style:{color:"#98C379"}},'"vue"'),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            "),s("span",{style:{color:"#E06C75"}},"name"),s("span",{style:{color:"#ABB2BF"}},": "),s("span",{style:{color:"#98C379"}},'"playground#language"'),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            "),s("span",{style:{color:"#E06C75"}},"component"),s("span",{style:{color:"#ABB2BF"}},": "),s("span",{style:{color:"#98C379"}},'"PlaygroundComponent"'),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            "),s("span",{style:{color:"#61AFEF"}},"propsGetter"),s("span",{style:{color:"#ABB2BF"}},": (")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"              "),s("span",{style:{color:"#E06C75","font-style":"italic"}},"playgroundData"),s("span",{style:{color:"#ABB2BF"}},": "),s("span",{style:{color:"#E5C07B"}},"PlaygroundData")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            ): "),s("span",{style:{color:"#E5C07B"}},"Record"),s("span",{style:{color:"#ABB2BF"}},"<"),s("span",{style:{color:"#E5C07B"}},"string"),s("span",{style:{color:"#ABB2BF"}},", "),s("span",{style:{color:"#E5C07B"}},"string"),s("span",{style:{color:"#ABB2BF"}},"> "),s("span",{style:{color:"#C678DD"}},"=>"),s("span",{style:{color:"#ABB2BF"}}," ({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"              "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// playground props")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            }),")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        ],")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// configure built-in presets (optional)")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"      "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// playground config here")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"      "),s("span",{style:{color:"#E06C75"}},"playground"),s("span",{style:{color:"#ABB2BF"}},": {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// add presets here")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        "),s("span",{style:{color:"#E06C75"}},"presets"),s("span",{style:{color:"#ABB2BF"}},": [")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          "),s("span",{style:{color:"#98C379"}},'"ts"'),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          "),s("span",{style:{color:"#98C379"}},'"vue"'),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            "),s("span",{style:{color:"#E06C75"}},"name"),s("span",{style:{color:"#ABB2BF"}},": "),s("span",{style:{color:"#98C379"}},'"playground#language"'),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            "),s("span",{style:{color:"#E06C75"}},"component"),s("span",{style:{color:"#ABB2BF"}},": "),s("span",{style:{color:"#98C379"}},'"PlaygroundComponent"'),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            "),s("span",{style:{color:"#61AFEF"}},"propsGetter"),s("span",{style:{color:"#ABB2BF"}},": (")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"              "),s("span",{style:{color:"#E06C75","font-style":"italic"}},"playgroundData"),s("span",{style:{color:"#ABB2BF"}},": "),s("span",{style:{color:"#E5C07B"}},"PlaygroundData")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            ): "),s("span",{style:{color:"#E5C07B"}},"Record"),s("span",{style:{color:"#ABB2BF"}},"<"),s("span",{style:{color:"#E5C07B"}},"string"),s("span",{style:{color:"#ABB2BF"}},", "),s("span",{style:{color:"#E5C07B"}},"string"),s("span",{style:{color:"#ABB2BF"}},"> "),s("span",{style:{color:"#C678DD"}},"=>"),s("span",{style:{color:"#ABB2BF"}}," ({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"              "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// playground props")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"            }),")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        ],")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// configure built-in presets (optional)")]),n(`
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
`),s("span",{class:"line"})])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("br"),s("br")]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),h=a('<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>You should add presets through <code>playground.presets</code> in plugin options.</p><p>To use playground, you should use a container named <code>playground#preset</code>.</p><p>In it, you can use 3 directives:</p><ul><li><code>@file fileName</code> then a code block to add files</li><li><code>@import importMapFileName</code> then a json block to customize &quot;import map&quot;</li><li><code>@setting</code> then a json block to customize settings</li></ul><p>You can see the below demos to see more details.</p><h2 id="available-presets" tabindex="-1"><a class="header-anchor" href="#available-presets" aria-hidden="true">#</a> Available presets</h2><p>Currently, we support <code>ts</code> and <code>vue</code> presets, and we are looking forward to more presets coming from PRs.</p><p>If you want to add a playground of your own, you can add a preset by you own in <a href="#advanced">Advanced Section</a>, and welcome to open a PR about your fantastic preset.</p><div class="hint-container info"><p class="hint-container-title">TS preset</p><p>TS preset is using official playground by default, and do not support multiple ts files, so all you need to do is add one single ts file through <code>@file xxx.ts</code> directive (the filename is not important but the <code>.ts</code> file extension is).</p><p>To use customized compilerOptions, you can provide one through <code>@setting</code> directive. But attention, official TS playground does not support all compiler options.</p><p>Meanwhile, you can customize the default compilerOption through <code>playground.config.ts</code>, and you can use another service besides the official playground through <code>service</code> option, just in case you want to deploy your own playground site.</p></div>',10),C={class:"hint-container info"},f=s("p",{class:"hint-container-title"},"Vue Preset",-1),E=s("p",null,[n("But if you only want a few demos instead of bundling a whole vue playground, you can use this preset to create a "),s("code",null,"<iframe>"),n(".")],-1),D=s("p",null,[n("Only "),s("code",null,"service"),n(", "),s("code",null,"dev"),n(" and "),s("code",null,"ssr"),n(" option is available in "),s("code",null,"@setting"),n(" directive.")],-1),w=s("h2",{id:"demo",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),n(" Demo")],-1),k=s("h3",{id:"ts",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#ts","aria-hidden":"true"},"#"),n(" TS")],-1),_=a(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: playground#ts TS demo 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">@file index.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`ts</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">msg</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;hello world&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">speak</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;">msg</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">msg</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">speak</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">msg</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1),I=a(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: playground#ts TS demo 2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">@file index.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`ts</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">msg</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;hello world&quot;</span><span style="color:#ABB2BF;">;</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> Vue</h3>`,2),x=a(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: playground#vue Vue demo with customized imports</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1),Z=a(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: playground#vue Vue demo with customized settings</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="advanced" tabindex="-1"><a class="header-anchor" href="#advanced" aria-hidden="true">#</a> Advanced</h2><p>You can provide your own presets.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">interface</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">PlaygroundCodeConfig</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Code block extension</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   *</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * </span><span style="color:#C678DD;font-style:italic;">@description</span><span style="color:#7F848E;font-style:italic;"> It&#39;s based on filename, not code fence language</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">ext</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Code block content</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">content</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">interface</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">PlaygroundData</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Title of Playground</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">title</span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Import map file name</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   *</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * </span><span style="color:#C678DD;font-style:italic;">@default</span><span style="color:#7F848E;font-style:italic;"> </span><span style="color:#E06C75;font-style:italic;">&#39;</span><span style="color:#E06C75;font-style:italic;">import-map.json</span><span style="color:#E06C75;font-style:italic;">&#39;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">importMap</span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Playground files info</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">files</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/** File name */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/** File detail */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">PlaygroundCodeConfig</span></span>
<span class="line"><span style="color:#ABB2BF;">  &gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Playground settings</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   *</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * </span><span style="color:#C678DD;font-style:italic;">@description</span><span style="color:#7F848E;font-style:italic;"> It&#39;s parsed result of json content after setting directive</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">settings</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">unknown</span><span style="color:#ABB2BF;">&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * hash key based on playground content</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">interface</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">PlaygroundOptions</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Playground container name</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Playground component name</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   *</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * </span><span style="color:#C678DD;font-style:italic;">@default</span><span style="color:#7F848E;font-style:italic;"> </span><span style="color:#E06C75;font-style:italic;">&#39;</span><span style="color:#E06C75;font-style:italic;">Playground</span><span style="color:#E06C75;font-style:italic;">&#39;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">component</span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Props getter</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">propsGetter</span><span style="color:#ABB2BF;">: (</span><span style="color:#E06C75;font-style:italic;">data</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">PlaygroundData</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">&gt;;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Basically, we provide a <code>playgroundData</code> object to <code>getter</code> function, and you are supposed to provide:</p><ul><li>A container name via <code>name</code> option</li><li>A client component name via <code>component</code> option</li><li>A function receiving playgroundData and returning a props map with <code>attr</code> → <code>value</code> via <code>propsGetter</code> option</li></ul>`,6);function V(P,X){const c=o("CodeTabs"),p=o("RouterLink"),e=o("Playground");return y(),v("div",null,[F,u(" more "),b,l(c,{id:"7",data:[{title:"TS"},{title:"JS"}],"tab-id":"config"},{tab0:i(({title:t,value:r,isActive:B})=>[A]),tab1:i(({title:t,value:r,isActive:B})=>[g]),_:1}),h,s("div",C,[f,s("p",null,[n("Vue preset is using the official playground by default, and do not support customizing options like "),l(p,{to:"/guide/vue-playground.html"},{default:i(()=>[n("Vue Playground")]),_:1}),n(". So if you are heavily relying on interacting vue playground, we suggest you to use "),l(p,{to:"/guide/vue-playground.html"},{default:i(()=>[n("Vue Playground")]),_:1}),n(" instead.")]),E,D]),w,k,l(e,{key:"57c05dd6",title:"TS%20demo%201",link:"https%3A%2F%2Fwww.typescriptlang.org%2Fplay%23code%2FMYewdgzgLgBAthA5jAvDARACwKYBtcgwDuIATrgCboDcAULaJLBAA7YCGA1qjABQKIAXDGikAlmEQBKVAD4YjCCFzYAdAUT8kUurVYdOW6XSA"}),_,l(e,{key:"9befde1a",title:"TS%20demo%202",link:"https%3A%2F%2Fwww.typescriptlang.org%2Fplay%3F1%23code%2FMYewdgzgLgBAthA5jAvDARACwKYBtcgwDuIATrgCboDcAULaJLBAA7YCGA1qjABQKIAXDGikAlmEQBKVAD4YjCCFzYAdAUT8kUurVYdOW6XSA"}),I,l(e,{key:"54e8bb26",title:"Vue%20demo%20with%20customized%20imports",link:"https%3A%2F%2Fsfc.vuejs.org%2F%23eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcblxuaW1wb3J0IENvbXAgZnJvbSBcIi4vQ29tcC52dWVcIjtcblxuY29uc3QgbXNnID0gcmVmKFwiSGVsbG8gV29ybGQhXCIpO1xuPC9zY3JpcHQ%2BXG5cbjx0ZW1wbGF0ZT5cbiAgPGgxPnt7IG1zZyB9fTwvaDE%2BXG4gIDxpbnB1dCB2LW1vZGVsPVwibXNnXCIgLz5cbiAgPENvbXAgLz5cbjwvdGVtcGxhdGU%2BXG4iLCJDb21wLnZ1ZSI6Ijx0ZW1wbGF0ZT5cbiAgPGRpdj5Db21wPC9kaXY%2BXG48L3RlbXBsYXRlPlxuIiwiaW1wb3J0LW1hcC5qc29uIjoie1wiaW1wb3J0c1wiOntcInZ1ZVwiOlwiaHR0cHM6Ly9zZmMudnVlanMub3JnL3Z1ZS5ydW50aW1lLmVzbS1icm93c2VyLmpzXCJ9fSJ9"}),x,l(e,{key:"6bfba588",title:"Vue%20demo%20with%20customized%20settings",link:"https%3A%2F%2Fsfc.vuejs.org%2F%23__DEV____SSR__eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcblxuY29uc3QgbXNnID0gcmVmKFwiSGVsbG8gUGxheWdyb3VuZCFcIik7XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8aDE%2Be3sgbXNnIH19PC9oMT5cbiAgPGlucHV0IHYtbW9kZWw9XCJtc2dcIiAvPlxuPC90ZW1wbGF0ZT5cbiIsImltcG9ydC1tYXAuanNvbiI6IntcbiAgXCJpbXBvcnRzXCI6IHtcbiAgICBcInZ1ZVwiOiBcImh0dHBzOi8vc2ZjLnZ1ZWpzLm9yZy92dWUucnVudGltZS5lc20tYnJvd3Nlci5qc1wiLFxuICAgIFwidnVlL3NlcnZlci1yZW5kZXJlclwiOiBcImh0dHBzOi8vc2ZjLnZ1ZWpzLm9yZy9zZXJ2ZXItcmVuZGVyZXIuZXNtLWJyb3dzZXIuanNcIlxuICB9XG59In0%3D"}),Z])}const G=d(m,[["render",V],["__file","playground.html.vue"]]);export{G as default};
