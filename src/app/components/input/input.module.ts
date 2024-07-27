import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input.component';

// import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    InputComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    InputComponent
  ]
})
export class InputModule {}
