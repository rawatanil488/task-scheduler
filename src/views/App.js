import { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from 'react-redux';

class App extends Component {
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
        <div className="p-2">
          {this.props.tasksList.map((ele, index) => {
            return <Card
              key={ele.id}
              className="p-3 mb-3"
              bg={(ele.priority==="low")?"warning": (ele.priority==="high")?"danger":"success"}
              text="white"
            >
              <div className="row">
                <div className="col-md-10">
                  <Card.Title>{ele.taskName}</Card.Title>
                </div>
                <div className="col-md-2">
                  Status - {ele.status}
                </div>
              </div>
              <Card.Text>{ele.taskDetails}</Card.Text>
            </Card>
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tasksList: state.tasks.tasksList
  }
}

export default connect(mapStateToProps)(App);
