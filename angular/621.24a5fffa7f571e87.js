"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[621],{47859:(k,A,i)=>{i.d(A,{M:()=>d});var o=i(39621),n=i(65879),f=i(96814),u=i(56223),v=i(775),c=i(91190);function b(C,m){if(1&C&&(n.TgZ(0,"div")(1,"form",1)(2,"div",2),n._UZ(3,"input",3),n.TgZ(4,"label",4),n._uU(5),n.ALo(6,"mytranslate"),n.qZA()()()()),2&C){const l=n.oxw();n.xp6(1),n.Q6J("formGroup",l.form),n.xp6(4),n.hij(" ",n.lcZ(6,2,"lang_core_display_the_selected_classes")," ")}}let d=(()=>{class C extends o.Q{}return C.\u0275fac=function(){let m;return function(h){return(m||(m=n.n5z(C)))(h||C)}}(),C.\u0275cmp=n.Xpm({type:C,selectors:[["azt-is-show-check-classroom"]],inputs:{form:"form"},features:[n.qOj],decls:1,vars:1,consts:[[4,"ngIf"],[3,"formGroup"],[1,"form-check"],["id","show-checked","formControlName","isShowCheckClass","type","checkbox",1,"form-check-input"],["for","show-checked",1,"form-check-label"]],template:function(l,h){1&l&&n.YNc(0,b,7,4,"div",0),2&l&&n.Q6J("ngIf",h.form)},dependencies:[f.O5,u._Y,u.Wl,u.JJ,u.JL,u.sg,u.u,v.M,c.JV],encapsulation:2}),C})()},74438:(k,A,i)=>{i.d(A,{V:()=>C});var o=i(65879),n=i(56223),f=i(39621),u=i(79107),v=i(96814),c=i(91190);function b(m,l){1&m&&(o.ynx(0),o._uU(1),o.ALo(2,"mytranslate"),o.BQk()),2&m&&(o.xp6(1),o.hij(" ",o.lcZ(2,1,"lang_remove_all_classroom")," "))}function d(m,l){1&m&&(o._uU(0),o.ALo(1,"mytranslate")),2&m&&o.hij(" ",o.lcZ(1,1,"lang_select_all_classroom")," ")}let C=(()=>{class m extends f.Q{toggleAllCheckBox(h){let e=h.target.checked,a=this.sAztClassroomCheckboxService.findClassroomWithNoPermission(this.objs,this.permissionName);if(this.formArray)for(var g=0;g<this.formArray.controls.length;g++)this.objs[g]&&null!=this.objs[g].permissionObj&&!this.commonService.isExistInArray(a,this.objs[g].id)&&this.formArray.controls[g].setValue(e);this.calculateIsCheckAll(),this.changeCheckboxEvent.emit(void 0)}clearAllCheckBox(){var h=this.sAztClassroomCheckboxService.findClassroomWithNoPermission(this.objs,this.permissionName);if(this.formArray)for(var e=0;e<this.formArray.controls.length;e++)this.objs[e]&&null!=this.objs[e].permissionObj&&!this.commonService.isExistInArray(h,this.objs[e].id)&&this.formArray.controls[e].setValue(!1);this.calculateIsCheckAll(),this.changeCheckboxEvent.emit(void 0)}checkAllCheckBox(){var h=this.sAztClassroomCheckboxService.findClassroomWithNoPermission(this.objs,this.permissionName);if(this.formArray)for(var e=0;e<this.formArray.controls.length;e++)this.objs[e]&&null!=this.objs[e].permissionObj&&!this.commonService.isExistInArray(h,this.objs[e].id)&&this.formArray.controls[e].setValue(!0);this.calculateIsCheckAll(),this.changeCheckboxEvent.emit(void 0)}calculateIsCheckAll(){for(var h=!0,e=this.sAztClassroomCheckboxService.findClassroomWithNoPermission(this.objs,this.permissionName),a=0;a<this.formArray.controls.length;a++)this.objs[a]&&null!=this.objs[a].permissionObj&&!this.commonService.isExistInArray(e,this.objs[a].id)&&(this.formArray.controls[a].value||(h=!1));this.isCheckAll=h}ngOnInit(){super.ngOnInit(),this.calculateIsCheckAll(),this.formArray.valueChanges.subscribe(h=>{this.calculateIsCheckAll()})}constructor(h){super(),this.sAztClassroomCheckboxService=h,this.changeCheckboxEvent=new o.vpe,this.formArray=new n.Oe([]),this.objs=[],this.isCheckAll=!1}}return m.\u0275fac=function(h){return new(h||m)(o.Y36(u.f))},m.\u0275cmp=o.Xpm({type:m,selectors:[["azt-list-classroom-check-all"]],inputs:{formArray:"formArray",objs:"objs",permissionName:"permissionName"},outputs:{changeCheckboxEvent:"changeCheckboxEvent"},features:[o.qOj],decls:7,vars:4,consts:[[3,"hidden"],[1,"form-check"],["id","checkbox-all","type","checkbox",1,"form-check-input",3,"checked","change"],["for","checkbox-all",1,"form-check-label"],[4,"ngIf","ngIfElse"],["elseTemplate",""]],template:function(h,e){if(1&h&&(o.TgZ(0,"span",0)(1,"div",1)(2,"input",2),o.NdJ("change",function(g){return e.toggleAllCheckBox(g)}),o.qZA(),o.TgZ(3,"label",3),o.YNc(4,b,3,3,"ng-container",4),o.YNc(5,d,2,3,"ng-template",null,5,o.W1O),o.qZA()()()),2&h){const a=o.MAs(6);o.Q6J("hidden",e.objs.length<=0),o.xp6(2),o.Q6J("checked",e.isCheckAll),o.xp6(2),o.Q6J("ngIf",e.isCheckAll)("ngIfElse",a)}},dependencies:[v.O5,c.JV],encapsulation:2}),m})()},10463:(k,A,i)=>{i.d(A,{B:()=>U});var o=i(65879),n=i(56223),f=i(35187),u=i(39621),v=i(19347),c=i(90241),b=i(5961),d=i(38885),C=i(96814),m=i(775),l=i(91190);function h(r,p){1&r&&(o.TgZ(0,"div",11)(1,"span"),o._uU(2),o.ALo(3,"mytranslate"),o.qZA()()),2&r&&(o.xp6(2),o.hij(" ",o.lcZ(3,1,"lang_student_classroom_list_utils_create_class_request_enter_class")," "))}let e=(()=>{class r extends c.e{btnCloseDialog(){this.dialogRef.close()}saveClass(){if(this.form.invalid||this.statusObj.loading)this.showErrorSnack("lang_auto_vui_long_dien_day_du_thong_tin");else{this.initStatusObj();let t=(new Date).getFullYear(),_={classroomName:this.getFormValue().className,year:`${t} - ${t+1}`};this.classroomGroupService.apiClassroomGroupCreateClassroomWithGroupPost(_).subscribe(x=>{1==x.success?(this.successStatusObj(),this.showSuccessSnack("lang_auto_tao_thanh_cong_lop_hoc"),this.dialogRef.close(x.data)):(this.stopStatusObj(),this.showErrorSnack("lang_auto_tao_lop_hoc_khong_thanh_cong_vui_long_kiem_tra_lai_du_lieu"))})}}getFormValue(){return this.form.getRawValue()}ngOnInit(){super.ngOnInit()}constructor(t,s,_){super(_,s),this.classroomGroupService=t,this.dialogRef=s,this.data=_,this.form=new n.cw({className:new n.NI("",{nonNullable:!0,validators:[n.kI.required,b._.noWhiteSpace]})})}}return r.\u0275fac=function(t){return new(t||r)(o.Y36(d.c8),o.Y36(v.so,8),o.Y36(v.WI))},r.\u0275cmp=o.Xpm({type:r,selectors:[["create-classroom"]],features:[o.qOj],decls:18,vars:15,consts:[[1,"box"],[3,"formGroup"],[1,"border-b","border-slate-200/60","dark:border-darkmode-400"],[1,"p-5"],[1,"text-md","font-medium","flex","items-center"],[1,"mt-2"],["type","text","formControlName","className",1,"form-control",3,"placeholder"],["class","text-xs text-danger font-medium mt-1",4,"ngIf"],[1,"p-3","text-right"],["azt-track-service","create-classroom-dialog-U1melptHG5",1,"btn","btn-secondary","w-24","mr-2",3,"click"],["azt-track-service","create-classroom-dialog-UgZXPvjLFu",1,"btn","w-24","btn-primary",3,"disabled","click"],[1,"text-xs","text-danger","font-medium","mt-1"]],template:function(t,s){1&t&&(o.TgZ(0,"div",0)(1,"form",1)(2,"div",2)(3,"div",3)(4,"h3",4),o._uU(5),o.ALo(6,"mytranslate"),o.qZA(),o.TgZ(7,"div",5),o._UZ(8,"input",6),o.ALo(9,"mytranslate"),o.qZA(),o.YNc(10,h,4,3,"div",7),o.qZA()(),o.TgZ(11,"div",8)(12,"button",9),o.NdJ("click",function(){return s.btnCloseDialog()}),o._uU(13),o.ALo(14,"mytranslate"),o.qZA(),o.TgZ(15,"button",10),o.NdJ("click",function(){return s.saveClass()}),o._uU(16),o.ALo(17,"mytranslate"),o.qZA()()()()),2&t&&(o.xp6(1),o.Q6J("formGroup",s.form),o.xp6(4),o.hij(" ",o.lcZ(6,7,"lang_auto_tao_lop")," "),o.xp6(3),o.s9C("placeholder",o.lcZ(9,9,"lang_auto_nhap_ten_lop")),o.xp6(2),o.Q6J("ngIf",s.form.controls.className.dirty&&s.form.controls.className.errors),o.xp6(3),o.hij(" ",o.lcZ(14,11,"lang_auto_dong")," "),o.xp6(2),o.Q6J("disabled",s.form.invalid),o.xp6(1),o.hij(" ",o.lcZ(17,13,"lang_auto_luu")," "))},dependencies:[C.O5,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,m.M,l.JV],encapsulation:2}),r})();var a=i(61675),g=i(79107),O=i(92596);function y(r,p){if(1&r){const t=o.EpF();o.TgZ(0,"div",2)(1,"div",3)(2,"div",4),o._uU(3),o.ALo(4,"mytranslate"),o.TgZ(5,"a",5),o.NdJ("click",function(){o.CHM(t);const _=o.oxw();return o.KtG(_.openDialogCreateClassroom())}),o._uU(6),o.ALo(7,"mytranslate"),o.qZA(),o._uU(8),o.ALo(9,"mytranslate"),o.qZA()()()}2&r&&(o.xp6(3),o.hij(" ",o.lcZ(4,3,"lang_auto_thayco_chua_tao_lop_vui_long_click")," "),o.xp6(3),o.hij(" ",o.lcZ(7,5,"lang_testbank_test_config_come_in")," "),o.xp6(2),o.hij(" ",o.lcZ(9,7,"lang_testbank_test_config_create_class"),". "))}function E(r,p){1&r&&(o.ynx(0),o.TgZ(1,"div",9)(2,"span",10),o._uU(3),o.ALo(4,"mytranslate"),o.qZA()(),o.BQk()),2&r&&(o.xp6(3),o.Oqu(o.lcZ(4,1,"lang_testbank_no_classes_are_selected")))}function j(r,p){if(1&r&&(o.TgZ(0,"span",21),o._uU(1),o.ALo(2,"slice"),o.qZA()),2&r){const t=o.oxw(3).index,s=o.oxw(3);o.s9C("matTooltip",s.objs[t].name),o.xp6(1),o.hij(" ",o.Dn7(2,2,s.objs[t].name,0,25)+"..."," ")}}function D(r,p){if(1&r&&(o.TgZ(0,"span"),o._uU(1),o.qZA()),2&r){const t=o.oxw(3).index,s=o.oxw(3);o.xp6(1),o.hij(" ",s.objs[t].name," ")}}function T(r,p){1&r&&(o.TgZ(0,"span",22),o._uU(1),o.ALo(2,"mytranslate"),o.qZA()),2&r&&(o.xp6(1),o.hij(" ",o.lcZ(2,1,"lang_testbank_test_config_share")," "))}function M(r,p){if(1&r){const t=o.EpF();o.TgZ(0,"div",16)(1,"input",17),o.NdJ("change",function(){o.CHM(t);const _=o.oxw(2).index,x=o.oxw(3);return o.KtG(x.changeCheckboxEventLocal(x.objs[_]))}),o.qZA(),o.TgZ(2,"label",18),o.YNc(3,j,3,6,"span",19),o.YNc(4,D,2,1,"span",1),o.YNc(5,T,3,3,"span",20),o.ALo(6,"fullPermission"),o.qZA()()}if(2&r){const t=o.oxw(2).index,s=o.oxw(3);let _,x;o.xp6(1),o.s9C("id","azt-checkbox-item-"+s.objs[t].id),o.s9C("value",s.objs[t].id),o.Q6J("formControlName",t),o.xp6(1),o.s9C("for","azt-checkbox-item-"+s.objs[t].id),o.xp6(1),o.Q6J("ngIf",(null!==(_=null==s.objs[t].name?null:s.objs[t].name.length)&&void 0!==_?_:0)>25),o.xp6(1),o.Q6J("ngIf",(null!==(x=null==s.objs[t].name?null:s.objs[t].name.length)&&void 0!==x?x:0)<=25),o.xp6(1),o.Q6J("ngIf",!o.xi3(6,7,s.objs[t],"classroom"))}}function L(r,p){if(1&r&&(o.TgZ(0,"span",21),o._uU(1),o.ALo(2,"slice"),o.qZA()),2&r){const t=o.oxw(3).index,s=o.oxw(3);o.s9C("matTooltip",s.objs[t].name),o.xp6(1),o.hij(" ",o.Dn7(2,2,s.objs[t].name,0,25)+"..."," ")}}function N(r,p){if(1&r&&(o.TgZ(0,"span"),o._uU(1),o.qZA()),2&r){const t=o.oxw(3).index,s=o.oxw(3);o.xp6(1),o.hij(" ",s.objs[t].name," ")}}function w(r,p){1&r&&(o.TgZ(0,"span",22),o._uU(1),o.ALo(2,"mytranslate"),o.qZA()),2&r&&(o.xp6(1),o.hij(" ",o.lcZ(2,1,"lang_testbank_test_config_share")," "))}function P(r,p){if(1&r){const t=o.EpF();o.TgZ(0,"div",16)(1,"input",23),o.NdJ("change",function(){o.CHM(t);const _=o.oxw(2).index,x=o.oxw(3);return o.KtG(x.changeCheckboxEventLocal(x.objs[_]))}),o.qZA(),o.TgZ(2,"label",24),o.YNc(3,L,3,6,"span",19),o.YNc(4,N,2,1,"span",1),o.YNc(5,w,3,3,"span",20),o.ALo(6,"fullPermission"),o.qZA()()}if(2&r){const t=o.oxw(2).index,s=o.oxw(3);let _,x;o.xp6(1),o.s9C("id","azt-checkbox-item-"+t),o.s9C("value",s.objs[t].id),o.Q6J("disabled",!0)("formControlName",t),o.xp6(1),o.s9C("for","azt-checkbox-item-"+t),o.xp6(1),o.Q6J("ngIf",(null!==(_=null==s.objs[t].name?null:s.objs[t].name.length)&&void 0!==_?_:0)>25),o.xp6(1),o.Q6J("ngIf",(null!==(x=null==s.objs[t].name?null:s.objs[t].name.length)&&void 0!==x?x:0)<=25),o.xp6(1),o.Q6J("ngIf",!o.xi3(6,8,s.objs[t],"classroom"))}}function Z(r,p){if(1&r&&(o.TgZ(0,"div",14),o.YNc(1,M,7,10,"div",15),o.ALo(2,"createPermission"),o.YNc(3,P,7,11,"div",15),o.ALo(4,"createPermission"),o.qZA()),2&r){const t=o.oxw().index,s=o.oxw(3);o.xp6(1),o.Q6J("ngIf",null!=s.objs[t].permissionObj&&o.xi3(2,2,s.objs[t],s.listPermissionTypes[s.permissionName])),o.xp6(2),o.Q6J("ngIf",!(null!=s.objs[t].permissionObj&&o.xi3(4,5,s.objs[t],s.listPermissionTypes[s.permissionName])))}}function z(r,p){if(1&r&&(o.ynx(0),o.YNc(1,Z,5,8,"div",13),o.BQk()),2&r){const t=p.$implicit,s=p.index,_=o.oxw(3);o.xp6(1),o.Q6J("ngIf",_.objs[s]&&(null==_.form.controls.isShowCheckClass||!_.form.controls.isShowCheckClass.value||_.form.controls.isShowCheckClass.value&&t.value))}}function S(r,p){if(1&r&&(o.TgZ(0,"div",11),o.YNc(1,z,2,1,"ng-container",12),o.qZA()),2&r){const t=o.oxw(2);o.xp6(1),o.Q6J("ngForOf",t.formArray.controls)}}function W(r,p){if(1&r&&(o.TgZ(0,"div")(1,"form",6),o.YNc(2,E,5,3,"ng-container",7),o.YNc(3,S,2,1,"ng-template",null,8,o.W1O),o.qZA()()),2&r){const t=o.MAs(4),s=o.oxw();o.xp6(1),o.Q6J("formGroup",s.form),o.xp6(1),o.Q6J("ngIf",!s.hasSelectedClassroom&&s.form.controls.isShowCheckClass.value)("ngIfElse",t)}}let U=(()=>{class r extends u.Q{changeCheckboxEventLocal(t){this.changeCheckboxEvent.emit(t)}initClassroomCheckbox(){this.formArray.clear();var t=[];if(this.homeworkObj?.classroomId&&t.push(this.homeworkObj.classroomId),this.examClassroomObjs.length)for(var s=0;s<this.examClassroomObjs.length;s++){let x=this.examClassroomObjs[s].classroomId;x&&t.push(x)}for(null!=this.shareClassroomIds&&(t=this.shareClassroomIds),s=0;s<this.objs.length;s++){var _=!1;let I=this.objs[s].id;null!=I&&t.includes(I)&&(_=!0),this.addNewCheckBox(this.formArray,_)}}addNewCheckBox(t,s){const _=new n.NI(s,{nonNullable:!0});t.push(_)}checkShowCreateClassroom(){var t=this.sAztClassroomCheckboxService.findClassroomWithFullPermission(this.objs,this.permissionName);this.showCreateNewClassroom=t.length===this.objs.length}changeClassroomObjs(t){this.objs.push(t),this.checkShowCreateClassroom(),this.initClassroomCheckbox(),this.objsChange.emit(this.objs)}openDialogCreateClassroom(){this.sAztDialogService.open(e,{data:{},width:"500px",restoreFocus:!1}).afterClosed().subscribe(s=>{s&&s.obj&&this.changeClassroomObjs(s.obj)})}ngOnInit(){super.ngOnInit(),this.objs.map(t=>t.name=this.commonService.myTranslateInstant(t.name)??""),this.checkShowCreateClassroom(),this.formArray=this.form.controls.classroomIds,this.initClassroomCheckbox(),this.form.controls.classroomIds.valueChanges.subscribe(t=>{this.hasSelectedClassroom=this.formArray.controls.filter(s=>s.value).length>0}),this.form.controls.isShowCheckClass.valueChanges.subscribe(t=>{this.hasSelectedClassroom=this.formArray.controls.filter(s=>s.value).length>0})}constructor(t,s){super(),this.sAztDialogService=t,this.sAztClassroomCheckboxService=s,this.changeCheckboxEvent=new o.vpe,this.formArray=new n.Oe([]),this.objs=[],this.objsChange=new o.vpe,this.permissionName=f.y.homework,this.examClassroomObjs=[],this.shareClassroomIds=void 0,this.listPermissionTypes=f.y,this.showCreateNewClassroom=!1,this.hasSelectedClassroom=!1}}return r.\u0275fac=function(t){return new(t||r)(o.Y36(a.C),o.Y36(g.f))},r.\u0275cmp=o.Xpm({type:r,selectors:[["azt-list-classroom-checkbox"]],inputs:{form:"form",objs:"objs",permissionName:"permissionName",homeworkObj:"homeworkObj",examClassroomObjs:"examClassroomObjs",shareClassroomIds:"shareClassroomIds"},outputs:{changeCheckboxEvent:"changeCheckboxEvent",objsChange:"objsChange"},features:[o.qOj],decls:2,vars:2,consts:[["class","mt-2",4,"ngIf"],[4,"ngIf"],[1,"mt-2"],[1,"p-3"],[1,"text-create"],["azt-track-service","azt-list-classroom-checkbox-6scHm7Ch1-",1,"btn-text-primary",3,"click"],[3,"formGroup"],[4,"ngIf","ngIfElse"],["checkedBox",""],[1,"flex","items-center",2,"height","220px"],[1,"mx-auto"],["formArrayName","classroomIds",1,"grid","grid-cols-12","gap-3","p-3"],[4,"ngFor","ngForOf"],["class","col-span-12 md:col-span-6 mt-2",4,"ngIf"],[1,"col-span-12","md:col-span-6","mt-2"],["class","azt-checkbox-item",4,"ngIf"],[1,"azt-checkbox-item"],["type","checkbox",1,"form-check-input",3,"id","formControlName","value","change"],[1,"form-check-label",2,"vertical-align","middle",3,"for"],[3,"matTooltip",4,"ngIf"],["class","ml-2 py-0.5 px-2 rounded-full text-xs bg-primary text-white cursor-pointer font-medium",4,"ngIf"],[3,"matTooltip"],[1,"ml-2","py-0.5","px-2","rounded-full","text-xs","bg-primary","text-white","cursor-pointer","font-medium"],["type","checkbox",1,"form-check-input",3,"id","disabled","formControlName","value","change"],[1,"form-check-label",3,"for"]],template:function(t,s){1&t&&(o.YNc(0,y,10,9,"div",0),o.YNc(1,W,5,3,"div",1)),2&t&&(o.Q6J("ngIf",s.showCreateNewClassroom),o.xp6(1),o.Q6J("ngIf",s.form))},dependencies:[C.sg,C.O5,O.gM,n._Y,n.Wl,n.JJ,n.JL,n.sg,n.u,n.CE,m.M,C.OU,l.JV,l.NK,l.nq],encapsulation:2}),r})()},21105:(k,A,i)=>{i.d(A,{f:()=>v});var o=i(56223),n=i(39621),f=i(65879),u=i(91190);let v=(()=>{class c extends n.Q{countCheckbox(){this.totalCheckBox=this.formArray.controls.length,this.totalChecked=this.formArray.getRawValue().filter(d=>d).length}ngOnInit(){super.ngOnInit(),this.countCheckbox(),this.formArray.valueChanges.subscribe(d=>{this.countCheckbox()})}constructor(){super(),this.formArray=new o.Oe([]),this.totalCheckBox=0,this.totalChecked=0}}return c.\u0275fac=function(d){return new(d||c)},c.\u0275cmp=f.Xpm({type:c,selectors:[["azt-list-classroom-count-checked"]],inputs:{formArray:"formArray"},features:[f.qOj],decls:2,vars:3,template:function(d,C){1&d&&(f._uU(0),f.ALo(1,"mytranslate")),2&d&&f.hij("(",f.lcZ(1,1,"lang_auto_da_chon")+": "+C.totalChecked+"/"+C.totalCheckBox,")")},dependencies:[u.JV],encapsulation:2}),c})()},79107:(k,A,i)=>{i.d(A,{f:()=>v});var o=i(35187),n=i(65879),f=i(87384),u=i(94281);let v=(()=>{class c{constructor(d,C){this.commonService=d,this.permissionService=C}findClassroomWithNoPermission(d,C){var m=[];return d.forEach(l=>{(null==l.permissionObj||!this.permissionService.hasCreatePermission(o.y[C],l))&&(this.commonService.isExistInArray(m,l.id)||void 0!==l.id&&m.push(l.id))}),m}findClassroomWithFullPermission(d,C){let m=[];return d.forEach(l=>{(null==l.permissionObj||!this.permissionService.hasFullPermission(o.y[C],l))&&m.push(l)}),m}getClassroomIdsChecked(d,C,m){for(var l=[],h=0;h<m.length;h++)if(m[h]&&d[h]){var e=d[h].id;null!=e&&!this.commonService.isExistInArray(C,e)&&l.push(e)}return l}}return c.\u0275fac=function(d){return new(d||c)(n.LFG(f.z),n.LFG(u.j))},c.\u0275prov=n.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},16019:(k,A,i)=>{i.d(A,{WG:()=>m,o8:()=>b});var o=i(29023),n=i(65879),f=i(16676),u=i.n(f),v=i(87384);const c=u()||f,b=new n.OlP("MAT_MOMENT_DATE_ADAPTER_OPTIONS",{providedIn:"root",factory:function d(){return{useUtc:!1}}});function C(l,h){const e=Array(l);for(let a=0;a<l;a++)e[a]=h(a);return e}let m=(()=>{class l extends o.fM{constructor(e){super(),this._options=e,this.commonService=(0,n.f3M)(v.z),this._localeData={firstDayOfWeek:0,longMonths:"",shortMonths:"",dates:"",longDaysOfWeek:"",shortDaysOfWeek:"",narrowDaysOfWeek:""},c.locale(),this.setLocale(this.commonService.getCurrentLang()||c.locale())}setLocale(e){super.setLocale(e);const a=c.localeData(e);this._localeData={firstDayOfWeek:a.firstDayOfWeek(),longMonths:a.months(),shortMonths:a.monthsShort(),dates:C(31,g=>this.createDate(2017,0,g+1).format("D")),longDaysOfWeek:a.weekdays(),shortDaysOfWeek:a.weekdaysShort(),narrowDaysOfWeek:a.weekdaysMin()}}getYear(e){return this.clone(e).year()}getMonth(e){return this.clone(e).month()}getDate(e){return this.clone(e).date()}getDayOfWeek(e){return this.clone(e).day()}getMonthNames(e){return"long"===e?this._localeData.longMonths:this._localeData.shortMonths}getDateNames(){return this._localeData.dates}getDayOfWeekNames(e){return"long"===e?this._localeData.longDaysOfWeek:"short"===e?this._localeData.shortDaysOfWeek:this._localeData.narrowDaysOfWeek}getYearName(e){return this.clone(e).format("YYYY")}getFirstDayOfWeek(){return this._localeData.firstDayOfWeek}getNumDaysInMonth(e){return this.clone(e).daysInMonth()}clone(e){return e.clone().locale(this.locale)}createDate(e,a,g){if(a<0||a>11)throw Error(`Invalid month index "${a}". Month index has to be between 0 and 11.`);if(g<1)throw Error(`Invalid date "${g}". Date has to be greater than 0.`);const O=this._createMoment({year:e,month:a,date:g}).locale(this.locale);if(!O.isValid())throw Error(`Invalid date "${g}" for month with index "${a}".`);return O}today(){return this._createMoment().locale(this.locale)}parse(e,a){return e&&"string"==typeof e?this._createMoment(e,a,this.locale):e?this._createMoment(e).locale(this.locale):null}format(e,a){if(e=this.clone(e),!this.isValid(e))throw Error("MomentDateAdapter: Cannot format invalid date.");return e.format(a)}addCalendarYears(e,a){return this.clone(e).add({years:a})}addCalendarMonths(e,a){return this.clone(e).add({months:a})}addCalendarDays(e,a){return this.clone(e).add({days:a})}toIso8601(e){return this.clone(e).format()}deserialize(e){let a;if(e instanceof Date)a=this._createMoment(e).locale(this.locale);else if(this.isDateInstance(e))return this.clone(e);if("string"==typeof e){if(!e)return null;a=this._createMoment(e,c.ISO_8601).locale(this.locale)}return a&&this.isValid(a)?this._createMoment(a).locale(this.locale):super.deserialize(e)}isDateInstance(e){return c.isMoment(e)}isValid(e){return this.clone(e).isValid()}invalid(){return c.invalid()}getHour(e){return e.hours()}getMinute(e){return e.minutes()}getSecond(e){return e.seconds()}setHour(e,a){e.hours(a)}setMinute(e,a){e.minutes(a)}setSecond(e,a){e.seconds(a)}_createMoment(e,a,g){const{strict:O,useUtc:y}=this._options||{};return y?c.utc(e,a,g,O):c(e,a,g,O)}}return l.\u0275fac=function(e){return new(e||l)(n.LFG(b,8))},l.\u0275prov=n.Yz7({token:l,factory:l.\u0275fac}),l})()},35187:(k,A,i)=>{i.d(A,{y:()=>o});var o=function(n){return n[n.homework=0]="homework",n[n.exam=1]="exam",n[n.classroom=2]="classroom",n[n.student=3]="student",n}(o||{})},217:(k,A,i)=>{i.d(A,{h:()=>o});class o{static classroomCheckBoxValidator(f){const u=f,v=u.controls.whoAllow.value,c=u.controls.classroomIds;return v&&c?2==v&&o.countCheckBox(c.value)<1?(u.controls.classroomIds.setErrors({classroomCheckBoxValidator:!0}),{identityRevealed:!0}):(u.controls.classroomIds.setErrors(null),null):null}static classroomCheckBoxValidatorWithoutWhoAllow(f){const u=f,v=u.controls.classroomIds;return v?o.countCheckBox(v.value)<1?(u.controls.classroomIds.setErrors({classroomCheckBoxValidatorWithoutWhoAllow:!0}),{identityRevealed:!0}):(u.controls.classroomIds.setErrors(null),null):null}static countCheckBox(f){return f.filter(u=>u).length}}}}]);