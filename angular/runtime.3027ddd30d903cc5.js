(()=>{"use strict";var e,g={},h={};function r(e){var f=h[e];if(void 0!==f)return f.exports;var t=h[e]={id:e,loaded:!1,exports:{}};return g[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=g,r.amdO={},e=[],r.O=(f,t,n,d)=>{if(!t){var a=1/0;for(c=0;c<e.length;c++){for(var[t,n,d]=e[c],b=!0,i=0;i<t.length;i++)(!1&d||a>=d)&&Object.keys(r.O).every(p=>r.O[p](t[i]))?t.splice(i--,1):(b=!1,d<a&&(a=d));if(b){e.splice(c--,1);var s=n();void 0!==s&&(f=s)}}return f}d=d||0;for(var c=e.length;c>0&&e[c-1][2]>d;c--)e[c]=e[c-1];e[c]=[t,n,d]},r.n=e=>{var f=e&&e.__esModule?()=>e.default:()=>e;return r.d(f,{a:f}),f},(()=>{var f,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__;r.t=function(t,n){if(1&n&&(t=this(t)),8&n||"object"==typeof t&&t&&(4&n&&t.__esModule||16&n&&"function"==typeof t.then))return t;var d=Object.create(null);r.r(d);var c={};f=f||[null,e({}),e([]),e(e)];for(var a=2&n&&t;"object"==typeof a&&!~f.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach(b=>c[b]=()=>t[b]);return c.default=()=>t,r.d(d,c),d}})(),r.d=(e,f)=>{for(var t in f)r.o(f,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:f[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((f,t)=>(r.f[t](e,f),f),[])),r.u=e=>(592===e?"common":e)+"."+{63:"6b8b0b976ec773ba",71:"6c22d89295e497b8",108:"fec0d43789d2538a",117:"7a9baac18739bbe0",130:"cb5cb80db4484dff",143:"04bc3ab92425ab85",223:"4e4b8ecc1a785e9f",261:"da6acd3c9ae7de7a",345:"5e1e63908d551dec",371:"246299fc70cb6e39",395:"e625c6b525851c15",436:"d3d386743ffff6c5",465:"3d632dc26bf85f4f",489:"e11286226c327745",497:"9cc5cded3a3de04b",528:"29727a606aa3cd23",535:"25557dc6f5f96c0b",559:"f10d2b9735fce0d0",568:"5ffff6de9de54b35",592:"751cfcf518d60975",598:"47d8174770151c17",632:"0539f7470df93060",712:"f901bbb37650d110",720:"b7f57ffd359bab53",735:"456d3403e7bf58d1",748:"62038861f0d1d8e3",751:"2a2a3dfd4d844a53",766:"64d218c67b634b36",861:"aade681215ceeb9f",898:"e927a57ab5eeff22",908:"7bec60b38893ad21",920:"33591aca8a541c96",979:"4cdee13accfb4d4a"}[e]+".js",r.miniCssF=e=>{},r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),(()=>{var e={},f="BalacoClient:";r.l=(t,n,d,c)=>{if(e[t])e[t].push(n);else{var a,b;if(void 0!==d)for(var i=document.getElementsByTagName("script"),s=0;s<i.length;s++){var o=i[s];if(o.getAttribute("src")==t||o.getAttribute("data-webpack")==f+d){a=o;break}}a||(b=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",f+d),a.src=r.tu(t)),e[t]=[n];var l=(v,p)=>{a.onerror=a.onload=null,clearTimeout(u);var y=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),y&&y.forEach(_=>_(p)),v)return v(p)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),b&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:f=>f},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="https://cdn.jsdelivr.net/gh/azota889/frontend2/angular/",(()=>{var e={666:0};r.f.j=(n,d)=>{var c=r.o(e,n)?e[n]:void 0;if(0!==c)if(c)d.push(c[2]);else if(666!=n){var a=new Promise((o,l)=>c=e[n]=[o,l]);d.push(c[2]=a);var b=r.p+r.u(n),i=new Error;r.l(b,o=>{if(r.o(e,n)&&(0!==(c=e[n])&&(e[n]=void 0),c)){var l=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;i.message="Loading chunk "+n+" failed.\n("+l+": "+u+")",i.name="ChunkLoadError",i.type=l,i.request=u,c[1](i)}},"chunk-"+n,n)}else e[n]=0},r.O.j=n=>0===e[n];var f=(n,d)=>{var i,s,[c,a,b]=d,o=0;if(c.some(u=>0!==e[u])){for(i in a)r.o(a,i)&&(r.m[i]=a[i]);if(b)var l=b(r)}for(n&&n(d);o<c.length;o++)r.o(e,s=c[o])&&e[s]&&e[s][0](),e[s]=0;return r.O(l)},t=self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[];t.forEach(f.bind(null,0)),t.push=f.bind(null,t.push.bind(t))})()})();