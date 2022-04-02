import { Component, OnInit } from '@angular/core';
import { Surveys } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private repository: SurveyRepository) { }

  get surveys(): Surveys[] {
    return this.repository.getSurveys();
  }
  
  ngOnInit(): void {
  }

}
