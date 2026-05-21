Angular introduced a new control flow syntax in Angular 17 using `@if`, `@for`, and `@switch` as a replacement for structural directives like `*ngIf`, `*ngFor`, and `*ngSwitch`.

The new syntax provides cleaner, more readable templates with better performance and easier nested condition handling. It also supports features like `@empty` and built-in tracking in `@for`.

✅ Cleaner syntax
✅ Better readability
✅ Better performance
✅ More similar to JavaScript



@for (user of users; track user.id) {

  <div>{{ user.name }}</div>

} @empty {

  <div>No Users Found</div>

}