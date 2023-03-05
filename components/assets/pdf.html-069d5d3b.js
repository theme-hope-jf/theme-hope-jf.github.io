import{a4 as t,_ as c,$ as i,a6 as r,a0 as a,a2 as s,a3 as n,a5 as l,F as o}from"./framework-2eced249.js";const d={},B=s("p",null,"PDF 预览组件。",-1),u=s("p",null,"你可以使用此组件在 Markdown 中嵌入 PDF 阅读器。",-1),y=s("h2",{id:"示例",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#示例","aria-hidden":"true"},"#"),n(" 示例")],-1),h=s("p",null,"默认 PDF 阅读器:",-1),m=l(`<div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;PDF url=&quot;/sample.pdf&quot; /&gt;</span></span>
<span class="line"></span></code></pre></div><p>禁用工具栏且初始页面为第二页的阅读器:</p>`,2),v=l(`<div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;PDF url=&quot;/sample.pdf&quot; page=&quot;2&quot; no-toolbar /&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="pdfjs-查看器" tabindex="-1"><a class="header-anchor" href="#pdfjs-查看器" aria-hidden="true">#</a> PDFJS 查看器</h2><p>并非所有浏览器都支持嵌入 PDF 查看器 (如: 现在没有移动浏览器支持此功能)，因此我们添加了对 PDFJS 查看器的支持。</p>`,3),F={href:"https://github.com/mozilla/pdf.js/releases",target:"_blank",rel:"noopener noreferrer"},b=l(`<ul><li>如果你只想在移动设备上添加对现代浏览器的支持，请下载 <code>pdfjs-3.1.81-dist.zip</code></li><li>如果你想添加对大多数浏览器的支持，请下载 <code>pdfjs-3.1.81-legacy-dist.zip</code></li></ul><p>下载完成后，请在 <code>.vuepress/public</code> 文件夹中解压到你想要的位置，然后在组件选项中将 <code>componentOptions.pdf.pdfjs</code> 设置为相对于 <code>.vuepress/public</code> 的路径。</p><details class="hint-container details"><summary>示例</summary><p>如果你下载 <code>pdfjs-3.1.81-legacy-dist.zip</code> 并解压到 <code>.vuepress/public/assets/lib/pdfjs</code> ，你应该设置：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// .vuepress/config.ts</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">componentsPlugin</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;vuepress-plugin-components&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">plugins</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">componentsPlugin</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">componentOptions</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">pdf</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E06C75;">pdfjs</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;/assets/lib/pdfjs&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#ABB2BF;">    }),</span></span>
<span class="line"><span style="color:#ABB2BF;">  ],</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="hint-container details"><summary>noToolbar 支持</summary><p>默认的 PDFJS 查看器不支持自定义工具栏，如果你想添加这个功能的支持，你应该手动将以下代码添加到在 <code>pdfjs</code> 文件夹中的 <code>web/viewer.html</code> 的 <code>&lt;script src=&quot;viewer.js&quot;&gt;&lt;/script&gt;</code> 行之前：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!-- ... --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">src</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;../build/pdf.js&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!-- ========== 下面是你应该添加的内容 ============= --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!-- 添加对 toolbar=0 的支持 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">location</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">hash</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">includes</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;toolbar=0&quot;</span><span style="color:#ABB2BF;">)) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">style</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">createElement</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;style&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">style</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">textContent</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;#toolbarContainer { display: none; }&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">head</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">append</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">style</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!-- ========== 以上是你应该添加的 ============= --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">src</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;viewer.js&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!-- ... --&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><h3 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> url</h3><ul><li>类型: <code>string</code></li><li>必填: 是</li></ul><p>PDF 链接，<strong>不支持</strong>相对路径。</p><h3 id="width" tabindex="-1"><a class="header-anchor" href="#width" aria-hidden="true">#</a> width</h3><ul><li>类型: <code>string | number</code></li><li>默认值: <code>100%</code></li></ul><p>PDF 浏览器宽度。</p><h3 id="height" tabindex="-1"><a class="header-anchor" href="#height" aria-hidden="true">#</a> height</h3><ul><li>类型: <code>string | number</code></li><li>必填：否</li></ul><p>PDF 浏览器件高度</p><h3 id="ratio" tabindex="-1"><a class="header-anchor" href="#ratio" aria-hidden="true">#</a> ratio</h3><ul><li>类型: <code>number</code></li><li>默认值: <code>16 / 9</code></li></ul><p>PDF 浏览器高度宽高比，只有当未指定 <code>height</code> 时有效。</p><h3 id="page" tabindex="-1"><a class="header-anchor" href="#page" aria-hidden="true">#</a> page</h3><ul><li>类型: <code>number</code></li><li>默认值: <code>1</code></li></ul><p>PDF 文档的初始页面</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>此属性仅在基于 Chromium 内核的浏览器上有效。</p></div><h3 id="notoolbar" tabindex="-1"><a class="header-anchor" href="#notoolbar" aria-hidden="true">#</a> noToolbar</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否隐藏工具栏</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>此属性仅在基于 Chromium 内核的浏览器上有效。</p></div><h4 id="zoom" tabindex="-1"><a class="header-anchor" href="#zoom" aria-hidden="true">#</a> zoom</h4><ul><li>类型: <code>number</code></li><li>默认值: <code>100</code></li></ul><p>PDF 文档的初始缩放比例</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>此属性仅在基于 Chromium 内核的浏览器上有效。</p></div>`,29);function A(g,f){const e=o("PDF"),p=o("ExternalLinkIcon");return c(),i("div",null,[B,u,r(" more "),y,h,a(e,{url:"/sample.pdf"}),m,a(e,{url:"/sample.pdf",page:"2","no-toolbar":""}),v,s("p",null,[n("由于 PDFJS 查看器 很大，你需要从 "),s("a",F,[n("Github"),a(p)]),n(" 手动下载它：")]),b])}const E=t(d,[["render",A],["__file","pdf.html.vue"]]);export{E as default};
