import {withRouter} from 'react-router-dom';
import {Component} from 'react';
import {Button, Card} from 'react-bootstrap';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class App extends Component {
  constructor (props) {
    super(props)
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
  nextPath(path) {
    this.props.history.push(path);
  }
  render () {
    return (
      <div className="App-body">
        <div className="d-flex justify-content-end align-items-center p-2">
          <Button className="btn btn-primary" onClick={() => this.nextPath('/addTask')}>
            <FontAwesomeIcon icon={faPlus} /> Add Task
          </Button>
        </div>
        <div>
          <Card></Card>
        </div>
      </div>
    )
  }
}

export default withRouter(App);
