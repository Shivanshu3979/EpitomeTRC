import React from 'react'
import {Table} from 'react-bootstrap'
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
                    <th>{row.id}</th>
                    <th>{row.customerName}</th>
                    <th>{row.customerEmail}</th>
                    <th>{row.subject}</th>
                    <th>{row.description}</th>
                    <th>{row.assignedTo}</th>
                    <th>{row.status}</th>
                    <th>{row.createdAt}</th>
                    <th>{row.updatedAt}</th>
                </tr>)) : (
                <tr>
                    <td colSpan={4} className='text-center'>No tickets to show</td>
                </tr>
                )}
            </tbody>
        </Table>
    )
}