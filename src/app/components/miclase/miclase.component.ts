import { Component, OnInit } from '@angular/core';
import { Asistencia } from 'src/app/interfaces/asistencia';
import { User } from 'src/app/model/user';
import { Person } from 'src/app/model/person';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { IonContent, IonRow, IonCol, IonGrid } from "@ionic/angular/standalone";

@Component({
  selector: 'app-miclase',
  templateUrl: './miclase.component.html',
  styleUrls: ['./miclase.component.scss'],
  standalone: true,
  imports: [IonGrid, IonCol, IonRow, IonContent, CommonModule]
})
export class MiclaseComponent {

  public user: User = new User; 
  asistencia: any;
  private subscription: Subscription;
  
  constructor(private authService: AuthService) { 
    this.subscription = this.authService.qrCodeData.subscribe((qr) => {
      this.asistencia = qr? JSON.parse(qr): null;
    })
  }
  

}
