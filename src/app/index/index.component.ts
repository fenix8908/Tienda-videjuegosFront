import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  estaLogeado = false;
  nombreUsuario = '';

  constructor(private tokenService: TokenService) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.estaLogeado = true;
      this.nombreUsuario = this.tokenService.getUserName();
    } else {
      this.estaLogeado = false;
      this.nombreUsuario = '';
    }
  }
}
