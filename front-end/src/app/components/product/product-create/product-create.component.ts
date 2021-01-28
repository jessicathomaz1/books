import { HttpClient } from '@angular/common/http';
import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
		price: null,
		image: null
  }

  constructor(private productService: ProductService, private http: HttpClient,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado!')
      this.router.navigate(['/products'])
    })

  }

  cancel(): void {
    this.router.navigate(['/products'])
	}
	

	inputFileChaneg(event) {
		if(event.target.files && event.target.files[0]) {
			const image = event.target.files[0];

			const formData = new FormData();
			this.http.post('http://localhost:3001/products/image', formData)
				.subscribe(() => {
					this.productService.showMessage('Imagem enviada!')
				})
			// this.productService.upload(this.product).subscribe(() => {
			// 	this.productService.showMessage('Imagem enviada!')
			// })
		}
	}
}
