"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[750],{30251:(y,f,a)=>{a.d(f,{R:()=>L});var p=a(39621),e=a(65879),g=a(96814),m=a(19347),s=a(95545);const _=["aztDialogContentBox"],i=function(b){return{"width.px":b,"height.%":100}},h=["*"];let L=(()=>{class b extends p.Q{checkHeightOfElement(){if(this.aztDialogContentBox){var c=this.aztDialogContentBox.nativeElement.querySelector("."+this.contentBoxClassName);if(c){let v=Math.round(window.innerHeight*this.defaultHeight/100),d=c.getBoundingClientRect().height+1;this.aztDialogContentBox.nativeElement.style.height=(d<v?d:v)+"px",this.aztDialogContentBox.nativeElement.style.maxHeight="85vh"}}}ngAfterViewChecked(){setTimeout(()=>{this.ngZone.runOutsideAngular(()=>{this.checkHeightOfElement()})},0)}constructor(c){super(),this.ngZone=c,this.defaultHeight=85,this.defaultWidth=0,this.contentBoxClassName="azt-mat-dialog-content-box"}}return b.\u0275fac=function(c){return new(c||b)(e.Y36(e.R0b))},b.\u0275cmp=e.Xpm({type:b,selectors:[["azt-mat-dialog-content"]],viewQuery:function(c,v){if(1&c&&e.Gf(_,5),2&c){let d;e.iGM(d=e.CRH())&&(v.aztDialogContentBox=d.first)}},inputs:{defaultHeight:"defaultHeight",defaultWidth:"defaultWidth"},features:[e.qOj],ngContentSelectors:h,decls:5,vars:6,consts:[["aztDialogContentBox",""],["pointerEventsMethod","scrollbar",3,"visibility","ngStyle"]],template:function(c,v){1&c&&(e.F$t(),e.TgZ(0,"mat-dialog-content",null,0)(2,"ng-scrollbar",1)(3,"div"),e.Hsn(4),e.qZA()()()),2&c&&(e.xp6(2),e.Q6J("visibility","hover")("ngStyle",e.VKq(4,i,v.defaultWidth||"auto")),e.xp6(1),e.Tol(v.contentBoxClassName))},dependencies:[g.PC,m.xY,s.KC],encapsulation:2}),b})()},5647:(y,f,a)=>{a.d(f,{l:()=>D});var p=a(39621),e=a(65879),g=a(96814),m=a(16007),s=a(91190);function _(c,v){if(1&c&&(e.O4$(),e.kcU(),e._UZ(0,"mat-progress-bar",10)),2&c){const d=e.oxw();e.Q6J("value",d.progress_value)}}function i(c,v){if(1&c&&(e.O4$(),e.kcU(),e.TgZ(0,"div",11),e._uU(1),e.qZA()),2&c){const d=e.oxw();e.xp6(1),e.Oqu(d.getMsg())}}function h(c,v){if(1&c){const d=e.EpF();e.O4$(),e.kcU(),e.TgZ(0,"div",12),e._uU(1),e.ALo(2,"mytranslate"),e.TgZ(3,"a",13),e.NdJ("click",function(){e.CHM(d);const C=e.oxw();return e.KtG(C.isShowErrorsBox=!C.isShowErrorsBox)}),e._uU(4),e.ALo(5,"mytranslate"),e.ALo(6,"mytranslate"),e.qZA()()}if(2&c){const d=e.oxw();e.xp6(1),e.hij(" ",e.lcZ(2,2,"lang_auto_da_xay_ra_loi_trong_qua_trinh_trao_doi_du_lieu_")," "),e.xp6(3),e.hij(" ",d.isShowErrorsBox?e.lcZ(5,4,"lang_auto_an_chi_tiet"):e.lcZ(6,6,"lang_auto_xem_chi_tiet")," ")}}function L(c,v){if(1&c&&(e.O4$(),e.kcU(),e.TgZ(0,"div",12),e._uU(1),e.qZA()),2&c){const d=e.oxw();e.xp6(1),e.hij(" ",d.LogErrorsRequest," ")}}function b(c,v){if(1&c&&(e.O4$(),e.kcU(),e.TgZ(0,"div",14),e._uU(1),e.ALo(2,"mytranslate"),e.qZA()),2&c){const d=e.oxw();e.xp6(1),e.Oqu(d.customText?d.customText:e.lcZ(2,1,"lang_auto_dang_tai_du_lieu")+"...")}}let D=(()=>{class c extends p.Q{constructor(){super(...arguments),this.progress_value=-1,this.LogErrorsRequest=!1,this.customText="",this.isShowErrorsBox=!1}getMsg(){let d="";return 100==this.progress_value||0==this.progress_value?(d=this.commonService.myTranslateInstant("lang_auto_dang_xu_ly")??"",`${d} ...`):(d=this.commonService.myTranslateInstant("lang_auto_dang_tai_tep_tin_len_he_thong")??"",`${d}... ${this.progress_value} %`)}}return c.\u0275fac=function(){let v;return function(Z){return(v||(v=e.n5z(c)))(Z||c)}}(),c.\u0275cmp=e.Xpm({type:c,selectors:[["azt-loading-effect"]],inputs:{progress_value:"progress_value",LogErrorsRequest:"LogErrorsRequest",customText:"customText"},features:[e.qOj],decls:12,vars:5,consts:[[1,"box-loading","h-full"],[1,"text-center","py-4"],["version","1.1","id","jobing-j-drawit","id","Layer_1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","x","0px","y","0px","viewBox","0 0 109 92.9",0,"xml","space","preserve",1,"w-12","mx-auto",2,"enable-background","new 0 0 109 92.9"],["d","M90.8,52c3.5,6.2,7.1,11.7,9.8,17.7c4.4,9.7-2.9,20.7-13.8,20.9c-11.8,0.2-23.7,0.2-35.5,0 c-11-0.1-17.6-12.2-12-21.7c0.4-0.8,1.8-1.4,2.7-1.4c9.9-0.1,19.7-0.1,29.6-0.1c9.8,0,15.9-4.6,18.7-14C90.4,53.2,90.5,52.9,90.8,52 z",1,"azt-svg-loading","jobing-j"],["d","M39.6,90.3c-6.8,0-13.8,0.8-20.5-0.2c-9.7-1.4-15-12.8-10.3-21.3c5.9-10.9,12.1-21.6,18.5-32.2 c5.5-9,18.6-8.7,24.2,0.2c0.7,1.1,0.8,1.9,0.1,3.1C46.7,48.3,42,57,36.8,65.3c-5.3,8.4-3.8,18.8,2.5,24.6 C39.5,89.9,39.5,90.2,39.6,90.3z",1,"azt-svg-loading","jobing-j"],["d","M32.5,27.3c3.3-5.7,6.1-11,9.4-16c5.9-9.1,19.4-9.2,25.1,0c6.5,10.4,12.6,21,18.3,31.7 c4.8,9-1.5,19.9-11.5,20.7c-1.6,0.1-2.6-0.2-3.5-1.8c-4.8-8.6-9.8-17.1-14.7-25.6c-4.7-8.3-12.5-11.6-21.7-9.2 C33.6,27.1,33.3,27.1,32.5,27.3z",1,"azt-svg-loading","jobing-j"],["style","margin-bottom: 30px; border-radius: 5px","mode","buffer",3,"value",4,"ngIf"],["class","note text-center font-weight-bold",4,"ngIf","ngIfElse"],["class","alert alert-danger mt-3","role","alert",4,"ngIf"],["notLoading",""],["mode","buffer",2,"margin-bottom","30px","border-radius","5px",3,"value"],[1,"note","text-center","font-weight-bold"],["role","alert",1,"alert","alert-danger","mt-3"],["azt-track-service","loading-effect-5TYv52U-wgq","href","javscript:void(0)",3,"click"],[1,"note","text-center","font-medium"]],template:function(d,Z){if(1&d&&(e.TgZ(0,"div",0)(1,"div",1),e.O4$(),e.TgZ(2,"svg",2),e._UZ(3,"path",3)(4,"path",4)(5,"path",5),e.qZA()(),e.YNc(6,_,1,1,"mat-progress-bar",6),e.YNc(7,i,2,1,"div",7),e.YNc(8,h,7,8,"div",8),e.YNc(9,L,2,1,"div",8),e.YNc(10,b,3,3,"ng-template",null,9,e.W1O),e.qZA()),2&d){const C=e.MAs(11);e.xp6(6),e.Q6J("ngIf",-1!=Z.progress_value),e.xp6(1),e.Q6J("ngIf",-1!=Z.progress_value)("ngIfElse",C),e.xp6(1),e.Q6J("ngIf",!1!==Z.LogErrorsRequest),e.xp6(1),e.Q6J("ngIf",Z.isShowErrorsBox)}},dependencies:[g.O5,m.pW,s.JV],encapsulation:2}),c})()},91594:(y,f,a)=>{a.d(f,{J:()=>m});var p=a(65879),e=a(63934),g=a(68749);let m=(()=>{class s{constructor(i,h){this.userService=i,this.redirectService=h}canActivate(i,h){return!!this.userService.isLogin()||(this.redirectService.redirectLoginAnonymous(h.url),!1)}canActivateChild(i,h){return this.canActivate(i,h)}canLoad(i){const h=`/${i.path}`;return!!this.userService.isLogin()||(this.redirectService.redirectLoginByReturnUrl(h),!1)}}return s.\u0275fac=function(i){return new(i||s)(p.LFG(e.U),p.LFG(g.z))},s.\u0275prov=p.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},90241:(y,f,a)=>{a.d(f,{e:()=>m});var p=a(19347),e=a(39621),g=a(65879);let m=(()=>{class s extends e.Q{constructor(i,h){super(),this.data=i,this.dialogRef=h}}return s.\u0275fac=function(i){return new(i||s)(g.Y36(p.WI),g.Y36(p.so))},s.\u0275cmp=g.Xpm({type:s,selectors:[["ng-component"]],features:[g.qOj],decls:0,vars:0,template:function(i,h){},encapsulation:2}),s})()},61675:(y,f,a)=>{a.d(f,{C:()=>g});var p=a(65879),e=a(19347);let g=(()=>{class m{constructor(_){this.dialog=_,this.open=(i,h)=>this.dialog.open(i,h)}}return m.\u0275fac=function(_){return new(_||m)(p.LFG(e.uw))},m.\u0275prov=p.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},52846:(y,f,a)=>{a.d(f,{h:()=>m});var p=a(20553),e=a(65879),g=a(56375);let m=(()=>{class s{constructor(i){this.configService=i}getCurrentVersion(){return p.N.versionTime}getGlobalNotice(){return this.configService.getConfig("globalNotice")}getEnvValue(i){return this.configService.getConfig(i)}getLinkEmbedDocument(i){var h=this.configService.getConfig("docView");return h&&"MICROSOFT"!=h?`https://docs.google.com/viewer?url=${i}&embedded=true`:`https://view.officeapps.live.com/op/embed.aspx?src=${i}`}}return s.\u0275fac=function(i){return new(i||s)(e.LFG(g.V))},s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},90059:(y,f,a)=>{a.d(f,{i:()=>m});var p=a(65879),e=a(63934),g=a(87384);let m=(()=>{class s{constructor(i,h){this.userService=i,this.commonService=h}checkLoginZalo(){if(!this.userService.isLogin())return!1;const i=this.userService.getUserObj();return!(!i.zaloId||i.phone&&10==i.phone.length||i.email&&-1!==i.email.indexOf("@"))}zaloInfoRequired(){this.checkLoginZalo()&&this.commonService.myNavigation("/auth/required-phone-or-email")}}return s.\u0275fac=function(i){return new(i||s)(p.LFG(e.U),p.LFG(g.z))},s.\u0275prov=p.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},49750:(y,f,a)=>{a.r(f),a.d(f,{DashboardModule:()=>ct});var p=a(95545),e=a(96814),g=a(56223),m=a(19347),s=a(21266),_=a(42753),i=a(37722),h=a(21494),L=a(25391),b=a(28),D=a(49962),c=a(23348),v=a(11222),d=a(82481),Z=a(91594),C=a(39621),t=a(65879),N=a(65592),B=a(47394),R=a(87384),M=a(52468),W=a(31518);let z=(()=>{class o{isWelcomeDashboard(n){return new N.y(r=>{this.getDashboardData(n,(u,x)=>{if(u&&!x){var A=1==Number(u.useWelcomeDashboard);r.next(A),r.complete()}else r.next(!1),r.complete()})})}checkRedirectDashboard(n){this.commonService.myNavigation(n?"/admin/dashboard-welcome":"/admin/dashboard")}getDashboardData(n,r){var u=this.browserStorageService.getSimpleSessionStorage(this.dashboardDataStorageKey);let x=u?this.commonService.castJsonToObj(u):void 0;n&&x?r(x,""):this.subscriptions.add(this.dashboardService.apiDashboardGetObjGet().subscribe(A=>{1==A.success&&A.data?(this.browserStorageService.saveSimpleSessionStorage(this.dashboardDataStorageKey,this.commonService.serializeJson(A.data)),r(A.data,"")):(this.browserStorageService.removeSimpleSessionStorage(this.dashboardDataStorageKey),r(void 0,A.message??""))}))}constructor(n,r,u){this.commonService=n,this.dashboardService=r,this.browserStorageService=u,this.subscriptions=new B.w0,this.dashboardDataStorageKey="azt_dashboard_data"}}return o.\u0275fac=function(n){return new(n||o)(t.LFG(R.z),t.LFG(M.sp),t.LFG(W.n))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var J=a(9853),P=a(90059),K=a(8280),S=a(92596),O=a(33066),Q=a(90241),V=a(30251),T=a(91190);let E=(()=>{class o extends Q.e{constructor(n,r){super(r,n),this.dialogRef=n,this.data=r,this.isNotShowAgain=new g.NI(!1,{nonNullable:!0})}ngOnInit(){}onNoClick(){this.dialogRef.close(this.isNotShowAgain.value)}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(m.so),t.Y36(m.WI))},o.\u0275cmp=t.Xpm({type:o,selectors:[["new-feature-notice-dialog"]],features:[t.qOj],decls:14,vars:11,consts:[[1,"box","p-5"],[3,"innerHTML"],["align","end"],[1,"flex","items-center","w-full",2,"justify-content","space-between"],[1,"form-check"],["id","is-not-show-again","type","checkbox",1,"form-check-input",3,"formControl"],["for","is-not-show-again",1,"form-check-label"],["azt-track-service","new-feature-iAX2JunJEbn",1,"btn","btn-primary","w-24",3,"mat-dialog-close","click"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"azt-mat-dialog-content"),t._UZ(2,"div",1),t.ALo(3,"safeAdminHtmlContent"),t.qZA(),t.TgZ(4,"mat-dialog-actions",2)(5,"div",3)(6,"div",4),t._UZ(7,"input",5),t.TgZ(8,"label",6),t._uU(9),t.ALo(10,"mytranslate"),t.qZA()(),t.TgZ(11,"button",7),t.NdJ("click",function(){return r.onNoClick()}),t._uU(12),t.ALo(13,"mytranslate"),t.qZA()()()()),2&n&&(t.xp6(2),t.Q6J("innerHTML",t.lcZ(3,5,r.data.description),t.oJD),t.xp6(5),t.Q6J("formControl",r.isNotShowAgain),t.xp6(2),t.hij(" ",t.lcZ(10,7,"lang_testbank_create_exam_width_file_pdf_not_view")," "),t.xp6(2),t.Q6J("mat-dialog-close",r.isNotShowAgain.value),t.xp6(1),t.Oqu(t.lcZ(13,9,"lang_buttom_close")))},dependencies:[m.ZT,m.H8,g.Wl,g.JJ,g.oH,V.R,T.JV,T.Tm],encapsulation:2}),o})();var H=a(52846),G=a(61675),k=a(63934),U=a(77988);const I=function(o){return[o]};let j=(()=>{class o extends C.Q{getNewFeatureNotice(n){this.initStatusObj(),this.subscriptions.add(this.globalNoticeService.apiGlobalNoticeGetObjGet().subscribe(r=>{1==r.success?(r.data?.obj?(this.checkFeatureNotice=!0,this.sAztDialogService.open(E,{width:"750px",data:r.data?.obj,restoreFocus:!1}).afterClosed().subscribe(x=>{if(x)try{this.setMarkAsReadFeaturesNotice()}catch(A){console.log(A)}})):this.checkFeatureNotice=!1,this.successStatusObj()):this.errorStatusObj(r.message??"",!0)}))}showNewFeatureNotice(n){this.subscriptions.add(this.globalNoticeService.apiGlobalNoticeGetObjGet(n?1:0).subscribe(r=>{1==r.success?r.data?.obj&&this.sAztDialogService.open(E,{width:"750px",data:r.data?.obj,restoreFocus:!1}).afterClosed().subscribe(x=>{}):this.errorStatusObj(r.message??"",!0)}))}setMarkAsReadFeaturesNotice(){this.subscriptions.add(this.globalNoticeService.apiGlobalNoticeMarkAsReadGet().subscribe(n=>{1==n.success?this.successStatusObj():this.errorStatusObj(n.message??"",!0)}))}ngOnInit(){this.initStatusObj(),this.user_obj=this.userService.getUserObj(),this.currentVersion=this.envService.getCurrentVersion(),this.isTeacherRole=this.userService.isTeacherRole(),this.getNewFeatureNotice(0),super.ngOnInit()}constructor(n,r,u,x){super(),this.envService=n,this.sAztDialogService=r,this.userService=u,this.globalNoticeService=x,this.currentVersion="",this.checkFeatureNotice=!1,this.isTeacherRole=!1}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(H.h),t.Y36(G.C),t.Y36(k.U),t.Y36(M.ID))},o.\u0275cmp=t.Xpm({type:o,selectors:[["footer-info-menu"]],features:[t.qOj],decls:68,vars:32,consts:[[1,"btn","btn-outline-primary","dropdown-toggle","btn-transparent","mb-5","ml-5",3,"matTooltip","matMenuTriggerFor"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["cx","12","cy","12","r","10"],["x1","12","y1","16","x2","12","y2","12"],["x1","12","y1","8","x2","12.01","y2","8"],["dashboardMenu",""],[1,"dropdown-menu","show","w-72","relative"],[1,"dropdown-content"],["azt-track-service","footer-info-menu-4xo_9lVt1J",1,"dropdown-item",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"w-4","h-4","lucide","mr-2"],["d","M16 16h6"],["d","M19 13v6"],["d","M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"],["d","M16.5 9.4 7.55 4.24"],["points","3.29 7 12 12 20.71 7"],["x1","12","y1","22","x2","12","y2","12"],["azt-track-service","footer-info-menu-Mym6pF4eC7","href","https://www.facebook.com/groups/azota.vn","target","_blank",1,"dropdown-item"],["d","M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"],["cx","9","cy","7","r","4"],["d","M22 21v-2a4 4 0 0 0-3-3.87"],["d","M16 3.13a4 4 0 0 1 0 7.75"],["azt-track-service","footer-info-menu-nstjfJK4k1","href","https://www.facebook.com/azotavn","target","_blank",1,"dropdown-item"],["d","M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"],[1,"dropdown-divider","border-slate-200","dark:border-darkmode-400"],["azt-track-service","footer-info-menu-MF6sCK5s_Vh",1,"dropdown-item",3,"routerLink"],["points","16 18 22 12 16 6"],["points","8 6 2 12 8 18"],["azt-track-service","footer-info-menu-LwlklQ67tDO",1,"dropdown-item",3,"routerLink"],["x","2","y","4","width","20","height","5","rx","2"],["d","M12 13v7"],["d","m9 16 3-3 3 3"],["d","M4 9v9a2 2 0 0 0 2 2h2"],["d","M20 9v9a2 2 0 0 1-2 2h-2"],[1,"dropdown-item","hover:bg-white/5"],["d","M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"],["d","m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"],["d","M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"],["d","M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"]],template:function(n,r){if(1&n&&(t.TgZ(0,"button",0),t.ALo(1,"mytranslate"),t.O4$(),t.TgZ(2,"svg",1),t._UZ(3,"circle",2)(4,"line",3)(5,"line",4),t.qZA()(),t.kcU(),t.TgZ(6,"mat-menu",null,5)(8,"div",6)(9,"ul",7)(10,"li")(11,"a",8),t.NdJ("click",function(){return r.showNewFeatureNotice(!0)}),t.O4$(),t.TgZ(12,"svg",9),t._UZ(13,"path",10)(14,"path",11)(15,"path",12)(16,"path",13)(17,"polyline",14)(18,"line",15),t.qZA(),t._uU(19),t.ALo(20,"mytranslate"),t.qZA()(),t.kcU(),t.TgZ(21,"li")(22,"a",16),t.O4$(),t.TgZ(23,"svg",9),t._UZ(24,"path",17)(25,"circle",18)(26,"path",19)(27,"path",20),t.qZA(),t._uU(28),t.ALo(29,"mytranslate"),t.qZA()(),t.kcU(),t.TgZ(30,"li")(31,"a",21),t.O4$(),t.TgZ(32,"svg",9),t._UZ(33,"path",22),t.qZA(),t._uU(34),t.ALo(35,"mytranslate"),t.qZA()(),t.kcU(),t.TgZ(36,"li"),t._UZ(37,"hr",23),t.qZA(),t.TgZ(38,"li")(39,"a",24),t.ALo(40,"navigationLocalize"),t.O4$(),t.TgZ(41,"svg",9),t._UZ(42,"polyline",25)(43,"polyline",26),t.qZA(),t._uU(44),t.ALo(45,"mytranslate"),t.qZA()(),t.kcU(),t.TgZ(46,"li")(47,"a",27),t.ALo(48,"navigationLocalize"),t.O4$(),t.TgZ(49,"svg",9),t._UZ(50,"rect",28)(51,"path",29)(52,"path",30)(53,"path",31)(54,"path",32),t.qZA(),t._uU(55),t.ALo(56,"mytranslate"),t.qZA()(),t.kcU(),t.TgZ(57,"li"),t._UZ(58,"hr",23),t.qZA(),t.TgZ(59,"li")(60,"a",33),t.O4$(),t.TgZ(61,"svg",9),t._UZ(62,"path",34)(63,"path",35)(64,"path",36)(65,"path",37),t.qZA(),t._uU(66),t.ALo(67,"mytranslate"),t.qZA()()()()()),2&n){const u=t.MAs(7);t.s9C("matTooltip",t.lcZ(1,10,"lang_auto_cong_dong_ho_tro")),t.Q6J("matMenuTriggerFor",u),t.xp6(19),t.hij(" ",t.lcZ(20,12,"lang_auto_tinh_nang_moi")," "),t.xp6(9),t.hij(" ",t.lcZ(29,14,"lang_auto_cong_dong_ho_tro")," "),t.xp6(6),t.hij(" ",t.lcZ(35,16,"lang_auto_fanpage_azota")," "),t.xp6(5),t.Q6J("routerLink",t.VKq(28,I,t.lcZ(40,18,"/admin/testbank/create-website"))),t.xp6(5),t.hij(" ",t.lcZ(45,20,"lang_auto_own_website")," "),t.xp6(3),t.Q6J("routerLink",t.VKq(30,I,t.lcZ(48,22,"/admin/homework/content-store"))),t.xp6(8),t.hij(" ",t.lcZ(56,24,"lang_auto_content_store")," "),t.xp6(11),t.hij(" ",t.lcZ(67,26,"lang_auto_phien_ban")+": "+r.currentVersion," ")}},dependencies:[s.rH,U.VK,U.p6,S.gM,T.Jy,T.JV],encapsulation:2}),o})();const Y=function(o){return[o]};function q(o,l){1&o&&(t.TgZ(0,"a",1),t.ALo(1,"navigationLocalize"),t.O4$(),t.TgZ(2,"svg",2),t._UZ(3,"path",3)(4,"circle",4)(5,"path",5)(6,"path",6),t.qZA()()),2&o&&t.Q6J("routerLink",t.VKq(3,Y,t.lcZ(1,1,"/super-role/admin-tool")))}let F=(()=>{class o extends C.Q{ngOnInit(){super.ngOnInit()}constructor(n){super(),this.userService=n}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(k.U))},o.\u0275cmp=t.Xpm({type:o,selectors:[["footer-admin-menu"]],features:[t.qOj],decls:1,vars:1,consts:[["azt-track-service","footer-admin-menu-7W4rraHk8","class","btn btn-outline-primary dropdown-toggle btn-transparent mb-5 ml-5",3,"routerLink",4,"ngIf"],["azt-track-service","footer-admin-menu-7W4rraHk8",1,"btn","btn-outline-primary","dropdown-toggle","btn-transparent","mb-5","ml-5",3,"routerLink"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round","icon-name","users","data-lucide","users",1,"lucide-users"],["d","M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"],["cx","9","cy","7","r","4"],["d","M23 21v-2a4 4 0 00-3-3.87"],["d","M16 3.13a4 4 0 010 7.75"]],template:function(n,r){1&n&&t.YNc(0,q,7,5,"a",0),2&n&&t.Q6J("ngIf",r.userService.isSupperAdminRole())},dependencies:[s.rH,e.O5,T.Jy],encapsulation:2}),o})();function $(o,l){1&o&&(t.TgZ(0,"div",34),t._uU(1),t.ALo(2,"mytranslate"),t.qZA()),2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"lang_cms_test_dashboard_title")," "))}const w=function(o){return[o]};function X(o,l){1&o&&(t.TgZ(0,"div",35),t._UZ(1,"footer-info-menu"),t.TgZ(2,"button",36),t.ALo(3,"mytranslate"),t.ALo(4,"navigationLocalize"),t.O4$(),t.TgZ(5,"svg",37),t._UZ(6,"path",38)(7,"path",39)(8,"path",40)(9,"line",41)(10,"line",42),t.qZA()(),t.kcU(),t.TgZ(11,"a",43),t.ALo(12,"mytranslate"),t.O4$(),t.TgZ(13,"svg",37),t._UZ(14,"circle",44)(15,"path",45)(16,"line",46),t.qZA()(),t.kcU(),t._UZ(17,"footer-admin-menu"),t.qZA()),2&o&&(t.xp6(2),t.s9C("matTooltip",t.lcZ(3,3,"lang_auto_thung_rac")),t.Q6J("routerLink",t.VKq(9,w,t.lcZ(4,5,"/admin/trash/0"))),t.xp6(9),t.s9C("matTooltip",t.lcZ(12,7,"lang_auto_huong_dan")))}let tt=(()=>{class o extends C.Q{ngOnInit(){this.initStatusObj(),this.aztDashboardDataService.getDashboardData(!0,(n,r)=>{r?this.showErrorSnack(r):n?.useWelcomeDashboard&&this.aztDashboardDataService.checkRedirectDashboard(!0)}),this.commonService.translateMetaData({title:"lang_cms_test_dashboard_title",description:"lang_cms_test_dashboard_description",image:"lang_cms_test_image"}),this.mobileWebviewService.sendSimpleMessage("OPEN_MAIN_DASHBOARD"),super.ngOnInit()}constructor(n,r,u,x){super(),this.aztDashboardDataService=n,this.mobileWebviewService=r,this.zaloService=u,this.userLoginStateService=x,this.userLoginStateService.loginMessage.subscribe(()=>{setTimeout(()=>{this.zaloService.zaloInfoRequired()})})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(z),t.Y36(J.r),t.Y36(P.i),t.Y36(K.u))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-test-dashboard"]],features:[t.qOj],decls:63,vars:43,consts:[[3,"headerTitle"],[1,"azt-dashboard","w-full","lg:w-80%","mx-auto","sm:mt-10"],["class","text-lg font-medium mt-5 intro-y",4,"ngIf"],[1,"mb-3","grid","grid-cols-12","intro-y","sm:gap-10"],[1,"col-span-12","grid","grid-cols-12","gap-6","mt-4","flex","items-center"],["tourAnchor","azt-tour-1",1,"col-span-6","md:col-span-3","intro-y"],["azt-track-service","dashboard-main-rF6MSAArUsY",3,"routerLink"],[1,"box","p-8","zoom-in"],[1,"block","w-12","h-12","text-primary","mx-auto"],["name","file-text"],[1,"font-medium","text-center","text-base","mt-3"],["tourAnchor","azt-tour-2",1,"col-span-6","md:col-span-3","intro-y"],["azt-track-service","dashboard-main-n5d-c2lLv1K",3,"routerLink"],["name","folder"],["tourAnchor","azt-tour-3",1,"col-span-6","md:col-span-3","intro-y"],["azt-track-service","dashboard-main-4P7SGaAp07c",3,"routerLink"],["name","layers"],["tourAnchor","azt-tour-4",1,"col-span-6","md:col-span-3","intro-y"],["azt-track-service","dashboard-main-7d_U3ZeXpGR",3,"routerLink"],["name","users"],["azt-track-service","dashboard-main-2s1OXiSzx",3,"routerLink"],[0,"xmlns","xlink","http://www.w3.org/1999/xlink","xmlns","http://www.w3.org/2000/svg","version","1.1","stroke-width","2","stroke-linecap","round"],["transform","matrix(1 0 0 1 -313 -361 )"],["d","M 36.0612244897959 6.99544270833333 C 36.6390556222489 7.22330729166667 37.0876350540216 7.54991319444444 37.406962785114 7.97526041666667 C 38.015206082433 8.84114583333333 38.1520608243297 9.82096354166667 37.8175270108043 10.9147135416667 L 31.5450180072029 31.5592447916667 C 31.2561024409764 32.5314670138889 30.6744697879152 33.3479817708333 29.8001200480192 34.0087890625 C 28.9257703081233 34.6695963541667 27.9943977591036 35 27.0060024009604 35 L 5.953181272509 35 C 4.78231292517007 35 3.65326130452181 34.5936414930556 2.56602641056423 33.7809244791667 C 1.47879151660664 32.9682074652778 0.722288915566227 31.9694010416667 0.296518607442977 30.7845052083333 C -0.0684273709483793 29.7667100694444 -0.0836334533813525 28.8020833333333 0.250900360144058 27.890625 C 0.250900360144058 27.8298611111111 0.273709483793517 27.6247829861111 0.319327731092437 27.275390625 C 0.364945978391357 26.9259982638889 0.395358143257303 26.6449652777778 0.410564225690276 26.4322916666667 C 0.425770308123249 26.3107638888889 0.40296118447379 26.1474609375 0.342136854741897 25.9423828125 C 0.281312525010004 25.7373046875 0.258503401360544 25.5891927083333 0.273709483793517 25.498046875 C 0.304121648659464 25.3309461805556 0.364945978391357 25.1714409722222 0.456182472989196 25.01953125 C 0.547418967587035 24.8676215277778 0.672869147659064 24.6891276041667 0.832533013205282 24.4840494791667 C 0.992196878751501 24.2789713541667 1.11764705882353 24.1004774305556 1.20888355342137 23.9485677083333 C 1.55862344937975 23.3713107638889 1.90076030412165 22.6763237847222 2.23529411764706 21.8636067708333 C 2.56982793117247 21.0508897569444 2.79791916766707 20.3559027777778 2.91956782713085 19.7786458333333 C 2.96518607442977 19.6267361111111 2.96898759503802 19.3988715277778 2.93097238895558 19.0950520833333 C 2.89295718287315 18.7912326388889 2.88915566226491 18.5785590277778 2.91956782713085 18.45703125 C 2.96518607442977 18.2899305555556 3.09443777511004 18.0772569444444 3.30732292917167 17.8190104166667 C 3.52020808323329 17.5607638888889 3.64945978391357 17.3860677083333 3.69507803121249 17.294921875 C 4.01440576230492 16.748046875 4.33373349339736 16.0492621527778 4.6530612244898 15.1985677083333 C 4.97238895558223 14.3478732638889 5.1624649859944 13.6642795138889 5.22328931572629 13.1477864583333 C 5.23849539815926 13.0110677083333 5.21948779511805 12.7680121527778 5.16626650660264 12.4186197916667 C 5.11304521808724 12.0692274305556 5.11684673869548 11.8565538194444 5.17767106842737 11.7805989583333 C 5.23849539815926 11.5831163194444 5.40576230492197 11.3514539930556 5.67947178871549 11.0856119791667 C 5.953181272509 10.8197699652778 6.12044817927171 10.6488715277778 6.1812725090036 10.5729166666667 C 6.47018807523009 10.1779513888889 6.79331732693077 9.5361328125 7.15066026410564 8.6474609375 C 7.50800320128051 7.7587890625 7.71708683473389 7.02582465277778 7.77791116446579 6.44856770833333 C 7.79311724689876 6.32703993055555 7.7703081232493 6.13335503472222 7.70948379351741 5.86751302083333 C 7.64865946378552 5.60167100694444 7.63345338135254 5.400390625 7.66386554621849 5.263671875 C 7.69427771108443 5.14214409722222 7.76270508203281 5.00542534722222 7.86914765906362 4.853515625 C 7.97559023609444 4.70160590277778 8.1124449779912 4.52690972222222 8.2797118847539 4.32942708333333 C 8.44697879151661 4.13194444444444 8.57623049219688 3.97243923611111 8.66746698679472 3.85091145833333 C 8.78911564625851 3.66861979166667 8.91456582633053 3.43695746527778 9.0438175270108 3.15592447916667 C 9.17306922769108 2.87489149305555 9.28711484593838 2.60904947916667 9.3859543817527 2.3583984375 C 9.48479391756703 2.10774739583333 9.60644257703081 1.83430989583333 9.75090036014406 1.5380859375 C 9.8953581432573 1.24186197916667 10.0436174469788 0.998806423611109 10.1956782713085 0.808919270833332 C 10.3477390956383 0.619032118055551 10.5492196878752 0.440538194444441 10.8001200480192 0.2734375 C 11.0510204081633 0.106336805555551 11.3247298919568 0.0189887152777773 11.6212484993998 0.011393229166668 C 11.9177671068427 0.00379774305555081 12.2789115646259 0.045572916666668 12.7046818727491 0.13671875 L 12.6818727490996 0.205078125 C 13.2597038815526 0.068359375 13.6474589835934 0 13.8451380552221 0 L 31.202881152461 0 C 32.328131252501 0 33.1948779511805 0.425347222222219 33.8031212484994 1.27604166666667 C 34.4113645458183 2.12673611111111 34.5482192877151 3.11414930555555 34.2136854741897 4.23828125 L 27.9639855942377 24.8828125 C 27.4165666266507 26.6905381944444 26.8729491796719 27.8564453125 26.3331332533013 28.3805338541667 C 25.7933173269308 28.9046223958333 24.8163265306122 29.1666666666667 23.4021608643457 29 L 3.58103241296519 29 C 3.17046818727491 29.1666666666667 2.88155262104842 29.2805989583333 2.71428571428571 29.5084635416667 C 2.54701880752301 29.7515190972222 2.53941576630652 30.078125 2.69147659063625 30.48828125 C 3.05642256902761 31.5516493055556 4.15126050420168 32.0833333333333 5.97599039615846 32 L 27.0288115246098 32 C 27.4697879151661 32.0833333333333 27.8955582232893 31.9656032986111 28.3061224489796 31.7301432291667 C 28.7166866746699 31.4946831597222 28.9827931172469 31.1794704861111 29.1044417767107 30.7845052083333 L 35.9471788715486 8.29427083333333 C 36.0536214485794 7.96006944444444 36.0916366546619 7.52712673611111 36.0612244897959 6.99544270833333 Z M 13.6170468187275 6.5625 L 13.1380552220888 8.02083333333333 C 13.0772308923569 8.21831597222222 13.0924369747899 8.38921440972222 13.1836734693878 8.53352864583333 C 13.2749099639856 8.67784288194444 13.4269707883153 8.75 13.639855942377 9 L 27.5078031212485 9 C 27.7054821928772 8.75 27.8993597438976 8.67784288194444 28.0894357743097 8.53352864583333 C 28.2795118047219 8.38921440972222 28.4049619847939 8.21831597222222 28.4657863145258 8.02083333333333 L 28.9447779111645 6.5625 C 29.0056022408964 6.36501736111111 28.9903961584634 6.19411892361111 28.8991596638655 6.0498046875 C 28.8079231692677 5.90549045138889 28.655862344938 5.83333333333333 28.4429771908764 6 L 14.5750300120048 6 C 14.3773509403762 5.83333333333333 14.1834733893557 5.90549045138889 13.9933973589436 6.0498046875 C 13.8033213285314 6.19411892361111 13.6778711484594 6.36501736111111 13.6170468187275 6.5625 Z M 11.7238895558223 12.3958333333333 L 11.2448979591837 13.8541666666667 C 11.1840736294518 14.0516493055556 11.1992797118848 14.2225477430556 11.2905162064826 14.3668619791667 C 11.3817527010804 14.5111762152778 11.5338135254102 14.5833333333333 11.7466986794718 15 L 25.6146458583433 15 C 25.812324929972 14.5833333333333 26.0062024809924 14.5111762152778 26.1962785114046 14.3668619791667 C 26.3863545418167 14.2225477430556 26.5118047218888 14.0516493055556 26.5726290516206 13.8541666666667 L 27.0516206482593 12.3958333333333 C 27.1124449779912 12.1983506944444 27.0972388955582 12.0274522569444 27.0060024009604 11.8831380208333 C 26.9147659063625 11.7388237847222 26.7627050820328 11.6666666666667 26.5498199279712 12 L 12.6818727490996 12 C 12.484193677471 11.6666666666667 12.2903161264506 11.7388237847222 12.1002400960384 11.8831380208333 C 11.9101640656263 12.0274522569444 11.7847138855542 12.1983506944444 11.7238895558223 12.3958333333333 Z ","fill-rule","nonzero","fill","#1e3fb0","stroke","none","transform","matrix(1 0 0 1 313 361 )"],[1,"intro-y","col-span-12","box","mt-10",2,"display","none"],[1,"flex","flex-col"],[1,"flex","items-center"],["rows","1","placeholder","B\u1ea1n mu\u1ed1n l\xe0m g\xec?...",1,"resize-none","form-control","border-transparent","shadow-none","focus:border-transparent","focus:ring-0",2,"margin","5px","outline","none","border","0","box-shadow","none"],["azt-track-service","dashboard-main-43hyFh5fD","href","javascript:;",1,"w-8","h-8","sm:w-10","sm:h-10","block","text-primary","rounded-full","flex-none","flex","items-center","justify-center","mr-2"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round","icon-name","send","data-lucide","send",1,"lucide","lucide-send","w-4","h-4"],["x1","22","y1","2","x2","11","y2","13"],["points","22 2 15 22 11 13 2 9 22 2"],[1,"col-span-12",2,"margin-top","-35px","margin-left","5px","font-size","13px","color","#a2a2a2","display","none"],["class","absolute left-0 bottom-0 index",4,"ngIf"],[1,"text-lg","font-medium","mt-5","intro-y"],[1,"absolute","left-0","bottom-0","index"],["azt-track-service","dashboard-main-78XWJErDG4V",1,"btn","btn-outline-primary","dropdown-toggle","btn-transparent","mb-5","ml-5",3,"matTooltip","routerLink"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M3 6h18"],["d","M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"],["d","M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"],["x1","10","y1","11","x2","10","y2","17"],["x1","14","y1","11","x2","14","y2","17"],["azt-track-service","dashboard-main-J6ZAMHq8uVG","href","https://docs.azota.vn/","target","_blank",1,"btn","btn-outline-primary","dropdown-toggle","btn-transparent","mb-5","ml-5",3,"matTooltip"],["cx","12","cy","12","r","10"],["d","M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"],["x1","12","y1","17","x2","12.01","y2","17"]],template:function(n,r){1&n&&(t.TgZ(0,"teacher-layout",0)(1,"div",1),t.YNc(2,$,3,3,"div",2),t.TgZ(3,"div",3)(4,"div",4)(5,"div",5)(6,"a",6),t.ALo(7,"navigationLocalize"),t.TgZ(8,"div",7)(9,"span",8),t._UZ(10,"lucide-icon",9),t.qZA(),t.TgZ(11,"div",10),t._uU(12),t.ALo(13,"mytranslate"),t.qZA()()()(),t.TgZ(14,"div",11)(15,"a",12),t.ALo(16,"navigationLocalize"),t.TgZ(17,"div",7)(18,"span",8),t._UZ(19,"lucide-icon",13),t.qZA(),t.TgZ(20,"div",10),t._uU(21),t.ALo(22,"mytranslate"),t.qZA()()()(),t.TgZ(23,"div",14)(24,"a",15),t.ALo(25,"navigationLocalize"),t.TgZ(26,"div",7)(27,"span",8),t._UZ(28,"lucide-icon",16),t.qZA(),t.TgZ(29,"div",10),t._uU(30),t.ALo(31,"mytranslate"),t.qZA()()()(),t.TgZ(32,"div",17)(33,"a",18),t.ALo(34,"navigationLocalize"),t.TgZ(35,"div",7)(36,"span",8),t._UZ(37,"lucide-icon",19),t.qZA(),t.TgZ(38,"div",10),t._uU(39),t.ALo(40,"mytranslate"),t.qZA()()()(),t.TgZ(41,"div",17)(42,"a",20),t.ALo(43,"navigationLocalize"),t.TgZ(44,"div",7)(45,"span",8),t.O4$(),t.TgZ(46,"svg",21)(47,"g",22),t._UZ(48,"path",23),t.qZA()()(),t.kcU(),t.TgZ(49,"div",10),t._uU(50),t.ALo(51,"mytranslate"),t.qZA()()()()(),t.TgZ(52,"div",24)(53,"div",25)(54,"div",26),t._UZ(55,"textarea",27),t.TgZ(56,"a",28),t.O4$(),t.TgZ(57,"svg",29),t._UZ(58,"line",30)(59,"polygon",31),t.qZA()()()()(),t.kcU(),t.TgZ(60,"div",32),t._uU(61," Tr\u1ee3 l\xfd Azota: Y\xeau c\u1ea7u t\xf4i l\xe0m b\u1ea5t k\u1ef3 t\xe1c v\u1ee5 n\xe0o b\u1ea1n mu\u1ed1n tr\xean Azota b\u1eb1ng ng\xf4n ng\u1eef t\u1ef1 nhi\xean "),t.qZA()(),t.YNc(62,X,18,11,"div",33),t.qZA()()),2&n&&(t.Q6J("headerTitle","dashboard"),t.xp6(2),t.Q6J("ngIf",!r.isMobileWebView),t.xp6(4),t.Q6J("routerLink",t.VKq(33,w,t.lcZ(7,13,"/admin/testbank/document-management/1/0/1"))),t.xp6(6),t.hij(" ",t.lcZ(13,15,"lang_auto_bai_tap")," "),t.xp6(3),t.Q6J("routerLink",t.VKq(35,w,t.lcZ(16,17,"/admin/testbank/document-management/0/0/1"))),t.xp6(6),t.hij(" ",t.lcZ(22,19,"lang_auto_de_thi")," "),t.xp6(3),t.Q6J("routerLink",t.VKq(37,w,t.lcZ(25,21,"/admin/student/manage-class/0"))),t.xp6(6),t.hij(" ",t.lcZ(31,23,"lang_auto_quan_ly_lop")," "),t.xp6(3),t.Q6J("routerLink",t.VKq(39,w,t.lcZ(34,25,"/admin/teacher-group/0/0"))),t.xp6(6),t.hij(" ",t.lcZ(40,27,"lang_auto_doi_nhom")," "),t.xp6(3),t.Q6J("routerLink",t.VKq(41,w,t.lcZ(43,29,"/document-market/home"))),t.xp6(8),t.hij(" ",t.lcZ(51,31,"lang_document_market_title")," "),t.xp6(12),t.Q6J("ngIf",!r.isMobileWebView))},dependencies:[s.rH,e.O5,S.gM,O._,i.Nh5,j,F,T.Jy,T.JV],encapsulation:2}),o})();var et=a(5647);function ot(o,l){1&o&&t._UZ(0,"azt-loading-effect")}function at(o,l){1&o&&t._UZ(0,"footer-info-menu")}function nt(o,l){if(1&o){const n=t.EpF();t.TgZ(0,"div",2)(1,"div",3)(2,"h3",4),t._uU(3),t.ALo(4,"mytranslate"),t.qZA(),t.TgZ(5,"p",5),t._UZ(6,"span",6),t.ALo(7,"mytranslate"),t._uU(8,".\xa0 "),t.TgZ(9,"a",7),t._uU(10),t.ALo(11,"mytranslate"),t.qZA()()(),t.TgZ(12,"div",8)(13,"div",9)(14,"div",10)(15,"a",11),t.NdJ("click",function(){t.CHM(n);const u=t.oxw();return t.KtG(u.redirectToCreateDocument())}),t.TgZ(16,"div",12)(17,"span",13),t._UZ(18,"lucide-icon",14),t.qZA(),t.TgZ(19,"div",15),t._uU(20),t.ALo(21,"mytranslate"),t.qZA()()()(),t.TgZ(22,"div",10)(23,"a",16),t.NdJ("click",function(){t.CHM(n);const u=t.oxw();return t.KtG(u.redirectToGlobalBank())}),t.TgZ(24,"div",12)(25,"span",17),t.O4$(),t.TgZ(26,"svg",18),t._UZ(27,"path",19),t.qZA()(),t.kcU(),t.TgZ(28,"div",15),t._uU(29),t.ALo(30,"mytranslate"),t.qZA()()()(),t.TgZ(31,"div",10)(32,"a",20),t.NdJ("click",function(){t.CHM(n);const u=t.oxw();return t.KtG(u.redirectToAzotaBank())}),t.TgZ(33,"div",12)(34,"span",21),t._UZ(35,"lucide-icon",22),t.qZA(),t.TgZ(36,"div",15),t._uU(37),t.ALo(38,"mytranslate"),t.qZA()()()()()()(),t.TgZ(39,"div",23),t.YNc(40,at,1,0,"footer-info-menu",24),t._UZ(41,"footer-admin-menu"),t.qZA()}if(2&o){const n=t.oxw();t.xp6(3),t.hij(" ",t.lcZ(4,7,"lang_auto_chao_mung_ban_den_voi_azota")+" \u{1f389}"," "),t.xp6(3),t.Q6J("innerHTML",t.lcZ(7,9,"lang_auto_ban_co_the_tao"),t.oJD),t.xp6(4),t.Oqu(t.lcZ(11,11,"lang_auto_tim_hieu_them")),t.xp6(10),t.hij(" ",t.lcZ(21,13,"lang_auto_tao_moi")," "),t.xp6(9),t.hij(" ",t.lcZ(30,15,"lang_testbank_test_list_create_new_from_matrix_bank")," "),t.xp6(8),t.hij(" ",t.lcZ(38,17,"lang_global_azota_download_from_azota_bank")," "),t.xp6(3),t.Q6J("ngIf",!n.isMobileWebView)}}let rt=(()=>{class o extends C.Q{ngOnInit(){this.initStatusObj(),this.aztDashboardDataService.isWelcomeDashboard(!1).subscribe(n=>{n||n||this.aztDashboardDataService.checkRedirectDashboard(!1),this.stopStatusObj()}),super.ngOnInit()}redirectToCreateDocument(){this.commonService.myNavigationWithQueryString("/admin/testbank/create-new-document/0","?backto="+encodeURIComponent("/admin/dashboard-welcome"))}redirectToGlobalBank(){this.commonService.myNavigationWithQueryString("/admin/testbank/matrix-list/0/1","?backto="+encodeURIComponent("/admin/dashboard-welcome"))}redirectToAzotaBank(){this.commonService.myNavigationWithQueryString("/ladingpage/document-management/0/0/1","?backto="+encodeURIComponent("/admin/dashboard-welcome&from=dashboard-welcome"))}constructor(n){super(),this.aztDashboardDataService=n}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(z))},o.\u0275cmp=t.Xpm({type:o,selectors:[["dashboard-welcome"]],features:[t.qOj],decls:4,vars:2,consts:[[4,"ngIf","ngIfElse"],["doneLoading",""],[1,"azt-dashboard","w-full","lg:w-80%","mx-auto","sm:mt-10"],[1,"intro-y","mt-5"],[1,"font-medium","text-xl"],[1,"text-md","mt-2"],[3,"innerHTML"],["azt-track-service","dashboard-welcome-pZ4vNL2WA","href","https://docs.azota.vn","target","_blank",1,"btn-text-primary","font-medium"],[1,"mb-3","intro-y","sm:gap-10","mt-10"],[1,"grid","grid-cols-12","gap-6","items-center","mt-4"],[1,"col-span-12","md:col-span-6","lg:col-span-4","h-full","intro-y"],["azt-track-service","dashboard-welcome-rOUx53afllU",3,"click"],[1,"box","flex","items-center","px-5","py-5","zoom-in"],[1,"block","w-8","h-8","text-primary","mr-5"],["name","file-plus-2"],[1,"font-medium","text-lg"],["azt-track-service","dashboard-welcome-Av9Wffvci",3,"click"],[1,"block","w-8","h-8","text-success","mr-5"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"w-8","h-8","text-success"],["d","M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z"],["azt-track-service","dashboard-welcome-UaXl56_mm",3,"click"],[1,"block","w-8","h-8","text-pending","mr-5"],["name","download-cloud"],[1,"absolute","left-0","bottom-0","index"],[4,"ngIf"]],template:function(n,r){if(1&n&&(t.TgZ(0,"teacher-layout"),t.YNc(1,ot,1,0,"azt-loading-effect",0),t.YNc(2,nt,42,19,"ng-template",null,1,t.W1O),t.qZA()),2&n){const u=t.MAs(3);t.xp6(1),t.Q6J("ngIf",r.statusObj.loading)("ngIfElse",u)}},dependencies:[e.O5,et.l,O._,i.Nh5,j,F,T.JV]}),o})();const it=[{component:(()=>{class o extends C.Q{}return o.\u0275fac=function(){let l;return function(r){return(l||(l=t.n5z(o)))(r||o)}}(),o.\u0275cmp=t.Xpm({type:o,selectors:[["app-dashboard"]],features:[t.qOj],decls:1,vars:0,template:function(n,r){1&n&&t._UZ(0,"router-outlet")},dependencies:[s.lC],encapsulation:2}),o})(),path:"",canActivate:[Z.J],children:[{path:"dashboard-welcome",component:rt},{path:"dashboard",component:tt},{path:"dashboard-v1",redirectTo:"dashboard",pathMatch:"full"}]}];let st=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.Bz.forChild(it),s.Bz,d.fQ]}),o})(),ct=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.Bz,e.ez,c.j,p.kb,_.Z_,g.u5,g.UX,m.Is,D.Z,h.xC,L.QG,b.W,v.d,st,i.qyJ.pick(i.ciZ)]}),o})()}}]);