import { Component, OnInit } from '@angular/core';
import { Vehicle } from './vehicle';
import { VehicleService } from './vehicle.service';
@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
})
export class VehicleComponent implements OnInit {
  vehicles: Vehicle[] = [];
  totalByBrand: { [brand: string]: number } = {};

  constructor(private vehicleService: VehicleService) {}

  getVehicles() {
    this.vehicleService.getVehicles().subscribe((vehicles) => {
      this.vehicles = vehicles;
      this.totalByBrand = vehicles.reduce<{ [brand: string]: number }>(
        (summary, car) => {
          const brand = car.marca;
          summary[brand] = (summary[brand] || 0) + 1;
          return summary;
        },
        {}
      );
    });
  }

  ngOnInit() {
    this.getVehicles();
  }
}
