import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Driver} from "./driver";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DriverService {

  constructor(private httpClient: HttpClient) {
  }

  public getDrivers() {
    return this.httpClient.get('/api/drivers');
  }
  //dffdg
  public createDriver(driver: Driver) {
    console.log(driver);
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json");

    return this.httpClient.post("/api/drivers", driver,{headers});


    // return this.httpClient.post("/api/drivers",
    //   driver,{headers})
    //   .subscribe(
    //     val => {
    //       console.log("POST call successful value returned in body",
    //         val);
    //     },
    //     response => {
    //       console.log("POST call in error", response);
    //     },
    //     () => {
    //       console.log("The POST observable is now completed.");
    //     }
    //   );
  }


}

