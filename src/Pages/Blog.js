import React, {Component} from 'react';
import {Container, Col, Row, Card, ListGroup} from "react-bootstrap";

class Blog extends Component {
    render() {
        return (
            <Row>
                <h1 className="textcenter m-4"></h1>
                <Col md="9">
                    
                    <div className="d-flex align-items-center me-5">
                        <div className="flex-shrink-0">
                            <img 
                                width={150} 
                                height={150} 
                                className="mr-3" 
                                src="https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg" 
                                alt="photo" />
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <h5><a href='/blog/blog1'>Blog post 1</a></h5>
                            <p> Lorem </p>
                        </div>
                    </div>

                    <div className="d-flex align-items-center me-5">
                        <div className="flex-shrink-0">
                            <img 
                                width={150} 
                                height={150} 
                                className="mr-3" 
                                src="https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg" 
                                alt="photo" />
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <h5><a href='/blog/blog2'>Blog post 2</a></h5>
                            <p> Lorem </p>
                        </div>
                    </div>

                    <div className="d-flex align-items-center me-5">
                        <div className="flex-shrink-0">
                            <img 
                                width={150} 
                                height={150} 
                                className="mr-3" 
                                src="https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg" 
                                alt="photo" />
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <h5><a href='/blog/blog3'>Blog post 3</a></h5>
                            <p> Lorem </p>
                        </div>
                    </div>
                </Col>
                <Col md="3">
                    <h5 className="text-center mt-5">Категорії</h5>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>категорія 1</ListGroup.Item>
                            <ListGroup.Item>категорія 2</ListGroup.Item>
                            <ListGroup.Item>категорія 3</ListGroup.Item>
                            <ListGroup.Item>категорія 4</ListGroup.Item>
                            <ListGroup.Item>категорія 5</ListGroup.Item>
                        </ListGroup>
                    </Card>

                    <Card className="mt-3 bg-light">
                        <Card.Body>
                            <Card.Title>Slide widget</Card.Title>
                            <Card.Text> Lorem </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            //<div> Blog </div>
        );
    }
}

export default Blog;