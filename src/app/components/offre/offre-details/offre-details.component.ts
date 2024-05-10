import { Component, OnInit } from '@angular/core';
import { OffreService } from '../offre.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-offre-details',
  templateUrl: './offre-details.component.html',
  styleUrls: ['./offre-details.component.scss']
})
export class OffreDetailsComponent implements OnInit {
  offre:any={};
  
  constructor(private offreService:OffreService, private route:ActivatedRoute){}
  ngOnInit(){
    this.getOffreDetails();
  }

  getOffreDetails(): void {
    const idString = this.route.snapshot.paramMap.get('id');
    if (idString !== null) {
      const id = +idString;
      this.offreService.getOffrebyId(id)
        .subscribe(offre => this.offre = offre);
    } 
  }
}
