_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(i.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,i=e.hasQuery,o=void 0!==i&&i;return n||a&&o}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=r?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(r=n("Xuae"))&&r.__esModule?r:{default:r},o=n("lwAK"),s=n("FYa8"),c=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var i=!0,o=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){o=!0;var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?i=!1:e.add(s)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(var c=0,l=f.length;c<l;c++){var u=f[c];if(a.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?i=!1:n.add(u);else{var d=a.props[u],p=r[u]||new Set;"name"===u&&o||!p.has(d)?(p.add(d),r[u]=p):i=!1}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,a.useContext)(o.AmpStateContext),r=(0,a.useContext)(s.HeadManagerContext);return a.default.createElement(i.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},"96OD":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/construction-industry",function(){return n("iw8w")}])},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),i=n("ZhPi"),o=n("Bnag");e.exports=function(e){return r(e)||a(e)||i(e)||o()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),i=n("W8MJ"),o=(n("PJYZ"),n("7W2i")),s=n("a1gu"),c=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),d=function(e){o(n,e);var t=l(n);function n(e){var i;return a(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},g4pe:function(e,t,n){e.exports=n("8Kt/")},iw8w:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("YFqc"),i=n.n(a),o=n("q1tI"),s=n("60Bi"),c=n.n(s);var l=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("section",{className:"content-inner bg-gray",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-lg-6 m-b30 d-flex justify-content-center align-items-center",children:Object(r.jsx)("div",{className:"dz-media",children:Object(r.jsx)("img",{src:"https://leora-solutions.s3.ap-south-1.amazonaws.com/landing/industries/construction.gif",className:"move-2",alt:""})})}),Object(r.jsxs)("div",{className:"col-lg-6",children:[Object(r.jsxs)("div",{className:"section-head style-3 mb-4",children:[Object(r.jsx)("h2",{className:"title",children:"RESTRUCTURE ESTABLISHMENT WITH US"}),Object(r.jsx)("div",{className:"dlab-separator style-2 bg-primary"})]}),Object(r.jsx)("p",{children:"Construction companies work in a busy schedule to prove themselves in the competitive and challenging market environment. Even in this scenario, if construction companies rely on excel sheets or follow the traditional process it will become hard to cope up with other companies. By substituting the traditional method with ERP software, Companies can get rid of labour-intensive processes, control expenditures for raw materials and employees, reduce IT costs. Leora\u2019s ERP for construction is a full-fledged solution that acts as a Construction Project Lifecycle Management (CPLM) and Construction Project Execution Management (CPEM). Our products vary from other ERP\u2019s by keeping the construction site close to the ERP solution by recording all happenings of a site at the same instant of time. Minimize implementation time and user-friendly, Advanced workflows, notifications, quick data synchronization algorithms with APP\u2019s, Dashboards."})]})]})})})})},u=n("Zv97"),d=n("ct29"),f=n("g4pe"),p=n.n(f);t.default=function(){var e=Object(o.useState)(!1),t=e[0],n=e[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(p.a,{children:Object(r.jsx)("title",{children:"Leora - Construction"})}),Object(r.jsx)(d.a,{}),Object(r.jsxs)("div",{className:"page-content bg-white",children:[Object(r.jsx)("div",{className:"dlab-bnr-inr style-1 overlay-primary-dark",style:{backgroundImage:"url(images/banner/bnr1.jpg), var(--gradient-sec)",backgroundSize:"cover, 200%"},children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"dlab-bnr-inr-entry",children:[Object(r.jsx)("h1",{children:"Construction"}),Object(r.jsx)("nav",{"aria-label":"breadcrumb",className:"breadcrumb-row style-1",children:Object(r.jsxs)("ul",{className:"breadcrumb",children:[Object(r.jsx)("li",{className:"breadcrumb-item",children:Object(r.jsx)(i.a,{href:"/",children:Object(r.jsx)("a",{children:"Home"})})}),Object(r.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Construction"})]})})]})})}),Object(r.jsx)(l,{}),Object(r.jsx)("section",{className:"video-wraper-1",children:Object(r.jsx)("div",{className:"content-inner bg-gray",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row align-items-center",children:[Object(r.jsxs)("div",{className:"col-lg-6 wow fadeInLeft","data-wow-duration":"2s","data-wow-delay":"0.2s",children:[Object(r.jsxs)("div",{className:"section-head style-3 mb-4",children:[Object(r.jsx)("h2",{className:"title",children:"WHAT WE OFFER"}),Object(r.jsx)("div",{className:"dlab-separator style-2 bg-primary"})]}),Object(r.jsx)("p",{children:"Our software will give you the best and accurate result at every instant of time."}),Object(r.jsxs)("ul",{className:"list-check style-1 primary m-b30",children:[Object(r.jsx)("li",{children:"LABOUR AND CONSTRUCTION MANAGEMENT."}),Object(r.jsx)("li",{children:"MATERIAL MANAGEMEMENT"}),Object(r.jsx)("li",{children:"PROTECT DAILY PLAN, DAILY REVIEW & DAILY DEVIATION."})]})]}),Object(r.jsxs)("div",{className:"col-lg-6 wow fadeInRight","data-wow-duration":"2s","data-wow-delay":"0.4s",children:[Object(r.jsxs)("div",{className:"video-bx style-2",children:[Object(r.jsx)("img",{src:"images/video/pic2.jpg",alt:""}),Object(r.jsx)("div",{className:"video-btn"}),Object(r.jsx)("a",{href:"#",className:"popup-youtube",onClick:function(){return n(!0)},children:Object(r.jsx)("i",{className:"flaticon-play"})})]}),Object(r.jsx)(c.a,{channel:"custom",url:"https://leora-solutions.s3.ap-south-1.amazonaws.com/landing/videos/intro.mp4",autoplay:!0,isOpen:t,videoId:"FzcfZyEhOoI",onClose:function(){return n(!1)}})]})]})})})}),Object(r.jsx)("br",{}),Object(r.jsx)("h4",{className:"text-center",children:"\u201cLEVERAGE YOUR STYLE\u201d"}),Object(r.jsx)("br",{})]}),Object(r.jsx)(u.a,{})]})}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a}},[["96OD",0,1,2,3,4]]]);