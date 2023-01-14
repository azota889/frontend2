"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[334],{45668:(q,S,i)=>{i.d(S,{J:()=>f});var m=i(5e3),p=i(43147),u=i(42873);let f=(()=>{class g{constructor(d,c){this.baseApiService=d,this.redirectService=c}canActivate(d,c){return!!this.baseApiService.isLogin()||(this.redirectService.redirectLoginAnonymous(c.url),!1)}canActivateChild(d,c){return this.canActivate(d,c)}canLoad(d){const c=`/${d.path}`;return!!this.baseApiService.isLogin()||(this.redirectService.redirectLoginByReturnUrl(c),!1)}}return g.\u0275fac=function(d){return new(d||g)(m.LFG(p._),m.LFG(u.V))},g.\u0275prov=m.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},25229:(q,S,i)=>{i.d(S,{Z:()=>g});var m=i(5e3),p=i(50690),u=i(34782),f=i(41057);let g=(()=>{class b{getCurrentAbTestingIndex(){var c=this.browserStorageService.getSimpleStorage(this.actionTextKey);return null==c&&(c=this.commonService.getRandomNumber(0,this.maxActionTextLength-1).toString(),this.browserStorageService.saveSimpleStorage(this.actionTextKey,c)),Number(c)}sendLogShareQuestion(c){let j={action:c+" "+this.getCurrentAbTestingIndex()};this.testMarketQuestionService.apiTestMarketQuestionsLogsPost(j).subscribe(C=>{})}constructor(c,j,C){this.commonService=c,this.browserStorageService=j,this.testMarketQuestionService=C,this.actionTextKey="azt_ab_testing_key",this.maxActionTextLength=2}}return b.\u0275fac=function(c){return new(c||b)(m.LFG(p.v),m.LFG(u.z),m.LFG(f.Q_))},b.\u0275prov=m.Yz7({token:b,factory:b.\u0275fac,providedIn:"root"}),b})()},41752:(q,S,i)=>{i.d(S,{D:()=>f});var m=i(92340),p=i(5e3),u=i(58914);let f=(()=>{class g{constructor(d){this.configService=d}getCurrentVersion(){return m.N.versionTime}getGlobalNotice(){return this.configService.getConfig("globalNotice")}getEnvValue(d){return this.configService.getConfig(d)}getLinkEmbedDocument(d){var c=this.configService.getConfig("docView");return c&&"MICROSOFT"!=c?`https://docs.google.com/viewer?url=${d}&embedded=true`:`https://view.officeapps.live.com/op/embed.aspx?src=${d}`}}return g.\u0275fac=function(d){return new(d||g)(p.LFG(u.E))},g.\u0275prov=p.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},68334:(q,S,i)=>{i.r(S),i.d(S,{DashboardModule:()=>Lt});var m=i(69808),p=i(93075),u=i(48966),f=i(74202),g=i(51908),b=i(66574),d=i(1737),c=i(43189),j=i(63728),C=i(44841),Y=i(47470),P=i(75658),R=i(14030),W=i(8785),J=i(37389),B=i(45668),k=i(55330),t=i(5e3),O=i(50690),H=i(34202),$=i(24096),D=i(41057),X=i(34782);let F=(()=>{class o{isWelcomeDashboard(e){return new H.y(a=>{this.getDashboardData(e,(n,s)=>{if(n&&!s){var l=1==Number(n.useWelcomeDashboard);a.next(l),a.complete()}else a.next(!1),a.complete()})})}checkRedirectDashboard(e){this.commonService.myNavigation(e?"/admin/dashboard-welcome":"/admin/dashboard")}getDashboardData(e,a){var n=this.browserStorageService.getSimpleSessionStorage(this.dashboardDataStorageKey);let s=n?this.commonService.castJsonToObj(n):void 0;e&&s?a(s,""):this.subscriptions.add(this.dashboardService.apiDashboardGetObjGet().subscribe(l=>{var v;1==l.success&&l.data?(this.browserStorageService.saveSimpleSessionStorage(this.dashboardDataStorageKey,this.commonService.serializeJson(l.data)),a(l.data,"")):(this.browserStorageService.removeSimpleSessionStorage(this.dashboardDataStorageKey),a({},null!==(v=l.message)&&void 0!==v?v:""))}))}constructor(e,a,n,s){this.commonService=e,this.dialog=a,this.dashboardService=n,this.browserStorageService=s,this.subscriptions=new $.w,this.dashboardDataStorageKey="azt_dashboard_data"}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(O.v),t.LFG(u.uw),t.LFG(D.sp),t.LFG(X.z))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var tt=i(25229),et=i(36307),I=i(20371),ot=i(90508),N=i(67322),at=i(74107),x=i(1033);function nt(o,r){if(1&o&&(t.TgZ(0,"mat-option",15),t._uU(1),t.qZA()),2&o){const e=r.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e.desc)}}function it(o,r){if(1&o&&(t.TgZ(0,"mat-option",15),t._uU(1),t.qZA()),2&o){const e=r.$implicit;t.Q6J("value",e.id),t.xp6(1),t.Oqu(e.name)}}const rt=function(o){return{"col-span-12":o}};function st(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",19)(1,"div",1)(2,"p",2),t._uU(3),t.qZA()(),t.TgZ(4,"div",3)(5,"div",4)(6,"mat-form-field",5)(7,"mat-label"),t._uU(8),t.ALo(9,"mytranslate"),t.qZA(),t.TgZ(10,"mat-select",6),t.NdJ("ngModelChange",function(n){const l=t.CHM(e).$implicit;return t.KtG(l.subjectsIds=n)})("ngModelChange",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.backUpObjData())}),t.YNc(11,it,2,2,"mat-option",7),t.qZA()()()()()}if(2&o){const e=r.$implicit,a=t.oxw(2);let n;t.Q6J("ngClass",t.VKq(7,rt,1==a.dataObjs.length)),t.xp6(3),t.Oqu(null==e.class?null:e.class.desc),t.xp6(5),t.Oqu(t.lcZ(9,5,"lang_auto_chon_mon")),t.xp6(2),t.Q6J("ngModel",e.subjectsIds),t.xp6(1),t.Q6J("ngForOf",a.valueSubjectSurvey[null!==(n=null==e.class?null:e.class.value)&&void 0!==n?n:0])}}function lt(o,r){if(1&o&&(t.ynx(0),t.TgZ(1,"div",16)(2,"p",2),t._uU(3),t.ALo(4,"mytranslate"),t.qZA()(),t.TgZ(5,"div",17),t.YNc(6,st,12,9,"div",18),t.qZA(),t.BQk()),2&o){const e=t.oxw();t.xp6(3),t.Oqu(t.lcZ(4,2,"lang_auto_thay_co_day_mon_gi")),t.xp6(3),t.Q6J("ngForOf",e.dataObjs)}}function ct(o,r){1&o&&(t.TgZ(0,"div",20)(1,"div"),t._uU(2),t.ALo(3,"mytranslate"),t.qZA()()),2&o&&(t.xp6(2),t.Oqu(t.lcZ(3,1,"lang_auto_vui_long_chon_lop")))}function dt(o,r){1&o&&(t.O4$(),t.TgZ(0,"svg",21)(1,"g",22)(2,"g",23),t._UZ(3,"circle",24),t.TgZ(4,"path",25),t._UZ(5,"animateTransform",26),t.qZA()()()())}let ut=(()=>{class o extends k.Q{ngOnInit(){this.initStatusObj(),this.initData()}initData(){this.subscriptions.add(this.documentConfigService.apiDocumentConfigGetSubjectAndLevelObjsGet().subscribe(e=>{var a,n,s,l,v;if(1==e.success){let _=null!==(n=null===(a=e.data)||void 0===a?void 0:a.schoolLevelObjs)&&void 0!==n?n:[],w=null!==(l=null===(s=e.data)||void 0===s?void 0:s.schoolSubjectObjs)&&void 0!==l?l:[];_.forEach(A=>{let y={value:A.id,desc:this.commonService.myTranslateInstant(A.name)};this.commonService.filterArray(this.valueSurvey,y)||this.valueSurvey.push(y)});let h=[],L=[],M=[];w.forEach(A=>{let y={type:0,id:A.id,name:this.commonService.myTranslateInstant(A.name)};A.from&&A.to&&A.from>=1&&A.to<=5?(y.type=1,this.commonService.filterArray(h,y)||h.push(y)):A.from&&A.to&&A.from>=6&&A.to<=9?(y.type=2,this.commonService.filterArray(L,y)||L.push(y)):(y.type=3,this.commonService.filterArray(M,y)||M.push(y));for(var T=1;T<=5;T++)this.valueSubjectSurvey[T]=h;for(T=6;T<=9;T++)this.valueSubjectSurvey[T]=L;for(T=10;T<=13;T++)this.valueSubjectSurvey[T]=M}),this.successStatusObj()}else this.errorStatusObj(null!==(v=e.message)&&void 0!==v?v:"")}))}saveSurveyV3(){var e,a,n,s,l,v,_;let w=[];for(let h=0;h<this.dataObjs.length;h++)if(this.dataObjs[h].subjectsIds)for(let L=0;L<(null!==(n=null===(a=null===(e=this.dataObjs)||void 0===e?void 0:e[h].subjectsIds)||void 0===a?void 0:a.length)&&void 0!==n?n:0);L++){let M={classId:null===(l=null===(s=this.dataObjs)||void 0===s?void 0:s[h].class)||void 0===l?void 0:l.value,subjectId:null===(_=null===(v=this.dataObjs)||void 0===v?void 0:v[h].subjectsIds)||void 0===_?void 0:_[L]};w.push(M)}w.length>0&&this.surveyConfigService.apiSurveyConfigSaveSurvey3Post({objs:w}).subscribe(h=>{h&&1==h.success?this.btnCloseDialog(!0):(this.showErrorSnack("lang_auto_khong_load_duoc_du_lieu"),this.btnCloseDialog(!1))})}backUpObjData(){this.oldDataObjs=this.dataObjs}addSubject(){var e,a,n,s;this.dataObjs=[];let l=this.oldDataObjs.length,v=this.classGrade.length;for(let _=0;_<v;_++)if(this.dataObjs[_]={class:this.classGrade[_],subjectsIds:[]},l>0)for(let h=0;h<l;h++)(null===(a=null===(e=this.dataObjs)||void 0===e?void 0:e[_].class)||void 0===a?void 0:a.value)==(null===(s=null===(n=this.oldDataObjs)||void 0===n?void 0:n[h].class)||void 0===s?void 0:s.value)&&(this.dataObjs[_]=this.oldDataObjs[h])}btnCloseDialog(e){this.dialogRef.close(e)}constructor(e,a,n,s,l){super(e),this.commonService=e,this.surveyConfigService=a,this.documentConfigService=n,this.dialogRef=s,this.valueSurvey=[],this.valueSubjectSurvey=[],this.dataObjs=[],this.oldDataObjs=[],this.classGrade=[]}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(O.v),t.Y36(D.XG),t.Y36(D.Cq),t.Y36(u.so,8),t.Y36(u.WI,8))},o.\u0275cmp=t.Xpm({type:o,selectors:[["azt-survey-info-two"]],features:[t.qOj],decls:25,vars:18,consts:[[1,"box","p-5"],[1,"text-left"],[1,"text-md","font-medium"],[1,"grid","grid-cols-12","mt-2"],[1,"col-span-12"],["appearance","outline"],["multiple","",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["class","text-danger text-xs mt-1",4,"ngIf"],["align","end"],[1,"text-right"],["azt-track-service","survey-info-two-L6xKYxAUu_",1,"btn","btn-outline-secondary","w-24","mr-3",3,"click"],["azt-track-service","survey-info-two-CkjM7kTovX",1,"btn","btn-primary","w-24",3,"disabled","click"],["width","25","viewBox","-2 -2 42 42","xmlns","http://www.w3.org/2000/svg","stroke","rgb(30, 41, 59)","class","w-4 h-4 mr-2",4,"ngIf"],[3,"value"],[1,"text-left","mt-5"],[1,"grid","grid-cols-12","gap-5","mt-2"],["class","col-span-6",3,"ngClass",4,"ngFor","ngForOf"],[1,"col-span-6",3,"ngClass"],[1,"text-danger","text-xs","mt-1"],["width","25","viewBox","-2 -2 42 42","xmlns","http://www.w3.org/2000/svg","stroke","rgb(30, 41, 59)",1,"w-4","h-4","mr-2"],["fill","none","fill-rule","evenodd"],["transform","translate(1 1)","stroke-width","4"],["stroke-opacity",".5","cx","18","cy","18","r","18"],["d","M36 18c0-9.94-8.06-18-18-18"],["attributeName","transform","type","rotate","from","0 18 18","to","360 18 18","dur","1s","repeatCount","indefinite"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"mat-dialog-content")(2,"div",1)(3,"p",2),t._uU(4),t.ALo(5,"mytranslate"),t.qZA()(),t.TgZ(6,"div",3)(7,"div",4)(8,"mat-form-field",5)(9,"mat-label"),t._uU(10),t.ALo(11,"mytranslate"),t.qZA(),t.TgZ(12,"mat-select",6),t.NdJ("ngModelChange",function(s){return a.classGrade=s})("ngModelChange",function(){return a.addSubject()}),t.YNc(13,nt,2,2,"mat-option",7),t.qZA()()()(),t.YNc(14,lt,7,4,"ng-container",8),t.YNc(15,ct,4,3,"div",9),t.qZA(),t.TgZ(16,"mat-dialog-actions",10)(17,"div",11)(18,"button",12),t.NdJ("click",function(){return a.btnCloseDialog(!1)}),t._uU(19),t.ALo(20,"mytranslate"),t.qZA(),t.TgZ(21,"button",13),t.NdJ("click",function(){return a.saveSurveyV3()}),t.YNc(22,dt,6,0,"svg",14),t._uU(23),t.ALo(24,"mytranslate"),t.qZA()()()()),2&e&&(t.xp6(4),t.Oqu(t.lcZ(5,10,"lang_auto_thay_co_day_lop_may")),t.xp6(6),t.Oqu(t.lcZ(11,12,"lang_auto_chon_lop")),t.xp6(2),t.Q6J("ngModel",a.classGrade),t.xp6(1),t.Q6J("ngForOf",a.valueSurvey),t.xp6(1),t.Q6J("ngIf",a.dataObjs.length>0),t.xp6(1),t.Q6J("ngIf",0==a.classGrade.length),t.xp6(4),t.hij(" ",t.lcZ(20,14,"lang_auto_de_sau")," "),t.xp6(2),t.Q6J("disabled",0==a.classGrade.length),t.xp6(1),t.Q6J("ngIf",a.statusObj.loading),t.xp6(1),t.hij(" ",t.lcZ(24,16,"lang_auto_luu")," "))},dependencies:[m.mk,m.sg,m.O5,ot.ey,u.xY,u.H8,N.KE,N.hX,at.gD,p.JJ,p.On,x.bT]}),o})();var mt=i(85736);let Q=(()=>{class o{constructor(e,a){this.dialogRef=e,this.data=a,this.isNotShowAgain=new p.p4(!1)}ngOnInit(){}onNoClick(){this.dialogRef.close(this.isNotShowAgain.value)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.so),t.Y36(u.WI))},o.\u0275cmp=t.Xpm({type:o,selectors:[["new-feature-notice-dialog"]],decls:14,vars:11,consts:[[1,"box","p-5"],[3,"innerHTML"],["align","end"],[1,"flex","items-center","w-full",2,"justify-content","space-between"],[1,"form-check"],["id","is-not-show-again","type","checkbox",1,"form-check-input",3,"formControl"],["for","is-not-show-again",1,"form-check-label"],["azt-track-service","new-feature-iAX2JunJEbn",1,"btn","btn-primary","w-24",3,"mat-dialog-close","click"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"azt-mat-dialog-content"),t._UZ(2,"div",1),t.ALo(3,"safeAdminHtmlContent"),t.qZA(),t.TgZ(4,"mat-dialog-actions",2)(5,"div",3)(6,"div",4),t._UZ(7,"input",5),t.TgZ(8,"label",6),t._uU(9),t.ALo(10,"mytranslate"),t.qZA()(),t.TgZ(11,"button",7),t.NdJ("click",function(){return a.onNoClick()}),t._uU(12),t.ALo(13,"mytranslate"),t.qZA()()()()),2&e&&(t.xp6(2),t.Q6J("innerHTML",t.lcZ(3,5,a.data.description),t.oJD),t.xp6(5),t.Q6J("formControl",a.isNotShowAgain),t.xp6(2),t.hij(" ",t.lcZ(10,7,"lang_testbank_create_exam_width_file_pdf_not_view")," "),t.xp6(2),t.Q6J("mat-dialog-close",a.isNotShowAgain.value),t.xp6(1),t.Oqu(t.lcZ(13,9,"lang_buttom_close")))},dependencies:[u.ZT,u.H8,p.Wl,p.JJ,p.oH,mt.O,x.bT,x.LW],encapsulation:2}),o})();var ht=i(41752),K=i(43147),U=i(92181);const E=function(o){return[o]};let V=(()=>{class o extends k.Q{getNewFeatureNotice(e){this.initStatusObj(),this.subscriptions.add(this.globalNoticeService.apiGlobalNoticeGetObjGet().subscribe(a=>{var n,s,l;1==a.success?(null!==(n=a.data)&&void 0!==n&&n.obj?(this.checkFeatureNotice=!0,this.dialog.open(Q,{width:"750px",data:null===(s=a.data)||void 0===s?void 0:s.obj}).afterClosed().subscribe(_=>{if(_)try{this.setMarkAsReadFeaturesNotice()}catch(w){console.log(w)}})):this.checkFeatureNotice=!1,this.successStatusObj()):this.errorStatusObj(null!==(l=a.message)&&void 0!==l?l:"",!0)}))}showSurveyDialog(){this.dialog.open(ut,{width:"750px",data:{status:!0}}).afterClosed().subscribe(a=>{a&&this.showSuccessSnack("lang_auto_cam_on_ban_da_tham_gia_khao_sat_nay")})}showNewFeatureNotice(e){this.subscriptions.add(this.globalNoticeService.apiGlobalNoticeGetObjGet(e?1:0).subscribe(a=>{var n,s,l;1==a.success?null!==(n=a.data)&&void 0!==n&&n.obj&&this.dialog.open(Q,{width:"750px",data:null===(s=a.data)||void 0===s?void 0:s.obj}).afterClosed().subscribe(_=>{}):this.errorStatusObj(null!==(l=a.message)&&void 0!==l?l:"",!0)}))}setMarkAsReadFeaturesNotice(){this.subscriptions.add(this.globalNoticeService.apiGlobalNoticeMarkAsReadGet().subscribe(e=>{var a;1==e.success?this.successStatusObj():this.errorStatusObj(null!==(a=e.message)&&void 0!==a?a:"",!0)}))}ngOnInit(){this.initStatusObj(),this.user_obj=this.baseApiService.getUserObj(),this.currentVersion=this.envService.getCurrentVersion(),this.isTeacherRole=this.baseApiService.isTeacherRole(),this.getNewFeatureNotice(0),super.ngOnInit()}constructor(e,a,n,s,l){super(e),this.commonService=e,this.envService=a,this.dialog=n,this.baseApiService=s,this.globalNoticeService=l,this.currentVersion="",this.checkFeatureNotice=!1,this.user_obj={},this.isTeacherRole=!1}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(O.v),t.Y36(ht.D),t.Y36(u.uw),t.Y36(K._),t.Y36(D.ID))},o.\u0275cmp=t.Xpm({type:o,selectors:[["footer-info-menu"]],features:[t.qOj],decls:77,vars:32,consts:[[1,"btn","btn-outline-primary","dropdown-toggle","btn-transparent","mb-5","ml-5",3,"matMenuTriggerFor"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["cx","12","cy","12","r","10"],["x1","12","y1","16","x2","12","y2","12"],["x1","12","y1","8","x2","12.01","y2","8"],["dashboardMenu",""],[1,"dropdown-menu","show","w-72","relative"],[1,"dropdown-content"],["azt-track-service","footer-info-menu-4xo_9lVt1J",1,"dropdown-item",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"w-4","h-4","lucide","mr-2"],["d","M16 16h6"],["d","M19 13v6"],["d","M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"],["d","M16.5 9.4 7.55 4.24"],["points","3.29 7 12 12 20.71 7"],["x1","12","y1","22","x2","12","y2","12"],["azt-track-service","footer-info-menu-hSQ4t5kWau",1,"dropdown-item",3,"click"],["x","8","y","2","width","8","height","4","rx","1","ry","1"],["d","M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"],["d","M16 4h2a2 2 0 0 1 1.73 1"],["d","M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z"],["d","M8 18h1"],["azt-track-service","footer-info-menu-Mym6pF4eC7","href","https://www.facebook.com/groups/azota.vn","target","_blank",1,"dropdown-item"],["d","M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"],["cx","9","cy","7","r","4"],["d","M22 21v-2a4 4 0 0 0-3-3.87"],["d","M16 3.13a4 4 0 0 1 0 7.75"],["azt-track-service","footer-info-menu-nstjfJK4k1","href","https://www.facebook.com/azotavn","target","_blank",1,"dropdown-item"],["d","M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"],[1,"dropdown-divider","border-slate-200","dark:border-darkmode-400"],["azt-track-service","footer-info-menu-MF6sCK5s_Vh",1,"dropdown-item",3,"routerLink"],["points","16 18 22 12 16 6"],["points","8 6 2 12 8 18"],["azt-track-service","footer-info-menu-LwlklQ67tDO",1,"dropdown-item",3,"routerLink"],["x","2","y","4","width","20","height","5","rx","2"],["d","M12 13v7"],["d","m9 16 3-3 3 3"],["d","M4 9v9a2 2 0 0 0 2 2h2"],["d","M20 9v9a2 2 0 0 1-2 2h-2"],[1,"dropdown-item","hover:bg-white/5"],["d","M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"],["d","m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"],["d","M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"],["d","M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"]],template:function(e,a){if(1&e&&(t.TgZ(0,"button",0),t.O4$(),t.TgZ(1,"svg",1),t._UZ(2,"circle",2)(3,"line",3)(4,"line",4),t.qZA()(),t.kcU(),t.TgZ(5,"mat-menu",null,5)(7,"div",6)(8,"ul",7)(9,"li")(10,"a",8),t.NdJ("click",function(){return a.showNewFeatureNotice(!0)}),t.O4$(),t.TgZ(11,"svg",9),t._UZ(12,"path",10)(13,"path",11)(14,"path",12)(15,"path",13)(16,"polyline",14)(17,"line",15),t.qZA(),t._uU(18),t.ALo(19,"mytranslate"),t.qZA()(),t.kcU(),t.TgZ(20,"li")(21,"a",16),t.NdJ("click",function(){return a.showSurveyDialog()}),t.O4$(),t.TgZ(22,"svg",9),t._UZ(23,"rect",17)(24,"path",18)(25,"path",19)(26,"path",20)(27,"path",21),t.qZA(),t._uU(28),t.ALo(29,"mytranslate"),t.qZA()(),t.kcU(),t.TgZ(30,"li")(31,"a",22),t.O4$(),t.TgZ(32,"svg",9),t._UZ(33,"path",23)(34,"circle",24)(35,"path",25)(36,"path",26),t.qZA(),t._uU(37),t.ALo(38,"mytranslate"),t.qZA()(),t.kcU(),t.TgZ(39,"li")(40,"a",27),t.O4$(),t.TgZ(41,"svg",9),t._UZ(42,"path",28),t.qZA(),t._uU(43),t.ALo(44,"mytranslate"),t.qZA()(),t.kcU(),t.TgZ(45,"li"),t._UZ(46,"hr",29),t.qZA(),t.TgZ(47,"li")(48,"a",30),t.ALo(49,"mylocalize"),t.O4$(),t.TgZ(50,"svg",9),t._UZ(51,"polyline",31)(52,"polyline",32),t.qZA(),t._uU(53),t.ALo(54,"mytranslate"),t.qZA()(),t.kcU(),t.TgZ(55,"li")(56,"a",33),t.ALo(57,"mylocalize"),t.O4$(),t.TgZ(58,"svg",9),t._UZ(59,"rect",34)(60,"path",35)(61,"path",36)(62,"path",37)(63,"path",38),t.qZA(),t._uU(64),t.ALo(65,"mytranslate"),t.qZA()(),t.kcU(),t.TgZ(66,"li"),t._UZ(67,"hr",29),t.qZA(),t.TgZ(68,"li")(69,"a",39),t.O4$(),t.TgZ(70,"svg",9),t._UZ(71,"path",40)(72,"path",41)(73,"path",42)(74,"path",43),t.qZA(),t._uU(75),t.ALo(76,"mytranslate"),t.qZA()()()()()),2&e){const n=t.MAs(6);t.Q6J("matMenuTriggerFor",n),t.xp6(18),t.hij(" ",t.lcZ(19,10,"lang_auto_tinh_nang_moi")," "),t.xp6(10),t.hij(" ",t.lcZ(29,12,"lang_auto_khao_sat")," "),t.xp6(9),t.hij(" ",t.lcZ(38,14,"lang_auto_cong_dong_ho_tro")," "),t.xp6(6),t.hij(" ",t.lcZ(44,16,"lang_auto_fanpage_azota")," "),t.xp6(5),t.Q6J("routerLink",t.VKq(28,E,t.lcZ(49,18,"/admin/testbank/create-website"))),t.xp6(5),t.hij(" ",t.lcZ(54,20,"lang_auto_own_website")," "),t.xp6(3),t.Q6J("routerLink",t.VKq(30,E,t.lcZ(57,22,"/admin/homework/content-store"))),t.xp6(8),t.hij(" ",t.lcZ(65,24,"lang_auto_content_store")," "),t.xp6(11),t.hij(" ",t.lcZ(76,26,"lang_auto_phien_ban")+": "+a.currentVersion," ")}},dependencies:[f.yS,U.VK,U.p6,x.mp,x.bT],encapsulation:2}),o})();function gt(o,r){if(1&o&&(t.TgZ(0,"button",18),t.O4$(),t.TgZ(1,"svg",19),t._UZ(2,"path",20)(3,"circle",21)(4,"path",22)(5,"path",23),t.qZA()()),2&o){t.oxw();const e=t.MAs(2);t.Q6J("matMenuTriggerFor",e)}}const Z=function(o){return[o]},pt=function(){return{confirm_type:"forgot_password"}};let G=(()=>{class o extends k.Q{ngOnInit(){this.user_obj=this.baseApiService.getUserObj(),super.ngOnInit()}constructor(e,a){super(e),this.commonService=e,this.baseApiService=a,this.user_obj={}}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(O.v),t.Y36(K._))},o.\u0275cmp=t.Xpm({type:o,selectors:[["footer-admin-menu"]],features:[t.qOj],decls:62,vars:115,consts:[["class","btn btn-outline-primary dropdown-toggle btn-transparent mb-5 ml-5",3,"matMenuTriggerFor",4,"ngIf"],["dashboardAdminMenu",""],[1,"dropdown-menu","show","w-72","relative"],[1,"dropdown-content"],["azt-track-service","footer-admin-menu-l2MtrrqUX",1,"dropdown-item",3,"routerLink"],["azt-track-service","footer-admin-menu-k2gFa7QrVb",1,"dropdown-item",3,"routerLink"],["azt-track-service","footer-admin-menu-_UZDP1ogJc",1,"dropdown-item",3,"routerLink"],["azt-track-service","footer-admin-menu-HU-q1ZJdwG",1,"dropdown-item",3,"routerLink"],["azt-track-service","footer-admin-menu-_0cy0YyNw7",1,"dropdown-item",3,"routerLink"],["azt-track-service","footer-admin-menu-QkjmZi6D4J",1,"dropdown-item",3,"routerLink"],["azt-track-service","footer-admin-menu-dg6aprK7Az",1,"dropdown-item",3,"routerLink","queryParams"],["azt-track-service","footer-admin-menu-FZIvO6pTRn",1,"dropdown-item",3,"routerLink"],["azt-track-service","footer-admin-menu-hyKpy_jcGr",1,"dropdown-item",3,"routerLink"],["azt-track-service","footer-admin-menu-Ebrjz2hZI3",1,"dropdown-item",3,"routerLink"],["azt-track-service","footer-admin-menu-fH45ySgaH8",1,"dropdown-item",3,"routerLink"],["azt-track-service","footer-admin-menu-ZmmPWU2Wh",1,"dropdown-item",3,"routerLink"],["azt-track-service","footer-admin-menu-4XJNJSxSzJ",1,"dropdown-item",3,"routerLink"],["azt-track-service","footer-admin-menu-CfWsPyTqY-",1,"dropdown-item",3,"routerLink"],[1,"btn","btn-outline-primary","dropdown-toggle","btn-transparent","mb-5","ml-5",3,"matMenuTriggerFor"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round","icon-name","users","data-lucide","users",1,"lucide-users"],["d","M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"],["cx","9","cy","7","r","4"],["d","M23 21v-2a4 4 0 00-3-3.87"],["d","M16 3.13a4 4 0 010 7.75"]],template:function(e,a){1&e&&(t.YNc(0,gt,6,1,"button",0),t.TgZ(1,"mat-menu",null,1)(3,"div",2)(4,"ul",3)(5,"li")(6,"a",4),t.ALo(7,"mylocalize"),t._uU(8),t.ALo(9,"mytranslate"),t.qZA(),t.TgZ(10,"a",5),t.ALo(11,"mylocalize"),t._uU(12),t.ALo(13,"mytranslate"),t.qZA(),t.TgZ(14,"a",6),t.ALo(15,"mylocalize"),t._uU(16),t.ALo(17,"mytranslate"),t.qZA(),t.TgZ(18,"a",7),t.ALo(19,"mylocalize"),t._uU(20),t.ALo(21,"mytranslate"),t.qZA(),t.TgZ(22,"a",8),t.ALo(23,"mylocalize"),t._uU(24),t.ALo(25,"mytranslate"),t.qZA(),t.TgZ(26,"a",9),t.ALo(27,"mylocalize"),t._uU(28),t.ALo(29,"mytranslate"),t.qZA(),t.TgZ(30,"a",10),t.ALo(31,"localize"),t._uU(32),t.ALo(33,"mytranslate"),t.qZA(),t.TgZ(34,"a",11),t.ALo(35,"mylocalize"),t._uU(36),t.ALo(37,"mytranslate"),t.qZA(),t.TgZ(38,"a",12),t.ALo(39,"mylocalize"),t._uU(40),t.ALo(41,"mytranslate"),t.qZA(),t.TgZ(42,"a",13),t.ALo(43,"mylocalize"),t._uU(44),t.ALo(45,"mytranslate"),t.qZA(),t.TgZ(46,"a",14),t.ALo(47,"mylocalize"),t._uU(48),t.ALo(49,"mytranslate"),t.qZA(),t.TgZ(50,"a",15),t.ALo(51,"mylocalize"),t._uU(52),t.ALo(53,"mytranslate"),t.qZA(),t.TgZ(54,"a",16),t.ALo(55,"mylocalize"),t._uU(56),t.ALo(57,"mytranslate"),t.qZA(),t.TgZ(58,"a",17),t.ALo(59,"mylocalize"),t._uU(60),t.ALo(61,"mytranslate"),t.qZA()()()()()),2&e&&(t.Q6J("ngIf",1==a.user_obj.id),t.xp6(6),t.Q6J("routerLink",t.VKq(86,Z,t.lcZ(7,30,"/super-role/support"))),t.xp6(2),t.hij(" ",t.lcZ(9,32,"lang_auto_ho_tro_khach_hang")," "),t.xp6(2),t.Q6J("routerLink",t.VKq(88,Z,t.lcZ(11,34,"/super-role/report_error"))),t.xp6(2),t.hij(" ",t.lcZ(13,36,"lang_auto_khach_bao_loi")," "),t.xp6(2),t.Q6J("routerLink",t.VKq(90,Z,t.lcZ(15,38,"/super-role/report_exception"))),t.xp6(2),t.hij(" ",t.lcZ(17,40,"lang_auto_js_exception")," "),t.xp6(2),t.Q6J("routerLink",t.VKq(92,Z,t.lcZ(19,42,"/super-role/exception_log"))),t.xp6(2),t.hij(" ",t.lcZ(21,44,"lang_auto_dot_net_exception")," "),t.xp6(2),t.Q6J("routerLink",t.VKq(94,Z,t.lcZ(23,46,"/super-role/update-config"))),t.xp6(2),t.hij(" ",t.lcZ(25,48,"lang_auto_sua_cau_hinh")," "),t.xp6(2),t.Q6J("routerLink",t.VKq(96,Z,t.lcZ(27,50,"/super-role/gzip-tool"))),t.xp6(2),t.hij(" ",t.lcZ(29,52,"lang_auto_gzip_tool")," "),t.xp6(2),t.Q6J("routerLink",t.VKq(98,Z,t.lcZ(31,54,"/auth/checking_service")))("queryParams",t.DdM(100,pt)),t.xp6(2),t.hij(" ",t.lcZ(33,56,"lang_auto_quen_pass_dung_firebase")," "),t.xp6(2),t.Q6J("routerLink",t.VKq(101,Z,t.lcZ(35,58,"/super-role/json-tool"))),t.xp6(2),t.hij(" ",t.lcZ(37,60,"lang_auto_decode_json_tool")," "),t.xp6(2),t.Q6J("routerLink",t.VKq(103,Z,t.lcZ(39,62,"/super-role/add_school"))),t.xp6(2),t.hij(" ",t.lcZ(41,64,"lang_auto_them_truong")," "),t.xp6(2),t.Q6J("routerLink",t.VKq(105,Z,t.lcZ(43,66,"/super-role/add_new_feature_notice"))),t.xp6(2),t.hij(" ",t.lcZ(45,68,"lang_auto_tinh_nang_moi")," "),t.xp6(2),t.Q6J("routerLink",t.VKq(107,Z,t.lcZ(47,70,"/super-role/approve-share-question/1"))),t.xp6(2),t.hij(" ",t.lcZ(49,72,"lang_auto_duyet_chia_se_cau_hoi")," "),t.xp6(2),t.Q6J("routerLink",t.VKq(109,Z,t.lcZ(51,74,"/super-role/approve-withdraw-request/1"))),t.xp6(2),t.hij(" ",t.lcZ(53,76,"lang_test_market_approve_withdraw_request")," "),t.xp6(2),t.Q6J("routerLink",t.VKq(111,Z,t.lcZ(55,78,"/super-role/short-link-management/1"))),t.xp6(2),t.hij(" ",t.lcZ(57,80,"lang_super_role_short_link_management")," "),t.xp6(2),t.Q6J("routerLink",t.VKq(113,Z,t.lcZ(59,82,"/super-role/auto-test-api"))),t.xp6(2),t.hij(" ",t.lcZ(61,84,"lang_super_role_auto_test_api_management")," "))},dependencies:[f.yS,m.O5,U.VK,U.p6,x.mp,x.bT,J.lO],encapsulation:2}),o})();const z=function(o){return[o]};function vt(o,r){if(1&o&&(t.TgZ(0,"div",4)(1,"a",19),t.ALo(2,"mylocalize"),t.TgZ(3,"div",20)(4,"div",21)(5,"span",22),t._UZ(6,"lucide-icon",23),t.qZA(),t.TgZ(7,"div",24)(8,"span"),t._uU(9," New "),t.qZA()()(),t.TgZ(10,"span",7),t._UZ(11,"lucide-icon",25),t.qZA(),t.TgZ(12,"div",9),t._uU(13),t.ALo(14,"mytranslate"),t.qZA()()()()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("routerLink",t.VKq(6,z,t.lcZ(2,2,"/admin/test-market/introduce"))),t.xp6(12),t.hij(" ",t.lcZ(14,4,e.randomAction)," ")}}function _t(o,r){1&o&&(t.TgZ(0,"div",26)(1,"div",27)(2,"a",28),t.ALo(3,"mylocalize"),t.TgZ(4,"div",29)(5,"div",30)(6,"span",31),t._UZ(7,"lucide-icon",32),t.qZA()(),t.TgZ(8,"div",33)(9,"div",34),t._uU(10),t.ALo(11,"mytranslate"),t.qZA()()()()(),t.TgZ(12,"div",27)(13,"a",35)(14,"div",29)(15,"div",30)(16,"span",31),t._UZ(17,"lucide-icon",36),t.qZA()(),t.TgZ(18,"div",33)(19,"div",34),t._uU(20),t.ALo(21,"mytranslate"),t.qZA()()()()()()),2&o&&(t.xp6(2),t.Q6J("routerLink",t.VKq(9,z,t.lcZ(3,3,"/admin/trash/0"))),t.xp6(8),t.hij(" ",t.lcZ(11,5,"lang_auto_thung_rac")," "),t.xp6(10),t.hij(" ",t.lcZ(21,7,"lang_auto_huong_dan")," "))}function ft(o,r){1&o&&(t.TgZ(0,"div",37),t._UZ(1,"footer-info-menu")(2,"footer-admin-menu"),t.qZA())}let bt=(()=>{class o extends k.Q{ngOnInit(){this.initStatusObj(),this.randomAction=["lang_dashboard_azota_bank_title","lang_dashboard_make_money_title"][this.aztAbTestingService.getCurrentAbTestingIndex()],this.aztAbTestingService.sendLogShareQuestion("view banner"),this.aztDashboardDataService.getDashboardData(!0,(a,n)=>{n?this.showErrorSnack(n):(a.useWelcomeDashboard&&this.aztDashboardDataService.checkRedirectDashboard(!0),this.showTestMarketButton=!!a.showTestMarket)}),this.commonService.translateMetaData({title:"lang_cms_test_dashboard_title",description:"lang_cms_test_dashboard_description",image:"lang_cms_test_image"}),this.mobileWebviewService.sendSimpleMessage("OPEN_MAIN_DASHBOARD"),super.ngOnInit()}constructor(e,a,n,s,l){super(e),this.commonService=e,this.dialog=a,this.aztDashboardDataService=n,this.aztAbTestingService=s,this.mobileWebviewService=l,this.showTestMarketButton=!1}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(O.v),t.Y36(u.uw),t.Y36(F),t.Y36(tt.Z),t.Y36(et.F))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-test-dashboard"]],features:[t.qOj],decls:43,vars:36,consts:[[3,"headerTitle"],[1,"azt-dashboard","w-full","lg:w-80%","mx-auto"],[1,"mb-3","grid","grid-cols-12","sm:gap-10","intro-y","sm:mt-10"],[1,"col-span-12","grid","grid-cols-12","gap-6","mt-8","flex","items-center"],[1,"col-span-6","md:col-span-3","intro-y"],["azt-track-service","dashboard-main-rF6MSAArUsY",3,"routerLink"],[1,"box","p-8","zoom-in"],[1,"block","w-12","h-12","text-primary","mx-auto"],["name","file-text"],[1,"font-medium","text-center","text-base","mt-3"],["azt-track-service","dashboard-main-n5d-c2lLv1K",3,"routerLink"],["name","folder"],["azt-track-service","dashboard-main-4P7SGaAp07c",3,"routerLink"],["name","layers"],["azt-track-service","dashboard-main-7d_U3ZeXpGR",3,"routerLink"],["name","users"],["class","col-span-6 md:col-span-3 intro-y",4,"ngIf"],["class","col-span-12 grid grid-cols-12 mt-8 gap-6 flex items-center",4,"ngIf"],["class","absolute left-0 bottom-0 index info-zone",4,"ngIf"],["azt-track-service","dashboard-main-Qv44FAUiKc1",3,"routerLink"],[1,"box","p-8","zoom-in","relative"],[1,"absolute","top-0","left-0","text-danger","p-3","flex","items-center"],[1,"block","w-6","h-6","mx-auto"],["name","star"],[1,"text-sm","text-base","ml-1"],["name","landmark"],[1,"col-span-12","grid","grid-cols-12","mt-8","gap-6","flex","items-center"],[1,"col-span-12","md:col-span-3","intro-y"],["azt-track-service","dashboard-main-78XWJErDG4V",3,"routerLink"],[1,"box","px-4","py-4","mb-3","flex","items-center","zoom-in"],[1,"w-10","h-10","flex-none","image-fit","rounded-md","overflow-hidden"],[1,"w-10","h-10","text-pending"],["name","trash-2"],[1,"ml-4","mr-auto"],[1,"font-medium"],["azt-track-service","dashboard-main-J6ZAMHq8uVG","href","https://docs.azota.vn/","target","_blank"],["name","help-circle"],[1,"absolute","left-0","bottom-0","index","info-zone"]],template:function(e,a){1&e&&(t.TgZ(0,"teacher-layout",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"a",5),t.ALo(6,"mylocalize"),t.TgZ(7,"div",6)(8,"span",7),t._UZ(9,"lucide-icon",8),t.qZA(),t.TgZ(10,"div",9),t._uU(11),t.ALo(12,"mytranslate"),t.qZA()()()(),t.TgZ(13,"div",4)(14,"a",10),t.ALo(15,"mylocalize"),t.TgZ(16,"div",6)(17,"span",7),t._UZ(18,"lucide-icon",11),t.qZA(),t.TgZ(19,"div",9),t._uU(20),t.ALo(21,"mytranslate"),t.qZA()()()(),t.TgZ(22,"div",4)(23,"a",12),t.ALo(24,"mylocalize"),t.TgZ(25,"div",6)(26,"span",7),t._UZ(27,"lucide-icon",13),t.qZA(),t.TgZ(28,"div",9),t._uU(29),t.ALo(30,"mytranslate"),t.qZA()()()(),t.TgZ(31,"div",4)(32,"a",14),t.ALo(33,"mylocalize"),t.TgZ(34,"div",6)(35,"span",7),t._UZ(36,"lucide-icon",15),t.qZA(),t.TgZ(37,"div",9),t._uU(38),t.ALo(39,"mytranslate"),t.qZA()()()(),t.YNc(40,vt,15,8,"div",16),t.qZA(),t.YNc(41,_t,22,11,"div",17),t.qZA(),t.YNc(42,ft,3,0,"div",18),t.qZA()()),2&e&&(t.Q6J("headerTitle","dashboard"),t.xp6(5),t.Q6J("routerLink",t.VKq(28,z,t.lcZ(6,12,"/admin/testbank/document-management/1/0/1"))),t.xp6(6),t.hij(" ",t.lcZ(12,14,"lang_auto_bai_tap")," "),t.xp6(3),t.Q6J("routerLink",t.VKq(30,z,t.lcZ(15,16,"/admin/testbank/document-management/0/0/1"))),t.xp6(6),t.hij(" ",t.lcZ(21,18,"lang_auto_de_thi")," "),t.xp6(3),t.Q6J("routerLink",t.VKq(32,z,t.lcZ(24,20,"/admin/student/manage-class/0"))),t.xp6(6),t.hij(" ",t.lcZ(30,22,"lang_auto_quan_ly_lop")," "),t.xp6(3),t.Q6J("routerLink",t.VKq(34,z,t.lcZ(33,24,"/admin/teacher-group/0/0"))),t.xp6(6),t.hij(" ",t.lcZ(39,26,"lang_auto_doi_nhom")," "),t.xp6(2),t.Q6J("ngIf",a.showTestMarketButton&&!a.isMobileWebView),t.xp6(1),t.Q6J("ngIf",!a.isMobileWebView),t.xp6(1),t.Q6J("ngIf",!a.isMobileWebView))},dependencies:[f.yS,m.O5,I._,b.Nh5,V,G,x.mp,x.bT],encapsulation:2}),o})();var Zt=i(91350);function At(o,r){1&o&&t._UZ(0,"azt-loading-effect")}const yt=function(o){return[o]};function xt(o,r){1&o&&(t.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"h3",5),t._uU(4),t.ALo(5,"mytranslate"),t.qZA(),t.TgZ(6,"p",6),t._uU(7),t.ALo(8,"mytranslate"),t.TgZ(9,"b"),t._uU(10),t.ALo(11,"mytranslate"),t.qZA(),t._uU(12,", "),t.TgZ(13,"b"),t._uU(14),t.ALo(15,"mytranslate"),t.qZA(),t._uU(16,", "),t.TgZ(17,"b"),t._uU(18),t.ALo(19,"mytranslate"),t.qZA(),t._uU(20),t.ALo(21,"mytranslate"),t.TgZ(22,"b"),t._uU(23),t.ALo(24,"mytranslate"),t.qZA(),t._uU(25),t.ALo(26,"mytranslate"),t.ALo(27,"mytranslate"),t.TgZ(28,"a",7),t._uU(29),t.ALo(30,"mytranslate"),t.qZA()(),t.TgZ(31,"button",8),t.ALo(32,"mylocalize"),t.O4$(),t.TgZ(33,"svg",9),t._UZ(34,"line",10)(35,"line",11),t.qZA(),t.kcU(),t.TgZ(36,"span",12),t._uU(37),t.ALo(38,"mytranslate"),t.qZA()()()()(),t.TgZ(39,"div",13),t._UZ(40,"footer-info-menu")(41,"footer-admin-menu"),t.qZA()),2&o&&(t.xp6(4),t.hij(" ",t.lcZ(5,12,"lang_auto_chao_mung_ban_den_voi_azota")," "),t.xp6(3),t.hij(" ",t.lcZ(8,14,"lang_auto_ban_co_the_tao")," "),t.xp6(3),t.Oqu(t.lcZ(11,16,"lang_auto_bai_tap")),t.xp6(4),t.Oqu(t.lcZ(15,18,"lang_auto_de_thi")),t.xp6(4),t.Oqu(t.lcZ(19,20,"lang_auto_de_kiem_tra")),t.xp6(2),t.hij(" ",t.lcZ(21,22,"lang_auto_hoac_tao")," "),t.xp6(3),t.Oqu(t.lcZ(24,24,"lang_auto_bang_dap_an")),t.xp6(2),t.AsE(" ",t.lcZ(26,26,"lang_auto_de_tu_dong")," ",t.lcZ(27,28,"lang_auto_cham_bai_lam_offline_cua_hoc_sinh")," "),t.xp6(4),t.Oqu(t.lcZ(30,30,"lang_auto_tim_hieu_them")),t.xp6(2),t.Q6J("routerLink",t.VKq(36,yt,t.lcZ(32,32,"/admin/testbank/create-new-document/0"))),t.xp6(6),t.hij(" ",t.lcZ(38,34,"lang_auto_tao_moi"),""))}let Tt=(()=>{class o extends k.Q{ngOnInit(){this.initStatusObj(),this.aztDashboardDataService.isWelcomeDashboard(!1).subscribe(e=>{e||e||this.aztDashboardDataService.checkRedirectDashboard(!1),this.stopStatusObj()}),super.ngOnInit()}redirectToGlobalBank(){this.commonService.myNavigationWithQueryString("/admin/testbank/matrix-list/0/1","?backto="+encodeURIComponent("/admin/dashboard-welcome"))}constructor(e,a,n){super(e),this.commonService=e,this.aztDashboardDataService=a,this.dialog=n}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(O.v),t.Y36(F),t.Y36(u.uw))},o.\u0275cmp=t.Xpm({type:o,selectors:[["dashboard-welcome"]],features:[t.qOj],decls:4,vars:2,consts:[[4,"ngIf","ngIfElse"],["doneLoading",""],[1,"app"],[1,"container"],[1,"dashboard"],[1,"dashboard-title"],[1,"dashboard-desc"],["azt-track-service","dashboard-welcome-lvJjPYrvdbF","href","https://docs.azota.vn","target","_blank",1,"btn-text-primary"],["azt-track-service","dashboard-welcome-rOUx53afllU",1,"btn","w-32","btn-primary",3,"routerLink"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["x1","12","y1","5","x2","12","y2","19"],["x1","5","y1","12","x2","19","y2","12"],[2,"margin-left","5px"],[1,"absolute","left-0","bottom-0","index"]],template:function(e,a){if(1&e&&(t.TgZ(0,"teacher-layout"),t.YNc(1,At,1,0,"azt-loading-effect",0),t.YNc(2,xt,42,38,"ng-template",null,1,t.W1O),t.qZA()),2&e){const n=t.MAs(3);t.xp6(1),t.Q6J("ngIf",a.statusObj.loading)("ngIfElse",n)}},dependencies:[f.rH,m.O5,Zt.Q,I._,V,G,x.mp,x.bT],styles:[".dashboard[_ngcontent-%COMP%]{text-align:center}.dashboard-title[_ngcontent-%COMP%]{font-size:20px;margin-bottom:20px}.app[_ngcontent-%COMP%]{margin-top:100px}.dashboard-desc[_ngcontent-%COMP%]{margin:0 auto 25px;max-width:500px}.btn-azt-primary[_ngcontent-%COMP%]{text-transform:inherit;font-size:16px;font-weight:400;padding:5px 50px}.mt-150[_ngcontent-%COMP%]{margin-top:150px}"]}),o})();const wt=[{component:(()=>{class o extends k.Q{}return o.\u0275fac=function(){let r;return function(a){return(r||(r=t.n5z(o)))(a||o)}}(),o.\u0275cmp=t.Xpm({type:o,selectors:[["app-dashboard"]],features:[t.qOj],decls:1,vars:0,template:function(e,a){1&e&&t._UZ(0,"router-outlet")},dependencies:[f.lC],encapsulation:2}),o})(),path:"",canActivate:[B.J],children:[{path:"dashboard-welcome",component:Tt},{path:"dashboard",component:bt},{path:"dashboard-v1",redirectTo:"dashboard",pathMatch:"full"}]}];let St=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[f.Bz.forChild(wt),f.Bz,J.fQ]}),o})(),Lt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[f.Bz,m.ez,R.j,C.Xd,g.Z_,p.u5,p.UX,u.Is,P.Z,d.xC,j.QG,c.h,Y.W,W.d,St,b.qyJ.pick(b.ciZ)]}),o})()}}]);