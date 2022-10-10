import { decrement } from "../../domain";

import type { UpdateCounterStore } from "./updateCounterUseCase";
import { updateCounterUseCase } from "./updateCounterUseCase";

const decrementCounterUseCase = (store: UpdateCounterStore) => { 
    return updateCounterUseCase(store, decrement)
}

export { decrementCounterUseCase }