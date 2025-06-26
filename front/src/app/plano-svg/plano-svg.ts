import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plano-svg',
  standalone: true, // <-- Agrega esta línea
  imports: [],
  templateUrl: './plano-svg.html',
  styleUrl: './plano-svg.css'
})
export class PlanoSvg {
  @Input() selectedPiece: string | null = null;


  selectPiece(piece: string) {
    this.selectedPiece = piece;
  }
}