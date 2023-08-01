import React, {useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAllTickets} from './hiringAction';

import {Container, Row,Col, Button} from "react-bootstrap";
import { PageBreadcrumb } from '../breadcrumb/Breadcrumb.comp';
import { SearchFormH } from '../search-form/SearchForm.hiring';
import { HiringTable } from '..//hiring-process/hiring.comp';
import { Link } from 'react-router-dom';

export const HiringLists=()=>{
    const dispatch=useDispatch();
    const {candidates}=useSelector(state=>state.hiring);
    const [count, setcount]=useState(0);
    const [closed, setclosed]=useState(0);
    useEffect(()=>{
        dispatch(fetchAllTickets())
    },[dispatch]);
    
    useEffect(()=>{
        candidates.map((ele)=>{
            if(ele.status==="Closed"){
                setclosed(closed+1);
            }
            else if(ele.status==="Selected"){
                setcount(count+1);
            }
        })
    },[candidates])
    return(
        <Container>
            <Row>
                <Col>
                <PageBreadcrumb page="Candidates"/>
                </Col>
            </Row>
            
            <Row className='mt-4'>
                <Col>
                <Link to="/add-candidate">
                <Button variant="info">Add New Candidate</Button>
                </Link>
                </Col>
                <Col className='text-right'>
                    <SearchFormH type="roleApplied"/>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col>
                <b>Total Candidates: </b>{candidates && candidates.length}<br/>
                <b>Total Selected: </b>{count}<br/>
                <b>Total Closed: </b>{closed}<br/>
                <b>Total Pending: </b>{candidates && candidates.length-count-closed}<br/>
                </Col>
                <Col className='text-right'>
                    <SearchFormH type="status"/>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col>
                <HiringTable/>
                </Col>
            </Row>
        </Container>
    )
}

