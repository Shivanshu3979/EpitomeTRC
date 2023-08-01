import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { PageBreadcrumb } from '../../component/breadcrumb/Breadcrumb.comp'
import { AddCandidateForm } from '../../component/add-candidate-form/AddCandidateForm.comp'


export const AddCandidate=()=>{

    
    return (
        <Container>
            <Row>
                <Col>
                <PageBreadcrumb page="New Candidate"/>
                </Col>
            </Row>

            <Row>
                <Col>
                <AddCandidateForm />
                </Col>
            </Row>
        </Container>
    )
}