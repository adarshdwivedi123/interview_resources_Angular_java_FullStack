1)microservices is architecture where the application is exposed  as loosely coupled services 
that can be independented devleoped and deployed and amainteained
2)Each service exposed referred to as Microservices.
Benfit of microservice c
1)if a team is is working on one of  the microservice using java  springboot and mySql ,another team can work  on another  microservice using python nodejs and noSql.
@)Differnt microservices can use a different verison of the  same programming languge.
b)diff microservice can use different programming lanaguge
c)Diff microservice can use diff architecture well.


each microservicen is running paralley 
discovery microservice =>Help us to discover microservicesso that we don' have to hard code our url and port number
2) Api gateway =>   


main featuers
1)microservices brekas an applicaiton  into smaller services and it is possible to develop deploy each services independetly. this makes the intoduction new featues in an applicaiton very easier.

2)Decentralize
3)Secuity 
4)Polygot
@)Differnt microservices can use a different verison of the  same programming languge.
b)diff microservice can use different programming lanaguge
c)Diff microservice can use diff architecture well.

Advantrage
1)All the services are independent of each other  .Therefor testing and deployment is easy as compare to monolith APPLICAINTO
2)microservice architeucure .its easy to buld complex applicaiotn
3)if there is bug in one microservice it has an impact only on a particule service and does not affect the
entire application.


-----------------------------------------------------------------------------
1)HOW microserice communicate each other?

Asynchronous communcaiton ()
Sychronous Communocation(Rabiit  ,kaaffa,Apache ActiveMQ)

---------------------------------------------------------------------------
MonoLithic  VS Microserices Vs Sercies Orientred Microservie Architrcture
Manin diff Based on sharing of data and info .SOA shares and reuses as much as possible  while 
MS  focuses on sharing  as little as possible.
-----------------------------------------------------------

Synchronus communcation
1)RestApi
2)GraphQl
3)Feign using EUreka  disciveries.
Eureka -> it handle load balancing situatio dyanmcis ULR
4)GRPC (10 times faster than Rest API )developed by google as substiture  of rest with many more features.

a synchronous call means that a service waits for the response after performing a request.

=>Asynchronous  call 
1)Active Mqa
2)Rabbit MQs
3)Kafka
what is async commication?

#)
Producer consumer problem?

circuit breaker pattern
fault tolerance


type of async communcioation
1)Point to Point (one sender and one consumer)
2)Publisherr-subscriber  
example Kafka ,Amazon


Even based Asycn COmmuncation()
-----------------------------------------------------------------------
#)Monolithic applicaiton
Such Appication comprise of client side interface ,server side applicaiton and a datbase



disadvnteg
1)Code base get larger witht time and hence it very diffuclt to manage
single bug in any module can bring down the whole applicaiton
it is very diffiult new technologu as it affects the whole application.



If we have monolithi applicaion what is ur approach start with microservice?
1)if we have monolith applciiton .identify all possible standalone functionalities.
2)once we have idntify we need  to creare standalone projects we are taking spring boot to 
create this microservices.
3)we need to them interact each other through same ways .
4)But just doing this does not make suer the we have omplemnted micoservices architecture.









