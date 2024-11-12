import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CorreoRoutingModule } from './correo-routing.module';
import { CorreoPage } from './correo.page';

@NgModule({
  declarations: [CorreoPage],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(), 
    CorreoRoutingModule,
  ],
})
export class CorreoModule {}
