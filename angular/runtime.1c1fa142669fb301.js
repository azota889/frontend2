(()=>{"use strict";var e,g={},h={};function r(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,loaded:!1,exports:{}};return g[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=g,r.amdO={},e=[],r.O=(n,t,f,i)=>{if(!t){var a=1/0;for(d=0;d<e.length;d++){for(var[t,f,i]=e[d],s=!0,o=0;o<t.length;o++)(!1&i||a>=i)&&Object.keys(r.O).every(p=>r.O[p](t[o]))?t.splice(o--,1):(s=!1,i<a&&(a=i));if(s){e.splice(d--,1);var b=f();void 0!==b&&(n=b)}}return n}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[t,f,i]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},(()=>{var n,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__;r.t=function(t,f){if(1&f&&(t=this(t)),8&f||"object"==typeof t&&t&&(4&f&&t.__esModule||16&f&&"function"==typeof t.then))return t;var i=Object.create(null);r.r(i);var d={};n=n||[null,e({}),e([]),e(e)];for(var a=2&f&&t;"object"==typeof a&&!~n.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach(s=>d[s]=()=>t[s]);return d.default=()=>t,r.d(i,d),i}})(),r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((n,t)=>(r.f[t](e,n),n),[])),r.u=e=>(592===e?"common":e)+"."+{63:"78d26b2dcc39868f",71:"d5edcbc9c0092695",108:"fec0d43789d2538a",117:"7a9baac18739bbe0",130:"cb5cb80db4484dff",143:"04bc3ab92425ab85",223:"e12f20d9e3ce65ee",261:"476abcc025dc22fc",345:"83622196933736f3",371:"fea170487eb550c0",436:"190468ae8d80ac6d",465:"3d632dc26bf85f4f",472:"e1f33cab8fadd928",489:"b3f8f0649c847d6d",491:"ba2531c13463ddfd",497:"9cc5cded3a3de04b",528:"7ea9598ee9bc9d7c",535:"aad1b89bfe2d9315",568:"5ffff6de9de54b35",592:"69513c638dc7ac8e",598:"79843c3ac0eafec9",625:"e7edb6360cb85b54",632:"b160aedcef09bccd",720:"3fb62c7a04043e0b",735:"456d3403e7bf58d1",748:"0dc20759ba005b9c",751:"2a2a3dfd4d844a53",766:"64d218c67b634b36",861:"aade681215ceeb9f",898:"883585b531519212",908:"17bacb0ae587bda9",920:"33591aca8a541c96",979:"4cdee13accfb4d4a"}[e]+".js",r.miniCssF=e=>{},r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={},n="BalacoClient:";r.l=(t,f,i,d)=>{if(e[t])e[t].push(f);else{var a,s;if(void 0!==i)for(var o=document.getElementsByTagName("script"),b=0;b<o.length;b++){var c=o[b];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==n+i){a=c;break}}a||(s=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",n+i),a.src=r.tu(t)),e[t]=[f];var l=(v,p)=>{a.onerror=a.onload=null,clearTimeout(u);var y=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),y&&y.forEach(_=>_(p)),v)return v(p)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),s&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:n=>n},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="https://cdn.jsdelivr.net/gh/azota889/frontend2/angular/",(()=>{var e={666:0};r.f.j=(f,i)=>{var d=r.o(e,f)?e[f]:void 0;if(0!==d)if(d)i.push(d[2]);else if(666!=f){var a=new Promise((c,l)=>d=e[f]=[c,l]);i.push(d[2]=a);var s=r.p+r.u(f),o=new Error;r.l(s,c=>{if(r.o(e,f)&&(0!==(d=e[f])&&(e[f]=void 0),d)){var l=c&&("load"===c.type?"missing":c.type),u=c&&c.target&&c.target.src;o.message="Loading chunk "+f+" failed.\n("+l+": "+u+")",o.name="ChunkLoadError",o.type=l,o.request=u,d[1](o)}},"chunk-"+f,f)}else e[f]=0},r.O.j=f=>0===e[f];var n=(f,i)=>{var o,b,[d,a,s]=i,c=0;if(d.some(u=>0!==e[u])){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(s)var l=s(r)}for(f&&f(i);c<d.length;c++)r.o(e,b=d[c])&&e[b]&&e[b][0](),e[b]=0;return r.O(l)},t=self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})()})();