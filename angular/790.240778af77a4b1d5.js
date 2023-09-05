"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[790],{52630:(y,w,a)=>{a.d(w,{s:()=>M});var E=a(65879),R=a(87384),N=a(50626),u=a(32839),z=a(62183),B=a(75108),d=a(11530);let M=(()=>{class L{constructor(n,r,_,i,f,x){this.commonService=n,this.sortService=r,this.shareFileFlutterService=_,this.encryptService=i,this.formatAnswerSheetService=f,this.exportExcelService=x}exportFileNameOfStudentCode(n,r,_){return 100==n&&(r=""),this.commonService.createFileNameExportFile(["DanhSachSBD"+(r?"_"+r:"")+"_"+this.encryptService.createMd5(_).substring(0,6)])+".xlsx"}chooseAnswerSheetTemplate(n,r,_,i,f,x){return 12==r?n.createA5AnswerSheetFullA4_50(x??50):13==r?n.createA4AnswerSheet_35hh(x??50):14==r?n.createA6AnswerSheetFullA4_20(x??20):n.createAzotaAnswerSheet_A4(x??120)}exportFileNameOfAnswerSheet(n,r,_){var i="";return 100==n&&(r=""),(0==n||100==n)&&(i=this.commonService.createFileNameExportFile(["PhieuTL_"+_+(r?"_"+r:"")])),i}exportFileNameOfAnswerExcelOffline(n,r,_){var i="";return 100==n&&(r=""),(0==n||100==n)&&(i=this.commonService.createFileNameExportFile(["DapAn_"+(r?"_"+r:"")])),i}exportFileNameOfRawExam(n,r,_){var i="";return 100==n&&(r=""),(0==n||100==n)&&(i=this.commonService.createFileNameExportFile([(r?"_"+r:"")+"_"+this.encryptService.createMd5(_).substring(0,6)])),i}exportFileNameOfExamOffline(n,r,_,i){var f="";return 100==n&&(r=""),(0==n||100==n)&&(f=this.commonService.createFileNameExportFile([(i?this.formatAnswerSheetService.formatOfflineExamHashIdToNumber(i,3)+"_":"")+_+(r?"_"+r:"")])),f}printStudentCode(n,r){var _=[];let i=this.commonService.myClone(r);for(let f=0;f<i.length;f++)_.push({code:i[f].code??0,fullName:i[f]?.fullName??"",birthday:i[f]?.birthday??"",className:i[f].classroomName??""});this._exportExcelForCodeNumber(n,_)}_exportExcelForCodeNumber(n,r){let _=this.exportFileNameOfStudentCode(0,n?.name??"",n?.hashId??"");const i=this.exportExcelService.exportExcelForCodeNumber(r);this.shareFileFlutterService.shareFileWithBlob(i,_)}}return L.\u0275fac=function(n){return new(n||L)(E.LFG(R.z),E.LFG(N.V),E.LFG(u.g),E.LFG(z.j),E.LFG(B.j),E.LFG(d.L))},L.\u0275prov=E.Yz7({token:L,factory:L.\u0275fac,providedIn:"root"}),L})()},96790:(y,w,a)=>{a.d(w,{F:()=>x});var E=a(85965),N=a(3760),u=a(60013),z=a(8720),B=a(86670),d=a(41003),M=a(65879),L=a(8415),G=a(87384),n=a(63934),r=a(66131),_=a(52630),i=a(75108),f=a(32839);let x=(()=>{class O{constructor(s,e,c,o,v,p,t){this.cdnService=s,this.commonService=e,this.userService=c,this.questionRenderService=o,this.printAnswersheetService=v,this.formatAnswerSheetService=p,this.shareFileFlutterService=t,this.configRenderService=new z.v,this.saveLoadingMsg="",this.isAnsDetail=!1,this.isEnableDebug=!1,this.zipper=new E,this.countRetryLoadJS=0}loadScriptAction(){return new Promise((s,e)=>{this.commonService.loadScriptPromises([{source:this.cdnService.registerJsCdn("min.azota_docx_script"),name:"min.azota_docx_script"}]).then(()=>{setTimeout(()=>{window.hasOwnProperty("azotaDocx")?(typeof azotaDocx<"u"&&azotaDocx&&s(!0),e(new Error)):(this.countRetryLoadJS++,this.countRetryLoadJS>3?e(new Error("lang_core_lib_not_load")):s(this.loadScriptAction()))},1e3)})})}convertAnswerQuestion(s){let e=[];return s.forEach(c=>{let o="<b>     "+(c.alpha?c.alpha:c.key)+".</b> "+(0,d.uG)(c.content);e.push(o)}),e}getDataForExportDocxApi(s,e,c){let o=[],v=1;if(c){let t=this.commonService.myTranslateInstant("lang_cms_publish_test_exam");o.push({content:`<b> ${t} `+this.formatAnswerSheetService.formatOfflineExamHashIdToNumber(c,3)+".</b>",answers:[]})}let p=this.expandInfoParse?.label??this.commonService.myTranslateInstant("lang_auto_cau");return e.forEach(t=>{1!==s.hideGroupQuestion&&t.groupInfo?.isFirstInGroup&&t.groupInfo.groupContent&&o.push({content:t.groupInfo.groupContent,answers:[]}),this.isEnableDebug&&o.push({content:` <br/><br/><br/>*** <b>Question ID: ${t.id}</b> ***`,answers:[]});let l={content:`<b>${p} `+(v+(s.startQuestionIndex??1)-1)+".</b> "+(t.content?.includes("<img")?"<br>":"")+(0,d.uG)(t.content),answers:this.convertAnswerQuestion(t.answers??[])};if(v++,o.push(l),this.isAnsDetail){if(t.answerResult){let h=[];t.answerResult.forEach(A=>{let D=A;const g=t.answers?.find(I=>I.key===A);g&&(D=g.alpha??D),h.push(D)}),o.push({content:`<b>${this.commonService.myTranslateInstant("lang_auto_dap_an_dung")}</b>: ${h.join(" | ")}`,answers:[]})}t.help&&o.push({content:`<b>${this.commonService.myTranslateInstant("lang_auto_giai_thich_chi_tiet_upper")}</b>: ${t.help}`,answers:[]})}this.isEnableDebug&&o.push({content:"*** *************** .. **************** ***<br/><br/><br/>",answers:[]})}),o}itemConverterCaller(s,e,c,o,v){return new Promise((p,t)=>{this.questionRenderService.parseRenderQuestions(s.listQuestion,l=>{this.saveLoadingMsg.includes(")")||(this.changeMsg?this.changeMsg(this.saveLoadingMsg+Math.floor(l)+"%"):u.G.changeMsgLoadingEffect(this.saveLoadingMsg+Math.floor(l)+"%"))},this.configRenderService,void 0,!0,v).then(l=>{let h=[];h.push({content:d.Ip.makeHeaderTable([d.Ip.createLineCenterBold(e.schoolName?e.schoolName:"")],[d.Ip.createLineCenterBold(e.examName??""),d.Ip.createLineCenterBold(e.subject??""),d.Ip.createLineCenterItalicized(e.examMinutes??""),d.Ip.createLineCenterItalicized("-------------------------")],!1),answers:[]}),h.push({content:d.Ip.createLineBold(this.commonService.myTranslateInstant("lang_auto_ho_ten_thi_sinh_offline")??"").outerHTML,answers:[]}),h.push({content:d.Ip.createLineBold(this.commonService.myTranslateInstant("lang_auto_so_bao_danh_offline")??"").outerHTML,answers:[]}),h=h.concat(this.getDataForExportDocxApi(o,l,s.offlineExamMixQuestionObj?s.offlineExamMixQuestionObj.hashId??0:void 0)),typeof azotaDocx<"u"&&azotaDocx?azotaDocx.exportToDocxBinary({questions:h,additionalParams:{isHeadless:!0}}).then(A=>{p({userObj:c,data:A,input:h,additionParams:e,offlineExamMixQuestionObj:s.offlineExamMixQuestionObj})}):t(new Error("C\xf3 l\u1ed7i x\u1ea3y ra trong qu\xe1 tr\xecnh x\u1eed l\xfd d\u1eef li\u1ec7u (Kh\xf4ng t\u1ea3i \u0111\u01b0\u1ee3c th\u01b0 vi\u1ec7n). Vui l\xf2ng F5 v\xe0 th\u1eed l\u1ea1i sau!"))}).catch(l=>{t(new Error(l[0].message))})})}masterConverterCaller(s,e,c,o,v,p){return new Promise((t,l)=>{const h=this.userService.getUserObj();let A=this.commonService.myTranslateInstant("lang_testbank_utils_footer_infomation_school")?.toLowerCase(),D=this.commonService.myTranslateInstant("lang_auto_docx_mon_thi")?.toLowerCase(),g=this.commonService.myTranslateInstant("lang_auto_docx_bai_thi")?.toLowerCase(),I=this.commonService.myTranslateInstant("lang_testbank_testted_list_time_homework"),F=this.commonService.myTranslateInstant("lang_core_khong_ke_thoi_gian_giao_de"),T=this.commonService.myTranslateInstant("lang_testbank_testted_list_minute"),P=this.commonService.myTranslateInstant("lang_auto_khong_gioi_han");const b=new N.Q(1,{function:(S,m)=>{this.saveLoadingMsg=`${this.commonService.myTranslateInstant("lang_auto_dang_tao_tep_tin_cho_de_thi")} ${m<=1?"":`(${S}/${m}) `}`,this.changeMsg?this.changeMsg(this.saveLoadingMsg):u.G.changeMsgLoadingEffect(this.saveLoadingMsg)}});s.forEach(S=>{b.addTask(this,this.itemConverterCaller,[S,{schoolName:o?.nameSchool??`{${A}}`,subject:o?.nameSubject??`{${D}}`,examName:e.name??`{${g}}`,examMinutes:e.minutes&&e.minutes>0?`${I}: `+e.minutes+` ${T} (${F})`:` ${I}: ${P}`,templateType:v??0,numberOfQuestion:S.listQuestion.length,examId:S.offlineExamMixQuestionObj?.hashId??0},h,e,p])}),b.start().then(S=>{if(S.errs.length>0)l(S.errs[0]);else if(1===S.datas.length){const m=S.datas[0],C=new Blob([m.data],{type:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"});let K=this.createNameExam(e,c,m.offlineExamMixQuestionObj);this.shareFileFlutterService.shareFileWithBlob(C,K),t()}else S.datas.forEach(m=>{let C=this.createNameExam(e,c,m.offlineExamMixQuestionObj);C=this.replaceAllString(C,"/","_"),this.zipper.file("DOCS/"+C,m.data)}),setTimeout(()=>{this.zipper.generateAsync({type:"blob"}).then(m=>{let C=this.commonService.createFileNameExportFile([e.name??"azota"])+"_offline_test.zip";this.shareFileFlutterService.shareFileWithBlob(m,C),t()},m=>{l(m)})},200)})})}replaceAllString(s,e,c){for(;s.includes(e);)s=s.replace(e,c);return s}createNameExam(s,e,c){return e?this.printAnswersheetService.exportFileNameOfExamOffline(0,s.name??"",e?.hashId??"",c?.hashId??0)+".docx":this.printAnswersheetService.exportFileNameOfRawExam(0,s.name??"",s.hashId??"")+".docx"}downloadExam(s,e,c,o,v,p,t,l,h,A,D){return new Promise((g,I)=>{this.isAnsDetail=s,this.isEnableDebug=!!A,this.expandInfoParse=this.commonService.castJsonToObj(e.expandInfo??"{}"),this.changeMsg=h,this.loadScriptAction().then(F=>{F?this.masterConverterCaller([{listQuestion:v,offlineExamMixQuestionObj:o}],e,c,p,t,D).then(()=>{this.zipper=new E,l?l(10):u.G.closeLoadingEffect(10),g()}).catch(T=>{u.G.closeLoadingEffect(10),I(T)}):(l?l(10):u.G.closeLoadingEffect(10),I(new Error("lang_core_lib_not_load")))}).catch(()=>{l?l(10):u.G.closeLoadingEffect(10),I(new Error("lang_core_lib_not_load"))})})}downloadExamObjs(s,e,c,o,v,p,t,l,h,A){return new Promise((D,g)=>{this.isAnsDetail=s,this.isEnableDebug=!!h,this.expandInfoParse=this.commonService.castJsonToObj(e.expandInfo??"{}"),this.changeMsg=l,this.loadScriptAction().then(I=>{if(I){let F=!0;const T=[];o.forEach(P=>{let b=this.commonService.castJsonToClassObjs(B.v,JSON.stringify(P.mixQuestions??[]))??[];b.length>0?T.push({listQuestion:b,offlineExamMixQuestionObj:P}):F=!1}),F?this.masterConverterCaller(T,e,c,v,p,A).then(()=>{this.zipper=new E,t?t(10):u.G.closeLoadingEffect(10),D()}).catch(P=>{t?t(10):u.G.closeLoadingEffect(10),g(P)}):(t?t(10):u.G.closeLoadingEffect(10),g(new Error("\u0110\u1ec1 thi kh\xf4ng h\u1ee3p l\u1ec7")))}else t?t(10):u.G.closeLoadingEffect(10),g(new Error("lang_core_lib_not_load"))}).catch(()=>{t?t(10):u.G.closeLoadingEffect(10),g(new Error("lang_core_lib_not_load"))})})}}return O.\u0275fac=function(s){return new(s||O)(M.LFG(L.E),M.LFG(G.z),M.LFG(n.U),M.LFG(r.h),M.LFG(_.s),M.LFG(i.j),M.LFG(f.g))},O.\u0275prov=M.Yz7({token:O,factory:O.\u0275fac,providedIn:"root"}),O})()}}]);