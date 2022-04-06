import { Component, OnInit } from '@angular/core';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  //formdata!: FormGroup;
  formdata: any = {}
  Title: any;

  constructor(private repository: SurveyRepository) { }
  //formdata!: FormGroup;
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
    console.log(data);
    this.repository.postSurveys(data);
    
  }

}
