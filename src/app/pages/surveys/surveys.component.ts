import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/model/auth.service';
import { Surveys } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { User } from 'src/app/model/user.model';
import { RestDataSource } from "src/app/model/rest.datasource";

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit {
  user!: User;
  displayName:String;
  constructor(private repository: SurveyRepository,
              private authService: AuthService,
              private datasource: RestDataSource) { }

  get surveys(): Surveys[] {
   
    if(JSON.parse(JSON.stringify(localStorage.getItem('user')))!==null){
      this.displayName=JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('user')))).displayName;
    }
    return this.repository.getSurveys();
  }
  
  ngOnInit(): void {
  }

  deleteSurvey(id:any){
    console.log(id);
    return this.repository.deleteSurvey(id);
  }

  isLoggedIn(): boolean
  {
    const result = this.authService.authenticated;
    if(result)
    {
      
      this.user = JSON.parse(JSON.stringify(localStorage.getItem('user')));
      
    }
    return result;
  }

}
