package ua.com.juja.service;

import ua.com.juja.domain.Driver;
import org.springframework.stereotype.Service;
import ua.com.juja.repository.DriverRepository;

import java.util.List;

/**
 * Created by Denis Tantsev on 1/27/18.
 */
@Service
public class DriverService {

    private DriverRepository driverRepository;

    public DriverService(DriverRepository driverRepository){
        this.driverRepository = driverRepository;
    }

    public List<Driver> getAllDrivers(){
        return driverRepository.findAll();
    }

    public Driver createDriver(Driver driver){
        return driverRepository.save(driver);
    }

    public void deleteDriver(String id) {
        driverRepository.delete(id);
    }
}
