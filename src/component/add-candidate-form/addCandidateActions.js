import { addNewCandidates } from "../../api/hiringAPI";
import { 
    openNewTicketFail,
    openNewTicketPending,
    openNewTicketSuccess } from "./addCandidateSlicer";

export const openNewTicket=(frmData)=>dispatch=>{
    return new Promise(async (resolve,reject)=>{
        try {
            dispatch(openNewTicketPending())

            const result=await addNewCandidates(frmData);
            dispatch(openNewTicketSuccess(result.message));
        } catch (error) {
            console.log(error);
            dispatch(openNewTicketFail(error.message));

        }
    })
}