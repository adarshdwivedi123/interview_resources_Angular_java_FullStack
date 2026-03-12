How do you configure logging levels in Spring Boot?

"In Spring Boot, logging levels are configured in application.properties or application.yml using logging.level. keys. For advanced settings, we can use logback-spring.xml."*
#)Spring Boot uses Logback as the default logging framework.
You can configure logging levels in:
----------------------------------------

A. application.properties
logging.level.root=INFO
logging.level.com.example=DEBUG
logging.level.org.springframework.web=ERROR


------------------------------------------------
B. application.yml
logging:
  level:
    root: INFO
    com.example: DEBUG
    org.springframework.web: ERROR

    -----------------------------------------
    Using logback-spring.xml (Advanced)

Placed inside src/main/resources:

<configuration>
    <logger name="com.example" level="DEBUG"/>
    <root level="INFO">
        <appender-ref ref="CONSOLE"/>
    </root>
</configuration>

----------------------------------------------------------------
#)What is the difference between SLF4J, Log4j, and Logback?\
"SLF4J is just a logging abstraction layer.
Log4j and Logback are actual logging implementations.
Spring Boot uses Logback as the default logger."


omponent	What it is
SLF4J	    Interface
Log4j	    Older implementation
Logback	    Newer, faster implementation (Spring Boot default)