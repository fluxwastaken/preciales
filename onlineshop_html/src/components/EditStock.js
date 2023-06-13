import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './EditStock.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stock from './Stock';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function EditStock(){
    const {product_id} = useParams();
    const[editedProduct, setEditedProduct] = useState({})
    const [selectedFile, setSelectedFile] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const controlId = target.id;
    
        setEditedProduct((prevProduct)=>({
          ...prevProduct,
          [controlId]: value
        }))
        console.log(editedProduct)
        
      };

    const handleFileChange = (event) => {
        event.preventDefault();
        const file = event.target.files[0];
        setSelectedFile(file);
        
        // Assuming "filename" is the desired name for the uploaded file
        const picturePath = `/images/${file.name}`;
      
        setEditedProduct((prevProduct) => ({
          ...prevProduct,
          picture: picturePath
        }));
      
        console.log(editedProduct);
      };
    // edit this form submit to become patch
    const handleFormSubmit = async (event) => {
        event.preventDefault();
      
        const formData = new FormData();
        formData.append('image', selectedFile);
      
        try {
          const response = await fetch('http://localhost:8080/uploadImage', {
            method: 'POST',
            body: formData,
          });
      
          if (response.ok) {
            console.log('File uploaded successfully');
            // Perform any additional actions here, such as updating the database with the image link
          } else {
            console.error('File upload failed');
          }
        } catch (error) {
          console.error(error);
        }

        fetch(`http://localhost:8080/updateProductInfo/${product_id}`,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: "PATCH",
              body: JSON.stringify(editedProduct)
        })
        .then(response => {
            console.log("Valid Edit product")
            window.close()
          })
          .catch(error => {
            console.log("Error Editing Product")
          });
      };

    return(
        <div className = "addProdForm">
                <Form>
                  <Form.Group className = "titleProd" controlId="productId">
                    <Form.Label>Product ID</Form.Label>
                    <Form.Control type="text" placeholder="Enter product ID" onChange={handleChange}/>
                  </Form.Group>
                  <Form.Group className = "titleProd" controlId="product_name"  >
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter product name" onChange={handleChange}/>
                  </Form.Group>
                  <Form.Group className = "titleProd" controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" placeholder="Enter price" onChange={handleChange}/>
                  </Form.Group>
                  <Form.Group className = "titleProd" controlId="category">
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="text" placeholder="Enter category" onChange={handleChange} />
                  </Form.Group>
                  <Form.Group className = "titleProd" controlId="quantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="number" placeholder="Enter quantity" onChange={handleChange} />
                  </Form.Group>
                  <Form.Group className = "titleProd"controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter description" onChange={handleChange}/>
                  </Form.Group>
                  <Form.Group className='titleProd' controlId="picture">
                   <Form.Label>Image</Form.Label>
                   <Form.Control type='file' label="Choose file" onChange={handleFileChange} />
                  </Form.Group>
                  <Button variant="primary" type="submit" onClick={handleFormSubmit}>
                    Add
                  </Button>
                </Form>
              </div>
    )
}

export default EditStock;