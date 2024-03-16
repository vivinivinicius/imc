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
classificacao: string = '';
imagem: string = '';

calcularIMC() {
  if (this.peso > 0 && this.altura > 0) {
    this.resultado = this.peso / (this.altura * this.altura);

    if (this.resultado < 18.5) {
      this.classificacao = 'Abaixo do Peso';
      this.imagem = '';
    } else if (this.resultado >= 18.5 && this.resultado < 24.9) {
      this.classificacao = 'Peso Normal';
      this.imagem = '';
    } else if (this.resultado >= 25 && this.resultado < 29.9) {
      this.classificacao = 'Sobrepeso';
      this.imagem = '';
    } else {
      this.classificacao = 'Obesidade';
      this.imagem = '';
    }
  } else {
    this.resultado = null;
    this.classificacao = '';
    this.imagem = '';

  }
}

}
