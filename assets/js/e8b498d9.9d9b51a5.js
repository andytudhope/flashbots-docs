"use strict";(self.webpackChunkflashbot_docs=self.webpackChunkflashbot_docs||[]).push([[6553],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(a),u=n,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||i;return a?r.createElement(m,o(o({ref:t},p),{},{components:a})):r.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9276:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const i={title:"Overview"},o=void 0,s={unversionedId:"flashbots-auction/overview",id:"flashbots-auction/overview",isDocsHomePage:!1,title:"Overview",description:"Flashbots Auction is a permissionless, transparent, and fair ecosystem for efficient MEV extraction and frontrunning protection which preserves the ideals of Ethereum. Flashbots Auction provides a private communication channel between Ethereum users and validators for efficiently communicating preferred transaction order within a block.",source:"@site/docs/flashbots-auction/overview.mdx",sourceDirName:"flashbots-auction",slug:"/flashbots-auction/overview",permalink:"/flashbots-auction/overview",tags:[],version:"current",frontMatter:{title:"Overview"},sidebar:"docs",previous:{title:"Code of Conduct",permalink:"/code-of-conduct"},next:{title:"Quick Start",permalink:"/flashbots-auction/searchers/quick-start"}},l=[{value:"Why Flashbots Auction?",id:"why-flashbots-auction",children:[]},{value:"Timeline",id:"timeline",children:[]},{value:"How does it work?",id:"how-does-it-work",children:[]},{value:"Roadmap",id:"roadmap",children:[]},{value:"Technical Architecture",id:"technical-architecture",children:[{value:"Searchers",id:"searchers",children:[]},{value:"Block Builders",id:"block-builders",children:[]},{value:"Relays",id:"relays",children:[]},{value:"Validators",id:"validators",children:[]}]},{value:"Trust Assumptions",id:"trust-assumptions",children:[]}],c={toc:l};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Flashbots Auction is a permissionless, transparent, and fair ecosystem for efficient MEV extraction and frontrunning protection which preserves the ideals of Ethereum. Flashbots Auction provides a private communication channel between Ethereum users and validators for efficiently communicating preferred transaction order within a block."),(0,n.kt)("p",null,"Flashbots Auction started with ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/flashbots/mev-geth"},"mev-geth"),", a patch on top of the go-ethereum client, along with the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/flashbots/mev-relay-js"},"mev-relay"),", a transaction bundle relayer."),(0,n.kt)("p",null,"In PoS Ethereum, the Flashbots Auction is built on ",(0,n.kt)("a",{parentName:"p",href:"https://boost.flashbots.net/"},"mev-boost"),", an implementation of proposer-builder separation for Ethereum."),(0,n.kt)("h2",{id:"why-flashbots-auction"},"Why Flashbots Auction?"),(0,n.kt)("p",null,"Throughout the second half of 2020 and begining of 2021, a spike in Ethereum usage has revealed a set of negative externalities brought by MEV. These include network congestion (i.e. p2p network load) and chain congestion (i.e. block space usage) caused by inefficient communication between PGA bot operators and (PoW) miners for transaction order preference. These negative externalities create a deadweight loss which is shouldered by regular Ethereum users though high gas price volatility and artificially scarce blockspace."),(0,n.kt)("p",null,"The incentives around MEV extraction pose an existential risk to Ethereum consensus security due to the incentivization of chain history re-orgs for extraction of past MEV (e.g. through ",(0,n.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/1904.05234.pdf"},"time-bandit attacks"),") and incentivization of transaction routing centralization for privacy, low latency, and ordering control. These risks are considered to be existential for Ethereum as they undermine the principles of finality and permissionlessness."),(0,n.kt)("p",null,"We have observed and are concerned about the active development of permissioned and exclusive transaction routing infrastructure as it holds the potential to erode the neutrality, transparency, decentralization, and fairness of Ethereum today. Flashbots Auction is an open-sourced, democratic, and credibly neutral alternative which aims to mitigate the aforementioned negative externalities and existential risks."),(0,n.kt)("h2",{id:"timeline"},"Timeline"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"July 2020: Formation of MEV-Ship Research Collective."),(0,n.kt)("li",{parentName:"ul"},"November 2020: Formation of Flashbots Research Organization and proposal of ",(0,n.kt)("a",{parentName:"li",href:"https://ethresear.ch/t/flashbots-frontrunning-the-mev-crisis/8251"},"Flashbots Auction architecture"),"."),(0,n.kt)("li",{parentName:"ul"},"January 2021: Flashbots Auction Alpha (v0.1) made available for miners and searchers to adopt."),(0,n.kt)("li",{parentName:"ul"},"May 2021: ",(0,n.kt)("a",{parentName:"li",href:"/flashbots-auction/releases/alpha-v0.2"},"Flashbots Auction Alpha (v0.2)")," made available for miners and searchers to adopt."),(0,n.kt)("li",{parentName:"ul"},"August 2021: ",(0,n.kt)("a",{parentName:"li",href:"/flashbots-auction/releases/alpha-v0.3"},"Flashbots Auction Alpha (v0.3)")," made available for miners and searchers to adopt."),(0,n.kt)("li",{parentName:"ul"},"September 2021: ",(0,n.kt)("a",{parentName:"li",href:"/flashbots-auction/releases/alpha-v0.4"},"Flashbots Auction Alpha (v0.4)")," made available for miners and searchers to adopt."),(0,n.kt)("li",{parentName:"ul"},"February 2022: ",(0,n.kt)("a",{parentName:"li",href:"/flashbots-auction/releases/alpha-v0.5"},"Flashbots Auction Alpha (v0.5)")," made available for miners and searchers to adopt."),(0,n.kt)("li",{parentName:"ul"},"February, 2022: ",(0,n.kt)("a",{parentName:"li",href:"/flashbots-auction/releases/alpha-v0.6"},"Flashbots Auction Alpha (v0.6)")," made available for miners and searchers to adopt.")),(0,n.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,n.kt)("p",null,'Flashbots Auction provides a private transaction pool + a sealed bid blockspace auction mechanism which allows block proposers (validators; previously "miners" in PoW) to trustlessly outsource the work of finding optimal block construction.'),(0,n.kt)("p",null,"In the regular Ethereum transaction pool, users broadcast transactions to the public peer-to-peer network and specify a gas price which indicates how much they are willing to pay for each unit of computation on the ethereum chain. Block builders receive these transactions, order them by gas price, and use a greedy algorithm to produce a block which attempts to maximise the value received through transaction fees. This mechanism is a mix between an ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/English_auction"},"English auction")," and an ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/All-pay_auction"},"all-pay auction")," where bidding for blockspace is performed in the open, the top bidder captures the opportunity, and all participants incur a cost."),(0,n.kt)("p",null,"Here are the key issues with this mechanism:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"the open nature of the regular transaction pool causes bidding wars for blockspace which create unnecessary p2p network load and volatility in gas prices, as well as disadvantages less sophisticated network participants who do not have access to advanced bidding strategies"),(0,n.kt)("li",{parentName:"ol"},'the all-pay nature of the auction causes failed bids to revert on chain, thus unnecessarily consuming blockspace and causing bidders to underprice their bids due to execution risk, ultimately leading to artificial blockspace scarcity and lower validator (previously "miner") revenues'),(0,n.kt)("li",{parentName:"ol"},"the reliance on gasPrice makes it impossible for bidders to express granular ordering preferences as they are restricted to bidding for the top position in the block, this leads to alternative strategies like spam to increase likelihood of winning thus further increasing deadweight loss")),(0,n.kt)("p",null,"Instead, the Flashbots Auction infrastructure uses a ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/First-price_sealed-bid_auction"},"first-price sealed-bid auction")," which allows users to privately communicate their bid and granular transaction order preference without paying for failed bids. This mechanism maximizes validator payoffs, while providing an efficient venue for price discovery on the value of a given MEV opportunity. Crucially, this mechanism eliminates frontrunning vulnerabilities."),(0,n.kt)("h2",{id:"roadmap"},"Roadmap"),(0,n.kt)("p",null,"The Flashbots team is taking an iterative approach to decentralizing the Flashbots Auction architecture. As mentioned in our initial ",(0,n.kt)("a",{parentName:"p",href:"https://ethresear.ch/t/flashbots-frontrunning-the-mev-crisis/8251"},"ethresearch post"),", there remain some key research questions to be answered."),(0,n.kt)("p",null,"Ultimately, the design goals are the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Pre-trade privacy"),": implies transactions only become publicly known after they have been included in a block. This excludes intermediaries such as relays & block builders."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Failed trade privacy"),": implies losing bids are never included in a block, thus never exposed to the public."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Efficiency"),": implies MEV extraction is performed without causing unnecessary network or chain congestion."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Bundle merging"),": implies it is possible to merge multiple incoming bundles without conflict."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Finality protection"),": implies it is impractical for Flashbots blocks containing Flashbots bundles to be modified once propagated to the network. This would protect against time-bandit chain re-org attacks."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Complete privacy"),": implies intermediaries like relays and validators cannot observe the content of transactions until included on chain."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Permissionless"),": implies there are no trusted intermediaries which can censor transactions.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Stage"),(0,n.kt)("th",{parentName:"tr",align:"center"},"PGA"),(0,n.kt)("th",{parentName:"tr",align:"center"},"DarkPool"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u26a1\ud83e\udd16 v0.1"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u26a1\ud83e\udd16 v0.2"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u26a1\ud83e\udd16 v0.3"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u26a1\ud83e\udd16 v0.4"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u26a1\ud83e\udd16 v1.0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Pre-trade privacy"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Failed trade privacy"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Efficiency"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Bundle merging"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Finality protection"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Complete privacy"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Permissionless"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")))),(0,n.kt)("h2",{id:"technical-architecture"},"Technical Architecture"),(0,n.kt)("p",null,"The Flashbots Auction architecture proposes a network with three distinct parties who specialize in performing a subset of the work required for sustaining this communication channel. Block builders are responsible for building full blocks which validators will propose."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Auction Architecture",src:a(2165).Z}))),(0,n.kt)("p",null,"Flashbots Auction introduces a new ",(0,n.kt)("inlineCode",{parentName:"p"},"eth_sendBundle"),' RPC which standardizes the message format in the communication channel. This message is called a "Flashbots Bundle".'),(0,n.kt)("p",null,"The bundle includes an array of arbitrary signed Ethereum transactions along with some metadata describing under what conditions these transactions should be included."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "eth_sendBundle",\n  "params": [\n    {\n      txs,               // Array[String], A list of signed transactions to execute in an atomic bundle\n      blockNumber,       // String, a hex encoded block number for which this bundle is valid on\n      minTimestamp,      // (Optional) Number, the minimum timestamp for which this bundle is valid, in seconds since the unix epoch\n      maxTimestamp,      // (Optional) Number, the maximum timestamp for which this bundle is valid, in seconds since the unix epoch\n      revertingTxHashes, // (Optional) Array[String], A list of tx hashes that are allowed to revert\n    }\n  ]\n}\n')),(0,n.kt)("h3",{id:"searchers"},"Searchers"),(0,n.kt)("p",null,"Searchers are Ethereum users who, for whatever reason, prefer to use the Flashbots private transaction pool over the regular p2p transaction pool. These users monitor the state of the chain and send bundles to relayers."),(0,n.kt)("p",null,"Typically, searchers will be one of the following types:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Ethereum bot operators looking for fast, and risk free access to blockspace (for example, arbitrage and liquidation bots)"),(0,n.kt)("li",{parentName:"ol"},"Ethereum users looking for frontrunning protection on their transactions (for example, Uniswap traders)"),(0,n.kt)("li",{parentName:"ol"},"Ethereum Dapps with advanced use cases like account abstraction or gasless transactions")),(0,n.kt)("div",{className:"med caption-img"},(0,n.kt)("p",null,"  ",(0,n.kt)("img",{alt:"Searcher Architecture",src:a(7646).Z})),(0,n.kt)("p",null,"  Searchers create bundles with information from various sources and send them to a block builder.")),(0,n.kt)("p",null,"By submitting bundles directly to block builders instead of through the p2p network, searchers obtain ",(0,n.kt)("inlineCode",{parentName:"p"},"Pre-trade privacy")," as their transactions cannot be seen by the rest of the network. The searchers express their bids for inclusion through their Ethereum transactions as either gas price, or direct eth transfer to the coinbase address. Using direct payments instead of gas price allows users to make payments conditional on their transaction succeeding, thus avoiding having to pay for failed bids."),(0,n.kt)("p",null,"See the ",(0,n.kt)("a",{parentName:"p",href:"/flashbots-auction/searchers/quick-start"},"searcher quick-start guide")," to learn how to get started."),(0,n.kt)("h3",{id:"block-builders"},"Block Builders"),(0,n.kt)("p",null,'Block builders ("builders") are specialists who accept transactions from users and searchers, and try to build the most profitable block possible from those transactions. These blocks are then sent via an mev-boost relay to validators. See ',(0,n.kt)("a",{parentName:"p",href:"#relays"},"Relays")," for a deeper explanation of what relays do. Searchers send bundles to one or more builders."),(0,n.kt)("div",{className:"med caption-img"},(0,n.kt)("p",null,"  ",(0,n.kt)("img",{alt:"Block Builder Flow",src:a(1503).Z})),(0,n.kt)("p",null,"  Block builders create blocks using bundles from searchers and transactions (not shown here) from the mempool.")),(0,n.kt)("p",null,"\u26a0\ufe0f Not all builders can be trusted \u26a0\ufe0f"),(0,n.kt)("p",null,"Builders have full view of incoming transactions, which gives them the power to frontrun, censor, etc. When choosing a builder, there are a few criteria to look for:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Are they committed to fair and unbiased execution?",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A good builder will not front-run, sandwich or censor bundles, or otherwise engage in activities that abuse privileged data access."))),(0,n.kt)("li",{parentName:"ul"},"Do they connect to a trusted relay (or relays)?",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Keep in mind that the relay can also see raw transactions, which gives them the ability to front-run, censor, etc."))),(0,n.kt)("li",{parentName:"ul"},"Do their relays connect to enough validators?",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The more validators a relay connects to, the more slots will generally be available for builders connected to that relay. When you're targeting a specific block/slot, it's imperative that you send your transactions to a builder which is connected to the validator responsible for proposing a block in that slot. More validators \u21d2 better inclusion rates."),(0,n.kt)("li",{parentName:"ul"},"Note: Any validator can ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/flashbots/mev-boost#usage"},"use mev-boost to connect to the Flashbots relay and other relays"),"."),(0,n.kt)("li",{parentName:"ul"},"It's also worth considering how much collective stake the validators connected to a relay have. Generally speaking, if more than one block is proposed to the network (unusual but possible), the block with the most collective stake attesting to it will be included. This scenario is explained in greater detail in the ",(0,n.kt)("a",{parentName:"li",href:"https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/#fork-choice"},"Ethereum docs"),".")))),(0,n.kt)("p",null,"Also note that block builders have the freedom to specialize. You may find that one builder is more or less friendly to your strategy than others. Builders are competing with each other, so they are all incentivized to include your bundles in their blocks, but you may find that some builders will prioritize certain strategies over others regardless of potential profits. Builders might also censor certain bundles due to local regulations or corporate strategies and policies. There are a lot of variables in play here, so I recommend trying a few trustworthy builders and seeing how your mileage varies first-hand."),(0,n.kt)("p",null,"Learn more about the ",(0,n.kt)("a",{parentName:"p",href:"#trust-assumptions"},"trust assumptions of the Flashbots Alpha"),"."),(0,n.kt)("h3",{id:"relays"},"Relays"),(0,n.kt)("p",null,"Relays are a component of PBS which are responsible for escrowing blocks from builders for validators. "),(0,n.kt)("div",{className:"med caption-img"},(0,n.kt)("p",null,"  ",(0,n.kt)("img",{alt:"Relay Flow",src:a(6438).Z})),(0,n.kt)("p",null,"  Relay selects most profitable block from its builders and escrows it for the validator.")),(0,n.kt)("p",null,"With mev-boost, validators choose the most profitable block from a number of relays. Each relay keeps the contents of a block private until the validator commits to proposing it to the network for inclusion."),(0,n.kt)("p",null,"Specifically, relays do the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"accept new blocks from builders"),(0,n.kt)("li",{parentName:"ul"},"send header of most profitable block to a validator upon request",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"the validator locks in their commitment to propose the full block by signing this header"))),(0,n.kt)("li",{parentName:"ul"},"send full block to validator after receiving block header signed by the validator"),(0,n.kt)("li",{parentName:"ul"},"perform all of this quickly and reliably, so that validators don't miss proposal deadlines")),(0,n.kt)("p",null,"For a deeper explanation of mev-boost and relays, Check out @thegostep's ",(0,n.kt)("a",{parentName:"p",href:"https://ethresear.ch/t/mev-boost-merge-ready-flashbots-architecture/11177"},"ethresear.ch post"),"."),(0,n.kt)("p",null,"For more information about how bundles are sent post-merge, see ",(0,n.kt)("a",{parentName:"p",href:"https://collective.flashbots.net/t/how-will-sending-bundles-change-in-pos-ethereum/147"},"this forum post"),"."),(0,n.kt)("p",null,"Learn more about the ",(0,n.kt)("a",{parentName:"p",href:"#trust-assumptions"},"trust assumptions of the Flashbots Alpha"),"."),(0,n.kt)("h3",{id:"validators"},"Validators"),(0,n.kt)("p",null,'Validators (AKA "proposers") in PoS Ethereum are responsible for proposing blocks to the network, and appending blocks to the chain. You can learn more about validators in the ',(0,n.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/#validators"},"Ethereum docs"),"."),(0,n.kt)("div",{className:"med caption-img"},(0,n.kt)("p",null,"  ",(0,n.kt)("img",{alt:"Validator Flow",src:a(2349).Z})),(0,n.kt)("p",null,"  Validator uses mev-boost to choose the most profitable block to propose from multiple relays.")),(0,n.kt)("p",null,"When builders include MEV-yielding transactions, the blocks they produce will be more profitable on average. By sourcing the most profitable blocks from these builders, validators earn more profit just by using mev-boost. You can learn more about mev-boost at ",(0,n.kt)("a",{parentName:"p",href:"https://boost.flashbots.net"},"boost.flashbots.net"),"."),(0,n.kt)("p",null,"Learn more about the ",(0,n.kt)("a",{parentName:"p",href:"#trust-assumptions"},"trust assumptions of the Flashbots Alpha"),"."),(0,n.kt)("h2",{id:"trust-assumptions"},"Trust Assumptions"),(0,n.kt)("p",null,"The current version of Flashbots Auction contains technical limitations which prevent the network from operating in a fully trustless manner. Specifically, the properties of complete privacy and permissionlessness are required for Flashbots to be fully decentralized."),(0,n.kt)("p",null,"In the future, the ",(0,n.kt)("a",{parentName:"p",href:"#roadmap"},"Flashbots Auction roadmap")," aims to replace these trust guarantees with cryptographic and cryptoeconomic guarantees of full privacy. We invite privacy researchers and interested community members to review our proposed architecture and contribute to building a more robust and decentralized system."))}p.isMDXComponent=!0},1503:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/block-builder-flow-0c01103143daeac8b79cc377ff248630.png"},2165:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/mevboost-searcher-bundle-flow-bae4ba67a9d8d928efe337f36defa14a.png"},6438:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/relay-flow-8f9aca183eaf4b8213220bc5bd71eb3a.png"},7646:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/searcher-architecture-d9a0bd137035304fc54067ce243c32ce.png"},2349:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/validator-flow-f3a8249b600db2b2b8d0a0344f336f95.png"}}]);