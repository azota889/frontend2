(()=>{"use strict";var e,g={},h={};function r(e){var f=h[e];if(void 0!==f)return f.exports;var t=h[e]={id:e,loaded:!1,exports:{}};return g[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=g,r.amdO={},e=[],r.O=(f,t,n,i)=>{if(!t){var a=1/0;for(c=0;c<e.length;c++){for(var[t,n,i]=e[c],l=!0,o=0;o<t.length;o++)(!1&i||a>=i)&&Object.keys(r.O).every(p=>r.O[p](t[o]))?t.splice(o--,1):(l=!1,i<a&&(a=i));if(l){e.splice(c--,1);var s=n();void 0!==s&&(f=s)}}return f}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[t,n,i]},r.n=e=>{var f=e&&e.__esModule?()=>e.default:()=>e;return r.d(f,{a:f}),f},(()=>{var f,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__;r.t=function(t,n){if(1&n&&(t=this(t)),8&n||"object"==typeof t&&t&&(4&n&&t.__esModule||16&n&&"function"==typeof t.then))return t;var i=Object.create(null);r.r(i);var c={};f=f||[null,e({}),e([]),e(e)];for(var a=2&n&&t;"object"==typeof a&&!~f.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach(l=>c[l]=()=>t[l]);return c.default=()=>t,r.d(i,c),i}})(),r.d=(e,f)=>{for(var t in f)r.o(f,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:f[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((f,t)=>(r.f[t](e,f),f),[])),r.u=e=>(592===e?"common":e)+"."+{35:"06ac9eebafc6ac93",63:"56cee2e42725fd03",71:"40964a400eaea145",98:"7fef10631e545852",108:"fec0d43789d2538a",117:"1ed1babb0eae2243",130:"ed76d30e831fbed8",150:"c582beff7ba301c1",237:"8f373a5b8011115e",261:"d07a8aa377a20718",297:"30bf2aa710589bf2",334:"77bc5e891148d3c2",335:"063263d7e100986c",371:"c9f1a1d483da41b7",401:"f62460f44c7adab7",465:"1151c01a7933d7c2",467:"e9fd792fb923bd03",489:"5bd7209dfe83b66c",497:"615e33f74b25d9a3",510:"03f48fc65c289864",568:"f29fa7bb11250791",592:"733e90449c06219a",632:"64a8f5de39a9655b",720:"e29e10e2489c31d5",735:"15a6e59245b7a343",748:"cb524f3e9d1a55c8",751:"fabdfd9f70872471",766:"49d0857b8007581e",831:"5e9b46f20757479e",861:"df44500ce8e04c83",869:"a3785b8032858ac8",898:"7fcc62394fb51700",920:"33591aca8a541c96"}[e]+".js",r.miniCssF=e=>{},r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),(()=>{var e={},f="BalacoClient:";r.l=(t,n,i,c)=>{if(e[t])e[t].push(n);else{var a,l;if(void 0!==i)for(var o=document.getElementsByTagName("script"),s=0;s<o.length;s++){var d=o[s];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==f+i){a=d;break}}a||(l=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",f+i),a.src=r.tu(t)),e[t]=[n];var b=(v,p)=>{a.onerror=a.onload=null,clearTimeout(u);var y=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),y&&y.forEach(_=>_(p)),v)return v(p)},u=setTimeout(b.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=b.bind(null,a.onerror),a.onload=b.bind(null,a.onload),l&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:f=>f},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="https://cdn.jsdelivr.net/gh/azota889/frontend2/angular/",(()=>{var e={666:0};r.f.j=(n,i)=>{var c=r.o(e,n)?e[n]:void 0;if(0!==c)if(c)i.push(c[2]);else if(666!=n){var a=new Promise((d,b)=>c=e[n]=[d,b]);i.push(c[2]=a);var l=r.p+r.u(n),o=new Error;r.l(l,d=>{if(r.o(e,n)&&(0!==(c=e[n])&&(e[n]=void 0),c)){var b=d&&("load"===d.type?"missing":d.type),u=d&&d.target&&d.target.src;o.message="Loading chunk "+n+" failed.\n("+b+": "+u+")",o.name="ChunkLoadError",o.type=b,o.request=u,c[1](o)}},"chunk-"+n,n)}else e[n]=0},r.O.j=n=>0===e[n];var f=(n,i)=>{var o,s,[c,a,l]=i,d=0;if(c.some(u=>0!==e[u])){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(l)var b=l(r)}for(n&&n(i);d<c.length;d++)r.o(e,s=c[d])&&e[s]&&e[s][0](),e[s]=0;return r.O(b)},t=self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[];t.forEach(f.bind(null,0)),t.push=f.bind(null,t.push.bind(t))})()})();