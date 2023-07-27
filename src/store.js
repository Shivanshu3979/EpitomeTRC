import {configureStore} from '@reduxjs/toolkit';
import ticketsReducer from './component/ticket-list/ticketSlice';
import loginReducer from "./component/login/loginSlice";
import userReducer from './page/dashboard/userSlice';

const store=configureStore({
    reducer:{
        tickets:ticketsReducer,
        login:loginReducer,
        user:userReducer,
    },
});
export default store;