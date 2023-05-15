"use strict";(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[979],{44944:(P,y,v)=>{v.d(y,{Y:()=>g});var p=v(94650);let g=(()=>{class m{constructor(e){this.el=e,this.hasDecimalPoint=!1,this.hasNegativeSign=!1,this.navigationKeys=["Backspace","Delete","Tab","Escape","Enter","Home","End","ArrowLeft","ArrowRight","Clear","Copy","Paste"],this.decimal=!1,this.decimalSeparator1=".",this.decimalSeparator2=",",this.allowNegatives=!1,this.allowPaste=!0,this.negativeSign="-",this.min=-1/0,this.max=1/0,this.regex=null,this.inputElement=e.nativeElement}ngOnChanges(e){if(e.pattern&&(this.regex=this.pattern?RegExp(this.pattern):null),e.min){const i=Number(this.min);this.min=isNaN(i)?-1/0:i}if(e.max){const i=Number(this.max);this.max=isNaN(i)?1/0:i}}onBeforeInput(e){if(isNaN(Number(e.data))){if(e.data===this.decimalSeparator1||e.data===this.decimalSeparator2||e.data===this.negativeSign&&this.allowNegatives)return;e.preventDefault(),e.stopPropagation()}}onKeyDown(e){if(this.navigationKeys.indexOf(e.key)>-1||("a"===e.key||"KeyA"===e.code)&&!0===e.ctrlKey||("c"===e.key||"KeyC"===e.code)&&!0===e.ctrlKey||("v"===e.key||"KeyV"===e.code)&&!0===e.ctrlKey||("x"===e.key||"KeyX"===e.code)&&!0===e.ctrlKey||("a"===e.key||"KeyA"===e.code)&&!0===e.metaKey||("c"===e.key||"KeyC"===e.code)&&!0===e.metaKey||("v"===e.key||"KeyV"===e.code)&&!0===e.metaKey||("x"===e.key||"KeyX"===e.code)&&!0===e.metaKey)return;let i="";var l=e.key;if(e.key===this.decimalSeparator2&&(l=this.decimalSeparator1),this.decimal&&l===this.decimalSeparator1)return i=this.forecastValue(l),i.split(this.decimalSeparator1).length>2||(this.hasDecimalPoint=i.indexOf(this.decimalSeparator1)>-1,this.setNewValue(l)),void e.preventDefault();if(l===this.negativeSign&&this.allowNegatives)return i=this.forecastValue(l),i.charAt(0)!==this.negativeSign||i.split(this.negativeSign).length>2?void e.preventDefault():void(this.hasNegativeSign=i.split(this.negativeSign).length>-1);if(" "===l||isNaN(Number(l)))return void e.preventDefault();if(i=i||this.forecastValue(l),this.regex&&!this.regex.test(i))return void e.preventDefault();const r=Number(i);(r>this.max||r<this.min)&&e.preventDefault()}onPaste(e){if(!0===this.allowPaste){let i="";window.clipboardData?i=window.clipboardData.getData("text"):e.clipboardData&&e.clipboardData.getData&&(i=e.clipboardData.getData("text/plain")),this.pasteData(i),e.preventDefault()}else e.preventDefault(),e.stopPropagation()}onDrop(e){var i,l;const r=null!==(l=null===(i=e.dataTransfer)||void 0===i?void 0:i.getData("text"))&&void 0!==l?l:"";this.inputElement.focus(),this.pasteData(r),e.preventDefault()}pasteData(e){e=e.replace(",",".");const i=this.sanitizeInput(e);if(!i.includes(this.negativeSign)||!this.hasNegativeSign||this.getSelection().includes(this.negativeSign)){if(!document.execCommand("insertText",!1,i))if(this.inputElement.setRangeText){const{selectionStart:r,selectionEnd:h}=this.inputElement;this.inputElement.setRangeText(i,r??0,h??0,"end"),typeof window.InstallTrigger<"u"&&this.inputElement.dispatchEvent(new Event("input",{cancelable:!0}))}else this.insertAtCursor(this.inputElement,i);this.decimal&&(this.hasDecimalPoint=this.inputElement.value.indexOf(this.decimalSeparator1)>-1),this.hasNegativeSign=this.inputElement.value.indexOf(this.negativeSign)>-1}}setNewValue(e){e=e.replace(",","."),this.insertAtCursor(this.inputElement,e),this.decimal&&(this.hasDecimalPoint=this.inputElement.value.indexOf(this.decimalSeparator1)>-1),this.hasNegativeSign=this.inputElement.value.indexOf(this.negativeSign)>-1}insertAtCursor(e,i){var l,r;const h=null!==(l=e.selectionStart)&&void 0!==l?l:0,t=null!==(r=e.selectionEnd)&&void 0!==r?r:0;e.value=e.value.substring(0,h)+i+e.value.substring(t,e.value.length);const a=h+i.length;e.focus(),e.setSelectionRange(a,a),this.triggerEvent(e,"input")}triggerEvent(e,i){if("createEvent"in document){const l=document.createEvent("HTMLEvents");l.initEvent(i,!1,!0),e.dispatchEvent(l)}}sanitizeInput(e){let l,i="";l=this.decimal&&this.isValidDecimal(e)?new RegExp(`${this.getNegativeSignRegExp()}[^0-9${this.decimalSeparator1}]`,"g"):new RegExp(`${this.getNegativeSignRegExp()}[^0-9]`,"g"),i=e.replace(l,"");const r=this.inputElement.maxLength;if(r>0){const h=r-this.inputElement.value.length+(i.includes(`${this.negativeSign}`)?1:0);i=h>0?i.substring(0,h):""}return i}getNegativeSignRegExp(){return!this.allowNegatives||this.hasNegativeSign&&!this.getSelection().includes(this.negativeSign)?"":`(?!^${this.negativeSign})`}isValidDecimal(e){if(this.hasDecimalPoint){const i=this.getSelection();return i&&i.indexOf(this.decimalSeparator1)>-1?e.split(this.decimalSeparator1).length<=2:e.indexOf(this.decimalSeparator1)<0}return e.split(this.decimalSeparator1).length<=2}getSelection(){var e,i;return this.inputElement.value.substring(null!==(e=this.inputElement.selectionStart)&&void 0!==e?e:0,null!==(i=this.inputElement.selectionEnd)&&void 0!==i?i:0)}forecastValue(e){var i,l;const r=null!==(i=this.inputElement.selectionStart)&&void 0!==i?i:0,h=null!==(l=this.inputElement.selectionEnd)&&void 0!==l?l:0,t=this.inputElement.value;return t.substring(0,r)+e+t.substring(h)}}return m.\u0275fac=function(e){return new(e||m)(p.Y36(p.SBq))},m.\u0275dir=p.lG2({type:m,selectors:[["","appOnlyNumber",""]],hostBindings:function(e,i){1&e&&p.NdJ("beforeinput",function(r){return i.onBeforeInput(r)})("keydown",function(r){return i.onKeyDown(r)})("paste",function(r){return i.onPaste(r)})("drop",function(r){return i.onDrop(r)})},inputs:{decimal:"decimal",decimalSeparator1:"decimalSeparator1",decimalSeparator2:"decimalSeparator2",allowNegatives:"allowNegatives",allowPaste:"allowPaste",negativeSign:"negativeSign",min:"min",max:"max",pattern:"pattern"},features:[p.TTD]}),m})()},296:(P,y,v)=>{v.d(y,{S:()=>l});var p=v(70655),g=v(94650),m=v(60940),S=v(15043),e=v(90893),i=v(20814);let l=(()=>{class r{constructor(t,a,n,o){this.commonService=t,this.cdnService=a,this.customQuestionAnswerConfig=n,this.exportPdfUtilsService=o}processEssayResultToBase64(t){var a,n,o,c,s;return(0,p.mG)(this,void 0,void 0,function*(){for(const d of null!==(a=t.pages)&&void 0!==a?a:[]){if(d.draw){this.cdnService.isViettelCDN(null!==(o=null===(n=t.pages)||void 0===n?void 0:n[0].backgroundImage)&&void 0!==o?o:"")&&(yield this.exportPdfUtilsService.asyncTimeout(500));const u=yield this.exportPdfUtilsService.convertAndRetryToBase64(d.draw);d.draw=u}if(this.cdnService.isViettelCDN(null!==(s=null===(c=t.pages)||void 0===c?void 0:c[0].backgroundImage)&&void 0!==s?s:"")&&(yield this.exportPdfUtilsService.asyncTimeout(500)),d.backgroundImage){const u=yield this.exportPdfUtilsService.convertAndRetryToBase64(d.backgroundImage);d.backgroundImage=u}}if(t.commentEmoji&&t.commentEmoji.length){let d="https://azota889.github.io/storage_public/mnote/",u=t.commentEmoji.length;for(let f=0;f<u;f++){let _=d+t.commentEmoji[f];const E=yield this.exportPdfUtilsService.convertAndRetryToBase64(_);t.commentEmoji[f]=E}}return t})}processGroupImagesToBase64(t,a){var n,o,c;return(0,p.mG)(this,void 0,void 0,function*(){if(t&&null!==(n=t?.[0].name)&&void 0!==n&&n.startsWith("[PDFv2]"))for(const s of t)if(t[0].questionContentParse&&this.cdnService.isViettelCDN(null!==(o=t[0].questionContentParse[0].groupUrl)&&void 0!==o?o:"")&&(yield this.exportPdfUtilsService.asyncTimeout(500)),s.questionContentParse&&s.questionContentParse[0].groupUrl&&a.includes(null!==(c=s.indexLabel)&&void 0!==c?c:-1)){const d=yield this.exportPdfUtilsService.convertAndRetryToBase64(s.questionContentParse[0].groupUrl);s.questionContentParse[0].groupUrl=d}})}processQuestionImagesToBase64(t){var a,n,o,c;return(0,p.mG)(this,void 0,void 0,function*(){if(1==t[0].isImage)for(const s of t){this.cdnService.isViettelCDN(null!==(n=null===(a=t[0].questionContentParse)||void 0===a?void 0:a[0].url)&&void 0!==n?n:"")&&(yield this.exportPdfUtilsService.asyncTimeout(500));const d=yield this.exportPdfUtilsService.convertAndRetryToBase64(null!==(c=null===(o=s.questionContentParse)||void 0===o?void 0:o[0].url)&&void 0!==c?c:"");s.questionContentParse&&(s.questionContentParse[0].url=d)}})}processQuestionDocxContentToBase64(t){var a,n,o,c;return(0,p.mG)(this,void 0,void 0,function*(){if(0==t[0].isImage)for(const d of t){var s=this.exportPdfUtilsService.findImageSrcInContent(null!==(n=null===(a=d.questionContentParse)||void 0===a?void 0:a[0].content)&&void 0!==n?n:"");if(this.cdnService.isViettelCDN(s)&&(yield this.exportPdfUtilsService.asyncTimeout(500)),s&&!s.includes(";base64")){const u=yield this.exportPdfUtilsService.convertAndRetryToBase64(s);null!==(c=null===(o=d.questionContentParse)||void 0===o?void 0:o[0].content)&&void 0!==c&&c.includes("img")&&u&&(d.questionContentParse[0].content=d.questionContentParse[0].content.replace(s,u))}}})}convertAnswersArr(t,a){0!=t.length&&t.forEach(n=>{n.QuestionId&&n.AnswerContent&&n.AnswerContent[0]&&n.AnswerContent[0].Content&&(a[`id_${n.QuestionId}`]=n.AnswerContent[0].Content)})}findScaleDirection(t,a){return t/a>=.7070707070707071?"w":"h"}}return r.\u0275fac=function(t){return new(t||r)(g.LFG(m.v),g.LFG(S.U),g.LFG(e.U),g.LFG(i.V))},r.\u0275prov=g.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},20814:(P,y,v)=>{v.d(y,{V:()=>l});var p=v(70655),g=v(94650),m=v(60940),S=v(15043),e=v(24029),i=(()=>{return(r=i||(i={}))[r.Cdn=0]="Cdn",r[r.CdnTimestamp=1]="CdnTimestamp",r[r.Rawlink=2]="Rawlink",r[r.RawlinkTimestamp=3]="RawlinkTimestamp",i;var r})();let l=(()=>{class r{constructor(t,a,n){this.commonService=t,this.cdnService=a,this.answerTypeService=n}get blockCropItemClass(){return"__CANVAS_CROP_ITEM"}get blockEssayCropItemClass(){return"_ESSAY"}isSupportedBrowser(){let t=this.commonService.getBrowserType().toString();return!(!["chrome"].includes(t.split(" ")[0].toLowerCase())||parseInt(t.split(" ")[1],10)<80)}getExtensionFile(t){if(!t)return"";var a=t.split(".");return a.length<=1?"":a[a.length-1].toLocaleLowerCase().split("_")[0]}translateMetaTitle(t){var a,n,o,c;let s="Export PDF: ";this.commonService.translateMetaData({title:s+(null===(n=null===(a=t.data)||void 0===a?void 0:a.examObj)||void 0===n?void 0:n.name),description:s+(null===(c=null===(o=t.data)||void 0===o?void 0:o.examObj)||void 0===c?void 0:c.name),image:"lang_cms_test_image"})}findImageSrcInContent(t){var a="";if(t.includes("img")){var n=t.indexOf("img"),o=t.indexOf("src=",n),c=t.indexOf('"',Number(o)+5);a=t.substring(Number(o)+5,Number(c))}return a}asyncTimeout(t){return(0,p.mG)(this,void 0,void 0,function*(){return`Waited ${yield new Promise(n=>{setTimeout(()=>n(t),t)})} miliseconds`})}parseEssayMarkResult(t,a){let n=t.filter(s=>this.answerTypeService.isEssayAnswer(s.answerType));if(0!=n.length&&a&&a.essayResult){var o=this.commonService.willDeleteParseJson(a.essayResult);if(o){var c=Object.entries(o);for(let s=0;s<n.length;s++)n[s].essayMarkParsed=c[s][1]}}}convertToBase64(t,a){return(0,p.mG)(this,void 0,void 0,function*(){let n=t;switch(a){case i.Cdn:n=this.cdnService.getMyCdn(t);break;case i.CdnTimestamp:n=this.cdnService.getMyCdn(t)+"?t="+Date.now();break;case i.RawlinkTimestamp:n=t+"?t="+Date.now()}const c=yield(yield fetch(n)).blob(),s=yield new Promise(d=>{const u=new FileReader;u.readAsDataURL(c),u.onloadend=()=>{d(u.result)}});return s&&"string"==typeof s?s:t})}convertAndRetryToBase64(t){return(0,p.mG)(this,void 0,void 0,function*(){let a=this.getExtensionFile(t);if(["pdf","jpg","jpeg","png","gif"].includes(a)){let n;const o=[i.Cdn,i.CdnTimestamp,i.Rawlink,i.RawlinkTimestamp];if(this.cdnService.isViettelCDN(t))try{n=yield this.convertToBase64(t,o[0])}catch{try{yield this.asyncTimeout(500),n=yield this.convertToBase64(t,o[1])}catch{n=t}}else try{n=yield this.convertToBase64(t,o[0])}catch{try{n=yield this.convertToBase64(t,o[1])}catch{try{n=yield this.convertToBase64(t,o[2])}catch{try{n=yield this.convertToBase64(t,o[3])}catch{console.log("Kh\xf4ng th\u1ec3 convert url n\xe0y th\xe0nh base64 sau v\xe0i l\u1ea7n retry: "+t),n=t}}}}return n}return t})}eraseCanvas(t){t&&(t.beginPath(),t.rect(0,0,t.canvas.width,t.canvas.height),t.fillStyle="white",t.fill())}addContentToPdf(t,a){t.addImage(a,"JPEG",0,0,t.internal.pageSize.getWidth(),t.internal.pageSize.getHeight())}drawTextWrap(t,a,n,o,c){let s=t.split(" "),d=[],u=s[0];if(a){a.font=c||`${o}px Arial`;for(let f=1;f<s.length;f++){let _=s[f];a.measureText(u+" "+_).width<n?u+=" "+_:(d.push(u),u=_)}d.push(u)}return d}essayText2LinesArr(t,a,n,o,c){var s;let d=new RegExp("(<br>|<br/>)+","igm"),f=(null!==(s=this.commonService.replaceAllByRegExp(t,d,"<br>"))&&void 0!==s?s:"").split("<br>"),_=[];for(let E=0;E<f.length;E++)_.push(this.drawTextWrap(f[E],a,n,o,c));return _}}return r.\u0275fac=function(t){return new(t||r)(g.LFG(m.v),g.LFG(S.U),g.LFG(e.T))},r.\u0275prov=g.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);