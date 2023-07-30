import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { replyOnTicket } from '../ticket-list/ticketAction';

export const UpdateTicket=({tid,status})=>{
    const dispatch=useDispatch();
    const {user:{name}} = useSelector(state=>state.user)
    const [message, setMessage]=useState('');
    const handleOnChange=(e)=>{
        e && setMessage(e.target.value);
    }
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        const msgObj={
            message,
            sender:name,
        }
        dispatch(replyOnTicket(tid,msgObj));
    }
    
    return(
        <div>
             
       
        <Form onSubmit={handleOnSubmit}>
            <Form.Label>Reply</Form.Label>
            <Form.Text>Please reply your message here or update the ticket</Form.Text>
            <Form.Control 
            as="textarea"
            onChange={handleOnChange}
            row="5" 
            name="detail"/>
            <div className='text-right mt-3 mb-3'>
                <Button variant="info" type="submit"
                disabled={status==="Closed"}>
                    Reply
                </Button>
            </div>
        </Form>
        </div>
    )
}

