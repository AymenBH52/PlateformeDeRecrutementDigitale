import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './exam-interface/components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { DashboardAdminComponent } from './exam-interface/components/dashboard-admin/dashboard-admin.component';
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
import { FormsModule } from '@angular/forms'; 
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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardAdminComponent,
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
    CKEditorModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
