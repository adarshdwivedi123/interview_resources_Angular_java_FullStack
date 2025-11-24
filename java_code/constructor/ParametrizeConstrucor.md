#)A constructor which  have specfic no of parmeter is called parameterized constructor.

class Student {
    int id;
    String name;

    // Parameterized constructor
    Student(int id, String name) {
        this.id = id;
        this.name = name;
    }

    void display() {
        System.out.println(id + " " + name);
    }
}

public class Test {
    public static void main(String[] args) {
        Student s1 = new Student(101, "Adarsh");
        Student s2 = new Student(102, "Ajay");

        s1.display();
        s2.display();
    }
}
✔ Output:
Copy code
101 Adarsh
102 Ajay
---------------------------------------------------------------------------
🎯 Why do we use parameterized constructor?
To assign values at object creation
To create multiple objects with different values
To avoid using setter methods
To maintain immutability (like in String or Record)

