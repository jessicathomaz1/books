import { Appointment } from './../appointment.model';
import { AppointmentService } from './../appointment.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-create',
  templateUrl: './appointment-create.component.html',
  styleUrls: ['./appointment-create.component.css']
})
export class AppointmentCreateComponent implements OnInit {

	appointment: Appointment = {
    name: '',
    date: null
  }

  constructor(private appointmentService: AppointmentService, private router: Router) { }

  ngOnInit(): void {
	}
	
	createProduct(): void {
    this.appointmentService.create(this.appointment).subscribe(() => {
      this.appointmentService.showMessage('Agendamento criado!')
      this.router.navigate(['/appointments'])
		})

  }

  cancel(): void {
    this.router.navigate(['/appointments'])
  }

}
