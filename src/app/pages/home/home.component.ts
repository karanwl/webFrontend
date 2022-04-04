import { Component, OnInit } from '@angular/core';
import { Surveys } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';

@Component({
  selector: 'app-main',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private repository: SurveyRepository) { }

  get surveys(): Surveys[] {
    return this.repository.getSurveys();
  }

  deleteSurvey(id:any){
    console.log(id);
    return this.repository.deleteSurvey(id);
  }
  
  ngOnInit(): void {
  }

}
