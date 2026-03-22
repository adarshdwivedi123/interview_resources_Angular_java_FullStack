#) What is DDL, DML, DQL?
👉 Ye sab SQL command types hain
👉 Database ko manage karne ke liye use hote hain

=====================================================
1. DDL (Data Definition Language)
table ka structure banata ya change karta hai



Commands:
CREATE → table banana (used for creating the structure of the db).
ALTER → table modify ()
DROP → table delete
TRUNCATE → data remove (structure same)

Create table users(
    id INT,
    name VARCHAR(50)
);

ALTER TABLE user ADD age INT;

DROP TABLE users;
================================================
2. DML (Data Manipulation Language)

👉 Data ko insert, update, delete karta hai
(DML = table ke andar data change karta hai)

INSERT
UPDATE
DELETE

INSERT INTO users VALUES (1, 'Adarsh');

UPDATE users SET name = 'Rahul' WHERE id = 1;

DELETE FROM users WHERE id = 1;
================================================
3. DQL (Data Query Language)
👉 DQL is used to retrieve data using SELECT queries."
SELECT * FROM users;

SELECT name FROM users WHERE id = 1;
💡 Easy Line
👉
DQL = data ko read karta hai

==========================================================
Q2: Difference between WHERE and HAVING?

"WHERE clause is used to filter rows before grouping, while HAVING is used to filter grouped data after applying GROUP BY."



Ab HAVING samjho (IMPORTANT 🔥)
SELECT department, COUNT(*) 
FROM employees 
GROUP BY department 
HAVING COUNT(*) > 2;

Matlab:

Pehle group banao
Fir filter karo


===========================================
WHERE → row level filtering (pehle)
HAVING → group level filtering (baad me)
===========================================


JOINS (VERY IMPORTANT 🔥)

👉 Multiple tables ko connect karta hai

----------------------------------------------------
🔹 GROUP BY

👉 Group banata hai

SELECT department, COUNT(*) 
FROM employees 
GROUP BY department;
🔹 ORDER BY

👉 Sort karta hai

SELECT * FROM users ORDER BY name ASC;


-------------------------------------------------
Subqueries

👉 Query ke andar query

SELECT * 
FROM employees 
WHERE salary > (SELECT AVG(salary) FROM employees);

👉 Use case:

Complex filtering
-------------------------------------
7. Index

👉 Query fast karta hai

CREATE INDEX idx_name ON users(name);

👉 Pros:

Fast SELECT

👉 Cons:

Slow INSERT/UPDATE
------------------------------
9. Constraints

👉 Rules on data

NOT NULL
UNIQUE
PRIMARY KEY
FOREIGN KEY
---------------------------------------------
🚀 10. Transactions & ACID
🔹 Transaction

👉 Group of queries

🔹 ACID
A → Atomicity

👉 All or nothing

C → Consistency

👉 Data valid rahe

I → Isolation

👉 Parallel transactions safe

D → Durability

👉 Data save ho jaye
------------------------------------------
11. COMMIT & ROLLBACK

---------------------------------------------

1. Identify Problem (Sabse pehle 🔥)

👉 Check karo:

Kaunsi query slow hai
Kitna time le rahi hai

👉 Tools:

EXPLAIN keyword
EXPLAIN SELECT * FROM users;

👉 Ye batata hai:

Kaunsa index use ho raha
Full table scan ho raha ya nahi
-------------------------------------------

🔹 2. Index Use karo (MOST IMPORTANT 🔥)

👉 Index = shortcut for searching data

❌ Without Index
SELECT * FROM users WHERE name = 'Adarsh';

👉 DB:

Pure table scan karega ❌ (slow)
✅ With Index
CREATE INDEX idx_name ON users(name);

👉 Ab:

Direct data mil jayega ⚡
💡 Kab use kare?
WHERE
JOIN
ORDER BY
🔹 3. SELECT * avoid karo
❌ Bad
SELECT * FROM users;

👉 Problem:

Extra unnecessary data fetch
Performance slow
✅ Good
SELECT id, name FROM users;

👉 Only required data → fast ⚡

🔹 4. Proper WHERE condition use karo
❌ Bad
SELECT * FROM users WHERE YEAR(created_at) = 2024;

👉 Problem:

Index use nahi hoga
✅ Good
SELECT * FROM users 
WHERE created_at BETWEEN '2024-01-01' AND '2024-12-31';

👉 Index use hoga → fast

🔹 5. Joins optimize karo
❌ Bad
SELECT * FROM orders o, users u;

👉 Cartesian product ❌ (very slow)

✅ Good
SELECT o.id, u.name 
FROM orders o
INNER JOIN users u ON o.user_id = u.id;

👉 Proper join condition → fast

🔹 6. Limit & Pagination use karo
❌ Bad
SELECT * FROM users;
✅ Good
SELECT * FROM users LIMIT 10 OFFSET 0;

👉 Large data → small chunks

🔹 7. Avoid unnecessary subqueries
❌ Bad
SELECT * FROM users 
WHERE id IN (SELECT user_id FROM orders);
✅ Better (JOIN)
SELECT u.* 
FROM users u
JOIN orders o ON u.id = o.user_id;
🔹 8. Use proper data types

👉 Example:

INT instead of VARCHAR for numbers

👉 Smaller data → faster query

🔹 9. Remove duplicates / unnecessary data

👉 Normalize database
👉 Clean data
-------------------------------------------------

"To fix slow queries, I first analyze the query using EXPLAIN to identify bottlenecks. Then I optimize it by adding indexes on frequently searched columns, avoiding SELECT *, writing efficient joins, and using proper filtering conditions. I also use pagination for large datasets and ensure queries are structured to leverage indexes effectively."