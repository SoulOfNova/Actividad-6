import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Product } from '../product';


const ELEMENT_DATA: Product[] = [
  {id: 1, name: 'Laptop', description: "Computadora Laptop", price: 1200, quantity: 5},
  {id: 2, name: 'Keyboard', description: "Teclado Mecanico", price: 80, quantity: 15},
  {id: 3, name: 'Mouse', description: "Mouse Inhalambrico", price: 30, quantity: 100},
];


@Component({
  selector: 'app-product-list',
  imports: [MatTableModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  displayedColumns: string[] = ['name', 'description', 'price'];
  dataSource = ELEMENT_DATA;
}
