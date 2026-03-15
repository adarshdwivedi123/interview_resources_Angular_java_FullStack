#)DIffernce between JPA AND ORM
JPA is just a standard that defines how to do ORM in Java.
Hibernate is a framework that provides the actual implementation of JPA and performs ORM operations.

ORM Tool — Definition

ORM stands for Object–Relational Mapping.

1)ORM stands for Object Relational Mapping.
2)It is a technique used to map Java objects to database tables automatically.
3)Instead of writing SQL queries manually, an ORM tool allows you to work with Java objects, and the ORM converts them into SQL queries.
or
An ORM tool is a framework or library that helps developers interact with a relational database (like MySQL, PostgreSQL, Oracle, etc.) using object-oriented programming concepts instead of SQL queries


for exampel we are defing java class  that will  automaticalluy convert intp databas tbale we
ahev to use on
public class Employee {
    private int id;
    private String name;
    private double salary;
}
Database Table
id	name	salary
1	Adarsh	50000

Mapping:

Employee class → employee table
id → id column
name → name column
salary → salary column


==========================================================
Example:2
When you write:

employeeRepository.save(emp);

Internally it becomes:
INSERT INTO employee (id,name,salary)
VALUES (1,'Adarsh',50000);
You never write this SQL manually.


=============================================================
Without ORM (Using JDBC)
When we use JDBC, we write SQL manually.

Example:

String sql = "INSERT INTO employee(id,name,salary) VALUES(1,'Adarsh',50000)";
Statement stmt = connection.createStatement();
stmt.executeUpdate(sql);

Problems:

Too much SQL code
Hard to maintain
More boilerplate code


===================================================
Advantages of ORM
✔ Reduces SQL code
✔ Faster development
✔ Easy database mapping
✔ Object-oriented approach
✔ Database independen

9. Disadvantages of ORM
❌ Sometimes slower for complex queries
❌ Hidden SQL queries
❌ Learning curve