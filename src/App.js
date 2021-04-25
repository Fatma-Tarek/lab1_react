import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      initCount: 15
    }
  }

  setInitCount=(value)=>{
    this.setState({initCount:value})
  }

  render() {
    return (
      <div className="App">
        <Counter2 initCount={this.state.initCount} changeInitCount={this.setInitCount} />
        <div>{this.state.initCount}</div>
        <h2>Employee</h2>
        <Employee />
      </div>
    );
  }
}

class Counter2 extends React.Component {
  constructor(props) {
    super();
    this.state = {
      count: props.initCount
    }
  }
  changeCount = (op) => {
    if (op == "+")
      this.setState({ count: this.state.count + 1 });
    else if (op == "-")
      this.setState({ count: this.state.count - 1 });

    //this.props.initCount = 18;
    this.props.changeInitCount(15);
    
  }

  changeCountFromChild =()=>{
    this.props.changeInitCount(this.state.count);
  }

  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={() => this.changeCount("+")}>Increase</button>
        <button onClick={() => this.changeCount("-")}>Increase</button>
        <button onClick={this.changeCountFromChild}>set</button>
        {/* <button onClick={() => this.changeCountFromChild()}>set</button> */}
      </div>
    );
  }
}

class Employee extends React.Component {

    employee = {
      "id":1,
      "jobTitleName":"Developer",
      "firstName":"Ahmed",
      "lastName":"Ali",
      "preferredFullName":"Ahmed Ali",
      "employeeCode":"E1",
      "region":"CA",
      "phoneNumber":"408-1234567",  
      "emailAddress":"ahmed.ali@gmail.com"

    }
    render() {
      return (
        <div >
          <div>id: {this.employee.id}</div>
          <div>jobTitleName: {this.employee.jobTitleName}</div>
          <div>firstName: {this.employee.firstName}</div>
          <div>lastName: {this.employee.lastName}</div>
          <div>preferredFullName: {this.employee.preferredFullName}</div>
          <div>employeeCode: {this.employee.employeeCode}</div>
          <div>region:  {this.employee.region}</div>
          <div>phoneNumber:  {this.employee.phoneNumber}</div>
          <div>emailAddress:  {this.employee.emailAddress}</div>
          <h2>Another way to display object</h2>
          <p> {JSON.stringify(this.employee)}</p>

          
        </div>
      );
    }
   
}

export default App;
