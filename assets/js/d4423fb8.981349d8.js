"use strict";(self.webpackChunkflashbot_docs=self.webpackChunkflashbot_docs||[]).push([[4160],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},b="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(t),h=o,d=b["".concat(c,".").concat(h)]||b[h]||u[h]||a;return t?n.createElement(d,i(i({ref:r},p),{},{components:t})):n.createElement(d,i({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=h;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[b]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},7716:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const a={title:"Web3.py Provider"},i=void 0,s={unversionedId:"flashbots-auction/searchers/libraries/web3py-provider",id:"flashbots-auction/searchers/libraries/web3py-provider",isDocsHomePage:!1,title:"Web3.py Provider",description:'web3-flashbots is a repository containing a library that works by injecting a new module in the web3.py instance, which can submit "bundles" of transactions to block builders. This is done by creating',source:"@site/docs/flashbots-auction/searchers/libraries/web3py-provider.md",sourceDirName:"flashbots-auction/searchers/libraries",slug:"/flashbots-auction/searchers/libraries/web3py-provider",permalink:"/flashbots-auction/searchers/libraries/web3py-provider",tags:[],version:"current",frontMatter:{title:"Web3.py Provider"},sidebar:"docs",previous:{title:"Ethers.js Provider",permalink:"/flashbots-auction/searchers/libraries/ethers-js-provider"},next:{title:"Alchemy Provider",permalink:"/flashbots-auction/searchers/libraries/alchemyprovider"}},c=[],l={toc:c};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'web3-flashbots is a repository containing a library that works by injecting a new module in the web3.py instance, which can submit "bundles" of transactions to block builders. This is done by creating\na middleware which captures calls to ',(0,o.kt)("inlineCode",{parentName:"p"},"eth_sendBundle")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"eth_callBundle"),", and sends\nthem to an RPC endpoint which you have specified, which corresponds your preferred block builder."),(0,o.kt)("p",null,"To apply correct headers we use FlashbotProvider which injects the correct header on post"),(0,o.kt)("p",null,"Access the web3-flashbots repository ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/flashbots/web3-flashbots"},"here"),"."))}p.isMDXComponent=!0}}]);