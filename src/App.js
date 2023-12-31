import React from "react";
import { Link, BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

import { Entry } from "./page/entry/entry.page";
import { DefaultLayout } from "./component/layout/DefaultLayout";
import { Dashboard } from "./page/dashboard/Dashboard.page";
import { AddTicket } from "./page/new-ticket/AddTicket.page";
import { TicketLists } from "./component/ticket-list/TicketLists.page";
import { Ticket } from "./page/ticket/Ticket.page";
import { PrivateRoute } from "./component/private-route/PrivateRoute.comp";
import { PasswordOtpForm } from "./component/login/passwordOTPForm.page";
import { Registration } from "./page/registration/registration.form";
import { HiringLists } from "./component/hiring-list/HiringLists.page";
import { AddCandidate } from "./page/new-Candidate/AddCandidate.page";
import { Candidate } from "./page/candidate/Candidate.page";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Entry />} />
          <Route path="/Register" element={<Registration />} />
          <Route path="/password-reset" element={<PasswordOtpForm />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/hiring" element={<HiringLists /> /*todo*/} />
            <Route path="/hirings/:tid" element={<Candidate /> /*todo*/} />
            <Route path="/add-candidate" element={<AddCandidate /> /*todo*/} />
            <Route path="/add-ticket" element={<AddTicket />} />
            <Route path="/tickets" element={<TicketLists />} />
            <Route path="/ticket/:tid" element={<Ticket />} />
            <Route element={<Outlet />} /> 
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
