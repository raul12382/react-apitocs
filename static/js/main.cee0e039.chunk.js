(this["webpackJsonpreact-website-yt-1"]=this["webpackJsonpreact-website-yt-1"]||[]).push([[0],{172:function(e,t,a){e.exports=a(267)},267:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),l=a(123),s=a(39),i=a.n(s),d=a(75),u=a(24),m=a(272),p=a(271),b=a(168),E=a(269),f=a(270),g=a(82),v=a(273),h=a(124),x=a.n(h),O=m.a.Option,y=function(e){var t,a=p.a.useForm(),c=Object(u.a)(a,1)[0],o=Object(n.useState)(""),s=Object(u.a)(o,2),h=(s[0],s[1]),y=Object(n.useState)(""),w=Object(u.a)(y,2),j=(w[0],w[1]),N=Object(n.useState)({}),k=Object(u.a)(N,2),S=k[0],C=k[1],B=Object(n.useState)(!1),T=Object(u.a)(B,2),D=T[0],_=T[1],z=Object(n.useState)(!1),F=Object(u.a)(z,2),M=F[0],X=F[1],R=Object(n.useState)(""),I=Object(u.a)(R,2),A=(I[0],I[1]),P=Object(n.useState)(""),J=Object(u.a)(P,2),W=J[0],q=J[1],G=Object(n.useState)(""),K=Object(u.a)(G,2),L=K[0],$=K[1],H=Object(n.useState)(""),Q=Object(u.a)(H,2),U=Q[0],V=Q[1],Y=Object(n.useState)(""),Z=Object(u.a)(Y,2),ee=Z[0],te=Z[1],ae=Object(n.useState)(!1),ne=Object(u.a)(ae,2),re=(ne[0],ne[1]),ce=Object(n.useState)(!0),oe=Object(u.a)(ce,2),le=oe[0],se=oe[1],ie=Object(n.useState)(!0),de=Object(u.a)(ie,2),ue=de[0],me=de[1],pe=Object(n.useState)(!0),be=Object(u.a)(pe,2),Ee=be[0],fe=be[1],ge=Object(n.useState)(!1),ve=Object(u.a)(ge,2),he=ve[0],xe=ve[1],Oe=Object(n.useState)(null),ye=Object(u.a)(Oe,2),we=(ye[0],ye[1],function(){var e=Object(d.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return me(!1),e.next=3,ke();case 3:a=e.sent,console.log("Session id",a),n=window.TOCautocapture,n("container",{locale:"es",session_id:"0634065de7444e689d984d24cf220221",document_type:W,document_side:"back",callback:function(e,t){b.b.success("Captura Realizada",3);var a=e,n=t;console.log(e),V(a),j(n),me(!0),Ne()},failure:function(e){b.b.error("Se ha generado el error: "+e)},http:!0});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),je=function(){var e=Object(d.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(W),xe(!0),se(!1),e.next=5,ke();case 5:a=e.sent,console.log("Session id",a),n=window.TOCautocapture,n("containerfront",{locale:"es",session_id:"0634065de7444e689d984d24cf220221",document_type:W,document_side:"front",callback:function(e,t){b.b.success("Captura Realizada",3),console.log(t);var a=t;$(e),h(a),se(!0),we()},failure:function(e){b.b.error("Se ha generado el error: "+e)},http:!0});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ne=function(){var e=Object(d.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return fe(!1),e.next=3,ke();case 3:a=e.sent,console.log("Session id",a),n=window.TOCliveness,n("liveness",{locale:"es",session_id:"0634065de7444e689d984d24cf220221",callback:function(e){b.b.success("Captura Realizada",3),te(e),fe(!0),Se()},failure:function(e){b.b.error("Se ha generado el error: "+e)},http:!0});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ke=function(){var e=Object(d.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("http://54.232.52.181:3001/session");case 3:return t=e.sent,console.log("Session id response",t),e.abrupt("return",t.data.session_id);case 8:e.prev=8,e.t0=e.catch(0),console.log("Error al obtener sesi\xf3n",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),Se=function(){var e=Object(d.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(a=new FormData).append("id_front",L),a.append("id_back",U),a.append("selfie",ee),a.append("apiKey","433a8e1ed0dc4495974a9f95018eed8f"),a.append("documentType",W),e.next=9,x.a.post("https://sandbox-api.7oc.cl/v2/face-and-document",a);case 9:return n=e.sent,C(n.data["information from document"].mrz.data),b.b.success("Datos enviados correctamente",3),_(!0),e.abrupt("return",n);case 16:e.prev=16,e.t0=e.catch(0),b.b.error("Error al capturar la informaci\xf3n");case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(p.a,{layout:"horizontal",form:c,onFinish:Se},r.a.createElement(E.a,{hidden:he},r.a.createElement(f.a,{lg:12,xs:24,style:{textAlign:"center",display:"inline-block"},className:"text-center"},r.a.createElement("div",{className:"text-center text-white border",style:{padding:10,backgroundColor:"#03324B"}},r.a.createElement("div",{className:"card-body",style:{padding:10}},r.a.createElement("p",{className:"card-text text-white col d-flex"},"Para verificar su identidad se necesitan fotos de su c\xe9dula de identidad y rostro, siguiendo los pasos que te mostraremos a continuaci\xf3n.",r.a.createElement("br",null),"Evite usar accesorios como lentes o sombreros",r.a.createElement("br",null),"Seleccione el tipo de documento para comenzar con la verificaci\xf3n."))),r.a.createElement(m.a,{style:{paddingTop:10},placeholder:"Selecciona el tipo de documento",onChange:function(e){q(e),re(!0),console.log(W)}},r.a.createElement(O,{value:"MEX1"},"MEX1"),r.a.createElement(O,{value:"MEX2"},"MEX2"),r.a.createElement(O,{value:"MEX3"},"MEX3")))),r.a.createElement(E.a,null,r.a.createElement(f.a,{lg:12,xs:24,style:{padding:10},className:"text-center text-white"},r.a.createElement("div",null,r.a.createElement("label",{className:"text-center text-white font-weight-bold"},"Procedimiento")),r.a.createElement(g.a,{style:{backgroundColor:"#18938B",alignItems:"center"},type:"primary",onClick:je},"Realizar Onboarding"))),r.a.createElement(E.a,{hidden:he},r.a.createElement(f.a,{lg:24,xs:24,className:"text-center",style:{alignItems:"center"}},r.a.createElement(p.a.Item,{style:{marginTop:10}},r.a.createElement(g.a,(t={className:"btn-sm",htmlType:"submit"},Object(l.a)(t,"className","text-light text-center"),Object(l.a)(t,"style",{backgroundColor:"#18938B"}),t),"Enviar informacion")),r.a.createElement(f.a,{style:{paddingBottom:20,textAlign:"center"},className:"text-center"},r.a.createElement(g.a,{className:"text-white",style:{backgroundColor:"#18938B"},onClick:function(){_(!0)}},"informacion escaneada")))),r.a.createElement(v.a,{title:"informacion escaneada ",visible:D,onOk:function(){A("El modal se cerrara en dos segundos"),X(!0),setTimeout((function(){_(!1),X(!1)}),2e3)},confirmLoading:M,onCancel:function(){console.log("Clicked cancel button"),_(!1)}},"   ",r.a.createElement("p",null,"Resultado Biometrico: ",S["biometric result"]),r.a.createElement("p",null,"Apellidos Paternos: ",S["family name"]?S["family name"]:"Documento sin escanear"),r.a.createElement("br",null),r.a.createElement("p",null,"Nombre Completo: ",S.name?S.name:"Documento sin escanear"),r.a.createElement("br",null),r.a.createElement("p",null,"Nacionalidad: ",S.nationality?S.nationality:"Documento sin escanear"),r.a.createElement("br",null),r.a.createElement("p",null,"Genero: ",S.gender?S.gender:"Documento sin escanear"),r.a.createElement("br",null),r.a.createElement("p",null,"Fecha Expiraci\xf3n: ",S["expiration date"]?S["expiration date"]:"Documento sin escanear"),r.a.createElement("br",null),r.a.createElement("p",null,"Numero de documento: ",S["document number"]?S["document number"]:"Documento sin escanear"),r.a.createElement("br",null),r.a.createElement("p",null,"Fecha Nacimiento: ",S["date of birth"]?S["date of birth"]:"Documento sin escanear")),r.a.createElement("div",{hidden:le,className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text text-center"},"Capture su parte frontal",r.a.createElement("div",{style:{padding:20},id:"containerfront"})))),r.a.createElement("div",{hidden:ue,className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text text-center"},"Capture su parte trasera",r.a.createElement("div",{style:{padding:20},id:"container"})))),r.a.createElement("div",{hidden:Ee,className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text text-center"},"Capture su rostro",r.a.createElement("div",{style:{padding:20},id:"liveness"})))))},w=a(109);var j=function(){return r.a.createElement("div",{className:"card pl-6",style:{backgroundColor:"#03324B"}},r.a.createElement("img",{className:"card-img-top text-align:center",style:{marginTop:20,backgroundColor:"#18938B",padding:10},height:70,src:"https://www.tocbiometrics.com/img/logoTOC.svg",alt:"Card image cap"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text text-white font-weight-bold text-center"},"\xa1Te damos la bienvenida a la Demo de TOC Biometrics!")),r.a.createElement(w.b,{to:"/Form"},r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{className:"card-btn border border border-primary rounded cardtext-align:center",style:{marginBottom:20}},r.a.createElement("img",{src:"https://dev-web-plugins.s3.amazonaws.com/demo-toc-ci/static/onboarding.svg"}))),r.a.createElement("p",{className:"card-text text-white font-weight-bold text-center"},"Onboarding")))},N=(a(265),a(266),a(17));var k=function(){return r.a.createElement(f.a,{xs:24},r.a.createElement("div",{style:{backgroundColor:"#03324B"}},r.a.createElement(w.a,null,r.a.createElement(j,null),r.a.createElement(N.a,{path:"/Form",exact:!0,component:y}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[172,1,2]]]);
//# sourceMappingURL=main.cee0e039.chunk.js.map