"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[223],{91350:(k,A,n)=>{n.d(A,{Q:()=>D});var v=n(55330),e=n(94650),_=n(36895),h=n(73162),c=n(1033);function f(u,x){if(1&u&&(e.O4$(),e.kcU(),e._UZ(0,"mat-progress-bar",10)),2&u){const m=e.oxw();e.Q6J("value",m.progress_value)}}function l(u,x){if(1&u&&(e.O4$(),e.kcU(),e.TgZ(0,"div",11),e._uU(1),e.qZA()),2&u){const m=e.oxw();e.xp6(1),e.Oqu(m.getMsg())}}function d(u,x){if(1&u){const m=e.EpF();e.O4$(),e.kcU(),e.TgZ(0,"div",12),e._uU(1),e.ALo(2,"mytranslate"),e.TgZ(3,"a",13),e.NdJ("click",function(){e.CHM(m);const Z=e.oxw();return e.KtG(Z.isShowErrorsBox=!Z.isShowErrorsBox)}),e._uU(4),e.ALo(5,"mytranslate"),e.ALo(6,"mytranslate"),e.qZA()()}if(2&u){const m=e.oxw();e.xp6(1),e.hij(" ",e.lcZ(2,2,"lang_auto_da_xay_ra_loi_trong_qua_trinh_trao_doi_du_lieu_")," "),e.xp6(3),e.hij(" ",m.isShowErrorsBox?e.lcZ(5,4,"lang_auto_an_chi_tiet"):e.lcZ(6,6,"lang_auto_xem_chi_tiet")," ")}}function y(u,x){if(1&u&&(e.O4$(),e.kcU(),e.TgZ(0,"div",12),e._uU(1),e.qZA()),2&u){const m=e.oxw();e.xp6(1),e.hij(" ",m.LogErrorsRequest," ")}}function w(u,x){if(1&u&&(e.O4$(),e.kcU(),e.TgZ(0,"div",14),e._uU(1),e.ALo(2,"mytranslate"),e.qZA()),2&u){const m=e.oxw();e.xp6(1),e.Oqu(m.customText?m.customText:e.lcZ(2,1,"lang_auto_dang_tai_du_lieu")+"...")}}let D=(()=>{class u extends v.Q{constructor(){super(...arguments),this.progress_value=-1,this.LogErrorsRequest=!1,this.customText="",this.isShowErrorsBox=!1}getMsg(){var m,b;let Z="";return 100==this.progress_value||0==this.progress_value?(Z=null!==(m=this.commonService.myTranslateInstant("lang_auto_dang_xu_ly"))&&void 0!==m?m:"",`${Z} ...`):(Z=null!==(b=this.commonService.myTranslateInstant("lang_auto_dang_tai_tep_tin_len_he_thong"))&&void 0!==b?b:"",`${Z}... ${this.progress_value} %`)}}return u.\u0275fac=function(){let x;return function(b){return(x||(x=e.n5z(u)))(b||u)}}(),u.\u0275cmp=e.Xpm({type:u,selectors:[["azt-loading-effect"]],inputs:{progress_value:"progress_value",LogErrorsRequest:"LogErrorsRequest",customText:"customText"},features:[e.qOj],decls:12,vars:5,consts:[[1,"box-loading","h-full"],[1,"text-center","py-4"],["version","1.1","id","jobing-j-drawit","id","Layer_1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","x","0px","y","0px","viewBox","0 0 109 92.9",0,"xml","space","preserve",1,"w-12","mx-auto",2,"enable-background","new 0 0 109 92.9"],["d","M90.8,52c3.5,6.2,7.1,11.7,9.8,17.7c4.4,9.7-2.9,20.7-13.8,20.9c-11.8,0.2-23.7,0.2-35.5,0 c-11-0.1-17.6-12.2-12-21.7c0.4-0.8,1.8-1.4,2.7-1.4c9.9-0.1,19.7-0.1,29.6-0.1c9.8,0,15.9-4.6,18.7-14C90.4,53.2,90.5,52.9,90.8,52 z",1,"azt-svg-loading","jobing-j"],["d","M39.6,90.3c-6.8,0-13.8,0.8-20.5-0.2c-9.7-1.4-15-12.8-10.3-21.3c5.9-10.9,12.1-21.6,18.5-32.2 c5.5-9,18.6-8.7,24.2,0.2c0.7,1.1,0.8,1.9,0.1,3.1C46.7,48.3,42,57,36.8,65.3c-5.3,8.4-3.8,18.8,2.5,24.6 C39.5,89.9,39.5,90.2,39.6,90.3z",1,"azt-svg-loading","jobing-j"],["d","M32.5,27.3c3.3-5.7,6.1-11,9.4-16c5.9-9.1,19.4-9.2,25.1,0c6.5,10.4,12.6,21,18.3,31.7 c4.8,9-1.5,19.9-11.5,20.7c-1.6,0.1-2.6-0.2-3.5-1.8c-4.8-8.6-9.8-17.1-14.7-25.6c-4.7-8.3-12.5-11.6-21.7-9.2 C33.6,27.1,33.3,27.1,32.5,27.3z",1,"azt-svg-loading","jobing-j"],["style","margin-bottom: 30px; border-radius: 5px","mode","buffer",3,"value",4,"ngIf"],["class","note text-center font-weight-bold",4,"ngIf","ngIfElse"],["class","alert alert-danger mt-3","role","alert",4,"ngIf"],["notLoading",""],["mode","buffer",2,"margin-bottom","30px","border-radius","5px",3,"value"],[1,"note","text-center","font-weight-bold"],["role","alert",1,"alert","alert-danger","mt-3"],["azt-track-service","loading-effect-5TYv52U-wgq","href","javscript:void(0)",3,"click"],[1,"note","text-center","font-medium"]],template:function(m,b){if(1&m&&(e.TgZ(0,"div",0)(1,"div",1),e.O4$(),e.TgZ(2,"svg",2),e._UZ(3,"path",3)(4,"path",4)(5,"path",5),e.qZA()(),e.YNc(6,f,1,1,"mat-progress-bar",6),e.YNc(7,l,2,1,"div",7),e.YNc(8,d,7,8,"div",8),e.YNc(9,y,2,1,"div",8),e.YNc(10,w,3,3,"ng-template",null,9,e.W1O),e.qZA()),2&m){const Z=e.MAs(11);e.xp6(6),e.Q6J("ngIf",-1!=b.progress_value),e.xp6(1),e.Q6J("ngIf",-1!=b.progress_value)("ngIfElse",Z),e.xp6(1),e.Q6J("ngIf",!1!==b.LogErrorsRequest),e.xp6(1),e.Q6J("ngIf",b.isShowErrorsBox)}},dependencies:[_.O5,h.pW,c.bT],encapsulation:2}),u})()},45668:(k,A,n)=>{n.d(A,{J:()=>h});var v=n(94650),e=n(76056),_=n(4307);let h=(()=>{class c{constructor(l,d){this.baseApiService=l,this.redirectService=d}canActivate(l,d){return!!this.baseApiService.isLogin()||(this.redirectService.redirectLoginAnonymous(d.url),!1)}canActivateChild(l,d){return this.canActivate(l,d)}canLoad(l){const d=`/${l.path}`;return!!this.baseApiService.isLogin()||(this.redirectService.redirectLoginByReturnUrl(d),!1)}}return c.\u0275fac=function(l){return new(l||c)(v.LFG(e._),v.LFG(_.V))},c.\u0275prov=v.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},25229:(k,A,n)=>{n.d(A,{Z:()=>c});var v=n(94650),e=n(60940),_=n(34782),h=n(18752);let c=(()=>{class f{constructor(d,y,w){this.commonService=d,this.browserStorageService=y,this.testMarketQuestionService=w,this.actionTextKey="azt_ab_testing_key",this.maxActionTextLength=2}getCurrentAbTestingIndex(){var d=this.browserStorageService.getSimpleStorage(this.actionTextKey);return null==d&&(d=this.commonService.getRandomNumber(0,this.maxActionTextLength-1).toString(),this.browserStorageService.saveSimpleStorage(this.actionTextKey,d)),Number(d)}sendLogShareQuestion(d){let y={action:d+" "+this.getCurrentAbTestingIndex()};this.testMarketQuestionService.apiTestMarketQuestionsLogsPost(y).subscribe(w=>{})}}return f.\u0275fac=function(d){return new(d||f)(v.LFG(e.v),v.LFG(_.z),v.LFG(h.Q_))},f.\u0275prov=v.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})()},41752:(k,A,n)=>{n.d(A,{D:()=>h});var v=n(92340),e=n(94650),_=n(58914);let h=(()=>{class c{constructor(l){this.configService=l}getCurrentVersion(){return v.N.versionTime}getGlobalNotice(){return this.configService.getConfig("globalNotice")}getEnvValue(l){return this.configService.getConfig(l)}getLinkEmbedDocument(l){var d=this.configService.getConfig("docView");return d&&"MICROSOFT"!=d?`https://docs.google.com/viewer?url=${l}&embedded=true`:`https://view.officeapps.live.com/op/embed.aspx?src=${l}`}}return c.\u0275fac=function(l){return new(l||c)(e.LFG(_.E))},c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},43223:(k,A,n)=>{n.r(A),n.d(A,{DashboardModule:()=>dt});var v=n(59650),e=n(36895),_=n(24006),h=n(76619),c=n(34793),f=n(39102),l=n(93194),d=n(1737),y=n(43189),w=n(63728),D=n(47470),u=n(75658),x=n(3974),m=n(8785),b=n(51178),Z=n(45668),L=n(55330),t=n(94650),B=n(50727),R=n(69751),P=n(60940),z=n(18752),Q=n(34782);let O=(()=>{class o{constructor(a,r,s,g){this.commonService=a,this.dialog=r,this.dashboardService=s,this.browserStorageService=g,this.subscriptions=new B.w0,this.dashboardDataStorageKey="azt_dashboard_data"}isWelcomeDashboard(a){return new R.y(r=>{this.getDashboardData(a,(s,g)=>{if(s&&!g){var p=1==Number(s.useWelcomeDashboard);r.next(p),r.complete()}else r.next(!1),r.complete()})})}checkRedirectDashboard(a){this.commonService.myNavigation(a?"/admin/dashboard-welcome":"/admin/dashboard")}getDashboardData(a,r){var s=this.browserStorageService.getSimpleSessionStorage(this.dashboardDataStorageKey);let g=s?this.commonService.castJsonToObj(s):void 0;a&&g?r(g,""):this.subscriptions.add(this.dashboardService.apiDashboardGetObjGet().subscribe(p=>{var S;1==p.success&&p.data?(this.browserStorageService.saveSimpleSessionStorage(this.dashboardDataStorageKey,this.commonService.serializeJson(p.data)),r(p.data,"")):(this.browserStorageService.removeSimpleSessionStorage(this.dashboardDataStorageKey),r({},null!==(S=p.message)&&void 0!==S?S:""))}))}}return o.\u0275fac=function(a){return new(a||o)(t.LFG(P.v),t.LFG(h.uw),t.LFG(z.sp),t.LFG(Q.z))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var W=n(25229),K=n(92114),C=n(10266),E=n(4947),q=n(85736),T=n(1033);let U=(()=>{class o{constructor(a,r){this.dialogRef=a,this.data=r,this.isNotShowAgain=new _.p4(!1)}ngOnInit(){}onNoClick(){this.dialogRef.close(this.isNotShowAgain.value)}}return o.\u0275fac=function(a){return new(a||o)(t.Y36(h.so),t.Y36(h.WI))},o.\u0275cmp=t.Xpm({type:o,selectors:[["new-feature-notice-dialog"]],decls:14,vars:11,consts:[[1,"box","p-5"],[3,"innerHTML"],["align","end"],[1,"flex","items-center","w-full",2,"justify-content","space-between"],[1,"form-check"],["id","is-not-show-again","type","checkbox",1,"form-check-input",3,"formControl"],["for","is-not-show-again",1,"form-check-label"],["azt-track-service","new-feature-iAX2JunJEbn",1,"btn","btn-primary","w-24",3,"mat-dialog-close","click"]],template:function(a,r){1&a&&(t.TgZ(0,"div",0)(1,"azt-mat-dialog-content"),t._UZ(2,"div",1),t.ALo(3,"safeAdminHtmlContent"),t.qZA(),t.TgZ(4,"mat-dialog-actions",2)(5,"div",3)(6,"div",4),t._UZ(7,"input",5),t.TgZ(8,"label",6),t._uU(9),t.ALo(10,"mytranslate"),t.qZA()(),t.TgZ(11,"button",7),t.NdJ("click",function(){return r.onNoClick()}),t._uU(12),t.ALo(13,"mytranslate"),t.qZA()()()()),2&a&&(t.xp6(2),t.Q6J("innerHTML",t.lcZ(3,5,r.data.description),t.oJD),t.xp6(5),t.Q6J("formControl",r.isNotShowAgain),t.xp6(2),t.hij(" ",t.lcZ(10,7,"lang_testbank_create_exam_width_file_pdf_not_view")," "),t.xp6(2),t.Q6J("mat-dialog-close",r.isNotShowAgain.value),t.xp6(1),t.Oqu(t.lcZ(13,9,"lang_buttom_close")))},dependencies:[h.ZT,h.H8,_.Wl,_.JJ,_.oH,q.O,T.bT,T.LW],encapsulation:2}),o})();var G=n(41752),Y=n(76056),F=n(28255);const j=function(o){return[o]};let I=(()=>{class o extends L.Q{constructor(a,r,s,g){super(),this.envService=a,this.dialog=r,this.baseApiService=s,this.globalNoticeService=g,this.currentVersion="",this.checkFeatureNotice=!1,this.user_obj={},this.isTeacherRole=!1}getNewFeatureNotice(a){this.initStatusObj(),this.subscriptions.add(this.globalNoticeService.apiGlobalNoticeGetObjGet().subscribe(r=>{var s,g,p;1==r.success?(null!==(s=r.data)&&void 0!==s&&s.obj?(this.checkFeatureNotice=!0,this.dialog.open(U,{width:"750px",data:null===(g=r.data)||void 0===g?void 0:g.obj,restoreFocus:!1}).afterClosed().subscribe(J=>{if(J)try{this.setMarkAsReadFeaturesNotice()}catch(ut){console.log(ut)}})):this.checkFeatureNotice=!1,this.successStatusObj()):this.errorStatusObj(null!==(p=r.message)&&void 0!==p?p:"",!0)}))}showNewFeatureNotice(a){this.subscriptions.add(this.globalNoticeService.apiGlobalNoticeGetObjGet(a?1:0).subscribe(r=>{var s,g,p;1==r.success?null!==(s=r.data)&&void 0!==s&&s.obj&&this.dialog.open(U,{width:"750px",data:null===(g=r.data)||void 0===g?void 0:g.obj,restoreFocus:!1}).afterClosed().subscribe(J=>{}):this.errorStatusObj(null!==(p=r.message)&&void 0!==p?p:"",!0)}))}setMarkAsReadFeaturesNotice(){this.subscriptions.add(this.globalNoticeService.apiGlobalNoticeMarkAsReadGet().subscribe(a=>{var r;1==a.success?this.successStatusObj():this.errorStatusObj(null!==(r=a.message)&&void 0!==r?r:"",!0)}))}ngOnInit(){this.initStatusObj(),this.user_obj=this.baseApiService.getUserObj(),this.currentVersion=this.envService.getCurrentVersion(),this.isTeacherRole=this.baseApiService.isTeacherRole(),this.getNewFeatureNotice(0),super.ngOnInit()}}return o.\u0275fac=function(a){return new(a||o)(t.Y36(G.D),t.Y36(h.uw),t.Y36(Y._),t.Y36(z.ID))},o.\u0275cmp=t.Xpm({type:o,selectors:[["footer-info-menu"]],features:[t.qOj],decls:68,vars:32,consts:[[1,"btn","btn-outline-primary","dropdown-toggle","btn-transparent","mb-5","ml-5",3,"matTooltip","matMenuTriggerFor"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["cx","12","cy","12","r","10"],["x1","12","y1","16","x2","12","y2","12"],["x1","12","y1","8","x2","12.01","y2","8"],["dashboardMenu",""],[1,"dropdown-menu","show","w-72","relative"],[1,"dropdown-content"],["azt-track-service","footer-info-menu-4xo_9lVt1J",1,"dropdown-item",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"w-4","h-4","lucide","mr-2"],["d","M16 16h6"],["d","M19 13v6"],["d","M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"],["d","M16.5 9.4 7.55 4.24"],["points","3.29 7 12 12 20.71 7"],["x1","12","y1","22","x2","12","y2","12"],["azt-track-service","footer-info-menu-Mym6pF4eC7","href","https://www.facebook.com/groups/azota.vn","target","_blank",1,"dropdown-item"],["d","M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"],["cx","9","cy","7","r","4"],["d","M22 21v-2a4 4 0 0 0-3-3.87"],["d","M16 3.13a4 4 0 0 1 0 7.75"],["azt-track-service","footer-info-menu-nstjfJK4k1","href","https://www.facebook.com/azotavn","target","_blank",1,"dropdown-item"],["d","M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"],[1,"dropdown-divider","border-slate-200","dark:border-darkmode-400"],["azt-track-service","footer-info-menu-MF6sCK5s_Vh",1,"dropdown-item",3,"routerLink"],["points","16 18 22 12 16 6"],["points","8 6 2 12 8 18"],["azt-track-service","footer-info-menu-LwlklQ67tDO",1,"dropdown-item",3,"routerLink"],["x","2","y","4","width","20","height","5","rx","2"],["d","M12 13v7"],["d","m9 16 3-3 3 3"],["d","M4 9v9a2 2 0 0 0 2 2h2"],["d","M20 9v9a2 2 0 0 1-2 2h-2"],[1,"dropdown-item","hover:bg-white/5"],["d","M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"],["d","m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"],["d","M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"],["d","M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"]],template:function(a,r){if(1&a&&(t.TgZ(0,"button",0),t.ALo(1,"mytranslate"),t.O4$(),t.TgZ(2,"svg",1),t._UZ(3,"circle",2)(4,"line",3)(5,"line",4),t.qZA()(),t.kcU(),t.TgZ(6,"mat-menu",null,5)(8,"div",6)(9,"ul",7)(10,"li")(11,"a",8),t.NdJ("click",function(){return r.showNewFeatureNotice(!0)}),t.O4$(),t.TgZ(12,"svg",9),t._UZ(13,"path",10)(14,"path",11)(15,"path",12)(16,"path",13)(17,"polyline",14)(18,"line",15),t.qZA(),t._uU(19),t.ALo(20,"mytranslate"),t.qZA()(),t.kcU(),t.TgZ(21,"li")(22,"a",16),t.O4$(),t.TgZ(23,"svg",9),t._UZ(24,"path",17)(25,"circle",18)(26,"path",19)(27,"path",20),t.qZA(),t._uU(28),t.ALo(29,"mytranslate"),t.qZA()(),t.kcU(),t.TgZ(30,"li")(31,"a",21),t.O4$(),t.TgZ(32,"svg",9),t._UZ(33,"path",22),t.qZA(),t._uU(34),t.ALo(35,"mytranslate"),t.qZA()(),t.kcU(),t.TgZ(36,"li"),t._UZ(37,"hr",23),t.qZA(),t.TgZ(38,"li")(39,"a",24),t.ALo(40,"mylocalize"),t.O4$(),t.TgZ(41,"svg",9),t._UZ(42,"polyline",25)(43,"polyline",26),t.qZA(),t._uU(44),t.ALo(45,"mytranslate"),t.qZA()(),t.kcU(),t.TgZ(46,"li")(47,"a",27),t.ALo(48,"mylocalize"),t.O4$(),t.TgZ(49,"svg",9),t._UZ(50,"rect",28)(51,"path",29)(52,"path",30)(53,"path",31)(54,"path",32),t.qZA(),t._uU(55),t.ALo(56,"mytranslate"),t.qZA()(),t.kcU(),t.TgZ(57,"li"),t._UZ(58,"hr",23),t.qZA(),t.TgZ(59,"li")(60,"a",33),t.O4$(),t.TgZ(61,"svg",9),t._UZ(62,"path",34)(63,"path",35)(64,"path",36)(65,"path",37),t.qZA(),t._uU(66),t.ALo(67,"mytranslate"),t.qZA()()()()()),2&a){const s=t.MAs(7);t.s9C("matTooltip",t.lcZ(1,10,"lang_auto_cong_dong_ho_tro")),t.Q6J("matMenuTriggerFor",s),t.xp6(19),t.hij(" ",t.lcZ(20,12,"lang_auto_tinh_nang_moi")," "),t.xp6(9),t.hij(" ",t.lcZ(29,14,"lang_auto_cong_dong_ho_tro")," "),t.xp6(6),t.hij(" ",t.lcZ(35,16,"lang_auto_fanpage_azota")," "),t.xp6(5),t.Q6J("routerLink",t.VKq(28,j,t.lcZ(40,18,"/admin/testbank/create-website"))),t.xp6(5),t.hij(" ",t.lcZ(45,20,"lang_auto_own_website")," "),t.xp6(3),t.Q6J("routerLink",t.VKq(30,j,t.lcZ(48,22,"/admin/homework/content-store"))),t.xp6(8),t.hij(" ",t.lcZ(56,24,"lang_auto_content_store")," "),t.xp6(11),t.hij(" ",t.lcZ(67,26,"lang_auto_phien_ban")+": "+r.currentVersion," ")}},dependencies:[c.rH,F.VK,F.p6,C.gM,T.mp,T.bT],encapsulation:2}),o})();var V=n(88386);const $=function(o){return[o]};function H(o,i){1&o&&(t.TgZ(0,"a",1),t.ALo(1,"mylocalize"),t.O4$(),t.TgZ(2,"svg",2),t._UZ(3,"path",3)(4,"circle",4)(5,"path",5)(6,"path",6),t.qZA()()),2&o&&t.Q6J("routerLink",t.VKq(3,$,t.lcZ(1,1,"/super-role/admin-tool")))}let N=(()=>{class o extends L.Q{constructor(a){super(),this.userService=a}ngOnInit(){super.ngOnInit()}}return o.\u0275fac=function(a){return new(a||o)(t.Y36(V.K))},o.\u0275cmp=t.Xpm({type:o,selectors:[["footer-admin-menu"]],features:[t.qOj],decls:1,vars:1,consts:[["azt-track-service","footer-admin-menu-7W4rraHk8","class","btn btn-outline-primary dropdown-toggle btn-transparent mb-5 ml-5",3,"routerLink",4,"ngIf"],["azt-track-service","footer-admin-menu-7W4rraHk8",1,"btn","btn-outline-primary","dropdown-toggle","btn-transparent","mb-5","ml-5",3,"routerLink"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round","icon-name","users","data-lucide","users",1,"lucide-users"],["d","M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"],["cx","9","cy","7","r","4"],["d","M23 21v-2a4 4 0 00-3-3.87"],["d","M16 3.13a4 4 0 010 7.75"]],template:function(a,r){1&a&&t.YNc(0,H,7,5,"a",0),2&a&&t.Q6J("ngIf",r.userService.isSupperAdminRole())},dependencies:[c.rH,e.O5,T.mp],encapsulation:2}),o})();const M=function(o){return[o]};function X(o,i){if(1&o&&(t.TgZ(0,"div",30)(1,"a",31),t.ALo(2,"mylocalize"),t.TgZ(3,"div",32)(4,"div",33)(5,"span",34),t._UZ(6,"lucide-icon",35),t.qZA(),t.TgZ(7,"div",36)(8,"span"),t._uU(9," New "),t.qZA()()(),t.TgZ(10,"span",7),t._UZ(11,"lucide-icon",37),t.qZA(),t.TgZ(12,"div",9),t._uU(13),t.ALo(14,"mytranslate"),t.qZA()()()()),2&o){const a=t.oxw();t.xp6(1),t.Q6J("routerLink",t.VKq(6,M,t.lcZ(2,2,"/admin/test-market/introduce"))),t.xp6(12),t.hij(" ",t.lcZ(14,4,a.randomAction)," ")}}function tt(o,i){1&o&&(t.TgZ(0,"div",38),t._UZ(1,"footer-info-menu"),t.TgZ(2,"button",39),t.ALo(3,"mytranslate"),t.ALo(4,"mylocalize"),t.O4$(),t.TgZ(5,"svg",40),t._UZ(6,"path",41)(7,"path",42)(8,"path",43)(9,"line",44)(10,"line",45),t.qZA()(),t.kcU(),t.TgZ(11,"a",46),t.ALo(12,"mytranslate"),t.O4$(),t.TgZ(13,"svg",40),t._UZ(14,"circle",47)(15,"path",48)(16,"line",49),t.qZA()(),t.kcU(),t._UZ(17,"footer-admin-menu"),t.qZA()),2&o&&(t.xp6(2),t.s9C("matTooltip",t.lcZ(3,3,"lang_auto_thung_rac")),t.Q6J("routerLink",t.VKq(9,M,t.lcZ(4,5,"/admin/trash/0"))),t.xp6(9),t.s9C("matTooltip",t.lcZ(12,7,"lang_auto_huong_dan")))}let et=(()=>{class o extends L.Q{constructor(a,r,s,g){super(),this.dialog=a,this.aztDashboardDataService=r,this.aztAbTestingService=s,this.mobileWebviewService=g,this.showTestMarketButton=!1}testTour(){}ngOnInit(){this.initStatusObj(),this.randomAction=["lang_dashboard_azota_bank_title","lang_dashboard_make_money_title"][this.aztAbTestingService.getCurrentAbTestingIndex()],this.aztAbTestingService.sendLogShareQuestion("view banner"),this.aztDashboardDataService.getDashboardData(!0,(r,s)=>{s?this.showErrorSnack(s):(r.useWelcomeDashboard&&this.aztDashboardDataService.checkRedirectDashboard(!0),this.showTestMarketButton=!!r.showTestMarket)}),this.commonService.translateMetaData({title:"lang_cms_test_dashboard_title",description:"lang_cms_test_dashboard_description",image:"lang_cms_test_image"}),this.mobileWebviewService.sendSimpleMessage("OPEN_MAIN_DASHBOARD"),super.ngOnInit()}}return o.\u0275fac=function(a){return new(a||o)(t.Y36(h.uw),t.Y36(O),t.Y36(W.Z),t.Y36(K.F))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-test-dashboard"]],features:[t.qOj],decls:52,vars:35,consts:[[3,"headerTitle"],[1,"azt-dashboard","w-full","lg:w-80%","mx-auto"],[1,"mb-3","grid","grid-cols-12","sm:gap-10","intro-y","sm:mt-10"],[1,"col-span-12","grid","grid-cols-12","gap-6","mt-8","flex","items-center"],["tourAnchor","azt-tour-1",1,"col-span-6","md:col-span-3","intro-y"],["azt-track-service","dashboard-main-rF6MSAArUsY",3,"routerLink"],[1,"box","p-8","zoom-in"],[1,"block","w-12","h-12","text-primary","mx-auto"],["name","file-text"],[1,"font-medium","text-center","text-base","mt-3"],["tourAnchor","azt-tour-2",1,"col-span-6","md:col-span-3","intro-y"],["azt-track-service","dashboard-main-n5d-c2lLv1K",3,"routerLink"],["name","folder"],["tourAnchor","azt-tour-3",1,"col-span-6","md:col-span-3","intro-y"],["azt-track-service","dashboard-main-4P7SGaAp07c",3,"routerLink"],["name","layers"],["tourAnchor","azt-tour-4",1,"col-span-6","md:col-span-3","intro-y"],["azt-track-service","dashboard-main-7d_U3ZeXpGR",3,"routerLink"],["name","users"],["class","col-span-6 md:col-span-3 intro-y","tourAnchor","azt-tour-5",4,"ngIf"],[1,"intro-y","col-span-12","box","mt-10",2,"display","none"],[1,"flex","flex-col"],[1,"flex","items-center"],["rows","1","placeholder","B\u1ea1n mu\u1ed1n l\xe0m g\xec?...",1,"resize-none","form-control","border-transparent","shadow-none","focus:border-transparent","focus:ring-0",2,"margin","5px","outline","none","border","0","box-shadow","none"],["azt-track-service","dashboard-main-43hyFh5fD","href","javascript:;",1,"w-8","h-8","sm:w-10","sm:h-10","block","text-primary","rounded-full","flex-none","flex","items-center","justify-center","mr-2"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round","icon-name","send","data-lucide","send",1,"lucide","lucide-send","w-4","h-4"],["x1","22","y1","2","x2","11","y2","13"],["points","22 2 15 22 11 13 2 9 22 2"],[1,"col-span-12",2,"margin-top","-35px","margin-left","5px","font-size","13px","color","#a2a2a2","display","none"],["class","absolute left-0 bottom-0 index info-zone",4,"ngIf"],["tourAnchor","azt-tour-5",1,"col-span-6","md:col-span-3","intro-y"],["azt-track-service","dashboard-main-Qv44FAUiKc1",3,"routerLink"],[1,"box","p-8","zoom-in","relative"],[1,"absolute","top-0","left-0","text-danger","p-3","flex","items-center"],[1,"block","w-6","h-6","mx-auto"],["name","star"],[1,"text-sm","text-base","ml-1"],["name","landmark"],[1,"absolute","left-0","bottom-0","index","info-zone"],["azt-track-service","dashboard-main-78XWJErDG4V",1,"btn","btn-outline-primary","dropdown-toggle","btn-transparent","mb-5","ml-5",3,"matTooltip","routerLink"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M3 6h18"],["d","M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"],["d","M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"],["x1","10","y1","11","x2","10","y2","17"],["x1","14","y1","11","x2","14","y2","17"],["azt-track-service","dashboard-main-J6ZAMHq8uVG","href","https://docs.azota.vn/","target","_blank",1,"btn","btn-outline-primary","dropdown-toggle","btn-transparent","mb-5","ml-5",3,"matTooltip"],["cx","12","cy","12","r","10"],["d","M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"],["x1","12","y1","17","x2","12.01","y2","17"]],template:function(a,r){1&a&&(t.TgZ(0,"teacher-layout",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"a",5),t.ALo(6,"mylocalize"),t.TgZ(7,"div",6)(8,"span",7),t._UZ(9,"lucide-icon",8),t.qZA(),t.TgZ(10,"div",9),t._uU(11),t.ALo(12,"mytranslate"),t.qZA()()()(),t.TgZ(13,"div",10)(14,"a",11),t.ALo(15,"mylocalize"),t.TgZ(16,"div",6)(17,"span",7),t._UZ(18,"lucide-icon",12),t.qZA(),t.TgZ(19,"div",9),t._uU(20),t.ALo(21,"mytranslate"),t.qZA()()()(),t.TgZ(22,"div",13)(23,"a",14),t.ALo(24,"mylocalize"),t.TgZ(25,"div",6)(26,"span",7),t._UZ(27,"lucide-icon",15),t.qZA(),t.TgZ(28,"div",9),t._uU(29),t.ALo(30,"mytranslate"),t.qZA()()()(),t.TgZ(31,"div",16)(32,"a",17),t.ALo(33,"mylocalize"),t.TgZ(34,"div",6)(35,"span",7),t._UZ(36,"lucide-icon",18),t.qZA(),t.TgZ(37,"div",9),t._uU(38),t.ALo(39,"mytranslate"),t.qZA()()()(),t.YNc(40,X,15,8,"div",19),t.qZA(),t.TgZ(41,"div",20)(42,"div",21)(43,"div",22),t._UZ(44,"textarea",23),t.TgZ(45,"a",24),t.O4$(),t.TgZ(46,"svg",25),t._UZ(47,"line",26)(48,"polygon",27),t.qZA()()()()(),t.kcU(),t.TgZ(49,"div",28),t._uU(50," Tr\u1ee3 l\xfd Azota: Y\xeau c\u1ea7u t\xf4i l\xe0m b\u1ea5t k\u1ef3 t\xe1c v\u1ee5 n\xe0o b\u1ea1n mu\u1ed1n tr\xean Azota b\u1eb1ng ng\xf4n ng\u1eef t\u1ef1 nhi\xean "),t.qZA()(),t.YNc(51,tt,18,11,"div",29),t.qZA()()),2&a&&(t.Q6J("headerTitle","dashboard"),t.xp6(5),t.Q6J("routerLink",t.VKq(27,M,t.lcZ(6,11,"/admin/testbank/document-management/1/0/1"))),t.xp6(6),t.hij(" ",t.lcZ(12,13,"lang_auto_bai_tap")," "),t.xp6(3),t.Q6J("routerLink",t.VKq(29,M,t.lcZ(15,15,"/admin/testbank/document-management/0/0/1"))),t.xp6(6),t.hij(" ",t.lcZ(21,17,"lang_auto_de_thi")," "),t.xp6(3),t.Q6J("routerLink",t.VKq(31,M,t.lcZ(24,19,"/admin/student/manage-class/0"))),t.xp6(6),t.hij(" ",t.lcZ(30,21,"lang_auto_quan_ly_lop")," "),t.xp6(3),t.Q6J("routerLink",t.VKq(33,M,t.lcZ(33,23,"/admin/teacher-group/0/0"))),t.xp6(6),t.hij(" ",t.lcZ(39,25,"lang_auto_doi_nhom")," "),t.xp6(2),t.Q6J("ngIf",r.showTestMarketButton&&!r.isMobileWebView),t.xp6(11),t.Q6J("ngIf",!r.isMobileWebView))},dependencies:[c.rH,e.O5,C.gM,E._,l.Nh5,I,N,T.mp,T.bT],encapsulation:2}),o})();var ot=n(91350);function at(o,i){1&o&&t._UZ(0,"azt-loading-effect")}function nt(o,i){1&o&&t._UZ(0,"footer-info-menu")}const rt=function(o){return[o]};function it(o,i){if(1&o){const a=t.EpF();t.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"h3",5),t._uU(4),t.ALo(5,"mytranslate"),t.qZA(),t.TgZ(6,"p",6),t._UZ(7,"span",7),t.ALo(8,"mytranslate"),t._uU(9,"\xa0"),t.TgZ(10,"a",8),t._uU(11),t.ALo(12,"mytranslate"),t.qZA()(),t.TgZ(13,"button",9),t.ALo(14,"mylocalize"),t.O4$(),t.TgZ(15,"svg",10),t._UZ(16,"line",11)(17,"line",12),t.qZA(),t.kcU(),t.TgZ(18,"span",13),t._uU(19),t.ALo(20,"mytranslate"),t.qZA()(),t.TgZ(21,"p",14),t._uU(22),t.ALo(23,"mytranslate"),t.qZA(),t.TgZ(24,"button",15),t.NdJ("click",function(){t.CHM(a);const s=t.oxw();return t.KtG(s.redirectToGlobalBank())}),t.O4$(),t.TgZ(25,"svg",10),t._UZ(26,"path",16)(27,"path",17)(28,"path",18)(29,"path",19),t.qZA(),t.kcU(),t.TgZ(30,"span",13),t._uU(31),t.ALo(32,"mytranslate"),t.qZA()()()()(),t.TgZ(33,"div",20),t.YNc(34,nt,1,0,"footer-info-menu",21),t._UZ(35,"footer-admin-menu"),t.qZA()}if(2&o){const a=t.oxw();t.xp6(4),t.hij(" ",t.lcZ(5,8,"lang_auto_chao_mung_ban_den_voi_azota")," "),t.xp6(3),t.Q6J("innerHTML",t.lcZ(8,10,"lang_auto_ban_co_the_tao"),t.oJD),t.xp6(4),t.Oqu(t.lcZ(12,12,"lang_auto_tim_hieu_them")),t.xp6(2),t.Q6J("routerLink",t.VKq(22,rt,t.lcZ(14,14,"/admin/testbank/create-new-document/0"))),t.xp6(6),t.hij(" ",t.lcZ(20,16,"lang_auto_tao_moi"),""),t.xp6(3),t.Oqu(t.lcZ(23,18,"lang_auto_hoac")),t.xp6(9),t.hij(" ",t.lcZ(32,20,"lang_testbank_test_list_create_new_from_matrix_bank"),""),t.xp6(3),t.Q6J("ngIf",!a.isMobileWebView)}}let st=(()=>{class o extends L.Q{constructor(a,r){super(),this.aztDashboardDataService=a,this.dialog=r}ngOnInit(){this.initStatusObj(),this.aztDashboardDataService.isWelcomeDashboard(!1).subscribe(a=>{a||a||this.aztDashboardDataService.checkRedirectDashboard(!1),this.stopStatusObj()}),super.ngOnInit()}redirectToGlobalBank(){this.commonService.myNavigationWithQueryString("/admin/testbank/matrix-list/0/1","?backto="+encodeURIComponent("/admin/dashboard-welcome"))}}return o.\u0275fac=function(a){return new(a||o)(t.Y36(O),t.Y36(h.uw))},o.\u0275cmp=t.Xpm({type:o,selectors:[["dashboard-welcome"]],features:[t.qOj],decls:4,vars:2,consts:[[4,"ngIf","ngIfElse"],["doneLoading",""],[1,"app"],[1,"container"],[1,"dashboard"],[1,"dashboard-title"],[1,"dashboard-desc"],[3,"innerHTML"],["azt-track-service","dashboard-welcome-pZ4vNL2WA","href","https://docs.azota.vn","target","_blank",1,"btn-text-primary"],["azt-track-service","dashboard-welcome-rOUx53afllU",1,"btn","btn-primary",3,"routerLink"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["x1","12","y1","5","x2","12","y2","19"],["x1","5","y1","12","x2","19","y2","12"],[2,"margin-left","5px"],[2,"padding","20px"],["azt-track-service","dashboard-welcome-Av9Wffvci",1,"btn","btn-primary",3,"click"],["d","m16 6 4 14"],["d","M12 6v14"],["d","M8 8v12"],["d","M4 4v16"],[1,"absolute","left-0","bottom-0","index"],[4,"ngIf"]],template:function(a,r){if(1&a&&(t.TgZ(0,"teacher-layout"),t.YNc(1,at,1,0,"azt-loading-effect",0),t.YNc(2,it,36,24,"ng-template",null,1,t.W1O),t.qZA()),2&a){const s=t.MAs(3);t.xp6(1),t.Q6J("ngIf",r.statusObj.loading)("ngIfElse",s)}},dependencies:[c.rH,e.O5,ot.Q,E._,I,N,T.mp,T.bT],styles:[".dashboard[_ngcontent-%COMP%]{text-align:center}.dashboard-title[_ngcontent-%COMP%]{font-size:20px;margin-bottom:20px}.app[_ngcontent-%COMP%]{margin-top:100px}.dashboard-desc[_ngcontent-%COMP%]{margin:0 auto 25px;max-width:500px}.btn-azt-primary[_ngcontent-%COMP%]{text-transform:inherit;font-size:16px;font-weight:400;padding:5px 50px}.mt-150[_ngcontent-%COMP%]{margin-top:150px}"]}),o})();const ct=[{component:(()=>{class o extends L.Q{}return o.\u0275fac=function(){let i;return function(r){return(i||(i=t.n5z(o)))(r||o)}}(),o.\u0275cmp=t.Xpm({type:o,selectors:[["app-dashboard"]],features:[t.qOj],decls:1,vars:0,template:function(a,r){1&a&&t._UZ(0,"router-outlet")},dependencies:[c.lC],encapsulation:2}),o})(),path:"",canActivate:[Z.J],children:[{path:"dashboard-welcome",component:st},{path:"dashboard",component:et},{path:"dashboard-v1",redirectTo:"dashboard",pathMatch:"full"}]}];let lt=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[c.Bz.forChild(ct),c.Bz,b.fQ]}),o})(),dt=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[c.Bz,e.ez,x.j,v.kb,f.Z_,_.u5,_.UX,h.Is,u.Z,d.xC,w.QG,y.h,D.W,m.d,lt,l.qyJ.pick(l.ciZ)]}),o})()}}]);