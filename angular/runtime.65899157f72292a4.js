(()=>{"use strict";var e,g={},h={};function r(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,loaded:!1,exports:{}};return g[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=g,e=[],r.O=(n,t,f,o)=>{if(!t){var a=1/0;for(i=0;i<e.length;i++){for(var[t,f,o]=e[i],b=!0,d=0;d<t.length;d++)(!1&o||a>=o)&&Object.keys(r.O).every(p=>r.O[p](t[d]))?t.splice(d--,1):(b=!1,o<a&&(a=o));if(b){e.splice(i--,1);var s=f();void 0!==s&&(n=s)}}return n}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[t,f,o]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},(()=>{var n,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__;r.t=function(t,f){if(1&f&&(t=this(t)),8&f||"object"==typeof t&&t&&(4&f&&t.__esModule||16&f&&"function"==typeof t.then))return t;var o=Object.create(null);r.r(o);var i={};n=n||[null,e({}),e([]),e(e)];for(var a=2&f&&t;"object"==typeof a&&!~n.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach(b=>i[b]=()=>t[b]);return i.default=()=>t,r.d(o,i),o}})(),r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((n,t)=>(r.f[t](e,n),n),[])),r.u=e=>(592===e?"common":e)+"."+{13:"651a4ee50970e15c",35:"00fe02c2961da3cc",45:"09247205edbf386f",163:"2084e89b579041e8",237:"2f73ae7e2cabea9d",266:"955dc37cb8d065be",325:"844ae5ece13b0ec4",371:"d5d627a72750bce2",399:"b688e28d4be01d95",441:"9826a07ef14f7ea2",443:"840f53997c65f26d",494:"b1f2c9c24fdc01b2",558:"fde90282a663685d",592:"f340e369f2e154ea",615:"52df3d3ca42e40bc",617:"3391359fed41cd62",620:"bddcdb06ad5d8807",626:"f6de616b258ed554",632:"c6b6c30e5a3b9a18",649:"f263060303a7f968",735:"64367a0ed7db0d3b",781:"4f75c93e66d5fef6",782:"e99920dd4369511d",846:"1c4463b0c9dada61",881:"7f3c957d2cf464d6",898:"545f2f31baea6ebd",920:"33591aca8a541c96"}[e]+".js",r.miniCssF=e=>{},r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={},n="BalacoClient:";r.l=(t,f,o,i)=>{if(e[t])e[t].push(f);else{var a,b;if(void 0!==o)for(var d=document.getElementsByTagName("script"),s=0;s<d.length;s++){var c=d[s];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==n+o){a=c;break}}a||(b=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",n+o),a.src=r.tu(t)),e[t]=[f];var l=(v,p)=>{a.onerror=a.onload=null,clearTimeout(u);var y=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),y&&y.forEach(_=>_(p)),v)return v(p)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),b&&document.head.appendChild(a)}}})(),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:n=>n},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="https://cdn.jsdelivr.net/gh/azota889/frontend2/angular/",(()=>{var e={666:0};r.f.j=(f,o)=>{var i=r.o(e,f)?e[f]:void 0;if(0!==i)if(i)o.push(i[2]);else if(666!=f){var a=new Promise((c,l)=>i=e[f]=[c,l]);o.push(i[2]=a);var b=r.p+r.u(f),d=new Error;r.l(b,c=>{if(r.o(e,f)&&(0!==(i=e[f])&&(e[f]=void 0),i)){var l=c&&("load"===c.type?"missing":c.type),u=c&&c.target&&c.target.src;d.message="Loading chunk "+f+" failed.\n("+l+": "+u+")",d.name="ChunkLoadError",d.type=l,d.request=u,i[1](d)}},"chunk-"+f,f)}else e[f]=0},r.O.j=f=>0===e[f];var n=(f,o)=>{var d,s,[i,a,b]=o,c=0;if(i.some(u=>0!==e[u])){for(d in a)r.o(a,d)&&(r.m[d]=a[d]);if(b)var l=b(r)}for(f&&f(o);c<i.length;c++)r.o(e,s=i[c])&&e[s]&&e[s][0](),e[s]=0;return r.O(l)},t=self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})()})();