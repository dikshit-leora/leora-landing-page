_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,s=void 0!==o&&o;return n||a&&s}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},s=n("lwAK"),i=n("FYa8"),c=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function b(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,s=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){s=!0;var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,u=f.length;c<u;c++){var d=f[c];if(a.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?o=!1:n.add(d);else{var l=a.props[d],b=r[d]||new Set;"name"===d&&s||!b.has(l)?(b.add(l),r[d]=b):o=!1}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function p(e){var t=e.children,n=(0,a.useContext)(s.AmpStateContext),r=(0,a.useContext)(i.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:b,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}p.rewind=function(){};var h=p;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},Ojfx:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("q1tI"),o=(n("60Bi"),n("ct29")),s=n("Zv97"),i=(n("p7VU"),n("9fJq"),n("YFqc")),c=n.n(i),u=(n("5lBx"),n("g4pe")),d=n.n(u);t.default=function(){var e=Object(a.useState)(!1);return e[0],e[1],Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.a,{children:Object(r.jsx)("title",{children:"Leora - About Us"})}),Object(r.jsx)(o.a,{}),Object(r.jsxs)("div",{className:"page-content bg-white",children:[Object(r.jsx)("div",{className:"dlab-bnr-inr overlay-primary-dark",style:{backgroundImage:"url(images/banner/bnr1.jpg)"},children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"dlab-bnr-inr-entry",children:[Object(r.jsx)("h1",{children:"About us"}),Object(r.jsx)("nav",{"aria-label":"breadcrumb",className:"breadcrumb-row",children:Object(r.jsxs)("ul",{className:"breadcrumb",children:[Object(r.jsx)("li",{className:"breadcrumb-item",children:Object(r.jsx)(c.a,{href:"/",children:Object(r.jsx)("a",{children:"Home"})})}),Object(r.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"About us"})]})})]})})}),Object(r.jsx)("section",{className:"content-inner",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row align-items-center",children:[Object(r.jsx)("div",{className:"col-lg-6 m-b30 wow fadeInLeft","data-wow-duration":"2s","data-wow-delay":"0.2s",children:Object(r.jsx)("div",{className:"dz-media",children:Object(r.jsx)("img",{src:"images/about/img4.png",className:"move-3",alt:""})})}),Object(r.jsxs)("div",{className:"col-lg-6 m-b30 wow fadeInRight","data-wow-duration":"2s","data-wow-delay":"0.4s",children:[Object(r.jsxs)("div",{className:"section-head style-1 mb-4",children:[Object(r.jsx)("h6",{className:"sub-title bgl-primary m-b20 text-primary",children:"WHO WE ARE ?"}),Object(r.jsx)("h2",{className:"title",children:"How we help you to achieve your business goals"})]}),Object(r.jsx)("p",{children:"We established Leora Solutions LLP in the year 2014. Initially, we started with a small team and were focusing on IT consulting and Web hosting."}),Object(r.jsx)("p",{className:"m-b30",children:"As we gained experience and many talented members joined us, we could expand our services to mobile application development, ERP\u2019s, branding, and technology. However, today more than 500 companies are happy with our commitment and services."})]})]})})}),Object(r.jsxs)("section",{style:{backgroundImage:"url(images/about/mission.jpg)",backgroundSize:"cover",backgroundPosition:"center"},children:[Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{className:"row action-box style-1 align-items-center",children:Object(r.jsx)("div",{className:"col-xl-12 wow fadeIn","data-wow-duration":"2s","data-wow-delay":"0.2s",children:Object(r.jsxs)("div",{className:"section-head style-1 text-center",children:[Object(r.jsx)("h2",{className:"title",children:"MISSION & VISION"}),Object(r.jsx)("p",{"data-wow-duration":"1.4s","data-wow-delay":"1.5s",className:"wow fadeInUp m-b30",children:"Our mission is to deliver solutions that will help you solve real-life problems."}),Object(r.jsx)("p",{"data-wow-duration":"1.4s","data-wow-delay":"1.5s",className:"wow fadeInUp m-b30",children:"Our Vision is to set a unique standard in the software industry by guiding our partners to reach their goal."})]})})})]}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{})]}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{})]}),Object(r.jsx)(s.a,{})]})}},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),s=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||s()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),s=(n("PJYZ"),n("7W2i")),i=n("a1gu"),c=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),l=function(e){s(n,e);var t=u(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=l},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},v0Wy:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about-us",function(){return n("Ojfx")}])}},[["v0Wy",0,1,2,3,4,5,6,7]]]);