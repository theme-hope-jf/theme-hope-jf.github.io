import{a2 as s,Y as n,Z as a,a3 as e}from"./framework-b67f4785.js";const l={},o=e(`<p>With <code>vuepress-plugin-auto-catalog</code>, you can easily gets automatically generated catalog pages for your theme.</p><h2 id="excluding-pages" tabindex="-1"><a class="header-anchor" href="#excluding-pages" aria-hidden="true">#</a> Excluding pages</h2><p>There may be some cases you have a <code>/foo/bar.md</code>, but do not want to generate a catalog page at <code>/foo/</code>, in this case, you can use <code>exclude</code> option to exclude the page.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// .vuepress/config.ts</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">autoCatalogPlugin</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;vuepress-plugin-auto-catalog&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">plugins</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">autoCatalogPlugin</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">exclude</span><span style="color:#ABB2BF;">: [</span><span style="color:#98C379;">&quot;/foo/&quot;</span><span style="color:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#ABB2BF;">    }),</span></span>
<span class="line"><span style="color:#ABB2BF;">  ],</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>exclude</code> option accepts an array of string or RegExp.</p><h2 id="controlling-page-frontmatter" tabindex="-1"><a class="header-anchor" href="#controlling-page-frontmatter" aria-hidden="true">#</a> Controlling Page Frontmatter</h2><p>By default, the plugin will generate catalog page title from folder name. However, sometimes you may want to make some customize, so you can set <code>frontmatter</code> option as a function which receives catalog page path as argument and you shall return a object containing the frontmatter you want.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// .vuepress/config.ts</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">autoCatalogPlugin</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;vuepress-plugin-auto-catalog&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">plugins</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">autoCatalogPlugin</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#61AFEF;">frontmatter</span><span style="color:#ABB2BF;">: (</span><span style="color:#E06C75;font-style:italic;">path</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#7F848E;font-style:italic;">// frontmatter you want</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#7F848E;font-style:italic;">// you may customize title, author. time, etc.</span></span>
<span class="line"><span style="color:#ABB2BF;">        };</span></span>
<span class="line"><span style="color:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#ABB2BF;">    }),</span></span>
<span class="line"><span style="color:#ABB2BF;">  ],</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="customizing-component" tabindex="-1"><a class="header-anchor" href="#customizing-component" aria-hidden="true">#</a> Customizing Component</h2><p>The plugin register and use <code>&lt;AutoCatalog /&gt;</code> component by default, if you do not like the built-in component and want to use your own, you can register your component globally and set <code>component</code> option with your component name.</p><h2 id="using-autocatalog-component" tabindex="-1"><a class="header-anchor" href="#using-autocatalog-component" aria-hidden="true">#</a> Using AutoCatalog Component</h2><p>The default <code>&lt;AutoCatalog /&gt;</code> will render 3 levels of pages as catalog items, and you can change the level depth by setting <code>level</code> option (Only <code>1</code> <code>2</code> and <code>3</code> are supported).</p><p>You can use <code>&lt;AutoCatalog /&gt;</code> in your theme layout, or in your markdown files directly.</p>`,13),t=[o];function p(c,i){return n(),a("div",null,t)}const d=s(l,[["render",p],["__file","guide.html.vue"]]);export{d as default};
