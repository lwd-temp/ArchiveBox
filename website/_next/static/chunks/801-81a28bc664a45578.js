"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[801],{622:function(e,r,t){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=t(2265),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};r.Fragment=i,r.jsx=function(e,r,t){var n,i={},c=null,u=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(u=r.ref),r)a.call(r,n)&&!s.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:o,type:e,key:c,ref:u,props:i,_owner:l.current}}},7437:function(e,r,t){e.exports=t(622)},7470:function(e,r,t){t.d(r,{VY:function(){return eo},aV:function(){return et},fC:function(){return er},xz:function(){return en}});var n=t(2265),o=t.t(n,2);function i(e,r,{checkForDefaultPrevented:t=!0}={}){return function(n){if(e?.(n),!1===t||!n.defaultPrevented)return r?.(n)}}var a=t(7437);function l(...e){return r=>e.forEach(e=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})}function s(...e){return n.useCallback(l(...e),e)}var c=n.forwardRef((e,r)=>{let{children:t,...o}=e,i=n.Children.toArray(t),l=i.find(f);if(l){let e=l.props.children,t=i.map(r=>r!==l?r:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,a.jsx)(u,{...o,ref:r,children:n.isValidElement(e)?n.cloneElement(e,void 0,t):null})}return(0,a.jsx)(u,{...o,ref:r,children:t})});c.displayName="Slot";var u=n.forwardRef((e,r)=>{let{children:t,...o}=e;if(n.isValidElement(t)){let e,i;let a=(i=(e=Object.getOwnPropertyDescriptor(t.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?t.ref:(i=(e=Object.getOwnPropertyDescriptor(t,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?t.props.ref:t.props.ref||t.ref;return n.cloneElement(t,{...function(e,r){let t={...r};for(let n in r){let o=e[n],i=r[n],a=/^on[A-Z]/.test(n);a?o&&i?t[n]=(...e)=>{i(...e),o(...e)}:o&&(t[n]=o):"style"===n?t[n]={...o,...i}:"className"===n&&(t[n]=[o,i].filter(Boolean).join(" "))}return{...e,...t}}(o,t.props),ref:r?l(r,a):a})}return n.Children.count(t)>1?n.Children.only(null):null});u.displayName="SlotClone";var d=({children:e})=>(0,a.jsx)(a.Fragment,{children:e});function f(e){return n.isValidElement(e)&&e.type===d}var p=globalThis?.document?n.useLayoutEffect:()=>{},m=o["useId".toString()]||(()=>void 0),b=0;function g(e){let[r,t]=n.useState(m());return p(()=>{e||t(e=>e??String(b++))},[e]),e||(r?`radix-${r}`:"")}t(4887);var v=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=n.forwardRef((e,t)=>{let{asChild:n,...o}=e,i=n?c:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,a.jsx)(i,{...o,ref:t})});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{});function h(e){let r=n.useRef(e);return n.useEffect(()=>{r.current=e}),n.useMemo(()=>(...e)=>r.current?.(...e),[])}function y({prop:e,defaultProp:r,onChange:t=()=>{}}){let[o,i]=function({defaultProp:e,onChange:r}){let t=n.useState(e),[o]=t,i=n.useRef(o),a=h(r);return n.useEffect(()=>{i.current!==o&&(a(o),i.current=o)},[o,i,a]),t}({defaultProp:r,onChange:t}),a=void 0!==e,l=a?e:o,s=h(t),c=n.useCallback(r=>{if(a){let t="function"==typeof r?r(e):r;t!==e&&s(t)}else i(r)},[a,e,i,s]);return[l,c]}var x=n.createContext(void 0);function w(e){let r=n.useContext(x);return e||r||"ltr"}var N="rovingFocusGroup.onEntryFocus",k={bubbles:!1,cancelable:!0},C="RovingFocusGroup",[j,R,M]=function(e){let r=e+"CollectionProvider",[t,o]=function(e,r=[]){let t=[],o=()=>{let r=t.map(e=>n.createContext(e));return function(t){let o=t?.[e]||r;return n.useMemo(()=>({[`__scope${e}`]:{...t,[e]:o}}),[t,o])}};return o.scopeName=e,[function(r,o){let i=n.createContext(o),l=t.length;function s(r){let{scope:t,children:o,...s}=r,c=t?.[e][l]||i,u=n.useMemo(()=>s,Object.values(s));return(0,a.jsx)(c.Provider,{value:u,children:o})}return t=[...t,o],s.displayName=r+"Provider",[s,function(t,a){let s=a?.[e][l]||i,c=n.useContext(s);if(c)return c;if(void 0!==o)return o;throw Error(`\`${t}\` must be used within \`${r}\``)}]},function(...e){let r=e[0];if(1===e.length)return r;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=t.reduce((r,{useScope:t,scopeName:n})=>{let o=t(e),i=o[`__scope${n}`];return{...r,...i}},{});return n.useMemo(()=>({[`__scope${r.scopeName}`]:o}),[o])}};return t.scopeName=r.scopeName,t}(o,...r)]}(r),[i,l]=t(r,{collectionRef:{current:null},itemMap:new Map}),u=e=>{let{scope:r,children:t}=e,o=n.useRef(null),l=n.useRef(new Map).current;return(0,a.jsx)(i,{scope:r,itemMap:l,collectionRef:o,children:t})};u.displayName=r;let d=e+"CollectionSlot",f=n.forwardRef((e,r)=>{let{scope:t,children:n}=e,o=l(d,t),i=s(r,o.collectionRef);return(0,a.jsx)(c,{ref:i,children:n})});f.displayName=d;let p=e+"CollectionItemSlot",m="data-radix-collection-item",b=n.forwardRef((e,r)=>{let{scope:t,children:o,...i}=e,u=n.useRef(null),d=s(r,u),f=l(p,t);return n.useEffect(()=>(f.itemMap.set(u,{ref:u,...i}),()=>void f.itemMap.delete(u))),(0,a.jsx)(c,{[m]:"",ref:d,children:o})});return b.displayName=p,[{Provider:u,Slot:f,ItemSlot:b},function(r){let t=l(e+"CollectionConsumer",r),o=n.useCallback(()=>{let e=t.collectionRef.current;if(!e)return[];let r=Array.from(e.querySelectorAll(`[${m}]`)),n=Array.from(t.itemMap.values()),o=n.sort((e,t)=>r.indexOf(e.ref.current)-r.indexOf(t.ref.current));return o},[t.collectionRef,t.itemMap]);return o},o]}(C),[E,I]=function(e,r=[]){let t=[],o=()=>{let r=t.map(e=>n.createContext(e));return function(t){let o=t?.[e]||r;return n.useMemo(()=>({[`__scope${e}`]:{...t,[e]:o}}),[t,o])}};return o.scopeName=e,[function(r,o){let i=n.createContext(o),l=t.length;function s(r){let{scope:t,children:o,...s}=r,c=t?.[e][l]||i,u=n.useMemo(()=>s,Object.values(s));return(0,a.jsx)(c.Provider,{value:u,children:o})}return t=[...t,o],s.displayName=r+"Provider",[s,function(t,a){let s=a?.[e][l]||i,c=n.useContext(s);if(c)return c;if(void 0!==o)return o;throw Error(`\`${t}\` must be used within \`${r}\``)}]},function(...e){let r=e[0];if(1===e.length)return r;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=t.reduce((r,{useScope:t,scopeName:n})=>{let o=t(e),i=o[`__scope${n}`];return{...r,...i}},{});return n.useMemo(()=>({[`__scope${r.scopeName}`]:o}),[o])}};return t.scopeName=r.scopeName,t}(o,...r)]}(C,[M]),[_,S]=E(C),P=n.forwardRef((e,r)=>(0,a.jsx)(j.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,a.jsx)(j.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,a.jsx)(O,{...e,ref:r})})}));P.displayName=C;var O=n.forwardRef((e,r)=>{let{__scopeRovingFocusGroup:t,orientation:o,loop:l=!1,dir:c,currentTabStopId:u,defaultCurrentTabStopId:d,onCurrentTabStopIdChange:f,onEntryFocus:p,preventScrollOnEntryFocus:m=!1,...b}=e,g=n.useRef(null),x=s(r,g),C=w(c),[j=null,M]=y({prop:u,defaultProp:d,onChange:f}),[E,I]=n.useState(!1),S=h(p),P=R(t),O=n.useRef(!1),[z,T]=n.useState(0);return n.useEffect(()=>{let e=g.current;if(e)return e.addEventListener(N,S),()=>e.removeEventListener(N,S)},[S]),(0,a.jsx)(_,{scope:t,orientation:o,dir:C,loop:l,currentTabStopId:j,onItemFocus:n.useCallback(e=>M(e),[M]),onItemShiftTab:n.useCallback(()=>I(!0),[]),onFocusableItemAdd:n.useCallback(()=>T(e=>e+1),[]),onFocusableItemRemove:n.useCallback(()=>T(e=>e-1),[]),children:(0,a.jsx)(v.div,{tabIndex:E||0===z?-1:0,"data-orientation":o,...b,ref:x,style:{outline:"none",...e.style},onMouseDown:i(e.onMouseDown,()=>{O.current=!0}),onFocus:i(e.onFocus,e=>{let r=!O.current;if(e.target===e.currentTarget&&r&&!E){let r=new CustomEvent(N,k);if(e.currentTarget.dispatchEvent(r),!r.defaultPrevented){let e=P().filter(e=>e.focusable),r=e.find(e=>e.active),t=e.find(e=>e.id===j),n=[r,t,...e].filter(Boolean),o=n.map(e=>e.ref.current);$(o,m)}}O.current=!1}),onBlur:i(e.onBlur,()=>I(!1))})})}),z="RovingFocusGroupItem",T=n.forwardRef((e,r)=>{let{__scopeRovingFocusGroup:t,focusable:o=!0,active:l=!1,tabStopId:s,...c}=e,u=g(),d=s||u,f=S(z,t),p=f.currentTabStopId===d,m=R(t),{onFocusableItemAdd:b,onFocusableItemRemove:h}=f;return n.useEffect(()=>{if(o)return b(),()=>h()},[o,b,h]),(0,a.jsx)(j.ItemSlot,{scope:t,id:d,focusable:o,active:l,children:(0,a.jsx)(v.span,{tabIndex:p?0:-1,"data-orientation":f.orientation,...c,ref:r,onMouseDown:i(e.onMouseDown,e=>{o?f.onItemFocus(d):e.preventDefault()}),onFocus:i(e.onFocus,()=>f.onItemFocus(d)),onKeyDown:i(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){f.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let r=function(e,r,t){var n;let o=(n=e.key,"rtl"!==t?n:"ArrowLeft"===n?"ArrowRight":"ArrowRight"===n?"ArrowLeft":n);if(!("vertical"===r&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===r&&["ArrowUp","ArrowDown"].includes(o)))return A[o]}(e,f.orientation,f.dir);if(void 0!==r){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let o=m().filter(e=>e.focusable),i=o.map(e=>e.ref.current);if("last"===r)i.reverse();else if("prev"===r||"next"===r){var t,n;"prev"===r&&i.reverse();let o=i.indexOf(e.currentTarget);i=f.loop?(t=i,n=o+1,t.map((e,r)=>t[(n+r)%t.length])):i.slice(o+1)}setTimeout(()=>$(i))}})})})});T.displayName=z;var A={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function $(e,r=!1){let t=document.activeElement;for(let n of e)if(n===t||(n.focus({preventScroll:r}),document.activeElement!==t))return}var D=e=>{let r,t;let{present:o,children:i}=e,a=function(e){var r;let[t,o]=n.useState(),i=n.useRef({}),a=n.useRef(e),l=n.useRef("none"),s=e?"mounted":"unmounted",[c,u]=(r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},n.useReducer((e,t)=>{let n=r[e][t];return n??e},s));return n.useEffect(()=>{let e=F(i.current);l.current="mounted"===c?e:"none"},[c]),p(()=>{let r=i.current,t=a.current,n=t!==e;if(n){let n=l.current,o=F(r);e?u("MOUNT"):"none"===o||r?.display==="none"?u("UNMOUNT"):t&&n!==o?u("ANIMATION_OUT"):u("UNMOUNT"),a.current=e}},[e,u]),p(()=>{if(t){let e;let r=t.ownerDocument.defaultView??window,n=n=>{let o=F(i.current),l=o.includes(n.animationName);if(n.target===t&&l&&(u("ANIMATION_END"),!a.current)){let n=t.style.animationFillMode;t.style.animationFillMode="forwards",e=r.setTimeout(()=>{"forwards"===t.style.animationFillMode&&(t.style.animationFillMode=n)})}},o=e=>{e.target===t&&(l.current=F(i.current))};return t.addEventListener("animationstart",o),t.addEventListener("animationcancel",n),t.addEventListener("animationend",n),()=>{r.clearTimeout(e),t.removeEventListener("animationstart",o),t.removeEventListener("animationcancel",n),t.removeEventListener("animationend",n)}}u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:n.useCallback(e=>{e&&(i.current=getComputedStyle(e)),o(e)},[])}}(o),l="function"==typeof i?i({present:a.isPresent}):n.Children.only(i),c=s(a.ref,(t=(r=Object.getOwnPropertyDescriptor(l.props,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?l.ref:(t=(r=Object.getOwnPropertyDescriptor(l,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?l.props.ref:l.props.ref||l.ref),u="function"==typeof i;return u||a.isPresent?n.cloneElement(l,{ref:c}):null};function F(e){return e?.animationName||"none"}D.displayName="Presence";var G="Tabs",[L,U]=function(e,r=[]){let t=[],o=()=>{let r=t.map(e=>n.createContext(e));return function(t){let o=t?.[e]||r;return n.useMemo(()=>({[`__scope${e}`]:{...t,[e]:o}}),[t,o])}};return o.scopeName=e,[function(r,o){let i=n.createContext(o),l=t.length;t=[...t,o];let s=r=>{let{scope:t,children:o,...s}=r,c=t?.[e]?.[l]||i,u=n.useMemo(()=>s,Object.values(s));return(0,a.jsx)(c.Provider,{value:u,children:o})};return s.displayName=r+"Provider",[s,function(t,a){let s=a?.[e]?.[l]||i,c=n.useContext(s);if(c)return c;if(void 0!==o)return o;throw Error(`\`${t}\` must be used within \`${r}\``)}]},function(...e){let r=e[0];if(1===e.length)return r;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=t.reduce((r,{useScope:t,scopeName:n})=>{let o=t(e),i=o[`__scope${n}`];return{...r,...i}},{});return n.useMemo(()=>({[`__scope${r.scopeName}`]:o}),[o])}};return t.scopeName=r.scopeName,t}(o,...r)]}(G,[I]),W=I(),[V,K]=L(G),B=n.forwardRef((e,r)=>{let{__scopeTabs:t,value:n,onValueChange:o,defaultValue:i,orientation:l="horizontal",dir:s,activationMode:c="automatic",...u}=e,d=w(s),[f,p]=y({prop:n,onChange:o,defaultProp:i});return(0,a.jsx)(V,{scope:t,baseId:g(),value:f,onValueChange:p,orientation:l,dir:d,activationMode:c,children:(0,a.jsx)(v.div,{dir:d,"data-orientation":l,...u,ref:r})})});B.displayName=G;var q="TabsList",Y=n.forwardRef((e,r)=>{let{__scopeTabs:t,loop:n=!0,...o}=e,i=K(q,t),l=W(t);return(0,a.jsx)(P,{asChild:!0,...l,orientation:i.orientation,dir:i.dir,loop:n,children:(0,a.jsx)(v.div,{role:"tablist","aria-orientation":i.orientation,...o,ref:r})})});Y.displayName=q;var H="TabsTrigger",Z=n.forwardRef((e,r)=>{let{__scopeTabs:t,value:n,disabled:o=!1,...l}=e,s=K(H,t),c=W(t),u=X(s.baseId,n),d=ee(s.baseId,n),f=n===s.value;return(0,a.jsx)(T,{asChild:!0,...c,focusable:!o,active:f,children:(0,a.jsx)(v.button,{type:"button",role:"tab","aria-selected":f,"aria-controls":d,"data-state":f?"active":"inactive","data-disabled":o?"":void 0,disabled:o,id:u,...l,ref:r,onMouseDown:i(e.onMouseDown,e=>{o||0!==e.button||!1!==e.ctrlKey?e.preventDefault():s.onValueChange(n)}),onKeyDown:i(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&s.onValueChange(n)}),onFocus:i(e.onFocus,()=>{let e="manual"!==s.activationMode;f||o||!e||s.onValueChange(n)})})})});Z.displayName=H;var J="TabsContent",Q=n.forwardRef((e,r)=>{let{__scopeTabs:t,value:o,forceMount:i,children:l,...s}=e,c=K(J,t),u=X(c.baseId,o),d=ee(c.baseId,o),f=o===c.value,p=n.useRef(f);return n.useEffect(()=>{let e=requestAnimationFrame(()=>p.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,a.jsx)(D,{present:i||f,children:({present:t})=>(0,a.jsx)(v.div,{"data-state":f?"active":"inactive","data-orientation":c.orientation,role:"tabpanel","aria-labelledby":u,hidden:!t,id:d,tabIndex:0,...s,ref:r,style:{...e.style,animationDuration:p.current?"0s":void 0},children:t&&l})})});function X(e,r){return`${e}-trigger-${r}`}function ee(e,r){return`${e}-content-${r}`}Q.displayName=J;var er=B,et=Y,en=Z,eo=Q},7042:function(e,r,t){t.d(r,{W:function(){return n}});function n(){for(var e,r,t=0,n="",o=arguments.length;t<o;t++)(e=arguments[t])&&(r=function e(r){var t,n,o="";if("string"==typeof r||"number"==typeof r)o+=r;else if("object"==typeof r){if(Array.isArray(r)){var i=r.length;for(t=0;t<i;t++)r[t]&&(n=e(r[t]))&&(o&&(o+=" "),o+=n)}else for(n in r)r[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(n&&(n+=" "),n+=r);return n}},3986:function(e,r,t){t.d(r,{m:function(){return O}});var n=/^\[(.+)\]$/;function o(e,r){var t=e;return r.split("-").forEach(function(e){t.nextPart.has(e)||t.nextPart.set(e,{nextPart:new Map,validators:[]}),t=t.nextPart.get(e)}),t}var i=/\s+/;function a(){for(var e,r,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(r=function e(r){if("string"==typeof r)return r;for(var t,n="",o=0;o<r.length;o++)r[o]&&(t=e(r[o]))&&(n&&(n+=" "),n+=t);return n}(e))&&(n&&(n+=" "),n+=r);return n}function l(e){var r=function(r){return r[e]||[]};return r.isThemeGetter=!0,r}var s=/^\[(?:([a-z-]+):)?(.+)\]$/i,c=/^\d+\/\d+$/,u=new Set(["px","full","screen"]),d=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,f=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,p=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function m(e){return x(e)||u.has(e)||c.test(e)||b(e)}function b(e){return M(e,"length",E)}function g(e){return M(e,"size",I)}function v(e){return M(e,"position",I)}function h(e){return M(e,"url",_)}function y(e){return M(e,"number",x)}function x(e){return!Number.isNaN(Number(e))}function w(e){return e.endsWith("%")&&x(e.slice(0,-1))}function N(e){return S(e)||M(e,"number",S)}function k(e){return s.test(e)}function C(){return!0}function j(e){return d.test(e)}function R(e){return M(e,"",P)}function M(e,r,t){var n=s.exec(e);return!!n&&(n[1]?n[1]===r:t(n[2]))}function E(e){return f.test(e)}function I(){return!1}function _(e){return e.startsWith("url(")}function S(e){return Number.isInteger(Number(e))}function P(e){return p.test(e)}var O=function(){for(var e,r,t,l=arguments.length,s=Array(l),c=0;c<l;c++)s[c]=arguments[c];var u=function(i){var a=s[0];return r=(e=function(e){var r,t,i,a,l,s,c,u,d,f,p;return{cache:function(e){if(e<1)return{get:function(){},set:function(){}};var r=0,t=new Map,n=new Map;function o(o,i){t.set(o,i),++r>e&&(r=0,n=t,t=new Map)}return{get:function(e){var r=t.get(e);return void 0!==r?r:void 0!==(r=n.get(e))?(o(e,r),r):void 0},set:function(e,r){t.has(e)?t.set(e,r):o(e,r)}}}(e.cacheSize),splitModifiers:(t=1===(r=e.separator||":").length,i=r[0],a=r.length,function(e){for(var n,o=[],l=0,s=0,c=0;c<e.length;c++){var u=e[c];if(0===l){if(u===i&&(t||e.slice(c,c+a)===r)){o.push(e.slice(s,c)),s=c+a;continue}if("/"===u){n=c;continue}}"["===u?l++:"]"===u&&l--}var d=0===o.length?e:e.substring(s),f=d.startsWith("!"),p=f?d.substring(1):d;return{modifiers:o,hasImportantModifier:f,baseClassName:p,maybePostfixModifierPosition:n&&n>s?n-s:void 0}}),...(u=e.theme,d=e.prefix,f={nextPart:new Map,validators:[]},(p=Object.entries(e.classGroups),d?p.map(function(e){return[e[0],e[1].map(function(e){return"string"==typeof e?d+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(function(e){return[d+e[0],e[1]]})):e})]}):p).forEach(function(e){var r=e[0];(function e(r,t,n,i){r.forEach(function(r){if("string"==typeof r){(""===r?t:o(t,r)).classGroupId=n;return}if("function"==typeof r){if(r.isThemeGetter){e(r(i),t,n,i);return}t.validators.push({validator:r,classGroupId:n});return}Object.entries(r).forEach(function(r){var a=r[0];e(r[1],o(t,a),n,i)})})})(e[1],f,r,u)}),l=e.conflictingClassGroups,c=void 0===(s=e.conflictingClassGroupModifiers)?{}:s,{getClassGroupId:function(e){var r=e.split("-");return""===r[0]&&1!==r.length&&r.shift(),function e(r,t){if(0===r.length)return t.classGroupId;var n=r[0],o=t.nextPart.get(n),i=o?e(r.slice(1),o):void 0;if(i)return i;if(0!==t.validators.length){var a=r.join("-");return t.validators.find(function(e){return(0,e.validator)(a)})?.classGroupId}}(r,f)||function(e){if(n.test(e)){var r=n.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}(e)},getConflictingClassGroupIds:function(e,r){var t=l[e]||[];return r&&c[e]?[].concat(t,c[e]):t}})}}(s.slice(1).reduce(function(e,r){return r(e)},a()))).cache.get,t=e.cache.set,u=d,d(i)};function d(n){var o,a,l,s,c,u=r(n);if(u)return u;var d=(a=(o=e).splitModifiers,l=o.getClassGroupId,s=o.getConflictingClassGroupIds,c=new Set,n.trim().split(i).map(function(e){var r=a(e),t=r.modifiers,n=r.hasImportantModifier,o=r.baseClassName,i=r.maybePostfixModifierPosition,s=l(i?o.substring(0,i):o),c=!!i;if(!s){if(!i||!(s=l(o)))return{isTailwindClass:!1,originalClassName:e};c=!1}var u=(function(e){if(e.length<=1)return e;var r=[],t=[];return e.forEach(function(e){"["===e[0]?(r.push.apply(r,t.sort().concat([e])),t=[]):t.push(e)}),r.push.apply(r,t.sort()),r})(t).join(":");return{isTailwindClass:!0,modifierId:n?u+"!":u,classGroupId:s,originalClassName:e,hasPostfixModifier:c}}).reverse().filter(function(e){if(!e.isTailwindClass)return!0;var r=e.modifierId,t=e.classGroupId,n=e.hasPostfixModifier,o=r+t;return!c.has(o)&&(c.add(o),s(t,n).forEach(function(e){return c.add(r+e)}),!0)}).reverse().map(function(e){return e.originalClassName}).join(" "));return t(n,d),d}return function(){return u(a.apply(null,arguments))}}(function(){var e=l("colors"),r=l("spacing"),t=l("blur"),n=l("brightness"),o=l("borderColor"),i=l("borderRadius"),a=l("borderSpacing"),s=l("borderWidth"),c=l("contrast"),u=l("grayscale"),d=l("hueRotate"),f=l("invert"),p=l("gap"),M=l("gradientColorStops"),E=l("gradientColorStopPositions"),I=l("inset"),_=l("margin"),S=l("opacity"),P=l("padding"),O=l("saturate"),z=l("scale"),T=l("sepia"),A=l("skew"),$=l("space"),D=l("translate"),F=function(){return["auto","contain","none"]},G=function(){return["auto","hidden","clip","visible","scroll"]},L=function(){return["auto",k,r]},U=function(){return[k,r]},W=function(){return["",m]},V=function(){return["auto",x,k]},K=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},B=function(){return["solid","dashed","dotted","double","none"]},q=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},Y=function(){return["start","end","center","between","around","evenly","stretch"]},H=function(){return["","0",k]},Z=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},J=function(){return[x,y]},Q=function(){return[x,k]};return{cacheSize:500,theme:{colors:[C],spacing:[m],blur:["none","",j,k],brightness:J(),borderColor:[e],borderRadius:["none","","full",j,k],borderSpacing:U(),borderWidth:W(),contrast:J(),grayscale:H(),hueRotate:Q(),invert:H(),gap:U(),gradientColorStops:[e],gradientColorStopPositions:[w,b],inset:L(),margin:L(),opacity:J(),padding:U(),saturate:J(),scale:J(),sepia:H(),skew:Q(),space:U(),translate:U()},classGroups:{aspect:[{aspect:["auto","square","video",k]}],container:["container"],columns:[{columns:[j]}],"break-after":[{"break-after":Z()}],"break-before":[{"break-before":Z()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(K(),[k])}],overflow:[{overflow:G()}],"overflow-x":[{"overflow-x":G()}],"overflow-y":[{"overflow-y":G()}],overscroll:[{overscroll:F()}],"overscroll-x":[{"overscroll-x":F()}],"overscroll-y":[{"overscroll-y":F()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[I]}],"inset-x":[{"inset-x":[I]}],"inset-y":[{"inset-y":[I]}],start:[{start:[I]}],end:[{end:[I]}],top:[{top:[I]}],right:[{right:[I]}],bottom:[{bottom:[I]}],left:[{left:[I]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",N]}],basis:[{basis:L()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",k]}],grow:[{grow:H()}],shrink:[{shrink:H()}],order:[{order:["first","last","none",N]}],"grid-cols":[{"grid-cols":[C]}],"col-start-end":[{col:["auto",{span:["full",N]},k]}],"col-start":[{"col-start":V()}],"col-end":[{"col-end":V()}],"grid-rows":[{"grid-rows":[C]}],"row-start-end":[{row:["auto",{span:[N]},k]}],"row-start":[{"row-start":V()}],"row-end":[{"row-end":V()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",k]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",k]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal"].concat(Y())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(Y(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(Y(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[P]}],px:[{px:[P]}],py:[{py:[P]}],ps:[{ps:[P]}],pe:[{pe:[P]}],pt:[{pt:[P]}],pr:[{pr:[P]}],pb:[{pb:[P]}],pl:[{pl:[P]}],m:[{m:[_]}],mx:[{mx:[_]}],my:[{my:[_]}],ms:[{ms:[_]}],me:[{me:[_]}],mt:[{mt:[_]}],mr:[{mr:[_]}],mb:[{mb:[_]}],ml:[{ml:[_]}],"space-x":[{"space-x":[$]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[$]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",k,r]}],"min-w":[{"min-w":["min","max","fit",k,m]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[j]},j,k]}],h:[{h:[k,r,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",k,m]}],"max-h":[{"max-h":[k,r,"min","max","fit"]}],"font-size":[{text:["base",j,b]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",y]}],"font-family":[{font:[C]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",k]}],"line-clamp":[{"line-clamp":["none",x,y]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",k,m]}],"list-image":[{"list-image":["none",k]}],"list-style-type":[{list:["none","disc","decimal",k]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[S]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[S]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(B(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",m]}],"underline-offset":[{"underline-offset":["auto",k,m]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:U()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",k]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",k]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[S]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(K(),[v])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",g]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},h]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[E]}],"gradient-via-pos":[{via:[E]}],"gradient-to-pos":[{to:[E]}],"gradient-from":[{from:[M]}],"gradient-via":[{via:[M]}],"gradient-to":[{to:[M]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[S]}],"border-style":[{border:[].concat(B(),["hidden"])}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[S]}],"divide-style":[{divide:B()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:[""].concat(B())}],"outline-offset":[{"outline-offset":[k,m]}],"outline-w":[{outline:[m]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:W()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[S]}],"ring-offset-w":[{"ring-offset":[m]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",j,R]}],"shadow-color":[{shadow:[C]}],opacity:[{opacity:[S]}],"mix-blend":[{"mix-blend":q()}],"bg-blend":[{"bg-blend":q()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[n]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",j,k]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[f]}],saturate:[{saturate:[O]}],sepia:[{sepia:[T]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[n]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[S]}],"backdrop-saturate":[{"backdrop-saturate":[O]}],"backdrop-sepia":[{"backdrop-sepia":[T]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",k]}],duration:[{duration:Q()}],ease:[{ease:["linear","in","out","in-out",k]}],delay:[{delay:Q()}],animate:[{animate:["none","spin","ping","pulse","bounce",k]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[z]}],"scale-x":[{"scale-x":[z]}],"scale-y":[{"scale-y":[z]}],rotate:[{rotate:[N,k]}],"translate-x":[{"translate-x":[D]}],"translate-y":[{"translate-y":[D]}],"skew-x":[{"skew-x":[A]}],"skew-y":[{"skew-y":[A]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",k]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",k]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":U()}],"scroll-mx":[{"scroll-mx":U()}],"scroll-my":[{"scroll-my":U()}],"scroll-ms":[{"scroll-ms":U()}],"scroll-me":[{"scroll-me":U()}],"scroll-mt":[{"scroll-mt":U()}],"scroll-mr":[{"scroll-mr":U()}],"scroll-mb":[{"scroll-mb":U()}],"scroll-ml":[{"scroll-ml":U()}],"scroll-p":[{"scroll-p":U()}],"scroll-px":[{"scroll-px":U()}],"scroll-py":[{"scroll-py":U()}],"scroll-ps":[{"scroll-ps":U()}],"scroll-pe":[{"scroll-pe":U()}],"scroll-pt":[{"scroll-pt":U()}],"scroll-pr":[{"scroll-pr":U()}],"scroll-pb":[{"scroll-pb":U()}],"scroll-pl":[{"scroll-pl":U()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",k]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[m,y]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}}]);