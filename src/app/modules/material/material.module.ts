import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
    MatInputModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatDatepickerModule, 
    MatNativeDateModule,
    MatTableModule,
    MatToolbarModule,
    MatExpansionModule,
    MatRadioModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatSelectModule,
    MatCardModule,
    MatProgressSpinnerModule,
 } from '@angular/material';

import { 
    FormsModule,
    ReactiveFormsModule,    
 } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatDatepickerModule, 
    MatNativeDateModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatRadioModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatSelectModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    CommonModule,
    MatInputModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatDatepickerModule, 
    MatNativeDateModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatRadioModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    MatTooltipModule ,
    MatSelectModule,
    MatCardModule,
    MatProgressSpinnerModule,  
  ]
})
export class MaterialModule { }
