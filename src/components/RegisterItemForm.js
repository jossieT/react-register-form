import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import NestedDropdown from './NestedDropdown';
import axios from 'axios';

const RegisterItemForm = () => {
    const { register, handleSubmit } = useForm();
    const [isDragging, setIsDragging] = useState(false);

    const options = [
        [
            { label: 'Style By Length', value: 'length' },
            { label: 'Style by Dark Colors', value: 'darkColors' },
            { label: 'Style by Light Colors', value: 'lightColors' }
        ],
        [
            [
                { label: 'Floor Length Dresses', value: 'floorLength' },
                { label: 'Dresses With Train', value: 'dressesWithTrain' },
                { label: 'Cocktail Dresses', value: 'cocktail' },
                { label: 'Midi Dresses', value: 'midi' }
            ],
            [
                { label: 'Black Dresses', value: 'black' },
                { label: 'Blue Dresses', value: 'blue' },
                { label: 'Red Dresses', value: 'red' },
                { label: 'Maroon Dresses', value: 'maroon' },
                { label: 'Green Dresses', value: 'green' }
            ],
            [
                { label: 'White Dresses', value: 'white' },
                { label: 'Gold Dresses', value: 'gold' },
                { label: 'Silver Dresses', value: 'silver' },
                { label: 'Light Blue Dresses', value: 'lightBlue' },
                { label: 'Pink Dresses', value: 'pink' },
                { label: 'Yellow Dresses', value: 'yellow' }
            ]
        ]
    ];

    const eventStyle = [
        [
            { label: 'Student Events', value: 'student' },
            { label: 'Formal Events', value: 'formal' },
            { label: 'Wedding Guest Dresses', value: 'wedding' }
        ],
        [
            [
                { label: 'Winter Formal Dress', value: 'winterFormal' },
                { label: 'Prom Dresses', value: 'prom' },
                { label: 'Homecoming Dresses', value: 'homecoming' },
                { label: 'Graduation Dresses', value: 'graduation' }
            ],
            [
                { label: 'Black Tie Dresses', value: 'blackTie' },
                { label: 'Semi-Formal Dress', value: 'semiFormal' },
                { label: 'Cocktail Party Dress', value: 'cocktail' },
                { label: 'Holiday Party Dress', value: 'holiday' },
                { label: 'Sunday Best Dress', value: 'sundayBest' }
            ],
            [
                { label: 'All Wedding Guest Dresses', value: 'allWedding' },
                { label: 'Mother of the Bride/Groom Dresses', value: 'motherOfBride' },
                { label: 'Bridesmaid Dresses', value: 'bridesmaid' },
                { label: 'Black Tie Wedding Guest Dresses', value: 'blackTieWedding' },
                { label: 'Semi Formal Wedding Guest Dresses', value: 'semiFormalWedding' }
            ]
        ]
    ];

    const [selectedValues, setSelectedValues] = useState([]);

    const handleSelectionChange = (values) => {
        setSelectedValues(values);
    };


    const [selectedEvent, setSelectedEvent] = useState('');
    const [selectedSubEvents, setSelectedSubEvents] = useState([]);

    const handleEventChange = (event) => {
        setSelectedEvent(event.target.value);
        setSelectedSubEvents([]); // Reset selected sub events when main event changes
    };

    const handleSubEventChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedSubEvents((prevSelected) => [...prevSelected, value]); // Add the value to selectedSubEvents array
        } else {
            setSelectedSubEvents((prevSelected) => prevSelected.filter((item) => item !== value)); // Remove the value from selectedSubEvents array
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



                <Form.Group controlId="mainEvent">
                    <Form.Label>Attach Dress to a Style</Form.Label>
                    <NestedDropdown options={options} selectedValues={selectedValues} onSelectionChange={handleSelectionChange} />
                </Form.Group>

                <Form.Group controlId="useEvent">
                    <Form.Label>Attach Dress to an Event</Form.Label>
                    <NestedDropdown options={eventStyle} selectedValues={selectedValues} onSelectionChange={handleSelectionChange} />
                </Form.Group>

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
