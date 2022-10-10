"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[592],{71572:(b,v,a)=>{a.d(v,{o:()=>c});var t=a(55330),n=a(5e3),m=a(92181),e=a(87238),l=a(1033);let c=(()=>{class d extends t.Q{constructor(){super(...arguments),this.linkUrl="",this.id="",this.fileName=""}bindUrlToQrCode(){let i=document.getElementById("qrcode_making"+this.id);i&&(i.textContent="");try{this.qrcode=this.commonService.createObjectQrcode(this.linkUrl,128,128,"url",!1,"qrcode_making"+this.id)}catch(r){console.log("Create qrcode error")}}downloadQrCode(){try{var i=this.qrcode._oDrawing.dataURL,r=document.createElement("a");document.body.appendChild(r),r.setAttribute("href",i),r.setAttribute("download",""!=this.fileName?this.commonService.createFileNameExportFile([this.fileName])+".jpg":this.commonService.createFileNameExportFile(["azota-qr-code-"])+".jpg"),r.click()}catch(u){console.log("Download qrcode error")}}}return d.\u0275fac=function(){let p;return function(r){return(p||(p=n.n5z(d)))(r||d)}}(),d.\u0275cmp=n.Xpm({type:d,selectors:[["azt-download-qr-code"]],inputs:{linkUrl:"linkUrl",id:"id",fileName:"fileName"},features:[n.qOj],decls:26,vars:8,consts:[[1,"btn","btn-outline-primary","btn-transparent","p-1",3,"matMenuTriggerFor","matTooltip","click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"w-6","h-6"],["x","3","y","3","width","5","height","5","rx","1"],["x","16","y","3","width","5","height","5","rx","1"],["x","3","y","16","width","5","height","5","rx","1"],["d","M21 16h-3a2 2 0 0 0-2 2v3"],["d","M21 21v.01"],["d","M12 7v3a2 2 0 0 1-2 2H7"],["d","M3 12h.01"],["d","M12 3h.01"],["d","M12 16v.01"],["d","M16 12h1"],["d","M21 12v.01"],["d","M12 21v-1"],["showQrCode","matMenu"],[1,"box","p-3","text-center",3,"click"],[1,"upload-qr-box-item-content-qr",3,"id"],[1,"btn","btn-outline-primary","btn-transparent","btn-sm","mx-auto","mt-2",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"w-4","h-4","mr-2"],["d","M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"],["points","7 10 12 15 17 10"],["x1","12","y1","15","x2","12","y2","3"]],template:function(i,r){if(1&i&&(n.TgZ(0,"button",0),n.NdJ("click",function(){return r.bindUrlToQrCode()}),n.ALo(1,"mytranslate"),n.O4$(),n.TgZ(2,"svg",1),n._UZ(3,"rect",2)(4,"rect",3)(5,"rect",4)(6,"path",5)(7,"path",6)(8,"path",7)(9,"path",8)(10,"path",9)(11,"path",10)(12,"path",11)(13,"path",12)(14,"path",13),n.qZA()(),n.kcU(),n.TgZ(15,"mat-menu",null,14)(17,"div",15),n.NdJ("click",function(f){return f.stopPropagation()}),n._UZ(18,"div",16),n.TgZ(19,"a",17),n.NdJ("click",function(){return r.downloadQrCode()}),n.O4$(),n.TgZ(20,"svg",18),n._UZ(21,"path",19)(22,"polyline",20)(23,"line",21),n.qZA(),n._uU(24),n.ALo(25,"mytranslate"),n.qZA()()()),2&i){const u=n.MAs(16);n.s9C("matTooltip",n.lcZ(1,4,"lang_auto_quet_hoac_tai_ma_qr_code")),n.Q6J("matMenuTriggerFor",u),n.xp6(18),n.MGl("id","qrcode_making",r.id,""),n.xp6(6),n.hij(" ",n.lcZ(25,6,"lang_auto_tai_ve_may")," ")}},dependencies:[m.VK,m.p6,e.gM,l.bT]}),d})()},69692:(b,v,a)=>{a.d(v,{f:()=>f});var t=a(5e3),n=a(93075),m=a(55330),e=a(41303),l=a(35018),c=a(69808),d=a(87238),p=a(1033);function i(_,h){if(1&_){const o=t.EpF();t.TgZ(0,"div",7)(1,"div",8),t.NdJ("click",function(){const O=t.CHM(o).$implicit,C=t.oxw(2);return t.KtG(C.selectedClass(O))}),t.TgZ(2,"div",9)(3,"div",10)(4,"span",11),t._uU(5),t.ALo(6,"slice"),t.qZA()(),t.TgZ(7,"div",12)(8,"span",13),t._uU(9),t.ALo(10,"mytranslate"),t.qZA()()()()()}if(2&_){const o=h.$implicit;let s;t.xp6(4),t.s9C("matTooltip",o.name&&o.name.length>30?o.name:""),t.xp6(1),t.Oqu(o.name&&o.name.length>30?t.Dn7(6,3,o.name,0,28)+"..":o.name),t.xp6(4),t.hij(" ",t.lcZ(10,7,"lang_auto_si_so")+": "+(null!==(s=o.countStudents)&&void 0!==s?s:0)," ")}}function r(_,h){if(1&_&&(t.TgZ(0,"div")(1,"div",3)(2,"p",4),t._uU(3),t.ALo(4,"mytranslate"),t.qZA()(),t.TgZ(5,"div",5),t.YNc(6,i,11,9,"div",6),t.qZA()()),2&_){const o=t.oxw();t.xp6(3),t.hij(" ",t.lcZ(4,2,"lang_auto_chon_lop")," "),t.xp6(3),t.Q6J("ngForOf",o.classList)}}function u(_,h){1&_&&(t.TgZ(0,"div",14)(1,"h5",15),t._uU(2),t.ALo(3,"mytranslate"),t.qZA()()),2&_&&(t.xp6(2),t.hij(" ",t.lcZ(3,1,"lang_auto_de_thi_chua_duoc_cau_hinh_theo_lop_vui_long_lien_he_voi_giao_vien")," "))}let f=(()=>{class _ extends m.Q{constructor(o,s){super(s),this.fb=o,this.commonService=s,this.dataClass=[],this.isSearchTeacher=!1,this.isMobile=!1,this.selectClassroom=new t.vpe,this.approvedByName=new t.vpe,this.formName=new n.nJ({}),this.classList=[],this.classObj={}}approvedToClass(){var o=this.commonService.getFormObj(this.formName);this.approvedByName.emit({nameEmit:o.fullName,classId:this.classObj.id})}selectedClass(o){this.selectClassroom.emit({classObj:o,type:1})}ngOnChanges(){this.dataClass&&this.dataClass.length>0&&(this.classList=this.dataClass)}ngOnInit(){this.formName=this.fb.group({fullName:new n.p4("",[n.kI.required,e._.noWhiteSpace])}),this.dataClass&&this.dataClass.length>0&&(this.classList=this.dataClass),super.ngOnInit()}}return _.\u0275fac=function(o){return new(o||_)(t.Y36(n.QS),t.Y36(l.v))},_.\u0275cmp=t.Xpm({type:_,selectors:[["app-select-classes"]],inputs:{dataClass:"dataClass",isSearchTeacher:"isSearchTeacher",isMobile:"isMobile"},outputs:{selectClassroom:"selectClassroom",approvedByName:"approvedByName"},features:[t.qOj,t.TTD],decls:4,vars:2,consts:[[1,"azt-select-class-component"],[4,"ngIf","ngIfElse"],["NoClassData",""],[1,"text-center","mt-5"],[1,"font-medium"],[1,"grid","grid-cols-12","gap-5","mt-3","px-5"],["class","col-span-12 md:col-span-4 lg:col-span-3 zoom-in",4,"ngFor","ngForOf"],[1,"col-span-12","md:col-span-4","lg:col-span-3","zoom-in"],[1,"flex","items-center","p-3","rounded-md","bg-slate-100","dark:bg-darkmode-300",2,"min-height","80px","background-color","#c1d9f159",3,"click"],[1,"ml-2","text-left","mt-0","w-full"],[1,"azt-student-name"],[1,"font-medium",3,"matTooltip"],[1,"mt-1"],[1,"text-xs","text-slate-500","font-medium"],[1,"text-center","alert","alert-danger","mt-3"],[1,"text-medium","mb-0"]],template:function(o,s){if(1&o&&(t.TgZ(0,"div",0),t.YNc(1,r,7,4,"div",1),t.YNc(2,u,4,3,"ng-template",null,2,t.W1O),t.qZA()),2&o){const g=t.MAs(3);t.xp6(1),t.Q6J("ngIf",s.classList&&s.classList.length>0)("ngIfElse",g)}},dependencies:[c.sg,c.O5,d.gM,c.OU,p.bT],encapsulation:2}),_})()},58410:(b,v,a)=>{a.d(v,{P:()=>f});var t=a(93075),n=a(48966),m=a(55330),e=a(5e3),l=a(74202),c=a(35018),d=a(74693),p=a(42873),i=a(69808),r=a(1033);function u(_,h){1&_&&(e.TgZ(0,"span"),e.O4$(),e.TgZ(1,"svg",14)(2,"g",15)(3,"g",16),e._UZ(4,"circle",17),e.TgZ(5,"path",18),e._UZ(6,"animateTransform",19),e.qZA()()()()())}let f=(()=>{class _ extends m.Q{constructor(o,s,g,O,C,D){super(s),this.router=o,this.commonService=s,this.frontStudentService=g,this.redirectService=O,this.dialogRef=C,this.data=D,this.formName=new t.nJ({})}sendRequest(){var o,s,g;this.initStatusObj(),this.frontStudentService.apiFrontStudentRequestForReApproveStudentGet(null===(o=this.data)||void 0===o?void 0:o.classId,null!==(g=null===(s=this.data)||void 0===s?void 0:s.studentObj)&&void 0!==g&&g.id?this.data.studentObj.id:0).subscribe(O=>{var C;1==O.success?(this.dialogRef.close("success"),this.successStatusObj()):(this.dialogRef.close("error"),this.errorStatusObj(null!==(C=O.message)&&void 0!==C?C:""))})}btnCloseDialog(){this.dialogRef.close("close")}goToLogin(){this.redirectService.redirectToLoginBackLinkWithFromRegister(`${this.router.url}`)}ngOnChanges(){var o;null!==(o=this.data)&&void 0!==o&&o.studentObj&&(this.studentObj=this.data.studentObj)}ngOnInit(){var o;!(null===(o=this.data)||void 0===o)&&o.studentObj&&(this.studentObj=this.data.studentObj),super.ngOnInit()}}return _.\u0275fac=function(o){return new(o||_)(e.Y36(l.F0),e.Y36(c.v),e.Y36(d.Dn),e.Y36(p.V),e.Y36(n.so,8),e.Y36(n.WI,8))},_.\u0275cmp=e.Xpm({type:_,selectors:[["app-send-request"]],features:[e.qOj,e.TTD],decls:40,vars:40,consts:[[1,"box"],[1,"border-b","border-slate-200/60","dark:border-darkmode-400"],[1,"p-5"],[1,"text-md","font-medium","flex","items-center"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"w-6","h-6","mr-2","text-pending"],["points","7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"],["x1","12","y1","8","x2","12","y2","12"],["x1","12","y1","16","x2","12.01","y2","16"],[1,"mt-2"],[1,"text-md"],[1,"p-3","text-right"],[1,"btn","btn-secondary","w-24","mr-2",3,"click"],[1,"btn","w-40","btn-primary",3,"click"],[4,"ngIf"],["width","25","viewBox","-2 -2 42 42","xmlns","http://www.w3.org/2000/svg","stroke","white",1,"w-4","h-4","mr-2"],["fill","none","fill-rule","evenodd"],["transform","translate(1 1)","stroke-width","4"],["stroke-opacity",".5","cx","18","cy","18","r","18"],["d","M36 18c0-9.94-8.06-18-18-18"],["attributeName","transform","type","rotate","from","0 18 18","to","360 18 18","dur","1s","repeatCount","indefinite"]],template:function(o,s){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h3",3),e.O4$(),e.TgZ(4,"svg",4),e._UZ(5,"polygon",5)(6,"line",6)(7,"line",7),e.qZA(),e._uU(8),e.ALo(9,"mytranslate"),e.qZA(),e.kcU(),e.TgZ(10,"div",8)(11,"p",9),e._uU(12),e.ALo(13,"mytranslate"),e.TgZ(14,"b"),e._uU(15),e.qZA(),e._uU(16),e.ALo(17,"mytranslate"),e.ALo(18,"mytranslate"),e.ALo(19,"mytranslate"),e.TgZ(20,"b"),e._uU(21),e.qZA(),e._uU(22),e.ALo(23,"mytranslate"),e.ALo(24,"mytranslate"),e.ALo(25,"mytranslate"),e.ALo(26,"mytranslate"),e.TgZ(27,"b"),e._uU(28),e.ALo(29,"mytranslate"),e.qZA(),e._uU(30),e.ALo(31,"mytranslate"),e.qZA()()()(),e.TgZ(32,"div",10)(33,"button",11),e.NdJ("click",function(){return s.btnCloseDialog()}),e._uU(34),e.ALo(35,"mytranslate"),e.qZA(),e.TgZ(36,"button",12),e.NdJ("click",function(){return s.sendRequest()}),e.YNc(37,u,7,0,"span",13),e._uU(38),e.ALo(39,"mytranslate"),e.qZA()()()),2&o&&(e.xp6(8),e.hij(" ",e.lcZ(9,14,"lang_auto_hoc_sinh_nay_da_duoc_chon"),"! "),e.xp6(4),e.hij(" ",e.lcZ(13,16,"lang_auto_hoc_sinh")," "),e.xp6(3),e.Oqu(null==s.studentObj?null:s.studentObj.fullName),e.xp6(1),e.AsE(" ",e.lcZ(17,18,"lang_auto_da_duoc_chon_boi_tai_khoan")," ",""!=(null==s.studentObj?null:s.studentObj.last4DigitPhone)?e.lcZ(18,20,"lang_auto_voi_sdt_co_duoi")+" - xxx xxx":e.lcZ(19,22,"lang_auto_voi_ten_zalo")+"-"," "),e.xp6(5),e.Oqu(""!=(null==s.studentObj?null:s.studentObj.last4DigitPhone)?null==s.studentObj?null:s.studentObj.last4DigitPhone:null==s.studentObj?null:s.studentObj.zaloName),e.xp6(1),e.lnq(" ",e.lcZ(23,24,"lang_auto__neu_ban_chac_chan_do_khong_phai")," ",""!=(null==s.studentObj?null:s.studentObj.last4DigitPhone)?e.lcZ(24,26,"lang_auto_so_dt"):e.lcZ(25,28,"lang_auto_ten_tai_khoan_zalo")," ",e.lcZ(26,30,"lang_auto_cua_ban_vui_long_bam_nut")," "),e.xp6(6),e.Oqu(e.lcZ(29,32,"lang_auto_bao_giao_vien")),e.xp6(2),e.hij(" ",e.lcZ(31,34,"lang_auto_de_giao_vien_kiem_tra_lai")," "),e.xp6(4),e.hij(" ",e.lcZ(35,36,"lang_auto_dong")," "),e.xp6(3),e.Q6J("ngIf",s.statusObj.loading),e.xp6(1),e.hij(" ",e.lcZ(39,38,"lang_auto_bao_giao_vien")," "))},dependencies:[i.O5,r.bT],styles:[".school-info_bg[_ngcontent-%COMP%]{z-index:9990;width:100%;display:flex;left:0;top:0;position:fixed;height:100%;background:rgba(0,0,0,.5607843137);min-height:100vh}.school-info[_ngcontent-%COMP%]{z-index:9990;top:50%;left:50%;min-width:30%;transform:translate(-50%,-50%);position:fixed;background:#fff;margin-left:auto;margin-right:auto;box-shadow:0 0 13px 3px #00000094}.close-btn[_ngcontent-%COMP%]{position:absolute;top:-8px;right:-7px;padding:5px 10px;background:#dadada;cursor:pointer;border-radius:20px}.note[_ngcontent-%COMP%]{font-style:italic;font-size:15px;font-weight:600}@media only screen and (max-width: 1024px){.school-info[_ngcontent-%COMP%]{width:95%;max-width:95%}}"]}),_})()},25157:(b,v,a)=>{a.d(v,{N:()=>n});var t=a(5e3);let n=(()=>{class m{constructor(){this.filesChangeEmiter=new t.vpe,this.background="#fff",this.borderStyle="1px dashed",this.borderColor="#1baba1",this.borderRadius="5px"}onDragOver(l){l.preventDefault(),l.stopPropagation(),this.background="#eee",this.borderStyle="1px solid #1baba1"}onDragLeave(l){l.preventDefault(),l.stopPropagation(),this.background="#fff",this.borderStyle="1px dashed #1baba1"}onDrop(l){l.preventDefault(),l.stopPropagation(),this.background="#fff",this.borderStyle="1px dashed #1baba1",this.filesChangeEmiter.emit(l.dataTransfer.files)}}return m.\u0275fac=function(l){return new(l||m)},m.\u0275dir=t.lG2({type:m,selectors:[["","appDragDrop",""]],hostVars:8,hostBindings:function(l,c){1&l&&t.NdJ("dragover",function(p){return c.onDragOver(p)})("dragleave",function(p){return c.onDragLeave(p)})("drop",function(p){return c.onDrop(p)}),2&l&&t.Udp("background",c.background)("border",c.borderStyle)("border-color",c.borderColor)("border-radius",c.borderRadius)},outputs:{filesChangeEmiter:"filesChangeEmiter"}}),m})()},81760:(b,v,a)=>{a.d(v,{F:()=>c});var t=a(591),n=a(5e3),m=a(35018),e=a(42873),l=a(88386);let c=(()=>{class d{constructor(i,r,u){this.commonService=i,this.redirectService=r,this.userService=u,this.webviewMessageSource=new t.X(""),this.webviewMessage=this.webviewMessageSource.asObservable(),this.listenBroadCastChannel=void 0}initBroadCastChannel(){"undefined"!=typeof BroadcastChannel&&BroadcastChannel&&null==this.listenBroadCastChannel&&(this.listenBroadCastChannel=new BroadcastChannel("flutterToAngular"),this._listenBroadChannel(),this.sendReadyToReceivedMessage())}processMessageReceived(i){var r=this.commonService.castJsonToObj(i);if(r&&r.data&&"REDIRECT"===r.type){var u=r.data;if(u.token){var f=this.userService.getUserObjFromJwtToken(u.token);null!=f&&this.userService.saveUserObj(f)}this.redirectService.redirectByUrl(u.path)}}sendExportExcelBase64(i,r){this._sendMessage({type:"EXPORT_EXCEL",status:1,message:"send_from_angular",data:{fileName:i,excelBase64:r}})}sendReadyToReceivedMessage(){this._sendMessage({type:"READY",status:1,message:"send_from_angular",data:{}})}sendComponentLoaded(i){this._sendMessage({type:"COMPONENT_LOADED",status:1,message:"send_from_angular:"+i,data:{}})}_sendMessage(i){"undefined"!=typeof MessageInvoker&&MessageInvoker&&MessageInvoker.postMessage(JSON.stringify(i))}_sendRawMessage(i){"undefined"!=typeof MessageInvoker&&MessageInvoker&&MessageInvoker.postMessage(i)}_listenBroadChannel(){null!=this.listenBroadCastChannel&&(this.listenBroadCastChannel.onmessage=i=>{this._changeWebviewMessage(i.data)})}_changeWebviewMessage(i){this.webviewMessageSource.next(i)}}return d.\u0275fac=function(i){return new(i||d)(n.LFG(m.v),n.LFG(e.V),n.LFG(l.K))},d.\u0275prov=n.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()}}]);