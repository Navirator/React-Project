import React, {Component, useState,useEffect} from 'react';
import { Navbar, Nav, FormControl, Container, Form, Button, Modal } from "react-bootstrap";

export default function Contacts () { 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState('');
    const [review, setReview] = useState('');
    const [emailDirty, setEmailDirty] = useState( false);
    const [reviewDirty, setReviewDirty] = useState( false);
    const [emailError, setEmailError] = useState( 'Email не може бути порожнім');
    const [reviewError, setReviewError] = useState( 'Поле не може бути порожнім');
    const [formValid, setFormValid] = useState(false);

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!re.test(String(e.target.value.toLowerCase()))) {
            setEmailError('Некоректний email')
        } 
        else {
            setEmailError('')
        }
    }
    
    const reviewHandler = (e) => {
        setReview(e.target.value)
        if (!e.target.value) {
            setReviewError('Поле не може бути порожнім')
        } 
        else {
            setReviewError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
            break;
            case 'review':
                setReviewDirty(true)
            break;
        }
    }

    //якщо помилка не порожня, то будемо щось робити
    useEffect ( () => {
        if (emailError || reviewError) {
            setFormValid(false)
        } 
        else {
            setFormValid(true)
        }
    },[emailError, reviewError])

    return ( 
        <Container className="mt-5">
            <Form className="pt-5">
                <Form.Group controlId="fromBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    {(emailDirty && emailError) && <div style={{color:"red"}}>{emailError}</div>}

                    <Form.Control onChange={e => emailHandler(e)} name="email" value={email} onBlur={e => blurHandler(e)} type="email" placeholder="Enter email" />
                    
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="fromBasicReview">
                    <Form.Label>Review</Form.Label>
                    {(reviewError && reviewDirty) && <div style={{color:"red"}}>{reviewError}</div>}

                    <Form.Control as="textarea" rows={3} onChange={e => reviewHandler(e)} name="review" value={review} onBlur={e => blurHandler(e)} type="review" placeholder="Enter review" />
                </Form.Group>

                <Form.Group controlId="contactsFromBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out"/>
                </Form.Group>

                <Button disabled={!formValid} variant="primary" type="submit"> Submit </Button>
            </Form> 
        </Container>
    );  
}