import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../model/auth.service';

import { User } from '../../model/user.model';


@Component({
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit 
{
  public user!: User;
  public errorMessage!: string;

  constructor(private router: Router,
              private auth: AuthService) { }

  ngOnInit(): void 
  {
    this.user = new User();
  }

  authenticate (form: NgForm): void
  {
    if(form.valid)
    {
      //perform authentication
      this.auth.authenticate(this.user).subscribe(data => {
        console.log('>>>DEBUG')
        console.log(data)
        if(data.success)
        {
          this.auth.storeUserData(data.token, data.user);
          console.log('>>>logged in')
          this.router.navigateByUrl('admin/main');
        }
      });
      
    }
    else
    {
      console.log('>>>not logged in')
      this.errorMessage = 'Form Data Invalid';
    }
  }
  
}
