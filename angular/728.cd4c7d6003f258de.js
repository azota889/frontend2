"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[728],{59728:(y,_,o)=>{o.r(_),o.d(_,{DashboardModule:()=>it});var h=o(95545),e=o(96814),m=o(56223),g=o(19347),s=o(21266),b=o(42753),r=o(37722),c=o(21494),A=o(25391),f=o(23348),M=o(84155),d=o(78217),p=o(24406),l=o(82481),Z=o(43048),v=o(47496),O=o(20553),t=o(65879),L=o(63259),N=o(23433),B=o(6411),R=o(53311),z=o(92596),D=o(98129),W=o(72164),J=o(78497),T=o(40750);let k=(()=>{class a extends W.e{constructor(i,n){super(n,i),this.dialogRef=i,this.data=n,this.isNotShowAgain=new m.NI(!1,{nonNullable:!0})}ngOnInit(){}onNoClick(){this.dialogRef.close(this.isNotShowAgain.value)}static#t=this.\u0275fac=function(n){return new(n||a)(t.Y36(g.so),t.Y36(g.WI))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["new-feature-notice-dialog"]],features:[t.qOj],decls:14,vars:11,consts:[[1,"box","p-5"],[3,"innerHTML"],["align","end"],[1,"flex","items-center","w-full",2,"justify-content","space-between"],[1,"form-check"],["id","is-not-show-again","type","checkbox",1,"form-check-input",3,"formControl"],["for","is-not-show-again",1,"form-check-label"],["azt-track-service","new-feature-iAX2JunJEbn",1,"btn","btn-primary","w-24",3,"mat-dialog-close","click"]],template:function(n,u){1&n&&(t.TgZ(0,"div",0)(1,"azt-mat-dialog-content"),t._UZ(2,"div",1),t.ALo(3,"safeAdminHtmlContent"),t.qZA(),t.TgZ(4,"mat-dialog-actions",2)(5,"div",3)(6,"div",4),t._UZ(7,"input",5),t.TgZ(8,"label",6),t._uU(9),t.ALo(10,"mytranslate"),t.qZA()(),t.TgZ(11,"button",7),t.NdJ("click",function(){return u.onNoClick()}),t._uU(12),t.ALo(13,"mytranslate"),t.qZA()()()()),2&n&&(t.xp6(2),t.Q6J("innerHTML",t.lcZ(3,5,u.data.description),t.oJD),t.xp6(5),t.Q6J("formControl",u.isNotShowAgain),t.xp6(2),t.hij(" ",t.lcZ(10,7,"lang_testbank_create_exam_width_file_pdf_not_view")," "),t.xp6(2),t.Q6J("mat-dialog-close",u.isNotShowAgain.value),t.xp6(1),t.Oqu(t.lcZ(13,9,"lang_buttom_close")))},dependencies:[g.ZT,g.H8,m.Wl,m.JJ,m.oH,J.R,T.JV,T.Tm],encapsulation:2})}return a})();var P=o(75270),F=o(2783),U=o(2816),V=o(9235),E=o(77988);const S=function(a){return[a]};let I=(()=>{class a extends v.Q{getNewFeatureNotice(i){this.initStatusObj(),this.subscriptions.add(this.globalNoticeService.apiGlobalNoticeGetObjGet().subscribe(n=>{1==n.success?(n.data?.obj?(this.checkFeatureNotice=!0,this.sAztDialogService.open(k,{width:"750px",data:n.data?.obj,restoreFocus:!1}).afterClosed().subscribe(x=>{if(x)try{this.setMarkAsReadFeaturesNotice()}catch(rt){console.log(rt)}})):this.checkFeatureNotice=!1,this.successStatusObj()):this.errorStatusObj(n.message??"",!0)}))}showNewFeatureNotice(i){this.subscriptions.add(this.globalNoticeService.apiGlobalNoticeGetObjGet(i?1:0).subscribe(n=>{1==n.success?n.data?.obj&&this.sAztDialogService.open(k,{width:"750px",data:n.data?.obj,restoreFocus:!1}).afterClosed().subscribe(x=>{}):this.errorStatusObj(n.message??"",!0)}))}setMarkAsReadFeaturesNotice(){this.subscriptions.add(this.globalNoticeService.apiGlobalNoticeMarkAsReadGet().subscribe(i=>{1==i.success?this.successStatusObj():this.errorStatusObj(i.message??"",!0)}))}ngOnInit(){this.initStatusObj(),this.user_obj=this.userService.getUserObj(),this.currentVersion=this.envService.getCurrentVersion(),this.isTeacherRole=this.userService.isTeacherRole(),this.getNewFeatureNotice(0),super.ngOnInit()}constructor(i,n,u,x){super(),this.envService=i,this.sAztDialogService=n,this.userService=u,this.globalNoticeService=x,this.currentVersion="",this.checkFeatureNotice=!1,this.isTeacherRole=!1}static#t=this.\u0275fac=function(n){return new(n||a)(t.Y36(P.h),t.Y36(F.C),t.Y36(U.U),t.Y36(V.ID))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["footer-info-menu"]],features:[t.qOj],decls:68,vars:32,consts:[[1,"btn","btn-outline-primary","dropdown-toggle","btn-transparent","mb-5","ml-5",3,"matTooltip","matMenuTriggerFor"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["cx","12","cy","12","r","10"],["x1","12","y1","16","x2","12","y2","12"],["x1","12","y1","8","x2","12.01","y2","8"],["dashboardMenu",""],[1,"dropdown-menu","show","w-72","relative"],[1,"dropdown-content"],["azt-track-service","footer-info-menu-4xo_9lVt1J",1,"dropdown-item",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"w-4","h-4","lucide","mr-2"],["d","M16 16h6"],["d","M19 13v6"],["d","M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"],["d","M16.5 9.4 7.55 4.24"],["points","3.29 7 12 12 20.71 7"],["x1","12","y1","22","x2","12","y2","12"],["azt-track-service","footer-info-menu-Mym6pF4eC7","href","https://www.facebook.com/groups/azota.vn","target","_blank",1,"dropdown-item"],["d","M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"],["cx","9","cy","7","r","4"],["d","M22 21v-2a4 4 0 0 0-3-3.87"],["d","M16 3.13a4 4 0 0 1 0 7.75"],["azt-track-service","footer-info-menu-nstjfJK4k1","href","https://www.facebook.com/azotavn","target","_blank",1,"dropdown-item"],["d","M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"],[1,"dropdown-divider","border-slate-200","dark:border-darkmode-400"],["azt-track-service","footer-info-menu-MF6sCK5s_Vh",1,"dropdown-item",3,"routerLink"],["points","16 18 22 12 16 6"],["points","8 6 2 12 8 18"],["azt-track-service","footer-info-menu-LwlklQ67tDO",1,"dropdown-item",3,"routerLink"],["x","2","y","4","width","20","height","5","rx","2"],["d","M12 13v7"],["d","m9 16 3-3 3 3"],["d","M4 9v9a2 2 0 0 0 2 2h2"],["d","M20 9v9a2 2 0 0 1-2 2h-2"],[1,"dropdown-item","hover:bg-white/5"],["d","M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"],["d","m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"],["d","M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"],["d","M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"]],template:function(n,u){if(1&n&&(t.TgZ(0,"button",0),t.ALo(1,"mytranslate"),t.O4$(),t.TgZ(2,"svg",1),t._UZ(3,"circle",2)(4,"line",3)(5,"line",4),t.qZA()(),t.kcU(),t.TgZ(6,"mat-menu",null,5)(8,"div",6)(9,"ul",7)(10,"li")(11,"a",8),t.NdJ("click",function(){return u.showNewFeatureNotice(!0)}),t.O4$(),t.TgZ(12,"svg",9),t._UZ(13,"path",10)(14,"path",11)(15,"path",12)(16,"path",13)(17,"polyline",14)(18,"line",15),t.qZA(),t._uU(19),t.ALo(20,"mytranslate"),t.qZA()(),t.kcU(),t.TgZ(21,"li")(22,"a",16),t.O4$(),t.TgZ(23,"svg",9),t._UZ(24,"path",17)(25,"circle",18)(26,"path",19)(27,"path",20),t.qZA(),t._uU(28),t.ALo(29,"mytranslate"),t.qZA()(),t.kcU(),t.TgZ(30,"li")(31,"a",21),t.O4$(),t.TgZ(32,"svg",9),t._UZ(33,"path",22),t.qZA(),t._uU(34),t.ALo(35,"mytranslate"),t.qZA()(),t.kcU(),t.TgZ(36,"li"),t._UZ(37,"hr",23),t.qZA(),t.TgZ(38,"li")(39,"a",24),t.ALo(40,"navigationLocalize"),t.O4$(),t.TgZ(41,"svg",9),t._UZ(42,"polyline",25)(43,"polyline",26),t.qZA(),t._uU(44),t.ALo(45,"mytranslate"),t.qZA()(),t.kcU(),t.TgZ(46,"li")(47,"a",27),t.ALo(48,"navigationLocalize"),t.O4$(),t.TgZ(49,"svg",9),t._UZ(50,"rect",28)(51,"path",29)(52,"path",30)(53,"path",31)(54,"path",32),t.qZA(),t._uU(55),t.ALo(56,"mytranslate"),t.qZA()(),t.kcU(),t.TgZ(57,"li"),t._UZ(58,"hr",23),t.qZA(),t.TgZ(59,"li")(60,"a",33),t.O4$(),t.TgZ(61,"svg",9),t._UZ(62,"path",34)(63,"path",35)(64,"path",36)(65,"path",37),t.qZA(),t._uU(66),t.ALo(67,"mytranslate"),t.qZA()()()()()),2&n){const x=t.MAs(7);t.s9C("matTooltip",t.lcZ(1,10,"lang_auto_cong_dong_ho_tro")),t.Q6J("matMenuTriggerFor",x),t.xp6(19),t.hij(" ",t.lcZ(20,12,"lang_auto_tinh_nang_moi")," "),t.xp6(9),t.hij(" ",t.lcZ(29,14,"lang_auto_cong_dong_ho_tro")," "),t.xp6(6),t.hij(" ",t.lcZ(35,16,"lang_auto_fanpage_azota")," "),t.xp6(5),t.Q6J("routerLink",t.VKq(28,S,t.lcZ(40,18,"/admin/testbank/create-website"))),t.xp6(5),t.hij(" ",t.lcZ(45,20,"lang_auto_own_website")," "),t.xp6(3),t.Q6J("routerLink",t.VKq(30,S,t.lcZ(48,22,"/admin/homework/content-store"))),t.xp6(8),t.hij(" ",t.lcZ(56,24,"lang_auto_content_store")," "),t.xp6(11),t.hij(" ",t.lcZ(67,26,"lang_auto_phien_ban")+": "+u.currentVersion," ")}},dependencies:[s.rH,E.VK,E.p6,z.gM,T.Jy,T.JV],encapsulation:2})}return a})();const K=function(a){return[a]};function Q(a,C){1&a&&(t.TgZ(0,"a",1),t.ALo(1,"navigationLocalize"),t.O4$(),t.TgZ(2,"svg",2),t._UZ(3,"path",3)(4,"circle",4)(5,"path",5)(6,"path",6),t.qZA()()),2&a&&t.Q6J("routerLink",t.VKq(3,K,t.lcZ(1,1,"/super-role/admin-tool")))}let j=(()=>{class a extends v.Q{ngOnInit(){super.ngOnInit()}constructor(i){super(),this.userService=i}static#t=this.\u0275fac=function(n){return new(n||a)(t.Y36(U.U))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["footer-admin-menu"]],features:[t.qOj],decls:1,vars:1,consts:[["azt-track-service","footer-admin-menu-7W4rraHk8","class","btn btn-outline-primary dropdown-toggle btn-transparent mb-5 ml-5",3,"routerLink",4,"ngIf"],["azt-track-service","footer-admin-menu-7W4rraHk8",1,"btn","btn-outline-primary","dropdown-toggle","btn-transparent","mb-5","ml-5",3,"routerLink"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round","icon-name","users","data-lucide","users",1,"lucide-users"],["d","M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"],["cx","9","cy","7","r","4"],["d","M23 21v-2a4 4 0 00-3-3.87"],["d","M16 3.13a4 4 0 010 7.75"]],template:function(n,u){1&n&&t.YNc(0,Q,7,5,"a",0),2&n&&t.Q6J("ngIf",u.userService.isSupperAdminRole())},dependencies:[s.rH,e.O5,T.Jy],encapsulation:2})}return a})();function H(a,C){1&a&&(t.TgZ(0,"div",30),t._uU(1),t.ALo(2,"mytranslate"),t.qZA()),2&a&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"lang_cms_test_dashboard_title")," "))}const w=function(a){return[a]};function Y(a,C){1&a&&(t.TgZ(0,"div",17)(1,"a",31),t.ALo(2,"navigationLocalize"),t.TgZ(3,"div",7)(4,"span",8),t._UZ(5,"lucide-icon",32),t.qZA(),t.TgZ(6,"div",10),t._uU(7),t.ALo(8,"mytranslate"),t.qZA()()()()),2&a&&(t.xp6(1),t.Q6J("routerLink",t.VKq(6,w,t.lcZ(2,2,"/document-market/list-documents/all-documents/1"))),t.xp6(6),t.hij(" ",t.lcZ(8,4,"lang_document_market_title")," "))}function q(a,C){1&a&&(t.O4$(),t.kcU(),t.TgZ(0,"div",33),t._UZ(1,"footer-info-menu"),t.TgZ(2,"button",34),t.ALo(3,"mytranslate"),t.ALo(4,"navigationLocalize"),t.O4$(),t.TgZ(5,"svg",35),t._UZ(6,"path",36)(7,"path",37)(8,"path",38)(9,"line",39)(10,"line",40),t.qZA()(),t.kcU(),t.TgZ(11,"a",41),t.ALo(12,"mytranslate"),t.O4$(),t.TgZ(13,"svg",35),t._UZ(14,"circle",42)(15,"path",43)(16,"line",44),t.qZA()(),t.kcU(),t._UZ(17,"footer-admin-menu"),t.qZA()),2&a&&(t.xp6(2),t.s9C("matTooltip",t.lcZ(3,3,"lang_auto_thung_rac")),t.Q6J("routerLink",t.VKq(9,w,t.lcZ(4,5,"/admin/trash/0"))),t.xp6(9),t.s9C("matTooltip",t.lcZ(12,7,"lang_auto_huong_dan")))}let G=(()=>{class a extends v.Q{ngOnInit(){super.ngOnInit(),this.initStatusObj(),this.aztDashboardDataService.getDashboardData(!0,(i,n)=>{n?this.showErrorSnack(n):i?.useWelcomeDashboard&&this.aztDashboardDataService.checkRedirectDashboard(!0)}),this.commonService.translateMetaData({title:"lang_cms_test_dashboard_title",description:"lang_cms_test_dashboard_description",image:"lang_cms_test_image"}),this.mobileWebviewService.sendSimpleMessage("OPEN_MAIN_DASHBOARD")}constructor(i,n,u,x){super(),this.aztDashboardDataService=i,this.mobileWebviewService=n,this.zaloService=u,this.userLoginStateService=x,this.isShowDocumentMarket=(!O.N.production||O.N.isProdAzotaVn)&&!this.isBusinessDomain,this.userLoginStateService.loginMessage.subscribe(()=>{setTimeout(()=>{this.zaloService.zaloInfoRequired()})})}static#t=this.\u0275fac=function(n){return new(n||a)(t.Y36(L.i),t.Y36(N.r),t.Y36(B.i),t.Y36(R.u))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-test-dashboard"]],features:[t.qOj],decls:51,vars:36,consts:[[3,"headerTitle"],[1,"azt-dashboard","w-full","lg:w-80%","mx-auto","sm:mt-10"],["class","text-lg font-medium mt-5 intro-y",4,"ngIf"],[1,"mb-3","grid","grid-cols-12","intro-y","sm:gap-10"],[1,"col-span-12","grid","grid-cols-12","gap-6","mt-4","flex","items-center"],["tourAnchor","azt-tour-1",1,"col-span-6","md:col-span-3","intro-y"],["azt-track-service","dashboard-main-rF6MSAArUsY",3,"routerLink"],[1,"box","p-8","zoom-in"],[1,"block","w-12","h-12","text-primary","mx-auto"],["name","file-text"],[1,"font-medium","text-center","text-base","mt-3"],["tourAnchor","azt-tour-2",1,"col-span-6","md:col-span-3","intro-y"],["azt-track-service","dashboard-main-n5d-c2lLv1K",3,"routerLink"],["name","folder"],["tourAnchor","azt-tour-3",1,"col-span-6","md:col-span-3","intro-y"],["azt-track-service","dashboard-main-4P7SGaAp07c",3,"routerLink"],["name","layers"],["tourAnchor","azt-tour-4",1,"col-span-6","md:col-span-3","intro-y"],["azt-track-service","dashboard-main-7d_U3ZeXpGR",3,"routerLink"],["name","users"],["class","col-span-6 md:col-span-3 intro-y","tourAnchor","azt-tour-4",4,"ngIf"],[1,"intro-y","col-span-12","box","mt-10",2,"display","none"],[1,"flex","flex-col"],[1,"flex","items-center"],["rows","1","placeholder","B\u1ea1n mu\u1ed1n l\xe0m g\xec?...",1,"resize-none","form-control","border-transparent","shadow-none","focus:border-transparent","focus:ring-0",2,"margin","5px","outline","none","border","0","box-shadow","none"],["azt-track-service","dashboard-main-43hyFh5fD","href","javascript:;",1,"w-8","h-8","sm:w-10","sm:h-10","block","text-primary","rounded-full","flex-none","flex","items-center","justify-center","mr-2"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round","icon-name","send","data-lucide","send",1,"lucide","lucide-send","w-4","h-4"],["x1","22","y1","2","x2","11","y2","13"],["points","22 2 15 22 11 13 2 9 22 2"],["class","absolute left-0 bottom-0 index",4,"ngIf"],[1,"text-lg","font-medium","mt-5","intro-y"],["azt-track-service","dashboard-main-2s1OXiSzx",3,"routerLink"],["name","book-open"],[1,"absolute","left-0","bottom-0","index"],["azt-track-service","dashboard-main-78XWJErDG4V",1,"btn","btn-outline-primary","dropdown-toggle","btn-transparent","mb-5","ml-5",3,"matTooltip","routerLink"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M3 6h18"],["d","M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"],["d","M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"],["x1","10","y1","11","x2","10","y2","17"],["x1","14","y1","11","x2","14","y2","17"],["azt-track-service","dashboard-main-J6ZAMHq8uVG","href","https://docs.azota.vn/","target","_blank",1,"btn","btn-outline-primary","dropdown-toggle","btn-transparent","mb-5","ml-5",3,"matTooltip"],["cx","12","cy","12","r","10"],["d","M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"],["x1","12","y1","17","x2","12.01","y2","17"]],template:function(n,u){1&n&&(t.TgZ(0,"teacher-layout",0)(1,"div",1),t.YNc(2,H,3,3,"div",2),t.TgZ(3,"div",3)(4,"div",4)(5,"div",5)(6,"a",6),t.ALo(7,"navigationLocalize"),t.TgZ(8,"div",7)(9,"span",8),t._UZ(10,"lucide-icon",9),t.qZA(),t.TgZ(11,"div",10),t._uU(12),t.ALo(13,"mytranslate"),t.qZA()()()(),t.TgZ(14,"div",11)(15,"a",12),t.ALo(16,"navigationLocalize"),t.TgZ(17,"div",7)(18,"span",8),t._UZ(19,"lucide-icon",13),t.qZA(),t.TgZ(20,"div",10),t._uU(21),t.ALo(22,"mytranslate"),t.qZA()()()(),t.TgZ(23,"div",14)(24,"a",15),t.ALo(25,"navigationLocalize"),t.TgZ(26,"div",7)(27,"span",8),t._UZ(28,"lucide-icon",16),t.qZA(),t.TgZ(29,"div",10),t._uU(30),t.ALo(31,"mytranslate"),t.qZA()()()(),t.TgZ(32,"div",17)(33,"a",18),t.ALo(34,"navigationLocalize"),t.TgZ(35,"div",7)(36,"span",8),t._UZ(37,"lucide-icon",19),t.qZA(),t.TgZ(38,"div",10),t._uU(39),t.ALo(40,"mytranslate"),t.qZA()()()(),t.YNc(41,Y,9,8,"div",20),t.qZA(),t.TgZ(42,"div",21)(43,"div",22)(44,"div",23),t._UZ(45,"textarea",24),t.TgZ(46,"a",25),t.O4$(),t.TgZ(47,"svg",26),t._UZ(48,"line",27)(49,"polygon",28),t.qZA()()()()()(),t.YNc(50,q,18,11,"div",29),t.qZA()()),2&n&&(t.Q6J("headerTitle","dashboard"),t.xp6(2),t.Q6J("ngIf",!u.isMobileWebView),t.xp6(4),t.Q6J("routerLink",t.VKq(28,w,t.lcZ(7,12,"/admin/testbank/document-management/1/0/1"))),t.xp6(6),t.hij(" ",t.lcZ(13,14,"lang_auto_bai_tap")," "),t.xp6(3),t.Q6J("routerLink",t.VKq(30,w,t.lcZ(16,16,"/admin/testbank/document-management/0/0/1"))),t.xp6(6),t.hij(" ",t.lcZ(22,18,"lang_auto_de_thi")," "),t.xp6(3),t.Q6J("routerLink",t.VKq(32,w,t.lcZ(25,20,"/admin/student/manage-class/0"))),t.xp6(6),t.hij(" ",t.lcZ(31,22,"lang_auto_quan_ly_lop")," "),t.xp6(3),t.Q6J("routerLink",t.VKq(34,w,t.lcZ(34,24,"/admin/teacher-group/0/0"))),t.xp6(6),t.hij(" ",t.lcZ(40,26,"lang_auto_doi_nhom")," "),t.xp6(2),t.Q6J("ngIf",u.isShowDocumentMarket),t.xp6(9),t.Q6J("ngIf",!u.isMobileWebView))},dependencies:[s.rH,e.O5,z.gM,D._,r.Nh5,I,j,T.Jy,T.JV],encapsulation:2})}return a})();var $=o(43389);function X(a,C){1&a&&t._UZ(0,"azt-loading-effect")}function tt(a,C){1&a&&t._UZ(0,"footer-info-menu")}function et(a,C){if(1&a){const i=t.EpF();t.TgZ(0,"div",2)(1,"div",3)(2,"h3",4),t._uU(3),t.ALo(4,"mytranslate"),t.qZA(),t.TgZ(5,"p",5),t._UZ(6,"span",6),t.ALo(7,"mytranslate"),t._uU(8,".\xa0 "),t.TgZ(9,"a",7),t._uU(10),t.ALo(11,"mytranslate"),t.qZA()()(),t.TgZ(12,"div",8)(13,"div",9)(14,"div",10)(15,"a",11),t.NdJ("click",function(){t.CHM(i);const u=t.oxw();return t.KtG(u.redirectToCreateDocument())}),t.TgZ(16,"div",12)(17,"span",13),t._UZ(18,"lucide-icon",14),t.qZA(),t.TgZ(19,"div",15),t._uU(20),t.ALo(21,"mytranslate"),t.qZA()()()(),t.TgZ(22,"div",10)(23,"a",16),t.NdJ("click",function(){t.CHM(i);const u=t.oxw();return t.KtG(u.redirectToGlobalBank())}),t.TgZ(24,"div",12)(25,"span",17),t.O4$(),t.TgZ(26,"svg",18),t._UZ(27,"path",19),t.qZA()(),t.kcU(),t.TgZ(28,"div",15),t._uU(29),t.ALo(30,"mytranslate"),t.qZA()()()(),t.TgZ(31,"div",10)(32,"a",20),t.NdJ("click",function(){t.CHM(i);const u=t.oxw();return t.KtG(u.redirectToAzotaBank())}),t.TgZ(33,"div",12)(34,"span",21),t._UZ(35,"lucide-icon",22),t.qZA(),t.TgZ(36,"div",15),t._uU(37),t.ALo(38,"mytranslate"),t.qZA()()()()()()(),t.TgZ(39,"div",23),t.YNc(40,tt,1,0,"footer-info-menu",24),t._UZ(41,"footer-admin-menu"),t.qZA()}if(2&a){const i=t.oxw();t.xp6(3),t.hij(" ",t.lcZ(4,7,"lang_auto_chao_mung_ban_den_voi_azota")+" \u{1f389}"," "),t.xp6(3),t.Q6J("innerHTML",t.lcZ(7,9,"lang_auto_ban_co_the_tao"),t.oJD),t.xp6(4),t.Oqu(t.lcZ(11,11,"lang_auto_tim_hieu_them")),t.xp6(10),t.hij(" ",t.lcZ(21,13,"lang_auto_tao_moi")," "),t.xp6(9),t.hij(" ",t.lcZ(30,15,"lang_testbank_test_list_create_new_from_matrix_bank")," "),t.xp6(8),t.hij(" ",t.lcZ(38,17,"lang_global_azota_download_from_azota_bank")," "),t.xp6(3),t.Q6J("ngIf",!i.isMobileWebView)}}let ot=(()=>{class a extends v.Q{ngOnInit(){this.initStatusObj(),this.aztDashboardDataService.isWelcomeDashboard(!1).subscribe(i=>{i||i||this.aztDashboardDataService.checkRedirectDashboard(!1),this.stopStatusObj()}),super.ngOnInit()}redirectToCreateDocument(){this.commonService.myNavigationWithQueryString("/admin/testbank/create-new-document/0","?backto="+encodeURIComponent("/admin/dashboard-welcome"))}redirectToGlobalBank(){this.commonService.myNavigationWithQueryString("/admin/testbank/matrix-list/0/1","?backto="+encodeURIComponent("/admin/dashboard-welcome"))}redirectToAzotaBank(){this.commonService.myNavigationWithQueryString("/ladingpage/document-management/0/0/1","?backto="+encodeURIComponent("/admin/dashboard-welcome&from=dashboard-welcome"))}constructor(i){super(),this.aztDashboardDataService=i}static#t=this.\u0275fac=function(n){return new(n||a)(t.Y36(L.i))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["dashboard-welcome"]],features:[t.qOj],decls:4,vars:2,consts:[[4,"ngIf","ngIfElse"],["doneLoading",""],[1,"azt-dashboard","w-full","lg:w-80%","mx-auto","sm:mt-10"],[1,"intro-y","mt-5"],[1,"font-medium","text-xl"],[1,"text-md","mt-2"],[3,"innerHTML"],["azt-track-service","dashboard-welcome-pZ4vNL2WA","href","https://docs.azota.vn","target","_blank",1,"btn-text-primary","font-medium"],[1,"mb-3","intro-y","sm:gap-10","mt-10"],[1,"grid","grid-cols-12","gap-6","items-center","mt-4"],[1,"col-span-12","md:col-span-6","lg:col-span-4","h-full","intro-y"],["azt-track-service","dashboard-welcome-rOUx53afllU",3,"click"],[1,"box","flex","items-center","px-5","py-5","zoom-in"],[1,"block","w-8","h-8","text-primary","mr-5"],["name","file-plus-2"],[1,"font-medium","text-lg"],["azt-track-service","dashboard-welcome-Av9Wffvci",3,"click"],[1,"block","w-8","h-8","text-success","mr-5"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"w-8","h-8","text-success"],["d","M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z"],["azt-track-service","dashboard-welcome-UaXl56_mm",3,"click"],[1,"block","w-8","h-8","text-pending","mr-5"],["name","download-cloud"],[1,"absolute","left-0","bottom-0","index"],[4,"ngIf"]],template:function(n,u){if(1&n&&(t.TgZ(0,"teacher-layout"),t.YNc(1,X,1,0,"azt-loading-effect",0),t.YNc(2,et,42,19,"ng-template",null,1,t.W1O),t.qZA()),2&n){const x=t.MAs(3);t.xp6(1),t.Q6J("ngIf",u.statusObj.loading)("ngIfElse",x)}},dependencies:[e.O5,$.l,D._,r.Nh5,I,j,T.JV]})}return a})();const at=[{component:(()=>{class a extends v.Q{static#t=this.\u0275fac=function(){let i;return function(u){return(i||(i=t.n5z(a)))(u||a)}}();static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-dashboard"]],features:[t.qOj],decls:1,vars:0,template:function(n,u){1&n&&t._UZ(0,"router-outlet")},dependencies:[s.lC],encapsulation:2})}return a})(),path:"",canActivate:[Z.J],children:[{path:"dashboard-welcome",component:ot},{path:"dashboard",component:G},{path:"dashboard-v1",redirectTo:"dashboard",pathMatch:"full"}]}];let nt=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275mod=t.oAB({type:a});static#o=this.\u0275inj=t.cJS({imports:[s.Bz.forChild(at),s.Bz,l.fQ]})}return a})(),it=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275mod=t.oAB({type:a});static#o=this.\u0275inj=t.cJS({imports:[s.Bz,e.ez,f.j,h.kb,b.Z_,m.u5,m.UX,g.Is,M.Z,c.xC,A.QG,p.W,d.d,nt,r.qyJ.pick(r.ciZ)]})}return a})()},43048:(y,_,o)=>{o.d(_,{J:()=>g});var h=o(65879),e=o(2816),m=o(79998);let g=(()=>{class s{constructor(r,c){this.userService=r,this.redirectService=c}canActivate(r,c){return!!this.userService.isLogin()||(this.redirectService.redirectLoginAnonymous(c.url),!1)}canActivateChild(r,c){return this.canActivate(r,c)}canLoad(r){const c=`/${r.path}`;return!!this.userService.isLogin()||(this.redirectService.redirectLoginByReturnUrl(c),!1)}static#t=this.\u0275fac=function(c){return new(c||s)(h.LFG(e.U),h.LFG(m.z))};static#e=this.\u0275prov=h.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()},72164:(y,_,o)=>{o.d(_,{e:()=>g});var h=o(19347),e=o(47496),m=o(65879);let g=(()=>{class s extends e.Q{constructor(r,c){super(),this.data=r,this.dialogRef=c}static#t=this.\u0275fac=function(c){return new(c||s)(m.Y36(h.WI),m.Y36(h.so))};static#e=this.\u0275cmp=m.Xpm({type:s,selectors:[["ng-component"]],features:[m.qOj],decls:0,vars:0,template:function(c,A){},encapsulation:2})}return s})()},2783:(y,_,o)=>{o.d(_,{C:()=>m});var h=o(65879),e=o(19347);let m=(()=>{class g{constructor(b){this.dialog=b,this.open=(r,c)=>this.dialog.open(r,c)}static#t=this.\u0275fac=function(r){return new(r||g)(h.LFG(e.uw))};static#e=this.\u0275prov=h.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"})}return g})()},75270:(y,_,o)=>{o.d(_,{h:()=>g});var h=o(20553),e=o(65879),m=o(7444);let g=(()=>{class s{constructor(r){this.configService=r}getCurrentVersion(){return h.N.versionTime}getGlobalNotice(){return this.configService.getConfig("globalNotice")}getEnvValue(r){return this.configService.getConfig(r)}getLinkEmbedDocument(r){var c=this.configService.getConfig("docView");return c&&"MICROSOFT"!=c?`https://docs.google.com/viewer?url=${r}&embedded=true`:`https://view.officeapps.live.com/op/embed.aspx?src=${r}`}getVersionMarkNote(r){if(!r)return 1000009;const f=r.match(/ver=(\d+)/);return Number(f?.[1]??1000009)}static#t=this.\u0275fac=function(c){return new(c||s)(e.LFG(m.V))};static#e=this.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()},6411:(y,_,o)=>{o.d(_,{i:()=>g});var h=o(65879),e=o(2816),m=o(46558);let g=(()=>{class s{constructor(r,c){this.userService=r,this.commonService=c}checkLoginZalo(){if(!this.userService.isLogin())return!1;const r=this.userService.getUserObj();return!(!r.zaloId||r.phone&&10==r.phone.length||r.email&&-1!==r.email.indexOf("@"))}zaloInfoRequired(){this.checkLoginZalo()&&this.commonService.myNavigation("/auth/required-phone-or-email")}static#t=this.\u0275fac=function(c){return new(c||s)(h.LFG(e.U),h.LFG(m.z))};static#e=this.\u0275prov=h.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()},78497:(y,_,o)=>{o.d(_,{R:()=>A});var h=o(47496),e=o(65879),m=o(96814),g=o(19347),s=o(95545);const b=["aztDialogContentBox"],r=function(f){return{"width.px":f,"height.%":100}},c=["*"];let A=(()=>{class f extends h.Q{checkHeightOfElement(){if(this.aztDialogContentBox){var d=this.aztDialogContentBox.nativeElement.querySelector("."+this.contentBoxClassName);if(d){let p=Math.round(window.innerHeight*this.defaultHeight/100),l=d.getBoundingClientRect().height+1;this.aztDialogContentBox.nativeElement.style.height=(l<p?l:p)+"px",this.aztDialogContentBox.nativeElement.style.maxHeight="85vh"}}}ngAfterViewChecked(){setTimeout(()=>{this.ngZone.runOutsideAngular(()=>{this.checkHeightOfElement()})},0)}constructor(d){super(),this.ngZone=d,this.defaultHeight=85,this.defaultWidth=0,this.contentBoxClassName="azt-mat-dialog-content-box"}static#t=this.\u0275fac=function(p){return new(p||f)(e.Y36(e.R0b))};static#e=this.\u0275cmp=e.Xpm({type:f,selectors:[["azt-mat-dialog-content"]],viewQuery:function(p,l){if(1&p&&e.Gf(b,5),2&p){let Z;e.iGM(Z=e.CRH())&&(l.aztDialogContentBox=Z.first)}},inputs:{defaultHeight:"defaultHeight",defaultWidth:"defaultWidth"},features:[e.qOj],ngContentSelectors:c,decls:5,vars:6,consts:[["aztDialogContentBox",""],["pointerEventsMethod","scrollbar",3,"visibility","ngStyle"]],template:function(p,l){1&p&&(e.F$t(),e.TgZ(0,"mat-dialog-content",null,0)(2,"ng-scrollbar",1)(3,"div"),e.Hsn(4),e.qZA()()()),2&p&&(e.xp6(2),e.Q6J("visibility","hover")("ngStyle",e.VKq(4,r,l.defaultWidth||"auto")),e.xp6(1),e.Tol(l.contentBoxClassName))},dependencies:[m.PC,g.xY,s.KC],encapsulation:2})}return f})()},43389:(y,_,o)=>{o.d(_,{l:()=>M});var h=o(47496),e=o(65879),m=o(96814),g=o(16007),s=o(40750);function b(d,p){if(1&d&&(e.O4$(),e.kcU(),e._UZ(0,"mat-progress-bar",10)),2&d){const l=e.oxw();e.Q6J("value",l.progress_value)}}function r(d,p){if(1&d&&(e.O4$(),e.kcU(),e.TgZ(0,"div",11),e._uU(1),e.qZA()),2&d){const l=e.oxw();e.xp6(1),e.Oqu(l.getMsg())}}function c(d,p){if(1&d){const l=e.EpF();e.O4$(),e.kcU(),e.TgZ(0,"div",12),e._uU(1),e.ALo(2,"mytranslate"),e.TgZ(3,"a",13),e.NdJ("click",function(){e.CHM(l);const v=e.oxw();return e.KtG(v.isShowErrorsBox=!v.isShowErrorsBox)}),e._uU(4),e.ALo(5,"mytranslate"),e.ALo(6,"mytranslate"),e.qZA()()}if(2&d){const l=e.oxw();e.xp6(1),e.hij(" ",e.lcZ(2,2,"lang_auto_da_xay_ra_loi_trong_qua_trinh_trao_doi_du_lieu_")," "),e.xp6(3),e.hij(" ",l.isShowErrorsBox?e.lcZ(5,4,"lang_auto_an_chi_tiet"):e.lcZ(6,6,"lang_auto_xem_chi_tiet")," ")}}function A(d,p){if(1&d&&(e.O4$(),e.kcU(),e.TgZ(0,"div",12),e._uU(1),e.qZA()),2&d){const l=e.oxw();e.xp6(1),e.hij(" ",l.LogErrorsRequest," ")}}function f(d,p){if(1&d&&(e.O4$(),e.kcU(),e.TgZ(0,"div",14),e._uU(1),e.ALo(2,"mytranslate"),e.qZA()),2&d){const l=e.oxw();e.xp6(1),e.Oqu(l.customText?l.customText:e.lcZ(2,1,"lang_auto_dang_tai_du_lieu")+"...")}}let M=(()=>{class d extends h.Q{constructor(){super(...arguments),this.progress_value=-1,this.LogErrorsRequest=!1,this.customText="",this.isShowErrorsBox=!1}getMsg(){let l="";return 100==this.progress_value||0==this.progress_value?(l=this.commonService.myTranslateInstant("lang_auto_dang_xu_ly")??"",`${l} ...`):(l=this.commonService.myTranslateInstant("lang_auto_dang_tai_tep_tin_len_he_thong")??"",`${l}... ${this.progress_value} %`)}static#t=this.\u0275fac=function(){let l;return function(v){return(l||(l=e.n5z(d)))(v||d)}}();static#e=this.\u0275cmp=e.Xpm({type:d,selectors:[["azt-loading-effect"]],inputs:{progress_value:"progress_value",LogErrorsRequest:"LogErrorsRequest",customText:"customText"},features:[e.qOj],decls:12,vars:5,consts:[[1,"box-loading","h-full"],[1,"text-center","py-4"],["version","1.1","id","jobing-j-drawit","id","Layer_1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","x","0px","y","0px","viewBox","0 0 109 92.9",0,"xml","space","preserve",1,"w-12","mx-auto",2,"enable-background","new 0 0 109 92.9"],["d","M90.8,52c3.5,6.2,7.1,11.7,9.8,17.7c4.4,9.7-2.9,20.7-13.8,20.9c-11.8,0.2-23.7,0.2-35.5,0 c-11-0.1-17.6-12.2-12-21.7c0.4-0.8,1.8-1.4,2.7-1.4c9.9-0.1,19.7-0.1,29.6-0.1c9.8,0,15.9-4.6,18.7-14C90.4,53.2,90.5,52.9,90.8,52 z",1,"azt-svg-loading","jobing-j"],["d","M39.6,90.3c-6.8,0-13.8,0.8-20.5-0.2c-9.7-1.4-15-12.8-10.3-21.3c5.9-10.9,12.1-21.6,18.5-32.2 c5.5-9,18.6-8.7,24.2,0.2c0.7,1.1,0.8,1.9,0.1,3.1C46.7,48.3,42,57,36.8,65.3c-5.3,8.4-3.8,18.8,2.5,24.6 C39.5,89.9,39.5,90.2,39.6,90.3z",1,"azt-svg-loading","jobing-j"],["d","M32.5,27.3c3.3-5.7,6.1-11,9.4-16c5.9-9.1,19.4-9.2,25.1,0c6.5,10.4,12.6,21,18.3,31.7 c4.8,9-1.5,19.9-11.5,20.7c-1.6,0.1-2.6-0.2-3.5-1.8c-4.8-8.6-9.8-17.1-14.7-25.6c-4.7-8.3-12.5-11.6-21.7-9.2 C33.6,27.1,33.3,27.1,32.5,27.3z",1,"azt-svg-loading","jobing-j"],["style","margin-bottom: 30px; border-radius: 5px","mode","buffer",3,"value",4,"ngIf"],["class","note text-center font-weight-bold",4,"ngIf","ngIfElse"],["class","alert alert-danger mt-3","role","alert",4,"ngIf"],["notLoading",""],["mode","buffer",2,"margin-bottom","30px","border-radius","5px",3,"value"],[1,"note","text-center","font-weight-bold"],["role","alert",1,"alert","alert-danger","mt-3"],["azt-track-service","loading-effect-5TYv52U-wgq","href","javscript:void(0)",3,"click"],[1,"note","text-center","font-medium"]],template:function(Z,v){if(1&Z&&(e.TgZ(0,"div",0)(1,"div",1),e.O4$(),e.TgZ(2,"svg",2),e._UZ(3,"path",3)(4,"path",4)(5,"path",5),e.qZA()(),e.YNc(6,b,1,1,"mat-progress-bar",6),e.YNc(7,r,2,1,"div",7),e.YNc(8,c,7,8,"div",8),e.YNc(9,A,2,1,"div",8),e.YNc(10,f,3,3,"ng-template",null,9,e.W1O),e.qZA()),2&Z){const O=e.MAs(11);e.xp6(6),e.Q6J("ngIf",-1!=v.progress_value),e.xp6(1),e.Q6J("ngIf",-1!=v.progress_value)("ngIfElse",O),e.xp6(1),e.Q6J("ngIf",!1!==v.LogErrorsRequest),e.xp6(1),e.Q6J("ngIf",v.isShowErrorsBox)}},dependencies:[m.O5,g.pW,s.JV],encapsulation:2})}return d})()}}]);