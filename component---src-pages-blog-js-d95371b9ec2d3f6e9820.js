(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{147:function(e,a,t){"use strict";t.r(a);var n=t(180),l=t(0),r=t.n(l),c=t(153),i=t(154),s=t(157),o=t(181),u=t.n(o);a.default=function(){var e=n.data;return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(i.a,{title:"Blog"}),r.a.createElement("h1",null,"Blog"),r.a.createElement("ol",{className:u.a.posts},e.allContentfulBlogPost.edges.map(function(e){return r.a.createElement("li",{className:u.a.post,key:e.node.slug},r.a.createElement(c.a,{to:"/blog/"+e.node.slug},r.a.createElement("h2",null,e.node.title),r.a.createElement("p",null,e.node.publishedDate.toUpperCase())))}))))}},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Jordan Katzen"}}}}},152:function(e,a,t){var n;e.exports=(n=t(156))&&n.default||n},153:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(4),c=t.n(r),i=t(33),s=t.n(i);t.d(a,"a",function(){return s.a});t(152),l.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func},154:function(e,a,t){"use strict";var n=t(151),l=t(0),r=t.n(l),c=t(160);a.a=function(e){var a=e.title,t=n.data;return r.a.createElement(c.Helmet,{title:a+" | "+t.site.siteMetadata.title})}},155:function(e){e.exports={data:{site:{siteMetadata:{author:"Jordan Katzen"}}}}},156:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),l=t.n(n),r=t(4),c=t.n(r),i=t(55),s=t(2),o=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return t?l.a.createElement(i.a,Object.assign({location:a,pageResources:t},t.json)):null};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=o},157:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(158),c=t(161),i=t(162),s=t(155),o=t(159),u=t(163),m=t.n(u),d=function(){var e=s.data;return l.a.createElement("footer",{className:m.a.footer},l.a.createElement("a",{href:"https://www.linkedin.com/in/jordankatzen/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(o.a,{icon:["fab","linkedin"],size:"lg"})),l.a.createElement("a",{href:"https://github.com/katzenj/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(o.a,{icon:["fab","github"],size:"lg"})),l.a.createElement("a",{href:"mailto:jkatzen8@gmail.com"},l.a.createElement(o.a,{icon:["fas","paper-plane"],size:"lg"})),l.a.createElement("p",null,e.site.siteMetadata.author," © 2019"))},E=t(151),f=t(153),p=t(164),v=t.n(p),g=function(){var e=E.data;return l.a.createElement("header",{className:v.a.header},l.a.createElement("h1",null,l.a.createElement(f.a,{className:v.a.title,to:"/"},e.site.siteMetadata.title)),l.a.createElement("nav",null,l.a.createElement("ul",{className:v.a.navList},l.a.createElement("li",null,l.a.createElement(f.a,{className:v.a.navItem,activeClassName:v.a.activeNavItem,to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(f.a,{className:v.a.navItem,activeClassName:v.a.activeNavItem,to:"/blog"},"Blog")),l.a.createElement("li",null,l.a.createElement(f.a,{className:v.a.navItem,activeClassName:v.a.activeNavItem,to:"/about"},"About")),l.a.createElement("li",null,l.a.createElement(f.a,{className:v.a.navItem,activeClassName:v.a.activeNavItem,to:"/experience"},"Experience")))))},h=(t(165),t(166)),b=t.n(h);a.a=function(e){return r.b.add(c.b,c.a,i.b,i.a),l.a.createElement("div",null,l.a.createElement(g,null),l.a.createElement("div",{className:b.a.container},l.a.createElement("div",{className:b.a.content},e.children)),l.a.createElement(d,null))}},180:function(e){e.exports={data:{allContentfulBlogPost:{edges:[{node:{title:"Reading 📚",slug:"reading",publishedDate:"May 19, 2019"}},{node:{title:"First Post ✍",slug:"first-post",publishedDate:"May 16, 2019"}}]}}}}}]);
//# sourceMappingURL=component---src-pages-blog-js-d95371b9ec2d3f6e9820.js.map