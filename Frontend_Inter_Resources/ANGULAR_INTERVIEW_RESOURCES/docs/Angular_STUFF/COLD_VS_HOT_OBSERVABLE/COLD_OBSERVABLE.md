“Cold Observables create a new execution for each subscriber, like HTTP calls in Angular.
A Cold Observable starts producing values only when someone subscribes.
#)Each subscriber gets its own separate execution
HTTP API call
of(), from(), interval() (by default)
Cold is unicast, 


Angular Example (HTTP)
this.http.get('/api/data').subscribe();
this.http.get('/api/data').subscribe();

👉 Result:

2 subscriptions → 2 API calls