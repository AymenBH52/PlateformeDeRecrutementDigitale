import { SafeResourceUrl } from '@angular/platform-browser';

export interface CvModel {
  id: number;
  nom: string;
  uuid: string;
  url: string;
  data: string;
  uploadDate: Date;
  safeUrl?: SafeResourceUrl;
  skillsFound: Array<string>;
  score: number;
  specialite: string;
}
