import { addNewTicket } from "../../api/ticketAPI";
import { 
    openNewTicketFail,
    openNewTicketPending,
    openNewTicketSuccess } from "./addTicketSlicer";

export const openNewTicket=(frmData)=>dispatch=>{
    return new Promise(async (resolve,reject)=>{
        try {
            dispatch(openNewTicketPending())

            const result=await addNewTicket(frmData);
            dispatch(openNewTicketSuccess(result.message));
        } catch (error) {
            console.log(error);
            dispatch(openNewTicketFail(error.message));

        }
    })
}