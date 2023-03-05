import{a3 as c,Z as p,_ as i,a4 as r,a1 as s,a2 as e,$ as a,a0 as l,a5 as t,D as d}from"./framework-61fc4e0a.js";const h={},u=s("p",null,[s("code",null,"vuepress-theme-hope"),e(" 实现了文章信息展示。")],-1),B=s("h2",{id:"启用",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#启用","aria-hidden":"true"},"#"),e(" 启用")],-1),y=s("p",null,[e("页面信息默认全局启用，同时支持页面配置。你可以在特定页面的 front matter 中设置 "),s("code",null,"pageInfo: false"),e(" 来局部禁用它。")],-1),m=s("p",null,[e("如果你需要保持全局禁用，请在主题选项中设置 "),s("code",null,"pageInfo: false"),e("。这样你可以在特定页面的 front matter 中设置 "),s("code",null,"pageInfo"),e(" 来局部启用它。")],-1),v={id:"参数",tabindex:"-1"},_=s("a",{class:"header-anchor",href:"#参数","aria-hidden":"true"},"#",-1),f=t("<p><code>pageInfo</code> 默认接受一个字符串数组，可以填入各条目名称，填入的顺序即是各条目显示的顺序。</p><p>条目可选的值和对应内容如下:</p><table><thead><tr><th>条目</th><th>对应内容</th><th>页面 frontmatter 值</th><th>主题设置的配置项</th></tr></thead><tbody><tr><td><code>&quot;Author&quot;</code></td><td>作者</td><td><code>author</code></td><td><code>author</code></td></tr><tr><td><code>&quot;Date&quot;</code></td><td>写作日期</td><td><code>date</code></td><td>N/A</td></tr><tr><td><code>&quot;Original&quot;</code></td><td>是否原创</td><td><code>isOriginal</code></td><td>N/A</td></tr><tr><td><code>&quot;Category&quot;</code></td><td>分类</td><td><code>category</code></td><td>N/A</td></tr><tr><td><code>&quot;Tag&quot;</code></td><td>标签</td><td><code>tag</code></td><td>N/A</td></tr><tr><td><code>&quot;ReadingTime&quot;</code></td><td>预计阅读时间</td><td>N/A(自动生成)</td><td>N/A</td></tr><tr><td><code>&quot;Word&quot;</code></td><td>字数</td><td>N/A(自动生成)</td><td>N/A</td></tr><tr><td><code>&quot;PageView&quot;</code></td><td>访问量</td><td><code>pageview</code> (仅 Waline 可用)</td><td><code>plugins.comment.pageview</code></td></tr></tbody></table><p>默认会显示 “作者，访问量，写作日期，分类，标签，预计阅读时间”。</p>",4),g={id:"作者",tabindex:"-1"},A=s("a",{class:"header-anchor",href:"#作者","aria-hidden":"true"},"#",-1),b=t(`<p>例子:</p><div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">---</span></span>
<span class="line"><span style="color:#E06C75;">author</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Mr.Hope</span></span>
<span class="line"><span style="color:#ABB2BF;">---</span></span>
<span class="line"></span></code></pre></div><p>作者姓名也可以在主题选项中通过 <code>author</code> 全局配置，这样每篇文章都会显示默认作者。这时，你仍可以在页面中配置 front matter 中的 <code>author</code> 为一个新值来覆盖默认作者，或者设置 <code>author</code> 为 <code>false</code> 取消作者显示。</p><p>作者支持 <code>string[]</code>、<code>string</code>、<code>AuthorInfo</code> 和 <code>AuthorInfo[]</code>。</p><p>其中 AuthorInfo 格式如下:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">interface</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">AuthorInfo</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * 作者姓名</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * 作者网站</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">url</span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * 作者 Email</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">email</span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="写作日期" tabindex="-1"><a class="header-anchor" href="#写作日期" aria-hidden="true">#</a> 写作日期</h3><p>建议 time 以标准格式输入日期，即 <code>xxxx-xx-xx</code> 的形式，如 “2020 年 4 月 1 日” 应当输入为 <code>2020-04-01</code></p><p>例子:</p><div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">---</span></span>
<span class="line"><span style="color:#E06C75;">date</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">2020-01-01</span></span>
<span class="line"><span style="color:#ABB2BF;">---</span></span>
<span class="line"></span></code></pre></div><div class="hint-container note"><p class="hint-container-title">注</p><p>在基于 Git 的项目中运行时，写作日期将回退到当前文件的首次提交日期。</p></div><h3 id="分类与标签" tabindex="-1"><a class="header-anchor" href="#分类与标签" aria-hidden="true">#</a> 分类与标签</h3>`,12),F=s("h3",{id:"阅读时间",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#阅读时间","aria-hidden":"true"},"#"),e(" 阅读时间")],-1),x=s("p",null,[e("默认的统计方式是一分钟 300 字，你可以设置在主题选项中设置 "),s("code",null,"plugins.readingTime.wordPerMinute"),e(" 来覆盖它，该选项不支持在页面单独配置。")],-1),E={id:"浏览量",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#浏览量","aria-hidden":"true"},"#",-1),C=t(`<p>例子:</p><div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">---</span></span>
<span class="line"><span style="color:#E06C75;">pageview</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span></span>
<span class="line"><span style="color:#ABB2BF;">---</span></span>
<span class="line"></span></code></pre></div>`,2);function q(N,D){const n=d("Badge"),o=d("RouterLink");return p(),i("div",null,[u,r(" more "),B,y,m,s("h2",v,[_,e(" 参数 "),a(n,{text:"支持页面配置"})]),f,s("h3",g,[A,e(" 作者 "),a(n,{text:"支持页面配置"})]),b,s("p",null,[e("详见 "),a(o,{to:"/zh/guide/blog/category-and-tags.html"},{default:l(()=>[e("博客章节")]),_:1})]),F,x,s("h3",E,[k,e(" 浏览量 "),a(n,{text:"支持页面配置"})]),s("p",null,[e("当配置 Waline 作为 "),a(o,{to:"/zh/guide/feature/comment.html"},{default:l(()=>[e("评论功能")]),_:1}),e(" 的提供者时，该功能默认启用。")]),C])}const I=c(h,[["render",q],["__file","page-info.html.vue"]]);export{I as default};
