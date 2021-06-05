import {Component} from 'react';


class TaskForm extends Component {
  constructor () {
    super()
    this.state = {
      task: {
        id: 0,
        priority: "",
        taskName: "",
        taskDetails: "",
        status: ""
      }
    };
  }
  render () {
    return (
      <div className="App">
        Hello python
      </div>
    )
  }
}

export default TaskForm;
