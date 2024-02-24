"use strict";(()=>{var e={};e.id=701,e.ids=[701],e.modules={7849:e=>{e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{e.exports=require("path")},7310:e=>{e.exports=require("url")},3574:(e,t,s)=>{s.r(t),s.d(t,{GlobalError:()=>a.a,__next_app__:()=>m,originalPathname:()=>p,pages:()=>d,routeModule:()=>u,tree:()=>l});var n=s(5513),r=s(623),i=s(4053),a=s.n(i),o=s(5415),c={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>o[e]);s.d(t,c);let l=["",{children:["speaking",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,1944)),"/Users/yhostc/Project/isnolan/blog/src/app/speaking/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,8212))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,167)),"/Users/yhostc/Project/isnolan/blog/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.bind(s,1945)),"/Users/yhostc/Project/isnolan/blog/src/app/not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,8212))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/yhostc/Project/isnolan/blog/src/app/speaking/page.tsx"],p="/speaking/page",m={require:s,loadChunk:()=>Promise.resolve()},u=new n.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/speaking/page",pathname:"/speaking",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},1944:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d,metadata:()=>l});var n=s(9824),r=s(6551),i=s(5827),a=s(8872);function o({children:e,...t}){return n.jsx(i.$,{...t,children:n.jsx("div",{className:"space-y-16",children:e})})}function c({title:e,description:t,event:s,cta:i,href:a}){return(0,n.jsxs)(r.Z,{as:"article",children:[n.jsx(r.Z.Title,{as:"h3",href:a,children:e}),n.jsx(r.Z.Eyebrow,{decorate:!0,children:s}),n.jsx(r.Z.Description,{children:t}),n.jsx(r.Z.Cta,{children:i})]})}let l={title:"Speaking",description:"I’ve spoken at events all around the world and been interviewed for many podcasts."};function d(){return n.jsx(a.X,{title:"I’ve spoken at events all around the world and been interviewed for many podcasts.",intro:"One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions.",children:(0,n.jsxs)("div",{className:"space-y-20",children:[(0,n.jsxs)(o,{title:"Conferences",children:[n.jsx(c,{href:"#",title:"In space, no one can watch you stream — until now",description:"A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth.",event:"SysConf 2021",cta:"Watch video"}),n.jsx(c,{href:"#",title:"Lessons learned from our first product recall",description:"They say that if you’re not embarassed by your first version, you’re doing it wrong. Well when you’re selling DIY space shuttle kits it turns out it’s a bit more complicated.",event:"Business of Startups 2020",cta:"Watch video"})]}),(0,n.jsxs)(o,{title:"Podcasts",children:[n.jsx(c,{href:"#",title:"Using design as a competitive advantage",description:"How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria.",event:"Encoding Design, July 2022",cta:"Listen to podcast"}),n.jsx(c,{href:"#",title:"Bootstrapping an aerospace company to $17M ARR",description:"The story of how we built one of the most promising space startups in the world without taking any capital from investors.",event:"The Escape Velocity Show, March 2022",cta:"Listen to podcast"}),n.jsx(c,{href:"#",title:"Programming your company operating system",description:"On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation.",event:"How They Work Radio, September 2021",cta:"Listen to podcast"})]})]})})}},6551:(e,t,s)=>{s.d(t,{Z:()=>o});var n=s(9824),r=s(6122),i=s(9378);function a(e){return n.jsx("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",...e,children:n.jsx("path",{d:"M6.75 5.75 9.25 8l-2.5 2.25",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function o({as:e,className:t,children:s}){return n.jsx(e??"div",{className:(0,i.Z)(t,"group relative flex flex-col items-start"),children:s})}o.Link=function({children:e,...t}){return(0,n.jsxs)(n.Fragment,{children:[n.jsx("div",{className:"absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"}),(0,n.jsxs)(r.default,{...t,children:[n.jsx("span",{className:"absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"}),n.jsx("span",{className:"relative z-10",children:e})]})]})},o.Title=function({as:e,href:t,children:s}){return n.jsx(e??"h2",{className:"text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100",children:t?n.jsx(o.Link,{href:t,children:s}):s})},o.Description=function({children:e}){return n.jsx("p",{className:"relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400",children:e})},o.Cta=function({children:e}){return(0,n.jsxs)("div",{"aria-hidden":"true",className:"relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500",children:[e,n.jsx(a,{className:"ml-1 h-4 w-4 stroke-current"})]})},o.Eyebrow=function({as:e,decorate:t=!1,className:s,children:r,...a}){return(0,n.jsxs)(e??"p",{className:(0,i.Z)(s,"relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500",t&&"pl-3.5"),...a,children:[t&&n.jsx("span",{className:"absolute inset-y-0 left-0 flex items-center","aria-hidden":"true",children:n.jsx("span",{className:"h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"})}),r]})}},5827:(e,t,s)=>{s.d(t,{$:()=>i});var n=s(9824),r=s(6510);function i({title:e,children:t}){let s=(0,r.useId)();return n.jsx("section",{"aria-labelledby":s,className:"md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40",children:(0,n.jsxs)("div",{className:"grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4",children:[n.jsx("h2",{id:s,className:"text-sm font-semibold text-zinc-800 dark:text-zinc-100",children:e}),n.jsx("div",{className:"md:col-span-3",children:t})]})})}},8872:(e,t,s)=>{s.d(t,{X:()=>i});var n=s(9824),r=s(4405);function i({title:e,intro:t,children:s}){return(0,n.jsxs)(r.W2,{className:"mt-16 sm:mt-32",children:[(0,n.jsxs)("header",{className:"max-w-2xl",children:[n.jsx("h1",{className:"text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100",children:e}),n.jsx("p",{className:"mt-6 text-base text-zinc-600 dark:text-zinc-400",children:t})]}),s&&n.jsx("div",{className:"mt-16 sm:mt-20",children:s})]})}}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),n=t.X(0,[722,914,944],()=>s(3574));module.exports=n})();