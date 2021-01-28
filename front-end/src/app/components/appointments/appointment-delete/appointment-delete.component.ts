import { AppointmentService } from './../appointment.service';
import { Appointment } from './../appointment.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-appointment-delete',
  templateUrl: './appointment-delete.component.html',
  styleUrls: ['./appointment-delete.component.css']
})
export class AppointmentDeleteComponent implements OnInit {

	appointment: Appointment

	constructor(private appointmentService :AppointmentService, 
							private router: Router,
    					private route: ActivatedRoute) { }

  ngOnInit(): void {
		const id = +this.route.snapshot.paramMap.get('id');
    this.appointmentService.readById(id).subscribe((appointment) => {
      this.appointment = appointment;
    });
	}
	
	deleteAppointment(): void {
		this.appointmentService.delete(this.appointment.id).subscribe(() => {
      this.appointmentService.showMessage("Agendamento excluido com sucesso!");
      this.router.navigate(["/appointments"]);
    });
	}

	cancel(): void {
		this.router.navigate(["/appointments"]);
	}

}
