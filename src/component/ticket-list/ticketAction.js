
import { 
    fetchTicketLoading,
    fetchTicketSuccess,
    fetchTicketFail, 
    searchTickets } from "./ticketSlice"

import {getAlltickets} from "../../api/ticketAPI";

export const fetchAllTickets=()=>async(dispatch)=>{
    dispatch(fetchTicketLoading());
    try {
        const result=await getAlltickets();
        dispatch(fetchTicketSuccess(result.data.result));
    } catch (error) {
        dispatch(fetchTicketFail(error))
    }
}

export const filterSearchTicket=(str)=>(dispatch)=>{
    dispatch(searchTickets(str));
}
