import { Component, ViewChild } from '@angular/core';
import { DinosaurComponent } from 'src/app/components/dinosaur/dinosaur.component';
import { AuthService } from 'src/app/services/auth.service';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonLabel, IonFooter, IonButton, IonIcon, IonGrid, IonCol, IonRow, IonText } from '@ionic/angular/standalone'
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { QrWebScannerComponent } from 'src/app/components/qr-web-scanner/qr-web-scanner.component';
import { Dinosaur } from 'src/app/model/dinosaur';
import { Capacitor } from '@capacitor/core';
import { ScannerService } from 'src/app/services/scanner.service';
import { WelcomeComponent } from 'src/app/components/welcome/welcome.component';
import { ForumComponent } from 'src/app/components/forum/forum.component';
import { User } from 'src/app/model/user';
import { MiclaseComponent } from "../../components/miclase/miclase.component";
import { MisDatosPage } from 'src/app/components/misdatos/misdatos.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonText, IonRow, IonCol, IonGrid, IonIcon, IonButton, IonFooter, IonLabel, IonTitle, IonToolbar, IonHeader,
    CommonModule, FormsModule, TranslateModule, IonContent,
    HeaderComponent, FooterComponent,
    WelcomeComponent, QrWebScannerComponent, DinosaurComponent,
    ForumComponent, MiclaseComponent, MisDatosPage]
})
export class HomePage {
  
  usuario: User = new User();

  @ViewChild(FooterComponent) footer!: FooterComponent;
  selectedComponent = 'qr-web-scanner';

  constructor(private auth: AuthService, private scanner: ScannerService) { }

  ionViewWillEnter() {
    this.changeComponent('mis-datos');
  }

  async headerClick(button: string) {

    if (button === 'testqr')
      this.showDinoComponent(Dinosaur.jsonDinoExample);

    if (button === 'scan' && Capacitor.getPlatform() === 'web')
      this.selectedComponent = 'qr-web-scanner';

    if (button === 'scan' && Capacitor.getPlatform() !== 'web')
        this.showDinoComponent(await this.scanner.scan());
  }

  webQrScanned(qr: string) {
    this.showDinoComponent(qr);
  }

  webQrStopped() {
    this.changeComponent('mis-datos');
  }

  showDinoComponent(qr: string) {

    if (Dinosaur.isValidDinosaurQrCode(qr)) {
      this.auth.qrCodeData.next(qr);
      this.changeComponent('miclase');
      return;
    }
    
    this.changeComponent('mis-datos');
  }

  footerClick(button: string) {
    this.selectedComponent = button;
  }

  changeComponent(name: string) {
    this.selectedComponent = name;
    this.footer.selectedButton = name;
  }

}