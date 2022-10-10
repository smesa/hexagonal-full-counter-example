import React from "react";
import { Provider } from "react-redux";
import { CounterView } from "../../../../public/counter";
import { appStoreImplementation } from "../../data/store";

function AppView() {
    return (
      <Provider store={appStoreImplementation}>
        <CounterView />
      </Provider>
    );
  }
  
  export default AppView;