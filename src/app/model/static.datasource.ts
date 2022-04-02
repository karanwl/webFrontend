import { Surveys } from './survey.model';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable()
export class StaticDataSource {
  private surveys: Surveys[] = [
    new Surveys('Title1', 'Date 1', 'Desc1'),
    new Surveys('Title2', 'Date 2', 'Desc2'),
    new Surveys('Title 3', 'Date 3', 'Desc 3')
  ];
  
  getSurveys(): Observable<Surveys[]> {
    return from([this.surveys]);
  }
}