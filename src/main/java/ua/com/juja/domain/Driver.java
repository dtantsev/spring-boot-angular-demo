package ua.com.juja.domain;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Created by Denis Tantsev on 1/27/18.
 */
@Data
@Document(collection = "driver")
public class Driver {
    @Id
    private String id;

    private String firstName;
    private String lastName;
}
