import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
    selector: 'app-perfil',
    templateUrl: './perfil.page.html',
    styleUrls: ['./perfil.page.scss'],
    standalone: true,
    imports: [CommonModule, IonicModule]
})
export class PerfilPage {
    constructor(private router: Router) {}

    irHome(){
        this.router.navigate(['/home'])
    }
}