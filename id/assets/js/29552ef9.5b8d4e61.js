"use strict";(self.webpackChunklunox=self.webpackChunklunox||[]).push([[8347],{9613:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(a),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1898:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=a(5900),r=a(4750),o=(a(9496),a(9613)),i=["components"],c={sidebar_position:4},s="Facades",l={unversionedId:"architecture-concepts/facades",id:"architecture-concepts/facades",title:"Facades",description:"Introduction",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/architecture-concepts/facades.md",sourceDirName:"architecture-concepts",slug:"/architecture-concepts/facades",permalink:"/lunox/id/docs/architecture-concepts/facades",editUrl:"https://github.com/kodepandai/lunox-website/edit/main/docs/architecture-concepts/facades.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Service Provider",permalink:"/lunox/id/docs/architecture-concepts/service-provider"},next:{title:"Routing",permalink:"/lunox/id/docs/basics/routing"}},u=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Builtin Facades",id:"builtin-facades",children:[],level:2},{value:"How Lunox Facades Works",id:"how-lunox-facades-works",children:[],level:2},{value:"How to Create Facades",id:"how-to-create-facades",children:[],level:2}],d={toc:u};function p(e){var t=e.components,c=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"facades"},"Facades"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Lunox Facades is just like ",(0,o.kt)("a",{parentName:"p",href:"https://laravel.com/docs/8.x/facades"},"Laravel Facades"),". But we have some limitation here, since javascript has no built in magic method. Don't worry, using some workaround and some effort, lunox already has Facades \ud83d\udd25. "),(0,o.kt)("p",null,"We will learn more how to use and create Lunox Facades."),(0,o.kt)("h2",{id:"builtin-facades"},"Builtin Facades"),(0,o.kt)("p",null,"This framework already shipped with builtin facades. For example is Route facade. Route facade will resolve Route factory class then magically call method on it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {Route} from 'lunox'\n\nRoute.get('/someurl', ()=>return 'something');\n")),(0,o.kt)("p",null,"There are many example of facade that you can use it on your application, like ",(0,o.kt)("inlineCode",{parentName:"p"},"DB, Auth, Response, Session, Storage, Validator")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"View"),". We will try to add more helpful facades later."),(0,o.kt)("h2",{id:"how-lunox-facades-works"},"How Lunox Facades Works"),(0,o.kt)("p",null,"If you check ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kodepandai/lunox-framework"},"Lunox Framework")," source code, all facades is live at ",(0,o.kt)("inlineCode",{parentName:"p"},"src/Support/Facades")," folder. Facade is only regular class with some static method ",(0,o.kt)("inlineCode",{parentName:"p"},"getFacadeAccessor"),"; This method can return some string or some class. If string is returned, lunox will try to resolve given string as abstract name on Container instances. If class is returned, lunox will register that class as singleton and then resolve it later. "),(0,o.kt)("p",null,"Facades are fast, it will cached all called facades to use it later. So if you call some facade at second time, it will resolved from facade cached. So basically all Facades are singleton even we register it with method ",(0,o.kt)("inlineCode",{parentName:"p"},"bind")," because of this behaviour. "),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Keep in mind, don't use Facade if you want to avoid singleton. For example Class that handle user request or session must not resolved using singleton."))),(0,o.kt)("h2",{id:"how-to-create-facades"},"How to Create Facades"),(0,o.kt)("p",null,"To create Facade is simple. Just create some class anywhere on you application that extends lunox ",(0,o.kt)("inlineCode",{parentName:"p"},"Facade"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"\nimport {Facade, useFacade} from 'lunox';\nimport MyActualCounterClass from '../pathto/MyActualClass';\n\nclass Counter extends Facade {\n  public static getFacadeAccessor() {\n    return MyActualCounterClass;\n  }\n}\nexport default useFacade<MyActualCounterClass>(Counter);\n")),(0,o.kt)("p",null,"If you see on last code, we are not export ",(0,o.kt)("inlineCode",{parentName:"p"},"Counter")," class, but we wrap it with ",(0,o.kt)("inlineCode",{parentName:"p"},"useFacade")," hooks. This hooks is where the magics happen. We simulate magic method via this hook. ",(0,o.kt)("inlineCode",{parentName:"p"},"useFacade")," are generic, so we can inject some interface here to make typescript happy. That's why we can see IDE suggestion when we call ",(0,o.kt)("inlineCode",{parentName:"p"},"Route")," facade.\n",(0,o.kt)("img",{alt:"Facade auto resolve actual instance",src:a(634).Z,title:"Facade auto resolve actual instance"})))}p.isMDXComponent=!0},634:function(e,t,a){t.Z=a.p+"assets/images/facade-eca69644158714a4f7da194e0bb40056.png"}}]);