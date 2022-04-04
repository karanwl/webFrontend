import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from 'src/app/model/model.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [ModelModule , BrowserModule , FormsModule],
    declarations: [ HomeComponent],
    exports: [HomeComponent]
})
export class HomeModule { }