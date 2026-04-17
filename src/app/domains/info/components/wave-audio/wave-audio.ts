import { Component, ElementRef, input, ViewChild,signal } from '@angular/core';

import WaveSurfer from 'wavesurfer.js'

@Component({
  selector: 'app-wave-audio',
  imports: [],
  templateUrl: './wave-audio.html',
  styleUrl: './wave-audio.css',
})
export class WaveAudio {

  //signals
    isPlaying = signal(false)

  //input signal
    audioUrl = input.required<string>()

  //Using template reference variables with queries

    @ViewChild('wave') input!: ElementRef;

  //Instancia de WaveSurfer
     private ws!: WaveSurfer;

    ngAfterViewInit(){
        this.ws = WaveSurfer.create({
          container: this.input.nativeElement,
          waveColor: 'rgb(200, 0, 200)',
          progressColor: 'rgb(100, 0, 100)',
          url: this.audioUrl(),

      })
    }

    playPause(){
      if(this.ws.isPlaying()){

        this.ws.pause()

        this.isPlaying.set(false)

      } else{
        this.ws.play()

        this.isPlaying.set(true)

      }

      //console.log(this.ws.isPlaying())

    }

}
