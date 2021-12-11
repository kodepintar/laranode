"use strict";(self.webpackChunklunox=self.webpackChunklunox||[]).push([[89],{7595:function(e,t,a){a.d(t,{Z:function(){return E}});var r=a(4750),n=a(9496),l=a(1626),i=a(1585),m=a(6200),s="sidebar_hpIG",o="sidebarItemTitle_muKn",c="sidebarItemList_SIWl",g="sidebarItem_3VVy",d="sidebarItemLink_hYgC",u="sidebarItemLinkActive_gLto",p=a(3133);function v(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},t.title),n.createElement("ul",{className:c},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:g},n.createElement(m.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:u},e.title))}))))}var h=["sidebar","toc","children"];var E=function(e){var t=e.sidebar,a=e.toc,m=e.children,s=(0,r.Z)(e,h),o=t&&t.items.length>0;return n.createElement(i.Z,s,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},o&&n.createElement("aside",{className:"col col--3"},n.createElement(v,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},m),a&&n.createElement("div",{className:"col col--2"},a))))}},2504:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var r=a(9496),n=a(1565),l=a(7595),i=a(5742),m=a(6200),s=a(3133);var o=function(e){var t=e.metadata,a=t.previousPage,n=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},a&&r.createElement(m.Z,{className:"pagination-nav__link",to:a},r.createElement("div",{className:"pagination-nav__label"},"\xab"," ",r.createElement(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.createElement(m.Z,{className:"pagination-nav__link",to:n},r.createElement("div",{className:"pagination-nav__label"},r.createElement(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},c=a(7010);var g=function(e){var t=e.metadata,a=e.items,m=e.sidebar,s=(0,n.Z)().siteConfig.title,g=t.blogDescription,d=t.blogTitle,u="/"===t.permalink?s:d;return r.createElement(l.Z,{title:u,description:g,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogListPage,searchMetadata:{tag:"blog_posts_list"},sidebar:m},a.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},r.createElement(t,null))})),r.createElement(o,{metadata:t}))}},5742:function(e,t,a){a.d(t,{Z:function(){return _}});var r=a(9496),n=a(1626),l=a(9613),i=a(3133),m=a(6200),s=a(3556),o=a(7010),c=a(2311),g=a(5473),d="blogPostTitle_Lakp",u="blogPostData_TpsL",p="blogPostDetailsFull_jmUe",v=a(732),h="image_mCak";var E=function(e){var t=e.author,a=t.name,n=t.title,l=t.url,i=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(m.Z,{className:"avatar__photo-link avatar__photo",href:l},r.createElement("img",{className:h,src:i,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(m.Z,{href:l,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))},b="authorCol_Hvp5";function f(e){var t=e.authors,a=e.assets;return 0===t.length?null:r.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return r.createElement("div",{className:(0,n.Z)("col col--6",b),key:t},r.createElement(E,{author:Object.assign({},e,{imageURL:null!=(l=a.authorsImageUrls[t])?l:e.imageURL})}))})))}var _=function(e){var t,a,h,E,b=(h=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return h(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),_=(0,s.C)().withBaseUrl,N=e.children,Z=e.frontMatter,k=e.assets,P=e.metadata,T=e.truncated,w=e.isBlogPostPage,L=void 0!==w&&w,I=P.date,y=P.formattedDate,C=P.permalink,x=P.tags,M=P.readingTime,U=P.title,A=P.editUrl,B=P.authors,R=null!=(t=k.image)?t:Z.image,D=!L&&T,O=x.length>0;return r.createElement("article",{className:L?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(E=L?"h1":"h2",r.createElement("header",null,r.createElement(E,{className:d,itemProp:"headline"},L?U:r.createElement(m.Z,{itemProp:"url",to:C},U)),r.createElement("div",{className:(0,n.Z)(u,"margin-vert--md")},r.createElement("time",{dateTime:I,itemProp:"datePublished"},y),void 0!==M&&r.createElement(r.Fragment,null," \xb7 ",b(M))),r.createElement(f,{authors:B,assets:k}))),R&&r.createElement("meta",{itemProp:"image",content:_(R,{absolute:!0})}),r.createElement("div",{className:"markdown",itemProp:"articleBody"},r.createElement(l.Zo,{components:c.Z},N)),(O||T)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(a={},a[p]=L,a))},O&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":D})},r.createElement(v.Z,{tags:x})),L&&A&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(g.Z,{editUrl:A})),D&&r.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":O})},r.createElement(m.Z,{to:P.permalink,"aria-label":"Read more about "+U},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},5473:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(9496),n=a(3133),l=a(5900),i=a(4750),m=a(1626),s="iconEdit_gxXc",o=["className"];var c=function(e){var t=e.className,a=(0,i.Z)(e,o);return r.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,m.Z)(s,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},g=a(7010);function d(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:g.kM.common.editThisPage},r.createElement(c,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},7107:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(9496),n=a(1626),l=a(6200),i="tag_HsAL",m="tagRegular_OjsP",s="tagWithCount_1oby";var o=function(e){var t,a=e.permalink,o=e.name,c=e.count;return r.createElement(l.Z,{href:a,className:(0,n.Z)(i,(t={},t[m]=!c,t[s]=c,t))},o,c&&r.createElement("span",null,c))}},732:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(9496),n=a(1626),l=a(3133),i=a(7107),m="tags_bUD9",s="tag_ril3";function o(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,n.Z)(m,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:s},r.createElement(i.Z,{name:t,permalink:a}))}))))}}}]);