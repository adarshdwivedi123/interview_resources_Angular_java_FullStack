#)what is jpa?
(Java Persistence API)
1)JPA helps Java programs talk to the database using Java objects instead of SQL queries.
2)Instead of writing SQL queries manually, we work with Java objects and JPA handles the SQL automatically.
3)In Spring Boot we use Spring Data JPA which is built on top of Hibernate — the most popular JPA implementation."

Ex
@Entity
Map to databse

@Repository 
Instead of writing DAO classes manually, I used Spring Data JPA repositories. Just by extending JpaRepository, I got all basic CRUD operations for free."


1)JPA helps Java objects interact with a relational database.
It uses ORM (Object Relational Mapping).


1)Difference between JPQL and Native Query?

JPQL         →  Query using Java Class names
                Database independent

Native Query →  Query using actual SQL(Actual Sql thst wwe right is callled)
                Database specific
==========================================================
// Same result — two different ways

// ✅ JPQL — uses Class name "Order", field name "status"
@Query("SELECT o FROM Order o WHERE o.status = :status")
List<Order> findByStatus(@Param("status") String status);

// ✅ Native — uses table name "orders", column name "status"
@Query(
    value = "SELECT * FROM orders WHERE status = :status",
    nativeQuery = true
)
List<Order> findByStatusNative(@Param("status") String status);
==============================================================

2) What is FetchType LAZY vs EAGER?

1. FetchType.LAZY
Data loads only when needed.

Employee emp = repo.findById(1).get();
Advantages
Better performance
Saves memory
Loads less data initially

Disadvantages
Can cause LazyInitializationException
Multiple queries may happen


FetchType.EAGER
Related data loads immediately with parent entity.

Advantages
Data available immediately
No lazy loading error

Disadvantages
Performance issue if large data
Unnecessary data fetched

----------------------------------------------------
Related data loads immediately with parent entity.


@OneToMany   →  LAZY   (default)
@ManyToMany  →  LAZY   (default)
@ManyToOne   →  EAGER  (default) ⚠️
@OneToOne    →  EAGER  (default) ⚠️


It automatically detects changes in an entity object and updates the database without writing update query manually.


3)What is CascadeType?
"Cascade means when I perform an operation on parent, same operation is applied to child automatically."

// CascadeType.ALL — all operations cascade
@OneToMany(cascade = CascadeType.ALL)
private List<Order> orders;

// Save user → orders also saved ✅
// Delete user → orders also deleted 

Q: Difference between save() and saveAndFlush()?


Q: What is @Transactional?

"It ensures multiple DB operations succeed or fail together. If any operation throws exception, all changes are rolled back. I used it on service methods that perform multiple DB operations."


Q)N+1 problem happens when Hibernate fires:

1 query for parent data
N extra queries for child data
This causes performance issues.

N+1 problem occurs when Hibernate executes one query for parent records and additional N queries for related child records, causing performance issues.







========================================================

In simple words:
👉 JPA helps convert Java objects ↔ Database tables

This concept is called ORM (Object Relational Mapping).
===============================================================
Advantages of JPA
✔ Less SQL codeo
✔ Automatic table mapping
✔ Easy CRUD operations
✔ Works with multiple databases

-------------------------------------------------------------------------------------------
JPA does not provide any implementation
✔ It only defines interfaces, annotations, and guidelines for mapping Java objects to database tables.

#)Examples of JPA features:
@Entity
@Id
@Column
EntityManager
JPQL (Java Persistence Query Language)

----------------------------------

Main advantage of jpa is we need to define  Mapping rest jpa will hanle the query
--------------------------------------------------
map relationshipin jpa
differnt type of relationship in jpa?
one to one Mapping jpa?
one to many Mapping in java?
many to many Mapping in jpa?
-----------------------------------
Spring jpa
Mvc
RelationsShipMapping
hiberna

Configure entity managerFactory  Transactional  management?
making service Transactional?


---------------------------------------Asked
Common Problem You Solved — N+1 Issue
When I fetched 100 users, JPA was firing 101 queries — 1 for users and 100 more to fetch each user's orders separately."

java// ❌ Problem — N+1 queries
List<User> users = userRepository.findAll();
// Query 1 — SELECT * FROM users
for (User user : users) {
    user.getOrders(); // Query for EACH user!
    // Query 2,3,4...101
}

// ✅ Solution — JOIN FETCH
@Query("SELECT u FROM User u " +
       "LEFT JOIN FETCH u.orders")
List<User> findAllWithOrders();
// Single query with JOIN — no N+1 ✅

"I solved it using JOIN FETCH in the JPQL query — fetched everything in a single query."


------------------------------------------------------------
WHEN TO USE @JoinColumn ?

Use @JoinColumn when you want to specify:
The name of the foreign key column
Which table will have the FK
You want to make this side the owner of the relationship
-----------------------------------------------------------------------------
Example (Task is owner):

@ManyToOne
@JoinColumn(name = "user_id")
private User user;

-----------------------------------------------
WHEN TO USE mappedBy ?

Use mappedBy on the side that is not the owner.

Example:

@OneToMany(mappedBy = "user")
private List<Task> tasks;


This says:
“Check Task.user for FK.”

---------------------------------------------
WHEN TO USE mappedBy ?

Use mappedBy on the side that is not the owner.

Example:

@OneToMany(mappedBy = "user")
private List<Task> tasks;

-----------------------------------------------
 How to disable a specific auto-configuration class?
@EnableAutoConfiguration annotation
-------------------------------------------------