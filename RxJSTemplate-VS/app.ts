import * as Rx from "rxjs";

Rx.Observable.of("Hello World!").subscribe((value: string) => {
    console.log(value);
});