import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonAvatar, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: 'perfil.page.html',
  styleUrls: ['perfil.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonAvatar, IonItem, IonLabel, IonButton],
})
export class PerfilPage {
  usuario = {
    nombre: 'Juan Pérez',
    email: 'juan.perez@email.com',
    telefono: '+34 123 456 789',
    avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg'
  };

  constructor(private router: Router) {}

  volverAHome() {
    this.router.navigate(['/home']);
  }
} 