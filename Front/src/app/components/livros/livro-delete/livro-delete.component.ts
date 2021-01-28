import { LivrosService } from './../livros.service';
import { Livro } from './../livro.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-livro-delete',
  templateUrl: './livro-delete.component.html',
  styleUrls: ['./livro-delete.component.css']
})
export class LivroDeleteComponent implements OnInit {

	livro: Livro

  constructor(private livrosService: LivrosService, 
							private router: Router,
							private route: ActivatedRoute) { }

  ngOnInit(): void {
		const id = +this.route.snapshot.paramMap.get('id');
    this.livrosService.readById(id).subscribe((livro) => {
      this.livro = livro;
    });
	}
	
	deleteLivro(): void {
		this.livrosService.delete(this.livro.id).subscribe(() => {
      this.livrosService.showMessage("Livro excluido com sucesso!");
      this.router.navigate(["/livros"]);
    });
	}

	cancel(): void {
		this.router.navigate([""]);
	}

}
