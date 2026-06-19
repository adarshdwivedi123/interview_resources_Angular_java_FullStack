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