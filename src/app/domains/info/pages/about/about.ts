import { Component, signal } from '@angular/core';
import { WaveAudio } from '../../components/wave-audio/wave-audio';
import { Highlight } from '@shared/directives/highlight';
import { Counter } from '@shared/components/counter/counter';
import { Header } from '@shared/components/header/header';

@Component({
  selector: 'app-about',
  imports: [Counter, WaveAudio, Highlight, Header],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export default class About {

    duration = signal(1)
    message = signal('Hola')


    changeDuration(event: Event){
      const input = event.target as HTMLInputElement
      this.duration.set(input.valueAsNumber)
    }

    changeMessage(event: Event){
      const input = event.target as HTMLInputElement
      this.message.set(input.value)
    }
}
