import React from "react";

import { Entry } from './page/entry/entry.page';
import {DefaultLayout} from './component/layout/DefaultLayout';
import { Dashboard } from "./page/dashboard/Dashboard.page";
import { AddTicket } from "./page/new-ticket/AddTicket.page";
import { TicketLists } from "./component/ticket-list/TicketLists.page";
function App() {
  return (
    <div className="App">
      <DefaultLayout>
          {/*<Dashboard/>*/}
          {/*<AddTicket/>*/}
          <TicketLists/>
      </DefaultLayout>
      {/*<Entry/>*/}
    </div>
  );
}

export default App;
