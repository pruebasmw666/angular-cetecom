import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CrudRamService {

  constructor() { }

  mensaje(){
    Swal.fire('Este modulo aún no está creado','not found', 'info');
  }
}
