"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[261],{69690:(S,T,l)=>{l.d(T,{o:()=>P});var _=l(54004),v=l(55330),n=l(94650),A=l(70409),e=l(51009),b=l(80529),f=l(36895),C=l(1033);function D(u,x){if(1&u){const r=n.EpF();n.ynx(0),n.TgZ(1,"a",2),n.NdJ("click",function(){n.CHM(r);const g=n.oxw();return n.KtG(g.shareFileToFlutter())}),n.TgZ(2,"span"),n._uU(3),n.ALo(4,"mytranslate"),n.qZA(),n.Hsn(5),n.qZA(),n.BQk()}if(2&u){const r=n.oxw();n.xp6(1),n.Akn(r.style),n.Tol(r.classStyle),n.s9C("target",r.target),n.xp6(2),n.Oqu(n.lcZ(4,7,r.fileDescription))}}function Z(u,x){if(1&u&&(n.TgZ(0,"a",3)(1,"span"),n._uU(2),n.ALo(3,"mytranslate"),n.qZA(),n.Hsn(4,1),n.qZA()),2&u){const r=n.oxw();n.Akn(r.style),n.Tol(r.classStyle),n.s9C("href",r.dataUrl,n.LSH),n.s9C("target",r.target),n.s9C("download",r.fileName),n.xp6(2),n.Oqu(n.lcZ(3,9,r.fileDescription))}}const E=["*","*"];let P=(()=>{class u extends v.Q{constructor(r,O,g){super(),this.shareFileFlutterService=r,this.commonService=O,this.http=g,this.dataUrl="",this.target="",this.fileName="",this.fileDescription="",this.classStyle="",this.style=""}downloadFile(){return this.http.get(this.dataUrl,{responseType:"blob"}).pipe((0,_.U)(r=>r))}shareFileToFlutter(){this.downloadFile().subscribe(r=>{console.log("response",r),this.shareFileFlutterService.shareFileWithBlob(r,this.fileName)})}ngOnInit(){super.ngOnInit()}}return u.\u0275fac=function(r){return new(r||u)(n.Y36(A.g),n.Y36(e.v),n.Y36(b.eN))},u.\u0275cmp=n.Xpm({type:u,selectors:[["azt-download-link-item"]],inputs:{dataUrl:"dataUrl",target:"target",fileName:"fileName",fileDescription:"fileDescription",classStyle:"classStyle",style:"style"},features:[n.qOj],ngContentSelectors:E,decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["NormalWeb",""],[3,"target","click"],[3,"href","target","download"]],template:function(r,O){if(1&r&&(n.F$t(E),n.YNc(0,D,6,9,"ng-container",0),n.YNc(1,Z,5,11,"ng-template",null,1,n.W1O)),2&r){const g=n.MAs(2);n.Q6J("ngIf",O.isMobileWebView)("ngIfElse",g)}},dependencies:[f.O5,C.bT],encapsulation:2}),u})()},92910:(S,T,l)=>{l.d(T,{d:()=>A});var _=l(61135),v=l(39300),n=l(94650);let A=(()=>{class e{constructor(){this.hasDataChanged=new _.X(!1)}getCurrentMessage(){return this.hasDataChanged=new _.X(!1),this.hasDataChanged.asObservable().pipe((0,v.h)(f=>!1!==f))}changeStatus(f){this.hasDataChanged.next(f)}}return e.\u0275fac=function(f){return new(f||e)},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},41261:(S,T,l)=>{l.d(T,{u:()=>B});var _=l(24006),v=l(76619),n=l(55330),A=l(41303),e=l(94650),b=l(65689),f=l(92910),C=l(36895),D=l(97392),Z=l(49692),E=l(85736),P=l(69690),u=l(1033);function x(a,d){if(1&a&&(e.TgZ(0,"p",37)(1,"span",38),e._uU(2),e.ALo(3,"mytranslate"),e.qZA(),e._uU(4),e.ALo(5,"mytranslate"),e.qZA()),2&a){const t=e.oxw(2);e.xp6(2),e.Oqu(e.lcZ(3,3,"lang_teacher_group_add_teacher_success")),e.xp6(2),e.AsE(": ",t.errorData.saveSuccess,"\xa0",e.lcZ(5,5,"lang_teacher_group_add_teacher_teacher"),"")}}function r(a,d){if(1&a&&(e.TgZ(0,"p",37)(1,"span",39),e._uU(2),e.ALo(3,"mytranslate"),e.qZA(),e._uU(4),e.qZA()),2&a){const t=e.oxw(2);e.xp6(2),e.Oqu(e.lcZ(3,2,"lang_teacher_group_add_teacher_invalid_phones")),e.xp6(2),e.hij(": ",null==t.errorData.invalidPhones?null:t.errorData.invalidPhones.join(", "),"")}}function O(a,d){if(1&a&&(e.TgZ(0,"p",37)(1,"span",39),e._uU(2),e.ALo(3,"mytranslate"),e.qZA(),e._uU(4),e.qZA()),2&a){const t=e.oxw(2);e.xp6(2),e.Oqu(e.lcZ(3,2,"lang_teacher_group_add_teacher_invalid_emails")),e.xp6(2),e.hij(": ",null==t.errorData.invalidEmails?null:t.errorData.invalidEmails.join(", "),"")}}function g(a,d){if(1&a&&(e.TgZ(0,"p",37)(1,"span",39),e._uU(2),e.ALo(3,"mytranslate"),e.qZA(),e._uU(4),e.qZA()),2&a){const t=e.oxw(2);e.xp6(2),e.Oqu(e.lcZ(3,2,"lang_teacher_group_add_teacher_duplicate_phones")),e.xp6(2),e.hij(": ",null==t.errorData.duplicatePhones?null:t.errorData.duplicatePhones.join(", "),"")}}function j(a,d){if(1&a&&(e.TgZ(0,"p")(1,"span",39),e._uU(2),e.ALo(3,"mytranslate"),e.qZA(),e._uU(4),e.qZA()),2&a){const t=e.oxw(2);e.xp6(2),e.Oqu(e.lcZ(3,2,"lang_teacher_group_add_teacher_duplicate_emails")),e.xp6(2),e.hij(": ",null==t.errorData.duplicateEmails?null:t.errorData.duplicateEmails.join(", "),"")}}function N(a,d){if(1&a&&(e.TgZ(0,"div",35),e.YNc(1,x,6,7,"p",36),e.YNc(2,r,5,4,"p",36),e.YNc(3,O,5,4,"p",36),e.YNc(4,g,5,4,"p",36),e.YNc(5,j,5,4,"p",34),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.errorData?null:t.errorData.saveSuccess),e.xp6(1),e.Q6J("ngIf",null==t.errorData||null==t.errorData.invalidPhones?null:t.errorData.invalidPhones.length),e.xp6(1),e.Q6J("ngIf",null==t.errorData||null==t.errorData.invalidEmails?null:t.errorData.invalidEmails.length),e.xp6(1),e.Q6J("ngIf",null==t.errorData||null==t.errorData.duplicatePhones?null:t.errorData.duplicatePhones.length),e.xp6(1),e.Q6J("ngIf",null==t.errorData||null==t.errorData.duplicateEmails?null:t.errorData.duplicateEmails.length)}}function k(a,d){1&a&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"mytranslate"),e.qZA()),2&a&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"lang_auto_chua_co_file_duoc_chon")))}function w(a,d){if(1&a){const t=e.EpF();e.TgZ(0,"div",40)(1,"div",41),e.NdJ("click",function(s){return s.stopPropagation()}),e.TgZ(2,"div",42),e._UZ(3,"img",43),e.ALo(4,"convertCdnLinkOfGitHub"),e.qZA(),e.TgZ(5,"div",44),e._uU(6),e.qZA(),e.TgZ(7,"div",45)(8,"button",46),e.NdJ("click",function(s){e.CHM(t);const i=e.oxw();return e.KtG(i.removeFile(s))}),e._uU(9),e.ALo(10,"mytranslate"),e.qZA()()()()}if(2&a){const t=e.oxw();e.xp6(3),e.Q6J("src",e.lcZ(4,3,"azota_assets/images/excel.png"),e.LSH),e.xp6(3),e.Oqu(t.file?t.file.name:""),e.xp6(3),e.Oqu(e.lcZ(10,5,"lang_auto_xoa"))}}function G(a,d){1&a&&(e.TgZ(0,"span",47),e._uU(1),e.ALo(2,"mytranslate"),e.qZA()),2&a&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"lang_auto__click_de_chon_file_excel")))}function z(a,d){1&a&&(e.TgZ(0,"div",48)(1,"span"),e._uU(2),e.ALo(3,"mytranslate"),e.qZA()()),2&a&&(e.xp6(2),e.hij(" ",e.lcZ(3,1,"lang_cms_utils_folder_name_validate_space"),"!"))}function q(a,d){if(1&a&&(e.TgZ(0,"div",48),e._uU(1),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.hij(" ",t.errValidateEmailOrPhone," ")}}function F(a,d){if(1&a){const t=e.EpF();e.TgZ(0,"a",49),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.showImportExcel())}),e.TgZ(1,"span"),e._uU(2),e.ALo(3,"mytranslate"),e.qZA()()}if(2&a){const t=e.oxw();e.xp6(2),e.Oqu(e.lcZ(3,1,t.isShowImportExcel?"lang_teacher_group_add_teacher_back":"lang_teacher_group_add_teacher_from_excel_file"))}}function W(a,d){1&a&&(e.TgZ(0,"span"),e._UZ(1,"span",50),e._uU(2,"\xa0"),e.qZA())}function J(a,d){1&a&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"mytranslate"),e.qZA()),2&a&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"lang_buttom_save")))}function Y(a,d){1&a&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"mytranslate"),e.qZA()),2&a&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"lang_buttom_update")))}let B=(()=>{class a extends n.Q{constructor(t,o,s,i,c){super(),this.fb=t,this.teacherGroupService=o,this.dialogRef=s,this.data=i,this.aztTeacherGroupService=c,this.form=new _.nJ({}),this.isShowImportExcel=!1,this.errValidateEmailOrPhone="",this.errorData=void 0,this.obj=i.obj,this.file=null}checkValidateEmailOrPhone(){if(this.errValidateEmailOrPhone="",this.form.controls.phone.value.length>0){if(isNaN(Number(this.form.controls.phone.value))){if(!this.validateEmail(this.form.controls.phone.value))return this.commonService.getTranslate("lang_auto_vui_long_nhap_dung_dinh_dang_email").subscribe(t=>{this.errValidateEmailOrPhone=t}),!0}else if(this.validatePhone())return this.commonService.getTranslate("lang_auto_so_dien_thoai_phai_la_10_so").subscribe(t=>{this.errValidateEmailOrPhone=t}),!0}else if(this.getErrorType("phone","required"))return this.commonService.getTranslate("lang_auto_vui_long_nhap_dung_sdt_hoac_email").subscribe(t=>{this.errValidateEmailOrPhone=t}),!0;return!1}validateEmail(t){return t.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)}validatePhone(){return this.form.controls.phone.value.length<10||this.form.controls.phone.value.length>10}getErrorType(t,o){var s;return!(!this.form.controls[t]||!this.form.controls[t].errors||null===(s=this.form.controls[t].errors)||void 0===s||!s[o])}onFileSelected(t){let i=t.target.files;this.file=i?i[0]:this.file,this.file&&["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.ms-excel"].includes(this.file.type)||(this.file=null,this.commonService.snackError("lang_auto_vui_long_chon_dung_tep_tin_excel"))}removeFile(t){t.stopPropagation(),this.file=null}showImportExcel(){this.isShowImportExcel=!this.isShowImportExcel}getDownloadFileName(t){return this.commonService.createFileNameExportFile([t])+".xlsx"}confirmAction(){var t,o;let s=this.commonService.getFormObj(this.form);if(this.initStatusObj(),this.isShowImportExcel)this.errorData=void 0,this.subscriptions.add(this.teacherGroupService.apiTeacherGroupAddTeacherIntoTeamWithExcelPostForm(this.file).subscribe(i=>{var c,p,m,h,I,M,y,U,L;1==i.success?null!==(p=null===(c=i.data)||void 0===c?void 0:c.invalidEmails)&&void 0!==p&&p.length||null!==(h=null===(m=i.data)||void 0===m?void 0:m.invalidPhones)&&void 0!==h&&h.length||null!==(M=null===(I=i.data)||void 0===I?void 0:I.duplicateEmails)&&void 0!==M&&M.length||null!==(U=null===(y=i.data)||void 0===y?void 0:y.duplicateEmails)&&void 0!==U&&U.length?(i.data.saveSuccess&&this.aztTeacherGroupService.changeStatus(!0),this.errorData=i.data,this.stopStatusObj()):(this.successStatusObj("lang_auto_them_giao_vien_vao_danh_ba_thanh_cong",!0),this.btnCloseDialog(0)):(this.btnCloseDialog(void 0),this.errorStatusObj(null!==(L=i.message)&&void 0!==L?L:"",!0))}));else if(this.obj)if(this.form.valid){let i={id:null!==(o=null===(t=this.obj)||void 0===t?void 0:t.id)&&void 0!==o?o:0,phoneOrEmail:s.phone,fullname:s.fullName};this.subscriptions.add(this.teacherGroupService.apiTeacherGroupUpdateTeacherWithTeamPost(i).subscribe(c=>{var p,m,h;1==c.success?(this.btnCloseDialog(null===(m=null===(p=c.data)||void 0===p?void 0:p.obj)||void 0===m?void 0:m.id),this.successStatusObj("lang_auto_sua_thong_tin_giao_vien_thanh_cong",!0)):(this.btnCloseDialog(void 0),this.errorStatusObj(null!==(h=c.message)&&void 0!==h?h:"",!0))}))}else this.stopStatusObj();else this.form.valid?this.subscriptions.add(this.teacherGroupService.apiTeacherGroupAddTeacherWithTeamPost({phoneOrEmail:s.phone,fullname:s.fullName}).subscribe(c=>{var p,m,h;1===c.success?(this.btnCloseDialog(null===(m=null===(p=c.data)||void 0===p?void 0:p.obj)||void 0===m?void 0:m.id),this.successStatusObj("lang_auto_them_giao_vien_thanh_cong",!0)):this.errorStatusObj(null!==(h=c.message)&&void 0!==h?h:"",!0)})):this.stopStatusObj()}btnCloseDialog(t){this.dialogRef.close(t)}ngOnInit(){var t,o,s,i,c,p;this.form=this.fb.group({phone:["",[_.kI.required]],fullName:new _.p4("",[_.kI.required,A._.noWhiteSpace]),File:new _.p4("")}),this.obj&&(this.form.controls.phone.setValue((null!==(s=null===(o=null===(t=this.obj)||void 0===t?void 0:t.phone)||void 0===o?void 0:o.length)&&void 0!==s?s:0)>0?null===(i=this.obj)||void 0===i?void 0:i.phone:null===(c=this.obj)||void 0===c?void 0:c.email),this.form.controls.fullName.setValue(null===(p=this.obj)||void 0===p?void 0:p.fullName)),super.ngOnInit()}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(_.QS),e.Y36(b.Kq),e.Y36(v.so,8),e.Y36(v.WI,8),e.Y36(f.d))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-add-teacher-to-group"]],features:[e.qOj],decls:59,vars:41,consts:[[1,"box"],[3,"formGroup"],[1,"border-b","border-slate-200/60","dark:border-darkmode-400"],[1,"p-3","border-b","border-slate-200/60","dark:border-darkmode-400"],[1,"text-md","font-medium","flex","items-center"],[1,"p-3"],[1,"azt-form-group",3,"hidden"],["class","col-span-12 box mb-3 p-3 overflow-y-auto","style","max-height: 200px",4,"ngIf"],["azt-track-service","add_teacher-LaywJqryElG",1,"col-span-12","text-center","v-dragndrop","dropzone","dz-started","cur-po",2,"min-height","auto",3,"click"],[1,"px-4","py-3","rounded"],[1,"file",2,"cursor","pointer"],["id","select-upload-file",1,"self-center","select","dz-clickable"],["type","file","formControlName","File","accept",".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",1,"form-control","file-input",3,"change"],["fileSelect",""],[4,"ngIf","ngIfElse"],["exitsFile",""],["class","block mt-2 text-dark-green",4,"ngIf"],[1,"text-center","file","mt-2"],["id","download-link-item",3,"dataUrl","target","fileName","fileDescription","classStyle"],[3,"hidden"],[1,"azt-form-group"],[1,"col-span-12"],["for","full-name",1,"form-label"],[1,"input-group","mb-3"],["type","text","id","full-name","formControlName","fullName",1,"form-control",3,"placeholder"],["class","text-danger text-xs mt-1 mb-2 font-medium",4,"ngIf"],["for","number-phone",1,"form-label"],["type","text","formControlName","phone",1,"form-control",3,"placeholder"],[1,"p-3","grid","grid-cols-12","gap-2","items-center"],[1,"col-span-12","md:col-span-4"],["azt-track-service","add_teacher-FtuIQNEoHHq","class","btn-text-primary font-medium",3,"click",4,"ngIf"],[1,"col-span-12","md:col-span-8","azt-block-button","flex","ml-auto","w-full","justify-end"],["azt-track-service","add_teacher-62L-8vj1FEs","type","button",1,"btn","btn-secondary","w-32","mr-2",3,"click"],["azt-track-service","add_teacher-yDxPDSo4A40",1,"btn","w-32","btn-primary",3,"disabled","click"],[4,"ngIf"],[1,"col-span-12","box","mb-3","p-3","overflow-y-auto",2,"max-height","200px"],["class","mb-1",4,"ngIf"],[1,"mb-1"],[1,"text-success"],[1,"text-danger"],[1,"flex","items-center","justify-center","m-3"],["azt-track-service","add_teacher-fB5ihhpYelT",1,"fileinfo","p-3",3,"click"],[1,"title"],["alt","excel icon",1,"img-fluid",3,"src"],[1,"file-name"],[1,"action"],["azt-track-service","add_teacher-5zxfYY02MU2",1,"btn-remove",3,"click"],[1,"block","mt-2","text-dark-green"],[1,"text-danger","text-xs","mt-1","mb-2","font-medium"],["azt-track-service","add_teacher-FtuIQNEoHHq",1,"btn-text-primary","font-medium",3,"click"],["role","status",1,"spinner-border","spinner-border-sm"]],template:function(t,o){if(1&t){const s=e.EpF();e.TgZ(0,"div",0)(1,"form",1)(2,"div",2)(3,"div",3)(4,"h3",4),e._uU(5),e.ALo(6,"mytranslate"),e.ALo(7,"mytranslate"),e.qZA()(),e.TgZ(8,"azt-mat-dialog-content")(9,"div",5)(10,"div",6),e.YNc(11,N,6,5,"div",7),e.TgZ(12,"div",8),e.NdJ("click",function(){e.CHM(s);const c=e.MAs(19);return e.KtG(c.click())}),e.TgZ(13,"div",9)(14,"div",10)(15,"a",11)(16,"mat-icon"),e._uU(17,"cloud_upload"),e.qZA()(),e.TgZ(18,"input",12,13),e.NdJ("change",function(c){return o.onFileSelected(c)}),e.qZA(),e.YNc(20,k,3,3,"span",14),e.YNc(21,w,11,7,"ng-template",null,15,e.W1O),e.YNc(23,G,3,3,"span",16),e.qZA()()(),e.TgZ(24,"div",17)(25,"azt-download-link-item",18),e.ALo(26,"convertRawLinkOfGitHubWithLocale"),e.TgZ(27,"mat-icon"),e._uU(28,"save_alt"),e.qZA()()()(),e.TgZ(29,"div",19)(30,"div",20)(31,"div",21)(32,"label",22),e._uU(33),e.ALo(34,"mytranslate"),e.qZA(),e.TgZ(35,"div",23),e._UZ(36,"input",24),e.ALo(37,"mytranslate"),e.qZA(),e.YNc(38,z,4,3,"div",25),e.qZA()(),e.TgZ(39,"div",20)(40,"div",21)(41,"label",26),e._uU(42),e.ALo(43,"mytranslate"),e.qZA(),e.TgZ(44,"div",23),e._UZ(45,"input",27),e.ALo(46,"mytranslate"),e.qZA(),e.YNc(47,q,2,1,"div",25),e.qZA()()()()()(),e.TgZ(48,"div",28)(49,"div",29),e.YNc(50,F,4,3,"a",30),e.qZA(),e.TgZ(51,"div",31)(52,"button",32),e.NdJ("click",function(){return o.btnCloseDialog(void 0)}),e._uU(53),e.ALo(54,"mytranslate"),e.qZA(),e.TgZ(55,"button",33),e.NdJ("click",function(){return o.confirmAction()}),e.YNc(56,W,3,0,"span",34),e.YNc(57,J,3,3,"span",34),e.YNc(58,Y,3,3,"span",34),e.qZA()()()()()}if(2&t){const s=e.MAs(22);e.xp6(1),e.Q6J("formGroup",o.form),e.xp6(4),e.hij(" ",o.obj?e.lcZ(7,27,"lang_auto_sua_giao_vien"):e.lcZ(6,25,"lang_auto_them_giao_vien")," "),e.xp6(5),e.Q6J("hidden",!o.isShowImportExcel),e.xp6(1),e.Q6J("ngIf",o.errorData),e.xp6(9),e.Q6J("ngIf",!o.file)("ngIfElse",s),e.xp6(3),e.Q6J("ngIf",!o.file),e.xp6(2),e.Q6J("dataUrl",e.lcZ(26,29,"azota_assets/medias_[LANG]/excel_add_teacher_exp_v5.xlsx?raw=true"))("target","_self")("fileName",o.getDownloadFileName("excel_add_teacher_exp_v5"))("fileDescription","lang_auto_tai_file_bieu_mau")("classStyle","dz-clickable"),e.xp6(4),e.Q6J("hidden",o.isShowImportExcel),e.xp6(4),e.Oqu(e.lcZ(34,31,"lang_auto_ho_va_ten")),e.xp6(3),e.s9C("placeholder",e.lcZ(37,33,"lang_auto_ho_va_ten")),e.xp6(2),e.Q6J("ngIf",o.form.controls.fullName.errors&&o.form.controls.fullName.dirty),e.xp6(4),e.Oqu(e.lcZ(43,35,"lang_auto_nhap_sdt_hoac_email")),e.xp6(3),e.s9C("placeholder",e.lcZ(46,37,"lang_auto_nhap_sdt_hoac_email")),e.xp6(2),e.Q6J("ngIf",o.form.controls.phone.dirty&&o.checkValidateEmailOrPhone()),e.xp6(3),e.Q6J("ngIf",!o.obj),e.xp6(3),e.hij(" ",e.lcZ(54,39,"lang_buttom_cancel")," "),e.xp6(2),e.Q6J("disabled",o.statusObj.loading||(o.getErrorType("fullName","noWhiteSpace")||o.checkValidateEmailOrPhone())&&!o.isShowImportExcel||1==o.isShowImportExcel&&null==o.file),e.xp6(1),e.Q6J("ngIf",o.statusObj.loading),e.xp6(1),e.Q6J("ngIf",!o.obj),e.xp6(1),e.Q6J("ngIf",o.obj)}},dependencies:[C.O5,D.Hw,_._Y,_.Fj,_.JJ,_.JL,_.sg,_.u,Z.M,E.O,P.o,u.bT,u.Jc,u.Rh],styles:[".file[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:5px;vertical-align:super}.v-dragndrop[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background:rgba(27,171,161,.05);border:1px dashed #1baba1}.v-dragndrop[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:500}.file-input[_ngcontent-%COMP%]{display:none}.dz-clickable[_ngcontent-%COMP%]{cursor:pointer;color:#007bff}.font-size-1[_ngcontent-%COMP%]{font-size:15px}.fileinfo[_ngcontent-%COMP%]{width:200px;border:1px dashed #1baba1;background:aliceblue}.fileinfo[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px}.fileinfo[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.fileinfo[_ngcontent-%COMP%]   .btn-remove[_ngcontent-%COMP%]{background:#f71414;color:#fff;padding:2px 20px;border:none;border-radius:5px;margin-top:5px}.justify-end-web[_ngcontent-%COMP%]{justify-content:end}.justify-start-webview[_ngcontent-%COMP%]{justify-content:start!important}"]}),a})()}}]);