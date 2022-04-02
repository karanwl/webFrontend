import { Component, OnInit } from '@angular/core';
import { Surveys } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit {

  constructor(private repository: SurveyRepository) { }

  get surveys(): Surveys[] {
    return this.repository.getSurveys();
  }
  
  ngOnInit(): void {
  }

}
