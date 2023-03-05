import{a2 as n,Y as o,Z as l,a0 as e,a1 as t,_ as a,$ as i,a3 as c,F as h}from"./framework-b67f4785.js";const s={},r=c('<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p><code>vuepress-plugin-feed2</code> 插件可为你生成以下三种格式的 feed 文件:</p><ul><li>Atom 1.0</li><li>JSON 1.1</li><li>RSS 2.0</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Atom 和 JSON 是为了提供更多 Feed 软件的适配而提供的。</p><p>如果可以，请尽可能使用 RSS。</p></div><p>请按照需要生成的格式，在插件选项中设置 <code>atom</code>, <code>json</code> 或 <code>rss</code> 为 <code>true</code>。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>当然，你可以都输出它们，这不是一个三选一。</p></div><p>考虑到现在 Feed 已经很小众，本插件旨在提供最小配置来尽可能自动生成详细的 Feed 文件。当然本插件也预留了充足的设置项，以让你自由定义 Feed 的输出内容。</p><p>为了正确生成链接地址，你需要在插件选项中设置 <code>hostname</code> (部署域名)，</p><h2 id="频道设置" tabindex="-1"><a class="header-anchor" href="#频道设置" aria-hidden="true">#</a> 频道设置</h2><p>你可以通过设置 <code>channel</code> 选项来自自定义 Feed 频道的各项信息。</p><p>我们推荐进行如下设置:</p><ul><li>将建立 Feed 的日期转换为 ISOString 写入到 <code>channel.pubDate</code> 中</li><li>通过 <code>channel.ttl</code> 中设置内容的更新周期(单位: 分钟)</li><li>通过 <code>channel.copyright</code> 设置版权信息</li><li>通过 <code>channel.author</code> 设置频道作者。</li></ul><div class="hint-container tip"><p class="hint-container-title">默认频道设置</p><ul><li><p>频道的标题、描述默认为站点的名称与链接。</p></li><li><p>频道的链接、最后更新时间会由插件自动生成。</p></li><li><p>频道的版权信息会尝试从页脚的版权信息中读取。</p></li></ul></div>',13),p=e("h2",{id:"生成控制",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#生成控制","aria-hidden":"true"},"#"),t(" 生成控制")],-1),u=e("h3",{id:"项目默认生成逻辑",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#项目默认生成逻辑","aria-hidden":"true"},"#"),t(" 项目默认生成逻辑")],-1),_=e("p",null,"默认情况下，所有文章均会被添加至 feed 流。",-1),f=e("h3",{id:"自定义页面",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#自定义页面","aria-hidden":"true"},"#"),t(" 自定义页面")],-1),m=e("p",null,[t("你可以通过配置 frontmatter 中的 "),e("code",null,"feed"),t(" 选项，对特定文章的 feed 项目生成的内容进行控制。")],-1),x=e("h3",{id:"自定义-feed-生成",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#自定义-feed-生成","aria-hidden":"true"},"#"),t(" 自定义 Feed 生成")],-1),g=e("p",null,[t("你可以通过配置插件选项中的 "),e("code",null,"getter"),t("，完全控制 Feed 项目的生成逻辑。")],-1),F=e("h3",{id:"多语言配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#多语言配置","aria-hidden":"true"},"#"),t(" 多语言配置")],-1),v=e("p",null,"插件会针对每个语言生成单独的 Feed。",-1),S=e("p",null,[t("你可以通过插件选项中的 "),e("code",null,"locales"),t(" 分别对不同语言提供不同的默认设置。")],-1);function b(N,k){const d=h("RouterLink");return o(),l("div",null,[r,e("p",null,[t("详细的选项及其默认值详见 "),a(d,{to:"/zh/config/channel.html"},{default:i(()=>[t("配置 → 频道设置")]),_:1})]),p,u,_,e("p",null,[t("关于默认情况下读取的内容，详见 "),a(d,{to:"/zh/config/item.html"},{default:i(()=>[t("配置 → 项目控制")]),_:1})]),f,m,e("p",null,[t("详细的选项及其默认值详见 "),a(d,{to:"/zh/config/item.html"},{default:i(()=>[t("配置 → 项目设置")]),_:1})]),x,g,e("p",null,[t("详细的选项及其默认值详见 "),a(d,{to:"/zh/config/getter.html"},{default:i(()=>[t("配置 → Feed 获取器")]),_:1})]),F,v,S])}const R=n(s,[["render",b],["__file","guide.html.vue"]]);export{R as default};
