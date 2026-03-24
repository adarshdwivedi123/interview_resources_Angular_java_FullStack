module is place where we 
grouping of components, directives, pipes, and services .

2)To define module we can use @Ngmodule every angular applicaiotn 
has atleast one @NgModule  class that is root module which is conventionally 
named appMoulde.



--------------------------------------------------
Without modules:

Everything is in one place ❌
Hard to manage ❌
Not scalable ❌

👉 With modules:

Application is well-structured ✅
Easy to maintain ✅
Scalable ✅



----------------------------------
2. Separation of Concerns 🔥

👉 Each module handles its own responsibility

✔ User logic separate
✔ Product logic separate

👉 Makes code easier to understand
-------------------------------
3. Reusability

👉 Modules can be reused in different parts

✔ SharedModule → header, footer
✔ Used in multiple modules

--------------------------
Scalability

👉 Large applications become manageable

✔ Easy to add new features
✔ No impact on existing code
---------------------
Improves Team Work

👉 Different teams can work on different modules

✔ No conflict
✔ Faster developmen


----------------------------------------------------------------------
What are Standalone Components?
👉 Standalone components are components that do NOT need NgModule
Why Angular Introduced Standalone?

👉 Problem with Modules ❌

Too much boilerplate
Extra files
Hard to manage small apps
👉 Solution ✅

Make components independent
--------------------------------------------------
1. Less Boilerplate Code

❌ With Module:
create module
declare component
✅ Standalone:
Direct use
✔ Cleaner code
----------------------------------
✅ 2. Faster Development
👉 No need to manage modules
✔ Write component → use directly
---------------------------------
✅ 3. Better Readability
👉 Everything in one place
imports: [CommonModule, FormsModule]
✔ Easy to understand
----------------------------------
✅ 4. Easy Lazy Loading 🔥
👉 Directly lazy load component
{
  path: 'home',
  loadComponent: () => import('./home.component')
}
✔ No module needed

----------------------------------------
5. Better Tree Shaking

👉 Only required code is loaded

✔ Smaller bundle size
✔ Better performance
--------------------------------
