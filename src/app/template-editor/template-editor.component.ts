import {
  Component,
  OnInit,
  Renderer2,
  ElementRef,
  ViewChild,
  ViewContainerRef,
  Type,
  ComponentRef,
} from '@angular/core';
import { DynamicComponentService } from '../dynamic-component.service';
import { MatDialog } from '@angular/material/dialog';
import { PreferenceDialogComponent } from '../components/preference-dialog/preference-dialog.component';
import { ButtonComponent } from '../components/button/button.component';
import { InputComponent } from '../components/input/input.component';
import { PasswordComponent } from '../password/password.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {
  CdkDragDrop,
  CdkDropList,
  CdkDrag,
  moveItemInArray,
} from '@angular/cdk/drag-drop';

import { GithubComponent } from '../components/buttons/github/github.component';
import { GoogleComponent } from '../components/buttons/google/google.component';
import { TwitterComponent } from '../components/buttons/twitter/twitter.component';
import { AppleComponent } from '../components/buttons/apple/apple.component';
import { FacebookComponent } from '../components/buttons/facebook/facebook.component';
import { LinkedinComponent } from '../components/buttons/linkedin/linkedin.component';

@Component({
  selector: 'app-template-editor',
  templateUrl: './template-editor.component.html',
  styleUrls: ['./template-editor.component.scss'],
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent,
    PasswordComponent,
    MatButtonModule,
    MatMenuModule,
    CommonModule,
    MatIconModule,
    MatSlideToggleModule,
    FormsModule,
    DragDropModule,
    GithubComponent,
    GoogleComponent,
    TwitterComponent,
    AppleComponent,
    FacebookComponent,
    LinkedinComponent,
    CdkDropList,
    CdkDrag,
  ],
})
export class TemplateEditorComponent implements OnInit {
  templateCode = '<div id="template-container">\n';
  templateCSS = '';
  titleText = 'Tata Communications';
  imageUrl: string = 'assets/images/tata.png';
  backgroundImg = '/assets/images/bg2.jpg';

  componentNames: any = {
    input: 'input',
    password: 'password',
    button: 'button',
    google: 'google',
    github: 'github',
    facebook: 'facebook',
    twitter: 'twitter',
    linkedin: 'linkedin',
    apple: 'apple',
  };

  checkboxState: any = {
    button: false,
    input: false,
    password: false,
    google: false,
    linkedin: false,
    github: false,
    twitter: false,
    facebook: false,
    apple: false,
  };

  ref = `input_field`;

  components = new Map<string, ComponentRef<any>>();

  componentsPos: any = [];

  authBtns: any = [];

  button = 'Button';
  isSlideOverOpen = false;

  openSlideOver() {
    this.isSlideOverOpen = true;
  }

  closeSlideOver() {
    this.isSlideOverOpen = false;
  }

  createComponent(componentName: string) {
    const { type: componentType, ref } = this.getComponentType(componentName);
    console.log(componentType);
    console.log(ref);

    const component = ref.createComponent(componentType);
    this.components.set(componentName, component);
  }

  deleteComponent(componentName: string) {
    if (this.components.has(componentName)) {
      this.components.get(componentName)?.destroy();
      this.components.delete(componentName);
    }
  }

  constructor(
    private dynamicComponentService: DynamicComponentService,
    private renderer: Renderer2,
    private el: ElementRef,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  onCheckboxChange(component: string) {
    const isChecked = this.checkboxState[component];
    const { flag } = this.getComponentType(component);

    if (isChecked) {
      if (flag === 'general') {
        this.componentsPos.push({ type: component });
      } else if (flag === 'auth') {
        this.authBtns.push({ type: component });
      }
    } else {
      if (flag === 'general') {
        this.componentsPos = this.componentsPos.filter(
          (field: any) => field.type != component
        );
      } else if (flag === 'auth') {
        this.authBtns = this.authBtns.filter(
          (btn: any) => btn.type != component
        );
      }
    }
  }

  getComponentType(name: string): any {
    let type: any = InputComponent;
    let flag: any = 'general';
    switch (name) {
      case this.componentNames.input: {
        type = InputComponent;
        flag = 'general';
        break;
      }
      case this.componentNames.button: {
        type = ButtonComponent;
        flag = 'general';
        break;
      }
      case this.componentNames.password: {
        type = PasswordComponent;
        flag = 'general';
        break;
      }
      case this.componentNames.facebook: {
        type = FacebookComponent;
        flag = 'auth';
        break;
      }
      case this.componentNames.google: {
        type = GoogleComponent;
        flag = 'auth';
        break;
      }
      case this.componentNames.github: {
        type = GithubComponent;
        flag = 'auth';
        break;
      }
      case this.componentNames.twitter: {
        type = TwitterComponent;
        flag = 'auth';
        break;
      }
      case this.componentNames.linkedin: {
        type = LinkedinComponent;
        flag = 'auth';
        break;
      }
      case this.componentNames.apple: {
        type = AppleComponent;
        flag = 'auth';
        break;
      }
    }

    return { type, flag };
  }

  exportTemplate() {
    const container = this.el.nativeElement.querySelector(
      '.workspace-container'
    );
    if (container) {
      console.log(container);
      const htmlContent = container.outerHTML;
      const styles = Array.from(document.head.querySelectorAll('style'))
        .map((style) => style.outerHTML)
        .join('\n');
      const blob = new Blob(
        [htmlContent, '\n<style>\n', styles, this.templateCSS, '\n</style>'],
        { type: 'text/html' }
      );
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'template.html';
      link.click();
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onBackgroundChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.backgroundImg = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.componentsPos,
      event.previousIndex,
      event.currentIndex
    );
  }

  authdrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.authBtns, event.previousIndex, event.currentIndex);
  }
}
