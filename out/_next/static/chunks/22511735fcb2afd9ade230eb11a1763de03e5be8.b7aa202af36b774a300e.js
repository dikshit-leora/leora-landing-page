(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{EQ3N:function(e,s,c){"use strict";var t=c("nKUr"),a=c("rePB"),i=c("q1tI");function l(e,s){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),c.push.apply(c,t)}return c}function n(e){for(var s=1;s<arguments.length;s++){var c=null!=arguments[s]?arguments[s]:{};s%2?l(Object(c),!0).forEach((function(s){Object(a.a)(e,s,c[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):l(Object(c)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(c,s))}))}return e}s.a=function(){var e=Object(i.useState)({firstName:"",lastName:"",email:"",phone:"",service:"",message:""}),s=e[0],c=e[1],l=function(e){var s=e.target,t=s.name,i=s.value;c((function(e){return n(n({},e),{},Object(a.a)({},t,i))}))};return Object(t.jsx)(t.Fragment,{children:Object(t.jsx)("section",{className:"content-inner",style:{backgroundImage:"url(images/background/bg1.png)"},children:Object(t.jsx)("div",{className:"container",children:Object(t.jsxs)("div",{className:"row align-items-center",children:[Object(t.jsxs)("div",{className:"col-xl-6 col-lg-7 m-b30 wow fadeInLeft","data-wow-duration":"2s","data-wow-delay":"0.2s",children:[Object(t.jsxs)("div",{className:"section-head style-1",children:[Object(t.jsx)("h6",{className:"sub-title bgl-primary m-b20 text-primary",children:"Contact Us"}),Object(t.jsx)("h2",{className:"title",children:"We Love To Help Great Companies To Enlarge Their Revenues."})]}),Object(t.jsxs)("form",{className:"dlab-form dzForm",onSubmit:function(e){e.preventDefault(),document.location.href="mailto:sales@leora.ae?subject="+encodeURIComponent(s.email?"Email from ".concat(s.email):"")+"&body="+encodeURIComponent("\n        Name: ".concat(s.firstName||""," ").concat(s.lastName||"",",\n\n        Email: ").concat(s.email||"",",\n\n        Phone Number: ").concat(s.phone||"",",\n\n        service: ").concat(s.service||"",",\n\n        message: ").concat(s.message||"","\n\n        "))},children:[Object(t.jsx)("div",{className:"dzFormMsg"}),Object(t.jsx)("input",{type:"hidden",className:"form-control",name:"dzToDo",value:"Contact"}),Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)("div",{className:"col-sm-6",children:Object(t.jsxs)("div",{className:"input-group",children:[Object(t.jsx)("div",{className:"input-group-prepend",children:Object(t.jsx)("span",{className:"input-group-text",children:Object(t.jsx)("i",{className:"la la-user"})})}),Object(t.jsx)("input",{name:"firstName",type:"text",required:!0,value:s.firstName,onChange:l,className:"form-control",placeholder:"First Name"})]})}),Object(t.jsx)("div",{className:"col-sm-6",children:Object(t.jsxs)("div",{className:"input-group",children:[Object(t.jsx)("div",{className:"input-group-prepend",children:Object(t.jsx)("span",{className:"input-group-text",children:Object(t.jsx)("i",{className:"la la-user"})})}),Object(t.jsx)("input",{name:"lastName",value:s.lastName,onChange:l,type:"text",className:"form-control",required:!0,placeholder:"Last Name"})]})}),Object(t.jsx)("div",{className:"col-sm-6",children:Object(t.jsxs)("div",{className:"input-group",children:[Object(t.jsx)("div",{className:"input-group-prepend",children:Object(t.jsx)("span",{className:"input-group-text",children:Object(t.jsx)("i",{className:"la la-envelope"})})}),Object(t.jsx)("input",{name:"email",value:s.email,onChange:l,type:"text",required:!0,className:"form-control",placeholder:"Email Address"})]})}),Object(t.jsx)("div",{className:"col-sm-6",children:Object(t.jsxs)("div",{className:"input-group",children:[Object(t.jsx)("div",{className:"input-group-prepend",children:Object(t.jsx)("span",{className:"input-group-text",children:Object(t.jsx)("i",{className:"la la-phone"})})}),Object(t.jsx)("input",{name:"phone",value:s.phone,onChange:l,type:"number",required:!0,className:"form-control",placeholder:"Phone No."})]})}),Object(t.jsx)("div",{className:"col-sm-6",children:Object(t.jsxs)("div",{className:"input-group",children:[Object(t.jsx)("div",{className:"input-group-prepend",children:Object(t.jsx)("span",{className:"input-group-text",children:Object(t.jsx)("i",{className:"la la-list"})})}),Object(t.jsxs)("select",{name:"service",value:s.service,onChange:l,className:"form-control",required:!0,children:[Object(t.jsx)("option",{selected:!0,children:"Choose Service"}),Object(t.jsx)("option",{value:"Web App Development",children:"Web App Development"}),Object(t.jsx)("option",{value:"Mobile App Development",children:"Mobile App Development"}),Object(t.jsx)("option",{value:"IT Consulting",children:"IT Consulting"}),Object(t.jsx)("option",{value:"Custom ERP Development",children:"Custom ERP Development"}),Object(t.jsx)("option",{value:"UI / UX",children:"UI / UX"}),Object(t.jsx)("option",{value:"Graphic Designing",children:"Graphic Designing"}),Object(t.jsx)("option",{value:"Digital Marketing And Branding",children:"Digital Marketing And Branding"})]})]})}),Object(t.jsx)("div",{className:"col-sm-12",children:Object(t.jsxs)("div",{className:"input-group",children:[Object(t.jsx)("div",{className:"input-group-prepend",children:Object(t.jsx)("span",{className:"input-group-text",children:Object(t.jsx)("i",{className:"la la-sms"})})}),Object(t.jsx)("textarea",{name:"message",value:s.message,onChange:l,required:!0,className:"form-control",placeholder:"Message"})]})}),Object(t.jsx)("div",{className:"col-sm-12 mt-2",children:Object(t.jsxs)("button",{name:"submit",type:"submit",value:"Submit",className:"btn btn-link d-inline-flex align-items-center",children:[Object(t.jsx)("i",{className:"fa fa-angle-right m-r10"}),"Submit Now"]})})]})]})]}),Object(t.jsx)("div",{className:"col-xl-6 col-lg-5 m-b30 wow fadeInRight","data-wow-duration":"2s","data-wow-delay":"0.4s",children:Object(t.jsx)("div",{className:"dlab-media cf-r-img",children:Object(t.jsx)("img",{src:"images/about/img2.png",className:"move-1",alt:""})})})]})})})})}},Zv97:function(e,s,c){"use strict";var t=c("nKUr");s.a=function(){return Object(t.jsx)(t.Fragment,{children:Object(t.jsxs)("footer",{className:"site-footer style-1",id:"footer",style:{backgroundImage:"url(images/background/bg10.png)"},children:[Object(t.jsx)("div",{className:"footer-top",children:Object(t.jsxs)("div",{className:"container",children:[Object(t.jsx)("div",{className:"footer-info wow fadeIn","data-wow-duration":"2s","data-wow-delay":"0.8s",children:Object(t.jsxs)("div",{className:"row align-items-center",children:[Object(t.jsx)("div",{className:"col-xl-4 col-md-4",children:Object(t.jsx)("div",{className:"footer-logo",children:Object(t.jsx)("a",{href:"/",children:Object(t.jsx)("img",{style:{backgroundColor:"white",borderRadius:"30px 1px 30px",padding:"5px 0"},src:"images/logo.png",alt:""})})})}),Object(t.jsx)("div",{className:"col-xl-3 col-md-4 col-sm-6",children:Object(t.jsxs)("div",{className:"icon-bx-wraper left m-b10",children:[Object(t.jsx)("div",{className:"icon-lg",children:Object(t.jsx)("a",{href:"javascript:void(0);",className:"icon-cell",children:Object(t.jsx)("i",{className:"flaticon-email"})})}),Object(t.jsx)("div",{className:"icon-content",children:Object(t.jsxs)("p",{children:["info@leora.ae",Object(t.jsx)("br",{}),"sales@leora.ae"]})})]})}),Object(t.jsx)("div",{className:"col-xl-5 col-md-4 col-sm-6",children:Object(t.jsxs)("div",{className:"icon-bx-wraper left m-b10",children:[Object(t.jsx)("div",{className:"icon-lg",children:Object(t.jsx)("a",{href:"javascript:void(0);",className:"icon-cell",children:Object(t.jsx)("i",{className:"flaticon-location"})})}),Object(t.jsx)("div",{className:"icon-content",children:Object(t.jsx)("p",{children:"HDS Business Centre Tower, Cluster M1, 33rd Floor, Jumeirah Lake Towers, Dubai, Dubai"})})]})})]})}),Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)("div",{className:"col-xl-3 col-lg-4 col-sm-6 wow fadeIn","data-wow-duration":"2s","data-wow-delay":"0.2s",children:Object(t.jsxs)("div",{className:"widget widget_about",children:[Object(t.jsx)("h5",{className:"footer-title",children:"About Us"}),Object(t.jsx)("p",{children:"We established Leora Solutions LLP in the year 2014. Initially, we started with a small team and were focusing on IT consulting and Web hosting."}),Object(t.jsx)("div",{className:"dlab-social-icon",children:Object(t.jsxs)("ul",{children:[Object(t.jsx)("li",{children:Object(t.jsx)("a",{className:"fa fa-facebook",href:"https://en-gb.facebook.com/"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{className:"fa fa-instagram",href:"https://www.instagram.com/"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{className:"fa fa-twitter",href:"https://twitter.com/login?lang=en"})})]})})]})}),Object(t.jsx)("div",{className:"col-xl-3 col-lg-4 col-sm-6 wow fadeIn","data-wow-duration":"2s","data-wow-delay":"0.4s",children:Object(t.jsxs)("div",{className:"widget widget_services",children:[Object(t.jsx)("h5",{className:"footer-title",children:"Our links"}),Object(t.jsxs)("ul",{children:[Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:"/",children:"Home"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:"/about-us",children:"About Us"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:"/services",children:"Services"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:"/industries",children:"Industries"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:"/careers",children:"Careers"})})]})]})}),Object(t.jsx)("div",{className:"col-xl-3 col-lg-4 col-sm-6 wow fadeIn","data-wow-duration":"2s","data-wow-delay":"0.6s",children:Object(t.jsxs)("div",{className:"widget widget_services",children:[Object(t.jsx)("h5",{className:"footer-title",children:"Our Services"}),Object(t.jsxs)("ul",{children:[Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:"/web-services",children:"Web Development"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:"/mobile-services",children:"Mobile App Development"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:"/it-services",children:"IT Consulting"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:"/erp-services",children:"Custom ERP Development"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:"/ui-ux-services",children:"UI / UX"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:"/gd-services",children:"Graphic Designing"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:"/branding-services",children:"Digital Marketing And Branding"})})]})]})}),Object(t.jsx)("div",{className:"col-xl-3 col-lg-4 col-sm-6 wow fadeIn","data-wow-duration":"2s","data-wow-delay":"0.8s",children:Object(t.jsxs)("div",{className:"widget widget_services",children:[Object(t.jsx)("h5",{className:"footer-title",children:"Industries"}),Object(t.jsxs)("ul",{children:[Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:"/construction-industry",children:"Construction"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:"/health-industry",children:"Health"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:"/th-industry",children:"Travel & Hospitality"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:"/edu-industry",children:"Education"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:"/bank-industry",children:"Banking"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:"/ins-industry",children:"Insurance"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:"/retail-industry",children:"Retail & Ecommerce"})})]})]})})]})]})}),Object(t.jsx)("div",{className:"footer-bottom wow fadeIn","data-wow-duration":"2s","data-wow-delay":"0.2s",children:Object(t.jsx)("div",{className:"container",children:Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col-sm-12 text-center",children:Object(t.jsxs)("span",{className:"copyright-text",children:["Copyright \xa9 2021"," ",Object(t.jsx)("a",{href:"https://dexignzone.com/",target:"_blank",children:"Leora"}),". All rights reserved."]})})})})})]})})}}}]);