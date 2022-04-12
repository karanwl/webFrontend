import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { AddComponent } from './pages/add/add.component';
import { SurveyModule } from './pages/surveys/surveys.module';
import { HomeModule } from './pages/home/home.module';
import { LoginModule } from './pages/login/login.module';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { JwtModule, JwtHelperService, JwtInterceptor } from '@auth0/angular-jwt';
import { EditComponent } from './pages/edit/edit.component';
import { ViewSurveyResultModule } from './pages/view-survey-result/view-survey-result.module';

export function jwtTokenGetter() 
{
  return localStorage.getItem('id_token');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddComponent,
    RegisterComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SurveyModule,
    HomeModule,
    LoginModule,
    ReactiveFormsModule,
    FormsModule,
    ViewSurveyResultModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
