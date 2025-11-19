#)What	is	default	class	modifier?
• A class is called a Default Class is when there is no access modifier specified on a class.
• Default classes are visible inside the same package only


-----------------------------------------------------------------------
Default vs Protected — ONE KEY DIFFERENCE
⭐ Default works ONLY inside the same package.
⭐ Protected works inside the same package AND in subclasses of other packages.
That’s it. This is the ONLY difference

---------------------------------------------------------------------------------
#)default (package-private)
(When you don’t write any modifier)Accessible only within the same package
Same class ✔
Same package ✔
Different package ✖
Subclass in different package ✖
👉 Very important: default does NOT work outside the package—even with inheritance.

