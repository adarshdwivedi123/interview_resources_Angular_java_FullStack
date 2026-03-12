#)Default Constructor
If their is no construcotr in a class compiler automatically create defult constructor
#)Purpose of a defualt construcotr is used to provide the defualt values  to object like 0 ,null ,etc


------------------------------------

class Student{
    
    int id;
    String name;
    void display(){
        System.out.println(id+""+name);
    }
}


class Main {
    public static void main(String[] args) {
        Student s1= new Student();
        s1.display();
        
    }
}

0null

---------------------------------------