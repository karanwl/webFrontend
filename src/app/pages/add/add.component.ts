import { Component, OnInit } from '@angular/core';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  //formdata!: FormGroup;
  formdata: any = {}
  Title: any;

  constructor(private repository: SurveyRepository,
    private router: Router) { }
  //formdata!: FormGroup;
  displayName = "";
  ngOnInit() {
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

  onClickSubmit(data: any){
    this.Title = data.Title;
   
    this.repository.postSurveys(data);
    this.router.navigateByUrl('/home');
    
  }

}
