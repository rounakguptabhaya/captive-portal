import { NgModule } from '@angular/core'; 
import { FormsModule } from '@angular/forms'; 

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { PreferenceDialogComponent } from './preference-dialog.component';


@NgModule({ 
declarations: [PreferenceDialogComponent], 
imports: [ 
	FormsModule, 
	MatButtonModule, 
	MatCommonModule, 
	MatDialogModule, 
	MatFormFieldModule, 
	MatInputModule, 
], 
}) 
export class PreferenceDialogModule {} 
