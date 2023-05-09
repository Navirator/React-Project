import React, { Component, useState } from 'react';
import blogPosts from '../blogPosts';
import { Row, Col, ListGroup, Button, Card, Container, Pagination } from 'react-bootstrap';

export default function Blog() {
    var postItems = blogPosts();
    const [sortState, setSortState] = useState("none");

    const sortMethods = {
        none: { method: (a, b) => null },
        ascending: { method: (a, b) => a.date > b.date ? 1 : -1 },
        descending: { method: (a, b) => a.date < b.date ? 1 : -1 }
    };

    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col md="9" className='mt-5'>
                        <Container>
                            <Row>
                                <Col md='12' className='ms-3'>
                                    <Button onClick={(e) => setSortState("ascending")} className='btn btn-secondary me-3'>Date ↑</Button>
                                    <Button onClick={(e) => setSortState("descending")} className='btn btn-secondary'>Date ↓</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col md='12'>
                                    {
                                        postItems.sort(sortMethods[sortState].method).map((item) => (
                                            <div className='d-flex align-item-center me-5 border-1 border-bottom mb-2 p-3'>
                                                <div className='flex-shrink-0'>
                                                    <img src={item.imgUrl} alt='post img' className='mr-3' width={150} height={150} />
                                                </div>
                                                <div className='flex-grow-1 ms-3'>
                                                    <h5>{item.name}</h5>
                                                    <p>{item.date.toLocaleDateString()}</p>
                                                    <p>{item.info}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </Col>
                            </Row>
                            {/* <div> 
                                <ul className="pagination">
                                    <li className="page-item">1</li>
                                    <li className="page-item">2</li>
                                    <li className="page-item">3</li>
                                    <li className="page-item">4</li>
                                    <li className="page-item">5</li>
                                    <li className="page-item">6</li>
                                    <li className="page-item">7</li>
                                    <li className="page-item">8</li>
                                    <li className="page-item">9</li>
                                    <li className="page-item">10</li>
                                </ul>
                                <Pagination
                                    activePage={this.state.activePage}
                                    itemsCountPerPage={2}
                                    totalItemsCount={10}
                                    pageRangeDisplayed={5}
                                    onChange={this.handlePageChange.bind(this)}
                                    itemClass="page-item"
                                    linkClass="page-link"
                                />
                            </div> */}
                        </Container>
                    </Col>
                    <Col md="3" className='mt-5'>
                        <h5 className="text-center-md-5">Категорії</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>RPG</ListGroup.Item>
                                <ListGroup.Item>Racings</ListGroup.Item>
                                <ListGroup.Item>FPS</ListGroup.Item>
                                <ListGroup.Item>Strategy</ListGroup.Item>
                                <ListGroup.Item>Simulator</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className="mt-3 bg-light">
                            <Card.Body>
                                <Card.Title>Slide Widget</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus debitis, id
                                    corrupti quasi ipsa blanditiis aut itaque natus explicabo. Dolores repudiandae
                                    minima, maiores nam aliquid consequatur doloremque magnam quidem nemo laborum est
                                    quia sed blanditiis necessitatibus iure nihil commodi officia saepe temporibus et
                                    dolor libero fuga, aut illum. Eos, odio.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
