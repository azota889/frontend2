(()=>{"use strict";var e,g={},h={};function r(e){var f=h[e];if(void 0!==f)return f.exports;var t=h[e]={id:e,loaded:!1,exports:{}};return g[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=g,r.amdO={},e=[],r.O=(f,t,n,c)=>{if(!t){var a=1/0;for(d=0;d<e.length;d++){for(var[t,n,c]=e[d],s=!0,i=0;i<t.length;i++)(!1&c||a>=c)&&Object.keys(r.O).every(p=>r.O[p](t[i]))?t.splice(i--,1):(s=!1,c<a&&(a=c));if(s){e.splice(d--,1);var b=n();void 0!==b&&(f=b)}}return f}c=c||0;for(var d=e.length;d>0&&e[d-1][2]>c;d--)e[d]=e[d-1];e[d]=[t,n,c]},r.n=e=>{var f=e&&e.__esModule?()=>e.default:()=>e;return r.d(f,{a:f}),f},(()=>{var f,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__;r.t=function(t,n){if(1&n&&(t=this(t)),8&n||"object"==typeof t&&t&&(4&n&&t.__esModule||16&n&&"function"==typeof t.then))return t;var c=Object.create(null);r.r(c);var d={};f=f||[null,e({}),e([]),e(e)];for(var a=2&n&&t;"object"==typeof a&&!~f.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach(s=>d[s]=()=>t[s]);return d.default=()=>t,r.d(c,d),c}})(),r.d=(e,f)=>{for(var t in f)r.o(f,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:f[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((f,t)=>(r.f[t](e,f),f),[])),r.u=e=>(592===e?"common":e)+"."+{35:"4a1e96d5ded0edc0",63:"19ef8aee60ef5554",71:"170c6566f2c85692",98:"f1857524b4e39aee",108:"fec0d43789d2538a",117:"4132e76c86123827",130:"38c73e3e1921a458",137:"c26c8e1bc56d0094",223:"dea4b317d26cb26d",224:"b91a2e7e204e30b6",237:"04ffa66e667e7c0a",261:"694bce221637083c",297:"d79c20c26e9e450a",357:"7b0cf606f0641140",371:"7e17cdd8615b3744",465:"69bd923677643a10",467:"a111b68c8111d94a",489:"2ea54c763ee83cfe",497:"9cc5cded3a3de04b",510:"e006a4285e581f1f",528:"5633832b1bf14de3",568:"8dc44baaaec48039",592:"6cdc78442a118866",609:"1e14859bd8bfbb88",632:"d7b87ed0557c4529",720:"cbc8b7642e2cf382",735:"15a6e59245b7a343",748:"300aa50fdda01435",751:"fc75fba9a24ece07",766:"e259800d1535f501",861:"479d0de8b6d69526",898:"1cca0550a3101073",920:"33591aca8a541c96"}[e]+".js",r.miniCssF=e=>{},r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),(()=>{var e={},f="BalacoClient:";r.l=(t,n,c,d)=>{if(e[t])e[t].push(n);else{var a,s;if(void 0!==c)for(var i=document.getElementsByTagName("script"),b=0;b<i.length;b++){var o=i[b];if(o.getAttribute("src")==t||o.getAttribute("data-webpack")==f+c){a=o;break}}a||(s=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",f+c),a.src=r.tu(t)),e[t]=[n];var l=(v,p)=>{a.onerror=a.onload=null,clearTimeout(u);var y=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),y&&y.forEach(_=>_(p)),v)return v(p)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),s&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:f=>f},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="https://cdn.jsdelivr.net/gh/azota889/frontend2/angular/",(()=>{var e={666:0};r.f.j=(n,c)=>{var d=r.o(e,n)?e[n]:void 0;if(0!==d)if(d)c.push(d[2]);else if(666!=n){var a=new Promise((o,l)=>d=e[n]=[o,l]);c.push(d[2]=a);var s=r.p+r.u(n),i=new Error;r.l(s,o=>{if(r.o(e,n)&&(0!==(d=e[n])&&(e[n]=void 0),d)){var l=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;i.message="Loading chunk "+n+" failed.\n("+l+": "+u+")",i.name="ChunkLoadError",i.type=l,i.request=u,d[1](i)}},"chunk-"+n,n)}else e[n]=0},r.O.j=n=>0===e[n];var f=(n,c)=>{var i,b,[d,a,s]=c,o=0;if(d.some(u=>0!==e[u])){for(i in a)r.o(a,i)&&(r.m[i]=a[i]);if(s)var l=s(r)}for(n&&n(c);o<d.length;o++)r.o(e,b=d[o])&&e[b]&&e[b][0](),e[b]=0;return r.O(l)},t=self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[];t.forEach(f.bind(null,0)),t.push=f.bind(null,t.push.bind(t))})()})();