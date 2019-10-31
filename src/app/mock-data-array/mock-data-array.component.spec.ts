import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockDataArrayComponent } from './mock-data-array.component';

describe('MockDataArrayComponent', () => {
  let component: MockDataArrayComponent;
  let fixture: ComponentFixture<MockDataArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockDataArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockDataArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
