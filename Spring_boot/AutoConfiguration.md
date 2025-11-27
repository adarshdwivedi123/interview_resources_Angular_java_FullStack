How does Spring Boot handle auto-configuration?How does Spring Boot handle auto-configuration?

Spring Boot handles auto-configuration using the mechanism called
➡ Spring Boot Auto-Configuration
which automatically configures beans based on:

What dependencies are present on the classpath

Default Spring Boot configurations

Existing beans in the application context

You don’t need to manually configure common components like DataSource, JPA, MVC, MessageConverters, Embedded Server, etc.

✅ 1. @SpringBootApplication triggers auto-configuration

When you start a Spring Boot app, you use:

@SpringBootApplication


This actually includes three annotations:

@Configuration

@ComponentScan

@EnableAutoConfiguration ← This enables auto-config

So @EnableAutoConfiguration tells Spring Boot:

"Scan classpath, detect libraries, and automatically configure required beans."

✅ 2. Auto-config works using spring.factories / auto-config metadata

Spring Boot contains many auto-config classes (e.g., WebMvcAutoConfiguration, DataSourceAutoConfiguration).

These classes are listed under:

META-INF/spring.factories   (Spring Boot 2)
META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports (Spring Boot 3)


Spring reads these files and loads auto-config classes at runtime.

✅ 3. Auto-Configuration applies only when needed

Spring Boot uses conditional annotations to check whether to configure something or not.

Examples:

✔ @ConditionalOnClass

Configure beans only if a certain class is available.

✔ @ConditionalOnMissingBean

Configure default beans only if the user has not already defined one.

✔ @ConditionalOnProperty

Enable features based on application.properties.

✔ Example from DataSource auto-config:
@ConditionalOnClass(DataSource.class)
@ConditionalOnMissingBean(DataSource.class)


Meaning:

Only create DataSource if JDBC is on the classpath

And user didn’t create their own DataSource

✅ 4. Developer can override auto-config

If you define your own bean, Spring Boot stops auto-configuring that component.

Example:

If you define your own DataSource bean, Boot will NOT use its auto-configured DataSource.