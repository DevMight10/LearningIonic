import { Component } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButton,
  IonInput,
  IonList,
  IonItem,
  IonLabel,
  IonCheckbox,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonListHeader
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonButton,
    IonInput,
    IonList,
    IonItem,
    IonLabel,
    IonCheckbox,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonListHeader
  ]
})
export class HomePage {
  constructor() {}
}
