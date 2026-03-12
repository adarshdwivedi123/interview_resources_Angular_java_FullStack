#)REST
Representaionl State transfer
#)What is Idempotency?
A request is idempotent if calling it one time or 100 times has the same effect on the server.

✅ GET
1)Used to retrieve data from the server.
2)It does not modify anything on the server.

3)Sends data in the URL as query parameters.
Example:

GET /users?id=5
4)Idempotency
✅ GET
Idempotent
Calling GET 10 times → result is same
No change on server
#)Use GET when:
Fetching data
Getting user details
Searching
Reading lists

-----------------------------------------------------------------------

✅ POST
1)Used to send data to the server to create or process something.
2)It usually changes the server state.
3)Sends data in the request body.
4)Not idempotent
Calling POST 10 times → may create 10 new records
Example:

POST /users
{
  "name": "John",
  "email": "john@gmail.com"
}

5)Use POST when:

Creating a new record
Logging in
Uploading files
Submitting forms
Performing actions that modify data


----------------------------------------------------------------------------------
#)delete
DELETE /api/users/10
1)Used to delete a resource from the server.
2)Idempotent → deleting the same resource multiple times results in the same final state (resource stays deleted).
3)Should remove the resource from the system permanently.

#)Put
1)Used to fully update an existing resource.
2)put is idempotent
calling PUT 10 times has the same effect as calling once.
3)If a field is missing in the request body, it may be overwritten or set to null (depending on implementation).
PUT /api/users/10
-------------------------------------------------------------------

#)patch
PATCH is used to update only specific fields of an existing resource.
You do not send the full object—only the fields you want to change.
Partial Update

Only updates selected fields.

Remaining fields stay unchanged.



Example:
You only want to update the email of a user, not the whole object.

2. More Efficient

Sends less data than PUT.

Useful when objects are large and only a few fields need updates.

✅ 3. Not Always Idempotent

Some PATCH operations are idempotent, some are not (depends on implementation).

But typically treated as partial modification.

✅ Example (API call)
Request:
PATCH /api/users/10

------------------------------------------------------
Idempotent Example (if logic just sets a field)
PATCH /user/10
{ "status": "active" }


Calling this 100 times → status remains “active”
✅ Idempotent in this case.

❌ Not Idempotent Example (increment operation)
PATCH /account/10
{ "balance": "+100" }


First call → +100

Second call → +100 again

Final state changes each time
❌ Not idempotent.

So PATCH depends on implementation.
-----------------------------------------------------
#)CascadeType.ALL -> agar parent me change kr reh  hait to child me chnages oh rha hai
then we use CasCaseType.ALL
