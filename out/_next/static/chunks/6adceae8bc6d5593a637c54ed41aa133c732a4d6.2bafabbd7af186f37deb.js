(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"2mql":function(e,t,a){"use strict";var s=a("TOwV"),c={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},n={};function o(e){return s.isMemo(e)?i:n[e.$$typeof]||c}n[s.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},n[s.Memo]=i;var l=Object.defineProperty,d=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,j=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,a,s){if("string"!==typeof a){if(h){var c=j(a);c&&c!==h&&e(t,c,s)}var i=d(a);p&&(i=i.concat(p(a)));for(var n=o(t),b=o(a),f=0;f<i.length;++f){var u=i[f];if(!r[u]&&(!s||!s[u])&&(!b||!b[u])&&(!n||!n[u])){var x=m(a,u);try{l(t,u,x)}catch(O){}}}}return t}},"5lBx":function(e,t,a){"use strict";var s=a("nKUr"),c=a("q1tI"),r=a.n(c),i=a("17x9"),n=a.n(i);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e){var t,a;function s(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(l(t)),t.handleErrored=t.handleErrored.bind(l(t)),t.handleChange=t.handleChange.bind(l(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(l(t)),t}a=e,(t=s).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var c=s.prototype;return c.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},c.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},c.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},c.executeAsync=function(){var e=this;return new Promise((function(t,a){e.executionResolve=t,e.executionReject=a,e.execute()}))},c.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},c.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},c.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},c.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},c.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},c.componentDidMount=function(){this.explicitRender()},c.componentDidUpdate=function(){this.explicitRender()},c.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},c.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout((function(){document.body.removeChild(e)}),5e3)},c.handleRecaptchaRef=function(e){this.captcha=e},c.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,function(e,t){if(null==e)return{};var a,s,c={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]));return r.a.createElement("div",o({},t,{ref:this.handleRecaptchaRef}))},s}(r.a.Component);d.displayName="ReCAPTCHA",d.propTypes={sitekey:n.a.string.isRequired,onChange:n.a.func,grecaptcha:n.a.object,theme:n.a.oneOf(["dark","light"]),type:n.a.oneOf(["image","audio"]),tabindex:n.a.number,onExpired:n.a.func,onErrored:n.a.func,size:n.a.oneOf(["compact","normal","invisible"]),stoken:n.a.string,hl:n.a.string,badge:n.a.oneOf(["bottomright","bottomleft","inline"])},d.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var p=a("2mql"),m=a.n(p);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}var h={},b=0;var f="onloadcallback";var u,x,O=(u=function(){return"https://"+(("undefined"!==typeof window&&window.recaptchaOptions||{}).useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload="+f+"&render=explicit"},x=(x={callbackName:f,globalName:"grecaptcha"})||{},function(e){var t=e.displayName||e.name||"Component",a=function(t){var a,s;function r(e,a){var s;return(s=t.call(this,e,a)||this).state={},s.__scriptURL="",s}s=t,(a=r).prototype=Object.create(s.prototype),a.prototype.constructor=a,a.__proto__=s;var i=r.prototype;return i.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+b++),this.__scriptLoaderID},i.setupScriptURL=function(){return this.__scriptURL="function"===typeof u?u():u,this.__scriptURL},i.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},i.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=h[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[x.callbackName]},i.componentDidMount=function(){var e=this,t=this.setupScriptURL(),a=this.asyncScriptLoaderGetScriptLoaderID(),s=x,c=s.globalName,r=s.callbackName,i=s.scriptId;if(c&&"undefined"!==typeof window[c]&&(h[t]={loaded:!0,observers:{}}),h[t]){var n=h[t];return n&&(n.loaded||n.errored)?void this.asyncScriptLoaderHandleLoad(n):void(n.observers[a]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var o={};o[a]=function(t){return e.asyncScriptLoaderHandleLoad(t)},h[t]={loaded:!1,observers:o};var l=document.createElement("script");for(var d in l.src=t,l.async=!0,x.attributes)l.setAttribute(d,x.attributes[d]);i&&(l.id=i);var p=function(e){if(h[t]){var a=h[t].observers;for(var s in a)e(a[s])&&delete a[s]}};r&&"undefined"!==typeof window&&(window[r]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),l.onload=function(){var e=h[t];e&&(e.loaded=!0,p((function(t){return!r&&(t(e),!0)})))},l.onerror=function(){var e=h[t];e&&(e.errored=!0,p((function(t){return t(e),!0})))},document.body.appendChild(l)},i.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===x.removeOnUnmount)for(var t=document.getElementsByTagName("script"),a=0;a<t.length;a+=1)t[a].src.indexOf(e)>-1&&t[a].parentNode&&t[a].parentNode.removeChild(t[a]);var s=h[e];s&&(delete s.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===x.removeOnUnmount&&delete h[e])},i.render=function(){var t=x.globalName,a=this.props,s=(a.asyncScriptOnLoad,a.forwardedRef),r=function(e,t){if(null==e)return{};var a,s,c={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(c[a]=e[a]);return c}(a,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!==typeof window&&(r[t]="undefined"!==typeof window[t]?window[t]:void 0),r.ref=s,Object(c.createElement)(e,r)},r}(c.Component),s=Object(c.forwardRef)((function(e,t){return Object(c.createElement)(a,j({},e,{forwardedRef:t}))}));return s.displayName="AsyncScriptLoader("+t+")",s.propTypes={asyncScriptOnLoad:n.a.func},m()(s,e)})(d);function g(e){console.log("Captcha value:",e)}t.a=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("section",{className:"content-inner",style:{backgroundImage:"url(images/background/bg1.png)"},children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"row align-items-center",children:[Object(s.jsxs)("div",{className:"col-xl-6 col-lg-7 m-b30 wow fadeInLeft","data-wow-duration":"2s","data-wow-delay":"0.2s",children:[Object(s.jsxs)("div",{className:"section-head style-1",children:[Object(s.jsx)("h6",{className:"sub-title bgl-primary m-b20 text-primary",children:"Contact Us"}),Object(s.jsx)("h2",{className:"title",children:"We Love To Help Great Companies To Enlarge Their Revenues."})]}),Object(s.jsxs)("form",{className:"dlab-form dzForm",method:"POST",action:"script/contact.php",children:[Object(s.jsx)("div",{className:"dzFormMsg"}),Object(s.jsx)("input",{type:"hidden",className:"form-control",name:"dzToDo",value:"Contact"}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-sm-6",children:Object(s.jsxs)("div",{className:"input-group",children:[Object(s.jsx)("div",{className:"input-group-prepend",children:Object(s.jsx)("span",{className:"input-group-text",children:Object(s.jsx)("i",{className:"la la-user"})})}),Object(s.jsx)("input",{name:"dzName",type:"text",required:!0,className:"form-control",placeholder:"First Name"})]})}),Object(s.jsx)("div",{className:"col-sm-6",children:Object(s.jsxs)("div",{className:"input-group",children:[Object(s.jsx)("div",{className:"input-group-prepend",children:Object(s.jsx)("span",{className:"input-group-text",children:Object(s.jsx)("i",{className:"la la-user"})})}),Object(s.jsx)("input",{name:"dzOther[last_name]",type:"text",className:"form-control",required:!0,placeholder:"Last Name"})]})}),Object(s.jsx)("div",{className:"col-sm-6",children:Object(s.jsxs)("div",{className:"input-group",children:[Object(s.jsx)("div",{className:"input-group-prepend",children:Object(s.jsx)("span",{className:"input-group-text",children:Object(s.jsx)("i",{className:"la la-envelope"})})}),Object(s.jsx)("input",{name:"dzEmail",type:"text",required:!0,className:"form-control",placeholder:"Email Address"})]})}),Object(s.jsx)("div",{className:"col-sm-6",children:Object(s.jsxs)("div",{className:"input-group",children:[Object(s.jsx)("div",{className:"input-group-prepend",children:Object(s.jsx)("span",{className:"input-group-text",children:Object(s.jsx)("i",{className:"la la-phone"})})}),Object(s.jsx)("input",{name:"dzOther[phone]",type:"text",required:!0,className:"form-control",placeholder:"Phone No."})]})}),Object(s.jsx)("div",{className:"col-sm-6",children:Object(s.jsxs)("div",{className:"input-group",children:[Object(s.jsx)("div",{className:"input-group-prepend",children:Object(s.jsx)("span",{className:"input-group-text",children:Object(s.jsx)("i",{className:"la la-list"})})}),Object(s.jsxs)("select",{name:"dzOther[choose_service]",className:"form-control",required:!0,children:[Object(s.jsx)("option",{selected:!0,children:"Choose Service"}),Object(s.jsx)("option",{value:"1",children:"Web App Development"}),Object(s.jsx)("option",{value:"2",children:"Mobile App Development"}),Object(s.jsx)("option",{value:"3",children:"IT Consulting"}),Object(s.jsx)("option",{value:"3",children:"Custom ERP Development"}),Object(s.jsx)("option",{value:"3",children:"UI / UX"}),Object(s.jsx)("option",{value:"3",children:"Graphic Designing"}),Object(s.jsx)("option",{value:"3",children:"Digital Marketing And Branding"})]})]})}),Object(s.jsx)("div",{className:"col-sm-12",children:Object(s.jsxs)("div",{className:"input-group",children:[Object(s.jsx)("div",{className:"input-group-prepend",children:Object(s.jsx)("span",{className:"input-group-text",children:Object(s.jsx)("i",{className:"la la-sms"})})}),Object(s.jsx)("textarea",{name:"dzMessage",required:!0,className:"form-control",placeholder:"Message"})]})}),Object(s.jsx)("div",{className:"col-sm-12",children:Object(s.jsxs)("div",{className:"input-group",children:[Object(s.jsx)("div",{className:"g-recaptcha","data-sitekey":"6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN","data-callback":"verifyRecaptchaCallback","data-expired-callback":"expiredRecaptchaCallback"}),Object(s.jsx)("input",{className:"form-control d-none",style:{display:"none"},"data-recaptcha":"true",required:!0,"data-error":"Please complete the Captcha"})]})}),Object(s.jsx)(O,{sitekey:"6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN",onChange:g}),Object(s.jsx)("div",{className:"col-sm-12 mt-2",children:Object(s.jsxs)("button",{name:"submit",type:"submit",value:"Submit",className:"btn btn-link d-inline-flex align-items-center",children:[Object(s.jsx)("i",{className:"fa fa-angle-right m-r10"}),"Submit Now"]})})]})]})]}),Object(s.jsx)("div",{className:"col-xl-6 col-lg-5 m-b30 wow fadeInRight","data-wow-duration":"2s","data-wow-delay":"0.4s",children:Object(s.jsx)("div",{className:"dlab-media cf-r-img",children:Object(s.jsx)("img",{src:"images/about/img2.png",className:"move-1",alt:""})})})]})})})})}},"9fJq":function(e,t,a){"use strict";var s=a("nKUr"),c=a("rePB"),r=a("OS56"),i=a.n(r);function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.a=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(i.a,o(o({},{dots:!0,infinite:!0,slidesToShow:3,slidesToScroll:3,autoplay:!1,arrows:!1,speed:5e3,responsive:[{breakpoint:1e3,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0,dots:!0}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!1}}]}),{},{className:"team-carousel1 owl owl-carousel owl-none owl-theme owl-dots-primary-full",children:[Object(s.jsx)("div",{className:"item wow fadeInUp","data-wow-duration":"2s","data-wow-delay":"0.1s",children:Object(s.jsxs)("div",{className:"dlab-team style-1 m-b10",children:[Object(s.jsx)("div",{className:"dlab-media",children:Object(s.jsx)("img",{src:"images/team/pic1.jpg",alt:""})}),Object(s.jsxs)("div",{className:"dlab-content",children:[Object(s.jsxs)("div",{className:"clearfix",children:[Object(s.jsx)("h4",{className:"dlab-name",children:Object(s.jsx)("a",{href:"/team-1",children:"Alina Jia"})}),Object(s.jsx)("span",{className:"dlab-position",children:"Senior Designer"})]}),Object(s.jsxs)("ul",{className:"dlab-social-icon primary-light",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://en-gb.facebook.com/",className:"fa fa-facebook"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://www.instagram.com/",className:"fa fa-instagram"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://twitter.com/login?lang=en",className:"fa fa-twitter"})})]})]})]})}),Object(s.jsx)("div",{className:"item wow fadeInUp","data-wow-duration":"2s","data-wow-delay":"0.2s",children:Object(s.jsxs)("div",{className:"dlab-team style-1 m-b10",children:[Object(s.jsx)("div",{className:"dlab-media",children:Object(s.jsx)("img",{src:"images/team/pic2.jpg",alt:""})}),Object(s.jsxs)("div",{className:"dlab-content",children:[Object(s.jsxs)("div",{className:"clearfix",children:[Object(s.jsx)("h4",{className:"dlab-name",children:Object(s.jsx)("a",{href:"/team-1",children:"Suresh Doe"})}),Object(s.jsx)("span",{className:"dlab-position",children:"Senior Designer"})]}),Object(s.jsxs)("ul",{className:"dlab-social-icon primary-light",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://en-gb.facebook.com/",className:"fa fa-facebook"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://www.instagram.com/",className:"fa fa-instagram"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://twitter.com/login?lang=en",className:"fa fa-twitter"})})]})]})]})}),Object(s.jsx)("div",{className:"item wow fadeInUp","data-wow-duration":"2s","data-wow-delay":"0.3s",children:Object(s.jsxs)("div",{className:"dlab-team style-1 m-b10",children:[Object(s.jsx)("div",{className:"dlab-media",children:Object(s.jsx)("img",{src:"images/team/pic3.jpg",alt:""})}),Object(s.jsxs)("div",{className:"dlab-content",children:[Object(s.jsxs)("div",{className:"clearfix",children:[Object(s.jsx)("h4",{className:"dlab-name",children:Object(s.jsx)("a",{href:"/team-1",children:"Domina Li"})}),Object(s.jsx)("span",{className:"dlab-position",children:"Senior Designer"})]}),Object(s.jsxs)("ul",{className:"dlab-social-icon primary-light",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://en-gb.facebook.com/",className:"fa fa-facebook"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://www.instagram.com/",className:"fa fa-instagram"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://twitter.com/login?lang=en",className:"fa fa-twitter"})})]})]})]})}),Object(s.jsx)("div",{className:"item wow fadeInUp","data-wow-duration":"2s","data-wow-delay":"0.4s",children:Object(s.jsxs)("div",{className:"dlab-team style-1 m-b10",children:[Object(s.jsx)("div",{className:"dlab-media",children:Object(s.jsx)("img",{src:"images/team/pic1.jpg",alt:""})}),Object(s.jsxs)("div",{className:"dlab-content",children:[Object(s.jsxs)("div",{className:"clearfix",children:[Object(s.jsx)("h4",{className:"dlab-name",children:Object(s.jsx)("a",{href:"/team-1",children:"Alina Jia"})}),Object(s.jsx)("span",{className:"dlab-position",children:"Senior Designer"})]}),Object(s.jsxs)("ul",{className:"dlab-social-icon primary-light",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://en-gb.facebook.com/",className:"fa fa-facebook"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://www.instagram.com/",className:"fa fa-instagram"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://twitter.com/login?lang=en",className:"fa fa-twitter"})})]})]})]})}),Object(s.jsx)("div",{className:"item wow fadeInUp","data-wow-duration":"2s","data-wow-delay":"0.5s",children:Object(s.jsxs)("div",{className:"dlab-team style-1 m-b10",children:[Object(s.jsx)("div",{className:"dlab-media",children:Object(s.jsx)("img",{src:"images/team/pic2.jpg",alt:""})}),Object(s.jsxs)("div",{className:"dlab-content",children:[Object(s.jsxs)("div",{className:"clearfix",children:[Object(s.jsx)("h4",{className:"dlab-name",children:Object(s.jsx)("a",{href:"/team-1",children:"Suresh Doe"})}),Object(s.jsx)("span",{className:"dlab-position",children:"Senior Designer"})]}),Object(s.jsxs)("ul",{className:"dlab-social-icon primary-light",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://en-gb.facebook.com/",className:"fa fa-facebook"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://www.instagram.com/",className:"fa fa-instagram"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://twitter.com/login?lang=en",className:"fa fa-twitter"})})]})]})]})}),Object(s.jsx)("div",{className:"item wow fadeInUp","data-wow-duration":"2s","data-wow-delay":"0.6s",children:Object(s.jsxs)("div",{className:"dlab-team style-1 m-b10",children:[Object(s.jsx)("div",{className:"dlab-media",children:Object(s.jsx)("img",{src:"images/team/pic3.jpg",alt:""})}),Object(s.jsxs)("div",{className:"dlab-content",children:[Object(s.jsxs)("div",{className:"clearfix",children:[Object(s.jsx)("h4",{className:"dlab-name",children:Object(s.jsx)("a",{href:"/team-1",children:"Domina Li"})}),Object(s.jsx)("span",{className:"dlab-position",children:"Senior Designer"})]}),Object(s.jsxs)("ul",{className:"dlab-social-icon primary-light",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://en-gb.facebook.com/",className:"fa fa-facebook"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://www.instagram.com/",className:"fa fa-instagram"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://twitter.com/login?lang=en",className:"fa fa-twitter"})})]})]})]})}),Object(s.jsx)("div",{className:"item wow fadeInUp","data-wow-duration":"2s","data-wow-delay":"0.7s",children:Object(s.jsxs)("div",{className:"dlab-team style-1 m-b10",children:[Object(s.jsx)("div",{className:"dlab-media",children:Object(s.jsx)("img",{src:"images/team/pic1.jpg",alt:""})}),Object(s.jsxs)("div",{className:"dlab-content",children:[Object(s.jsxs)("div",{className:"clearfix",children:[Object(s.jsx)("h4",{className:"dlab-name",children:Object(s.jsx)("a",{href:"/team-1",children:"Alina Jia"})}),Object(s.jsx)("span",{className:"dlab-position",children:"Senior Designer"})]}),Object(s.jsxs)("ul",{className:"dlab-social-icon primary-light",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://en-gb.facebook.com/",className:"fa fa-facebook"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://www.instagram.com/",className:"fa fa-instagram"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://twitter.com/login?lang=en",className:"fa fa-twitter"})})]})]})]})}),Object(s.jsx)("div",{className:"item wow fadeInUp","data-wow-duration":"2s","data-wow-delay":"0.8s",children:Object(s.jsxs)("div",{className:"dlab-team style-1 m-b10",children:[Object(s.jsx)("div",{className:"dlab-media",children:Object(s.jsx)("img",{src:"images/team/pic2.jpg",alt:""})}),Object(s.jsxs)("div",{className:"dlab-content",children:[Object(s.jsxs)("div",{className:"clearfix",children:[Object(s.jsx)("h4",{className:"dlab-name",children:Object(s.jsx)("a",{href:"/team-1",children:"Suresh Doe"})}),Object(s.jsx)("span",{className:"dlab-position",children:"Senior Designer"})]}),Object(s.jsxs)("ul",{className:"dlab-social-icon primary-light",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://en-gb.facebook.com/",className:"fa fa-facebook"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://www.instagram.com/",className:"fa fa-instagram"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://twitter.com/login?lang=en",className:"fa fa-twitter"})})]})]})]})}),Object(s.jsx)("div",{className:"item wow fadeInUp","data-wow-duration":"2s","data-wow-delay":"0.9s",children:Object(s.jsxs)("div",{className:"dlab-team style-1 m-b10",children:[Object(s.jsx)("div",{className:"dlab-media",children:Object(s.jsx)("img",{src:"images/team/pic3.jpg",alt:""})}),Object(s.jsxs)("div",{className:"dlab-content",children:[Object(s.jsxs)("div",{className:"clearfix",children:[Object(s.jsx)("h4",{className:"dlab-name",children:Object(s.jsx)("a",{href:"/team-1",children:"Domina Li"})}),Object(s.jsx)("span",{className:"dlab-position",children:"Senior Designer"})]}),Object(s.jsxs)("ul",{className:"dlab-social-icon primary-light",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://en-gb.facebook.com/",className:"fa fa-facebook"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://www.instagram.com/",className:"fa fa-instagram"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://twitter.com/login?lang=en",className:"fa fa-twitter"})})]})]})]})})]}))})}},TOwV:function(e,t,a){"use strict";e.exports=a("qT12")},qT12:function(e,t,a){"use strict";var s="function"===typeof Symbol&&Symbol.for,c=s?Symbol.for("react.element"):60103,r=s?Symbol.for("react.portal"):60106,i=s?Symbol.for("react.fragment"):60107,n=s?Symbol.for("react.strict_mode"):60108,o=s?Symbol.for("react.profiler"):60114,l=s?Symbol.for("react.provider"):60109,d=s?Symbol.for("react.context"):60110,p=s?Symbol.for("react.async_mode"):60111,m=s?Symbol.for("react.concurrent_mode"):60111,j=s?Symbol.for("react.forward_ref"):60112,h=s?Symbol.for("react.suspense"):60113,b=s?Symbol.for("react.suspense_list"):60120,f=s?Symbol.for("react.memo"):60115,u=s?Symbol.for("react.lazy"):60116,x=s?Symbol.for("react.block"):60121,O=s?Symbol.for("react.fundamental"):60117,g=s?Symbol.for("react.responder"):60118,v=s?Symbol.for("react.scope"):60119;function y(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case c:switch(e=e.type){case p:case m:case i:case o:case n:case h:return e;default:switch(e=e&&e.$$typeof){case d:case j:case u:case f:case l:return e;default:return t}}case r:return t}}}function w(e){return y(e)===m}t.AsyncMode=p,t.ConcurrentMode=m,t.ContextConsumer=d,t.ContextProvider=l,t.Element=c,t.ForwardRef=j,t.Fragment=i,t.Lazy=u,t.Memo=f,t.Portal=r,t.Profiler=o,t.StrictMode=n,t.Suspense=h,t.isAsyncMode=function(e){return w(e)||y(e)===p},t.isConcurrentMode=w,t.isContextConsumer=function(e){return y(e)===d},t.isContextProvider=function(e){return y(e)===l},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===c},t.isForwardRef=function(e){return y(e)===j},t.isFragment=function(e){return y(e)===i},t.isLazy=function(e){return y(e)===u},t.isMemo=function(e){return y(e)===f},t.isPortal=function(e){return y(e)===r},t.isProfiler=function(e){return y(e)===o},t.isStrictMode=function(e){return y(e)===n},t.isSuspense=function(e){return y(e)===h},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===m||e===o||e===n||e===h||e===b||"object"===typeof e&&null!==e&&(e.$$typeof===u||e.$$typeof===f||e.$$typeof===l||e.$$typeof===d||e.$$typeof===j||e.$$typeof===O||e.$$typeof===g||e.$$typeof===v||e.$$typeof===x)},t.typeOf=y}}]);