import React from 'react';
import PropTypes from 'prop-types';

import{Container, Row, Col, Form, Button} from 'react-bootstrap';


export const ResetPassword=({handleOnChange, handleOnSubmit,formSwitcher, email})=>{
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                    <h1 className="text-info text-center">Password Reset</h1>
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
                        <Button type="Submit" className='mt-2'>Reset</Button>
                    </Form>
                    <hr/>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <a href="#" onClick={()=>formSwitcher('login')}>Login Now?</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

ResetPassword.propTypes={
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired
}