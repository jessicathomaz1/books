import { Product } from './../../product/product.model';
import { AppointmentService } from './../appointment.service';
import { Appointment } from './../appointment.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointments-read',
  templateUrl: './appointments-read.component.html',
  styleUrls: ['./appointments-read.component.css']
})
export class AppointmentsReadComponent implements OnInit {

	appointments: Appointment[]
	displayedColumns = ['id', 'name', 'date', 'action']

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
		this.appointmentService.read().subscribe(appointments => {
			this.appointments = appointments
			console.log(appointments)
		})
  }

}
