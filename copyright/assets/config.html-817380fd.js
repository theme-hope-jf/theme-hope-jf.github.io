import{a2 as s,Y as e,Z as n,a3 as l}from"./framework-b24ce889.js";const a={},i=l(`<h2 id="plugin-options" tabindex="-1"><a class="header-anchor" href="#plugin-options" aria-hidden="true">#</a> Plugin Options</h2><h3 id="author" tabindex="-1"><a class="header-anchor" href="#author" aria-hidden="true">#</a> author</h3><ul><li>Type: <code>string | ((page: Page) =&gt; string)</code></li><li>Required: No</li></ul><p>Author Information</p><h3 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> license</h3><ul><li>Type: <code>string | ((page: Page) =&gt; string)</code></li><li>Required: No</li></ul><p>License Information</p><h3 id="triggerwords" tabindex="-1"><a class="header-anchor" href="#triggerwords" aria-hidden="true">#</a> triggerWords</h3><ul><li>Type: <code>number</code></li><li>Default: <code>100</code></li></ul><p>Min words triggering copyright append</p><h3 id="global" tabindex="-1"><a class="header-anchor" href="#global" aria-hidden="true">#</a> global</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether enabled globally</p><h3 id="disablecopy" tabindex="-1"><a class="header-anchor" href="#disablecopy" aria-hidden="true">#</a> disableCopy</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Disable copy</p><h3 id="disableselection" tabindex="-1"><a class="header-anchor" href="#disableselection" aria-hidden="true">#</a> disableSelection</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Disable selection</p><h3 id="canonical" tabindex="-1"><a class="header-anchor" href="#canonical" aria-hidden="true">#</a> canonical</h3><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Canonical hostname with base.</p><p>This is useful when your content are deploying in multiple places.</p><div class="hint-container note"><p class="hint-container-title">Example</p><p>If you are deploying same content under <code>https://myblog.com</code> and <code>https://blog.com/username/</code>, you may want to prefer one site as reference link.</p><ul><li>If you prefer the first one, you should set <code>canonical</code> to <code>https://myblog.com</code></li><li>If you prefer the second one, you should set <code>canonical</code> to <code>https://blog.com/username/</code></li></ul><p>So copyright message triggered by copying content on another site also points to your preferred site.</p></div><h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3><ul><li><p>Type: <code>CopyrightLocaleConfig</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">interface</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">CopyrightLocaleData</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Author text</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   *</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * </span><span style="color:#C678DD;font-style:italic;">@description</span><span style="color:#7F848E;font-style:italic;"> \`:author\` will be replaced by author</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">author</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * License text</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   *</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * </span><span style="color:#C678DD;font-style:italic;">@description</span><span style="color:#7F848E;font-style:italic;"> \`:license\` will be replaced by current license</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">license</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Link text</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   *</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * </span><span style="color:#C678DD;font-style:italic;">@description</span><span style="color:#7F848E;font-style:italic;"> \`:url\` will be replaced by current page link</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">interface</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">CopyrightLocaleConfig</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  [</span><span style="color:#E06C75;font-style:italic;">localePath</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">]: </span><span style="color:#E5C07B;">CopyrightLocaleData</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Required: No</p></li></ul><p>Locale config for copyright plugin.</p><details class="hint-container details"><summary>Built-in Supported Languages</summary><ul><li><strong>Simplified Chinese</strong> (zh-CN)</li><li><strong>Traditional Chinese</strong> (zh-TW)</li><li><strong>English (United States)</strong> (en-US)</li><li><strong>German</strong> (de-DE)</li><li><strong>German (Australia)</strong> (de-AT)</li><li><strong>Russian</strong> (ru-RU)</li><li><strong>Ukrainian</strong> (uk-UA)</li><li><strong>Vietnamese</strong> (vi-VN)</li><li><strong>Portuguese (Brazil)</strong> (pt-BR)</li><li><strong>Polish</strong> (pl-PL)</li><li><strong>French</strong> (fr-FR)</li><li><strong>Spanish</strong> (es-ES)</li><li><strong>Slovak</strong> (sk-SK)</li><li><strong>Japanese</strong> (ja-JP)</li><li><strong>Turkish</strong> (tr-TR)</li><li><strong>Korean</strong> (ko-KR)</li><li><strong>Finnish</strong> (fi-FI)</li><li><strong>Indonesian</strong> (id-ID)</li></ul></details><h2 id="frontmatter-options" tabindex="-1"><a class="header-anchor" href="#frontmatter-options" aria-hidden="true">#</a> Frontmatter Options</h2><h3 id="copy-triggerwords" tabindex="-1"><a class="header-anchor" href="#copy-triggerwords" aria-hidden="true">#</a> copy.triggerWords</h3><ul><li>Type: <code>number</code></li><li>Default: <code>100</code></li></ul><p>Min words triggering copyright append</p><h3 id="copy-disablecopy" tabindex="-1"><a class="header-anchor" href="#copy-disablecopy" aria-hidden="true">#</a> copy.disableCopy</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Disable copy</p><h3 id="copy-disableselection" tabindex="-1"><a class="header-anchor" href="#copy-disableselection" aria-hidden="true">#</a> copy.disableSelection</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Disable selection</p>`,38),o=[i];function t(r,c){return e(),n("div",null,o)}const d=s(a,[["render",t],["__file","config.html.vue"]]);export{d as default};
