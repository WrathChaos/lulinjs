"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4719],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var f=n.createContext({}),l=function(e){var t=n.useContext(f),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(f.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,f=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),y=a,d=u["".concat(f,".").concat(y)]||u[y]||p[y]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var s={};for(var f in t)hasOwnProperty.call(t,f)&&(s[f]=t[f]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},1212:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={},i="diffDatesByDay",s={unversionedId:"features/diffDatesByDay",id:"features/diffDatesByDay",title:"diffDatesByDay",description:"Difference between two dates in days.",source:"@site/docs/features/diffDatesByDay.md",sourceDirName:"features",slug:"/features/diffDatesByDay",permalink:"/lulinjs/docs/features/diffDatesByDay",draft:!1,editUrl:"https://github.com/WrathChaos/lulinjs/tree/main/docs/features/diffDatesByDay.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"diffArraysWithId",permalink:"/lulinjs/docs/features/diffArraysWithId"},next:{title:"generateRandomBoolean",permalink:"/lulinjs/docs/features/generateRandomBoolean"}},f={},l=[{value:"Usage",id:"usage",level:2}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"diffdatesbyday"},"diffDatesByDay"),(0,a.kt)("p",null,"Difference between two dates in days."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { diffDatesByDay } from "lulinjs";\n\nconst result = diffDatesByDay(1673493926000, 1673017526000);\n// Output: 5\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function DiffDatesByDay(props) {\n    return (\n        <div>\n            <h4>Result:</h4>\n            <h2 style={{color:'rgb(102, 212, 189)'}}>\n                {diffDatesByDay(1673493926000, 1673017526000)}\n            </h2>\n        </div>\n    );\n}\n")))}u.isMDXComponent=!0}}]);