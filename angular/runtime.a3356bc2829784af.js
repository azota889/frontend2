(()=>{"use strict";var e,g={},h={};function r(e){var f=h[e];if(void 0!==f)return f.exports;var t=h[e]={id:e,loaded:!1,exports:{}};return g[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=g,r.amdO={},e=[],r.O=(f,t,n,o)=>{if(!t){var a=1/0;for(i=0;i<e.length;i++){for(var[t,n,o]=e[i],s=!0,d=0;d<t.length;d++)(!1&o||a>=o)&&Object.keys(r.O).every(p=>r.O[p](t[d]))?t.splice(d--,1):(s=!1,o<a&&(a=o));if(s){e.splice(i--,1);var b=n();void 0!==b&&(f=b)}}return f}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[t,n,o]},r.n=e=>{var f=e&&e.__esModule?()=>e.default:()=>e;return r.d(f,{a:f}),f},(()=>{var f,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__;r.t=function(t,n){if(1&n&&(t=this(t)),8&n||"object"==typeof t&&t&&(4&n&&t.__esModule||16&n&&"function"==typeof t.then))return t;var o=Object.create(null);r.r(o);var i={};f=f||[null,e({}),e([]),e(e)];for(var a=2&n&&t;"object"==typeof a&&!~f.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach(s=>i[s]=()=>t[s]);return i.default=()=>t,r.d(o,i),o}})(),r.d=(e,f)=>{for(var t in f)r.o(f,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:f[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((f,t)=>(r.f[t](e,f),f),[])),r.u=e=>(592===e?"common":e)+"."+{35:"4229201483a0cba1",63:"108544b9bc5d673a",71:"f060fa943aac1b0a",98:"02e6f51bc84fb9b4",108:"fec0d43789d2538a",117:"4132e76c86123827",130:"38c73e3e1921a458",137:"3e99befd95415d52",223:"dea4b317d26cb26d",224:"b05dea34e1584c0c",237:"04ffa66e667e7c0a",261:"6bdc66fe7493d64e",297:"66c1a325e0f0a684",357:"2b4fd0fa1451a2af",371:"7e17cdd8615b3744",465:"1151c01a7933d7c2",467:"a111b68c8111d94a",489:"b8dcf1d0a4a6566a",497:"9cc5cded3a3de04b",510:"47f0de6aecf20181",528:"c129c89684265796",568:"f29fa7bb11250791",592:"6cdc78442a118866",609:"420540f686124e18",632:"d7b87ed0557c4529",720:"cbc8b7642e2cf382",735:"15a6e59245b7a343",748:"300aa50fdda01435",751:"37948e57cca269b0",766:"048945d626e36719",861:"479d0de8b6d69526",898:"ce330c0e7f421154",920:"33591aca8a541c96"}[e]+".js",r.miniCssF=e=>{},r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),(()=>{var e={},f="BalacoClient:";r.l=(t,n,o,i)=>{if(e[t])e[t].push(n);else{var a,s;if(void 0!==o)for(var d=document.getElementsByTagName("script"),b=0;b<d.length;b++){var c=d[b];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==f+o){a=c;break}}a||(s=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",f+o),a.src=r.tu(t)),e[t]=[n];var l=(v,p)=>{a.onerror=a.onload=null,clearTimeout(u);var y=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),y&&y.forEach(_=>_(p)),v)return v(p)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),s&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:f=>f},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="https://cdn.jsdelivr.net/gh/azota889/frontend2/angular/",(()=>{var e={666:0};r.f.j=(n,o)=>{var i=r.o(e,n)?e[n]:void 0;if(0!==i)if(i)o.push(i[2]);else if(666!=n){var a=new Promise((c,l)=>i=e[n]=[c,l]);o.push(i[2]=a);var s=r.p+r.u(n),d=new Error;r.l(s,c=>{if(r.o(e,n)&&(0!==(i=e[n])&&(e[n]=void 0),i)){var l=c&&("load"===c.type?"missing":c.type),u=c&&c.target&&c.target.src;d.message="Loading chunk "+n+" failed.\n("+l+": "+u+")",d.name="ChunkLoadError",d.type=l,d.request=u,i[1](d)}},"chunk-"+n,n)}else e[n]=0},r.O.j=n=>0===e[n];var f=(n,o)=>{var d,b,[i,a,s]=o,c=0;if(i.some(u=>0!==e[u])){for(d in a)r.o(a,d)&&(r.m[d]=a[d]);if(s)var l=s(r)}for(n&&n(o);c<i.length;c++)r.o(e,b=i[c])&&e[b]&&e[b][0](),e[b]=0;return r.O(l)},t=self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[];t.forEach(f.bind(null,0)),t.push=f.bind(null,t.push.bind(t))})()})();