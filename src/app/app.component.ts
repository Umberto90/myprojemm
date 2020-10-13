import { Component } from '@angular/core';
import { AppService } from './app.service';
import { fromEvent, from, Observable, interval, Subscriber, Subscription, Subscribable } from 'rxjs';
import { of } from 'rxjs';
import { throttleTime, map, scan, filter, tap, debounceTime } from 'rxjs/operators';
import { chunk, compact, concat, debounce, difference, forEach, forOwn, isArray, sortedIndex } from 'lodash';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private appService: AppService, private http: HttpClient) { }

  title = 'My Project';
  heroes = {}
  pepole = {}
  her = {}
  names = { name: 'umberto', surname: "d'angelo" }
  subscription: any


  ngOnInit() {
    this.getHeroesapi()
    this.getlocalapi()
    this.executeoninit()
  }

  executeoninit() {
    let obs = new Observable((subscriber) => {
      subscriber.next(1)
      subscriber.next(2)
      subscriber.next(3)
      subscriber.next(4)
      setTimeout(() => {
        subscriber.next(5);
      }, 5000);
    }).pipe(
      filter(data => data > 2),                    //filter Operator
      map((val) => { return val as number * 2 }),    //map operator
    ).subscribe(data => console.log(data))
  }

  testinterval() {
    const secondsCounter = interval(1000);
    this.subscription = secondsCounter.pipe(
      filter(data => data > 5),
      //debounceTime(5000)
    ).subscribe(value => console.log(`It's been ${value} seconds since subscribing!`), error => console.log(error));
  }

  unsubscribe(x: Subscription) {
    x.unsubscribe()
    console.log("unsubscribed succesfully!")
  }

  loghero() {
    console.log(this.heroes)

  }

  ofoperator() {
    let a = of(1, 2, 3)
    a.subscribe(value => console.log(value))
  }

  getHeroes(): void {

  }

  lodashfunc() {
    let a = chunk([1, 2, 3, 4], 3)
    console.log(a)
    let arr = [1, 2, undefined, false, 0, NaN]
    let b = compact(arr)
    console.log(b)
    let other = concat([1, 4, 5], 2, [3], []);
    console.log(other)
    let rac = difference([2, 3, 4, 5], [2, 1, 3]);
    console.log(rac)
    forEach([{ 'a': 1, 'b': 2 }, { 'a': 3, 'b': 4 }], function (value, key) {
      console.log(value.a + value.b);
    });
    console.log(sortedIndex([30, 35, 50], 3))
  }

  getlocalapi(){
    this.appService.getLocalApi().subscribe(pepole => console.log(pepole))
  }

  getHeroesapi() {
    this.appService.getHeroesById().pipe(
      map(response => response),
      tap( // Log the result or error
        data => console.log("success"),
        error => console.log("error")
      )
    ).subscribe(heroes => this.heroes = heroes)
  }
}
