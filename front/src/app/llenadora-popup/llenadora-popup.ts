import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-llenadora-popup',
  standalone: true,
  template: `
    <div class="popup-backdrop" (click)="close()"></div>
    <div class="popup">
      <h2>Llenadora</h2>
      <p><strong>Temperatura:</strong> {{ temperatura }} °C</p>
      <p><strong>Porcentaje lleno:</strong> {{ porcentajeLleno }}%</p>
      <p><strong>Número de cerezas:</strong> {{ numeroCerezas }}</p>
      <button (click)="close()">Cerrar</button>
    </div>
  `,
  styles: [`
    .popup-backdrop {
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      background: rgba(0,0,0,0.3); z-index: 1000;
    }
    .popup {
      position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
      background: #fff; padding: 24px; border-radius: 8px; z-index: 1001;
      min-width: 250px; box-shadow: 0 2px 12px rgba(0,0,0,0.2);
    }
  `]
})
export class LlenadoraPopupComponent {
  @Input() temperatura: number = 25;
  @Input() porcentajeLleno: number = 80;
  @Input() numeroCerezas: number = 120;

  close() {
    // Este método será sobreescrito por el padre
  }
}