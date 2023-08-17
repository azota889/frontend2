"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[675],{74438:(y,b,m)=>{m.d(b,{V:()=>u});var e=m(65879),l=m(39621),x=m(79107),g=m(96814),t=m(11964);function i(d,C){1&d&&(e.ynx(0),e._uU(1),e.ALo(2,"mytranslate"),e.BQk()),2&d&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"lang_remove_all_classroom")," "))}function h(d,C){1&d&&(e._uU(0),e.ALo(1,"mytranslate")),2&d&&e.hij(" ",e.lcZ(1,1,"lang_select_all_classroom")," ")}let u=(()=>{class d extends l.Q{toggleAllCheckBox(c){let f=c.target.checked,s=this.sAztClassroomCheckboxService.findClassroomWithNoPermission(this.objs,this.permissionName);if(this.formArray)for(var a=0;a<this.formArray.controls.length;a++)this.objs[a]&&null!=this.objs[a].permissionObj&&!this.commonService.filterArray(s,this.objs[a].id)&&this.formArray.controls[a].setValue(f);this.calculateIsCheckAll(),this.changeCheckboxEvent.emit(void 0)}clearAllCheckBox(){var c=this.sAztClassroomCheckboxService.findClassroomWithNoPermission(this.objs,this.permissionName);if(this.formArray)for(var f=0;f<this.formArray.controls.length;f++)this.objs[f]&&null!=this.objs[f].permissionObj&&!this.commonService.filterArray(c,this.objs[f].id)&&this.formArray.controls[f].setValue(!1);this.calculateIsCheckAll(),this.changeCheckboxEvent.emit(void 0)}checkAllCheckBox(){var c=this.sAztClassroomCheckboxService.findClassroomWithNoPermission(this.objs,this.permissionName);if(this.formArray)for(var f=0;f<this.formArray.controls.length;f++)this.objs[f]&&null!=this.objs[f].permissionObj&&!this.commonService.filterArray(c,this.objs[f].id)&&this.formArray.controls[f].setValue(!0);this.calculateIsCheckAll(),this.changeCheckboxEvent.emit(void 0)}calculateIsCheckAll(){var c=!0,f=this.sAztClassroomCheckboxService.findClassroomWithNoPermission(this.objs,this.permissionName);if(this.formArray)for(var s=0;s<this.formArray.controls.length;s++)this.objs[s]&&null!=this.objs[s].permissionObj&&!this.commonService.filterArray(f,this.objs[s].id)&&(this.formArray.controls[s].value||(c=!1));this.isCheckAll=c}ngOnInit(){super.ngOnInit(),this.formArray=this.form?.get(this.formArrayName),this.formArray&&(this.formArray.valueChanges.subscribe(c=>{this.calculateIsCheckAll()}),this.calculateIsCheckAll())}constructor(c){super(),this.sAztClassroomCheckboxService=c,this.changeCheckboxEvent=new e.vpe,this.formArrayName="",this.objs=[],this.isCheckAll=!1}}return d.\u0275fac=function(c){return new(c||d)(e.Y36(x.f))},d.\u0275cmp=e.Xpm({type:d,selectors:[["azt-list-classroom-checkall"]],inputs:{form:"form",formArrayName:"formArrayName",objs:"objs",permissionName:"permissionName"},outputs:{changeCheckboxEvent:"changeCheckboxEvent"},features:[e.qOj],decls:7,vars:4,consts:[[3,"hidden"],[1,"form-check"],["id","checkbox-all","type","checkbox",1,"form-check-input",3,"checked","change"],["for","checkbox-all",1,"form-check-label"],[4,"ngIf","ngIfElse"],["elseTemplate",""]],template:function(c,f){if(1&c&&(e.TgZ(0,"span",0)(1,"div",1)(2,"input",2),e.NdJ("change",function(a){return f.toggleAllCheckBox(a)}),e.qZA(),e.TgZ(3,"label",3),e.YNc(4,i,3,3,"ng-container",4),e.YNc(5,h,2,3,"ng-template",null,5,e.W1O),e.qZA()()()),2&c){const s=e.MAs(6);e.Q6J("hidden",f.objs.length<=0),e.xp6(2),e.Q6J("checked",f.isCheckAll),e.xp6(2),e.Q6J("ngIf",f.isCheckAll)("ngIfElse",s)}},dependencies:[g.O5,t.JV],encapsulation:2}),d})()},10463:(y,b,m)=>{m.d(b,{B:()=>z});var e=m(65879),l=m(56223),x=m(35187),g=m(39621),t=m(19347),i=m(90241),h=m(5961),u=m(38885),d=m(96814),C=m(775),c=m(11964);function f(r,v){1&r&&(e.TgZ(0,"div",11)(1,"span"),e._uU(2),e.ALo(3,"mytranslate"),e.qZA()()),2&r&&(e.xp6(2),e.hij(" ",e.lcZ(3,1,"lang_student_classroom_list_utils_create_class_request_enter_class")," "))}let s=(()=>{class r extends i.e{btnCloseDialog(){this.dialogRef.close()}saveClass(){if(this.form.invalid||this.statusObj.loading)this.showErrorSnack("lang_auto_vui_long_dien_day_du_thong_tin");else{this.initStatusObj();let o=(new Date).getFullYear(),_={classroomName:this.commonService.getFormObj(this.form).className,year:`${o} - ${o+1}`};this.classroomGroupService.apiClassroomGroupCreateClassroomWithGroupPost(_).subscribe(p=>{1==p.success?(this.successStatusObj(),this.showSuccessSnack("lang_auto_tao_thanh_cong_lop_hoc"),this.dialogRef.close(p.data)):(this.stopStatusObj(),this.showErrorSnack("lang_auto_tao_lop_hoc_khong_thanh_cong_vui_long_kiem_tra_lai_du_lieu"))})}}ngOnInit(){this.form=this.fb.group({className:new l.NI("",[l.kI.required,h._.noWhiteSpace])}),super.ngOnInit()}constructor(o,n,_,p){super(p,_),this.fb=o,this.classroomGroupService=n,this.dialogRef=_,this.data=p,this.form=new l.cw({})}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(l.qu),e.Y36(u.c8),e.Y36(t.so,8),e.Y36(t.WI))},r.\u0275cmp=e.Xpm({type:r,selectors:[["create-classroom"]],features:[e.qOj],decls:18,vars:15,consts:[[1,"box"],[3,"formGroup"],[1,"border-b","border-slate-200/60","dark:border-darkmode-400"],[1,"p-5"],[1,"text-md","font-medium","flex","items-center"],[1,"mt-2"],["type","text","formControlName","className",1,"form-control",3,"placeholder"],["class","text-xs text-danger font-medium mt-1",4,"ngIf"],[1,"p-3","text-right"],["azt-track-service","create-classroom-dialog-U1melptHG5",1,"btn","btn-secondary","w-24","mr-2",3,"click"],["azt-track-service","create-classroom-dialog-UgZXPvjLFu",1,"btn","w-24","btn-primary",3,"disabled","click"],[1,"text-xs","text-danger","font-medium","mt-1"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"form",1)(2,"div",2)(3,"div",3)(4,"h3",4),e._uU(5),e.ALo(6,"mytranslate"),e.qZA(),e.TgZ(7,"div",5),e._UZ(8,"input",6),e.ALo(9,"mytranslate"),e.qZA(),e.YNc(10,f,4,3,"div",7),e.qZA()(),e.TgZ(11,"div",8)(12,"button",9),e.NdJ("click",function(){return n.btnCloseDialog()}),e._uU(13),e.ALo(14,"mytranslate"),e.qZA(),e.TgZ(15,"button",10),e.NdJ("click",function(){return n.saveClass()}),e._uU(16),e.ALo(17,"mytranslate"),e.qZA()()()()),2&o&&(e.xp6(1),e.Q6J("formGroup",n.form),e.xp6(4),e.hij(" ",e.lcZ(6,7,"lang_auto_tao_lop")," "),e.xp6(3),e.s9C("placeholder",e.lcZ(9,9,"lang_auto_nhap_ten_lop")),e.xp6(2),e.Q6J("ngIf",n.form.controls.className.dirty&&n.form.controls.className.errors),e.xp6(3),e.hij(" ",e.lcZ(14,11,"lang_auto_dong")," "),e.xp6(2),e.Q6J("disabled",n.form.invalid),e.xp6(1),e.hij(" ",e.lcZ(17,13,"lang_auto_luu")," "))},dependencies:[d.O5,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,C.M,c.JV],encapsulation:2}),r})();var a=m(61675),A=m(79107),k=m(92596);function O(r,v){if(1&r){const o=e.EpF();e.TgZ(0,"div",2)(1,"div",3)(2,"div",4),e._uU(3),e.ALo(4,"mytranslate"),e.TgZ(5,"a",5),e.NdJ("click",function(){e.CHM(o);const _=e.oxw();return e.KtG(_.openDialogCreateClassroom())}),e._uU(6),e.ALo(7,"mytranslate"),e.qZA(),e._uU(8),e.ALo(9,"mytranslate"),e.qZA()()()}2&r&&(e.xp6(3),e.hij(" ",e.lcZ(4,3,"lang_auto_thayco_chua_tao_lop_vui_long_click")," "),e.xp6(3),e.hij(" ",e.lcZ(7,5,"lang_testbank_test_config_come_in")," "),e.xp6(2),e.hij(" ",e.lcZ(9,7,"lang_testbank_test_config_create_class"),". "))}function N(r,v){if(1&r&&(e.TgZ(0,"span",16),e._uU(1),e.ALo(2,"slice"),e.qZA()),2&r){const o=e.oxw(3).index,n=e.oxw(2);e.s9C("matTooltip",n.objs[o].name),e.xp6(1),e.hij(" ",e.Dn7(2,2,n.objs[o].name,0,25)+"..."," ")}}function E(r,v){if(1&r&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&r){const o=e.oxw(3).index,n=e.oxw(2);e.xp6(1),e.hij(" ",n.objs[o].name," ")}}function j(r,v){1&r&&(e.TgZ(0,"span",17),e._uU(1),e.ALo(2,"mytranslate"),e.qZA()),2&r&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"lang_testbank_test_config_share")," "))}function S(r,v){if(1&r){const o=e.EpF();e.TgZ(0,"div",11)(1,"input",12),e.NdJ("change",function(){e.CHM(o);const _=e.oxw(2).index,p=e.oxw(2);return e.KtG(p.changeCheckboxEventLocal(p.objs[_]))}),e.qZA(),e.TgZ(2,"label",13),e.YNc(3,N,3,6,"span",14),e.YNc(4,E,2,1,"span",1),e.YNc(5,j,3,3,"span",15),e.ALo(6,"fullPermission"),e.qZA()()}if(2&r){const o=e.oxw(2).index,n=e.oxw(2);let _,p;e.xp6(1),e.s9C("id","azt-checkbox-item-"+n.objs[o].id),e.s9C("value",n.objs[o].id),e.Q6J("formControlName",o),e.xp6(1),e.s9C("for","azt-checkbox-item-"+n.objs[o].id),e.xp6(1),e.Q6J("ngIf",(null!==(_=null==n.objs[o].name?null:n.objs[o].name.length)&&void 0!==_?_:0)>25),e.xp6(1),e.Q6J("ngIf",(null!==(p=null==n.objs[o].name?null:n.objs[o].name.length)&&void 0!==p?p:0)<=25),e.xp6(1),e.Q6J("ngIf",!e.xi3(6,7,n.objs[o],"classroom"))}}function T(r,v){if(1&r&&(e.TgZ(0,"span",16),e._uU(1),e.ALo(2,"slice"),e.qZA()),2&r){const o=e.oxw(3).index,n=e.oxw(2);e.s9C("matTooltip",n.objs[o].name),e.xp6(1),e.hij(" ",e.Dn7(2,2,n.objs[o].name,0,25)+"..."," ")}}function w(r,v){if(1&r&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&r){const o=e.oxw(3).index,n=e.oxw(2);e.xp6(1),e.hij(" ",n.objs[o].name," ")}}function I(r,v){1&r&&(e.TgZ(0,"span",17),e._uU(1),e.ALo(2,"mytranslate"),e.qZA()),2&r&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"lang_testbank_test_config_share")," "))}function L(r,v){if(1&r){const o=e.EpF();e.TgZ(0,"div",11)(1,"input",18),e.NdJ("change",function(){e.CHM(o);const _=e.oxw(2).index,p=e.oxw(2);return e.KtG(p.changeCheckboxEventLocal(p.objs[_]))}),e.qZA(),e.TgZ(2,"label",19),e.YNc(3,T,3,6,"span",14),e.YNc(4,w,2,1,"span",1),e.YNc(5,I,3,3,"span",15),e.ALo(6,"fullPermission"),e.qZA()()}if(2&r){const o=e.oxw(2).index,n=e.oxw(2);let _,p;e.xp6(1),e.s9C("id","azt-checkbox-item-"+o),e.s9C("value",n.objs[o].id),e.Q6J("disabled",!0)("formControlName",o),e.xp6(1),e.s9C("for","azt-checkbox-item-"+o),e.xp6(1),e.Q6J("ngIf",(null!==(_=null==n.objs[o].name?null:n.objs[o].name.length)&&void 0!==_?_:0)>25),e.xp6(1),e.Q6J("ngIf",(null!==(p=null==n.objs[o].name?null:n.objs[o].name.length)&&void 0!==p?p:0)<=25),e.xp6(1),e.Q6J("ngIf",!e.xi3(6,8,n.objs[o],"classroom"))}}function M(r,v){if(1&r&&(e.TgZ(0,"div"),e.YNc(1,S,7,10,"div",10),e.ALo(2,"createPermission"),e.YNc(3,L,7,11,"div",10),e.ALo(4,"createPermission"),e.qZA()),2&r){const o=e.oxw().index,n=e.oxw(2);e.xp6(1),e.Q6J("ngIf",null!=n.objs[o].permissionObj&&e.xi3(2,2,n.objs[o],n.listPermissionTypes[n.permissionName])),e.xp6(2),e.Q6J("ngIf",!(null!=n.objs[o].permissionObj&&e.xi3(4,5,n.objs[o],n.listPermissionTypes[n.permissionName])))}}function P(r,v){if(1&r&&(e.TgZ(0,"div",9),e.YNc(1,M,5,8,"div",1),e.qZA()),2&r){const o=v.index,n=e.oxw(2);e.xp6(1),e.Q6J("ngIf",n.objs[o])}}function Z(r,v){if(1&r&&(e.TgZ(0,"div")(1,"form",6)(2,"div",7),e.YNc(3,P,2,1,"div",8),e.qZA()()()),2&r){const o=e.oxw();e.xp6(1),e.Q6J("formGroup",o.form),e.xp6(2),e.Q6J("ngForOf",o.formArray.controls)}}let z=(()=>{class r extends g.Q{changeCheckboxEventLocal(o){this.changeCheckboxEvent.emit(o)}initClassroomCheckbox(){this.formArray.clear();var o=[];if(this.homeworkObj?.classroomId&&o.push(this.homeworkObj.classroomId),this.examClassroomObjs.length)for(var n=0;n<this.examClassroomObjs.length;n++){let p=this.examClassroomObjs[n].classroomId;p&&o.push(p)}for(null!=this.shareClassroomIds&&(o=this.shareClassroomIds),n=0;n<this.objs.length;n++){var _=!1;let D=this.objs[n].id;null!=D&&o.includes(D)&&(_=!0),this.addNewCheckBox(this.formArray,_)}}addNewCheckBox(o,n){const _=new l.p4(n);o.push(_)}checkShowCreateClassroom(){var o=this.sAztClassroomCheckboxService.findClassroomWithFullPermission(this.objs,this.permissionName);this.showCreateNewClassroom=o.length===this.objs.length}changeClassroomObjs(o){this.objs.push(o),this.checkShowCreateClassroom(),this.initClassroomCheckbox(),this.objsChange.emit(this.objs)}openDialogCreateClassroom(){this.sAztDialogService.open(s,{data:{},width:"500px",restoreFocus:!1}).afterClosed().subscribe(n=>{n&&n.obj&&this.changeClassroomObjs(n.obj)})}ngOnInit(){super.ngOnInit(),this.checkShowCreateClassroom();for(var o=0;o<this.objs.length;o++)this.objs[o].name=this.commonService.myTranslateInstant(this.objs[o].name)??"";this.formArray=this.form?.get(this.formArrayName),this.formArray&&this.initClassroomCheckbox()}constructor(o,n){super(),this.sAztDialogService=o,this.sAztClassroomCheckboxService=n,this.changeCheckboxEvent=new e.vpe,this.formArrayName="",this.objs=[],this.objsChange=new e.vpe,this.permissionName=x.y.homework,this.examClassroomObjs=[],this.shareClassroomIds=void 0,this.listPermissionTypes=x.y,this.showCreateNewClassroom=!1}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(a.C),e.Y36(A.f))},r.\u0275cmp=e.Xpm({type:r,selectors:[["azt-list-classroom-checkbox"]],inputs:{form:"form",formArrayName:"formArrayName",objs:"objs",permissionName:"permissionName",homeworkObj:"homeworkObj",examClassroomObjs:"examClassroomObjs",shareClassroomIds:"shareClassroomIds"},outputs:{changeCheckboxEvent:"changeCheckboxEvent",objsChange:"objsChange"},features:[e.qOj],decls:2,vars:2,consts:[["class","mt-2",4,"ngIf"],[4,"ngIf"],[1,"mt-2"],[1,"p-3"],[1,"text-create"],["azt-track-service","azt-list-classroom-checkbox-6scHm7Ch1-",1,"btn-text-primary",3,"click"],[3,"formGroup"],["formArrayName","classroomIds",1,"grid","grid-cols-12","gap-3","p-3"],["class","col-span-12 md:col-span-6 mt-2",4,"ngFor","ngForOf"],[1,"col-span-12","md:col-span-6","mt-2"],["class","azt-checkbox-item",4,"ngIf"],[1,"azt-checkbox-item"],["type","checkbox",1,"form-check-input",3,"id","formControlName","value","change"],[1,"form-check-label",2,"vertical-align","middle",3,"for"],[3,"matTooltip",4,"ngIf"],["class","ml-2 py-0.5 px-2 rounded-full text-xs bg-primary text-white cursor-pointer font-medium",4,"ngIf"],[3,"matTooltip"],[1,"ml-2","py-0.5","px-2","rounded-full","text-xs","bg-primary","text-white","cursor-pointer","font-medium"],["type","checkbox",1,"form-check-input",3,"id","disabled","formControlName","value","change"],[1,"form-check-label",3,"for"]],template:function(o,n){1&o&&(e.YNc(0,O,10,9,"div",0),e.YNc(1,Z,4,2,"div",1)),2&o&&(e.Q6J("ngIf",n.showCreateNewClassroom),e.xp6(1),e.Q6J("ngIf",n.form))},dependencies:[d.sg,d.O5,k.gM,l._Y,l.Wl,l.JJ,l.JL,l.sg,l.u,l.CE,C.M,d.OU,c.JV,c.NK,c.nq],encapsulation:2}),r})()},79107:(y,b,m)=>{m.d(b,{f:()=>t});var e=m(35187),l=m(65879),x=m(87384),g=m(94281);let t=(()=>{class i{constructor(u,d){this.commonService=u,this.permissionService=d}findClassroomWithNoPermission(u,d){var C=[];return u.forEach(c=>{(null==c.permissionObj||!this.permissionService.hasCreatePermission(e.y[d],c))&&(this.commonService.filterArray(C,c.id)||void 0!==c.id&&C.push(c.id))}),C}findClassroomWithFullPermission(u,d){let C=[];return u.forEach(c=>{(null==c.permissionObj||!this.permissionService.hasFullPermission(e.y[d],c))&&C.push(c)}),C}getClassroomIdsChecked(u,d,C){for(var c=[],f=0;f<C.length;f++)if(C[f]&&u[f]){var s=u[f].id;null!=s&&!this.commonService.filterArray(d,s)&&c.push(s)}return c}}return i.\u0275fac=function(u){return new(u||i)(l.LFG(x.z),l.LFG(g.j))},i.\u0275prov=l.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},16019:(y,b,m)=>{m.d(b,{WG:()=>C,o8:()=>h});var e=m(29023),l=m(65879),x=m(16676),g=m.n(x),t=m(87384);const i=g()||x,h=new l.OlP("MAT_MOMENT_DATE_ADAPTER_OPTIONS",{providedIn:"root",factory:function u(){return{useUtc:!1}}});function d(c,f){const s=Array(c);for(let a=0;a<c;a++)s[a]=f(a);return s}let C=(()=>{class c extends e.fM{constructor(s){super(),this._options=s,this.commonService=(0,l.f3M)(t.z),this._localeData={firstDayOfWeek:0,longMonths:"",shortMonths:"",dates:"",longDaysOfWeek:"",shortDaysOfWeek:"",narrowDaysOfWeek:""},i.locale(),this.setLocale(this.commonService.getCurrentLang()||i.locale())}setLocale(s){super.setLocale(s);const a=i.localeData(s);this._localeData={firstDayOfWeek:a.firstDayOfWeek(),longMonths:a.months(),shortMonths:a.monthsShort(),dates:d(31,A=>this.createDate(2017,0,A+1).format("D")),longDaysOfWeek:a.weekdays(),shortDaysOfWeek:a.weekdaysShort(),narrowDaysOfWeek:a.weekdaysMin()}}getYear(s){return this.clone(s).year()}getMonth(s){return this.clone(s).month()}getDate(s){return this.clone(s).date()}getDayOfWeek(s){return this.clone(s).day()}getMonthNames(s){return"long"===s?this._localeData.longMonths:this._localeData.shortMonths}getDateNames(){return this._localeData.dates}getDayOfWeekNames(s){return"long"===s?this._localeData.longDaysOfWeek:"short"===s?this._localeData.shortDaysOfWeek:this._localeData.narrowDaysOfWeek}getYearName(s){return this.clone(s).format("YYYY")}getFirstDayOfWeek(){return this._localeData.firstDayOfWeek}getNumDaysInMonth(s){return this.clone(s).daysInMonth()}clone(s){return s.clone().locale(this.locale)}createDate(s,a,A){if(a<0||a>11)throw Error(`Invalid month index "${a}". Month index has to be between 0 and 11.`);if(A<1)throw Error(`Invalid date "${A}". Date has to be greater than 0.`);const k=this._createMoment({year:s,month:a,date:A}).locale(this.locale);if(!k.isValid())throw Error(`Invalid date "${A}" for month with index "${a}".`);return k}today(){return this._createMoment().locale(this.locale)}parse(s,a){return s&&"string"==typeof s?this._createMoment(s,a,this.locale):s?this._createMoment(s).locale(this.locale):null}format(s,a){if(s=this.clone(s),!this.isValid(s))throw Error("MomentDateAdapter: Cannot format invalid date.");return s.format(a)}addCalendarYears(s,a){return this.clone(s).add({years:a})}addCalendarMonths(s,a){return this.clone(s).add({months:a})}addCalendarDays(s,a){return this.clone(s).add({days:a})}toIso8601(s){return this.clone(s).format()}deserialize(s){let a;if(s instanceof Date)a=this._createMoment(s).locale(this.locale);else if(this.isDateInstance(s))return this.clone(s);if("string"==typeof s){if(!s)return null;a=this._createMoment(s,i.ISO_8601).locale(this.locale)}return a&&this.isValid(a)?this._createMoment(a).locale(this.locale):super.deserialize(s)}isDateInstance(s){return i.isMoment(s)}isValid(s){return this.clone(s).isValid()}invalid(){return i.invalid()}getHour(s){return s.hours()}getMinute(s){return s.minutes()}getSecond(s){return s.seconds()}setHour(s,a){s.hours(a)}setMinute(s,a){s.minutes(a)}setSecond(s,a){s.seconds(a)}_createMoment(s,a,A){const{strict:k,useUtc:O}=this._options||{};return O?i.utc(s,a,A,k):i(s,a,A,k)}}return c.\u0275fac=function(s){return new(s||c)(l.LFG(h,8))},c.\u0275prov=l.Yz7({token:c,factory:c.\u0275fac}),c})()},81373:(y,b,m)=>{m.d(b,{Y:()=>l});var e=m(65879);let l=(()=>{class x{constructor(t){this.el=t,this.hasDecimalPoint=!1,this.hasNegativeSign=!1,this.navigationKeys=["Backspace","Delete","Tab","Escape","Enter","Home","End","ArrowLeft","ArrowRight","Clear","Copy","Paste"],this.decimal=!1,this.decimalSeparator1=".",this.decimalSeparator2=",",this.allowNegatives=!1,this.allowPaste=!0,this.negativeSign="-",this.min=-1/0,this.max=1/0,this.regex=null,this.inputElement=t.nativeElement}ngOnChanges(t){if(t.pattern&&(this.regex=this.pattern?RegExp(this.pattern):null),t.min){const i=Number(this.min);this.min=isNaN(i)?-1/0:i}if(t.max){const i=Number(this.max);this.max=isNaN(i)?1/0:i}}onBeforeInput(t){if(isNaN(Number(t.data))){if(t.data===this.decimalSeparator1||t.data===this.decimalSeparator2||t.data===this.negativeSign&&this.allowNegatives)return;t.preventDefault(),t.stopPropagation()}}onKeyDown(t){if(this.navigationKeys.indexOf(t.key)>-1||("a"===t.key||"KeyA"===t.code)&&!0===t.ctrlKey||("c"===t.key||"KeyC"===t.code)&&!0===t.ctrlKey||("v"===t.key||"KeyV"===t.code)&&!0===t.ctrlKey||("x"===t.key||"KeyX"===t.code)&&!0===t.ctrlKey||("a"===t.key||"KeyA"===t.code)&&!0===t.metaKey||("c"===t.key||"KeyC"===t.code)&&!0===t.metaKey||("v"===t.key||"KeyV"===t.code)&&!0===t.metaKey||("x"===t.key||"KeyX"===t.code)&&!0===t.metaKey)return;let i="";var h=t.key;if(t.key===this.decimalSeparator2&&(h=this.decimalSeparator1),this.decimal&&h===this.decimalSeparator1)return i=this.forecastValue(h),i.split(this.decimalSeparator1).length>2||(this.hasDecimalPoint=i.indexOf(this.decimalSeparator1)>-1,this.setNewValue(h)),void t.preventDefault();if(h===this.negativeSign&&this.allowNegatives)return i=this.forecastValue(h),i.charAt(0)!==this.negativeSign||i.split(this.negativeSign).length>2?void t.preventDefault():void(this.hasNegativeSign=i.split(this.negativeSign).length>-1);if(" "===h||isNaN(Number(h)))return void t.preventDefault();if(i=i||this.forecastValue(h),this.regex&&!this.regex.test(i))return void t.preventDefault();const u=Number(i);(u>this.max||u<this.min)&&t.preventDefault()}onPaste(t){if(!0===this.allowPaste){let i="";window.clipboardData?i=window.clipboardData.getData("text"):t.clipboardData&&t.clipboardData.getData&&(i=t.clipboardData.getData("text/plain")),this.pasteData(i),t.preventDefault()}else t.preventDefault(),t.stopPropagation()}onDrop(t){const i=t.dataTransfer?.getData("text")??"";this.inputElement.focus(),this.pasteData(i),t.preventDefault()}pasteData(t){t=t.replace(",",".");const i=this.sanitizeInput(t);if(!i.includes(this.negativeSign)||!this.hasNegativeSign||this.getSelection().includes(this.negativeSign)){if(!document.execCommand("insertText",!1,i))if(this.inputElement.setRangeText){const{selectionStart:u,selectionEnd:d}=this.inputElement;this.inputElement.setRangeText(i,u??0,d??0,"end"),typeof window.InstallTrigger<"u"&&this.inputElement.dispatchEvent(new Event("input",{cancelable:!0}))}else this.insertAtCursor(this.inputElement,i);this.decimal&&(this.hasDecimalPoint=this.inputElement.value.indexOf(this.decimalSeparator1)>-1),this.hasNegativeSign=this.inputElement.value.indexOf(this.negativeSign)>-1}}setNewValue(t){t=t.replace(",","."),this.insertAtCursor(this.inputElement,t),this.decimal&&(this.hasDecimalPoint=this.inputElement.value.indexOf(this.decimalSeparator1)>-1),this.hasNegativeSign=this.inputElement.value.indexOf(this.negativeSign)>-1}insertAtCursor(t,i){const h=t.selectionStart??0,u=t.selectionEnd??0;t.value=t.value.substring(0,h)+i+t.value.substring(u,t.value.length);const d=h+i.length;t.focus(),t.setSelectionRange(d,d),this.triggerEvent(t,"input")}triggerEvent(t,i){if("createEvent"in document){const h=document.createEvent("HTMLEvents");h.initEvent(i,!1,!0),t.dispatchEvent(h)}}sanitizeInput(t){let h,i="";h=this.decimal&&this.isValidDecimal(t)?new RegExp(`${this.getNegativeSignRegExp()}[^0-9${this.decimalSeparator1}]`,"g"):new RegExp(`${this.getNegativeSignRegExp()}[^0-9]`,"g"),i=t.replace(h,"");const u=this.inputElement.maxLength;if(u>0){const d=u-this.inputElement.value.length+(i.includes(`${this.negativeSign}`)?1:0);i=d>0?i.substring(0,d):""}return i}getNegativeSignRegExp(){return!this.allowNegatives||this.hasNegativeSign&&!this.getSelection().includes(this.negativeSign)?"":`(?!^${this.negativeSign})`}isValidDecimal(t){if(this.hasDecimalPoint){const i=this.getSelection();return i&&i.indexOf(this.decimalSeparator1)>-1?t.split(this.decimalSeparator1).length<=2:t.indexOf(this.decimalSeparator1)<0}return t.split(this.decimalSeparator1).length<=2}getSelection(){return this.inputElement.value.substring(this.inputElement.selectionStart??0,this.inputElement.selectionEnd??0)}forecastValue(t){const h=this.inputElement.selectionEnd??0,u=this.inputElement.value;return u.substring(0,this.inputElement.selectionStart??0)+t+u.substring(h)}}return x.\u0275fac=function(t){return new(t||x)(e.Y36(e.SBq))},x.\u0275dir=e.lG2({type:x,selectors:[["","appOnlyNumber",""]],hostBindings:function(t,i){1&t&&e.NdJ("beforeinput",function(u){return i.onBeforeInput(u)})("keydown",function(u){return i.onKeyDown(u)})("paste",function(u){return i.onPaste(u)})("drop",function(u){return i.onDrop(u)})},inputs:{decimal:"decimal",decimalSeparator1:"decimalSeparator1",decimalSeparator2:"decimalSeparator2",allowNegatives:"allowNegatives",allowPaste:"allowPaste",negativeSign:"negativeSign",min:"min",max:"max",pattern:"pattern"},features:[e.TTD]}),x})()},35187:(y,b,m)=>{m.d(b,{y:()=>e});var e=function(l){return l[l.homework=0]="homework",l[l.exam=1]="exam",l[l.classroom=2]="classroom",l[l.student=3]="student",l}(e||{})},217:(y,b,m)=>{m.d(b,{h:()=>e});let e=(()=>{class l{static classroomCheckBoxValidator(g){const t=g.get("whoAllow"),i=g.get("classroomIds");return t&&i?2==t?.value&&l.countCheckBox(i.value)<1?(i?.setErrors({checkboxValidator:!0}),{identityRevealed:!0}):(i?.setErrors(null),null):null}static countCheckBox(g){for(var t=0,i=0;i<g.length;i++)g[i]&&(t+=1);return t}}return l.classroomCheckBoxValidatorWithoutWhoAllow=x=>{const g=x.get("classroomIds");return g?l.countCheckBox(g.value)<1?(g?.setErrors({classroomCheckBoxValidatorWithoutWhoAllow:!0}),{identityRevealed:!0}):(g?.setErrors(null),null):null},l})()}}]);