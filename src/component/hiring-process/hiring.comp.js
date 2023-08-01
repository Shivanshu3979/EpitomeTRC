import React from 'react'
import {useSelector } from 'react-redux';
import {Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'
export const HiringTable=()=>{
    const {searchCandidateList, isLoading, error}=useSelector(state=>state.hiring);
    if(isLoading) return <h3>Loading...</h3>;
    if(error) return <h3>{error}</h3>;
    if(searchCandidateList.length)
    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Role Applied</th>
                    <th>Email</th>
                    <th>Stage 1</th>
                    <th>Stage 2</th>
                    <th>Stage 3</th>
                    <th>Status of Selection</th>
                </tr>
            </thead>
            <tbody>
                {searchCandidateList.length ? searchCandidateList.map(row=>(
                <tr key={row._id}>
                    <td>{row._id}</td>
                    <td><Link to={`/hirings/${row._id}`}>{row.name}</Link></td>
                    <td>{row.roleApplied}</td>
                    <td>{row.email}</td>
                    
                    <td>{row.stage1 &&row.stage1.map((ele)=>{
                        return ele.title+" : "+ele.status
                    })}</td>
                    <td>{row.stage2 && row.stage2.map((ele)=>{
                        return ele.title+" : "+ele.status
                    })}</td>
                    <td>{row.stage3 && row.stage3.map((ele)=>{
                        return ele.title+" : "+ele.status
                    })}</td>
                    <td>{row.status}</td>
                </tr>)) : (
                <tr>
                    <td colSpan={4} className='text-center'>No tickets to show</td>
                </tr>
                )}
            </tbody>
        </Table>
    )
}