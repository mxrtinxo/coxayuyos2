import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importa el componente desde la ruta correcta
import { LeerqrPage } from '../leerqr/leerqr.page';

const routes: Routes = [
  {
    path: '',
    component: LeerqrPage  // Cambia MiclasePage por LeerqrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiclasePageRoutingModule {}
