"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[835],{47859:(O,A,i)=>{i.d(A,{M:()=>v});var e=i(39621),n=i(65879),x=i(96814),u=i(56223),C=i(775),d=i(91190);function b(_,m){if(1&_&&(n.TgZ(0,"div")(1,"form",1)(2,"div",2),n._UZ(3,"input",3),n.TgZ(4,"label",4),n._uU(5),n.ALo(6,"mytranslate"),n.qZA()()()()),2&_){const l=n.oxw();n.xp6(1),n.Q6J("formGroup",l.form),n.xp6(4),n.hij(" ",n.lcZ(6,2,"lang_core_display_the_selected_classes")," ")}}let v=(()=>{class _ extends e.Q{}return _.\u0275fac=function(){let m;return function(h){return(m||(m=n.n5z(_)))(h||_)}}(),_.\u0275cmp=n.Xpm({type:_,selectors:[["azt-is-show-check-classroom"]],inputs:{form:"form"},features:[n.qOj],decls:1,vars:1,consts:[[4,"ngIf"],[3,"formGroup"],[1,"form-check"],["id","show-checked","formControlName","isShowCheckClass","type","checkbox",1,"form-check-input"],["for","show-checked",1,"form-check-label"]],template:function(l,h){1&l&&n.YNc(0,b,7,4,"div",0),2&l&&n.Q6J("ngIf",h.form)},dependencies:[x.O5,u._Y,u.Wl,u.JJ,u.JL,u.sg,u.u,C.M,d.JV],encapsulation:2}),_})()},74438:(O,A,i)=>{i.d(A,{V:()=>_});var e=i(65879),n=i(56223),x=i(39621),u=i(79107),C=i(96814),d=i(91190);function b(m,l){1&m&&(e.ynx(0),e._uU(1),e.ALo(2,"mytranslate"),e.BQk()),2&m&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"lang_remove_all_classroom")," "))}function v(m,l){1&m&&(e._uU(0),e.ALo(1,"mytranslate")),2&m&&e.hij(" ",e.lcZ(1,1,"lang_select_all_classroom")," ")}let _=(()=>{class m extends x.Q{toggleAllCheckBox(h){let o=h.target.checked,a=this.sAztClassroomCheckboxService.findClassroomWithNoPermission(this.objs,this.permissionName);if(this.formArray)for(var g=0;g<this.formArray.controls.length;g++)this.objs[g]&&null!=this.objs[g].permissionObj&&!this.commonService.filterArray(a,this.objs[g].id)&&this.formArray.controls[g].setValue(o);this.calculateIsCheckAll(),this.changeCheckboxEvent.emit(void 0)}clearAllCheckBox(){var h=this.sAztClassroomCheckboxService.findClassroomWithNoPermission(this.objs,this.permissionName);if(this.formArray)for(var o=0;o<this.formArray.controls.length;o++)this.objs[o]&&null!=this.objs[o].permissionObj&&!this.commonService.filterArray(h,this.objs[o].id)&&this.formArray.controls[o].setValue(!1);this.calculateIsCheckAll(),this.changeCheckboxEvent.emit(void 0)}checkAllCheckBox(){var h=this.sAztClassroomCheckboxService.findClassroomWithNoPermission(this.objs,this.permissionName);if(this.formArray)for(var o=0;o<this.formArray.controls.length;o++)this.objs[o]&&null!=this.objs[o].permissionObj&&!this.commonService.filterArray(h,this.objs[o].id)&&this.formArray.controls[o].setValue(!0);this.calculateIsCheckAll(),this.changeCheckboxEvent.emit(void 0)}calculateIsCheckAll(){for(var h=!0,o=this.sAztClassroomCheckboxService.findClassroomWithNoPermission(this.objs,this.permissionName),a=0;a<this.formArray.controls.length;a++)this.objs[a]&&null!=this.objs[a].permissionObj&&!this.commonService.filterArray(o,this.objs[a].id)&&(this.formArray.controls[a].value||(h=!1));this.isCheckAll=h}ngOnInit(){super.ngOnInit(),this.formArray.valueChanges.subscribe(h=>{this.calculateIsCheckAll(),this.cd.detectChanges()}),this.calculateIsCheckAll()}constructor(h,o){super(),this.cd=h,this.sAztClassroomCheckboxService=o,this.changeCheckboxEvent=new e.vpe,this.formArray=new n.Oe([]),this.objs=[],this.isCheckAll=!1}}return m.\u0275fac=function(h){return new(h||m)(e.Y36(e.sBO),e.Y36(u.f))},m.\u0275cmp=e.Xpm({type:m,selectors:[["azt-list-classroom-check-all"]],inputs:{formArray:"formArray",objs:"objs",permissionName:"permissionName"},outputs:{changeCheckboxEvent:"changeCheckboxEvent"},features:[e.qOj],decls:7,vars:4,consts:[[3,"hidden"],[1,"form-check"],["id","checkbox-all","type","checkbox",1,"form-check-input",3,"checked","change"],["for","checkbox-all",1,"form-check-label"],[4,"ngIf","ngIfElse"],["elseTemplate",""]],template:function(h,o){if(1&h&&(e.TgZ(0,"span",0)(1,"div",1)(2,"input",2),e.NdJ("change",function(g){return o.toggleAllCheckBox(g)}),e.qZA(),e.TgZ(3,"label",3),e.YNc(4,b,3,3,"ng-container",4),e.YNc(5,v,2,3,"ng-template",null,5,e.W1O),e.qZA()()()),2&h){const a=e.MAs(6);e.Q6J("hidden",o.objs.length<=0),e.xp6(2),e.Q6J("checked",o.isCheckAll),e.xp6(2),e.Q6J("ngIf",o.isCheckAll)("ngIfElse",a)}},dependencies:[C.O5,d.JV],encapsulation:2}),m})()},10463:(O,A,i)=>{i.d(A,{B:()=>U});var e=i(65879),n=i(56223),x=i(35187),u=i(39621),C=i(19347),d=i(90241),b=i(5961),v=i(38885),_=i(96814),m=i(775),l=i(91190);function h(r,p){1&r&&(e.TgZ(0,"div",11)(1,"span"),e._uU(2),e.ALo(3,"mytranslate"),e.qZA()()),2&r&&(e.xp6(2),e.hij(" ",e.lcZ(3,1,"lang_student_classroom_list_utils_create_class_request_enter_class")," "))}let o=(()=>{class r extends d.e{btnCloseDialog(){this.dialogRef.close()}saveClass(){if(this.form.invalid||this.statusObj.loading)this.showErrorSnack("lang_auto_vui_long_dien_day_du_thong_tin");else{this.initStatusObj();let t=(new Date).getFullYear(),c={classroomName:this.getFormValue().className,year:`${t} - ${t+1}`};this.classroomGroupService.apiClassroomGroupCreateClassroomWithGroupPost(c).subscribe(f=>{1==f.success?(this.successStatusObj(),this.showSuccessSnack("lang_auto_tao_thanh_cong_lop_hoc"),this.dialogRef.close(f.data)):(this.stopStatusObj(),this.showErrorSnack("lang_auto_tao_lop_hoc_khong_thanh_cong_vui_long_kiem_tra_lai_du_lieu"))})}}getFormValue(){return this.form.getRawValue()}ngOnInit(){super.ngOnInit()}constructor(t,s,c){super(c,s),this.classroomGroupService=t,this.dialogRef=s,this.data=c,this.form=new n.cw({className:new n.NI("",{nonNullable:!0,validators:[n.kI.required,b._.noWhiteSpace]})})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(v.c8),e.Y36(C.so,8),e.Y36(C.WI))},r.\u0275cmp=e.Xpm({type:r,selectors:[["create-classroom"]],features:[e.qOj],decls:18,vars:15,consts:[[1,"box"],[3,"formGroup"],[1,"border-b","border-slate-200/60","dark:border-darkmode-400"],[1,"p-5"],[1,"text-md","font-medium","flex","items-center"],[1,"mt-2"],["type","text","formControlName","className",1,"form-control",3,"placeholder"],["class","text-xs text-danger font-medium mt-1",4,"ngIf"],[1,"p-3","text-right"],["azt-track-service","create-classroom-dialog-U1melptHG5",1,"btn","btn-secondary","w-24","mr-2",3,"click"],["azt-track-service","create-classroom-dialog-UgZXPvjLFu",1,"btn","w-24","btn-primary",3,"disabled","click"],[1,"text-xs","text-danger","font-medium","mt-1"]],template:function(t,s){1&t&&(e.TgZ(0,"div",0)(1,"form",1)(2,"div",2)(3,"div",3)(4,"h3",4),e._uU(5),e.ALo(6,"mytranslate"),e.qZA(),e.TgZ(7,"div",5),e._UZ(8,"input",6),e.ALo(9,"mytranslate"),e.qZA(),e.YNc(10,h,4,3,"div",7),e.qZA()(),e.TgZ(11,"div",8)(12,"button",9),e.NdJ("click",function(){return s.btnCloseDialog()}),e._uU(13),e.ALo(14,"mytranslate"),e.qZA(),e.TgZ(15,"button",10),e.NdJ("click",function(){return s.saveClass()}),e._uU(16),e.ALo(17,"mytranslate"),e.qZA()()()()),2&t&&(e.xp6(1),e.Q6J("formGroup",s.form),e.xp6(4),e.hij(" ",e.lcZ(6,7,"lang_auto_tao_lop")," "),e.xp6(3),e.s9C("placeholder",e.lcZ(9,9,"lang_auto_nhap_ten_lop")),e.xp6(2),e.Q6J("ngIf",s.form.controls.className.dirty&&s.form.controls.className.errors),e.xp6(3),e.hij(" ",e.lcZ(14,11,"lang_auto_dong")," "),e.xp6(2),e.Q6J("disabled",s.form.invalid),e.xp6(1),e.hij(" ",e.lcZ(17,13,"lang_auto_luu")," "))},dependencies:[_.O5,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,m.M,l.JV],encapsulation:2}),r})();var a=i(61675),g=i(79107),k=i(92596);function y(r,p){if(1&r){const t=e.EpF();e.TgZ(0,"div",2)(1,"div",3)(2,"div",4),e._uU(3),e.ALo(4,"mytranslate"),e.TgZ(5,"a",5),e.NdJ("click",function(){e.CHM(t);const c=e.oxw();return e.KtG(c.openDialogCreateClassroom())}),e._uU(6),e.ALo(7,"mytranslate"),e.qZA(),e._uU(8),e.ALo(9,"mytranslate"),e.qZA()()()}2&r&&(e.xp6(3),e.hij(" ",e.lcZ(4,3,"lang_auto_thayco_chua_tao_lop_vui_long_click")," "),e.xp6(3),e.hij(" ",e.lcZ(7,5,"lang_testbank_test_config_come_in")," "),e.xp6(2),e.hij(" ",e.lcZ(9,7,"lang_testbank_test_config_create_class"),". "))}function D(r,p){1&r&&(e.ynx(0),e.TgZ(1,"div",9)(2,"span",10),e._uU(3),e.ALo(4,"mytranslate"),e.qZA()(),e.BQk()),2&r&&(e.xp6(3),e.Oqu(e.lcZ(4,1,"lang_testbank_no_classes_are_selected")))}function E(r,p){if(1&r&&(e.TgZ(0,"span",21),e._uU(1),e.ALo(2,"slice"),e.qZA()),2&r){const t=e.oxw(3).index,s=e.oxw(3);e.s9C("matTooltip",s.objs[t].name),e.xp6(1),e.hij(" ",e.Dn7(2,2,s.objs[t].name,0,25)+"..."," ")}}function I(r,p){if(1&r&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&r){const t=e.oxw(3).index,s=e.oxw(3);e.xp6(1),e.hij(" ",s.objs[t].name," ")}}function T(r,p){1&r&&(e.TgZ(0,"span",22),e._uU(1),e.ALo(2,"mytranslate"),e.qZA()),2&r&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"lang_testbank_test_config_share")," "))}function M(r,p){if(1&r){const t=e.EpF();e.TgZ(0,"div",16)(1,"input",17),e.NdJ("change",function(){e.CHM(t);const c=e.oxw(2).index,f=e.oxw(3);return e.KtG(f.changeCheckboxEventLocal(f.objs[c]))}),e.qZA(),e.TgZ(2,"label",18),e.YNc(3,E,3,6,"span",19),e.YNc(4,I,2,1,"span",1),e.YNc(5,T,3,3,"span",20),e.ALo(6,"fullPermission"),e.qZA()()}if(2&r){const t=e.oxw(2).index,s=e.oxw(3);let c,f;e.xp6(1),e.s9C("id","azt-checkbox-item-"+s.objs[t].id),e.s9C("value",s.objs[t].id),e.Q6J("formControlName",t),e.xp6(1),e.s9C("for","azt-checkbox-item-"+s.objs[t].id),e.xp6(1),e.Q6J("ngIf",(null!==(c=null==s.objs[t].name?null:s.objs[t].name.length)&&void 0!==c?c:0)>25),e.xp6(1),e.Q6J("ngIf",(null!==(f=null==s.objs[t].name?null:s.objs[t].name.length)&&void 0!==f?f:0)<=25),e.xp6(1),e.Q6J("ngIf",!e.xi3(6,7,s.objs[t],"classroom"))}}function N(r,p){if(1&r&&(e.TgZ(0,"span",21),e._uU(1),e.ALo(2,"slice"),e.qZA()),2&r){const t=e.oxw(3).index,s=e.oxw(3);e.s9C("matTooltip",s.objs[t].name),e.xp6(1),e.hij(" ",e.Dn7(2,2,s.objs[t].name,0,25)+"..."," ")}}function L(r,p){if(1&r&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&r){const t=e.oxw(3).index,s=e.oxw(3);e.xp6(1),e.hij(" ",s.objs[t].name," ")}}function w(r,p){1&r&&(e.TgZ(0,"span",22),e._uU(1),e.ALo(2,"mytranslate"),e.qZA()),2&r&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"lang_testbank_test_config_share")," "))}function P(r,p){if(1&r){const t=e.EpF();e.TgZ(0,"div",16)(1,"input",23),e.NdJ("change",function(){e.CHM(t);const c=e.oxw(2).index,f=e.oxw(3);return e.KtG(f.changeCheckboxEventLocal(f.objs[c]))}),e.qZA(),e.TgZ(2,"label",24),e.YNc(3,N,3,6,"span",19),e.YNc(4,L,2,1,"span",1),e.YNc(5,w,3,3,"span",20),e.ALo(6,"fullPermission"),e.qZA()()}if(2&r){const t=e.oxw(2).index,s=e.oxw(3);let c,f;e.xp6(1),e.s9C("id","azt-checkbox-item-"+t),e.s9C("value",s.objs[t].id),e.Q6J("disabled",!0)("formControlName",t),e.xp6(1),e.s9C("for","azt-checkbox-item-"+t),e.xp6(1),e.Q6J("ngIf",(null!==(c=null==s.objs[t].name?null:s.objs[t].name.length)&&void 0!==c?c:0)>25),e.xp6(1),e.Q6J("ngIf",(null!==(f=null==s.objs[t].name?null:s.objs[t].name.length)&&void 0!==f?f:0)<=25),e.xp6(1),e.Q6J("ngIf",!e.xi3(6,8,s.objs[t],"classroom"))}}function Z(r,p){if(1&r&&(e.TgZ(0,"div",14),e.YNc(1,M,7,10,"div",15),e.ALo(2,"createPermission"),e.YNc(3,P,7,11,"div",15),e.ALo(4,"createPermission"),e.qZA()),2&r){const t=e.oxw().index,s=e.oxw(3);e.xp6(1),e.Q6J("ngIf",null!=s.objs[t].permissionObj&&e.xi3(2,2,s.objs[t],s.listPermissionTypes[s.permissionName])),e.xp6(2),e.Q6J("ngIf",!(null!=s.objs[t].permissionObj&&e.xi3(4,5,s.objs[t],s.listPermissionTypes[s.permissionName])))}}function S(r,p){if(1&r&&(e.ynx(0),e.YNc(1,Z,5,8,"div",13),e.BQk()),2&r){const t=p.$implicit,s=p.index,c=e.oxw(3);e.xp6(1),e.Q6J("ngIf",c.objs[s]&&(null==c.form.controls.isShowCheckClass||!c.form.controls.isShowCheckClass.value||c.form.controls.isShowCheckClass.value&&t.value))}}function z(r,p){if(1&r&&(e.TgZ(0,"div",11),e.YNc(1,S,2,1,"ng-container",12),e.qZA()),2&r){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.formArray.controls)}}function W(r,p){if(1&r&&(e.TgZ(0,"div")(1,"form",6),e.YNc(2,D,5,3,"ng-container",7),e.YNc(3,z,2,1,"ng-template",null,8,e.W1O),e.qZA()()),2&r){const t=e.MAs(4),s=e.oxw();e.xp6(1),e.Q6J("formGroup",s.form),e.xp6(1),e.Q6J("ngIf",!s.checkboxChecked&&s.form.controls.isShowCheckClass.value)("ngIfElse",t)}}let U=(()=>{class r extends u.Q{changeCheckboxEventLocal(t){this.changeCheckboxEvent.emit(t)}initClassroomCheckbox(){this.formArray.clear();var t=[];if(this.homeworkObj?.classroomId&&t.push(this.homeworkObj.classroomId),this.examClassroomObjs.length)for(var s=0;s<this.examClassroomObjs.length;s++){let f=this.examClassroomObjs[s].classroomId;f&&t.push(f)}for(null!=this.shareClassroomIds&&(t=this.shareClassroomIds),s=0;s<this.objs.length;s++){var c=!1;let j=this.objs[s].id;null!=j&&t.includes(j)&&(c=!0),this.addNewCheckBox(this.formArray,c)}}addNewCheckBox(t,s){const c=new n.NI(s,{nonNullable:!0});t.push(c)}checkShowCreateClassroom(){var t=this.sAztClassroomCheckboxService.findClassroomWithFullPermission(this.objs,this.permissionName);this.showCreateNewClassroom=t.length===this.objs.length}changeClassroomObjs(t){this.objs.push(t),this.checkShowCreateClassroom(),this.initClassroomCheckbox(),this.objsChange.emit(this.objs)}openDialogCreateClassroom(){this.sAztDialogService.open(o,{data:{},width:"500px",restoreFocus:!1}).afterClosed().subscribe(s=>{s&&s.obj&&this.changeClassroomObjs(s.obj)})}ngOnInit(){super.ngOnInit(),this.checkShowCreateClassroom(),this.formArray=this.form?.get(this.formArrayName);for(var t=0;t<this.objs.length;t++)this.objs[t].name=this.commonService.myTranslateInstant(this.objs[t].name)??"";this.formArray&&this.initClassroomCheckbox(),this.form?.controls.isShowCheckClass.valueChanges.subscribe(s=>{let c=!1;for(let f=0;f<this.formArray.controls.length;f++)if(this.formArray.controls[f].value){c=!0;break}this.checkboxChecked=c})}constructor(t,s){super(),this.sAztDialogService=t,this.sAztClassroomCheckboxService=s,this.changeCheckboxEvent=new e.vpe,this.formArrayName="",this.objs=[],this.objsChange=new e.vpe,this.permissionName=x.y.homework,this.examClassroomObjs=[],this.shareClassroomIds=void 0,this.listPermissionTypes=x.y,this.showCreateNewClassroom=!1,this.checkboxChecked=!1,this.formArray=new n.Oe([])}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(a.C),e.Y36(g.f))},r.\u0275cmp=e.Xpm({type:r,selectors:[["azt-list-classroom-checkbox"]],inputs:{form:"form",formArrayName:"formArrayName",objs:"objs",permissionName:"permissionName",homeworkObj:"homeworkObj",examClassroomObjs:"examClassroomObjs",shareClassroomIds:"shareClassroomIds"},outputs:{changeCheckboxEvent:"changeCheckboxEvent",objsChange:"objsChange"},features:[e.qOj],decls:2,vars:2,consts:[["class","mt-2",4,"ngIf"],[4,"ngIf"],[1,"mt-2"],[1,"p-3"],[1,"text-create"],["azt-track-service","azt-list-classroom-checkbox-6scHm7Ch1-",1,"btn-text-primary",3,"click"],[3,"formGroup"],[4,"ngIf","ngIfElse"],["checkedBox",""],[1,"flex","items-center",2,"height","220px"],[1,"mx-auto"],["formArrayName","classroomIds",1,"grid","grid-cols-12","gap-3","p-3"],[4,"ngFor","ngForOf"],["class","col-span-12 md:col-span-6 mt-2",4,"ngIf"],[1,"col-span-12","md:col-span-6","mt-2"],["class","azt-checkbox-item",4,"ngIf"],[1,"azt-checkbox-item"],["type","checkbox",1,"form-check-input",3,"id","formControlName","value","change"],[1,"form-check-label",2,"vertical-align","middle",3,"for"],[3,"matTooltip",4,"ngIf"],["class","ml-2 py-0.5 px-2 rounded-full text-xs bg-primary text-white cursor-pointer font-medium",4,"ngIf"],[3,"matTooltip"],[1,"ml-2","py-0.5","px-2","rounded-full","text-xs","bg-primary","text-white","cursor-pointer","font-medium"],["type","checkbox",1,"form-check-input",3,"id","disabled","formControlName","value","change"],[1,"form-check-label",3,"for"]],template:function(t,s){1&t&&(e.YNc(0,y,10,9,"div",0),e.YNc(1,W,5,3,"div",1)),2&t&&(e.Q6J("ngIf",s.showCreateNewClassroom),e.xp6(1),e.Q6J("ngIf",s.form))},dependencies:[_.sg,_.O5,k.gM,n._Y,n.Wl,n.JJ,n.JL,n.sg,n.u,n.CE,m.M,_.OU,l.JV,l.NK,l.nq],encapsulation:2}),r})()},79107:(O,A,i)=>{i.d(A,{f:()=>C});var e=i(35187),n=i(65879),x=i(87384),u=i(94281);let C=(()=>{class d{constructor(v,_){this.commonService=v,this.permissionService=_}findClassroomWithNoPermission(v,_){var m=[];return v.forEach(l=>{(null==l.permissionObj||!this.permissionService.hasCreatePermission(e.y[_],l))&&(this.commonService.filterArray(m,l.id)||void 0!==l.id&&m.push(l.id))}),m}findClassroomWithFullPermission(v,_){let m=[];return v.forEach(l=>{(null==l.permissionObj||!this.permissionService.hasFullPermission(e.y[_],l))&&m.push(l)}),m}getClassroomIdsChecked(v,_,m){for(var l=[],h=0;h<m.length;h++)if(m[h]&&v[h]){var o=v[h].id;null!=o&&!this.commonService.filterArray(_,o)&&l.push(o)}return l}}return d.\u0275fac=function(v){return new(v||d)(n.LFG(x.z),n.LFG(u.j))},d.\u0275prov=n.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},16019:(O,A,i)=>{i.d(A,{WG:()=>m,o8:()=>b});var e=i(29023),n=i(65879),x=i(16676),u=i.n(x),C=i(87384);const d=u()||x,b=new n.OlP("MAT_MOMENT_DATE_ADAPTER_OPTIONS",{providedIn:"root",factory:function v(){return{useUtc:!1}}});function _(l,h){const o=Array(l);for(let a=0;a<l;a++)o[a]=h(a);return o}let m=(()=>{class l extends e.fM{constructor(o){super(),this._options=o,this.commonService=(0,n.f3M)(C.z),this._localeData={firstDayOfWeek:0,longMonths:"",shortMonths:"",dates:"",longDaysOfWeek:"",shortDaysOfWeek:"",narrowDaysOfWeek:""},d.locale(),this.setLocale(this.commonService.getCurrentLang()||d.locale())}setLocale(o){super.setLocale(o);const a=d.localeData(o);this._localeData={firstDayOfWeek:a.firstDayOfWeek(),longMonths:a.months(),shortMonths:a.monthsShort(),dates:_(31,g=>this.createDate(2017,0,g+1).format("D")),longDaysOfWeek:a.weekdays(),shortDaysOfWeek:a.weekdaysShort(),narrowDaysOfWeek:a.weekdaysMin()}}getYear(o){return this.clone(o).year()}getMonth(o){return this.clone(o).month()}getDate(o){return this.clone(o).date()}getDayOfWeek(o){return this.clone(o).day()}getMonthNames(o){return"long"===o?this._localeData.longMonths:this._localeData.shortMonths}getDateNames(){return this._localeData.dates}getDayOfWeekNames(o){return"long"===o?this._localeData.longDaysOfWeek:"short"===o?this._localeData.shortDaysOfWeek:this._localeData.narrowDaysOfWeek}getYearName(o){return this.clone(o).format("YYYY")}getFirstDayOfWeek(){return this._localeData.firstDayOfWeek}getNumDaysInMonth(o){return this.clone(o).daysInMonth()}clone(o){return o.clone().locale(this.locale)}createDate(o,a,g){if(a<0||a>11)throw Error(`Invalid month index "${a}". Month index has to be between 0 and 11.`);if(g<1)throw Error(`Invalid date "${g}". Date has to be greater than 0.`);const k=this._createMoment({year:o,month:a,date:g}).locale(this.locale);if(!k.isValid())throw Error(`Invalid date "${g}" for month with index "${a}".`);return k}today(){return this._createMoment().locale(this.locale)}parse(o,a){return o&&"string"==typeof o?this._createMoment(o,a,this.locale):o?this._createMoment(o).locale(this.locale):null}format(o,a){if(o=this.clone(o),!this.isValid(o))throw Error("MomentDateAdapter: Cannot format invalid date.");return o.format(a)}addCalendarYears(o,a){return this.clone(o).add({years:a})}addCalendarMonths(o,a){return this.clone(o).add({months:a})}addCalendarDays(o,a){return this.clone(o).add({days:a})}toIso8601(o){return this.clone(o).format()}deserialize(o){let a;if(o instanceof Date)a=this._createMoment(o).locale(this.locale);else if(this.isDateInstance(o))return this.clone(o);if("string"==typeof o){if(!o)return null;a=this._createMoment(o,d.ISO_8601).locale(this.locale)}return a&&this.isValid(a)?this._createMoment(a).locale(this.locale):super.deserialize(o)}isDateInstance(o){return d.isMoment(o)}isValid(o){return this.clone(o).isValid()}invalid(){return d.invalid()}getHour(o){return o.hours()}getMinute(o){return o.minutes()}getSecond(o){return o.seconds()}setHour(o,a){o.hours(a)}setMinute(o,a){o.minutes(a)}setSecond(o,a){o.seconds(a)}_createMoment(o,a,g){const{strict:k,useUtc:y}=this._options||{};return y?d.utc(o,a,g,k):d(o,a,g,k)}}return l.\u0275fac=function(o){return new(o||l)(n.LFG(b,8))},l.\u0275prov=n.Yz7({token:l,factory:l.\u0275fac}),l})()},35187:(O,A,i)=>{i.d(A,{y:()=>e});var e=function(n){return n[n.homework=0]="homework",n[n.exam=1]="exam",n[n.classroom=2]="classroom",n[n.student=3]="student",n}(e||{})},217:(O,A,i)=>{i.d(A,{h:()=>e});class e{static classroomCheckBoxValidator(x){const u=x.value.controls?.whoAllow,C=x.value.controls?.classroomIds;return u&&C?"2"==u.value&&e.countCheckBox(C.value)<1?(C?.setErrors({checkboxValidator:!0}),{identityRevealed:!0}):(C?.setErrors(null),null):null}static classroomCheckBoxValidatorWithoutWhoAllow(x){const u=x.value.controls?.classroomIds;return u?e.countCheckBox(u.value)<1?(u?.setErrors({classroomCheckBoxValidatorWithoutWhoAllow:!0}),{identityRevealed:!0}):(u?.setErrors(null),null):null}static countCheckBox(x){for(var u=0,C=0;C<x.length;C++)x[C]&&(u+=1);return u}}}}]);