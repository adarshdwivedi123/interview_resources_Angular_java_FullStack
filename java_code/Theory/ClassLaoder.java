// public class ClassLaoder {
    
// }


A java program is made up of classes and objects. 
When a Java program is executed, the Java Virtual Machine (JVM) needs to load the classes into memory before they can be used.      


Three class loaders in Java are:
1. Bootstrap Class Loader: This is the parent of all class loaders and is responsible for loading core Java classes from the Java Runtime Environment (JRE), such as classes from the java.lang and java.util packages.
2. Extension Class Loader: This class loader loads classes from the extensions directory of the JRE. It is responsible for loading optional packages or extensions that are not part of the core Java classes.
3. System/Application Class Loader: This class loader loads classes from the application's classpath, which includes directories and JAR files specified by the user. It is responsible for loading the classes that are specific to the application being executed.