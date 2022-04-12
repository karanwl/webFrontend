import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from 'src/app/model/model.module';
import { ViewSurveyResultComponent } from './view-survey-result.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [ModelModule , BrowserModule , FormsModule, RouterModule],
    declarations: [ ViewSurveyResultComponent],
    exports: [ViewSurveyResultComponent]
})
export class ViewSurveyResultModule { }