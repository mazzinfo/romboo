import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppheaderbarComponent } from './appheaderbar.component';

describe('AppheaderbarComponent', () => {
  let component: AppheaderbarComponent;
  let fixture: ComponentFixture<AppheaderbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppheaderbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppheaderbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
