import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* CDK */
import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';

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
    MatChipsModule,
 } from '@angular/material';

import { 
    FormsModule,
    ReactiveFormsModule,    
 } from '@angular/forms';

import {CdkDetailRowDirective} from '../../cdk-detail-row.directive';

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
    MatChipsModule,
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
    MatChipsModule,
    
    // CDK
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    ScrollDispatchModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
  ]
})
export class MaterialModule { }
