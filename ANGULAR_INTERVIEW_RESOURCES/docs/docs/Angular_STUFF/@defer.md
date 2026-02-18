🎯 What are the @defer triggers?

Angular supports multiple triggers to decide WHEN to load a component.
Defer loading is a new feature in Angular 17 used to load a part of the template only when needed.
This can significantly improve initial load times.


Because sometimes you don’t want to load everything at once.

Examples:
Loading a chart only when user scrolls
Loading a dashboard widget only after login
Loading help section only when user clicks
Lazy-load images or components below fold

Let’s explain each one.
----------------------------------------------------------------------------
🔥 1. on immediate

Loads the component asynchronously but immediately when condition becomes true.

🟢 Most common and safest.

Example:
@defer (on immediate) {
  <app-jitsi />
}

Meaning:

Component loads ASAP

But non-blocking

Allows Angular to finish UI updates first

👉 Perfect for your Jitsi loading after validations.


-----------------------------------------------------------------------------

🔥 2. on interaction

Loads the component when the user interacts (click, hover, focus).

Example:

@defer (on interaction) {
  <app-video-player />
}


Real-life usage:

Load video player only when clicked

Load chat only when opened
--------------------------------------------------------------------------------
🔥 3. on hover

Loads component when user hovers over a trigger element.

@defer (on hover) {
  <app-menu />
}


Good for dropdown menus.

-------------------------------------------------------------------------------
🔥 4. on viewport

Loads component when user scrolls to that part of the page.

@defer (on viewport) {
  <app-reviews />
}


Real-life usage:

Dashboards

Bottom sections

Long pages

-----------------------------------------------------------------------------

🔥 5. on idle

Loads component when browser is free (low priority).

@defer (on idle) {
  <app-faq />
}


Good for:

Optional content

Heavy components

Low-priority widgets
---------------------------------------------------------------------

🔥 6. on timer(ms)

Loads component after a specific delay.

@defer (on timer(3000)) {
  <app-ad-banner />
}


Useful for:

Ads

Delayed UI features

Data pre-loading
-------------------------------------------------------------------------

🔥 7. on interaction("#elementId")

Loads only when a specific element is interacted with.

<button id="joinBtn">Join</button>

@defer (on interaction("#joinBtn")) {
  <app-jitsi />
}