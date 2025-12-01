#)Spring Boot actuator?
#)it is  used to for monitoring and mange your application  
#)It helps you check the health, metrics, logs, environment,
 and other internals of your Spring Boot application.
#)we can enable this feature by addoing the dependecy spring-boot-starter-actuator
in pom.xml.



--------------------------------------------------------------------
It exposes useful endpoints that give information about:
Application health
Metrics
Environment
Logs
Thread dumps
Beans
Mappings
Config properties





-----------------------------------------

-------------------------------------------------------------------------------
#)How to enable Actuator?
Add dependency in pom.xml:
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>

-----------------------------------------------------------
What information does Spring Boot Actuator provide?

Here are the most important Actuator endpoints:
