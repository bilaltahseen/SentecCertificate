(this.webpackJsonpcertificate=this.webpackJsonpcertificate||[]).push([[0],{16:function(e,t,n){e.exports=n.p+"static/media/Certificate-01-01.79f868fb.png"},19:function(e,t,n){e.exports=n(44)},24:function(e,t,n){},25:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},26:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(14),i=n.n(c),r=(n(24),n(3)),l=(n(25),n(26),n(18)),s=n(15),m=n(16),d=n.n(m),u=n(17),h=n.n(u);var p=function(e){var t=o.a.useState(""),n=Object(r.a)(t,2),a=n[0],c=n[1];return o.a.createElement("div",{style:{backgroundColor:"#fff"}},o.a.createElement("svg",{id:"svgCert",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","data-name":"Layer 2",viewBox:"0 0 1063 768"},o.a.createElement("image",{width:"2216",height:"1600",transform:"scale(.48)",xlinkHref:d.a}),o.a.createElement("text",{fontSize:"12",opacity:"0.40",x:"32%",y:"14%",textAnchor:"middle"},a),o.a.createElement("text",{fontFamily:"DancingScriptOT",fontSize:"61",opacity:"0.47",x:"50%",y:"59%",textAnchor:"middle"},e.name)),o.a.createElement("button",{disabled:""===e.name,onClick:function(){var t="CERT-UID-".concat(Object(l.a)(Array(48)).map((function(e){return(~~(36*Math.random())).toString(36)})).join(""));h()({method:"POST",url:"https://senteccertificate-4935.restdb.io/rest/userdata",headers:{"cache-control":"no-cache","x-apikey":e.apikey,"content-type":"application/json"},data:{name:e.name,id:t}}).then((function(n){c(t),Object(s.saveSvgAsPng)(document.getElementById("svgCert"),"".concat(e.name,"_Certificate.jpeg"),{encoderOptions:1}).then((function(){c("")}))})).catch((function(e){console.log(e)}))}},"Click To Generate"))};var f=function(){var e=o.a.useState(""),t=Object(r.a)(e,2),n=t[0],a=t[1],c=o.a.useState(""),i=Object(r.a)(c,2),l=i[0],s=i[1];return o.a.createElement("div",{className:"App"},o.a.createElement(p,{name:n,apikey:l}),o.a.createElement("input",{style:{width:"20%",height:"30%"},type:"text",placeholder:"Enter Name",onChange:function(e){a(e.target.value)}}),o.a.createElement("input",{style:{width:"20%",height:"30%"},type:"text",placeholder:"Enter Api Key",onChange:function(e){s(e.target.value)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);