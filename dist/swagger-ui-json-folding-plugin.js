/*! For license information please see swagger-ui-json-folding-plugin.js.LICENSE.txt */
(()=>{var t={133:(t,e,r)=>{"use strict";var n;function i(t,e,r,i){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=t&&t.defaultProps,s=arguments.length-3;if(e||0===s||(e={children:void 0}),1===s)e.children=i;else if(s>1){for(var l=Array(s),a=0;a<s;a++)l[a]=arguments[a+3];e.children=l}if(e&&o)for(var c in o)void 0===e[c]&&(e[c]=o[c]);else e||(e=o||{});return{$$typeof:n,type:t,key:void 0===r?null:""+r,ref:null,props:e,_owner:null}}function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function s(t){var e=function(t){if("object"!=o(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==o(e)?e:e+""}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,s(n.key),n)}}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}function c(t,e){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},c(t,e)}var u=r(540);const h=window,d=h.ShadowRoot&&(void 0===h.ShadyCSS||h.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,p=Symbol(),f=new WeakMap;class v{constructor(t,e,r){if(this._$cssResult$=!0,r!==p)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(d&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=f.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&f.set(e,t))}return t}toString(){return this.cssText}}const y=d?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new v("string"==typeof t?t:t+"",void 0,p))(e)})(t):t;var $;const _=window,m=_.trustedTypes,b=m?m.emptyScript:"",g=_.reactiveElementPolyfillSupport,A={toAttribute(t,e){switch(e){case Boolean:t=t?b:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},S=(t,e)=>e!==t&&(e==e||t==t),w={attribute:!0,type:String,converter:A,reflect:!1,hasChanged:S},E="finalized";class C extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,r)=>{const n=this._$Ep(r,e);void 0!==n&&(this._$Ev.set(n,r),t.push(n))})),t}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,r,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(n){const i=this[t];this[e]=n,this.requestUpdate(t,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||w}static finalize(){if(this.hasOwnProperty(E))return!1;this[E]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of e)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(y(t))}else void 0!==t&&e.push(y(t));return e}static _$Ep(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,r;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(r=t.hostConnected)||void 0===r||r.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{d?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const r=document.createElement("style"),n=h.litNonce;void 0!==n&&r.setAttribute("nonce",n),r.textContent=e.cssText,t.appendChild(r)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e,r=w){var n;const i=this.constructor._$Ep(t,r);if(void 0!==i&&!0===r.reflect){const o=(void 0!==(null===(n=r.converter)||void 0===n?void 0:n.toAttribute)?r.converter:A).toAttribute(e,r.type);this._$El=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$El=null}}_$AK(t,e){var r;const n=this.constructor,i=n._$Ev.get(t);if(void 0!==i&&this._$El!==i){const t=n.getPropertyOptions(i),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(r=t.converter)||void 0===r?void 0:r.fromAttribute)?t.converter:A;this._$El=i,this[i]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,r){let n=!0;void 0!==t&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||S)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,r))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(r)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var x;C[E]=!0,C.elementProperties=new Map,C.elementStyles=[],C.shadowRootOptions={mode:"open"},null==g||g({ReactiveElement:C}),(null!==($=_.reactiveElementVersions)&&void 0!==$?$:_.reactiveElementVersions=[]).push("1.6.3");const O=window,k=O.trustedTypes,P=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,j="$lit$",R=`lit$${(Math.random()+"").slice(9)}$`,U="?"+R,N=`<${U}>`,T=document,H=()=>T.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,z=Array.isArray,L="[ \t\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,V=/>/g,B=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),q=/'/g,F=/"/g,J=/^(?:script|style|textarea|title)$/i,W=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),K=W(1),Z=(W(2),Symbol.for("lit-noChange")),Y=Symbol.for("lit-nothing"),G=new WeakMap,Q=T.createTreeWalker(T,129,null,!1);function X(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==P?P.createHTML(e):e}const tt=(t,e)=>{const r=t.length-1,n=[];let i,o=2===e?"<svg>":"",s=D;for(let e=0;e<r;e++){const r=t[e];let l,a,c=-1,u=0;for(;u<r.length&&(s.lastIndex=u,a=s.exec(r),null!==a);)u=s.lastIndex,s===D?"!--"===a[1]?s=I:void 0!==a[1]?s=V:void 0!==a[2]?(J.test(a[2])&&(i=RegExp("</"+a[2],"g")),s=B):void 0!==a[3]&&(s=B):s===B?">"===a[0]?(s=null!=i?i:D,c=-1):void 0===a[1]?c=-2:(c=s.lastIndex-a[2].length,l=a[1],s=void 0===a[3]?B:'"'===a[3]?F:q):s===F||s===q?s=B:s===I||s===V?s=D:(s=B,i=void 0);const h=s===B&&t[e+1].startsWith("/>")?" ":"";o+=s===D?r+N:c>=0?(n.push(l),r.slice(0,c)+j+r.slice(c)+R+h):r+R+(-2===c?(n.push(void 0),e):h)}return[X(t,o+(t[r]||"<?>")+(2===e?"</svg>":"")),n]};class et{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let i=0,o=0;const s=t.length-1,l=this.parts,[a,c]=tt(t,e);if(this.el=et.createElement(a,r),Q.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=Q.nextNode())&&l.length<s;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith(j)||e.startsWith(R)){const r=c[o++];if(t.push(e),void 0!==r){const t=n.getAttribute(r.toLowerCase()+j).split(R),e=/([.?@])?(.*)/.exec(r);l.push({type:1,index:i,name:e[2],strings:t,ctor:"."===e[1]?st:"?"===e[1]?at:"@"===e[1]?ct:ot})}else l.push({type:6,index:i})}for(const e of t)n.removeAttribute(e)}if(J.test(n.tagName)){const t=n.textContent.split(R),e=t.length-1;if(e>0){n.textContent=k?k.emptyScript:"";for(let r=0;r<e;r++)n.append(t[r],H()),Q.nextNode(),l.push({type:2,index:++i});n.append(t[e],H())}}}else if(8===n.nodeType)if(n.data===U)l.push({type:2,index:i});else{let t=-1;for(;-1!==(t=n.data.indexOf(R,t+1));)l.push({type:7,index:i}),t+=R.length-1}i++}}static createElement(t,e){const r=T.createElement("template");return r.innerHTML=t,r}}function rt(t,e,r=t,n){var i,o,s,l;if(e===Z)return e;let a=void 0!==n?null===(i=r._$Co)||void 0===i?void 0:i[n]:r._$Cl;const c=M(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==c&&(null===(o=null==a?void 0:a._$AO)||void 0===o||o.call(a,!1),void 0===c?a=void 0:(a=new c(t),a._$AT(t,r,n)),void 0!==n?(null!==(s=(l=r)._$Co)&&void 0!==s?s:l._$Co=[])[n]=a:r._$Cl=a),void 0!==a&&(e=rt(t,a._$AS(t,e.values),a,n)),e}class nt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:r},parts:n}=this._$AD,i=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:T).importNode(r,!0);Q.currentNode=i;let o=Q.nextNode(),s=0,l=0,a=n[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new it(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new ut(o,this,t)),this._$AV.push(e),a=n[++l]}s!==(null==a?void 0:a.index)&&(o=Q.nextNode(),s++)}return Q.currentNode=T,i}v(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class it{constructor(t,e,r,n){var i;this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cp=null===(i=null==n?void 0:n.isConnected)||void 0===i||i}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=rt(this,t,e),M(t)?t===Y||null==t||""===t?(this._$AH!==Y&&this._$AR(),this._$AH=Y):t!==this._$AH&&t!==Z&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>z(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==Y&&M(this._$AH)?this._$AA.nextSibling.data=t:this.$(T.createTextNode(t)),this._$AH=t}g(t){var e;const{values:r,_$litType$:n}=t,i="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=et.createElement(X(n.h,n.h[0]),this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===i)this._$AH.v(r);else{const t=new nt(i,this),e=t.u(this.options);t.v(r),this.$(e),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new et(t)),e}T(t){z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,n=0;for(const i of t)n===e.length?e.push(r=new it(this.k(H()),this.k(H()),this,this.options)):r=e[n],r._$AI(i),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var r;for(null===(r=this._$AP)||void 0===r||r.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class ot{constructor(t,e,r,n,i){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Y}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,n){const i=this.strings;let o=!1;if(void 0===i)t=rt(this,t,e,0),o=!M(t)||t!==this._$AH&&t!==Z,o&&(this._$AH=t);else{const n=t;let s,l;for(t=i[0],s=0;s<i.length-1;s++)l=rt(this,n[r+s],e,s),l===Z&&(l=this._$AH[s]),o||(o=!M(l)||l!==this._$AH[s]),l===Y?t=Y:t!==Y&&(t+=(null!=l?l:"")+i[s+1]),this._$AH[s]=l}o&&!n&&this.j(t)}j(t){t===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class st extends ot{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Y?void 0:t}}const lt=k?k.emptyScript:"";class at extends ot{constructor(){super(...arguments),this.type=4}j(t){t&&t!==Y?this.element.setAttribute(this.name,lt):this.element.removeAttribute(this.name)}}class ct extends ot{constructor(t,e,r,n,i){super(t,e,r,n,i),this.type=5}_$AI(t,e=this){var r;if((t=null!==(r=rt(this,t,e,0))&&void 0!==r?r:Y)===Z)return;const n=this._$AH,i=t===Y&&n!==Y||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==Y&&(n===Y||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==r?r:this.element,t):this._$AH.handleEvent(t)}}class ut{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){rt(this,t)}}const ht=O.litHtmlPolyfillSupport;var dt,pt;null==ht||ht(et,it),(null!==(x=O.litHtmlVersions)&&void 0!==x?x:O.litHtmlVersions=[]).push("2.8.0");class ft extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,r)=>{var n,i;const o=null!==(n=null==r?void 0:r.renderBefore)&&void 0!==n?n:e;let s=o._$litPart$;if(void 0===s){const t=null!==(i=null==r?void 0:r.renderBefore)&&void 0!==i?i:null;o._$litPart$=s=new it(e.insertBefore(H(),t),t,void 0,null!=r?r:{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return Z}}ft.finalized=!0,ft._$litElement$=!0,null===(dt=globalThis.litElementHydrateSupport)||void 0===dt||dt.call(globalThis,{LitElement:ft});const vt=globalThis.litElementPolyfillSupport;null==vt||vt({LitElement:ft}),(null!==(pt=globalThis.litElementVersions)&&void 0!==pt?pt:globalThis.litElementVersions=[]).push("3.3.3");const yt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(r){r.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}};function $t(t){return(e,r)=>void 0!==r?((t,e,r)=>{e.constructor.createProperty(r,t)})(t,e,r):yt(t,e)}var _t;null===(_t=window.HTMLSlotElement)||void 0===_t||_t.prototype.assignedElements;class mt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const bt=(gt=class extends mt{constructor(t){var e;if(super(t),1!==t.type||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var r,n;if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(r=this.nt)||void 0===r?void 0:r.has(t))&&this.it.add(t);return this.render(e)}const i=t.element.classList;this.it.forEach((t=>{t in e||(i.remove(t),this.it.delete(t))}));for(const t in e){const r=!!e[t];r===this.it.has(t)||(null===(n=this.nt)||void 0===n?void 0:n.has(t))||(r?(i.add(t),this.it.add(t)):(i.remove(t),this.it.delete(t)))}return Z}},(...t)=>({_$litDirective$:gt,values:t}));var gt;function At(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s}function St(t){return null===t?"null":Array.isArray(t)?"array":t.constructor.name.toLowerCase()}function wt(t){return t!==Object(t)}function Et(t){return!!t&&!!t.nodeType}function Ct(t){return wt(t)||Et(t)}function*xt(t){const e=[[t,"",[]]];for(;e.length;){const[t,r,n]=e.shift();if(r&&(yield[t,r,n]),!wt(t))for(const[i,o]of Object.entries(t))e.push([o,`${r}${r?".":""}${i}`,[...n,r]])}}"function"==typeof SuppressedError&&SuppressedError;const Ot={fromAttribute:t=>t&&t.trim()?JSON.parse(t):void 0,toAttribute:t=>JSON.stringify(t)},kt=t=>void 0!==t,Pt=(t,e)=>e instanceof RegExp?!!t.match(e):function(t,e){const r=t.split("."),n=e.split("."),i=t=>"**"===t;let o=0,s=0;for(;o<r.length;){const t=n[s];if(t===r[o]||"*"===t)s++,o++;else{if(!i(t))return!1;s++,o=r.length-(n.length-s)}}return s===n.length}(t,e),jt=(t,e)=>(r,n)=>{const i={};if(t)for(const[,r,o]of xt(n.data))Pt(r,t)&&(i[r]=e,o.forEach((t=>i[t]=e)));return{expanded:i}},Rt=t=>()=>({highlight:t}),Ut=((t,...e)=>{const r=1===t.length?t[0]:e.reduce(((e,r,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[n+1]),t[0]);return new v(r,t,p)})`:host{--background-color:#2a2f3a;--color:#f8f8f2;--string-color:#a3eea0;--number-color:#d19a66;--boolean-color:#4ba7ef;--null-color:#df9cf3;--property-color:#6fb3d2;--preview-color:rgba(222,175,143,0.9);--highlight-color:#7b0000;--font-family:monaco,Consolas,'Lucida Console',monospace;--font-size:.8rem;--indent-size:1.5em;--indentguide-size:1px;--indentguide-style:solid;--indentguide-color:#333;--indentguide-color-active:#666;--indentguide:var(--indentguide-size) var(--indentguide-style) var(--indentguide-color);--indentguide-active:var(--indentguide-size) var(--indentguide-style) var(--indentguide-color-active);display:block;background-color:var(--background-color);color:var(--color);font-family:var(--font-family);font-size:var(--font-size)}.separator{color:var(--preview-color);font-weight:bold}.preview{color:var(--preview-color)}.null{color:var(--null-color)}.key{color:var(--property-color);display:inline-block}.collapsable:before{display:inline-block;color:var(--color);font-size:.8em;content:'▶';line-height:2em;width:1em;height:1em;text-align:center;transition:transform 195ms ease-out;transform:rotate(90deg);color:var(--property-color)}.collapsable.collapsableCollapsed:before{transform:rotate(0)}.collapsable{cursor:pointer;user-select:none}.string{color:var(--string-color)}.number{color:var(--number-color)}.boolean{color:var(--boolean-color)}ul{padding:0;clear:both;margin:0}ul,li{list-style:none;position:relative;margin-left:1em;margin-top:2px}li ul>li{position:relative;margin-left:var(--indent-size);padding-left:0}ul ul:before{content:'';border-left:var(--indentguide);position:absolute;left:calc(0.5em - var(--indentguide-size));top:.8em;bottom:.8em}ul ul:hover:before{border-left:var(--indentguide-active)}mark{background-color:var(--highlight-color)}`;class Nt extends ft{constructor(){super(...arguments),this.state={expanded:{},filtered:{},highlight:null},this.handlePropertyClick=t=>e=>{e.preventDefault(),this.setState((t=>e=>({expanded:Object.assign(Object.assign({},e.expanded),{[t]:!kt(undefined)&&!e.expanded[t]})}))(t))}}setState(t){return function(t,e,r,n){return new(r||(r=Promise))((function(e,i){function o(t){try{l(n.next(t))}catch(t){i(t)}}function s(t){try{l(n.throw(t))}catch(t){i(t)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(t){t(n)}))).then(o,s)}l((n=n.apply(t,[])).next())}))}(this,0,void 0,(function*(){const e=this.state;this.state=Object.assign(Object.assign({},e),t(e,this))}))}connectedCallback(){this.hasAttribute("data")||kt(this.data)||this.setAttribute("data",this.innerText),super.connectedCallback()}expand(t){this.setState(jt(t,!0))}expandAll(){this.setState(jt("**",!0))}collapseAll(){this.setState(jt("**",!1))}collapse(t){this.setState(jt(t,!1))}*search(t){for(const[e,r]of xt(this.data))Ct(e)&&String(e).includes(t)&&(this.expand(r),this.updateComplete.then((()=>{const t=this.shadowRoot.querySelector(`[data-path="${r}"]`);t.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),t.focus()})),this.setState(Rt(r)),yield{value:e,path:r});this.setState(Rt(null))}filter(t){var e;this.setState((e=t,(t,r)=>{const n={};if(e)for(const[,t,i]of xt(r.data))Pt(t,e)?(n[t]=!1,i.forEach((t=>n[t]=!1))):n[t]=!0;return{filtered:n}}))}resetFilter(){this.setState((()=>({filtered:{}})))}renderObject(t,e){return K`
            <ul part="object">
                ${Object.keys(t).map((r=>{const n=t[r],i=e?`${e}.${r}`:r,o=Ct(n);return K`
                        <li part="property" data-path="${i}" .hidden="${this.state.filtered[i]}">
                            <span
                                part="key"
                                class="${bt({key:r,collapsable:!o,collapsableCollapsed:!this.state.expanded[i]})}"
                                @click="${o?null:this.handlePropertyClick(i)}"
                            >
                                ${r}:
                            </span>
                            ${this.renderNode(n,i)}
                        </li>
                    `}))}
            </ul>`}renderNode(t,e=""){const r=Ct(t);return!e||this.state.expanded[e]||r?r?this.renderPrimitive(t,e):this.renderObject(t,e):this.renderNodePreview(t)}renderNodePreview(t){return K` <span part="preview" class="preview"> ${function(t,{nodeCount:e=3,maxLength:r=15}={}){const n=Array.isArray(t),i=Object.keys(t),o=i.slice(0,e),s=[],l=t=>{switch(St(t)){case"object":return 0===Object.keys(t).length?"{ }":"{ ... }";case"array":return 0===t.length?"[ ]":"[ ... ]";case"string":return`"${t.substring(0,r)}${t.length>r?"...":""}"`;default:return String(t)}},a=[];for(const e of o){const r=[],i=t[e];n||r.push(`${e}: `),r.push(l(i)),a.push(r.join(""))}i.length>e&&a.push("..."),s.push(a.join(", "));const c=s.join("");return n?`[ ${c} ]`:`{ ${c} }`}(t)} </span> `}renderPrimitive(t,e){const r=this.state.highlight,n=St(t),i=Et(t)?t:K` <span part="primitive primitive-${n}" tabindex="0" class="${St(t)}">${JSON.stringify(t)}</span> `;return e===r?K`<mark part="highlight">${i}</mark>`:i}render(){const t=this.data,e=Array.isArray(t)?K`<div class="separator">[</div>`:K`<div class="separator">{</div>`,r=Array.isArray(t)?K`<div class="separator">]</div>`:K`<div class="separator">}</div>`;return kt(t)?K`${e}${this.renderNode(t)}${r}`:null}}function Tt(t,e,r){return e=a(e),function(t,e){if(e&&("object"==o(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,Ht()?Reflect.construct(e,r||[],a(t).constructor):e.apply(t,r))}function Ht(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(Ht=function(){return!!t})()}Nt.styles=[Ut],At([$t({converter:Ot,type:Object})],Nt.prototype,"data",void 0),At([$t({state:!0})],Nt.prototype,"state",void 0),customElements.define("json-viewer",Nt),t=r.hmd(t),function(e){var n=[];if("object"===("undefined"==typeof exports?"undefined":o(exports)))t.exports=e.apply(null,n.map((function(t){return r(589)(t)})));else if("function"==typeof define&&r.amdO)define(n,e);else{var i;(i="undefined"!=typeof window?window:void 0!==r.g?r.g:"undefined"!=typeof self?self:void 0).SwaggerJsonFoldingPlugins=e.apply(null,n.map((function(t){return i[t]})))}}((function(){return function(){return{wrapComponents:{HighlightCode:function(t,e){return function(e){function r(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(e=Tt(this,r,[t])).id=Date.now().toString(36)+Math.random().toString(36).substr(2),e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(r,e),n=r,(o=[{key:"shouldComponentUpdate",value:function(t){if(t.children!==this.props.children)return!0}},{key:"render",value:function(){var e=this.props.children;if(function(t){try{JSON.parse(t)}catch(t){return!1}return!0}(e)){var r=document.querySelector("#".concat(this.id));return null!==r&&(r.data=JSON.parse(e)),i("div",{className:"highlight-code"},void 0,i("json-viewer",{id:this.id},void 0,e))}return u.createElement(t,this.props)}}])&&l(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,o}(u.Component)}}}}}))},287:(t,e)=>{"use strict";var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),a=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator,f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,y={};function $(t,e,r){this.props=t,this.context=e,this.refs=y,this.updater=r||f}function _(){}function m(t,e,r){this.props=t,this.context=e,this.refs=y,this.updater=r||f}$.prototype.isReactComponent={},$.prototype.setState=function(t,e){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")},$.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},_.prototype=$.prototype;var b=m.prototype=new _;b.constructor=m,v(b,$.prototype),b.isPureReactComponent=!0;var g=Array.isArray,A=Object.prototype.hasOwnProperty,S={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function E(t,e,n){var i,o={},s=null,l=null;if(null!=e)for(i in void 0!==e.ref&&(l=e.ref),void 0!==e.key&&(s=""+e.key),e)A.call(e,i)&&!w.hasOwnProperty(i)&&(o[i]=e[i]);var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];o.children=c}if(t&&t.defaultProps)for(i in a=t.defaultProps)void 0===o[i]&&(o[i]=a[i]);return{$$typeof:r,type:t,key:s,ref:l,props:o,_owner:S.current}}function C(t){return"object"==typeof t&&null!==t&&t.$$typeof===r}var x=/\/+/g;function O(t,e){return"object"==typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,(function(t){return e[t]}))}(""+t.key):e.toString(36)}function k(t,e,i,o,s){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var a=!1;if(null===t)a=!0;else switch(l){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case r:case n:a=!0}}if(a)return s=s(a=t),t=""===o?"."+O(a,0):o,g(s)?(i="",null!=t&&(i=t.replace(x,"$&/")+"/"),k(s,e,i,"",(function(t){return t}))):null!=s&&(C(s)&&(s=function(t,e){return{$$typeof:r,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(s,i+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(x,"$&/")+"/")+t)),e.push(s)),1;if(a=0,o=""===o?".":o+":",g(t))for(var c=0;c<t.length;c++){var u=o+O(l=t[c],c);a+=k(l,e,i,u,s)}else if(u=function(t){return null===t||"object"!=typeof t?null:"function"==typeof(t=p&&t[p]||t["@@iterator"])?t:null}(t),"function"==typeof u)for(t=u.call(t),c=0;!(l=t.next()).done;)a+=k(l=l.value,e,i,u=o+O(l,c++),s);else if("object"===l)throw e=String(t),Error("Objects are not valid as a React child (found: "+("[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function P(t,e,r){if(null==t)return t;var n=[],i=0;return k(t,n,"","",(function(t){return e.call(r,t,i++)})),n}function j(t){if(-1===t._status){var e=t._result;(e=e()).then((function(e){0!==t._status&&-1!==t._status||(t._status=1,t._result=e)}),(function(e){0!==t._status&&-1!==t._status||(t._status=2,t._result=e)})),-1===t._status&&(t._status=0,t._result=e)}if(1===t._status)return t._result.default;throw t._result}var R={current:null},U={transition:null},N={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:U,ReactCurrentOwner:S};function T(){throw Error("act(...) is not supported in production builds of React.")}e.Children={map:P,forEach:function(t,e,r){P(t,(function(){e.apply(this,arguments)}),r)},count:function(t){var e=0;return P(t,(function(){e++})),e},toArray:function(t){return P(t,(function(t){return t}))||[]},only:function(t){if(!C(t))throw Error("React.Children.only expected to receive a single React element child.");return t}},e.Component=$,e.Fragment=i,e.Profiler=s,e.PureComponent=m,e.StrictMode=o,e.Suspense=u,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,e.act=T,e.cloneElement=function(t,e,n){if(null==t)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=v({},t.props),o=t.key,s=t.ref,l=t._owner;if(null!=e){if(void 0!==e.ref&&(s=e.ref,l=S.current),void 0!==e.key&&(o=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(c in e)A.call(e,c)&&!w.hasOwnProperty(c)&&(i[c]=void 0===e[c]&&void 0!==a?a[c]:e[c])}var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:r,type:t.type,key:o,ref:s,props:i,_owner:l}},e.createContext=function(t){return(t={$$typeof:a,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:t},t.Consumer=t},e.createElement=E,e.createFactory=function(t){var e=E.bind(null,t);return e.type=t,e},e.createRef=function(){return{current:null}},e.forwardRef=function(t){return{$$typeof:c,render:t}},e.isValidElement=C,e.lazy=function(t){return{$$typeof:d,_payload:{_status:-1,_result:t},_init:j}},e.memo=function(t,e){return{$$typeof:h,type:t,compare:void 0===e?null:e}},e.startTransition=function(t){var e=U.transition;U.transition={};try{t()}finally{U.transition=e}},e.unstable_act=T,e.useCallback=function(t,e){return R.current.useCallback(t,e)},e.useContext=function(t){return R.current.useContext(t)},e.useDebugValue=function(){},e.useDeferredValue=function(t){return R.current.useDeferredValue(t)},e.useEffect=function(t,e){return R.current.useEffect(t,e)},e.useId=function(){return R.current.useId()},e.useImperativeHandle=function(t,e,r){return R.current.useImperativeHandle(t,e,r)},e.useInsertionEffect=function(t,e){return R.current.useInsertionEffect(t,e)},e.useLayoutEffect=function(t,e){return R.current.useLayoutEffect(t,e)},e.useMemo=function(t,e){return R.current.useMemo(t,e)},e.useReducer=function(t,e,r){return R.current.useReducer(t,e,r)},e.useRef=function(t){return R.current.useRef(t)},e.useState=function(t){return R.current.useState(t)},e.useSyncExternalStore=function(t,e,r){return R.current.useSyncExternalStore(t,e,r)},e.useTransition=function(){return R.current.useTransition()},e.version="18.3.1"},540:(t,e,r)=>{"use strict";t.exports=r(287)},589:t=>{function e(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=()=>[],e.resolve=e,e.id=589,t.exports=e}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={id:n,loaded:!1,exports:{}};return t[n](o,o.exports,r),o.loaded=!0,o.exports}r.amdO={},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.hmd=t=>((t=Object.create(t)).children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r(133)})();