(()=>{"use strict";var e,g={},h={};function r(e){var f=h[e];if(void 0!==f)return f.exports;var t=h[e]={id:e,loaded:!1,exports:{}};return g[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=g,r.amdO={},e=[],r.O=(f,t,d,c)=>{if(!t){var a=1/0;for(n=0;n<e.length;n++){for(var[t,d,c]=e[n],s=!0,i=0;i<t.length;i++)(!1&c||a>=c)&&Object.keys(r.O).every(p=>r.O[p](t[i]))?t.splice(i--,1):(s=!1,c<a&&(a=c));if(s){e.splice(n--,1);var b=d();void 0!==b&&(f=b)}}return f}c=c||0;for(var n=e.length;n>0&&e[n-1][2]>c;n--)e[n]=e[n-1];e[n]=[t,d,c]},r.n=e=>{var f=e&&e.__esModule?()=>e.default:()=>e;return r.d(f,{a:f}),f},(()=>{var f,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__;r.t=function(t,d){if(1&d&&(t=this(t)),8&d||"object"==typeof t&&t&&(4&d&&t.__esModule||16&d&&"function"==typeof t.then))return t;var c=Object.create(null);r.r(c);var n={};f=f||[null,e({}),e([]),e(e)];for(var a=2&d&&t;"object"==typeof a&&!~f.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach(s=>n[s]=()=>t[s]);return n.default=()=>t,r.d(c,n),c}})(),r.d=(e,f)=>{for(var t in f)r.o(f,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:f[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((f,t)=>(r.f[t](e,f),f),[])),r.u=e=>(592===e?"common":e)+"."+{9:"a02ebb32c7dcad55",40:"838ed2957261f61c",51:"4aca55b49b14e1dc",111:"8d701cf567775eca",124:"fd709be849b05fcc",129:"70cbec8b3da1adb1",137:"a26584370ec71c2a",173:"24ddb2dc3680ef83",228:"dd518757c87fd283",260:"a7c8e9adb77885b0",271:"ee359f1f6ec7253f",301:"7ff8a780ec1e6d43",350:"432f510518354f99",365:"9f2c8ffd6aa842b0",388:"fd248412b3204c07",395:"4a892b5d200b4933",428:"abe273ebd119b79f",455:"ade0cfb4eb0ec588",474:"1d1f15c9811ad2fd",484:"874a7bbf18931cd4",549:"6d5bc9aa0b038d9d",592:"21ce81f217d1212c",596:"2c369e7c38228014",612:"03ff7f0b08be57cb",622:"e1dea0b1d97250fb",632:"c478171be70b52b7",662:"4d63d78383bf4cb2",663:"21355458aa9c1e0c",728:"d1f5d50244231d39",733:"f4f926b908934b80",735:"4f58bb58beb4ec4f",738:"1ed986b70fd4ded1",772:"1e1a3e6e5fa3a6d2",787:"485b13741ac3184b",809:"e5be89c0cfdcd6e0",828:"60728b1bff1fe13c",892:"5145e411ceaa12c3",896:"b4e7b9ddb0bd3452",904:"5c3a8050daee863c",905:"2e38d2db9791a1d7",913:"5207638dcc1ab497",918:"9ee571d111531942",931:"1eb248d8d584663a",958:"06ee885c4f60b204",970:"d3fadcde42daefa1"}[e]+".js",r.miniCssF=e=>{},r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),(()=>{var e={},f="BalacoClient:";r.l=(t,d,c,n)=>{if(e[t])e[t].push(d);else{var a,s;if(void 0!==c)for(var i=document.getElementsByTagName("script"),b=0;b<i.length;b++){var o=i[b];if(o.getAttribute("src")==t||o.getAttribute("data-webpack")==f+c){a=o;break}}a||(s=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",f+c),a.src=r.tu(t)),e[t]=[d];var l=(v,p)=>{a.onerror=a.onload=null,clearTimeout(u);var y=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),y&&y.forEach(_=>_(p)),v)return v(p)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),s&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:f=>f},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="https://cdn.jsdelivr.net/gh/azota889/frontend2/angular/",(()=>{var e={666:0};r.f.j=(d,c)=>{var n=r.o(e,d)?e[d]:void 0;if(0!==n)if(n)c.push(n[2]);else if(666!=d){var a=new Promise((o,l)=>n=e[d]=[o,l]);c.push(n[2]=a);var s=r.p+r.u(d),i=new Error;r.l(s,o=>{if(r.o(e,d)&&(0!==(n=e[d])&&(e[d]=void 0),n)){var l=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;i.message="Loading chunk "+d+" failed.\n("+l+": "+u+")",i.name="ChunkLoadError",i.type=l,i.request=u,n[1](i)}},"chunk-"+d,d)}else e[d]=0},r.O.j=d=>0===e[d];var f=(d,c)=>{var i,b,[n,a,s]=c,o=0;if(n.some(u=>0!==e[u])){for(i in a)r.o(a,i)&&(r.m[i]=a[i]);if(s)var l=s(r)}for(d&&d(c);o<n.length;o++)r.o(e,b=n[o])&&e[b]&&e[b][0](),e[b]=0;return r.O(l)},t=self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[];t.forEach(f.bind(null,0)),t.push=f.bind(null,t.push.bind(t))})()})();