import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PasswordComponent } from '../password/password.component'; // Import PasswordComponent
import { FormsModule } from '@angular/forms';
import { InputModule } from '../components/input/input.module';

// import { AppComponent } from './app.component'
import { TemplateEditorComponent } from '../template-editor/template-editor.component';
import { ButtonComponent } from '../components/button/button.component';
import { InputComponent } from '../components/input/input.component';
import { DynamicComponentService } from '../dynamic-component.service';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    TemplateEditorComponent,
    ButtonComponent,
    InputComponent,
    PasswordComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatSlideToggleModule,
    FormsModule,
    InputModule,
    DragDropModule,
  ],
  providers: [DynamicComponentService],
  bootstrap: [TemplateEditorComponent]
})
export class TemplateModule {}
