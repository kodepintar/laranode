"use strict";(self.webpackChunklunox=self.webpackChunklunox||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/lunox/docs/intro","docId":"intro"},{"type":"category","label":"Installation","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Create LunoX App","href":"/lunox/docs/installation/create-lunox-app","docId":"installation/create-lunox-app"},{"type":"link","label":"Run your LunoX App","href":"/lunox/docs/installation/run-lunox-app","docId":"installation/run-lunox-app"}]},{"type":"category","label":"Architecture Concepts","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Request Lifecycle","href":"/lunox/docs/architectur-concepts/request-lifecycle","docId":"architectur-concepts/request-lifecycle"},{"type":"link","label":"Service Container","href":"/lunox/docs/architectur-concepts/service-container","docId":"architectur-concepts/service-container"},{"type":"link","label":"Service Provider","href":"/lunox/docs/architectur-concepts/service-provider","docId":"architectur-concepts/service-provider"}]}]},"docs":{"architectur-concepts/request-lifecycle":{"id":"architectur-concepts/request-lifecycle","title":"Request Lifecycle","description":"If you come from php language, there is some difference concept between how request handled in LunoX and Laravel. In Laravel (php), request are handled by application and then application is terminated on each request made. In LunoX (nodejs), application is run on event loop, so the application is not terminated but run continuously. So don\'t forget to return some response or throw an Exception on every request handled by LunoX so your application is not hang.","sidebar":"tutorialSidebar"},"architectur-concepts/service-container":{"id":"architectur-concepts/service-container","title":"Service Container","description":"LunoX Service Container is inspired by Laravel\'s service container. The basic concept is same, but we have limitations because of nodejs nature. In Laravel, we can dynamically performing dependency injection. In LunoX, we must explicitly bind and resolve some class or instance.","sidebar":"tutorialSidebar"},"architectur-concepts/service-provider":{"id":"architectur-concepts/service-provider","title":"Service Provider","description":"LunoX Service Providers have same concept with Laravel Service Providers. Service providers are the central place of all application bootstrapping. Your own application, as well as all of LunoX\'s core services, are bootstrapped via service providers.","sidebar":"tutorialSidebar"},"installation/create-lunox-app":{"id":"installation/create-lunox-app","title":"Create LunoX App","description":"Use degit to copy LunoX app boilerplate and start build your application with LunoX Framework.","sidebar":"tutorialSidebar"},"installation/run-lunox-app":{"id":"installation/run-lunox-app","title":"Run your LunoX App","description":"We are already include simple scripts to run and build your lunoX app. See package.json script part for more detail.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Introduction","description":"Let\'s discover Lunox in less than 5 minutes.","sidebar":"tutorialSidebar"}}}')}}]);