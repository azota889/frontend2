(()=>{"use strict";var e,g={},h={};function r(e){var f=h[e];if(void 0!==f)return f.exports;var t=h[e]={id:e,loaded:!1,exports:{}};return g[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=g,r.amdO={},e=[],r.O=(f,t,n,o)=>{if(!t){var a=1/0;for(i=0;i<e.length;i++){for(var[t,n,o]=e[i],s=!0,d=0;d<t.length;d++)(!1&o||a>=o)&&Object.keys(r.O).every(p=>r.O[p](t[d]))?t.splice(d--,1):(s=!1,o<a&&(a=o));if(s){e.splice(i--,1);var b=n();void 0!==b&&(f=b)}}return f}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[t,n,o]},r.n=e=>{var f=e&&e.__esModule?()=>e.default:()=>e;return r.d(f,{a:f}),f},(()=>{var f,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__;r.t=function(t,n){if(1&n&&(t=this(t)),8&n||"object"==typeof t&&t&&(4&n&&t.__esModule||16&n&&"function"==typeof t.then))return t;var o=Object.create(null);r.r(o);var i={};f=f||[null,e({}),e([]),e(e)];for(var a=2&n&&t;"object"==typeof a&&!~f.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach(s=>i[s]=()=>t[s]);return i.default=()=>t,r.d(o,i),o}})(),r.d=(e,f)=>{for(var t in f)r.o(f,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:f[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((f,t)=>(r.f[t](e,f),f),[])),r.u=e=>(592===e?"common":e)+"."+{35:"06ac9eebafc6ac93",63:"56cee2e42725fd03",71:"40964a400eaea145",98:"7fef10631e545852",108:"fec0d43789d2538a",117:"1ed1babb0eae2243",130:"ed76d30e831fbed8",150:"f4b79ff07024331e",237:"8f373a5b8011115e",261:"d07a8aa377a20718",297:"30bf2aa710589bf2",334:"77bc5e891148d3c2",335:"063263d7e100986c",371:"c9f1a1d483da41b7",401:"f62460f44c7adab7",465:"1151c01a7933d7c2",467:"e9fd792fb923bd03",489:"19d3e3d4689f70bc",497:"615e33f74b25d9a3",510:"a969b0d907bfd60e",568:"f29fa7bb11250791",592:"733e90449c06219a",632:"64a8f5de39a9655b",720:"e29e10e2489c31d5",735:"15a6e59245b7a343",748:"cb524f3e9d1a55c8",751:"fabdfd9f70872471",766:"49d0857b8007581e",831:"5e9b46f20757479e",861:"df44500ce8e04c83",869:"783971a853d4ec44",898:"7fcc62394fb51700",920:"33591aca8a541c96"}[e]+".js",r.miniCssF=e=>{},r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),(()=>{var e={},f="BalacoClient:";r.l=(t,n,o,i)=>{if(e[t])e[t].push(n);else{var a,s;if(void 0!==o)for(var d=document.getElementsByTagName("script"),b=0;b<d.length;b++){var c=d[b];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==f+o){a=c;break}}a||(s=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",f+o),a.src=r.tu(t)),e[t]=[n];var l=(v,p)=>{a.onerror=a.onload=null,clearTimeout(u);var y=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),y&&y.forEach(_=>_(p)),v)return v(p)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),s&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:f=>f},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="https://cdn.jsdelivr.net/gh/azota889/frontend2/angular/",(()=>{var e={666:0};r.f.j=(n,o)=>{var i=r.o(e,n)?e[n]:void 0;if(0!==i)if(i)o.push(i[2]);else if(666!=n){var a=new Promise((c,l)=>i=e[n]=[c,l]);o.push(i[2]=a);var s=r.p+r.u(n),d=new Error;r.l(s,c=>{if(r.o(e,n)&&(0!==(i=e[n])&&(e[n]=void 0),i)){var l=c&&("load"===c.type?"missing":c.type),u=c&&c.target&&c.target.src;d.message="Loading chunk "+n+" failed.\n("+l+": "+u+")",d.name="ChunkLoadError",d.type=l,d.request=u,i[1](d)}},"chunk-"+n,n)}else e[n]=0},r.O.j=n=>0===e[n];var f=(n,o)=>{var d,b,[i,a,s]=o,c=0;if(i.some(u=>0!==e[u])){for(d in a)r.o(a,d)&&(r.m[d]=a[d]);if(s)var l=s(r)}for(n&&n(o);c<i.length;c++)r.o(e,b=i[c])&&e[b]&&e[b][0](),e[b]=0;return r.O(l)},t=self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[];t.forEach(f.bind(null,0)),t.push=f.bind(null,t.push.bind(t))})()})();