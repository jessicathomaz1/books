import { LivrosService } from './../livros.service';
import { Livro } from './../livro.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro-read',
  templateUrl: './livro-read.component.html',
  styleUrls: ['./livro-read.component.css']
})
export class LivroReadComponent implements OnInit {

  livros: Livro[]
	displayedColumns = ['id', 'nome', 'autor', 'ano', 'action']

  constructor(private livrosService: LivrosService) { }

  ngOnInit(): void {
		this.livrosService.read().subscribe(livros => {
			this.livros = livros
			console.log(livros)
		})
  }

}
