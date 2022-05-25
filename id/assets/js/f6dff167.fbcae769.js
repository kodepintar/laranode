"use strict";(self.webpackChunklunox=self.webpackChunklunox||[]).push([[5443],{9613:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var i=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,v=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return t?i.createElement(v,o(o({ref:n},l),{},{components:t})):i.createElement(v,o({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<r;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4683:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var i=t(5900),a=t(4750),r=(t(9496),t(9613)),o=["components"],c={sidebar_position:2},s="Service Container",p={unversionedId:"architecture-concepts/service-container",id:"architecture-concepts/service-container",title:"Service Container",description:"Lunox Service Container is inspired by Laravel's service container. The basic concept is same, but we have limitations because of nodejs nature. In Laravel, we can dynamically performing dependency injection. In Lunox, we must explicitly bind and resolve some class or instance.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/architecture-concepts/service-container.md",sourceDirName:"architecture-concepts",slug:"/architecture-concepts/service-container",permalink:"/lunox/id/docs/architecture-concepts/service-container",editUrl:"https://github.com/kodepandai/lunox-website/edit/main/docs/architecture-concepts/service-container.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Request Lifecycle",permalink:"/lunox/id/docs/architecture-concepts/request-lifecycle"},next:{title:"Service Provider",permalink:"/lunox/id/docs/architecture-concepts/service-provider"}},l=[{value:"Binding",id:"binding",children:[{value:"Simple Binding",id:"simple-binding",children:[],level:3},{value:"Singleton Binding",id:"singleton-binding",children:[],level:3}],level:2},{value:"Resolving",id:"resolving",children:[],level:2},{value:"Make Typescript Happy",id:"make-typescript-happy",children:[],level:2}],u={toc:l};function d(e){var n=e.components,c=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,c,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"service-container"},"Service Container"),(0,r.kt)("p",null,"Lunox Service Container is inspired by Laravel's service container. The basic concept is same, but we have limitations because of nodejs nature. In Laravel, we can dynamically performing dependency injection. In Lunox, we must explicitly bind and resolve some class or instance."),(0,r.kt)("h2",{id:"binding"},"Binding"),(0,r.kt)("p",null,"We can bind some class or function to container instance and resolve it later somewhere in your application code."),(0,r.kt)("h3",{id:"simple-binding"},"Simple Binding"),(0,r.kt)("p",null,"Almost all of your service container bindings will be registered on service providers. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"bind")," method to bind some class to container. In Laravel, we can bind class name to container, but there is nothing todo with nodejs. So we must use unique string to binding instance or function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import Payment from './Service/Payment';\nimport db from './Support/DatabaseManager';\n\n// bind some class\nthis.app.bind('Payment', Payment);\n\n// bind function or instance\nthis.app.bind('Payment', ()=>new Payment('Paypall'));\n\n// or you can bind simple object to application instance\nthis.app.instance('db', db);\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"this.app")," is Lunox Application instance. See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kodepandai/lunox-framework/blob/main/src/Foundation/Application.ts"},"Application")," class for more detail."),(0,r.kt)("p",null,"Sometimes you cannot get application instance, for example outside service providers. You can use global ",(0,r.kt)("inlineCode",{parentName:"p"},"app()")," helper to get Lunox Application instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"app().bind('Payment', Payment);\n")),(0,r.kt)("h3",{id:"singleton-binding"},"Singleton Binding"),(0,r.kt)("p",null,"If you want bind some instance then share the instance object, use singleton instead. Once a singleton binding is resolved, the same object instance will be returned. I think you are familiar with this concept on Laravel."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import Counter from './Calc/Counter';\n\nthis.app.singleton('counter', Counter);\n")),(0,r.kt)("h2",{id:"resolving"},"Resolving"),(0,r.kt)("p",null,"To resolve some object from container, currently we only suppport ",(0,r.kt)("inlineCode",{parentName:"p"},"make")," method from application instance. We also can resolve by inserting ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"app()")," global method. Both example are same"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const payment = this.app.make('Payment');\n\nconst payment = app('Payment');\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We can also resolve instance with property"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const payment = this.app.make("counter", {initialValue: 0})\n')))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," instance are singleton")),(0,r.kt)("h2",{id:"make-typescript-happy"},"Make Typescript Happy"),(0,r.kt)("p",null,"When we resolve some instance, typescript didn't know what instance actually is. We can add type hinting to the actual class or interface that resolved. See this example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import type Route from 'lunox/dist/Routing/Route';\n\nconst route = app<Route>(\"route\")\n")),(0,r.kt)("p",null,"now the IDE can detect all instance methods and properties \ud83d\ude04\n",(0,r.kt)("img",{alt:"typescript is happy",src:t(1232).Z,title:"Typescript is happy now"})))}d.isMDXComponent=!0},1232:function(e,n,t){n.Z=t.p+"assets/images/resolving-d195deaa7caa827de0aa4f1c9cd7995a.png"}}]);