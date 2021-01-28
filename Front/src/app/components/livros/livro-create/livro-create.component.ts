import { Livro } from './../livro.model';
import { LivrosService } from './../livros.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent implements OnInit {
	livro: Livro = {
    nome: '',
		autor: '',
		ano: ''
  }

  constructor(private livrosService: LivrosService, private router: Router) { }

  ngOnInit(): void {
	}
	
	createLivro(): void {
    this.livrosService.create(this.livro).subscribe(() => {
      this.livrosService.showMessage('Livro Cadastrado!')
      this.router.navigate(['/livros'])
		})

  }

  cancel(): void {
    this.router.navigate([''])
  }

}
