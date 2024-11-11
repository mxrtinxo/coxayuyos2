import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MiclasePageRoutingModule } from './miclase-routing.module';
import { LeerqrPageModule } from '../leerqr/leerqr.module'; // Importa el módulo

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiclasePageRoutingModule,
    LeerqrPageModule // Importa el módulo que contiene el componente
  ]
})
export class MiclasePageModule {}
