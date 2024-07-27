import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import {CdkDrag} from '@angular/cdk/drag-drop';

import {InputComponent} from './components/input/input.component'
import {ButtonComponent} from './components/button/button.component'
import { TemplateEditorComponent } from './template-editor/template-editor.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggleModule, MatLabel, MatFormField, MatInput, CdkDrag, InputComponent, ButtonComponent, TemplateEditorComponent, MatSidenavModule, MatMenuModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // public name: any = 1
  title = 'website-builder';
}
