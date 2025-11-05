public class serilization {
    
}
Serialization in Java is a mechanism used to convert an object into a byte stream,
so it can be easily
 1)saved to a file,
 2) sent over a network, 
3) stored in a database — 
and later reconstructed (deserialized) back into the same object.

#)Serialization = Converting an object → byte stream
#)Deserialization = Converting byte stream → object


--------------
#)How do you serialize an object using Serializable interface?

To serialize an object:

The class must implement java.io.Serializable (a marker interface — no methods).

Use ObjectOutputStream to write the object.

-------------------------------------------------------------------------------
#)How do you de-serialize in Java?

To de-serialize (read object back):
Use ObjectInputStream and readObject().


-------------------------------------------------------------------------
What do you do if only parts of the object have to be serialized?

Use the transient keyword for fields you don’t want to serialize.
class Employee implements Serializable {
    String name;
    transient String password; // will not be serialized

    Employee(String name, String password) {
        this.name = name;
        this.password = password;
    }
}
