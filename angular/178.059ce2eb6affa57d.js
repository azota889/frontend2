"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[178],{74438:(A,x,c)=>{c.d(x,{g:()=>r});var e=c(65879),a=c(39621),C=c(79107),_=c(96814),t=c(11964);function o(h,f){1&h&&(e.ynx(0),e._uU(1),e.ALo(2,"mytranslate"),e.BQk()),2&h&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"lang_remove_all_classroom")," "))}function l(h,f){1&h&&(e._uU(0),e.ALo(1,"mytranslate")),2&h&&e.hij(" ",e.lcZ(1,1,"lang_select_all_classroom")," ")}let r=(()=>{class h extends a.Q{toggleAllCheckBox(m){let u=m.target.checked,v=this.sEAztClassroomCheckboxService.findClassroomWithNoPermission(this.objs,this.permissionName);if(this.formArray)for(var b=0;b<this.formArray.controls.length;b++)this.objs[b]&&null!=this.objs[b].permissionObj&&!this.commonService.filterArray(v,this.objs[b].id)&&this.formArray.controls[b].setValue(u);this.calculateIsCheckAll(),this.changeCheckboxEvent.emit(void 0)}clearAllCheckBox(){var m=this.sEAztClassroomCheckboxService.findClassroomWithNoPermission(this.objs,this.permissionName);if(this.formArray)for(var u=0;u<this.formArray.controls.length;u++)this.objs[u]&&null!=this.objs[u].permissionObj&&!this.commonService.filterArray(m,this.objs[u].id)&&this.formArray.controls[u].setValue(!1);this.calculateIsCheckAll(),this.changeCheckboxEvent.emit(void 0)}checkAllCheckBox(){var m=this.sEAztClassroomCheckboxService.findClassroomWithNoPermission(this.objs,this.permissionName);if(this.formArray)for(var u=0;u<this.formArray.controls.length;u++)this.objs[u]&&null!=this.objs[u].permissionObj&&!this.commonService.filterArray(m,this.objs[u].id)&&this.formArray.controls[u].setValue(!0);this.calculateIsCheckAll(),this.changeCheckboxEvent.emit(void 0)}calculateIsCheckAll(){var m=!0,u=this.sEAztClassroomCheckboxService.findClassroomWithNoPermission(this.objs,this.permissionName);if(this.formArray)for(var v=0;v<this.formArray.controls.length;v++)this.objs[v]&&null!=this.objs[v].permissionObj&&!this.commonService.filterArray(u,this.objs[v].id)&&(this.formArray.controls[v].value||(m=!1));this.isCheckAll=m}ngOnInit(){super.ngOnInit(),this.formArray=this.form?.get(this.formArrayName),this.formArray&&(this.formArray.valueChanges.subscribe(m=>{this.calculateIsCheckAll()}),this.calculateIsCheckAll())}constructor(m){super(),this.sEAztClassroomCheckboxService=m,this.changeCheckboxEvent=new e.vpe,this.formArrayName="",this.objs=[],this.isCheckAll=!1}}return h.\u0275fac=function(m){return new(m||h)(e.Y36(C.L))},h.\u0275cmp=e.Xpm({type:h,selectors:[["azt-list-classroom-checkall"]],inputs:{form:"form",formArrayName:"formArrayName",objs:"objs",permissionName:"permissionName"},outputs:{changeCheckboxEvent:"changeCheckboxEvent"},features:[e.qOj],decls:7,vars:4,consts:[[3,"hidden"],[1,"form-check"],["id","checkbox-all","type","checkbox",1,"form-check-input",3,"checked","change"],["for","checkbox-all",1,"form-check-label"],[4,"ngIf","ngIfElse"],["elseTemplate",""]],template:function(m,u){if(1&m&&(e.TgZ(0,"span",0)(1,"div",1)(2,"input",2),e.NdJ("change",function(b){return u.toggleAllCheckBox(b)}),e.qZA(),e.TgZ(3,"label",3),e.YNc(4,o,3,3,"ng-container",4),e.YNc(5,l,2,3,"ng-template",null,5,e.W1O),e.qZA()()()),2&m){const v=e.MAs(6);e.Q6J("hidden",u.objs.length<=0),e.xp6(2),e.Q6J("checked",u.isCheckAll),e.xp6(2),e.Q6J("ngIf",u.isCheckAll)("ngIfElse",v)}},dependencies:[_.O5,t.bT],encapsulation:2}),h})()},10463:(A,x,c)=>{c.d(x,{o:()=>P});var e=c(65879),a=c(56223),C=c(35187),_=c(39621),t=c(19347),o=c(5961),l=c(38885),r=c(96814),h=c(775),f=c(11964);function m(n,g){1&n&&(e.TgZ(0,"div",11)(1,"span"),e._uU(2),e.ALo(3,"mytranslate"),e.qZA()()),2&n&&(e.xp6(2),e.hij(" ",e.lcZ(3,1,"lang_student_classroom_list_utils_create_class_request_enter_class")," "))}let u=(()=>{class n extends _.Q{btnCloseDialog(){this.dialogRef.close()}saveClass(){if(this.form.invalid||this.statusObj.loading)this.showErrorSnack("lang_auto_vui_long_dien_day_du_thong_tin");else{this.initStatusObj();let s=(new Date).getFullYear(),d={classroomName:this.commonService.getFormObj(this.form).className,year:`${s} - ${s+1}`};this.classroomGroupService.apiClassroomGroupCreateClassroomWithGroupPost(d).subscribe(p=>{1==p.success?(this.successStatusObj(),this.showSuccessSnack("lang_auto_tao_thanh_cong_lop_hoc"),this.dialogRef.close(p.data)):(this.stopStatusObj(),this.showErrorSnack("lang_auto_tao_lop_hoc_khong_thanh_cong_vui_long_kiem_tra_lai_du_lieu"))})}}ngOnInit(){this.form=this.fb.group({className:new a.NI("",[a.kI.required,o._.noWhiteSpace])}),super.ngOnInit()}constructor(s,i,d,p){super(),this.fb=s,this.classroomGroupService=i,this.dialogRef=d,this.data=p,this.form=new a.cw({})}}return n.\u0275fac=function(s){return new(s||n)(e.Y36(a.qu),e.Y36(l.c8),e.Y36(t.so,8),e.Y36(t.WI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["create-classroom"]],features:[e.qOj],decls:18,vars:15,consts:[[1,"box"],[3,"formGroup"],[1,"border-b","border-slate-200/60","dark:border-darkmode-400"],[1,"p-5"],[1,"text-md","font-medium","flex","items-center"],[1,"mt-2"],["type","text","formControlName","className",1,"form-control",3,"placeholder"],["class","text-xs text-danger font-medium mt-1",4,"ngIf"],[1,"p-3","text-right"],["azt-track-service","create-classroom-dialog-U1melptHG5",1,"btn","btn-secondary","w-24","mr-2",3,"click"],["azt-track-service","create-classroom-dialog-UgZXPvjLFu",1,"btn","w-24","btn-primary",3,"disabled","click"],[1,"text-xs","text-danger","font-medium","mt-1"]],template:function(s,i){1&s&&(e.TgZ(0,"div",0)(1,"form",1)(2,"div",2)(3,"div",3)(4,"h3",4),e._uU(5),e.ALo(6,"mytranslate"),e.qZA(),e.TgZ(7,"div",5),e._UZ(8,"input",6),e.ALo(9,"mytranslate"),e.qZA(),e.YNc(10,m,4,3,"div",7),e.qZA()(),e.TgZ(11,"div",8)(12,"button",9),e.NdJ("click",function(){return i.btnCloseDialog()}),e._uU(13),e.ALo(14,"mytranslate"),e.qZA(),e.TgZ(15,"button",10),e.NdJ("click",function(){return i.saveClass()}),e._uU(16),e.ALo(17,"mytranslate"),e.qZA()()()()),2&s&&(e.xp6(1),e.Q6J("formGroup",i.form),e.xp6(4),e.hij(" ",e.lcZ(6,7,"lang_auto_tao_lop")," "),e.xp6(3),e.s9C("placeholder",e.lcZ(9,9,"lang_auto_nhap_ten_lop")),e.xp6(2),e.Q6J("ngIf",i.form.controls.className.dirty&&i.form.controls.className.errors),e.xp6(3),e.hij(" ",e.lcZ(14,11,"lang_auto_dong")," "),e.xp6(2),e.Q6J("disabled",i.form.invalid),e.xp6(1),e.hij(" ",e.lcZ(17,13,"lang_auto_luu")," "))},dependencies:[r.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,h.M,f.bT],encapsulation:2}),n})();var v=c(79107),b=c(92596);function y(n,g){if(1&n){const s=e.EpF();e.TgZ(0,"div",2)(1,"div",3)(2,"div",4),e._uU(3),e.ALo(4,"mytranslate"),e.TgZ(5,"a",5),e.NdJ("click",function(){e.CHM(s);const d=e.oxw();return e.KtG(d.openDialogCreateClassroom())}),e._uU(6),e.ALo(7,"mytranslate"),e.qZA(),e._uU(8),e.ALo(9,"mytranslate"),e.qZA()()()}2&n&&(e.xp6(3),e.hij(" ",e.lcZ(4,3,"lang_auto_thayco_chua_tao_lop_vui_long_click")," "),e.xp6(3),e.hij(" ",e.lcZ(7,5,"lang_testbank_test_config_come_in")," "),e.xp6(2),e.hij(" ",e.lcZ(9,7,"lang_testbank_test_config_create_class"),". "))}function j(n,g){if(1&n&&(e.TgZ(0,"span",16),e._uU(1),e.ALo(2,"slice"),e.qZA()),2&n){const s=e.oxw(3).index,i=e.oxw(2);e.s9C("matTooltip",i.objs[s].name),e.xp6(1),e.hij(" ",e.Dn7(2,2,i.objs[s].name,0,25)+"..."," ")}}function N(n,g){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const s=e.oxw(3).index,i=e.oxw(2);e.xp6(1),e.hij(" ",i.objs[s].name," ")}}function E(n,g){1&n&&(e.TgZ(0,"span",17),e._uU(1),e.ALo(2,"mytranslate"),e.qZA()),2&n&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"lang_testbank_test_config_share")," "))}function S(n,g){if(1&n){const s=e.EpF();e.TgZ(0,"div",11)(1,"input",12),e.NdJ("change",function(){e.CHM(s);const d=e.oxw(2).index,p=e.oxw(2);return e.KtG(p.changeCheckboxEventLocal(p.objs[d]))}),e.qZA(),e.TgZ(2,"label",13),e.YNc(3,j,3,6,"span",14),e.YNc(4,N,2,1,"span",1),e.YNc(5,E,3,3,"span",15),e.ALo(6,"fullPermission"),e.qZA()()}if(2&n){const s=e.oxw(2).index,i=e.oxw(2);let d,p;e.xp6(1),e.s9C("id","azt-checkbox-item-"+i.objs[s].id),e.s9C("value",i.objs[s].id),e.Q6J("formControlName",s),e.xp6(1),e.s9C("for","azt-checkbox-item-"+i.objs[s].id),e.xp6(1),e.Q6J("ngIf",(null!==(d=null==i.objs[s].name?null:i.objs[s].name.length)&&void 0!==d?d:0)>25),e.xp6(1),e.Q6J("ngIf",(null!==(p=null==i.objs[s].name?null:i.objs[s].name.length)&&void 0!==p?p:0)<=25),e.xp6(1),e.Q6J("ngIf",!e.xi3(6,7,i.objs[s].permissionObj,"classroom"))}}function O(n,g){if(1&n&&(e.TgZ(0,"span",16),e._uU(1),e.ALo(2,"slice"),e.qZA()),2&n){const s=e.oxw(3).index,i=e.oxw(2);e.s9C("matTooltip",i.objs[s].name),e.xp6(1),e.hij(" ",e.Dn7(2,2,i.objs[s].name,0,25)+"..."," ")}}function w(n,g){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const s=e.oxw(3).index,i=e.oxw(2);e.xp6(1),e.hij(" ",i.objs[s].name," ")}}function D(n,g){1&n&&(e.TgZ(0,"span",17),e._uU(1),e.ALo(2,"mytranslate"),e.qZA()),2&n&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"lang_testbank_test_config_share")," "))}function I(n,g){if(1&n){const s=e.EpF();e.TgZ(0,"div",11)(1,"input",18),e.NdJ("change",function(){e.CHM(s);const d=e.oxw(2).index,p=e.oxw(2);return e.KtG(p.changeCheckboxEventLocal(p.objs[d]))}),e.qZA(),e.TgZ(2,"label",19),e.YNc(3,O,3,6,"span",14),e.YNc(4,w,2,1,"span",1),e.YNc(5,D,3,3,"span",15),e.ALo(6,"fullPermission"),e.qZA()()}if(2&n){const s=e.oxw(2).index,i=e.oxw(2);let d,p;e.xp6(1),e.s9C("id","azt-checkbox-item-"+s),e.s9C("value",i.objs[s].id),e.Q6J("disabled",!0)("formControlName",s),e.xp6(1),e.s9C("for","azt-checkbox-item-"+s),e.xp6(1),e.Q6J("ngIf",(null!==(d=null==i.objs[s].name?null:i.objs[s].name.length)&&void 0!==d?d:0)>25),e.xp6(1),e.Q6J("ngIf",(null!==(p=null==i.objs[s].name?null:i.objs[s].name.length)&&void 0!==p?p:0)<=25),e.xp6(1),e.Q6J("ngIf",!e.xi3(6,8,i.objs[s].permissionObj,"classroom"))}}function T(n,g){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,S,7,10,"div",10),e.ALo(2,"createPermission"),e.YNc(3,I,7,11,"div",10),e.ALo(4,"createPermission"),e.qZA()),2&n){const s=e.oxw().index,i=e.oxw(2);e.xp6(1),e.Q6J("ngIf",null!=i.objs[s].permissionObj&&e.xi3(2,2,i.objs[s].permissionObj,i.listPermissionTypes[i.permissionName])),e.xp6(2),e.Q6J("ngIf",!(null!=i.objs[s].permissionObj&&e.xi3(4,5,i.objs[s].permissionObj,i.listPermissionTypes[i.permissionName])))}}function L(n,g){if(1&n&&(e.TgZ(0,"div",9),e.YNc(1,T,5,8,"div",1),e.qZA()),2&n){const s=g.index,i=e.oxw(2);e.xp6(1),e.Q6J("ngIf",i.objs[s])}}function Z(n,g){if(1&n&&(e.TgZ(0,"div")(1,"form",6)(2,"div",7),e.YNc(3,L,2,1,"div",8),e.qZA()()()),2&n){const s=e.oxw();e.xp6(1),e.Q6J("formGroup",s.form),e.xp6(2),e.Q6J("ngForOf",s.formArray.controls)}}let P=(()=>{class n extends _.Q{changeCheckboxEventLocal(s){this.changeCheckboxEvent.emit(s)}initClassroomCheckbox(){this.formArray.clear();var s=[];if(this.homeworkObj?.classroomId&&s.push(this.homeworkObj.classroomId),this.examClassroomObjs.length)for(var i=0;i<this.examClassroomObjs.length;i++){let p=this.examClassroomObjs[i].classroomId;p&&s.push(p)}for(null!=this.shareClassroomIds&&(s=this.shareClassroomIds),i=0;i<this.objs.length;i++){var d=!1;let k=this.objs[i].id;null!=k&&s.includes(k)&&(d=!0),this.addNewCheckBox(this.formArray,d)}}addNewCheckBox(s,i){const d=new a.p4(i);s.push(d)}checkShowCreateClassroom(){var s=this.sEAztClassroomCheckboxService.findClassroomWithFullPermission(this.objs,this.permissionName);this.showCreateNewClassroom=s.length===this.objs.length}changeClassroomObjs(s){this.objs.push(s),this.checkShowCreateClassroom(),this.initClassroomCheckbox(),this.objsChange.emit(this.objs)}openDialogCreateClassroom(){this.dialog.open(u,{data:{},width:"500px",restoreFocus:!1}).afterClosed().subscribe(i=>{i&&i.obj&&this.changeClassroomObjs(i.obj)})}ngOnInit(){super.ngOnInit(),this.checkShowCreateClassroom();for(var s=0;s<this.objs.length;s++)this.objs[s].name=this.commonService.myTranslateInstant(this.objs[s].name)??"";this.formArray=this.form?.get(this.formArrayName),this.formArray&&this.initClassroomCheckbox()}constructor(s,i){super(),this.dialog=s,this.sEAztClassroomCheckboxService=i,this.changeCheckboxEvent=new e.vpe,this.formArrayName="",this.objs=[],this.objsChange=new e.vpe,this.permissionName=C.y.homework,this.examClassroomObjs=[],this.shareClassroomIds=void 0,this.listPermissionTypes=C.y,this.showCreateNewClassroom=!1}}return n.\u0275fac=function(s){return new(s||n)(e.Y36(t.uw),e.Y36(v.L))},n.\u0275cmp=e.Xpm({type:n,selectors:[["azt-list-classroom-checkbox"]],inputs:{form:"form",formArrayName:"formArrayName",objs:"objs",permissionName:"permissionName",homeworkObj:"homeworkObj",examClassroomObjs:"examClassroomObjs",shareClassroomIds:"shareClassroomIds"},outputs:{changeCheckboxEvent:"changeCheckboxEvent",objsChange:"objsChange"},features:[e.qOj],decls:2,vars:2,consts:[["class","mt-2",4,"ngIf"],[4,"ngIf"],[1,"mt-2"],[1,"p-3"],[1,"text-create"],["azt-track-service","azt-list-classroom-checkbox-6scHm7Ch1-",1,"btn-text-primary",3,"click"],[3,"formGroup"],["formArrayName","classroomIds",1,"grid","grid-cols-12","gap-3","p-3"],["class","col-span-12 md:col-span-6 mt-2",4,"ngFor","ngForOf"],[1,"col-span-12","md:col-span-6","mt-2"],["class","azt-checkbox-item",4,"ngIf"],[1,"azt-checkbox-item"],["type","checkbox",1,"form-check-input",3,"id","formControlName","value","change"],[1,"form-check-label",2,"vertical-align","middle",3,"for"],[3,"matTooltip",4,"ngIf"],["class","ml-2 py-0.5 px-2 rounded-full text-xs bg-primary text-white cursor-pointer font-medium",4,"ngIf"],[3,"matTooltip"],[1,"ml-2","py-0.5","px-2","rounded-full","text-xs","bg-primary","text-white","cursor-pointer","font-medium"],["type","checkbox",1,"form-check-input",3,"id","disabled","formControlName","value","change"],[1,"form-check-label",3,"for"]],template:function(s,i){1&s&&(e.YNc(0,y,10,9,"div",0),e.YNc(1,Z,4,2,"div",1)),2&s&&(e.Q6J("ngIf",i.showCreateNewClassroom),e.xp6(1),e.Q6J("ngIf",i.form))},dependencies:[r.sg,r.O5,b.gM,a._Y,a.Wl,a.JJ,a.JL,a.sg,a.u,a.CE,h.M,r.OU,f.bT,f.Gf,f.rm],encapsulation:2}),n})()},79107:(A,x,c)=>{c.d(x,{L:()=>t});var e=c(35187),a=c(65879),C=c(87384),_=c(94281);let t=(()=>{class o{constructor(r,h){this.commonService=r,this.permissionService=h}findClassroomWithNoPermission(r,h){var f=[];return r.forEach(m=>{(null==m.permissionObj||!this.permissionService.hasCreatePermission(e.y[h],m.permissionObj))&&(this.commonService.filterArray(f,m.id)||void 0!==m.id&&f.push(m.id))}),f}findClassroomWithFullPermission(r,h){let f=[];return r.forEach(m=>{(null==m.permissionObj||!this.permissionService.hasFullPermission(e.y[h],m.permissionObj))&&f.push(m)}),f}getClassroomIdsChecked(r,h,f){for(var m=[],u=0;u<f.length;u++)if(f[u]&&r[u]){var v=r[u].id;null!=v&&!this.commonService.filterArray(h,v)&&m.push(v)}return m}}return o.\u0275fac=function(r){return new(r||o)(a.LFG(C.v),a.LFG(_.$))},o.\u0275prov=a.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},81373:(A,x,c)=>{c.d(x,{Y:()=>a});var e=c(65879);let a=(()=>{class C{constructor(t){this.el=t,this.hasDecimalPoint=!1,this.hasNegativeSign=!1,this.navigationKeys=["Backspace","Delete","Tab","Escape","Enter","Home","End","ArrowLeft","ArrowRight","Clear","Copy","Paste"],this.decimal=!1,this.decimalSeparator1=".",this.decimalSeparator2=",",this.allowNegatives=!1,this.allowPaste=!0,this.negativeSign="-",this.min=-1/0,this.max=1/0,this.regex=null,this.inputElement=t.nativeElement}ngOnChanges(t){if(t.pattern&&(this.regex=this.pattern?RegExp(this.pattern):null),t.min){const o=Number(this.min);this.min=isNaN(o)?-1/0:o}if(t.max){const o=Number(this.max);this.max=isNaN(o)?1/0:o}}onBeforeInput(t){if(isNaN(Number(t.data))){if(t.data===this.decimalSeparator1||t.data===this.decimalSeparator2||t.data===this.negativeSign&&this.allowNegatives)return;t.preventDefault(),t.stopPropagation()}}onKeyDown(t){if(this.navigationKeys.indexOf(t.key)>-1||("a"===t.key||"KeyA"===t.code)&&!0===t.ctrlKey||("c"===t.key||"KeyC"===t.code)&&!0===t.ctrlKey||("v"===t.key||"KeyV"===t.code)&&!0===t.ctrlKey||("x"===t.key||"KeyX"===t.code)&&!0===t.ctrlKey||("a"===t.key||"KeyA"===t.code)&&!0===t.metaKey||("c"===t.key||"KeyC"===t.code)&&!0===t.metaKey||("v"===t.key||"KeyV"===t.code)&&!0===t.metaKey||("x"===t.key||"KeyX"===t.code)&&!0===t.metaKey)return;let o="";var l=t.key;if(t.key===this.decimalSeparator2&&(l=this.decimalSeparator1),this.decimal&&l===this.decimalSeparator1)return o=this.forecastValue(l),o.split(this.decimalSeparator1).length>2||(this.hasDecimalPoint=o.indexOf(this.decimalSeparator1)>-1,this.setNewValue(l)),void t.preventDefault();if(l===this.negativeSign&&this.allowNegatives)return o=this.forecastValue(l),o.charAt(0)!==this.negativeSign||o.split(this.negativeSign).length>2?void t.preventDefault():void(this.hasNegativeSign=o.split(this.negativeSign).length>-1);if(" "===l||isNaN(Number(l)))return void t.preventDefault();if(o=o||this.forecastValue(l),this.regex&&!this.regex.test(o))return void t.preventDefault();const r=Number(o);(r>this.max||r<this.min)&&t.preventDefault()}onPaste(t){if(!0===this.allowPaste){let o="";window.clipboardData?o=window.clipboardData.getData("text"):t.clipboardData&&t.clipboardData.getData&&(o=t.clipboardData.getData("text/plain")),this.pasteData(o),t.preventDefault()}else t.preventDefault(),t.stopPropagation()}onDrop(t){const o=t.dataTransfer?.getData("text")??"";this.inputElement.focus(),this.pasteData(o),t.preventDefault()}pasteData(t){t=t.replace(",",".");const o=this.sanitizeInput(t);if(!o.includes(this.negativeSign)||!this.hasNegativeSign||this.getSelection().includes(this.negativeSign)){if(!document.execCommand("insertText",!1,o))if(this.inputElement.setRangeText){const{selectionStart:r,selectionEnd:h}=this.inputElement;this.inputElement.setRangeText(o,r??0,h??0,"end"),typeof window.InstallTrigger<"u"&&this.inputElement.dispatchEvent(new Event("input",{cancelable:!0}))}else this.insertAtCursor(this.inputElement,o);this.decimal&&(this.hasDecimalPoint=this.inputElement.value.indexOf(this.decimalSeparator1)>-1),this.hasNegativeSign=this.inputElement.value.indexOf(this.negativeSign)>-1}}setNewValue(t){t=t.replace(",","."),this.insertAtCursor(this.inputElement,t),this.decimal&&(this.hasDecimalPoint=this.inputElement.value.indexOf(this.decimalSeparator1)>-1),this.hasNegativeSign=this.inputElement.value.indexOf(this.negativeSign)>-1}insertAtCursor(t,o){const l=t.selectionStart??0,r=t.selectionEnd??0;t.value=t.value.substring(0,l)+o+t.value.substring(r,t.value.length);const h=l+o.length;t.focus(),t.setSelectionRange(h,h),this.triggerEvent(t,"input")}triggerEvent(t,o){if("createEvent"in document){const l=document.createEvent("HTMLEvents");l.initEvent(o,!1,!0),t.dispatchEvent(l)}}sanitizeInput(t){let l,o="";l=this.decimal&&this.isValidDecimal(t)?new RegExp(`${this.getNegativeSignRegExp()}[^0-9${this.decimalSeparator1}]`,"g"):new RegExp(`${this.getNegativeSignRegExp()}[^0-9]`,"g"),o=t.replace(l,"");const r=this.inputElement.maxLength;if(r>0){const h=r-this.inputElement.value.length+(o.includes(`${this.negativeSign}`)?1:0);o=h>0?o.substring(0,h):""}return o}getNegativeSignRegExp(){return!this.allowNegatives||this.hasNegativeSign&&!this.getSelection().includes(this.negativeSign)?"":`(?!^${this.negativeSign})`}isValidDecimal(t){if(this.hasDecimalPoint){const o=this.getSelection();return o&&o.indexOf(this.decimalSeparator1)>-1?t.split(this.decimalSeparator1).length<=2:t.indexOf(this.decimalSeparator1)<0}return t.split(this.decimalSeparator1).length<=2}getSelection(){return this.inputElement.value.substring(this.inputElement.selectionStart??0,this.inputElement.selectionEnd??0)}forecastValue(t){const l=this.inputElement.selectionEnd??0,r=this.inputElement.value;return r.substring(0,this.inputElement.selectionStart??0)+t+r.substring(l)}}return C.\u0275fac=function(t){return new(t||C)(e.Y36(e.SBq))},C.\u0275dir=e.lG2({type:C,selectors:[["","appOnlyNumber",""]],hostBindings:function(t,o){1&t&&e.NdJ("beforeinput",function(r){return o.onBeforeInput(r)})("keydown",function(r){return o.onKeyDown(r)})("paste",function(r){return o.onPaste(r)})("drop",function(r){return o.onDrop(r)})},inputs:{decimal:"decimal",decimalSeparator1:"decimalSeparator1",decimalSeparator2:"decimalSeparator2",allowNegatives:"allowNegatives",allowPaste:"allowPaste",negativeSign:"negativeSign",min:"min",max:"max",pattern:"pattern"},features:[e.TTD]}),C})()},35187:(A,x,c)=>{c.d(x,{y:()=>e});var e=function(a){return a[a.homework=0]="homework",a[a.exam=1]="exam",a[a.classroom=2]="classroom",a[a.student=3]="student",a}(e||{})},217:(A,x,c)=>{c.d(x,{h:()=>e});let e=(()=>{class a{static classroomCheckBoxValidator(_){const t=_.get("whoAllow"),o=_.get("classroomIds");return t&&o?2==t?.value&&a.countCheckBox(o.value)<1?(o?.setErrors({checkboxValidator:!0}),{identityRevealed:!0}):(o?.setErrors(null),null):null}static countCheckBox(_){for(var t=0,o=0;o<_.length;o++)_[o]&&(t+=1);return t}}return a.classroomCheckBoxValidatorWithoutWhoAllow=C=>{const _=C.get("classroomIds");return _?a.countCheckBox(_.value)<1?(_?.setErrors({classroomCheckBoxValidatorWithoutWhoAllow:!0}),{identityRevealed:!0}):(_?.setErrors(null),null):null},a})()}}]);