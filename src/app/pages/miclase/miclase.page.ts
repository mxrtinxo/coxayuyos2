import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';  

@Component({
  selector: 'app-miclase',
  templateUrl: './miclase.page.html',
  styleUrls: ['./miclase.page.scss'],
})
export class MiclaseComponent implements OnInit, AfterViewInit {

  @ViewChild('titulo', { read: ElementRef }) itemTitulo!: ElementRef;

  asistencia: any;
  usuario: any;
  escaneando: boolean = false;

  constructor(private router: Router,
              private animationController: AnimationController) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.asistencia = navigation.extras.state['asistencia'];
      this.usuario = navigation.extras.state['usuario'];
    }
  }

  ngAfterViewInit() {
    this.animarTituloIzqDer();
  }
  
  animarTituloIzqDer() {
    this.animationController
      .create()
      .addElement(this.itemTitulo.nativeElement)
      .iterations(Infinity)
      .duration(6000)
      .fromTo('transform', 'translateX(0%)', 'translateX(100%)')
      .fromTo('opacity', 0.2, 1)
      .play();
  }

  comenzarEscaneoQR() {
    this.escaneando = true;
  }

  detenerEscaneoQR() {
    this.escaneando = false;
  }

  navegar(ruta: string) {
    this.router.navigate([ruta]);
  }
}
