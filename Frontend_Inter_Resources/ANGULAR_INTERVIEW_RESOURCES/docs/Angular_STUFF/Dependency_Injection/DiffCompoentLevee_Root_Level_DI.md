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

Behavior

Same instance used in:
All components
All modules
Data is shared globally


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
