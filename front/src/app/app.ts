

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

  regadoraData = {
    temperatura: 30,
    porcentajeLleno: 70,
    numeroCerezas: 90
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
    // Llenadora
    const variacionPorcentajeLlenadora = Math.floor(Math.random() * 11) - 5; // -5 a +5
    const nuevaTempLlenadora = this.llenadoraData.temperatura + (Math.random() * 2 - 1); // +/-1 grado
    let nuevoPorcentajeLlenadora = this.llenadoraData.porcentajeLleno + variacionPorcentajeLlenadora;
    nuevoPorcentajeLlenadora = Math.max(0, Math.min(100, nuevoPorcentajeLlenadora));
    const nuevasCerezasLlenadora = Math.round(nuevoPorcentajeLlenadora * 1.5);

    this.llenadoraData = {
      temperatura: Math.round(nuevaTempLlenadora * 10) / 10,
      porcentajeLleno: nuevoPorcentajeLlenadora,
      numeroCerezas: nuevasCerezasLlenadora
    };

    // Regadora
    const variacionPorcentajeRegadora = Math.floor(Math.random() * 11) - 5; // -5 a +5
    const nuevaTempRegadora = this.regadoraData.temperatura + (Math.random() * 2 - 1); // +/-1 grado
    let nuevoPorcentajeRegadora = this.regadoraData.porcentajeLleno + variacionPorcentajeRegadora;
    nuevoPorcentajeRegadora = Math.max(0, Math.min(100, nuevoPorcentajeRegadora));
    const nuevasCerezasRegadora = Math.round(nuevoPorcentajeRegadora * 1.5);

    this.regadoraData = {
      temperatura: Math.round(nuevaTempRegadora * 10) / 10,
      porcentajeLleno: nuevoPorcentajeRegadora,
      numeroCerezas: nuevasCerezasRegadora
    };
  }
  closeRegadoraPanel() {
    this.selectedPiece = null;
  }
}