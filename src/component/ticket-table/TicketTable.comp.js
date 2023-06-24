import React from 'react'
import {Table} from 'react-bootstrap'
export const TicketTable=({tickets})=>{
    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Subject</th>
                    <th>Status</th>
                    <th>Opened Date</th>
                </tr>
            </thead>
            <tbody>
                {tickets.length ? tickets.map(row=>(
                <tr key={row.id}>
                    <th>{row.id}</th>
                    <th>{row.subject}</th>
                    <th>{row.status}</th>
                    <th>{row.addedAt}</th>
                </tr>)) : (
                <tr>
                    <td colSpan={4} className='text-center'>No tickets to show</td>
                </tr>
                )}
            </tbody>
        </Table>
    )
}