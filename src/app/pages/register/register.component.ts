import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestDataSource } from 'src/app/model/rest.datasource';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formdata: any = {}
  user!: User;

  constructor(private dataSource: RestDataSource) { }
  //formdata!: FormGroup;
  ngOnInit() {
    this.formdata = new FormGroup({
        username: new FormControl(),
        password: new FormControl(),
        displayName: new FormControl()
      });
  }

  onClickSubmit(data: any){
    this.user = data.user;
    console.log(data);
    this.dataSource.register(data);
    
  }

}
