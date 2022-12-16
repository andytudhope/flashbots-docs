"use strict";(self.webpackChunkflashbot_docs=self.webpackChunkflashbot_docs||[]).push([[8535],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),u=d(a),c=r,g=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return a?n.createElement(g,o(o({ref:e},s),{},{components:a})):n.createElement(g,o({ref:e},s))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[u]="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4917:(t,e,a)=>{a.r(e),a.d(e,{contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={title:"swaps"},o=void 0,i={unversionedId:"flashbots-data/mev-inspect-py/data/swaps",id:"flashbots-data/mev-inspect-py/data/swaps",isDocsHomePage:!1,title:"swaps",description:"description",source:"@site/docs/flashbots-data/mev-inspect-py/data/swaps.md",sourceDirName:"flashbots-data/mev-inspect-py/data",slug:"/flashbots-data/mev-inspect-py/data/swaps",permalink:"/flashbots-data/mev-inspect-py/data/swaps",tags:[],version:"current",frontMatter:{title:"swaps"},sidebar:"docs",previous:{title:"transfers",permalink:"/flashbots-data/mev-inspect-py/data/transfers"},next:{title:"arbitrages",permalink:"/flashbots-data/mev-inspect-py/data/arbitrages"}},p=[{value:"description",id:"description",children:[]},{value:"fields",id:"fields",children:[]}],d={toc:p};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("p",null,"a ",(0,r.kt)("strong",{parentName:"p"},"swap")," is a swap between two ERC-20 tokens"),(0,r.kt)("h3",{id:"fields"},"fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Column"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Nullable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"created_at"),(0,r.kt)("td",{parentName:"tr",align:null},"timestamp without time zone"),(0,r.kt)("td",{parentName:"tr",align:null},"not null"),(0,r.kt)("td",{parentName:"tr",align:null},"when the entry was added to the database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"block_number"),(0,r.kt)("td",{parentName:"tr",align:null},"numeric"),(0,r.kt)("td",{parentName:"tr",align:null},"not null"),(0,r.kt)("td",{parentName:"tr",align:null},"block number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transaction_hash"),(0,r.kt)("td",{parentName:"tr",align:null},"character varying(66)"),(0,r.kt)("td",{parentName:"tr",align:null},"not null"),(0,r.kt)("td",{parentName:"tr",align:null},"transaction hash")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"trace_address"),(0,r.kt)("td",{parentName:"tr",align:null},"integer[]"),(0,r.kt)("td",{parentName:"tr",align:null},"not null"),(0,r.kt)("td",{parentName:"tr",align:null},"trace address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"abi_name"),(0,r.kt)("td",{parentName:"tr",align:null},"character varying(1024)"),(0,r.kt)("td",{parentName:"tr",align:null},"not null"),(0,r.kt)("td",{parentName:"tr",align:null},"name of the ABI used to decode the swap")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pool_address"),(0,r.kt)("td",{parentName:"tr",align:null},"character varying(256)"),(0,r.kt)("td",{parentName:"tr",align:null},"not null"),(0,r.kt)("td",{parentName:"tr",align:null},"pool address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"from_address"),(0,r.kt)("td",{parentName:"tr",align:null},"character varying(256)"),(0,r.kt)("td",{parentName:"tr",align:null},"not null"),(0,r.kt)("td",{parentName:"tr",align:null},"address where tokens are coming from")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"to_address"),(0,r.kt)("td",{parentName:"tr",align:null},"character varying(256)"),(0,r.kt)("td",{parentName:"tr",align:null},"not null"),(0,r.kt)("td",{parentName:"tr",align:null},"address where swapped tokens are going to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"token_in_address"),(0,r.kt)("td",{parentName:"tr",align:null},"character varying(256)"),(0,r.kt)("td",{parentName:"tr",align:null},"not null"),(0,r.kt)("td",{parentName:"tr",align:null},"address of the token going in")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"token_in_amount"),(0,r.kt)("td",{parentName:"tr",align:null},"numeric"),(0,r.kt)("td",{parentName:"tr",align:null},"not null"),(0,r.kt)("td",{parentName:"tr",align:null},"amount of the token going in")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"token_out_address"),(0,r.kt)("td",{parentName:"tr",align:null},"character varying(256)"),(0,r.kt)("td",{parentName:"tr",align:null},"not null"),(0,r.kt)("td",{parentName:"tr",align:null},"address of the token going out")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"token_out_amount"),(0,r.kt)("td",{parentName:"tr",align:null},"numeric"),(0,r.kt)("td",{parentName:"tr",align:null},"not null"),(0,r.kt)("td",{parentName:"tr",align:null},"amount of the token going out")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"protocol"),(0,r.kt)("td",{parentName:"tr",align:null},"character varying(256)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"protocol")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"error"),(0,r.kt)("td",{parentName:"tr",align:null},"character varying(256)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"error")))))}s.isMDXComponent=!0}}]);