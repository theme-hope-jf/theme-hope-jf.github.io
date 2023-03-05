import{a2 as i,Y as o,Z as t,a0 as e,a1 as s,_ as l,a3 as n,F as c}from"./framework-0d2263ab.js";const p={},r=n('<h2 id="showinstall" tabindex="-1"><a class="header-anchor" href="#showinstall" aria-hidden="true">#</a> showInstall</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>Whether display install button when Service Worker is first registered successfully.</p><h2 id="manifest" tabindex="-1"><a class="header-anchor" href="#manifest" aria-hidden="true">#</a> manifest</h2><ul><li>Type: <code>ManifestOption</code></li><li>Required: No</li></ul><p>You can fill with an object which will be parsed to manifest.webmanifest.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Some options have their fallback if you don’t set them.</p><ul><li><p>name: <code>siteConfig.title</code> || <code>siteConfig.locales[&#39;/&#39;].title</code> || <code>&quot;Site&quot;</code></p></li><li><p>short_name: <code>siteConfig.title</code> || <code>siteConfig.locales[&#39;/&#39;].title</code> || <code>&quot;Site&quot;</code></p></li><li><p>description: <code>siteConfig.description</code> || <code>siteConfig.locales[&#39;/&#39;].description</code> || <code>&quot;A site built with vuepress&quot;</code></p></li><li><p>lang: <code>siteConfig.locales[&#39;/&#39;].lang</code> || <code>&quot;en-US&quot;</code></p></li><li><p>start_url: <code>context.base</code></p></li><li><p>scope: <code>context.base</code></p></li><li><p>display: <code>&quot;standalone&quot;</code></p></li><li><p>theme_color: <code>&quot;#46bd87&quot;</code></p></li><li><p>background_color: <code>&quot;#ffffff&quot;</code></p></li><li><p>orientation: <code>&quot;portrait-primary&quot;</code></p></li><li><p>prefer_related_applications: <code>false</code></p></li></ul></div>',7),d={class:"hint-container info"},u=e("p",{class:"hint-container-title"},"More",-1),h={href:"https://w3c.github.io/manifest/",target:"_blank",rel:"noopener noreferrer"},y=n('<h2 id="favicon" tabindex="-1"><a class="header-anchor" href="#favicon" aria-hidden="true">#</a> favicon</h2><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Path of favicon.ico with absolute path.</p><div class="hint-container warning"><p class="hint-container-title">Note</p><p>We recommend you to set favicon for your site</p></div><h2 id="themecolor" tabindex="-1"><a class="header-anchor" href="#themecolor" aria-hidden="true">#</a> themeColor</h2><ul><li>类型: <code>string</code></li><li>默认值: <code>&quot;#46bd87&quot;</code></li></ul><p>Theme Color, default is theme green</p><h2 id="maxsize" tabindex="-1"><a class="header-anchor" href="#maxsize" aria-hidden="true">#</a> maxSize</h2><ul><li>Type: <code>number</code></li><li>Default: <code>2048</code></li></ul><p>Max size which allows to cache, with KB unit</p><div class="hint-container warning"><p class="hint-container-title">Note</p><p>This option has the highest priority, and any files exceeding this value will be excluded.</p><p>So if you generate very large HTML or JS files, please consider increasing this value, otherwise your PWA may not work normally in offline mode.</p></div><h2 id="cachehtml" tabindex="-1"><a class="header-anchor" href="#cachehtml" aria-hidden="true">#</a> cacheHTML</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether cache HTML files besides home page and 404 page.</p><h2 id="cachepic" tabindex="-1"><a class="header-anchor" href="#cachepic" aria-hidden="true">#</a> cachePic</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether cache pictures</p><h2 id="maxpicsize" tabindex="-1"><a class="header-anchor" href="#maxpicsize" aria-hidden="true">#</a> maxPicSize</h2><ul><li>Type: <code>number</code></li><li>Default: <code>1024</code></li></ul><p>Max picture size which allows to cache, with KB unit</p><h2 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> update</h2><ul><li>Type: <code>&quot;disabled&quot; | &quot;available&quot; | &quot;hint&quot; | &quot;force&quot;</code></li><li>Default: <code>&quot;available&quot;</code></li></ul><p>Control logic when new content is found.</p><ul><li><p><code>&quot;disabled&quot;</code>: Do nothing even when new service worker is available. After new service work succeeds installing and starts waiting, it will control page and provide new content in next visit.</p></li><li><p><code>&quot;available&quot;</code>: Only display update popup when the new service worker is available</p></li><li><p><code>&quot;hint&quot;</code>: Display a hint to let user choose to refresh immediately</p><p>This is helpful when you want users to see new docs immediately.</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>If users choose to refresh, the current service worker will be unregister, and request will start coming to web. Later the new service worker will start installing and control current page after installed.</p></div></li><li><p><code>&quot;force&quot;</code>: unregister current service worker immediately then refresh to get new content</p><div class="hint-container danger"><p class="hint-container-title">Warning</p><p>Although this ensure users are viewing the latest content, it may affect viewing experiences.</p></div></li></ul><div class="hint-container warning"><p class="hint-container-title">Note</p><p>How docs are updated is controlled by a previous version, so the current option only effect next update from this version.</p></div><h2 id="apple" tabindex="-1"><a class="header-anchor" href="#apple" aria-hidden="true">#</a> apple</h2><p>Special settings for Apple</p><blockquote><p>If you don’t want to make detailed settings, you can safely ignore it; if you don’t want your site compatible with safari on apple, please set it to <code>false</code>.</p></blockquote><h3 id="apple-icon" tabindex="-1"><a class="header-anchor" href="#apple-icon" aria-hidden="true">#</a> apple.icon</h3><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Fill in the icon address used by Apple, the recommended size is 152×152</p><h3 id="apple-statusbarcolor" tabindex="-1"><a class="header-anchor" href="#apple-statusbarcolor" aria-hidden="true">#</a> apple.statusBarColor</h3><ul><li>Type: <code>&quot;black&quot; | &quot;white&quot;</code></li><li>Default: <code>&quot;black&quot;</code></li></ul><p>Apple’s status bar color</p><h3 id="apple-maskicon" tabindex="-1"><a class="header-anchor" href="#apple-maskicon" aria-hidden="true">#</a> apple.maskIcon</h3><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Safari mask icon</p><h2 id="mstile" tabindex="-1"><a class="header-anchor" href="#mstile" aria-hidden="true">#</a> msTile</h2><p>Special settings for Microsoft tiles</p><blockquote><p>If you don’t want to make detailed settings, you can safely ignore it; if you don’t want your site compatible with windows, please set it to <code>false</code>.</p></blockquote><h3 id="mstile-image" tabindex="-1"><a class="header-anchor" href="#mstile-image" aria-hidden="true">#</a> msTile.image</h3><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Tile icon</p><h3 id="mstile-color" tabindex="-1"><a class="header-anchor" href="#mstile-color" aria-hidden="true">#</a> msTile.color</h3><ul><li>Type: <code>string</code></li><li>Default value: <code>themeColor</code></li></ul><p>The tile color will automatically fall back to themeColor if you don’t set it.</p><h2 id="hintcomponent" tabindex="-1"><a class="header-anchor" href="#hintcomponent" aria-hidden="true">#</a> hintComponent</h2><ul><li>Type: <code>string</code></li><li>Default: <code>&quot;SWHintPopup&quot;</code></li></ul><p>You can fill in the custom hint popup component path.</p><h2 id="updatecomponent" tabindex="-1"><a class="header-anchor" href="#updatecomponent" aria-hidden="true">#</a> updateComponent</h2><ul><li>Type: <code>string</code></li><li>Default: <code>&quot;SWUpdatePopup&quot;</code></li></ul><p>You can fill in the custom update popup component path.</p><h2 id="appendbase" tabindex="-1"><a class="header-anchor" href="#appendbase" aria-hidden="true">#</a> appendBase</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether append base to all absolute links.</p><h2 id="generateswconfig" tabindex="-1"><a class="header-anchor" href="#generateswconfig" aria-hidden="true">#</a> generateSwConfig</h2>',56),B=e("code",null,"workbox-build",-1),v={href:"https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.generateSW",target:"_blank",rel:"noopener noreferrer"},f=n(`<h2 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h2><ul><li><p>Type: <code>PWALocaleConfig</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">interface</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">PWALocaleData</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Install button text</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">install</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * iOS install hint text</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">iOSInstall</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Cancel button text</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">cancel</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Close button text</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">close</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Previous image text</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">prevImage</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Next image text</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">nextImage</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Install explain text</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">explain</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Description label text</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">desc</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Feature label text</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">feature</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Update hint text</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">hint</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Update available text</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">update</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">interface</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">PWALocaleConfig</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  [</span><span style="color:#E06C75;font-style:italic;">localePath</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">]: </span><span style="color:#E5C07B;">PWALocaleData</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Required: No</p></li></ul><p>Locales config for pwa plugin.</p><details class="hint-container details"><summary>Built-in Supported Languages</summary><ul><li><strong>Simplified Chinese</strong> (zh-CN)</li><li><strong>Traditional Chinese</strong> (zh-TW)</li><li><strong>English (United States)</strong> (en-US)</li><li><strong>German</strong> (de-DE)</li><li><strong>German (Australia)</strong> (de-AT)</li><li><strong>Russian</strong> (ru-RU)</li><li><strong>Ukrainian</strong> (uk-UA)</li><li><strong>Vietnamese</strong> (vi-VN)</li><li><strong>Portuguese (Brazil)</strong> (pt-BR)</li><li><strong>Polish</strong> (pl-PL)</li><li><strong>French</strong> (fr-FR)</li><li><strong>Spanish</strong> (es-ES)</li><li><strong>Slovak</strong> (sk-SK)</li><li><strong>Japanese</strong> (ja-JP)</li><li><strong>Turkish</strong> (tr-TR)</li><li><strong>Korean</strong> (ko-KR)</li><li><strong>Finnish</strong> (fi-FI)</li><li><strong>Indonesian</strong> (id-ID)</li></ul></details>`,4);function m(b,g){const a=c("ExternalLinkIcon");return o(),t("div",null,[r,e("div",d,[u,e("p",null,[s("For docs of Manifest, please see "),e("a",h,[s("W3C Manifest"),l(a)])])]),y,e("p",null,[s("Options passed to "),B,s(", for details, see "),e("a",v,[s("Workbox documentation"),l(a)])]),f])}const w=i(p,[["render",m],["__file","config.html.vue"]]);export{w as default};