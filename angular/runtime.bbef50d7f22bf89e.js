(()=>{"use strict";var e,g={},h={};function r(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,loaded:!1,exports:{}};return g[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=g,r.amdO={},e=[],r.O=(n,t,f,d)=>{if(!t){var a=1/0;for(c=0;c<e.length;c++){for(var[t,f,d]=e[c],s=!0,i=0;i<t.length;i++)(!1&d||a>=d)&&Object.keys(r.O).every(p=>r.O[p](t[i]))?t.splice(i--,1):(s=!1,d<a&&(a=d));if(s){e.splice(c--,1);var b=f();void 0!==b&&(n=b)}}return n}d=d||0;for(var c=e.length;c>0&&e[c-1][2]>d;c--)e[c]=e[c-1];e[c]=[t,f,d]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},(()=>{var n,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__;r.t=function(t,f){if(1&f&&(t=this(t)),8&f||"object"==typeof t&&t&&(4&f&&t.__esModule||16&f&&"function"==typeof t.then))return t;var d=Object.create(null);r.r(d);var c={};n=n||[null,e({}),e([]),e(e)];for(var a=2&f&&t;"object"==typeof a&&!~n.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach(s=>c[s]=()=>t[s]);return c.default=()=>t,r.d(d,c),d}})(),r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((n,t)=>(r.f[t](e,n),n),[])),r.u=e=>(592===e?"common":e)+"."+{35:"2cc7b628e8bb88f2",63:"59b09690ead932fd",71:"74ac171d2d6355e9",98:"bbe392c1c67a002f",108:"fec0d43789d2538a",117:"4aefa1fe0d0b45ad",130:"5492ba2c210d65fa",137:"c2a4da1dbc0aa4a5",160:"e084d8559702cfc5",203:"494ff15ea42330f6",223:"62d62d0b6ad8ff17",237:"30cdff0edb6078a3",261:"3f7fb7ece601697b",297:"c02c27e492111e3b",371:"84c9e66d4b293bae",465:"3d632dc26bf85f4f",467:"925c79bd913e51e7",489:"c2a5d3ee5dee9d6f",497:"9cc5cded3a3de04b",510:"5bf60e32f750a85b",568:"5ffff6de9de54b35",592:"58eb73abfca32cae",632:"abcb37afd5447da9",637:"2fab289d0137415a",720:"90101823b8d24c35",735:"456d3403e7bf58d1",746:"52c2d301a69772f9",748:"6577089af122af71",751:"365439430622aea7",766:"398bcb36a7c2f2de",861:"1ae5bc4abf94a4fb",898:"081c05fd33c6d965",920:"33591aca8a541c96"}[e]+".js",r.miniCssF=e=>{},r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={},n="BalacoClient:";r.l=(t,f,d,c)=>{if(e[t])e[t].push(f);else{var a,s;if(void 0!==d)for(var i=document.getElementsByTagName("script"),b=0;b<i.length;b++){var o=i[b];if(o.getAttribute("src")==t||o.getAttribute("data-webpack")==n+d){a=o;break}}a||(s=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",n+d),a.src=r.tu(t)),e[t]=[f];var l=(v,p)=>{a.onerror=a.onload=null,clearTimeout(u);var y=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),y&&y.forEach(_=>_(p)),v)return v(p)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),s&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:n=>n},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="https://cdn.jsdelivr.net/gh/azota889/frontend2/angular/",(()=>{var e={666:0};r.f.j=(f,d)=>{var c=r.o(e,f)?e[f]:void 0;if(0!==c)if(c)d.push(c[2]);else if(666!=f){var a=new Promise((o,l)=>c=e[f]=[o,l]);d.push(c[2]=a);var s=r.p+r.u(f),i=new Error;r.l(s,o=>{if(r.o(e,f)&&(0!==(c=e[f])&&(e[f]=void 0),c)){var l=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;i.message="Loading chunk "+f+" failed.\n("+l+": "+u+")",i.name="ChunkLoadError",i.type=l,i.request=u,c[1](i)}},"chunk-"+f,f)}else e[f]=0},r.O.j=f=>0===e[f];var n=(f,d)=>{var i,b,[c,a,s]=d,o=0;if(c.some(u=>0!==e[u])){for(i in a)r.o(a,i)&&(r.m[i]=a[i]);if(s)var l=s(r)}for(f&&f(d);o<c.length;o++)r.o(e,b=c[o])&&e[b]&&e[b][0](),e[b]=0;return r.O(l)},t=self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})()})();