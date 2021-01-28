import { AppComponent } from './../../app.component';
import { Appointment } from './appointment.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, map } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
	baseUrl = "http://localhost:3001/appointments"

	constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

	showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
	}

	create(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(this.baseUrl, appointment).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
	}
	
	read(): Observable<Appointment[]> {
		return this.http.get<Appointment[]>(this.baseUrl)
	}

	readById(id: number): Observable<Appointment> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Appointment>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

	update(appointment: Appointment): Observable<Appointment> {
    const url = `${this.baseUrl}/${appointment.id}`;
    return this.http.put<Appointment>(url, appointment).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Appointment> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Appointment>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
	}
	
	errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
