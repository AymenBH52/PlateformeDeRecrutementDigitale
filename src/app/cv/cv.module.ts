import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadCvComponent } from './components/upload-cv/upload-cv.component';
import { CvRoutingModule } from './cv-routing.module';
import { CvService } from './services/cv.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CvListComponent } from './components/cv-list/cv-list.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SanitizePipe } from './pipes/sanitize.pipe';
import { AdminSidebarComponent } from '../shared/admin-sidebar/admin-sidebar.component';
import { TopBarComponent } from '../shared/top-bar/top-bar.component';
import { SharedModule } from '../shared/shared.module';
import { ListCvRefuseComponent } from './components/list-cv-refuse/list-cv-refuse.component';
import { CvListArchiveComponent } from './components/cv-list-archive/cv-list-archive.component';

@NgModule({
  declarations: [UploadCvComponent, CvListComponent, SanitizePipe, ListCvRefuseComponent, CvListArchiveComponent],
  providers: [CvService],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    CvRoutingModule,
    PdfViewerModule,
    // AdminSidebarComponent,
    // TopBarComponent,
    SharedModule,
  ],
  exports: [UploadCvComponent],
})
export class CvModule {}
