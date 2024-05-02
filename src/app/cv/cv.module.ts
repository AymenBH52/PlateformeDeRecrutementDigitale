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
import { AdminSidebarComponent } from '../components/admin-sidebar/admin-sidebar.component';
import { TopBarComponent } from '../components/top-bar/top-bar.component';
@NgModule({
  declarations: [UploadCvComponent, CvListComponent, SanitizePipe],
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
  ],
  exports: [UploadCvComponent],
})
export class CvModule {}
