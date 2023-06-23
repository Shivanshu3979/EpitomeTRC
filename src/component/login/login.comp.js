import React from 'react';
import PropTypes from 'prop-types';

import{Container, Row, Col, Form, Button} from 'react-bootstrap';


export const LoginForm=({handleOnChange, handleOnSubmit, formSwitcher, email, pass})=>{
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                    <h1 className="text-info text-center">Client Login</h1>
                    <hr/>
                    <Form autoComplete='off' onSubmit={handleOnSubmit}>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleOnChange}
                            placeholder="Enter Email"
                            required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                            type="password"
                            name="password"
                            value={pass}
                            onChange={handleOnChange}
                            placeholder="password"
                            required
                            />
                        </Form.Group>
                        <Button type="Submit">Login</Button>
                    </Form>
                    <hr/>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <a href="#" onClick={()=>formSwitcher('rest')}>Login Now?</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

LoginForm.propTypes={
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired
}