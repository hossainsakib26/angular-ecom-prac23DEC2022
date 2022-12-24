import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnComComponent } from './btn-com.component';

describe('BtnComComponent', () => {
  let component: BtnComComponent;
  let fixture: ComponentFixture<BtnComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnComComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
