🟡 Phase 2 — Core Microservices Concepts (4-6 Weeks)
Learn in this exact order:

Step 1 — Build Your First Microservice
java// Simple Order Service — your first microservice
@SpringBootApplication
public class OrderServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(OrderServiceApplication.class, args);
    }
}

@RestController
@RequestMapping("/orders")
public class OrderController {

    @GetMapping("/{id}")
    public Order getOrder(@PathVariable Long id) {
        return orderService.findById(id);
    }

    @PostMapping
    public Order createOrder(@RequestBody OrderRequest request) {
        return orderService.create(request);
    }
}
yaml# application.yml
server:
  port: 8081   # each service runs on different port

spring:
  application:
    name: order-service
  datasource:
    url: jdbc:mysql://localhost:3306/orderdb

Step 2 — Service Discovery (Eureka)
Problem:
  Service A needs to call Service B
  But what is Service B's address?
  What if it changes?

Solution:
  Eureka Server — like a phone directory
  All services register here
  Services find each other via name
java// Eureka Server
@SpringBootApplication
@EnableEurekaServer
public class EurekaServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(EurekaServerApplication.class, args);
    }
}
java// Each Microservice registers itself
@SpringBootApplication
@EnableEurekaClient
public class OrderServiceApplication { }
yaml# application.yml of each service
eureka:
  client:
    serviceUrl:
      defaultZone: http://localhost:8761/eureka/

Step 3 — API Gateway
Problem:
  Frontend calls User Service → localhost:8081
  Frontend calls Order Service → localhost:8082
  Frontend calls Payment Service → localhost:8083
  Too many URLs to manage!

Solution:
  API Gateway — single entry point
  Frontend calls → localhost:8080
  Gateway routes to correct service
yaml# API Gateway application.yml
spring:
  cloud:
    gateway:
      routes:
        - id: user-service
          uri: lb://USER-SERVICE
          predicates:
            - Path=/users/**

        - id: order-service
          uri: lb://ORDER-SERVICE
          predicates:
            - Path=/orders/**

        - id: payment-service
          uri: lb://PAYMENT-SERVICE
          predicates:
            - Path=/payments/**

Step 4 — Inter Service Communication
Two ways services talk to each other:

1. Synchronous  → RestTemplate / FeignClient (HTTP)
2. Asynchronous → Kafka / RabbitMQ (Messaging)
java// FeignClient — Service A calls Service B
@FeignClient(name = "user-service")
public interface UserServiceClient {

    @GetMapping("/users/{id}")
    UserDTO getUserById(@PathVariable Long id);
}

// Use in Order Service
@Service
public class OrderService {

    @Autowired
    private UserServiceClient userServiceClient;

    public Order createOrder(OrderRequest request) {
        // Call User Service to get user details
        UserDTO user = userServiceClient
                          .getUserById(request.getUserId());
        // create order with user details
    }
}

Step 5 — Centralized Configuration
Problem:
  10 microservices → 10 application.yml files
  Change DB password → update 10 files!

Solution:
  Config Server — one place for all configs
  All services fetch config from here
java// Config Server
@SpringBootApplication
@EnableConfigServer
public class ConfigServerApplication { }
yaml# Config Server application.yml
spring:
  cloud:
    config:
      server:
        git:
          uri: https://github.com/yourrepo/configs

Step 6 — Circuit Breaker (Resilience4j)
Problem:
  Order Service calls Payment Service
  Payment Service is DOWN
  Order Service keeps waiting → Times out
  Order Service also goes down!
  Chain of failures = Cascading failure

Solution:
  Circuit Breaker — if service fails 5 times
  Stop calling it for 30 seconds
  Return fallback response instead
java// Circuit Breaker with Resilience4j
@CircuitBreaker(name = "paymentService",
                fallbackMethod = "paymentFallback")
public PaymentResponse processPayment(PaymentRequest request) {
    return paymentServiceClient.process(request);
}

// Fallback — called when payment service is down
public PaymentResponse paymentFallback(
        PaymentRequest request, Exception ex) {
    return new PaymentResponse("PENDING",
                               "Payment service unavailable");
}

🔴 Phase 3 — Advanced Topics (4-6 Weeks)

Step 7 — Distributed Tracing (Zipkin + Sleuth)
Problem:
  One request goes through 5 services
  Something fails — which service failed?
  How to trace the full journey?

Solution:
  Each request gets unique Trace ID
  Track request across all services
  Visualize in Zipkin dashboard
yaml# Each service
spring:
  sleuth:
    sampler:
      probability: 1.0   # trace all requests
  zipkin:
    base-url: http://localhost:9411

Step 8 — Centralized Logging (ELK Stack)
Problem:
  10 services → 10 log files
  Error happened — search 10 files!

Solution:
  ELK Stack
  E — Elasticsearch  → store logs
  L — Logstash       → collect logs
  K — Kibana         → search and visualize

Step 9 — Message Queue (Kafka)
Problem:
  Order placed → notify User
  If notification service is down
  Order service fails too!

Solution:
  Kafka — async messaging
  Order Service publishes event
  Notification Service consumes when ready
  No direct dependency
java// Producer — Order Service
@Service
public class OrderService {

    @Autowired
    private KafkaTemplate<String, OrderEvent> kafkaTemplate;

    public void createOrder(Order order) {
        // Save order
        orderRepository.save(order);

        // Publish event — fire and forget
        kafkaTemplate.send("order-topic",
                           new OrderEvent(order.getId(), "CREATED"));
    }
}

// Consumer — Notification Service
@KafkaListener(topics = "order-topic")
public void handleOrderEvent(OrderEvent event) {
    // Send email, SMS notification
    notificationService.send(event);
}

Step 10 — Docker & Kubernetes
Docker:
  Package each microservice as container
  Run anywhere — no environment issues

Kubernetes:
  Manage multiple containers
  Auto scaling, self healing
  Load balancing
dockerfile# Dockerfile for each service
FROM openjdk:21-slim
COPY target/order-service.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]
yaml# docker-compose.yml — run all services
version: '3.8'
services:
  eureka-server:
    build: ./eureka-server
    ports:
      - "8761:8761"

  order-service:
    build: ./order-service
    ports:
      - "8081:8081"
    depends_on:
      - eureka-server
      - mysql

  payment-service:
    build: ./payment-service
    ports:
      - "8082:8082"

  mysql:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: root