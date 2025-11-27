#)Spring Boot actuator?
#)it is  used to for monitoring and mangemnt endPoints  for  application.
#)It helps you check the health, metrics, logs, environment,
 and other internals of your Spring Boot application.
#)that provides production-ready monitoring and management features for your application.



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
