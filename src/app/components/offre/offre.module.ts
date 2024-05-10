import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddOffreComponent } from './add-offre/add-offre.component';
import { AdminListOffreComponent } from './admin-list-offre/admin-list-offre.component';
import { CondidatListOffreComponent } from './condidat-list-offre/condidat-list-offre.component';
import { FormsModule } from '@angular/forms';
import { UpdateOffreComponent } from './update-offre/update-offre.component';
import { OffreDetailsComponent } from './offre-details/offre-details.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AddOffreComponent,
    AdminListOffreComponent,
    CondidatListOffreComponent,
    UpdateOffreComponent,
    OffreDetailsComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,FormsModule ,HttpClientModule
  ]
})
export class OffreModule { }
