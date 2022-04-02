import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from 'src/app/model/model.module';
import { SurveysComponent } from './surveys.component';

@NgModule({
    imports: [ModelModule , BrowserModule , FormsModule],
    declarations: [ SurveysComponent],
    exports: [SurveysComponent]
})
export class SurveyModule { }