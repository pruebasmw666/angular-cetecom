import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CrudRamService} from '../../vistas/inventario/crud-ram/crud-ram.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private ramService: CrudRamService
  ) { }

  ngOnInit(): void {
  }

}
