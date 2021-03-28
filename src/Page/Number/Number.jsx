/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import './Number.scss';

const Number = () => {
  const [count, setCount] = useState(2);
  const items = [];
  const getRandomNumber = () => Math.ceil(Math.random() * count);
  let randomNumber = getRandomNumber();
  const handleStartAgain = () => {
    setCount(2);
    randomNumber = getRandomNumber();
  };
  const handleClick = (event) => {
    parseInt(event.target.value, 10) === randomNumber ? setCount(count + 1) : handleStartAgain();
  };
  for (let i = 1; i <= count; i += 1) {
    items.push(<Button variant="light" value={i} key={`btn-${i}`} onClick={handleClick} className="button-block">{i}</Button>);
  }
  return (
    <Container fluid>
      <p>what is your lucky number?</p>
      <Button onClick={handleStartAgain}>Start again</Button>
      <div className="number-container">
        {items}
      </div>
    </Container>
  );
};
export default Number;
