import { Component } from '@angular/core';

@Component({
  selector: 'app-plano-svg',
  standalone: true, // <-- Agrega esta línea
  imports: [],
  templateUrl: './plano-svg.html',
  styleUrl: './plano-svg.css'
})
export class PlanoSvg {
  selectedPiece: string | null = null;

  selectPiece(piece: string) {
    this.selectedPiece = piece;
  }
}