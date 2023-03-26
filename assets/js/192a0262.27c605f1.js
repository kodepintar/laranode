"use strict";(self.webpackChunklunox=self.webpackChunklunox||[]).push([[6153],{9613:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=o,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||a;return r?n.createElement(g,i(i({ref:t},d),{},{components:r})):n.createElement(g,i({ref:t},d))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6103:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(1163),o=(r(9496),r(9613));const a={sidebar_position:1},i="Routing",l={unversionedId:"basics/routing",id:"basics/routing",title:"Routing",description:"Basic Routing",source:"@site/docs/basics/routing.md",sourceDirName:"basics",slug:"/basics/routing",permalink:"/docs/basics/routing",editUrl:"https://github.com/kodepandai/lunox-website/edit/main/docs/basics/routing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Facades",permalink:"/docs/architecture-concepts/facades"},next:{title:"Middleware",permalink:"/docs/basics/middleware"}},s=[{value:"Basic Routing",id:"basic-routing",children:[],level:2},{value:"Default Route files",id:"default-route-files",children:[],level:2},{value:"Available Router  Methods",id:"available-router--methods",children:[],level:2},{value:"Route Parameters",id:"route-parameters",children:[],level:2},{value:"Route Action",id:"route-action",children:[],level:2}],u={toc:s},d="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"routing"},"Routing"),(0,o.kt)("h2",{id:"basic-routing"},"Basic Routing"),(0,o.kt)("p",null,"Routing in lunox is as simple as Laravel route. To register some route just use ",(0,o.kt)("inlineCode",{parentName:"p"},"Route")," facade. The method is accept uri and closure as route callback."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {Route} form 'lunox';\n\nRoute.get('/greetings', ()=> 'Hello');\n")),(0,o.kt)("h2",{id:"default-route-files"},"Default Route files"),(0,o.kt)("p",null,"All lunox router is predefined in folder ",(0,o.kt)("inlineCode",{parentName:"p"},"routes"),"; There are two file there, ",(0,o.kt)("inlineCode",{parentName:"p"},"api.ts")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"web.ts"),"; If you need access to session, use ",(0,o.kt)("inlineCode",{parentName:"p"},"web.ts")," file to register your routes, otherwise use ",(0,o.kt)("inlineCode",{parentName:"p"},"api.ts"),". Both of them is registered at ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Providers/RouteServiceProvider"),". You can add additional router file there."),(0,o.kt)("p",null,"If you look at registration of ",(0,o.kt)("inlineCode",{parentName:"p"},"routes/web"),", you will see that this route is using ",(0,o.kt)("inlineCode",{parentName:"p"},"web")," middleware. This middleware is referenced at ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Http/Kernel.ts")," on ",(0,o.kt)("inlineCode",{parentName:"p"},"middlewareGroups")," array list. We will talk about middleware later."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"class Kernel extends BaseKernel {\n  protected middleware = [CorsMiddleware];\n\n  protected middlewareGroups = {\n    web: [StartSession], // <-- here is web middleware declared.\n  };\n\n  protected routeMiddleware = {\n    auth: AuthMiddleware,\n    session: SessionMiddleware,\n  };\n}\n")),(0,o.kt)("h2",{id:"available-router--methods"},"Available Router  Methods"),(0,o.kt)("p",null,"For now, this is available router method"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"- Route.get(uri: string, action: RouteAction)\n- Route.post(uri: string, action: RouteAction)\n- Route.delete(uri: string, action: RouteAction);\n- Route.patch(uri: string, action: RouteAction);\n- Route.put(uri: string, action: RouteAction);\n- Route.all(uri: string, action: RouteAction);\n- Route.getRoutes() //return all registered routes\n- Route.prefix(prefix: string) // add prefix to route\n- Route.middleware(middleware: string | Middleware | (string|Middleware)[]) // add middleware to route\n- Route.group(callback: string | Callback): Promise<void>; // grouping route\n")),(0,o.kt)("h2",{id:"route-parameters"},"Route Parameters"),(0,o.kt)("p",null,"Lunox is build on top of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lukeed/polka"},"Polka")," server. So the uri patterns are inherit from it. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"- static (/users)\n- named parameters (/users/:id)\n- nested parameters (/users/:id/books/:title)\n- optional parameters (/users/:id?/books/:title?)\n- any match / wildcards (/users/*)\n")),(0,o.kt)("h2",{id:"route-action"},"Route Action"),(0,o.kt)("p",null,"In lunox, we cannot do some dependency injection to route action like we did in Laravel. So, to make route action behaviour laravel like, just remember that first parameter of route action is always ",(0,o.kt)("inlineCode",{parentName:"p"},"Request")," instance, the rest is route params."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"Route.get('/hello/{id}/{message}', (req: Request, id, message) =>{\n  console.log(req instanceof Request) // return true\n  console.log(id) // return param id\n  console.log(message) // return param message\n  \n  // we can access all request method here\n  req.all();\n  req.get('user_id');\n  // we will learn about request instance later\n  return 'OK';\n  // don't forget to return something here otherwise your app will hang\n})\n")))}c.isMDXComponent=!0}}]);