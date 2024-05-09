import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadCvComponent } from './components/upload-cv/upload-cv.component';
import { CvListComponent } from './components/cv-list/cv-list.component';
import { ListCvRefuseComponent } from './components/list-cv-refuse/list-cv-refuse.component';
import { authGuard } from '../globalServices/auth.guard';
import { CvListArchiveComponent } from './components/cv-list-archive/cv-list-archive.component';

const routes: Routes = [
  { path: 'cv/upload', component: UploadCvComponent, canActivate: [authGuard] },
  {
    path: 'dashboard/cv/list-cv',
    component: CvListComponent,
    canActivate: [authGuard],
  },
  {
    path: 'dashboard/cv/list-cv-refuse',
    component: ListCvRefuseComponent,
    canActivate: [authGuard],
  },
  {
    path: 'dashboard/cv/list-cv-archive',
    component: CvListArchiveComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvRoutingModule {}
