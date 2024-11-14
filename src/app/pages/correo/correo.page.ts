import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatabaseService } from '/ProyectosIonic/dino/src/app/services/database.service';
import { AlertController } from '@ionic/angular';
import { IonCardHeader, IonItem, IonCardContent, IonCard ,IonContent, IonHeader, IonToolbar, IonTitle, IonLabel, IonFooter, IonButton, IonIcon, IonGrid, IonCol, IonRow, IonText } from '@ionic/angular/standalone'
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { WelcomeComponent } from 'src/app/components/welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-correo',
  templateUrl: './correo.page.html',
  styleUrls: ['./correo.page.scss'],
  standalone: true,
    imports: [IonText, IonRow, IonCol, IonGrid, IonIcon, IonButton, IonFooter, IonLabel, IonTitle, IonToolbar, IonHeader,
    CommonModule, FormsModule, TranslateModule, IonContent,
    HeaderComponent, FooterComponent,
    WelcomeComponent, IonCard, IonCardContent, IonCardHeader, IonItem, RouterModule, ReactiveFormsModule
     ]
})
export class CorreoPage implements OnInit {

  public email: string = '';

  constructor( private router: Router,
    private databaseService: DatabaseService,
    private alertController: AlertController
  ) {
  }

  ngOnInit(): void {
    console.log('CorreoPage inicializado');
  }

  

  async verificarCorreo(): Promise<void> {
    console.log('Correo ingresado:', this.email);  // Verifica el valor del correo

    if (!this.email.trim()) {
      console.log('Correo vacío, por favor ingresa uno');  
    }

    const usuarioEncontrado = await this.databaseService.findUserByEmail(this.email)

    if (!usuarioEncontrado) {
      console.log('Usuario no encontrado');
      this.router.navigate(['/incorrecto']);
    } else {
      console.log('Usuario encontrado:', usuarioEncontrado);
      this.router.navigate(['/pregunta']);
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
