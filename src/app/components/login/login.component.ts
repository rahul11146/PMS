import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../../services/login-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginobj: any = {
    username: '',
    password: '',
  };

  router = inject(Router);
  loginService = inject(LoginServiceService);

  onLogin(obj: any): void {
    this.loginService.onLogin(obj).subscribe((res: any) => {
      if (res.isUserValid) {
        this.router.navigateByUrl('/client');
        localStorage.setItem('token', res.token);
      } else {
        alert('wrong credential');
      }
    });
  }
}
