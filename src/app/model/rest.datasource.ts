import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Surveys } from './survey.model';
import { User } from './user.model';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable()
export class RestDataSource {
  user: User;
  baseUrl: string;
  authToken!: string;

  private httpOptions =
  {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(private http: HttpClient, 
              private jwtService: JwtHelperService) 
  {
    this.user = new User();
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  getSurveys(): Observable<Surveys[]> 
  {
    return this.http.get<Surveys[]>(this.baseUrl + 'surveys');
  }

  postSurveys(data:any)
  {
    return this.http.post(this.baseUrl+'surveys/add',data).subscribe(res => {
    });
  }

  authenticate(user: User): Observable<any>
  {
    return this.http.post<any>(this.baseUrl + 'login', user, this.httpOptions);
  }

  storeUserData(token: any, user: User): void
  {
    localStorage.setItem('id_token', 'Bearer ' + token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout(): Observable<any>
  {
    this.authToken = null as any;
    this.user = null as any;
    localStorage.clear();

    return this.http.get<any>(this.baseUrl + 'logout', this.httpOptions);
  }

  loggedIn(): boolean
  {
    return !this.jwtService.isTokenExpired(this.authToken);
  }

  deleteSurvey(id:any){
    return this.http.post(this.baseUrl+'surveys/delete/'+id,id).subscribe(res =>{
    });
  }

  private loadToken(): void
  {
    const token = localStorage.getItem('id_token');
    this.authToken = token as any;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
  }
}
