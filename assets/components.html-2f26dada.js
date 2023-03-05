import{a3 as q,Z as f,_ as x,a4 as C,$ as e,a0 as o,a1 as s,a2 as n,a5 as l,D as a}from"./framework-61fc4e0a.js";const w={},P=l("<p>通过使用<code>vuepress-plugin-components</code>，你可以在你的 Markdown 文件中导入和使用一些组件。</p><p>可用组件:</p><ul><li>ArtPlayer</li><li>AudioPlayer</li><li>Badge</li><li>BiliBili</li><li>CodePen</li><li>FontIcon</li><li>PDF</li><li>Replit</li><li>SiteInfo</li><li>StackBlitz</li><li>VideoPlayer</li><li>YouTube</li></ul><p>默认情况下，<code>&lt;Badge /&gt;</code> 和 <code>&lt;FontIcon /&gt;</code> 是启用的。</p><p>要启用组件，你应该使用组件名称数组设置 <code>plugin.components.components</code>。</p>",5),S=s("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"// .vuepress/config.ts")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"import"),s("span",{style:{color:"#ABB2BF"}}," { "),s("span",{style:{color:"#E06C75"}},"defineUserConfig"),s("span",{style:{color:"#ABB2BF"}}," } "),s("span",{style:{color:"#C678DD"}},"from"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},'"vuepress"'),s("span",{style:{color:"#ABB2BF"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"import"),s("span",{style:{color:"#ABB2BF"}}," { "),s("span",{style:{color:"#E06C75"}},"hopeTheme"),s("span",{style:{color:"#ABB2BF"}}," } "),s("span",{style:{color:"#C678DD"}},"from"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},'"vuepress-theme-hope"'),s("span",{style:{color:"#ABB2BF"}},";")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"export"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#C678DD"}},"default"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#61AFEF"}},"defineUserConfig"),s("span",{style:{color:"#ABB2BF"}},"({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#E06C75"}},"theme"),s("span",{style:{color:"#ABB2BF"}},": "),s("span",{style:{color:"#61AFEF"}},"hopeTheme"),s("span",{style:{color:"#ABB2BF"}},"({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    "),s("span",{style:{color:"#E06C75"}},"plugins"),s("span",{style:{color:"#ABB2BF"}},": {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"      "),s("span",{style:{color:"#E06C75"}},"components"),s("span",{style:{color:"#ABB2BF"}},": {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 你想使用的组件")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        "),s("span",{style:{color:"#E06C75"}},"components"),s("span",{style:{color:"#ABB2BF"}},": [")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          "),s("span",{style:{color:"#98C379"}},'"AudioPlayer"'),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          "),s("span",{style:{color:"#98C379"}},'"Badge"'),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          "),s("span",{style:{color:"#98C379"}},'"BiliBili"'),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          "),s("span",{style:{color:"#98C379"}},'"CodePen"'),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          "),s("span",{style:{color:"#98C379"}},'"PDF"'),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          "),s("span",{style:{color:"#98C379"}},'"Replit"'),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          "),s("span",{style:{color:"#98C379"}},'"StackBlitz"'),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          "),s("span",{style:{color:"#98C379"}},'"VideoPlayer"'),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          "),s("span",{style:{color:"#98C379"}},'"YouTube"'),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        ],")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"      },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  }),")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"});")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),D=s("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"// .vuepress/config.js")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"import"),s("span",{style:{color:"#ABB2BF"}}," { "),s("span",{style:{color:"#E06C75"}},"hopeTheme"),s("span",{style:{color:"#ABB2BF"}}," } "),s("span",{style:{color:"#C678DD"}},"from"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},'"vuepress-theme-hope"'),s("span",{style:{color:"#ABB2BF"}},";")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"export"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#C678DD"}},"default"),s("span",{style:{color:"#ABB2BF"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#E06C75"}},"theme"),s("span",{style:{color:"#ABB2BF"}},": "),s("span",{style:{color:"#61AFEF"}},"hopeTheme"),s("span",{style:{color:"#ABB2BF"}},"({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    "),s("span",{style:{color:"#E06C75"}},"plugins"),s("span",{style:{color:"#ABB2BF"}},": {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"      "),s("span",{style:{color:"#E06C75"}},"components"),s("span",{style:{color:"#ABB2BF"}},": {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 你想使用的组件")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        "),s("span",{style:{color:"#E06C75"}},"components"),s("span",{style:{color:"#ABB2BF"}},": [")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          "),s("span",{style:{color:"#98C379"}},'"AudioPlayer"'),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          "),s("span",{style:{color:"#98C379"}},'"Badge"'),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          "),s("span",{style:{color:"#98C379"}},'"BiliBili"'),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          "),s("span",{style:{color:"#98C379"}},'"CodePen"'),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          "),s("span",{style:{color:"#98C379"}},'"PDF"'),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          "),s("span",{style:{color:"#98C379"}},'"Replit"'),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          "),s("span",{style:{color:"#98C379"}},'"StackBlitz"'),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          "),s("span",{style:{color:"#98C379"}},'"VideoPlayer"'),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"          "),s("span",{style:{color:"#98C379"}},'"YouTube"'),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"        ],")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"      },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  }),")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"};")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),z=s("h2",{id:"artplayer",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#artplayer","aria-hidden":"true"},"#"),n(" ArtPlayer")],-1),T=s("p",null,"一个视频播放器:",-1),E=l(`<div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;ArtPlayer src=&quot;https://mse-demo.u2sb.com/caminandes_03_llamigos_720p.mp4&quot; /&gt;</span></span>
<span class="line"></span></code></pre></div><p>一个包含了封面的播放器:</p>`,2),Y=l(`<div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;ArtPlayer</span></span>
<span class="line"><span style="color:#ABB2BF;">  src=&quot;https://mse-demo.u2sb.com/caminandes_03_llamigos_720p.mp4&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  poster=&quot;/poster.svg&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">/&gt;</span></span>
<span class="line"></span></code></pre></div><p>一个包含自定义设置的播放器:</p>`,2),V=l(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;ArtPlayer</span></span>
<span class="line"><span style="color:#ABB2BF;">  src=&quot;https://mse-demo.u2sb.com/caminandes_03_llamigos_720p.mp4&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  airplay</span></span>
<span class="line"><span style="color:#ABB2BF;">  aspect-ratio</span></span>
<span class="line"><span style="color:#ABB2BF;">  auto-size</span></span>
<span class="line"><span style="color:#ABB2BF;">  auto-orientation</span></span>
<span class="line"><span style="color:#ABB2BF;">  auto-playback</span></span>
<span class="line"><span style="color:#ABB2BF;">  fast-forward</span></span>
<span class="line"><span style="color:#ABB2BF;">  flip</span></span>
<span class="line"><span style="color:#ABB2BF;">  fullscreen-web</span></span>
<span class="line"><span style="color:#ABB2BF;">  lock</span></span>
<span class="line"><span style="color:#ABB2BF;">  loop</span></span>
<span class="line"><span style="color:#ABB2BF;">  is-live</span></span>
<span class="line"><span style="color:#ABB2BF;">  muted</span></span>
<span class="line"><span style="color:#ABB2BF;">  mini-progress-bar</span></span>
<span class="line"><span style="color:#ABB2BF;">  pip</span></span>
<span class="line"><span style="color:#ABB2BF;">  screenshot</span></span>
<span class="line"><span style="color:#ABB2BF;">  subtitle-offset</span></span>
<span class="line"><span style="color:#ABB2BF;">/&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),I=s("h2",{id:"audioplayer",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#audioplayer","aria-hidden":"true"},"#"),n(" AudioPlayer")],-1),J=s("p",null,"一个音频播放器:",-1),j=l(`<div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;AudioPlayer src=&quot;/assets/assets/sample.mp3&quot; /&gt;</span></span>
<span class="line"></span></code></pre></div><p>一个拥有标题和封面的音频播放器:</p>`,2),M=l(`<div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;AudioPlayer</span></span>
<span class="line"><span style="color:#ABB2BF;">  src=&quot;/assets/assets/sample.mp3&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  title=&quot;A Sample Audio&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  poster=&quot;/logo.svg&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">/&gt;</span></span>
<span class="line"></span></code></pre></div>`,1),N=s("h2",{id:"badge",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#badge","aria-hidden":"true"},"#"),n(" Badge")],-1),R=s("p",null,"支持自定义颜色的徽章。",-1),H=s("h2",{id:"bilibili",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#bilibili","aria-hidden":"true"},"#"),n(" BiliBili")],-1),L=s("p",null,"在 Markdown 文件中嵌入 B 站视频。",-1),Z=s("p",null,"一个 B 站视频:",-1),K=l(`<div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;BiliBili bvid=&quot;BV1kt411o7C3&quot; /&gt;</span></span>
<span class="line"></span></code></pre></div><p>一个自定义分 P 和空降地址的 B 站视频:</p>`,2),$=l(`<div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;BiliBili bvid=&quot;BV1kt411o7C3&quot; ratio=&quot;16:9&quot; time=&quot;60&quot; page=&quot;2&quot; /&gt;</span></span>
<span class="line"></span></code></pre></div><p>一个自定义设置的 B 站视频:</p>`,2),Q=l(`<div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;BiliBili bvid=&quot;BV1kt411o7C3&quot; low-quality no-danmaku /&gt;</span></span>
<span class="line"></span></code></pre></div>`,1),W=s("h2",{id:"codepen",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#codepen","aria-hidden":"true"},"#"),n(" CodePen")],-1),X=s("p",null,"一个允许你嵌入 CodePen 演示的组件。",-1),U=s("p",null,"一个使用用户和 Slug Hash 的案例:",-1),G=l(`<div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;CodePen</span></span>
<span class="line"><span style="color:#ABB2BF;">  user=&quot;kowlor&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  slug-hash=&quot;ZYYQoy&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  title=&quot;Solar System animation - Pure CSS&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  :default-tab=&quot;[</span><span style="color:#61AFEF;">&#39;css&#39;,&#39;result&#39;</span><span style="color:#ABB2BF;">]&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  :theme=&quot;$isDarkmode? &#39;dark&#39;: &#39;light&#39;&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">/&gt;</span></span>
<span class="line"></span></code></pre></div><p>一个使用链接的案例:</p>`,2),O=l(`<div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;CodePen</span></span>
<span class="line"><span style="color:#ABB2BF;">  link=&quot;https://codepen.io/kowlor/pen/ZYYQoy&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  title=&quot;Solar System animation - Pure CSS&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  :default-tab=&quot;[</span><span style="color:#61AFEF;">&#39;css&#39;,&#39;result&#39;</span><span style="color:#ABB2BF;">]&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  :theme=&quot;$isDarkmode? &#39;dark&#39;: &#39;light&#39;&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">/&gt;</span></span>
<span class="line"></span></code></pre></div><p>一个加载运行的案例:</p>`,2),ss=l(`<div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;CodePen</span></span>
<span class="line"><span style="color:#ABB2BF;">  link=&quot;https://codepen.io/kowlor/pen/ZYYQoy&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  title=&quot;Envelope w/ Hearts&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  status=&quot;clicktorun&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  :theme=&quot;$isDarkmode? &#39;dark&#39;: &#39;light&#39;&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">/&gt;</span></span>
<span class="line"></span></code></pre></div>`,1),ns=s("h2",{id:"fonticon",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#fonticon","aria-hidden":"true"},"#"),n(" FontIcon")],-1),es=s("p",null,"允许你显示字体图标的组件。",-1),ls=l(`<div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">-</span><span style="color:#ABB2BF;"> 主页图标: &lt;FontIcon icon=&quot;home&quot; /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">-</span><span style="color:#ABB2BF;"> 一个大绿分享图标: &lt;FontIcon icon=&quot;share&quot; color=&quot;#3eaf7c&quot; size=&quot;32&quot; /&gt;</span></span>
<span class="line"></span></code></pre></div>`,1),as=s("h2",{id:"pdf",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#pdf","aria-hidden":"true"},"#"),n(" PDF")],-1),os=s("p",null,"PDF 浏览器组件。",-1),ts=s("p",null,"默认 PDF 阅读器:",-1),is=l(`<div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;PDF url=&quot;/assets/sample.pdf&quot; /&gt;</span></span>
<span class="line"></span></code></pre></div><p>禁用工具栏且初始页面为第二页的阅读器:</p>`,2),ps=l(`<div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;PDF url=&quot;/assets/sample.pdf&quot; page=&quot;2&quot; no-toolbar /&gt;</span></span>
<span class="line"></span></code></pre></div>`,1),cs=s("h2",{id:"replit",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#replit","aria-hidden":"true"},"#"),n(" Replit")],-1),rs=s("p",null,"一个嵌入的 repl:",-1),ds=l(`<div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;Replit user=&quot;FuckDoctors&quot; repl=&quot;Java-Test&quot; /&gt;</span></span>
<span class="line"></span></code></pre></div><p>一个嵌入的 repl，并且显示指定的文件:</p>`,2),Bs=l(`<div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;Replit user=&quot;FuckDoctors&quot; repl=&quot;Java-Test&quot; file=&quot;Main.java&quot; /&gt;</span></span>
<span class="line"></span></code></pre></div><p>一个 repl 链接:</p>`,2),us=l(`<div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;Replit user=&quot;FuckDoctors&quot; repl=&quot;Java-Test&quot; plain /&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="siteinfo" tabindex="-1"><a class="header-anchor" href="#siteinfo" aria-hidden="true">#</a> SiteInfo</h2><p>基础站点信息:</p>`,3),ms=l(`<div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;SiteInfo name=&quot;Mr.Hope’s Blog&quot; url=&quot;https://mrhope.site&quot; preview=&quot;https://theme-hope.vuejs.press/assets/image/mrhope.jpg&quot; /&gt;</span></span>
<span class="line"></span></code></pre></div><p>有更多属性的站点信息:</p>`,2),hs=l(`<div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;SiteInfo</span></span>
<span class="line"><span style="color:#ABB2BF;">  name=&quot;Mr.Hope’s Blog&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  desc=&quot;Where there is light, there is hope&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  url=&quot;https://mrhope.site&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  logo=&quot;https://mrhope.site/logo.svg&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  repo=&quot;https://github.com/Mister-Hope/Mister-Hope.github.io&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  preview=&quot;https://theme-hope.vuejs.press/assets/image/mrhope.jpg&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">/&gt;</span></span>
<span class="line"></span></code></pre></div>`,1),ys=s("h2",{id:"stackblitz",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#stackblitz","aria-hidden":"true"},"#"),n(" StackBlitz")],-1),bs=s("p",null,"在 Markdown 文件中嵌入 StackBlitz 演示。",-1),vs=s("p",null,"一个 StackBlitz 项目:",-1),gs=l(`<div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;StackBlitz id=&quot;vuepress-theme-hope&quot; /&gt;</span></span>
<span class="line"></span></code></pre></div><p>一个自定义设置的 StackBlitz 项目:</p>`,2),Fs=l(`<div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;StackBlitz id=&quot;vuepress-theme-hope&quot; hideExplorer hideNavigation hideDevtools /&gt;</span></span>
<span class="line"></span></code></pre></div>`,1),As=s("h2",{id:"videoplayer",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#videoplayer","aria-hidden":"true"},"#"),n(" VideoPlayer")],-1),_s=s("p",null,"在 Markdown 文件中嵌入视频。",-1),ks=s("p",null,"一个视频播放器:",-1),qs=l(`<div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;VideoPlayer src=&quot;https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f1/Sintel_movie_4K.webm/Sintel_movie_4K.webm.1080p.vp9.webm&quot; /&gt;</span></span>
<span class="line"></span></code></pre></div><p>一个包含了封面和字幕的播放器:</p>`,2),fs=l(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;VideoPlayer</span></span>
<span class="line"><span style="color:#ABB2BF;">  src=&quot;https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f1/Sintel_movie_4K.webm/Sintel_movie_4K.webm.1080p.vp9.webm&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  poster=&quot;/assets/poster.svg&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  :tracks=&quot;[</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">      default: true,</span></span>
<span class="line"><span style="color:#ABB2BF;">      src: &#39;/assets/subtitles/en.vtt&#39;,</span></span>
<span class="line"><span style="color:#ABB2BF;">      kind: &#39;subtitles&#39;,</span></span>
<span class="line"><span style="color:#ABB2BF;">      label: &#39;English&#39;,</span></span>
<span class="line"><span style="color:#ABB2BF;">      srcLang: &#39;en&#39;,</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">      src: &#39;/assets/subtitles/fr.vtt&#39;,</span></span>
<span class="line"><span style="color:#ABB2BF;">      kind: &#39;subtitles&#39;,</span></span>
<span class="line"><span style="color:#ABB2BF;">      label: &#39;French&#39;,</span></span>
<span class="line"><span style="color:#ABB2BF;">      srcLang: &#39;fr&#39;,</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;">  ]&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">/&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),xs=s("h2",{id:"youtube",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#youtube","aria-hidden":"true"},"#"),n(" YouTube")],-1),Cs=s("p",null,"在 Markdown 文件中嵌入 YouTube 视频。",-1),ws=s("p",null,"一个 YouTube 视频:",-1),Ps=l(`<div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;YouTube id=&quot;0JJPfz5dg20&quot; /&gt;</span></span>
<span class="line"></span></code></pre></div><p>一个自定义设置的 YouTube 视频:</p>`,2),Ss=l(`<div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;YouTube id=&quot;0JJPfz5dg20&quot; disable-fullscreen /&gt;</span></span>
<span class="line"></span></code></pre></div><p>一个 YouTube 播放列表:</p>`,2),Ds=l(`<div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;YouTube list-type=&quot;playlist&quot; list=&quot;PLJNLwTPak6dhCRzVelZIs2-DfBp01NX_1&quot; /&gt;</span></span>
<span class="line"></span></code></pre></div>`,1);function zs(p,Ts){const F=a("CodeTabs"),c=a("ArtPlayer"),t=a("ProjectLink"),m=a("AudioPlayer"),i=a("Badge"),r=a("BiliBili"),d=a("CodePen"),h=a("FontIcon"),y=a("PDF"),B=a("Replit"),b=a("SiteInfo"),v=a("StackBlitz"),g=a("VideoPlayer"),u=a("YouTube");return f(),x("div",null,[P,C(" more "),e(F,{id:"75",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:o(({title:A,value:_,isActive:k})=>[S]),tab1:o(({title:A,value:_,isActive:k})=>[D]),_:1}),z,T,e(c,{src:"https://mse-demo.u2sb.com/caminandes_03_llamigos_720p.mp4"}),E,e(c,{src:"https://mse-demo.u2sb.com/caminandes_03_llamigos_720p.mp4",poster:"/poster.svg"}),Y,e(c,{src:"https://mse-demo.u2sb.com/caminandes_03_llamigos_720p.mp4",airplay:"","aspect-ratio":"","auto-size":"","auto-orientation":"","auto-playback":"","fast-forward":"",flip:"","fullscreen-web":"",lock:"",loop:"","is-live":"",muted:"","mini-progress-bar":"",pip:"",screenshot:"","subtitle-offset":""}),V,s("p",null,[n("有关可用属性，请参阅 "),e(t,{name:"components",path:"/zh/guide/artplayer.html"},{default:o(()=>[n("ArtPlayer")]),_:1}),n(" 页面。")]),I,J,e(m,{src:"/assets/assets/sample.mp3"}),j,e(m,{src:"/assets/assets/sample.mp3",title:"A Sample Audio",poster:"/logo.svg"}),M,s("p",null,[n("有关可用属性，请参阅 "),e(t,{name:"components",path:"/zh/guide/audioplayer.html"},{default:o(()=>[n("AudioPlayer")]),_:1}),n(" 页面。")]),N,R,s("ul",null,[s("li",null,[e(i,{text:"tip",type:"tip",vertical:"middle"})]),s("li",null,[e(i,{text:"warning",type:"warning",vertical:"middle"})]),s("li",null,[e(i,{text:"danger",type:"danger",vertical:"middle"})]),s("li",null,[e(i,{text:"info",type:"info",vertical:"middle"})]),s("li",null,[e(i,{text:"note",type:"note",vertical:"middle"})])]),s("p",null,[n("有关可用属性，请参阅 "),e(t,{name:"components",path:"/zh/guide/badge.html"},{default:o(()=>[n("Badge")]),_:1}),n(" 页面。")]),H,L,Z,e(r,{bvid:"BV1kt411o7C3"}),K,e(r,{bvid:"BV1kt411o7C3",ratio:"16:9",time:"60",page:"2"}),$,e(r,{bvid:"BV1kt411o7C3","low-quality":"","no-danmaku":""}),Q,s("p",null,[n("有关可用属性，请参阅 "),e(t,{name:"components",path:"/zh/guide/bilibili.html"},{default:o(()=>[n("BiliBili")]),_:1}),n(" 页面。")]),W,X,U,e(d,{user:"kowlor","slug-hash":"ZYYQoy",title:"Solar System animation - Pure CSS","default-tab":["css","result"],theme:p.$isDarkmode?"dark":"light"},null,8,["theme"]),G,e(d,{link:"https://codepen.io/kowlor/pen/ZYYQoy",title:"Solar System animation - Pure CSS","default-tab":["css","result"],theme:p.$isDarkmode?"dark":"light"},null,8,["theme"]),O,e(d,{link:"https://codepen.io/keginaring/pen/XWZazwW",title:"Solar System animation - Pure CSS",status:"clicktorun",theme:p.$isDarkmode?"dark":"light"},null,8,["theme"]),ss,s("p",null,[n("有关可用属性，请参阅 "),e(t,{name:"components",path:"/zh/guide/codepen.html"},{default:o(()=>[n("CodePen")]),_:1}),n(" 页面。")]),ns,es,s("ul",null,[s("li",null,[s("p",null,[n("主页图标: "),e(h,{icon:"home"})])]),s("li",null,[s("p",null,[n("一个大绿分享图标: "),e(h,{icon:"share",color:"#3eaf7c",size:"32"})])])]),ls,s("p",null,[n("有关可用属性，请参阅 "),e(t,{name:"components",path:"/zh/guide/fonticon.html"},{default:o(()=>[n("FontIcon")]),_:1}),n(" 页面。")]),as,os,ts,e(y,{url:"/assets/sample.pdf"}),is,e(y,{url:"/assets/sample.pdf",page:"2","no-toolbar":""}),ps,s("p",null,[n("有关可用属性，请参阅 "),e(t,{name:"components",path:"/zh/guide/pdf.html"},{default:o(()=>[n("PDF")]),_:1}),n(" 页面。")]),cs,rs,e(B,{user:"FuckDoctors",repl:"Java-Test"}),ds,e(B,{user:"FuckDoctors",repl:"Java-Test",file:"Main.java"}),Bs,e(B,{user:"FuckDoctors",repl:"Java-Test",plain:""}),us,e(b,{name:"Mr.Hope’s Blog",url:"https://mrhope.site",preview:"https://theme-hope.vuejs.press/assets/image/mrhope.jpg"}),ms,e(b,{name:"Mr.Hope’s Blog",desc:"Where there is light, there is hope",url:"https://mrhope.site",logo:"https://mrhope.site/logo.svg",repo:"https://github.com/Mister-Hope/Mister-Hope.github.io",preview:"https://theme-hope.vuejs.press/assets/image/mrhope.jpg"}),hs,s("p",null,[n("有关可用属性，请参阅 "),e(t,{name:"components",path:"/zh/guide/siteinfo.html"},{default:o(()=>[n("SiteInfo")]),_:1}),n(" 页面。")]),ys,bs,vs,e(v,{id:"vuepress-theme-hope"}),gs,e(v,{id:"vuepress-theme-hope",hideExplorer:"",hideNavigation:"",hideDevtools:""}),Fs,s("p",null,[n("有关可用属性，请参阅 "),e(t,{name:"components",path:"/zh/guide/stackblitz.html"},{default:o(()=>[n("StackBlitz")]),_:1}),n(" 页面。")]),As,_s,ks,e(g,{src:"https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f1/Sintel_movie_4K.webm/Sintel_movie_4K.webm.1080p.vp9.webm"}),qs,e(g,{src:"https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f1/Sintel_movie_4K.webm/Sintel_movie_4K.webm.1080p.vp9.webm",poster:"/assets/poster.svg",tracks:[{default:!0,src:"/assets/subtitles/en.vtt",kind:"subtitles",label:"English",srcLang:"en"},{src:"/assets/subtitles/fr.vtt",kind:"subtitles",label:"French",srcLang:"fr"}]},null,8,["tracks"]),fs,s("p",null,[n("有关可用属性，请参阅 "),e(t,{name:"components",path:"/zh/guide/videoplayer.html"},{default:o(()=>[n("VideoPlayer")]),_:1}),n(" 页面。")]),xs,Cs,ws,e(u,{id:"0JJPfz5dg20"}),Ps,e(u,{id:"0JJPfz5dg20","disable-fullscreen":""}),Ss,e(u,{"list-type":"playlist",list:"PLJNLwTPak6dhCRzVelZIs2-DfBp01NX_1"}),Ds,s("p",null,[n("有关可用属性，请参阅 "),e(t,{name:"components",path:"/zh/guide/youtube.html"},{default:o(()=>[n("YouTube")]),_:1}),n(" 页面。")])])}const Ys=q(w,[["render",zs],["__file","components.html.vue"]]);export{Ys as default};
