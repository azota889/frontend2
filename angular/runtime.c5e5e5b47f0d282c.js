(()=>{"use strict";var e,g={},h={};function a(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,loaded:!1,exports:{}};return g[e].call(t.exports,t,t.exports,a),t.loaded=!0,t.exports}a.m=g,a.amdO={},e=[],a.O=(n,t,f,i)=>{if(!t){var r=1/0;for(d=0;d<e.length;d++){for(var[t,f,i]=e[d],s=!0,o=0;o<t.length;o++)(!1&i||r>=i)&&Object.keys(a.O).every(p=>a.O[p](t[o]))?t.splice(o--,1):(s=!1,i<r&&(r=i));if(s){e.splice(d--,1);var b=f();void 0!==b&&(n=b)}}return n}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[t,f,i]},a.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return a.d(n,{a:n}),n},(()=>{var n,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__;a.t=function(t,f){if(1&f&&(t=this(t)),8&f||"object"==typeof t&&t&&(4&f&&t.__esModule||16&f&&"function"==typeof t.then))return t;var i=Object.create(null);a.r(i);var d={};n=n||[null,e({}),e([]),e(e)];for(var r=2&f&&t;"object"==typeof r&&!~n.indexOf(r);r=e(r))Object.getOwnPropertyNames(r).forEach(s=>d[s]=()=>t[s]);return d.default=()=>t,a.d(i,d),i}})(),a.d=(e,n)=>{for(var t in n)a.o(n,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce((n,t)=>(a.f[t](e,n),n),[])),a.u=e=>(592===e?"common":e)+"."+{63:"78d26b2dcc39868f",71:"d5edcbc9c0092695",108:"fec0d43789d2538a",117:"7a9baac18739bbe0",130:"cb5cb80db4484dff",143:"04bc3ab92425ab85",223:"e12f20d9e3ce65ee",261:"476abcc025dc22fc",345:"35ec7071227fcc6e",371:"fea170487eb550c0",436:"778b32e70b909eff",465:"3d632dc26bf85f4f",489:"b3f8f0649c847d6d",491:"ba2531c13463ddfd",497:"9cc5cded3a3de04b",528:"7ea9598ee9bc9d7c",535:"aad1b89bfe2d9315",568:"5ffff6de9de54b35",592:"69513c638dc7ac8e",598:"79843c3ac0eafec9",625:"e7edb6360cb85b54",632:"b160aedcef09bccd",720:"3fb62c7a04043e0b",735:"456d3403e7bf58d1",748:"0dc20759ba005b9c",751:"2a2a3dfd4d844a53",766:"64d218c67b634b36",856:"f8330327643e4ec9",861:"aade681215ceeb9f",898:"883585b531519212",908:"17bacb0ae587bda9",920:"33591aca8a541c96",979:"4cdee13accfb4d4a"}[e]+".js",a.miniCssF=e=>{},a.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),a.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={},n="BalacoClient:";a.l=(t,f,i,d)=>{if(e[t])e[t].push(f);else{var r,s;if(void 0!==i)for(var o=document.getElementsByTagName("script"),b=0;b<o.length;b++){var c=o[b];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==n+i){r=c;break}}r||(s=!0,(r=document.createElement("script")).type="module",r.charset="utf-8",r.timeout=120,a.nc&&r.setAttribute("nonce",a.nc),r.setAttribute("data-webpack",n+i),r.src=a.tu(t)),e[t]=[f];var l=(v,p)=>{r.onerror=r.onload=null,clearTimeout(u);var y=e[t];if(delete e[t],r.parentNode&&r.parentNode.removeChild(r),y&&y.forEach(_=>_(p)),v)return v(p)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=l.bind(null,r.onerror),r.onload=l.bind(null,r.onload),s&&document.head.appendChild(r)}}})(),a.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;a.tt=()=>(void 0===e&&(e={createScriptURL:n=>n},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),a.tu=e=>a.tt().createScriptURL(e),a.p="https://cdn.jsdelivr.net/gh/azota889/frontend2/angular/",(()=>{var e={666:0};a.f.j=(f,i)=>{var d=a.o(e,f)?e[f]:void 0;if(0!==d)if(d)i.push(d[2]);else if(666!=f){var r=new Promise((c,l)=>d=e[f]=[c,l]);i.push(d[2]=r);var s=a.p+a.u(f),o=new Error;a.l(s,c=>{if(a.o(e,f)&&(0!==(d=e[f])&&(e[f]=void 0),d)){var l=c&&("load"===c.type?"missing":c.type),u=c&&c.target&&c.target.src;o.message="Loading chunk "+f+" failed.\n("+l+": "+u+")",o.name="ChunkLoadError",o.type=l,o.request=u,d[1](o)}},"chunk-"+f,f)}else e[f]=0},a.O.j=f=>0===e[f];var n=(f,i)=>{var o,b,[d,r,s]=i,c=0;if(d.some(u=>0!==e[u])){for(o in r)a.o(r,o)&&(a.m[o]=r[o]);if(s)var l=s(a)}for(f&&f(i);c<d.length;c++)a.o(e,b=d[c])&&e[b]&&e[b][0](),e[b]=0;return a.O(l)},t=self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})()})();