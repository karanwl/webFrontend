import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { SurveysComponent } from './pages/surveys/surveys.component';
import { EditComponent } from './pages/edit/edit.component';
import { ViewSurveyResultComponent } from './pages/view-survey-result/view-survey-result.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'login', component: LoginComponent,data: {title: 'Login'}},
  //{path: 'login', data: {title: 'Login'}, redirectTo: 'login', pathMatch: 'full'},
  {path: 'register', component: RegisterComponent, data: {title: 'register'}},

  {path: 'surveys', component: SurveysComponent, data: {title: 'surveys'}},
  {path: 'surveys/add', component: AddComponent, data: {title: 'surveys/add'}},
  {path: 'surveys/edit/:id', component: EditComponent},
  {path: 'survey/result', component: ViewSurveyResultComponent,data: {title: 'surveys'}},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m=> m.AdminModule)},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/surveys'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }