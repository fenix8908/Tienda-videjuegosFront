import { AuthService } from './../../services/auth.service';
import { TokenService } from './../../services/token.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  estaLogeado = false;
  falloLogin = false;
  loginUsuario: LoginUsuario;
  nombreUsuario: string;
  password: string;
  roles: string[] = [];
  errMsj: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private toastService: ToastrService
  ) { }

  ngOnInit(): void {
    //si nos devuelve un token si estamos logeados
    if (this.tokenService.getToken()) {
      this.estaLogeado = true;
      this.falloLogin = false;
      this.roles = this.tokenService.getAuthorities()
    }
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.estaLogeado = true;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.toastService.success("Bienvenido!!", data.nombreUsuario, {
          timeOut: 3000, positionClass: 'toast-top-center'
        })
        this.router.navigate(['/index'])
      },
       err => {
        this.estaLogeado = false;
        this.errMsj = err.error.message;
        this.toastService.error(this.errMsj, 'Usuario o contraseña erronea', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    )
  }

}
