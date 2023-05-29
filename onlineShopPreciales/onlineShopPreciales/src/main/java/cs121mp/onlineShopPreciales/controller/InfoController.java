package cs121mp.onlineShopPreciales.controller;

import cs121mp.onlineShopPreciales.service.InfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class InfoController {

    @Autowired
    InfoService InfoService;

    @GetMapping("/version")
    public String getVersion(){
        return InfoService.getVersion();
    }
}
