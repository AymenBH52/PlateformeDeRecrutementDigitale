import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './exam-interface/components/profile/profile.component';
import { ViewCategoriesComponent } from './exam-interface/components/view-categories/view-categories.component';
import { AddCategoryComponent } from './exam-interface/components/add-category/add-category.component';
import { ViewQuizzesComponent } from './exam-interface/components/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './exam-interface/components/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './exam-interface/components/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './exam-interface/components/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './exam-interface/components/add-question/add-question.component';
import { DashboardUserComponent } from './exam-interface/components/User/dashboard-user/dashboard-user.component';
import { LoadQuizComponent } from './exam-interface/components/User/load-quiz/load-quiz.component';
import { HomeComponent } from './components/home/home.component';
import { VideoComponent } from './video/enregistrer-video/video.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddCategorieComponent } from './components/categorie/add-categorie/add-categorie.component';
import { ListCategorieComponent } from './components/categorie/list-categorie/list-categorie.component';
import { AddOffreComponent } from './components/offre/add-offre/add-offre.component';
import { AdminListOffreComponent } from './components/offre/admin-list-offre/admin-list-offre.component';
import { CondidatListOffreComponent } from './components/offre/condidat-list-offre/condidat-list-offre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashbordUsersComponent } from './components/dashbord-users/dashbord-users.component';

const routes: Routes = [
  

  // {path: 'dashboarAdmin', component: DashboardAdminComponent,
  //   children: [
  //     { path: 'profile', component: ProfileComponent },
  //     {path: 'categories', component: ViewCategoriesComponent},
  //     {path: 'add-category', component: AddCategoryComponent},
  //     {path:'quizzes', component: ViewQuizzesComponent},
  //     {path:'add-quiz',component:AddQuizComponent},
  //     {path:'quiz/:qid',component:UpdateQuizComponent},
  //     {path:'view-questions/:qid/:title', component:ViewQuizQuestionsComponent},
  //     {path:'add-question/:qid/:title',component: AddQuestionComponent}
  //   ]
  // },

  {path: 'dashboardUser', component: DashboardUserComponent,
    children:[
      {path:':catId', component:LoadQuizComponent,},
    ]
  },

  //Mouna
  { path: '', component: HomeComponent },
  { path: 'video', component:VideoComponent },
  { path: 'dashboard', component:DashboardComponent },
  { path: 'add-categorie', component:AddCategorieComponent },
  { path: 'list-categorie', component:ListCategorieComponent},
  { path: 'add-offre', component:AddOffreComponent },
  { path: 'admin-list-offre', component:AdminListOffreComponent },
  { path: 'condidat-list-offre', component:CondidatListOffreComponent },

  //New path Ayemn
  {path:'add-category', component:AddCategoryComponent},
  {path:'categories', component:ViewCategoriesComponent},
  {path:'add-quiz',component:AddQuizComponent},
  {path:'quizzes', component: ViewQuizzesComponent},
  {path:'add-question/:qid/:title',component: AddQuestionComponent},
  {path:'view-questions/:qid/:title', component:ViewQuizQuestionsComponent},
  {path:'quiz/:qid',component:UpdateQuizComponent},

  // Dashbord Users
  {path:'dashbord-users', component:DashbordUsersComponent,}

  

      




  
  ]
   





@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule,
    ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
