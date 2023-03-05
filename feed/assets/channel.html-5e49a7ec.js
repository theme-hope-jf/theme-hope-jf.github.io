import{a2 as l,Y as t,Z as i,a0 as e,a1 as n,_ as o,a3 as a,F as c}from"./framework-b67f4785.js";const r={},d=a('<p>The channel option is used to config the feed channel.</p><h2 id="channel-title" tabindex="-1"><a class="header-anchor" href="#channel-title" aria-hidden="true">#</a> channel.title</h2><ul><li>Type: <code>string</code></li><li>Default: <code>SiteConfig.title</code></li></ul><p>Channel title</p><h2 id="channel-link" tabindex="-1"><a class="header-anchor" href="#channel-link" aria-hidden="true">#</a> channel.link</h2><ul><li>Type: <code>string</code></li><li>Default: Deployment link (generated by <code>options.hostname</code> and <code>context.base</code>)</li></ul><p>Channel address</p><h2 id="channel-description" tabindex="-1"><a class="header-anchor" href="#channel-description" aria-hidden="true">#</a> channel.description</h2><ul><li>Type: <code>string</code></li><li>Default: <code>SiteConfig.description</code></li></ul><p>Channel description</p><h2 id="channel-language" tabindex="-1"><a class="header-anchor" href="#channel-language" aria-hidden="true">#</a> channel.language</h2><ul><li><p>Type: <code>string</code></p></li><li><p>Default:</p><ul><li><code>siteConfig.locales[&#39;/&#39;].lang</code></li><li>If the above is not provided, fall back to <code>&quot;en-US&quot;</code></li></ul></li></ul><p>The language of the channel</p><h2 id="channel-copyright" tabindex="-1"><a class="header-anchor" href="#channel-copyright" aria-hidden="true">#</a> channel.copyright</h2><ul><li><p>Type: <code>string</code></p></li><li><p>Default:</p><ul><li>Try to read the <code>author.name</code> in channel options, and fall back to <code>Copyright by $author</code></li></ul></li><li><p>Recommended to set manually: <strong>Yes</strong></p></li></ul><p>Channel copyright information</p><h2 id="channel-pubdate" tabindex="-1"><a class="header-anchor" href="#channel-pubdate" aria-hidden="true">#</a> channel.pubDate</h2><ul><li>Type: <code>string</code> (must be a valid Date ISOString)</li><li>Default: time when the plugin is called each time</li><li>Recommended to set manually: <strong>Yes</strong></li></ul><p>Publish date of the Channel</p><h2 id="channel-lastupdated" tabindex="-1"><a class="header-anchor" href="#channel-lastupdated" aria-hidden="true">#</a> channel.lastUpdated</h2><ul><li>Type: <code>string</code> (must be a valid Date ISOString)</li><li>Default: time when the plugin is called each time</li></ul><p>Last update time of channel content</p><h2 id="channel-ttl" tabindex="-1"><a class="header-anchor" href="#channel-ttl" aria-hidden="true">#</a> channel.ttl</h2><ul><li>Type: <code>number</code></li><li>Recommended to set manually: <strong>Yes</strong></li></ul><p>The effective time of the content. It’s the time to keep the cache after request without making new requests.</p><h2 id="channel-image" tabindex="-1"><a class="header-anchor" href="#channel-image" aria-hidden="true">#</a> channel.image</h2><ul><li>Type: <code>string</code></li><li>Recommended to set manually: <strong>Yes</strong></li></ul><p>A picture presenting the channel. A square picture with a size not smaller than 512×512 is recommended.</p><h2 id="channel-icon" tabindex="-1"><a class="header-anchor" href="#channel-icon" aria-hidden="true">#</a> channel.icon</h2><ul><li>Type: <code>string</code></li><li>Recommended to set manually: <strong>Yes</strong></li></ul><p>An icon representing a channel, a square picture, with not less than 128×128 in size, and transparent background color is recommended .</p><h2 id="channel-author" tabindex="-1"><a class="header-anchor" href="#channel-author" aria-hidden="true">#</a> channel.author</h2><ul><li>Type: <code>FeedAuthor</code></li><li>Recommended to set manually: <strong>Yes</strong></li></ul><p>The author of the channel.</p>',34),p={class:"hint-container details"},h=a(`<summary>FeedAuthor format</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">interface</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">FeedAuthor</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/** Author name */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/** Author’s email */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">email</span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/** Author’s site */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">url</span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Author’s avatar address</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   *</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Square, preferably not less than 128×128 with transparent background</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">avatar</span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="channel-hub" tabindex="-1"><a class="header-anchor" href="#channel-hub" aria-hidden="true">#</a> channel.hub</h2><ul><li>Type: <code>string</code></li></ul><p>Link to Websub. Websub requires a server backend, which is inconsistent with VuePress, so ignore it if there is no special need.</p>`,5),u={class:"hint-container info"},y=e("p",{class:"hint-container-title"},"WebSub",-1),m={href:"https://w3c.github.io/websub/#subscription-migration",target:"_blank",rel:"noopener noreferrer"};function B(g,b){const s=c("ExternalLinkIcon");return t(),i("div",null,[d,e("details",p,[h,e("div",u,[y,e("p",null,[n("For details, see "),e("a",m,[n("Websub"),o(s)]),n(".")])])])])}const v=l(r,[["render",B],["__file","channel.html.vue"]]);export{v as default};
