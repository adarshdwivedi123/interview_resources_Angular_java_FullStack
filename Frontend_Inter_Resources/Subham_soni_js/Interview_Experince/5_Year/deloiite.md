(interview have meniton understand with real life)
NOt able to explain concept properly
Conceptual based

understnad behind the scnen kya oh rha hai

1)Poject explantion acha kro.
wat are featue u ahve worked
migraiton angular applicaito from 7 to 18 and then 19
woked on  websocket 
language  suport 
ui design 
defer loading lgya hai
performace pe kaam kiya hia
Intro acha kro

2)signal pros and cons
componet me na  DI lga ge  root midule pe hi lgavo to kya  kya hi ksta hai poermicomce ke alwas
4)parent se data daal reh hai chile me child me data nhi ata whta should be the probelme,
5)How we handlin large list data 
3)signal should be use asynchronous
disadvantage of signal
4)new control flow.
5)circuti  breaker pattenr
6)Conncurent hasmap 
7)relalifre exmaple ake car hai usme  (OOPS)
8)ussi ti smhajo 
9)intheriance kaise use kro.
#)XSS attack

10)concurrent Modification
interviwewr ko axhe se smjha nhi  pa rha hu why
11)Hierarchical di
12)Hashmap insert null value.
13)Merge map vs concat vs switch map
14)diffence between reactive form template driveform.
15)angukar  17 lazy 



=====================================================================
Deloiite interview second  totallly on backned  it was full stack 

Two REST APIs can communicate asynchronously in multiple ways.
1)java 17  which  feature you have used in project.
2)HashMap and HashTable
3)equals and ==
4)Diffence HashMAp and hashTable.
5)Why we are using stream API wat problem it solve

Find the top 3 most frequent words in a list of strings, ignoring case, and excluding common 
"stop words" like "is" or "the".
mainWords ("Apple", "Banana","this", "apple","is","cherry", "banana", "apple", "the", "is");

stopWords = ("the", "is");
repating  count  the number exclude  this  stopwords 

public class  test{

public static void main(String[] args){

	List<String>mainWords = Array.asList("Apple", "Banana","this", "apple","is","cherry", "banana", "apple", "the", "is");

Set<String>stopWords=Set.of("the", "is");
List<Map.Entry<String, Long>>result=mainWords.stream() 
 
.map(String::toLowerCase)
.filter(word -> !stopWords.contains(word))
.collect(Collectors.groupingBy)
Collectors.counting()))c

}

}









=================================================
1. Message Queue (Most Common)

One API sends a message to a queue, and another API processes it later.

Flow
API A → pushes message to queue
Queue stores message
API B → consumes/processes message asynchronously
Technologies
Apache Kafka
RabbitMQ
Amazon SQS
Example

Order Service → sends "order created" event
Payment Service → listens and processes payment later.

Benefits
Loose coupling
Better scalability
Retry support
High performance
2. Webhook Communication

One API calls another API later using callback URL.

Flow
API A sends request with callback URL
API B processes data
API B calls callback URL after completion
Example

Payment gateway:

You send payment request
Payment system processes asynchronously
Later sends webhook response to your API
3. Event-Driven Architecture

Services publish events, other services subscribe.

Example

User Registered Event:

Email Service sends welcome mail
Notification Service sends SMS
Analytics Service stores data

All happen independently.

4. Polling

Client keeps checking API status repeatedly.

Flow
API request starts processing
API returns jobId

Client calls:

GET /status/{jobId}
When completed → result returned
Used When
Long-running operations
File processing
Report generation

=====================








16) standlalone ka fayida kya hai

--------------------------------
Q2. How pagination can be implemented in angular
Ans. Pagination in Angular can be implemented using components, services, and libraries for efficient data handling.
Use Angular Material's paginator component for easy implementation.

Create a service to fetch paginated data from the backend API.

Implement logic to handle page changes and update the displayed data.

Example: Use 'pageIndex' and 'pageSize' to request specific data slices from the server.

Consider using RxJS operators like 'switchMap' for efficient data fetching.

