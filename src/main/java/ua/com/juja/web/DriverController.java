package ua.com.juja.web;

import org.springframework.web.bind.annotation.*;
import ua.com.juja.domain.Driver;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import ua.com.juja.service.DriverService;

import javax.annotation.PostConstruct;
import java.util.List;

/**
 * Created by Denis Tantsev on 1/27/18.
 */
@RestController
@RequestMapping("/api")
public class DriverController {

    private final DriverService driverService;

    public DriverController(DriverService driverService){
        this.driverService = driverService;
    }

    @GetMapping("/drivers")
    public ResponseEntity<List<Driver>> getAllDrivers(){
        HttpHeaders responseHeaders = new HttpHeaders();
        return ResponseEntity.ok().headers(responseHeaders).body(driverService.getAllDrivers());
    }

    @PostMapping("/drivers")
    public ResponseEntity<Driver> createDriver(@RequestBody Driver driver){
        System.out.println(driver);
        return ResponseEntity.ok().headers(new HttpHeaders()).body(driverService.createDriver(driver));
    }

    @DeleteMapping("/drivers/{id}")
    public ResponseEntity<Void> deleteDriver(@PathVariable String id){
        driverService.deleteDriver(id);
        return ResponseEntity.ok().headers(new HttpHeaders()).build();
    }
}
