import React, { Component } from "react";
import {
    Navbar, 
    Nav, 
    FormControl, 
    Container, 
    Form, 
    Button, 
    Modal /* 29.03.2023 */
} from "react-bootstrap";

import logo from "./assets/Logo.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './Pages/Home'; 
import Contacts from './Pages/Contacts'; 
import About from './Pages/About'; 
import Blog from './Pages/Blog';

export default class Header extends Component {
    render() {
        return (
            <>

            {/* 29.03.2023 */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Log in</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="fromBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted"> We'll never share your email with anyone else. </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="fromBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password"> </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="fromBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me"/>
                        </Form.Group>

                        <Button variant="primary" type="submit"> Submit </Button>
                    </Form>
                </Modal.Body>
            </Modal>


            <Router> 
                <Routes> 
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    
                    <Button className="ms-2" onClick={handleShow}>Login</Button> {/* 29.03.2023 */}

                </Routes>
            </Router>
            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} height="30" width="30" className="d-inline-block align-top" alt = "Logo" 
                        /> React Site
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav claccName="me-auto">
                            <Nav.Link href="/"> Home </Nav.Link>
                            <Nav.Link href="/about"> About us </Nav.Link> 
                            <Nav.Link href="/contacts"> Contacts </Nav.Link> 
                            <Nav.Link href="/blog"> Blog </Nav.Link> 
                        </Nav>
                        <Form className="d-flex"> 
                            <FormControl type ="text" 
                                placeholder="Search" 
                                className="me-sm-3" 
                            />
                            <Button variant="outline-info">Search</Button> 
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </>
        )
    }
}

{/* 29.03.2023 */}

export default function Header() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
}