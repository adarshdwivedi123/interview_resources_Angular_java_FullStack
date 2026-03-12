Since both this() and super() must be the first statement, you cannot use them together in a single constructor.

You can use either one, but not both.


#)This keyword can be  used   to refer  current class instance varible.
if their is ambigity between instance varibla and parmeter varible this keyword reoslve the prnlm
of ambiguoty

1)this can be used to invoke a current  class method.
2)this() can be used to invoke current class constructor
4)this.Must be the first statement if used in constructor.

Example likho

------------------------------------------------------------------------------------------
class Employee{
    int id;
    String name;
    double salary;
    //this() is used to call another constructor in the same class → avoids code duplication.
    // Constructor 1: No-arg
    Employee() {
        System.out.println("errot"); //compile time error
        this(101, "Default Name", 5000.0); // Call another constructor
    }
    
    //Parametrize constructor
    Employee(int id ,String name , double salary){
        this.id=id;
        this.name=name;
        this.salary =salary;
    }

    void display(){
        System.out.println("ID"+this.id +"Name :"+this.name +"Salary"+this.salary);
    }

}

public class TestThis {
    public static void main(String[] args) {
        Employee e1 =new Employee( 102,"Adarsh",1000);
        e1.display();

        Employee e2 = new Employee(); // Calls no-arg constructor → this() → parameterized constructor
        e2.display();

    }
}
