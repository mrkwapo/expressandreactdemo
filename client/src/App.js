import React, { Component } from 'react';  //add componets 
import AllUsers from './components/AllUsers';
import UserInfo from './components/UserInfo';
import UserRegistration from './components/UserRegistration';
import User from './components/User';
import NavBar from './components/NavBar';
import axios from 'axios';
import Footer from './components/Footer';

class App extends Component {

state = {
  pageView: ""
}


// state = {
// data : " ",
// allUsers: " "
// pageView: " "
// }

// getAllUsers = () => {
//   this.setState ({
//     allUsers: this.state.data
//   })
//   this.forceUpdate()
// }

// updateData = (newData) => {
//   this.setState({
//     data: newData
//   })
// }

render(){
  return (

<div id="app">

<div id="icon"></div>

   <div id ="title">
        <h2>CodeMentor Center</h2>
    </div> 
        


<NavBar />








      



   





</div>

  
);
}
}
export default App;
