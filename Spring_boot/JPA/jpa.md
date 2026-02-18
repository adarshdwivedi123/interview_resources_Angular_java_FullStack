#)what is jpa?
JPA helps Java programs talk to the database using Java objects instead of SQL queries.

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