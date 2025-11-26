#)What is transient keyword in Java?

The transient keyword is used to prevent a field from being serialized.

Meaning →
When an object is converted into a byte stream (serialization), transient fields are skipped.

--------------------------------------------------------------------------------
⭐ Why do we need transient?

Sometimes an object contains fields that:
Should not be saved
Are sensitive (password, OTP, secret key)
Are irrelevant to serialization
Cannot be serialized (non-serializable classes)
In those cases, we mark them as transient.


----------------------------------------------------------------------
class User implements Serializable {

    private String name;

    private transient String password;  // will NOT be serialized
}
-----------------------------------------------------------------
When to Use transient?

Use transient for:

✔ Sensitive data

passwords

bank details

tokens

encryption keys

---------------------------------------------