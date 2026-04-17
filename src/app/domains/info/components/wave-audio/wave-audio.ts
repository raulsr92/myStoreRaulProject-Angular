import { Component, ElementRef, input, ViewChild } from '@angular/core';

import WaveSurfer from 'wavesurfer.js'

@Component({
  selector: 'app-wave-audio',
  imports: [],
  templateUrl: './wave-audio.html',
  styleUrl: './wave-audio.css',
})
export class WaveAudio {

  //input signal
    audioUrl = input.required<string>()

  //Using template reference variables with queries

    @ViewChild('wave') input!: ElementRef;


    ngAfterViewInit(){
        const wavesurfer = WaveSurfer.create({
          container: this.input.nativeElement,
          waveColor: 'rgb(200, 0, 200)',
          progressColor: 'rgb(100, 0, 100)',
          url: this.audioUrl(),

      })


    }

}
