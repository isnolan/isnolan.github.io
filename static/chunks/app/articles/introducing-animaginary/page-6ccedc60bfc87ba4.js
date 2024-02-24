(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[443,319],{3340:function(e,t,n){Promise.resolve().then(n.t.bind(n,4117,23)),Promise.resolve().then(n.bind(n,2391))},5791:function(e,t,n){"use strict";n.d(t,{F:function(){return o},f:function(){return c}});var r=n(2820);let a=["light","dark"],s="(prefers-color-scheme: dark)",i=(0,r.createContext)(void 0),l={setTheme:e=>{},themes:[]},o=()=>{var e;return null!==(e=(0,r.useContext)(i))&&void 0!==e?e:l},c=e=>(0,r.useContext)(i)?r.createElement(r.Fragment,null,e.children):r.createElement(d,e),u=["light","dark"],d=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:l=!0,enableColorScheme:o=!0,storageKey:c="theme",themes:d=u,defaultTheme:v=l?"system":"light",attribute:g="data-theme",value:b,children:y,nonce:k}=e,[p,w]=(0,r.useState)(()=>h(c,v)),[j,$]=(0,r.useState)(()=>h(c)),C=b?Object.values(b):d,N=(0,r.useCallback)(e=>{let t=e;if(!t)return;"system"===e&&l&&(t=x());let r=b?b[t]:t,s=n?f():null,i=document.documentElement;if("class"===g?(i.classList.remove(...C),r&&i.classList.add(r)):r?i.setAttribute(g,r):i.removeAttribute(g),o){let e=a.includes(v)?v:null,n=a.includes(t)?t:e;i.style.colorScheme=n}null==s||s()},[]),S=(0,r.useCallback)(e=>{w(e);try{localStorage.setItem(c,e)}catch(e){}},[t]),E=(0,r.useCallback)(e=>{$(x(e)),"system"===p&&l&&!t&&N("system")},[p,t]);(0,r.useEffect)(()=>{let e=window.matchMedia(s);return e.addListener(E),E(e),()=>e.removeListener(E)},[E]),(0,r.useEffect)(()=>{let e=e=>{e.key===c&&S(e.newValue||v)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[S]),(0,r.useEffect)(()=>{N(null!=t?t:p)},[t,p]);let T=(0,r.useMemo)(()=>({theme:p,setTheme:S,forcedTheme:t,resolvedTheme:"system"===p?j:p,themes:l?[...d,"system"]:d,systemTheme:l?j:void 0}),[p,S,t,j,l,d]);return r.createElement(i.Provider,{value:T},r.createElement(m,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:l,enableColorScheme:o,storageKey:c,themes:d,defaultTheme:v,attribute:g,value:b,children:y,attrs:C,nonce:k}),y)},m=(0,r.memo)(e=>{let{forcedTheme:t,storageKey:n,attribute:i,enableSystem:l,enableColorScheme:o,defaultTheme:c,value:u,attrs:d,nonce:m}=e,h="system"===c,f="class"===i?`var d=document.documentElement,c=d.classList;c.remove(${d.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${i}',s='setAttribute';`,x=o?a.includes(c)&&c?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${c}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],r=u?u[e]:e,s=t?e+"|| ''":`'${r}'`,l="";return o&&n&&!t&&a.includes(e)&&(l+=`d.style.colorScheme = '${e}';`),"class"===i?l+=t||r?`c.add(${s})`:"null":r&&(l+=`d[s](n,${s})`),l},g=t?`!function(){${f}${v(t)}}()`:l?`!function(){try{${f}var e=localStorage.getItem('${n}');if('system'===e||(!e&&${h})){var t='${s}',m=window.matchMedia(t);if(m.media!==t||m.matches){${v("dark")}}else{${v("light")}}}else if(e){${u?`var x=${JSON.stringify(u)};`:""}${v(u?"x[e]":"e",!0)}}${h?"":"else{"+v(c,!1,!1)+"}"}${x}}catch(e){}}()`:`!function(){try{${f}var e=localStorage.getItem('${n}');if(e){${u?`var x=${JSON.stringify(u)};`:""}${v(u?"x[e]":"e",!0)}}else{${v(c,!1,!1)};}${x}}catch(t){}}();`;return r.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:g}})},()=>!0),h=(e,t)=>{let n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t},f=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},x=e=>(e||(e=window.matchMedia(s)),e.matches?"dark":"light")},5609:function(e,t,n){"use strict";var r=n(465);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}})},4512:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return r}});let r=n(3280)._(n(2820)).default.createContext(null)},4479:function(e,t,n){"use strict";n.r(t),n.d(t,{AppContext:function(){return o},Providers:function(){return c}});var r=n(9506),a=n(2820),s=n(5609),i=n(5791);function l(){let{resolvedTheme:e,setTheme:t}=(0,i.F)();return(0,a.useEffect)(()=>{let n=window.matchMedia("(prefers-color-scheme: dark)");function r(){e===(n.matches?"dark":"light")&&t("system")}return r(),n.addEventListener("change",r),()=>{n.removeEventListener("change",r)}},[e,t]),null}let o=(0,a.createContext)({});function c(e){var t;let n,{children:c}=e,u=(t=(0,s.usePathname)(),n=(0,a.useRef)(),(0,a.useEffect)(()=>{n.current=t},[t]),n.current);return(0,r.jsx)(o.Provider,{value:{previousPathname:u},children:(0,r.jsxs)(i.f,{attribute:"class",disableTransitionOnChange:!0,children:[(0,r.jsx)(l,{}),c]})})}},2391:function(e,t,n){"use strict";n.r(t),n.d(t,{ArticleLayout:function(){return d}});var r=n(9506),a=n(2820),s=n(5609),i=n(4479),l=n(6720),o=n(4460);function c(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,o.Z)(t,"prose dark:prose-invert"),...n})}function u(e){return(0,r.jsx)("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",...e,children:(0,r.jsx)("path",{d:"M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function d(e){var t;let{article:n,children:o}=e,d=(0,s.useRouter)(),{previousPathname:m}=(0,a.useContext)(i.AppContext);return(0,r.jsx)(l.W2,{className:"mt-16 lg:mt-32",children:(0,r.jsx)("div",{className:"xl:relative",children:(0,r.jsxs)("div",{className:"mx-auto max-w-2xl",children:[m&&(0,r.jsx)("button",{type:"button",onClick:()=>d.back(),"aria-label":"Go back to articles",className:"group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20",children:(0,r.jsx)(u,{className:"h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"})}),(0,r.jsxs)("article",{children:[(0,r.jsxs)("header",{className:"flex flex-col",children:[(0,r.jsx)("h1",{className:"mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100",children:n.title}),(0,r.jsxs)("time",{dateTime:n.date,className:"order-first flex items-center text-base text-zinc-400 dark:text-zinc-500",children:[(0,r.jsx)("span",{className:"h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"}),(0,r.jsx)("span",{className:"ml-3",children:(t=n.date,new Date(`${t}T00:00:00Z`).toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}))})]})]}),(0,r.jsx)(c,{className:"mt-8","data-mdx-content":!0,children:o})]})]})})})}},6720:function(e,t,n){"use strict";n.d(t,{W2:function(){return o}});var r=n(9506),a=n(2820),s=n(4460);let i=(0,a.forwardRef)(function(e,t){let{className:n,children:a,...i}=e;return(0,r.jsx)("div",{ref:t,className:(0,s.Z)("sm:px-8",n),...i,children:(0,r.jsx)("div",{className:"mx-auto w-full max-w-7xl lg:px-8",children:a})})}),l=(0,a.forwardRef)(function(e,t){let{className:n,children:a,...i}=e;return(0,r.jsx)("div",{ref:t,className:(0,s.Z)("relative px-4 sm:px-8 lg:px-12",n),...i,children:(0,r.jsx)("div",{className:"mx-auto max-w-2xl lg:max-w-5xl",children:a})})}),o=(0,a.forwardRef)(function(e,t){let{children:n,...a}=e;return(0,r.jsx)(i,{ref:t,...a,children:(0,r.jsx)(l,{children:n})})})},4460:function(e,t,n){"use strict";t.Z=function(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=function e(t){var n,r,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t){if(Array.isArray(t)){var s=t.length;for(n=0;n<s;n++)t[n]&&(r=e(t[n]))&&(a&&(a+=" "),a+=r)}else for(r in t)t[r]&&(a&&(a+=" "),a+=r)}return a}(e))&&(r&&(r+=" "),r+=t);return r}}},function(e){e.O(0,[117,512,184,744],function(){return e(e.s=3340)}),_N_E=e.O()}]);