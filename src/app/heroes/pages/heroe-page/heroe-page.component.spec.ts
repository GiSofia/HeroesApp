import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroePageComponent } from './heroe-page.component';

describe('HeroePageComponent', () => {
  let component: HeroePageComponent;
  let fixture: ComponentFixture<HeroePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
