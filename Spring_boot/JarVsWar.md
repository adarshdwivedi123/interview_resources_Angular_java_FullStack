1) WAR vs JAR in Spring Boot
✅ JAR (default in Spring Boot)

“Spring Boot applications run as a JAR because they contain an embedded server (Tomcat/Jetty/Undertow).
So you just run java -jar app.jar.”

✅ Advantages of JAR

No external Tomcat needed
Easy to deploy
Perfect for microservices
Faster startup
Simpler DevOps
--------------------------------------------------------------

✅ WAR (traditional Java)
“WAR files require an external server like Tomcat/GlassFish/JBoss.
You deploy WAR into that server.”

❌ Disadvantages
Must install Tomcat separately
Manual deployment
Slower
More complex

✅ Today → JAR is standard for Spring Boo

--------------------------------------
#)What happens when Spring Boot starts the embedded server? (Simple)

When you run:

java -jar app.jar


Spring Boot does:

Creates Spring Application Context
Loads beans
Auto-configures server (Tomcat/Jetty)
Starts server on port 8080
Registers controllers/endpoints
App starts serving HTTP requests
✅ That’s why no external server needed.