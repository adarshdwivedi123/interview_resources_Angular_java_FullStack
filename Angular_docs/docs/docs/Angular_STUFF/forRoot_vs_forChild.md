In Angular (before standalone), we used Modules:

Definiton
“forRoot() is used to provide global configuration and singleton services at the root level.
It initializes features like the router only once.

---------------------------------------------------------------
forChild() is used in feature or lazy-loaded modules to add routes without recreating global services.
------------------------------------------------------



“forRoot() is used to configure and create singleton services for the whole application, like the main router.
forRoot() is used to set up something for the entire application — only once.
It creates global services (singletons) and global configuration.



forRoot() creates SINGLETON services in the whole app

Such as:
Router service
Auth service
Interceptors
Global configuration




---------------------------------------------------------------------------------------
forChild() is used inside feature modules to add routes without creating new service instances.
This separation avoids duplication and keeps routing consistent.”


✔ forChild() prevents duplication

If both used forRoot(), Angular would create:
2 routers
2 services
Memory leaks
Conflicts



------------------------------------------------------------
#)provideRouter()

“We use provideRouter() to enable routing in standalone Angular apps without using NgModules.”

“In Angular 17 standalone apps, we use provideRouter() instead of forRoot().
But forRoot() and forChild() are still used in module-based apps and many enterprise libraries.
So understanding them is still important.”



In Angular 21 standalone, we don’t use them directly for routing, but third-party libraries still use them for global configuration.”