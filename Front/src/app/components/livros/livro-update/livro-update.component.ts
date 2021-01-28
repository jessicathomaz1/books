import { Livro } from './../livro.model';
import { LivrosService } from './../livros.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-livro-update',
  templateUrl: './livro-update.component.html',
  styleUrls: ['./livro-update.component.css']
})
export class LivroUpdateComponent implements OnInit {
	livro: Livro;

  constructor(private livrosService: LivrosService,
							private router: Router,
							private route: ActivatedRoute) { }

  ngOnInit(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.livrosService.readById(id).subscribe(livro => {
			this.livro = livro;
		});
	}
	
	updateLivro(): void {
		this.livrosService.update(this.livro).subscribe(() => {
			this.livrosService.showMessage("Atualizado com sucesso!");
			this.router.navigate(["/livros"]);
		});
	}

	cancel(): void {
		this.router.navigate([""]);
	}

}
