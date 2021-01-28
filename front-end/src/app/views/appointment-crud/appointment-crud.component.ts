import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-appointment-crud',
  templateUrl: './appointment-crud.component.html',
  styleUrls: ['./appointment-crud.component.css']
})
export class AppointmentCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Agendamentos',
      icon: 'today',
      routeUrl: ''
    }
  }

  ngOnInit(): void {
	}
	
	navigateToAppointmentCreate(): void {
    this.router.navigate(['/appointments/create'])
  }

}
