"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3085],{4247:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var a=n(7294),r=n(6010),l=n(1944),i=n(5281),o=n(8765),c=n(9871),s=n(9407);const m="mdxPageWrapper_j9I6";function d(e){const{content:t}=e,{metadata:{title:n,description:d,frontMatter:u}}=t,{wrapperClassName:f,hide_table_of_contents:g}=u;return a.createElement(l.FG,{className:(0,r.Z)(f??i.k.wrapper.mdxPages,i.k.page.mdxPage)},a.createElement(l.d,{title:n,description:d}),a.createElement(o.Z,null,a.createElement("main",{className:"container container--fluid margin-vert--lg"},a.createElement("div",{className:(0,r.Z)("row",m)},a.createElement("div",{className:(0,r.Z)("col",!g&&"col--8")},a.createElement("article",null,a.createElement(c.Z,null,a.createElement(t,null)))),!g&&t.toc.length>0&&a.createElement("div",{className:"col col--2"},a.createElement(s.Z,{toc:t.toc,minHeadingLevel:u.toc_min_heading_level,maxHeadingLevel:u.toc_max_heading_level}))))))}},9407:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),r=n(7294),l=n(6010),i=n(3743);const o="tableOfContents_bqdL";function c(e){let{className:t,...n}=e;return r.createElement("div",{className:(0,l.Z)(o,"thin-scrollbar",t)},r.createElement(i.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(7462),r=n(7294),l=n(6668);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):a.push(r)})),a}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function s(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>c(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function m(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,r.useRef)(void 0),n=m();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:i}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let r=t;r<=n;r+=1)a.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),c=s(o,{anchorTopOffset:n.current}),m=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===m)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:a,isChild:l}=e;return t.length?r.createElement("ul",{className:l?void 0:n},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const f=r.memo(u);function g(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:u,...g}=e;const v=(0,l.L)(),h=m??v.tableOfContents.minHeadingLevel,p=u??v.tableOfContents.maxHeadingLevel,L=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,r.useMemo)((()=>o({toc:i(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:h,maxHeadingLevel:p});return d((0,r.useMemo)((()=>{if(c&&s)return{linkClassName:c,linkActiveClassName:s,minHeadingLevel:h,maxHeadingLevel:p}}),[c,s,h,p])),r.createElement(f,(0,a.Z)({toc:L,className:n,linkClassName:c},g))}},2313:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const r={React:a,...a,diffDatesByDay:(e,t)=>Math.floor(Math.abs(e-t)/864e5),capitalize:e=>e.toUpperCase(),diffArrays:(e,t)=>e.filter((e=>!t.includes(e))),diffArraysWithId:(e,t)=>e&&t&&e.filter((e=>!t.find((t=>e.id===t.id&&t.id)))),generateRandomNumber:(e,t)=>Math.floor(Math.random()*(t-e+1)+e),capitalizeFirstLetter:e=>e&&e.length?e.charAt(0).toUpperCase()+e.slice(1):e,capitalizeAllStartingWords:function(e,t){return void 0===t&&(t=!1),(t?e.toLowerCase():e).replace(/(?:^|\s|[''({])+\S/g,(e=>e.toUpperCase()))},isBlankString:e=>!e||0===e.length||/^\s*$/.test(e),generateRandomString:()=>Math.random().toString(36).slice(2),generateRandomHexColor:()=>`#${Math.floor(16777215*Math.random()).toString(16).padEnd(6,"0")}`,generateRandomBoolean:()=>Math.random()>=.5,coinflip:()=>Math.random()>=.5,isEven:e=>e%2==0,removeAllDuplicates:e=>[...new Set(e)],isArray:e=>Array.isArray(e),mergeArrays:(e,t)=>[...e,...t],isNotEmptyArray:e=>Array.isArray(e)&&e.length>0,safelyParseJson:e=>{try{return JSON.parse(e)}catch{return e}},isEmptyObj:e=>0===Reflect.ownKeys(e).length&&e.constructor===Object,shuffleArray:e=>e.sort((()=>.5-Math.random())),convertSnakeToCamelCase:e=>e.replace(/([-_][a-z])/g,(e=>e.toUpperCase().replace("-","").replace("_",""))),convertRGBToHexColor:(e,t,n)=>"#"+((1<<24)+(e<<16)+(t<<8)+n).toString(16).slice(1),getMinMaxOfArray:e=>[Math.min(...e),Math.max(...e)],sleep:e=>new Promise((t=>setTimeout(t,e))),toObj:e=>Object.fromEntries(e),getUnion:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return[...new Set(t.flat())]},partition:(e,t)=>e.reduce(((e,n)=>(e[t(n)?0:1].push(n),e)),[[],[]])}}}]);