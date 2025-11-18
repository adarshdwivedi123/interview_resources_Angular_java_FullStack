why we are using applicaiton.prop

1)application.properties is used in Spring Boot to store all application configuration such as database details, logging, server port, JWT secrets, email settings etc.

2)It helps externalize configuration so we don’t hardcode values in code and can easily switch between environments.

1)To configure database

spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=root
spring.jpa.hibernate.ddl-auto=update

2)To set server configuration
server.port=8081
server.servlet.context-path=/api


3)To configure logging
logging.level.org.springframework=INFO
logging.file.name=app.log


----------------------------------
