import{a3 as t,Z as c,_ as r,a4 as i,a1 as s,a2 as n,$ as e,a0 as B,a5 as a,D as l}from"./framework-61fc4e0a.js";const d="/v2/assets/article-list-light-637da02e.png",y="/v2/assets/article-list-dark-01c35cbb.png",F={},m=s("p",null,[n("主题默认在 "),s("code",null,"/article/"),n(" 路径下为你提供了全部的文章列表。")],-1),u=a('<h2 id="文章" tabindex="-1"><a class="header-anchor" href="#文章" aria-hidden="true">#</a> 文章</h2><p>所有文章都会默认被添加到文章列表中渲染在 <code>/article/</code> 路径下。</p><p><img src="'+d+'" alt="文章列表" data-mode="lightmode-only" loading="lazy"><img src="'+y+'" alt="文章列表" data-mode="darkmode-only" loading="lazy"></p><p>如果你不希望该列表包含一些特定的文章，只需在文章的 frontmatter 中将 <code>article</code> 设置为 <code>false</code>，或者你也可以通过主题选项中的 <code>plugins.blog.filter</code> 自定义哪些页面是文章。</p><p>如果你希望在文章列表中置顶特定文章，只需在文章的 frontmatter 中将 <code>sticky</code> 设置为 <code>true</code>。</p><div class="hint-container tip"><p class="hint-container-title">置顶顺序</p><p>对于置顶文章，你可以将 <code>sticky</code> 设置为 <code>number</code> 来设置它们的顺序。数值大的文章会排列在前面。</p></div><h2 id="文章摘要" tabindex="-1"><a class="header-anchor" href="#文章摘要" aria-hidden="true">#</a> 文章摘要</h2><h3 id="添加摘要" tabindex="-1"><a class="header-anchor" href="#添加摘要" aria-hidden="true">#</a> 添加摘要</h3><p>如果你想要为文章添加摘要，你可以使用 <code>&lt;!-- more --&gt;</code> 注释来标记它。任何在此注释之前的内容会被视为摘要。</p><p>同时，如果你想设置的摘要并不是你要在文章开头展示的内容，你也可以在 Frontmatter 中通过 <code>excerpt</code> 选项来设置 HTML 字符串。</p><h3 id="自动生成摘要" tabindex="-1"><a class="header-anchor" href="#自动生成摘要" aria-hidden="true">#</a> 自动生成摘要</h3><p>主题默认情况下会自动生成摘要。</p><p>如果你只想让主题展示你指定的摘要或在 Frontmatter 中设置的描述，请在主题选项中设置 <code>plugins.blog.excerptLength: 0</code>。</p>',13),v={class:"hint-container warning"},A=s("p",{class:"hint-container-title"},"摘要限制",-1),h=a("<p>我们推荐你优先使用 <code>&lt;!-- more --&gt;</code> 来标记摘要。如果你的确需要一个特别的摘要的话，请自己设置在 Front Matter。</p><p>对于使用注释标记的摘要，我们会从原始文件分离出的摘要内容并将它们渲染成 HTMLString，所以在摘要外的内容<strong>不会参与摘要渲染</strong>，相关限制如:</p><ul><li><code>[[toc]]</code> 标记无法获得文章其他部分的标题</li><li>如果链接和脚注的引用内容在摘要外，它们无法正确渲染</li></ul><p>另外由于两种情况都是通过 <code>innerHTML</code> 直接插入到 DOM，这意味着任何组件都会解析为原生标签，不会正常渲染成 Vue 组件。</p>",4),b=a('<h2 id="收藏文章" tabindex="-1"><a class="header-anchor" href="#收藏文章" aria-hidden="true">#</a> 收藏文章</h2><p>你可以通过在 frontmatter 中设置 <code>star</code> 为 <code>true</code> 收藏一个文章。收藏后，用户就可以在 <code>/star/</code> 页面中查看这些文章。</p><p>同时任何任何收藏的文章都会显示在博客主页侧边栏的文章栏目中。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>我们提供收藏选项的考虑是: 主题使用者可能希望向访客展示一定数量的精品文章，而又不希望置顶文章充斥主页，导致用户不能看到最近更新的文章。</p></div><div class="hint-container tip"><p class="hint-container-title">收藏顺序</p><p>类似置顶文章，你同样可以将 <code>star</code> 设置为 <code>number</code> 来设置它们的顺序。数值大的文章会排列在前面。</p></div>',5),C={id:"其他类型的文章",tabindex:"-1"},f=s("a",{class:"header-anchor",href:"#其他类型的文章","aria-hidden":"true"},"#",-1),g=a(`<p>该主题为其他文章类型提供了单独的列表。</p><p>要添加其他文章类型，你应该在主题选项中设置 <code>plugins.blog.type</code>。它应该是一个一数组包含描述你想要的类型的配置对象。</p><p>每个类型都应该有一个唯一的键 (不含特殊字符)，以及一个 <code>filter</code> 函数来确定页面是否应该是该类型。 <code>filter</code> 函数应该接受页面对象并返回一个布尔值。</p><p>要对类型列表中的页面进行排序，你还可以设置 <code>sorter</code> 选项。 <code>sorter</code> 函数应该接受两个页面对象并返回一个数字。</p><p>默认情况下，类型列表路径为 <code>/key/</code> (<code>key</code> 被替换为实际键)。 你还可以通过在选项中设置 <code>path</code> 来设置自定义路径。</p><p><code>frontmatter</code> 选项控制布局页面的 frontmatter，它是一个接受 <code>localePath</code> 并返回 frontmatter 对象的函数。该选项在设置布局页面的标题时很有用。</p><div class="hint-container note"><p class="hint-container-title">注</p><p><code>layout</code> 是布局名称，默认为 <code>BlogType</code>，是一个 <code>vuepress-theme-hope</code> 注册的布局。 仅当你为类型列表构建自定义布局时，才应将此选项设置为你的布局值。</p></div><p>你还需要在主题语言环境中使用实际类型名称设置 <code>blogLocales[key]</code>，以便主题可以正确显示类型名称。</p><p>为了方便上手，我们在这里展示一些示例。</p><details class="hint-container details"><summary>示例</summary><ol><li><p>增加了一种幻灯片页面。</p><p>所有幻灯片页面都应在 frontmatter 中包含 <code>layout: Slide</code>。 并且顺序无关紧要。</p></li><li><p>添加原创类型。</p></li></ol><p>你应设置以下选项：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">defineUserConfig</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;vuepress&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 你可能需要安装 vuepress-shared 来使用它的 \`compareDate\`</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">compareDate</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;vuepress-shared/node&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">hopeTheme</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;vuepress-theme-hope&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">defineUserConfig</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// other config</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">theme</span><span style="color:#ABB2BF;">: </span><span style="color:#61AFEF;">hopeTheme</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">blogLocales</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">slide</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;幻灯片&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">original</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;原创&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">plugins</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">blog</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">type</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">          {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;slide&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#61AFEF;">filter</span><span style="color:#ABB2BF;">: (</span><span style="color:#E06C75;font-style:italic;">page</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">page</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">frontmatter</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">layout</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;Slide&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          },</span></span>
<span class="line"><span style="color:#ABB2BF;">          {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;original&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#61AFEF;">filter</span><span style="color:#ABB2BF;">: (</span><span style="color:#E06C75;font-style:italic;">page</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">page</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">frontmatter</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">original</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#61AFEF;">sorter</span><span style="color:#ABB2BF;">: (</span><span style="color:#E06C75;font-style:italic;">pageA</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">pageB</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#61AFEF;">compareDate</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">pageA</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">frontmatter</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">date</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">pageB</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">frontmatter</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">date</span><span style="color:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#ABB2BF;">          },</span></span>
<span class="line"><span style="color:#ABB2BF;">        ],</span></span>
<span class="line"><span style="color:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;">  }),</span></span>
<span class="line"><span style="color:#ABB2BF;">});</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,10);function _(E,D){const o=l("RouterLink"),p=l("Badge");return c(),r("div",null,[m,i(" more "),u,s("div",v,[A,s("p",null,[n("出于性能考虑，默认情况下开发服务器中不提供自动摘录生成功能，请使用 "),e(o,{to:"/zh/config/theme/basic.html#hotreload"},{default:B(()=>[n("hotReload")]),_:1}),n(" 启用它。")]),h]),b,s("h2",C,[f,n(" 其他类型的文章 "),e(p,{text:"高级",type:"info"})]),g])}const k=t(F,[["render",_],["__file","article.html.vue"]]);export{k as default};