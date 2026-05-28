#)Component Provider vs Root Provider in Angular
1. Root Provider (providedIn: 'root')
@Injectable({
  providedIn: 'root'
})
export class UserService {}
✅ What it means
Service is registered in the root injector
Only ONE instance (singleton) is created
Shared across the entire application
The data needs to be shared across the whole app.

Behavior

Same instance used in:
All components
All modules
Data is shared globally
providedIn: 'root'  ← registered globally
#Note
 A root provider stays alive for the entire app lifetime — it never gets cleaned up until the page closes.

AuthService (logged-in user everywhere), ThemeService (dark/light mode), NotificationService.


@Component({...})
export class AComponent {
  constructor(private userService: UserService) {}
}

@Component({...})
export class BComponent {
  constructor(private userService: UserService) {}
}

👉 AComponent and BComponent use the same instance

--------------------------------------
🔵 2. Component Provider (providers: [])
Service is registered in the component-level injector
A new instance is created for that componen
ParentComponent and ChildComponent share the same instance (scoped to parent)
Note
A component provider gets destroyed the moment the component is removed from the DOM. Angular automatically cleans up the service instance and calls ngOnDestroy on it if you implement it.
#)Example
  providers: [FormStateService]  ← registered here


-------------------------------------------------------------
What happens if service is provided in BOTH root and component?
👉 Component provider wins
Angular uses the closest injector
So component gets new instance, NOT root one



----------------------------------------
❓ When to use Rool Level Provider?
Auth interceptor
Authtentication service 
You want it to run for ALL API calls
Not just one component

What if you use Component Provider?

👉 Bad idea ❌

Multiple instances created
Inconsistent behavior


#)compoent Level provider

Tguer is form each compeont have differnct data then we can define that
