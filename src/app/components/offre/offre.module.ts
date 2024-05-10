import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddOffreComponent } from './add-offre/add-offre.component';
import { AdminListOffreComponent } from './admin-list-offre/admin-list-offre.component';
import { CondidatListOffreComponent } from './condidat-list-offre/condidat-list-offre.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    AddOffreComponent,
    AdminListOffreComponent,
    CondidatListOffreComponent
  ],
  imports: [
    CommonModule,FormsModule ,HttpClient
  ]
})
export class OffreModule { }
