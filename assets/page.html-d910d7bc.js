import{a3 as s,Z as n,_ as e,a5 as a}from"./framework-61fc4e0a.js";const l={},i=a(`<h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> Frontmatter</h2><h3 id="obsolete" tabindex="-1"><a class="header-anchor" href="#obsolete" aria-hidden="true">#</a> Obsolete</h3><ul><li><p>mark <code>time</code> as deprecated, use <code>date</code> instead</p></li><li><p>mark <code>categories</code> as deprecated, use <code>category</code> instead</p></li><li><p>mark <code>tags</code> as deprecated, use <code>tag</code> instead</p></li></ul><h3 id="changes" tabindex="-1"><a class="header-anchor" href="#changes" aria-hidden="true">#</a> Changes</h3><ul><li><p>change <code>author</code> type from <code>string | undefined</code> to <code>AuthorInfo[] | AuthorInfo | string[] | string | undefined</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">interface</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">AuthorInfo</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Author name</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Author website</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">url</span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Author email</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">email</span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This change allows you to add multiple authors and set up sites for them.</p></li><li><p><code>date</code> only supports standard DateString mark with <code>-</code></p></li><li><p>change <code>category</code> type from <code>string | undefined</code> to <code>string[] | string | undefined</code></p><p>The theme supports multiple categories.</p></li><li><p>change <code>pageInfo</code> type from <code>PageInfo[] | false</code> to <code>ArticleInfo[] | false</code>.</p><p>Available values ​​change from <code>&quot;author&quot;</code>, <code>&quot;time&quot;</code>, <code>&quot;category&quot;</code>, <code>&quot;tag&quot;</code>, <code>&quot;reading-time&quot;</code>, <code>&quot;word&quot;</code>, <code>&quot;visitor&quot;</code> to <code>&quot;Author&quot;</code>, <code>&quot;Date&quot;</code>, <code>&quot;Original&quot;</code>, <code>&quot;Category&quot;</code>, <code>&quot;Tag&quot;</code>, <code>&quot;ReadingTime&quot;</code>, <code>&quot;Word&quot;</code>, <code>&quot;Visitor&quot;</code></p></li><li><p>rename <code>sidebarDepth</code> to <code>headerDepth</code></p></li><li><p>rename <code>copyrightText</code> to <code>copyright</code></p></li><li><p>rename <code>anchorDisplay</code> to <code>toc</code></p></li><li><p>rename <code>updateTime</code> to <code>lastUpdated</code></p></li><li><p>change <code>prev</code> and <code>next</code> types from <code>string | false</code> to <code>AutoLinkOptions | string | false</code></p><div class="language-typescript" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">interface</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">AutoLinkOptions</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">text</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre></div></li></ul><h3 id="deletion" tabindex="-1"><a class="header-anchor" href="#deletion" aria-hidden="true">#</a> Deletion</h3><ul><li><p>remove <code>password</code></p><p>For security reasons, V2 removes this method of encrypting the original text of the cipher.</p></li><li><p>remove <code>copyright</code></p><p>Related plugin is not yet compatible with V2.</p></li><li><p>remove <code>mediaLink</code></p><p>Footer no longer displays media links.</p></li></ul><h2 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> Markdown</h2><ul><li><p>Code demo syntax changed</p><p>Before:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: demo Title</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!-- demo content --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::: demo [</span><span style="color:#61AFEF;">vue</span><span style="color:#ABB2BF;">] Title</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!-- demo content --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::: demo [</span><span style="color:#61AFEF;">react</span><span style="color:#ABB2BF;">] Title</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!-- demo content --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: normal-demo Title</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!-- demo content --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::: vue-demo Title</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!-- demo content --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::: react-demo Title</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!-- demo content --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Code Group changed to code tab</p><p>Before:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">:::: code-group</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::: code-group-item pnpm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`bash</span></span>
<span class="line"><span style="color:#ABB2BF;">pnpm </span><span style="color:#98C379;">create</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">vuepress-theme-hope</span><span style="color:#ABB2BF;"> [dir]</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::: code-group-item npm:active</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`bash</span></span>
<span class="line"><span style="color:#ABB2BF;">npm </span><span style="color:#98C379;">init</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">vuepress-theme-hope</span><span style="color:#ABB2BF;"> [dir]</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: code-tabs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">@tab pnpm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`bash</span></span>
<span class="line"><span style="color:#ABB2BF;">pnpm </span><span style="color:#98C379;">create</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">vuepress-theme-hope</span><span style="color:#ABB2BF;"> [dir]</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">@tab:active npm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`bash</span></span>
<span class="line"><span style="color:#ABB2BF;">npm </span><span style="color:#98C379;">init</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">vuepress-theme-hope</span><span style="color:#ABB2BF;"> [dir]</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="layout" tabindex="-1"><a class="header-anchor" href="#layout" aria-hidden="true">#</a> Layout</h2><h3 id="project-homepage" tabindex="-1"><a class="header-anchor" href="#project-homepage" aria-hidden="true">#</a> Project HomePage</h3><p>Project HomePage frontmatter options are change.</p><ul><li>rename <code>title</code> to <code>heroText</code></li><li>rename <code>darkHeroImage</code> to <code>heroImageDark</code></li><li>rename <code>action</code> to <code>actions</code></li></ul>`,13),o=[i];function p(c,d){return n(),e("div",null,o)}const r=s(l,[["render",p],["__file","page.html.vue"]]);export{r as default};
