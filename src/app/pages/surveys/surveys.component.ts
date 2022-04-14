import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/model/auth.service';
import { Surveys } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { User } from 'src/app/model/user.model';
import { RestDataSource } from "src/app/model/rest.datasource";
import { Router } from '@angular/router';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit {
  user!: User;
  displayName:String;
  activeSurveyList:Surveys[]=[];
  allSurveyList:Surveys[];

  constructor(private repository: SurveyRepository,
              private authService: AuthService,
              private datasource: RestDataSource,
              private router: Router) { }

  get surveys(): Surveys[] {

    if(JSON.parse(JSON.stringify(localStorage.getItem('user')))!==null){
      this.displayName=JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('user')))).displayName;
    }

      this.allSurveyList = this.repository.getSurveys();
      this.activeSurveyList=[];
      let completedSurveyByUserId: (string | undefined)[] = [];
      let completedSurveyByUserTitle: (string | undefined)[] = [];

     this.allSurveyList.forEach(survey => {
      if(survey.User===this.displayName && survey.Answer_1!==undefined){
        completedSurveyByUserId.push(survey._id);
        completedSurveyByUserTitle.push(survey.Title);
      }
     });

     this.allSurveyList.forEach(survey => {

      if(completedSurveyByUserId.indexOf(survey._id)!==-1){
        this.activeSurveyList.push(survey);
      }else if(survey.User!==this.displayName && survey.Answer_1===undefined && completedSurveyByUserTitle.indexOf(survey.Title)===-1){
        this.activeSurveyList.push(survey);
      }
    });
    return  this.activeSurveyList;
  }

  ngOnInit(): void {
  }

  deleteSurvey(id:any){
    return this.repository.deleteSurvey(id);
  }

  isLoggedIn(): boolean
  {
    const result = this.authService.authenticated;
    if(result)
    { 
      this.user = JSON.parse(JSON.stringify(localStorage.getItem('user'))); 
    }else{
      this.router.navigate(['/login']);
    }
    return result;
  }

}
