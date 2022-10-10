import React from "react";

import type { CounterStore } from "../../domain/store";
import { decrementCounterUseCase, getCounterUseCase, incrementCounterUseCase } from "../usecases";

function useCounterViewModel(store: CounterStore) {

    const getCounter = React.useCallback(
      function () {
        getCounterUseCase({
          loadInitialCounter: store.loadInitialCounter
        });
      },
      [store.loadInitialCounter]
    );
  
    const incrementCounter = React.useCallback(
      function () {
        incrementCounterUseCase({
          counter: store.counter,
          updateCounter: store.updateCounter,
          setCounter: store.setCounter
        });
      },
      [store.counter, store.updateCounter, store.setCounter]
    );
  
    const decrementCounter = React.useCallback(
      function () {
        decrementCounterUseCase({
          counter: store.counter,
          updateCounter: store.updateCounter,
          setCounter: store.setCounter
        });
      },
      [store.counter, store.updateCounter, store.setCounter]
    );
  
    return {
      count: store.counter?.value,
      isLoading: typeof store.counter === "undefined" || store.isLoading,
      canDecrement: store.counter?.value === 0,
      getCounter,
      incrementCounter,
      decrementCounter
    };
    
  }
  
  export { useCounterViewModel };