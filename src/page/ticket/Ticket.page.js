import React, { useEffect, useState } from "react";
import { Container,Row, Col, Button } from "react-bootstrap";
import { PageBreadcrumb } from "../../component/breadcrumb/Breadcrumb.comp";
import tickets from "../../assets/data/dummy-tickets.json"
import { MessageHistory } from "../../component/message-history/MessageHistory.comp";
import { UpdateTicket } from "../../component/update-ticket/UpdateTicket.comp";
import { useParams } from "react-router-dom";


export const Ticket = () =>{
    const {tid} = useParams()
    const [message, setMessage]=useState('');
    const [ticket, setTicket]=useState('');

    useEffect(()=>{
        for(let i=0;i<tickets.length;i++){
            if(tickets[i].id===tid){
                setTicket(tickets[i])
                continue
            }
        }
    },[message])
    const handleOnChange=(e)=>{
        setMessage(e.target.value);
    }
    const handleOnSubmit=(e)=>{
        setMessage(e.target.value);
    }
    return(
        <Container>
            <Row>
                <Col>
                <PageBreadcrumb page="Ticket"/>
                </Col>
            </Row>
            <Row>
                <Col className="text-weight-bolder text-secondary">
                    {tid}
                <div className="subject">Subject: {ticket.subject}</div>
                <div className="Customer Name">Customer Name: {ticket.customerName}</div>
                <div className="Customer Email">Customer Email: {ticket.customerEmail}</div>
                <div className="date">Date of Creation: {ticket.createdAt}</div>
                <div className="assigned To">Assigned To: {ticket.assignedTo}</div>
                <div className="status">Status: {ticket.status}</div>
                </Col>
                <Col className="text-right">
                <Button variant="outline-info">Close Ticket</Button>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>{ticket.history && <MessageHistory msg={ticket.history}/>}
                    
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <UpdateTicket 
                    msg={message}
                    handleOnChange={handleOnChange}
                    handleOnSubmit={handleOnSubmit}/>
                </Col>
            </Row>
        </Container>
    )
} 