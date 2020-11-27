import logo from './logo.svg';
import './App.css';
import React from "react";

class App extends React.Component{
  url = "http://bridgelabz.com"
  constructor(){
    super();
    this.state = {
      title: "hello form bridgelabz"
    }
  }

  onClick = ($event)=>{
    console.log("save button is clicked:");
    window.open(this.url,"_blank");
  }

  render() {
    return <div>
        <h1>{this.state.title}</h1>
        <img onClick={this.onClick} src={logo} alt="The BridgeLabz logo: a Bridge to Employment through lab works"></img>
    </div>
  }
}

export default App;
