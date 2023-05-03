import React, {Component} from 'react';
import CarouselBoxHk from "../Components/CarouselBoxHk"
import {Button, Card, CardImg, Container} from "react-bootstrap";

class Home extends Component {
    render() {
        return (
            <>
            <CarouselBoxHk/>
            
{/* 22.03.2023 oleg */}
            
            <Container>
                <h2 className="textcenter m-4">Our team</h2>
                <div className="row">
                    <div className="col">
                        <Card className="m-4 text-center" bg="light" border="primary">
                            <Card.Img
                            variant="top"
                            src="https://www.cyberark.com/wp-content/uploads/2019/11/Developer.jpg"/>
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>Команда 1</Card.Text>
                                <Button variant="primary" href='/Developers'>About team</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col">
                        <Card className="m-4 text-center" bg="light" border="primary">
                            <Card.Img
                            variant="top"
                            src="https://cdn.vox-cdn.com/thumbor/Ndb49Uk3hjiquS041NDD0tPDPAs=/0x169:1423x914/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/7342855/microsoftteams.0.jpg"/>
                            <Card.Body>
                                <Card.Title>Природознавці</Card.Title>
                                <Card.Text>Команда 2</Card.Text>
                                <Button variant="primary" href='/Naturalists'>About team</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col">
                        <Card className="m-4 text-center" bg="light" border="primary">
                            <Card.Img
                            variant="top"
                            src="https://www.kv.by/sites/default/files/pictures/userpictures/2019/11/29/2359/foto6_1.jpg"/>
                            <Card.Body>
                                <Card.Title>Маркетилоги</Card.Title>
                                <Card.Text>Команда 3</Card.Text>
                                <Button variant="primary" href='/Marketers'>About team</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    //03.05.2023
                    <div>
                        <div className="world">
                            <a>ya ebal v rot etogo kazino</a>
                            <a className="suka"> tut react ne stavitca, i chto mne delat?! a?!</a>
                            <a className="suka2"> tut dazhe ebuchiy vsCode ne stavitca, mb eto iz-za windi7?</a>
                            <a>hotchu domoi otpustite pojalusta. kto ya?i chto tut delayuu? ya ne znayuu ctho mne delat</a>
                        </div>
                    </div>
                    //end
                </div>                
            </Container>
            </>
            
        );
    }
}

export default Home;