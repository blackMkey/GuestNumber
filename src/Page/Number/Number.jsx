/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import './Number.scss';

const Number = () => {
  const [count, setCount] = useState(2);
  const [stop, setStop] = useState(false);
  const items = [];
  const getRandomNumber = () => Math.ceil(Math.random() * count);
  let randomNumber = getRandomNumber();

  const startAgain = () => {
    setCount(2);
    randomNumber = getRandomNumber();
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
    !stop && parseInt(event.target.value, 10) === randomNumber ? nextlevel(event) : startAgain();
  };

  for (let i = 1; i <= count; i += 1) {
    items.push(<Button variant="light" value={i} key={`btn-${i}`} onClick={handleClick} className="button-block">{i}</Button>);
  }

  return (
    <Container fluid>
      <p className="description" >Find lucky number below!</p>
      <div className="number-container">
        {items}
      </div>
    </Container>
  );
};
export default Number;
