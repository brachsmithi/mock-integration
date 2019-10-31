import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockDataObjectComponent } from './mock-data-object.component';

describe('MockDataObjectComponent', () => {
  let component: MockDataObjectComponent;
  let fixture: ComponentFixture<MockDataObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockDataObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockDataObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
