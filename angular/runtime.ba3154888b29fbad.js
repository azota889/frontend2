(()=>{"use strict";var e,g={},h={};function r(e){var f=h[e];if(void 0!==f)return f.exports;var t=h[e]={id:e,loaded:!1,exports:{}};return g[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=g,r.amdO={},e=[],r.O=(f,t,n,c)=>{if(!t){var a=1/0;for(d=0;d<e.length;d++){for(var[t,n,c]=e[d],s=!0,i=0;i<t.length;i++)(!1&c||a>=c)&&Object.keys(r.O).every(p=>r.O[p](t[i]))?t.splice(i--,1):(s=!1,c<a&&(a=c));if(s){e.splice(d--,1);var b=n();void 0!==b&&(f=b)}}return f}c=c||0;for(var d=e.length;d>0&&e[d-1][2]>c;d--)e[d]=e[d-1];e[d]=[t,n,c]},r.n=e=>{var f=e&&e.__esModule?()=>e.default:()=>e;return r.d(f,{a:f}),f},(()=>{var f,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__;r.t=function(t,n){if(1&n&&(t=this(t)),8&n||"object"==typeof t&&t&&(4&n&&t.__esModule||16&n&&"function"==typeof t.then))return t;var c=Object.create(null);r.r(c);var d={};f=f||[null,e({}),e([]),e(e)];for(var a=2&n&&t;"object"==typeof a&&!~f.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach(s=>d[s]=()=>t[s]);return d.default=()=>t,r.d(c,d),c}})(),r.d=(e,f)=>{for(var t in f)r.o(f,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:f[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((f,t)=>(r.f[t](e,f),f),[])),r.u=e=>(592===e?"common":e)+"."+{3:"ef766f86578f0a02",28:"2229fccc474eec75",66:"900596b80e005b27",69:"0ec08da6f875ce1c",141:"aa83f28c20605fe2",175:"72daaf3f0ab1fea9",188:"3aa8820ded875791",199:"ed397fa6734fea34",229:"6a10ae312cbd7af8",275:"926278d11af5d42c",320:"602c6ede9e2e5338",330:"37f53bc80478e07f",365:"5539506999138c5b",375:"5a97d6256f3df1bb",385:"95fb495e2a9f47c5",412:"ecbe1f250c4c1599",484:"0d3ded2b1bbe1e1d",500:"53b6ea4034df31a3",502:"df177b778c7812e3",506:"7bb143ee150e01e8",507:"cd3498c906fc3da9",530:"e3abae446a9776d6",592:"f793dfd21b4b8859",616:"6624ad6b777caab4",621:"24a5fffa7f571e87",650:"c29d79730299ab32",661:"1e1b3a29ee893b45",663:"21355458aa9c1e0c",671:"d2634cb28951dd6d",706:"3b6ba6d04d223184",742:"52c2a61ef9cf013e",744:"1e2b972681e41bd4",750:"f68b01f7b9dd698c",771:"ba4bbdd3bf03531b",777:"fd5a41ceb1b9cf20",790:"0da2ae02d275a749",811:"819b108179122891",871:"1cb309dc5266f7cf",889:"182ef4b6297a6f6b",904:"55df8bf820687cea",957:"018d0f0eb0f9b41f",958:"1c7ed9d9c6d7a19a"}[e]+".js",r.miniCssF=e=>{},r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),(()=>{var e={},f="BalacoClient:";r.l=(t,n,c,d)=>{if(e[t])e[t].push(n);else{var a,s;if(void 0!==c)for(var i=document.getElementsByTagName("script"),b=0;b<i.length;b++){var o=i[b];if(o.getAttribute("src")==t||o.getAttribute("data-webpack")==f+c){a=o;break}}a||(s=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",f+c),a.src=r.tu(t)),e[t]=[n];var l=(v,p)=>{a.onerror=a.onload=null,clearTimeout(u);var y=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),y&&y.forEach(_=>_(p)),v)return v(p)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),s&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:f=>f},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="https://cdn.jsdelivr.net/gh/azota889/frontend2/angular/",(()=>{var e={666:0};r.f.j=(n,c)=>{var d=r.o(e,n)?e[n]:void 0;if(0!==d)if(d)c.push(d[2]);else if(666!=n){var a=new Promise((o,l)=>d=e[n]=[o,l]);c.push(d[2]=a);var s=r.p+r.u(n),i=new Error;r.l(s,o=>{if(r.o(e,n)&&(0!==(d=e[n])&&(e[n]=void 0),d)){var l=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;i.message="Loading chunk "+n+" failed.\n("+l+": "+u+")",i.name="ChunkLoadError",i.type=l,i.request=u,d[1](i)}},"chunk-"+n,n)}else e[n]=0},r.O.j=n=>0===e[n];var f=(n,c)=>{var i,b,[d,a,s]=c,o=0;if(d.some(u=>0!==e[u])){for(i in a)r.o(a,i)&&(r.m[i]=a[i]);if(s)var l=s(r)}for(n&&n(c);o<d.length;o++)r.o(e,b=d[o])&&e[b]&&e[b][0](),e[b]=0;return r.O(l)},t=self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[];t.forEach(f.bind(null,0)),t.push=f.bind(null,t.push.bind(t))})()})();