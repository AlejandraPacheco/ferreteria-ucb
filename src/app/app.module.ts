import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InventarioComponent,
    ContactosComponent,
    PedidosComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatMenuModule,
    MatIconModule,
    AppRoutingModule,
    RouterModule,
    MatButtonModule,
    NgbModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
