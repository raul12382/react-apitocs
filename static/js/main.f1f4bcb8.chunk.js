(this["webpackJsonpreact-website-yt-1"]=this["webpackJsonpreact-website-yt-1"]||[]).push([[0],{172:function(e,t,a){e.exports=a(267)},267:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),l=a(39),s=a.n(l),i=a(86),d=a(75),m=a(29),u=a(272),p=a(271),b=a(168),E=a(269),f=a(270),g=a(82),h=a(273),v=a(124),x=a.n(v),O=u.a.Option,y=function(e){var t,a=p.a.useForm(),c=Object(m.a)(a,1)[0],o=Object(n.useState)(""),l=Object(m.a)(o,2),v=(l[0],l[1]),y=Object(n.useState)(""),w=Object(m.a)(y,2),j=(w[0],w[1]),N=Object(n.useState)({}),k=Object(m.a)(N,2),C=k[0],S=k[1],T=Object(n.useState)(!1),B=Object(m.a)(T,2),_=B[0],D=B[1],z=Object(n.useState)(!1),F=Object(m.a)(z,2),M=F[0],X=F[1],R=Object(n.useState)(""),I=Object(m.a)(R,2),L=(I[0],I[1]),P=Object(n.useState)(""),J=Object(m.a)(P,2),W=J[0],q=J[1],A=Object(n.useState)(""),G=Object(m.a)(A,2),K=G[0],$=G[1],H=Object(n.useState)(""),Q=Object(m.a)(H,2),U=Q[0],V=Q[1],Y=Object(n.useState)(""),Z=Object(m.a)(Y,2),ee=Z[0],te=Z[1],ae=Object(n.useState)(!1),ne=Object(m.a)(ae,2),re=ne[0],ce=ne[1],oe=Object(n.useState)(!0),le=Object(m.a)(oe,2),se=le[0],ie=le[1],de=Object(n.useState)(!0),me=Object(m.a)(de,2),ue=me[0],pe=me[1],be=Object(n.useState)(!0),Ee=Object(m.a)(be,2),fe=Ee[0],ge=Ee[1],he=function(){var e=Object(d.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return pe(!1),e.next=3,ye();case 3:a=e.sent,console.log("Session id",a),n=window.TOCautocapture,n("container",Object(i.a)({locale:"es",session_id:a,document_type:W,document_side:"back",http:!0,callback:function(e,t){b.b.success("Captura Realizada",3);var a=e,n=t;console.log(e),V(a),j(n),pe(!0),xe()},failure:function(e){b.b.error("Se ha generado el error: "+e)}},"http",!0));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ve=function(){var e=Object(d.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(W),ie(!1),e.next=4,ye();case 4:a=e.sent,console.log("Session id",a),n=window.TOCautocapture,n("containerfront",{locale:"es",session_id:a,document_type:W,document_side:"front",callback:function(e,t){b.b.success("Captura Realizada",3),console.log(t);var a=t;$(e),v(a),ie(!0),he()},failure:function(e){b.b.error("Se ha generado el error: "+e)},http:!0});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),xe=function(){var e=Object(d.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ge(!1),e.next=3,ye();case 3:a=e.sent,console.log("Session id",a),n=window.TOCliveness,n("liveness",Object(i.a)({locale:"es",session_id:a,http:!0,callback:function(e){b.b.success("Captura Realizada",3),te(e),ge(!0)},failure:function(e){b.b.error("Se ha generado el error: "+e)}},"http",!0));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Oe={padding:10},ye=function(){var e=Object(d.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("http://18.228.150.164:3001/session");case 3:return t=e.sent,console.log("Session id response",t),e.abrupt("return",t.data.session_id);case 8:e.prev=8,e.t0=e.catch(0),console.log("Error al obtener sesi\xf3n",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),we=function(){var e=Object(d.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(a=new FormData).append("id_front",K),a.append("id_back",U),a.append("selfie",ee),a.append("apiKey","433a8e1ed0dc4495974a9f95018eed8f"),a.append("documentType",W),e.next=9,x.a.post("https://sandbox-api.7oc.cl/v2/face-and-document",a);case 9:return n=e.sent,S(n.data["information from document"].mrz.data),D(!0),e.abrupt("return",n);case 15:e.prev=15,e.t0=e.catch(0),b.b.error("Error al capturar la informaci\xf3n");case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(p.a,{layout:"horizontal",form:c,onFinish:we},r.a.createElement(E.a,null,r.a.createElement(f.a,{lg:12,xs:24,style:Oe,hidden:re,className:"text-center"},r.a.createElement("div",{className:"text-center text-white border",style:{padding:10,backgroundColor:"#03324B"}},r.a.createElement("div",{className:"card-body",style:{padding:10}},r.a.createElement("p",{className:"card-text text-white "},"Para verificar su identidad se necesitan fotos de su c\xe9dula de identidad y rostro, siguiendo los pasos que te mostraremos a continuaci\xf3n.",r.a.createElement("br",null),"Evite usar accesorios como lentes o sombreros",r.a.createElement("br",null),"Seleccione el tipo de documento para comenzar con la verificaci\xf3n."))),r.a.createElement(u.a,{style:{paddingTop:10},placeholder:"Selecciona el tipo de documento",onChange:function(e){q(e),ce(!0),console.log(W)}},r.a.createElement(O,{value:"MEX1"},"MEX1"),r.a.createElement(O,{value:"MEX2"},"MEX2"),r.a.createElement(O,{value:"MEX3"},"MEX3")))),r.a.createElement(E.a,null,r.a.createElement(f.a,{lg:12,xs:24,style:Oe,className:"text-center text-white"},r.a.createElement("div",null,r.a.createElement("label",{className:"text-center text-white font-weight-bold"},"Procedimiento")),r.a.createElement(g.a,{style:{backgroundColor:"#18938B"},type:"primary",onClick:ve},"Realizar Onboarding"))),r.a.createElement(E.a,null,r.a.createElement(f.a,{lg:24,xs:24,className:"text-center",style:{alignItems:"center"}},r.a.createElement(p.a.Item,{style:{marginTop:10,marginLeft:20}},r.a.createElement(f.a,{style:{paddingTop:10},className:"text-center"},r.a.createElement(g.a,(t={className:"btn-sm",htmlType:"submit"},Object(i.a)(t,"className","text-light"),Object(i.a)(t,"style",{backgroundColor:"#18938B"}),t),"Enviar informacion capturada")),r.a.createElement(g.a,{className:"text-center text-white",style:{paddingLeft:15,backgroundColor:"#18938B"},onClick:function(){D(!0)}},"informacion escaneada"),r.a.createElement(h.a,{title:"informacion escaneada ",visible:_,onOk:function(){L("El modal se cerrara en dos segundos"),X(!0),setTimeout((function(){D(!1),X(!1)}),2e3)},confirmLoading:M,onCancel:function(){console.log("Clicked cancel button"),D(!1)}},r.a.createElement("p",null,"Apellidos Paternos: ",C["family name"]?C["family name"]:"Documento sin escanear"),r.a.createElement("br",null),r.a.createElement("p",null,"Nombre Completo: ",C.name?C.name:"Documento sin escanear"),r.a.createElement("br",null),r.a.createElement("p",null,"Nacionalidad: ",C.nationality?C.nationality:"Documento sin escanear"),r.a.createElement("br",null),r.a.createElement("p",null,"Genero: ",C.gender?C.gender:"Documento sin escanear"),r.a.createElement("br",null),r.a.createElement("p",null,"Fecha Expiraci\xf3n: ",C["expiration date"]?C["expiration date"]:"Documento sin escanear"),r.a.createElement("br",null),r.a.createElement("p",null,"Numero de documento: ",C["document number"]?C["document number"]:"Documento sin escanear"),r.a.createElement("br",null),r.a.createElement("p",null,"Fecha Nacimiento: ",C["date of birth"]?C["date of birth"]:"Documento sin escanear"))))),r.a.createElement("div",{hidden:se,className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text text-center"},"Capture su parte frontal",r.a.createElement("div",{className:"container-lg",style:{padding:20},id:"containerfront"})))),r.a.createElement("div",{hidden:ue,className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text text-center"},"Capture su parte trasera",r.a.createElement("div",{className:"container-lg",style:{padding:20},id:"container"})))),r.a.createElement("div",{hidden:fe,className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text text-center"},"Capture su rostro",r.a.createElement("div",{className:"container-lg",style:{padding:20},id:"liveness"})))))},w=a(110);var j=function(){return r.a.createElement("div",{className:"card pl-6",style:{backgroundColor:"#03324B"}},r.a.createElement("img",{className:"card-img-top text-align:center",style:{marginTop:20,backgroundColor:"#18938B",padding:10},height:70,src:"https://www.tocbiometrics.com/img/logoTOC.svg",alt:"Card image cap"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text text-white font-weight-bold text-center"},"\xa1Te damos la bienvenida a la Demo de TOC Biometrics!")),r.a.createElement(w.b,{to:"/Form"},r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{className:"card-btn border border border-primary rounded cardtext-align:center",style:{marginBottom:20}},r.a.createElement("img",{src:"https://dev-web-plugins.s3.amazonaws.com/demo-toc-ci/static/onboarding.svg"}))),r.a.createElement("p",{className:"card-text text-white font-weight-bold text-center"},"Onboarding")))},N=(a(265),a(266),a(17));var k=function(){return r.a.createElement(f.a,{xs:24},r.a.createElement("div",{style:{backgroundColor:"#03324B"}},r.a.createElement(w.a,null,r.a.createElement(j,null),r.a.createElement(N.a,{path:"/Form",exact:!0,component:y}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[172,1,2]]]);
//# sourceMappingURL=main.f1f4bcb8.chunk.js.map