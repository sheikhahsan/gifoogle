import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardColumnsComponent } from './card-columns.component';

describe('CardColumnsComponent', () => {
  let component: CardColumnsComponent;
  let fixture: ComponentFixture<CardColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
