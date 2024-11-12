import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageComponent } from 'src/app/components/language/language.component';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/model/user';
import { HeaderComponent } from 'src/app/components/header/header.component';


import { IonicModule } from '@ionic/angular';
import { IonContent, IonHeader, IonTitle, IonInput, IonButton, IonRow, IonCol, IonGrid, IonCard, IonItem, IonCardContent, IonCardHeader, IonFooter, IonIcon, IonToolbar } from '@ionic/angular/standalone';
import { ViewWillEnter } from '@ionic/angular';


import { addIcons } from 'ionicons';
import { colorWandOutline } from 'ionicons/icons';


import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    LanguageComponent,
    HeaderComponent,
  ]
})
export class IngresoPage implements ViewWillEnter {
changeLanguage($event: any) {
  this.translate.use($event); // Cambia el idioma al que se selecciona
  this.languageSelected = $event;
throw new Error('Method not implemented.');
}

  @ViewChild('selectLanguage', { static: true }) selectLanguage!: LanguageComponent;

  correo: string;
  password: string;
  languageSelected: string = 'es';

  constructor(
    private router: Router,
    private translate: TranslateService,
    private authService: AuthService
  ) {
    this.correo = 'atorres';
    this.password = '1234';
    addIcons({ colorWandOutline });
    this.translate.setDefaultLang('es'); 
    this.translate.use(this.languageSelected); 
  }

  async ionViewWillEnter() {
    this.selectLanguage.setCurrentLanguage();
  }

  navigateTheme() {
    this.router.navigate(['/theme']);
  }

  navigateMap() {
    this.router.navigate(['/map']);
  }

  navigateContrasena() {
    this.router.navigate(['/correo']);
  }
  

  login() {
    this.authService.login(this.correo, this.password);
  }

  registerNewUser() {
    // Método para registrar un nuevo usuario
  }

  passwordRecovery() {
    this.router.navigate(['/correo']);
  }
}
