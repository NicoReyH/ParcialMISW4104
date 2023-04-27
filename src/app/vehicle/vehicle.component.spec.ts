import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { HttpClientModule } from '@angular/common/http';
import { VehicleComponent } from './vehicle.component';
import { VehicleService } from './vehicle.service';
import { Vehicle } from './vehicle';

describe('VehicleComponent', () => {
  let component: VehicleComponent;
  let fixture: ComponentFixture<VehicleComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [VehicleComponent],
      providers: [VehicleService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleComponent);
    component = fixture.componentInstance;

    component.vehicles = [
      new Vehicle(
        faker.datatype.number(),
        faker.vehicle.manufacturer(),
        faker.vehicle.model(),
        faker.vehicle.type(),
        faker.date.birthdate({ mode: 'age', min: 1, max: 15 }).getFullYear(),
        faker.datatype.number({ min: 500, max: 100000 }),
        faker.vehicle.color(),
        faker.image.imageUrl()
      ),
      new Vehicle(
        faker.datatype.number(),
        faker.vehicle.manufacturer(),
        faker.vehicle.model(),
        faker.vehicle.type(),
        faker.date.birthdate({ mode: 'age', min: 1, max: 15 }).getFullYear(),
        faker.datatype.number({ min: 500, max: 100000 }),
        faker.vehicle.color(),
        faker.image.imageUrl()
      ),
      new Vehicle(
        faker.datatype.number(),
        faker.vehicle.manufacturer(),
        faker.vehicle.model(),
        faker.vehicle.type(),
        faker.date.birthdate({ mode: 'age', min: 1, max: 15 }).getFullYear(),
        faker.datatype.number({ min: 500, max: 100000 }),
        faker.vehicle.color(),
        faker.image.imageUrl()
      ),
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Component has a table with at least three rows', () => {
    expect(
      debug.query(By.css('tbody')).childNodes.length
    ).toBeGreaterThanOrEqual(4);
  });

  it('should have an dd element ', () => {
    const dd = debug.query(By.css('dd'));
    const content: HTMLElement = dd.nativeElement;
    expect(content.textContent).toEqual(component.vehicles[0].marca);
  });
});
