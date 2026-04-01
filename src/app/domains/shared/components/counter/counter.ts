import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {

    @Input({required:true}) duration: number = 0;
    @Input({required: true}) message: string ='';

    constructor(){
      //No debe ser asíncrono. No debe ir promesas
      //defore render
      console.log('Se ejecuta constructor de componente COUNTER')
      console.log('-'.repeat(10))
    }

    ngOnChanges(changes: SimpleChanges){

      // before and during render
      console.log('Se ejecuta ngOnChanges de componente COUNTER')
      console.log('-'.repeat(10))
      console.log(changes)

    }
}
