(this["webpackJsonpreact-website-yt-1"]=this["webpackJsonpreact-website-yt-1"]||[]).push([[0],{163:function(e,t,a){e.exports=a(255)},255:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),s=a(116),i=a(39),l=a.n(i),u=a(117),d=a(70),m=a(22),p=a(261),b=a(260),f=a(158),h=a(259),g=a(257),E=a(76),v=a(258),O=a(262),j=a(118),w=a.n(j);var x=function(){return r.a.createElement("div",{className:"card pl-6",style:{backgroundColor:"#03324B"}},r.a.createElement("img",{className:"card-img-top",style:{marginTop:20,backgroundColor:"#18938B",padding:10},height:70,src:"https://www.tocbiometrics.com/img/logoTOC.svg",alt:"Card image cap"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text text-white font-weight-bold text-center"},"\xa1Te damos la bienvenida a la Demo de TOC Biometrics!")),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{className:"card-btn border border border-primary rounded cardtext-align:center",style:{marginBottom:20}},r.a.createElement("img",{src:"https://dev-web-plugins.s3.amazonaws.com/demo-toc-ci/static/onboarding.svg"}))),r.a.createElement("p",{className:"card-text text-white font-weight-bold text-center"},"Onboarding"))},y=p.a.Option,k=function(e){var t,a=b.a.useForm(),c=Object(m.a)(a,1)[0],o=Object(n.useState)(""),i=Object(m.a)(o,2),j=i[0],k=i[1],N=Object(n.useState)(""),S=Object(m.a)(N,2),C=S[0],_=S[1],B=Object(n.useState)(""),T=Object(m.a)(B,2),D=T[0],z=T[1],M=Object(n.useState)({}),R=Object(m.a)(M,2),F=R[0],X=R[1],A=Object(n.useState)(!1),I=Object(m.a)(A,2),J=I[0],P=I[1],W=Object(n.useState)(!1),q=Object(m.a)(W,2),G=q[0],K=q[1],L=Object(n.useState)(""),$=Object(m.a)(L,2),H=($[0],$[1]),Q=Object(n.useState)(""),U=Object(m.a)(Q,2),V=U[0],Y=U[1],Z=Object(n.useState)(""),ee=Object(m.a)(Z,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(""),re=Object(m.a)(ne,2),ce=re[0],oe=re[1],se=Object(n.useState)(""),ie=Object(m.a)(se,2),le=ie[0],ue=ie[1],de=Object(n.useState)(!1),me=Object(m.a)(de,2),pe=me[0],be=me[1],fe=Object(n.useState)(!0),he=Object(m.a)(fe,2),ge=he[0],Ee=he[1],ve=Object(n.useState)(!0),Oe=Object(m.a)(ve,2),je=Oe[0],we=Oe[1],xe=Object(n.useState)(!0),ye=Object(m.a)(xe,2),ke=ye[0],Ne=ye[1],Se=Object(n.useState)(!1),Ce=Object(m.a)(Se,2),_e=Ce[0],Be=(Ce[1],Object(n.useState)(null)),Te=Object(m.a)(Be,2),De=(Te[0],Te[1],Object(n.useRef)(null),function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return we(!1),e.next=3,Re();case 3:a=e.sent,console.log("Session id",a),n=window.TOCautocapture,n("container",{locale:"es",session_id:a,document_type:V,document_side:"back",callback:function(e,t){f.b.success("Captura Realizada",3);var a=e,n=t;console.log(e),oe(a),_(n),we(!0),Me(),Fe()},failure:function(e){var t=e;405===t?(Object(u.a)("e"),t="prueba de error"):(Object(u.a)("e"),t="prueba de error 2"),f.b.error(t)},http:!0});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),ze=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Ee(!1),e.next=3,Re();case 3:a=e.sent,console.log("Session id",a),n=window.TOCautocapture,n("containerfront",{locale:"es",session_id:a,document_type:V,document_side:"front",callback:function(e,t){f.b.success("Captura Realizada",3),console.log(t);var a=t;ae(e),k(a),Ee(!0),De()},failure:function(e){console.log(e);var t=e;t="405"===t?"prueba de error":"prueba de error 2",f.b.error(t)},http:!0});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Me=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Ne(!1),e.next=3,Re();case 3:t=e.sent,console.log("Session id",t),a=window.TOCliveness,a("liveness",{locale:"es",http:!0,session_id:t,callback:function(e,t){f.b.success("Captura Realizada",3);var a=t;ue(e),z(a),Ne(!0)},retry_on_timeout:!0,failure:function(e){f.b.error("Se ha generado el error: "+e),console.log("el error es: "+e)}});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Re=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("https://node-js-session.herokuapp.com/session");case 3:return t=e.sent,console.log("Session id response",t),e.abrupt("return",t.data.session_id);case 8:e.prev=8,e.t0=e.catch(0),console.log("Error al obtener sesi\xf3n",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),Fe=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(a=new FormData).append("id_front",te),a.append("id_back",ce),a.append("selfie",le),a.append("apiKey","433a8e1ed0dc4495974a9f95018eed8f"),a.append("documentType",V),e.next=9,w.a.post("https://sandbox-api.7oc.cl/v2/face-and-document",a);case 9:return n=e.sent,X(n.data["information from document"].mrz.data),f.b.success("Datos enviados correctamente",3),P(!0),e.abrupt("return",n);case 16:e.prev=16,e.t0=e.catch(0),f.b.error("Error al capturar la informaci\xf3n, realice una nueva verificaci\xf3n se ha producido el error: ");case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(b.a,{form:c,onFinish:Fe},r.a.createElement("div",{hidden:_e},r.a.createElement(x,null)),r.a.createElement("div",{hidden:_e,className:""},r.a.createElement("div",{style:{textAlign:"center"},className:"text-center"},r.a.createElement("div",{className:"text-center text-white border",style:{padding:10,backgroundColor:"#03324B"}},r.a.createElement("div",{style:{padding:10},className:"text-center"},r.a.createElement("p",{className:"text-white text-center"},"Para verificar su identidad se necesitan fotos de su c\xe9dula de identidad y rostro, siguiendo los pasos que te mostraremos a continuaci\xf3n.",r.a.createElement("br",null),"Evite usar accesorios como lentes o sombreros",r.a.createElement("br",null),"Seleccione el tipo de documento para comenzar con la verificaci\xf3n."))),r.a.createElement(p.a,{style:{paddingTop:10},hidden:pe,placeholder:"Selecciona el tipo de documento",onChange:function(e){Y(e),be(!0),console.log(V)}},r.a.createElement(y,{value:"MEX1"},r.a.createElement(h.a,{preview:!1,src:"https://demo.toc.ai/static/id_mex1.png"})),r.a.createElement(y,{value:"MEX2"},r.a.createElement(h.a,{preview:!1,src:"https://demo.toc.ai/static/id_mex2.png"},"MEX2")),r.a.createElement(y,{value:"MEX3"},r.a.createElement(h.a,{preview:!1,src:"https://demo.toc.ai/static/id_mex3.png"},"MEX3"))))),r.a.createElement(g.a,{lg:24,xs:24,className:"text-center",style:{alignItems:"center"}},r.a.createElement(b.a.Item,{style:{marginTop:10}},r.a.createElement(g.a,{style:{paddingBottom:20}},r.a.createElement(E.a,{style:{backgroundColor:"#18938B"},type:"primary",onClick:ze},"Realizar Onboarding")),r.a.createElement(E.a,(t={className:"btn-sm",htmlType:"submit"},Object(s.a)(t,"className","text-light text-center"),Object(s.a)(t,"style",{backgroundColor:"#18938B"}),t),"Enviar informacion")),r.a.createElement(g.a,{style:{paddingBottom:20,textAlign:"center"},className:"text-center"},r.a.createElement(E.a,{className:"text-white",style:{backgroundColor:"#18938B"},onClick:function(){P(!0)}},"informacion escaneada"))),r.a.createElement(v.a,{hidden:_e}),r.a.createElement(O.a,{title:"informacion escaneada ",visible:J,onOk:function(){H("El modal se cerrara en dos segundos"),K(!0),setTimeout((function(){P(!1),K(!1)}),2e3)},confirmLoading:G,onCancel:function(){console.log("Clicked cancel button"),P(!1)}},"   ",r.a.createElement("p",null,"Resultado Biometrico: ",F["biometric result"]),r.a.createElement("p",null,"Apellidos Paternos: ",F["family name"]?F["family name"]:"Documento sin escanear"),r.a.createElement("br",null),r.a.createElement("p",null,"Nombre Completo: ",F.name?F.name:"Documento sin escanear"),r.a.createElement("br",null),r.a.createElement("p",null,"Nacionalidad: ",F.nationality?F.nationality:"Documento sin escanear"),r.a.createElement("br",null),r.a.createElement("p",null,"Genero: ",F.gender?F.gender:"Documento sin escanear"),r.a.createElement("br",null),r.a.createElement("p",null,"Fecha Expiraci\xf3n: ",F["expiration date"]?F["expiration date"]:"Documento sin escanear"),r.a.createElement("br",null),r.a.createElement("p",null,"Numero de documento: ",F["document number"]?F["document number"]:"Documento sin escanear"),r.a.createElement("br",null),r.a.createElement("p",null,"Fecha Nacimiento: ",F["date of birth"]?F["date of birth"]:"Documento sin escanear"),r.a.createElement("div",{className:"text-center"},r.a.createElement(h.a,{src:C,width:50,height:50}),r.a.createElement(h.a,{src:j,width:50,height:50}),r.a.createElement(h.a,{src:D,width:50,height:50})))),r.a.createElement("div",{className:"container container-fluid",hidden:ge,style:{height:"50%",textAlign:"center",marginBottom:"auto",marginTop:"auto"},id:"containerfront"}),r.a.createElement("div",{className:"container container-fluid",hidden:je,style:{height:"50%"},id:"container"}),r.a.createElement("div",{className:"container container-fluid",hidden:ke,style:{height:"50%"},id:"liveness"}))};a(253),a(254);var N=function(e){return r.a.createElement(k,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[163,1,2]]]);
//# sourceMappingURL=main.29bfdfd0.chunk.js.map