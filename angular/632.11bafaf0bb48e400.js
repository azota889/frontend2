"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[632],{91581:(y,S,_)=>{_.d(S,{s:()=>x});var t=_(65879);let x=(()=>{class o{static#t=this.PADDING_ITEM=40;constructor(l){this.el=l,this.answerSizeManager=0,this.process()}ngOnChanges(l){l.answerSizeManager&&l.answerSizeManager.currentValue!==l.answerSizeManager.previousValue&&l.answerSizeManager.currentValue>=1&&this.process()}process(){this.onElementLoaded().then(l=>{const k=this.el.nativeElement,f=k.children,A=[];for(let z=0;z<f.length;z++)A.push(this.getSizeWidthElement(f[z]));let P=1;[2,4].forEach(z=>{this.isLayout(l.width,A,z)&&(P=z)}),k.classList.remove("row");for(let z=0;z<f.length;z++){const a=f[z];a.classList.remove("col-sm-12"),a.classList.remove("col-md-6")}k.classList.add("layout"),k.classList.add("layout-"+P)})}isLayout(l,k,f){const A=Math.floor(l/f);for(const P of k)if(P+o.PADDING_ITEM>A)return!1;return!0}onElementLoaded(){return new Promise((l,k)=>{let f=!1;for(let A=0;A<=10;A++)setTimeout(()=>{if(!f){const P=this.actionGetSizeBox();P.width>0&&P.height&&(f=!0,l(P))}10===A&&!f&&k(new Error)},100*A)})}actionGetSizeBox(){return this.el.nativeElement.getBoundingClientRect()}getSizeWidthElement(l){let k=0;for(let f=0;f<l.children.length;f++)k+=l.children[f].getBoundingClientRect().width;return k}static#e=this.\u0275fac=function(k){return new(k||o)(t.Y36(t.SBq))};static#n=this.\u0275dir=t.lG2({type:o,selectors:[["","answerSizeManager",""]],inputs:{answerSizeManager:"answerSizeManager"},features:[t.TTD]})}return o})()},89745:(y,S,_)=>{_.d(S,{v:()=>t});class t{constructor(){this.answerLabelsMockup={}}}},70731:(y,S,_)=>{_.d(S,{Q:()=>t});class t{constructor(o,p,l,k){this.tasks=new Array,this.queues=new Array,this.is_running=!1,this.all_tasks=0,this.wrap_counter=0,this.wrap_counter_done=0,this.count_task_root_done=0,this.limit_one_process=o,this.result_common_temp={datas:[],errs:[]},this.action_log_item=p,this.delay_time=l||1e3,this.end_with_error=k??!1}addTask(o,p,l,k){if(this.is_running)return;var f=l||[];const A=this.queues.length;this.all_tasks++,this.queues.push({task:()=>new Promise(z=>{this.wrap_counter++,p.call(o,...f).then(a=>{this.wrap_counter_done++,this.callLog(k),z({status:!0,value:a,index:A})}).catch(a=>{this.wrap_counter_done++,this.callLog(k),z({status:!1,error:a,index:A})})}),name:k})}callLog(o){this.action_log_item&&this.all_tasks>0&&this.action_log_item.function.call({},this.wrap_counter_done,this.all_tasks,...this.action_log_item.params?this.action_log_item.params:[],o)}start(){return new Promise(o=>{0===this.queues.length&&o({datas:[],errs:[]}),this.result_common_temp={datas:[],errs:[]};for(let p=0;p<this.limit_one_process;p++){const l=this.queues.shift();if(!l)break;this.tasks.push(l)}this.count_task_root_done=0,this.is_running=!0,this.runner(o)})}checker(o,p){this.count_task_root_done++,o.status&&o.value?this.result_common_temp.datas.push({index:o.index,value:o.value}):o.error&&this.result_common_temp.errs.push({index:o.index,value:o.error}),this.result_common_temp.errs.length>0&&this.end_with_error&&(this.is_running=!1,p(this.makeResultObj())),this.count_task_root_done===this.all_tasks&&(this.is_running=!1,p(this.makeResultObj())),this.nextItem(p)}makeResultObj(){return{datas:this.result_common_temp.datas.sort(function(o,p){return o.index-p.index}).map(o=>o.value),errs:this.result_common_temp.errs.sort(function(o,p){return o.index-p.index}).map(o=>o.value)}}nextItem(o){const p=this.queues.shift();p&&p.task.call(this).then(l=>{this.checker(l,o)})}runner(o){this.tasks.length>0?this.tasks.forEach(p=>{p.task.call(this).then(l=>{this.checker(l,o)})}):(this.is_running=!1,o(this.makeResultObj()))}}},32169:(y,S,_)=>{_.d(S,{n:()=>A});var t=_(15861),x=_(69862),o=_(70731),p=_(65879),l=_(46558),k=_(82228);const f=_(47246);let A=(()=>{class P{constructor(a,i){this.commonService=a,this.apiUploadService=i,this.dataRaws=[],this.stringFirstOld=["zCv:"],this.stringFirst="zCo:"}static#t=this.searchPattern=/data-azt-math-raw=[\\"']+([^"']+)["']/g;getValueContentQuestion(a){return this.commonService.castJsonToObj(a)??[]}getAllMatchWithContent(a){let r,i=[];for(;null!==(r=P.searchPattern.exec(a));)i.includes(r[0])||i.push(r[0]);return i}getRawContent(a,i){return new Promise((r,c)=>{const h=this.dataRaws.findIndex(m=>m.l===a);-1===h?fetch(a).then(m=>m.blob()).then(m=>m.arrayBuffer()).then(m=>{const T=f.inflate(m),E=this.commonService.castJsonToObj((new TextDecoder).decode(T));this.dataRaws.push({l:a,d:E??[]}),E&&E[i]?r(E[i]):c()}).catch(()=>{c()}):this.dataRaws[h].d&&this.dataRaws[h].d[i]?r(this.dataRaws[h].d[i]):c()})}uploadRawContent(a){return new Promise((i,r)=>{const c=JSON.stringify(a),h=(new TextEncoder).encode(c),m=f.deflate(h),T=new Blob([m],{type:"application/octet-stream"}),E=new File([T],"question_save_mathtype.gz",{type:"application/octet-stream"});this.apiUploadService.uploadToCdnQuestionRawMathTypeData(E).subscribe(C=>{C.type!=x.dt.UploadProgress&&(1==C.success&&C.data?i(C.data.url??""):r(new Error("lang_auto_khong_upload_duoc_anh_vui_long_thu_lai_sau_loi[SPLIT_LANG] [SPLIT_LANG]"+C.message)))})})}encodeContent(a){let i=this.getAllMatchWithContent(a),r=[];for(let c=0;c<i.length;c++){let m=i[c].replace(P.searchPattern,"$1");m.startsWith(this.stringFirst)||r.push({l:m,i:r.length})}return{content:a,raws:r}}decodeContent(a){var i=this;return(0,t.Z)(function*(){let r=i.getAllMatchWithContent(a);for(let c=0;c<r.length;c++){const h=r[c];let m=h.replace(P.searchPattern,"$1");for(let T=0;T<i.stringFirstOld.length;T++)if(m.startsWith(i.stringFirstOld[T])){a=i.commonService.replaceAll(a,h,"")??"";continue}if(m.startsWith(i.stringFirst)){let T=i.commonService.castJsonToObj(atob(m.replace(i.stringFirst,"")));if(T){let E=yield i.getRawContent(T.l,T.i);a=i.commonService.replaceAll(a,m,E)??""}}}return a})()}encodeQuestion(a){return new Promise(i=>{var r=this.getValueContentQuestion(a.questionContent??""),c=this.getValueContentQuestion(a.answerConfig??""),h=a.answerMedia??"";if(0===r.length||0===c.length)return void i(a);let m=this.encodeContent(r[0].content),T=[];c.forEach((u,w)=>{T.push({i:w,d:this.encodeContent(u.content)})});let E=this.encodeContent(h);var C=0;let v=[];for(let u=0;u<m.raws.length;u++)m.raws[u].i=C,C++,v.push(m.raws[u]);for(let u=0;u<E.raws.length;u++)E.raws[u].i=C,C++,v.push(E.raws[u]);T.forEach(u=>{for(let w=0;w<u.d.raws.length;w++)u.d.raws[w].i=C,C++,v.push(u.d.raws[w])}),v.length>0?this.uploadRawContent(v.map(u=>u.l)).then(u=>{m.raws.forEach(w=>{let I=this.stringFirst+btoa(JSON.stringify({l:u,i:w.i}));r[0].content=this.commonService.replaceAll(r[0].content,w.l,I)??""}),E.raws.forEach(w=>{let I=this.stringFirst+btoa(JSON.stringify({l:u,i:w.i}));h=this.commonService.replaceAll(h,w.l,I)??""}),T.forEach(w=>{w.d.raws.forEach(I=>{let O=this.stringFirst+btoa(JSON.stringify({l:u,i:I.i}));c[w.i].content=this.commonService.replaceAll(c[w.i].content,I.l,O)??""})}),a.questionContent=JSON.stringify(r),a.answerConfig=JSON.stringify(c),a.answerMedia=h,i(a)}).catch(()=>{i(a)}):i(a)})}decodeQuestion(a){return new Promise(i=>{const r=new o.Q(10);if(r.addTask(this,()=>new Promise(c=>{this.decodeContent(a.content??"").then(h=>{a.content=h,c(!0)}).catch(()=>{c(!1)})})),r.addTask(this,()=>new Promise(c=>{this.decodeContent(a.help??"").then(h=>{a.help=h,c(!0)}).catch(()=>{c(!1)})})),a.answers)for(let c=0;c<a.answers.length;c++)r.addTask(this,()=>new Promise(h=>{a.answers&&this.decodeContent(a.answers[c].content??"").then(m=>{a.answers&&(a.answers[c].content=m),h(!0)}).catch(()=>{h(!1)})}));r.start().then(()=>{i()})})}static#e=this.\u0275fac=function(i){return new(i||P)(p.LFG(l.z),p.LFG(k.W))};static#n=this.\u0275prov=p.Yz7({token:P,factory:P.\u0275fac,providedIn:"root"})}return P})()},19662:(y,S,_)=>{_.d(S,{h:()=>A});var t=_(8720),x=_(70731),o=_(70860),p=_(65879),l=_(32965),k=_(46558),f=_(32169);let A=(()=>{class P{pushImage(a,i,r){if(r){let c=new RegExp("<div id='"+a+"'[^>]+></div>","g");r.content&&(r.content=r.content.replace(c,i??"")),r.answers&&r.answers.forEach(h=>{h.content=h.content?.replace(c,i??"")}),r.help&&(r.help=r.help.replace(c,i??"")),r.groupInfo&&r.groupInfo.groupContent&&(r.groupInfo.groupContent=r.groupInfo.groupContent.replace(c,i??""))}}parseRenderQuestions(a,i,r,c,h,m){return new Promise((T,E)=>{const v=new x.Q(25,{function:(u,w)=>{const I=(u+25)/w*100;i&&i(I>=100?99:I)}},c??1e3);a.forEach(u=>{v.addTask(this,this.parseRenderQuestion,[u,r,h,m])}),v.start().then(u=>{if(u.errs.length>0){const w=[];u.errs.forEach(I=>{let O=w.find(Z=>Z.type===I.type);O||w.push(I),O?.data.concat(I.data)}),E(w)}else T(a)})})}parseRenderQuestion(a,i,r,c){return new Promise((h,m)=>{var T=new o.W(this.cdnService,this.commonService,i||new t.v,v=>{m(v)});T.callbackPushImage=(v,u)=>{this.pushImage(v,u,a)},T.caller=this;const C=new x.Q(c?1:20,void 0,0);a.content&&C.addTask(this,()=>new Promise(v=>{a.content=T.render(this.commonService.removeBracket(a.content??""),()=>{v()})})),a.answers&&a.answers.forEach(v=>{C.addTask(this,()=>new Promise(u=>{v.content=T.render(v.content||"",()=>{u()})}))}),a.help&&C.addTask(this,()=>new Promise(v=>{a.help=T.render(a.help,()=>{v()})})),a.groupInfo&&a.groupInfo.groupContent&&C.addTask(this,()=>new Promise(v=>{a.groupInfo&&a.groupInfo.groupContent?a.groupInfo.groupContent=T.render(this.commonService.removeBracket(a.groupInfo.groupContent),()=>{v()}):v()})),r&&C.addTask(this,()=>new Promise(v=>{this.dataAztMathRawHelper.decodeQuestion(a).then(()=>{v()})})),C.start().then(v=>{v.errs.length>0||h()})})}constructor(a,i,r){this.cdnService=a,this.commonService=i,this.dataAztMathRawHelper=r}static#t=this.\u0275fac=function(i){return new(i||P)(p.LFG(l.E),p.LFG(k.z),p.LFG(f.n))};static#e=this.\u0275prov=p.Yz7({token:P,factory:P.\u0275fac,providedIn:"root"})}return P})()},83306:(y,S,_)=>{_.d(S,{L:()=>F});var t=_(65879),x=_(47496),o=_(96814),p=_(21266),l=_(40750);function k(n,d){if(1&n){const e=t.EpF();t.TgZ(0,"li",5)(1,"a",6),t.NdJ("click",function(){t.CHM(e);const g=t.oxw(2);return t.KtG(g.clickPage(g.page-1))}),t.TgZ(2,"span",7),t._uU(3,"\xab"),t.qZA(),t.TgZ(4,"span",8),t._uU(5,"Previous"),t.qZA()()()}}const f=function(n){return[n]};function A(n,d){if(1&n){const e=t.EpF();t.TgZ(0,"a",13),t.NdJ("click",function(){t.CHM(e);const g=t.oxw().$implicit,M=t.oxw(3);return t.KtG(M.clickPage(g))}),t.ALo(1,"navigationLocalize"),t._uU(2),t.qZA()}if(2&n){const e=t.oxw().$implicit,s=t.oxw(3);t.Q6J("routerLink",t.VKq(5,f,t.lcZ(1,3,s.linkPage)))("queryParams",s.eventSearchHandle(e)),t.xp6(2),t.hij("",e," ")}}function P(n,d){if(1&n){const e=t.EpF();t.TgZ(0,"a",14),t.NdJ("click",function(){t.CHM(e);const g=t.oxw().$implicit,M=t.oxw(3);return t.KtG(M.clickPage(g))}),t.ALo(1,"navigationLocalize"),t._uU(2),t.qZA()}if(2&n){const e=t.oxw().$implicit,s=t.oxw(3);t.Q6J("routerLink",t.VKq(5,f,t.lcZ(1,3,s.linkPage)))("queryParams",s.eventSearchHandle(e)),t.xp6(2),t.hij("",e," ")}}const z=function(n){return{active:n}};function a(n,d){if(1&n&&(t.TgZ(0,"li",10),t.YNc(1,A,3,7,"a",11),t.YNc(2,P,3,7,"a",12),t.qZA()),2&n){const e=d.$implicit,s=t.oxw(3);t.Q6J("ngClass",t.VKq(3,z,s.page==e)),t.xp6(1),t.Q6J("ngIf",s.page==e),t.xp6(1),t.Q6J("ngIf",s.page!=e&&e<=s.page+3&&e>=s.page-3)}}function i(n,d){if(1&n&&(t.ynx(0),t.YNc(1,a,3,5,"li",9),t.BQk()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e.arrayPag)}}function r(n,d){if(1&n){const e=t.EpF();t.TgZ(0,"a",17),t.NdJ("click",function(){t.CHM(e);const g=t.oxw().$implicit,M=t.oxw(3);return t.KtG(M.clickPage(g))}),t._uU(1),t.qZA()}if(2&n){const e=t.oxw().$implicit;t.xp6(1),t.hij("",e," ")}}function c(n,d){if(1&n){const e=t.EpF();t.TgZ(0,"a",18),t.NdJ("click",function(){t.CHM(e);const g=t.oxw().$implicit,M=t.oxw(3);return t.KtG(M.clickPage(g))}),t._uU(1),t.qZA()}if(2&n){const e=t.oxw().$implicit;t.xp6(1),t.hij("",e," ")}}function h(n,d){if(1&n&&(t.TgZ(0,"li",10),t.YNc(1,r,2,1,"a",15),t.YNc(2,c,2,1,"a",16),t.qZA()),2&n){const e=d.$implicit,s=t.oxw(3);t.Q6J("ngClass",t.VKq(3,z,s.page==e)),t.xp6(1),t.Q6J("ngIf",s.page==e),t.xp6(1),t.Q6J("ngIf",s.page!=e&&e<=s.page+3&&e>=s.page-3)}}function m(n,d){if(1&n&&(t.ynx(0),t.YNc(1,h,3,5,"li",9),t.BQk()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e.arrayPag)}}function T(n,d){if(1&n){const e=t.EpF();t.TgZ(0,"li",5)(1,"a",21),t.NdJ("click",function(){t.CHM(e);const g=t.oxw(3);return t.KtG(g.clickPage(1))}),t.ALo(2,"navigationLocalize"),t._uU(3,"1"),t.qZA()()}if(2&n){const e=t.oxw(3);t.xp6(1),t.Q6J("routerLink",t.VKq(4,f,t.lcZ(2,2,e.linkPage)))("queryParams",e.eventSearchHandle(1))}}function E(n,d){1&n&&(t.TgZ(0,"a",22),t._uU(1,"..."),t.qZA())}function C(n,d){if(1&n){const e=t.EpF();t.TgZ(0,"a",24),t.NdJ("click",function(){t.CHM(e);const g=t.oxw().$implicit,M=t.oxw(3);return t.KtG(M.clickPage(g))}),t.ALo(1,"navigationLocalize"),t._uU(2),t.qZA()}if(2&n){const e=t.oxw().$implicit,s=t.oxw(3);t.Q6J("routerLink",t.VKq(5,f,t.lcZ(1,3,s.linkPage)))("queryParams",s.eventSearchHandle(e)),t.xp6(2),t.hij("",e," ")}}function v(n,d){if(1&n){const e=t.EpF();t.TgZ(0,"a",14),t.NdJ("click",function(){t.CHM(e);const g=t.oxw().$implicit,M=t.oxw(3);return t.KtG(M.clickPage(g))}),t.ALo(1,"navigationLocalize"),t._uU(2),t.qZA()}if(2&n){const e=t.oxw().$implicit,s=t.oxw(3);t.Q6J("routerLink",t.VKq(5,f,t.lcZ(1,3,s.linkPage)))("queryParams",s.eventSearchHandle(e)),t.xp6(2),t.hij("",e," ")}}function u(n,d){if(1&n&&(t.TgZ(0,"li",10),t.YNc(1,C,3,7,"a",23),t.YNc(2,v,3,7,"a",12),t.qZA()),2&n){const e=d.$implicit,s=t.oxw(3);t.Q6J("ngClass",t.VKq(3,z,s.page==e)),t.xp6(1),t.Q6J("ngIf",s.page==e),t.xp6(1),t.Q6J("ngIf",s.page!=e&&e<s.page+3&&e>=s.page-1)}}function w(n,d){1&n&&(t.TgZ(0,"span",22),t._uU(1,"..."),t.qZA())}function I(n,d){if(1&n){const e=t.EpF();t.TgZ(0,"a",25),t.NdJ("click",function(){t.CHM(e);const g=t.oxw(3);return t.KtG(g.clickPage(g.totalPaginationPage))}),t.ALo(1,"navigationLocalize"),t._uU(2),t.qZA()}if(2&n){const e=t.oxw(3);t.Q6J("routerLink",t.VKq(5,f,t.lcZ(1,3,e.linkPage)))("queryParams",e.eventSearchHandle(e.totalPaginationPage)),t.xp6(2),t.Oqu(e.totalPaginationPage)}}function O(n,d){if(1&n&&(t.ynx(0),t.YNc(1,T,4,6,"li",3),t.TgZ(2,"li",5),t.YNc(3,E,2,0,"a",19),t.qZA(),t.YNc(4,u,3,5,"li",9),t.TgZ(5,"li",5),t.YNc(6,w,2,0,"span",19),t.qZA(),t.TgZ(7,"li",5),t.YNc(8,I,3,7,"a",20),t.qZA(),t.BQk()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.page>=3),t.xp6(2),t.Q6J("ngIf",e.page>=4),t.xp6(1),t.Q6J("ngForOf",e.arrayPag),t.xp6(2),t.Q6J("ngIf",e.page<e.totalPaginationPage-3),t.xp6(2),t.Q6J("ngIf",e.page<e.totalPaginationPage-2)}}function Z(n,d){if(1&n){const e=t.EpF();t.TgZ(0,"li",5)(1,"a",27),t.NdJ("click",function(){t.CHM(e);const g=t.oxw(3);return t.KtG(g.clickPage(1))}),t._uU(2,"1"),t.qZA()()}}function L(n,d){1&n&&(t.TgZ(0,"a",22),t._uU(1,"..."),t.qZA())}function D(n,d){if(1&n){const e=t.EpF();t.TgZ(0,"a",29),t.NdJ("click",function(){t.CHM(e);const g=t.oxw().$implicit,M=t.oxw(3);return t.KtG(M.clickPage(g))}),t._uU(1),t.qZA()}if(2&n){const e=t.oxw().$implicit;t.xp6(1),t.hij("",e," ")}}function Q(n,d){if(1&n){const e=t.EpF();t.TgZ(0,"a",18),t.NdJ("click",function(){t.CHM(e);const g=t.oxw().$implicit,M=t.oxw(3);return t.KtG(M.clickPage(g))}),t._uU(1),t.qZA()}if(2&n){const e=t.oxw().$implicit;t.xp6(1),t.hij("",e," ")}}function J(n,d){if(1&n&&(t.TgZ(0,"li",10),t.YNc(1,D,2,1,"a",28),t.YNc(2,Q,2,1,"a",16),t.qZA()),2&n){const e=d.$implicit,s=t.oxw(3);t.Q6J("ngClass",t.VKq(3,z,s.page==e)),t.xp6(1),t.Q6J("ngIf",s.page==e),t.xp6(1),t.Q6J("ngIf",s.page!=e&&e<s.page+3&&e>=s.page-1)}}function N(n,d){1&n&&(t.TgZ(0,"span",22),t._uU(1,"..."),t.qZA())}function R(n,d){if(1&n){const e=t.EpF();t.TgZ(0,"a",30),t.NdJ("click",function(){t.CHM(e);const g=t.oxw(3);return t.KtG(g.clickPage(g.totalPaginationPage))}),t._uU(1),t.qZA()}if(2&n){const e=t.oxw(3);t.xp6(1),t.Oqu(e.totalPaginationPage)}}function B(n,d){if(1&n&&(t.ynx(0),t.YNc(1,Z,3,0,"li",3),t.TgZ(2,"li",5),t.YNc(3,L,2,0,"a",19),t.qZA(),t.YNc(4,J,3,5,"li",9),t.TgZ(5,"li",5),t.YNc(6,N,2,0,"span",19),t.qZA(),t.TgZ(7,"li",5),t.YNc(8,R,2,1,"a",26),t.qZA(),t.BQk()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.page>=3),t.xp6(2),t.Q6J("ngIf",e.page>=4),t.xp6(1),t.Q6J("ngForOf",e.arrayPag),t.xp6(2),t.Q6J("ngIf",e.page<e.totalPaginationPage-3),t.xp6(2),t.Q6J("ngIf",e.page<e.totalPaginationPage-2)}}function K(n,d){if(1&n){const e=t.EpF();t.TgZ(0,"li",5)(1,"a",31),t.NdJ("click",function(){t.CHM(e);const g=t.oxw(2);return t.KtG(g.clickPage(g.page+1))}),t.TgZ(2,"span",7),t._uU(3,"\xbb"),t.qZA(),t.TgZ(4,"span",8),t._uU(5,"Next"),t.qZA()()()}}function U(n,d){if(1&n&&(t.TgZ(0,"nav",1)(1,"ul",2),t.YNc(2,k,6,0,"li",3),t.YNc(3,i,2,1,"ng-container",4),t.YNc(4,m,2,1,"ng-container",4),t.YNc(5,O,9,5,"ng-container",4),t.YNc(6,B,9,5,"ng-container",4),t.YNc(7,K,6,0,"li",3),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngIf",e.page>1),t.xp6(1),t.Q6J("ngIf",e.totalPaginationPage<=4&&"report_error"==e.screen),t.xp6(1),t.Q6J("ngIf",e.totalPaginationPage<=4&&"report_error"!=e.screen),t.xp6(1),t.Q6J("ngIf",e.totalPaginationPage>4&&"report_error"==e.screen),t.xp6(1),t.Q6J("ngIf",e.totalPaginationPage>4&&"report_error"!=e.screen),t.xp6(1),t.Q6J("ngIf",e.totalPaginationPage>e.page&&e.totalPaginationPage>=2)}}let F=(()=>{class n extends x.Q{constructor(){super(...arguments),this.totalPaginationPage=0,this.paging=1,this.screen="",this.linkPage="",this.goToPaginationPage=new t.vpe,this.page=1,this.arrayPag=[]}eventSearchHandle(e){return""!=this.eventSearch?.userPhone&&""==this.eventSearch?.userId&&""==this.eventSearch?.urls?{page:e,userPhone:this.eventSearch?.userPhone}:""==this.eventSearch?.userPhone&&""!=this.eventSearch?.userId&&""==this.eventSearch?.urls?{page:e,userId:Number(this.eventSearch?.userId)}:""==this.eventSearch?.userPhone&&""==this.eventSearch?.userId&&""!=this.eventSearch?.urls?{page:e,urls:this.eventSearch?.urls}:""!=this.eventSearch?.userPhone&&""!=this.eventSearch?.userId&&""==this.eventSearch?.urls?{page:e,userPhone:this.eventSearch?.userPhone,userId:Number(this.eventSearch?.userId)}:""!=this.eventSearch?.userPhone&&""==this.eventSearch?.userId&&""!=this.eventSearch?.urls?{page:e,userPhone:this.eventSearch?.userPhone,urls:this.eventSearch?.urls}:""==this.eventSearch?.userPhone&&""!=this.eventSearch?.userId&&""!=this.eventSearch?.urls?{page:e,userId:Number(this.eventSearch?.userId),urls:this.eventSearch?.urls}:""==this.eventSearch?.userPhone&&""==this.eventSearch?.userId&&""==this.eventSearch?.urls?{page:e}:""!=this.eventSearch?.userPhone&&""!=this.eventSearch?.userId&&""!=this.eventSearch?.urls?{page:e,userPhone:this.eventSearch?.userPhone,userId:Number(this.eventSearch?.userId),urls:this.eventSearch?.urls}:void 0}ArrayPage(){for(let e=1;e<=(this.totalPaginationPage??0);e++)this.arrayPag.push(e)}clickPage(e){this.page=e,this.goToPaginationPage.emit(e)}ngOnInit(){this.arrayPag=[],this.page=this.paging??0,this.ArrayPage(),super.ngOnInit()}ngOnChanges(){this.arrayPag=[],this.page=this.paging??0,this.ArrayPage()}static#t=this.\u0275fac=function(){let e;return function(g){return(e||(e=t.n5z(n)))(g||n)}}();static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["azt-paging"]],inputs:{totalPaginationPage:"totalPaginationPage",paging:"paging",screen:"screen",eventSearch:"eventSearch",linkPage:"linkPage"},outputs:{goToPaginationPage:"goToPaginationPage"},features:[t.qOj,t.TTD],decls:1,vars:1,consts:[["class","inline-block",4,"ngIf"],[1,"inline-block"],[1,"pagination"],["class","page-item",4,"ngIf"],[4,"ngIf"],[1,"page-item"],["azt-track-service","azt-paging-rX0eXqN4qW","aria-label","Previous",1,"page-link",3,"click"],["aria-hidden","true"],[1,"sr-only"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"page-item",3,"ngClass"],["azt-track-service","azt-paging-Vt48iF7KWz","class","page-link",3,"routerLink","queryParams","click",4,"ngIf"],["class","page-link",3,"routerLink","queryParams","click",4,"ngIf"],["azt-track-service","azt-paging-Vt48iF7KWz",1,"page-link",3,"routerLink","queryParams","click"],[1,"page-link",3,"routerLink","queryParams","click"],["azt-track-service","azt-paging-sdAfPVcahq","class","page-link",3,"click",4,"ngIf"],["class","page-link",3,"click",4,"ngIf"],["azt-track-service","azt-paging-sdAfPVcahq",1,"page-link",3,"click"],[1,"page-link",3,"click"],["class","page-link",4,"ngIf"],["azt-track-service","azt-paging-8E_Z21XPV1","class","page-link",3,"routerLink","queryParams","click",4,"ngIf"],["azt-track-service","azt-paging-SXAS3r66ZG",1,"page-link",3,"routerLink","queryParams","click"],[1,"page-link"],["azt-track-service","azt-paging-_MTfjoX-Or","class","page-link",3,"routerLink","queryParams","click",4,"ngIf"],["azt-track-service","azt-paging-_MTfjoX-Or",1,"page-link",3,"routerLink","queryParams","click"],["azt-track-service","azt-paging-8E_Z21XPV1",1,"page-link",3,"routerLink","queryParams","click"],["azt-track-service","azt-paging-L-1rQPYpcp","class","page-link",3,"click",4,"ngIf"],["azt-track-service","azt-paging-U-yHiMo-V7",1,"page-link",3,"click"],["azt-track-service","azt-paging-bk-6smj4RZ","class","page-link",3,"click",4,"ngIf"],["azt-track-service","azt-paging-bk-6smj4RZ",1,"page-link",3,"click"],["azt-track-service","azt-paging-L-1rQPYpcp",1,"page-link",3,"click"],["azt-track-service","azt-paging-RU-mjdPzDz","aria-label","Next",1,"page-link",3,"click"]],template:function(s,g){1&s&&t.YNc(0,U,8,6,"nav",0),2&s&&t.Q6J("ngIf",g.totalPaginationPage&&g.totalPaginationPage>1)},dependencies:[o.mk,o.sg,o.O5,p.rH,l.Jy],encapsulation:2})}return n})()},78497:(y,S,_)=>{_.d(S,{R:()=>P});var t=_(47496),x=_(65879),o=_(96814),p=_(19347),l=_(95545);const k=["aztDialogContentBox"],f=function(z){return{"width.px":z,"height.%":100}},A=["*"];let P=(()=>{class z extends t.Q{checkHeightOfElement(){if(this.aztDialogContentBox){var i=this.aztDialogContentBox.nativeElement.querySelector("."+this.contentBoxClassName);if(i){let r=Math.round(window.innerHeight*this.defaultHeight/100),c=i.getBoundingClientRect().height+1;this.aztDialogContentBox.nativeElement.style.height=(c<r?c:r)+"px",this.aztDialogContentBox.nativeElement.style.maxHeight="85vh"}}}ngAfterViewChecked(){setTimeout(()=>{this.ngZone.runOutsideAngular(()=>{this.checkHeightOfElement()})},0)}constructor(i){super(),this.ngZone=i,this.defaultHeight=85,this.defaultWidth=0,this.contentBoxClassName="azt-mat-dialog-content-box"}static#t=this.\u0275fac=function(r){return new(r||z)(x.Y36(x.R0b))};static#e=this.\u0275cmp=x.Xpm({type:z,selectors:[["azt-mat-dialog-content"]],viewQuery:function(r,c){if(1&r&&x.Gf(k,5),2&r){let h;x.iGM(h=x.CRH())&&(c.aztDialogContentBox=h.first)}},inputs:{defaultHeight:"defaultHeight",defaultWidth:"defaultWidth"},features:[x.qOj],ngContentSelectors:A,decls:5,vars:6,consts:[["aztDialogContentBox",""],["pointerEventsMethod","scrollbar",3,"visibility","ngStyle"]],template:function(r,c){1&r&&(x.F$t(),x.TgZ(0,"mat-dialog-content",null,0)(2,"ng-scrollbar",1)(3,"div"),x.Hsn(4),x.qZA()()()),2&r&&(x.xp6(2),x.Q6J("visibility","hover")("ngStyle",x.VKq(4,f,c.defaultWidth||"auto")),x.xp6(1),x.Tol(c.contentBoxClassName))},dependencies:[o.PC,p.xY,l.KC],encapsulation:2})}return z})()}}]);