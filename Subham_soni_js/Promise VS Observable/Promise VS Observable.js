//Here  it  return stram of data
myObservable= new Observable((observer)=>{
    console.log("observer started");
    observer.next("a");
    observer.next("b");
    observer.next("c");
  });

  promise1= new Promise((resolve)=>{
    console.log("promise1 started")
    resolve("promise1 resolved")
    resolve("promise2 resolved")
    resolve("promise3 resolved")
  })

  ngOnInit(): void {
    this.myObservable.subscribe((value)=>{
      console.log(value);
    })

    this.promise1.then((value)=>{
      console.log(value)
    }



    . Real-Life Examples (Interview-Friendly)
// Promise → Zomato Order Example

// You order food once → you get one package.
// You cannot change the order after placing it.
// You cannot cancel once restaurant starts.
// ➡️ Same: Promise returns one value, cannot be cancelled.

// Observable → YouTube Live Stream
// You join a live stream → you get continuous data.
// You can leave anytime (unsubscribe).
// Data keeps coming until you close the stream.
// ➡️ Same: Observable gives multiple values over time.



//IN Angular
//Login api  get only one reponse once resolved a promise
//in get api one we subscibe  we get the srwema of data. 