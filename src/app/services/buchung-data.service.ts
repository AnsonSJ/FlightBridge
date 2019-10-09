import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';

import { Observable, of } from 'rxjs';
//import { BUCHUNGDATA } from '../mock-buchungen';
import { Buchung } from '../models/buchung';

@Injectable({
  providedIn: 'root'
})
export class BuchungDataService {
  buchung: Buchung;
  
  // API URL
  private apiUrl = 'http://localhost:3000/data';

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor(private http: HttpClient) { }

  getData():  Observable<Buchung[]> {
    return this.http.get<Buchung[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError<Buchung[]>('getData()', []))
      );
  }

  getDataDetail(id: number): Observable<Buchung> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Buchung>(url)
    .pipe(
      catchError(this.handleError<Buchung>(`getDataDetail id=${id}`))
    );
  } 
}
