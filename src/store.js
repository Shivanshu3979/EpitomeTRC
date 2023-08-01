import {configureStore} from '@reduxjs/toolkit';
import ticketsReducer from './component/ticket-list/ticketSlice';
import loginReducer from "./component/login/loginSlice";
import userReducer from './page/dashboard/userSlice';
import newTicketReducer from './component/add-ticket-form/addTicketSlicer'
import registrationReducer from "./component/registration-form/userRegestrationSlice";
import passwordReducer from "./component/password-reset/passwordSlice";
import hiringReducer from "./component/hiring-list/hiringtSlice";

const store=configureStore({
    reducer:{
        tickets:ticketsReducer,
        login:loginReducer,
        user:userReducer,
        openTicket:newTicketReducer,
        registration: registrationReducer,
		password: passwordReducer,
        hiring:hiringReducer,
    },
});
export default store;