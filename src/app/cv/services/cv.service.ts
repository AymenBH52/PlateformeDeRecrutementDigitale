import { Injectable } from '@angular/core';
import { Observable, interval, scheduled } from 'rxjs';
import { API_BASE_URL } from '../myConfigs';
import { HttpClient } from '@angular/common/http';
import { CvModel } from 'src/app/models/cv.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LocalStorageService } from 'src/app/globalServices/local-storage.service';
@Injectable({
  providedIn: 'root',
})
export class CvService {
  constructor(
    private http: HttpClient,
    private storageService: LocalStorageService
  ) {}

  uploadCv(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    const user = this.storageService.getObject('user');
    if (user) {
      formData.append('userId', user.id);
    }

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

  archiveCV(cvId: number) {
    return this.http.put(`${API_BASE_URL}/archive/${cvId}`, {});
  }

  deleteCV(cvId: number) {
    return this.http.delete(`${API_BASE_URL}/${cvId}`);
  }

  deleteAllCVsByStatus(status: boolean): Observable<any> {
    return this.http.delete<string>(`${API_BASE_URL}/status/${status}`);
  }

  deleteAllArchivedCvs() {
    return this.http.delete<string>(`${API_BASE_URL}/archived`);
  }
}
