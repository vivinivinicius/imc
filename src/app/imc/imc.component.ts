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
      this.imagem = 'https://static.vecteezy.com/system/resources/previews/013/743/777/original/neutral-face-emoji-png.png';
    } else if (this.resultado >= 18.5 && this.resultado < 24.9) {
      this.classificacao = 'Peso Normal';
      this.imagem = 'https://png.pngtree.com/png-clipart/20221007/original/pngtree-happy-face-png-image_8663365.png';
    } else if (this.resultado >= 25 && this.resultado < 29.9) {
      this.classificacao = 'Sobrepeso';
      this.imagem = 'https://static.vecteezy.com/system/resources/previews/009/315/165/original/sad-3d-render-red-emoji-free-png.png';
    } else {
      this.classificacao = 'Obesidade';
      this.imagem = 'https://static.vecteezy.com/system/resources/previews/017/178/327/original/warning-hazard-sign-on-transparent-background-free-png.png';
    }
  } else {
    this.resultado = null;
    this.classificacao = '';
    this.imagem = '';

  }
}

}
