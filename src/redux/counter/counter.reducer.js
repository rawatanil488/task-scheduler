import { ADDTASK } from './counter.types';


const INITIAL_STATE = {
    taskList: [],
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADDTASK:
            return {
                ...state, taskList: state.taskList.append(),
            };
        default: return state;
    }
};

export default reducer;