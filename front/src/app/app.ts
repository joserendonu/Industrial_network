

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LlenadoraPopupComponent } from './llenadora-popup/llenadora-popup';
import { NgIf } from '@angular/common'; // <-- IMPORTANTE

@Component({
  selector: 'app-root',
  imports: [NgIf, RouterOutlet, LlenadoraPopupComponent], // <-- AGREGA NgIf AQUÍ

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'front';
  selectedPiece: string | null = null;
  showLlenadoraPopup = false;

  llenadoraData = {
    temperatura: 25,
    porcentajeLleno: 80,
    numeroCerezas: 120
  };

  selectPiece(piece: string) {
    this.selectedPiece = piece;
    if (piece === 'Llenadora') {
      this.showLlenadoraPopup = true;
    }
  }

  closeLlenadoraPopup() {
    this.showLlenadoraPopup = false;
  }
  // ...existing code...
  actualizarDatos() {
    // Simula variaciones aleatorias
    const variacionPorcentaje = Math.floor(Math.random() * 11) - 5; // -5 a +5
    const nuevaTemp = this.llenadoraData.temperatura + (Math.random() * 2 - 1); // +/-1 grado
    let nuevoPorcentaje = this.llenadoraData.porcentajeLleno + variacionPorcentaje;
    nuevoPorcentaje = Math.max(0, Math.min(100, nuevoPorcentaje));
    // Relaciona cerezas con porcentaje lleno (ejemplo: 1% = 1.5 cerezas)
    const nuevasCerezas = Math.round(nuevoPorcentaje * 1.5);

    this.llenadoraData = {
      temperatura: Math.round(nuevaTemp * 10) / 10,
      porcentajeLleno: nuevoPorcentaje,
      numeroCerezas: nuevasCerezas
    };
  }
  // ...existing code...
}