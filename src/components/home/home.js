import React from "react"
import logo from '../../assets/bl.jpg';
import './home.css';

class Home extends React.Component{
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
    return <div className="app-main"> 
      <div className="main">
        <h1> Hello {this.state.userName} from BridgeLabz</h1>
        <img onClick={this.onClick} src={logo} alt="The BridgeLabz logo: a Bridge to Employment through lab works"></img>
      <div className="text-box">
        <input onChange={this.onNameChange} />
        <span className="error-output">{this.state.nameError}</span>
      </div>
      <div>
        At BridgeLabz we're a community of
      <ul>
        <div>technologists</div>
        <div>thinkers</div>
        <div>builders</div>
      </ul>
      Working together to keep the Tech Employability of Employeers alive....
      <br />
        <br />
      To Know about us.visit <a href="http://bridgelabz.com/" rel="noreferrer" target="_blank">BridgeLabz</a> to learn more about our mission
      i.e <b>Employability to all</b>
      </div>
      </div>
    </div>
  }
}

export default Home;