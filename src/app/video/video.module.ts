import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './enregistrer-video/video.component';
import { ListVideosComponent } from './list-videos/list-videos.component';



@NgModule({
  declarations: [
    VideoComponent,
    ListVideosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VideoModule { }
