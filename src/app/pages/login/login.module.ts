import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from 'src/app/model/model.module';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [ModelModule , BrowserModule , FormsModule],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})
export class LoginModule { }