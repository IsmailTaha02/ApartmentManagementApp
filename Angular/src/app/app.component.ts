import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { HeaderComponent } from './Components/header/header.component';
=======
>>>>>>> 05c252d67367c7e9626d7a87bac2f0c0122f73b3

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet,HeaderComponent],
=======
  imports: [RouterOutlet],
>>>>>>> 05c252d67367c7e9626d7a87bac2f0c0122f73b3
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-flask';
}
