import React, {Component} from 'react';
import CarouselBoxHk from "../Components/CarouselBoxHk"

class Home extends Component {
    render() {
        return (
            <CarouselBoxHk/>
        );
    }
}

//22.03.2023 oleg
            
<Container>
    <h2 className="textcenter m-4">Our team</h2>
    <div className="row">
        <div className="col">
            <Card className="m-4 text-center" bg="light" border="primary">
                <Card.img
                variant="top"
                src="https://qwertify.io/wp-content/uploads/2201/04/Team.jpeg"/>
                <Card.Body>
                    <Card.Title>Developers</Card.Title>
                    <Card.text>Команда 1</Card.text>
                    <Button variant="primary">About team</Button>
                </Card.Body>
            </Card>
        </div>
        <div className="col">
            <Card className="m-4 text-center" bg="light" border="primary">
                <Card.img
                variant="top"
                src="https://cdn.vox-cdn.com/thumor/Ndb49Uk3hjiquS041NDD0tPDPAs=/0x169:1423x914/fit-in/1200x630/cdn.vox-"/>
                <Card.Body>
                    <Card.Title>Природознавці</Card.Title>
                    <Card.text>Команда 2</Card.text>
                    <Button variant="primary">About team</Button>
                </Card.Body>
            </Card>
        </div>
        <div className="col">
            <Card className="m-4 text-center" bg="light" border="primary">
                <Card.img
                variant="top"
                src="https://qwertify.io/wp-content/uploads/2201/04/Team.jpeg"/>
                <Card.Body>
                    <Card.Title>Developers</Card.Title>
                    <Card.text>Команда 1</Card.text>
                    <Button variant="primary">About team</Button>
                </Card.Body>
            </Card>
        </div>
    </div>                
</Container>

export default Home;