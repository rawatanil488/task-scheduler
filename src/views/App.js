import {Component} from 'react';
import {Button, Card} from 'react-bootstrap';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class App extends Component {
  constructor () {
    super()
    this.state = {
      tasksList: [],
      task: {
        id: 0,
        priority: "",
        taskName: "",
        taskDetails: "",
        status: ""
      }
    };
  }
  addTask () {
  }
  render () {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Task Manager</h1>
        </div>
        <div className="App-body">
          <div className="d-flex justify-content-end align-items-center p-2">
            <Button className="btn btn-primary" onClick={this.addTask}>
              <FontAwesomeIcon icon={faPlus} /> Add Task
            </Button>
          </div>
          <div>
            <Card></Card>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
