import React, { useEffect, useState } from "react"
import {Form, Button, Row, Col, Alert, Spinner} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { openNewTicket } from "./addCandidateActions";
import { shortText } from "../../utils/validation";
import { openNewTicketSucceed } from "./addCandidateSlicer";
import { fetchAllTickets } from "../hiring-list/hiringAction";

const initialFrmDt ={
    name:"",
    workexp:0,
    roleApplied:"",
    email:"",
    education:"",
    summary:"",
    skill1:"",
    skill2:"",
    skill3:"",
    languages:"",
    linkedin:"",
    others:"None",
    stage1:"",
    stage2:"",
    stage3:"",
    status:"Not Reviewed"
}
const initialFrmError={
    name:false,
    roleApplied:false,
    email:false,
    education:false,
    summary:false,
    skill1:false,
    skill2:false,
    skill3:false,
    languages:false,
    linkedin:false,
    others:false,
    stage1:false,
    stage2:false,
    stage3:false,
    status:false,
}

export const AddCandidateForm=()=>{
    const dispatch=useDispatch();
    const [frmData,setFrmData]=useState(initialFrmDt)

    const {isLoading, error, successMsg,succeed}=useSelector(
        (state)=>state.openTicket
    )
    const [frmDataError,setFrmDataError]=useState(initialFrmError)
    const user=useSelector(state=>state.user.user);
    
    useEffect(()=>{
        return ()=>{
            successMsg && dispatch(openNewTicketSucceed()) && dispatch(fetchAllTickets())
        }
    },[dispatch,frmData,frmDataError]);

    const handleOnChange=(e,text)=>{
        const {name, value}=e.target;
        setFrmData({
            ...frmData,
            [name]:value
        })
    }
    const handleOnSubmit=async(e)=>{
        e.preventDefault();
        setFrmDataError({
            ...initialFrmError
        });
        dispatch(openNewTicket(frmData));
    }

    return (
        <div className="jumbotron form-box d-grid gap-2">
            <h1 className="text-info text-center">Add New Candidate</h1>
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
                            <Form.Label column sm={2}>Role Applied</Form.Label>
                            <Col sm={10}>
                            <Form.Control 
                            name="roleApplied"
                            minLength="3"
                            value={undefined}
                            onChange={handleOnChange}
                            placeholder="Role Applied for.."
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
                            <Form.Label column sm={2}>Highest Level of Education</Form.Label>
                            <Col sm={10}>
                            <Form.Control 
                            type="text"
                            minLength="3"
                            name="education"
                            value={undefined}
                            onChange={handleOnChange}
                            placeholder="Highest Education"
                            required
                            />
                            </Col>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Professional Summary</Form.Label>
                            <Form.Control
                            as="textarea"
                            minLength="3"
                            name="summary"
                            rows="5"
                            value={undefined}
                            onChange={handleOnChange}
                            placeholder="Description"
                            required
                            />
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>skill 1</Form.Label>
                            <Col sm={10}>
                            <Form.Control 
                            type="text"
                            minLength="3"
                            name="skill1"
                            value={undefined}
                            onChange={handleOnChange}
                            placeholder="Excel/Tableau/PowerBI"
                            required
                            />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>skill 2</Form.Label>
                            <Col sm={10}>
                            <Form.Control 
                            type="text"
                            minLength="3"
                            name="skill2"
                            value={undefined}
                            onChange={handleOnChange}
                            placeholder="maybe languages like c/c++, java etc.."
                            required
                            />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>skill 3</Form.Label>
                            <Col sm={10}>
                            <Form.Control 
                            type="text"
                            minLength="3"
                            name="skill3"
                            value={undefined}
                            onChange={handleOnChange}
                            placeholder="Communication"
                            required
                            />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>Languages Proficient in</Form.Label>
                            <Col sm={10}>
                            <Form.Control 
                            type="text"
                            minLength="3"
                            name="languages"
                            value={undefined}
                            onChange={handleOnChange}
                            placeholder="English, Hindi, French..."
                            required
                            />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>Work experience in years</Form.Label>
                            <Col sm={10}>
                            <Form.Control 
                            type="number"
                            minLength="3"
                            name="workexp"
                            value={undefined}
                            onChange={handleOnChange}
                            placeholder="0"
                            required
                            />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>LinkedIN</Form.Label>
                            <Col sm={10}>
                            <Form.Control 
                            type="text"
                            minLength="3"
                            name="linkedin"
                            value={undefined}
                            onChange={handleOnChange}
                            placeholder="LinkedIN profile Link"
                            />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>Other Links</Form.Label>
                            <Col sm={10}>
                            <Form.Control 
                            type="text"
                            name="others"
                            value={undefined}
                            onChange={handleOnChange}
                            placeholder="Github, Kaggle, portfolio, etc.."
                            />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>Define Hiring Stages</Form.Label>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>stage 1</Form.Label>
                            <Col sm={10}>
                            <Form.Control 
                            type="text"
                            minLength="3"
                            name="stage1"
                            value={undefined}
                            onChange={handleOnChange}
                            placeholder="CV shorlisting"
                            />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>stage 2</Form.Label>
                            <Col sm={10}>
                            <Form.Control 
                            type="text"
                            minLength="3"
                            name="stage2"
                            value={undefined}
                            onChange={handleOnChange}
                            placeholder="Technical Interview/ Test"
                            />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>stage 3</Form.Label>
                            <Col sm={10}>
                            <Form.Control 
                            type="text"
                            minLength="3"
                            name="stage3"
                            value={undefined}
                            onChange={handleOnChange}
                            placeholder="HR Interview"
                            />
                            </Col>
                        </Form.Group>
                        <Button type="Submit" className="mt-4" variant="info" size="lg">Submit</Button>
                    </Form>
        </div>
    )
}

