import{a3 as a,Z as i,_ as s,a1 as e,a2 as t,$ as n,a0 as c,a5 as l,D as r}from"./framework-61fc4e0a.js";const d={},p=e("code",null,"vuepress-theme-hope",-1),h=e("code",null,"vuepress-plugin-sitemap2",-1),u=l('<p>The plugin will automatically generate the last update time of the page based on the Git timestamp of the page, and will also declare the alternative version link of the page in other languages according to the locales config.</p><p>If you don’t need this plugin, please set <code>plugins.sitemap</code> to <code>false</code> in theme options.</p><div class="hint-container info"><p class="hint-container-title">Info</p><p><code>vuepress-theme-hope</code> passes <code>plugins.sitemap</code> in theme options as plugin options to <code>vuepress-plugin-sitemap2</code>.</p></div><h2 id="control-sitemap-link" tabindex="-1"><a class="header-anchor" href="#control-sitemap-link" aria-hidden="true">#</a> Control Sitemap Link</h2><p>By default, all site links except 404 page will be added to the Sitemap.</p><p>To add other pages to the Sitemap outside of the VuePress project page, please turn them into an array and pass to <code>extraUrls</code>.</p><p>If you don’t want certain pages to appear in the sitemap, you can turn them into an array and pass them to <code>excludeUrls</code>, or you can pass in a filter function though <code>filter</code> options. You can also set <code>sitemap.exclude</code> to <code>true</code> in page frontmatter.</p><p>You can also control the output link through the <code>sitemapFilename</code>. The default output directory is <code>sitemap.xml</code>.</p><h2 id="change-frequency" tabindex="-1"><a class="header-anchor" href="#change-frequency" aria-hidden="true">#</a> Change Frequency</h2><p>The default update cycle of the page is <code>daily</code> (every day). To modify the entire page cycle, please set <code>changefreq</code>. You can also set <code>sitemap.changefreq</code> in the frontmatter of the page. Note that page has a higher priority.</p><p>The legal frequencies are:</p><ul><li><code>&quot;always&quot;</code></li><li><code>&quot;hourly&quot;</code></li><li><code>&quot;daily&quot;</code></li><li><code>&quot;weekly&quot;</code></li><li><code>&quot;monthly&quot;</code></li><li><code>&quot;yearly&quot;</code></li><li><code>&quot;never&quot;</code></li></ul><div class="hint-container info"><p class="hint-container-title">Sitemap Intro</p><p>Sitemaps may be addressed to users or to software. Many sites have user-visible sitemaps which present a systematic view, typically hierarchical, of the site. These are intended to help visitors find specific pages, and can also be used by crawlers. Alphabetically organized site maps, sometimes called site indexes, are a different approach.</p><p>For use by search engines and other crawlers, there is a structured format, the XML Sitemap, which lists the pages in a site, their relative importance, and how often they are updated. This is pointed to from the robots.txt file and is typically called sitemap.xml .</p><p>Google introduced the Sitemaps protocol so web developers can publish lists of links from across their sites.</p></div>',13);function m(f,g){const o=r("ProjectLink");return i(),s("div",null,[e("p",null,[p,t(" provide Sitemap generation by including "),n(o,{name:"sitemap2"},{default:c(()=>[h]),_:1}),t(".")]),u])}const v=a(d,[["render",m],["__file","sitemap.html.vue"]]);export{v as default};
