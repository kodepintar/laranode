"use strict";(self.webpackChunklunox=self.webpackChunklunox||[]).push([[8451],{9613:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,g=u["".concat(i,".").concat(m)]||u[m]||p[m]||l;return r?n.createElement(g,a(a({ref:t},d),{},{components:r})):n.createElement(g,a({ref:t},d))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<l;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9e3:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var n=r(1163),o=(r(9496),r(9613));const l={sidebar_position:3},a="Controllers",s={unversionedId:"basics/controllers",id:"basics/controllers",title:"Controllers",description:"Introduction",source:"@site/docs/basics/controllers.md",sourceDirName:"basics",slug:"/basics/controllers",permalink:"/docs/basics/controllers",editUrl:"https://github.com/kodepandai/lunox-website/edit/main/docs/basics/controllers.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Middleware",permalink:"/docs/basics/middleware"},next:{title:"Http Request",permalink:"/docs/basics/request"}},i=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Writing Controllers",id:"writing-controllers",children:[{value:"Object Based Controller",id:"object-based-controller",children:[],level:3},{value:"Class Based Controller",id:"class-based-controller",children:[],level:3}],level:2},{value:"Using Controller in Routes",id:"using-controller-in-routes",children:[],level:2},{value:"Controller Middleware",id:"controller-middleware",children:[],level:2}],c={toc:i},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"controllers"},"Controllers"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Instead of defining all of your request handling logic as closures in your route files, you may wish to organize this behavior using ",(0,o.kt)("inlineCode",{parentName:"p"},"controller"),"."),(0,o.kt)("h2",{id:"writing-controllers"},"Writing Controllers"),(0,o.kt)("h3",{id:"object-based-controller"},"Object Based Controller"),(0,o.kt)("p",null,"Controller can be placed anywhere in your application project as long as it can be imported to router file. We can create controller using regular javascript object. Each controller key has value that work like router action.\nTake a look this example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import type Request from \"lunox/dist/Http/Request\";\n\nconst WelcomeController = {\n  home: async (req: Request) => {\n\n    // we can get request data\n    const something = req.get('something');\n    // or we can get user session\n    const user = await req.auth().user()\n\n    // or do some complex logic \n    return {\n        something\n        user,\n    };\n  },\n};\n\nexport default WelcomeController\n")),(0,o.kt)("h3",{id:"class-based-controller"},"Class Based Controller"),(0,o.kt)("p",null,"For more advance usage, we can create class based Controller. Just create class that extends lunox base Controller. See example below"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import type { Request } from "lunox/dist/Http/Request";\nimport { Controller } from "lunox";\n\nclass WelcomeController extends Controller {\n  async home(req: Request) {\n    return view("home", {message: "Hello world"});\n  }\n}\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We can generate controller file using artisan ",(0,o.kt)("inlineCode",{parentName:"p"},"make:controller")," command"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# this will create class based controller\npnpm artisan make:controller ControllerName\n\n# to create object based controller add --lite or -L option\npnpm artisan make:controller ControllerName -L\n# or\npnpm artisan make:controller ControllerName --lite\n")))),(0,o.kt)("h2",{id:"using-controller-in-routes"},"Using Controller in Routes"),(0,o.kt)("p",null,"After we create some controller, just import it to router."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {Route} from 'lunox';\nimport WelcomeController from 'app/Http/Controllers/WelcomeController';\n\n// example usage of object based controller\nRoute.get('home', WelcomeController.home);\n\n// example usage of class based controller\nRoute.get('home', [WelcomeController, 'home']);\n\n")),(0,o.kt)("h2",{id:"controller-middleware"},"Controller Middleware"),(0,o.kt)("p",null,"Middleware may be assigned to the controller's routes in your route files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"Route.get('/profile', [UserController, 'show']).middleware('auth')\n")),(0,o.kt)("p",null,"Or, you may find it convenient to specify middleware within your controller's constructor. Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"middleware")," method within your controller's constructor, you can assign middleware to the controller's actions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"class UserController extends Controller\n{\n  constructor(){\n    super()\n      this.middleware('auth');\n      this.middleware('log').only('index');\n      this.middleware('subscribed').except('store');\n  }\n}\n")))}u.isMDXComponent=!0}}]);