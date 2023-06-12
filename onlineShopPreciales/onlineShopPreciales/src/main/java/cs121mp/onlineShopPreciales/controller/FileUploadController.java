package cs121mp.onlineShopPreciales.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
@CrossOrigin
@RestController
public class FileUploadController {
    @PostMapping("/uploadImage")
    public String uploadImage(@RequestParam("image")MultipartFile file){
        if (file.isEmpty()) {
            return "No file uploaded";
        }

        try {
            // Specify the relative directory where you want to save the uploaded file
            String relativeDir = "../../onlineshop_html/public/images/";

            // Generate a unique file name to prevent conflicts
//            String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
            String fileName = file.getOriginalFilename();

            // Get the current working directory
            String currentDir = System.getProperty("user.dir");

            // Construct the absolute path to the upload directory
            String uploadDir = currentDir + "/" + relativeDir;

            // Create the upload directory if it doesn't exist
            Path uploadPath = Path.of(uploadDir);
            Files.createDirectories(uploadPath);

            // Copy the file to the upload directory
            Path filePath = Path.of(uploadDir + fileName);
            Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

            return "File uploaded successfully";
        } catch (IOException e) {

            return "File upload failed";
        }
    }
}
