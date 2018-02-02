package ua.com.juja.repository;

import ua.com.juja.domain.Driver;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Denis Tantsev on 1/27/18.
 */
@Repository
public interface DriverRepository extends MongoRepository<Driver, String> {

}
