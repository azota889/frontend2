(()=>{"use strict";var e,g={},h={};function r(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,loaded:!1,exports:{}};return g[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=g,r.amdO={},e=[],r.O=(n,t,f,o)=>{if(!t){var a=1/0;for(i=0;i<e.length;i++){for(var[t,f,o]=e[i],s=!0,c=0;c<t.length;c++)(!1&o||a>=o)&&Object.keys(r.O).every(p=>r.O[p](t[c]))?t.splice(c--,1):(s=!1,o<a&&(a=o));if(s){e.splice(i--,1);var b=f();void 0!==b&&(n=b)}}return n}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[t,f,o]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},(()=>{var n,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__;r.t=function(t,f){if(1&f&&(t=this(t)),8&f||"object"==typeof t&&t&&(4&f&&t.__esModule||16&f&&"function"==typeof t.then))return t;var o=Object.create(null);r.r(o);var i={};n=n||[null,e({}),e([]),e(e)];for(var a=2&f&&t;"object"==typeof a&&!~n.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach(s=>i[s]=()=>t[s]);return i.default=()=>t,r.d(o,i),o}})(),r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((n,t)=>(r.f[t](e,n),n),[])),r.u=e=>(592===e?"common":e)+"."+{35:"c4848d7cd30f9ce5",63:"7365942d963a55f0",71:"9cbb21b6d3d9a13f",78:"a1a2e5aa9a71fdaf",98:"7a298c155c4a48d5",108:"fec0d43789d2538a",117:"2b53bb226e2e6bb7",130:"16871f2c3eb636c3",175:"845e3ef97af803ba",176:"3c208c7c125efd56",237:"8f373a5b8011115e",261:"ada7408fbaaa1cb0",297:"8b641f5fd2687ae8",334:"39d8cf445b08c485",371:"c9f1a1d483da41b7",401:"2a773343014f4868",465:"9f5822a031e8dde0",467:"e9fd792fb923bd03",489:"3e55af790a319c93",510:"582d691de1c984c4",568:"521a8a6e66beb7fb",592:"7a1c9de3a4232aca",619:"2bf3a381fb9932f5",632:"448c12917d6f6d51",720:"2f5873c89236ec81",735:"dc68a92aa5c9293b",751:"45df26c07c489a01",766:"d8d3b9a76924a0c3",861:"9085aabf54881a34",869:"0485e5dd019357a0",898:"7ba91867ed9ac8fc",920:"33591aca8a541c96"}[e]+".js",r.miniCssF=e=>{},r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={},n="BalacoClient:";r.l=(t,f,o,i)=>{if(e[t])e[t].push(f);else{var a,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),b=0;b<c.length;b++){var d=c[b];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==n+o){a=d;break}}a||(s=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",n+o),a.src=r.tu(t)),e[t]=[f];var l=(v,p)=>{a.onerror=a.onload=null,clearTimeout(u);var y=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),y&&y.forEach(_=>_(p)),v)return v(p)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),s&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:n=>n},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="https://cdn.jsdelivr.net/gh/azota889/frontend2/angular/",(()=>{var e={666:0};r.f.j=(f,o)=>{var i=r.o(e,f)?e[f]:void 0;if(0!==i)if(i)o.push(i[2]);else if(666!=f){var a=new Promise((d,l)=>i=e[f]=[d,l]);o.push(i[2]=a);var s=r.p+r.u(f),c=new Error;r.l(s,d=>{if(r.o(e,f)&&(0!==(i=e[f])&&(e[f]=void 0),i)){var l=d&&("load"===d.type?"missing":d.type),u=d&&d.target&&d.target.src;c.message="Loading chunk "+f+" failed.\n("+l+": "+u+")",c.name="ChunkLoadError",c.type=l,c.request=u,i[1](c)}},"chunk-"+f,f)}else e[f]=0},r.O.j=f=>0===e[f];var n=(f,o)=>{var c,b,[i,a,s]=o,d=0;if(i.some(u=>0!==e[u])){for(c in a)r.o(a,c)&&(r.m[c]=a[c]);if(s)var l=s(r)}for(f&&f(o);d<i.length;d++)r.o(e,b=i[d])&&e[b]&&e[b][0](),e[b]=0;return r.O(l)},t=self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})()})();