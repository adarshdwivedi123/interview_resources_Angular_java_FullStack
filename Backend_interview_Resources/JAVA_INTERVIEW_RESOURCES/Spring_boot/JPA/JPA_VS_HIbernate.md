#)Hibernate is a ORM (Object Relational Mapping) framework in Java.
It helps you convert Java objects ↔ Database tables automatically.

#)Hibernate removes the need to write raw SQL queries for most CRUD operations.
You work with Java classes, and Hibernate handles the database.


#)Why is Hibernate used?
Because it makes database handling easier:
✔ No need to write SQL for CRUD
Hibernate auto-generates SQL like:
INSERT
UPDATE
SELECT
DELETE
--------------------------------------------------------------
Why do we use Hibernate in Spring Boot?

Because:
1️⃣ Spring Boot uses Hibernate by default
When you use Spring Data JPA, internally it uses Hibernate as the default ORM provider.
2️⃣ Saves development time
No SQL, no JDBC boilerplate, no connection management.
3️⃣ Integrates deeply with Spring Data JPA
