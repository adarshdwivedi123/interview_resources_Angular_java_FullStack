In Angular (before standalone), we used Modules:

Definiton
forroot and forchild  we use till angular 16 becoaz after angular17 standlone concept came in pirctiure
1)ForRoot() we are using at  root module  to set applicaion main routing configuration
2)“forRoot() is used to provide global configuration and singleton services at the root level.


forChild() feature modules me use hota hai jahan additional routes define kiye jaate hain without creating a new router instance.

forChild() is used in feature or lazy-loaded modules to add routes without recreating global services.
------------------------------------------------------


AppModule
   ↓
RouterModule.forRoot()
   ↓
FeatureModule
   ↓
RouterModule.forChild()
=================================================


Why should RouterModule.forRoot() be used only once?

RouterModule.forRoot() sirf ek baar use karna chahiye, usually AppModule me.

Reason:

Kyunki forRoot() Router service ka singleton instance create karta hai.

Agar hum ise multiple modules me use karenge, to multiple router instances create ho jayenge, jo application routing me problems create kar sakta hai.



===============================



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