import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'front';
  // NUEVO CODIGO 
   selectedPiece: string | null = null;

  selectPiece(piece: string) {
    this.selectedPiece = piece;
  }
  // FIN NUEVO CODIGO
}
