(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[10],{102:function(e,n,t){},141:function(e,n,t){var o={"./About":[91,0,3],"./About.jsx":[91,0,3],"./Education":[92,9,4],"./Education.jsx":[92,9,4],"./Experience":[93,0,1,5],"./Experience.jsx":[93,0,1,5],"./FallbackSpinner":[32],"./FallbackSpinner.jsx":[32],"./Header":[87,8],"./Header.jsx":[87,8],"./Home":[49],"./Home.jsx":[49],"./NavBar":[45],"./NavBar.jsx":[45],"./Projects":[94,0,2],"./Projects.jsx":[94,0,2],"./Skills":[95,0,7],"./Skills.jsx":[95,0,7],"./Social":[50],"./Social.jsx":[50],"./ThemeToggler":[46],"./ThemeToggler.jsx":[46],"./projects/ProjectCard":[90,0,6],"./projects/ProjectCard.jsx":[90,0,6]};function r(e){if(!t.o(o,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=o[e],r=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(r)}))}r.keys=function(){return Object.keys(o)},r.id=141,e.exports=r},142:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),c=t(17),i=(t(102),t(89),t(103),t(33)),a=t(20),l=t(76),s=t(52),u=t(3),d=t(10),f=t(32),j=t(45),h=t(49),b=t(43),v=t(1);var m,x=function(){var e=Object(o.useState)(null),n=Object(u.a)(e,2),c=n[0],i=n[1];return Object(o.useEffect)((function(){fetch(b.a.routes,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return i(e)})).catch((function(e){return e}))}),[]),Object(v.jsxs)("div",{className:"MainApp",children:[Object(v.jsx)(j.default,{}),Object(v.jsx)("main",{className:"main",children:Object(v.jsx)(d.c,{children:Object(v.jsxs)(o.Suspense,{fallback:Object(v.jsx)(f.default,{}),children:[Object(v.jsx)(d.a,{exact:!0,path:"/",component:h.default}),c&&c.sections.map((function(e){var n=r.a.lazy((function(){return t(141)("./"+e.component)}));return Object(v.jsx)(d.a,{path:e.path,component:function(){return Object(v.jsx)(n,{header:e.headerTitle})}},e.headerTitle)}))]})})})]})},O=t(35),p=Object(a.c)(m||(m=Object(O.a)(["\n   body {\n     background: ",";\n     color: ",";\n     transition: all 0.50s linear; \n  }\n"])),(function(e){return e.theme.background}),(function(e){return e.theme.color})),g={background:"#fff",color:"#121212",accentColor:"#3D84C6",chronoTheme:{cardBgColor:"white",cardForeColor:"black",titleColor:"white"},timelineLineColor:"#ccc",cardBackground:"#fff",cardFooterBackground:"#f7f7f7",cardBorderColor:"#00000020",navbarTheme:{linkColor:"#dedede",linkHoverColor:"#fefefe",linkActiveColor:"#fefefe"},bsPrimaryVariant:"light",bsSecondaryVariant:"dark",socialIconBgColor:"#121212"},k={background:"#121212",color:"#eee",accentColor:"#3D84C6",chronoTheme:{cardBgColor:"#1B1B1B",cardForeColor:"#eee",titleColor:"black"},timelineLineColor:"#444",cardBackground:"#060606",cardFooterBackground:"#181818",cardBorderColor:"#ffffff20",navbarTheme:{linkColor:"#dedede",linkHoverColor:"#fefefe",linkActiveColor:"#fefefe"},bsPrimaryVariant:"dark",bsSecondaryVariant:"light",socialIconBgColor:"#fefefe"};var C=function(){window.matchMedia=null;var e=Object(l.a)(!0);return Object(v.jsx)(s.a.Provider,{value:{darkMode:e},children:Object(v.jsxs)(a.b,{theme:e.value?k:g,children:[Object(v.jsx)(p,{}),Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(i.a,{children:Object(v.jsx)(x,{})})})]})})},y=function(e){e&&e instanceof Function&&t.e(13).then(t.bind(null,180)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),o(e),r(e),c(e),i(e)}))},S=document.getElementById("root");Object(c.createRoot)(S).render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(C,{})})),y()},32:function(e,n,t){"use strict";t.r(n);t(0);var o=t(143),r=t(1),c={spinnerContainerStyle:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}};n.default=function(){return Object(r.jsx)("div",{style:c.spinnerContainerStyle,children:Object(r.jsx)(o.a,{animation:"grow"})})}},43:function(e,n,t){"use strict";n.a={navbar:"profile/navbar.json",routes:"profile/routes.json",home:"profile/home.json",social:"profile/social.json",about:"profile/about.json",skills:"profile/skills.json",education:"profile/education.json",experiences:"profile/experiences.json",projects:"profile/projects.json"}},45:function(e,n,t){"use strict";t.r(n);var o,r,c=t(3),i=t(35),a=t(55),l=t(144),s=t(86),u=t(0),d=t(10),f=t(33),j=t(20),h=t(46),b=t(1),v={logoStyle:{width:50,height:40}},m=j.d.a(o||(o=Object(i.a)(["\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n  &::after {\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.navbarTheme.linkColor}),(function(e){return e.theme.navbarTheme.linkHoverColor}),(function(e){return e.theme.accentColor})),x=Object(j.d)(f.b)(r||(r=Object(i.a)(["\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n  &::after {\n    background-color: ",";\n  }\n  &.navbar__link--active {\n    color: ",";\n  }\n"])),(function(e){return e.theme.navbarTheme.linkColor}),(function(e){return e.theme.navbarTheme.linkHoverColor}),(function(e){return e.theme.accentColor}),(function(e){return e.theme.navbarTheme.linkActiveColor})),O=Object(d.f)((function(){var e,n,t,o,r,i,d=Object(u.useContext)(j.a),f=Object(u.useState)(null),O=Object(c.a)(f,2),p=O[0],g=O[1],k=Object(u.useState)(!1),C=Object(c.a)(k,2),y=C[0],S=C[1];return Object(u.useEffect)((function(){fetch("https://duk7292.github.io/dev_portfolio/profile/navbar.json",{method:"GET"}).then((function(e){return e.json()})).then((function(e){return g(e)})).catch((function(e){return e}))}),[]),Object(b.jsx)(a.a,{fixed:"top",expand:"md",bg:"dark",variant:"dark",className:"navbar-custom",expanded:y,children:Object(b.jsxs)(l.a,{children:[(null===p||void 0===p?void 0:p.logo)&&Object(b.jsx)(a.a.Brand,{href:"/",children:Object(b.jsx)("img",{src:null===p||void 0===p||null===(e=p.logo)||void 0===e?void 0:e.source,className:"d-inline-block align-top",alt:"main logo",style:null!==p&&void 0!==p&&null!==(n=p.logo)&&void 0!==n&&n.height&&null!==p&&void 0!==p&&null!==(t=p.logo)&&void 0!==t&&t.width?{height:null===p||void 0===p||null===(o=p.logo)||void 0===o?void 0:o.height,width:null===p||void 0===p||null===(r=p.logo)||void 0===r?void 0:r.width}:v.logoStyle})}),Object(b.jsx)(a.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:function(){return S(!y)}}),Object(b.jsxs)(a.a.Collapse,{id:"responsive-navbar-nav",children:[Object(b.jsx)(s.a,{className:"me-auto"}),Object(b.jsx)(s.a,{children:p&&(null===(i=p.sections)||void 0===i?void 0:i.map((function(e,n){return"link"===(null===e||void 0===e?void 0:e.type)?Object(b.jsx)(m,{href:e.href,target:"_blank",rel:"noopener noreferrer",onClick:function(){return S(!1)},className:"navbar__link",theme:d,children:e.title},e.title):Object(b.jsx)(x,{onClick:function(){return S(!1)},exact:0===n,activeClassName:"navbar__link--active",className:"navbar__link",to:e.href,theme:d,children:e.title},e.title)})))}),Object(b.jsx)(h.default,{onClick:function(){return S(!1)}})]})]})})}));n.default=O},46:function(e,n,t){"use strict";t.r(n);t(0);var o=t(78),r=t.n(o),c=t(52),i=t(1);function a(e){var n=e.onClick;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(c.a.Consumer,{children:function(e){return Object(i.jsx)("div",{style:{marginBottom:8},children:Object(i.jsx)(r.a,{onChange:function(){return e.darkMode.toggle(),void n()},checked:e.darkMode.value,size:50})})}})})}a.defaultProps={onClick:function(){}},n.default=a},49:function(e,n,t){"use strict";t.r(n);var o=t(3),r=t(0),c=t(83),i=t.n(c),a=t(64),l=t.n(a),s=t(50),u=t(32),d=t(1),f={nameStyle:{fontSize:"5em"},inlineChild:{display:"inline-block"},mainContainer:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}};n.default=function(){var e=Object(r.useState)(null),n=Object(o.a)(e,2),t=n[0],c=n[1];return Object(r.useEffect)((function(){fetch("https://duk7292.github.io/dev_portfolio/profile/home.json",{method:"GET"}).then((function(e){return e.json()})).then((function(e){return c(e)})).catch((function(e){return e}))}),[]),t?Object(d.jsx)(l.a,{children:Object(d.jsxs)("div",{style:f.mainContainer,children:[Object(d.jsx)("h1",{style:f.nameStyle,children:null===t||void 0===t?void 0:t.name}),Object(d.jsxs)("div",{style:{flexDirection:"row"},children:[Object(d.jsx)("h2",{style:f.inlineChild,children:"I'm\xa0"}),Object(d.jsx)(i.a,{options:{loop:!0,autoStart:!0,strings:null===t||void 0===t?void 0:t.roles}})]}),Object(d.jsx)(s.default,{})]})}):Object(d.jsx)(u.default,{})}},50:function(e,n,t){"use strict";t.r(n);var o=t(3),r=t(0),c=t(84),i=t(20),a=t(43),l=t(1),s={iconStyle:{marginLeft:10,marginRight:10,marginBottom:10}};n.default=function(){var e=Object(r.useContext)(i.a),n=Object(r.useState)(null),t=Object(o.a)(n,2),u=t[0],d=t[1];return Object(r.useEffect)((function(){fetch(a.a.social,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return d(e)})).catch((function(e){return e}))}),[]),Object(l.jsx)("div",{className:"social",children:u?u.social.map((function(n){return Object(l.jsx)(c.SocialIcon,{style:s.iconStyle,url:n.href,network:n.network,bgColor:e.socialIconBgColor,target:"_blank",rel:"noopener"},n.network)})):null})}},52:function(e,n,t){"use strict";var o=t(0),r=t.n(o).a.createContext();n.a=r},89:function(e,n,t){}},[[142,11,12]]]);
//# sourceMappingURL=main.8b712bbe.chunk.js.map