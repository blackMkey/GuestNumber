/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

import '../Style/Number.scss';

const Number = () => {
    const [count, setCount] = useState(2);
    const [stop, setStop] = useState(false);
    const items = [];
    const getRandomNumber = () => Math.ceil(Math.random() * count);

    const startAgain = (event) => {
        setStop(true);
        event.target.className = 'button-block btn btn-danger';
        setTimeout(() => {
            setStop(false);
            event.target.className = 'button-block btn btn-light';
            setCount(2);
        }, 500);

    };

    const nextlevel = (event) =>{
        setStop(true);
        event.target.className = 'button-block btn btn-success';
        setTimeout(() => {
            setStop(false);
            setCount(count+1);
            event.target.className = 'button-block btn btn-light';
        }, 500);
    };

    const handleClick = (event) => {
        !stop && parseInt(event.target.value, 10) === getRandomNumber() ? nextlevel(event) : startAgain(event);
    };

    for (let i = 1; i <= count; i += 1) {
        items.push(<Button variant="light" value={i} key={`btn-${i}`} onClick={handleClick} className="button-block">{i}</Button>);
    }

    return (
        <Container fluid className="number-component">
            <p className="description" >Find lucky number below!</p>
            <div className="number-container">
                {items}
            </div>
        </Container>
    );
};
export default Number;
