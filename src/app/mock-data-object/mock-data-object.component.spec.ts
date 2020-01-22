import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockDataObjectComponent } from './mock-data-object.component';
import { MockDataObjectService } from '../services/mock-data-object.service';
import { MockData } from '../models/mock-data';
import { cold, getTestScheduler } from 'jasmine-marbles';
import { By } from '@angular/platform-browser';

fdescribe('MockDataObjectComponent', () => {
  let component: MockDataObjectComponent;
  let fixture: ComponentFixture<MockDataObjectComponent>;
  let service: jasmine.SpyObj<MockDataObjectService>;
  let data: MockData;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('MockDataObjectService', ['getMockData']);
    TestBed.configureTestingModule({
      declarations: [ MockDataObjectComponent ],
      providers: [
        { provide: MockDataObjectService, useValue: spy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    data = {
        key: 'three',
        value: 3
    };
    service = TestBed.get(MockDataObjectService);
    service.getMockData.and.returnValue(cold('a', {a: data}));
    fixture = TestBed.createComponent(MockDataObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should print data on the screen', () => {
    getTestScheduler().flush();
    fixture.detectChanges();

    const valueElement = fixture.debugElement.query(By.css('.value'));
    expect(valueElement.nativeElement.innerText).toEqual('3');
  });
});
