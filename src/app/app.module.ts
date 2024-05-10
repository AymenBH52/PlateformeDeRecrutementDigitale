import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { SideBarComponent } from './exam-interface/components/side-bar/side-bar.component';
import { ProfileComponent } from './exam-interface/components/profile/profile.component';
import { ViewCategoriesComponent } from './exam-interface/components/view-categories/view-categories.component';
import { AddCategoryComponent } from './exam-interface/components/add-category/add-category.component';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field'; // Importer MatFormFieldModule
import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ViewQuizzesComponent } from './exam-interface/components/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './exam-interface/components/add-quiz/add-quiz.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { UpdateQuizComponent } from './exam-interface/components/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './exam-interface/components/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './exam-interface/components/add-question/add-question.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { DashboardUserComponent } from './exam-interface/components/User/dashboard-user/dashboard-user.component';
import {SidebarComponent as UserSidebar} from './exam-interface/components/User/sidebar/sidebar.component';
import { LoadQuizComponent } from './exam-interface/components/User/load-quiz/load-quiz.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


import { AddCategorieComponent } from './components/categorie/add-categorie/add-categorie.component';
import { FormControlDirective, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ListCategorieComponent } from './components/categorie/list-categorie/list-categorie.component';
import { CommonModule } from '@angular/common';
import { AddOffreComponent } from './components/offre/add-offre/add-offre.component';
import { AdminListOffreComponent } from './components/offre/admin-list-offre/admin-list-offre.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { DashbordUsersComponent } from './components/dashbord-users/dashbord-users.component';
import { SideBarUsersComponent } from './components/side-bar-users/side-bar-users.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ProfileComponent,
    ViewCategoriesComponent,
    AddCategoryComponent,
    ViewQuizzesComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    ViewQuizQuestionsComponent,
    AddQuestionComponent,
    DashboardUserComponent, 
    UserSidebar,
    LoadQuizComponent, 

    //Mouna
    DashboardComponent,
    AddCategorieComponent,
    AdminSidebarComponent,
    TopBarComponent,
    ListCategorieComponent,AddOffreComponent,AdminListOffreComponent,
    HomeComponent,
    DashbordUsersComponent,
    SideBarUsersComponent,
    NavbarComponent
    
    
    
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule, 
    MatInputModule,
    MatButtonModule,
    FormsModule ,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatSelectModule,
    CKEditorModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
