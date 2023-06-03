import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/components/confirmation-dialog/confirmation-dialog.component';


export interface ProductsInventory{
  name: string;
  id: number;
  image: string;
  precio: number;
  cantidad: number;
  descripcion: string;
  deleteicon: string;
  updateicon: string;
}

const ELEMENT_DATA: ProductsInventory[] = [
  {id: 1, name: 'Martillo', image: 'https://i.ibb.co/tC8SxgB/martillo.jpg', precio: 50, cantidad: 30, descripcion: 'Martillo de primera', deleteicon: 'delete', updateicon: 'update'},
  {id: 2, name: 'Destornillador', image: 'https://i.ibb.co/yhgBF1T/destornillador.png', precio: 30, cantidad: 76, descripcion: 'Destornillador tipo plano', deleteicon: 'delete', updateicon: 'update'},
  {id: 3, name: 'Taladro', image: 'https://i.ibb.co/6ZWG81V/taladro.png', precio: 500, cantidad: 15, descripcion: 'Taladro de 3 velocidades, con luz a baterias y a corriente', deleteicon: 'delete', updateicon: 'update'},
  {id: 4, name: 'Sierra', image: 'https://i.ibb.co/FD2d7NR/sierra.jpg', precio: 70, cantidad: 69, descripcion: 'Sierra para madera', deleteicon: 'delete', updateicon: 'update'},];


@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent {
  displayedColumns: string[] = ['id', 'name', 'image', 'precio', 'cantidad', 'descripcion', 'deleteicon', 'updateicon'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  constructor(private router: Router, private dialog:MatDialog) {}
  updateData(element: any) {
  // Navegar a otra pantalla con los datos de element
  this.router.navigate(['/updateproduct', {data: JSON.stringify(element)}]);
}

openConfirmationDialog(id: string, nombre: string): void {
  const dialogRef: MatDialogRef<any> = this.dialog.open(ConfirmationDialogComponent, {
    width: '300px',
    data: { id, nombre }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // Aquí puedes realizar la acción de borrado del producto
    }
  });
}
}
