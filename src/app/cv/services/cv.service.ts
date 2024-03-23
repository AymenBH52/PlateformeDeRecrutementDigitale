import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../myConfigs';
import { HttpClient } from '@angular/common/http';
import { CvModel } from 'src/app/models/cv.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root',
})
export class CvService {
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  uploadCv(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<CvModel>(`${API_BASE_URL}/upload`, formData);
  }

  getAllCVs(): Observable<CvModel[]> {
    return this.http.get<CvModel[]>(API_BASE_URL);
  }

  getPdfFromCv(cvId: any): Observable<Blob> {
    return this.http.get(`${API_BASE_URL}/pdf/${cvId}`, {
      responseType: 'blob',
    });
  }
}
