import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../model/auth.service";
import { Surveys } from "../model/survey.model";
import { SurveyRepository } from "../model/survey.repository";

@Component({
    templateUrl: './admin.component.html'
})
export class AdminComponent
{
    constructor(private auth: AuthService,
                private router: Router,
                private repository: SurveyRepository) {}

    get surveys(): Surveys[] {
        return this.repository.getSurveys();
    }
    
    deleteSurvey(id:any){
        console.log(id);
        return this.repository.deleteSurvey(id);
    }
    logout(): void
    {
        this.auth.logout();
        this.router.navigateByUrl('/');
    }
}