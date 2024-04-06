import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const RegisterItemForm = () => {
    const { register, handleSubmit } = useForm();
    const [isDragging, setIsDragging] = useState(false);
    const handleDragEnter = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        // Process the dropped file here
    };
    const onSubmit = (data) => {
        console.log(data); // You can send this data to your server using axios
    };

    return (
        <div className="container">
            <Form onSubmit={handleSubmit(onSubmit)}>

                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" {...register('title')} />
                </Form.Group>

                <Form.Group controlId="description" className="form-group">
                    <Form.Label className="form-label">Description</Form.Label>
                    <Form.Control className="form-control" as="textarea" rows={4} placeholder="Enter description" {...register('description')} />
                </Form.Group>

                <Form.Group controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" placeholder="Enter price" {...register('price')} />
                </Form.Group>

                <Form.Group controlId="category">
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select" {...register('category')}>
                        <option value="Dress">Dress</option>
                        <option value="T-shirt">T-shirt</option>
                        <option value="Other">Other</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="sizeCategory">
                    <Form.Label>Size Category</Form.Label>
                    <Form.Control type="text" placeholder="Enter size category" {...register('sizeCategory')} />
                </Form.Group>

                <Form.Group controlId="featured" className="form-group">
                    <div className="featured-label">
                        <Form.Label>Featured</Form.Label>
                        <Form.Check type="checkbox" label="" className="form-switch" {...register('featured')} />
                    </div>
                </Form.Group>

                <Form.Group controlId="uploadImage" className="form-group">
                    <div
                        className={`upload-container ${isDragging ? 'dragover' : ''}`}
                        onDragOver={handleDragEnter}
                        onDragEnter={handleDragEnter}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                        <label htmlFor="uploadImage" className="upload-label">
                            <span>Drag & drop image here or select an image</span>
                            <Form.Control type="file" id="uploadImage" className="upload-input" {...register('uploadImage')} />
                        </label>
                    </div>
                </Form.Group>

                <Form.Group controlId="unlimitedSupply" className="form-group">
                    <div className="featured-label">
                        <Form.Label>Unlimited Supply</Form.Label>
                        <Form.Check type="checkbox" label="" className="form-switch" {...register('Unlimited Supply')} />
                    </div>
                </Form.Group>

                <Form.Group controlId="supplierName">
                    <Form.Label>Supplier Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter supplier name" {...register('supplierName')} />
                </Form.Group>

                <Form.Group controlId="section">
                    <Form.Label>Section</Form.Label>
                    <Row>
                        <Col>
                            <Form.Check type="radio" label="Men" value="men" {...register('section')} />
                        </Col>
                        <Col>
                            <Form.Check type="radio" label="Women" value="women" {...register('section')} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group controlId="additionalImages">
                    <div
                        className={`upload-container ${isDragging ? 'dragover' : ''}`}
                        onDragOver={handleDragEnter}
                        onDragEnter={handleDragEnter}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                        <label htmlFor="additionalImages" className="upload-label">
                            <span>Drag & drop images here select images from your device</span>
                            <Form.Control type="file" id="additionalImages" className="upload-input" multiple {...register('additionalImages')} />
                        </label>
                    </div>
                </Form.Group>

                <Button className="submit-btn" variant="primary" type="submit">
                    Submit Dress for Review
                </Button>
            </Form>

        </div>
    );
};

export default RegisterItemForm;
