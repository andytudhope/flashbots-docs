"use strict";(self.webpackChunkflashbot_docs=self.webpackChunkflashbot_docs||[]).push([[875],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>b});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,b=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return t?r.createElement(b,s(s({ref:n},d),{},{components:t})):r.createElement(b,s({ref:n},d))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2194:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={title:"Understanding Bundles"},s=void 0,i={unversionedId:"flashbots-auction/searchers/advanced/understanding-bundles",id:"flashbots-auction/searchers/advanced/understanding-bundles",isDocsHomePage:!1,title:"Understanding Bundles",description:"Searchers use Flashbots to submit bundles to block builders for inclusion in blocks. Bundles are one or more transactions that are grouped together and executed in the order they are provided. In addition to the searcher's transaction(s) a bundle can also potentially contain other users' pending transactions from the mempool, and bundles can target specific blocks for inclusion as well. Here's an example:",source:"@site/docs/flashbots-auction/searchers/advanced/understanding-bundles.mdx",sourceDirName:"flashbots-auction/searchers/advanced",slug:"/flashbots-auction/searchers/advanced/understanding-bundles",permalink:"/flashbots-auction/searchers/advanced/understanding-bundles",tags:[],version:"current",frontMatter:{title:"Understanding Bundles"},sidebar:"docs",previous:{title:"FAQ",permalink:"/flashbots-auction/searchers/faq"},next:{title:"coinbase.transfer()",permalink:"/flashbots-auction/searchers/advanced/coinbase-payment"}},c=[],l={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Searchers use Flashbots to submit bundles to block builders for inclusion in blocks. Bundles are one or more transactions that are grouped together and executed in the order they are provided. In addition to the searcher's transaction(s) a bundle can also potentially contain other users' pending transactions from the mempool, and bundles can target specific blocks for inclusion as well. Here's an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const blockNumber = await provider.getBlockNumber()\nconst minTimestamp = (await provider.getBlock(blockNumber)).timestamp\nconst maxTimestamp = minTimestamp + 120\nconst signedBundle = flashbotsProvider.signBundle(\n  [\n    {\n      signedTransaction: SIGNED_ORACLE_UPDATE_FROM_PENDING_POOL // serialized signed transaction hex\n    },\n    {\n      signer: wallet, // ethers signer\n      transaction: transaction // ethers populated transaction object\n    }\n  ])\nconst bundleReceipt = await flashbotsProvider.sendRawBundle(\n  signedBundle, // bundle we signed above\n  targetBlockNumber, // block number at which this bundle is valid\n  {\n    minTimestamp, // optional minimum timestamp at which this bundle is valid (inclusive)\n    maxTimestamp, // optional maximum timestamp at which this bundle is valid (inclusive)\n    revertingTxHashes: [tx1, tx2] // optional list of transaction hashes allowed to revert. Without specifying here, any revert invalidates the entire bundle.\n  })\n")),(0,a.kt)("p",null,"In the above example we've constructed a bundle that includes our transaction (transaction) and a transaction from the mempool: SIGNED_ORACLE_UPDATE_FROM_PENDING_POOL."))}d.isMDXComponent=!0}}]);