import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  // 1. Creamos una propiedad "booleana" (verdadero o falso) para el estado del tema
  esModoOscuro: boolean = false;

  // 2. Creamos la función que el botón va a disparar al hacer clic
  cambiarTema() {
    // Esto simplemente invierte el valor: si es falso lo vuelve verdadero, y viceversa
    this.esModoOscuro = !this.esModoOscuro;
  }
}
