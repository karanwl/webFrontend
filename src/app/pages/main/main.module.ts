import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from 'src/app/model/model.module';
import { MainComponent } from './main.component';

@NgModule({
    imports: [ModelModule , BrowserModule , FormsModule],
    declarations: [ MainComponent],
    exports: [MainComponent]
})
export class MainModule { }