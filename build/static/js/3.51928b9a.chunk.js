(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[3,8],{151:function(e,t,c){"use strict";var a=c(3),n=c(2),o=c(4),r=c(5),s=c.n(r),i=c(0),l=c(8),f=c(1),j=["as","bsPrefix","className"],u=["className"];var b=i.forwardRef((function(e,t){var c=function(e){var t=e.as,c=e.bsPrefix,a=e.className,r=Object(o.a)(e,j);c=Object(l.c)(c,"col");var i=Object(l.a)(),f=Object(l.b)(),u=[],b=[];return i.forEach((function(e){var t,a,n,o=r[e];delete r[e],"object"===typeof o&&null!=o?(t=o.span,a=o.offset,n=o.order):t=o;var s=e!==f?"-".concat(e):"";t&&u.push(!0===t?"".concat(c).concat(s):"".concat(c).concat(s,"-").concat(t)),null!=n&&b.push("order".concat(s,"-").concat(n)),null!=a&&b.push("offset".concat(s,"-").concat(a))})),[Object(n.a)(Object(n.a)({},r),{},{className:s.a.apply(void 0,[a].concat(u,b))}),{as:t,bsPrefix:c,spans:u}]}(e),r=Object(a.a)(c,2),i=r[0],b=i.className,d=Object(o.a)(i,u),p=r[1],O=p.as,h=void 0===O?"div":O,v=p.bsPrefix,x=p.spans;return Object(f.jsx)(h,Object(n.a)(Object(n.a)({},d),{},{ref:t,className:s()(b,!x.length&&v)}))}));b.displayName="Col",t.a=b},160:function(e,t,c){"use strict";var a=c(2),n=c(4),o=c(5),r=c.n(o),s=c(0),i=c(8),l=c(1),f=["bsPrefix","className","as"],j=s.forwardRef((function(e,t){var c=e.bsPrefix,o=e.className,s=e.as,j=void 0===s?"div":s,u=Object(n.a)(e,f),b=Object(i.c)(c,"row"),d=Object(i.a)(),p=Object(i.b)(),O="".concat(b,"-cols"),h=[];return d.forEach((function(e){var t,c=u[e];delete u[e],t=null!=c&&"object"===typeof c?c.cols:c;var a=e!==p?"-".concat(e):"";null!=t&&h.push("".concat(O).concat(a,"-").concat(t))})),Object(l.jsx)(j,Object(a.a)(Object(a.a)({ref:t},u),{},{className:r.a.apply(void 0,[o,b].concat(h))}))}));j.displayName="Row",t.a=j},87:function(e,t,c){"use strict";c.r(t);c(0),c(89);var a=c(1);t.default=function(e){var t=e.title;return Object(a.jsx)("div",{className:"header",children:t})}},91:function(e,t,c){"use strict";c.r(t);var a=c(3),n=c(0),o=c(181),r=c(144),s=c(160),i=c(151),l=c(64),f=c.n(l),j=c(87),u=c(32),b=c(1),d={introTextContainer:{margin:10,flexDirection:"column",whiteSpace:"pre-wrap",textAlign:"left",fontSize:"1.2em",fontWeight:500},introImageContainer:{margin:10,justifyContent:"center",alignItems:"center",display:"flex"}};t.default=function(e){var t,c=e.header,l=Object(n.useState)(null),p=Object(a.a)(l,2),O=p[0],h=p[1];return Object(n.useEffect)((function(){fetch("https://duk7292.github.io/dev_portfolio/profile/about.json",{method:"GET"}).then((function(e){return e.json()})).then((function(e){return h(e)})).catch((function(e){return e}))}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j.default,{title:c}),Object(b.jsx)("div",{className:"section-content-container",children:Object(b.jsx)(r.a,{children:O?Object(b.jsx)(f.a,{children:Object(b.jsxs)(s.a,{children:[Object(b.jsx)(i.a,{style:d.introTextContainer,children:(t=O.about,Object(b.jsx)(o.a,{children:t}))}),Object(b.jsx)(i.a,{style:d.introImageContainer,children:Object(b.jsx)("img",{src:null===O||void 0===O?void 0:O.imageSource,alt:"profile"})})]})}):Object(b.jsx)(u.default,{})})})]})}}}]);
//# sourceMappingURL=3.51928b9a.chunk.js.map