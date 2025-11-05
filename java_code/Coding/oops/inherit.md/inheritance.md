Inheritance :it can inherit both funcitons and varibles so we do not have to write  them again in child  classes
can be acheived using extends  keyword pr through interface.

package Coding.oops;

import javax.management.relation.Relation;

public class inheritance {
    
}

Dimaond problem  not allowed
Through interfacw its allowed


1)Is-a Relationship
Achieved throgh inheritance
Parent child Relationship is called Inheritance

2)Has-a Relationship
Whenever an object is used  in other class its a called HAS-A relationship.
Relationship could be one to one ,one to many , many to one.

Aggregration(Week Relatiionship)
Composition(Strong Relationship)

#)Ask in interview
------------------------------------------------------
#)Aggregation
Definition: A relationship where one class contains a reference to another class, but both can exist independently.
It represents a weak “Has-A” relationship.
Lifetime: If the container object is destroyed, the contained object can still exist.

Example: A Department has Teachers. Even if the Department is closed, Teachers can still exist.

class Teacher{
    String name;
    Teacher(String name){
        this.name=name;
    }
}

class School{
    Teacher teacher;   //here teacher ka object pass kr reh ahia school
    School(Teacher teacher){
        this.teacher =teacher;
    }
    void show(){
        System.out.println("School has a teacher"+teacher);
    }

}


public class Aggreation {
    public static void main(String[] args) {
        Teacher t1= new Teacher("Ajju");
        School s1 =new School(t1);
        s1.show();
    }
}


Here, t1 (Teacher object) is created independently.

Then we pass that object into the School.

So:

Teacher can exist even if there is no School.

The lifecycle is separate.

If you destroy School, Teacher (t1) is still there.

👉 This is why it’s called Aggregation (weak relationship).
Objects are different because Teacher object is created outside and then used inside School.


-------------------------------------------------------------------------
#)Composition


#)one class depends on another class for its functionality,
Definition: A relationship where one class contains another class, and the contained class cannot exist without the container.

It represents a strong “Has-A” relationship.
Lifetime: If the container object is destroyed, the contained object is also destroyed.

Example: A House has Rooms. If the House is destroyed, Rooms cannot exist on their own.


class Heart {
    void pump() {
        System.out.println("Heart is pumping...");
    }
}

class Human {
    private Heart heart;  // Composition

    Human() {
        heart = new Heart(); // Heart created inside Human
    }

    void live() {
        heart.pump();
        System.out.println("Human is alive!");
    }
}

public class CompositionDemo {
    public static void main(String[] args) {
        Human h1 = new Human();
        h1.live();
    }
}

Here, Heart object is created inside Human.

You cannot create a Heart separately and pass it later.

If Human object is destroyed, its Heart is also destroyed.

👉 This is Composition (strong relationship).
Objects are different because Heart does not exist on its own—it always belongs to a Human.


EX
Aggregation → independent objects (e.g., Library–Books).
Composition → dependent objects (e.g., Human–Heart).

--------------------------------------------------------------------------------------------
// Online Java Compiler
// Use this editor to write, compile and run your Java code online
//mutlileve inheritnace
class SuperDad{
    int a=10;
    public void plot1()
    {
        
        System.out.println(" 200 plot hai ");
    }
}

//sinlge inherticance
class Dad extends SuperDad {
    public void plot(){
        
        System.out.println(" 2000 ka plot hai ");
    }
}
class adarsh extends Dad{
    //here we cna create our own mwthod also
     public void name(){
         System.out.println("adarsh");
     }
    
}


class Main {
    public static void main(String[] args) {
        adarsh ad= new adarsh();
        ad.plot();
          ad.plot1();
          ad.name();
        System.out.println(ad.a);
    }
}


//single level
//heirachail level 
//multilevel
//hybrid level
inheritance  we use for code resaublity ke liye
//we can inherit variblae and methods



IMP POint
The Base Class, also known as the Parent Class is a class, from which other
classes are derived.
The Derived Class, also known as Child Class, is a class that is created from an
existing class

