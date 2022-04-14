import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalComponent } from 'src/app/global-component';
import { AuthService } from 'src/app/model/auth.service';
import { RestDataSource } from 'src/app/model/rest.datasource';
import { User } from 'src/app/model/user.model';
import { UserRepository } from 'src/app/model/user.repository';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formdata: any = {}
  registered = false;
  regSent = false;

  constructor(public repository:UserRepository,
              public user:User,
              private auth: AuthService,
              private router: Router,
              private dataSource: RestDataSource) { }
  //formdata!: FormGroup;
  ngOnInit(): void 
  {
    
  }

  regSubmit(form: NgForm): void
  {
    this.registered = true;
    if(form.valid)
    {
      this.repository.saveUser(this.user).subscribe(user =>{
        this.regSent = true;
        this.registered = false;
      
      });
      // perform authentication
      this.auth.authenticate(this.user).subscribe(data => {
        if (data.success)
        {
          GlobalComponent.displayName = data.user.displayName;
          this.auth.storeUserData(data.token, data.user);
          this.router.navigateByUrl('/home');
        }
      });
    }   
  }

}
