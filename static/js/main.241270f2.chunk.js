(this["webpackJsonpreact-website-yt-1"]=this["webpackJsonpreact-website-yt-1"]||[]).push([[0],{162:function(e,t,a){e.exports=a(254)},254:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),i=a(116),s=a(39),l=a.n(s),d=a(70),u=a(23),m=a(260),p=a(259),b=a(157),f=a(256),g=a(257),h=a(258),E=a(76),v=a(261),O=a(117),x=a.n(O);var w=function(){return r.a.createElement("div",{className:"card pl-6",style:{backgroundColor:"#03324B"}},r.a.createElement("img",{className:"card-img-top text-align:center",style:{marginTop:20,backgroundColor:"#18938B",padding:10},height:70,src:"https://www.tocbiometrics.com/img/logoTOC.svg",alt:"Card image cap"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text text-white font-weight-bold text-center"},"\xa1Te damos la bienvenida a la Demo de TOC Biometrics!")),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{className:"card-btn border border border-primary rounded cardtext-align:center",style:{marginBottom:20}},r.a.createElement("img",{src:"https://dev-web-plugins.s3.amazonaws.com/demo-toc-ci/static/onboarding.svg"}))),r.a.createElement("p",{className:"card-text text-white font-weight-bold text-center"},"Onboarding"))},y=m.a.Option,j=function(e){var t,a=p.a.useForm(),c=Object(u.a)(a,1)[0],o=Object(n.useState)(""),s=Object(u.a)(o,2),O=(s[0],s[1]),j=Object(n.useState)(""),S=Object(u.a)(j,2),k=(S[0],S[1]),N=Object(n.useState)({}),C=Object(u.a)(N,2),B=C[0],T=C[1],_=Object(n.useState)(!1),D=Object(u.a)(_,2),z=D[0],M=D[1],F=Object(n.useState)(!1),R=Object(u.a)(F,2),X=R[0],A=R[1],I=Object(n.useState)(""),P=Object(u.a)(I,2),J=(P[0],P[1]),W=Object(n.useState)(""),q=Object(u.a)(W,2),G=q[0],K=q[1],L=Object(n.useState)(""),$=Object(u.a)(L,2),H=$[0],Q=$[1],U=Object(n.useState)(""),V=Object(u.a)(U,2),Y=V[0],Z=V[1],ee=Object(n.useState)(""),te=Object(u.a)(ee,2),ae=te[0],ne=te[1],re=Object(n.useState)(!1),ce=Object(u.a)(re,2),oe=ce[0],ie=ce[1],se=Object(n.useState)(!0),le=Object(u.a)(se,2),de=le[0],ue=le[1],me=Object(n.useState)(!0),pe=Object(u.a)(me,2),be=pe[0],fe=pe[1],ge=Object(n.useState)(!0),he=Object(u.a)(ge,2),Ee=he[0],ve=he[1],Oe=Object(n.useState)(!1),xe=Object(u.a)(Oe,2),we=xe[0],ye=xe[1],je=Object(n.useState)(null),Se=Object(u.a)(je,2),ke=(Se[0],Se[1],function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return fe(!1),e.next=3,Be();case 3:a=e.sent,console.log("Session id",a),n=window.TOCautocapture,n("container",{locale:"es",session_id:"2584e90c975b4ea1a2278ede44e94f9d",document_type:G,document_side:"back",callback:function(e,t){b.b.success("Captura Realizada",3);var a=e,n=t;console.log(e),Z(a),k(n),fe(!0),Ce()},failure:function(e){b.b.error("Se ha generado el error: "+e)},http:!0});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Ne=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(G),ye(!0),ue(!1),e.next=5,Be();case 5:a=e.sent,console.log("Session id",a),n=window.TOCautocapture,n("containerfront",{locale:"es",session_id:"2584e90c975b4ea1a2278ede44e94f9d",document_type:G,document_side:"front",callback:function(e,t){b.b.success("Captura Realizada",3),console.log(t);var a=t;Q(e),O(a),ue(!0),ke()},failure:function(e){b.b.error("Se ha generado el error: "+e)},http:!0});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ce=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ve(!1),e.next=3,Be();case 3:a=e.sent,console.log("Session id",a),n=window.TOCliveness,n("liveness",{locale:"es",session_id:"2584e90c975b4ea1a2278ede44e94f9d",callback:function(e){b.b.success("Captura Realizada",3),ne(e),Te(),ve(!0)},failure:function(e){b.b.error("Se ha generado el error: "+e)},http:!0});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Be=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("http://54.232.52.181:3001/session");case 3:return t=e.sent,console.log("Session id response",t),e.abrupt("return",t.data.session_id);case 8:e.prev=8,e.t0=e.catch(0),console.log("Error al obtener sesi\xf3n",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),Te=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(a=new FormData).append("id_front",H),a.append("id_back",Y),a.append("selfie",ae),a.append("apiKey","433a8e1ed0dc4495974a9f95018eed8f"),a.append("documentType",G),e.next=9,x.a.post("https://sandbox-api.7oc.cl/v2/face-and-document",a);case 9:return n=e.sent,T(n.data["information from document"].mrz.data),b.b.success("Datos enviados correctamente",3),M(!0),e.abrupt("return",n);case 16:e.prev=16,e.t0=e.catch(0),b.b.error("Error al capturar la informaci\xf3n");case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(p.a,{form:c,onFinish:Te},r.a.createElement("div",{hidden:we},r.a.createElement(w,null)),r.a.createElement(f.a,{hidden:we},r.a.createElement(g.a,{lg:12,xs:24,style:{textAlign:"center",display:"inline-block"},className:"text-center"},r.a.createElement("div",{className:"text-center text-white border",style:{padding:10,backgroundColor:"#03324B"}},r.a.createElement("div",{className:"card-body",style:{padding:10}},r.a.createElement("p",{className:"card-text text-white col d-flex"},"Para verificar su identidad se necesitan fotos de su c\xe9dula de identidad y rostro, siguiendo los pasos que te mostraremos a continuaci\xf3n.",r.a.createElement("br",null),"Evite usar accesorios como lentes o sombreros",r.a.createElement("br",null),"Seleccione el tipo de documento para comenzar con la verificaci\xf3n."))),r.a.createElement(m.a,{style:{paddingTop:10},hidden:oe,placeholder:"Selecciona el tipo de documento",onChange:function(e){K(e),ie(!0),console.log(G)}},r.a.createElement(y,{value:"MEX1"},r.a.createElement(h.a,{preview:!1,src:"https://demo.toc.ai/static/id_mex1.png"})),r.a.createElement(y,{value:"MEX2"},r.a.createElement(h.a,{preview:!1,src:"https://demo.toc.ai/static/id_mex2.png"},"MEX2")),r.a.createElement(y,{value:"MEX3"},r.a.createElement(h.a,{preview:!1,src:"https://demo.toc.ai/static/id_mex3.png"},"MEX3"))))),r.a.createElement(f.a,{hidden:we},r.a.createElement(g.a,{lg:12,xs:24,style:{padding:10},className:"text-center text-white"},r.a.createElement("div",null,r.a.createElement("label",{className:"text-center text-white font-weight-bold"},"Procedimiento")),r.a.createElement(E.a,{style:{backgroundColor:"#18938B",alignItems:"center"},type:"primary",onClick:Ne},"Realizar Onboarding"))),r.a.createElement(f.a,{hidden:we},r.a.createElement(g.a,{lg:24,xs:24,className:"text-center",style:{alignItems:"center"}},r.a.createElement(p.a.Item,{style:{marginTop:10}},r.a.createElement(E.a,(t={className:"btn-sm",htmlType:"submit"},Object(i.a)(t,"className","text-light text-center"),Object(i.a)(t,"style",{backgroundColor:"#18938B"}),t),"Enviar informacion")),r.a.createElement(g.a,{style:{paddingBottom:20,textAlign:"center"},className:"text-center"},r.a.createElement(E.a,{className:"text-white",style:{backgroundColor:"#18938B"},onClick:function(){M(!0)}},"informacion escaneada")))),r.a.createElement(v.a,{title:"informacion escaneada ",visible:z,onOk:function(){J("El modal se cerrara en dos segundos"),A(!0),setTimeout((function(){M(!1),A(!1)}),2e3)},confirmLoading:X,onCancel:function(){console.log("Clicked cancel button"),M(!1)}},"   ",r.a.createElement("p",null,"Resultado Biometrico: ",B["biometric result"]),r.a.createElement("p",null,"Apellidos Paternos: ",B["family name"]?B["family name"]:"Documento sin escanear"),r.a.createElement("br",null),r.a.createElement("p",null,"Nombre Completo: ",B.name?B.name:"Documento sin escanear"),r.a.createElement("br",null),r.a.createElement("p",null,"Nacionalidad: ",B.nationality?B.nationality:"Documento sin escanear"),r.a.createElement("br",null),r.a.createElement("p",null,"Genero: ",B.gender?B.gender:"Documento sin escanear"),r.a.createElement("br",null),r.a.createElement("p",null,"Fecha Expiraci\xf3n: ",B["expiration date"]?B["expiration date"]:"Documento sin escanear"),r.a.createElement("br",null),r.a.createElement("p",null,"Numero de documento: ",B["document number"]?B["document number"]:"Documento sin escanear"),r.a.createElement("br",null),r.a.createElement("p",null,"Fecha Nacimiento: ",B["date of birth"]?B["date of birth"]:"Documento sin escanear"))),r.a.createElement("div",{className:"container container-fluid",hidden:de,style:{height:100,textAlign:"center",marginBottom:"auto",marginTop:"auto"},id:"containerfront"}),r.a.createElement("div",{className:"container container-fluid",hidden:be,style:{height:100},id:"container"}),r.a.createElement("div",{className:"container container-fluid",hidden:Ee,style:{height:100},id:"liveness"}))};a(252),a(253);var S=function(e){return r.a.createElement(j,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[162,1,2]]]);
//# sourceMappingURL=main.241270f2.chunk.js.map