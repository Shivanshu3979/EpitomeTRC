
import { 
    fetchTicketLoading,
    fetchTicketSuccess,
    fetchTicketFail, 
    searchTickets,
    replyTicketFail,
    replyTicketLoading,
    replyTicketSuccess,
    closeTicketLoading,
    closeTicketFail,
    closeTicketSuccess,
    fetchSingleTicketLoading,
    fetchSingleTicketSuccess,
    fetchSingleTicketFail
 } from "./ticketSlice"

import {closeTicket, getAlltickets, getSingleTicket, updateReplyTicket} from "../../api/ticketAPI";

export const fetchAllTickets=()=>async(dispatch)=>{
    dispatch(fetchTicketLoading());
    try {
        const result=await getAlltickets();
        dispatch(fetchTicketSuccess(result.data.result));
    } catch (error) {
        dispatch(fetchTicketFail(error))
    }
}

export const fetchSingleTicket = (_id) => async (dispatch) => {
    dispatch(fetchSingleTicketLoading());
    try {
      const result = await getSingleTicket(_id);
      dispatch(
        fetchSingleTicketSuccess(
          result.data.result.length && result.data.result[0]
        )
      );
    } catch (error) {
      dispatch(fetchSingleTicketFail(error.message));
    }
  };

export const filterSearchTicket=(str)=>(dispatch)=>{
    dispatch(searchTickets(str));
}

export const replyOnTicket=(_id,msg)=>async(dispatch)=>{
    dispatch(replyTicketLoading);
    try {
        const result=await updateReplyTicket(_id,msg);
        dispatch(fetchSingleTicket(_id));
        dispatch(replyTicketSuccess(result.status));
    } catch (error) {
        dispatch(replyTicketFail(error.message));
    }
}

export const helperCloseTicket=(_id)=>async(dispatch)=>{
    dispatch(closeTicketLoading());
    try {
        const result=await closeTicket(_id);
        if(result.status==="error"){
            return dispatch(closeTicketFail(result.message));
        }
        dispatch(fetchSingleTicket(_id));
        dispatch(closeTicketSuccess(result.status));
    } catch (error) {
        dispatch(closeTicketFail(error.message));
    }
}
