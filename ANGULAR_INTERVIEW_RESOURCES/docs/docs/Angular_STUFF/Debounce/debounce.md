Debounce:
Jab user typing band karta hai tab hi API call hota hai.


this.search
.pipe(
    debounce(500),
    distinctUntillChanged(),
    .switchMap(value =>this.api(value))
)
.subscribe()