(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7234:function(e,t,s){let a=s(7294),l=a.forwardRef(function({title:e,titleId:t,...s},l){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:l,"aria-labelledby":t},s),e?a.createElement("title",{id:t},e):null,a.createElement("path",{fillRule:"evenodd",d:"M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z",clipRule:"evenodd"}))});e.exports=l},5557:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(1256)}])},1256:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return k}});var a=s(5893),l=s(9008),r=s.n(l),n=s(5675),i=s.n(n),d=s(9312),x=s(3610),c={src:"https://hongxuan1994.github.io/cl-web/_next/static/media/cyber-league.6747b0d6.png",height:3226,width:6251,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAdElEQVR42mP4//8/w8fXnxiBNAgzzLNeIrehajsHiA3CDMUMzWAJd4YUsT6G3uwahnnpQQx54iCxaWqLGBm+ffoGUiD/89tPi4eXn5oD2bJArPXv7z81IM3AADL675+/vEBaFIi5f337KQLkg9iC////ZwAAKJpSqwyyiqoAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4};let o=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(d.Z,{className:"flex flex-wrap ",children:(0,a.jsxs)("div",{className:"lg:grid lg:grid-cols-2",children:[(0,a.jsx)("div",{className:"flex lg:col-span-1 justify-center items-center",children:(0,a.jsx)(i(),{src:c,width:"100%",height:"100%",className:"object-cover",alt:"Hero Illustration",loading:"eager",placeholder:"blur"})}),(0,a.jsx)("div",{className:"max-lg:hidden lg:col-span-1",children:(0,a.jsx)(x.Z,{})})]})})});var h=s(155),m=s(5210),g=s(7294);let u=e=>{let[t,s]=(0,g.useState)({days:"00",hours:"00",minutes:"00",seconds:"00"}),l=e=>{let t=new Date().getTime(),a=e-t;a<0?(s({days:"00",hours:"00",minutes:"00",seconds:"00"}),clearInterval()):s({days:Math.floor(a/864e5)>=10?Math.floor(a/864e5):"0".concat(Math.floor(a/864e5)),hours:Math.floor(a%864e5/36e5)>=10?Math.floor(a%864e5/36e5):"0".concat(Math.floor(a%864e5/36e5)),minutes:Math.floor(a%36e5/6e4)>=10?Math.floor(a%36e5/6e4):"0".concat(Math.floor(a%36e5/6e4)),seconds:Math.floor(a%6e4/1e3)>=10?Math.floor(a%6e4/1e3):"0".concat(Math.floor(a%6e4/1e3))})},r=(0,g.useCallback)(()=>{let t=e.countdate,s=new Date(t);setInterval(()=>{l(s.getTime())},1e3)},[]);return(0,g.useEffect)(()=>{r()},[r]),(0,a.jsxs)("div",{className:"flex max-lg:hidden lg:col-span-2 justify-center",children:[(0,a.jsxs)("div",{className:"flex flex-col mr-20",children:[(0,a.jsx)("div",{className:"mb-5 flex justify-between items-center",children:(0,a.jsx)("span",{className:"text-7xl max-xl:text-5xl font-semibold text-gray-100",children:null==t?void 0:t.days})}),(0,a.jsx)("span",{className:"items-center text-xs sm:text-2xl text-center font-medium text-gray-100",children:(null==t?void 0:t.days)==1?"Day":"Days"})]}),(0,a.jsxs)("div",{className:"flex flex-col mr-20",children:[(0,a.jsx)("div",{className:"mb-5 flex justify-between items-center",children:(0,a.jsx)("span",{className:"text-7xl max-xl:text-5xl font-semibold text-gray-100",children:null==t?void 0:t.hours})}),(0,a.jsx)("span",{className:"items-center text-xs sm:text-2xl text-center font-medium text-gray-100",children:(null==t?void 0:t.hours)==1?"Hour":"Hours"})]}),(0,a.jsxs)("div",{className:"flex flex-col mr-20",children:[(0,a.jsx)("div",{className:"mb-5 flex justify-between items-center",children:(0,a.jsx)("span",{className:"text-7xl max-xl:text-5xl font-semibold text-gray-100",children:null==t?void 0:t.minutes})}),(0,a.jsx)("span",{className:"items-center text-xs sm:text-2xl text-center font-medium text-gray-100",children:(null==t?void 0:t.minutes)==1?"Minute":"Minutes"})]}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("div",{className:"mb-5 flex justify-between items-center",children:(0,a.jsx)("span",{className:"text-7xl max-xl:text-5xl font-semibold text-gray-100",children:null==t?void 0:t.seconds})}),(0,a.jsx)("span",{className:"items-center text-xs sm:text-2xl text-center font-medium text-gray-100",children:(null==t?void 0:t.seconds)==1?"Second":"Seconds"})]})]})};s(1538);let f=e=>{let t=e.name,s=e.date,l=e.date1+" 00:00:00",r=e.format,n=e.prize1,i=e.prize2,x=e.prize3;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(d.Z,{children:(0,a.jsxs)("div",{className:"pt-5 pb-5 lg:grid lg:grid-cols-3 items-center justify-center w-full h-full bg-gray-100 px-14 rounded-2xl dark:bg-[#5E548E]",children:[(0,a.jsxs)("div",{className:"lg:col-span-1 justify-center",children:[(0,a.jsx)("div",{className:"mb-5 content-center text-center",children:(0,a.jsx)("span",{className:"text-5xl max-lg:text-3xl font-semibold text-gray-100",children:t})}),(0,a.jsxs)("div",{className:"lg:grid lg:grid-cols-3 content-center text-center",children:[(0,a.jsxs)("div",{className:"mb-2 lg:col-span-1",children:[(0,a.jsx)("span",{className:"text-s lg:text-m font-semibold underline text-gray-100",children:"Date"}),(0,a.jsx)("span",{className:"text-xs lg:text-s font-semibold text-gray-100",children:(0,a.jsx)("p",{children:s})})]}),(0,a.jsxs)("div",{className:"mb-2 lg:col-span-1",children:[(0,a.jsx)("span",{className:"text-s lg:text-m font-semibold underline text-gray-100",children:"Format"}),(0,a.jsx)("span",{className:"text-xs lg:text-s font-semibold text-gray-100",children:(0,a.jsx)("p",{children:r})})]}),(0,a.jsxs)("div",{className:"lg:col-span-1",children:[(0,a.jsx)("span",{className:"text-s lg:text-m font-semibold underline text-gray-100",children:"Prizes"}),(0,a.jsxs)("span",{className:"text-xs lg:text-s font-semibold text-gray-100",children:[(0,a.jsxs)("p",{children:["1st Prize: ",n]}),(0,a.jsxs)("p",{children:["2nd Prize: ",i]}),(0,a.jsxs)("p",{children:["3rd Prize: ",x]})]})]})]})]}),(0,a.jsx)(u,{countdate:l})]})})})},j=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(d.Z,{children:(0,a.jsxs)("ol",{class:"items-center sm:flex",children:[(0,a.jsxs)("li",{class:"w-full h-40 mb-6 sm:mb-0",children:[(0,a.jsxs)("div",{class:"flex items-center",children:[(0,a.jsx)("div",{class:"z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0",children:(0,a.jsx)("svg",{class:"w-2.5 h-2.5 text-blue-800 dark:text-blue-300","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:(0,a.jsx)("path",{d:"M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"})})}),(0,a.jsx)("div",{class:"hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"})]}),(0,a.jsxs)("div",{class:"mt-3 sm:pe-8",children:[(0,a.jsx)("h3",{class:"text-lg font-semibold text-gray-900 dark:text-white",children:"Major 1"}),(0,a.jsx)("time",{class:"block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-300",children:"Jeopardy"}),(0,a.jsx)("p",{class:"text-base font-normal text-gray-500 dark:text-gray-300",children:"Collate as many points as possible to achieve a high position"})]})]}),(0,a.jsxs)("li",{class:"w-full h-40 mb-6 sm:mb-0",children:[(0,a.jsxs)("div",{class:"flex items-center",children:[(0,a.jsx)("div",{class:"z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0",children:(0,a.jsx)("svg",{class:"w-2.5 h-2.5 text-blue-800 dark:text-blue-300","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:(0,a.jsx)("path",{d:"M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"})})}),(0,a.jsx)("div",{class:"hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"})]}),(0,a.jsxs)("div",{class:"mt-3 sm:pe-8",children:[(0,a.jsx)("h3",{class:"text-lg font-semibold text-gray-900 dark:text-white",children:"Playoffs"}),(0,a.jsx)("time",{class:"block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-300",children:"Head2Head"}),(0,a.jsx)("p",{class:"text-base font-normal text-gray-500 dark:text-gray-300",children:"Top 8 teams from the major to compete with each other."})]})]}),(0,a.jsxs)("li",{class:"w-full h-40 mb-6 sm:mb-0",children:[(0,a.jsxs)("div",{class:"flex flex-row-reverse items-center",children:[(0,a.jsx)("div",{class:"z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0",children:(0,a.jsx)("svg",{class:"w-2.5 h-2.5 text-blue-800 dark:text-blue-300","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:(0,a.jsx)("path",{d:"M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"})})}),(0,a.jsx)("div",{class:"hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"})]}),(0,a.jsxs)("div",{class:"text-right mt-3",children:[(0,a.jsx)("h3",{class:"text-lg font-semibold text-gray-900 dark:text-white",children:"Semi-Final"}),(0,a.jsx)("time",{class:"block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-300",children:"Head2Head"}),(0,a.jsx)("p",{class:"text-base font-normal text-gray-500 dark:text-gray-300",children:"Surviving 4 teams will battle each other for a spot in the grand finals."})]})]}),(0,a.jsxs)("li",{class:"w-full h-40 mb-6 sm:mb-0",children:[(0,a.jsxs)("div",{class:"flex flex-row-reverse items-center",children:[(0,a.jsx)("div",{class:"z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0",children:(0,a.jsx)("svg",{class:"w-2.5 h-2.5 text-blue-800 dark:text-blue-300","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:(0,a.jsx)("path",{d:"M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"})})}),(0,a.jsx)("div",{class:"hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"})]}),(0,a.jsxs)("div",{class:"text-right mt-3",children:[(0,a.jsx)("h3",{class:"text-lg font-semibold text-gray-900 dark:text-white",children:"Final"}),(0,a.jsx)("time",{class:"block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-300",children:"Head2Head"}),(0,a.jsx)("p",{class:"text-base font-normal text-gray-500 dark:text-gray-300",children:"Final 2 teams will fight to be the champion."})]})]})]})})});s(5195),s(2874);var b=s(91),p=s(689),y=s(7234);let w=()=>(0,a.jsx)(d.Z,{className:"!p-0",children:(0,a.jsx)("div",{className:"w-full max-w-2xl p-2 mx-auto rounded-2xl",children:v.map((e,t)=>(0,a.jsx)("div",{className:"mb-5",children:(0,a.jsx)(p.p,{children:t=>{let{open:s}=t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(p.p.Button,{className:"flex items-center justify-between w-full px-4 py-4 text-lg text-left font-bold text-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-[#5E548E] dark:text-gray-300",children:[(0,a.jsx)("span",{children:e.question}),(0,a.jsx)(y,{className:"".concat(s?"transform rotate-180":""," w-5 h-5 text-indigo-500")})]}),(0,a.jsx)(p.p.Panel,{className:"px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300",children:e.answer})]})}})},e.question))})}),v=[{question:"What is Cyber League?",answer:"Cyber League is the Next Generation Capture The Flag competition with 2 qualifying and 3 playoffs rounds. The top 8 teams that emerge from the first four rounds will be qualified to take part in the playoffs round. The teams will face off 3 different themed competition that will determine the ultimate winner."},{question:"When will Cyber League Season 2 Starts?",answer:"Hang out and find out!"},{question:"How many rounds will Cyber League Season 2 have?",answer:"Cyber League Season 2 will have 1 Major, 1 Playoffs, 1 Semi-Finals and 1 Finals"},{question:"Who is eligible for Cyber League?",answer:"Cyber League is open to individuals who are 18 years of age or older or those who possess legal parental or guardian consent and are fully able and competent to enter into the terms, conditions, obligations, and representations herein."},{question:"How many can register in a team?",answer:"You can register up to 3 persons in a team."},{question:"What if I cant find a team?",answer:"You can register seperately and we will help you find a team."},{question:"Where can I find help?",answer:"Join our discord for support or email us at support@cyberleague.co."}],N=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:"Nextly - Free Nextjs & TailwindCSS Landing Page Template"}),(0,a.jsx)("meta",{name:"description",content:"Nextly is a free landing page template built with next.js & Tailwind CSS"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)(h.Z,{}),(0,a.jsx)(o,{}),(0,a.jsx)(m.Z,{pretitle:"DIV0-N0H4TS",title:"Cyber League Season 2",children:"Let The League Begins."}),(0,a.jsx)(f,{name:"Major 1",date:"28 September 2024",date1:"2024-09-28",format:"Jeopardy",prize1:"HTB",prize2:"HTB",prize3:"HTB"}),(0,a.jsx)(f,{name:"Playoffs",date:"8 November 2024",date1:"2024-11-08",format:"Jeopardy",prize1:"HTB",prize2:"HTB",prize3:"HTB"}),(0,a.jsx)(m.Z,{title:"Cyber League Mechanic"}),(0,a.jsx)(j,{}),(0,a.jsx)(m.Z,{pretitle:"FAQ",title:"Frequently Asked Questions"}),(0,a.jsx)(w,{}),(0,a.jsx)(b.Z,{})]});var k=N}},function(e){e.O(0,[977,741,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);