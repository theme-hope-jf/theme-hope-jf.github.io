import{a3 as p,Z as t,_ as i,a4 as c,a1 as n,a2 as s,$ as e,a0 as o,a5 as a,D as r}from"./framework-61fc4e0a.js";const B={},d=n("p",null,"This tutorial guides you how to customize theme effects.",-1),y=a(`<h2 id="clear-effects" tabindex="-1"><a class="header-anchor" href="#clear-effects" aria-hidden="true">#</a> Clear Effects</h2><p>By default the theme will:</p><ul><li>Use color list to decorate categories and tags</li><li>Add animation when switching pages and elements</li><li>Add ease-in animations to homepage elements, and add hovering effects to features.</li><li>Use a more fancy code copy button</li><li>Use fancy tooltips.</li><li>Added fade-in when switching between day mode and night mode</li></ul><p>If you need to remove these fancy styles, please set <code>pure: true</code> in the theme options to enable pure mode.</p><p>Meanwhile, you can control the duration of the animation by controlling <code>$color-transition</code> and <code>transform-transition</code> in the palette file:</p><div class="language-scss" data-ext="scss"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// .vuepress/styles/palette.scss</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">$color-transition</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">0</span><span style="color:#E06C75;">s</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$transform-transition</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">0</span><span style="color:#E06C75;">s</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="adding-effects" tabindex="-1"><a class="header-anchor" href="#adding-effects" aria-hidden="true">#</a> Adding Effects</h2><p>You are free to add more effects to your site through config file options and client files provided by VuePress.</p>`,8),u=n("code",null,"head",-1),v=a(`<div class="hint-container tip"><p class="hint-container-title">Example</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// .vuepress/config.ts</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">defineUserConfig</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;vuepress&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">defineUserConfig</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">//...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">head</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">//...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// import an external script</span></span>
<span class="line"><span style="color:#ABB2BF;">    [</span><span style="color:#98C379;">&quot;script&quot;</span><span style="color:#ABB2BF;">, { </span><span style="color:#E06C75;">src</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;YOUR_SCRIPT_LINK&quot;</span><span style="color:#ABB2BF;"> }],</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// add a script</span></span>
<span class="line"><span style="color:#ABB2BF;">    [</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#98C379;">&quot;script&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      {},</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#98C379;">\`</span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#98C379;">        // your script here</span></span>
<span class="line"><span style="color:#98C379;">      \`</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    ],</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// add an external CSS</span></span>
<span class="line"><span style="color:#ABB2BF;">    [</span><span style="color:#98C379;">&quot;link&quot;</span><span style="color:#ABB2BF;">, { </span><span style="color:#E06C75;">rel</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;stylesheet&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">href</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;YOUR_STYLE_LINK&quot;</span><span style="color:#ABB2BF;"> }],</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// add a style</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// We don&#39;t recommend this, you should prefer to use .vuepress/style/index.scss</span></span>
<span class="line"><span style="color:#ABB2BF;">    [</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#98C379;">&quot;style&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      {},</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#98C379;">\`</span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#98C379;">        /* your style here */</span></span>
<span class="line"><span style="color:#98C379;">      \`</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    ],</span></span>
<span class="line"><span style="color:#ABB2BF;">  ],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">//...</span></span>
<span class="line"><span style="color:#ABB2BF;">});</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,1),m=n("code",null,"head",-1),F=a(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">---</span></span>
<span class="line"><span style="color:#E06C75;">head</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">YOUR_SCRIPT_LINK</span></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">type</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">module</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">src</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">YOUR_SCRIPT_LINK</span></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">style</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">YOUR_STYLE_LINK</span></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">style</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">type</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">text/css</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">content</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">|</span></span>
<span class="line"><span style="color:#98C379;">        /* your style here */</span></span>
<span class="line"><span style="color:#ABB2BF;">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">Page content</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">...</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),A=a(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// .vuepress/client.ts</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">defineClientConfig</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;@vuepress/client&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">ExampleGlobalComponent</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;./components/ExampleGlobalComponent.vue&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">ExampleRootComponent</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;./components/ExampleRootComponent.vue&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">setupExampleCompositionAPI</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;./composables/exampleCompositionAPI&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">defineClientConfig</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// Client enhancements</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">enhance</span><span style="color:#ABB2BF;">: ({ </span><span style="color:#E06C75;font-style:italic;">app</span><span style="color:#ABB2BF;"> }) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// register global component</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">component</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;ExampleGlobalComponent&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">ExampleGlobalComponent</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// global registration</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">setup</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// Register the global Composition API</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">setupExampleCompositionAPI</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// global component</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">rootComponents</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#98C379;">&quot;ExampleRootComponent&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">//...</span></span>
<span class="line"><span style="color:#ABB2BF;">  ],</span></span>
<span class="line"><span style="color:#ABB2BF;">});</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function b(C,f){const l=r("RouterLink");return t(),i("div",null,[d,c(" more "),y,n("ul",null,[n("li",null,[n("p",null,[s("If you need to add global CSS and JS, please set "),u,s(" option in VuePress "),e(l,{to:"/cookbook/vuepress/config.html"},{default:o(()=>[s("config file")]),_:1}),s(".")]),v]),n("li",null,[n("p",null,[s("If you need to add page-level CSS and JS, please set "),m,s(" option in "),e(l,{to:"/cookbook/vuepress/page.html#frontmatter"},{default:o(()=>[s("Front Matter")]),_:1}),s(".")]),F]),n("li",null,[n("p",null,[s("More global advanced operations can be done through "),e(l,{to:"/cookbook/vuepress/config.html#client-config"},{default:o(()=>[s("client configuration file")]),_:1}),s(".")]),A])])])}const E=p(B,[["render",b],["__file","effect.html.vue"]]);export{E as default};
