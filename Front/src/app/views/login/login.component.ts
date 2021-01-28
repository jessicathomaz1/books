import { Login } from './usuarioLogin';
import { CreateUserService } from './../../components/create-user/create-user.service';
import { Usuario } from './../../components/create-user/usuario.model';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	login: Login = new Login();
	

	constructor(private router: Router,
							private authService: AuthService,
							private createUserService: CreateUserService) { }

  ngOnInit(): void {
		console.log(this.login)

	}
	
	entrar(): void {
		console.log(this.login)
    this.router.navigate(['/livros'])
	}

}
