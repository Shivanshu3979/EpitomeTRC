import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { PageBreadcrumb } from '../../component/breadcrumb/Breadcrumb.comp'
import { AddTicketForm } from '../../component/add-ticket-form/AddTicketForm.comp'


export const AddTicket=()=>{

    
    return (
        <Container>
            <Row>
                <Col>
                <PageBreadcrumb page="New Ticket"/>
                </Col>
            </Row>

            <Row>
                <Col>
                <AddTicketForm />
                </Col>
            </Row>
        </Container>
    )
}