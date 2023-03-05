import{a3 as o,Z as i,_ as p,a1 as s,a2 as e,$ as n,a0 as t,a5 as a,D as c}from"./framework-61fc4e0a.js";const r={},d=s("h2",{id:"введение",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#введение","aria-hidden":"true"},"#"),e(" Введение")],-1),y=s("p",null,[e("Тема предоставляет функцию блога, и она "),s("strong",null,"не"),e(" включена по умолчанию.")],-1),h=s("p",null,[e("Вы можете включить функцию блога, установив для "),s("code",null,"plugins.blog"),e(" значение "),s("code",null,"true"),e(" в настройках темы.")],-1),B=a('<h2 id="опции" tabindex="-1"><a class="header-anchor" href="#опции" aria-hidden="true">#</a> Опции</h2><h3 id="excerpt" tabindex="-1"><a class="header-anchor" href="#excerpt" aria-hidden="true">#</a> excerpt</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>Whether generate excerpt for page.</p><h3 id="excerptseparator" tabindex="-1"><a class="header-anchor" href="#excerptseparator" aria-hidden="true">#</a> excerptSeparator</h3><ul><li>Type: <code>string</code></li><li>Default: <code>&lt;!-- more --&gt;</code></li></ul><p>Separator used to split excerpt from page content.</p><h3 id="excerptlength" tabindex="-1"><a class="header-anchor" href="#excerptlength" aria-hidden="true">#</a> excerptLength</h3><ul><li>Type: <code>number</code></li><li>Default: <code>300</code></li></ul><p>Length of excerpt when auto generating.</p><h3 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> filter</h3><ul><li>Тип: <code>(page: Page) =&gt; boolean</code></li><li>По умолчанию: <code>(page) =&gt; Boolean(page.filePathRelative) &amp;&amp; !page.frontmatter.home</code></li></ul><p>Фильтр страниц, определяющий, следует ли включать страницу.</p><p>По умолчанию все страницы, созданные из файлов Markdown, но не домашняя страница, будут включены в качестве статей.</p><h3 id="excerptfilter" tabindex="-1"><a class="header-anchor" href="#excerptfilter" aria-hidden="true">#</a> excerptFilter</h3><ul><li>Type: <code>(page: Page) =&gt; boolean</code></li><li>Default: <code>filter</code> option</li></ul><p>Page filter, determine whether the plugin should generate excerpt for it.</p><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h3>',18),u=a(`<li><p>Type: <code>BlogTypeOptions[]</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">interface</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">BlogTypeOptions</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Unique type name</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * A filter function to determine whether a page should be the type</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">filter</span><span style="color:#ABB2BF;">: (</span><span style="color:#E06C75;font-style:italic;">page</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">Page</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">boolean</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * A custom function to sort the pages</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">sorter</span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;">: (</span><span style="color:#E06C75;font-style:italic;">pageA</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">Page</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">pageB</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">Page</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">number</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Page path to be registered</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   *</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * </span><span style="color:#C678DD;font-style:italic;">@default</span><span style="color:#7F848E;font-style:italic;"> </span><span style="color:#E06C75;font-style:italic;">&#39;</span><span style="color:#E06C75;font-style:italic;">/:key/</span><span style="color:#E06C75;font-style:italic;">&#39;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">path</span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Frontmatter</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">frontmatter</span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;">: (</span><span style="color:#E06C75;font-style:italic;">localePath</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Layout name</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   *</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * </span><span style="color:#C678DD;font-style:italic;">@default</span><span style="color:#7F848E;font-style:italic;"> </span><span style="color:#E06C75;font-style:italic;">&#39;</span><span style="color:#E06C75;font-style:italic;">BlogType</span><span style="color:#E06C75;font-style:italic;">&#39;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">layout</span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Default: <code>[]</code></p></li>`,2),f=s("p",null,"Details:",-1),g=a('<p>Additional article type.</p><h3 id="article" tabindex="-1"><a class="header-anchor" href="#article" aria-hidden="true">#</a> article</h3><ul><li>Тип: <code>string</code></li><li>По умолчанию: <code>/article/</code></li></ul><p>Путь маршрута списка статей.</p><h3 id="category" tabindex="-1"><a class="header-anchor" href="#category" aria-hidden="true">#</a> category</h3><ul><li>Тип: <code>string</code></li><li>По умолчанию: <code>/category/</code></li></ul><p>Путь маршрута карты категории.</p><h3 id="categoryitem" tabindex="-1"><a class="header-anchor" href="#categoryitem" aria-hidden="true">#</a> categoryItem</h3><ul><li>Тип: <code>string</code></li><li>По умолчанию: <code>/category/:name/</code></li></ul><p>Путь маршрута списка категорий. <code>:name</code> будет заменено именем категории.</p><h3 id="tag" tabindex="-1"><a class="header-anchor" href="#tag" aria-hidden="true">#</a> tag</h3><ul><li>Тип: <code>string</code></li><li>По умолчанию: <code>/tag/</code></li></ul><p>Отметьте путь маршрута карты.</p><h3 id="tagitem" tabindex="-1"><a class="header-anchor" href="#tagitem" aria-hidden="true">#</a> tagItem</h3><ul><li>Тип: <code>string</code></li><li>По умолчанию: <code>/tag/:name/</code></li></ul><p>Путь маршрута списка тегов. <code>:name</code> будет заменено именем тега.</p><h3 id="star" tabindex="-1"><a class="header-anchor" href="#star" aria-hidden="true">#</a> star</h3><ul><li>Тип: <code>string</code></li><li>По умолчанию: <code>/star/</code></li></ul><p>Путь маршрута к списку звездных статей.</p><h3 id="timeline" tabindex="-1"><a class="header-anchor" href="#timeline" aria-hidden="true">#</a> timeline</h3><ul><li>Тип: <code>string</code></li><li>По умолчанию: <code>/timeline/</code></li></ul><p>Путь маршрута списка временной шкалы.</p><h3 id="hotreload" tabindex="-1"><a class="header-anchor" href="#hotreload" aria-hidden="true">#</a> hotReload</h3><ul><li>Type: <code>boolean</code></li><li>Default: Whether using <code>--debug</code> flag</li></ul><p>Whether to enable hot reload in the development server.</p>',25);function v(m,F){const l=c("RouterLink");return i(),p("div",null,[d,y,h,s("p",null,[e("Инструкции смотрите в "),n(l,{to:"/ru/guide/blog/intro.html"},{default:t(()=>[e("Введение в блог")]),_:1}),e(".")]),B,s("ul",null,[u,s("li",null,[f,s("ul",null,[s("li",null,[n(l,{to:"/ru/guide/blog/article.html#other-types-of-articles"},{default:t(()=>[e("Guide → Article List")]),_:1})])])])]),g])}const E=o(r,[["render",v],["__file","blog.html.vue"]]);export{E as default};
