import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CvService } from '../../services/cv.service';
import { HttpResponse } from '@angular/common/http';
import { faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-upload-cv',
  templateUrl: './upload-cv.component.html',
  styleUrls: ['./upload-cv.component.scss'],
})
export class UploadCvComponent implements OnDestroy {
  selectedFile: File | undefined;
  errors: string = '';
  fa = faX;
  constructor(private cvService: CvService) {}

  ngOnDestroy(): void {
    if (this.errors != '') this.errors = '';
    this.selectedFile = undefined;
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  browseFiles(): void {
    const customFile = document.getElementById('customFile');
    if (customFile) {
      customFile.click();
    }
  }

  clearFile(): void {
    this.selectedFile = undefined;
    const customFile = document.getElementById('customFile');
    if (customFile) {
      (customFile as HTMLInputElement).value = '';
    }
  }

  onDragOver(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    const dropArea = document.getElementById('drop-area');
    if (dropArea) {
      dropArea.classList.add('drag-over');
    }
  }

  onDragLeave(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    const dropArea = document.getElementById('drop-area');
    if (dropArea) {
      dropArea.classList.remove('drag-over');
    }
  }

  onDrop(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer.files;
    this.selectedFile = files[0];
    const dropArea = document.getElementById('drop-area');
    if (dropArea) {
      dropArea.classList.remove('drag-over');
    }
  }

  uploadCV(): void {
    if (this.selectedFile) {
      this.cvService.uploadCv(this.selectedFile).subscribe({
        next: (response: any) => {
          console.log('Upload successful', response);
          if (this.errors != '') this.errors = '';
        },
        error: (error: any) => {
          console.error('Upload error', error);
          if (error.status === 400) {
            this.errors = error.error;
          }
        },
      });
    }
  }
}
