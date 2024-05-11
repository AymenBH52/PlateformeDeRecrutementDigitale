import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCvComponent } from './list-cv/list-cv.component';
import { ListCvArchiveComponent } from './list-cv-archive/list-cv-archive.component';
import { ListCvRefuseComponent } from './list-cv-refuse/list-cv-refuse.component';
// import { CvUploadComponent } from '../shared/cv-upload/cv-upload.component';

@NgModule({
  declarations: [
    ListCvComponent,
    ListCvArchiveComponent,
    ListCvRefuseComponent,
    // CvUploadComponent,
  ],
  imports: [CommonModule],
})
export class CvsModule {}
