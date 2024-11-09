import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardContent, IonCard, IonCardHeader, IonItem, IonIcon, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.page.html',
  styleUrls: ['./correo.page.scss'],
  standalone: true,
  imports: [IonButton, IonIcon, IonItem, IonCardHeader, IonCard, IonCardContent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule, RouterModule]
})
export class CorreoPage  {
  correoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.correoForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    // if (this.correoForm.valid) {
    //   const correoIngresado = this.correoForm.get('email')?.value;

    //   // Buscar al usuario por correo
    //   const usuario: User | undefined = User.buscarUsuarioPorCorreo(correoIngresado);
    //   if (usuario) { // Verificar si 'usuario' es válido
    //     this.router.navigate(['/pregunta'], {
    //       state: {
    //         correo: usuario.email,
    //         nombre: `${usuario.firstName} ${usuario.lastName}`,
    //         preguntaSecreta: usuario.secretQuestion
    //       }
    //     });
    //   } else {
    //     alert('Correo no encontrado.');
    //   }

    // } else {
    //   alert('Por favor ingresa un correo válido.');
    // }
  }
}
