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

      this.ws.on("play", ()=> this.isPlaying.set(true))
      this.ws.on("pause", ()=> this.isPlaying.set(false))
    }

    playPause(){

      this.ws.playPause()

      //console.log(this.ws.isPlaying())

    }

}
