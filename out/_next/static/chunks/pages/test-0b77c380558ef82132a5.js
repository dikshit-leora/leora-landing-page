_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[45],{FCuQ:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),o=n("q1tI"),a=n.n(o),i=n("RAs/"),c=n("hVfy"),l=n("TSYQ"),s=n.n(l);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var d=n("zLVn");n("QLaP");function p(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function f(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function m(e,t){return Object.keys(t).reduce((function(n,r){var a,i=n,c=i[p(r)],l=i[r],s=Object(d.a)(i,[p(r),r].map(f)),m=t[r],b=function(e,t,n){var r=Object(o.useRef)(void 0!==e),a=Object(o.useState)(t),i=a[0],c=a[1],l=void 0!==e,s=r.current;return r.current=l,!l&&s&&i!==t&&c(t),[l?e:i,Object(o.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];n&&n.apply(void 0,[e].concat(r)),c(e)}),[n])]}(l,c,e[m]),h=b[0],v=b[1];return u({},s,((a={})[r]=h,a[m]=v,a))}),e)}n("dI71"),n("VCL8");var b=n("vUet"),h=a.a.createContext(null),v=a.a.createContext(null);v.displayName="AccordionContext";var y=v;var g=a.a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"button":n,l=e.children,s=e.eventKey,u=e.onClick,d=Object(c.a)(e,["as","children","eventKey","onClick"]),p=function(e,t){var n=Object(o.useContext)(y),r=Object(o.useContext)(h);return function(o){r&&r(e===n?null:e,o),t&&t(o)}}(s,u);return"button"===r&&(d.type="button"),a.a.createElement(r,Object(i.a)({ref:t,onClick:p},d),l)})),j=n("7j6X"),O=n("dRu9"),x=n("wsUu");var E,w=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];e.apply(this,r),t.apply(this,r)}}),null)},N=n("z+q/"),C={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function P(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],r=C[e];return n+parseInt(Object(j.a)(t,r[0]),10)+parseInt(Object(j.a)(t,r[1]),10)}var _=((E={})[O.c]="collapse",E[O.d]="collapsing",E[O.b]="collapsing",E[O.a]="collapse show",E),S={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:P},U=a.a.forwardRef((function(e,t){var n=e.onEnter,r=e.onEntering,l=e.onEntered,u=e.onExit,d=e.onExiting,p=e.className,f=e.children,m=e.dimension,b=void 0===m?"height":m,h=e.getDimensionValue,v=void 0===h?P:h,y=Object(c.a)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),g="function"===typeof b?b():b,j=Object(o.useMemo)((function(){return w((function(e){e.style[g]="0"}),n)}),[g,n]),E=Object(o.useMemo)((function(){return w((function(e){var t="scroll"+g[0].toUpperCase()+g.slice(1);e.style[g]=e[t]+"px"}),r)}),[g,r]),C=Object(o.useMemo)((function(){return w((function(e){e.style[g]=null}),l)}),[g,l]),S=Object(o.useMemo)((function(){return w((function(e){e.style[g]=v(g,e)+"px",Object(N.a)(e)}),u)}),[u,v,g]),U=Object(o.useMemo)((function(){return w((function(e){e.style[g]=null}),d)}),[g,d]);return a.a.createElement(O.e,Object(i.a)({ref:t,addEndListener:x.a},y,{"aria-expanded":y.role?y.in:null,onEnter:j,onEntering:E,onEntered:C,onExit:S,onExiting:U}),(function(e,t){return a.a.cloneElement(f,Object(i.a)({},t,{className:s()(p,f.props.className,_[e],"width"===g&&"width")}))}))}));U.defaultProps=S;var A=U,F=a.a.forwardRef((function(e,t){var n=e.children,r=e.eventKey,l=Object(c.a)(e,["children","eventKey"]),s=Object(o.useContext)(y);return a.a.createElement(h.Provider,{value:null},a.a.createElement(A,Object(i.a)({ref:t,in:s===r},l),a.a.createElement("div",null,a.a.Children.only(n))))}));F.displayName="AccordionCollapse";var k=F,W=a.a.forwardRef((function(e,t){var n=m(e,{activeKey:"onSelect"}),r=n.as,o=void 0===r?"div":r,l=n.activeKey,u=n.bsPrefix,d=n.children,p=n.className,f=n.onSelect,v=Object(c.a)(n,["as","activeKey","bsPrefix","children","className","onSelect"]),g=s()(p,Object(b.a)(u,"accordion"));return a.a.createElement(y.Provider,{value:l||null},a.a.createElement(h.Provider,{value:f||null},a.a.createElement(o,Object(i.a)({ref:t},v,{className:g}),d)))}));W.displayName="Accordion",W.Toggle=g,W.Collapse=k;var D=W,R=n("YdCC"),T=n("U1MP"),I=a.a.createContext(null);I.displayName="CardContext";var M=I,K=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.variant,l=e.as,u=void 0===l?"img":l,d=Object(c.a)(e,["bsPrefix","className","variant","as"]),p=Object(b.a)(n,"card-img");return a.a.createElement(u,Object(i.a)({ref:t,className:s()(o?p+"-"+o:p,r)},d))}));K.displayName="CardImg",K.defaultProps={variant:null};var q=K,L=Object(T.a)("h5"),B=Object(T.a)("h6"),V=Object(R.a)("card-body"),Q=Object(R.a)("card-title",{Component:L}),H=Object(R.a)("card-subtitle",{Component:B}),z=Object(R.a)("card-link",{Component:"a"}),X=Object(R.a)("card-text",{Component:"p"}),J=Object(R.a)("card-header"),Y=Object(R.a)("card-footer"),G=Object(R.a)("card-img-overlay"),Z=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,l=e.bg,u=e.text,d=e.border,p=e.body,f=e.children,m=e.as,h=void 0===m?"div":m,v=Object(c.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=Object(b.a)(n,"card"),g=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:y+"-header"}}),[y]);return a.a.createElement(M.Provider,{value:g},a.a.createElement(h,Object(i.a)({ref:t},v,{className:s()(r,y,l&&"bg-"+l,u&&"text-"+u,d&&"border-"+d)}),p?a.a.createElement(V,null,f):f))}));Z.displayName="Card",Z.defaultProps={body:!1},Z.Img=q,Z.Title=Q,Z.Subtitle=H,Z.Body=V,Z.Link=z,Z.Text=X,Z.Header=J,Z.Footer=Y,Z.ImgOverlay=G;var $=Z;t.default=function(){var e=Object(o.useState)(0),t=e[0],n=e[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(D,{className:"dlab-accordion",id:"accordionFaq",defaultActiveKey:"0",children:[{title:"Accordion Header One",text:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",bg:"primary"},{title:"Accordion Header Two",text:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",bg:"info"},{title:"Accordion Header Three",text:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",bg:"success"}].map((function(e,o){return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsxs)(D.Toggle,{as:$.Text,eventKey:"".concat(o),className:"card-header",onClick:function(){return n(t===o?-1:o)},children:[Object(r.jsx)("h5",{className:"dlab-title",children:Object(r.jsxs)("a",{className:"".concat(t===o?"":"collapsed"),onClick:function(){return n(t===o?-1:o)},children:[" ",e.title]})}),Object(r.jsx)("span",{className:"accordion__header--indicator"})]}),Object(r.jsx)(D.Collapse,{eventKey:"".concat(o),children:Object(r.jsx)("div",{className:"card-body",children:Object(r.jsx)("p",{className:"m-b0",children:e.text})})})]},o)}))})})}},QLaP:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o,a,i,c){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,o,a,i,c],u=0;(l=new Error(t.replace(/%s/g,(function(){return s[u++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},VCL8:function(e,t,n){"use strict";function r(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function o(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function a(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}function i(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof t.getSnapshotBeforeUpdate)return e;var n=null,i=null,c=null;if("function"===typeof t.componentWillMount?n="componentWillMount":"function"===typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"===typeof t.componentWillReceiveProps?i="componentWillReceiveProps":"function"===typeof t.UNSAFE_componentWillReceiveProps&&(i="UNSAFE_componentWillReceiveProps"),"function"===typeof t.componentWillUpdate?c="componentWillUpdate":"function"===typeof t.UNSAFE_componentWillUpdate&&(c="UNSAFE_componentWillUpdate"),null!==n||null!==i||null!==c){var l=e.displayName||e.name,s="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+l+" uses "+s+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==i?"\n  "+i:"")+(null!==c?"\n  "+c:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(t.componentWillMount=r,t.componentWillReceiveProps=o),"function"===typeof t.getSnapshotBeforeUpdate){if("function"!==typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=a;var u=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var r=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;u.call(this,e,t,r)}}return e}n.r(t),n.d(t,"polyfill",(function(){return i})),r.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,a.__suppressDeprecationWarning=!0},"zl3/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test",function(){return n("FCuQ")}])}},[["zl3/",0,1,10]]]);