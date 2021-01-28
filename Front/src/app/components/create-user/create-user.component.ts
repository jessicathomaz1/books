import { CreateUserService } from './create-user.service';
import { Usuario } from './usuario.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
	usuario: Usuario = {
    nome: '',
		login: '',
		senha: '',
		tipo_usuario: 1
  }
  constructor(private createUserService: CreateUserService, private router: Router) { }

  ngOnInit(): void {
	}
	
	createUser(): void {
    this.createUserService.create(this.usuario).subscribe(() => {
      this.createUserService.showMessage('Usuário cadastrado com sucesso!')
      this.router.navigate([''])
		})

  }

  cancel(): void {
    this.router.navigate([''])
  }

}
