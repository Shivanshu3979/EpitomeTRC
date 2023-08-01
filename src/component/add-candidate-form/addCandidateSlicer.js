import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoading:false,
    error:'',
    successMsg:'',
    succeed:false
}
const newTicketSlice=createSlice({
    name:"New Ticket",
    initialState,
    reducers:{
        openNewTicketPending:(state)=>{
            state.isLoading=true
        },
        openNewTicketSuccess:(state,{payload})=>{
            state.isLoading=false;
            state.error="";
            state.successMsg=payload
        },
        openNewTicketSucceed:(state)=>{
            state.isLoading=false;
            state.error="";
            state.successMsg="";
            state.succeed=true;
        },
        openNewTicketFail:(state,{payload})=>{
            state.isLoading=true;
            state.error=payload;
        }
    }
})

export const {
    openNewTicketFail,
    openNewTicketPending,
    openNewTicketSuccess,
    openNewTicketSucceed}=newTicketSlice.actions
export default newTicketSlice.reducer;