#)protected

Accessible in:
Same class ✔
Same package ✔
Different package me subclass ke through ✅✔ (but only through inheritance)
Non-subclass in another package ✖

----------------------------------------------------------------------------------

👉 Key point:
Protected works in different packages only through inheritance.
Example:
protected void show() {}
--------------------------------------------------------------------------


Parent class in package A:
package p1;

public class A {
    protected int x = 10;
    int y = 20;  // default access
}

🔹 Child class in package B:
package p2;
import p1.A;

public class B extends A {
    public void test() {
        System.out.println(x);  // ✔ protected works through inheritance
        System.out.println(y);  // ❌ default does NOT work outside package
    }
}