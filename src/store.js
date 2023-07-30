import {configureStore} from '@reduxjs/toolkit';
import ticketsReducer from './component/ticket-list/ticketSlice';
import loginReducer from "./component/login/loginSlice";
import userReducer from './page/dashboard/userSlice';
import newTicketReducer from './component/add-ticket-form/addTicketSlicer'

const store=configureStore({
    reducer:{
        tickets:ticketsReducer,
        login:loginReducer,
        user:userReducer,
        openTicket:newTicketReducer,
    },
});
export default store;