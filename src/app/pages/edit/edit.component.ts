import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/model/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Surveys } from 'src/app/model/survey.model';
import { User } from 'src/app/model/user.model';
import { SurveyRepository } from 'src/app/model/survey.repository';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  formdata: any = {}
  user!: User;
  Title: any;
  _id: any;
  survey: Surveys[];
  surveyById:any;

  constructor(private repository: SurveyRepository,
               private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) {
                this.surveys();
               }
     
   surveys(): Surveys {

    this._id = this.route.snapshot.params['id'];
    console.log(this._id)

   this.repository.getSurveys().forEach(survey => {
     if(survey._id===this._id){
      this.surveyById= survey;
     }
   });

    return  this.surveyById;

  }
  
  //formdata!: FormGroup;
  ngOnInit() {
    this._id = this.route.snapshot.params['id'];
    console.log(this._id)

    this.surveys();
    
    this.formdata = new FormGroup({
        Title: new FormControl(),
        User : new FormControl(),
        Date: new FormControl(),
        Description: new FormControl(),
        Question_1: new FormControl(),
        Question_2: new FormControl(),
        Question_3: new FormControl()
      });
  }
  
  getSurveyByID(id: any)
  {
    return this.survey.find(x => x._id === id);
  }

  onClickSubmit(data: any){
    this.Title = data.Title;
   
    this.repository.postSurveysUpdate(this._id,data);
    this.router.navigateByUrl('/home');
    
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

}

