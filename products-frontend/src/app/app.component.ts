import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule, 
    RouterOutlet,
    RouterLink, 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Mis productos';
}
