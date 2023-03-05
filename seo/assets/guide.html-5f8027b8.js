import{a2 as c,Y as i,Z as B,a0 as s,a1 as e,_ as n,a4 as d,$ as o,a3 as l,F as t}from"./framework-b24ce889.js";const y={},g={href:"https://ogp.me/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.w3.org/TR/json-ld-api/",target:"_blank",rel:"noopener noreferrer"},h=l(`<h2 id="out-of-box" tabindex="-1"><a class="header-anchor" href="#out-of-box" aria-hidden="true">#</a> Out of Box</h2><p>The plugin works out of the box. Without any config, it will extract information from the page content as much as possible to complete the necessary tags required by OGP and JSON-LD.</p><p>By default, the plugin will read the site config and page frontmatter to automatically generate tags as much as possible. Such as site name, page title, page type, writing date, last update date, and article tags are all automatically generated.</p><p>The following are the <code>&lt;meta&gt;</code> tags and their values that will be injected into <code>&lt;head&gt;</code> by default:</p><h3 id="default-ogp-generation" tabindex="-1"><a class="header-anchor" href="#default-ogp-generation" aria-hidden="true">#</a> Default OGP Generation</h3><p>The following are the <code>&lt;meta&gt;</code> tags and their value injected into <code>&lt;head&gt;</code> by default to satisfy OGP:</p><table><thead><tr><th style="text-align:center;">Meta Name</th><th style="text-align:center;">Value</th></tr></thead><tbody><tr><td style="text-align:center;"><code>og:url</code></td><td style="text-align:center;"><code>options.hostname</code> + <code>path</code></td></tr><tr><td style="text-align:center;"><code>og:site_name</code></td><td style="text-align:center;"><code>siteConfig.title</code></td></tr><tr><td style="text-align:center;"><code>og:title</code></td><td style="text-align:center;"><code>page.title</code></td></tr><tr><td style="text-align:center;"><code>og:description</code></td><td style="text-align:center;"><code>page.frontmatter.description</code> || auto generated (when <code>autoDescription</code> is <code>true</code> in plugin options)</td></tr><tr><td style="text-align:center;"><code>og:type</code></td><td style="text-align:center;"><code>&quot;article&quot;</code></td></tr><tr><td style="text-align:center;"><code>og:image</code></td><td style="text-align:center;"><code>options.hostname</code> + <code>page.frontmatter.image</code> ||first image in page || <code>fallbackImage</code> in plugin options</td></tr><tr><td style="text-align:center;"><code>og:updated_time</code></td><td style="text-align:center;"><code>page.git.updatedTime</code></td></tr><tr><td style="text-align:center;"><code>og:locale</code></td><td style="text-align:center;"><code>page.lang</code></td></tr><tr><td style="text-align:center;"><code>og:locale:alternate</code></td><td style="text-align:center;">Other languages in <code>siteData.locales</code></td></tr><tr><td style="text-align:center;"><code>twitter:card</code></td><td style="text-align:center;"><code>&quot;summary_large_image&quot;</code> (only available when image found)</td></tr><tr><td style="text-align:center;"><code>twitter:image:alt</code></td><td style="text-align:center;"><code>page.title</code> (only available when image found)</td></tr><tr><td style="text-align:center;"><code>article:author</code></td><td style="text-align:center;"><code>page.frontmatter.author</code> || <code>options.author</code></td></tr><tr><td style="text-align:center;"><code>article:tag</code></td><td style="text-align:center;"><code>page.frontmatter.tags</code> || <code>page.frontmatter.tag</code></td></tr><tr><td style="text-align:center;"><code>article:published_time</code></td><td style="text-align:center;"><code>page.frontmatter.date</code> || <code>page.git.createdTime</code></td></tr><tr><td style="text-align:center;"><code>article:modified_time</code></td><td style="text-align:center;"><code>page.git.updatedTime</code></td></tr></tbody></table><h3 id="default-json-ld-generation" tabindex="-1"><a class="header-anchor" href="#default-json-ld-generation" aria-hidden="true">#</a> Default JSON-LD Generation</h3><table><thead><tr><th style="text-align:center;">Property Name</th><th style="text-align:center;">Value</th></tr></thead><tbody><tr><td style="text-align:center;"><code>@context</code></td><td style="text-align:center;"><code>&quot;https://schema.org&quot;</code></td></tr><tr><td style="text-align:center;"><code>@type</code></td><td style="text-align:center;"><code>&quot;NewsArticle&quot;</code></td></tr><tr><td style="text-align:center;"><code>headline</code></td><td style="text-align:center;"><code>page.title</code></td></tr><tr><td style="text-align:center;"><code>image</code></td><td style="text-align:center;">image in page || <code>options.hostname</code> + <code>page.frontmatter.image</code> || <code>siteFavIcon</code> in plugin options</td></tr><tr><td style="text-align:center;"><code>datePublished</code></td><td style="text-align:center;"><code>page.frontmatter.date</code> || <code>page.git.createdTime</code></td></tr><tr><td style="text-align:center;"><code>dateModified</code></td><td style="text-align:center;"><code>page.git.updatedTime</code></td></tr><tr><td style="text-align:center;"><code>author</code></td><td style="text-align:center;"><code>page.frontmatter.author</code> || <code>options.author</code></td></tr></tbody></table><h2 id="setting-tags-directly" tabindex="-1"><a class="header-anchor" href="#setting-tags-directly" aria-hidden="true">#</a> Setting Tags Directly</h2><p>You can configure the <code>head</code> option in the page’s frontmatter to add specific tags to the page <code>&lt;head&gt;</code> to enhance SEO. For example:</p><div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">---</span></span>
<span class="line"><span style="color:#E06C75;">head</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">  - - </span><span style="color:#98C379;">meta</span></span>
<span class="line"><span style="color:#ABB2BF;">    - </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">keywords</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">content</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">SEO plugin</span></span>
<span class="line"><span style="color:#ABB2BF;">---</span></span>
<span class="line"></span></code></pre></div><p>Will automatically inject <code>&lt;meta name=&quot;keywords&quot; content=&quot;SEO plugin&quot; /&gt;</code>.</p><h2 id="customize-generation" tabindex="-1"><a class="header-anchor" href="#customize-generation" aria-hidden="true">#</a> Customize Generation</h2><p>The plugin also gives you full control over the build logic.</p><h3 id="page-type" tabindex="-1"><a class="header-anchor" href="#page-type" aria-hidden="true">#</a> Page Type</h3><p>For most pages, there are basically only two types: articles and website, so the plugin provides the <code>isArticle</code> option to allow you to provide logic for identifying articles.</p><p>The option accepts a function in the format <code>(page: Page) =&gt; boolean</code>, by default all non-home pages generated from Markdown files are treated as articles.</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>If a page does fit into the &quot;unpopular&quot; genre like books, music, etc., you can handle them by setting the three options below.</p></div><h3 id="ogp" tabindex="-1"><a class="header-anchor" href="#ogp" aria-hidden="true">#</a> OGP</h3><p>You can use the plugin options <code>ogp</code> to pass in a function to modify the default OGP object to your needs and return it.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">ogp</span><span style="color:#ABB2BF;">&lt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">ExtraPageData</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">extends</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">number</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">symbol</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">unknown</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">never</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">never</span></span>
<span class="line"><span style="color:#ABB2BF;">  &gt;,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">ExtraPageFrontmatter</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">extends</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">number</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">symbol</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">unknown</span></span>
<span class="line"><span style="color:#ABB2BF;">  &gt; </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">unknown</span><span style="color:#ABB2BF;">&gt;,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">ExtraPageFields</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">extends</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">number</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">symbol</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">unknown</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">never</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">never</span></span>
<span class="line"><span style="color:#ABB2BF;">  &gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&gt;(</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/** OGP Object inferred by plugin */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;font-style:italic;">ogp</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">SeoContent</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/** Page Object */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;font-style:italic;">page</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">ExtendPage</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">ExtraPageData</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">ExtraPageFrontmatter</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">ExtraPageFields</span><span style="color:#ABB2BF;">&gt;,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/** VuePress App */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;font-style:italic;">app</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">App</span></span>
<span class="line"><span style="color:#ABB2BF;">): </span><span style="color:#E5C07B;">SeoContent</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),m=l(`<p>For example, if you are using a third-party theme and set a <code>banner</code> in frontmatter for each article according to the theme requirements, then you can pass in the following <code>ogp</code>:</p><div class="language-typescript" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">ogp</span><span style="color:#ABB2BF;">: (</span><span style="color:#E06C75;font-style:italic;">ogp</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">page</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> ({</span></span>
<span class="line"><span style="color:#ABB2BF;">    ...</span><span style="color:#E06C75;">ogp</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#98C379;">&quot;og:image&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">page</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">frontmatter</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">banner</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">||</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">ogp</span><span style="color:#ABB2BF;">[</span><span style="color:#98C379;">&quot;og:image&quot;</span><span style="color:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#ABB2BF;">  }),</span></span>
<span class="line"><span style="color:#ABB2BF;">});</span></span>
<span class="line"></span></code></pre></div><h3 id="json-ld" tabindex="-1"><a class="header-anchor" href="#json-ld" aria-hidden="true">#</a> JSON-LD</h3><p>Like OGP, you can use the plugin options <code>jsonLd</code> to pass in a function to modify the default JSON-LD object to your needs and return it.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">jsonLd</span><span style="color:#ABB2BF;">&lt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">ExtraPageData</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">extends</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">number</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">symbol</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">unknown</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">never</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">never</span></span>
<span class="line"><span style="color:#ABB2BF;">  &gt;,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">ExtraPageFrontmatter</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">extends</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">number</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">symbol</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">unknown</span></span>
<span class="line"><span style="color:#ABB2BF;">  &gt; </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">unknown</span><span style="color:#ABB2BF;">&gt;,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">ExtraPageFields</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">extends</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">number</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">symbol</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">unknown</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">never</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">never</span></span>
<span class="line"><span style="color:#ABB2BF;">  &gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&gt;(</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/** JSON-LD Object inferred by plugin */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;font-style:italic;">jsonLD</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">ArticleJSONLD</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">null</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/** Page Object */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;font-style:italic;">page</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">ExtendPage</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">ExtraPageData</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">ExtraPageFrontmatter</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">ExtraPageFields</span><span style="color:#ABB2BF;">&gt;,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/** VuePress App */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;font-style:italic;">app</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">App</span></span>
<span class="line"><span style="color:#ABB2BF;">): </span><span style="color:#E5C07B;">ArticleJSONLD</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">null</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">Note</p><p>Please note that the plugin does not generate JSON-LD for non-article pages, so the first parameter of the function may be null.</p></div><h2 id="canonical-link" tabindex="-1"><a class="header-anchor" href="#canonical-link" aria-hidden="true">#</a> Canonical Link</h2><p>If you are deploying your content to different sites, or same content under different URLs, you may need to set <code>canonical</code> option to provide a &quot;Canonical Link&quot; for your page. You can either set a string which will be append before page route link, or adding a custom function <code>(page: Page) =&gt; string | null</code> to return a canonical link if necessary.</p><div class="hint-container tip"><p class="hint-container-title">Example</p><p>If your sites are deploy under docs directory in <code>example.com</code>, but available in:</p><ul><li><code>http://example.com/docs/xxx</code></li><li><code>https://example.com/docs/xxx</code></li><li><code>http://www.example.com/docs/xxx</code></li><li><code>https://www.example.com/docs/xxx</code> (primary)</li></ul><p>To let search engine results always be the primary choice, you may need to set <code>canonical</code> to <code>https://www.example.com/docs/</code>, so that search engine will know that the fourth URl is prefered to be indexed.</p></div><h3 id="customize-head-tags" tabindex="-1"><a class="header-anchor" href="#customize-head-tags" aria-hidden="true">#</a> Customize head Tags</h3><p>Sometimes you may need to fit other protocols or provide the corresponding SEO tags in the format provided by other search engines. In this case, you can use the <code>customHead</code> option, whose type is:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">customHead</span><span style="color:#ABB2BF;">&lt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">ExtraPageData</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">extends</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">number</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">symbol</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">unknown</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">never</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">never</span></span>
<span class="line"><span style="color:#ABB2BF;">  &gt;,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">ExtraPageFrontmatter</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">extends</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">number</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">symbol</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">unknown</span></span>
<span class="line"><span style="color:#ABB2BF;">  &gt; </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">unknown</span><span style="color:#ABB2BF;">&gt;,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">ExtraPageFields</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">extends</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">number</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">symbol</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">unknown</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">never</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">never</span></span>
<span class="line"><span style="color:#ABB2BF;">  &gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&gt;(</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/** Head tag config */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;font-style:italic;">head</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">HeadConfig</span><span style="color:#ABB2BF;">[],</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/** Page Object */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;font-style:italic;">page</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">Page</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">ExtraPageData</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">ExtraPageFrontmatter</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">ExtraPageFields</span><span style="color:#ABB2BF;">&gt;,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/** VuePress App */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;font-style:italic;">app</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">App</span></span>
<span class="line"><span style="color:#ABB2BF;">): </span><span style="color:#E5C07B;">void</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You should modify the <code>head</code> array in this function directly.</p><h2 id="seo-introduction" tabindex="-1"><a class="header-anchor" href="#seo-introduction" aria-hidden="true">#</a> SEO Introduction</h2><p><strong>S</strong>earch <strong>e</strong>ngine <strong>optimization</strong> (SEO) is the process of improving the quality and quantity of site traffic to a site or a web page from search engines. SEO targets unpaid traffic (known as &quot;natural&quot; or &quot;organic&quot; results) rather than direct traffic or paid traffic. Unpaid traffic may originate from different kinds of searches, including image search, video search, academic search, news search, and industry-specific vertical search engines.</p><p>As an internet marketing strategy, SEO considers how search engines work, the computer-programmed algorithms that dictate search engine behavior, what people search for, the actual search terms or keywords typed into search engines, and which search engines are preferred by their targeted audience. SEO is performed because a site will receive more visitors from a search engine when sites rank higher on the search engine results page (SERP). These visitors can then potentially be converted into customers.</p><h2 id="related-documents" tabindex="-1"><a class="header-anchor" href="#related-documents" aria-hidden="true">#</a> Related Documents</h2>`,17),F={href:"https://ogp.me/",target:"_blank",rel:"noopener noreferrer"},A=s("strong",null,"O",-1),v=s("strong",null,"G",-1),f=s("strong",null,"Pr",-1),b=s("p",null,[e("This plugin perfectly supports this protocol and will automatically generate "),s("code",null,"<meta>"),e(" tags that conform to the protocol.")],-1),E={href:"https://www.w3.org/TR/json-ld-api/",target:"_blank",rel:"noopener noreferrer"},C=s("p",null,'This plugin will generate "NewsArticle" scheme for article pages.',-1),x={href:"https://www.w3.org/TR/rdfa-primer/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://schema.org/",target:"_blank",rel:"noopener noreferrer"},k=s("p",null,"Schema definition site for structural markup",-1),_=s("h2",{id:"related-tools",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#related-tools","aria-hidden":"true"},"#"),e(" Related Tools")],-1),D={href:"https://search.google.com/test/rich-results",target:"_blank",rel:"noopener noreferrer"};function P(O,R){const a=t("ExternalLinkIcon"),p=t("RouterLink"),r=t("ProjectLink");return i(),B("div",null,[s("p",null,[e("This plugin will make your site fully support "),s("a",g,[e("Open Content Protocol OGP"),n(a)]),e(" and "),s("a",u,[e("JSON-LD 1.1"),n(a)]),e(" to enhance the SEO of the site.")]),d(" more "),h,s("p",null,[e("For detailed parameter structure, see "),n(p,{to:"/config.html"},{default:o(()=>[e("Config")]),_:1}),e(".")]),m,s("ul",null,[s("li",null,[s("p",null,[s("a",F,[e("Open Content Protocol OGP"),n(a)]),e(" ("),A,e("pen "),v,e("raph "),f,e("otocal)")]),b]),s("li",null,[s("p",null,[s("a",E,[e("JSON-LD 1.1"),n(a)])]),C]),s("li",null,[s("p",null,[s("a",x,[e("RDFa 1.1"),n(a)])]),s("p",null,[e("RDFa mainly marks HTML structure. This is what the plugin cannot support. "),n(r,{type:"theme",name:"hope"},{default:o(()=>[e("vuepress-theme-hope")]),_:1}),e(" uses this feature to pass Google’s rich media structure test. You can consider using it.")])]),s("li",null,[s("p",null,[s("a",w,[e("Schema.Org"),n(a)])]),k])]),_,s("p",null,[e("You can use "),s("a",D,[e("Google Rich Media Structure Test Tool"),n(a)]),e(" to test this site.")])])}const q=c(y,[["render",P],["__file","guide.html.vue"]]);export{q as default};
