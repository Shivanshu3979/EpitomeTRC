import React, {useState} from 'react';
import PropTypes from 'prop-types';

import{Container, Row, Col, Form, Button, Spinner, Alert} from 'react-bootstrap';
import { loginFail,loginSuccess,loginPending } from './loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import {userLogin} from "../../api/userApi";
import {useNavigate} from "react-router-dom";
import { getUserProfile } from '../../page/dashboard/userAction';

export const LoginForm=({
    formSwitcher,
})=>{
        const dispatch=useDispatch();
        const history=useNavigate();

        const {isLoading, isAuth, error}=useSelector(state=>state.login)
        const [email, setEmail]=useState("");
        const [password, setPassword]=useState("");

        const handleOnChange=e=>{
            const{name,value}=e.target
            switch(name){
                case 'email':setEmail(value)
                    break
                case 'password': setPassword(value);
                    break;
                
                    default:
                        break;
            }
    
        };
    
        const handleOnSubmit = async(e) =>{
            e.preventDefault();
            if(!email || !password){
               return alert("Fill up all the details.")
            }
    
            //TODO  call api to submit the form
            dispatch(loginPending());
            
            try {
                const isAuth=await userLogin({email,password});
                if(isAuth.status==="error"){
                    return dispatch(loginFail(isAuth.message));
                }
                dispatch(loginSuccess());
                dispatch(getUserProfile());
                history("/dashboard");
            } catch (error) {
                dispatch(loginFail(error.message));
            }
    
            
        };
    return(
            <Container>
                <Row>
                    <Col>
                    <h1 className="text-info text-center">Client Login</h1>
                    <hr/>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form autoComplete='off' onSubmit={handleOnSubmit}>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                            type="text"
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
                            value={password}
                            onChange={handleOnChange}
                            placeholder="password"
                            required
                            />
                        </Form.Group>
                        <Button type="Submit">Login</Button>
                        {isLoading && <Spinner variant="primary" animation="border"/>}
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
    )
};

LoginForm.propTypes={
    formSwitcher: PropTypes.func.isRequired,
}