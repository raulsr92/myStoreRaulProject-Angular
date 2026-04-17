import { Component, Input, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
    @Input({required:true}) duration: number = 0;
    @Input({required: true}) message: string ='';

    counter = signal(0)

    counterRef:number | undefined

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

      const duration = changes['duration']

      console.log(duration)

      if (duration && duration.currentValue !== duration.previousValue) {

        this.doDomething()

      } else{
        console.log("No cambió la duración")
      }

    }
    ngOnInit(){

      // after render
      //Corre una sola vez

      console.log('Se ejecuta ngOnInit de componente COUNTER')
      console.log('-'.repeat(10))

      console.log('Duration =>', this.duration)
      console.log('Message =>', this.message)

      this.counterRef = window.setInterval(()=>{

        console.log(this.counterRef)

        this.counter.update((time)=>time+1)
      },1000)

    }

    ngAfterViewInit(){
      console.log('Se ejecuta ngAfterViewInit de componente COUNTER')
      console.log('-'.repeat(10))

    }

    ngOnDestroy(){
      console.log('Se ejecuta ngOnDestroy de componente COUNTER')

      clearInterval(this.counterRef)
    }

    doDomething(){

      console.log('Cambió la duración y es diferente')

    }
}
