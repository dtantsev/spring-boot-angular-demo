import {Component, OnInit} from '@angular/core';
import {DriverService} from "../driver.service";
import {Driver} from "../driver";

@Component({
  selector: 'app-driver-form',
  templateUrl: './driver-form.component.html',
  styleUrls: ['./driver-form.component.css']
})
export class DriverFormComponent implements OnInit {

  firstName: string = null;
  lastName: string = null;

  constructor(private driverService: DriverService) {
  }

  ngOnInit() {
  }

  onDriverCreate(event) {
    let driver: Driver = new Driver(this.firstName, this.lastName);
    console.log(driver);
    this.driverService.createDriver(driver).subscribe(
          val => {
            console.log("POST call successful value returned in body",
              val);
          });
    this.firstName = "";
    this.lastName = "";
  }

}
