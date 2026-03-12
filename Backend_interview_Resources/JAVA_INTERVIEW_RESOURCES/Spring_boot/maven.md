#)What is Maven and Why Do We Use It? (Simple Answer)

Maven is a project management and build tool for Java.
We use it to manage dependencies, build the project, run tests, and package applications easily.

✅ Why do we use Maven? (Interview Points)
✅ 1. Dependency Management

You don’t need to manually download JAR files.

Just add this in pom.xml:

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>


Maven automatically downloads:

✅ All required JARs
✅ And their sub-dependencies (transitive dependencies)

✅ 2. Build and Package the Application

Maven can:

✅ Compile code
✅ Run tests
✅ Create JAR/WAR files
✅ Deploy artifacts


Just run:

mvn clean install

✅ 3. Standard Project Structure

Maven provides a common structure that every Java developer understands:

src/main/java
src/main/resources
src/test/java

✅ 4. Automated Builds

Maven plugins allow automated tasks:

✅ building
✅ running
✅ testing
✅ packaging
✅ reporting

✅ 5. Transitive Dependencies

If you add Spring Web:

spring-boot-starter-web


Maven automatically downloads:

✅ Spring MVC
✅ Tomcat
✅ Jackson

You don’t need to add them manually.

✅ 6. Easy Version Control

You can change version in pom.xml anytime:

<version>3.0.0</version>

✅ 7. Works perfectly with Spring Boot

Spring Boot uses Maven heavily for:

✅ starters
✅ auto-configuration
✅ dependency management