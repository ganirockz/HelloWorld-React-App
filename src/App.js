import logo from './assets/logo.jpg';
import './App.css';
import App2 from './App2';
import React from "react";

class App extends React.Component{
  url = "http://bridgelabz.com/"
  constructor(){
    super()
    this.state = {
      userName:""
    }
  }

  onClick = ($event) => {
    console.log("save button is clicked!", $event);
    window.open(this.url,"_blank");
  }

  onNameChange = (event) => {
    console.log("Name is changed");
    let name = even.target.value;
    let nameRegex = RegExp("[A-Z]{1}[a-zA-Z]{2,}");
    if(nameRegex.test(name)){
    this.setState({userName: name});}
    
  }

  render() {
    return <div>
      <div>
      <h1>Hello {this.state.userName} from bridgelabz</h1>
      <img src={logo} onClick={this.onClick} alt="hello"></img>
      </div>
      <div className="text-box">
          <input onChange={this.onNameChange} />
          <output-error id="name-error"></output-error>
      </div>
    </div>
  }
}

export default App;
