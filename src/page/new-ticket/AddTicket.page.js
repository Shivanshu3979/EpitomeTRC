import React, { useEffect, useState } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { PageBreadcrumb } from '../../component/breadcrumb/Breadcrumb.comp'
import { AddTicketForm } from '../../component/add-ticket-form/AddTicketForm.comp'

const initialFrmDt ={
    customerName:"",
    customerEmail:"",
    subject:"",
    description:""
}
export const AddTicket=()=>{

    const [frmData,setFrmData]=useState(initialFrmDt)
    useEffect(()=>{},[frmData]);

    const handleOnChange=(e)=>{
        const {name, value}=e.target;
        
        setFrmData({
            ...frmData,
            [name]:value
        })
    }
    const handleOnSubmit=(e)=>{
        e.preventDefault();
    }
    return (
        <Container>
            <Row>
                <Col>
                <PageBreadcrumb page="New Ticket"/>
                </Col>
            </Row>

            <Row>
                <Col>
                <AddTicketForm 
                handleOnChange={handleOnChange} 
                frmDt={frmData}
                handleOnSubmit={handleOnSubmit}/>
                </Col>
            </Row>
        </Container>
    )
}