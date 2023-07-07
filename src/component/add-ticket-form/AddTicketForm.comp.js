import React from "react"
import {Form, Button, Row, Col} from "react-bootstrap";
import { PropTypes } from "prop-types";
export const AddTicketForm=({handleOnSubmit,handleOnChange, frmDt})=>{
    return (
        <div className="jumbotron form-box d-grid gap-2">
            <h1 className="text-info text-center">Add New Ticket</h1>
            <Form autoComplete='off' onSubmit={handleOnSubmit}>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>Name</Form.Label>
                            <Col sm={10}>
                            <Form.Control 
                            name="customerName"
                            minLength="3"
                            value={frmDt.customerName}
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
                            name="customerEmail"
                            value={frmDt.customerEmail}
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
                            value={frmDt.subject}
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
                            name="description"
                            rows="5"
                            value={frmDt.description}
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

AddTicketForm.prototype={
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    frmDt: PropTypes.object.isRequired
}