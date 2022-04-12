import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';
import { User } from 'src/app/model/user.model';
<<<<<<< HEAD
import { UserRepository } from 'src/app/model/user.repository';
=======
import{ GlobalComponent } from 'src/app/global-component';
>>>>>>> a26068898786430480c23f390c0ae7eec733b63d

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user!: User;
  displayName = GlobalComponent.displayName;
 
  constructor(private authService: AuthService,
<<<<<<< HEAD
              private repository: UserRepository,
              private router: Router)   {}
              
  get users(): User[] 
  {  
    return this.repository.getUsers();
  }
=======
    private router: Router)   {
    }

>>>>>>> a26068898786430480c23f390c0ae7eec733b63d
  ngOnInit(): void 
  {
    this.user = new User();
    
  }

  

  onLogoutClick(): void
  {
    this.authService.logout().subscribe(data => {
      this.router.navigate(['/login']);
    });
  }

  isLoggedIn(): boolean
  {
    const result = this.authService.authenticated;
    if(result)
    {
      
      this.user = JSON.parse(JSON.stringify(localStorage.getItem('user')));
      
    }
    return result;
  }

}
