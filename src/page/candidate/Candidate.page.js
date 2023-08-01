import React, { useEffect, useState } from "react";
import { Container,Row, Col, Button, Alert } from "react-bootstrap";
import { PageBreadcrumb } from "../../component/breadcrumb/Breadcrumb.comp";
//import { MessageHistory } from "../../component/message-history/MessageHistory.comp";
//import { UpdateCandidate } from "../../component/update-ticket/UpdateTicket.comp";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setStageStatus, helperCloseTicket } from "../../component/hiring-list/hiringAction";
import { fetchStagesSuccess } from "../../component/hiring-list/hiringtSlice";


export const Candidate = () =>{
    const {tid} = useParams()
    
    const dispatch=useDispatch();
    const [candidate, setTicket]=useState('');
    var {searchCandidateList,error,success,status}=useSelector(state=>state.hiring);
    useEffect(()=>{
        for(let i=0;i<searchCandidateList.length;i++){
            if(searchCandidateList[i]._id===tid){
                setTicket(searchCandidateList[i])
                if(searchCandidateList[i].status==="Closed"){
                    status="Closed";
                }
                break;
            }
        }
        
    },[tid,searchCandidateList])
    
    useEffect(()=>{
        status=candidate.status;
    },[candidate,status])
    const handleOnChange=(e)=>{
        const arr=["Not Reviewed","Selected","Rejected","Pending"]
        const element=e.target.name;
        var val=arr[e.target.selectedIndex];
        dispatch(setStageStatus(tid,val,element));
    }
    return(
        <div>
            
        
        <Container>
            <Row>
                <Col>
                <PageBreadcrumb page="Ticket"/>
                </Col>
            </Row>
            <Row>
            <Col className="text-right">
                <Button variant="outline-info" 
                onClick={()=>{dispatch(helperCloseTicket(tid))}}
                disabled={candidate.status==="Closed"}>Close Application</Button>
                </Col>
            </Row>
            <Row>
                <Col className="text-weight-bolder text-secondary">
                    {tid}
                <table>
                    <tr>
                        <th>Added At</th>
                        <td>{new Date(candidate.openAt).toLocaleString()}</td>
                    </tr>
                    <tr>
                        <th>Last Updated</th>
                        <td>{new Date(candidate.updatedAt).toLocaleString()}</td>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <td>{candidate.name}</td>
                    </tr>
                    <tr>
                        <th>Role Applied For</th>
                        <td>{candidate.roleApplied}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{candidate.email}</td>
                    </tr>
                    <tr>
                        <th>Education</th>
                        <td>{candidate.education}</td>
                    </tr>
                    <tr>
                        <th>Professional summary</th>
                        <td>{candidate.summary}</td>
                    </tr>
                    <tr>
                        <th>Skill 1</th>
                        <td>{candidate.skill1}</td>
                    </tr>
                    <tr>
                        <th>Skill 2</th>
                        <td>{candidate.skill2}</td>
                    </tr>
                    <tr>
                        <th>Skill 3</th>
                        <td>{candidate.skill3}</td>
                    </tr>
                    <tr>
                        <th>Proficient Languages</th>
                        <td>{candidate.languages}</td>
                    </tr>
                    <tr>
                        <th>LinkedIn</th>
                        <td>{candidate.linkedin}</td>
                    </tr>
                    <tr>
                        <th>Others</th>
                        <td>{candidate.others}</td>
                    </tr>
                    <tr>
                        <th>Stage 1</th>
                        <td>{candidate.stage1 && candidate.stage1.map((ele)=>{
                            return ele.title+" : "+ele.status
                        })}</td>
                        <td>
                        <select onChange={handleOnChange} name="stage1" >
                            <option value="actual value 1">Not Reviewed</option>
                            <option value="actual value 1">Selected</option>
                            <option value="actual value 2">Rejected</option>
                            <option value="actual value 3">Pending</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th>Stage 2</th>
                        <td>{candidate.stage2 && candidate.stage2.map((ele)=>{
                            return ele.title+" : "+ele.status
                        })}</td>
                        <td>
                        <select onChange={handleOnChange} name="stage2">
                            <option value="actual value 1">Not Reviewed</option>
                            <option value="actual value 1">Selected</option>
                            <option value="actual value 2">Rejected</option>
                            <option value="actual value 3">Pending</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th>Stage 3</th>
                        <td>{candidate.stage3 && candidate.stage3.map((ele)=>{
                            return ele.title+" : "+ele.status
                        })}</td>
                        <td>
                        <select onChange={handleOnChange} name="stage3" >
                            <option value="actual value 1">Not Reviewed</option>
                            <option value="actual value 1">Selected</option>
                            <option value="actual value 2">Rejected</option>
                            <option value="actual value 3">Pending</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th>Final Status</th>
                        <td>{candidate.status}</td>
                        <td>
                        <select onChange={handleOnChange} name="status" >
                            <option value="actual value 1">Not Reviewed</option>
                            <option value="actual value 2">Selected</option>
                            <option value="actual value 2">Rejected</option>
                            <option value="actual value 3">Pending</option>
                            </select>
                        </td>
                    </tr>
                </table>
                {success && <Alert variant='success'>{success}</Alert>}
                {error && <Alert variant='danger'>{error}</Alert>}
                </Col>
                
            </Row>
            
        </Container>
        </div>
    )
} 