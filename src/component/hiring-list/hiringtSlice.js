import {createSlice} from '@reduxjs/toolkit';

const initialState={
    candidates:[],
    isLoading:false,
    error:'',
    success:'',
    searchCandidateList:[],
    stage1:"", stage2:"", stage3:"",status:""
}

const hiringListSlice = createSlice({
    name: 'ticketList',
    initialState,
    reducers: {
      fetchTicketLoading: (state) => {
        state.isLoading = true;
      },
      fetchTicketSuccess: (state, action) => {
        state.candidates = action.payload;
        state.isLoading = false;
        state.searchCandidateList=state.candidates
      },
      fetchTicketFail: (state, { payload }) => { // Fix the parameter name here
        state.isLoading = false;
        state.error = payload;
      },
      closeTicketLoading: (state) => {
        state.isLoading = true;
      },
      closeTicketSuccess: (state,{payload}) => {
        state.error="";
        state.isLoading = false;
        state.success=payload;
      },
      closeTicketFail: (state, { payload }) => { // Fix the parameter name here
        state.isLoading = false;
        state.error = payload;
      },

      fetchSingleTicketLoading: (state) => {
        state.isLoading = true;
      },
      fetchSingleTicketSuccess: (state, { payload }) => {
        state.selectedTicket = payload;
        state.isLoading = false;
        state.error = "";
      },
      fetchSingleTicketFail: (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      },
      setStagesSuccess:(state,{payload})=>{
        state.error="";
        state.isLoading=false;
        state.stage1=payload.stage1[0].status;
        state.stage2=payload.stage2[0].status;
        state.stage3=payload.stage3[0].status;
        state.status=payload.status;
      },
      setStagesLoading:(state)=>{
        state.isLoading=true;
        state.error="";
      },
      setStagesFail:(state,{payload})=>{
        state.error=payload;
        state.isLoading=false;
        state.stage1="";
        state.stage2="";
        state.stage3="";
        state.status="";
      },
      searchTicket: (state, { payload }) => {
        state.searchCandidateList = state.candidates.filter((row) => {
          if (!payload) return row;
          return row[payload.type].toLowerCase().includes(payload.value.toLowerCase());
        });
      }
    }
  });
  

const {reducer,actions}=hiringListSlice;

export const {
    fetchTicketLoading,
    fetchTicketSuccess,
    fetchTicketFail,
    replyTicketFail,
    replyTicketLoading,
    replyTicketSuccess,
    replyTicketSucceed,
    closeTicketFail,
    closeTicketLoading,
    closeTicketSuccess,
    fetchSingleTicketLoading,
    fetchSingleTicketSuccess,
    fetchSingleTicketFail,
    searchTicket,
    setStagesSuccess,
    setStagesLoading,
    setStagesFail,} = actions;

export default reducer