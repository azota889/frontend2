(()=>{"use strict";var e,g={},h={};function r(e){var f=h[e];if(void 0!==f)return f.exports;var t=h[e]={id:e,loaded:!1,exports:{}};return g[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=g,r.amdO={},e=[],r.O=(f,t,n,d)=>{if(!t){var a=1/0;for(c=0;c<e.length;c++){for(var[t,n,d]=e[c],s=!0,i=0;i<t.length;i++)(!1&d||a>=d)&&Object.keys(r.O).every(p=>r.O[p](t[i]))?t.splice(i--,1):(s=!1,d<a&&(a=d));if(s){e.splice(c--,1);var b=n();void 0!==b&&(f=b)}}return f}d=d||0;for(var c=e.length;c>0&&e[c-1][2]>d;c--)e[c]=e[c-1];e[c]=[t,n,d]},r.n=e=>{var f=e&&e.__esModule?()=>e.default:()=>e;return r.d(f,{a:f}),f},(()=>{var f,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__;r.t=function(t,n){if(1&n&&(t=this(t)),8&n||"object"==typeof t&&t&&(4&n&&t.__esModule||16&n&&"function"==typeof t.then))return t;var d=Object.create(null);r.r(d);var c={};f=f||[null,e({}),e([]),e(e)];for(var a=2&n&&t;"object"==typeof a&&!~f.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach(s=>c[s]=()=>t[s]);return c.default=()=>t,r.d(d,c),d}})(),r.d=(e,f)=>{for(var t in f)r.o(f,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:f[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((f,t)=>(r.f[t](e,f),f),[])),r.u=e=>(592===e?"common":e)+"."+{21:"22b3e077dec01d84",28:"b29f4726ba51355c",30:"32cfab6e15926e33",53:"4aef839dacfdb107",66:"2b1a799971f54f59",113:"cb4e0c87914e5dc5",149:"8b03e6ad7154408b",188:"f6d72d011e44718f",199:"c76c7f632469b299",223:"eaaa7754ed76978b",298:"b9751d92e252f782",320:"602c6ede9e2e5338",330:"ad78053d86ab5016",332:"a87c7a8bd0c600ff",365:"5539506999138c5b",462:"f9a49db0f2bf919f",484:"032162f98a00124f",530:"7c79e5a3342cd9d2",583:"7ccbf3433040bd08",585:"3f56223192faf7f9",592:"eaca043a3f8e5b6a",661:"84fae43d88efcff0",663:"21355458aa9c1e0c",668:"39848009fc182dd7",706:"47b1f059422bed54",744:"a1050fb4680f783e",750:"526f124fc5dd4d22",777:"ad999ca1507c554f",790:"fe6369eb8f278b4a",811:"1b9bb49f6a2cea07",815:"344b2aea161c0b91",854:"864a941efcec9f83",889:"defaadcc40220f6a",904:"bdd3c31530b2b767",957:"7622ccb3c8e210b8",958:"047caa59e0822a48"}[e]+".js",r.miniCssF=e=>{},r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),(()=>{var e={},f="BalacoClient:";r.l=(t,n,d,c)=>{if(e[t])e[t].push(n);else{var a,s;if(void 0!==d)for(var i=document.getElementsByTagName("script"),b=0;b<i.length;b++){var o=i[b];if(o.getAttribute("src")==t||o.getAttribute("data-webpack")==f+d){a=o;break}}a||(s=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",f+d),a.src=r.tu(t)),e[t]=[n];var l=(v,p)=>{a.onerror=a.onload=null,clearTimeout(u);var y=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),y&&y.forEach(_=>_(p)),v)return v(p)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),s&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:f=>f},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="https://cdn.jsdelivr.net/gh/azota889/frontend2/angular/",(()=>{var e={666:0};r.f.j=(n,d)=>{var c=r.o(e,n)?e[n]:void 0;if(0!==c)if(c)d.push(c[2]);else if(666!=n){var a=new Promise((o,l)=>c=e[n]=[o,l]);d.push(c[2]=a);var s=r.p+r.u(n),i=new Error;r.l(s,o=>{if(r.o(e,n)&&(0!==(c=e[n])&&(e[n]=void 0),c)){var l=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;i.message="Loading chunk "+n+" failed.\n("+l+": "+u+")",i.name="ChunkLoadError",i.type=l,i.request=u,c[1](i)}},"chunk-"+n,n)}else e[n]=0},r.O.j=n=>0===e[n];var f=(n,d)=>{var i,b,[c,a,s]=d,o=0;if(c.some(u=>0!==e[u])){for(i in a)r.o(a,i)&&(r.m[i]=a[i]);if(s)var l=s(r)}for(n&&n(d);o<c.length;o++)r.o(e,b=c[o])&&e[b]&&e[b][0](),e[b]=0;return r.O(l)},t=self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[];t.forEach(f.bind(null,0)),t.push=f.bind(null,t.push.bind(t))})()})();