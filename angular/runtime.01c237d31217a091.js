(()=>{"use strict";var e,g={},h={};function r(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,loaded:!1,exports:{}};return g[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=g,r.amdO={},e=[],r.O=(n,t,f,i)=>{if(!t){var a=1/0;for(d=0;d<e.length;d++){for(var[t,f,i]=e[d],b=!0,o=0;o<t.length;o++)(!1&i||a>=i)&&Object.keys(r.O).every(p=>r.O[p](t[o]))?t.splice(o--,1):(b=!1,i<a&&(a=i));if(b){e.splice(d--,1);var s=f();void 0!==s&&(n=s)}}return n}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[t,f,i]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},(()=>{var n,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__;r.t=function(t,f){if(1&f&&(t=this(t)),8&f||"object"==typeof t&&t&&(4&f&&t.__esModule||16&f&&"function"==typeof t.then))return t;var i=Object.create(null);r.r(i);var d={};n=n||[null,e({}),e([]),e(e)];for(var a=2&f&&t;"object"==typeof a&&!~n.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach(b=>d[b]=()=>t[b]);return d.default=()=>t,r.d(i,d),i}})(),r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((n,t)=>(r.f[t](e,n),n),[])),r.u=e=>(592===e?"common":e)+"."+{35:"06ac9eebafc6ac93",63:"56cee2e42725fd03",71:"40964a400eaea145",98:"7fef10631e545852",108:"fec0d43789d2538a",117:"1ed1babb0eae2243",130:"ed76d30e831fbed8",175:"584ef72cf4c9370f",237:"8f373a5b8011115e",261:"d07a8aa377a20718",297:"b4eefe42c549183e",334:"77bc5e891148d3c2",335:"063263d7e100986c",371:"c9f1a1d483da41b7",401:"e8ae54a516d90926",465:"c5523b583d2d2d1a",467:"e9fd792fb923bd03",489:"d13b76dce5930ad8",497:"615e33f74b25d9a3",510:"293d7b74f413482f",568:"af552044382790f1",592:"733e90449c06219a",632:"64a8f5de39a9655b",720:"e29e10e2489c31d5",735:"08c6263ee7b4fa67",748:"cb524f3e9d1a55c8",751:"fabdfd9f70872471",766:"49d0857b8007581e",831:"31b120383d21591d",861:"df44500ce8e04c83",869:"a3785b8032858ac8",898:"7fcc62394fb51700",920:"33591aca8a541c96"}[e]+".js",r.miniCssF=e=>{},r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={},n="BalacoClient:";r.l=(t,f,i,d)=>{if(e[t])e[t].push(f);else{var a,b;if(void 0!==i)for(var o=document.getElementsByTagName("script"),s=0;s<o.length;s++){var c=o[s];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==n+i){a=c;break}}a||(b=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",n+i),a.src=r.tu(t)),e[t]=[f];var l=(v,p)=>{a.onerror=a.onload=null,clearTimeout(u);var y=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),y&&y.forEach(_=>_(p)),v)return v(p)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),b&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:n=>n},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="https://cdn.jsdelivr.net/gh/azota889/frontend2/angular/",(()=>{var e={666:0};r.f.j=(f,i)=>{var d=r.o(e,f)?e[f]:void 0;if(0!==d)if(d)i.push(d[2]);else if(666!=f){var a=new Promise((c,l)=>d=e[f]=[c,l]);i.push(d[2]=a);var b=r.p+r.u(f),o=new Error;r.l(b,c=>{if(r.o(e,f)&&(0!==(d=e[f])&&(e[f]=void 0),d)){var l=c&&("load"===c.type?"missing":c.type),u=c&&c.target&&c.target.src;o.message="Loading chunk "+f+" failed.\n("+l+": "+u+")",o.name="ChunkLoadError",o.type=l,o.request=u,d[1](o)}},"chunk-"+f,f)}else e[f]=0},r.O.j=f=>0===e[f];var n=(f,i)=>{var o,s,[d,a,b]=i,c=0;if(d.some(u=>0!==e[u])){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(b)var l=b(r)}for(f&&f(i);c<d.length;c++)r.o(e,s=d[c])&&e[s]&&e[s][0](),e[s]=0;return r.O(l)},t=self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})()})();