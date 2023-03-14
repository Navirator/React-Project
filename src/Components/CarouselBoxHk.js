import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";

import MushroomsImg from '../assets/1.jpg'; 
import OceanImg from '../assets/2.jpg'; 
import FieldImg from '../assets/3.jpg'; 
import PeaceImg from '../assets/4.jpg';

class CarouselBoxHk extends Component {
    render() {
        return (
            <Carousel> 
                <Carousel.Item> 
                    <img 
                    className="d-block w-100" 
                    src={OceanImg} 
                    alt="Ocean"/>
                    <Carousel.Caption> 
                        <h3>Ocean image</h3> 
                        <p> Далі, далі від душного міста! Серце прагне буять на просторі! Бачу здалека, – хвиля іскриста грає вільно по синьому морі.</p> 
                    </Carousel.Caption> 
                </Carousel.Item>
                <Carousel.Item> 
                    <img 
                    className="d-block w-100" 
                    src={FieldImg} 
                    alt="Field"/>
                    <Carousel.Caption> 
                        <h3>Field image</h3> 
                        <p> Lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, est?</p> 
                    </Carousel.Caption> 
                </Carousel.Item>
                <Carousel.Item> 
                    <img 
                    className="d-block w-100" 
                    src={PeaceImg} 
                    alt="Peace"/>
                    <Carousel.Caption> 
                        <h3>Peace image</h3> 
                        <p> Lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, est?</p> 
                    </Carousel.Caption> 
                </Carousel.Item>
            </Carousel>
        );
    }
}
export default CarouselBoxHk;