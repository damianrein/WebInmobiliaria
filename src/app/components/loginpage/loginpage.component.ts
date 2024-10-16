import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(form: NgForm){
    const username = form.value.username;
    const password = form.value.password;
    return this.authService.login(username,password).subscribe({
      next : (response) => {
        const token = response.token;

        localStorage.setItem("jwtToken", token);

        this.router.navigate(['/home']);
      },
      error: (error) =>{
        console.error('Error en el login', error);
        let errorMessage = 'Error en el inicio de sesión';
        
        if (error.status === 401) {
          errorMessage = 'Credenciales incorrectas. Por favor, inténtalo de nuevo.';
        } else if (error.status === 0) {
          errorMessage = 'No se puede conectar al servidor. Intenta más tarde.';
        }

        alert(errorMessage);
      }
  
    });
  }
}
