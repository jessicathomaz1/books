import { LivroDeleteComponent } from './components/livros/livro-delete/livro-delete.component';
import { LivroUpdateComponent } from './components/livros/livro-update/livro-update.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LivrosCrudComponent } from './views/livros-crud/livros-crud.component';
import { LivroCreateComponent } from './components/livros/livro-create/livro-create.component';
import { LoginComponent } from './views/login/login.component';
import { CreateUserComponent } from './components/create-user/create-user.component';

const routes: Routes = [
	{
    path: "",
    component: LivrosCrudComponent
  },
  {
    path: "livros/create",
    component: LivroCreateComponent
	},
	{
    path: "livros/update/:id",
    component: LivroUpdateComponent
	},
	{
    path: "livros/delete/:id",
    component: LivroDeleteComponent
	},
	{
    path: "cadastro",
    component: CreateUserComponent,
	},
	{
    path: "cadastro/create",
    component: CreateUserComponent
	}
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
