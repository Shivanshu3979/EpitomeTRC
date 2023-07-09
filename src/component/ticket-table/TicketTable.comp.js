import React from 'react'
import {Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'
export const TicketTable=({tickets})=>{
    if(tickets.length)
    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Customer Name</th>
                    <th>Customer Email</th>
                    <th>Subject</th>
                    <th>Description</th>
                    <th>assignedTo</th>
                    <th>Status</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                </tr>
            </thead>
            <tbody>
                {tickets.length ? tickets.map(row=>(
                <tr key={row.id}>
                    <td>{row.id}</td>
                    <td><Link to={`/ticket/${row.id}`}>{row.subject}</Link></td>
                    <td>{row.customerName}</td>
                    <td>{row.customerEmail}</td>
                    <td>{row.description}</td>
                    <td>{row.assignedTo}</td>
                    <td>{row.status}</td>
                    <td>{row.createdAt}</td>
                    <td>{row.updatedAt}</td>
                </tr>)) : (
                <tr>
                    <td colSpan={4} className='text-center'>No tickets to show</td>
                </tr>
                )}
            </tbody>
        </Table>
    )
}