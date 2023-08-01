
import { 
    fetchTicketLoading,
    fetchTicketSuccess,
    fetchTicketFail, 
    searchTicket,
    replyTicketFail,
    replyTicketLoading,
    replyTicketSuccess,
    closeTicketLoading,
    closeTicketFail,
    closeTicketSuccess,
    fetchSingleTicketLoading,
    fetchSingleTicketSuccess,
    fetchSingleTicketFail,
    setStagesSuccess,
    setStagesLoading,
    setStagesFail,
 } from "./hiringtSlice"

import {closeCandidates, getAllCandidates, getSingleCandidates, updateStatusCandidates} from "../../api/hiringAPI";

export const setStageStatus=(_id,val,ele)=>async(dispatch)=>{
    dispatch(setStagesLoading);
    var single=""
    var stages=""
    try {
        single=await getSingleCandidates(_id);
        single=single.data.result[0];
        stages={
            stage1:single.stage1,
            stage2:single.stage2,
            stage3:single.stage3,
            status:single.status,
        }
        if(stages[ele][0].status){
            stages[ele][0].status=val;
        }
        else{
            stages.status=val
        }
    } catch (error) {
        dispatch(setStagesFail(error.message));
    }
    try {
        if(single.status!=="Closed"){
            const result=await updateStatusCandidates(_id,stages);
            dispatch(setStagesSuccess(stages));
        }
    } catch (error) {
        dispatch(setStagesFail(error.message));
    }
}
export const fetchAllTickets=()=>async(dispatch)=>{
    dispatch(fetchTicketLoading());
    try {
        const result=await getAllCandidates();
        dispatch(fetchTicketSuccess(result.data.result));
    } catch (error) {
        dispatch(fetchTicketFail(error))
    }
}

export const fetchSingleTicket = (_id) => async (dispatch) => {
    dispatch(fetchSingleTicketLoading());
    try {
      const result = await getSingleCandidates(_id);
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
    dispatch(searchTicket(str));
}



export const helperCloseTicket=(_id)=>async(dispatch)=>{
    dispatch(closeTicketLoading());
    try {
        const result=await closeCandidates(_id);
        if(result.status==="error"){
            return dispatch(closeTicketFail(result.message));
        }
        dispatch(fetchSingleTicket(_id));
        dispatch(closeTicketSuccess(result.message));
    } catch (error) {
        dispatch(closeTicketFail(error.message));
    }
}
