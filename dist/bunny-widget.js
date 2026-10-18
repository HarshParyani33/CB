var BunnyWidget=(function(jl){"use strict";function Di(m){return m&&m.__esModule&&Object.prototype.hasOwnProperty.call(m,"default")?m.default:m}var Ml={exports:{}},Ft={},Ol={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ii;function ba(){if(Ii)return A;Ii=1;var m=Symbol.for("react.element"),R=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),oe=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),ee=Symbol.for("react.provider"),F=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),B=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),X=Symbol.iterator;function re(c){return c===null||typeof c!="object"?null:(c=X&&c[X]||c["@@iterator"],typeof c=="function"?c:null)}var Ne={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Re=Object.assign,ne={};function G(c,v,D){this.props=c,this.context=v,this.refs=ne,this.updater=D||Ne}G.prototype.isReactComponent={},G.prototype.setState=function(c,v){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,v,"setState")},G.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function an(){}an.prototype=G.prototype;function Xe(c,v,D){this.props=c,this.context=v,this.refs=ne,this.updater=D||Ne}var Fe=Xe.prototype=new an;Fe.constructor=Xe,Re(Fe,G.prototype),Fe.isPureReactComponent=!0;var pe=Array.isArray,Ve=Object.prototype.hasOwnProperty,ke={current:null},ye={key:!0,ref:!0,__self:!0,__source:!0};function be(c,v,D){var b,U={},W=null,J=null;if(v!=null)for(b in v.ref!==void 0&&(J=v.ref),v.key!==void 0&&(W=""+v.key),v)Ve.call(v,b)&&!ye.hasOwnProperty(b)&&(U[b]=v[b]);var Q=arguments.length-2;if(Q===1)U.children=D;else if(1<Q){for(var te=Array(Q),Le=0;Le<Q;Le++)te[Le]=arguments[Le+2];U.children=te}if(c&&c.defaultProps)for(b in Q=c.defaultProps,Q)U[b]===void 0&&(U[b]=Q[b]);return{$$typeof:m,type:c,key:W,ref:J,props:U,_owner:ke.current}}function gn(c,v){return{$$typeof:m,type:c.type,key:v,ref:c.ref,props:c.props,_owner:c._owner}}function en(c){return typeof c=="object"&&c!==null&&c.$$typeof===m}function Cn(c){var v={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(D){return v[D]})}var ze=/\/+/g;function Ae(c,v){return typeof c=="object"&&c!==null&&c.key!=null?Cn(""+c.key):v.toString(36)}function j(c,v,D,b,U){var W=typeof c;(W==="undefined"||W==="boolean")&&(c=null);var J=!1;if(c===null)J=!0;else switch(W){case"string":case"number":J=!0;break;case"object":switch(c.$$typeof){case m:case R:J=!0}}if(J)return J=c,U=U(J),c=b===""?"."+Ae(J,0):b,pe(U)?(D="",c!=null&&(D=c.replace(ze,"$&/")+"/"),j(U,v,D,"",function(Le){return Le})):U!=null&&(en(U)&&(U=gn(U,D+(!U.key||J&&J.key===U.key?"":(""+U.key).replace(ze,"$&/")+"/")+c)),v.push(U)),1;if(J=0,b=b===""?".":b+":",pe(c))for(var Q=0;Q<c.length;Q++){W=c[Q];var te=b+Ae(W,Q);J+=j(W,v,D,te,U)}else if(te=re(c),typeof te=="function")for(c=te.call(c),Q=0;!(W=c.next()).done;)W=W.value,te=b+Ae(W,Q++),J+=j(W,v,D,te,U);else if(W==="object")throw v=String(c),Error("Objects are not valid as a React child (found: "+(v==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":v)+"). If you meant to render a collection of children, use an array instead.");return J}function Z(c,v,D){if(c==null)return c;var b=[],U=0;return j(c,b,"","",function(W){return v.call(D,W,U++)}),b}function Se(c){if(c._status===-1){var v=c._result;v=v(),v.then(function(D){(c._status===0||c._status===-1)&&(c._status=1,c._result=D)},function(D){(c._status===0||c._status===-1)&&(c._status=2,c._result=D)}),c._status===-1&&(c._status=0,c._result=v)}if(c._status===1)return c._result.default;throw c._result}var $={current:null},S={transition:null},T={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:S,ReactCurrentOwner:ke};function C(){throw Error("act(...) is not supported in production builds of React.")}return A.Children={map:Z,forEach:function(c,v,D){Z(c,function(){v.apply(this,arguments)},D)},count:function(c){var v=0;return Z(c,function(){v++}),v},toArray:function(c){return Z(c,function(v){return v})||[]},only:function(c){if(!en(c))throw Error("React.Children.only expected to receive a single React element child.");return c}},A.Component=G,A.Fragment=h,A.Profiler=K,A.PureComponent=Xe,A.StrictMode=oe,A.Suspense=L,A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,A.act=C,A.cloneElement=function(c,v,D){if(c==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+c+".");var b=Re({},c.props),U=c.key,W=c.ref,J=c._owner;if(v!=null){if(v.ref!==void 0&&(W=v.ref,J=ke.current),v.key!==void 0&&(U=""+v.key),c.type&&c.type.defaultProps)var Q=c.type.defaultProps;for(te in v)Ve.call(v,te)&&!ye.hasOwnProperty(te)&&(b[te]=v[te]===void 0&&Q!==void 0?Q[te]:v[te])}var te=arguments.length-2;if(te===1)b.children=D;else if(1<te){Q=Array(te);for(var Le=0;Le<te;Le++)Q[Le]=arguments[Le+2];b.children=Q}return{$$typeof:m,type:c.type,key:U,ref:W,props:b,_owner:J}},A.createContext=function(c){return c={$$typeof:F,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},c.Provider={$$typeof:ee,_context:c},c.Consumer=c},A.createElement=be,A.createFactory=function(c){var v=be.bind(null,c);return v.type=c,v},A.createRef=function(){return{current:null}},A.forwardRef=function(c){return{$$typeof:V,render:c}},A.isValidElement=en,A.lazy=function(c){return{$$typeof:ae,_payload:{_status:-1,_result:c},_init:Se}},A.memo=function(c,v){return{$$typeof:B,type:c,compare:v===void 0?null:v}},A.startTransition=function(c){var v=S.transition;S.transition={};try{c()}finally{S.transition=v}},A.unstable_act=C,A.useCallback=function(c,v){return $.current.useCallback(c,v)},A.useContext=function(c){return $.current.useContext(c)},A.useDebugValue=function(){},A.useDeferredValue=function(c){return $.current.useDeferredValue(c)},A.useEffect=function(c,v){return $.current.useEffect(c,v)},A.useId=function(){return $.current.useId()},A.useImperativeHandle=function(c,v,D){return $.current.useImperativeHandle(c,v,D)},A.useInsertionEffect=function(c,v){return $.current.useInsertionEffect(c,v)},A.useLayoutEffect=function(c,v){return $.current.useLayoutEffect(c,v)},A.useMemo=function(c,v){return $.current.useMemo(c,v)},A.useReducer=function(c,v,D){return $.current.useReducer(c,v,D)},A.useRef=function(c){return $.current.useRef(c)},A.useState=function(c){return $.current.useState(c)},A.useSyncExternalStore=function(c,v,D){return $.current.useSyncExternalStore(c,v,D)},A.useTransition=function(){return $.current.useTransition()},A.version="18.3.1",A}var Fi;function Dl(){return Fi||(Fi=1,Ol.exports=ba()),Ol.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bi;function Aa(){if(bi)return Ft;bi=1;var m=Dl(),R=Symbol.for("react.element"),h=Symbol.for("react.fragment"),oe=Object.prototype.hasOwnProperty,K=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ee={key:!0,ref:!0,__self:!0,__source:!0};function F(V,L,B){var ae,X={},re=null,Ne=null;B!==void 0&&(re=""+B),L.key!==void 0&&(re=""+L.key),L.ref!==void 0&&(Ne=L.ref);for(ae in L)oe.call(L,ae)&&!ee.hasOwnProperty(ae)&&(X[ae]=L[ae]);if(V&&V.defaultProps)for(ae in L=V.defaultProps,L)X[ae]===void 0&&(X[ae]=L[ae]);return{$$typeof:R,type:V,key:re,ref:Ne,props:X,_owner:K.current}}return Ft.Fragment=h,Ft.jsx=F,Ft.jsxs=F,Ft}var Ai;function Ua(){return Ai||(Ai=1,Ml.exports=Aa()),Ml.exports}var k=Ua(),fe=Dl();const Ba=Di(fe);var Er={},Il={exports:{}},We={},Fl={exports:{}},bl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ui;function Wa(){return Ui||(Ui=1,(function(m){function R(S,T){var C=S.length;S.push(T);e:for(;0<C;){var c=C-1>>>1,v=S[c];if(0<K(v,T))S[c]=T,S[C]=v,C=c;else break e}}function h(S){return S.length===0?null:S[0]}function oe(S){if(S.length===0)return null;var T=S[0],C=S.pop();if(C!==T){S[0]=C;e:for(var c=0,v=S.length,D=v>>>1;c<D;){var b=2*(c+1)-1,U=S[b],W=b+1,J=S[W];if(0>K(U,C))W<v&&0>K(J,U)?(S[c]=J,S[W]=C,c=W):(S[c]=U,S[b]=C,c=b);else if(W<v&&0>K(J,C))S[c]=J,S[W]=C,c=W;else break e}}return T}function K(S,T){var C=S.sortIndex-T.sortIndex;return C!==0?C:S.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var ee=performance;m.unstable_now=function(){return ee.now()}}else{var F=Date,V=F.now();m.unstable_now=function(){return F.now()-V}}var L=[],B=[],ae=1,X=null,re=3,Ne=!1,Re=!1,ne=!1,G=typeof setTimeout=="function"?setTimeout:null,an=typeof clearTimeout=="function"?clearTimeout:null,Xe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Fe(S){for(var T=h(B);T!==null;){if(T.callback===null)oe(B);else if(T.startTime<=S)oe(B),T.sortIndex=T.expirationTime,R(L,T);else break;T=h(B)}}function pe(S){if(ne=!1,Fe(S),!Re)if(h(L)!==null)Re=!0,Se(Ve);else{var T=h(B);T!==null&&$(pe,T.startTime-S)}}function Ve(S,T){Re=!1,ne&&(ne=!1,an(be),be=-1),Ne=!0;var C=re;try{for(Fe(T),X=h(L);X!==null&&(!(X.expirationTime>T)||S&&!Cn());){var c=X.callback;if(typeof c=="function"){X.callback=null,re=X.priorityLevel;var v=c(X.expirationTime<=T);T=m.unstable_now(),typeof v=="function"?X.callback=v:X===h(L)&&oe(L),Fe(T)}else oe(L);X=h(L)}if(X!==null)var D=!0;else{var b=h(B);b!==null&&$(pe,b.startTime-T),D=!1}return D}finally{X=null,re=C,Ne=!1}}var ke=!1,ye=null,be=-1,gn=5,en=-1;function Cn(){return!(m.unstable_now()-en<gn)}function ze(){if(ye!==null){var S=m.unstable_now();en=S;var T=!0;try{T=ye(!0,S)}finally{T?Ae():(ke=!1,ye=null)}}else ke=!1}var Ae;if(typeof Xe=="function")Ae=function(){Xe(ze)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,Z=j.port2;j.port1.onmessage=ze,Ae=function(){Z.postMessage(null)}}else Ae=function(){G(ze,0)};function Se(S){ye=S,ke||(ke=!0,Ae())}function $(S,T){be=G(function(){S(m.unstable_now())},T)}m.unstable_IdlePriority=5,m.unstable_ImmediatePriority=1,m.unstable_LowPriority=4,m.unstable_NormalPriority=3,m.unstable_Profiling=null,m.unstable_UserBlockingPriority=2,m.unstable_cancelCallback=function(S){S.callback=null},m.unstable_continueExecution=function(){Re||Ne||(Re=!0,Se(Ve))},m.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):gn=0<S?Math.floor(1e3/S):5},m.unstable_getCurrentPriorityLevel=function(){return re},m.unstable_getFirstCallbackNode=function(){return h(L)},m.unstable_next=function(S){switch(re){case 1:case 2:case 3:var T=3;break;default:T=re}var C=re;re=T;try{return S()}finally{re=C}},m.unstable_pauseExecution=function(){},m.unstable_requestPaint=function(){},m.unstable_runWithPriority=function(S,T){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var C=re;re=S;try{return T()}finally{re=C}},m.unstable_scheduleCallback=function(S,T,C){var c=m.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?c+C:c):C=c,S){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=C+v,S={id:ae++,callback:T,priorityLevel:S,startTime:C,expirationTime:v,sortIndex:-1},C>c?(S.sortIndex=C,R(B,S),h(L)===null&&S===h(B)&&(ne?(an(be),be=-1):ne=!0,$(pe,C-c))):(S.sortIndex=v,R(L,S),Re||Ne||(Re=!0,Se(Ve))),S},m.unstable_shouldYield=Cn,m.unstable_wrapCallback=function(S){var T=re;return function(){var C=re;re=T;try{return S.apply(this,arguments)}finally{re=C}}}})(bl)),bl}var Bi;function Va(){return Bi||(Bi=1,Fl.exports=Wa()),Fl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wi;function $a(){if(Wi)return We;Wi=1;var m=Dl(),R=Va();function h(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var oe=new Set,K={};function ee(e,n){F(e,n),F(e+"Capture",n)}function F(e,n){for(K[e]=n,e=0;e<n.length;e++)oe.add(n[e])}var V=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),L=Object.prototype.hasOwnProperty,B=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ae={},X={};function re(e){return L.call(X,e)?!0:L.call(ae,e)?!1:B.test(e)?X[e]=!0:(ae[e]=!0,!1)}function Ne(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Re(e,n,t,r){if(n===null||typeof n>"u"||Ne(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ne(e,n,t,r,l,o,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=i}var G={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){G[e]=new ne(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];G[n]=new ne(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){G[e]=new ne(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){G[e]=new ne(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){G[e]=new ne(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){G[e]=new ne(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){G[e]=new ne(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){G[e]=new ne(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){G[e]=new ne(e,5,!1,e.toLowerCase(),null,!1,!1)});var an=/[\-:]([a-z])/g;function Xe(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(an,Xe);G[n]=new ne(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(an,Xe);G[n]=new ne(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(an,Xe);G[n]=new ne(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){G[e]=new ne(e,1,!1,e.toLowerCase(),null,!1,!1)}),G.xlinkHref=new ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){G[e]=new ne(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fe(e,n,t,r){var l=G.hasOwnProperty(n)?G[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Re(n,t,l,r)&&(t=null),r||l===null?re(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var pe=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ve=Symbol.for("react.element"),ke=Symbol.for("react.portal"),ye=Symbol.for("react.fragment"),be=Symbol.for("react.strict_mode"),gn=Symbol.for("react.profiler"),en=Symbol.for("react.provider"),Cn=Symbol.for("react.context"),ze=Symbol.for("react.forward_ref"),Ae=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),Se=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),S=Symbol.iterator;function T(e){return e===null||typeof e!="object"?null:(e=S&&e[S]||e["@@iterator"],typeof e=="function"?e:null)}var C=Object.assign,c;function v(e){if(c===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);c=n&&n[1]||""}return`
`+c+e}var D=!1;function b(e,n){if(!e||D)return"";D=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(p){var r=p}Reflect.construct(e,[],n)}else{try{n.call()}catch(p){r=p}e.call(n.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var l=p.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,u=o.length-1;1<=i&&0<=u&&l[i]!==o[u];)u--;for(;1<=i&&0<=u;i--,u--)if(l[i]!==o[u]){if(i!==1||u!==1)do if(i--,u--,0>u||l[i]!==o[u]){var s=`
`+l[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=u);break}}}finally{D=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?v(e):""}function U(e){switch(e.tag){case 5:return v(e.type);case 16:return v("Lazy");case 13:return v("Suspense");case 19:return v("SuspenseList");case 0:case 2:case 15:return e=b(e.type,!1),e;case 11:return e=b(e.type.render,!1),e;case 1:return e=b(e.type,!0),e;default:return""}}function W(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ye:return"Fragment";case ke:return"Portal";case gn:return"Profiler";case be:return"StrictMode";case Ae:return"Suspense";case j:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Cn:return(e.displayName||"Context")+".Consumer";case en:return(e._context.displayName||"Context")+".Provider";case ze:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Z:return n=e.displayName||null,n!==null?n:W(e.type)||"Memo";case Se:n=e._payload,e=e._init;try{return W(e(n))}catch{}}return null}function J(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return W(n);case 8:return n===be?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Q(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function te(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Le(e){var n=te(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function _n(e){e._valueTracker||(e._valueTracker=Le(e))}function nn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=te(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function cn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function je(e,n){var t=n.checked;return C({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Hi(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Q(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Qi(e,n){n=n.checked,n!=null&&Fe(e,"checked",n,!1)}function Wl(e,n){Qi(e,n);var t=Q(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Vl(e,n.type,t):n.hasOwnProperty("defaultValue")&&Vl(e,n.type,Q(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Yi(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Vl(e,n,t){(n!=="number"||cn(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var bt=Array.isArray;function ft(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Q(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function $l(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(h(91));return C({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ki(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(h(92));if(bt(t)){if(1<t.length)throw Error(h(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Q(t)}}function Xi(e,n){var t=Q(n.value),r=Q(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Gi(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Zi(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Zi(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Cr,Ji=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Cr=Cr||document.createElement("div"),Cr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Cr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function At(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Ut={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rc=["Webkit","ms","Moz","O"];Object.keys(Ut).forEach(function(e){rc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ut[n]=Ut[e]})});function qi(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Ut.hasOwnProperty(e)&&Ut[e]?(""+n).trim():n+"px"}function eu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=qi(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var lc=C({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ql(e,n){if(n){if(lc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(h(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(h(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(h(61))}if(n.style!=null&&typeof n.style!="object")throw Error(h(62))}}function Yl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kl=null;function Xl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gl=null,pt=null,ht=null;function nu(e){if(e=sr(e)){if(typeof Gl!="function")throw Error(h(280));var n=e.stateNode;n&&(n=Yr(n),Gl(e.stateNode,e.type,n))}}function tu(e){pt?ht?ht.push(e):ht=[e]:pt=e}function ru(){if(pt){var e=pt,n=ht;if(ht=pt=null,nu(e),n)for(e=0;e<n.length;e++)nu(n[e])}}function lu(e,n){return e(n)}function ou(){}var Zl=!1;function iu(e,n,t){if(Zl)return e(n,t);Zl=!0;try{return lu(e,n,t)}finally{Zl=!1,(pt!==null||ht!==null)&&(ou(),ru())}}function Bt(e,n){var t=e.stateNode;if(t===null)return null;var r=Yr(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(h(231,n,typeof t));return t}var Jl=!1;if(V)try{var Wt={};Object.defineProperty(Wt,"passive",{get:function(){Jl=!0}}),window.addEventListener("test",Wt,Wt),window.removeEventListener("test",Wt,Wt)}catch{Jl=!1}function oc(e,n,t,r,l,o,i,u,s){var p=Array.prototype.slice.call(arguments,3);try{n.apply(t,p)}catch(g){this.onError(g)}}var Vt=!1,_r=null,Nr=!1,ql=null,ic={onError:function(e){Vt=!0,_r=e}};function uc(e,n,t,r,l,o,i,u,s){Vt=!1,_r=null,oc.apply(ic,arguments)}function sc(e,n,t,r,l,o,i,u,s){if(uc.apply(this,arguments),Vt){if(Vt){var p=_r;Vt=!1,_r=null}else throw Error(h(198));Nr||(Nr=!0,ql=p)}}function qn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function uu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function su(e){if(qn(e)!==e)throw Error(h(188))}function ac(e){var n=e.alternate;if(!n){if(n=qn(e),n===null)throw Error(h(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===t)return su(l),e;if(o===r)return su(l),n;o=o.sibling}throw Error(h(188))}if(t.return!==r.return)t=l,r=o;else{for(var i=!1,u=l.child;u;){if(u===t){i=!0,t=l,r=o;break}if(u===r){i=!0,r=l,t=o;break}u=u.sibling}if(!i){for(u=o.child;u;){if(u===t){i=!0,t=o,r=l;break}if(u===r){i=!0,r=o,t=l;break}u=u.sibling}if(!i)throw Error(h(189))}}if(t.alternate!==r)throw Error(h(190))}if(t.tag!==3)throw Error(h(188));return t.stateNode.current===t?e:n}function au(e){return e=ac(e),e!==null?cu(e):null}function cu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=cu(e);if(n!==null)return n;e=e.sibling}return null}var du=R.unstable_scheduleCallback,fu=R.unstable_cancelCallback,cc=R.unstable_shouldYield,dc=R.unstable_requestPaint,me=R.unstable_now,fc=R.unstable_getCurrentPriorityLevel,eo=R.unstable_ImmediatePriority,pu=R.unstable_UserBlockingPriority,zr=R.unstable_NormalPriority,pc=R.unstable_LowPriority,hu=R.unstable_IdlePriority,Pr=null,xn=null;function hc(e){if(xn&&typeof xn.onCommitFiberRoot=="function")try{xn.onCommitFiberRoot(Pr,e,void 0,(e.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:yc,mc=Math.log,vc=Math.LN2;function yc(e){return e>>>=0,e===0?32:31-(mc(e)/vc|0)|0}var Tr=64,Rr=4194304;function $t(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Lr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=t&268435455;if(i!==0){var u=i&~l;u!==0?r=$t(u):(o&=i,o!==0&&(r=$t(o)))}else i=t&~l,i!==0?r=$t(i):o!==0&&(r=$t(o));if(r===0)return 0;if(n!==0&&n!==r&&(n&l)===0&&(l=r&-r,o=n&-n,l>=o||l===16&&(o&4194240)!==0))return n;if((r&4)!==0&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-dn(n),l=1<<t,r|=e[t],n&=~l;return r}function gc(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xc(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-dn(o),u=1<<i,s=l[i];s===-1?((u&t)===0||(u&r)!==0)&&(l[i]=gc(u,n)):s<=n&&(e.expiredLanes|=u),o&=~u}}function no(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function mu(){var e=Tr;return Tr<<=1,(Tr&4194240)===0&&(Tr=64),e}function to(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Ht(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-dn(n),e[n]=t}function wc(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-dn(t),o=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~o}}function ro(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-dn(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var q=0;function vu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var yu,lo,gu,xu,wu,oo=!1,jr=[],On=null,Dn=null,In=null,Qt=new Map,Yt=new Map,Fn=[],kc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ku(e,n){switch(e){case"focusin":case"focusout":On=null;break;case"dragenter":case"dragleave":Dn=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":Qt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yt.delete(n.pointerId)}}function Kt(e,n,t,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},n!==null&&(n=sr(n),n!==null&&lo(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function Sc(e,n,t,r,l){switch(n){case"focusin":return On=Kt(On,e,n,t,r,l),!0;case"dragenter":return Dn=Kt(Dn,e,n,t,r,l),!0;case"mouseover":return In=Kt(In,e,n,t,r,l),!0;case"pointerover":var o=l.pointerId;return Qt.set(o,Kt(Qt.get(o)||null,e,n,t,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Yt.set(o,Kt(Yt.get(o)||null,e,n,t,r,l)),!0}return!1}function Su(e){var n=et(e.target);if(n!==null){var t=qn(n);if(t!==null){if(n=t.tag,n===13){if(n=uu(t),n!==null){e.blockedOn=n,wu(e.priority,function(){gu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=uo(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Kl=r,t.target.dispatchEvent(r),Kl=null}else return n=sr(t),n!==null&&lo(n),e.blockedOn=t,!1;n.shift()}return!0}function Eu(e,n,t){Mr(e)&&t.delete(n)}function Ec(){oo=!1,On!==null&&Mr(On)&&(On=null),Dn!==null&&Mr(Dn)&&(Dn=null),In!==null&&Mr(In)&&(In=null),Qt.forEach(Eu),Yt.forEach(Eu)}function Xt(e,n){e.blockedOn===n&&(e.blockedOn=null,oo||(oo=!0,R.unstable_scheduleCallback(R.unstable_NormalPriority,Ec)))}function Gt(e){function n(l){return Xt(l,e)}if(0<jr.length){Xt(jr[0],e);for(var t=1;t<jr.length;t++){var r=jr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(On!==null&&Xt(On,e),Dn!==null&&Xt(Dn,e),In!==null&&Xt(In,e),Qt.forEach(n),Yt.forEach(n),t=0;t<Fn.length;t++)r=Fn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Fn.length&&(t=Fn[0],t.blockedOn===null);)Su(t),t.blockedOn===null&&Fn.shift()}var mt=pe.ReactCurrentBatchConfig,Or=!0;function Cc(e,n,t,r){var l=q,o=mt.transition;mt.transition=null;try{q=1,io(e,n,t,r)}finally{q=l,mt.transition=o}}function _c(e,n,t,r){var l=q,o=mt.transition;mt.transition=null;try{q=4,io(e,n,t,r)}finally{q=l,mt.transition=o}}function io(e,n,t,r){if(Or){var l=uo(e,n,t,r);if(l===null)_o(e,n,r,Dr,t),ku(e,r);else if(Sc(l,e,n,t,r))r.stopPropagation();else if(ku(e,r),n&4&&-1<kc.indexOf(e)){for(;l!==null;){var o=sr(l);if(o!==null&&yu(o),o=uo(e,n,t,r),o===null&&_o(e,n,r,Dr,t),o===l)break;l=o}l!==null&&r.stopPropagation()}else _o(e,n,r,null,t)}}var Dr=null;function uo(e,n,t,r){if(Dr=null,e=Xl(r),e=et(e),e!==null)if(n=qn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=uu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Dr=e,null}function Cu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fc()){case eo:return 1;case pu:return 4;case zr:case pc:return 16;case hu:return 536870912;default:return 16}default:return 16}}var bn=null,so=null,Ir=null;function _u(){if(Ir)return Ir;var e,n=so,t=n.length,r,l="value"in bn?bn.value:bn.textContent,o=l.length;for(e=0;e<t&&n[e]===l[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===l[o-r];r++);return Ir=l.slice(e,1<r?1-r:void 0)}function Fr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function br(){return!0}function Nu(){return!1}function Ge(e){function n(t,r,l,o,i){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?br:Nu,this.isPropagationStopped=Nu,this}return C(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=br)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=br)},persist:function(){},isPersistent:br}),n}var vt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ao=Ge(vt),Zt=C({},vt,{view:0,detail:0}),Nc=Ge(Zt),co,fo,Jt,Ar=C({},Zt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ho,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jt&&(Jt&&e.type==="mousemove"?(co=e.screenX-Jt.screenX,fo=e.screenY-Jt.screenY):fo=co=0,Jt=e),co)},movementY:function(e){return"movementY"in e?e.movementY:fo}}),zu=Ge(Ar),zc=C({},Ar,{dataTransfer:0}),Pc=Ge(zc),Tc=C({},Zt,{relatedTarget:0}),po=Ge(Tc),Rc=C({},vt,{animationName:0,elapsedTime:0,pseudoElement:0}),Lc=Ge(Rc),jc=C({},vt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mc=Ge(jc),Oc=C({},vt,{data:0}),Pu=Ge(Oc),Dc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ic={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bc(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Fc[e])?!!n[e]:!1}function ho(){return bc}var Ac=C({},Zt,{key:function(e){if(e.key){var n=Dc[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Fr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ic[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ho,charCode:function(e){return e.type==="keypress"?Fr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Uc=Ge(Ac),Bc=C({},Ar,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tu=Ge(Bc),Wc=C({},Zt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ho}),Vc=Ge(Wc),$c=C({},vt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hc=Ge($c),Qc=C({},Ar,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yc=Ge(Qc),Kc=[9,13,27,32],mo=V&&"CompositionEvent"in window,qt=null;V&&"documentMode"in document&&(qt=document.documentMode);var Xc=V&&"TextEvent"in window&&!qt,Ru=V&&(!mo||qt&&8<qt&&11>=qt),Lu=" ",ju=!1;function Mu(e,n){switch(e){case"keyup":return Kc.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ou(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yt=!1;function Gc(e,n){switch(e){case"compositionend":return Ou(n);case"keypress":return n.which!==32?null:(ju=!0,Lu);case"textInput":return e=n.data,e===Lu&&ju?null:e;default:return null}}function Zc(e,n){if(yt)return e==="compositionend"||!mo&&Mu(e,n)?(e=_u(),Ir=so=bn=null,yt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ru&&n.locale!=="ko"?null:n.data;default:return null}}var Jc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Du(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Jc[e.type]:n==="textarea"}function Iu(e,n,t,r){tu(r),n=$r(n,"onChange"),0<n.length&&(t=new ao("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var er=null,nr=null;function qc(e){es(e,0)}function Ur(e){var n=St(e);if(nn(n))return e}function ed(e,n){if(e==="change")return n}var Fu=!1;if(V){var vo;if(V){var yo="oninput"in document;if(!yo){var bu=document.createElement("div");bu.setAttribute("oninput","return;"),yo=typeof bu.oninput=="function"}vo=yo}else vo=!1;Fu=vo&&(!document.documentMode||9<document.documentMode)}function Au(){er&&(er.detachEvent("onpropertychange",Uu),nr=er=null)}function Uu(e){if(e.propertyName==="value"&&Ur(nr)){var n=[];Iu(n,nr,e,Xl(e)),iu(qc,n)}}function nd(e,n,t){e==="focusin"?(Au(),er=n,nr=t,er.attachEvent("onpropertychange",Uu)):e==="focusout"&&Au()}function td(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ur(nr)}function rd(e,n){if(e==="click")return Ur(n)}function ld(e,n){if(e==="input"||e==="change")return Ur(n)}function od(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var fn=typeof Object.is=="function"?Object.is:od;function tr(e,n){if(fn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!L.call(n,l)||!fn(e[l],n[l]))return!1}return!0}function Bu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wu(e,n){var t=Bu(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Bu(t)}}function Vu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Vu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function $u(){for(var e=window,n=cn();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=cn(e.document)}return n}function go(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function id(e){var n=$u(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Vu(t.ownerDocument.documentElement,t)){if(r!==null&&go(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=Wu(t,o);var i=Wu(t,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ud=V&&"documentMode"in document&&11>=document.documentMode,gt=null,xo=null,rr=null,wo=!1;function Hu(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;wo||gt==null||gt!==cn(r)||(r=gt,"selectionStart"in r&&go(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),rr&&tr(rr,r)||(rr=r,r=$r(xo,"onSelect"),0<r.length&&(n=new ao("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=gt)))}function Br(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var xt={animationend:Br("Animation","AnimationEnd"),animationiteration:Br("Animation","AnimationIteration"),animationstart:Br("Animation","AnimationStart"),transitionend:Br("Transition","TransitionEnd")},ko={},Qu={};V&&(Qu=document.createElement("div").style,"AnimationEvent"in window||(delete xt.animationend.animation,delete xt.animationiteration.animation,delete xt.animationstart.animation),"TransitionEvent"in window||delete xt.transitionend.transition);function Wr(e){if(ko[e])return ko[e];if(!xt[e])return e;var n=xt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Qu)return ko[e]=n[t];return e}var Yu=Wr("animationend"),Ku=Wr("animationiteration"),Xu=Wr("animationstart"),Gu=Wr("transitionend"),Zu=new Map,Ju="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function An(e,n){Zu.set(e,n),ee(n,[e])}for(var So=0;So<Ju.length;So++){var Eo=Ju[So],sd=Eo.toLowerCase(),ad=Eo[0].toUpperCase()+Eo.slice(1);An(sd,"on"+ad)}An(Yu,"onAnimationEnd"),An(Ku,"onAnimationIteration"),An(Xu,"onAnimationStart"),An("dblclick","onDoubleClick"),An("focusin","onFocus"),An("focusout","onBlur"),An(Gu,"onTransitionEnd"),F("onMouseEnter",["mouseout","mouseover"]),F("onMouseLeave",["mouseout","mouseover"]),F("onPointerEnter",["pointerout","pointerover"]),F("onPointerLeave",["pointerout","pointerover"]),ee("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ee("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ee("onBeforeInput",["compositionend","keypress","textInput","paste"]),ee("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ee("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ee("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cd=new Set("cancel close invalid load scroll toggle".split(" ").concat(lr));function qu(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,sc(r,n,void 0,e),e.currentTarget=null}function es(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var i=r.length-1;0<=i;i--){var u=r[i],s=u.instance,p=u.currentTarget;if(u=u.listener,s!==o&&l.isPropagationStopped())break e;qu(l,u,p),o=s}else for(i=0;i<r.length;i++){if(u=r[i],s=u.instance,p=u.currentTarget,u=u.listener,s!==o&&l.isPropagationStopped())break e;qu(l,u,p),o=s}}}if(Nr)throw e=ql,Nr=!1,ql=null,e}function ie(e,n){var t=n[Lo];t===void 0&&(t=n[Lo]=new Set);var r=e+"__bubble";t.has(r)||(ns(n,e,2,!1),t.add(r))}function Co(e,n,t){var r=0;n&&(r|=4),ns(t,e,r,n)}var Vr="_reactListening"+Math.random().toString(36).slice(2);function or(e){if(!e[Vr]){e[Vr]=!0,oe.forEach(function(t){t!=="selectionchange"&&(cd.has(t)||Co(t,!1,e),Co(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Vr]||(n[Vr]=!0,Co("selectionchange",!1,n))}}function ns(e,n,t,r){switch(Cu(n)){case 1:var l=Cc;break;case 4:l=_c;break;default:l=io}t=l.bind(null,n,t,e),l=void 0,!Jl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function _o(e,n,t,r,l){var o=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;i=i.return}for(;u!==null;){if(i=et(u),i===null)return;if(s=i.tag,s===5||s===6){r=o=i;continue e}u=u.parentNode}}r=r.return}iu(function(){var p=o,g=Xl(t),x=[];e:{var y=Zu.get(e);if(y!==void 0){var E=ao,N=e;switch(e){case"keypress":if(Fr(t)===0)break e;case"keydown":case"keyup":E=Uc;break;case"focusin":N="focus",E=po;break;case"focusout":N="blur",E=po;break;case"beforeblur":case"afterblur":E=po;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=zu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=Pc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=Vc;break;case Yu:case Ku:case Xu:E=Lc;break;case Gu:E=Hc;break;case"scroll":E=Nc;break;case"wheel":E=Yc;break;case"copy":case"cut":case"paste":E=Mc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Tu}var z=(n&4)!==0,ve=!z&&e==="scroll",d=z?y!==null?y+"Capture":null:y;z=[];for(var a=p,f;a!==null;){f=a;var w=f.stateNode;if(f.tag===5&&w!==null&&(f=w,d!==null&&(w=Bt(a,d),w!=null&&z.push(ir(a,w,f)))),ve)break;a=a.return}0<z.length&&(y=new E(y,N,null,t,g),x.push({event:y,listeners:z}))}}if((n&7)===0){e:{if(y=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",y&&t!==Kl&&(N=t.relatedTarget||t.fromElement)&&(et(N)||N[Nn]))break e;if((E||y)&&(y=g.window===g?g:(y=g.ownerDocument)?y.defaultView||y.parentWindow:window,E?(N=t.relatedTarget||t.toElement,E=p,N=N?et(N):null,N!==null&&(ve=qn(N),N!==ve||N.tag!==5&&N.tag!==6)&&(N=null)):(E=null,N=p),E!==N)){if(z=zu,w="onMouseLeave",d="onMouseEnter",a="mouse",(e==="pointerout"||e==="pointerover")&&(z=Tu,w="onPointerLeave",d="onPointerEnter",a="pointer"),ve=E==null?y:St(E),f=N==null?y:St(N),y=new z(w,a+"leave",E,t,g),y.target=ve,y.relatedTarget=f,w=null,et(g)===p&&(z=new z(d,a+"enter",N,t,g),z.target=f,z.relatedTarget=ve,w=z),ve=w,E&&N)n:{for(z=E,d=N,a=0,f=z;f;f=wt(f))a++;for(f=0,w=d;w;w=wt(w))f++;for(;0<a-f;)z=wt(z),a--;for(;0<f-a;)d=wt(d),f--;for(;a--;){if(z===d||d!==null&&z===d.alternate)break n;z=wt(z),d=wt(d)}z=null}else z=null;E!==null&&ts(x,y,E,z,!1),N!==null&&ve!==null&&ts(x,ve,N,z,!0)}}e:{if(y=p?St(p):window,E=y.nodeName&&y.nodeName.toLowerCase(),E==="select"||E==="input"&&y.type==="file")var P=ed;else if(Du(y))if(Fu)P=ld;else{P=td;var M=nd}else(E=y.nodeName)&&E.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(P=rd);if(P&&(P=P(e,p))){Iu(x,P,t,g);break e}M&&M(e,y,p),e==="focusout"&&(M=y._wrapperState)&&M.controlled&&y.type==="number"&&Vl(y,"number",y.value)}switch(M=p?St(p):window,e){case"focusin":(Du(M)||M.contentEditable==="true")&&(gt=M,xo=p,rr=null);break;case"focusout":rr=xo=gt=null;break;case"mousedown":wo=!0;break;case"contextmenu":case"mouseup":case"dragend":wo=!1,Hu(x,t,g);break;case"selectionchange":if(ud)break;case"keydown":case"keyup":Hu(x,t,g)}var O;if(mo)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else yt?Mu(e,t)&&(I="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(I="onCompositionStart");I&&(Ru&&t.locale!=="ko"&&(yt||I!=="onCompositionStart"?I==="onCompositionEnd"&&yt&&(O=_u()):(bn=g,so="value"in bn?bn.value:bn.textContent,yt=!0)),M=$r(p,I),0<M.length&&(I=new Pu(I,e,null,t,g),x.push({event:I,listeners:M}),O?I.data=O:(O=Ou(t),O!==null&&(I.data=O)))),(O=Xc?Gc(e,t):Zc(e,t))&&(p=$r(p,"onBeforeInput"),0<p.length&&(g=new Pu("onBeforeInput","beforeinput",null,t,g),x.push({event:g,listeners:p}),g.data=O))}es(x,n)})}function ir(e,n,t){return{instance:e,listener:n,currentTarget:t}}function $r(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Bt(e,t),o!=null&&r.unshift(ir(e,o,l)),o=Bt(e,n),o!=null&&r.push(ir(e,o,l))),e=e.return}return r}function wt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ts(e,n,t,r,l){for(var o=n._reactName,i=[];t!==null&&t!==r;){var u=t,s=u.alternate,p=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&p!==null&&(u=p,l?(s=Bt(t,o),s!=null&&i.unshift(ir(t,s,u))):l||(s=Bt(t,o),s!=null&&i.push(ir(t,s,u)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var dd=/\r\n?/g,fd=/\u0000|\uFFFD/g;function rs(e){return(typeof e=="string"?e:""+e).replace(dd,`
`).replace(fd,"")}function Hr(e,n,t){if(n=rs(n),rs(e)!==n&&t)throw Error(h(425))}function Qr(){}var No=null,zo=null;function Po(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var To=typeof setTimeout=="function"?setTimeout:void 0,pd=typeof clearTimeout=="function"?clearTimeout:void 0,ls=typeof Promise=="function"?Promise:void 0,hd=typeof queueMicrotask=="function"?queueMicrotask:typeof ls<"u"?function(e){return ls.resolve(null).then(e).catch(md)}:To;function md(e){setTimeout(function(){throw e})}function Ro(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),Gt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);Gt(n)}function Un(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function os(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var kt=Math.random().toString(36).slice(2),wn="__reactFiber$"+kt,ur="__reactProps$"+kt,Nn="__reactContainer$"+kt,Lo="__reactEvents$"+kt,vd="__reactListeners$"+kt,yd="__reactHandles$"+kt;function et(e){var n=e[wn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Nn]||t[wn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=os(e);e!==null;){if(t=e[wn])return t;e=os(e)}return n}e=t,t=e.parentNode}return null}function sr(e){return e=e[wn]||e[Nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function St(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}function Yr(e){return e[ur]||null}var jo=[],Et=-1;function Bn(e){return{current:e}}function ue(e){0>Et||(e.current=jo[Et],jo[Et]=null,Et--)}function le(e,n){Et++,jo[Et]=e.current,e.current=n}var Wn={},Me=Bn(Wn),$e=Bn(!1),nt=Wn;function Ct(e,n){var t=e.type.contextTypes;if(!t)return Wn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in t)l[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function He(e){return e=e.childContextTypes,e!=null}function Kr(){ue($e),ue(Me)}function is(e,n,t){if(Me.current!==Wn)throw Error(h(168));le(Me,n),le($e,t)}function us(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(h(108,J(e)||"Unknown",l));return C({},t,r)}function Xr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wn,nt=Me.current,le(Me,e),le($e,$e.current),!0}function ss(e,n,t){var r=e.stateNode;if(!r)throw Error(h(169));t?(e=us(e,n,nt),r.__reactInternalMemoizedMergedChildContext=e,ue($e),ue(Me),le(Me,e)):ue($e),le($e,t)}var zn=null,Gr=!1,Mo=!1;function as(e){zn===null?zn=[e]:zn.push(e)}function gd(e){Gr=!0,as(e)}function Vn(){if(!Mo&&zn!==null){Mo=!0;var e=0,n=q;try{var t=zn;for(q=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}zn=null,Gr=!1}catch(l){throw zn!==null&&(zn=zn.slice(e+1)),du(eo,Vn),l}finally{q=n,Mo=!1}}return null}var _t=[],Nt=0,Zr=null,Jr=0,tn=[],rn=0,tt=null,Pn=1,Tn="";function rt(e,n){_t[Nt++]=Jr,_t[Nt++]=Zr,Zr=e,Jr=n}function cs(e,n,t){tn[rn++]=Pn,tn[rn++]=Tn,tn[rn++]=tt,tt=e;var r=Pn;e=Tn;var l=32-dn(r)-1;r&=~(1<<l),t+=1;var o=32-dn(n)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,Pn=1<<32-dn(n)+l|t<<l|r,Tn=o+e}else Pn=1<<o|t<<l|r,Tn=e}function Oo(e){e.return!==null&&(rt(e,1),cs(e,1,0))}function Do(e){for(;e===Zr;)Zr=_t[--Nt],_t[Nt]=null,Jr=_t[--Nt],_t[Nt]=null;for(;e===tt;)tt=tn[--rn],tn[rn]=null,Tn=tn[--rn],tn[rn]=null,Pn=tn[--rn],tn[rn]=null}var Ze=null,Je=null,se=!1,pn=null;function ds(e,n){var t=sn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function fs(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ze=e,Je=Un(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ze=e,Je=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=tt!==null?{id:Pn,overflow:Tn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=sn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ze=e,Je=null,!0):!1;default:return!1}}function Io(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fo(e){if(se){var n=Je;if(n){var t=n;if(!fs(e,n)){if(Io(e))throw Error(h(418));n=Un(t.nextSibling);var r=Ze;n&&fs(e,n)?ds(r,t):(e.flags=e.flags&-4097|2,se=!1,Ze=e)}}else{if(Io(e))throw Error(h(418));e.flags=e.flags&-4097|2,se=!1,Ze=e}}}function ps(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ze=e}function qr(e){if(e!==Ze)return!1;if(!se)return ps(e),se=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Po(e.type,e.memoizedProps)),n&&(n=Je)){if(Io(e))throw hs(),Error(h(418));for(;n;)ds(e,n),n=Un(n.nextSibling)}if(ps(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Je=Un(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Je=null}}else Je=Ze?Un(e.stateNode.nextSibling):null;return!0}function hs(){for(var e=Je;e;)e=Un(e.nextSibling)}function zt(){Je=Ze=null,se=!1}function bo(e){pn===null?pn=[e]:pn.push(e)}var xd=pe.ReactCurrentBatchConfig;function ar(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(h(309));var r=t.stateNode}if(!r)throw Error(h(147,e));var l=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(i){var u=l.refs;i===null?delete u[o]:u[o]=i},n._stringRef=o,n)}if(typeof e!="string")throw Error(h(284));if(!t._owner)throw Error(h(290,e))}return e}function el(e,n){throw e=Object.prototype.toString.call(n),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ms(e){var n=e._init;return n(e._payload)}function vs(e){function n(d,a){if(e){var f=d.deletions;f===null?(d.deletions=[a],d.flags|=16):f.push(a)}}function t(d,a){if(!e)return null;for(;a!==null;)n(d,a),a=a.sibling;return null}function r(d,a){for(d=new Map;a!==null;)a.key!==null?d.set(a.key,a):d.set(a.index,a),a=a.sibling;return d}function l(d,a){return d=Zn(d,a),d.index=0,d.sibling=null,d}function o(d,a,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<a?(d.flags|=2,a):f):(d.flags|=2,a)):(d.flags|=1048576,a)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function u(d,a,f,w){return a===null||a.tag!==6?(a=Ti(f,d.mode,w),a.return=d,a):(a=l(a,f),a.return=d,a)}function s(d,a,f,w){var P=f.type;return P===ye?g(d,a,f.props.children,w,f.key):a!==null&&(a.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Se&&ms(P)===a.type)?(w=l(a,f.props),w.ref=ar(d,a,f),w.return=d,w):(w=Cl(f.type,f.key,f.props,null,d.mode,w),w.ref=ar(d,a,f),w.return=d,w)}function p(d,a,f,w){return a===null||a.tag!==4||a.stateNode.containerInfo!==f.containerInfo||a.stateNode.implementation!==f.implementation?(a=Ri(f,d.mode,w),a.return=d,a):(a=l(a,f.children||[]),a.return=d,a)}function g(d,a,f,w,P){return a===null||a.tag!==7?(a=dt(f,d.mode,w,P),a.return=d,a):(a=l(a,f),a.return=d,a)}function x(d,a,f){if(typeof a=="string"&&a!==""||typeof a=="number")return a=Ti(""+a,d.mode,f),a.return=d,a;if(typeof a=="object"&&a!==null){switch(a.$$typeof){case Ve:return f=Cl(a.type,a.key,a.props,null,d.mode,f),f.ref=ar(d,null,a),f.return=d,f;case ke:return a=Ri(a,d.mode,f),a.return=d,a;case Se:var w=a._init;return x(d,w(a._payload),f)}if(bt(a)||T(a))return a=dt(a,d.mode,f,null),a.return=d,a;el(d,a)}return null}function y(d,a,f,w){var P=a!==null?a.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return P!==null?null:u(d,a,""+f,w);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ve:return f.key===P?s(d,a,f,w):null;case ke:return f.key===P?p(d,a,f,w):null;case Se:return P=f._init,y(d,a,P(f._payload),w)}if(bt(f)||T(f))return P!==null?null:g(d,a,f,w,null);el(d,f)}return null}function E(d,a,f,w,P){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(f)||null,u(a,d,""+w,P);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ve:return d=d.get(w.key===null?f:w.key)||null,s(a,d,w,P);case ke:return d=d.get(w.key===null?f:w.key)||null,p(a,d,w,P);case Se:var M=w._init;return E(d,a,f,M(w._payload),P)}if(bt(w)||T(w))return d=d.get(f)||null,g(a,d,w,P,null);el(a,w)}return null}function N(d,a,f,w){for(var P=null,M=null,O=a,I=a=0,_e=null;O!==null&&I<f.length;I++){O.index>I?(_e=O,O=null):_e=O.sibling;var Y=y(d,O,f[I],w);if(Y===null){O===null&&(O=_e);break}e&&O&&Y.alternate===null&&n(d,O),a=o(Y,a,I),M===null?P=Y:M.sibling=Y,M=Y,O=_e}if(I===f.length)return t(d,O),se&&rt(d,I),P;if(O===null){for(;I<f.length;I++)O=x(d,f[I],w),O!==null&&(a=o(O,a,I),M===null?P=O:M.sibling=O,M=O);return se&&rt(d,I),P}for(O=r(d,O);I<f.length;I++)_e=E(O,d,I,f[I],w),_e!==null&&(e&&_e.alternate!==null&&O.delete(_e.key===null?I:_e.key),a=o(_e,a,I),M===null?P=_e:M.sibling=_e,M=_e);return e&&O.forEach(function(Jn){return n(d,Jn)}),se&&rt(d,I),P}function z(d,a,f,w){var P=T(f);if(typeof P!="function")throw Error(h(150));if(f=P.call(f),f==null)throw Error(h(151));for(var M=P=null,O=a,I=a=0,_e=null,Y=f.next();O!==null&&!Y.done;I++,Y=f.next()){O.index>I?(_e=O,O=null):_e=O.sibling;var Jn=y(d,O,Y.value,w);if(Jn===null){O===null&&(O=_e);break}e&&O&&Jn.alternate===null&&n(d,O),a=o(Jn,a,I),M===null?P=Jn:M.sibling=Jn,M=Jn,O=_e}if(Y.done)return t(d,O),se&&rt(d,I),P;if(O===null){for(;!Y.done;I++,Y=f.next())Y=x(d,Y.value,w),Y!==null&&(a=o(Y,a,I),M===null?P=Y:M.sibling=Y,M=Y);return se&&rt(d,I),P}for(O=r(d,O);!Y.done;I++,Y=f.next())Y=E(O,d,I,Y.value,w),Y!==null&&(e&&Y.alternate!==null&&O.delete(Y.key===null?I:Y.key),a=o(Y,a,I),M===null?P=Y:M.sibling=Y,M=Y);return e&&O.forEach(function(Jd){return n(d,Jd)}),se&&rt(d,I),P}function ve(d,a,f,w){if(typeof f=="object"&&f!==null&&f.type===ye&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Ve:e:{for(var P=f.key,M=a;M!==null;){if(M.key===P){if(P=f.type,P===ye){if(M.tag===7){t(d,M.sibling),a=l(M,f.props.children),a.return=d,d=a;break e}}else if(M.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Se&&ms(P)===M.type){t(d,M.sibling),a=l(M,f.props),a.ref=ar(d,M,f),a.return=d,d=a;break e}t(d,M);break}else n(d,M);M=M.sibling}f.type===ye?(a=dt(f.props.children,d.mode,w,f.key),a.return=d,d=a):(w=Cl(f.type,f.key,f.props,null,d.mode,w),w.ref=ar(d,a,f),w.return=d,d=w)}return i(d);case ke:e:{for(M=f.key;a!==null;){if(a.key===M)if(a.tag===4&&a.stateNode.containerInfo===f.containerInfo&&a.stateNode.implementation===f.implementation){t(d,a.sibling),a=l(a,f.children||[]),a.return=d,d=a;break e}else{t(d,a);break}else n(d,a);a=a.sibling}a=Ri(f,d.mode,w),a.return=d,d=a}return i(d);case Se:return M=f._init,ve(d,a,M(f._payload),w)}if(bt(f))return N(d,a,f,w);if(T(f))return z(d,a,f,w);el(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,a!==null&&a.tag===6?(t(d,a.sibling),a=l(a,f),a.return=d,d=a):(t(d,a),a=Ti(f,d.mode,w),a.return=d,d=a),i(d)):t(d,a)}return ve}var Pt=vs(!0),ys=vs(!1),nl=Bn(null),tl=null,Tt=null,Ao=null;function Uo(){Ao=Tt=tl=null}function Bo(e){var n=nl.current;ue(nl),e._currentValue=n}function Wo(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Rt(e,n){tl=e,Ao=Tt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(Qe=!0),e.firstContext=null)}function ln(e){var n=e._currentValue;if(Ao!==e)if(e={context:e,memoizedValue:n,next:null},Tt===null){if(tl===null)throw Error(h(308));Tt=e,tl.dependencies={lanes:0,firstContext:e}}else Tt=Tt.next=e;return n}var lt=null;function Vo(e){lt===null?lt=[e]:lt.push(e)}function gs(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,Vo(n)):(t.next=l.next,l.next=t),n.interleaved=t,Rn(e,r)}function Rn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var $n=!1;function $o(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xs(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ln(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Hn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(H&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,Rn(e,t)}return l=r.interleaved,l===null?(n.next=n,Vo(r)):(n.next=l.next,l.next=n),r.interleaved=n,Rn(e,t)}function rl(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ro(e,t)}}function ws(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?l=o=i:o=o.next=i,t=t.next}while(t!==null);o===null?l=o=n:o=o.next=n}else l=o=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ll(e,n,t,r){var l=e.updateQueue;$n=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var s=u,p=s.next;s.next=null,i===null?o=p:i.next=p,i=s;var g=e.alternate;g!==null&&(g=g.updateQueue,u=g.lastBaseUpdate,u!==i&&(u===null?g.firstBaseUpdate=p:u.next=p,g.lastBaseUpdate=s))}if(o!==null){var x=l.baseState;i=0,g=p=s=null,u=o;do{var y=u.lane,E=u.eventTime;if((r&y)===y){g!==null&&(g=g.next={eventTime:E,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var N=e,z=u;switch(y=n,E=t,z.tag){case 1:if(N=z.payload,typeof N=="function"){x=N.call(E,x,y);break e}x=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=z.payload,y=typeof N=="function"?N.call(E,x,y):N,y==null)break e;x=C({},x,y);break e;case 2:$n=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,y=l.effects,y===null?l.effects=[u]:y.push(u))}else E={eventTime:E,lane:y,tag:u.tag,payload:u.payload,callback:u.callback,next:null},g===null?(p=g=E,s=x):g=g.next=E,i|=y;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;y=u,u=y.next,y.next=null,l.lastBaseUpdate=y,l.shared.pending=null}}while(!0);if(g===null&&(s=x),l.baseState=s,l.firstBaseUpdate=p,l.lastBaseUpdate=g,n=l.shared.interleaved,n!==null){l=n;do i|=l.lane,l=l.next;while(l!==n)}else o===null&&(l.shared.lanes=0);ut|=i,e.lanes=i,e.memoizedState=x}}function ks(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(h(191,l));l.call(r)}}}var cr={},kn=Bn(cr),dr=Bn(cr),fr=Bn(cr);function ot(e){if(e===cr)throw Error(h(174));return e}function Ho(e,n){switch(le(fr,n),le(dr,e),le(kn,cr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Hl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Hl(n,e)}ue(kn),le(kn,n)}function Lt(){ue(kn),ue(dr),ue(fr)}function Ss(e){ot(fr.current);var n=ot(kn.current),t=Hl(n,e.type);n!==t&&(le(dr,e),le(kn,t))}function Qo(e){dr.current===e&&(ue(kn),ue(dr))}var ce=Bn(0);function ol(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Yo=[];function Ko(){for(var e=0;e<Yo.length;e++)Yo[e]._workInProgressVersionPrimary=null;Yo.length=0}var il=pe.ReactCurrentDispatcher,Xo=pe.ReactCurrentBatchConfig,it=0,de=null,xe=null,Ee=null,ul=!1,pr=!1,hr=0,wd=0;function Oe(){throw Error(h(321))}function Go(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!fn(e[t],n[t]))return!1;return!0}function Zo(e,n,t,r,l,o){if(it=o,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,il.current=e===null||e.memoizedState===null?Cd:_d,e=t(r,l),pr){o=0;do{if(pr=!1,hr=0,25<=o)throw Error(h(301));o+=1,Ee=xe=null,n.updateQueue=null,il.current=Nd,e=t(r,l)}while(pr)}if(il.current=cl,n=xe!==null&&xe.next!==null,it=0,Ee=xe=de=null,ul=!1,n)throw Error(h(300));return e}function Jo(){var e=hr!==0;return hr=0,e}function Sn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?de.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function on(){if(xe===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var n=Ee===null?de.memoizedState:Ee.next;if(n!==null)Ee=n,xe=e;else{if(e===null)throw Error(h(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Ee===null?de.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function mr(e,n){return typeof n=="function"?n(e):n}function qo(e){var n=on(),t=n.queue;if(t===null)throw Error(h(311));t.lastRenderedReducer=e;var r=xe,l=r.baseQueue,o=t.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,t.pending=null}if(l!==null){o=l.next,r=r.baseState;var u=i=null,s=null,p=o;do{var g=p.lane;if((it&g)===g)s!==null&&(s=s.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var x={lane:g,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};s===null?(u=s=x,i=r):s=s.next=x,de.lanes|=g,ut|=g}p=p.next}while(p!==null&&p!==o);s===null?i=r:s.next=u,fn(r,n.memoizedState)||(Qe=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do o=l.lane,de.lanes|=o,ut|=o,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function ei(e){var n=on(),t=n.queue;if(t===null)throw Error(h(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,o=n.memoizedState;if(l!==null){t.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);fn(o,n.memoizedState)||(Qe=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function Es(){}function Cs(e,n){var t=de,r=on(),l=n(),o=!fn(r.memoizedState,l);if(o&&(r.memoizedState=l,Qe=!0),r=r.queue,ni(zs.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||Ee!==null&&Ee.memoizedState.tag&1){if(t.flags|=2048,vr(9,Ns.bind(null,t,r,l,n),void 0,null),Ce===null)throw Error(h(349));(it&30)!==0||_s(t,n,l)}return l}function _s(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=de.updateQueue,n===null?(n={lastEffect:null,stores:null},de.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Ns(e,n,t,r){n.value=t,n.getSnapshot=r,Ps(n)&&Ts(e)}function zs(e,n,t){return t(function(){Ps(n)&&Ts(e)})}function Ps(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!fn(e,t)}catch{return!0}}function Ts(e){var n=Rn(e,1);n!==null&&yn(n,e,1,-1)}function Rs(e){var n=Sn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mr,lastRenderedState:e},n.queue=e,e=e.dispatch=Ed.bind(null,de,e),[n.memoizedState,e]}function vr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=de.updateQueue,n===null?(n={lastEffect:null,stores:null},de.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Ls(){return on().memoizedState}function sl(e,n,t,r){var l=Sn();de.flags|=e,l.memoizedState=vr(1|n,t,void 0,r===void 0?null:r)}function al(e,n,t,r){var l=on();r=r===void 0?null:r;var o=void 0;if(xe!==null){var i=xe.memoizedState;if(o=i.destroy,r!==null&&Go(r,i.deps)){l.memoizedState=vr(n,t,o,r);return}}de.flags|=e,l.memoizedState=vr(1|n,t,o,r)}function js(e,n){return sl(8390656,8,e,n)}function ni(e,n){return al(2048,8,e,n)}function Ms(e,n){return al(4,2,e,n)}function Os(e,n){return al(4,4,e,n)}function Ds(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Is(e,n,t){return t=t!=null?t.concat([e]):null,al(4,4,Ds.bind(null,n,e),t)}function ti(){}function Fs(e,n){var t=on();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Go(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function bs(e,n){var t=on();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Go(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function As(e,n,t){return(it&21)===0?(e.baseState&&(e.baseState=!1,Qe=!0),e.memoizedState=t):(fn(t,n)||(t=mu(),de.lanes|=t,ut|=t,e.baseState=!0),n)}function kd(e,n){var t=q;q=t!==0&&4>t?t:4,e(!0);var r=Xo.transition;Xo.transition={};try{e(!1),n()}finally{q=t,Xo.transition=r}}function Us(){return on().memoizedState}function Sd(e,n,t){var r=Xn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Bs(e))Ws(n,t);else if(t=gs(e,n,t,r),t!==null){var l=Be();yn(t,e,r,l),Vs(t,n,r)}}function Ed(e,n,t){var r=Xn(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Bs(e))Ws(n,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var i=n.lastRenderedState,u=o(i,t);if(l.hasEagerState=!0,l.eagerState=u,fn(u,i)){var s=n.interleaved;s===null?(l.next=l,Vo(n)):(l.next=s.next,s.next=l),n.interleaved=l;return}}catch{}finally{}t=gs(e,n,l,r),t!==null&&(l=Be(),yn(t,e,r,l),Vs(t,n,r))}}function Bs(e){var n=e.alternate;return e===de||n!==null&&n===de}function Ws(e,n){pr=ul=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Vs(e,n,t){if((t&4194240)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ro(e,t)}}var cl={readContext:ln,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},Cd={readContext:ln,useCallback:function(e,n){return Sn().memoizedState=[e,n===void 0?null:n],e},useContext:ln,useEffect:js,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,sl(4194308,4,Ds.bind(null,n,e),t)},useLayoutEffect:function(e,n){return sl(4194308,4,e,n)},useInsertionEffect:function(e,n){return sl(4,2,e,n)},useMemo:function(e,n){var t=Sn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Sn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Sd.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var n=Sn();return e={current:e},n.memoizedState=e},useState:Rs,useDebugValue:ti,useDeferredValue:function(e){return Sn().memoizedState=e},useTransition:function(){var e=Rs(!1),n=e[0];return e=kd.bind(null,e[1]),Sn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=de,l=Sn();if(se){if(t===void 0)throw Error(h(407));t=t()}else{if(t=n(),Ce===null)throw Error(h(349));(it&30)!==0||_s(r,n,t)}l.memoizedState=t;var o={value:t,getSnapshot:n};return l.queue=o,js(zs.bind(null,r,o,e),[e]),r.flags|=2048,vr(9,Ns.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=Sn(),n=Ce.identifierPrefix;if(se){var t=Tn,r=Pn;t=(r&~(1<<32-dn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=hr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=wd++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},_d={readContext:ln,useCallback:Fs,useContext:ln,useEffect:ni,useImperativeHandle:Is,useInsertionEffect:Ms,useLayoutEffect:Os,useMemo:bs,useReducer:qo,useRef:Ls,useState:function(){return qo(mr)},useDebugValue:ti,useDeferredValue:function(e){var n=on();return As(n,xe.memoizedState,e)},useTransition:function(){var e=qo(mr)[0],n=on().memoizedState;return[e,n]},useMutableSource:Es,useSyncExternalStore:Cs,useId:Us,unstable_isNewReconciler:!1},Nd={readContext:ln,useCallback:Fs,useContext:ln,useEffect:ni,useImperativeHandle:Is,useInsertionEffect:Ms,useLayoutEffect:Os,useMemo:bs,useReducer:ei,useRef:Ls,useState:function(){return ei(mr)},useDebugValue:ti,useDeferredValue:function(e){var n=on();return xe===null?n.memoizedState=e:As(n,xe.memoizedState,e)},useTransition:function(){var e=ei(mr)[0],n=on().memoizedState;return[e,n]},useMutableSource:Es,useSyncExternalStore:Cs,useId:Us,unstable_isNewReconciler:!1};function hn(e,n){if(e&&e.defaultProps){n=C({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function ri(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:C({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var dl={isMounted:function(e){return(e=e._reactInternals)?qn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Be(),l=Xn(e),o=Ln(r,l);o.payload=n,t!=null&&(o.callback=t),n=Hn(e,o,l),n!==null&&(yn(n,e,l,r),rl(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Be(),l=Xn(e),o=Ln(r,l);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=Hn(e,o,l),n!==null&&(yn(n,e,l,r),rl(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Be(),r=Xn(e),l=Ln(t,r);l.tag=2,n!=null&&(l.callback=n),n=Hn(e,l,r),n!==null&&(yn(n,e,r,t),rl(n,e,r))}};function $s(e,n,t,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):n.prototype&&n.prototype.isPureReactComponent?!tr(t,r)||!tr(l,o):!0}function Hs(e,n,t){var r=!1,l=Wn,o=n.contextType;return typeof o=="object"&&o!==null?o=ln(o):(l=He(n)?nt:Me.current,r=n.contextTypes,o=(r=r!=null)?Ct(e,l):Wn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=dl,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),n}function Qs(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&dl.enqueueReplaceState(n,n.state,null)}function li(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},$o(e);var o=n.contextType;typeof o=="object"&&o!==null?l.context=ln(o):(o=He(n)?nt:Me.current,l.context=Ct(e,o)),l.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(ri(e,n,o,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&dl.enqueueReplaceState(l,l.state,null),ll(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function jt(e,n){try{var t="",r=n;do t+=U(r),r=r.return;while(r);var l=t}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:l,digest:null}}function oi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function ii(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var zd=typeof WeakMap=="function"?WeakMap:Map;function Ys(e,n,t){t=Ln(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){gl||(gl=!0,ki=r),ii(e,n)},t}function Ks(e,n,t){t=Ln(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){ii(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){ii(e,n),typeof r!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function Xs(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new zd;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=Bd.bind(null,e,n,t),n.then(e,e))}function Gs(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Zs(e,n,t,r,l){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Ln(-1,1),n.tag=2,Hn(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var Pd=pe.ReactCurrentOwner,Qe=!1;function Ue(e,n,t,r){n.child=e===null?ys(n,null,t,r):Pt(n,e.child,t,r)}function Js(e,n,t,r,l){t=t.render;var o=n.ref;return Rt(n,l),r=Zo(e,n,t,r,o,l),t=Jo(),e!==null&&!Qe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,jn(e,n,l)):(se&&t&&Oo(n),n.flags|=1,Ue(e,n,r,l),n.child)}function qs(e,n,t,r,l){if(e===null){var o=t.type;return typeof o=="function"&&!Pi(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,ea(e,n,o,r,l)):(e=Cl(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,(e.lanes&l)===0){var i=o.memoizedProps;if(t=t.compare,t=t!==null?t:tr,t(i,r)&&e.ref===n.ref)return jn(e,n,l)}return n.flags|=1,e=Zn(o,r),e.ref=n.ref,e.return=n,n.child=e}function ea(e,n,t,r,l){if(e!==null){var o=e.memoizedProps;if(tr(o,r)&&e.ref===n.ref)if(Qe=!1,n.pendingProps=r=o,(e.lanes&l)!==0)(e.flags&131072)!==0&&(Qe=!0);else return n.lanes=e.lanes,jn(e,n,l)}return ui(e,n,t,r,l)}function na(e,n,t){var r=n.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(Ot,qe),qe|=t;else{if((t&1073741824)===0)return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,le(Ot,qe),qe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,le(Ot,qe),qe|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,le(Ot,qe),qe|=r;return Ue(e,n,l,t),n.child}function ta(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function ui(e,n,t,r,l){var o=He(t)?nt:Me.current;return o=Ct(n,o),Rt(n,l),t=Zo(e,n,t,r,o,l),r=Jo(),e!==null&&!Qe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,jn(e,n,l)):(se&&r&&Oo(n),n.flags|=1,Ue(e,n,t,l),n.child)}function ra(e,n,t,r,l){if(He(t)){var o=!0;Xr(n)}else o=!1;if(Rt(n,l),n.stateNode===null)pl(e,n),Hs(n,t,r),li(n,t,r,l),r=!0;else if(e===null){var i=n.stateNode,u=n.memoizedProps;i.props=u;var s=i.context,p=t.contextType;typeof p=="object"&&p!==null?p=ln(p):(p=He(t)?nt:Me.current,p=Ct(n,p));var g=t.getDerivedStateFromProps,x=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";x||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==r||s!==p)&&Qs(n,i,r,p),$n=!1;var y=n.memoizedState;i.state=y,ll(n,r,i,l),s=n.memoizedState,u!==r||y!==s||$e.current||$n?(typeof g=="function"&&(ri(n,t,g,r),s=n.memoizedState),(u=$n||$s(n,t,u,r,y,s,p))?(x||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),i.props=r,i.state=s,i.context=p,r=u):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,xs(e,n),u=n.memoizedProps,p=n.type===n.elementType?u:hn(n.type,u),i.props=p,x=n.pendingProps,y=i.context,s=t.contextType,typeof s=="object"&&s!==null?s=ln(s):(s=He(t)?nt:Me.current,s=Ct(n,s));var E=t.getDerivedStateFromProps;(g=typeof E=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==x||y!==s)&&Qs(n,i,r,s),$n=!1,y=n.memoizedState,i.state=y,ll(n,r,i,l);var N=n.memoizedState;u!==x||y!==N||$e.current||$n?(typeof E=="function"&&(ri(n,t,E,r),N=n.memoizedState),(p=$n||$s(n,t,p,r,y,N,s)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,N,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,N,s)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&y===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&y===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=N),i.props=r,i.state=N,i.context=s,r=p):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&y===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&y===e.memoizedState||(n.flags|=1024),r=!1)}return si(e,n,t,r,o,l)}function si(e,n,t,r,l,o){ta(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return l&&ss(n,t,!1),jn(e,n,o);r=n.stateNode,Pd.current=n;var u=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=Pt(n,e.child,null,o),n.child=Pt(n,null,u,o)):Ue(e,n,u,o),n.memoizedState=r.state,l&&ss(n,t,!0),n.child}function la(e){var n=e.stateNode;n.pendingContext?is(e,n.pendingContext,n.pendingContext!==n.context):n.context&&is(e,n.context,!1),Ho(e,n.containerInfo)}function oa(e,n,t,r,l){return zt(),bo(l),n.flags|=256,Ue(e,n,t,r),n.child}var ai={dehydrated:null,treeContext:null,retryLane:0};function ci(e){return{baseLanes:e,cachePool:null,transitions:null}}function ia(e,n,t){var r=n.pendingProps,l=ce.current,o=!1,i=(n.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),le(ce,l&1),e===null)return Fo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(i=r.children,e=r.fallback,o?(r=n.mode,o=n.child,i={mode:"hidden",children:i},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=i):o=_l(i,r,0,null),e=dt(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=ci(t),n.memoizedState=ai,e):di(n,i));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return Td(e,n,i,r,u,l,t);if(o){o=r.fallback,i=n.mode,l=e.child,u=l.sibling;var s={mode:"hidden",children:r.children};return(i&1)===0&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=Zn(l,s),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?o=Zn(u,o):(o=dt(o,i,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,i=e.child.memoizedState,i=i===null?ci(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~t,n.memoizedState=ai,r}return o=e.child,e=o.sibling,r=Zn(o,{mode:"visible",children:r.children}),(n.mode&1)===0&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function di(e,n){return n=_l({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function fl(e,n,t,r){return r!==null&&bo(r),Pt(n,e.child,null,t),e=di(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Td(e,n,t,r,l,o,i){if(t)return n.flags&256?(n.flags&=-257,r=oi(Error(h(422))),fl(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,l=n.mode,r=_l({mode:"visible",children:r.children},l,0,null),o=dt(o,l,i,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,(n.mode&1)!==0&&Pt(n,e.child,null,i),n.child.memoizedState=ci(i),n.memoizedState=ai,o);if((n.mode&1)===0)return fl(e,n,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(h(419)),r=oi(o,r,void 0),fl(e,n,i,r)}if(u=(i&e.childLanes)!==0,Qe||u){if(r=Ce,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|i))!==0?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Rn(e,l),yn(r,e,l,-1))}return zi(),r=oi(Error(h(421))),fl(e,n,i,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=Wd.bind(null,e),l._reactRetry=n,null):(e=o.treeContext,Je=Un(l.nextSibling),Ze=n,se=!0,pn=null,e!==null&&(tn[rn++]=Pn,tn[rn++]=Tn,tn[rn++]=tt,Pn=e.id,Tn=e.overflow,tt=n),n=di(n,r.children),n.flags|=4096,n)}function ua(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Wo(e.return,n,t)}function fi(e,n,t,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=l)}function sa(e,n,t){var r=n.pendingProps,l=r.revealOrder,o=r.tail;if(Ue(e,n,r.children,t),r=ce.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ua(e,t,n);else if(e.tag===19)ua(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(le(ce,r),(n.mode&1)===0)n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&ol(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),fi(n,!1,l,t,o);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&ol(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}fi(n,!0,t,null,o);break;case"together":fi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function pl(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function jn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),ut|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(h(153));if(n.child!==null){for(e=n.child,t=Zn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Zn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Rd(e,n,t){switch(n.tag){case 3:la(n),zt();break;case 5:Ss(n);break;case 1:He(n.type)&&Xr(n);break;case 4:Ho(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;le(nl,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(le(ce,ce.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?ia(e,n,t):(le(ce,ce.current&1),e=jn(e,n,t),e!==null?e.sibling:null);le(ce,ce.current&1);break;case 19:if(r=(t&n.childLanes)!==0,(e.flags&128)!==0){if(r)return sa(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),le(ce,ce.current),r)break;return null;case 22:case 23:return n.lanes=0,na(e,n,t)}return jn(e,n,t)}var aa,pi,ca,da;aa=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},pi=function(){},ca=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,ot(kn.current);var o=null;switch(t){case"input":l=je(e,l),r=je(e,r),o=[];break;case"select":l=C({},l,{value:void 0}),r=C({},r,{value:void 0}),o=[];break;case"textarea":l=$l(e,l),r=$l(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qr)}Ql(t,r);var i;t=null;for(p in l)if(!r.hasOwnProperty(p)&&l.hasOwnProperty(p)&&l[p]!=null)if(p==="style"){var u=l[p];for(i in u)u.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(K.hasOwnProperty(p)?o||(o=[]):(o=o||[]).push(p,null));for(p in r){var s=r[p];if(u=l!=null?l[p]:void 0,r.hasOwnProperty(p)&&s!==u&&(s!=null||u!=null))if(p==="style")if(u){for(i in u)!u.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in s)s.hasOwnProperty(i)&&u[i]!==s[i]&&(t||(t={}),t[i]=s[i])}else t||(o||(o=[]),o.push(p,t)),t=s;else p==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(o=o||[]).push(p,s)):p==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(p,""+s):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(K.hasOwnProperty(p)?(s!=null&&p==="onScroll"&&ie("scroll",e),o||u===s||(o=[])):(o=o||[]).push(p,s))}t&&(o=o||[]).push("style",t);var p=o;(n.updateQueue=p)&&(n.flags|=4)}},da=function(e,n,t,r){t!==r&&(n.flags|=4)};function yr(e,n){if(!se)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function De(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Ld(e,n,t){var r=n.pendingProps;switch(Do(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(n),null;case 1:return He(n.type)&&Kr(),De(n),null;case 3:return r=n.stateNode,Lt(),ue($e),ue(Me),Ko(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(qr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,pn!==null&&(Ci(pn),pn=null))),pi(e,n),De(n),null;case 5:Qo(n);var l=ot(fr.current);if(t=n.type,e!==null&&n.stateNode!=null)ca(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(h(166));return De(n),null}if(e=ot(kn.current),qr(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[wn]=n,r[ur]=o,e=(n.mode&1)!==0,t){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(l=0;l<lr.length;l++)ie(lr[l],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":Hi(r,o),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ie("invalid",r);break;case"textarea":Ki(r,o),ie("invalid",r)}Ql(t,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var u=o[i];i==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&Hr(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&Hr(r.textContent,u,e),l=["children",""+u]):K.hasOwnProperty(i)&&u!=null&&i==="onScroll"&&ie("scroll",r)}switch(t){case"input":_n(r),Yi(r,o,!0);break;case"textarea":_n(r),Gi(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Qr)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zi(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[wn]=n,e[ur]=r,aa(e,n,!1,!1),n.stateNode=e;e:{switch(i=Yl(t,r),t){case"dialog":ie("cancel",e),ie("close",e),l=r;break;case"iframe":case"object":case"embed":ie("load",e),l=r;break;case"video":case"audio":for(l=0;l<lr.length;l++)ie(lr[l],e);l=r;break;case"source":ie("error",e),l=r;break;case"img":case"image":case"link":ie("error",e),ie("load",e),l=r;break;case"details":ie("toggle",e),l=r;break;case"input":Hi(e,r),l=je(e,r),ie("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=C({},r,{value:void 0}),ie("invalid",e);break;case"textarea":Ki(e,r),l=$l(e,r),ie("invalid",e);break;default:l=r}Ql(t,l),u=l;for(o in u)if(u.hasOwnProperty(o)){var s=u[o];o==="style"?eu(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Ji(e,s)):o==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&At(e,s):typeof s=="number"&&At(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(K.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ie("scroll",e):s!=null&&Fe(e,o,s,i))}switch(t){case"input":_n(e),Yi(e,r,!1);break;case"textarea":_n(e),Gi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Q(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ft(e,!!r.multiple,o,!1):r.defaultValue!=null&&ft(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Qr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return De(n),null;case 6:if(e&&n.stateNode!=null)da(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(h(166));if(t=ot(fr.current),ot(kn.current),qr(n)){if(r=n.stateNode,t=n.memoizedProps,r[wn]=n,(o=r.nodeValue!==t)&&(e=Ze,e!==null))switch(e.tag){case 3:Hr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hr(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[wn]=n,n.stateNode=r}return De(n),null;case 13:if(ue(ce),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(se&&Je!==null&&(n.mode&1)!==0&&(n.flags&128)===0)hs(),zt(),n.flags|=98560,o=!1;else if(o=qr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(h(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(h(317));o[wn]=n}else zt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;De(n),o=!1}else pn!==null&&(Ci(pn),pn=null),o=!0;if(!o)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(ce.current&1)!==0?we===0&&(we=3):zi())),n.updateQueue!==null&&(n.flags|=4),De(n),null);case 4:return Lt(),pi(e,n),e===null&&or(n.stateNode.containerInfo),De(n),null;case 10:return Bo(n.type._context),De(n),null;case 17:return He(n.type)&&Kr(),De(n),null;case 19:if(ue(ce),o=n.memoizedState,o===null)return De(n),null;if(r=(n.flags&128)!==0,i=o.rendering,i===null)if(r)yr(o,!1);else{if(we!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(i=ol(e),i!==null){for(n.flags|=128,yr(o,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return le(ce,ce.current&1|2),n.child}e=e.sibling}o.tail!==null&&me()>Dt&&(n.flags|=128,r=!0,yr(o,!1),n.lanes=4194304)}else{if(!r)if(e=ol(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),yr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!se)return De(n),null}else 2*me()-o.renderingStartTime>Dt&&t!==1073741824&&(n.flags|=128,r=!0,yr(o,!1),n.lanes=4194304);o.isBackwards?(i.sibling=n.child,n.child=i):(t=o.last,t!==null?t.sibling=i:n.child=i,o.last=i)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=me(),n.sibling=null,t=ce.current,le(ce,r?t&1|2:t&1),n):(De(n),null);case 22:case 23:return Ni(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&(n.mode&1)!==0?(qe&1073741824)!==0&&(De(n),n.subtreeFlags&6&&(n.flags|=8192)):De(n),null;case 24:return null;case 25:return null}throw Error(h(156,n.tag))}function jd(e,n){switch(Do(n),n.tag){case 1:return He(n.type)&&Kr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Lt(),ue($e),ue(Me),Ko(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return Qo(n),null;case 13:if(ue(ce),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(h(340));zt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ue(ce),null;case 4:return Lt(),null;case 10:return Bo(n.type._context),null;case 22:case 23:return Ni(),null;case 24:return null;default:return null}}var hl=!1,Ie=!1,Md=typeof WeakSet=="function"?WeakSet:Set,_=null;function Mt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){he(e,n,r)}else t.current=null}function hi(e,n,t){try{t()}catch(r){he(e,n,r)}}var fa=!1;function Od(e,n){if(No=Or,e=$u(),go(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var i=0,u=-1,s=-1,p=0,g=0,x=e,y=null;n:for(;;){for(var E;x!==t||l!==0&&x.nodeType!==3||(u=i+l),x!==o||r!==0&&x.nodeType!==3||(s=i+r),x.nodeType===3&&(i+=x.nodeValue.length),(E=x.firstChild)!==null;)y=x,x=E;for(;;){if(x===e)break n;if(y===t&&++p===l&&(u=i),y===o&&++g===r&&(s=i),(E=x.nextSibling)!==null)break;x=y,y=x.parentNode}x=E}t=u===-1||s===-1?null:{start:u,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(zo={focusedElem:e,selectionRange:t},Or=!1,_=n;_!==null;)if(n=_,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,_=e;else for(;_!==null;){n=_;try{var N=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var z=N.memoizedProps,ve=N.memoizedState,d=n.stateNode,a=d.getSnapshotBeforeUpdate(n.elementType===n.type?z:hn(n.type,z),ve);d.__reactInternalSnapshotBeforeUpdate=a}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(w){he(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,_=e;break}_=n.return}return N=fa,fa=!1,N}function gr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&hi(n,t,o)}l=l.next}while(l!==r)}}function ml(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function mi(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function pa(e){var n=e.alternate;n!==null&&(e.alternate=null,pa(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[wn],delete n[ur],delete n[Lo],delete n[vd],delete n[yd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ha(e){return e.tag===5||e.tag===3||e.tag===4}function ma(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ha(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vi(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Qr));else if(r!==4&&(e=e.child,e!==null))for(vi(e,n,t),e=e.sibling;e!==null;)vi(e,n,t),e=e.sibling}function yi(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(yi(e,n,t),e=e.sibling;e!==null;)yi(e,n,t),e=e.sibling}var Pe=null,mn=!1;function Qn(e,n,t){for(t=t.child;t!==null;)va(e,n,t),t=t.sibling}function va(e,n,t){if(xn&&typeof xn.onCommitFiberUnmount=="function")try{xn.onCommitFiberUnmount(Pr,t)}catch{}switch(t.tag){case 5:Ie||Mt(t,n);case 6:var r=Pe,l=mn;Pe=null,Qn(e,n,t),Pe=r,mn=l,Pe!==null&&(mn?(e=Pe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Pe.removeChild(t.stateNode));break;case 18:Pe!==null&&(mn?(e=Pe,t=t.stateNode,e.nodeType===8?Ro(e.parentNode,t):e.nodeType===1&&Ro(e,t),Gt(e)):Ro(Pe,t.stateNode));break;case 4:r=Pe,l=mn,Pe=t.stateNode.containerInfo,mn=!0,Qn(e,n,t),Pe=r,mn=l;break;case 0:case 11:case 14:case 15:if(!Ie&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&((o&2)!==0||(o&4)!==0)&&hi(t,n,i),l=l.next}while(l!==r)}Qn(e,n,t);break;case 1:if(!Ie&&(Mt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){he(t,n,u)}Qn(e,n,t);break;case 21:Qn(e,n,t);break;case 22:t.mode&1?(Ie=(r=Ie)||t.memoizedState!==null,Qn(e,n,t),Ie=r):Qn(e,n,t);break;default:Qn(e,n,t)}}function ya(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Md),n.forEach(function(r){var l=Vd.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function vn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var o=e,i=n,u=i;e:for(;u!==null;){switch(u.tag){case 5:Pe=u.stateNode,mn=!1;break e;case 3:Pe=u.stateNode.containerInfo,mn=!0;break e;case 4:Pe=u.stateNode.containerInfo,mn=!0;break e}u=u.return}if(Pe===null)throw Error(h(160));va(o,i,l),Pe=null,mn=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(p){he(l,n,p)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)ga(n,e),n=n.sibling}function ga(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vn(n,e),En(e),r&4){try{gr(3,e,e.return),ml(3,e)}catch(z){he(e,e.return,z)}try{gr(5,e,e.return)}catch(z){he(e,e.return,z)}}break;case 1:vn(n,e),En(e),r&512&&t!==null&&Mt(t,t.return);break;case 5:if(vn(n,e),En(e),r&512&&t!==null&&Mt(t,t.return),e.flags&32){var l=e.stateNode;try{At(l,"")}catch(z){he(e,e.return,z)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=t!==null?t.memoizedProps:o,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&Qi(l,o),Yl(u,i);var p=Yl(u,o);for(i=0;i<s.length;i+=2){var g=s[i],x=s[i+1];g==="style"?eu(l,x):g==="dangerouslySetInnerHTML"?Ji(l,x):g==="children"?At(l,x):Fe(l,g,x,p)}switch(u){case"input":Wl(l,o);break;case"textarea":Xi(l,o);break;case"select":var y=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var E=o.value;E!=null?ft(l,!!o.multiple,E,!1):y!==!!o.multiple&&(o.defaultValue!=null?ft(l,!!o.multiple,o.defaultValue,!0):ft(l,!!o.multiple,o.multiple?[]:"",!1))}l[ur]=o}catch(z){he(e,e.return,z)}}break;case 6:if(vn(n,e),En(e),r&4){if(e.stateNode===null)throw Error(h(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(z){he(e,e.return,z)}}break;case 3:if(vn(n,e),En(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Gt(n.containerInfo)}catch(z){he(e,e.return,z)}break;case 4:vn(n,e),En(e);break;case 13:vn(n,e),En(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(wi=me())),r&4&&ya(e);break;case 22:if(g=t!==null&&t.memoizedState!==null,e.mode&1?(Ie=(p=Ie)||g,vn(n,e),Ie=p):vn(n,e),En(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!g&&(e.mode&1)!==0)for(_=e,g=e.child;g!==null;){for(x=_=g;_!==null;){switch(y=_,E=y.child,y.tag){case 0:case 11:case 14:case 15:gr(4,y,y.return);break;case 1:Mt(y,y.return);var N=y.stateNode;if(typeof N.componentWillUnmount=="function"){r=y,t=y.return;try{n=r,N.props=n.memoizedProps,N.state=n.memoizedState,N.componentWillUnmount()}catch(z){he(r,t,z)}}break;case 5:Mt(y,y.return);break;case 22:if(y.memoizedState!==null){ka(x);continue}}E!==null?(E.return=y,_=E):ka(x)}g=g.sibling}e:for(g=null,x=e;;){if(x.tag===5){if(g===null){g=x;try{l=x.stateNode,p?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=x.stateNode,s=x.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=qi("display",i))}catch(z){he(e,e.return,z)}}}else if(x.tag===6){if(g===null)try{x.stateNode.nodeValue=p?"":x.memoizedProps}catch(z){he(e,e.return,z)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;g===x&&(g=null),x=x.return}g===x&&(g=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:vn(n,e),En(e),r&4&&ya(e);break;case 21:break;default:vn(n,e),En(e)}}function En(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(ha(t)){var r=t;break e}t=t.return}throw Error(h(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(At(l,""),r.flags&=-33);var o=ma(e);yi(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,u=ma(e);vi(e,u,i);break;default:throw Error(h(161))}}catch(s){he(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Dd(e,n,t){_=e,xa(e)}function xa(e,n,t){for(var r=(e.mode&1)!==0;_!==null;){var l=_,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||hl;if(!i){var u=l.alternate,s=u!==null&&u.memoizedState!==null||Ie;u=hl;var p=Ie;if(hl=i,(Ie=s)&&!p)for(_=l;_!==null;)i=_,s=i.child,i.tag===22&&i.memoizedState!==null?Sa(l):s!==null?(s.return=i,_=s):Sa(l);for(;o!==null;)_=o,xa(o),o=o.sibling;_=l,hl=u,Ie=p}wa(e)}else(l.subtreeFlags&8772)!==0&&o!==null?(o.return=l,_=o):wa(e)}}function wa(e){for(;_!==null;){var n=_;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Ie||ml(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Ie)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:hn(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&ks(n,o,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}ks(n,i,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var p=n.alternate;if(p!==null){var g=p.memoizedState;if(g!==null){var x=g.dehydrated;x!==null&&Gt(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}Ie||n.flags&512&&mi(n)}catch(y){he(n,n.return,y)}}if(n===e){_=null;break}if(t=n.sibling,t!==null){t.return=n.return,_=t;break}_=n.return}}function ka(e){for(;_!==null;){var n=_;if(n===e){_=null;break}var t=n.sibling;if(t!==null){t.return=n.return,_=t;break}_=n.return}}function Sa(e){for(;_!==null;){var n=_;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{ml(4,n)}catch(s){he(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(s){he(n,l,s)}}var o=n.return;try{mi(n)}catch(s){he(n,o,s)}break;case 5:var i=n.return;try{mi(n)}catch(s){he(n,i,s)}}}catch(s){he(n,n.return,s)}if(n===e){_=null;break}var u=n.sibling;if(u!==null){u.return=n.return,_=u;break}_=n.return}}var Id=Math.ceil,vl=pe.ReactCurrentDispatcher,gi=pe.ReactCurrentOwner,un=pe.ReactCurrentBatchConfig,H=0,Ce=null,ge=null,Te=0,qe=0,Ot=Bn(0),we=0,xr=null,ut=0,yl=0,xi=0,wr=null,Ye=null,wi=0,Dt=1/0,Mn=null,gl=!1,ki=null,Yn=null,xl=!1,Kn=null,wl=0,kr=0,Si=null,kl=-1,Sl=0;function Be(){return(H&6)!==0?me():kl!==-1?kl:kl=me()}function Xn(e){return(e.mode&1)===0?1:(H&2)!==0&&Te!==0?Te&-Te:xd.transition!==null?(Sl===0&&(Sl=mu()),Sl):(e=q,e!==0||(e=window.event,e=e===void 0?16:Cu(e.type)),e)}function yn(e,n,t,r){if(50<kr)throw kr=0,Si=null,Error(h(185));Ht(e,t,r),((H&2)===0||e!==Ce)&&(e===Ce&&((H&2)===0&&(yl|=t),we===4&&Gn(e,Te)),Ke(e,r),t===1&&H===0&&(n.mode&1)===0&&(Dt=me()+500,Gr&&Vn()))}function Ke(e,n){var t=e.callbackNode;xc(e,n);var r=Lr(e,e===Ce?Te:0);if(r===0)t!==null&&fu(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&fu(t),n===1)e.tag===0?gd(Ca.bind(null,e)):as(Ca.bind(null,e)),hd(function(){(H&6)===0&&Vn()}),t=null;else{switch(vu(r)){case 1:t=eo;break;case 4:t=pu;break;case 16:t=zr;break;case 536870912:t=hu;break;default:t=zr}t=ja(t,Ea.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Ea(e,n){if(kl=-1,Sl=0,(H&6)!==0)throw Error(h(327));var t=e.callbackNode;if(It()&&e.callbackNode!==t)return null;var r=Lr(e,e===Ce?Te:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||n)n=El(e,r);else{n=r;var l=H;H|=2;var o=Na();(Ce!==e||Te!==n)&&(Mn=null,Dt=me()+500,at(e,n));do try{Ad();break}catch(u){_a(e,u)}while(!0);Uo(),vl.current=o,H=l,ge!==null?n=0:(Ce=null,Te=0,n=we)}if(n!==0){if(n===2&&(l=no(e),l!==0&&(r=l,n=Ei(e,l))),n===1)throw t=xr,at(e,0),Gn(e,r),Ke(e,me()),t;if(n===6)Gn(e,r);else{if(l=e.current.alternate,(r&30)===0&&!Fd(l)&&(n=El(e,r),n===2&&(o=no(e),o!==0&&(r=o,n=Ei(e,o))),n===1))throw t=xr,at(e,0),Gn(e,r),Ke(e,me()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(h(345));case 2:ct(e,Ye,Mn);break;case 3:if(Gn(e,r),(r&130023424)===r&&(n=wi+500-me(),10<n)){if(Lr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Be(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=To(ct.bind(null,e,Ye,Mn),n);break}ct(e,Ye,Mn);break;case 4:if(Gn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var i=31-dn(r);o=1<<i,i=n[i],i>l&&(l=i),r&=~o}if(r=l,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Id(r/1960))-r,10<r){e.timeoutHandle=To(ct.bind(null,e,Ye,Mn),r);break}ct(e,Ye,Mn);break;case 5:ct(e,Ye,Mn);break;default:throw Error(h(329))}}}return Ke(e,me()),e.callbackNode===t?Ea.bind(null,e):null}function Ei(e,n){var t=wr;return e.current.memoizedState.isDehydrated&&(at(e,n).flags|=256),e=El(e,n),e!==2&&(n=Ye,Ye=t,n!==null&&Ci(n)),e}function Ci(e){Ye===null?Ye=e:Ye.push.apply(Ye,e)}function Fd(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],o=l.getSnapshot;l=l.value;try{if(!fn(o(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Gn(e,n){for(n&=~xi,n&=~yl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-dn(n),r=1<<t;e[t]=-1,n&=~r}}function Ca(e){if((H&6)!==0)throw Error(h(327));It();var n=Lr(e,0);if((n&1)===0)return Ke(e,me()),null;var t=El(e,n);if(e.tag!==0&&t===2){var r=no(e);r!==0&&(n=r,t=Ei(e,r))}if(t===1)throw t=xr,at(e,0),Gn(e,n),Ke(e,me()),t;if(t===6)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,ct(e,Ye,Mn),Ke(e,me()),null}function _i(e,n){var t=H;H|=1;try{return e(n)}finally{H=t,H===0&&(Dt=me()+500,Gr&&Vn())}}function st(e){Kn!==null&&Kn.tag===0&&(H&6)===0&&It();var n=H;H|=1;var t=un.transition,r=q;try{if(un.transition=null,q=1,e)return e()}finally{q=r,un.transition=t,H=n,(H&6)===0&&Vn()}}function Ni(){qe=Ot.current,ue(Ot)}function at(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,pd(t)),ge!==null)for(t=ge.return;t!==null;){var r=t;switch(Do(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Kr();break;case 3:Lt(),ue($e),ue(Me),Ko();break;case 5:Qo(r);break;case 4:Lt();break;case 13:ue(ce);break;case 19:ue(ce);break;case 10:Bo(r.type._context);break;case 22:case 23:Ni()}t=t.return}if(Ce=e,ge=e=Zn(e.current,null),Te=qe=n,we=0,xr=null,xi=yl=ut=0,Ye=wr=null,lt!==null){for(n=0;n<lt.length;n++)if(t=lt[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,o=t.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}t.pending=r}lt=null}return e}function _a(e,n){do{var t=ge;try{if(Uo(),il.current=cl,ul){for(var r=de.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ul=!1}if(it=0,Ee=xe=de=null,pr=!1,hr=0,gi.current=null,t===null||t.return===null){we=1,xr=n,ge=null;break}e:{var o=e,i=t.return,u=t,s=n;if(n=Te,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var p=s,g=u,x=g.tag;if((g.mode&1)===0&&(x===0||x===11||x===15)){var y=g.alternate;y?(g.updateQueue=y.updateQueue,g.memoizedState=y.memoizedState,g.lanes=y.lanes):(g.updateQueue=null,g.memoizedState=null)}var E=Gs(i);if(E!==null){E.flags&=-257,Zs(E,i,u,o,n),E.mode&1&&Xs(o,p,n),n=E,s=p;var N=n.updateQueue;if(N===null){var z=new Set;z.add(s),n.updateQueue=z}else N.add(s);break e}else{if((n&1)===0){Xs(o,p,n),zi();break e}s=Error(h(426))}}else if(se&&u.mode&1){var ve=Gs(i);if(ve!==null){(ve.flags&65536)===0&&(ve.flags|=256),Zs(ve,i,u,o,n),bo(jt(s,u));break e}}o=s=jt(s,u),we!==4&&(we=2),wr===null?wr=[o]:wr.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var d=Ys(o,s,n);ws(o,d);break e;case 1:u=s;var a=o.type,f=o.stateNode;if((o.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Yn===null||!Yn.has(f)))){o.flags|=65536,n&=-n,o.lanes|=n;var w=Ks(o,u,n);ws(o,w);break e}}o=o.return}while(o!==null)}Pa(t)}catch(P){n=P,ge===t&&t!==null&&(ge=t=t.return);continue}break}while(!0)}function Na(){var e=vl.current;return vl.current=cl,e===null?cl:e}function zi(){(we===0||we===3||we===2)&&(we=4),Ce===null||(ut&268435455)===0&&(yl&268435455)===0||Gn(Ce,Te)}function El(e,n){var t=H;H|=2;var r=Na();(Ce!==e||Te!==n)&&(Mn=null,at(e,n));do try{bd();break}catch(l){_a(e,l)}while(!0);if(Uo(),H=t,vl.current=r,ge!==null)throw Error(h(261));return Ce=null,Te=0,we}function bd(){for(;ge!==null;)za(ge)}function Ad(){for(;ge!==null&&!cc();)za(ge)}function za(e){var n=La(e.alternate,e,qe);e.memoizedProps=e.pendingProps,n===null?Pa(e):ge=n,gi.current=null}function Pa(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=Ld(t,n,qe),t!==null){ge=t;return}}else{if(t=jd(t,n),t!==null){t.flags&=32767,ge=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,ge=null;return}}if(n=n.sibling,n!==null){ge=n;return}ge=n=e}while(n!==null);we===0&&(we=5)}function ct(e,n,t){var r=q,l=un.transition;try{un.transition=null,q=1,Ud(e,n,t,r)}finally{un.transition=l,q=r}return null}function Ud(e,n,t,r){do It();while(Kn!==null);if((H&6)!==0)throw Error(h(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(wc(e,o),e===Ce&&(ge=Ce=null,Te=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||xl||(xl=!0,ja(zr,function(){return It(),null})),o=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||o){o=un.transition,un.transition=null;var i=q;q=1;var u=H;H|=4,gi.current=null,Od(e,t),ga(t,e),id(zo),Or=!!No,zo=No=null,e.current=t,Dd(t),dc(),H=u,q=i,un.transition=o}else e.current=t;if(xl&&(xl=!1,Kn=e,wl=l),o=e.pendingLanes,o===0&&(Yn=null),hc(t.stateNode),Ke(e,me()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(gl)throw gl=!1,e=ki,ki=null,e;return(wl&1)!==0&&e.tag!==0&&It(),o=e.pendingLanes,(o&1)!==0?e===Si?kr++:(kr=0,Si=e):kr=0,Vn(),null}function It(){if(Kn!==null){var e=vu(wl),n=un.transition,t=q;try{if(un.transition=null,q=16>e?16:e,Kn===null)var r=!1;else{if(e=Kn,Kn=null,wl=0,(H&6)!==0)throw Error(h(331));var l=H;for(H|=4,_=e.current;_!==null;){var o=_,i=o.child;if((_.flags&16)!==0){var u=o.deletions;if(u!==null){for(var s=0;s<u.length;s++){var p=u[s];for(_=p;_!==null;){var g=_;switch(g.tag){case 0:case 11:case 15:gr(8,g,o)}var x=g.child;if(x!==null)x.return=g,_=x;else for(;_!==null;){g=_;var y=g.sibling,E=g.return;if(pa(g),g===p){_=null;break}if(y!==null){y.return=E,_=y;break}_=E}}}var N=o.alternate;if(N!==null){var z=N.child;if(z!==null){N.child=null;do{var ve=z.sibling;z.sibling=null,z=ve}while(z!==null)}}_=o}}if((o.subtreeFlags&2064)!==0&&i!==null)i.return=o,_=i;else e:for(;_!==null;){if(o=_,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:gr(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,_=d;break e}_=o.return}}var a=e.current;for(_=a;_!==null;){i=_;var f=i.child;if((i.subtreeFlags&2064)!==0&&f!==null)f.return=i,_=f;else e:for(i=a;_!==null;){if(u=_,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:ml(9,u)}}catch(P){he(u,u.return,P)}if(u===i){_=null;break e}var w=u.sibling;if(w!==null){w.return=u.return,_=w;break e}_=u.return}}if(H=l,Vn(),xn&&typeof xn.onPostCommitFiberRoot=="function")try{xn.onPostCommitFiberRoot(Pr,e)}catch{}r=!0}return r}finally{q=t,un.transition=n}}return!1}function Ta(e,n,t){n=jt(t,n),n=Ys(e,n,1),e=Hn(e,n,1),n=Be(),e!==null&&(Ht(e,1,n),Ke(e,n))}function he(e,n,t){if(e.tag===3)Ta(e,e,t);else for(;n!==null;){if(n.tag===3){Ta(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yn===null||!Yn.has(r))){e=jt(t,e),e=Ks(n,e,1),n=Hn(n,e,1),e=Be(),n!==null&&(Ht(n,1,e),Ke(n,e));break}}n=n.return}}function Bd(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Be(),e.pingedLanes|=e.suspendedLanes&t,Ce===e&&(Te&t)===t&&(we===4||we===3&&(Te&130023424)===Te&&500>me()-wi?at(e,0):xi|=t),Ke(e,n)}function Ra(e,n){n===0&&((e.mode&1)===0?n=1:(n=Rr,Rr<<=1,(Rr&130023424)===0&&(Rr=4194304)));var t=Be();e=Rn(e,n),e!==null&&(Ht(e,n,t),Ke(e,t))}function Wd(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Ra(e,t)}function Vd(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(h(314))}r!==null&&r.delete(n),Ra(e,t)}var La;La=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||$e.current)Qe=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return Qe=!1,Rd(e,n,t);Qe=(e.flags&131072)!==0}else Qe=!1,se&&(n.flags&1048576)!==0&&cs(n,Jr,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;pl(e,n),e=n.pendingProps;var l=Ct(n,Me.current);Rt(n,t),l=Zo(null,n,r,e,l,t);var o=Jo();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,He(r)?(o=!0,Xr(n)):o=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,$o(n),l.updater=dl,n.stateNode=l,l._reactInternals=n,li(n,r,e,t),n=si(null,n,r,!0,o,t)):(n.tag=0,se&&o&&Oo(n),Ue(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(pl(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=Hd(r),e=hn(r,e),l){case 0:n=ui(null,n,r,e,t);break e;case 1:n=ra(null,n,r,e,t);break e;case 11:n=Js(null,n,r,e,t);break e;case 14:n=qs(null,n,r,hn(r.type,e),t);break e}throw Error(h(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:hn(r,l),ui(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:hn(r,l),ra(e,n,r,l,t);case 3:e:{if(la(n),e===null)throw Error(h(387));r=n.pendingProps,o=n.memoizedState,l=o.element,xs(e,n),ll(n,r,null,t);var i=n.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){l=jt(Error(h(423)),n),n=oa(e,n,r,t,l);break e}else if(r!==l){l=jt(Error(h(424)),n),n=oa(e,n,r,t,l);break e}else for(Je=Un(n.stateNode.containerInfo.firstChild),Ze=n,se=!0,pn=null,t=ys(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(zt(),r===l){n=jn(e,n,t);break e}Ue(e,n,r,t)}n=n.child}return n;case 5:return Ss(n),e===null&&Fo(n),r=n.type,l=n.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,Po(r,l)?i=null:o!==null&&Po(r,o)&&(n.flags|=32),ta(e,n),Ue(e,n,i,t),n.child;case 6:return e===null&&Fo(n),null;case 13:return ia(e,n,t);case 4:return Ho(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Pt(n,null,r,t):Ue(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:hn(r,l),Js(e,n,r,l,t);case 7:return Ue(e,n,n.pendingProps,t),n.child;case 8:return Ue(e,n,n.pendingProps.children,t),n.child;case 12:return Ue(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,o=n.memoizedProps,i=l.value,le(nl,r._currentValue),r._currentValue=i,o!==null)if(fn(o.value,i)){if(o.children===l.children&&!$e.current){n=jn(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var u=o.dependencies;if(u!==null){i=o.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Ln(-1,t&-t),s.tag=2;var p=o.updateQueue;if(p!==null){p=p.shared;var g=p.pending;g===null?s.next=s:(s.next=g.next,g.next=s),p.pending=s}}o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),Wo(o.return,t,n),u.lanes|=t;break}s=s.next}}else if(o.tag===10)i=o.type===n.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(h(341));i.lanes|=t,u=i.alternate,u!==null&&(u.lanes|=t),Wo(i,t,n),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===n){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}Ue(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,Rt(n,t),l=ln(l),r=r(l),n.flags|=1,Ue(e,n,r,t),n.child;case 14:return r=n.type,l=hn(r,n.pendingProps),l=hn(r.type,l),qs(e,n,r,l,t);case 15:return ea(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:hn(r,l),pl(e,n),n.tag=1,He(r)?(e=!0,Xr(n)):e=!1,Rt(n,t),Hs(n,r,l),li(n,r,l,t),si(null,n,r,!0,e,t);case 19:return sa(e,n,t);case 22:return na(e,n,t)}throw Error(h(156,n.tag))};function ja(e,n){return du(e,n)}function $d(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sn(e,n,t,r){return new $d(e,n,t,r)}function Pi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hd(e){if(typeof e=="function")return Pi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ze)return 11;if(e===Z)return 14}return 2}function Zn(e,n){var t=e.alternate;return t===null?(t=sn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Cl(e,n,t,r,l,o){var i=2;if(r=e,typeof e=="function")Pi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case ye:return dt(t.children,l,o,n);case be:i=8,l|=8;break;case gn:return e=sn(12,t,n,l|2),e.elementType=gn,e.lanes=o,e;case Ae:return e=sn(13,t,n,l),e.elementType=Ae,e.lanes=o,e;case j:return e=sn(19,t,n,l),e.elementType=j,e.lanes=o,e;case $:return _l(t,l,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case en:i=10;break e;case Cn:i=9;break e;case ze:i=11;break e;case Z:i=14;break e;case Se:i=16,r=null;break e}throw Error(h(130,e==null?e:typeof e,""))}return n=sn(i,t,n,l),n.elementType=e,n.type=r,n.lanes=o,n}function dt(e,n,t,r){return e=sn(7,e,r,n),e.lanes=t,e}function _l(e,n,t,r){return e=sn(22,e,r,n),e.elementType=$,e.lanes=t,e.stateNode={isHidden:!1},e}function Ti(e,n,t){return e=sn(6,e,null,n),e.lanes=t,e}function Ri(e,n,t){return n=sn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Qd(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=to(0),this.expirationTimes=to(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=to(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Li(e,n,t,r,l,o,i,u,s){return e=new Qd(e,n,t,u,s),n===1?(n=1,o===!0&&(n|=8)):n=0,o=sn(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},$o(o),e}function Yd(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ke,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Ma(e){if(!e)return Wn;e=e._reactInternals;e:{if(qn(e)!==e||e.tag!==1)throw Error(h(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(He(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(h(171))}if(e.tag===1){var t=e.type;if(He(t))return us(e,t,n)}return n}function Oa(e,n,t,r,l,o,i,u,s){return e=Li(t,r,!0,e,l,o,i,u,s),e.context=Ma(null),t=e.current,r=Be(),l=Xn(t),o=Ln(r,l),o.callback=n??null,Hn(t,o,l),e.current.lanes=l,Ht(e,l,r),Ke(e,r),e}function Nl(e,n,t,r){var l=n.current,o=Be(),i=Xn(l);return t=Ma(t),n.context===null?n.context=t:n.pendingContext=t,n=Ln(o,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Hn(l,n,i),e!==null&&(yn(e,l,i,o),rl(e,l,i)),i}function zl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Da(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ji(e,n){Da(e,n),(e=e.alternate)&&Da(e,n)}function Kd(){return null}var Ia=typeof reportError=="function"?reportError:function(e){console.error(e)};function Mi(e){this._internalRoot=e}Pl.prototype.render=Mi.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(h(409));Nl(e,n,null,null)},Pl.prototype.unmount=Mi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;st(function(){Nl(null,e,null,null)}),n[Nn]=null}};function Pl(e){this._internalRoot=e}Pl.prototype.unstable_scheduleHydration=function(e){if(e){var n=xu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Fn.length&&n!==0&&n<Fn[t].priority;t++);Fn.splice(t,0,e),t===0&&Su(e)}};function Oi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Tl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Fa(){}function Xd(e,n,t,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var p=zl(i);o.call(p)}}var i=Oa(n,r,e,0,null,!1,!1,"",Fa);return e._reactRootContainer=i,e[Nn]=i.current,or(e.nodeType===8?e.parentNode:e),st(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var p=zl(s);u.call(p)}}var s=Li(e,0,!1,null,null,!1,!1,"",Fa);return e._reactRootContainer=s,e[Nn]=s.current,or(e.nodeType===8?e.parentNode:e),st(function(){Nl(n,s,t,r)}),s}function Rl(e,n,t,r,l){var o=t._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var u=l;l=function(){var s=zl(i);u.call(s)}}Nl(n,i,e,l)}else i=Xd(t,n,e,l,r);return zl(i)}yu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=$t(n.pendingLanes);t!==0&&(ro(n,t|1),Ke(n,me()),(H&6)===0&&(Dt=me()+500,Vn()))}break;case 13:st(function(){var r=Rn(e,1);if(r!==null){var l=Be();yn(r,e,1,l)}}),ji(e,1)}},lo=function(e){if(e.tag===13){var n=Rn(e,134217728);if(n!==null){var t=Be();yn(n,e,134217728,t)}ji(e,134217728)}},gu=function(e){if(e.tag===13){var n=Xn(e),t=Rn(e,n);if(t!==null){var r=Be();yn(t,e,n,r)}ji(e,n)}},xu=function(){return q},wu=function(e,n){var t=q;try{return q=e,n()}finally{q=t}},Gl=function(e,n,t){switch(n){case"input":if(Wl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=Yr(r);if(!l)throw Error(h(90));nn(r),Wl(r,l)}}}break;case"textarea":Xi(e,t);break;case"select":n=t.value,n!=null&&ft(e,!!t.multiple,n,!1)}},lu=_i,ou=st;var Gd={usingClientEntryPoint:!1,Events:[sr,St,Yr,tu,ru,_i]},Sr={findFiberByHostInstance:et,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zd={bundleType:Sr.bundleType,version:Sr.version,rendererPackageName:Sr.rendererPackageName,rendererConfig:Sr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=au(e),e===null?null:e.stateNode},findFiberByHostInstance:Sr.findFiberByHostInstance||Kd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ll.isDisabled&&Ll.supportsFiber)try{Pr=Ll.inject(Zd),xn=Ll}catch{}}return We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gd,We.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oi(n))throw Error(h(200));return Yd(e,n,null,t)},We.createRoot=function(e,n){if(!Oi(e))throw Error(h(299));var t=!1,r="",l=Ia;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=Li(e,1,!1,null,null,t,!1,r,l),e[Nn]=n.current,or(e.nodeType===8?e.parentNode:e),new Mi(n)},We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=au(n),e=e===null?null:e.stateNode,e},We.flushSync=function(e){return st(e)},We.hydrate=function(e,n,t){if(!Tl(n))throw Error(h(200));return Rl(null,e,n,!0,t)},We.hydrateRoot=function(e,n,t){if(!Oi(e))throw Error(h(405));var r=t!=null&&t.hydratedSources||null,l=!1,o="",i=Ia;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=Oa(n,null,e,1,t??null,l,!1,o,i),e[Nn]=n.current,or(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new Pl(n)},We.render=function(e,n,t){if(!Tl(n))throw Error(h(200));return Rl(null,e,n,!1,t)},We.unmountComponentAtNode=function(e){if(!Tl(e))throw Error(h(40));return e._reactRootContainer?(st(function(){Rl(null,null,e,!1,function(){e._reactRootContainer=null,e[Nn]=null})}),!0):!1},We.unstable_batchedUpdates=_i,We.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Tl(t))throw Error(h(200));if(e==null||e._reactInternals===void 0)throw Error(h(38));return Rl(e,n,t,!1,r)},We.version="18.3.1-next-f1338f8080-20240426",We}var Vi;function Ha(){if(Vi)return Il.exports;Vi=1;function m(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m)}catch(R){console.error(R)}}return m(),Il.exports=$a(),Il.exports}var $i;function Qa(){if($i)return Er;$i=1;var m=Ha();return Er.createRoot=m.createRoot,Er.hydrateRoot=m.hydrateRoot,Er}var Ya=Qa();const Ka=Di(Ya);function Xa({product:m}){const[R,h]=fe.useState(!1),oe=()=>{m.available&&(h(!0),window.dispatchEvent(new CustomEvent("bunny:add-to-cart",{detail:m,bubbles:!0,composed:!0})),typeof window.BUNNY_ON_ADD_TO_CART=="function"&&window.BUNNY_ON_ADD_TO_CART(m),setTimeout(()=>h(!1),2e3))},K=m.discountBadge||m.compareAtPrice&&m.compareAtPrice>m.price,ee=m.discountBadge||(K?`${Math.round((m.compareAtPrice-m.price)/m.compareAtPrice*100)}% OFF`:null),F=m.availableSizes&&m.availableSizes.length>0?`Sizes: ${m.availableSizes.join(", ")}`:null;return k.jsxs("div",{className:"bunny-card",children:[k.jsxs("div",{className:"bunny-card-img-wrap",children:[m.image?k.jsx("img",{src:m.image,alt:m.title,className:"bunny-card-img",loading:"lazy",onError:V=>{V.target.style.display="none"}}):k.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",color:"#6b7280",fontSize:"11px"},children:"SPOILED BUNNY"}),ee&&m.available&&k.jsx("span",{className:"bunny-badge-discount",children:ee}),!m.available&&k.jsx("span",{className:"bunny-badge-soldout",children:"Sold out"})]}),k.jsxs("div",{className:"bunny-card-content",children:[k.jsx("h4",{className:"bunny-card-title",title:m.title,children:m.title}),k.jsxs("div",{className:"bunny-card-price-row",children:[k.jsxs("span",{className:"bunny-card-price",children:["₹",m.price]}),m.compareAtPrice&&m.compareAtPrice>m.price&&k.jsxs("span",{className:"bunny-card-compare",children:["₹",m.compareAtPrice]})]}),F&&k.jsx("div",{className:"bunny-card-sizes",children:F}),k.jsxs("div",{className:"bunny-card-btn-row",children:[k.jsx("a",{href:m.url,target:"_blank",rel:"noopener noreferrer",className:"bunny-btn-view",children:"View"}),m.available?k.jsx("button",{type:"button",className:`bunny-btn-cart ${R?"added":""}`,onClick:oe,children:R?"Added ✓":"Add to Cart"}):k.jsx("button",{type:"button",className:"bunny-btn-disabled",disabled:!0,children:"Sold out"})]})]})]})}function Ga({products:m=[]}){const R=fe.useRef(null),[h,oe]=fe.useState(!1),[K,ee]=fe.useState(!1),F=()=>{const L=R.current;L&&(oe(L.scrollLeft>10),ee(L.scrollLeft<L.scrollWidth-L.clientWidth-10))};fe.useEffect(()=>{F();const L=setTimeout(F,150),B=R.current;if(!B)return;const ae=X=>{Math.abs(X.deltaY)>Math.abs(X.deltaX)&&B.scrollWidth>B.clientWidth&&(X.preventDefault(),B.scrollLeft+=X.deltaY*.85)};return B.addEventListener("scroll",F,{passive:!0}),B.addEventListener("wheel",ae,{passive:!1}),window.addEventListener("resize",F),()=>{clearTimeout(L),B.removeEventListener("scroll",F),B.removeEventListener("wheel",ae),window.removeEventListener("resize",F)}},[m]);const V=L=>{const B=R.current;if(!B)return;const ae=L==="left"?-220:220;B.scrollBy({left:ae,behavior:"smooth"})};return!m||m.length===0?null:k.jsxs("div",{className:"bunny-carousel-container",children:[h&&k.jsx("button",{type:"button",className:"bunny-carousel-nav bunny-nav-left",onClick:()=>V("left"),"aria-label":"Scroll left",children:"‹"}),k.jsx("div",{className:"bunny-carousel-wrap",ref:R,children:m.map(L=>k.jsx(Xa,{product:L},L.id))}),K&&k.jsx("button",{type:"button",className:"bunny-carousel-nav bunny-nav-right",onClick:()=>V("right"),"aria-label":"Scroll right",children:"›"})]})}function Za(){if(typeof window<"u"&&window.BUNNY_API_URL)return window.BUNNY_API_URL;if(typeof window<"u"&&typeof document<"u"){const m=document.currentScript||document.querySelector('script[src*="bunny-widget"]');if(m){const R=m.getAttribute("data-api-url");if(R)return R.endsWith("/api/chat")?R:`${R.replace(/\/$/,"")}/api/chat`;try{if(m.src&&m.src.startsWith("http")){const h=new URL(m.src).origin;return h.includes("localhost:5173")||h.includes("127.0.0.1:5173")?"http://localhost:3001/api/chat":`${h}/api/chat`}}catch{}}if(window.location&&window.location.port==="5173")return"http://localhost:3001/api/chat"}return"/api/chat"}const Al="https://wa.me/916367970069",Ja=["Oversized Tees","Pajama Pants","Waffle Tanks","New In Drops","Any Discounts?"];function qa(m){return m?m.replace(/[\u00A0\u2000-\u200B\u202F\u205F\u3000\uFEFF]/g," ").replace(/[\u2010\u2011\u2012\u2013\u2014\u2015]/g,"-"):""}function Ul(m,R,h){if(!m)return null;const oe=qa(m),K=/(\*\*[^*]+\*\*|\b(?:PREPAID15|FREESHIP)\b)/gi;return oe.split(K).map((F,V)=>{if(!F)return null;if(F.startsWith("**")&&F.endsWith("**")){const L=F.slice(2,-2).trim();if(/^(?:PREPAID15|FREESHIP)$/i.test(L)){const B=L.toUpperCase();return k.jsxs("span",{className:"bunny-code-pill",onClick:()=>R(B),title:"Click to copy promo code",children:[k.jsx("span",{className:"bunny-code-icon",children:"🏷️"}),k.jsx("strong",{children:B}),k.jsx("span",{className:"bunny-code-tip",children:h===B?"Copied ✓":"Copy"})]},V)}return k.jsx("strong",{className:"bunny-bold",children:L},V)}if(/^(?:PREPAID15|FREESHIP)$/i.test(F)){const L=F.toUpperCase();return k.jsxs("span",{className:"bunny-code-pill",onClick:()=>R(L),title:"Click to copy promo code",children:[k.jsx("span",{className:"bunny-code-icon",children:"🏷️"}),k.jsx("strong",{children:L}),k.jsx("span",{className:"bunny-code-tip",children:h===L?"Copied ✓":"Copy"})]},V)}return F})}function ec({content:m,onCopyCode:R,copiedCode:h}){if(!m)return null;const oe=m.split(`
`);return k.jsx("div",{className:"bunny-bubble",children:oe.map((K,ee)=>{const F=K.trim();if(!F)return k.jsx("div",{className:"bunny-line-spacer"},ee);const V=F.match(/^[-*•]\s+(.*)$/);if(V)return k.jsxs("div",{className:"bunny-bullet-line",children:[k.jsx("span",{className:"bunny-bullet-dot",children:"›"}),k.jsx("div",{className:"bunny-bullet-content",children:Ul(V[1],R,h)})]},ee);const L=F.match(/^(\d+)\.\s+(.*)$/);return L?k.jsxs("div",{className:"bunny-bullet-line",children:[k.jsxs("span",{className:"bunny-bullet-num",children:[L[1],"."]}),k.jsx("div",{className:"bunny-bullet-content",children:Ul(L[2],R,h)})]},ee):k.jsx("div",{className:"bunny-text-line",children:Ul(K,R,h)},ee)})})}function nc(){const[m,R]=fe.useState(!1),[h,oe]=fe.useState(!0),[K,ee]=fe.useState(""),[F,V]=fe.useState(!1),[L,B]=fe.useState([]),[ae,X]=fe.useState(null),[re]=fe.useState(()=>"sess_"+Math.random().toString(36).slice(2,9)),[Ne,Re]=fe.useState({width:400,height:630}),[ne,G]=fe.useState(!1),[an,Xe]=fe.useState(!1),[Fe,pe]=fe.useState([{id:"msg-welcome",role:"assistant",content:"Yo! I'm Bunny 🐰 What streetwear drip are you looking for today?",isStarter:!0}]),Ve=fe.useRef(null),ke=fe.useRef(null),ye=fe.useRef({startX:0,startY:0,startWidth:400,startHeight:630});fe.useEffect(()=>{var j;(j=Ve.current)==null||j.scrollIntoView({behavior:"smooth"})},[Fe,F,L]),fe.useEffect(()=>{m?(setTimeout(()=>{var Z;return(Z=ke.current)==null?void 0:Z.focus()},150),window.innerWidth<=480&&(document.body.style.overflow="hidden")):document.body.style.overflow="";const j=Z=>{Z.key==="Escape"&&m&&R(!1)};return window.addEventListener("keydown",j),()=>{window.removeEventListener("keydown",j),document.body.style.overflow=""}},[m]);const be=j=>{if(typeof window<"u"&&window.innerWidth<=480)return;j.preventDefault(),Xe(!0);const Z=j.touches?j.touches[0].clientX:j.clientX,Se=j.touches?j.touches[0].clientY:j.clientY;ye.current={startX:Z,startY:Se,startWidth:Ne.width,startHeight:Ne.height};const $=T=>{const C=T.touches?T.touches[0].clientX:T.clientX,c=T.touches?T.touches[0].clientY:T.clientY,v=ye.current.startX-C,D=ye.current.startY-c,b=Math.min(Math.max(ye.current.startWidth+v,360),680),U=Math.min(Math.max(ye.current.startHeight+D,480),850);Re({width:b,height:U})},S=()=>{Xe(!1),window.removeEventListener("mousemove",$),window.removeEventListener("mouseup",S),window.removeEventListener("touchmove",$),window.removeEventListener("touchend",S)};window.addEventListener("mousemove",$),window.addEventListener("mouseup",S),window.addEventListener("touchmove",$),window.addEventListener("touchend",S)},gn=()=>{G(j=>{const Z=!j;return Re(Z?{width:550,height:750}:{width:400,height:630}),Z})},en=()=>{R(j=>!j),h&&oe(!1)},Cn=j=>{typeof navigator<"u"&&navigator.clipboard&&navigator.clipboard.writeText(j).catch(()=>{}),X(j),setTimeout(()=>X(null),2e3)},ze=async j=>{const Z=(j||K).trim();if(!Z||F)return;ee(""),B([]);const Se="usr_"+Date.now(),$="ast_"+Date.now(),S=[...Fe,{id:Se,role:"user",content:Z},{id:$,role:"assistant",content:"",products:[],error:null}];pe(S),V(!0);const T=S.filter(c=>!c.isStarter&&!c.error).slice(0,-1).map(c=>({role:c.role,content:c.content})),C=Za();try{const c=await fetch(C,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sessionId:re,messages:T})});if(!c.ok)throw new Error(`Server returned status ${c.status}`);const v=c.body.getReader(),D=new TextDecoder("utf-8");let b="";for(;;){const{value:U,done:W}=await v.read();if(W)break;b+=D.decode(U,{stream:!0});const J=b.split(`

`);b=J.pop();for(const Q of J){const te=Q.match(/event:\s*([^\n]+)/),Le=Q.match(/data:\s*([^\n]+)/);if(te&&Le){const _n=te[1].trim();let nn={};try{nn=JSON.parse(Le[1])}catch{continue}_n==="token"&&nn.token?pe(cn=>cn.map(je=>je.id===$?{...je,content:je.content+nn.token}:je)):_n==="products"&&Array.isArray(nn.products)?pe(cn=>cn.map(je=>je.id===$?{...je,products:nn.products}:je)):_n==="suggestions"&&Array.isArray(nn.suggestions)?B(nn.suggestions):_n==="error"&&pe(cn=>cn.map(je=>je.id===$?{...je,error:nn.message||"Sorry, I hit a snag connecting. Chat with us on WhatsApp!",whatsapp_url:nn.whatsapp_url||Al}:je))}}}}catch(c){console.error("[BunnyWidget] Fetch error:",c),pe(v=>v.map(D=>D.id===$?{...D,error:"Sorry, I hit a snag connecting with the server. You can chat with our team directly on WhatsApp!",whatsapp_url:Al}:D))}finally{V(!1)}},Ae=j=>{j.preventDefault(),ze()};return k.jsxs("div",{className:"bunny-wrapper",children:[k.jsxs("div",{className:"bunny-launcher-wrap",children:[!m&&h&&k.jsxs("div",{className:"bunny-nudge-pill",onClick:en,children:[k.jsx("span",{children:"Looking for streetwear? Spill the tea 🐰"}),k.jsx("button",{type:"button",className:"bunny-nudge-close","aria-label":"Close tooltip",onClick:j=>{j.stopPropagation(),oe(!1)},children:"✕"})]}),k.jsxs("button",{type:"button",className:"bunny-fab","aria-label":m?"Close Ask Bunny chat":"Open Ask Bunny chat",onClick:en,children:[k.jsx("div",{className:"bunny-fab-icon",children:m?"✕":"🐰"}),!m&&k.jsx("div",{className:"bunny-online-dot"})]})]}),m&&k.jsxs("div",{className:`bunny-panel ${an?"bunny-resizing":""}`,role:"dialog","aria-modal":"true","aria-label":"Ask Bunny Chat Window",style:typeof window<"u"&&window.innerWidth>480?{width:`${Ne.width}px`,height:`${Ne.height}px`}:void 0,children:[k.jsx("div",{className:"bunny-resize-handle",title:"Drag to resize panel",onMouseDown:be,onTouchStart:be,children:k.jsx("div",{className:"bunny-resize-indicator"})}),k.jsxs("div",{className:"bunny-header",children:[k.jsxs("div",{className:"bunny-header-left",children:[k.jsxs("div",{className:"bunny-header-avatar",children:["🐰",k.jsx("div",{className:"bunny-online-dot"})]}),k.jsxs("div",{children:[k.jsx("div",{className:"bunny-header-title",children:"Ask Bunny"}),k.jsx("div",{className:"bunny-header-status",children:"Online • Spoiled Bunny AI"})]})]}),k.jsxs("div",{className:"bunny-header-actions",children:[k.jsx("button",{type:"button",className:"bunny-btn-icon","aria-label":ne?"Compact view":"Expand view",title:ne?"Standard size":"Expand window",onClick:gn,children:ne?"⤡":"⤢"}),k.jsx("button",{type:"button",className:"bunny-btn-icon","aria-label":"Close chat",title:"Close chat (Esc)",onClick:()=>R(!1),children:"✕"})]})]}),k.jsxs("div",{className:"bunny-quick-actions",children:[k.jsx("button",{type:"button",className:"bunny-quick-btn",onClick:()=>ze("Where is my order?"),children:"📦 Track Order"}),k.jsx("button",{type:"button",className:"bunny-quick-btn",onClick:()=>ze("How do I exchange my size?"),children:"🔄 Return & Exchange"}),k.jsx("button",{type:"button",className:"bunny-quick-btn",onClick:()=>ze("Any discounts or promo codes?"),children:"🏷️ Offers"})]}),k.jsxs("div",{className:"bunny-messages",children:[Fe.map(j=>k.jsxs("div",{className:`bunny-msg-row ${j.role==="user"?"bunny-msg-user":"bunny-msg-assistant"}`,children:[j.content&&k.jsx(ec,{content:j.content,onCopyCode:Cn,copiedCode:ae}),j.isStarter&&k.jsx("div",{className:"bunny-starter-wrap",children:Ja.map(Z=>k.jsx("button",{type:"button",className:"bunny-preset-chip",onClick:()=>ze(`Show me ${Z}`),children:Z},Z))}),j.products&&j.products.length>0&&k.jsx(Ga,{products:j.products}),j.error&&k.jsxs("div",{className:"bunny-error-card",children:[k.jsx("div",{className:"bunny-error-text",children:j.error}),k.jsx("a",{href:j.whatsapp_url||Al,target:"_blank",rel:"noopener noreferrer",className:"bunny-whatsapp-btn",children:k.jsx("span",{children:"💬 Chat on WhatsApp (+91 63679 70069)"})})]})]},j.id)),F&&k.jsx("div",{className:"bunny-msg-row bunny-msg-assistant",children:k.jsxs("div",{className:"bunny-typing-indicator","aria-label":"Bunny is typing",children:[k.jsx("div",{className:"bunny-dot"}),k.jsx("div",{className:"bunny-dot"}),k.jsx("div",{className:"bunny-dot"})]})}),!F&&L.length>0&&k.jsx("div",{className:"bunny-suggestions-wrap",children:L.map((j,Z)=>k.jsx("button",{type:"button",className:"bunny-suggestion-chip",onClick:()=>ze(j),children:j},Z))}),k.jsx("div",{ref:Ve})]}),k.jsxs("form",{className:"bunny-footer",onSubmit:Ae,children:[k.jsx("input",{ref:ke,type:"text",className:"bunny-input",placeholder:"Ask about sizing, baggy tees, orders...",value:K,onChange:j=>ee(j.target.value),disabled:F}),k.jsx("button",{type:"submit",className:"bunny-send-btn",disabled:F||!K.trim(),"aria-label":"Send message",children:"➔"})]})]})]})}const tc=`
:host {
  all: initial;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  color-scheme: dark;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: inherit;
}

/* CSS Variables */
.bunny-wrapper {
  --bg-primary: #0e0f12;
  --bg-surface: #18191f;
  --bg-surface-elevated: #21232b;
  --bg-bubble-user: #2d303a;
  --border-subtle: #292b35;
  --border-active: #3f4252;
  --accent-neon: #ff2b56;
  --accent-glow: rgba(255, 43, 86, 0.35);
  --online-green: #10b981;
  --text-main: #f3f4f6;
  --text-muted: #9ca3af;
  --text-subtle: #6b7280;
  --radius-lg: 18px;
  --radius-md: 12px;
  --radius-sm: 8px;
  --radius-full: 9999px;
  --shadow-panel: 0 20px 50px rgba(0, 0, 0, 0.65), 0 0 1px rgba(255, 255, 255, 0.1);
  --shadow-glow: 0 8px 24px var(--accent-glow);
}

/* Floating Launcher Container */
.bunny-launcher-wrap {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 999999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  pointer-events: auto;
}

/* Tooltip Nudge Pill */
.bunny-nudge-pill {
  margin-bottom: 12px;
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  color: var(--text-main);
  padding: 8px 14px;
  border-radius: var(--radius-full);
  font-size: 13px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.4);
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s;
  animation: bunny-fade-up 0.3s ease-out;
}
.bunny-nudge-pill:hover {
  transform: translateY(-2px);
  border-color: var(--border-active);
  box-shadow: 0 12px 30px rgba(0,0,0,0.5);
}
.bunny-nudge-close {
  background: none;
  border: none;
  color: var(--text-subtle);
  cursor: pointer;
  padding: 2px;
  margin-left: 4px;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 1;
}
.bunny-nudge-close:hover {
  color: var(--text-main);
}

/* Floating Action Button */
.bunny-fab {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1f2128, #0e0f12);
  border: 1.5px solid var(--border-subtle);
  box-shadow: 0 10px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s, box-shadow 0.2s;
  user-select: none;
}
.bunny-fab:hover {
  transform: scale(1.06);
  border-color: var(--accent-neon);
  box-shadow: 0 12px 36px rgba(0,0,0,0.6), 0 0 20px var(--accent-glow);
}
.bunny-fab-icon {
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.bunny-fab:hover .bunny-fab-icon {
  transform: rotate(-10deg) scale(1.1);
}
.bunny-online-dot {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 13px;
  height: 13px;
  background-color: var(--online-green);
  border-radius: 50%;
  border: 2.5px solid var(--bg-surface);
  box-shadow: 0 0 10px rgba(16, 185, 129, 0.6);
}

/* Chat Main Panel */
.bunny-panel {
  position: fixed;
  bottom: 96px;
  right: 24px;
  width: 400px;
  height: 630px;
  max-width: calc(100vw - 32px);
  max-height: calc(100vh - 110px);
  background: var(--bg-primary);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-panel);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 999999;
  animation: bunny-panel-in 0.28s cubic-bezier(0.16, 1, 0.3, 1);
  transition: width 0.18s ease-out, height 0.18s ease-out;
}

.bunny-panel.bunny-resizing {
  transition: none !important;
  user-select: none;
}

/* Top-Left Drag Resize Handle */
.bunny-resize-handle {
  position: absolute;
  top: 0;
  left: 0;
  width: 22px;
  height: 22px;
  cursor: nwse-resize;
  z-index: 50;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 4px;
  user-select: none;
}
.bunny-resize-indicator {
  width: 9px;
  height: 9px;
  border-top: 2px solid var(--text-subtle);
  border-left: 2px solid var(--text-subtle);
  border-top-left-radius: 4px;
  opacity: 0.6;
  transition: opacity 0.15s, border-color 0.15s;
}
.bunny-resize-handle:hover .bunny-resize-indicator,
.bunny-panel.bunny-resizing .bunny-resize-indicator {
  opacity: 1;
  border-color: var(--accent-neon);
}

@keyframes bunny-panel-in {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes bunny-fade-up {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Header */
.bunny-header {
  background: var(--bg-surface);
  border-bottom: 1px solid var(--border-subtle);
  padding: 14px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}
.bunny-header-left {
  display: flex;
  align-items: center;
  gap: 10px;
}
.bunny-header-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  position: relative;
}
.bunny-header-avatar .bunny-online-dot {
  width: 10px;
  height: 10px;
  top: 0;
  right: 0;
  border-width: 2px;
}
.bunny-header-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--text-main);
  letter-spacing: 0.3px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.bunny-header-status {
  font-size: 11px;
  color: var(--online-green);
  font-weight: 500;
}
.bunny-header-actions {
  display: flex;
  align-items: center;
  gap: 6px;
}
.bunny-btn-icon {
  background: transparent;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  padding: 6px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  transition: color 0.15s, background-color 0.15s;
}
.bunny-btn-icon:hover {
  color: var(--text-main);
  background: var(--bg-surface-elevated);
}

/* Quick Actions Row */
.bunny-quick-actions {
  display: flex;
  gap: 8px;
  padding: 8px 16px;
  background: var(--bg-surface);
  border-bottom: 1px solid var(--border-subtle);
  overflow-x: auto;
  scrollbar-width: none;
}
.bunny-quick-actions::-webkit-scrollbar {
  display: none;
}
.bunny-quick-btn {
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  color: var(--text-muted);
  padding: 6px 12px;
  border-radius: var(--radius-full);
  font-size: 11.5px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.15s;
}
.bunny-quick-btn:hover {
  color: var(--text-main);
  border-color: var(--border-active);
  background: #2a2c37;
}

/* Messages Area */
.bunny-messages {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  scroll-behavior: smooth;
}
.bunny-messages::-webkit-scrollbar {
  width: 5px;
}
.bunny-messages::-webkit-scrollbar-thumb {
  background: var(--border-subtle);
  border-radius: 4px;
}

/* Message Bubble */
.bunny-msg-row {
  display: flex;
  flex-direction: column;
  max-width: 88%;
}
.bunny-msg-user {
  align-self: flex-end;
  align-items: flex-end;
}
.bunny-msg-assistant {
  align-self: flex-start;
  align-items: flex-start;
}
.bunny-bubble {
  padding: 11px 15px;
  border-radius: var(--radius-md);
  font-size: 13.5px;
  line-height: 1.45;
  word-break: break-word;
}
.bunny-msg-user .bunny-bubble {
  background: var(--bg-bubble-user);
  color: #fff;
  border-bottom-right-radius: 4px;
}
.bunny-msg-assistant .bunny-bubble {
  background: var(--bg-surface);
  color: var(--text-main);
  border: 1px solid var(--border-subtle);
  border-bottom-left-radius: 4px;
}

/* Rich Text Formatting inside Bubble */
.bunny-bold {
  font-weight: 700;
  color: #ffffff;
}

.bunny-text-line {
  line-height: 1.5;
  margin-bottom: 4px;
}
.bunny-text-line:last-child {
  margin-bottom: 0;
}

.bunny-line-spacer {
  height: 8px;
}

.bunny-bullet-line {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin: 6px 0;
  line-height: 1.45;
}
.bunny-bullet-dot {
  color: var(--accent-neon);
  font-size: 15px;
  font-weight: 900;
  line-height: 1.25;
  flex-shrink: 0;
}
.bunny-bullet-num {
  color: var(--accent-neon);
  font-size: 12px;
  font-weight: 700;
  line-height: 1.5;
  flex-shrink: 0;
}
.bunny-bullet-content {
  flex: 1;
}

/* Coupon & Promo Code Interactive Badge */
.bunny-code-pill {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: rgba(255, 43, 86, 0.1);
  border: 1px dashed var(--accent-neon);
  color: #ffffff;
  padding: 2px 7px;
  border-radius: 4px;
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.4px;
  cursor: pointer;
  margin: 1px 2px;
  vertical-align: middle;
  transition: all 0.15s ease;
}
.bunny-code-pill:hover {
  background: var(--accent-neon);
  color: #fff;
  border-style: solid;
  box-shadow: 0 0 10px var(--accent-glow);
  transform: translateY(-1px);
}
.bunny-code-icon {
  font-size: 11px;
}
.bunny-code-tip {
  font-size: 9px;
  font-weight: 700;
  padding: 1px 4px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 3px;
  color: #ffd1dc;
}
.bunny-code-pill:hover .bunny-code-tip {
  background: rgba(255, 255, 255, 0.3);
  color: #fff;
}

/* Preset Starter Chips */
.bunny-starter-wrap {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.bunny-preset-chip {
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  color: var(--text-main);
  font-size: 12px;
  font-weight: 500;
  padding: 7px 12px;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all 0.15s;
}
.bunny-preset-chip:hover {
  background: var(--border-active);
  border-color: var(--text-muted);
  transform: translateY(-1px);
}

/* Horizontal Product Carousel */
.bunny-carousel-container {
  position: relative;
  width: 100%;
  margin-top: 10px;
}

.bunny-carousel-wrap {
  width: 100%;
  overflow-x: auto;
  padding: 4px 2px 10px 2px;
  display: flex;
  gap: 12px;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: var(--border-active) transparent;
}
.bunny-carousel-wrap::-webkit-scrollbar {
  height: 5px;
}
.bunny-carousel-wrap::-webkit-scrollbar-track {
  background: transparent;
}
.bunny-carousel-wrap::-webkit-scrollbar-thumb {
  background: var(--border-active);
  border-radius: 4px;
}
.bunny-carousel-wrap::-webkit-scrollbar-thumb:hover {
  background: var(--text-muted);
}

/* Floating Navigation Arrows */
.bunny-carousel-nav {
  position: absolute;
  top: 42%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(24, 25, 31, 0.92);
  border: 1px solid var(--border-active);
  color: var(--text-main);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  line-height: 1;
  font-weight: 700;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: all 0.15s cubic-bezier(0.16, 1, 0.3, 1);
  user-select: none;
}
.bunny-carousel-nav:hover {
  background: var(--accent-neon);
  color: #fff;
  border-color: var(--accent-neon);
  box-shadow: 0 4px 16px var(--accent-glow);
  transform: translateY(-50%) scale(1.1);
}
.bunny-nav-left {
  left: -8px;
}
.bunny-nav-right {
  right: -8px;
}

/* Product Card */
.bunny-card {
  flex: 0 0 205px;
  max-width: 205px;
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  scroll-snap-align: start;
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s, box-shadow 0.2s;
}
.bunny-card:hover {
  transform: translateY(-3px);
  border-color: var(--border-active);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
}
.bunny-card-img-wrap {
  width: 100%;
  height: 220px;
  background: #121316;
  position: relative;
  overflow: hidden;
}
.bunny-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}
.bunny-card:hover .bunny-card-img {
  transform: scale(1.04);
}
.bunny-badge-discount {
  position: absolute;
  top: 8px;
  left: 8px;
  background: var(--accent-neon);
  color: #fff;
  font-size: 10px;
  font-weight: 800;
  padding: 3px 6px;
  border-radius: 4px;
  letter-spacing: 0.5px;
}
.bunny-badge-soldout {
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(0, 0, 0, 0.75);
  color: #ef4444;
  border: 1px solid #ef4444;
  font-size: 10px;
  font-weight: 700;
  padding: 3px 7px;
  border-radius: 4px;
  text-transform: uppercase;
}
.bunny-card-content {
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.bunny-card-title {
  font-size: 12px;
  font-weight: 700;
  color: var(--text-main);
  line-height: 1.35;
  margin-bottom: 6px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 0.2px;
}
.bunny-card-price-row {
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin-bottom: 8px;
}
.bunny-card-price {
  font-size: 14px;
  font-weight: 800;
  color: #fff;
}
.bunny-card-compare {
  font-size: 11px;
  color: var(--text-subtle);
  text-decoration: line-through;
}
.bunny-card-sizes {
  font-size: 10px;
  color: var(--text-muted);
  margin-bottom: 10px;
}
.bunny-card-btn-row {
  display: flex;
  gap: 6px;
  margin-top: auto;
}
.bunny-btn-view {
  flex: 1;
  background: transparent;
  border: 1px solid var(--border-subtle);
  color: var(--text-muted);
  padding: 6px 0;
  border-radius: var(--radius-sm);
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 0.15s;
}
.bunny-btn-view:hover {
  color: var(--text-main);
  border-color: var(--border-active);
  background: var(--bg-surface-elevated);
}
.bunny-btn-cart {
  flex: 1.4;
  background: var(--text-main);
  color: #000;
  border: none;
  padding: 6px 0;
  border-radius: var(--radius-sm);
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s;
}
.bunny-btn-cart:hover {
  background: #fff;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
}
.bunny-btn-cart.added {
  background: var(--online-green);
  color: #fff;
}
.bunny-btn-disabled {
  flex: 2;
  background: var(--bg-surface-elevated);
  color: var(--text-subtle);
  border: 1px solid var(--border-subtle);
  padding: 6px 0;
  border-radius: var(--radius-sm);
  font-size: 11px;
  font-weight: 600;
  cursor: not-allowed;
  text-align: center;
}

/* Follow-up Suggestion Chips */
.bunny-suggestions-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 10px;
}
.bunny-suggestion-chip {
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  color: var(--text-main);
  font-size: 11.5px;
  font-weight: 500;
  padding: 5px 11px;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all 0.15s;
}
.bunny-suggestion-chip:hover {
  background: #2b2e3b;
  border-color: var(--text-muted);
}

/* Typing Indicator */
.bunny-typing-indicator {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 12px 16px;
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  width: fit-content;
}
.bunny-dot {
  width: 6px;
  height: 6px;
  background: var(--text-muted);
  border-radius: 50%;
  animation: bunny-bounce 1.4s infinite ease-in-out both;
}
.bunny-dot:nth-child(1) { animation-delay: -0.32s; }
.bunny-dot:nth-child(2) { animation-delay: -0.16s; }
@keyframes bunny-bounce {
  0%, 80%, 100% { transform: scale(0); opacity: 0.3; }
  40% { transform: scale(1); opacity: 1; }
}

/* WhatsApp Hand-off Card */
.bunny-error-card {
  background: rgba(239, 68, 68, 0.08);
  border: 1px solid rgba(239, 68, 68, 0.25);
  border-radius: var(--radius-md);
  padding: 12px 14px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.bunny-error-text {
  font-size: 12.5px;
  color: #fca5a5;
  line-height: 1.4;
}
.bunny-whatsapp-btn {
  background: #25d366;
  color: #000;
  text-decoration: none;
  font-size: 12px;
  font-weight: 700;
  padding: 8px 12px;
  border-radius: var(--radius-sm);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: opacity 0.15s;
}
.bunny-whatsapp-btn:hover {
  opacity: 0.9;
}

/* Input Footer */
.bunny-footer {
  padding: 12px 16px;
  background: var(--bg-surface);
  border-top: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}
.bunny-input {
  flex: 1;
  background: var(--bg-primary);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-full);
  padding: 10px 16px;
  font-size: 13.5px;
  color: var(--text-main);
  outline: none;
  transition: border-color 0.15s;
}
.bunny-input:focus {
  border-color: var(--accent-neon);
}
.bunny-input::placeholder {
  color: var(--text-subtle);
}
.bunny-send-btn {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--accent-neon);
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s, opacity 0.15s, box-shadow 0.15s;
  flex-shrink: 0;
}
.bunny-send-btn:hover:not(:disabled) {
  transform: scale(1.05);
  box-shadow: 0 0 15px var(--accent-glow);
}
.bunny-send-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* Mobile Fullscreen Panel & Touch Optimization */
@media (max-width: 480px) {
  .bunny-panel {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    width: 100vw !important;
    width: 100% !important;
    height: 100dvh !important;
    height: 100% !important;
    max-height: 100dvh !important;
    max-width: 100vw !important;
    border-radius: 0 !important;
    border: none !important;
    box-shadow: none !important;
  }

  .bunny-resize-handle {
    display: none !important;
  }

  /* Expand/compact toggle is redundant on mobile full screen */
  .bunny-header-actions .bunny-btn-icon:first-child {
    display: none !important;
  }

  .bunny-header {
    padding: 12px 14px;
  }

  .bunny-messages {
    padding: 12px !important;
    gap: 12px !important;
  }

  .bunny-msg-row {
    max-width: 92% !important;
  }

  /* Responsive Product Cards inside Carousel */
  .bunny-card {
    flex: 0 0 175px !important;
    max-width: 175px !important;
  }

  .bunny-card-img-wrap {
    height: 180px !important;
  }

  .bunny-card-content {
    padding: 8px 10px !important;
  }

  .bunny-card-title {
    font-size: 11px !important;
  }

  .bunny-carousel-nav {
    width: 28px !important;
    height: 28px !important;
    font-size: 18px !important;
  }
  .bunny-nav-left {
    left: -4px !important;
  }
  .bunny-nav-right {
    right: -4px !important;
  }

  /* Input Footer with iPhone safe area */
  .bunny-footer {
    padding: 10px 12px;
    padding-bottom: max(10px, env(safe-area-inset-bottom, 10px));
  }

  /* 16px font-size prevents iOS Safari from auto-zooming input fields */
  .bunny-input {
    font-size: 16px !important;
    padding: 10px 14px;
  }

  .bunny-launcher-wrap {
    bottom: 16px;
    right: 16px;
  }
}
`;function Bl(m={}){if(document.getElementById("bunny-widget-container"))return;m.apiUrl&&(window.BUNNY_API_URL=m.apiUrl),m.onAddToCart&&(window.BUNNY_ON_ADD_TO_CART=m.onAddToCart);const R=document.createElement("div");R.id="bunny-widget-container",document.body.appendChild(R);const h=R.attachShadow({mode:"open"}),oe=document.createElement("style");oe.textContent=tc,h.appendChild(oe);const K=document.createElement("div");K.id="bunny-widget-app",h.appendChild(K),Ka.createRoot(K).render(k.jsx(Ba.StrictMode,{children:k.jsx(nc,{})})),console.log("[BunnyWidget] Initialized inside isolated Shadow DOM.")}if(typeof window<"u"&&typeof document<"u"){try{const m=document.currentScript||document.querySelector('script[src*="bunny-widget"]');if(m){const R=m.getAttribute("data-api-url");R&&(window.BUNNY_API_URL=R.endsWith("/api/chat")?R:`${R.replace(/\/$/,"")}/api/chat`)}}catch{}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>Bl()):Bl()}return jl.initBunnyWidget=Bl,Object.defineProperty(jl,Symbol.toStringTag,{value:"Module"}),jl})({});
