import { increment } from "../../domain";

import { updateCounterUseCase } from "./updateCounterUseCase";
import type { UpdateCounterStore } from "./updateCounterUseCase";

const incrementCounterUseCase = (store: UpdateCounterStore) => { 
    return updateCounterUseCase(store, increment)
}

export { incrementCounterUseCase }