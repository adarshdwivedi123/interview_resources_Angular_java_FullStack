=========================================================================================
#)"Builder pattern is used to create objects with many fields, especially when some are optional, in a clean and readable way."



: Explain the Problem It Solves

"Imagine a User class with 6 fields — name, email, age, address, phone, and active. If I use a constructor, I'd end up with something like:
javaUser u = new User("Adarsh", "a@b.com", 25, "Bangalore", "9999", true);
This is hard to read — what does true mean? And if some fields are optional, I'd need many overloaded constructors. That's called the telescoping constructor problem."



"With Builder, the same code becomes readable:
javaUser u = User.builder()
    .name("Adarsh")
    .email("a@b.com")
    .age(25)
    .build();

=========================================================
Bilder pattern help to create complx object.

"Builder pattern is used to construct complex objects step by step.
It's especially useful when an object has many fields, some of which are optional, making constructors with many parameters unreadable and error-prone."



wihtout builder  our code
Hard to read — what does true mean at the end?


construcote withe n number of field
The Modern Way — Lombok's @Builder
In real-world Java, we rarely write builders by hand. We use Lombok:


User u = User.builder()
    .name("Adarsh")
    .email("a@b.com")
    .age(25)
    .build();
====================================================================

    When NOT to use Builder?
→ For simple objects with 2-3 fields, a constructor is cleaner.