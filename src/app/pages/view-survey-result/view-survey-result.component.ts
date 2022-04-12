import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/model/auth.service';
import { Surveys } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { User } from 'src/app/model/user.model';
import { RestDataSource } from "src/app/model/rest.datasource";

@Component({
  selector: 'app-view-survey-result',
  templateUrl: './view-survey-result.component.html',
  styleUrls: ['./view-survey-result.component.css']
})
export class ViewSurveyResultComponent implements OnInit {

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
