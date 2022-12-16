"use strict";(self.webpackChunkflashbot_docs=self.webpackChunkflashbot_docs||[]).push([[4813],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4301:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={title:"install"},o=void 0,i={unversionedId:"flashbots-data/mev-inspect-py/install",id:"flashbots-data/mev-inspect-py/install",isDocsHomePage:!1,title:"install",description:"mev-inspect-py is built to run on kubernetes locally and in production",source:"@site/docs/flashbots-data/mev-inspect-py/install.md",sourceDirName:"flashbots-data/mev-inspect-py",slug:"/flashbots-data/mev-inspect-py/install",permalink:"/flashbots-data/mev-inspect-py/install",tags:[],version:"current",frontMatter:{title:"install"},sidebar:"docs",previous:{title:"Overview",permalink:"/flashbots-data/mev-inspect-py/overview"},next:{title:"quick start",permalink:"/flashbots-data/mev-inspect-py/quick-start"}},p=[{value:"Install dependencies",id:"install-dependencies",children:[]},{value:"Start up",id:"start-up",children:[]},{value:"Tear down",id:"tear-down",children:[]}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"mev-inspect-py is built to run on kubernetes locally and in production"),(0,a.kt)("h3",{id:"install-dependencies"},"Install dependencies"),(0,a.kt)("p",null,"First, setup a local kubernetes deployment - we use ",(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop"},"Docker")," and ",(0,a.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start"},"kind")),(0,a.kt)("p",null,"If using kind, create a new cluster with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kind create cluster\n")),(0,a.kt)("p",null,"Next, install the kubernetes CLI ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/"},(0,a.kt)("inlineCode",{parentName:"a"},"kubectl"))),(0,a.kt)("p",null,"Then, install ",(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"helm")," - helm is a package manager for kubernetes"),(0,a.kt)("p",null,"Lastly, setup ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tilt.dev/install.html"},"Tilt")," which manages running and updating kubernetes resources locally"),(0,a.kt)("h3",{id:"start-up"},"Start up"),(0,a.kt)("p",null,"Set an environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"RPC_URL")," to an RPC for fetching blocks\nExample:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'export RPC_URL="http://111.111.111.111:8546"\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: mev-inspect-py currently requires and RPC with support for OpenEthereum / Erigon traces (not geth \ud83d\ude14)")),(0,a.kt)("p",null,"Next, start all servcies with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"tilt up\n")),(0,a.kt)("p",null,'Press "space" to see a browser of the services starting up'),(0,a.kt)("p",null,"On first startup, you'll need to apply database migrations. Apply with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./mev exec alembic upgrade head\n")),(0,a.kt)("h3",{id:"tear-down"},"Tear down"),(0,a.kt)("p",null,"First stop the running tilt window with ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl+C")),(0,a.kt)("p",null,"Then run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"tilt down\n")))}c.isMDXComponent=!0}}]);