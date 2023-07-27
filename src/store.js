import {configureStore} from '@reduxjs/toolkit';
import ticketsReducer from './component/ticket-list/ticketSlice';
import loginReducer from "./component/login/loginSlice";

const store=configureStore({
    reducer:{
        tickets:ticketsReducer,
        login:loginReducer,
    },
});
export default store;