(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{101:function(e,t,a){},117:function(e,t,a){e.exports=a(169)},122:function(e,t,a){},123:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},169:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),o=(a(122),a(123),a(69)),i=a.n(o),s=a(225),m=a(226),u=a(26),d=a(82),g=a(13),f=a(10),E=a(2),p=a(25),b=a.n(p),h=a(229),v=a(214),_=a(93),S=a.n(_),O=a(232),j=a(215),y=a(216),I=a(217),w=a(218),k=a(234),C=a(208),N=a(222),x=a(94),D=a.n(x),A=a(62),L=a.n(A),B=a(171),M=a(205),U=a(206),W=a(207),z=function(e){return r.a.createElement(B.a,{button:!0,selected:e.selected,onClick:e.onSelected},r.a.createElement(M.a,null,r.a.createElement(O.a,null,r.a.createElement("img",{src:e.image}))),r.a.createElement(U.a,{primary:e.text,secondary:e.timeStamp}),r.a.createElement(W.a,{className:D.a.delete_button},r.a.createElement(C.a,{onClick:e.onDelete,edge:"end","aria-label":"delete"},r.a.createElement(L.a,null))))},F=a(100),J=a.n(F),R=a(44),G=a(98),P=a.n(G),T=a(99),q=a.n(T),H=a(97),V=a.n(H),X=a(231),Y=a(210),Z=a(211),$=a(212),K=a(213),Q=function(e){var t=function(){e.setOpen(!1)};return r.a.createElement(X.a,{open:e.open,onClose:t,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(Y.a,{id:"alert-dialog-title"},"Warning"),r.a.createElement(Z.a,null,r.a.createElement($.a,{id:"alert-dialog-description"},"Are you sure you want to delete this message?")),r.a.createElement(K.a,null,r.a.createElement(d.a,{onClick:t,color:"primary"},"Cancel"),r.a.createElement(d.a,{variant:"contained",color:"secondary",onClick:e.onDelete,startIcon:r.a.createElement(L.a,null)},"DELETE")))},ee=a(96),te=a.n(ee).a.create({baseURL:"https://chat-herolo.herokuapp.com"});function ae(e){var t=e.children,a=e.value,c=e.index,l=Object(E.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==c,id:"full-width-tabpanel-".concat(c),"aria-labelledby":"full-width-tab-".concat(c)},l),a===c&&r.a.createElement(n.Fragment,null,t))}var ne=function(){var e=Object(R.useSnackbar)(),t=Object(n.useState)(0),a=Object(f.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(-1),i=Object(f.a)(o,2),s=i[0],m=i[1],E=Object(n.useState)(""),p=Object(f.a)(E,2),_=p[0],x=p[1],D=Object(n.useState)([]),A=Object(f.a)(D,2),L=A[0],B=A[1],M=Object(n.useState)(!1),U=Object(f.a)(M,2),W=U[0],F=U[1],G=Object(n.useState)(-1),T=Object(f.a)(G,2),H=T[0],X=T[1],Y=Object(g.f)(),Z=JSON.parse(localStorage.getItem("currentUser")),$=Object(n.useState)([]),K=Object(f.a)($,2),ee=K[0],ne=K[1],re=function(){var e=localStorage.getItem("token");te.get("/Messages",{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){var t=e.data,a=t.status,n=t.messages;"success"==a&&(console.log(n),B(n))})).catch((function(e){console.log(e)}))};Object(n.useEffect)((function(){return te.get("/Auth/").then((function(e){var t=e.data,a=t.status,n=t.users;"success"==a&&ne(n)})).catch((function(e){console.log(e)})),function(){}}),[]),Object(n.useEffect)((function(){return re(),function(){}}),[]);var ce=function(e){m((function(t){return e}))},le=function(e){F(!0),X(e)},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,t=ee.filter((function(t){return t.id==(-1===e?ie.senderID:e)}));return t.length>0?t[0].image:""},ie=L.filter((function(e){return e.id==s})).length>0?L.filter((function(e){return e.id==s}))[0]:{},se=Z&&r.a.createElement("div",{className:b.a.tabs},r.a.createElement(O.a,{className:b.a.user_avatar},r.a.createElement("img",{src:Z.image.replace("thumb/","")})),r.a.createElement(u.a,null,Z.email),r.a.createElement(d.a,{onClick:function(){Y.push("/ComposeEmail")},variant:"contained",color:"secondary",className:b.a.button,startIcon:r.a.createElement(V.a,null)},"Compose Email"),r.a.createElement(h.a,{value:c,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){l(t)},"aria-label":"functions tabs",orientation:"vertical",style:{width:"100%"}},r.a.createElement(v.a,{className:b.a.tab,label:"Inbox",icon:r.a.createElement(P.a,null)}),r.a.createElement(v.a,{className:b.a.tab,label:"Sent",icon:r.a.createElement(q.a,null)}))),me=-1!=s?r.a.createElement(j.a,{className:b.a.card_root},r.a.createElement(y.a,{avatar:r.a.createElement(O.a,null,r.a.createElement("img",{src:oe()})),title:ie.subject,subheader:ie.timeStamp}),r.a.createElement(I.a,{className:b.a.card_content},ie.message),r.a.createElement(w.a,{className:b.a.card_actions},r.a.createElement(k.a,{fullWidth:!0,id:"standard-Comment",label:"Comment",placeholder:"Enter text for comment",multiline:!0,onChange:function(e){return x(e.target.value)},value:_}),r.a.createElement(C.a,{disabled:0===_.length,onClick:function(){var t=localStorage.getItem("token");te.post("/Messages",{message:_,subject:ie.subject,to:ie.senderID,id:Date.now(),senderID:Z.id,timeStamp:new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"long",day:"2-digit"}).format(Date.now())},{headers:{Authorization:"Bearer ".concat(t)}}).then((function(t){console.log(t),e.showMessage("Email Sent Succuesfully"),x(""),re()})).catch((function(e){return console.log(e)}))}},r.a.createElement(J.a,null)))):r.a.createElement("div",{className:b.a.defualtBG},r.a.createElement("p",null,"Please select mail"),r.a.createElement("img",{src:"https://cdn.business2community.com/wp-content/uploads/2019/11/sending.gif"}));return localStorage.getItem("token")?r.a.createElement("div",{className:b.a.root},se,r.a.createElement(S.a,{index:c,onChangeIndex:function(e){l(e)}},r.a.createElement(ae,{value:c,index:0},r.a.createElement(N.a,null,L.filter((function(e){return e.to==Z.id})).map((function(e,t){return r.a.createElement(z,{image:oe(e.senderID),onDelete:function(){return le(e.id)},selected:s==e.id,onSelected:function(){return ce(e.id)},text:e.subject,timeStamp:e.timeStamp,key:e.timeStamp+t})})))),r.a.createElement(ae,{value:c,index:1},r.a.createElement(N.a,null,L.filter((function(e){return e.senderID==Z.id})).map((function(e,t){return r.a.createElement(z,{image:oe(e.to),onDelete:function(){return le(e.id)},selected:s==e.id,onSelected:function(){return ce(e.id)},text:e.subject,timeStamp:e.timeStamp,key:e.timeStamp+t})}))))),me,r.a.createElement(Q,{open:W,setOpen:F,onDelete:function(){F(!1);var e=localStorage.getItem("token");te.delete("http://localhost:3333/Messages/".concat(H),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){var t=e.data,a=t.status,n=t.messages;"success"==a&&B(n)})).catch((function(e){console.log(e)})),X(-1),m(-1)}})):(Y.push("/Login"),null)},re=a(72),ce=a(101),le=a.n(ce),oe=a(223),ie=a(104),se=a(102),me=a.n(se),ue=a(68),de=a.n(ue),ge=function(e){var t=Object(ie.a)(),a=t.register,n=t.handleSubmit,c=Object(g.f)(),l=Object(R.useSnackbar)(),o=function(){c.push("/")},i=function(e){var t=e.name,n=e.icon,c=e.type,l=void 0===c?"string":c,o=e.fullwidth,i=void 0===o||o,s=e.rows,m=void 0===s?1:s;return r.a.createElement(k.a,{fullWidth:i,margin:"dense",id:t,label:t[0].toUpperCase()+t.substr(1),name:t,type:l,multiline:i,rows:m,required:!0,inputRef:a(),InputProps:n&&{startAdornment:r.a.createElement(oe.a,{position:"start"},n)}})};return r.a.createElement("div",{className:le.a.root},r.a.createElement(X.a,{open:!0,"aria-labelledby":"form-dialog-title"},r.a.createElement(Y.a,{id:"form-dialog-title"},"Compose E-Mail"),r.a.createElement(Z.a,null,r.a.createElement($.a,null),r.a.createElement("form",{onSubmit:n((function(e){var t=localStorage.getItem("token"),a=JSON.parse(localStorage.getItem("currentUser")).id;te.post("/Messages",Object(re.a)(Object(re.a)({},e),{},{id:Date.now(),senderID:a,timeStamp:new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"long",day:"2-digit"}).format(Date.now())}),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){console.log(e),l.showMessage("Email Sent Succuesfully"),o()})).catch((function(e){return console.log(e)}))}))},r.a.createElement(i,{name:"to",icon:r.a.createElement(me.a,null),type:"number",fullwidth:!1}),r.a.createElement(i,{name:"subject",icon:r.a.createElement(de.a,null)}),r.a.createElement(i,{name:"message",rows:8}),r.a.createElement(K.a,null,r.a.createElement(d.a,{onClick:o,color:"primary"},"Cancel"),r.a.createElement(d.a,{type:"submit",variant:"contained",color:"secondary"},"Send E-Mail"))))))},fe=a(106),Ee=a(64),pe=a.n(Ee),be=a(233),he=a(224),ve=a(221),_e=a(228),Se=function(){var e=Object(g.f)(),t=Object(n.useState)([]),a=Object(f.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(-1),i=Object(f.a)(o,2),s=i[0],m=i[1];Object(n.useEffect)((function(){return te.get("/Auth/").then((function(e){var t=e.data,a=t.status,n=t.users;"success"==a&&l(n)})).catch((function(e){console.log(e)})),function(){}}),[]);return r.a.createElement(fe.a,{className:pe.a.root},r.a.createElement("img",{src:"https://www.newtheatreroyal.com/wp-content/uploads/2014/06/NTR-SNAIL-MAIL-ICON-301x350.png"}),r.a.createElement(ve.a,{fullWidth:!0,variant:"outlined"},r.a.createElement(be.a,{id:"demo-simple-select-outlined-label"},"Select User"),r.a.createElement(_e.a,{onChange:function(e){m(e.target.value)},value:s,className:pe.a.select,fullWidth:!0,labelId:"select-outlined-label",id:"demo-simple-select-outlined",label:"User"},c.map((function(e){return r.a.createElement(he.a,{key:e.id,classes:{gutters:pe.a.menuItem},value:e.id},r.a.createElement(O.a,null,r.a.createElement("img",{src:e.image})),e.name)})))),r.a.createElement(d.a,{disabled:-1==s,variant:"contained",color:"primary",onClick:function(){te.post("/Auth/Login",{id:s}).then((function(t){var a=t.data,n=a.token,r=a.status,c=a.user;"success"==r&&(localStorage.setItem("token",n),localStorage.setItem("currentUser",JSON.stringify(c[0])),e.push("/"))}))}},"Login"))};var Oe=Object(g.g)((function(e){var t=Object(g.f)();Object(n.useEffect)((function(){return console.log(e),localStorage.getItem("token")||t.push("/Login"),function(){}}),[]);var a=function(){return r.a.createElement(s.a,{position:"static"},r.a.createElement(m.a,{className:i.a.tool_bar},r.a.createElement(u.a,{variant:"h6"},"HEROLO"),r.a.createElement(d.a,{onClick:function(){localStorage.removeItem("token"),localStorage.removeItem("currentUser"),t.push("/Login")},color:"secondary"},"Logout")))};return r.a.createElement("div",{className:i.a.root},!e.location.pathname.includes("Login")&&r.a.createElement(a,null),r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/",component:ne}),r.a.createElement(g.a,{path:"/ComposeEmail",component:ge}),r.a.createElement(g.a,{path:"/Login",component:Se})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var je=a(42),ye=a(103),Ie=a(227),we=Object(ye.a)({palette:{primary:{light:"#fff",main:"#455a64",dark:"#000"},secondary:{main:"#ffb300"}},typography:{useNextVariants:!0}});l.a.render(r.a.createElement(Ie.a,{theme:we},r.a.createElement(R.SnackbarProvider,{SnackbarProps:{autoHideDuration:2500,anchorOrigin:{vertical:"top",horizontal:"right"}}},r.a.createElement(je.a,null,r.a.createElement(Oe,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},25:function(e,t,a){e.exports={root:"mangeEmail_root__334NC",tabs:"mangeEmail_tabs__3UWac",card_root:"mangeEmail_card_root__CEnvg",card_content:"mangeEmail_card_content__1nwd7",card_actions:"mangeEmail_card_actions___XjNC",user_avatar:"mangeEmail_user_avatar__3v47_",tab:"mangeEmail_tab__3xsFR",button:"mangeEmail_button__lrDCq",defualtBG:"mangeEmail_defualtBG__FNtcz"}},64:function(e,t,a){e.exports={root:"Auth_root__3qtys",menuItem:"Auth_menuItem__2l4Fp",select:"Auth_select__2xjsZ"}},69:function(e,t,a){e.exports={root:"App_root__35rtb",tool_bar:"App_tool_bar__2b0sR"}},94:function(e,t,a){e.exports={delete_button:"mailListItem_delete_button__2CJYD"}}},[[117,1,2]]]);
//# sourceMappingURL=main.3103b6c9.chunk.js.map