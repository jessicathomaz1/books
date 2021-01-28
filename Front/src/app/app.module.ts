import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';

import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatCardModule } from  '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from  '@angular/material/button';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { HttpClientModule } from  '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from  '@angular/common';

import { LivroDeleteComponent } from './components/livros/livro-delete/livro-delete.component';
import { LivroUpdateComponent } from './components/livros/livro-update/livro-update.component';
import { LivroReadComponent } from './components/livros/livro-read/livro-read.component';
import { LivroCreateComponent } from './components/livros/livro-create/livro-create.component';
import { LivrosCrudComponent } from './views/livros-crud/livros-crud.component';
import { LoginComponent } from './views/login/login.component';
import { CreateUserComponent } from './components/create-user/create-user.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LivroCreateComponent,
    LivroDeleteComponent,
    LivroUpdateComponent,
    LivroReadComponent,
    LivrosCrudComponent,
    LoginComponent,
    CreateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
		MatSortModule,
		MatDatepickerModule,
		MatNativeDateModule
  ],
  providers: [
		{
			provide: LOCALE_ID,
			useValue: 'pt-BR',
		}
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
