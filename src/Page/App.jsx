import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import Number from './Number/Number';
import Header from './Header/Header';
import CountNumber from './CountNumber/CountNumber';
import './Style/App.scss';

function App() {

    const props = {
        md: {
            span: 10,
            offset: 1,
        },
        xs: {
            span: 8,
            offset: 2,
        },
        lg: {
            span: 10,
            offset: 1,
        },
    };

    return (
        <Router>
            <Container className="container-page">
                <Row>
                    <Col { ...props } className="header">
                        <Header />
                    </Col>
                    <Col { ...props } className="number">
                        <Switch>
                            <Route exact path="/">
                                <Number />
                            </Route>
                            <Route path="/count">
                                <CountNumber />
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </Router>
    );
}

export default App;
