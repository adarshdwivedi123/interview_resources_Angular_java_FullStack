1)
useClass (Replace One Class With Another)
exmaple:
In produciton we don't want logs and in dev we want logs
useClass in Production
🎯 Real Scenario: Dev vs Production Service

Imagine:

In development → log everything
In production → disable logs

-----------------------------------------------
providers: [
  {
    provide: LoggerService,
    useClass: environment.production
      ? ProdLoggerService
      : DevLoggerService
  }
]
✅ Why This Is Used?
Different behavior in different environments
Replace implementation easily
Clean abstraction

#)Important
useClass → Creates NEW instance
--------------------------------------------------------------


useValue (Provide a Simple Value)
👉 Meaning in Simple Words

Instead of giving a class, give a fixed value.


#)Important
useValue → No instance created, just value injected


---------------------------------------
useExisting (Alias / Same Instance)

It does NOT create a new object.
it use same Instance.

--------------------------------
#)useFactory
It is useful when object creation depends on runtime logic or other dependencies.