(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[502],{3760:(I,z,_)=>{"use strict";_.d(z,{Q:()=>e});class e{constructor(d,g,l,v){this.tasks=new Array,this.count_task_root_done=0,this.task_runner=new Array,this.task_runner_index=-1,this.all_tasks=0,this.count_task_item_done=0,this.is_runner=!1,this.wrap_counter=0,this.wrap_counter_done=0,this.limit_one_process=d,this.result_common={datas:[],errs:[]},this.actionLogItem=g,this.delay_time=l||1e3,this.endWithError=v??!1}addTask(d,g,l,v){var u=l||[];if(!this.is_runner){const w=()=>new Promise(r=>{this.wrap_counter++,this.actionLogItem&&this.all_tasks>0&&this.actionLogItem.function.call({},this.wrap_counter_done,this.all_tasks,...this.actionLogItem.params?this.actionLogItem.params:[],v),g.call(d,...u).then(n=>{this.wrap_counter_done++,r({status:!0,value:n})}).catch(n=>{this.wrap_counter_done++,r({status:!1,error:n})})});this.all_tasks++;let p=new Array;if(this.tasks.length>0?p=this.tasks[this.tasks.length-1]:this.tasks.push(p),p.length<this.limit_one_process)p.push({task:w,name:v});else{let r=new Array;r.push({task:w,name:v}),this.tasks.push(r)}}}start(){return new Promise(d=>{0===this.tasks.length&&(this.clear(),d({datas:[],errs:[]})),this.result_common={datas:[],errs:[]},this.task_runner_index=-1,this.count_task_root_done=0,this.count_task_item_done=0,this.is_runner=!0,this.runnerItem(d)})}restart(){this.result_common={datas:[],errs:[]},this.clear()}clear(){this.count_task_root_done=0,this.count_task_item_done=0,this.tasks=[],this.all_tasks=0,this.task_runner_index=-1,this.wrap_counter=0,this.wrap_counter_done=0,this.is_runner=!1}runnerItem(d){this.task_runner_index++,this.task_runner=this.tasks[this.task_runner_index],this.task_runner&&this.task_runner.length>0?Promise.all(this.task_runner.map(g=>g.task.call(this))).then(g=>{this.count_task_root_done++,g.forEach(l=>{this.count_task_item_done++,l.status&&l.value?this.result_common.datas.push(l.value):l.error&&this.result_common.errs.push(l.error)}),this.result_common.errs.length>0&&this.endWithError&&(this.is_runner=!1,this.clear(),d(this.result_common)),this.count_task_item_done===this.all_tasks?(this.is_runner=!1,this.clear(),d(this.result_common)):setTimeout(()=>{this.runnerItem(d)},this.delay_time)}):(this.is_runner=!1,this.count_task_root_done++,this.clear(),d(this.result_common))}}},60013:(I,z,_)=>{"use strict";_.d(z,{G:()=>e});let e=(()=>{class T{static openLoadingEffect(g){T.getDomElement().style.display="flex",setTimeout(()=>{T.changeMsgLoadingEffect(g)},50)}static closeLoadingEffect(g){return new Promise(l=>{setTimeout(()=>{const v=T.getDomElement();v&&(v.style.display="none"),l(!0)},g)})}static changeMsgLoadingEffect(g){T.getDomContent().innerText=g}static getDomContent(){return document.getElementById(T.idStatusContent)??document.createElement("span")}static getDomElement(){return document.getElementById(T.idComponent)??this.createDomElement()}static createDomElement(){const g=document.createElement("div");return g.id=T.idComponent,g.setAttribute("style","position: fixed;display: flex;width: 100vw;height: 100%;background: #000000c7;color: #ffffff;font-size: 20px;font-weight: lighter;justify-content: center;align-items: center;cursor: progress;z-index: 9999;top: 0;left: 0;"),g.style.display="none",g.innerHTML=`\n        <div class="text-center" style="height: 85%; overflow-x: auto;">\n            <div class="flex justify-center mt-5">\n                <svg width="20" viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg">\n                    <g fill="none" fill-rule="evenodd">\n                        <g transform="translate(2 1)" stroke="currentColor" stroke-width="1.5">\n                            <circle cx="42.601" cy="11.462" r="5" fill-opacity="1" fill="currentColor">\n                                <animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="1;0;0;0;0;0;0;0" calcMode="linear" repeatCount="indefinite"></animate>\n                            </circle>\n                            <circle cx="49.063" cy="27.063" r="5" fill-opacity="0" fill="currentColor">\n                                <animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="0;1;0;0;0;0;0;0" calcMode="linear" repeatCount="indefinite"></animate>\n                            </circle>\n                            <circle cx="42.601" cy="42.663" r="5" fill-opacity="0" fill="currentColor">\n                                <animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="0;0;1;0;0;0;0;0" calcMode="linear" repeatCount="indefinite"></animate>\n                            </circle>\n                            <circle cx="27" cy="49.125" r="5" fill-opacity="0" fill="currentColor">\n                                <animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="0;0;0;1;0;0;0;0" calcMode="linear" repeatCount="indefinite"></animate>\n                            </circle>\n                            <circle cx="11.399" cy="42.663" r="5" fill-opacity="0" fill="currentColor">\n                                <animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="0;0;0;0;1;0;0;0" calcMode="linear" repeatCount="indefinite"></animate>\n                            </circle>\n                            <circle cx="4.938" cy="27.063" r="5" fill-opacity="0" fill="currentColor">\n                                <animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="0;0;0;0;0;1;0;0" calcMode="linear" repeatCount="indefinite"></animate>\n                            </circle>\n                            <circle cx="11.399" cy="11.462" r="5" fill-opacity="0" fill="currentColor">\n                                <animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="0;0;0;0;0;0;1;0" calcMode="linear" repeatCount="indefinite"></animate>\n                            </circle>\n                            <circle cx="27" cy="5" r="5" fill-opacity="0" fill="currentColor">\n                                <animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="0;0;0;0;0;0;0;1" calcMode="linear" repeatCount="indefinite"></animate>\n                            </circle>\n                        </g>\n                    </g>\n                </svg>\n            </div>\n            <div style="margin-top: 10px;position: relative;">\n                <span id="${T.idStatusContent}"></span>\n            </div>\n        </div>`,document.body.appendChild(g),g}}return T.idComponent="azt-status-loading-effect",T.idStatusContent="azt-status-loading-effect-content",T})()},25679:(I,z,_)=>{"use strict";_.d(z,{n:()=>w});var e=_(49671),T=_(69862),d=_(3760),g=_(65879),l=_(87384),v=_(50503);const u=_(47246);let w=(()=>{class p{constructor(n,s){this.commonService=n,this.apiUploadService=s,this.dataRaws=[],this.stringFirstOld=["zCv:"],this.stringFirst="zCo:"}getValueContentQuestion(n){return this.commonService.castJsonToObj(n)??[]}getAllMatchWithContent(n){let i,s=[];for(;null!==(i=p.searchPattern.exec(n));)s.includes(i[0])||s.push(i[0]);return s}getRawContent(n,s){return new Promise((i,c)=>{const P=this.dataRaws.findIndex(k=>k.l===n);-1===P?fetch(n).then(k=>k.blob()).then(k=>k.arrayBuffer()).then(k=>{const A=u.inflate(k),C=this.commonService.castJsonToObj((new TextDecoder).decode(A));this.dataRaws.push({l:n,d:C??[]}),C&&C[s]?i(C[s]):c()}).catch(()=>{c()}):this.dataRaws[P].d&&this.dataRaws[P].d[s]?i(this.dataRaws[P].d[s]):c()})}uploadRawContent(n){return new Promise((s,i)=>{const c=JSON.stringify(n),P=(new TextEncoder).encode(c),k=u.deflate(P),A=new Blob([k],{type:"application/octet-stream"}),C=new File([A],"question_save_mathtype.gz",{type:"application/octet-stream"});this.apiUploadService.uploadToCdnQuestionRawMathTypeData(C).subscribe(E=>{E.type!=T.dt.UploadProgress&&(1==E.success&&E.data?s(E.data.url??""):i(new Error("lang_auto_khong_upload_duoc_anh_vui_long_thu_lai_sau_loi[SPLIT_LANG] [SPLIT_LANG]"+E.message)))})})}encodeContent(n){let s=this.getAllMatchWithContent(n),i=[];for(let c=0;c<s.length;c++){let k=s[c].replace(p.searchPattern,"$1");k.startsWith(this.stringFirst)||i.push({l:k,i:i.length})}return{content:n,raws:i}}decodeContent(n){var s=this;return(0,e.Z)(function*(){let i=s.getAllMatchWithContent(n);for(let c=0;c<i.length;c++){const P=i[c];let k=P.replace(p.searchPattern,"$1");for(let A=0;A<s.stringFirstOld.length;A++)if(k.startsWith(s.stringFirstOld[A])){n=s.commonService.replaceAll(n,P,"")??"";continue}if(k.startsWith(s.stringFirst)){let A=s.commonService.castJsonToObj(atob(k.replace(s.stringFirst,"")));if(A){let C=yield s.getRawContent(A.l,A.i);n=s.commonService.replaceAll(n,k,C)??""}}}return n})()}encodeQuestion(n){return new Promise(s=>{var i=this.getValueContentQuestion(n.questionContent??""),c=this.getValueContentQuestion(n.answerConfig??""),P=n.answerMedia??"";if(0===i.length||0===c.length)return void s(n);let k=this.encodeContent(i[0].content),A=[];c.forEach((m,y)=>{A.push({i:y,d:this.encodeContent(m.content)})});let C=this.encodeContent(P);var E=0;let f=[];for(let m=0;m<k.raws.length;m++)k.raws[m].i=E,E++,f.push(k.raws[m]);for(let m=0;m<C.raws.length;m++)C.raws[m].i=E,E++,f.push(C.raws[m]);A.forEach(m=>{for(let y=0;y<m.d.raws.length;y++)m.d.raws[y].i=E,E++,f.push(m.d.raws[y])}),f.length>0?this.uploadRawContent(f.map(m=>m.l)).then(m=>{k.raws.forEach(y=>{let M=this.stringFirst+btoa(JSON.stringify({l:m,i:y.i}));i[0].content=this.commonService.replaceAll(i[0].content,y.l,M)??""}),C.raws.forEach(y=>{let M=this.stringFirst+btoa(JSON.stringify({l:m,i:y.i}));P=this.commonService.replaceAll(P,y.l,M)??""}),A.forEach(y=>{y.d.raws.forEach(M=>{let L=this.stringFirst+btoa(JSON.stringify({l:m,i:M.i}));c[y.i].content=this.commonService.replaceAll(c[y.i].content,M.l,L)??""})}),n.questionContent=JSON.stringify(i),n.answerConfig=JSON.stringify(c),n.answerMedia=P,s(n)}).catch(()=>{s(n)}):s(n)})}decodeQuestion(n){return new Promise(s=>{const i=new d.Q(3);if(i.addTask(this,()=>new Promise(c=>{this.decodeContent(n.content??"").then(P=>{n.content=P,c(!0)}).catch(()=>{c(!1)})})),i.addTask(this,()=>new Promise(c=>{this.decodeContent(n.help??"").then(P=>{n.help=P,c(!0)}).catch(()=>{c(!1)})})),n.answers)for(let c=0;c<n.answers.length;c++)i.addTask(this,()=>new Promise(P=>{n.answers&&this.decodeContent(n.answers[c].content??"").then(k=>{n.answers&&(n.answers[c].content=k),P(!0)}).catch(()=>{P(!1)})}));i.start().then(()=>{s()})})}}return p.searchPattern=/data-azt-math-raw=[\\"']+([^"']+)["']/g,p.\u0275fac=function(n){return new(n||p)(g.LFG(l.z),g.LFG(v.W))},p.\u0275prov=g.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},66131:(I,z,_)=>{"use strict";_.d(z,{h:()=>w});var e=_(3760),T=_(8720),d=_(91404),g=_(65879),l=_(8415),v=_(87384),u=_(25679);let w=(()=>{class p{pushImage(n,s,i){if(i){let c=new RegExp("<div id='"+n+"'[^>]+></div>","g");i.content&&(i.content=i.content.replace(c,s??"")),i.answers&&i.answers.forEach(P=>{P.content=P.content?.replace(c,s??"")}),i.help&&(i.help=i.help.replace(c,s??"")),i.groupInfo&&i.groupInfo.groupContent&&(i.groupInfo.groupContent=i.groupInfo.groupContent.replace(c,s??""))}}parseRenderQuestions(n,s,i,c,P,k){return new Promise((A,C)=>{const f=new e.Q(25,{function:(m,y)=>{const M=(m+25)/y*100;s&&s(M>=100?99:M)}},c??1e3);n.forEach(m=>{f.addTask(this,this.parseRenderQuestion,[m,i,P,k])}),f.start().then(m=>{if(m.errs.length>0){const y=[];m.errs.forEach(M=>{let L=y.find(O=>O.type===M.type);L||y.push(M),L?.data.concat(M.data)}),C(y)}else A(n)})})}parseRenderQuestion(n,s,i,c){return new Promise((P,k)=>{var A=new d.W(this.cdnService,this.commonService,s||new T.v,f=>{k(f)});A.callbackPushImage=(f,m)=>{this.pushImage(f,m,n)},A.caller=this;const E=new e.Q(c?1:20,void 0,0);n.content&&E.addTask(this,()=>new Promise(f=>{n.content=A.render(this.commonService.removeBracket(n.content??""),()=>{f()})})),n.answers&&n.answers.forEach(f=>{E.addTask(this,()=>new Promise(m=>{f.content=A.render(f.content||"",()=>{m()})}))}),n.help&&E.addTask(this,()=>new Promise(f=>{n.help=A.render(n.help,()=>{f()})})),n.groupInfo&&n.groupInfo.groupContent&&E.addTask(this,()=>new Promise(f=>{n.groupInfo&&n.groupInfo.groupContent?n.groupInfo.groupContent=A.render(this.commonService.removeBracket(n.groupInfo.groupContent),()=>{f()}):f()})),i&&E.addTask(this,()=>new Promise(f=>{this.dataAztMathRawHelper.decodeQuestion(n).then(()=>{f()})})),E.start().then(f=>{f.errs.length>0||P()})})}constructor(n,s,i){this.cdnService=n,this.commonService=s,this.dataAztMathRawHelper=i}}return p.\u0275fac=function(n){return new(n||p)(g.LFG(l.E),g.LFG(v.z),g.LFG(u.n))},p.\u0275prov=g.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},89880:(I,z,_)=>{"use strict";_.d(z,{L:()=>U});var e=_(65879),T=_(39621),d=_(96814),g=_(21266),l=_(91190);function v(a,h){if(1&a){const t=e.EpF();e.TgZ(0,"li",5)(1,"a",6),e.NdJ("click",function(){e.CHM(t);const x=e.oxw(2);return e.KtG(x.clickPage(x.page-1))}),e.TgZ(2,"span",7),e._uU(3,"\xab"),e.qZA(),e.TgZ(4,"span",8),e._uU(5,"Previous"),e.qZA()()()}}const u=function(a){return[a]};function w(a,h){if(1&a){const t=e.EpF();e.TgZ(0,"a",13),e.NdJ("click",function(){e.CHM(t);const x=e.oxw().$implicit,S=e.oxw(3);return e.KtG(S.clickPage(x))}),e.ALo(1,"navigationLocalize"),e._uU(2),e.qZA()}if(2&a){const t=e.oxw().$implicit,o=e.oxw(3);e.Q6J("routerLink",e.VKq(5,u,e.lcZ(1,3,o.linkPage)))("queryParams",o.eventSearchHandle(t)),e.xp6(2),e.hij("",t," ")}}function p(a,h){if(1&a){const t=e.EpF();e.TgZ(0,"a",14),e.NdJ("click",function(){e.CHM(t);const x=e.oxw().$implicit,S=e.oxw(3);return e.KtG(S.clickPage(x))}),e.ALo(1,"navigationLocalize"),e._uU(2),e.qZA()}if(2&a){const t=e.oxw().$implicit,o=e.oxw(3);e.Q6J("routerLink",e.VKq(5,u,e.lcZ(1,3,o.linkPage)))("queryParams",o.eventSearchHandle(t)),e.xp6(2),e.hij("",t," ")}}const r=function(a){return{active:a}};function n(a,h){if(1&a&&(e.TgZ(0,"li",10),e.YNc(1,w,3,7,"a",11),e.YNc(2,p,3,7,"a",12),e.qZA()),2&a){const t=h.$implicit,o=e.oxw(3);e.Q6J("ngClass",e.VKq(3,r,o.page==t)),e.xp6(1),e.Q6J("ngIf",o.page==t),e.xp6(1),e.Q6J("ngIf",o.page!=t&&t<=o.page+3&&t>=o.page-3)}}function s(a,h){if(1&a&&(e.ynx(0),e.YNc(1,n,3,5,"li",9),e.BQk()),2&a){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.arrayPag)}}function i(a,h){if(1&a){const t=e.EpF();e.TgZ(0,"a",17),e.NdJ("click",function(){e.CHM(t);const x=e.oxw().$implicit,S=e.oxw(3);return e.KtG(S.clickPage(x))}),e._uU(1),e.qZA()}if(2&a){const t=e.oxw().$implicit;e.xp6(1),e.hij("",t," ")}}function c(a,h){if(1&a){const t=e.EpF();e.TgZ(0,"a",18),e.NdJ("click",function(){e.CHM(t);const x=e.oxw().$implicit,S=e.oxw(3);return e.KtG(S.clickPage(x))}),e._uU(1),e.qZA()}if(2&a){const t=e.oxw().$implicit;e.xp6(1),e.hij("",t," ")}}function P(a,h){if(1&a&&(e.TgZ(0,"li",10),e.YNc(1,i,2,1,"a",15),e.YNc(2,c,2,1,"a",16),e.qZA()),2&a){const t=h.$implicit,o=e.oxw(3);e.Q6J("ngClass",e.VKq(3,r,o.page==t)),e.xp6(1),e.Q6J("ngIf",o.page==t),e.xp6(1),e.Q6J("ngIf",o.page!=t&&t<=o.page+3&&t>=o.page-3)}}function k(a,h){if(1&a&&(e.ynx(0),e.YNc(1,P,3,5,"li",9),e.BQk()),2&a){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.arrayPag)}}function A(a,h){if(1&a){const t=e.EpF();e.TgZ(0,"li",5)(1,"a",21),e.NdJ("click",function(){e.CHM(t);const x=e.oxw(3);return e.KtG(x.clickPage(1))}),e.ALo(2,"navigationLocalize"),e._uU(3,"1"),e.qZA()()}if(2&a){const t=e.oxw(3);e.xp6(1),e.Q6J("routerLink",e.VKq(4,u,e.lcZ(2,2,t.linkPage)))("queryParams",t.eventSearchHandle(1))}}function C(a,h){1&a&&(e.TgZ(0,"a",22),e._uU(1,"..."),e.qZA())}function E(a,h){if(1&a){const t=e.EpF();e.TgZ(0,"a",24),e.NdJ("click",function(){e.CHM(t);const x=e.oxw().$implicit,S=e.oxw(3);return e.KtG(S.clickPage(x))}),e.ALo(1,"navigationLocalize"),e._uU(2),e.qZA()}if(2&a){const t=e.oxw().$implicit,o=e.oxw(3);e.Q6J("routerLink",e.VKq(5,u,e.lcZ(1,3,o.linkPage)))("queryParams",o.eventSearchHandle(t)),e.xp6(2),e.hij("",t," ")}}function f(a,h){if(1&a){const t=e.EpF();e.TgZ(0,"a",14),e.NdJ("click",function(){e.CHM(t);const x=e.oxw().$implicit,S=e.oxw(3);return e.KtG(S.clickPage(x))}),e.ALo(1,"navigationLocalize"),e._uU(2),e.qZA()}if(2&a){const t=e.oxw().$implicit,o=e.oxw(3);e.Q6J("routerLink",e.VKq(5,u,e.lcZ(1,3,o.linkPage)))("queryParams",o.eventSearchHandle(t)),e.xp6(2),e.hij("",t," ")}}function m(a,h){if(1&a&&(e.TgZ(0,"li",10),e.YNc(1,E,3,7,"a",23),e.YNc(2,f,3,7,"a",12),e.qZA()),2&a){const t=h.$implicit,o=e.oxw(3);e.Q6J("ngClass",e.VKq(3,r,o.page==t)),e.xp6(1),e.Q6J("ngIf",o.page==t),e.xp6(1),e.Q6J("ngIf",o.page!=t&&t<o.page+3&&t>=o.page-1)}}function y(a,h){1&a&&(e.TgZ(0,"span",22),e._uU(1,"..."),e.qZA())}function M(a,h){if(1&a){const t=e.EpF();e.TgZ(0,"a",25),e.NdJ("click",function(){e.CHM(t);const x=e.oxw(3);return e.KtG(x.clickPage(x.totalPaginationPage))}),e.ALo(1,"navigationLocalize"),e._uU(2),e.qZA()}if(2&a){const t=e.oxw(3);e.Q6J("routerLink",e.VKq(5,u,e.lcZ(1,3,t.linkPage)))("queryParams",t.eventSearchHandle(t.totalPaginationPage)),e.xp6(2),e.Oqu(t.totalPaginationPage)}}function L(a,h){if(1&a&&(e.ynx(0),e.YNc(1,A,4,6,"li",3),e.TgZ(2,"li",5),e.YNc(3,C,2,0,"a",19),e.qZA(),e.YNc(4,m,3,5,"li",9),e.TgZ(5,"li",5),e.YNc(6,y,2,0,"span",19),e.qZA(),e.TgZ(7,"li",5),e.YNc(8,M,3,7,"a",20),e.qZA(),e.BQk()),2&a){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.page>=3),e.xp6(2),e.Q6J("ngIf",t.page>=4),e.xp6(1),e.Q6J("ngForOf",t.arrayPag),e.xp6(2),e.Q6J("ngIf",t.page<t.totalPaginationPage-3),e.xp6(2),e.Q6J("ngIf",t.page<t.totalPaginationPage-2)}}function O(a,h){if(1&a){const t=e.EpF();e.TgZ(0,"li",5)(1,"a",27),e.NdJ("click",function(){e.CHM(t);const x=e.oxw(3);return e.KtG(x.clickPage(1))}),e._uU(2,"1"),e.qZA()()}}function D(a,h){1&a&&(e.TgZ(0,"a",22),e._uU(1,"..."),e.qZA())}function R(a,h){if(1&a){const t=e.EpF();e.TgZ(0,"a",29),e.NdJ("click",function(){e.CHM(t);const x=e.oxw().$implicit,S=e.oxw(3);return e.KtG(S.clickPage(x))}),e._uU(1),e.qZA()}if(2&a){const t=e.oxw().$implicit;e.xp6(1),e.hij("",t," ")}}function Z(a,h){if(1&a){const t=e.EpF();e.TgZ(0,"a",18),e.NdJ("click",function(){e.CHM(t);const x=e.oxw().$implicit,S=e.oxw(3);return e.KtG(S.clickPage(x))}),e._uU(1),e.qZA()}if(2&a){const t=e.oxw().$implicit;e.xp6(1),e.hij("",t," ")}}function F(a,h){if(1&a&&(e.TgZ(0,"li",10),e.YNc(1,R,2,1,"a",28),e.YNc(2,Z,2,1,"a",16),e.qZA()),2&a){const t=h.$implicit,o=e.oxw(3);e.Q6J("ngClass",e.VKq(3,r,o.page==t)),e.xp6(1),e.Q6J("ngIf",o.page==t),e.xp6(1),e.Q6J("ngIf",o.page!=t&&t<o.page+3&&t>=o.page-1)}}function b(a,h){1&a&&(e.TgZ(0,"span",22),e._uU(1,"..."),e.qZA())}function N(a,h){if(1&a){const t=e.EpF();e.TgZ(0,"a",30),e.NdJ("click",function(){e.CHM(t);const x=e.oxw(3);return e.KtG(x.clickPage(x.totalPaginationPage))}),e._uU(1),e.qZA()}if(2&a){const t=e.oxw(3);e.xp6(1),e.Oqu(t.totalPaginationPage)}}function B(a,h){if(1&a&&(e.ynx(0),e.YNc(1,O,3,0,"li",3),e.TgZ(2,"li",5),e.YNc(3,D,2,0,"a",19),e.qZA(),e.YNc(4,F,3,5,"li",9),e.TgZ(5,"li",5),e.YNc(6,b,2,0,"span",19),e.qZA(),e.TgZ(7,"li",5),e.YNc(8,N,2,1,"a",26),e.qZA(),e.BQk()),2&a){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.page>=3),e.xp6(2),e.Q6J("ngIf",t.page>=4),e.xp6(1),e.Q6J("ngForOf",t.arrayPag),e.xp6(2),e.Q6J("ngIf",t.page<t.totalPaginationPage-3),e.xp6(2),e.Q6J("ngIf",t.page<t.totalPaginationPage-2)}}function J(a,h){if(1&a){const t=e.EpF();e.TgZ(0,"li",5)(1,"a",31),e.NdJ("click",function(){e.CHM(t);const x=e.oxw(2);return e.KtG(x.clickPage(x.page+1))}),e.TgZ(2,"span",7),e._uU(3,"\xbb"),e.qZA(),e.TgZ(4,"span",8),e._uU(5,"Next"),e.qZA()()()}}function Q(a,h){if(1&a&&(e.TgZ(0,"nav",1)(1,"ul",2),e.YNc(2,v,6,0,"li",3),e.YNc(3,s,2,1,"ng-container",4),e.YNc(4,k,2,1,"ng-container",4),e.YNc(5,L,9,5,"ng-container",4),e.YNc(6,B,9,5,"ng-container",4),e.YNc(7,J,6,0,"li",3),e.qZA()()),2&a){const t=e.oxw();e.xp6(2),e.Q6J("ngIf",t.page>1),e.xp6(1),e.Q6J("ngIf",t.totalPaginationPage<=4&&"report_error"==t.screen),e.xp6(1),e.Q6J("ngIf",t.totalPaginationPage<=4&&"report_error"!=t.screen),e.xp6(1),e.Q6J("ngIf",t.totalPaginationPage>4&&"report_error"==t.screen),e.xp6(1),e.Q6J("ngIf",t.totalPaginationPage>4&&"report_error"!=t.screen),e.xp6(1),e.Q6J("ngIf",t.totalPaginationPage>t.page&&t.totalPaginationPage>=2)}}let U=(()=>{class a extends T.Q{constructor(){super(...arguments),this.totalPaginationPage=0,this.paging=1,this.screen="",this.linkPage="",this.goToPaginationPage=new e.vpe,this.page=1,this.arrayPag=[]}eventSearchHandle(t){return""!=this.eventSearch?.userPhone&&""==this.eventSearch?.userId&&""==this.eventSearch?.urls?{page:t,userPhone:this.eventSearch?.userPhone}:""==this.eventSearch?.userPhone&&""!=this.eventSearch?.userId&&""==this.eventSearch?.urls?{page:t,userId:Number(this.eventSearch?.userId)}:""==this.eventSearch?.userPhone&&""==this.eventSearch?.userId&&""!=this.eventSearch?.urls?{page:t,urls:this.eventSearch?.urls}:""!=this.eventSearch?.userPhone&&""!=this.eventSearch?.userId&&""==this.eventSearch?.urls?{page:t,userPhone:this.eventSearch?.userPhone,userId:Number(this.eventSearch?.userId)}:""!=this.eventSearch?.userPhone&&""==this.eventSearch?.userId&&""!=this.eventSearch?.urls?{page:t,userPhone:this.eventSearch?.userPhone,urls:this.eventSearch?.urls}:""==this.eventSearch?.userPhone&&""!=this.eventSearch?.userId&&""!=this.eventSearch?.urls?{page:t,userId:Number(this.eventSearch?.userId),urls:this.eventSearch?.urls}:""==this.eventSearch?.userPhone&&""==this.eventSearch?.userId&&""==this.eventSearch?.urls?{page:t}:""!=this.eventSearch?.userPhone&&""!=this.eventSearch?.userId&&""!=this.eventSearch?.urls?{page:t,userPhone:this.eventSearch?.userPhone,userId:Number(this.eventSearch?.userId),urls:this.eventSearch?.urls}:void 0}ArrayPage(){for(let t=1;t<=(this.totalPaginationPage??0);t++)this.arrayPag.push(t)}clickPage(t){this.page=t,this.goToPaginationPage.emit(t)}ngOnInit(){this.arrayPag=[],this.page=this.paging??0,this.ArrayPage(),super.ngOnInit()}ngOnChanges(){this.arrayPag=[],this.page=this.paging??0,this.ArrayPage()}}return a.\u0275fac=function(){let h;return function(o){return(h||(h=e.n5z(a)))(o||a)}}(),a.\u0275cmp=e.Xpm({type:a,selectors:[["azt-paging"]],inputs:{totalPaginationPage:"totalPaginationPage",paging:"paging",screen:"screen",eventSearch:"eventSearch",linkPage:"linkPage"},outputs:{goToPaginationPage:"goToPaginationPage"},features:[e.qOj,e.TTD],decls:1,vars:1,consts:[["class","inline-block",4,"ngIf"],[1,"inline-block"],[1,"pagination"],["class","page-item",4,"ngIf"],[4,"ngIf"],[1,"page-item"],["azt-track-service","azt-paging-rX0eXqN4qW","aria-label","Previous",1,"page-link",3,"click"],["aria-hidden","true"],[1,"sr-only"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"page-item",3,"ngClass"],["azt-track-service","azt-paging-Vt48iF7KWz","class","page-link",3,"routerLink","queryParams","click",4,"ngIf"],["class","page-link",3,"routerLink","queryParams","click",4,"ngIf"],["azt-track-service","azt-paging-Vt48iF7KWz",1,"page-link",3,"routerLink","queryParams","click"],[1,"page-link",3,"routerLink","queryParams","click"],["azt-track-service","azt-paging-sdAfPVcahq","class","page-link",3,"click",4,"ngIf"],["class","page-link",3,"click",4,"ngIf"],["azt-track-service","azt-paging-sdAfPVcahq",1,"page-link",3,"click"],[1,"page-link",3,"click"],["class","page-link",4,"ngIf"],["azt-track-service","azt-paging-8E_Z21XPV1","class","page-link",3,"routerLink","queryParams","click",4,"ngIf"],["azt-track-service","azt-paging-SXAS3r66ZG",1,"page-link",3,"routerLink","queryParams","click"],[1,"page-link"],["azt-track-service","azt-paging-_MTfjoX-Or","class","page-link",3,"routerLink","queryParams","click",4,"ngIf"],["azt-track-service","azt-paging-_MTfjoX-Or",1,"page-link",3,"routerLink","queryParams","click"],["azt-track-service","azt-paging-8E_Z21XPV1",1,"page-link",3,"routerLink","queryParams","click"],["azt-track-service","azt-paging-L-1rQPYpcp","class","page-link",3,"click",4,"ngIf"],["azt-track-service","azt-paging-U-yHiMo-V7",1,"page-link",3,"click"],["azt-track-service","azt-paging-bk-6smj4RZ","class","page-link",3,"click",4,"ngIf"],["azt-track-service","azt-paging-bk-6smj4RZ",1,"page-link",3,"click"],["azt-track-service","azt-paging-L-1rQPYpcp",1,"page-link",3,"click"],["azt-track-service","azt-paging-RU-mjdPzDz","aria-label","Next",1,"page-link",3,"click"]],template:function(t,o){1&t&&e.YNc(0,Q,8,6,"nav",0),2&t&&e.Q6J("ngIf",o.totalPaginationPage&&o.totalPaginationPage>1)},dependencies:[d.mk,d.sg,d.O5,g.rH,l.Jy],encapsulation:2}),a})()},89188:(I,z,_)=>{"use strict";_.d(z,{s:()=>T});var e=_(65879);let T=(()=>{class d{constructor(l){this.el=l,this.answerSizeManager=0,this.process()}ngOnChanges(l){l.answerSizeManager&&l.answerSizeManager.currentValue!==l.answerSizeManager.previousValue&&l.answerSizeManager.currentValue>=1&&this.process()}process(){this.onElementLoaded().then(l=>{const v=this.el.nativeElement,u=v.children,w=[];for(let r=0;r<u.length;r++)w.push(this.getSizeWidthElement(u[r]));let p=1;[2,4].forEach(r=>{this.isLayout(l.width,w,r)&&(p=r)}),v.classList.remove("row");for(let r=0;r<u.length;r++){const n=u[r];n.classList.remove("col-sm-12"),n.classList.remove("col-md-6")}v.classList.add("layout"),v.classList.add("layout-"+p)})}isLayout(l,v,u){const w=Math.floor(l/u);for(const p of v)if(p+d.PADDING_ITEM>w)return!1;return!0}onElementLoaded(){return new Promise((l,v)=>{let u=!1;for(let w=0;w<=10;w++)setTimeout(()=>{if(!u){const p=this.actionGetSizeBox();p.width>0&&p.height&&(u=!0,l(p))}10===w&&!u&&v(new Error)},100*w)})}actionGetSizeBox(){return this.el.nativeElement.getBoundingClientRect()}getSizeWidthElement(l){let v=0;for(let u=0;u<l.children.length;u++)v+=l.children[u].getBoundingClientRect().width;return v}}return d.PADDING_ITEM=40,d.\u0275fac=function(l){return new(l||d)(e.Y36(e.SBq))},d.\u0275dir=e.lG2({type:d,selectors:[["","answerSizeManager",""]],inputs:{answerSizeManager:"answerSizeManager"},features:[e.TTD]}),d})()},32839:(I,z,_)=>{"use strict";_.d(z,{g:()=>u});var e=_(10217),d=_(60013),g=_(65879),l=_(9853),v=_(87384);let u=(()=>{class w{constructor(r,n){this.mobileWebviewService=r,this.commonService=n}shareFileWithBlob(r,n){if(this.commonService.isMobileWebview(void 0)){d.G.openLoadingEffect(this.commonService.myTranslateInstant("lang_auto_dang_lay_du_lieu_tu_he_thong")??"");let s=new FileReader;s.readAsDataURL(r),s.onloadend=()=>{let i=s.result;"string"==typeof i&&(this.mobileWebviewService.sendShareFileBase64(n,String(i)),d.G.closeLoadingEffect(100))}}else e.saveAs(r,n)}shareFileWithBase64(r,n){this.commonService.isMobileWebview(void 0)?this.mobileWebviewService.sendShareFileBase64(n,r):e.saveAs(r,n)}}return w.\u0275fac=function(r){return new(r||w)(g.LFG(l.r),g.LFG(v.z))},w.\u0275prov=g.Yz7({token:w,factory:w.\u0275fac,providedIn:"root"}),w})()},10217:function(I,z){var _,T;void 0!==(T="function"==typeof(_=function(){"use strict";function g(r,n,s){var i=new XMLHttpRequest;i.open("GET",r),i.responseType="blob",i.onload=function(){p(i.response,n,s)},i.onerror=function(){console.error("could not download file")},i.send()}function l(r){var n=new XMLHttpRequest;n.open("HEAD",r,!1);try{n.send()}catch{}return 200<=n.status&&299>=n.status}function v(r){try{r.dispatchEvent(new MouseEvent("click"))}catch{var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),r.dispatchEvent(n)}}var u="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,w=u.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),p=u.saveAs||("object"!=typeof window||window!==u?function(){}:"download"in HTMLAnchorElement.prototype&&!w?function(r,n,s){var i=u.URL||u.webkitURL,c=document.createElement("a");c.download=n=n||r.name||"download",c.rel="noopener","string"==typeof r?(c.href=r,c.origin===location.origin?v(c):l(c.href)?g(r,n,s):v(c,c.target="_blank")):(c.href=i.createObjectURL(r),setTimeout(function(){i.revokeObjectURL(c.href)},4e4),setTimeout(function(){v(c)},0))}:"msSaveOrOpenBlob"in navigator?function(r,n,s){if(n=n||r.name||"download","string"!=typeof r)navigator.msSaveOrOpenBlob(function d(r,n){return typeof n>"u"?n={autoBom:!1}:"object"!=typeof n&&(console.warn("Deprecated: Expected third argument to be a object"),n={autoBom:!n}),n.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(r.type)?new Blob(["\ufeff",r],{type:r.type}):r}(r,s),n);else if(l(r))g(r,n,s);else{var i=document.createElement("a");i.href=r,i.target="_blank",setTimeout(function(){v(i)})}}:function(r,n,s,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof r)return g(r,n,s);var c="application/octet-stream"===r.type,P=/constructor/i.test(u.HTMLElement)||u.safari,k=/CriOS\/[\d]+/.test(navigator.userAgent);if((k||c&&P||w)&&typeof FileReader<"u"){var A=new FileReader;A.onloadend=function(){var f=A.result;f=k?f:f.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=f:location=f,i=null},A.readAsDataURL(r)}else{var C=u.URL||u.webkitURL,E=C.createObjectURL(r);i?i.location=E:location.href=E,i=null,setTimeout(function(){C.revokeObjectURL(E)},4e4)}});u.saveAs=p.saveAs=p,I.exports=p})?_.apply(z,[]):_)&&(I.exports=T)}}]);