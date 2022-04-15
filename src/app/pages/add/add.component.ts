import { Component, OnInit } from '@angular/core';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { Surveys } from 'src/app/model/survey.model';
import { ActivatedRoute } from '@angular/router';
import { asLiteral } from '@angular/compiler/src/render3/view/util';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  //formdata!: FormGroup;
  formdata: any = {};
  answerformdata:any={};
  Title: any;
  surveyObject:Surveys;
  surveyRequestObject:Surveys;
  requestType:String;
  surveyId:String;

  constructor(private repository: SurveyRepository,
              private router: Router,
              private route: ActivatedRoute) {
                  if(JSON.parse(JSON.stringify(localStorage.getItem('user')))!==null){
                  this.displayName=JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('user')))).displayName;
                  }   
                  $(".headerUser").text("Welcome, "+this.displayName);
               }
  //formdata!: FormGroup;
  displayName = "";

  get surveys(): Surveys{
   


     this.repository.getSurveys().forEach(survey => {

      if(survey._id===this.surveyId){

        this.surveyObject =  survey;
      }

    });

    return this.surveyObject;
  }

  ngOnInit() {
    this.formdata = new FormGroup({
        Title: new FormControl(),
        Date: new FormControl(),
        Description: new FormControl(),
        Question_1: new FormControl(),
        Question_2: new FormControl(),
        Question_3: new FormControl()
      });

      this.route.queryParams
      .subscribe(params => {
        console.log(params); // { category: "fiction" }
        this.surveyId = params['surveyId'];
        this.requestType = params['requestType'];
       
      }
    );

    this.answerformdata = new FormGroup({
      Answer_1: new FormControl(),
      Answer_2: new FormControl(),
      Answer_3: new FormControl()
    });
  }

  onClickSubmit(data: any){
    this.Title = data.Title;
    if(this.formdata.valid)
    {
      if(JSON.parse(JSON.stringify(localStorage.getItem('user')))!==null){
        data.User=JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('user')))).displayName;
      }
      this.repository.postSurveys(data);
      this.router.navigate(['/home']);
    }
    else
    { 
      console.log('NOT VALID')
    }
  }

  onSubmitAnswer(data: any){
    if(this.answerformdata.valid)
    {
    this.surveyRequestObject =new Surveys();
        this.surveyRequestObject['Title'] =this.surveyObject.Title;
        this.surveyRequestObject['Description'] =this.surveyObject.Description;
        this.surveyRequestObject['Date'] =this.surveyObject.Date;
        this.surveyRequestObject['Question_1'] =this.surveyObject.Question_1;
        this.surveyRequestObject['Question_2'] =this.surveyObject.Question_2;
        this.surveyRequestObject['Question_3'] =this.surveyObject.Question_3;

      if(JSON.parse(JSON.stringify(localStorage.getItem('user')))!==null)
      {
        this.surveyRequestObject['User']=JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('user')))).displayName;
      }
        
      //alert(data.Answer_1)    
      this.surveyRequestObject['Answer_1'] =data.Answer_1;
      this.surveyRequestObject['Answer_2'] = data.Answer_2;
      this.surveyRequestObject['Answer_3']=data.Answer_3;

      //alert(this.surveyRequestObject);

      this.repository.postSurveys(this.surveyRequestObject);

      this.router.navigate(['/home']);
    }
    else
    { 
      console.log('NOT VALID')
    }
  }

}


