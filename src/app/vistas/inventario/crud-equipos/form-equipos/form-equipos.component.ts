import { Component, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-form-equipos',
  templateUrl: './form-equipos.component.html',
  styleUrls: ['./form-equipos.component.css']
})
export class FormEquiposComponent implements OnInit {

  constructor(
    private matslider: MatSliderModule
  ) { }

  ngOnInit(): void {
  }

}
