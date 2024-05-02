import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {
  @ViewChild('video') videoElement!: ElementRef<HTMLVideoElement>;
  mediaStream!: MediaStream;
  mediaRecorder!: MediaRecorder;
  recordedChunks: Blob[] = [];
  webcamActivated: boolean = false
  ;

  constructor() { }

  activateWebcam() {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(mediaStream => {
        this.mediaStream = mediaStream;
        this.videoElement.nativeElement.srcObject = mediaStream;
        this.videoElement.nativeElement.play();
        this.webcamActivated = true;
      })
      .catch(error => console.error('Error accessing media devices.', error));
  }

  startRecording() {
    this.mediaRecorder = new MediaRecorder(this.mediaStream);
    this.mediaRecorder.ondataavailable = event => {
      if (event.data.size > 0) {
        this.recordedChunks.push(event.data);
      }
    };
    this.mediaRecorder.start();
    console.log('Recording started:', this.recordedChunks.length);
  }
}
