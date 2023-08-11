"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1879],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),y=a,f=p["".concat(i,".").concat(y)]||p[y]||m[y]||o;return t?n.createElement(f,s(s({ref:r},c),{},{components:t})):n.createElement(f,s({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=y;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},6329:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=t(7462),a=(t(7294),t(3905));const o={},s="mergeArrays",l={unversionedId:"features/mergeArrays",id:"features/mergeArrays",title:"mergeArrays",description:"Merge two arrays into one.",source:"@site/docs/features/mergeArrays.md",sourceDirName:"features",slug:"/features/mergeArrays",permalink:"/lulinjs/docs/features/mergeArrays",draft:!1,editUrl:"https://github.com/WrathChaos/lulinjs/tree/main/docs/features/mergeArrays.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"isNotEmptyArray",permalink:"/lulinjs/docs/features/isNotEmptyArray"},next:{title:"removeAllDuplicates",permalink:"/lulinjs/docs/features/removeAllDuplicates"}},i={},u=[{value:"Usage",id:"usage",level:2}],c={toc:u};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mergearrays"},"mergeArrays"),(0,a.kt)("p",null,"Merge two arrays into one."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { mergeArrays } from "lulinjs";\n\nconst result = mergeArrays([1,3,5], [2,4,6]);\n// Output: [1,2,3,4,5,6]\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"import {mergeArrays} from \"./lulin\";\n\nfunction MergeArrays() {\n    return (\n        <div>\n            <h4>Result:</h4>\n            <h2 style={{color: 'rgb(102, 212, 189)'}}>\n                {mergeArrays([1,3,5], [2,4,6])}\n            </h2>\n        </div>\n    );\n}\n")))}p.isMDXComponent=!0}}]);