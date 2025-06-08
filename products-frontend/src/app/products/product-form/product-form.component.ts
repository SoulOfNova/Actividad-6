import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-product-form',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {

  onButtonClick(){
    alert("Agregar producto")
  }
}
