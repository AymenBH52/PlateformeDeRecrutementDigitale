import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { ListCategorieComponent } from './list-categorie/list-categorie.component';

@NgModule({
  declarations: [AddCategorieComponent, ListCategorieComponent],
  imports: [CommonModule],
})
export class CategorieModule {}
