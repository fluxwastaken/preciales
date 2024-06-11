package cs121mp.onlineShopPreciales.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class InfoService {
    @Value("${version}") //gets the version from application.properties
    String version;

    public String getVersion() {
        return version;
    }
}
