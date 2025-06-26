import { Component } from '@angular/core';

@Component({
  selector: 'app-regadora-info',
  imports: [],
  templateUrl: './regadora-info.html',
  styleUrl: './regadora-info.css'
})
export class RegadoraInfo {
  regadoraData = {
    temperatura: 40,
    porcentajeLleno: 70,
    numeroCerezas: 100
  };
}
