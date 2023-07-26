import React, {useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {fetchAllTickets} from './ticketAction';

import {Container, Row,Col, Button} from "react-bootstrap";
import { PageBreadcrumb } from '../breadcrumb/Breadcrumb.comp';
import { SearchForm } from '../search-form/SearchForm.comp';
import { TicketTable } from '../ticket-table/TicketTable.comp';
import { Link } from 'react-router-dom';

export const TicketLists=()=>{
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(fetchAllTickets())
    },[dispatch]);
    
    return(
        <Container>
            <Row>
                <Col>
                <PageBreadcrumb page="Ticket Lists"/>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col>
                <Link to="/add-ticket">
                <Button variant="info">Add New Tickets</Button>
                </Link>
                </Col>
                <Col className='text-right'>
                    <SearchForm />
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col>
                <TicketTable/>
                </Col>
            </Row>
        </Container>
    )
}

