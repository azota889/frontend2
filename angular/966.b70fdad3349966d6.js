(self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[]).push([[966],{60013:(D,v,c)=>{"use strict";c.d(v,{G:()=>s});let s=(()=>{class h{static openLoadingEffect(o){h.getDomElement().style.display="flex",setTimeout(()=>{h.changeMsgLoadingEffect(o)},50)}static closeLoadingEffect(o){return new Promise(m=>{setTimeout(()=>{const p=h.getDomElement();p&&(p.style.display="none"),m(!0)},o)})}static changeMsgLoadingEffect(o){h.getDomContent().innerText=o}static getDomContent(){return document.getElementById(h.idStatusContent)??document.createElement("span")}static getDomElement(){return document.getElementById(h.idComponent)??this.createDomElement()}static createDomElement(){const o=document.createElement("div");return o.id=h.idComponent,o.setAttribute("style","position: fixed;display: flex;width: 100vw;height: 100%;background: #000000c7;color: #ffffff;font-size: 20px;font-weight: lighter;justify-content: center;align-items: center;cursor: progress;z-index: 9999;top: 0;left: 0;"),o.style.display="none",o.innerHTML=`\n        <div class="text-center" style="height: 85%; overflow-x: auto;">\n            <div class="flex justify-center mt-5">\n                <svg width="20" viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg">\n                    <g fill="none" fill-rule="evenodd">\n                        <g transform="translate(2 1)" stroke="currentColor" stroke-width="1.5">\n                            <circle cx="42.601" cy="11.462" r="5" fill-opacity="1" fill="currentColor">\n                                <animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="1;0;0;0;0;0;0;0" calcMode="linear" repeatCount="indefinite"></animate>\n                            </circle>\n                            <circle cx="49.063" cy="27.063" r="5" fill-opacity="0" fill="currentColor">\n                                <animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="0;1;0;0;0;0;0;0" calcMode="linear" repeatCount="indefinite"></animate>\n                            </circle>\n                            <circle cx="42.601" cy="42.663" r="5" fill-opacity="0" fill="currentColor">\n                                <animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="0;0;1;0;0;0;0;0" calcMode="linear" repeatCount="indefinite"></animate>\n                            </circle>\n                            <circle cx="27" cy="49.125" r="5" fill-opacity="0" fill="currentColor">\n                                <animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="0;0;0;1;0;0;0;0" calcMode="linear" repeatCount="indefinite"></animate>\n                            </circle>\n                            <circle cx="11.399" cy="42.663" r="5" fill-opacity="0" fill="currentColor">\n                                <animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="0;0;0;0;1;0;0;0" calcMode="linear" repeatCount="indefinite"></animate>\n                            </circle>\n                            <circle cx="4.938" cy="27.063" r="5" fill-opacity="0" fill="currentColor">\n                                <animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="0;0;0;0;0;1;0;0" calcMode="linear" repeatCount="indefinite"></animate>\n                            </circle>\n                            <circle cx="11.399" cy="11.462" r="5" fill-opacity="0" fill="currentColor">\n                                <animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="0;0;0;0;0;0;1;0" calcMode="linear" repeatCount="indefinite"></animate>\n                            </circle>\n                            <circle cx="27" cy="5" r="5" fill-opacity="0" fill="currentColor">\n                                <animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="0;0;0;0;0;0;0;1" calcMode="linear" repeatCount="indefinite"></animate>\n                            </circle>\n                        </g>\n                    </g>\n                </svg>\n            </div>\n            <div style="margin-top: 10px;position: relative;">\n                <span id="${h.idStatusContent}"></span>\n            </div>\n        </div>`,document.body.appendChild(o),o}}return h.idComponent="azt-status-loading-effect",h.idStatusContent="azt-status-loading-effect-content",h})()},32839:(D,v,c)=>{"use strict";c.d(v,{g:()=>f});var s=c(10217),b=c(60013),o=c(65879),m=c(9853),p=c(87384);let f=(()=>{class r{constructor(e,t){this.mobileWebviewService=e,this.commonService=t}shareFileWithBlob(e,t){if(this.commonService.isMobileWebview(void 0)){b.G.openLoadingEffect(this.commonService.myTranslateInstant("lang_auto_dang_lay_du_lieu_tu_he_thong")??"");let n=new FileReader;n.readAsDataURL(e),n.onloadend=()=>{let i=n.result;"string"==typeof i&&(this.mobileWebviewService.sendShareFileBase64(t,String(i)),b.G.closeLoadingEffect(100))}}else s.saveAs(e,t)}shareFileWithBase64(e,t){this.commonService.isMobileWebview(void 0)?this.mobileWebviewService.sendShareFileBase64(t,e):s.saveAs(e,t)}}return r.\u0275fac=function(e){return new(e||r)(o.LFG(m.r),o.LFG(p.z))},r.\u0275prov=o.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},10217:function(D,v){var c,h;void 0!==(h="function"==typeof(c=function(){"use strict";function o(e,t,n){var i=new XMLHttpRequest;i.open("GET",e),i.responseType="blob",i.onload=function(){d(i.response,t,n)},i.onerror=function(){console.error("could not download file")},i.send()}function m(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch{}return 200<=t.status&&299>=t.status}function p(e){try{e.dispatchEvent(new MouseEvent("click"))}catch{var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,r=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),d=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!r?function(e,t,n){var i=f.URL||f.webkitURL,l=document.createElement("a");l.download=t=t||e.name||"download",l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?p(l):m(l.href)?o(e,t,n):p(l,l.target="_blank")):(l.href=i.createObjectURL(e),setTimeout(function(){i.revokeObjectURL(l.href)},4e4),setTimeout(function(){p(l)},0))}:"msSaveOrOpenBlob"in navigator?function(e,t,n){if(t=t||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function b(e,t){return typeof t>"u"?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,n),t);else if(m(e))o(e,t,n);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout(function(){p(i)})}}:function(e,t,n,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof e)return o(e,t,n);var l="application/octet-stream"===e.type,a=/constructor/i.test(f.HTMLElement)||f.safari,_=/CriOS\/[\d]+/.test(navigator.userAgent);if((_||l&&a||r)&&typeof FileReader<"u"){var u=new FileReader;u.onloadend=function(){var g=u.result;g=_?g:g.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=g:location=g,i=null},u.readAsDataURL(e)}else{var E=f.URL||f.webkitURL,w=E.createObjectURL(e);i?i.location=w:location.href=w,i=null,setTimeout(function(){E.revokeObjectURL(w)},4e4)}});f.saveAs=d.saveAs=d,D.exports=d})?c.apply(v,[]):c)&&(D.exports=h)},28550:(D,v,c)=>{"use strict";c.d(v,{HU:()=>p,l1:()=>f});var s=c(65879),h=c(96814);const b=["contentRef"],o=["*"];let m=(()=>{class r{constructor(e){this.display="inline-block",this._dragDisabled=!1,this._elementRef=e}get dragDisabled(){return this._dragDisabled}set dragDisabled(e){this._dragDisabled=e}}return r.\u0275fac=function(e){return new(e||r)(s.Y36(s.SBq))},r.\u0275dir=s.lG2({type:r,selectors:[["","drag-scroll-item",""]],hostVars:2,hostBindings:function(e,t){2&e&&s.Udp("display",t.display)},inputs:{dragDisabled:["drag-disabled","dragDisabled"]}}),r})(),p=(()=>{class r{constructor(e,t,n){this._elementRef=e,this._renderer=t,this._document=n,this._index=0,this._scrollbarHidden=!1,this._disabled=!1,this._xDisabled=!1,this._xWheelEnabled=!1,this._yDisabled=!1,this._dragDisabled=!1,this._snapDisabled=!1,this._snapOffset=0,this._snapDuration=500,this._isDragging=!1,this.isPressed=!1,this.isScrolling=!1,this.scrollTimer=-1,this.scrollToTimer=-1,this.downX=0,this.downY=0,this.displayType="block",this.elWidth=null,this.elHeight=null,this._pointerEvents="auto",this.scrollbarWidth=null,this.isAnimating=!1,this.prevChildrenLength=0,this.indexBound=0,this.rtl=!1,this.dsInitialized=new s.vpe,this.indexChanged=new s.vpe,this.reachesLeftBound=new s.vpe,this.reachesRightBound=new s.vpe,this.snapAnimationFinished=new s.vpe,this.dragStart=new s.vpe,this.dragEnd=new s.vpe,this.scrollbarWidth=`${this.getScrollbarWidth()}px`}get isDragging(){return this._isDragging}get currIndex(){return this._index}set currIndex(e){e!==this._index&&(this._index=e,this.indexChanged.emit(e))}get scrollbarHidden(){return this._scrollbarHidden}set scrollbarHidden(e){this._scrollbarHidden=e}get disabled(){return this._disabled}set disabled(e){this._disabled=e}get xDisabled(){return this._xDisabled}set xDisabled(e){this._xDisabled=e}get yDisabled(){return this._yDisabled}set yDisabled(e){this._yDisabled=e}get xWheelEnabled(){return this._xWheelEnabled}set xWheelEnabled(e){this._xWheelEnabled=e}get dragDisabled(){return this._dragDisabled}set dragDisabled(e){this._dragDisabled=e}get snapDisabled(){return this._snapDisabled}set snapDisabled(e){this._snapDisabled=e}get snapOffset(){return this._snapOffset}set snapOffset(e){this._snapOffset=e}get snapDuration(){return this._snapDuration}set snapDuration(e){this._snapDuration=e}ngOnChanges(){this.setScrollBar(),this.xDisabled||this.disabled||this._scrollbarHidden?this.disableScroll("x"):this.enableScroll("x"),this.yDisabled||this.disabled?this.disableScroll("y"):this.enableScroll("y")}ngAfterViewInit(){this._renderer.setAttribute(this._contentRef.nativeElement,"drag-scroll","true"),this.displayType=typeof window<"u"?window.getComputedStyle(this._elementRef.nativeElement).display:"block",this._renderer.setStyle(this._contentRef.nativeElement,"display",this.displayType),this._renderer.setStyle(this._contentRef.nativeElement,"whiteSpace","noWrap"),this.markElDimension(),this._renderer.setStyle(this._contentRef.nativeElement,"width",this.elWidth),this._renderer.setStyle(this._contentRef.nativeElement,"height",this.elHeight),this.wrapper&&this.checkScrollbar(),this._onMouseDownListener=this._renderer.listen(this._contentRef.nativeElement,"mousedown",this.onMouseDownHandler.bind(this)),this._onScrollListener=this._renderer.listen(this._contentRef.nativeElement,"scroll",this.onScrollHandler.bind(this)),this._onDragStartListener=this._renderer.listen(this._contentRef.nativeElement,"dragstart",e=>{e.preventDefault()}),this.checkNavStatus(),this.dsInitialized.emit(),this.adjustMarginToLastChild(),this.rtl="rtl"===getComputedStyle(this._contentRef.nativeElement).getPropertyValue("direction")}ngAfterViewChecked(){this._children.length!==this.prevChildrenLength&&(this.markElDimension(),this.checkScrollbar(),this.prevChildrenLength=this._children.length,this.checkNavStatus())}ngOnDestroy(){this._renderer.setAttribute(this._contentRef.nativeElement,"drag-scroll","false"),this._onMouseDownListener&&(this._onMouseDownListener=this._onMouseDownListener()),this._onScrollListener&&(this._onScrollListener=this._onScrollListener()),this._onDragStartListener&&(this._onDragStartListener=this._onDragStartListener())}onMouseMoveHandler(e){this.onMouseMove(e)}onMouseMove(e){if((e.clientX!==this.downX||e.clientY!==this.downY)&&this.isPressed&&!this.disabled){if(!e.buttons&&!e.which)return this.onMouseUpHandler(e);if(this._pointerEvents="none",this._setIsDragging(!0),!this.xDisabled&&!this.dragDisabled){const t=e.clientX;this._contentRef.nativeElement.scrollLeft=this._contentRef.nativeElement.scrollLeft-t+this.downX,this.downX=t}if(!this.yDisabled&&!this.dragDisabled){const t=e.clientY;this._contentRef.nativeElement.scrollTop=this._contentRef.nativeElement.scrollTop-t+this.downY,this.downY=t}}}onMouseDownHandler(e){const t=this.locateDragScrollItem(e.target);if(t&&t.dragDisabled)return;this._startGlobalListening("touchstart"===e.type),this.isPressed=!0;const i=e;this.downX=i.clientX,this.downY=i.clientY,clearTimeout(this.scrollToTimer)}onScrollHandler(){this.checkNavStatus(),this.isPressed||this.isAnimating||this.snapDisabled?this.locateCurrentIndex():(this.isScrolling=!0,clearTimeout(this.scrollTimer),this.scrollTimer=setTimeout(()=>{this.isScrolling=!1,this.locateCurrentIndex(!0)},500))}onMouseUpHandler(e){this.isPressed&&(this.isPressed=!1,this._pointerEvents="auto",this._setIsDragging(!1),this.snapDisabled?this.locateCurrentIndex():this.locateCurrentIndex(!0),this._stopGlobalListening())}moveLeft(){(0!==this.currIndex||this.snapDisabled)&&(this.currIndex--,clearTimeout(this.scrollToTimer),this.scrollTo(this._contentRef.nativeElement,this.toChildrenLocation(),this.snapDuration))}moveRight(){const e=this.wrapper||this.parentNode,t=e?e.clientWidth:0;!this.isScrollReachesRightEnd()&&this.currIndex<this.maximumIndex(t,this._children.toArray())&&(this.currIndex++,clearTimeout(this.scrollToTimer),this.scrollTo(this._contentRef.nativeElement,this.toChildrenLocation(),this.snapDuration))}moveTo(e){const t=this.wrapper||this.parentNode,n=t?t.clientWidth:0;e>=0&&e!==this.currIndex&&this.currIndex<=this.maximumIndex(n,this._children.toArray())&&(this.currIndex=Math.min(e,this.maximumIndex(n,this._children.toArray())),clearTimeout(this.scrollToTimer),this.scrollTo(this._contentRef.nativeElement,this.toChildrenLocation(),this.snapDuration))}checkNavStatus(){setTimeout(()=>{this._children.length<=1||this._contentRef.nativeElement.scrollWidth<=this._contentRef.nativeElement.clientWidth?(this.reachesLeftBound.emit(!0),this.reachesRightBound.emit(!0)):this.isScrollReachesRightEnd()?(this.reachesLeftBound.emit(!1),this.reachesRightBound.emit(!0)):0===this._contentRef.nativeElement.scrollLeft&&this._contentRef.nativeElement.scrollWidth>this._contentRef.nativeElement.clientWidth?(this.reachesLeftBound.emit(!0),this.reachesRightBound.emit(!1)):(this.reachesLeftBound.emit(!1),this.reachesRightBound.emit(!1))},0)}onWheel(e){this._xWheelEnabled&&(e.preventDefault(),this._snapDisabled?this._contentRef.nativeElement.scrollBy(e.deltaY,0):e.deltaY<0?this.moveLeft():e.deltaY>0&&this.moveRight())}onWindowResize(){this.refreshWrapperDimensions(),this.checkNavStatus()}_setIsDragging(e){this._isDragging!==e&&(this._isDragging=e,e?this.dragStart.emit():this.dragEnd.emit())}_startGlobalListening(e){this._onMouseMoveListener||(this._onMouseMoveListener=this._renderer.listen("document",e?"touchmove":"mousemove",this.onMouseMoveHandler.bind(this))),this._onMouseUpListener||(this._onMouseUpListener=this._renderer.listen("document",e?"touchend":"mouseup",this.onMouseUpHandler.bind(this)))}_stopGlobalListening(){this._onMouseMoveListener&&(this._onMouseMoveListener=this._onMouseMoveListener()),this._onMouseUpListener&&(this._onMouseUpListener=this._onMouseUpListener())}disableScroll(e){this._renderer.setStyle(this._contentRef.nativeElement,`overflow-${e}`,"hidden")}enableScroll(e){this._renderer.setStyle(this._contentRef.nativeElement,`overflow-${e}`,"auto")}hideScrollbar(){"none"!==this._contentRef.nativeElement.style.display&&!this.wrapper&&(this.parentNode=this._contentRef.nativeElement.parentNode,this.wrapper=this._renderer.createElement("div"),this._renderer.setAttribute(this.wrapper,"class","drag-scroll-wrapper"),this._renderer.addClass(this.wrapper,"drag-scroll-container"),this.refreshWrapperDimensions(),this._renderer.setStyle(this.wrapper,"overflow","hidden"),this._renderer.setStyle(this._contentRef.nativeElement,"width",`calc(100% + ${this.scrollbarWidth})`),this._renderer.setStyle(this._contentRef.nativeElement,"height",`calc(100% + ${this.scrollbarWidth})`),this._renderer.appendChild(this._elementRef.nativeElement,this.wrapper),this._renderer.appendChild(this.wrapper,this._contentRef.nativeElement),this.adjustMarginToLastChild())}showScrollbar(){this.wrapper&&(this._renderer.setStyle(this._contentRef.nativeElement,"width","100%"),this._renderer.setStyle(this._contentRef.nativeElement,"height",this.wrapper.style.height),null!==this.parentNode&&(this.parentNode.removeChild(this.wrapper),this.parentNode.appendChild(this._contentRef.nativeElement)),this.wrapper=null,this.adjustMarginToLastChild())}checkScrollbar(){this._renderer.setStyle(this._contentRef.nativeElement,"height",this._contentRef.nativeElement.scrollWidth<=this._contentRef.nativeElement.clientWidth?"100%":`calc(100% + ${this.scrollbarWidth})`),this._renderer.setStyle(this._contentRef.nativeElement,"width",this._contentRef.nativeElement.scrollHeight<=this._contentRef.nativeElement.clientHeight?"100%":`calc(100% + ${this.scrollbarWidth})`)}setScrollBar(){this.scrollbarHidden?this.hideScrollbar():this.showScrollbar()}getScrollbarWidth(){const e=this._renderer.createElement("div");this._renderer.setStyle(e,"visibility","hidden"),this._renderer.setStyle(e,"width","100px"),this._renderer.setStyle(e,"msOverflowStyle","scrollbar"),this._renderer.appendChild(this._document.body,e);const t=e.offsetWidth;this._renderer.setStyle(e,"overflow","scroll");const n=this._renderer.createElement("div");this._renderer.setStyle(n,"width","100%"),this._renderer.appendChild(e,n);const i=n.offsetWidth;return this._renderer.removeChild(this._document.body,e),t-i||20}refreshWrapperDimensions(){this.wrapper&&(this._renderer.setStyle(this.wrapper,"width","100%"),this._renderer.setStyle(this.wrapper,"height",this._elementRef.nativeElement.style.height>0||this._elementRef.nativeElement.offsetHeight>0?this._elementRef.nativeElement.style.height||this._elementRef.nativeElement.offsetHeight+"px":"100%"))}scrollTo(e,t,n){const i=this;i.isAnimating=!0;const a=e.scrollLeft,_=(this.rtl?-1:1)*t-a-this.snapOffset;let E=0;const g=function(){var y,S,R;E+=20,e.scrollLeft=(y=E,S=a,R=_,(y/=n/2)<1?R/2*y*y+S:-R/2*(--y*(y-2)-1)+S),E<n?i.scrollToTimer=setTimeout(g,20):setTimeout(()=>{i.isAnimating=!1,i.snapAnimationFinished.emit(i.currIndex)},20)};g()}locateCurrentIndex(e){const t=Math.abs(this._contentRef.nativeElement.scrollLeft);this.currentChildWidth((n,i,l,a,_)=>{t>=l&&t<=i?(i-t>n/2&&!this.isScrollReachesRightEnd()?(this.isAnimating||(this.currIndex=a),e&&this.scrollTo(this._contentRef.nativeElement,l,this.snapDuration)):0!==t&&(this.isAnimating||(this.currIndex=a+1),e&&this.scrollTo(this._contentRef.nativeElement,l+n,this.snapDuration)),_()):a+1===this._children.length-1&&(this.isAnimating||(this.currIndex=a+1),_())})}currentChildWidth(e){let t=0,n=!1;const i=function(){n=!0},l=this._children.toArray();for(let a=0;a<l.length&&a!==l.length-1&&!n;a++){const u=l[a]._elementRef.nativeElement.clientWidth;e(u,t+l[a+1]._elementRef.nativeElement.clientWidth,t,a,i),t+=u}}toChildrenLocation(){let e=0;const t=this._children.toArray();for(let n=0;n<this.currIndex;n++)e+=t[n]._elementRef.nativeElement.clientWidth;return e}locateDragScrollItem(e){let t=null;const n=this._children.toArray();for(let i=0;i<n.length;i++)e===n[i]._elementRef.nativeElement&&(t=n[i]);return t}markElDimension(){this.wrapper?(this.elWidth=this.wrapper.style.width,this.elHeight=this.wrapper.style.height):(this.elWidth=this._elementRef.nativeElement.style.width||this._elementRef.nativeElement.offsetWidth+"px",this.elHeight=this._elementRef.nativeElement.style.height||this._elementRef.nativeElement.offsetHeight+"px");const e=this.wrapper||this.parentNode;this._children.length>1&&(this.indexBound=this.maximumIndex(e?e.clientWidth:0,this._children.toArray()))}maximumIndex(e,t){let n=0,i=0;for(let l=0;l<=t.length;l++){const a=t[t.length-1-l];if(!a)break;{const _=a._elementRef.nativeElement;let u=_.clientWidth;if(0===u&&_.firstElementChild&&(u=a._elementRef.nativeElement.firstElementChild.clientWidth),i+=u,!(i<e))break;n++}}return t.length-n}isScrollReachesRightEnd(){return Math.abs(this._contentRef.nativeElement.scrollLeft)+this._contentRef.nativeElement.offsetWidth>=this._contentRef.nativeElement.scrollWidth}adjustMarginToLastChild(){if(this._children&&this._children.length>0&&this.hideScrollbar){const e=this._children.toArray();this._renderer.setStyle(e[e.length-1]._elementRef.nativeElement,"margin-right",this.wrapper&&e.length>1?this.scrollbarWidth:0)}}}return r.\u0275fac=function(e){return new(e||r)(s.Y36(s.SBq),s.Y36(s.Qsj),s.Y36(h.K0))},r.\u0275cmp=s.Xpm({type:r,selectors:[["drag-scroll"]],contentQueries:function(e,t,n){if(1&e&&s.Suo(n,m,5),2&e){let i;s.iGM(i=s.CRH())&&(t._children=i)}},viewQuery:function(e,t){if(1&e&&s.Gf(b,7),2&e){let n;s.iGM(n=s.CRH())&&(t._contentRef=n.first)}},hostVars:2,hostBindings:function(e,t){1&e&&s.NdJ("wheel",function(i){return t.onWheel(i)})("resize",function(){return t.onWindowResize()},!1,s.Jf7),2&e&&s.Udp("pointer-events",t._pointerEvents)},inputs:{scrollbarHidden:["scrollbar-hidden","scrollbarHidden"],disabled:["drag-scroll-disabled","disabled"],xDisabled:["drag-scroll-x-disabled","xDisabled"],yDisabled:["drag-scroll-y-disabled","yDisabled"],xWheelEnabled:["scroll-x-wheel-enabled","xWheelEnabled"],dragDisabled:["drag-disabled","dragDisabled"],snapDisabled:["snap-disabled","snapDisabled"],snapOffset:["snap-offset","snapOffset"],snapDuration:["snap-duration","snapDuration"]},outputs:{dsInitialized:"dsInitialized",indexChanged:"indexChanged",reachesLeftBound:"reachesLeftBound",reachesRightBound:"reachesRightBound",snapAnimationFinished:"snapAnimationFinished",dragStart:"dragStart",dragEnd:"dragEnd"},features:[s.TTD],ngContentSelectors:o,decls:3,vars:0,consts:[[1,"drag-scroll-content"],["contentRef",""]],template:function(e,t){1&e&&(s.F$t(),s.TgZ(0,"div",0,1),s.Hsn(2),s.qZA())},styles:["[_nghost-%COMP%]{overflow:hidden;display:block}.drag-scroll-content[_ngcontent-%COMP%]{height:100%;overflow:auto;white-space:nowrap}"]}),r})(),f=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=s.oAB({type:r}),r.\u0275inj=s.cJS({}),r})()}}]);