"use strict";(self.webpackChunklunox=self.webpackChunklunox||[]).push([[2279],{9613:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4326:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=t(5900),o=t(4750),i=(t(9496),t(9613)),a=["components"],l={sidebar_position:1},s="Artisan Console",c={unversionedId:"digging-deeper/artisan-console",id:"digging-deeper/artisan-console",title:"Artisan Console",description:"Introduction",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/digging-deeper/artisan-console.md",sourceDirName:"digging-deeper",slug:"/digging-deeper/artisan-console",permalink:"/lunox/id/docs/digging-deeper/artisan-console",editUrl:"https://github.com/kodepandai/lunox-website/edit/main/docs/digging-deeper/artisan-console.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Error Handling",permalink:"/lunox/id/docs/basics/errors"}},p=[{value:"Introduction",id:"introduction",children:[{value:"Tinker (REPL)",id:"tinker-repl",children:[{value:"Usage",id:"usage",children:[],level:4},{value:"Tinker Helper",id:"tinker-helper",children:[],level:4}],level:3}],level:2}],u={toc:p};function d(e){var n=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"artisan-console"},"Artisan Console"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Artisan is the command line interface included with lunox. Artisan exists at the root of your application as the ",(0,i.kt)("inlineCode",{parentName:"p"},"artisan.ts")," script and provides a number of helpful commands that can assist you while you build your application. To view a list of all available Artisan commands, you may use the list command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm artisan -h\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"lunox app must be compiled before you can run artisan command. So make sure you have run ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm artisan prod")," in production mode or ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm artisan dev")," in development mode."))),(0,i.kt)("h3",{id:"tinker-repl"},"Tinker (REPL)"),(0,i.kt)("p",null,"Lunox Tinker is a powerful REPL for the Lunox framework, powered by the nodejs builtin REPL."),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Tinker allows you to interact with your entire Lunox application on the command line, including your models, facade, container and more. To enter the Tinker environment, run the tinker Artisan command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm artisan tinker\n")),(0,i.kt)("h4",{id:"tinker-helper"},"Tinker Helper"),(0,i.kt)("p",null,"There is limitation in Tinker environment because of nodejs REPL cannot do top import. For this reason, Lunox Tinker already shipped usefull helper. Just call ",(0,i.kt)("inlineCode",{parentName:"p"},"use")," method to import module from app folder or from lunox framework directly. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"//example how to import module from app folder\nuse('app/Model/User')\n\nawait User.query()\n\n//example how to import lunox module\nuse(\"DB\")\n\nawait DB.table('users')\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Lunox Tinker demo",src:t(3672).Z})))}d.isMDXComponent=!0},3672:function(e,n,t){n.Z=t.p+"assets/images/tinker-34fea44ccda00115907f80818587f116.gif"}}]);