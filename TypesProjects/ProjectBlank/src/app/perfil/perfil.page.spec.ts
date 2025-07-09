import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPage } from './perfil.page';

describe('PerfilPage', () => {
  let component: PerfilPage;
  let fixture: ComponentFixture<PerfilPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(PerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have user information', () => {
    expect(component.usuario.nombre).toBe('Juan Pérez');
    expect(component.usuario.email).toBe('juan.perez@email.com');
  });
}); 