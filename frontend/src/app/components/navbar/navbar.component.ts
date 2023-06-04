import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  userRole: string | null;

  constructor() {
    // Obtener el rol del usuario almacenado en el localStorage
    this.userRole = localStorage.getItem('userRole');
    console.log(this.userRole);
  }

  logout(): void {
    // Eliminar el rol del almacenamiento local
    localStorage.removeItem('userRole');

    // Realizar acciones adicionales, como redireccionar a la página de inicio de sesión
    window.location.href = '/';
  }
}
