import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadCvComponent } from './components/upload-cv/upload-cv.component';
import { CvListComponent } from './components/cv-list/cv-list.component';

const routes: Routes = [
  { path: 'cv/upload', component: UploadCvComponent },
  { path: 'cv', component: CvListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvRoutingModule {}
