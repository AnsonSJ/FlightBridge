import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuchungDatatableComponent } from './components/buchung-datatable/buchung-datatable.component';
import { BuchungDetailComponent } from './components/buchung-detail/buchung-detail.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full', component: BuchungDatatableComponent },
  {path: 'login', component: LoginComponent },
  {path: ':id/detail', component: BuchungDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
