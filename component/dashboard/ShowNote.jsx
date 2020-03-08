import React, { Component } from "react";
import Displaynotes from "../display/Displayallnotes";
import "../cssFile/Displaynotes.css";
import {Redirect} from 'react-router-dom'
export class ShowNote extends Component {
  constructor(props) {
    super(props);
    let token = localStorage.getItem("token");
    console.log("token",token)
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    this.state = {
      open: false,
      more: false,
      loggedIn
    };

  }

  render() {
      
    if (this.state.loggedIn === false) {

      return <Redirect to="/"/>  }
    

    return (
      <div>
     <Displaynotes/>
      </div>
    );
  }
}

export default ShowNote;