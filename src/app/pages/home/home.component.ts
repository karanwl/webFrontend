import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';
import { Surveys } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-main',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private repository: SurveyRepository,
              private router: Router,
              private authService: AuthService) { }
  user!: User;
  displayName:String;
  get surveys(): Surveys[] {
    if(JSON.parse(JSON.stringify(localStorage.getItem('user')))!==null){
      this.displayName=JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('user')))).displayName;
    }

    $(".headerUser").text("Welcome, "+this.displayName);
    
    return this.repository.getSurveys();
  }
  

  deleteSurvey(id:any){
    console.log(id);
    return this.repository.deleteSurvey(id);
  }

  editSurvey(id:any){
    return this.repository.editSurveys(id);
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
  
  ngOnInit(): void {

  }

}

