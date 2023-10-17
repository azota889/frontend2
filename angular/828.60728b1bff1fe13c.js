"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[828],{75270:(x,g,o)=>{o.d(g,{h:()=>e});var s=o(20553),m=o(65879),v=o(7444);let e=(()=>{class c{constructor(r){this.configService=r}getCurrentVersion(){return s.N.versionTime}getGlobalNotice(){return this.configService.getConfig("globalNotice")}getEnvValue(r){return this.configService.getConfig(r)}getLinkEmbedDocument(r){var l=this.configService.getConfig("docView");return l&&"MICROSOFT"!=l?`https://docs.google.com/viewer?url=${r}&embedded=true`:`https://view.officeapps.live.com/op/embed.aspx?src=${r}`}getVersionMarkNote(r){if(!r)return 1000009;const p=r.match(/ver=(\d+)/);return Number(p?.[1]??1000009)}static#e=this.\u0275fac=function(l){return new(l||c)(m.LFG(v.V))};static#t=this.\u0275prov=m.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()},49821:(x,g,o)=>{o.d(g,{B:()=>c});var s=o(65879),m=o(47496),v=o(75270),e=o(28380);let c=(()=>{class f extends m.Q{onLoad(){setTimeout(()=>{this.loadedEvent.emit(!0)},0)}checkValidLink(){this.whiteListOfficeIframeSrc=this.envService.getLinkEmbedDocument(this.cdnLink)}ngOnChanges(){this.checkValidLink()}ngOnInit(){super.ngOnInit(),this.checkValidLink()}constructor(l){super(),this.envService=l,this.videoMimesType="",this.classNames="",this.styles="",this.loadedEvent=new s.vpe,this.whiteListOfficeIframeSrc=""}static#e=this.\u0275fac=function(_){return new(_||f)(s.Y36(v.h))};static#t=this.\u0275cmp=s.Xpm({type:f,selectors:[["azt-office-embed"]],inputs:{cdnLink:"cdnLink",videoMimesType:"videoMimesType",classNames:"classNames",styles:"styles"},outputs:{loadedEvent:"loadedEvent"},features:[s.qOj,s.TTD],decls:2,vars:6,consts:[["frameborder","0",3,"src","load"]],template:function(_,p){1&_&&(s.TgZ(0,"iframe",0),s.NdJ("load",function(){return p.onLoad()}),s.ALo(1,"safe"),s.qZA()),2&_&&(s.Tol(p.classNames),s.Q6J("src",s.lcZ(1,4,p.whiteListOfficeIframeSrc),s.uOi),s.uIk("style",p.styles,s.Ckj))},dependencies:[e.CR],encapsulation:2})}return f})()},15828:(x,g,o)=>{o.d(g,{q:()=>S});var s=o(19347),m=o(72164),v=o(61713),e=o(65879),c=o(6593),f=o(32965),r=o(75270),l=o(96814),_=o(21494),p=o(72969),h=o(47496);let C=(()=>{class i extends h.Q{constructor(){super(...arguments),this.audioMimesType="",this.loadedEvent=new e.vpe}onLoad(){setTimeout(()=>{this.loadedEvent.emit(!0)},0)}static#e=this.\u0275fac=function(){let t;return function(a){return(t||(t=e.n5z(i)))(a||i)}}();static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["azt-audio-embed"]],inputs:{cdnLink:"cdnLink",audioMimesType:"audioMimesType"},outputs:{loadedEvent:"loadedEvent"},features:[e.qOj],decls:3,vars:2,consts:[["controls",""],[3,"src","load"]],template:function(n,a){1&n&&(e.TgZ(0,"audio",0)(1,"source",1),e.NdJ("load",function(){return a.onLoad()}),e.qZA(),e._uU(2," Your browser does not support the audio element.\n"),e.qZA()),2&n&&(e.xp6(1),e.Q6J("src",a.cdnLink,e.LSH),e.uIk("type",a.audioMimesType))},encapsulation:2})}return i})();var O=o(49821),M=o(28380);function T(i,d){1&i&&(e.TgZ(0,"div",2)(1,"div",3)(2,"span",4),e._uU(3,"Loading..."),e.qZA()()())}function b(i,d){if(1&i&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"mytranslate"),e.qZA()),2&i){const t=e.oxw(3);e.xp6(1),e.AsE("",e.lcZ(2,2,"lang_auto_dung_luong"),": ",t.fileMb," MB | ")}}function y(i,d){if(1&i&&(e.TgZ(0,"div",22),e.YNc(1,b,3,4,"span",23),e._uU(2),e.ALo(3,"mytranslate"),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",0!=t.fileMb),e.xp6(1),e.AsE("",e.lcZ(3,3,"lang_auto_loai")," : ",t.fileOption.mimes,"")}}function A(i,d){1&i&&(e.TgZ(0,"div",22),e._uU(1),e.ALo(2,"mytranslate"),e.qZA()),2&i&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"lang_auto_dung_luong_03_mb_|_loai__images")))}function L(i,d){if(1&i&&(e.TgZ(0,"a",24),e.O4$(),e.TgZ(1,"svg",16),e._UZ(2,"path",25)(3,"polyline",26)(4,"line",27),e.qZA()()),2&i){const t=e.oxw(2);e.uIk("href",t.rootLink,e.LSH)("download",t.fileOption.name)}}function z(i,d){if(1&i){const t=e.EpF();e.TgZ(0,"azt-audio-embed",34),e.NdJ("onLoad",function(){e.CHM(t);const a=e.oxw(4);return e.KtG(a.onLoad())}),e.qZA()}if(2&i){const t=e.oxw(4);let n;e.Q6J("cdnLink",t.cdnLink)("audioMimesType",null!==(n=t.fileOption.mimes)&&void 0!==n?n:"")}}function P(i,d){if(1&i&&(e.TgZ(0,"div")(1,"div",32),e.YNc(2,z,1,2,"azt-audio-embed",33),e.qZA()()),2&i){const t=e.oxw(3);e.xp6(2),e.Q6J("ngIf",t.cdnLink)}}function N(i,d){if(1&i){const t=e.EpF();e.TgZ(0,"div")(1,"div",35)(2,"azt-video-embed",36),e.NdJ("loadedEvent",function(){e.CHM(t);const a=e.oxw(3);return e.KtG(a.onLoad())}),e.qZA()()()}if(2&i){const t=e.oxw(3);let n;e.xp6(2),e.Q6J("cdnLink",t.cdnLink)("videoMimesType",null!==(n=t.fileOption.mimes)&&void 0!==n?n:"")("videoThumbUrl",t.videoThumbUrl)("styles","width: 100vw; height: 95vh; max-height: calc(100vh - 60px); padding-bottom: 1rem")}}function Z(i,d){if(1&i){const t=e.EpF();e.TgZ(0,"div")(1,"div",37)(2,"azt-office-embed",38),e.NdJ("loadedEvent",function(){e.CHM(t);const a=e.oxw(3);return e.KtG(a.onLoad())}),e.qZA()()()}if(2&i){const t=e.oxw(3);e.xp6(2),e.Q6J("cdnLink",t.cdnLink)("styles","width: 100vw; height: 95vh; max-height: calc(100vh - 60px); padding-bottom: 1rem")}}function E(i,d){if(1&i){const t=e.EpF();e.TgZ(0,"div")(1,"div",39)(2,"pdf-viewer",40),e.NdJ("load",function(){e.CHM(t);const a=e.oxw(3);return e.KtG(a.onLoad())}),e.qZA()()()}if(2&i){const t=e.oxw(3);e.xp6(2),e.Q6J("src",t.cdnLink)("show-all",!0)}}function I(i,d){if(1&i){const t=e.EpF();e.TgZ(0,"div")(1,"div",35)(2,"img",41),e.NdJ("load",function(){e.CHM(t);const a=e.oxw(3);return e.KtG(a.onLoad())}),e.qZA()()()}if(2&i){const t=e.oxw(3);e.xp6(2),e.uIk("src",t.cdnLink,e.LSH)}}function k(i,d){if(1&i&&(e.ynx(0),e.TgZ(1,"div",28)(2,"div",29),e.YNc(3,P,3,1,"div",23),e.YNc(4,N,3,4,"div",23),e.YNc(5,Z,3,2,"div",23),e.YNc(6,E,3,2,"div",23),e.YNc(7,I,3,1,"div",23),e._UZ(8,"div",30),e.qZA(),e._UZ(9,"div",31),e.qZA(),e.BQk()),2&i){const t=e.oxw(2);e.xp6(3),e.Q6J("ngIf","audio"===t.typeFile),e.xp6(1),e.Q6J("ngIf","video"===t.typeFile),e.xp6(1),e.Q6J("ngIf","officeapps"===t.typeFile),e.xp6(1),e.Q6J("ngIf","pdf"===t.typeFile),e.xp6(1),e.Q6J("ngIf","image"===t.typeFile)}}function F(i,d){if(1&i){const t=e.EpF();e.TgZ(0,"div",28)(1,"div",29)(2,"div",42)(3,"img",43),e.NdJ("load",function(){e.CHM(t);const a=e.oxw(2);return e.KtG(a.onLoad())}),e.qZA()()()()}if(2&i){const t=e.oxw(2);e.xp6(3),e.uIk("src",t.fileOption.url,e.LSH)}}const J=function(i){return{flex:i}};function D(i,d){if(1&i){const t=e.EpF();e.TgZ(0,"div",5)(1,"div",6)(2,"div",7)(3,"div",8),e._UZ(4,"div",9),e.qZA(),e.TgZ(5,"div",10),e._uU(6),e.qZA(),e.YNc(7,y,4,5,"div",11),e.YNc(8,A,3,3,"div",11),e.qZA(),e.TgZ(9,"div",12)(10,"span",13),e.YNc(11,L,5,2,"a",14),e.qZA(),e.TgZ(12,"button",15),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.btnClosePreview())}),e.O4$(),e.TgZ(13,"svg",16),e._UZ(14,"line",17)(15,"line",18),e.qZA()()()(),e.kcU(),e.TgZ(16,"div",19),e.YNc(17,k,10,5,"ng-container",20),e.YNc(18,F,4,1,"ng-template",null,21,e.W1O),e.qZA()()}if(2&i){const t=e.MAs(19),n=e.oxw();e.xp6(2),e.Q6J("ngClass",e.VKq(7,J,""==n.fileOption.name)),e.xp6(4),e.Oqu(n.fileOption.name),e.xp6(1),e.Q6J("ngIf",n.fileOption.mimes),e.xp6(1),e.Q6J("ngIf",!n.fileOption.mimes),e.xp6(3),e.Q6J("ngIf",n.showDownloadIcon),e.xp6(6),e.Q6J("ngIf",!n.viewFullImageWithScroll)("ngIfElse",t)}}let S=(()=>{class i extends m.e{onLoad(){this.stopStatusObj()}initData(){let t=this.fileOption?.size?Number(this.fileOption.size):0,n=this.fileOption?.mimes?this.fileOption.mimes:"";this.cdnLink=this.cdnService.getMyCdn(this.fileOption?.url??""),this.rootLink=this.cdnLink,this.fileMb=this.getFileMB(t),this.typeFile=(0,v.Z9)(n),(0,v.xN)(this.cdnLink)&&(this.typeFile="video"),setTimeout(()=>{this.stopStatusObj()},200)}removeClassCss(){document.body.classList.remove("overflow-hidden")}btnClosePreview(){this.removeClassCss(),this.dialogRef.close(!1)}getFileMB(t){return t&&t>0?(t/=1048576).toFixed(2):0}ngOnInit(){super.ngOnInit(),document.body.classList.add("overflow-hidden"),this.videoThumbUrl=this.cdnService.convertCdnLinkOfGitHub("azota_assets/images/video-thumb.png"),this.initStatusObj(),this.initData()}constructor(t,n,a,w,u){super(u,w),this.dom=t,this.cdnService=n,this.envService=a,this.dialogRef=w,this.viewFullImageWithScroll=!1,this.showDownloadIcon=!0,this.typeFile="",this.cdnLink="",this.rootLink="",this.fileMb=0,this.videoThumbUrl="",this.fileOption=u.fileOption,this.viewFullImageWithScroll=u.viewFullImageWithScroll??!1,this.showDownloadIcon=u.showDownloadIcon??this.showDownloadIcon}ngOnDestroy(){this.removeClassCss(),super.ngOnDestroy()}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(c.H7),e.Y36(f.E),e.Y36(r.h),e.Y36(s.so,8),e.Y36(s.WI,8))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["azt-preview-media-new"]],features:[e.qOj],decls:2,vars:2,consts:[["class","loading-block",4,"ngIf"],["class","box h-full","style","border-radius:0px",4,"ngIf"],[1,"loading-block"],["role","status",1,"spinner-border","text-secondary",2,"width","5rem","height","5rem"],[1,"sr-only"],[1,"box","h-full",2,"border-radius","0px"],[1,"flex","fixed","top-0","pt-3","border-b","border-slate-200/60","dark:border-darkmode-400","items-center","w-full"],[1,"file-preview__header-left",2,"align-items","center",3,"ngClass"],["title","",1,"avatar","avatar--xs"],[1,"avatar-img",2,"background-image","url('https://cdn.jsdelivr.net/gh/azota889/storage_public/azota_assets/images/documents.png')","background-size","cover"],[1,"file-preview__header__title"],["class","file-preview__header__send-time",4,"ngIf"],[1,"file-preview__header-right"],[1,"mr-4"],["class","btn btn-outline-primary btn-transparent","target","_blank",4,"ngIf"],["azt-track-service","azt-preview-media-c4Ztzr2oIZj",1,"btn","btn-outline-secondary","btn-transparent",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"w-6","h-6"],["x1","18","y1","6","x2","6","y2","18"],["x1","6","y1","6","x2","18","y2","18"],[1,"file-preview__main","flx",2,"overflow-x","auto","flex","1 1 auto"],[4,"ngIf","ngIfElse"],["viewFullImage",""],[1,"file-preview__header__send-time"],[4,"ngIf"],["target","_blank",1,"btn","btn-outline-primary","btn-transparent"],["d","M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"],["points","7 10 12 15 17 10"],["x1","12","y1","15","x2","12","y2","3"],[1,"file-preview__main-iframe","mx-auto"],[1,"file-preview__notify"],[1,"tool-hide"],[1,"file-preview__main-comments"],[1,"container-fluid","mt-3"],[3,"cdnLink","audioMimesType","onLoad",4,"ngIf"],[3,"cdnLink","audioMimesType","onLoad"],[1,"pl-2","pr-2","mt-3"],[3,"cdnLink","videoMimesType","videoThumbUrl","styles","loadedEvent"],[1,"pl-2","pr-2","mp-0"],[3,"cdnLink","styles","loadedEvent"],[1,"container-fluid","mp-0"],[2,"width","100vw","height","95vh","max-height","calc(100vh - 60px)","padding-bottom","1rem","display","block",3,"src","show-all","load"],["alt","Responsive image",1,"img-fluid","image-preview",2,"max-height","calc(100vh - 80px)","padding-bottom","1rem",3,"load"],[1,"pl-2","pr-2","mt-3","block-img"],[1,"img-fluid","image-preview",3,"load"]],template:function(n,a){1&n&&(e.YNc(0,T,4,0,"div",0),e.YNc(1,D,20,9,"div",1)),2&n&&(e.Q6J("ngIf",a.statusObj.loading),e.xp6(1),e.Q6J("ngIf",null!=a.fileOption&&!a.statusObj.loading))},dependencies:[l.mk,l.O5,_.rQ,p.f,C,O.B,M.JV],styles:[".file-preview[_ngcontent-%COMP%]{position:fixed;width:100%;height:100vh;z-index:9999;display:flex;flex-direction:column;left:0;top:0;border-radius:0}.block-img[_ngcontent-%COMP%]{width:100vw;height:90vh;text-align:center;overflow-y:auto}.loading-block[_ngcontent-%COMP%]{z-index:1000;width:100%;display:flex;justify-content:center;align-items:center;left:0;top:0;position:fixed;height:100%;min-height:100vh}.file-preview__main[_ngcontent-%COMP%]{margin-top:65px;width:100%;min-height:100%;min-width:277px;display:flex;position:fixed}.file-preview__header[_ngcontent-%COMP%]{padding-top:10px;height:65px;box-shadow:0 2px 4px #0003;position:fixed;align-items:center;z-index:1;top:0;width:100%}.flx-sp-btw[_ngcontent-%COMP%]{justify-content:space-between}.flx[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap}.file-preview__header-left[_ngcontent-%COMP%]{margin-left:20px;margin-right:10px;margin-bottom:12px;flex:1 1 50px;min-width:0}.file-preview__header-left[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{float:left;margin-right:10px}.avatar--xs[_ngcontent-%COMP%]{width:40px;height:40px;font-size:17px}.avatar[_ngcontent-%COMP%]{position:relative;contain:layout size style}.avatar--xs[_ngcontent-%COMP%] > .avatar-img[_ngcontent-%COMP%]{width:40px;height:40px}.avatar-img[_ngcontent-%COMP%]{border-radius:100%}.file-preview__header__title[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.file-preview__header__send-time[_ngcontent-%COMP%], .file-preview__header__title[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.file-preview__header__send-time[_ngcontent-%COMP%]{padding-top:2px;font-size:13px;color:#a0a0a0}.file-preview__header-right[_ngcontent-%COMP%]{margin-right:15px;white-space:nowrap;display:flex}.file-preview__controls-container[_ngcontent-%COMP%]{margin-right:40px}.mp-0[_ngcontent-%COMP%]{margin:0!important;padding:0!important}"]})}return i})()}}]);