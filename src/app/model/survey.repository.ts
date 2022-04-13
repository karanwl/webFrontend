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

  postSurveys(survey:Surveys): void
  {
    this.dataSource.postSurveys(survey);
  }
  
  postSurveysUpdate(id:any,survey:Surveys): void
  {
    this.dataSource.postSurveysUpdate(id,survey);
  }

  deleteSurvey(id:any): void
  {
    this.dataSource.deleteSurvey(id);
  }
 
  editSurveys(id: any)
  {
    this.dataSource.editSurvey(id);
  }
  /*{
    const surveyIndex = this.surveys.findIndex(x => x._id == survey._id);
    if (surveyIndex != null && surveyIndex != undefined) 
    {
        this.surveys[surveyIndex] = survey;
    }
  }*/
  getSurveysByID(_id: any) {
    return this.surveys.find(x => x._id == _id)
}
}