(this["webpackJsonpreact-website-yt-1"]=this["webpackJsonpreact-website-yt-1"]||[]).push([[0],{163:function(e,t,a){e.exports=a(255)},255:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),i=a(116),s=a(39),l=a.n(s),m=(a(117),a(70)),d=a(22),u=a(261),p=a(260),b=a(158),E=a(259),h=a(257),g=a(76),f=a(258),v=a(262),O=a(118),j=a.n(O);var x=function(){return r.a.createElement("div",{className:"card pl-6",style:{backgroundColor:"#03324B"}},r.a.createElement("img",{className:"card-img-top",style:{marginTop:20,backgroundColor:"#18938B",padding:10},height:70,src:"https://www.tocbiometrics.com/img/logoTOC.svg",alt:"Card image cap"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text text-white font-weight-bold text-center"},"\xa1Te damos la bienvenida a la Demo de TOC Biometrics!")),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{className:"card-btn border border border-primary rounded cardtext-align:center",style:{marginBottom:20}},r.a.createElement("img",{src:"https://dev-web-plugins.s3.amazonaws.com/demo-toc-ci/static/onboarding.svg"}))),r.a.createElement("p",{className:"card-text text-white font-weight-bold text-center"},"Onboarding"))},w=u.a.Option,y=function(e){var t,a=p.a.useForm(),c=Object(d.a)(a,1)[0],o=Object(n.useState)(""),s=Object(d.a)(o,2),O=s[0],y=(s[1],Object(n.useState)("")),N=Object(d.a)(y,2),S=N[0],k=(N[1],Object(n.useState)("")),C=Object(d.a)(k,2),B=C[0],T=C[1],D=Object(n.useState)({}),_=Object(d.a)(D,2),M=_[0],z=_[1],F=Object(n.useState)(!1),X=Object(d.a)(F,2),A=X[0],R=X[1],I=Object(n.useState)(!1),J=Object(d.a)(I,2),P=J[0],W=J[1],q=Object(n.useState)(""),G=Object(d.a)(q,2),K=(G[0],G[1]),L=Object(n.useState)(""),$=Object(d.a)(L,2),H=$[0],Q=$[1],U=Object(n.useState)(""),V=Object(d.a)(U,2),Y=V[0],Z=(V[1],Object(n.useState)("")),ee=Object(d.a)(Z,2),te=ee[0],ae=(ee[1],Object(n.useState)("")),ne=Object(d.a)(ae,2),re=ne[0],ce=ne[1],oe=Object(n.useState)(!1),ie=Object(d.a)(oe,2),se=ie[0],le=ie[1],me=Object(n.useState)(!0),de=Object(d.a)(me,2),ue=de[0],pe=(de[1],Object(n.useState)(!0)),be=Object(d.a)(pe,2),Ee=be[0],he=(be[1],Object(n.useState)(!0)),ge=Object(d.a)(he,2),fe=ge[0],ve=ge[1],Oe=Object(n.useState)(!1),je=Object(d.a)(Oe,2),xe=je[0],we=(je[1],Object(n.useState)(null)),ye=Object(d.a)(we,2),Ne=(ye[0],ye[1],Object(n.useRef)(null),function(){var e=Object(m.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ve(!1),e.next=3,Se();case 3:t=e.sent,console.log("Session id",t),a=window.TOCliveness,a("liveness",{locale:"es",http:!0,session_id:t,callback:function(e,t){b.b.success("Captura Realizada",3);var a=t;ce(e),T(a),ve(!0)},retry_on_timeout:!0,failure:function(e){b.b.error("Se ha generado el error: "+e),console.log("el error es: "+e)}});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),Se=function(){var e=Object(m.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("https://node-js-session.herokuapp.com/session");case 3:return t=e.sent,console.log("Session id response",t),e.abrupt("return",t.data.session_id);case 8:e.prev=8,e.t0=e.catch(0),console.log("Error al obtener sesi\xf3n",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),ke=function(){var e=Object(m.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(a=new FormData).append("id_front",Y),a.append("id_back",te),a.append("selfie",re),a.append("apiKey","433a8e1ed0dc4495974a9f95018eed8f"),a.append("documentType",H),e.next=9,j.a.post("https://sandbox-api.7oc.cl/v2/face-and-document",a);case 9:return n=e.sent,z(n.data["information from document"].mrz.data),b.b.success("Datos enviados correctamente",3),R(!0),e.abrupt("return",n);case 16:e.prev=16,e.t0=e.catch(0),b.b.error("Error al capturar la informaci\xf3n, realice una nueva verificaci\xf3n se ha producido el error: ");case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(p.a,{form:c,onFinish:ke},r.a.createElement("div",{hidden:xe},r.a.createElement(x,null)),r.a.createElement("div",{hidden:xe,className:""},r.a.createElement("div",{style:{textAlign:"center"},className:"text-center"},r.a.createElement("div",{className:"text-center text-white border",style:{padding:10,backgroundColor:"#03324B"}},r.a.createElement("div",{style:{padding:10},className:"text-center"},r.a.createElement("p",{className:"text-white text-center"},"Para verificar su identidad se necesitan fotos de su c\xe9dula de identidad y rostro, siguiendo los pasos que te mostraremos a continuaci\xf3n.",r.a.createElement("br",null),"Evite usar accesorios como lentes o sombreros",r.a.createElement("br",null),"Seleccione el tipo de documento para comenzar con la verificaci\xf3n."))),r.a.createElement(u.a,{style:{paddingTop:10},hidden:se,placeholder:"Selecciona el tipo de documento",onChange:function(e){Q(e),le(!0),console.log(H)}},r.a.createElement(w,{value:"MEX1"},r.a.createElement(E.a,{preview:!1,src:"https://demo.toc.ai/static/id_mex1.png"})),r.a.createElement(w,{value:"MEX2"},r.a.createElement(E.a,{preview:!1,src:"https://demo.toc.ai/static/id_mex2.png"},"MEX2")),r.a.createElement(w,{value:"MEX3"},r.a.createElement(E.a,{preview:!1,src:"https://demo.toc.ai/static/id_mex3.png"},"MEX3"))))),r.a.createElement(h.a,{lg:24,xs:24,className:"text-center",style:{alignItems:"center"}},r.a.createElement(p.a.Item,{style:{marginTop:10}},r.a.createElement(h.a,{style:{paddingBottom:20}},r.a.createElement(g.a,{style:{backgroundColor:"#18938B"},type:"primary",onClick:Ne},"Realizar Onboarding")),r.a.createElement(g.a,(t={className:"btn-sm",htmlType:"submit"},Object(i.a)(t,"className","text-light text-center"),Object(i.a)(t,"style",{backgroundColor:"#18938B"}),t),"Enviar informacion")),r.a.createElement(h.a,{style:{paddingBottom:20,textAlign:"center"},className:"text-center"},r.a.createElement(g.a,{className:"text-white",style:{backgroundColor:"#18938B"},onClick:function(){R(!0)}},"informacion escaneada"))),r.a.createElement(f.a,{hidden:xe}),r.a.createElement(v.a,{title:"informacion escaneada ",visible:A,onOk:function(){K("El modal se cerrara en dos segundos"),W(!0),setTimeout((function(){R(!1),W(!1)}),2e3)},confirmLoading:P,onCancel:function(){console.log("Clicked cancel button"),R(!1)}},"   ",r.a.createElement("p",null,"Resultado Biometrico: ",M["biometric result"]),r.a.createElement("p",null,"Apellidos Paternos: ",M["family name"]?M["family name"]:"Documento sin escanear"),r.a.createElement("br",null),r.a.createElement("p",null,"Nombre Completo: ",M.name?M.name:"Documento sin escanear"),r.a.createElement("br",null),r.a.createElement("p",null,"Nacionalidad: ",M.nationality?M.nationality:"Documento sin escanear"),r.a.createElement("br",null),r.a.createElement("p",null,"Genero: ",M.gender?M.gender:"Documento sin escanear"),r.a.createElement("br",null),r.a.createElement("p",null,"Fecha Expiraci\xf3n: ",M["expiration date"]?M["expiration date"]:"Documento sin escanear"),r.a.createElement("br",null),r.a.createElement("p",null,"Numero de documento: ",M["document number"]?M["document number"]:"Documento sin escanear"),r.a.createElement("br",null),r.a.createElement("p",null,"Fecha Nacimiento: ",M["date of birth"]?M["date of birth"]:"Documento sin escanear"),r.a.createElement("div",{className:"text-center"},r.a.createElement(E.a,{src:S,width:50,height:50}),r.a.createElement(E.a,{src:O,width:50,height:50}),r.a.createElement(E.a,{src:B,width:50,height:50})))),r.a.createElement("div",{className:"container container-fluid",hidden:ue,style:{height:"50%",textAlign:"center",marginBottom:"auto",marginTop:"auto"},id:"containerfront"}),r.a.createElement("div",{className:"container container-fluid",hidden:Ee,style:{height:"50%"},id:"container"}),r.a.createElement("div",{className:"container container-fluid",hidden:fe,style:{height:"50%"},id:"liveness"}))};a(253),a(254);var N=function(e){return r.a.createElement(y,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[163,1,2]]]);
//# sourceMappingURL=main.b1e44f5c.chunk.js.map