(()=>{"use strict";var e,g={},h={};function r(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,loaded:!1,exports:{}};return g[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=g,r.amdO={},e=[],r.O=(n,t,f,i)=>{if(!t){var a=1/0;for(c=0;c<e.length;c++){for(var[t,f,i]=e[c],s=!0,o=0;o<t.length;o++)(!1&i||a>=i)&&Object.keys(r.O).every(p=>r.O[p](t[o]))?t.splice(o--,1):(s=!1,i<a&&(a=i));if(s){e.splice(c--,1);var b=f();void 0!==b&&(n=b)}}return n}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[t,f,i]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},(()=>{var n,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__;r.t=function(t,f){if(1&f&&(t=this(t)),8&f||"object"==typeof t&&t&&(4&f&&t.__esModule||16&f&&"function"==typeof t.then))return t;var i=Object.create(null);r.r(i);var c={};n=n||[null,e({}),e([]),e(e)];for(var a=2&f&&t;"object"==typeof a&&!~n.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach(s=>c[s]=()=>t[s]);return c.default=()=>t,r.d(i,c),i}})(),r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((n,t)=>(r.f[t](e,n),n),[])),r.u=e=>(592===e?"common":e)+"."+{35:"412ab9a9ac89bd6d",71:"3b39495cffd8ff4b",78:"0a241b90ac5a7a9c",98:"0d4cfeac0a87995a",108:"fec0d43789d2538a",117:"2b7db41593074e9e",130:"16871f2c3eb636c3",176:"3c208c7c125efd56",237:"d66aaf7a9c3ac3ea",261:"fd38c56a63eee07a",297:"9d686835659cdf6c",334:"c34a5240944c4b30",371:"9e41e26aaad7bc7a",380:"90c3b26e58b86a8c",401:"821a72ec83258b92",465:"9f5822a031e8dde0",467:"326cb0645b4edbcd",489:"abc5f78c01a8edbb",510:"f7e68471b71b004e",568:"521a8a6e66beb7fb",592:"1c2344ba88d53dd6",619:"44132d37915299e6",632:"51e30e30ea008467",692:"27db39d315cb460c",720:"3dd182903e2f4f4d",735:"dc68a92aa5c9293b",751:"dde3061c13f616a4",766:"7cb849911e77b2fc",807:"f193779daedc4412",861:"39482758867db6a5",898:"453ba01e034220aa",920:"33591aca8a541c96"}[e]+".js",r.miniCssF=e=>{},r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={},n="BalacoClient:";r.l=(t,f,i,c)=>{if(e[t])e[t].push(f);else{var a,s;if(void 0!==i)for(var o=document.getElementsByTagName("script"),b=0;b<o.length;b++){var d=o[b];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==n+i){a=d;break}}a||(s=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",n+i),a.src=r.tu(t)),e[t]=[f];var l=(v,p)=>{a.onerror=a.onload=null,clearTimeout(u);var y=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),y&&y.forEach(_=>_(p)),v)return v(p)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),s&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:n=>n},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="https://cdn.jsdelivr.net/gh/azota889/frontend2/angular/",(()=>{var e={666:0};r.f.j=(f,i)=>{var c=r.o(e,f)?e[f]:void 0;if(0!==c)if(c)i.push(c[2]);else if(666!=f){var a=new Promise((d,l)=>c=e[f]=[d,l]);i.push(c[2]=a);var s=r.p+r.u(f),o=new Error;r.l(s,d=>{if(r.o(e,f)&&(0!==(c=e[f])&&(e[f]=void 0),c)){var l=d&&("load"===d.type?"missing":d.type),u=d&&d.target&&d.target.src;o.message="Loading chunk "+f+" failed.\n("+l+": "+u+")",o.name="ChunkLoadError",o.type=l,o.request=u,c[1](o)}},"chunk-"+f,f)}else e[f]=0},r.O.j=f=>0===e[f];var n=(f,i)=>{var o,b,[c,a,s]=i,d=0;if(c.some(u=>0!==e[u])){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(s)var l=s(r)}for(f&&f(i);d<c.length;d++)r.o(e,b=c[d])&&e[b]&&e[b][0](),e[b]=0;return r.O(l)},t=self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})()})();