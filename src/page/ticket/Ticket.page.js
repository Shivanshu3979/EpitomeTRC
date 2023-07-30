import React, { useEffect, useState } from "react";
import { Container,Row, Col, Button, Alert } from "react-bootstrap";
import { PageBreadcrumb } from "../../component/breadcrumb/Breadcrumb.comp";
import { MessageHistory } from "../../component/message-history/MessageHistory.comp";
import { UpdateTicket } from "../../component/update-ticket/UpdateTicket.comp";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleTicket, helperCloseTicket } from "../../component/ticket-list/ticketAction";
import { replyTicketSucceed } from "../../component/ticket-list/ticketSlice";


export const Ticket = () =>{
    const {tid} = useParams()
    const {isLoading,
        error,
        seletedTicket,
        replyMsg,
        replyTicketError}=useSelector(state=>state.tickets);
    const dispatch=useDispatch();
    const [ticket, setTicket]=useState('');
    const {searchTicketList}=useSelector(state=>state.tickets);
    
    useEffect(()=>{
        for(let i=0;i<searchTicketList.length;i++){
            if(searchTicketList[i]._id===tid){
                setTicket(searchTicketList[i])
                continue
            }
        }
    },[tid,searchTicketList])
    useEffect(()=>{
        dispatch(fetchSingleTicket(tid));
        return ()=>{
            (replyMsg || replyTicketError) && dispatch(replyTicketSucceed());
        }
    },[dispatch,tid,replyMsg,replyTicketError])
    return(
        <div>
            
        
        <Container>
            <Row>
                <Col>
                <PageBreadcrumb page="Ticket"/>
                </Col>
            </Row>
            <Row>
                <Col className="text-weight-bolder text-secondary">
                    {tid}
                <div className="subject"><b>Subject:</b> {ticket.subject}</div>
                <div className="Customer Name"><b>Customer Name:</b> {ticket.name}</div>
                <div className="Customer Email"><b>Customer Email:</b> {ticket.email}</div>
                <div className="date"><b>Date of Creation:</b> {new Date(ticket.openAt).toLocaleString()}</div>
                <div className="status"><b>Status:</b> {ticket.status}</div>
                </Col>
                <Col className="text-right">
                <Button variant="outline-info" 
                onClick={()=>{dispatch(helperCloseTicket(tid))}}
                disabled={ticket.status==="Closed"}>Close Ticket</Button>
                </Col>
            </Row>
            {replyMsg && <Alert variant='success'>{replyMsg}</Alert>}
            {replyTicketError && <Alert variant='danger'>{replyTicketError}</Alert>}
            <Row className="mt-4">
                <Col>{ticket.conversations && <MessageHistory msg={ticket.conversations}/>}
                    
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <UpdateTicket 
                    tid={tid}
                    status={ticket.status}
                    />
                </Col>
            </Row>
        </Container>
        </div>
    )
} 