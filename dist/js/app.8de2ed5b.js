(function(e){function t(t){for(var r,o,u=t[0],l=t[1],s=t[2],i=0,d=[];i<u.length;i++)o=u[i],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==c[u]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},c={app:0},a=[];function u(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"0bfc8ff4"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"710c393d"}[e]+".css",c=l.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var s=a[u],i=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(i===r||i===c))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],i=s.getAttribute("data-href");if(i===r||i===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],f.parentNode.removeChild(f),n(a)},f.href=c;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=a);var s,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=u(e);var d=new Error;s=function(t){i.onerror=i.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}c[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:i})}),12e4);i.onerror=i.onload=s,document.head.appendChild(i)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0a85":function(e,t,n){"use strict";n("2345")},2345:function(e,t,n){},"3acd":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={id:"nav"},c=Object(r["f"])("Home"),a=Object(r["f"])(" | "),u=Object(r["f"])("Channel");function l(e,t){var n=Object(r["v"])("router-link"),l=Object(r["v"])("router-view");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["e"])("div",o,[Object(r["g"])(n,{to:"/"},{default:Object(r["A"])((function(){return[c]})),_:1}),a,Object(r["g"])(n,{to:"/channel"},{default:Object(r["A"])((function(){return[u]})),_:1})]),Object(r["g"])(l)],64)}n("60a6");var s=n("6b0d"),i=n.n(s);const d={},f=i()(d,[["render",l]]);var b=f,p=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),m={class:"enter-code"},h=Object(r["e"])("h1",{class:"header-wrap"},"Enter with the code",-1),v=Object(r["e"])("label",{for:"code"}," Code: ",-1),O=Object(r["e"])("button",{type:"submit",name:"button"},"Submit",-1);function g(e,t,n,o,c,a){return Object(r["p"])(),Object(r["d"])("div",m,[h,Object(r["e"])("form",{onSubmit:t[1]||(t[1]=Object(r["C"])((function(){return o.submitCode&&o.submitCode.apply(o,arguments)}),["prevent"]))},[v,Object(r["B"])(Object(r["e"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.code=e}),type:"text",name:"code",value:""},null,512),[[r["y"],o.code]]),O],32)])}var j=n("5502"),y={name:"EnterCode",components:{},setup:function(){var e=Object(j["b"])(),t=Object(p["c"])(),n=Object(r["u"])("");function o(){console.log(e.state.allowAccess),e.dispatch("verifyCode",n.value).then((function(){e.state.allowAccess&&t.push({name:"StreamChannel"})})),console.log("before submit",n.value),n.value="",console.log("after submit",n.value)}return{code:n,submitCode:o}}};n("0a85");const w=i()(y,[["render",g]]);var C=w,A=Object(j["a"])({state:function(){return{allowAccess:!1}},actions:{verifyCode:function(e,t){var n=e.commit;n("verifyCode",t)}},mutations:{verifyCode:function(e,t){"cat"===t?(e.allowAccess=!0,console.log("store","allowAccess updated to",e.allowAccess)):(console.log("Incorrect code, allowAccess:",e.allowAccess),alert("Please enter the correct code"))}}}),E=A,S=[{path:"/",name:"EnterCode",component:C},{path:"/channel",name:"StreamChannel",component:function(){return n.e("about").then(n.bind(null,"6837"))},beforeEnter:function(e,t,n){!0===E.state.allowAccess?(console.log("ALLOW ACCESS"),n()):(n({name:"EnterCode"}),alert("Please enter the secret code"))}}],P=Object(p["a"])({history:Object(p["b"])("/"),routes:S}),_=P;Object(r["c"])(b).use(_).use(E).mount("#app")},"60a6":function(e,t,n){"use strict";n("3acd")}});
//# sourceMappingURL=app.8de2ed5b.js.map