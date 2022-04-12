import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "src/app/model/auth.service";
import { RestDataSource } from "src/app/model/rest.datasource";
import { User } from "src/app/model/user.model";
import { NgForm } from '@angular/forms';
import{ GlobalComponent } from 'src/app/global-component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public user: User;
  public errorMessage: string;

  constructor(private router: Router,
              private auth: AuthService,
              private datasource: RestDataSource) { }

  ngOnInit(): void
  {
    this.user = new User();
  }

  authenticate(form: NgForm): void
  {

    if (form.valid)
    {
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
    else
    {
      this.errorMessage = 'Form Data Invalid';
    }
  }

}
