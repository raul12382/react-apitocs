(this["webpackJsonpreact-website-yt-1"]=this["webpackJsonpreact-website-yt-1"]||[]).push([[0],{187:function(e,t,a){e.exports=a(351)},351:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),o=a.n(c),s=a(132),i=a(39),l=a.n(i),u=a(133),d=a(73),m=a(21),p=a(358),b=a(357),g=a(182),E=a(356),h=a(353),f=a(81),v=a(354),O=a(355),j=a(359),w=a(134),x=a.n(w);var y=function(){return r.a.createElement("div",{className:"card pl-6",style:{backgroundColor:"#03324B"}},r.a.createElement("img",{className:"card-img-top",style:{marginTop:20,backgroundColor:"#18938B",padding:10},height:70,src:"https://www.tocbiometrics.com/img/logoTOC.svg",alt:"Card image cap"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text text-white font-weight-bold text-center"},"\xa1Te damos la bienvenida a la Demo de TOC Biometrics!")),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{className:"card-btn border border border-primary rounded cardtext-align:center",style:{marginBottom:20}},r.a.createElement("img",{src:"https://dev-web-plugins.s3.amazonaws.com/demo-toc-ci/static/onboarding.svg"}))),r.a.createElement("p",{className:"card-text text-white font-weight-bold text-center"},"Onboarding"))},N=p.a.Option,S=function(e){var t,a=b.a.useForm(),c=Object(m.a)(a,1)[0],o=Object(n.useState)(""),i=Object(m.a)(o,2),w=i[0],S=i[1],k=Object(n.useState)(""),C=Object(m.a)(k,2),_=C[0],B=C[1],T=Object(n.useState)(""),D=Object(m.a)(T,2),z=D[0],M=D[1],R=Object(n.useState)({}),A=Object(m.a)(R,2),F=A[0],X=A[1],I=Object(n.useState)(!1),J=Object(m.a)(I,2),P=J[0],W=J[1],q=Object(n.useState)(!1),G=Object(m.a)(q,2),K=G[0],L=G[1],V=Object(n.useState)(""),$=Object(m.a)(V,2),H=($[0],$[1]),Q=Object(n.useState)(""),U=Object(m.a)(Q,2),Y=U[0],Z=U[1],ee=Object(n.useState)(""),te=Object(m.a)(ee,2),ae=te[0],ne=te[1],re=Object(n.useState)(""),ce=Object(m.a)(re,2),oe=ce[0],se=ce[1],ie=Object(n.useState)(""),le=Object(m.a)(ie,2),ue=le[0],de=le[1],me=Object(n.useState)(""),pe=Object(m.a)(me,2),be=pe[0],ge=pe[1],Ee=Object(n.useState)(!1),he=Object(m.a)(Ee,2),fe=he[0],ve=he[1],Oe=Object(n.useState)(!0),je=Object(m.a)(Oe,2),we=je[0],xe=je[1],ye=Object(n.useState)(!0),Ne=Object(m.a)(ye,2),Se=Ne[0],ke=Ne[1],Ce=Object(n.useState)(!0),_e=Object(m.a)(Ce,2),Be=_e[0],Te=_e[1],De=Object(n.useState)(!1),ze=Object(m.a)(De,2),Me=ze[0],Re=(ze[1],Object(n.useState)(!0)),Ae=Object(m.a)(Re,2),Fe=Ae[0],Xe=Ae[1],Ie=(Object(n.useRef)(null),function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ke(!1),e.next=3,We();case 3:a=e.sent,console.log("Session id",a),n=window.TOCautocapture,n("container",{locale:"es",session_id:a,document_type:Y,document_side:"back",callback:function(e,t){g.b.success("Captura Realizada",3);var a=e,n=t;console.log(e),se(a),B(n),ke(!0),Pe()},failure:function(e){var t=e;405===t?(Object(u.a)("e"),t="prueba de error"):(Object(u.a)("e"),t="prueba de error 2"),g.b.error(t)},http:!0});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Je=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return xe(!1),e.next=3,We();case 3:a=e.sent,console.log("Session id",a),n=window.TOCautocapture,n("containerfront",{locale:"es",session_id:a,document_type:Y,document_side:"front",callback:function(e,t){g.b.success("Captura Realizada",3),console.log(t);var a=t;ne(e),S(a),xe(!0),Ie()},failure:function(e,t){console.log(t);var a=e;a="405"===a?"prueba de error":"prueba de error 2",g.b.error(a)},http:!0});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Pe=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Te(!1),e.next=3,We();case 3:t=e.sent,console.log("Session id",t),a=window.TOCliveness,a("liveness",{locale:"es",http:!0,session_id:t,callback:function(e,t,a){g.b.success("Captura Realizada",3);var n=a;console.log("ubicaciones",n);var r=t;ge(e),M(r),de(n),Te(!0)},retry_on_timeout:!0,failure:function(e){g.b.error("Se ha generado el error: "+e),console.log("el error es: "+e)}});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),We=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://node-js-session.herokuapp.com/session");case 3:return t=e.sent,console.log("Session id response",t),e.abrupt("return",t.data.session_id);case 8:e.prev=8,e.t0=e.catch(0),console.log("Error al obtener sesi\xf3n",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),qe=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Xe(!1),(t=new FormData).append("id_front",ae),t.append("id_back",oe),t.append("selfie",be),t.append("apiKey","7223f02c726b4869b773dcaa03492dd1"),t.append("documentType",Y),e.next=9,x.a.post("https://sandbox-api.7oc.cl/v2/face-and-document",t);case 9:a=e.sent,X(a.data),console.log(F),"200"==F.status?g.b.success("Validaci\xf3n positiva"):g.b.error("ha ocurrido el sigiuiente error: "+F.status),W(!0),Xe(!0);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ge=navigator.userAgent;return console.log("el navegador es: "+Ge),r.a.createElement("div",null,r.a.createElement(b.a,{form:c,onFinish:qe},r.a.createElement("div",{hidden:Me},r.a.createElement(y,null)),r.a.createElement("label",{style:{color:"blue"}},"tu navegador es: ",Ge),r.a.createElement("label",{style:{color:"blue"}},"ubicacion es: ",ue),r.a.createElement("div",{hidden:Me,className:""},r.a.createElement("div",{style:{textAlign:"center"},className:"text-center"},r.a.createElement("div",{className:"text-center text-white border",style:{padding:10,backgroundColor:"#03324B"}},r.a.createElement("div",{style:{padding:10},className:"text-center"},r.a.createElement("p",{className:"text-white text-center"},"Para verificar su identidad se necesitan fotos de su c\xe9dula de identidad y rostro, siguiendo los pasos que te mostraremos a continuaci\xf3n.",r.a.createElement("br",null),"Evite usar accesorios como lentes o sombreros",r.a.createElement("br",null),"Seleccione el tipo de documento para comenzar con la verificaci\xf3n."))),r.a.createElement(p.a,{style:{paddingTop:10},hidden:fe,placeholder:"Selecciona el tipo de documento",onChange:function(e){Z(e),ve(!0),console.log(Y)}},r.a.createElement(N,{value:"MEX1"},r.a.createElement(E.a,{preview:!1,src:"https://demo.toc.ai/static/id_mex1.png"})),r.a.createElement(N,{value:"MEX2"},r.a.createElement(E.a,{preview:!1,src:"https://demo.toc.ai/static/id_mex2.png"},"MEX2")),r.a.createElement(N,{value:"MEX3"},r.a.createElement(E.a,{preview:!1,src:"https://demo.toc.ai/static/id_mex3.png"},"MEX3"))))),r.a.createElement(h.a,{lg:24,xs:24,className:"text-center",style:{alignItems:"center"}},r.a.createElement(b.a.Item,{style:{marginTop:10}},r.a.createElement(h.a,{style:{paddingBottom:20}},r.a.createElement(f.a,{style:{backgroundColor:"#18938B"},type:"primary",onClick:Je},"Realizar Onboarding")),r.a.createElement(f.a,(t={className:"btn-sm",htmlType:"submit"},Object(s.a)(t,"className","text-light text-center"),Object(s.a)(t,"style",{backgroundColor:"#18938B"}),t),"Enviar informacion")),r.a.createElement(h.a,{style:{paddingBottom:20,textAlign:"center"},className:"text-center"},r.a.createElement(f.a,{className:"text-white",style:{backgroundColor:"#18938B"},onClick:function(){W(!0)}},"informacion escaneada"))),r.a.createElement(v.a,{hidden:Me},r.a.createElement("div",{className:"example",hidden:Fe},r.a.createElement(O.a,null))),r.a.createElement(j.a,{title:"informacion escaneada ",visible:P,onOk:function(){H("El modal se cerrara en dos segundos"),L(!0),setTimeout((function(){W(!1),L(!1)}),2e3)},confirmLoading:K,onCancel:function(){console.log("Clicked cancel button"),W(!1)}},"   ",r.a.createElement("p",null,"Resultado Biometrico: ",F["biometric result"]),r.a.createElement("p",null,"Apellidos Paternos: ",F["family name"]?F["family name"]:"Documento sin escanear"),r.a.createElement("br",null),r.a.createElement("p",null,"Nombre Completo: ",F.name?F.name:"Documento sin escanear"),r.a.createElement("br",null),r.a.createElement("p",null,"Nacionalidad: ",F.nationality?F.nationality:"Documento sin escanear"),r.a.createElement("br",null),r.a.createElement("p",null,"Genero: ",F.gender?F.gender:"Documento sin escanear"),r.a.createElement("br",null),r.a.createElement("p",null,"Fecha Expiraci\xf3n: ",F["expiration date"]?F["expiration date"]:"Documento sin escanear"),r.a.createElement("br",null),r.a.createElement("p",null,"Numero de documento: ",F["document number"]?F["document number"]:"Documento sin escanear"),r.a.createElement("br",null),r.a.createElement("p",null,"Fecha Nacimiento: ",F["date of birth"]?F["date of birth"]:"Documento sin escanear"),r.a.createElement("div",{className:"text-center"},r.a.createElement(E.a,{src:_,width:50,height:50}),r.a.createElement(E.a,{src:w,width:50,height:50}),r.a.createElement(E.a,{src:z,width:50,height:50})))),r.a.createElement("div",{className:"container container-fluid",hidden:we,style:{height:"50%",textAlign:"center",marginBottom:"auto",marginTop:"auto"}},r.a.createElement("div",{id:"containerfront"})),r.a.createElement("div",{className:"container container-fluid",hidden:Se,style:{height:"50%"}},r.a.createElement("div",{id:"container"})),r.a.createElement("div",{className:"container container-fluid",hidden:Be,style:{height:"50%"}},r.a.createElement("div",{id:"liveness"})))};a(349),a(350);var k=function(e){return r.a.createElement(S,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[187,1,2]]]);
//# sourceMappingURL=main.2fcc4a41.chunk.js.map