export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const MEMORY_SET = "MEMORY_SET";
export const APPLY_MEMORY = "APPLY_MEMORY";
export const MEMORY_RESET = "MEMORY_RESET";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operation) => {
    return({type:CHANGE_OPERATION, payload:operation})
}

// memory actions
export const memorySet = () => {
    return({type:MEMORY_SET});
}

export const applyMemory = () => {
    return({type:APPLY_MEMORY});
}

export const memoryReset = () => {
    return({type:MEMORY_RESET});
}