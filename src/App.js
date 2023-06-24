import React from "react";

import { Entry } from './page/entry/entry.page';
import {DefaultLayout} from './component/layout/DefaultLayout';

function App() {
  return (
    <div className="App">
      <DefaultLayout>
          <Entry/>
      </DefaultLayout>
      {/*<Entry/>*/}
    </div>
  );
}

export default App;
