import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrl: './imc.component.css'
})
export class ImcComponent {

peso: number = 0;
altura: number = 0;
resultado: number | null = null;

calcularIMC() {
  if (this.peso > 0 && this.altura > 0) {
    this.resultado = this.peso / (this.altura * this.altura);

  } else {
    this.resultado = null;
  
  }
}

}
