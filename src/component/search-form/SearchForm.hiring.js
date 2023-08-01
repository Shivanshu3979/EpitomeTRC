import React from 'react'
import { useDispatch } from 'react-redux';
import { Form, Row, Col } from 'react-bootstrap'
import {filterSearchTicket} from "../../component/hiring-list/hiringAction"

export const SearchFormH=({type})=>{
    const dispatch = useDispatch();
    const handleOnChange=(e)=>{
        const {value}=e.target;
        dispatch(filterSearchTicket({value,type}));
    }
    return(
        <div>
            <Form>
                <Form.Group as={Row}>
                    <Form.Label column sm={2}>{type}<br/>{" "}</Form.Label>
                    <Col sm={10}>
                        <Form.Control
                         name="searchStr"
                         onChange={handleOnChange}
                         placeholder='Search....'
                         className='w-100'/>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}

