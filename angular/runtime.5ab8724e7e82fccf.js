(()=>{"use strict";var e,g={},h={};function r(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,loaded:!1,exports:{}};return g[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=g,e=[],r.O=(n,t,f,o)=>{if(!t){var a=1/0;for(i=0;i<e.length;i++){for(var[t,f,o]=e[i],s=!0,c=0;c<t.length;c++)(!1&o||a>=o)&&Object.keys(r.O).every(p=>r.O[p](t[c]))?t.splice(c--,1):(s=!1,o<a&&(a=o));if(s){e.splice(i--,1);var b=f();void 0!==b&&(n=b)}}return n}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[t,f,o]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},(()=>{var n,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__;r.t=function(t,f){if(1&f&&(t=this(t)),8&f||"object"==typeof t&&t&&(4&f&&t.__esModule||16&f&&"function"==typeof t.then))return t;var o=Object.create(null);r.r(o);var i={};n=n||[null,e({}),e([]),e(e)];for(var a=2&f&&t;"object"==typeof a&&!~n.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach(s=>i[s]=()=>t[s]);return i.default=()=>t,r.d(o,i),o}})(),r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((n,t)=>(r.f[t](e,n),n),[])),r.u=e=>(592===e?"common":e)+"."+{13:"439b31140563a0b4",35:"e7fb76659e8ff2d6",71:"3917139aa70ffb7a",117:"ea6950c4d9fdc64c",163:"54bb5539c4dc9696",176:"7dd87c8e5e678083",207:"096e3df54d3c3a7f",325:"3c3e5fc7711d41a7",334:"e524cb924f2fa7e5",359:"ffaff98aed8c5d0d",371:"c63cb0cfb6f0c1d9",467:"7ff6458ea5514fe0",469:"0c038d90240e0bcd",473:"38460eefa7dcbe61",489:"ae35e8af08a14ae7",494:"05d707038729e7e2",495:"5a2faf6b69835b22",592:"da0390e2323e34a9",615:"d1637685629e7f91",626:"c76918fb48f7efec",632:"3f91ab16c3b23c53",735:"64367a0ed7db0d3b",751:"8678689d7e01cae1",770:"5224862331cb5ad4",782:"39fe17b4edc5e510",863:"a031b617f864a183",881:"db938fe5c82ad36b",898:"7c918d47b7629bf3",920:"33591aca8a541c96",958:"4f63ff619567568a",997:"3d988f34faeb95e1"}[e]+".js",r.miniCssF=e=>{},r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={},n="BalacoClient:";r.l=(t,f,o,i)=>{if(e[t])e[t].push(f);else{var a,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),b=0;b<c.length;b++){var d=c[b];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==n+o){a=d;break}}a||(s=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",n+o),a.src=r.tu(t)),e[t]=[f];var l=(v,p)=>{a.onerror=a.onload=null,clearTimeout(u);var y=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),y&&y.forEach(_=>_(p)),v)return v(p)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),s&&document.head.appendChild(a)}}})(),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:n=>n},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="https://cdn.jsdelivr.net/gh/azota889/frontend2/angular/",(()=>{var e={666:0};r.f.j=(f,o)=>{var i=r.o(e,f)?e[f]:void 0;if(0!==i)if(i)o.push(i[2]);else if(666!=f){var a=new Promise((d,l)=>i=e[f]=[d,l]);o.push(i[2]=a);var s=r.p+r.u(f),c=new Error;r.l(s,d=>{if(r.o(e,f)&&(0!==(i=e[f])&&(e[f]=void 0),i)){var l=d&&("load"===d.type?"missing":d.type),u=d&&d.target&&d.target.src;c.message="Loading chunk "+f+" failed.\n("+l+": "+u+")",c.name="ChunkLoadError",c.type=l,c.request=u,i[1](c)}},"chunk-"+f,f)}else e[f]=0},r.O.j=f=>0===e[f];var n=(f,o)=>{var c,b,[i,a,s]=o,d=0;if(i.some(u=>0!==e[u])){for(c in a)r.o(a,c)&&(r.m[c]=a[c]);if(s)var l=s(r)}for(f&&f(o);d<i.length;d++)r.o(e,b=i[d])&&e[b]&&e[b][0](),e[b]=0;return r.O(l)},t=self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})()})();