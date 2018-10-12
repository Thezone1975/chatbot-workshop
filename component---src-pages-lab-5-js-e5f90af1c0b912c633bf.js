(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(146),i=a(153),c=a(152);t.default=function(){return r.a.createElement(c.a,null,r.a.createElement("h2",null,"Lab 5: Deployment to WordPress"),r.a.createElement("p",null,"Lorem ipsum..."),r.a.createElement("h3",null,"What you will accomplish"),r.a.createElement("p",null,"In this lab you will:"),r.a.createElement("ol",null,r.a.createElement("li",null,"...;"),r.a.createElement("li",null,"...;"),r.a.createElement("li",null,"....")),r.a.createElement("h3",null,"Task 1: Installing and activing the WordPress plugin"),r.a.createElement(i.a,{color:"success"},"We now know how to create basic chatbots and deploy them for our customers to use. The next step is to make our chatbot better."),r.a.createElement("p",{style:{textAlign:"center",margin:"20px"}},r.a.createElement(l.Link,{className:"btn btn-secondary",to:"/lab-4"},"Back to Lab 4")," ",r.a.createElement(l.Link,{className:"btn btn-primary",to:"/lab-6"},"Proceed to Lab 6")))}},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(145),o=a.n(c);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(147),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var m=a(34);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},147:function(e,t,a){var n;e.exports=(n=a(149))&&n.default||n},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Chatbot Workshop Hands-On Labs"}}}}},149:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(48),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},150:function(e,t,a){},152:function(e,t,a){"use strict";var n=a(148),r=a(0),l=a.n(r),i=a(4),c=a.n(i),o=a(154),s=a.n(o),u=a(146),m=function(e){var t=e.siteTitle;return l.a.createElement("div",{style:{background:"rebeccapurple"}},l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},l.a.createElement("h1",{style:{margin:0}},l.a.createElement(u.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))},d=a(153);a(33),a(155);function p(e){var t=e.exact,a=e.className,n=e.activeClassName,r=e.children;return l.a.createElement(u.Link,Object.assign({},e,{getProps:function(e){var r=e.isCurrent,l=e.isPartiallyCurrent;return{className:["nav-link",a,t&&r?n:"",!t&&l?n:""].join(" ").trim()}}}),r)}p.propTypes={exact:c.a.bool,className:c.a.string,activeClassName:c.a.string,children:c.a.node.isRequired},p.defaultProps={exact:!1,activeClassName:"current",className:""};var h=function(){return l.a.createElement("div",{style:{background:"#E5CCFF",marginBottom:"1.45rem"}},l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960}},l.a.createElement(d.b,{pills:!0},l.a.createElement(d.c,null,l.a.createElement(p,{to:"/",exact:!0},"Home")),l.a.createElement(d.c,null,l.a.createElement(p,{to:"/lab-1"},"Lab 1: Set Up")),l.a.createElement(d.c,null,l.a.createElement(p,{to:"/lab-2"},"Lab 2: Intents")),l.a.createElement(d.c,null,l.a.createElement(p,{to:"/lab-3"},"Lab 3: Entities")),l.a.createElement(d.c,null,l.a.createElement(p,{to:"/lab-4"},"Lab 4: Dialog")),l.a.createElement(d.c,null,l.a.createElement(p,{to:"/lab-5"},"Lab 5: Deployment")))))},b=(a(150),a(156),function(e){var t=e.children;return l.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"A collection of hands-on labs to build chatbots with IBM Watson Assistant."},{name:"keywords",content:"chatbot, chatbots, watson, watson assistant, ibm, workshop, chatbot workshop"}]},l.a.createElement("html",{lang:"en"})),l.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),l.a.createElement(h,null),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:n})});b.propTypes={children:c.a.node.isRequired};t.a=b}}]);
//# sourceMappingURL=component---src-pages-lab-5-js-e5f90af1c0b912c633bf.js.map