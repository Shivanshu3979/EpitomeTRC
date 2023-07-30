import React, { useEffect, useState } from "react"
import {Form, Button, Row, Col, Alert, Spinner} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { openNewTicket } from "./addTicketActions";
import { shortText } from "../../utils/validation";
import { openNewTicketSucceed } from "./addTicketSlicer";

const initialFrmDt ={
    name:"",
    email:"",
    subject:"",
    message:"",
    sender:"",
}
const initialFrmError={
    subject:false,
    issueDate:false,
    detail:false,
    sender:false,
    email:false,
}

export const AddTicketForm=()=>{
    const dispatch=useDispatch();
    const [frmData,setFrmData]=useState(initialFrmDt)

    const {isLoading, error, successMsg,succeed}=useSelector(
        (state)=>state.openTicket
    )
    const [frmDataError,setFrmDataError]=useState(initialFrmError)
    const user=useSelector(state=>state.user.user);
    
    useEffect(()=>{
        return ()=>{
            successMsg && dispatch(openNewTicketSucceed())
        }
    },[dispatch,frmData,frmDataError]);

    const handleOnChange=(e,text)=>{
        const {name, value}=e.target;
        setFrmData({
            ...frmData,
            [name]:value,
            sender:user.name
        })
    }
    const handleOnSubmit=async(e)=>{
        e.preventDefault();
        const isSubjectValid= shortText(frmData.subject);
        setFrmDataError({
            ...initialFrmError,
            subject:!isSubjectValid,
        });
        dispatch(openNewTicket(frmData));
    }

    return (
        <div className="jumbotron form-box d-grid gap-2">
            <h1 className="text-info text-center">Add New Ticket</h1>
            <hr/>
            <div>
                {error && <Alert variant="danger">{error}</Alert>}
                {successMsg && <Alert variant="primary">{successMsg}</Alert>}
                {isLoading && <Spinner variant="primary" animation="border"/>}
            </div>
            <Form autoComplete='off' onSubmit={handleOnSubmit}>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>Name</Form.Label>
                            <Col sm={10}>
                            <Form.Control 
                            name="name"
                            minLength="3"
                            value={undefined}
                            onChange={handleOnChange}
                            placeholder="Enter Name"
                            required
                            />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>Email</Form.Label>
                            <Col sm={10}>
                            <Form.Control 
                            type="email"
                            minLength="3"
                            name="email"
                            value={undefined}
                            onChange={handleOnChange}
                            placeholder="Enter Email"
                            required
                            />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>Subject</Form.Label>
                            <Col sm={10}>
                            <Form.Control 
                            type="text"
                            minLength="3"
                            name="subject"
                            value={undefined}
                            onChange={handleOnChange}
                            placeholder="Subject"
                            required
                            />
                            </Col>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                            as="textarea"
                            minLength="3"
                            name="message"
                            rows="5"
                            value={undefined}
                            onChange={handleOnChange}
                            placeholder="Description"
                            required
                            />
                        </Form.Group>
                        <Button type="Submit" className="mt-4" variant="info" size="lg">Submit</Button>
                    </Form>
        </div>
    )
}

