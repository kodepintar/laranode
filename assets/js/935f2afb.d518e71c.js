"use strict";(self.webpackChunklunox=self.webpackChunklunox||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/docs/intro","docId":"intro"},{"type":"category","label":"Installation","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Create Lunox App","href":"/docs/installation/create-lunox-app","docId":"installation/create-lunox-app"},{"type":"link","label":"Run your Lunox App","href":"/docs/installation/run-lunox-app","docId":"installation/run-lunox-app"}]},{"type":"category","label":"Architecture Concepts","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Request Lifecycle","href":"/docs/architecture-concepts/request-lifecycle","docId":"architecture-concepts/request-lifecycle"},{"type":"link","label":"Service Container","href":"/docs/architecture-concepts/service-container","docId":"architecture-concepts/service-container"},{"type":"link","label":"Service Provider","href":"/docs/architecture-concepts/service-provider","docId":"architecture-concepts/service-provider"},{"type":"link","label":"Facades","href":"/docs/architecture-concepts/facades","docId":"architecture-concepts/facades"}]},{"type":"category","label":"The Basics","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Routing","href":"/docs/basics/routing","docId":"basics/routing"},{"type":"link","label":"Middleware","href":"/docs/basics/middleware","docId":"basics/middleware"},{"type":"link","label":"Controllers","href":"/docs/basics/controllers","docId":"basics/controllers"},{"type":"link","label":"Http Request","href":"/docs/basics/request","docId":"basics/request"},{"type":"link","label":"Http Responses","href":"/docs/basics/responses","docId":"basics/responses"},{"type":"link","label":"Views","href":"/docs/basics/views","docId":"basics/views"},{"type":"link","label":"Session","href":"/docs/basics/session","docId":"basics/session"},{"type":"link","label":"Validation","href":"/docs/basics/validation","docId":"basics/validation"},{"type":"link","label":"Error Handling","href":"/docs/basics/errors","docId":"basics/errors"}]},{"type":"category","label":"Digging Deeper","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Artisan Console","href":"/docs/digging-deeper/artisan-console","docId":"digging-deeper/artisan-console"}]},{"type":"category","label":"Database","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Getting Started","href":"/docs/database/getting-started","docId":"database/getting-started"},{"type":"link","label":"Query Builder","href":"/docs/database/query-builder","docId":"database/query-builder"}]}]},"docs":{"architecture-concepts/facades":{"id":"architecture-concepts/facades","title":"Facades","description":"Introduction","sidebar":"tutorialSidebar"},"architecture-concepts/request-lifecycle":{"id":"architecture-concepts/request-lifecycle","title":"Request Lifecycle","description":"If you come from php language, there is some difference concept between how request handled in Lunox and Laravel. In Laravel (php), request are handled by application and then application is terminated on each request made. In Lunox (nodejs), application is run on event loop, so the application is not terminated but run continuously. So don\'t forget to return some response or throw an Exception on every request handled by Lunox so your application is not hang.","sidebar":"tutorialSidebar"},"architecture-concepts/service-container":{"id":"architecture-concepts/service-container","title":"Service Container","description":"Lunox Service Container is inspired by Laravel\'s service container. The basic concept is same, but we have limitations because of nodejs nature. In Laravel, we can dynamically performing dependency injection. In Lunox, we must explicitly bind and resolve some class or instance.","sidebar":"tutorialSidebar"},"architecture-concepts/service-provider":{"id":"architecture-concepts/service-provider","title":"Service Provider","description":"Lunox Service Providers have same concept with Laravel Service Providers. Service providers are the central place of all application bootstrapping. Your own application, as well as all of Lunox\'s core services, are bootstrapped via service providers.","sidebar":"tutorialSidebar"},"basics/controllers":{"id":"basics/controllers","title":"Controllers","description":"Introduction","sidebar":"tutorialSidebar"},"basics/errors":{"id":"basics/errors","title":"Error Handling","description":"Introduction","sidebar":"tutorialSidebar"},"basics/middleware":{"id":"basics/middleware","title":"Middleware","description":"Introduction","sidebar":"tutorialSidebar"},"basics/request":{"id":"basics/request","title":"Http Request","description":"Introduction","sidebar":"tutorialSidebar"},"basics/responses":{"id":"basics/responses","title":"Http Responses","description":"Everything returned from route action will automatically converted to http response. If return type is object or array, it will automatically have type of application/json;","sidebar":"tutorialSidebar"},"basics/routing":{"id":"basics/routing","title":"Routing","description":"Basic Routing","sidebar":"tutorialSidebar"},"basics/session":{"id":"basics/session","title":"Session","description":"Introduction","sidebar":"tutorialSidebar"},"basics/validation":{"id":"basics/validation","title":"Validation","description":"Introduction","sidebar":"tutorialSidebar"},"basics/views":{"id":"basics/views","title":"Views","description":"Introduction","sidebar":"tutorialSidebar"},"database/getting-started":{"id":"database/getting-started","title":"Getting Started","description":"Introduction","sidebar":"tutorialSidebar"},"database/query-builder":{"id":"database/query-builder","title":"Query Builder","description":"Introduction","sidebar":"tutorialSidebar"},"digging-deeper/artisan-console":{"id":"digging-deeper/artisan-console","title":"Artisan Console","description":"Introduction","sidebar":"tutorialSidebar"},"installation/create-lunox-app":{"id":"installation/create-lunox-app","title":"Create Lunox App","description":"Use degit to copy Lunox app skeleton and start build your application with Lunox Framework. For this example we will use svelte preset.","sidebar":"tutorialSidebar"},"installation/run-lunox-app":{"id":"installation/run-lunox-app","title":"Run your Lunox App","description":"We are already include simple scripts to run and build your lunox app. See package.json script part for more detail.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Introduction","description":"Let\'s discover Lunox in less than 5 minutes.","sidebar":"tutorialSidebar"}}}')}}]);