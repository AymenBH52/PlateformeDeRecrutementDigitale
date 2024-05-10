import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './exam-interface/components/navbar/navbar.component';
import { DashboardAdminComponent } from './exam-interface/components/dashboard-admin/dashboard-admin.component';
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

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },

  {path: 'dashboarAdmin', component: DashboardAdminComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      {path: 'categories', component: ViewCategoriesComponent},
      {path: 'add-category', component: AddCategoryComponent},
      {path:'quizzes', component: ViewQuizzesComponent},
      {path:'add-quiz',component:AddQuizComponent},
      {path:'quiz/:qid',component:UpdateQuizComponent},
      {path:'view-questions/:qid/:title', component:ViewQuizQuestionsComponent},
      {path:'add-question/:qid/:title',component: AddQuestionComponent}
    ]
  },

  {path: 'dashboardUser', component: DashboardUserComponent,
    children:[
      {path:':catId', component:LoadQuizComponent,},
    ]
  },


  
  ]
   


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
