import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring'


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const ServicesCard = ({ handleService, service }) => {

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    const { _id, title, description } = service;


    return (

        <Col
            xs={12}
            sm={6}
            md={4}
            onClick={() => handleService(_id)}
        >
            <animated.div
                class="card-animated"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
            >
                <Card className="card-style">
                    <Card.Body>
                        <Card.Img
                            variant="top"
                            src={service && `data:image/png;base64,${service.img.img}`}
                            className="w-25 m-3"
                        />
                        <Card.Title>{title}</Card.Title>
                        <Card.Text> {description} </Card.Text>
                    </Card.Body>
                </Card>
            </animated.div>

        </Col>
    );
};

export default ServicesCard;