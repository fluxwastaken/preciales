//package cs121mp.onlineShopPreciales.controller;
//
//import cs121mp.onlineShopPreciales.model.EmailRequest;
//import cs121mp.onlineShopPreciales.service.EmailService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.mail.*;
//@RestController
//public class EmailController {
//
//    private final EmailService emailService;
//
//    @Autowired
//    public EmailController(EmailService emailService) {
//        this.emailService = emailService;
//    }
//
//    @PostMapping("/sendEmail")
//    public void sendEmail(@RequestBody EmailRequest request) {
//        String recipient = request.getRecipientEmail();
//        String subject = request.getSubject();
//        String body = request.getBody();
//
//        emailService.sendEmail(recipient, subject,body);
//    }
//}
