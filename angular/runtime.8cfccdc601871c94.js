(()=>{"use strict";var e,g={},h={};function r(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,loaded:!1,exports:{}};return g[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=g,e=[],r.O=(n,t,f,i)=>{if(!t){var a=1/0;for(c=0;c<e.length;c++){for(var[t,f,i]=e[c],l=!0,o=0;o<t.length;o++)(!1&i||a>=i)&&Object.keys(r.O).every(p=>r.O[p](t[o]))?t.splice(o--,1):(l=!1,i<a&&(a=i));if(l){e.splice(c--,1);var s=f();void 0!==s&&(n=s)}}return n}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[t,f,i]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},(()=>{var n,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__;r.t=function(t,f){if(1&f&&(t=this(t)),8&f||"object"==typeof t&&t&&(4&f&&t.__esModule||16&f&&"function"==typeof t.then))return t;var i=Object.create(null);r.r(i);var c={};n=n||[null,e({}),e([]),e(e)];for(var a=2&f&&t;"object"==typeof a&&!~n.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach(l=>c[l]=()=>t[l]);return c.default=()=>t,r.d(i,c),i}})(),r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((n,t)=>(r.f[t](e,n),n),[])),r.u=e=>(592===e?"common":e)+"."+{13:"78d7f888c834e573",35:"e89447c52a5eee3a",121:"5075e06fc410d55c",163:"79e5aeae87ab1ea6",237:"11b3c415da671f36",325:"844ae5ece13b0ec4",371:"80688dac6f692cab",399:"b688e28d4be01d95",441:"075c1a87a8371c1d",443:"840f53997c65f26d",494:"0f131af91770512f",558:"927ba0399fd4927e",592:"e97b7cf5c9895616",615:"4f181bd600e9c1ab",617:"65dda2394c9e58dc",620:"c2e967235ee912ea",626:"ac99049f88413157",632:"c6b6c30e5a3b9a18",649:"4eee9d029a44200b",735:"64367a0ed7db0d3b",781:"740ed0ec63ba0816",782:"e99920dd4369511d",841:"848b1c8f2207d412",846:"7a9a96cfa817124e",881:"7f3c957d2cf464d6",898:"af67b75043cbb702",920:"33591aca8a541c96"}[e]+".js",r.miniCssF=e=>{},r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={},n="BalacoClient:";r.l=(t,f,i,c)=>{if(e[t])e[t].push(f);else{var a,l;if(void 0!==i)for(var o=document.getElementsByTagName("script"),s=0;s<o.length;s++){var d=o[s];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==n+i){a=d;break}}a||(l=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",n+i),a.src=r.tu(t)),e[t]=[f];var b=(v,p)=>{a.onerror=a.onload=null,clearTimeout(u);var y=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),y&&y.forEach(_=>_(p)),v)return v(p)},u=setTimeout(b.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=b.bind(null,a.onerror),a.onload=b.bind(null,a.onload),l&&document.head.appendChild(a)}}})(),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:n=>n},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="https://cdn.jsdelivr.net/gh/azota889/frontend2/angular/",(()=>{var e={666:0};r.f.j=(f,i)=>{var c=r.o(e,f)?e[f]:void 0;if(0!==c)if(c)i.push(c[2]);else if(666!=f){var a=new Promise((d,b)=>c=e[f]=[d,b]);i.push(c[2]=a);var l=r.p+r.u(f),o=new Error;r.l(l,d=>{if(r.o(e,f)&&(0!==(c=e[f])&&(e[f]=void 0),c)){var b=d&&("load"===d.type?"missing":d.type),u=d&&d.target&&d.target.src;o.message="Loading chunk "+f+" failed.\n("+b+": "+u+")",o.name="ChunkLoadError",o.type=b,o.request=u,c[1](o)}},"chunk-"+f,f)}else e[f]=0},r.O.j=f=>0===e[f];var n=(f,i)=>{var o,s,[c,a,l]=i,d=0;if(c.some(u=>0!==e[u])){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(l)var b=l(r)}for(f&&f(i);d<c.length;d++)r.o(e,s=c[d])&&e[s]&&e[s][0](),e[s]=0;return r.O(b)},t=self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})()})();