import { ADDTASK } from './tasks.types';


const INITIAL_STATE = {
    tasksList: (localStorage.getItem("tasksList")) ? JSON.parse(localStorage.getItem("tasksList")) : []
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADDTASK:
            let task = {
                id: state.tasksList.length + 1,
                priority: action.payload.priority,
                taskDetails: action.payload.taskDetails,
                taskName: action.payload.taskName,
                status: "New"
            } 
            state.tasksList.push(task)
            localStorage.setItem('tasksList', JSON.stringify(state.tasksList));
            return {
                ...state, taskList: state.tasksList,
            };
        default: return state;
    }
};

export default reducer;