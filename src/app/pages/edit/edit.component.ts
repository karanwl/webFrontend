import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Surveys } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  formdata: any = {}
  Title: any;
  _id: any;
  survey: Surveys[]

  constructor(private repository: SurveyRepository,
              private router: Router,
              private route: ActivatedRoute) { }
     
  get surveys(): Surveys[] {
    return this.repository.getSurveys();
  }
  
  //formdata!: FormGroup;
  ngOnInit() {
    this._id = this.route.snapshot.params['id'];
    console.log(this._id)
    
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
   
    this.repository.postSurveys(data);
    this.router.navigateByUrl('/home');
    
  }
}
