import { Livro } from './livro.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, map } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {
	baseUrl = "http://localhost:3001/livros"

	constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
	
	showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
	}

	create(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(this.baseUrl, livro).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
	}
	
	read(): Observable<Livro[]> {
		return this.http.get<Livro[]>(this.baseUrl)
	}

	readById(id: number): Observable<Livro> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Livro>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

	update(livro: Livro): Observable<Livro> {
    const url = `${this.baseUrl}/${livro.id}`;
    return this.http.put<Livro>(url, livro).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Livro> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Livro>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
	}
	
	errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
