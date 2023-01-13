"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[408],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,g=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(g,l(l({ref:t},p),{},{components:r})):n.createElement(g,l({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4464:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={},l="capitalizeAllStartingWords",o={unversionedId:"features/capitalizeAllStartingWords",id:"features/capitalizeAllStartingWords",title:"capitalizeAllStartingWords",description:"Capitalize the FIRST letter of the given text",source:"@site/docs/features/capitalizeAllStartingWords.md",sourceDirName:"features",slug:"/features/capitalizeAllStartingWords",permalink:"/lulinjs/docs/features/capitalizeAllStartingWords",draft:!1,editUrl:"https://github.com/WrathChaos/lulinjs/tree/main/docs/features/capitalizeAllStartingWords.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"capitalize",permalink:"/lulinjs/docs/features/capitalize"},next:{title:"capitalizeFirstLetter",permalink:"/lulinjs/docs/features/capitalizeFirstLetter"}},s={},c=[{value:"Usage",id:"usage",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"capitalizeallstartingwords"},"capitalizeAllStartingWords"),(0,a.kt)("p",null,"Capitalize the FIRST letter of the given text"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import {capitalizeAllStartingWords} from "lulinjs";\n\nconst capitalized = capitalizeAllStartingWords("hello world! what\'s up");\n// Output: "Hello World! What\'s Up"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function CapitalizeAllStartingWords(props) {\n    return (\n        <div>\n            <h4>Result:</h4>\n            <h2 style={{color:'rgb(102, 212, 189)'}}>{capitalizeAllStartingWords(\"hello world! what's up\")}</h2>\n        </div>\n    );\n}\n")))}u.isMDXComponent=!0}}]);