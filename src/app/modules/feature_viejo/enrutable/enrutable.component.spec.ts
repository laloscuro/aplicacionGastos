import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrutableComponent } from './enrutable.component';

describe('EnrutableComponent', () => {
  let component: EnrutableComponent;
  let fixture: ComponentFixture<EnrutableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrutableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrutableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
