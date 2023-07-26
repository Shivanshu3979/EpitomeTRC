import {configureStore} from '@reduxjs/toolkit';
import ticketsReducer from './component/ticket-list/ticketSlice';

const store=configureStore({
    reducer:{
        tickets:ticketsReducer,
    },
});
export default store;