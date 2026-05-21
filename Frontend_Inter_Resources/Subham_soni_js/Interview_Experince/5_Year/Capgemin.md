i though its a aangualr aand  interviwer things its  a fulls tack
angular itnerweier happen?
---------------------------------------------------------------------
Async pipe how wortk interanlay
How to create   css gloabllay  muliplt way
how to call the functionality from html is it nest pratcie do we need to follow
===========================================
#)how to track router   
Router.events

================================================
Angular provides multiple router lifecycle events such as:
NavigationStart
NavigationEnd
NavigationCancel
NavigationError

Most commonly, we track:
NavigationEnd
because it tells us navigation completed successfully.


“In Angular, we track route changes using Router.events.
Generally, we listen to NavigationEnd event to know when navigation is completed successfully.
It is commonly used for analytics, loaders, breadcrumbs, and authentication handling.”



=============================================
Angular also provides:

enableTracing: true

inside:

RouterModule.forRoot()

to debug router events in development.

==================================
Summary
Method	Purpose
Router.events	Track navigation
NavigationEnd	Successful route tracking
ActivatedRoute.params	Route params
queryParams	Query string
router.url	Current URL
===============================


==================================================
#)Real-Time Use Cases

We use router tracking for:

Analytics tracking
Breadcrumbs
Page title updates
Showing loaders/spinners
Authentication checks
Logging navigation history



======================================
async pipe internally
forRoot and forCHild in angular

1. Enable Router Tracing in AppRoutingModule

Angular provides:

enableTracing: true

This logs all router events in the browser console.

================================================================================

In Angular, there are multiple ways to create and use global CSS.

Common Ways to Create Global CSS in Angular
Method	Description	Usage
1	styles.css	Default global stylesheet
2	styles.scss	Global SCSS file
3	Add CSS in angular.json	Multiple global CSS files
4	Import CSS inside global style	Centralized imports
5	CDN in index.html	External library CSS
6	CSS Variables (:root)	Global theme variables
7	Shared Utility CSS File	Common reusable classes
8	Third-party library global styles	Bootstrap, Tailwind, Material
9	ViewEncapsulation.None	Component CSS becomes global
10	Using @import	Import global files into one stylesheet

