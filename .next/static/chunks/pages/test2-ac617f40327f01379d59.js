_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[47],{MXb5:function(t,e,n){"use strict";var o,r=n("q1tI"),c=(o=r)&&"object"===typeof o&&"default"in o?o.default:o,s=function(){return(s=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};var i="styles_scroll-to-top__2A70v";!function(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!==typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}(".styles_scroll-to-top__2A70v {\n    background-color: white;\n    right: 40px;\n    bottom: 40px;\n    position: fixed;\n    z-index: 2;\n    cursor: pointer;\n    border-radius: 7px;\n    width: 40px;\n    height: 40px;\n    transition: opacity 1s ease-in-out;\n    box-shadow: 0 9px 25px 0 rgba(132,128,177,0.28);\n    border: none;\n    outline: none;\n}\n\n.styles_scroll-to-top__2A70v:active {\n    transform: matrix(0.95, 0, 0, 0.95, 0, 0);\n}\n");t.exports=function(t){var e=t.top,n=void 0===e?20:e,o=t.className,l=void 0===o?i:o,a=t.color,p=void 0===a?"black":a,d=t.smooth,u=void 0!==d&&d,f=t.component,m=void 0===f?"":f,h=t.viewBox,v=void 0===h?"0 0 256 256":h,b=t.svgPath,x=void 0===b?"M222.138,91.475l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051s6.744,2.5,9.244,0L122,21.85  V249.6c0,3.535,2.466,6.4,6,6.4s6-2.865,6-6.4V21.85l78.881,78.676c1.25,1.25,2.992,1.875,4.629,1.875s3.326-0.625,4.576-1.875  C224.586,98.025,224.638,93.975,222.138,91.475z":b,w=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n}(t,["top","className","color","smooth","component","viewBox","svgPath"]),y=r.useState(!1),j=y[0],_=y[1];r.useEffect((function(){return document.addEventListener("scroll",O),function(){return document.removeEventListener("scroll",O)}}),[]);var O=function(){_(document.documentElement.scrollTop>n)};return c.createElement(c.Fragment,null,j&&c.createElement("button",s({className:l,onClick:function(){return function(t){void 0===t&&(t=!1),t?window.scrollTo({top:0,behavior:"smooth"}):document.documentElement.scrollTop=0}(u)}},w),m||c.createElement("svg",{fill:p,viewBox:v},c.createElement("path",{d:x}))))}},Qetd:function(t,e,n){"use strict";var o=Object.assign.bind(Object);t.exports=o,t.exports.default=t.exports},hq78:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test2",function(){return n("wjp+")}])},"wjp+":function(t,e,n){"use strict";n.r(e);var o=n("nKUr"),r=n("MXb5"),c=n.n(r);e.default=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(c.a,{smooth:!0,component:"HEllo"}),Object(o.jsx)("h1",{children:"Hello!"}),Object(o.jsx)("h2",{children:"Scroll down for the button to appear"}),Object(o.jsx)("p",{style:{marginTop:"150vh"},children:"bottom"})]})}}},[["hq78",0,1]]]);