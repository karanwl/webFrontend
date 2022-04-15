import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/model/auth.service';
import { Surveys } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { User } from 'src/app/model/user.model';
import { RestDataSource } from "src/app/model/rest.datasource";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-survey-result',
  templateUrl: './view-survey-result.component.html',
  styleUrls: ['./view-survey-result.component.css']
})
export class ViewSurveyResultComponent implements OnInit {

  user!: User;
  title:String;

  displayName:String;
  constructor(private repository: SurveyRepository,
              private authService: AuthService,
              private datasource: RestDataSource,
              private route: ActivatedRoute) { }

  get surveys(): Surveys[] {
    
    if(JSON.parse(JSON.stringify(localStorage.getItem('user')))!==null){
      this.displayName=JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('user')))).displayName;
    }
    $(".headerUser").text("Welcome, "+this.displayName);
    return this.repository.getSurveys();
  }
  
  ngOnInit(): void {

    this.route.queryParams
    .subscribe(params => {
      console.log(params); 
      this.title = params['id'];
    }
  );

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
