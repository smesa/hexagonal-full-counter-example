import React from "react";
import { Button, Spinner } from "../../../../../shared/infrastructure/ui/components";
import { useCounterViewModel } from "../../../application/controllers/counterViewModel";
import { useCounterStoreImplementation } from "../../store";
import { Count } from "../components";

const CounterView = () => {
    const store = useCounterStoreImplementation();
    const {
      count,
      canDecrement,
      isLoading,
      getCounter,
      incrementCounter,
      decrementCounter
    } = useCounterViewModel(store);
  
    React.useEffect(() => {
      getCounter();
    }, [getCounter]);
  
    return (
      <div className="App">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Button onClick={decrementCounter} disabled={!canDecrement}>
              dec
            </Button>
            <Count>{count}</Count>
            <Button disabled={!canDecrement} onClick={incrementCounter}>inc</Button>
          </>
        )}
      </div>
    );
  };
  
  export default CounterView;

