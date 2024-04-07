import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const RegisterItemForm = () => {
    const { register, handleSubmit } = useForm();
    const [isDragging, setIsDragging] = useState(false);

    const [selectedEvent, setSelectedEvent] = useState('');
    const [selectedSubEvents, setSelectedSubEvents] = useState([]);

    const handleEventChange = (event) => {
        setSelectedEvent(event.target.value);
        setSelectedSubEvents([]); // Reset selected sub events when main event changes
    };

    const handleSubEventChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedSubEvents([...selectedSubEvents, value]); // Add the value to selectedSubEvents array
        } else {
            setSelectedSubEvents(selectedSubEvents.filter((item) => item !== value)); // Remove the value from selectedSubEvents array
        }
    };

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

                <Form.Group controlId="brandName">
                    <Form.Label>Brand Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Brand name" {...register('supplierName')} />
                </Form.Group>

                {/* <Form.Group controlId="section">
                    <Form.Label>Section</Form.Label>
                    <Row>
                        <Col>
                            <Form.Check type="radio" label="Men" value="men" {...register('section')} />
                        </Col>
                        <Col>
                            <Form.Check type="radio" label="Women" value="women" {...register('section')} />
                        </Col>
                    </Row>
                </Form.Group> */}

                <Form.Group controlId="mainEvent">
                    <Form.Label>Attach Dress to an Event</Form.Label>
                    <Form.Control as="select" value={selectedEvent} onChange={handleEventChange}>
                        <option value="">Select Main Event</option>
                        <option value="student">Student Events</option>
                        <option value="formal">Formal Events</option>
                        <option value="wedding">Wedding Guest Dresses</option>
                    </Form.Control>
                </Form.Group>

                {selectedEvent && (
                    <Form.Group controlId="subEvents">
                        <Form.Label>Select applicable event to the dress</Form.Label>
                        {selectedEvent === 'student' && (
                            <>
                                <Form.Check
                                    type="checkbox"
                                    label="Winter Formal Dress"
                                    value="winterFormal"
                                    checked={selectedSubEvents.includes('winterFormal')}
                                    onChange={handleSubEventChange}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Prom Dresses"
                                    value="prom"
                                    checked={selectedSubEvents.includes('prom')}
                                    onChange={handleSubEventChange}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Homecoming Dresses"
                                    value="homecoming"
                                    checked={selectedSubEvents.includes('homecoming')}
                                    onChange={handleSubEventChange}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Graduation Dresses"
                                    value="graduation"
                                    checked={selectedSubEvents.includes('graduation')}
                                    onChange={handleSubEventChange}
                                />
                            </>
                        )}
                        {selectedEvent === 'formal' && (
                            <>
                                <Form.Check
                                    type="checkbox"
                                    label="Black Tie Dresses"
                                    value="blackTie"
                                    checked={selectedSubEvents.includes('blackTie')}
                                    onChange={handleSubEventChange}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Semi-Formal Dress"
                                    value="semiFormal"
                                    checked={selectedSubEvents.includes('semiFormal')}
                                    onChange={handleSubEventChange}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Cocktail Party Dress"
                                    value="cocktail"
                                    checked={selectedSubEvents.includes('cocktail')}
                                    onChange={handleSubEventChange}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Holiday Party Dress"
                                    value="holiday"
                                    checked={selectedSubEvents.includes('holiday')}
                                    onChange={handleSubEventChange}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Sunday Best Dress"
                                    value="sundayBest"
                                    checked={selectedSubEvents.includes('sundayBest')}
                                    onChange={handleSubEventChange}
                                />
                            </>
                        )}
                        {selectedEvent === 'wedding' && (
                            <>
                                <Form.Check
                                    type="checkbox"
                                    label="All Wedding Guest Dresses"
                                    value="allWedding"
                                    checked={selectedSubEvents.includes('allWedding')}
                                    onChange={handleSubEventChange}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Mother of the Bride/Groom Dresses"
                                    value="motherOfBride"
                                    checked={selectedSubEvents.includes('motherOfBride')}
                                    onChange={handleSubEventChange}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Bridesmaid Dresses"
                                    value="bridesmaid"
                                    checked={selectedSubEvents.includes('bridesmaid')}
                                    onChange={handleSubEventChange}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Black Tie Wedding Guest Dresses"
                                    value="blackTieWedding"
                                    checked={selectedSubEvents.includes('blackTieWedding')}
                                    onChange={handleSubEventChange}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Semi Formal Wedding Guest Dresses"
                                    value="semiFormalWedding"
                                    checked={selectedSubEvents.includes('semiFormalWedding')}
                                    onChange={handleSubEventChange}
                                />
                            </>
                        )}
                    </Form.Group>
                )}


                <Form.Group controlId="additionalImages" className="additional-image">
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
