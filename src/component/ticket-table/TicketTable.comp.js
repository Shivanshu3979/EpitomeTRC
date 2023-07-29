import React from 'react'
import {useSelector } from 'react-redux';
import {Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'
export const TicketTable=()=>{
    const {searchTicketList, isLoading, error}=useSelector(state=>state.tickets);
    if(isLoading) return <h3>Loading...</h3>;
    if(error) return <h3>{error}</h3>;
    if(searchTicketList.length)
    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Subject</th>
                    <th>Customer Name</th>
                    <th>Customer Email</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                </tr>
            </thead>
            <tbody>
                {searchTicketList.length ? searchTicketList.map(row=>(
                <tr key={row._id}>
                    <td>{row._id}</td>
                    <td><Link to={`/ticket/${row._id}`}>{row.subject}</Link></td>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>{row.conversations[0].message}</td>
                    <td>{row.status}</td>
                    <td>{new Date(row.openAt).toLocaleString()}</td>
                    <td>{new Date(row.updatedAt).toLocaleString()}</td>
                </tr>)) : (
                <tr>
                    <td colSpan={4} className='text-center'>No tickets to show</td>
                </tr>
                )}
            </tbody>
        </Table>
    )
}