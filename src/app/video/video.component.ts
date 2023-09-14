import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const video = document.querySelector('video') as HTMLVideoElement;

    // Establece el atributo 'muted' para silenciar el video
    video.muted = true;
  }
}
