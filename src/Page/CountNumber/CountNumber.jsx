import React, {useState} from 'react';
import { Container, Button } from 'react-bootstrap';

import '../Style/Number.scss';

const CountNumber = ()=> {
    const [count, setCount] = useState(0);
    const [stop, setStop] = useState(false);
    const getRandomNumber = () => Math.ceil(Math.random() * 2);
    let randomNumber = getRandomNumber();

    const startAgain = (event) => {
        setStop(true);
        event.target.className = 'button-block btn btn-danger';
        setTimeout(() => {
            setStop(false);
            event.target.className = 'button-block btn btn-light';
            setCount(0);
            randomNumber = getRandomNumber();
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
        !stop && parseInt(event.target.value, 10) === randomNumber ? nextlevel(event) : startAgain(event);
    };
    const stylePoint = count <=3 ? 'low-point' : count <=5 ? 'medium-point' : count <=8 ? 'hight-point': 'super-point';
    return (
        <Container fluid className="count-number">
            <p className="description" >Count Your Lucky</p>
            <div className='point'>Your Point:<span className={stylePoint}> {count}</span></div>
            <div className="number-container">
                <Button variant="light" value="1" key="btn-1" onClick={handleClick} className="button-block">1</Button>
                <Button variant="light" value="2" key="btn-2" onClick={handleClick} className="button-block">2</Button>
            </div>
        </Container>
    );
};
export default CountNumber;