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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BuchungFilterComponent,
    BuchungDatatableComponent,
    BuchungDetailComponent,
    BuchungAirlineDetailComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
