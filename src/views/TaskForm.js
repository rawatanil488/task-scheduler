import { Component } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from 'react-redux';

class TaskForm extends Component {
  constructor () {
    super()
    this.state = {
      priorities: [
        {label: "Low", value: "low"},
        {label: "Medium", value: "medium"},
        {label: "High", value: "high"}     
      ],
      priority: "low",
      taskName: "",
      taskDetails: ""
    };
  }
  addTask () {
    const task = {
      priority: this.state.priority,
      taskName: this.state.taskName,
      taskDetails: this.state.taskDetails
    }
    this.props.addTask(task)
    this.props.history.push("/");
  }
  render () {
    return (
      <div className="App-body p-3">
        <Card className="p-4">
          <div className="form-group">
            <label>Task Name</label>
            <input
              className="form-control"
              type="text"
              placeholder="Name"
              value={this.state.taskName}
              onChange={(event) => this.setState({ taskName: event.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Priority</label>
            <Form.Control
              as="select"
              custom
              value={this.state.priority} 
              onChange={(event) => this.setState({ priority: event.target.value})}
            >
              {this.state.priorities.map(({ value, label }, index) => <option value={value} key={index}>{label}</option>)}
            </Form.Control>
          </div>
          <div className="form-group ">
            <label>Details</label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Details"
              name="Details"
              value={this.state.taskDetails}
              onChange={(event) => this.setState({ taskDetails: event.target.value })}
            />
          </div>
          <Button type="submit" className="btn btn-primary" onClick={() => this.addTask()}>
            <FontAwesomeIcon icon={faPlus} /> Add Task
          </Button>
        </Card>        
      </div>
    )
  }
}

const dispatchToProps = (dispatch) => {
  return {
    addTask: (task) => {
      dispatch({
        type: "ADDTASK",
        payload: task
      })
    }
  }
}

export default connect(null, dispatchToProps)(TaskForm);
