(()=>{"use strict";var e,g={},h={};function r(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,loaded:!1,exports:{}};return g[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=g,r.amdO={},e=[],r.O=(n,t,d,c)=>{if(!t){var a=1/0;for(f=0;f<e.length;f++){for(var[t,d,c]=e[f],s=!0,i=0;i<t.length;i++)(!1&c||a>=c)&&Object.keys(r.O).every(p=>r.O[p](t[i]))?t.splice(i--,1):(s=!1,c<a&&(a=c));if(s){e.splice(f--,1);var b=d();void 0!==b&&(n=b)}}return n}c=c||0;for(var f=e.length;f>0&&e[f-1][2]>c;f--)e[f]=e[f-1];e[f]=[t,d,c]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},(()=>{var n,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__;r.t=function(t,d){if(1&d&&(t=this(t)),8&d||"object"==typeof t&&t&&(4&d&&t.__esModule||16&d&&"function"==typeof t.then))return t;var c=Object.create(null);r.r(c);var f={};n=n||[null,e({}),e([]),e(e)];for(var a=2&d&&t;"object"==typeof a&&!~n.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach(s=>f[s]=()=>t[s]);return f.default=()=>t,r.d(c,f),c}})(),r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((n,t)=>(r.f[t](e,n),n),[])),r.u=e=>(592===e?"common":e)+"."+{28:"b29f4726ba51355c",66:"2b1a799971f54f59",113:"3202c8c90c571cd0",167:"9d7417807e3ba387",188:"b6a820a27c533292",199:"c76c7f632469b299",223:"eaaa7754ed76978b",298:"ff52ad4a89d92983",320:"602c6ede9e2e5338",330:"ad78053d86ab5016",332:"919ee1f167956459",365:"5539506999138c5b",400:"bb2ba7e5bef17fcd",455:"c3223152e941a009",462:"b325842883ce0782",483:"a6f12991fa7b013c",484:"2508557e03a2a234",530:"7c79e5a3342cd9d2",583:"25d995533ea014b0",592:"eaca043a3f8e5b6a",661:"fb09f0bc08385bb8",663:"21355458aa9c1e0c",668:"52363f9ee165202a",675:"338cbdeae50bdaaa",706:"7015769b8070fc2b",744:"e9a7f548a90bb946",750:"270adbbeeef9882c",777:"ad999ca1507c554f",790:"fe6369eb8f278b4a",811:"1cce5ac31d877268",815:"344b2aea161c0b91",868:"1aca9f714f6264fc",904:"2132fa6d253f281b",941:"cf35cb2a6ecdeae9",957:"4a5932cf4fa4f475",958:"047caa59e0822a48"}[e]+".js",r.miniCssF=e=>{},r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={},n="BalacoClient:";r.l=(t,d,c,f)=>{if(e[t])e[t].push(d);else{var a,s;if(void 0!==c)for(var i=document.getElementsByTagName("script"),b=0;b<i.length;b++){var o=i[b];if(o.getAttribute("src")==t||o.getAttribute("data-webpack")==n+c){a=o;break}}a||(s=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",n+c),a.src=r.tu(t)),e[t]=[d];var l=(v,p)=>{a.onerror=a.onload=null,clearTimeout(u);var y=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),y&&y.forEach(_=>_(p)),v)return v(p)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),s&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:n=>n},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="https://cdn.jsdelivr.net/gh/azota889/frontend2/angular/",(()=>{var e={666:0};r.f.j=(d,c)=>{var f=r.o(e,d)?e[d]:void 0;if(0!==f)if(f)c.push(f[2]);else if(666!=d){var a=new Promise((o,l)=>f=e[d]=[o,l]);c.push(f[2]=a);var s=r.p+r.u(d),i=new Error;r.l(s,o=>{if(r.o(e,d)&&(0!==(f=e[d])&&(e[d]=void 0),f)){var l=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;i.message="Loading chunk "+d+" failed.\n("+l+": "+u+")",i.name="ChunkLoadError",i.type=l,i.request=u,f[1](i)}},"chunk-"+d,d)}else e[d]=0},r.O.j=d=>0===e[d];var n=(d,c)=>{var i,b,[f,a,s]=c,o=0;if(f.some(u=>0!==e[u])){for(i in a)r.o(a,i)&&(r.m[i]=a[i]);if(s)var l=s(r)}for(d&&d(c);o<f.length;o++)r.o(e,b=f[o])&&e[b]&&e[b][0](),e[b]=0;return r.O(l)},t=self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})()})();