import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Surveys } from './survey.model';
import { JwtHelperService } from '@auth0/angular-jwt';

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable()
export class RestDataSource {
  baseUrl: string;

  private httpOptions =
  {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  getSurveys(): Observable<Surveys[]> {
    return this.http.get<Surveys[]>(this.baseUrl + 'surveys');
  }
  postSurveys(data:any){
    return this.http.post(this.baseUrl+'surveys/add',data).subscribe(res => {
    });
  }
  deleteSurvey(id:any){
    return this.http.post(this.baseUrl+'surveys/delete/'+id,id).subscribe(res =>{
    });
  }
}
