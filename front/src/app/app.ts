

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
}