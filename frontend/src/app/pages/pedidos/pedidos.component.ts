import { Component } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent {
  pedido = {
    nombre: '',
    correo: '',
    producto: '',
    cantidad: null
  };

  productos = ['Martillo', 'Destornillador', 'Taladro', 'Sierra'];

  submitForm() {
    // Aquí puedes procesar los datos del formulario, enviarlos al servidor, etc.
    console.log('Pedido realizado:', this.pedido);
  }
}
