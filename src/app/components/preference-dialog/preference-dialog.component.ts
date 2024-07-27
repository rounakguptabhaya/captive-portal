import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-preference-dialog',
  templateUrl: './preference-dialog.component.html',
  styleUrls: ['./preference-dialog.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, 
    MatButtonModule, 
    MatDialogModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatSelectModule
  ]
})
export class PreferenceDialogComponent {
  selectedType: string = '';
  label: string = '';

  types: Type[] = [
    { value: 'text', viewValue: 'text' },
    { value: 'number', viewValue: 'number' },
    { value: 'password', viewValue: 'password' },
    { value: 'email', viewValue: 'email' },
  ];

  constructor(
    public dialogRef: MatDialogRef<PreferenceDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onCancel(): void {
    this.dialogRef.close(); 
  }

  save(): void {
    const preferences = {
      selectedType: this.selectedType,
      label: this.label
    };
    this.dialogRef.close(preferences); 
  }
}
