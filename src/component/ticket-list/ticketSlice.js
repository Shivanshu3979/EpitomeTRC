import {createSlice} from '@reduxjs/toolkit';

const initialState={
    tickets:[],
    isLoading:false,
    error:'',
    searchTicketList:[],
    replyMsg:""
}

const ticketListSlice = createSlice({
    name: 'ticketList',
    initialState,
    reducers: {
      fetchTicketLoading: (state) => {
        state.isLoading = true;
      },
      fetchTicketSuccess: (state, action) => {
        state.tickets = action.payload;
        state.isLoading = false;
        state.searchTicketList=state.tickets
      },
      fetchTicketFail: (state, { payload }) => { // Fix the parameter name here
        state.isLoading = false;
        state.error = payload;
      },
      replyTicketLoading: (state) => {
        state.isLoading = true;
      },
      replyTicketSuccess: (state,{payload}) => {
        state.error="";
        state.isLoading = false;
        state.replyMsg=payload;
      },
      replyTicketSucceed: (state) => {
        state.error="";
        state.isLoading = false;
        state.replyMsg="";
      },

      replyTicketFail: (state, { payload }) => { // Fix the parameter name here
        state.isLoading = false;
        state.error = payload;
      },
      closeTicketLoading: (state) => {
        state.isLoading = true;
      },
      closeTicketSuccess: (state,{payload}) => {
        state.error="";
        state.isLoading = false;
        state.replyMsg=payload;
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
      searchTickets: (state, { payload }) => {
        state.searchTicketList = state.tickets.filter((row) => {
          if (!payload) return row;
          return row.subject.toLowerCase().includes(payload.toLowerCase());
        });
      }
    }
  });
  

const {reducer,actions}=ticketListSlice;

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
    searchTickets,} = actions;

export default reducer