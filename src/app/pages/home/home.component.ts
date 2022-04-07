import { Component, OnInit } from '@angular/core';
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
              private authService: AuthService) { }
  user!: User;
  get surveys(): Surveys[] {
    return this.repository.getSurveys();
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
  
  ngOnInit(): void {
  }

}
