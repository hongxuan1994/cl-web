(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7234:function(e,t,n){let s=n(7294),a=s.forwardRef(function({title:e,titleId:t,...n},a){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},n),e?s.createElement("title",{id:t},e):null,s.createElement("path",{fillRule:"evenodd",d:"M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z",clipRule:"evenodd"}))});e.exports=a},5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9092)}])},9092:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return pages}});var s,a,i,o,u,m,h,f,x=n(5893),p=n(961),b=n(5675),j=n.n(b),v=n(3357),w={src:"https://hongxuan1994.github.io/cl-web/_next/static/media/cyber-league.6747b0d6.png",height:3226,width:6251,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAdElEQVR42mP4//8/w8fXnxiBNAgzzLNeIrehajsHiA3CDMUMzWAJd4YUsT6G3uwahnnpQQx54iCxaWqLGBm+ffoGUiD/89tPi4eXn5oD2bJArPXv7z81IM3AADL675+/vEBaFIi5f337KQLkg9iC////ZwAAKJpSqwyyiqoAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4},hero=()=>(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(p.Z,{className:"flex flex-wrap ",children:(0,x.jsxs)("div",{className:"lg:grid lg:grid-cols-2",children:[(0,x.jsx)("div",{className:"flex lg:col-span-1 justify-center items-center",children:(0,x.jsx)(j(),{src:w,width:0,height:0,className:"object-cover",alt:"Hero Illustration",loading:"eager",placeholder:"blur"})}),(0,x.jsx)("div",{className:"max-lg:hidden lg:col-span-1",children:(0,x.jsx)(v.Z,{})})]})})}),y=n(5669),C=n(7294),timer=e=>{let[t,n]=(0,C.useState)({days:"00",hours:"00",minutes:"00",seconds:"00"}),getTimeDifference=e=>{let t=new Date().getTime(),s=e-t;s<0?(n({days:"00",hours:"00",minutes:"00",seconds:"00"}),clearInterval()):n({days:Math.floor(s/864e5)>=10?Math.floor(s/864e5):"0".concat(Math.floor(s/864e5)),hours:Math.floor(s%864e5/36e5)>=10?Math.floor(s%864e5/36e5):"0".concat(Math.floor(s%864e5/36e5)),minutes:Math.floor(s%36e5/6e4)>=10?Math.floor(s%36e5/6e4):"0".concat(Math.floor(s%36e5/6e4)),seconds:Math.floor(s%6e4/1e3)>=10?Math.floor(s%6e4/1e3):"0".concat(Math.floor(s%6e4/1e3))})},s=(0,C.useCallback)(()=>{let t=e.countdate,n=new Date(t);setInterval(()=>{getTimeDifference(n.getTime())},1e3)},[]);return(0,C.useEffect)(()=>{s()},[s]),(0,x.jsxs)("div",{className:"flex max-lg:hidden lg:col-span-2 justify-center",children:[(0,x.jsxs)("div",{className:"flex flex-col mr-20",children:[(0,x.jsx)("div",{className:"mb-5 flex justify-between items-center",children:(0,x.jsx)("span",{className:"text-7xl max-xl:text-5xl font-semibold text-gray-100",children:null==t?void 0:t.days})}),(0,x.jsx)("span",{className:"items-center text-xs sm:text-2xl text-center font-medium text-gray-100",children:(null==t?void 0:t.days)==1?"Day":"Days"})]}),(0,x.jsxs)("div",{className:"flex flex-col mr-20",children:[(0,x.jsx)("div",{className:"mb-5 flex justify-between items-center",children:(0,x.jsx)("span",{className:"text-7xl max-xl:text-5xl font-semibold text-gray-100",children:null==t?void 0:t.hours})}),(0,x.jsx)("span",{className:"items-center text-xs sm:text-2xl text-center font-medium text-gray-100",children:(null==t?void 0:t.hours)==1?"Hour":"Hours"})]}),(0,x.jsxs)("div",{className:"flex flex-col mr-20",children:[(0,x.jsx)("div",{className:"mb-5 flex justify-between items-center",children:(0,x.jsx)("span",{className:"text-7xl max-xl:text-5xl font-semibold text-gray-100",children:null==t?void 0:t.minutes})}),(0,x.jsx)("span",{className:"items-center text-xs sm:text-2xl text-center font-medium text-gray-100",children:(null==t?void 0:t.minutes)==1?"Minute":"Minutes"})]}),(0,x.jsxs)("div",{className:"flex flex-col",children:[(0,x.jsx)("div",{className:"mb-5 flex justify-between items-center",children:(0,x.jsx)("span",{className:"text-7xl max-xl:text-5xl font-semibold text-gray-100",children:null==t?void 0:t.seconds})}),(0,x.jsx)("span",{className:"items-center text-xs sm:text-2xl text-center font-medium text-gray-100",children:(null==t?void 0:t.seconds)==1?"Second":"Seconds"})]})]})},league=e=>{let t=e.name,n=e.date,s=e.time,a=e.venue,i=e.date1,o=e.format,u=e.prize1,m=e.prize2,h=e.prize3,f=e.prize4,[b,j]=(0,C.useState)(!1);return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(p.Z,{children:(0,x.jsxs)("div",{className:"pt-5 pb-5 lg:grid lg:grid-cols-3 items-center justify-center w-full h-full px-14 rounded-2xl bg-[#1D1546]",children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("div",{className:"lg:mb-5 lg:grid lg:col-span-1 content-center text-center",children:(0,x.jsx)("span",{className:"text-xl lg:text-5xl font-semibold text-white",children:t})}),(0,x.jsx)("div",{className:"lg:grid lg:col-span-1",children:(0,x.jsxs)("div",{className:"content-center text-center",children:[(0,x.jsx)("button",{type:"button",className:"h-10 px-4 font-medium text-sm rounded-md text-white bg-[#1F1DAC]",onClick:()=>{j(!0)},children:"More Details"}),b&&(0,x.jsx)("div",{className:"fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center",children:(0,x.jsx)("div",{className:"relative p-4 w-full max-w-2xl max-h-full",children:(0,x.jsxs)("div",{className:"relative rounded-lg shadow bg-[#1D1546]",children:[(0,x.jsx)("div",{className:"items-center justify-between rounded-t border-gray-600",children:(0,x.jsxs)("button",{type:"button",className:"absolute top-3 right-3 text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white",onClick:()=>{j(!b)},children:[(0,x.jsx)("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:(0,x.jsx)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),(0,x.jsx)("span",{className:"sr-only",children:"Close modal"})]})}),(0,x.jsxs)("div",{className:"p-4 md:p-5 space-y-4",children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("h3",{className:"text-xl font-semibold text-[#FFA243]",children:"Date"}),(0,x.jsx)("p",{className:"text-base text-white leading-relaxed",children:n})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h3",{className:"text-xl font-semibold text-[#FFA243]",children:"Time"}),(0,x.jsx)("p",{className:"text-base text-white leading-relaxed",children:s})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h3",{className:"text-xl font-semibold text-[#FFA243]",children:"Venue"}),(0,x.jsx)("p",{className:"text-base text-white leading-relaxed",children:a})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h3",{className:"text-xl font-semibold text-[#FFA243]",children:"Format"}),(0,x.jsx)("p",{className:"text-base text-white leading-relaxed",children:o})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h3",{className:"text-xl font-semibold text-[#FFA243]",children:"1st Prize:"}),(0,x.jsx)("p",{className:"text-base text-white leading-relaxed",children:u})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h3",{className:"text-xl font-semibold text-[#FFA243]",children:"2nd Prize:"}),(0,x.jsx)("p",{className:"text-base text-white leading-relaxed",children:m})]}),"$0"==h?"":(0,x.jsxs)("div",{children:[(0,x.jsx)("h3",{className:"text-xl font-semibold text-[#FFA243]",children:"3rd Prize:"}),(0,x.jsx)("p",{className:"text-base text-white leading-relaxed",children:h})]}),"$0"==f?"":(0,x.jsxs)("div",{children:[(0,x.jsx)("h3",{className:"text-xl font-semibold text-[#FFA243]",children:"4th - 10th Prize"}),(0,x.jsx)("p",{className:"text-base text-white leading-relaxed",children:f})]})]})]})})})]})})]}),(0,x.jsx)(timer,{className:"lg:grid lg:col-span-1",countdate:i})]})})})},mechanic=e=>(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(p.Z,{children:(0,x.jsxs)("ol",{className:"items-center sm:flex",children:[(0,x.jsxs)("li",{className:"w-full h-40 mb-6 sm:mb-0",children:[(0,x.jsxs)("div",{className:"flex items-center max-sm:justify-center",children:[(0,x.jsx)("div",{className:"flex items-center justify-center w-12 h-12 lg:w-6 lg:h-6 rounded-full ring-0 ring-[#5E548E] bg-[#1D1546] sm:ring-7 shrink-0",children:(0,x.jsx)("svg",{className:"lg:w-6 lg:h-6 w-12 h-12 text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",children:(0,x.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2",d:"M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})})}),(0,x.jsx)("div",{className:"hidden sm:flex w-full h-0.5 bg-gray-700"})]}),(0,x.jsxs)("div",{className:"mt-3 sm:pe-8 max-sm:text-center",children:[(0,x.jsx)("h3",{className:"text-xl mb-2 font-semibold text-white",children:"Major"}),(0,x.jsx)("time",{className:"block mb-2 text-m font-normal leading-none text-white",children:"Jeopardy"}),(0,x.jsx)("p",{className:"text-base font-normal text-white",children:"Collate as many points as possible to achieve a high position"})]})]}),(0,x.jsxs)("li",{className:"w-full h-40 mb-6 sm:mb-0",children:[(0,x.jsxs)("div",{className:"flex items-center max-sm:justify-center",children:[(0,x.jsx)("div",{className:"hidden sm:flex w-1/2 h-0.5 bg-gray-700"}),(0,x.jsx)("div",{className:"flex items-center justify-center w-12 h-12 lg:w-6 lg:h-6 rounded-full ring-0 ring-[#5E548E] bg-[#1D1546] sm:ring-7 shrink-0",children:(0,x.jsx)("svg",{className:"w-12 h-12 lg:w-6 lg:h-6 text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24",children:(0,x.jsx)("path",{fillRule:"evenodd",d:"M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z",clipRule:"evenodd"})})}),(0,x.jsx)("div",{className:"hidden sm:flex w-1/2 h-0.5 bg-gray-700"})]}),(0,x.jsxs)("div",{className:"mt-3 text-center",children:[(0,x.jsx)("h3",{className:"text-xl mb-2 font-semibold text-white",children:"Playoff"}),(0,x.jsx)("time",{className:"block mb-2 text-m font-normal leading-none text-white",children:"Super Jeopardy"}),(0,x.jsx)("p",{className:"text-base font-normal text-white",children:"Top 10 teams from the major to compete with each other."})]})]}),(0,x.jsxs)("li",{className:"w-full h-40 mb-6 sm:mb-0",children:[(0,x.jsxs)("div",{className:"flex sm:flex-row-reverse items-center max-sm:justify-center",children:[(0,x.jsx)("div",{className:"flex items-center justify-center w-12 h-12 lg:w-6 lg:h-6 rounded-full ring-0 ring-[#5E548E] bg-[#1D1546] sm:ring-7 shrink-0",children:(0,x.jsx)("svg",{className:"w-12 h-12 lg:w-6 lg:h-6 text-gray-800 text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24",children:(0,x.jsx)("path",{fillRule:"evenodd",d:"M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z",clipRule:"evenodd"})})}),(0,x.jsx)("div",{className:"hidden sm:flex w-full bg-gray-200 h-0.5 bg-gray-700"})]}),(0,x.jsxs)("div",{className:"text-right mt-3 max-sm:text-center",children:[(0,x.jsx)("h3",{className:"text-xl mb-2 font-semibold text-white",children:"Grand Finals"}),(0,x.jsx)("time",{className:"block mb-2 text-m font-normal leading-none text-white",children:"Head-to-Head"}),(0,x.jsx)("p",{className:"text-base font-normal text-white",children:"Final 2 teams will fight to be the champion."})]})]})]})})}),S=n(4505);function match_u(e,t,...n){if(e in t){let s=t[e];return"function"==typeof s?s(...n):s}let s=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,match_u),s}function class_names_e(...e){return e.filter(Boolean).join(" ")}var E=((s=E||{})[s.None=0]="None",s[s.RenderStrategy=1]="RenderStrategy",s[s.Static=2]="Static",s),_=((a=_||{})[a.Unmount=0]="Unmount",a[a.Hidden=1]="Hidden",a);function X({ourProps:e,theirProps:t,slot:n,defaultTag:s,features:a,visible:i=!0,name:o}){let u=N(t,e);if(i)return c(u,n,s,o);let m=null!=a?a:0;if(2&m){let{static:e=!1,...t}=u;if(e)return c(t,n,s,o)}if(1&m){let{unmount:e=!0,...t}=u;return match_u(e?0:1,{0:()=>null,1:()=>c({...t,hidden:!0,style:{display:"none"}},n,s,o)})}return c(u,n,s,o)}function c(e,t={},n,s){let{as:a=n,children:i,refName:o="ref",...u}=g(e,["unmount","static"]),m=void 0!==e.ref?{[o]:e.ref}:{},h="function"==typeof i?i(t):i;"className"in u&&u.className&&"function"==typeof u.className&&(u.className=u.className(t));let f={};if(t){let e=!1,n=[];for(let[s,a]of Object.entries(t))"boolean"==typeof a&&(e=!0),!0===a&&n.push(s);e&&(f["data-headlessui-state"]=n.join(" "))}if(a===C.Fragment&&Object.keys(R(u)).length>0){if(!(0,C.isValidElement)(h)||Array.isArray(h)&&h.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${s} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(u).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=h.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>class_names_e(null==e?void 0:e.className(...t),u.className):class_names_e(null==e?void 0:e.className,u.className),n=t?{className:t}:{};return(0,C.cloneElement)(h,Object.assign({},N(h.props,R(g(u,["ref"]))),f,m,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(h.ref,m.ref),n))}return(0,C.createElement)(a,Object.assign({},g(u,["ref"]),a!==C.Fragment&&m,a!==C.Fragment&&f),h)}function N(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let s of e)for(let e in s)e.startsWith("on")&&"function"==typeof s[e]?(null!=n[e]||(n[e]=[]),n[e].push(s[e])):t[e]=s[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let e in n)Object.assign(t,{[e](t,...s){for(let a of n[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;a(t,...s)}}});return t}function D(e){var t;return Object.assign((0,C.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function R(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function g(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}var A=Object.defineProperty,d=(e,t,n)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,r=(e,t,n)=>(d(e,"symbol"!=typeof t?t+"":t,n),n);let k=new class{constructor(){r(this,"current",this.detect()),r(this,"handoffState","pending"),r(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}},l=(e,t)=>{k.isServer?(0,C.useEffect)(e,t):(0,C.useLayoutEffect)(e,t)},use_event_o=function(e){let t;let n=(t=(0,C.useRef)(e),l(()=>{t.current=e},[e]),t);return C.useCallback((...e)=>n.current(...e),[n])},T=Symbol();function use_sync_refs_y(...e){let t=(0,C.useRef)(e);(0,C.useEffect)(()=>{t.current=e},[e]);let n=use_event_o(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[T]))?void 0:n}let P=null!=(h=C.useId)?h:function(){let e=function(){let[e,t]=(0,C.useState)(k.isHandoffComplete);return e&&!1===k.isHandoffComplete&&t(!1),(0,C.useEffect)(()=>{!0!==e&&t(!0)},[e]),(0,C.useEffect)(()=>k.handoff(),[]),e}(),[t,n]=C.useState(e?()=>k.nextId():null);return l(()=>{null===t&&n(k.nextId())},[t]),null!=t?""+t:void 0};var F=((i=F||{}).Space=" ",i.Enter="Enter",i.Escape="Escape",i.Backspace="Backspace",i.Delete="Delete",i.ArrowLeft="ArrowLeft",i.ArrowUp="ArrowUp",i.ArrowRight="ArrowRight",i.ArrowDown="ArrowDown",i.Home="Home",i.End="End",i.PageUp="PageUp",i.PageDown="PageDown",i.Tab="Tab",i);let I=(0,C.createContext)(null);I.displayName="OpenClosedContext";var O=((o=O||{})[o.Open=1]="Open",o[o.Closed=2]="Closed",o[o.Closing=4]="Closing",o[o.Opening=8]="Opening",o);function open_closed_c({value:e,children:t}){return C.createElement(I.Provider,{value:e},t)}function use_resolve_button_type_i(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}let L=null!=(f=C.startTransition)?f:function(e){e()};var H=((u=H||{})[u.Open=0]="Open",u[u.Closed=1]="Closed",u),z=((m=z||{})[m.ToggleDisclosure=0]="ToggleDisclosure",m[m.CloseDisclosure=1]="CloseDisclosure",m[m.SetButtonId=2]="SetButtonId",m[m.SetPanelId=3]="SetPanelId",m[m.LinkPanel=4]="LinkPanel",m[m.UnlinkPanel=5]="UnlinkPanel",m);let B={0:e=>({...e,disclosureState:match_u(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},q=(0,C.createContext)(null);function M(e){let t=(0,C.useContext)(q);if(null===t){let t=Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,M),t}return t}q.displayName="DisclosureContext";let G=(0,C.createContext)(null);G.displayName="DisclosureAPIContext";let U=(0,C.createContext)(null);function Y(e,t){return match_u(t.type,B,e,t)}U.displayName="DisclosurePanelContext";let Z=C.Fragment,$=E.RenderStrategy|E.Static,W=Object.assign(D(function(e,t){let{defaultOpen:n=!1,...s}=e,a=(0,C.useRef)(null),i=use_sync_refs_y(t,function(e,t=!0){return Object.assign(e,{[T]:t})}(e=>{a.current=e},void 0===e.as||e.as===C.Fragment)),o=(0,C.useRef)(null),u=(0,C.useRef)(null),m=(0,C.useReducer)(Y,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:u,panelRef:o,buttonId:null,panelId:null}),[{disclosureState:h,buttonId:f},x]=m,p=use_event_o(e=>{x({type:1});let t=k.isServer?null:a instanceof Node?a.ownerDocument:null!=a&&a.hasOwnProperty("current")&&a.current instanceof Node?a.current.ownerDocument:document;if(!t||!f)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(f):t.getElementById(f);null==n||n.focus()}),b=(0,C.useMemo)(()=>({close:p}),[p]),j=(0,C.useMemo)(()=>({open:0===h,close:p}),[h,p]);return C.createElement(q.Provider,{value:m},C.createElement(G.Provider,{value:b},C.createElement(open_closed_c,{value:match_u(h,{0:O.Open,1:O.Closed})},X({ourProps:{ref:i},theirProps:s,slot:j,defaultTag:Z,name:"Disclosure"}))))}),{Button:D(function(e,t){let n=P(),{id:s=`headlessui-disclosure-button-${n}`,...a}=e,[i,o]=M("Disclosure.Button"),u=(0,C.useContext)(U),m=null!==u&&u===i.panelId,h=(0,C.useRef)(null),f=use_sync_refs_y(h,t,m?null:i.buttonRef);(0,C.useEffect)(()=>{if(!m)return o({type:2,buttonId:s}),()=>{o({type:2,buttonId:null})}},[s,o,m]);let x=use_event_o(e=>{var t;if(m){if(1===i.disclosureState)return;switch(e.key){case F.Space:case F.Enter:e.preventDefault(),e.stopPropagation(),o({type:0}),null==(t=i.buttonRef.current)||t.focus()}}else switch(e.key){case F.Space:case F.Enter:e.preventDefault(),e.stopPropagation(),o({type:0})}}),p=use_event_o(e=>{e.key===F.Space&&e.preventDefault()}),b=use_event_o(t=>{var n;(function(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let s=(null==t?void 0:t.getAttribute("disabled"))==="";return!(s&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&s})(t.currentTarget)||e.disabled||(m?(o({type:0}),null==(n=i.buttonRef.current)||n.focus()):o({type:0}))}),j=(0,C.useMemo)(()=>({open:0===i.disclosureState}),[i]),v=function(e,t){let[n,s]=(0,C.useState)(()=>use_resolve_button_type_i(e));return l(()=>{s(use_resolve_button_type_i(e))},[e.type,e.as]),l(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&s("button")},[n,t]),n}(e,h);return X({ourProps:m?{ref:f,type:v,onKeyDown:x,onClick:b}:{ref:f,id:s,type:v,"aria-expanded":e.disabled?void 0:0===i.disclosureState,"aria-controls":i.linkedPanel?i.panelId:void 0,onKeyDown:x,onKeyUp:p,onClick:b},theirProps:a,slot:j,defaultTag:"button",name:"Disclosure.Button"})}),Panel:D(function(e,t){let n=P(),{id:s=`headlessui-disclosure-panel-${n}`,...a}=e,[i,o]=M("Disclosure.Panel"),{close:u}=function disclosure_w(e){let t=(0,C.useContext)(G);if(null===t){let t=Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,disclosure_w),t}return t}("Disclosure.Panel"),m=use_sync_refs_y(t,i.panelRef,e=>{L(()=>o({type:e?4:5}))});(0,C.useEffect)(()=>(o({type:3,panelId:s}),()=>{o({type:3,panelId:null})}),[s,o]);let h=(0,C.useContext)(I),f=null!==h?(h&O.Open)===O.Open:0===i.disclosureState,x=(0,C.useMemo)(()=>({open:0===i.disclosureState,close:u}),[i,u]);return C.createElement(U.Provider,{value:i.panelId},X({ourProps:{ref:m,id:s},theirProps:a,slot:x,defaultTag:"div",features:$,visible:f,name:"Disclosure.Panel"}))})});var J=n(7234);let K=[{question:"What is Cyber League?",answer:"Cyber League is the next evolution in Capture The Flag (CTF) competitions, pushing the boundaries of cybersecurity challenges. Each season, top teams battle through intense stages. \n\nExperience cutting-edge challenges, fierce competition, and the thrill of elite cybersecurity warfare. Cyber League: Start as an Apprentice, and become a Master."},{question:"What changed in Cyber League Season #02?",answer:(0,x.jsxs)(x.Fragment,{children:["Cyber League Season #02 introduces a new format for its Next Generation Capture The Flag competition. This season features one qualifying ",(0,x.jsx)("i",{children:"Major"}),", followed by ",(0,x.jsx)("i",{children:"Playoff"})," and ",(0,x.jsx)("i",{children:"Grand Finals"}),". ",(0,x.jsx)("br",{}),(0,x.jsx)("br",{}),"The top 10 teams from the qualifying ",(0,x.jsx)("i",{children:"Major"})," are selected to compete in the playoffs. ",(0,x.jsx)("br",{}),"The two highest-performing teams from the ",(0,x.jsx)("i",{children:"Playoff"})," will advance to the ",(0,x.jsx)("i",{children:"Grand Finals"}),", where they will face off to determine the ultimate champion of Season #02."]})},{question:"Who is eligible for Cyber League?",answer:(0,x.jsxs)(x.Fragment,{children:["Cyber League is open to individuals who are 18 years of age or older, or those who possess legal parental or guardian consent, and are fully able and competent to enter into the terms, conditions, obligations, and representations ",(0,x.jsx)("a",{className:"font-bold underline underline-offset-4",href:"https://cyberleague.co/terms-of-service/",children:"herein"}),".",(0,x.jsx)("br",{}),(0,x.jsx)("br",{}),"In a notable change from Season #01, Season #02 welcomes international teams, expanding our competition to a global scale. This exciting development allows cybersecurity talents from around the world to showcase their skills and compete at the highest level."]})},{question:"Team Size for Cyber League",answer:"Cyber League offers flexible team options for all participants. You can compete in teams of up to 3 players, but you're also welcome to participate in smaller teams or even as an individual. \n\nIf you have 1 or 2 players and want more teammates, feel free to use our discord to look for suitable members! \n\nThis flexibility ensures that everyone can participate, regardless of their initial team size or preferences."},{question:"[For International Team] Will there be any flight and accommodation sponsor for the onsite playoffs and/or finals?",answer:"No, there will not be any flight and accommodation sponsorship provided for the onsite playoffs and/or finals."},{question:"[For International Team] Are international team eligible for the prizes?",answer:"Yes, international teams are eligible to receive the training voucher and cash prizes listed."},{question:"More Help?",answer:(0,x.jsxs)(x.Fragment,{children:["Join our ",(0,x.jsx)("a",{className:"font-bold underline underline-offset-4",href:"https://discord.gg/2V7cnQq23g",children:"Discord"})," server for community support and quick responses. ",(0,x.jsx)("a",{className:"font-bold underline underline-offset-4",href:"mailto:support@cyberleague.co",children:"Email Us"})," for direct assistance."]})}];var faq=()=>(0,x.jsx)(p.Z,{className:"!p-0",children:(0,x.jsx)("div",{className:"w-full max-w-2xl p-2 mx-auto rounded-2xl",children:K.map((e,t)=>(0,x.jsx)("div",{className:"mb-5",children:(0,x.jsx)(W,{children:t=>{let{open:n}=t;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(W.Button,{className:"flex items-center justify-between w-full px-4 py-4 text-lg text-left font-bold rounded-lg hover:bg-[#5E548E] focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 bg-[#1D1546] text-white",children:[(0,x.jsx)("span",{children:e.question}),(0,x.jsx)(J,{className:"".concat(n?"transform rotate-180":""," w-5 h-5 text-indigo-500")})]}),(0,x.jsx)(W.Panel,{className:"px-4 pt-4 pb-2 text-white whitespace-pre-line",children:e.answer})]})}})},e.question))})}),pages=()=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(hero,{}),(0,x.jsx)(y.Z,{pretitle:"DIV0-N0H4TS",title:"Cyber League Season 2",children:"Let The League Begin."}),(0,x.jsx)(league,{name:"Playoff (Onsite)",date:"8 February 2025, Saturday",time:"2pm (GMT+8)",venue:"CyberSG TIG Collaboration Centre",date1:"2025-02-08T14:00:00.000+08:00",format:"Super Jeopardy",prize1:"3 x STANDCON2025 + SGD 700 (Cash)",prize2:"3 x STANDCON2025 + SGD 600 (Cash)",prize3:"3 x STANDCON2025 + SGD 400 (Cash)",prize4:"3 x STANDCON2025 + SGD 100 (Cash)"}),(0,x.jsx)(league,{name:"Grand Finals (Onsite)",date:"7 March 2025, Friday",time:"3:30pm (GMT+8)",venue:"Suntec Singapore Convention & Exhibition Centre, Nicoll Room 1,2,3",date1:"2025-03-07T14:00:00.000+08:00",format:"Head-to-Head",prize1:"SGD 3000 (Cash)",prize2:"SGD 1000 (Cash)",prize3:"$0",prize4:"$0"}),(0,x.jsx)(y.Z,{pretitle:"Cyber League Mechanic",title:"How Does It Work?"}),(0,x.jsx)(mechanic,{}),(0,x.jsx)(y.Z,{pretitle:"FAQ",title:"Frequently Asked Questions"}),(0,x.jsx)(faq,{}),(0,x.jsx)(S.Z,{})]})}},function(e){e.O(0,[61,825,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);