import logo from './logo.svg';
import './App.css';
import React from "react";

class App extends React.Component{
  url = "http://bridgelabz.com"
  constructor(){
    super();
    this.state = {
      userName: "",
      nameError: ""
    }
  }

  onClick = ($event)=>{
    console.log("save button is clicked:");
    window.open(this.url,"_blank");
  }
  
  onNameChange = (event)=>{
    console.log("value is ", event.target.value);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    this.setState({ userName: event.target.value})
    if(nameRegex.test(event.target.value)){
      this.setState({nameError:''})
    }else{
      this.setState({nameError: 'Name is Incorrect'})
    }
  }

  render() {
    return <div> 
      <div>
        <h1> Hello {this.state.userName} from BridgeLabz</h1>
        <img onClick={this.onClick} src={logo} alt="The BridgeLabz logo: a Bridge to Employment through lab works"></img>
      </div>
      <div>
        <input onChange={this.onNameChange} />
        <span className="error-output">{this.state.nameError}</span>
      </div>
    </div>
  }
}

export default App;
