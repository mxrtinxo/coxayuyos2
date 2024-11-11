
import { Component, OnInit } from '@angular/core';
import { Asistencia } from 'src/app/interfaces/asistencia';
import { User } from 'src/app/model/user';
import { Person } from 'src/app/model/person';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-miclase',
  templateUrl: './miclase.component.html',
  styleUrls: ['./miclase.component.scss'],
  standalone: true,
  imports: [IonContent, CommonModule]
})
export class MiclaseComponent {

  public user: User = new User; 
asistencia: any;

  constructor(private authService: AuthService) { 
    this.authService.usuarioAutenticado.subscribe((usuarioAutenticado) => {
      if (usuarioAutenticado) {
        this.user = usuarioAutenticado;
      }
    } );
  }

}
