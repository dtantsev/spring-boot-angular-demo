import { Component, OnInit } from '@angular/core';
import {DriverService} from "../driver.service";
import {Driver} from "../driver";

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {

  public drivers: Driver[] = [];

  constructor(private driverService: DriverService) { }

  ngOnInit() {
    // initial load of data
    this.driverService.getDrivers()
      .subscribe(
        (drivers: any[]) => {
          this.drivers = drivers
        },
        (error) => console.log(error)
      );
  }

}
