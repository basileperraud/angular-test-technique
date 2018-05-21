import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionstationsComponent } from './gestionstations.component';

describe('GestionstationsComponent', () => {
  let component: GestionstationsComponent;
  let fixture: ComponentFixture<GestionstationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionstationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionstationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
