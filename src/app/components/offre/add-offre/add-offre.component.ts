import { Component, OnInit } from '@angular/core';
import { OffreService } from '../offre.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategorieService } from '../../categorie/categorie.service';
import { OffreDto } from '../OffreDto';

@Component({
  selector: 'app-add-offre',
  templateUrl: './add-offre.component.html',
  styleUrls: ['./add-offre.component.scss']
})
export class AddOffreComponent implements OnInit {
  categories: any = {};
  offreform: any;

  
  constructor(private offreService: OffreService, private categorieService: CategorieService, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.getAllCategories();
    this.offreform = this.formBuilder.group({ 
      nom: ['', Validators.required],
      sujet: ['', Validators.required],
      description: ['', Validators.required],
      competences: ['', Validators.required],
      typeContrat: ['', Validators.required],
      categorieId: ['', Validators.required]
    });
  }

  getAllCategories() {
    this.categorieService.getCategories().subscribe(
      (data) => {
        this.categories = data;
      }
    );
  }

  addOffre() {
    if (this.offreform.valid) { 
      
      const offreDto: OffreDto={ 
        nom: this.offreform.get('nom').value,
        sujet: this.offreform.get('sujet').value,
        description: this.offreform.get('description').value,
        competences: this.offreform.get('competences').value,
        typeContrat: this.offreform.get('typeContrat').value,
        categorieId: this.offreform.get('categorieId').value
      };
  
      const categorieId = this.offreform.get('categorieId').value;
      
      this.offreService.addOffre(offreDto, categorieId).subscribe(
        (res) => {
          console.log(res);
         
          this.router.navigate(['/dashboard']);
        },
        
      );
    } else {
      console.error('Formulaire invalide. Veuillez remplir tous les champs correctement.');
    }
  }
}
