import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BuchungFilterComponent } from './components/buchung-filter/buchung-filter.component';
import { BuchungDatatableComponent } from './components/buchung-datatable/buchung-datatable.component';
import { BuchungDetailComponent } from './components/buchung-detail/buchung-detail.component';

import { HttpClientModule }    from '@angular/common/http';
import { BuchungAirlineDetailComponent } from './components/buchung-airline-detail/buchung-airline-detail.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';

import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';

import {CdkDetailRowDirective} from './cdk-detail-row.directive';
import { BuchungAirlineDetailExpandComponent } from './components/buchung-airline-detail-expand/buchung-airline-detail-expand.component';
import { BuchungPassengersComponent } from './components/buchung-passengers/buchung-passengers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BuchungFilterComponent,
    BuchungDatatableComponent,
    BuchungDetailComponent,
    BuchungAirlineDetailComponent,
    LoaderComponent,
    LoginComponent,
    RegisterComponent,
    CdkDetailRowDirective,
    BuchungAirlineDetailExpandComponent,
    BuchungPassengersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
