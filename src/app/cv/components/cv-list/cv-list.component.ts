import { Component, OnInit } from '@angular/core';
import { CvService } from '../../services/cv.service';
import { CvModel } from 'src/app/models/cv.model';
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl,
} from '@angular/platform-browser';
import { Observable, map } from 'rxjs';
import { availableIcons } from '../../myConfigs';
@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.scss'],
})
export class CvListComponent implements OnInit {
  listCV: CvModel[] = [];
  retrievedFile: Window | null = null;
  safeUrl: SafeResourceUrl | null = null;
  preview: boolean = false;
  data: any = [];
  constructor(private cvService: CvService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.getAllCvs();
  }

  getAllCvs() {
    this.cvService.getAllCVs().subscribe((res: CvModel[]) => {
      res.forEach((element) => {
        this.getPdfUrl(element.id).subscribe(
          (safeUrl: SafeResourceUrl | undefined) => {
            element.safeUrl = safeUrl;
            this.listCV.push(element);
          },
          (error: any) => {
            console.error(
              'Error loading PDF for CV with ID',
              element.id,
              error
            );
          }
        );
      });
    });
  }

  getPdfUrl(cvId: number): Observable<SafeResourceUrl> {
    return this.cvService.getPdfFromCv(cvId).pipe(
      map((blob: Blob | MediaSource) => {
        const blobUrl = URL.createObjectURL(blob);
        return this.sanitizer.bypassSecurityTrustResourceUrl(blobUrl);
      })
    );
  }

  getIcon = (skill: string) => {
    if (availableIcons.includes(skill))
      return `../../../../assets/icons/${skill}.png`;
    else return `../../../../assets/icons/coding.png`;
  };

  showPreview(e: Event) {
    e.preventDefault();
    this.preview = !this.preview;
  }
}
