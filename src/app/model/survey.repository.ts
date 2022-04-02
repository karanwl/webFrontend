import { Surveys } from './survey.model';
import { Injectable } from '@angular/core';
import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';

@Injectable()
export class SurveyRepository {
  private surveys: Surveys[] = [];

  constructor(private dataSource: RestDataSource) {
    dataSource.getSurveys().subscribe(data => {
      this.surveys = data;
    });
  }
  getSurveys(): Surveys[] {
    return this.surveys;
  }

  postSurveys(survey:Surveys): Observable<Surveys[]>
  {
    return this.dataSource.postSurveys(survey);
  }
}