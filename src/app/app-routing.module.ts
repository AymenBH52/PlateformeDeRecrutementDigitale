import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VideoComponent } from './video/enregistrer-video/video.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddCategorieComponent } from './components/categorie/add-categorie/add-categorie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListCategorieComponent } from './components/categorie/list-categorie/list-categorie.component';
import { AddOffreComponent } from './components/offre/add-offre/add-offre.component';
import { AdminListOffreComponent } from './components/offre/admin-list-offre/admin-list-offre.component';
import { CondidatListOffreComponent } from './components/offre/condidat-list-offre/condidat-list-offre.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UpdateOffreComponent } from './components/offre/update-offre/update-offre.component';
import { OffreDetailsComponent } from './components/offre/offre-details/offre-details.component';

const routes: Routes = [ { path: '', component: HomeComponent },
{ path: 'video', component:VideoComponent },
{ path: 'dashboard', component:DashboardComponent },
{ path: 'add-categorie', component:AddCategorieComponent },
{ path: 'list-categorie', component:ListCategorieComponent},
{ path: 'add-offre', component:AddOffreComponent },
{ path: 'admin-list-offre', component:AdminListOffreComponent },
{ path: 'condidat-list-offre', component:CondidatListOffreComponent },
{ path: 'update-offre:/id', component:UpdateOffreComponent},
{ path: 'navbar', component:NavbarComponent},
{ path: 'offre-details/:id', component: OffreDetailsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule,
    ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
