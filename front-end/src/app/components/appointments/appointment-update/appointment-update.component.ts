import { AppointmentService } from './../appointment.service';
import { Appointment } from './../appointment.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-appointment-update',
	templateUrl: './appointment-update.component.html',
	styleUrls: ['./appointment-update.component.css']
})
export class AppointmentUpdateComponent implements OnInit {

	appointment: Appointment

	constructor(private appointmentService: AppointmentService,
		private router: Router,
		private route: ActivatedRoute) { }

	ngOnInit(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.appointmentService.readById(id).subscribe(appointment => {
			this.appointment = appointment;
		});
	}

	updateAppointment(): void {
		this.appointmentService.update(this.appointment).subscribe(() => {
			this.appointmentService.showMessage("Reagendado com sucesso!");
			this.router.navigate(["/appointments"]);
		});
	}

	cancel(): void {
		this.router.navigate(["/appointments"]);
	}

}
