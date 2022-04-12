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
  constructor(private repository: SurveyRepository,
              private authService: AuthService,
              private datasource: RestDataSource) { }

  get surveys(): Surveys[] {
    return this.repository.getSurveys();
  }
  
  ngOnInit(): void {
  }

  deleteSurvey(survey:any){
    return this.repository.deleteSurvey(survey.id);
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
