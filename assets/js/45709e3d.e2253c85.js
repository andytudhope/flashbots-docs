"use strict";(self.webpackChunkflashbot_docs=self.webpackChunkflashbot_docs||[]).push([[4170],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),l=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=l(r),f=n,m=h["".concat(i,".").concat(f)]||h[f]||u[f]||s;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[h]="string"==typeof e?e:n,o[1]=c;for(var l=2;l<s;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7109:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var a=r(7462),n=(r(7294),r(3905));const s={title:"Searcher Sponsored TX"},o=void 0,c={unversionedId:"flashbots-auction/searchers/example-searchers/searcher-sponsored-tx",id:"flashbots-auction/searchers/example-searchers/searcher-sponsored-tx",isDocsHomePage:!1,title:"Searcher Sponsored TX",description:'searcher-sponsored-tx is a repository that contains a simple Flashbots "searcher" for submitting a transaction from account X, but paying for the transaction from account Y. This is accomplished by submitting a Flashbots transaction bundle, with the first transaction(s) executing from account X, and the last, single transaction calling a contract which verifies the early transactions ran successfully, then pays the validator.',source:"@site/docs/flashbots-auction/searchers/example-searchers/searcher-sponsored-tx.md",sourceDirName:"flashbots-auction/searchers/example-searchers",slug:"/flashbots-auction/searchers/example-searchers/searcher-sponsored-tx",permalink:"/flashbots-auction/searchers/example-searchers/searcher-sponsored-tx",tags:[],version:"current",frontMatter:{title:"Searcher Sponsored TX"},sidebar:"docs",previous:{title:"Simple Arbitrage Bot",permalink:"/flashbots-auction/searchers/example-searchers/simple-arbitrage-bot"},next:{title:"Searcher Minter",permalink:"/flashbots-auction/searchers/example-searchers/searcher-minter"}},i=[],l={toc:i};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'searcher-sponsored-tx is a repository that contains a simple Flashbots "searcher" for submitting a transaction from account X, but paying for the transaction from account Y. This is accomplished by submitting a Flashbots transaction bundle, with the first transaction(s) executing from account X, and the last, single transaction calling a contract which verifies the early transactions ran successfully, then pays the validator.'),(0,n.kt)("p",null,"We hope you will use this repository as an example of how to integrate Flashbots into your own searcher bot. Access the searcher-sponsored-tx repo ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/flashbots/searcher-sponsored-tx"},"here"),"."))}p.isMDXComponent=!0}}]);