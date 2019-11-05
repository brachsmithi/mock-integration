import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MockDataArrayComponent } from './mock-data-array/mock-data-array.component';

let fixture: ComponentFixture<AppComponent>;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        MockedArrayComponent,
        MockedObjectComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'mock-integration'`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('mock-integration');
  });

  it('should show the mock data array', () => {
    const element = fixture.debugElement.query(By.directive(MockedArrayComponent));
    expect(element).toBeTruthy();
  });

  it('should show the mock data object', () => {
    const element = fixture.debugElement.query(By.directive(MockedObjectComponent));
    expect(element).toBeTruthy();
  });
});

@Component({
  selector: 'app-mock-data-array',
  template: 'content',
  styleUrls: []
})
class MockedArrayComponent {}

@Component({
  selector: 'app-mock-data-object',
  template: 'content',
  styleUrls: []
})
class MockedObjectComponent {}