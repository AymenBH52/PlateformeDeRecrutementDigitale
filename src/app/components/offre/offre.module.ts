import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddOffreComponent } from './add-offre/add-offre.component';
import { AdminListOffreComponent } from './admin-list-offre/admin-list-offre.component';
import { CondidatListOffreComponent } from './condidat-list-offre/condidat-list-offre.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ListQuestionComponent } from './list-question/list-question.component';
import { UpdateOffreComponent } from './update-offre/update-offre.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';
import { OffreDetailsComponent } from './offre-details/offre-details.component';



@NgModule({
  declarations: [
    AddOffreComponent,
    AdminListOffreComponent,
    CondidatListOffreComponent,
    ListQuestionComponent,
    UpdateOffreComponent,
    UpdateQuestionComponent,
    OffreDetailsComponent
  ],
  imports: [
    CommonModule,FormsModule ,HttpClient
  ]
})
export class OffreModule { }
