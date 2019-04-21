import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  numberobssubscription:Subscription
  customobssubscription:Subscription
  constructor() { }

  ngOnInit() {
    const myNumbers=Observable.interval(500)
      .map(
        (data:number)=>{
          return data*2
        }
      )
    this.numberobssubscription=myNumbers.subscribe(
      (number:number)=>{
        console.log(number)
      }
    )

    const myObservable=Observable.create(
      (observer:Observer<string>)=>{
        setTimeout(()=>{
            observer.next('first package');
          },2000);
        setTimeout(()=>{
            observer.next('second package');
          },4000);
        // setTimeout(()=>{
        //     observer.error('this does not work');
        //   },5000);
        setTimeout(()=>{
            observer.complete();
          },6000);
        setTimeout(()=>{
            observer.next('third package');
          },7000);
      }
    );

    this.customobssubscription=myObservable.subscribe(
      (data:string)=>{console.log(data)},
      (error:string)=>{console.log(error)},
      ()=>{console.log('complete')},
    )
  }

  ngOnDestroy(){
    this.customobssubscription.unsubscribe()
    this.numberobssubscription.unsubscribe()
  }

}
