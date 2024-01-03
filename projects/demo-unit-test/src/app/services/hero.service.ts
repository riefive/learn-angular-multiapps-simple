import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
  
@Injectable({
    providedIn: 'root'
})
export class HeroService {
    readonly currentUrl = 'api/heroes';

    constructor(private http: HttpClient) {}

    GetHeroes(): Observable<any[]> {
        return this.http.get<any[]>(this.currentUrl).pipe(
          tap((heroes) => this.Log('fetched heroes')),
          catchError(this.HandleError('getHeroes')),
        ) as Observable<any[]>;
    }

    GetHero(id: number | string): Observable<any> {
        if (typeof id === 'string') {
          id = parseInt(id, 10);
        }
        const url = `${this.currentUrl}/?id=${id}`;
        return this.http.get<any[]>(url).pipe(
          map((heroes) => heroes[0]), // returns a {0|1} element array
          tap((h) => {
            const outcome = h ? 'fetched' : 'did not find';
            this.Log(`${outcome} hero id=${id}`);
          }),
          catchError(this.HandleError<any>(`getHero id=${id}`)),
        );
    }

    private HandleError<T>(operation = 'operation') {
        return (errorRes: HttpErrorResponse): Observable<T> => {
          console.error(errorRes); // log to console instead
          // If a native error is caught, do not transform it. We only want to
          // transform response errors that are not wrapped in an `Error`.
          if (errorRes.error instanceof Event) {
            throw errorRes.error;
          }
          const message = `server returned code ${errorRes.status} with body "${errorRes.error}"`;
          // TODO: better job of transforming error for user consumption
          throw new Error(`${operation} failed: ${message}`);
        };
    }
    
    private Log(message: string) {
        console.log('HeroService: ' + message);
    }
}