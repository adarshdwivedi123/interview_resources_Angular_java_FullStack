#)RouterLink
1)used in html
2)user click
3)simple links


---------------------------------------------------
routerLink is an HTML directive used inside templates for navigation.

Usage
It is used when you want the user to navigate by clicking a link or button.

Example
<a [routerLink]="['/dashboard']">Go to Dashboard</a>
Key Characteristics

Works only in HTML templates

Best for static navigation
No logic or conditions can run before navigation

------------------------------------------------
#)router.navigate
1)used in typescript
2)based on logic we are navigasiton
3)conditonal navigation

-----------------------------------------------------
What is router.navigate()?
Definition
router.navigate() is a TypeScript method used to navigate programmatically.

Usage
Used when navigation must happen based on some logic, such as after:

Form submission
API call
Condition checking
User authentication

Example
if (form.valid) {
  this.router.navigate(['/dashboard']);
}
Key Characteristics


Works only in TypeScript
Best for dynamic navigation
You can execute logic before navigating
More powerful & flexible
-------------------------------------------
