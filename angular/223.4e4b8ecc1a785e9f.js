"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[223],{91350:(L,x,n)=>{n.d(x,{Q:()=>k});var h=n(55330),e=n(94650),_=n(36895),g=n(73162),s=n(1033);function f(u,Z){if(1&u&&(e.O4$(),e.kcU(),e._UZ(0,"mat-progress-bar",10)),2&u){const m=e.oxw();e.Q6J("value",m.progress_value)}}function i(u,Z){if(1&u&&(e.O4$(),e.kcU(),e.TgZ(0,"div",11),e._uU(1),e.qZA()),2&u){const m=e.oxw();e.xp6(1),e.Oqu(m.getMsg())}}function l(u,Z){if(1&u){const m=e.EpF();e.O4$(),e.kcU(),e.TgZ(0,"div",12),e._uU(1),e.ALo(2,"mytranslate"),e.TgZ(3,"a",13),e.NdJ("click",function(){e.CHM(m);const A=e.oxw();return e.KtG(A.isShowErrorsBox=!A.isShowErrorsBox)}),e._uU(4),e.ALo(5,"mytranslate"),e.ALo(6,"mytranslate"),e.qZA()()}if(2&u){const m=e.oxw();e.xp6(1),e.hij(" ",e.lcZ(2,2,"lang_auto_da_xay_ra_loi_trong_qua_trinh_trao_doi_du_lieu_")," "),e.xp6(3),e.hij(" ",m.isShowErrorsBox?e.lcZ(5,4,"lang_auto_an_chi_tiet"):e.lcZ(6,6,"lang_auto_xem_chi_tiet")," ")}}function y(u,Z){if(1&u&&(e.O4$(),e.kcU(),e.TgZ(0,"div",12),e._uU(1),e.qZA()),2&u){const m=e.oxw();e.xp6(1),e.hij(" ",m.LogErrorsRequest," ")}}function M(u,Z){if(1&u&&(e.O4$(),e.kcU(),e.TgZ(0,"div",14),e._uU(1),e.ALo(2,"mytranslate"),e.qZA()),2&u){const m=e.oxw();e.xp6(1),e.Oqu(m.customText?m.customText:e.lcZ(2,1,"lang_auto_dang_tai_du_lieu")+"...")}}let k=(()=>{class u extends h.Q{constructor(){super(...arguments),this.progress_value=-1,this.LogErrorsRequest=!1,this.customText="",this.isShowErrorsBox=!1}getMsg(){var m,b;let A="";return 100==this.progress_value||0==this.progress_value?(A=null!==(m=this.commonService.myTranslateInstant("lang_auto_dang_xu_ly"))&&void 0!==m?m:"",`${A} ...`):(A=null!==(b=this.commonService.myTranslateInstant("lang_auto_dang_tai_tep_tin_len_he_thong"))&&void 0!==b?b:"",`${A}... ${this.progress_value} %`)}}return u.\u0275fac=function(){let Z;return function(b){return(Z||(Z=e.n5z(u)))(b||u)}}(),u.\u0275cmp=e.Xpm({type:u,selectors:[["azt-loading-effect"]],inputs:{progress_value:"progress_value",LogErrorsRequest:"LogErrorsRequest",customText:"customText"},features:[e.qOj],decls:12,vars:5,consts:[[1,"box-loading","h-full"],[1,"text-center","py-4"],["version","1.1","id","jobing-j-drawit","id","Layer_1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","x","0px","y","0px","viewBox","0 0 109 92.9",0,"xml","space","preserve",1,"w-12","mx-auto",2,"enable-background","new 0 0 109 92.9"],["d","M90.8,52c3.5,6.2,7.1,11.7,9.8,17.7c4.4,9.7-2.9,20.7-13.8,20.9c-11.8,0.2-23.7,0.2-35.5,0 c-11-0.1-17.6-12.2-12-21.7c0.4-0.8,1.8-1.4,2.7-1.4c9.9-0.1,19.7-0.1,29.6-0.1c9.8,0,15.9-4.6,18.7-14C90.4,53.2,90.5,52.9,90.8,52 z",1,"azt-svg-loading","jobing-j"],["d","M39.6,90.3c-6.8,0-13.8,0.8-20.5-0.2c-9.7-1.4-15-12.8-10.3-21.3c5.9-10.9,12.1-21.6,18.5-32.2 c5.5-9,18.6-8.7,24.2,0.2c0.7,1.1,0.8,1.9,0.1,3.1C46.7,48.3,42,57,36.8,65.3c-5.3,8.4-3.8,18.8,2.5,24.6 C39.5,89.9,39.5,90.2,39.6,90.3z",1,"azt-svg-loading","jobing-j"],["d","M32.5,27.3c3.3-5.7,6.1-11,9.4-16c5.9-9.1,19.4-9.2,25.1,0c6.5,10.4,12.6,21,18.3,31.7 c4.8,9-1.5,19.9-11.5,20.7c-1.6,0.1-2.6-0.2-3.5-1.8c-4.8-8.6-9.8-17.1-14.7-25.6c-4.7-8.3-12.5-11.6-21.7-9.2 C33.6,27.1,33.3,27.1,32.5,27.3z",1,"azt-svg-loading","jobing-j"],["style","margin-bottom: 30px; border-radius: 5px","mode","buffer",3,"value",4,"ngIf"],["class","note text-center font-weight-bold",4,"ngIf","ngIfElse"],["class","alert alert-danger mt-3","role","alert",4,"ngIf"],["notLoading",""],["mode","buffer",2,"margin-bottom","30px","border-radius","5px",3,"value"],[1,"note","text-center","font-weight-bold"],["role","alert",1,"alert","alert-danger","mt-3"],["azt-track-service","loading-effect-5TYv52U-wgq","href","javscript:void(0)",3,"click"],[1,"note","text-center","font-medium"]],template:function(m,b){if(1&m&&(e.TgZ(0,"div",0)(1,"div",1),e.O4$(),e.TgZ(2,"svg",2),e._UZ(3,"path",3)(4,"path",4)(5,"path",5),e.qZA()(),e.YNc(6,f,1,1,"mat-progress-bar",6),e.YNc(7,i,2,1,"div",7),e.YNc(8,l,7,8,"div",8),e.YNc(9,y,2,1,"div",8),e.YNc(10,M,3,3,"ng-template",null,9,e.W1O),e.qZA()),2&m){const A=e.MAs(11);e.xp6(6),e.Q6J("ngIf",-1!=b.progress_value),e.xp6(1),e.Q6J("ngIf",-1!=b.progress_value)("ngIfElse",A),e.xp6(1),e.Q6J("ngIf",!1!==b.LogErrorsRequest),e.xp6(1),e.Q6J("ngIf",b.isShowErrorsBox)}},dependencies:[_.O5,g.pW,s.bT],encapsulation:2}),u})()},45668:(L,x,n)=>{n.d(x,{J:()=>g});var h=n(94650),e=n(88386),_=n(4307);let g=(()=>{class s{constructor(i,l){this.userService=i,this.redirectService=l}canActivate(i,l){return!!this.userService.isLogin()||(this.redirectService.redirectLoginAnonymous(l.url),!1)}canActivateChild(i,l){return this.canActivate(i,l)}canLoad(i){const l=`/${i.path}`;return!!this.userService.isLogin()||(this.redirectService.redirectLoginByReturnUrl(l),!1)}}return s.\u0275fac=function(i){return new(i||s)(h.LFG(e.K),h.LFG(_.V))},s.\u0275prov=h.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},25229:(L,x,n)=>{n.d(x,{Z:()=>s});var h=n(94650),e=n(22335),_=n(34782),g=n(54278);let s=(()=>{class f{getCurrentAbTestingIndex(){var l=this.browserStorageService.getSimpleStorage(this.actionTextKey);return null==l&&(l=this.commonService.getRandomNumber(0,this.maxActionTextLength-1).toString(),this.browserStorageService.saveSimpleStorage(this.actionTextKey,l)),Number(l)}sendLogShareQuestion(l){let y={action:l+" "+this.getCurrentAbTestingIndex()};this.testMarketQuestionService.apiTestMarketQuestionsLogsPost(y).subscribe(M=>{})}constructor(l,y,M){this.commonService=l,this.browserStorageService=y,this.testMarketQuestionService=M,this.actionTextKey="azt_ab_testing_key",this.maxActionTextLength=2}}return f.\u0275fac=function(l){return new(l||f)(h.LFG(e.v),h.LFG(_.z),h.LFG(g.Q_))},f.\u0275prov=h.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})()},41752:(L,x,n)=>{n.d(x,{D:()=>g});var h=n(92340),e=n(94650),_=n(58914);let g=(()=>{class s{constructor(i){this.configService=i}getCurrentVersion(){return h.N.versionTime}getGlobalNotice(){return this.configService.getConfig("globalNotice")}getEnvValue(i){return this.configService.getConfig(i)}getLinkEmbedDocument(i){var l=this.configService.getConfig("docView");return l&&"MICROSOFT"!=l?`https://docs.google.com/viewer?url=${i}&embedded=true`:`https://view.officeapps.live.com/op/embed.aspx?src=${i}`}}return s.\u0275fac=function(i){return new(i||s)(e.LFG(_.E))},s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},78278:(L,x,n)=>{n.d(x,{Y:()=>g});var h=n(94650),e=n(88386),_=n(22335);let g=(()=>{class s{constructor(i,l){this.userService=i,this.commonService=l}checkLoginZalo(){if(!this.userService.isLogin())return!1;const i=this.userService.getUserObj();return!(!i.zaloId||i.phone&&10==i.phone.length||i.email&&-1!==i.email.indexOf("@"))}zaloInfoRequired(){this.checkLoginZalo()&&this.commonService.myNavigation("/auth/required-phone-or-email")}}return s.\u0275fac=function(i){return new(i||s)(h.LFG(e.K),h.LFG(_.v))},s.\u0275prov=h.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},43223:(L,x,n)=>{n.r(x),n.d(x,{DashboardModule:()=>mt});var h=n(59650),e=n(36895),_=n(24006),g=n(76619),s=n(34793),f=n(39102),i=n(93194),l=n(1737),y=n(43189),M=n(63728),k=n(47470),u=n(75658),Z=n(89367),m=n(8785),b=n(51178),A=n(45668),D=n(55330),t=n(94650),B=n(69751),J=n(50727),W=n(22335),z=n(23034),K=n(34782);let O=(()=>{class o{isWelcomeDashboard(a){return new B.y(r=>{this.getDashboardData(a,(d,p)=>{if(d&&!p){var v=1==Number(d.useWelcomeDashboard);r.next(v),r.complete()}else r.next(!1),r.complete()})})}checkRedirectDashboard(a){this.commonService.myNavigation(a?"/admin/dashboard-welcome":"/admin/dashboard")}getDashboardData(a,r){var d=this.browserStorageService.getSimpleSessionStorage(this.dashboardDataStorageKey);let p=d?this.commonService.castJsonToObj(d):void 0;a&&p?r(p,""):this.subscriptions.add(this.dashboardService.apiDashboardGetObjGet().subscribe(v=>{var w;1==v.success&&v.data?(this.browserStorageService.saveSimpleSessionStorage(this.dashboardDataStorageKey,this.commonService.serializeJson(v.data)),r(v.data,"")):(this.browserStorageService.removeSimpleSessionStorage(this.dashboardDataStorageKey),r(void 0,null!==(w=v.message)&&void 0!==w?w:""))}))}constructor(a,r,d,p){this.commonService=a,this.dialog=r,this.dashboardService=d,this.browserStorageService=p,this.subscriptions=new J.w0,this.dashboardDataStorageKey="azt_dashboard_data"}}return o.\u0275fac=function(a){return new(a||o)(t.LFG(W.v),t.LFG(g.uw),t.LFG(z.sp),t.LFG(K.z))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var Q=n(25229),Y=n(92114),G=n(78278),q=n(15575),E=n(10266),C=n(20371),V=n(85736),T=n(1033);let U=(()=>{class o{constructor(a,r){this.dialogRef=a,this.data=r,this.isNotShowAgain=new _.p4(!1)}ngOnInit(){}onNoClick(){this.dialogRef.close(this.isNotShowAgain.value)}}return o.\u0275fac=function(a){return new(a||o)(t.Y36(g.so),t.Y36(g.WI))},o.\u0275cmp=t.Xpm({type:o,selectors:[["new-feature-notice-dialog"]],decls:14,vars:11,consts:[[1,"box","p-5"],[3,"innerHTML"],["align","end"],[1,"flex","items-center","w-full",2,"justify-content","space-between"],[1,"form-check"],["id","is-not-show-again","type","checkbox",1,"form-check-input",3,"formControl"],["for","is-not-show-again",1,"form-check-label"],["azt-track-service","new-feature-iAX2JunJEbn",1,"btn","btn-primary","w-24",3,"mat-dialog-close","click"]],template:function(a,r){1&a&&(t.TgZ(0,"div",0)(1,"azt-mat-dialog-content"),t._UZ(2,"div",1),t.ALo(3,"safeAdminHtmlContent"),t.qZA(),t.TgZ(4,"mat-dialog-actions",2)(5,"div",3)(6,"div",4),t._UZ(7,"input",5),t.TgZ(8,"label",6),t._uU(9),t.ALo(10,"mytranslate"),t.qZA()(),t.TgZ(11,"button",7),t.NdJ("click",function(){return r.onNoClick()}),t._uU(12),t.ALo(13,"mytranslate"),t.qZA()()()()),2&a&&(t.xp6(2),t.Q6J("innerHTML",t.lcZ(3,5,r.data.description),t.oJD),t.xp6(5),t.Q6J("formControl",r.isNotShowAgain),t.xp6(2),t.hij(" ",t.lcZ(10,7,"lang_testbank_create_exam_width_file_pdf_not_view")," "),t.xp6(2),t.Q6J("mat-dialog-close",r.isNotShowAgain.value),t.xp6(1),t.Oqu(t.lcZ(13,9,"lang_buttom_close")))},dependencies:[g.ZT,g.H8,_.Wl,_.JJ,_.oH,V.O,T.bT,T.LW],encapsulation:2}),o})();var $=n(41752),F=n(88386),I=n(28255);const j=function(o){return[o]};let N=(()=>{class o extends D.Q{getNewFeatureNotice(a){this.initStatusObj(),this.subscriptions.add(this.globalNoticeService.apiGlobalNoticeGetObjGet().subscribe(r=>{var d,p,v;1==r.success?(null!==(d=r.data)&&void 0!==d&&d.obj?(this.checkFeatureNotice=!0,this.dialog.open(U,{width:"750px",data:null===(p=r.data)||void 0===p?void 0:p.obj,restoreFocus:!1}).afterClosed().subscribe(R=>{if(R)try{this.setMarkAsReadFeaturesNotice()}catch(gt){console.log(gt)}})):this.checkFeatureNotice=!1,this.successStatusObj()):this.errorStatusObj(null!==(v=r.message)&&void 0!==v?v:"",!0)}))}showNewFeatureNotice(a){this.subscriptions.add(this.globalNoticeService.apiGlobalNoticeGetObjGet(a?1:0).subscribe(r=>{var d,p,v;1==r.success?null!==(d=r.data)&&void 0!==d&&d.obj&&this.dialog.open(U,{width:"750px",data:null===(p=r.data)||void 0===p?void 0:p.obj,restoreFocus:!1}).afterClosed().subscribe(R=>{}):this.errorStatusObj(null!==(v=r.message)&&void 0!==v?v:"",!0)}))}setMarkAsReadFeaturesNotice(){this.subscriptions.add(this.globalNoticeService.apiGlobalNoticeMarkAsReadGet().subscribe(a=>{var r;1==a.success?this.successStatusObj():this.errorStatusObj(null!==(r=a.message)&&void 0!==r?r:"",!0)}))}ngOnInit(){this.initStatusObj(),this.user_obj=this.userService.getUserObj(),this.currentVersion=this.envService.getCurrentVersion(),this.isTeacherRole=this.userService.isTeacherRole(),this.getNewFeatureNotice(0),super.ngOnInit()}constructor(a,r,d,p){super(),this.envService=a,this.dialog=r,this.userService=d,this.globalNoticeService=p,this.currentVersion="",this.checkFeatureNotice=!1,this.user_obj={},this.isTeacherRole=!1}}return o.\u0275fac=function(a){return new(a||o)(t.Y36($.D),t.Y36(g.uw),t.Y36(F.K),t.Y36(z.ID))},o.\u0275cmp=t.Xpm({type:o,selectors:[["footer-info-menu"]],features:[t.qOj],decls:68,vars:32,consts:[[1,"btn","btn-outline-primary","dropdown-toggle","btn-transparent","mb-5","ml-5",3,"matTooltip","matMenuTriggerFor"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["cx","12","cy","12","r","10"],["x1","12","y1","16","x2","12","y2","12"],["x1","12","y1","8","x2","12.01","y2","8"],["dashboardMenu",""],[1,"dropdown-menu","show","w-72","relative"],[1,"dropdown-content"],["azt-track-service","footer-info-menu-4xo_9lVt1J",1,"dropdown-item",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"w-4","h-4","lucide","mr-2"],["d","M16 16h6"],["d","M19 13v6"],["d","M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"],["d","M16.5 9.4 7.55 4.24"],["points","3.29 7 12 12 20.71 7"],["x1","12","y1","22","x2","12","y2","12"],["azt-track-service","footer-info-menu-Mym6pF4eC7","href","https://www.facebook.com/groups/azota.vn","target","_blank",1,"dropdown-item"],["d","M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"],["cx","9","cy","7","r","4"],["d","M22 21v-2a4 4 0 0 0-3-3.87"],["d","M16 3.13a4 4 0 0 1 0 7.75"],["azt-track-service","footer-info-menu-nstjfJK4k1","href","https://www.facebook.com/azotavn","target","_blank",1,"dropdown-item"],["d","M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"],[1,"dropdown-divider","border-slate-200","dark:border-darkmode-400"],["azt-track-service","footer-info-menu-MF6sCK5s_Vh",1,"dropdown-item",3,"routerLink"],["points","16 18 22 12 16 6"],["points","8 6 2 12 8 18"],["azt-track-service","footer-info-menu-LwlklQ67tDO",1,"dropdown-item",3,"routerLink"],["x","2","y","4","width","20","height","5","rx","2"],["d","M12 13v7"],["d","m9 16 3-3 3 3"],["d","M4 9v9a2 2 0 0 0 2 2h2"],["d","M20 9v9a2 2 0 0 1-2 2h-2"],[1,"dropdown-item","hover:bg-white/5"],["d","M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"],["d","m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"],["d","M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"],["d","M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"]],template:function(a,r){if(1&a&&(t.TgZ(0,"button",0),t.ALo(1,"mytranslate"),t.O4$(),t.TgZ(2,"svg",1),t._UZ(3,"circle",2)(4,"line",3)(5,"line",4),t.qZA()(),t.kcU(),t.TgZ(6,"mat-menu",null,5)(8,"div",6)(9,"ul",7)(10,"li")(11,"a",8),t.NdJ("click",function(){return r.showNewFeatureNotice(!0)}),t.O4$(),t.TgZ(12,"svg",9),t._UZ(13,"path",10)(14,"path",11)(15,"path",12)(16,"path",13)(17,"polyline",14)(18,"line",15),t.qZA(),t._uU(19),t.ALo(20,"mytranslate"),t.qZA()(),t.kcU(),t.TgZ(21,"li")(22,"a",16),t.O4$(),t.TgZ(23,"svg",9),t._UZ(24,"path",17)(25,"circle",18)(26,"path",19)(27,"path",20),t.qZA(),t._uU(28),t.ALo(29,"mytranslate"),t.qZA()(),t.kcU(),t.TgZ(30,"li")(31,"a",21),t.O4$(),t.TgZ(32,"svg",9),t._UZ(33,"path",22),t.qZA(),t._uU(34),t.ALo(35,"mytranslate"),t.qZA()(),t.kcU(),t.TgZ(36,"li"),t._UZ(37,"hr",23),t.qZA(),t.TgZ(38,"li")(39,"a",24),t.ALo(40,"mylocalize"),t.O4$(),t.TgZ(41,"svg",9),t._UZ(42,"polyline",25)(43,"polyline",26),t.qZA(),t._uU(44),t.ALo(45,"mytranslate"),t.qZA()(),t.kcU(),t.TgZ(46,"li")(47,"a",27),t.ALo(48,"mylocalize"),t.O4$(),t.TgZ(49,"svg",9),t._UZ(50,"rect",28)(51,"path",29)(52,"path",30)(53,"path",31)(54,"path",32),t.qZA(),t._uU(55),t.ALo(56,"mytranslate"),t.qZA()(),t.kcU(),t.TgZ(57,"li"),t._UZ(58,"hr",23),t.qZA(),t.TgZ(59,"li")(60,"a",33),t.O4$(),t.TgZ(61,"svg",9),t._UZ(62,"path",34)(63,"path",35)(64,"path",36)(65,"path",37),t.qZA(),t._uU(66),t.ALo(67,"mytranslate"),t.qZA()()()()()),2&a){const d=t.MAs(7);t.s9C("matTooltip",t.lcZ(1,10,"lang_auto_cong_dong_ho_tro")),t.Q6J("matMenuTriggerFor",d),t.xp6(19),t.hij(" ",t.lcZ(20,12,"lang_auto_tinh_nang_moi")," "),t.xp6(9),t.hij(" ",t.lcZ(29,14,"lang_auto_cong_dong_ho_tro")," "),t.xp6(6),t.hij(" ",t.lcZ(35,16,"lang_auto_fanpage_azota")," "),t.xp6(5),t.Q6J("routerLink",t.VKq(28,j,t.lcZ(40,18,"/admin/testbank/create-website"))),t.xp6(5),t.hij(" ",t.lcZ(45,20,"lang_auto_own_website")," "),t.xp6(3),t.Q6J("routerLink",t.VKq(30,j,t.lcZ(48,22,"/admin/homework/content-store"))),t.xp6(8),t.hij(" ",t.lcZ(56,24,"lang_auto_content_store")," "),t.xp6(11),t.hij(" ",t.lcZ(67,26,"lang_auto_phien_ban")+": "+r.currentVersion," ")}},dependencies:[s.rH,I.VK,I.p6,E.gM,T.mp,T.bT],encapsulation:2}),o})();const H=function(o){return[o]};function X(o,c){1&o&&(t.TgZ(0,"a",1),t.ALo(1,"mylocalize"),t.O4$(),t.TgZ(2,"svg",2),t._UZ(3,"path",3)(4,"circle",4)(5,"path",5)(6,"path",6),t.qZA()()),2&o&&t.Q6J("routerLink",t.VKq(3,H,t.lcZ(1,1,"/super-role/admin-tool")))}let P=(()=>{class o extends D.Q{ngOnInit(){super.ngOnInit()}constructor(a){super(),this.userService=a}}return o.\u0275fac=function(a){return new(a||o)(t.Y36(F.K))},o.\u0275cmp=t.Xpm({type:o,selectors:[["footer-admin-menu"]],features:[t.qOj],decls:1,vars:1,consts:[["azt-track-service","footer-admin-menu-7W4rraHk8","class","btn btn-outline-primary dropdown-toggle btn-transparent mb-5 ml-5",3,"routerLink",4,"ngIf"],["azt-track-service","footer-admin-menu-7W4rraHk8",1,"btn","btn-outline-primary","dropdown-toggle","btn-transparent","mb-5","ml-5",3,"routerLink"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round","icon-name","users","data-lucide","users",1,"lucide-users"],["d","M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"],["cx","9","cy","7","r","4"],["d","M23 21v-2a4 4 0 00-3-3.87"],["d","M16 3.13a4 4 0 010 7.75"]],template:function(a,r){1&a&&t.YNc(0,X,7,5,"a",0),2&a&&t.Q6J("ngIf",r.userService.isSupperAdminRole())},dependencies:[s.rH,e.O5,T.mp],encapsulation:2}),o})();function tt(o,c){1&o&&(t.TgZ(0,"div",31),t._uU(1),t.ALo(2,"mytranslate"),t.qZA()),2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"lang_cms_test_dashboard_title")," "))}const S=function(o){return[o]};function et(o,c){1&o&&(t.TgZ(0,"div",32)(1,"a",33),t.ALo(2,"mylocalize"),t.TgZ(3,"div",34)(4,"div",35)(5,"span",36),t._UZ(6,"lucide-icon",37),t.qZA(),t.TgZ(7,"div",38)(8,"span"),t._uU(9," New "),t.qZA()()(),t.TgZ(10,"span",8),t._UZ(11,"lucide-icon",39),t.qZA(),t.TgZ(12,"div",10),t._uU(13),t.ALo(14,"mytranslate"),t.qZA()()()()),2&o&&(t.xp6(1),t.Q6J("routerLink",t.VKq(6,S,t.lcZ(2,2,"/admin/test-market/introduce"))),t.xp6(12),t.hij(" ",t.lcZ(14,4,"lang_dashboard_make_money_title")," "))}function ot(o,c){1&o&&(t.TgZ(0,"div",40),t._UZ(1,"footer-info-menu"),t.TgZ(2,"button",41),t.ALo(3,"mytranslate"),t.ALo(4,"mylocalize"),t.O4$(),t.TgZ(5,"svg",42),t._UZ(6,"path",43)(7,"path",44)(8,"path",45)(9,"line",46)(10,"line",47),t.qZA()(),t.kcU(),t.TgZ(11,"a",48),t.ALo(12,"mytranslate"),t.O4$(),t.TgZ(13,"svg",42),t._UZ(14,"circle",49)(15,"path",50)(16,"line",51),t.qZA()(),t.kcU(),t._UZ(17,"footer-admin-menu"),t.qZA()),2&o&&(t.xp6(2),t.s9C("matTooltip",t.lcZ(3,3,"lang_auto_thung_rac")),t.Q6J("routerLink",t.VKq(9,S,t.lcZ(4,5,"/admin/trash/0"))),t.xp6(9),t.s9C("matTooltip",t.lcZ(12,7,"lang_auto_huong_dan")))}let at=(()=>{class o extends D.Q{ngOnInit(){this.initStatusObj(),this.aztAbTestingService.sendLogShareQuestion("view banner"),this.aztDashboardDataService.getDashboardData(!0,(a,r)=>{r?this.showErrorSnack(r):(a?.useWelcomeDashboard&&this.aztDashboardDataService.checkRedirectDashboard(!0),this.showTestMarketButton=!!a?.showTestMarket)}),this.commonService.translateMetaData({title:"lang_cms_test_dashboard_title",description:"lang_cms_test_dashboard_description",image:"lang_cms_test_image"}),this.mobileWebviewService.sendSimpleMessage("OPEN_MAIN_DASHBOARD"),super.ngOnInit()}constructor(a,r,d,p,v,w){super(),this.dialog=a,this.aztDashboardDataService=r,this.aztAbTestingService=d,this.mobileWebviewService=p,this.zaloService=v,this.userLoginStateService=w,this.showTestMarketButton=!1,this.userLoginStateService.loginMessage.subscribe(()=>{setTimeout(()=>{this.zaloService.zaloInfoRequired()})})}}return o.\u0275fac=function(a){return new(a||o)(t.Y36(g.uw),t.Y36(O),t.Y36(Q.Z),t.Y36(Y.F),t.Y36(G.Y),t.Y36(q.N))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-test-dashboard"]],features:[t.qOj],decls:53,vars:36,consts:[[3,"headerTitle"],[1,"azt-dashboard","w-full","lg:w-80%","mx-auto","sm:mt-10"],["class","text-lg font-medium mt-5 intro-y",4,"ngIf"],[1,"mb-3","grid","grid-cols-12","intro-y","sm:gap-10"],[1,"col-span-12","grid","grid-cols-12","gap-6","mt-4","flex","items-center"],["tourAnchor","azt-tour-1",1,"col-span-6","md:col-span-3","intro-y"],["azt-track-service","dashboard-main-rF6MSAArUsY",3,"routerLink"],[1,"box","p-8","zoom-in"],[1,"block","w-12","h-12","text-primary","mx-auto"],["name","file-text"],[1,"font-medium","text-center","text-base","mt-3"],["tourAnchor","azt-tour-2",1,"col-span-6","md:col-span-3","intro-y"],["azt-track-service","dashboard-main-n5d-c2lLv1K",3,"routerLink"],["name","folder"],["tourAnchor","azt-tour-3",1,"col-span-6","md:col-span-3","intro-y"],["azt-track-service","dashboard-main-4P7SGaAp07c",3,"routerLink"],["name","layers"],["tourAnchor","azt-tour-4",1,"col-span-6","md:col-span-3","intro-y"],["azt-track-service","dashboard-main-7d_U3ZeXpGR",3,"routerLink"],["name","users"],["class","col-span-6 md:col-span-3 intro-y","tourAnchor","azt-tour-5",4,"ngIf"],[1,"intro-y","col-span-12","box","mt-10",2,"display","none"],[1,"flex","flex-col"],[1,"flex","items-center"],["rows","1","placeholder","B\u1ea1n mu\u1ed1n l\xe0m g\xec?...",1,"resize-none","form-control","border-transparent","shadow-none","focus:border-transparent","focus:ring-0",2,"margin","5px","outline","none","border","0","box-shadow","none"],["azt-track-service","dashboard-main-43hyFh5fD","href","javascript:;",1,"w-8","h-8","sm:w-10","sm:h-10","block","text-primary","rounded-full","flex-none","flex","items-center","justify-center","mr-2"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round","icon-name","send","data-lucide","send",1,"lucide","lucide-send","w-4","h-4"],["x1","22","y1","2","x2","11","y2","13"],["points","22 2 15 22 11 13 2 9 22 2"],[1,"col-span-12",2,"margin-top","-35px","margin-left","5px","font-size","13px","color","#a2a2a2","display","none"],["class","absolute left-0 bottom-0 index",4,"ngIf"],[1,"text-lg","font-medium","mt-5","intro-y"],["tourAnchor","azt-tour-5",1,"col-span-6","md:col-span-3","intro-y"],["azt-track-service","dashboard-main-Qv44FAUiKc1",3,"routerLink"],[1,"box","p-8","zoom-in","relative"],[1,"absolute","top-0","left-0","text-danger","p-3","flex","items-center"],[1,"block","w-6","h-6","mx-auto"],["name","star"],[1,"text-sm","text-base","ml-1"],["name","landmark"],[1,"absolute","left-0","bottom-0","index"],["azt-track-service","dashboard-main-78XWJErDG4V",1,"btn","btn-outline-primary","dropdown-toggle","btn-transparent","mb-5","ml-5",3,"matTooltip","routerLink"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M3 6h18"],["d","M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"],["d","M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"],["x1","10","y1","11","x2","10","y2","17"],["x1","14","y1","11","x2","14","y2","17"],["azt-track-service","dashboard-main-J6ZAMHq8uVG","href","https://docs.azota.vn/","target","_blank",1,"btn","btn-outline-primary","dropdown-toggle","btn-transparent","mb-5","ml-5",3,"matTooltip"],["cx","12","cy","12","r","10"],["d","M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"],["x1","12","y1","17","x2","12.01","y2","17"]],template:function(a,r){1&a&&(t.TgZ(0,"teacher-layout",0)(1,"div",1),t.YNc(2,tt,3,3,"div",2),t.TgZ(3,"div",3)(4,"div",4)(5,"div",5)(6,"a",6),t.ALo(7,"mylocalize"),t.TgZ(8,"div",7)(9,"span",8),t._UZ(10,"lucide-icon",9),t.qZA(),t.TgZ(11,"div",10),t._uU(12),t.ALo(13,"mytranslate"),t.qZA()()()(),t.TgZ(14,"div",11)(15,"a",12),t.ALo(16,"mylocalize"),t.TgZ(17,"div",7)(18,"span",8),t._UZ(19,"lucide-icon",13),t.qZA(),t.TgZ(20,"div",10),t._uU(21),t.ALo(22,"mytranslate"),t.qZA()()()(),t.TgZ(23,"div",14)(24,"a",15),t.ALo(25,"mylocalize"),t.TgZ(26,"div",7)(27,"span",8),t._UZ(28,"lucide-icon",16),t.qZA(),t.TgZ(29,"div",10),t._uU(30),t.ALo(31,"mytranslate"),t.qZA()()()(),t.TgZ(32,"div",17)(33,"a",18),t.ALo(34,"mylocalize"),t.TgZ(35,"div",7)(36,"span",8),t._UZ(37,"lucide-icon",19),t.qZA(),t.TgZ(38,"div",10),t._uU(39),t.ALo(40,"mytranslate"),t.qZA()()()(),t.YNc(41,et,15,8,"div",20),t.qZA(),t.TgZ(42,"div",21)(43,"div",22)(44,"div",23),t._UZ(45,"textarea",24),t.TgZ(46,"a",25),t.O4$(),t.TgZ(47,"svg",26),t._UZ(48,"line",27)(49,"polygon",28),t.qZA()()()()(),t.kcU(),t.TgZ(50,"div",29),t._uU(51," Tr\u1ee3 l\xfd Azota: Y\xeau c\u1ea7u t\xf4i l\xe0m b\u1ea5t k\u1ef3 t\xe1c v\u1ee5 n\xe0o b\u1ea1n mu\u1ed1n tr\xean Azota b\u1eb1ng ng\xf4n ng\u1eef t\u1ef1 nhi\xean "),t.qZA()(),t.YNc(52,ot,18,11,"div",30),t.qZA()()),2&a&&(t.Q6J("headerTitle","dashboard"),t.xp6(2),t.Q6J("ngIf",!r.isMobileWebView),t.xp6(4),t.Q6J("routerLink",t.VKq(28,S,t.lcZ(7,12,"/admin/testbank/document-management/1/0/1"))),t.xp6(6),t.hij(" ",t.lcZ(13,14,"lang_auto_bai_tap")," "),t.xp6(3),t.Q6J("routerLink",t.VKq(30,S,t.lcZ(16,16,"/admin/testbank/document-management/0/0/1"))),t.xp6(6),t.hij(" ",t.lcZ(22,18,"lang_auto_de_thi")," "),t.xp6(3),t.Q6J("routerLink",t.VKq(32,S,t.lcZ(25,20,"/admin/student/manage-class/0"))),t.xp6(6),t.hij(" ",t.lcZ(31,22,"lang_auto_quan_ly_lop")," "),t.xp6(3),t.Q6J("routerLink",t.VKq(34,S,t.lcZ(34,24,"/admin/teacher-group/0/0"))),t.xp6(6),t.hij(" ",t.lcZ(40,26,"lang_auto_doi_nhom")," "),t.xp6(2),t.Q6J("ngIf",r.showTestMarketButton&&!r.isMobileWebView),t.xp6(11),t.Q6J("ngIf",!r.isMobileWebView))},dependencies:[s.rH,e.O5,E.gM,C._,i.Nh5,N,P,T.mp,T.bT],encapsulation:2}),o})();var nt=n(91350);function rt(o,c){1&o&&t._UZ(0,"azt-loading-effect")}function it(o,c){1&o&&t._UZ(0,"footer-info-menu")}const st=function(o){return[o]};function ct(o,c){if(1&o){const a=t.EpF();t.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"h3",5),t._uU(4),t.ALo(5,"mytranslate"),t.qZA(),t.TgZ(6,"p",6),t._UZ(7,"span",7),t.ALo(8,"mytranslate"),t._uU(9,"\xa0"),t.TgZ(10,"a",8),t._uU(11),t.ALo(12,"mytranslate"),t.qZA()(),t.TgZ(13,"button",9),t.ALo(14,"mylocalize"),t.O4$(),t.TgZ(15,"svg",10),t._UZ(16,"line",11)(17,"line",12),t.qZA(),t.kcU(),t.TgZ(18,"span",13),t._uU(19),t.ALo(20,"mytranslate"),t.qZA()(),t.TgZ(21,"p",14),t._uU(22),t.ALo(23,"mytranslate"),t.qZA(),t.TgZ(24,"button",15),t.NdJ("click",function(){t.CHM(a);const d=t.oxw();return t.KtG(d.redirectToGlobalBank())}),t.O4$(),t.TgZ(25,"svg",10),t._UZ(26,"path",16)(27,"path",17)(28,"path",18)(29,"path",19),t.qZA(),t.kcU(),t.TgZ(30,"span",13),t._uU(31),t.ALo(32,"mytranslate"),t.qZA()()()()(),t.TgZ(33,"div",20),t.YNc(34,it,1,0,"footer-info-menu",21),t._UZ(35,"footer-admin-menu"),t.qZA()}if(2&o){const a=t.oxw();t.xp6(4),t.hij(" ",t.lcZ(5,8,"lang_auto_chao_mung_ban_den_voi_azota")," "),t.xp6(3),t.Q6J("innerHTML",t.lcZ(8,10,"lang_auto_ban_co_the_tao"),t.oJD),t.xp6(4),t.Oqu(t.lcZ(12,12,"lang_auto_tim_hieu_them")),t.xp6(2),t.Q6J("routerLink",t.VKq(22,st,t.lcZ(14,14,"/admin/testbank/create-new-document/0"))),t.xp6(6),t.hij(" ",t.lcZ(20,16,"lang_auto_tao_moi"),""),t.xp6(3),t.Oqu(t.lcZ(23,18,"lang_auto_hoac")),t.xp6(9),t.hij(" ",t.lcZ(32,20,"lang_testbank_test_list_create_new_from_matrix_bank"),""),t.xp6(3),t.Q6J("ngIf",!a.isMobileWebView)}}let lt=(()=>{class o extends D.Q{ngOnInit(){this.initStatusObj(),this.aztDashboardDataService.isWelcomeDashboard(!1).subscribe(a=>{a||a||this.aztDashboardDataService.checkRedirectDashboard(!1),this.stopStatusObj()}),super.ngOnInit()}redirectToGlobalBank(){this.commonService.myNavigationWithQueryString("/admin/testbank/matrix-list/0/1","?backto="+encodeURIComponent("/admin/dashboard-welcome"))}constructor(a,r){super(),this.aztDashboardDataService=a,this.dialog=r}}return o.\u0275fac=function(a){return new(a||o)(t.Y36(O),t.Y36(g.uw))},o.\u0275cmp=t.Xpm({type:o,selectors:[["dashboard-welcome"]],features:[t.qOj],decls:4,vars:2,consts:[[4,"ngIf","ngIfElse"],["doneLoading",""],[1,"app"],[1,"container"],[1,"dashboard"],[1,"dashboard-title"],[1,"dashboard-desc"],[3,"innerHTML"],["azt-track-service","dashboard-welcome-pZ4vNL2WA","href","https://docs.azota.vn","target","_blank",1,"btn-text-primary"],["azt-track-service","dashboard-welcome-rOUx53afllU",1,"btn","btn-primary",3,"routerLink"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["x1","12","y1","5","x2","12","y2","19"],["x1","5","y1","12","x2","19","y2","12"],[2,"margin-left","5px"],[2,"padding","20px"],["azt-track-service","dashboard-welcome-Av9Wffvci",1,"btn","btn-primary",3,"click"],["d","m16 6 4 14"],["d","M12 6v14"],["d","M8 8v12"],["d","M4 4v16"],[1,"absolute","left-0","bottom-0","index"],[4,"ngIf"]],template:function(a,r){if(1&a&&(t.TgZ(0,"teacher-layout"),t.YNc(1,rt,1,0,"azt-loading-effect",0),t.YNc(2,ct,36,24,"ng-template",null,1,t.W1O),t.qZA()),2&a){const d=t.MAs(3);t.xp6(1),t.Q6J("ngIf",r.statusObj.loading)("ngIfElse",d)}},dependencies:[s.rH,e.O5,nt.Q,C._,N,P,T.mp,T.bT],styles:[".dashboard[_ngcontent-%COMP%]{text-align:center}.dashboard-title[_ngcontent-%COMP%]{font-size:20px;margin-bottom:20px}.app[_ngcontent-%COMP%]{margin-top:100px}.dashboard-desc[_ngcontent-%COMP%]{margin:0 auto 25px;max-width:500px}.btn-azt-primary[_ngcontent-%COMP%]{text-transform:inherit;font-size:16px;font-weight:400;padding:5px 50px}.mt-150[_ngcontent-%COMP%]{margin-top:150px}"]}),o})();const dt=[{component:(()=>{class o extends D.Q{}return o.\u0275fac=function(){let c;return function(r){return(c||(c=t.n5z(o)))(r||o)}}(),o.\u0275cmp=t.Xpm({type:o,selectors:[["app-dashboard"]],features:[t.qOj],decls:1,vars:0,template:function(a,r){1&a&&t._UZ(0,"router-outlet")},dependencies:[s.lC],encapsulation:2}),o})(),path:"",canActivate:[A.J],children:[{path:"dashboard-welcome",component:lt},{path:"dashboard",component:at},{path:"dashboard-v1",redirectTo:"dashboard",pathMatch:"full"}]}];let ut=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.Bz.forChild(dt),s.Bz,b.fQ]}),o})(),mt=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.Bz,e.ez,Z.j,h.kb,f.Z_,_.u5,_.UX,g.Is,u.Z,l.xC,M.QG,y.h,k.W,m.d,ut,i.qyJ.pick(i.ciZ)]}),o})()}}]);