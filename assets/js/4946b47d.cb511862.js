"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8507],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),m=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},s=function(e){var r=m(e.components);return n.createElement(i.Provider,{value:r},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=m(t),d=a,f=c["".concat(i,".").concat(d)]||c[d]||p[d]||o;return t?n.createElement(f,u(u({ref:r},s),{},{components:t})):n.createElement(f,u({ref:r},s))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,u=new Array(o);u[0]=d;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[c]="string"==typeof e?e:a,u[1]=l;for(var m=2;m<o;m++)u[m]=t[m];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8263:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>u,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=t(7462),a=(t(7294),t(3905));const o={},u="generateRandomNumber",l={unversionedId:"features/generateRandomNumber",id:"features/generateRandomNumber",title:"generateRandomNumber",description:"Generate random number",source:"@site/docs/features/generateRandomNumber.md",sourceDirName:"features",slug:"/features/generateRandomNumber",permalink:"/lulinjs/docs/features/generateRandomNumber",draft:!1,editUrl:"https://github.com/WrathChaos/lulinjs/tree/main/docs/features/generateRandomNumber.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"generateRandomHexColor",permalink:"/lulinjs/docs/features/generateRandomHexColor"},next:{title:"generateRandomString",permalink:"/lulinjs/docs/features/generateRandomString"}},i={},m=[{value:"Usage",id:"usage",level:2}],s={toc:m};function c(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"generaterandomnumber"},"generateRandomNumber"),(0,a.kt)("p",null,"Generate random number"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { generateRandomNumber } from "lulinjs";\n\nconst result = generateRandomNumber(0,100)\n// Output: 35 (should number between given two parameters)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function GenerateRandomNumber() {\n    return (\n        <div>\n            <h4>Result:</h4>\n            <h2 style={{color: 'rgb(102, 212, 189)'}}>\n                {generateRandomNumber(0, 100)}\n            </h2>\n        </div>\n    );\n}\n")))}c.isMDXComponent=!0}}]);