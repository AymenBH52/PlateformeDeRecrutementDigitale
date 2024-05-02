
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffreService {
  private baseUrl = 'http://localhost:8080/offres';

  constructor(private http:HttpClient) { }
  
  addOffre(offreDto: any, categorieId: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/addOffre/${categorieId}`, offreDto);
  }

 
   
    getOffre(){
return this.http.get(this.baseUrl);
    }
  }

