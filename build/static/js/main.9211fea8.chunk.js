(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{44:function(e,t,c){},64:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(35),i=c.n(a),r=(c(44),c(4)),l=c(13),j=c(3),o=c(7),d=c(36),b=c.n(d),h=c(38),m=(c(64),c(0)),O=function(){var e=Object(n.useContext)(R),t=Object(r.a)(e,1)[0],c=Object(n.useState)(!1),s=Object(r.a)(c,2),a=s[0],i=s[1];return Object(n.useEffect)((function(){fetch("http://localhost:5000/isAdmin",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t.email})}).then((function(e){return e.json()})).then((function(e){return i(e)}))}),[]),Object(m.jsx)("div",{className:"sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4",style:{height:"100vh"},children:Object(m.jsxs)("ul",{className:"list-unstyled",children:[Object(m.jsx)("li",{children:Object(m.jsx)(l.b,{to:"/",children:"Home"})}),a&&Object(m.jsxs)("div",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(l.b,{to:"/addService",children:"AddService"})}),Object(m.jsx)("li",{children:Object(m.jsx)(l.b,{to:"/delete",children:"Delete"})})]})]})})},x=function(){var e=Object(h.a)(),t=e.register,c=e.handleSubmit,s=e.formState.errors,a=Object(n.useState)(null),i=Object(r.a)(a,2),l=i[0],j=i[1];return Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-3",children:Object(m.jsx)(O,{})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsxs)("form",{onSubmit:c((function(e){var t={name:e.name,email:e.email,price:e.price,imageURL:l,description:e.description};fetch("http://localhost:5000/addService",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return console.log("server side response",e)}))})),children:[Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("input",Object(o.a)(Object(o.a)({type:"text"},t("name")),{},{name:"name",placeholder:" name",className:"form-control"})),s.name&&Object(m.jsx)("span",{className:"text-danger",children:"This field is required"})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("input",Object(o.a)(Object(o.a)({type:"price"},t("price")),{},{name:"price",placeholder:"price",className:"form-control"})),s.name&&Object(m.jsx)("span",{className:"text-danger",children:"This field is required"})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("input",Object(o.a)(Object(o.a)({type:"text"},t("email",{required:!0})),{},{name:"email",placeholder:"email",className:"form-control"})),s.phone&&Object(m.jsx)("span",{className:"text-danger",children:"This field is required"})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("input",Object(o.a)(Object(o.a)({type:"text"},t("description",{required:!0})),{},{name:"description",placeholder:"description",className:"form-control"})),s.phone&&Object(m.jsx)("span",{className:"text-danger",children:"This field is required"})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("input",Object(o.a)(Object(o.a)({type:"file"},t("img",{required:!0})),{},{name:"img",placeholder:"Image",onChange:function(e){console.log(e.target.files[0]);var t=new FormData;t.set("key","88915d62ec9d02c19a4c66f98a63a842"),t.append("image",e.target.files[0]),b.a.post("https://api.imgbb.com/1/upload",t).then((function(e){j(e.data.data.display_url)})).catch((function(e){console.log(e)}))},className:"form-control"})),s.email&&Object(m.jsx)("span",{className:"text-danger",children:"This field is required"})]}),Object(m.jsx)("div",{className:"form-group text-right",children:Object(m.jsx)("button",{type:"submit",className:"btn btn-primary text-right",children:"AddService"})})]})})]})},u=function(){return Object(m.jsx)("div",{className:"container-fluid row'",children:Object(m.jsx)("div",{className:"col-md-3",children:Object(m.jsx)(O,{})})})},p=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1];Object(n.useEffect)((function(){fetch("http://localhost:5000/serviceEvent").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[c]);return Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-3",children:Object(m.jsx)(O,{})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsxs)("table",{class:"table",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"col",children:"Name"}),Object(m.jsx)("th",{scope:"col",children:"Email"}),Object(m.jsx)("th",{scope:"col",children:"Delete"})]})}),Object(m.jsx)("tbody",{children:c.map((function(e){return Object(m.jsxs)("tr",{id:"parent",children:[Object(m.jsx)("td",{children:e.name}),Object(m.jsx)("td",{children:e.price}),Object(m.jsx)("td",{children:Object(m.jsx)("button",{onClick:function(){return t="".concat(e._id),void fetch("http://localhost:5000/delete/".concat(t),{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){if(e){var n=c.filter((function(e){return e._id!==t}));alert("YAY!","You deleted the services!","success"),s(n)}}));var t},className:"btn btn-danger",children:" Delete"})})]})}))})]})})]})},f=function(){var e=Object(j.i)()._id,t=Object(n.useState)({}),c=Object(r.a)(t,2),s=c[0],a=c[1],i=Object(n.useContext)(R),l=Object(r.a)(i,1)[0];Object(n.useEffect)((function(){fetch("http://localhost:5000/service/".concat(e)).then((function(e){return e.json()})).then((function(e){return a(e)}))}),[e]);return Object(m.jsxs)("div",{children:[Object(m.jsxs)("h2",{children:["Checkout: ",l.email]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-3"}),Object(m.jsxs)("div",{className:"col-md-6 shadow px-4 pt-4 my-4",style:{borderRadius:"15px"},children:[Object(m.jsx)("div",{hover:!0,responsive:!0,children:Object(m.jsxs)("div",{children:[Object(m.jsxs)("h4",{children:["Title: ",s.name]}),Object(m.jsxs)("p",{children:["Price:$",s.price]}),Object(m.jsxs)("p",{children:["Description: ",s.description]})]})}),Object(m.jsx)("div",{className:" text-left",children:Object(m.jsx)("button",{onClick:function(){var e=Object(o.a)(Object(o.a)({},l),{},{orderTime:new Date});fetch("http://localhost:5000/addOrder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log(e)}))},children:"Checkout"})})]})]})]})},v=(c(70),function(){return Object(m.jsx)("div",{id:"shop",className:"mb-5",children:Object(m.jsx)("div",{className:"banner-area d-flex align-items-center",children:Object(m.jsx)("div",{className:"container ",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"col-md-12",children:[Object(m.jsxs)("h5",{className:"slider-text",children:["Creative Photography ",Object(m.jsx)("br",{}),"Service"]}),Object(m.jsxs)("p",{className:"text-white",children:["Lorem ipsum dolor, sit amet consectetur adipisicing cum ",Object(m.jsx)("br",{}),"Lorem ipsum dolor, consectetur adipisicing."]}),Object(m.jsx)("button",{className:"btn-area",children:"Find more"})]})})})})})}),g=(c(71),function(e){return Object(m.jsxs)("div",{className:"col-md-3",children:[Object(m.jsx)("h6",{className:"text-white",children:e.menuTitle?e.menuTitle:" "}),Object(m.jsx)("ul",{className:"list-unstyled mt-4 ",children:e.menuItems.map((function(e,t){return Object(m.jsx)("li",{children:Object(m.jsx)(l.b,{to:e.link,className:"text-secondary",children:e.name})},t)}))}),e.children&&e.children]})}),N=function(){return Object(m.jsx)("footer",{className:"footer-area clear-both",children:Object(m.jsxs)("div",{className:"container pt-5",children:[Object(m.jsxs)("div",{className:"row py- text-white",children:[Object(m.jsx)(g,{menuTitle:"Photography",menuItems:[{name:"Emergency  Photography",link:"/emergency"},{name:"bookDay",link:"/bookDay"},{name:"Book Service",link:"/personal-treatment"},{name:"Pra Wedding",link:"/"},{name:"bookDay",link:"/bookDay"}]},1),Object(m.jsx)(g,{menuTitle:"NAVIGATION",menuItems:[{name:"Emergency Photography",link:"/emergency"},{name:"Family Event",link:"/bookDay"},{name:"About Us",link:"/"},{name:"Our Service",link:"/"}]},2),Object(m.jsx)(g,{menuTitle:"Oral OUR SERVICE",menuItems:[{name:"Emergency Photography",link:"/emergency"},{name:"Family Event",link:"/bookDay"},{name:"Class Event",link:"/"},{name:"Wedding Package  ",link:"/"}]},3),Object(m.jsxs)(g,{menuTitle:"Our CONTACT US",menuItems:[{name:"New York - 101010 Hudson",link:"//google.com/map"},{name:"Yards",link:"//google.com/map"}],children:[Object(m.jsxs)("ul",{className:"social-media list-inline",children:[Object(m.jsx)("li",{}),Object(m.jsx)("i",{className:"fab fa-facebook"}),Object(m.jsx)("li",{className:"list-inline-item",children:Object(m.jsxs)("a",{href:"//facebook.com",children:[" ",Object(m.jsxs)("span",{children:[" ",Object(m.jsx)("i",{className:"fab fa-facebook"})," "]})]})}),Object(m.jsx)("li",{className:"list-inline-item",children:Object(m.jsxs)("a",{href:"//google.com",children:[" ",Object(m.jsxs)("span",{children:[" ",Object(m.jsx)("i",{className:"fa fa-twitter"})," "]})]})}),Object(m.jsx)("li",{className:"list-inline-item",children:Object(m.jsxs)("a",{href:"//instagram.com",children:[" ",Object(m.jsxs)("span",{children:[" ",Object(m.jsx)("i",{class:"fa fa-instagram"})," "]})]})})]}),Object(m.jsxs)("div",{className:"mt-5",children:[Object(m.jsx)("h6",{children:"Call now"}),Object(m.jsx)("button",{className:"btn btn-primary",children:"+2025550295"})]})]},4)]}),Object(m.jsx)("div",{className:"copyRight text-center",children:Object(m.jsxs)("p",{className:"text-white",children:["Copyright ",(new Date).getFullYear()," All Rights Reserved"]})})]})})},y=function(){return Object(m.jsx)("div",{className:"navbar-area",children:Object(m.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light container",children:Object(m.jsxs)("div",{className:"container-fluid",children:[Object(m.jsx)("a",{className:"navbar-brand",href:"/",children:"PHOTOGRAPHY"}),Object(m.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(m.jsx)("span",{className:"navbar-toggler-icon"})}),Object(m.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(m.jsxs)("ul",{className:"navbar-nav ps-5 ms-5",children:[Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#home",children:"Home"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)("a",{className:"nav-link",href:"#products",children:"Products"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)("a",{className:"nav-link",href:"/order",children:"Order"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)("a",{className:"nav-link",href:"/dashboard",children:"Dashboard"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)("a",{className:"nav-link",href:"/login",children:"LogIn"})})]})})]})})})},k=function(e){var t=e.service,c=t.name,n=t.imageURL,s=t.price,a=Object(j.g)();return Object(m.jsx)("div",{className:"col-md-4",children:Object(m.jsxs)("div",{className:"shadow mb-4",style:{borderRadius:"20px",border:0},children:[Object(m.jsx)("div",{className:"d-flex align-items-center p-2",style:{maxwidth:"300px",height:"300px"},children:Object(m.jsx)("img",{className:"w-100",style:{objectFit:"contain",maxHeight:"300px"},variant:"top",src:n})}),Object(m.jsx)("div",{className:"card-body pb-0",children:Object(m.jsx)("div",{className:"card-title",as:"h4",children:c})}),Object(m.jsxs)("div",{className:"card-body d-flex justify-content-between align-items-center",children:[Object(m.jsxs)("div",{as:"h2",className:"mb-1",style:{fontWeight:"600",color:"#FF4B2B"},children:["$",s]}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("button",{onClick:function(){return e=t._id,void a.push("/checkout/".concat(e));var e},to:"checkout",className:"buy-btn shadow-none",children:"Buy Now"})})]})]})})},S=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){fetch("http://localhost:5000/serviceEvent").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]),Object(m.jsxs)("section",{className:"mt-5",children:[Object(m.jsx)("div",{className:"text-center",children:Object(m.jsx)("h5",{style:{color:"#1CC7C1"},children:"OUR SERVICES"})}),Object(m.jsx)("div",{className:"d-flex justify-content-center",children:Object(m.jsx)("div",{className:"w-75 row mt-3 pt-5",children:c.map((function(e){return Object(m.jsx)(k,{service:e},e._id)}))})})]})},w=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(y,{}),Object(m.jsx)(v,{}),Object(m.jsx)(S,{}),Object(m.jsx)(N,{})]})},C=function(){var e=Object(n.useContext)(R).loggedInUser,t=Object(n.useState)([]),c=Object(r.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)(!0),l=Object(r.a)(i,2),j=l[0],o=l[1];return Object(n.useEffect)((function(){fetch("http://localhost:5000/order?email="+e.email).then((function(e){return e.json()})).then((function(e){a(e),o(!1)}))}),[]),j?Object(m.jsx)("h1",{children:"LOADING......"}):Object(m.jsxs)("div",{children:[Object(m.jsx)("h5",{children:"Order List"}),Object(m.jsx)("div",{className:"row",children:s.map((function(e){return Object(m.jsxs)("li",{children:["Name: ",e.name," Email:",e.email]},e._id)}))})]})},T=c(19),E=(c(72),{apiKey:"AIzaSyDSrxsimVereavhgGJybYDwQ93-82Rrr9M",authDomain:"photography-40639.firebaseapp.com",projectId:"photography-40639",storageBucket:"photography-40639.appspot.com",messagingSenderId:"209092639907",appId:"1:209092639907:web:2569555135ae071a1ed316"}),D=function(){var e=Object(n.useContext)(R),t=Object(r.a)(e,2),c=(t[0],t[1]),s=Object(j.g)(),a=(Object(j.h)().state||{from:{pathname:"/"}}).from;0===T.a.apps.length&&T.a.initializeApp(E);return Object(m.jsx)("div",{className:"from-group mt-5",children:Object(m.jsx)("button",{className:"btn btn-primary",onClick:function(){var e=new T.a.auth.GoogleAuthProvider;T.a.auth().signInWithPopup(e).then((function(e){var t=e.user,n={name:t.displayName,email:t.email};c(n),s.replace(a),console.log(n)})).catch((function(e){var t=e.message;console.log(t)}))},children:"Google Sign in"})})},I=c(39),P=["children"],A=function(e){var t=e.children,c=Object(I.a)(e,P),s=Object(n.useContext)(R),a=Object(r.a)(s,2),i=a[0];a[1];return Object(m.jsx)(j.b,Object(o.a)(Object(o.a)({},c),{},{render:function(e){var c=e.location;return i.email?t:Object(m.jsx)(j.a,{to:{pathname:"/login",state:{from:c}}})}}))},R=Object(n.createContext)();var F=function(){var e=Object(n.useState)({}),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(m.jsx)(R.Provider,{value:[c,s],children:Object(m.jsx)(l.a,{children:Object(m.jsxs)(j.d,{children:[Object(m.jsx)(j.b,{exact:!0,path:"/",children:Object(m.jsx)(w,{})}),Object(m.jsx)(j.b,{path:"/login",children:Object(m.jsx)(D,{})}),Object(m.jsx)(A,{path:"/checkout/:_id",children:Object(m.jsx)(f,{})}),Object(m.jsx)(A,{path:"/dashboard",children:Object(m.jsx)(u,{})}),Object(m.jsx)(A,{path:"/order",children:Object(m.jsx)(C,{})}),Object(m.jsx)(j.b,{path:"/addService",children:Object(m.jsx)(x,{})}),Object(m.jsx)(j.b,{path:"/delete",children:Object(m.jsx)(p,{})})]})})})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,75)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(F,{})}),document.getElementById("root")),L()}},[[74,1,2]]]);
//# sourceMappingURL=main.9211fea8.chunk.js.map