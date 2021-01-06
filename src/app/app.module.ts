import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


import { AppComponent } from './app.component';

import { FooterComponent } from './static/footer/footer.component';
import { HeaderComponent } from './static/header/header.component';
import { LoginComponent } from './vistas/login/login.component';
import { MenuComponent } from './vistas/menu/menu.component';
import { HomeComponent } from './vistas/home/home.component';
import { CalendarioComponent } from './vistas/calendario/calendario.component';
import { CrudEquiposComponent } from './vistas/inventario/crud-equipos/crud-equipos.component';
import { FormEquiposComponent } from './vistas/inventario/crud-equipos/form-equipos/form-equipos.component';
import { from } from 'rxjs';
import { CrudRamComponent } from './vistas/inventario/crud-ram/crud-ram.component';
import { FormRamComponent } from './vistas/inventario/crud-ram/form-ram/form-ram.component';
import { InventarioComponent } from './vistas/inventario/inventario.component';


//definimos la rutas
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:"full"},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'menu', component: MenuComponent},
  /**incio rutas para inventario */
  {path: 'inventario', component: InventarioComponent},
  /**crud de equipos y form */
  {path: 'admequipos', component: CrudEquiposComponent},
  {path: 'admformequipos', component: FormEquiposComponent},
  /**crud de ram y form */
  {path: 'admram:', component: CrudRamComponent},
  {path: 'admformram', component: FormRamComponent}
  /**verificar datos pendientes para agregar mas cosas */
    /**fin rutas para inventario */
  
];


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    CalendarioComponent,
    CrudEquiposComponent,
    FormEquiposComponent,
    CrudRamComponent,
    FormRamComponent,
    InventarioComponent,
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    [SweetAlert2Module.forRoot()],
    [SweetAlert2Module],
    [SweetAlert2Module.forChild({ /* options */ })],
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
