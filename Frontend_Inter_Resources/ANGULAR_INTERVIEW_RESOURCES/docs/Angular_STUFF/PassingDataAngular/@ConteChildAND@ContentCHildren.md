@ContentChild aur @ContentChildren kya hote hain?


#)@ContentChild usse phele 
@ContentChild aur @ContentChildren kya hote hain?
Maan le parent component se kuch content child component ke andar bhej rahe ho.

Parent
<app-card>
  <p>Hello Bhai</p>
</app-card>

Child
<div class="card">
  <ng-content></ng-content>
</div>

Yahan <p>Hello Bhai</p> child component ke andar project ho gaya.
Isi ko content projection bolte hain.


Agar projected content me sirf ek element access karna ho, to @ContentChild
-----------------------exmale niceh
Example
Parent
<app-card>
  <p #msg>Hello Bhai</p>
</app-card>
Child
@ContentChild('msg') message!: ElementRef;

ngAfterContentInit() {
  console.log(this.message.nativeElement.innerText);
}
Output:
Hello Bhai
👉 Single item ke liye

-------------------------------------------------------------------------
@ContentChildren
Agar multiple items access karne ho, to @ContentChildren