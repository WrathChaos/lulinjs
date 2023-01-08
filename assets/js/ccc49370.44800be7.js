"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[103],{5203:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var a=n(7294),r=n(6010),l=n(1944),o=n(5281),i=n(9460),s=n(9058),c=n(390),m=n(7462),d=n(5999),u=n(2244);function g(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(u.Z,(0,m.Z)({},n,{subLabel:a.createElement(d.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(u.Z,(0,m.Z)({},t,{subLabel:a.createElement(d.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function f(){const{assets:e,metadata:t}=(0,i.C)(),{title:n,description:r,date:o,tags:s,authors:c,frontMatter:m}=t,{keywords:d}=m,u=e.image??m.image;return a.createElement(l.d,{title:n,description:r,keywords:d,image:u},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:o}),c.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:c.map((e=>e.url)).filter(Boolean).join(",")}),s.length>0&&a.createElement("meta",{property:"article:tag",content:s.map((e=>e.label)).join(",")}))}var p=n(9407);function h(e){let{sidebar:t,children:n}=e;const{metadata:r,toc:l}=(0,i.C)(),{nextItem:o,prevItem:m,frontMatter:d}=r,{hide_table_of_contents:u,toc_min_heading_level:f,toc_max_heading_level:h}=d;return a.createElement(s.Z,{sidebar:t,toc:!u&&l.length>0?a.createElement(p.Z,{toc:l,minHeadingLevel:f,maxHeadingLevel:h}):void 0},a.createElement(c.Z,null,n),(o||m)&&a.createElement(g,{nextItem:o,prevItem:m}))}function v(e){const t=e.content;return a.createElement(i.n,{content:e.content,isBlogPostPage:!0},a.createElement(l.FG,{className:(0,r.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},a.createElement(f,null),a.createElement(h,{sidebar:e.sidebar},a.createElement(t,null))))}},9407:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7462),r=n(7294),l=n(6010),o=n(3743);const i="tableOfContents_bqdL";function s(e){let{className:t,...n}=e;return r.createElement("div",{className:(0,l.Z)(i,"thin-scrollbar",t)},r.createElement(o.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(7462),r=n(7294),l=n(6668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):a.push(r)})),a}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>s(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function m(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,r.useRef)(void 0),n=m();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let r=t;r<=n;r+=1)a.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),s=c(i,{anchorTopOffset:n.current}),m=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===m)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:a,isChild:l}=e;return t.length?r.createElement("ul",{className:l?void 0:n},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const g=r.memo(u);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:m,maxHeadingLevel:u,...f}=e;const p=(0,l.L)(),h=m??p.tableOfContents.minHeadingLevel,v=u??p.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,r.useMemo)((()=>i({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:h,maxHeadingLevel:v});return d((0,r.useMemo)((()=>{if(s&&c)return{linkClassName:s,linkActiveClassName:c,minHeadingLevel:h,maxHeadingLevel:v}}),[s,c,h,v])),r.createElement(g,(0,a.Z)({toc:b,className:n,linkClassName:s},f))}},2313:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const r={React:a,...a,diffDatesByDay:(e,t)=>Math.floor(Math.abs(e-t)/864e5),capitalize:e=>e.toUpperCase(),diffArrays:(e,t)=>e.filter((e=>!t.includes(e))),diffArraysWithId:(e,t)=>e&&t&&e.filter((e=>!t.find((t=>e.id===t.id&&t.id)))),generateRandomNumber:(e,t)=>Math.floor(Math.random()*(t-e+1)+e),capitalizeFirstLetter:e=>e&&e.length?e.charAt(0).toUpperCase()+e.slice(1):e,capitalizeAllStartingWords:function(e,t){return void 0===t&&(t=!1),(t?e.toLowerCase():e).replace(/(?:^|\s|[''({])+\S/g,(e=>e.toUpperCase()))},isBlankString:e=>!e||0===e.length||/^\s*$/.test(e),generateRandomString:()=>Math.random().toString(36).slice(2),generateRandomHexColor:()=>`#${Math.floor(16777215*Math.random()).toString(16).padEnd(6,"0")}`,generateRandomBoolean:()=>Math.random()>=.5,coinflip:()=>Math.random()>=.5,isEven:e=>e%2==0,removeAllDuplicates:e=>[...new Set(e)],isArray:e=>Array.isArray(e),mergeArrays:(e,t)=>[...e,...t],isNotEmptyArray:e=>Array.isArray(e)&&e.length>0,safelyParseJson:e=>{try{return JSON.parse(e)}catch{return e}},isEmptyObj:e=>0===Reflect.ownKeys(e).length&&e.constructor===Object,shuffleArray:e=>e.sort((()=>.5-Math.random())),convertSnakeToCamelCase:e=>e.replace(/([-_][a-z])/g,(e=>e.toUpperCase().replace("-","").replace("_",""))),convertRGBToHexColor:(e,t,n)=>"#"+((1<<24)+(e<<16)+(t<<8)+n).toString(16).slice(1),getMinMaxOfArray:e=>[Math.min(...e),Math.max(...e)],sleep:e=>new Promise((t=>setTimeout(t,e))),toObj:e=>Object.fromEntries(e),getUnion:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return[...new Set(t.flat())]},partition:(e,t)=>e.reduce(((e,n)=>(e[t(n)?0:1].push(n),e)),[[],[]])}}}]);