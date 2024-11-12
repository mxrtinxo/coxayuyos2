import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '/ProyectosIonic/dino/src/app/services/database.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.page.html',
  styleUrls: ['./correo.page.scss'],
})
export class CorreoPage implements OnInit {
  correoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private databaseService: DatabaseService,
    private alertController: AlertController
  ) {
    
    this.correoForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    console.log('CorreoPage inicializado');
  }

  

  async onSubmit() {
    if (this.correoForm.invalid) {
      await this.presentAlert('Formulario inválido', 'Por favor, ingresa un correo electrónico válido.');
      return;
    }

    const email = this.correoForm.value.email;

    try {
      const user = await this.databaseService.findUserByEmail(email);

      if (user) {
        await this.presentAlert('Correo encontrado', 'Proceda con la recuperación de la contraseña.');
        // Aquí puedes redirigir a la siguiente página para continuar con la recuperación
      } else {
        await this.presentAlert('Error', 'No se encontró un usuario con ese correo electrónico.');
      }
    } catch (error) {
      await this.presentAlert('Error', 'Ocurrió un problema al buscar el usuario. Inténtelo de nuevo más tarde.');
      console.error(error);
    }
  }

  // Método para mostrar alertas
  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
