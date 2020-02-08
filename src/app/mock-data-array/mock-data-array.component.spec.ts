import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { getTestScheduler, cold } from 'jasmine-marbles';
import { MockDataArrayComponent } from './mock-data-array.component';
import { MockDataArrayService } from '../services/mock-data-array.service';
import { MockData } from '../models/mock-data';
import { By } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

describe('MockDataArrayComponent', () => {
  let component: MockDataArrayComponent;
  let fixture: ComponentFixture<MockDataArrayComponent>;
  let service: jasmine.SpyObj<MockDataArrayService>;
  let dataArray: MockData[];

  beforeEach(async(() => {
    const dataServiceSpy = jasmine.createSpyObj('MockDataArrayService', ['getMockDataArray']);
    const toastrServiceSpy = jasmine.createSpyObj('ToastrService', ['error']);
    TestBed.configureTestingModule({
      declarations: [ MockDataArrayComponent ],
      providers: [
        { provide: MockDataArrayService, useValue: dataServiceSpy },
        { provide: ToastrService, useValue: toastrServiceSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    dataArray = [
      {
        key: 'one',
        value: 1
      },
      {
        key: 'two',
        value: 2
      }
    ];
    service = TestBed.get(MockDataArrayService);
    service.getMockDataArray.and.returnValue(cold('a', {a: dataArray}));
    fixture = TestBed.createComponent(MockDataArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should print data on the screen', () => {
    getTestScheduler().flush();
    fixture.detectChanges();

    const valueElements = fixture.debugElement.queryAll(By.css('.value'));
    expect(valueElements.length).toBe(2);
    expect(valueElements[0].nativeElement.innerText).toEqual('1');
    expect(valueElements[1].nativeElement.innerText).toEqual('2');
  });

});
