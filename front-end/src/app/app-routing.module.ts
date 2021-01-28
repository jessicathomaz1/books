import { AppointmentUpdateComponent } from './components/appointments/appointment-update/appointment-update.component';
import { AppointmentCreateComponent } from './components/appointments/appointment-create/appointment-create.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { AppointmentCrudComponent } from './views/appointment-crud/appointment-crud.component';
import { AppointmentDeleteComponent } from './components/appointments/appointment-delete/appointment-delete.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent
	},
  {
    path: "appointments",
    component: AppointmentCrudComponent
	},
  {
    path: "appointments/create",
    component: AppointmentCreateComponent
	},
	{
    path: "appointments/update/:id",
    component: AppointmentUpdateComponent
	},
	{
    path: "appointments/delete/:id",
    component: AppointmentDeleteComponent
  }
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
