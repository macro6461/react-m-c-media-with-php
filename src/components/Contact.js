import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import {
  // BrowserRouter as Router,
  // Link,
  // Route,
  // Switch,
} from 'react-router-dom';
import $ from 'jquery';
// import './index.php';
class Contact extends Component {

  state = {
    contactName: "",
    contactEmail: "",
    contactMessage:""
  }

  componentDidMount = () => {

  }

  handleEmailChange = (event) => {
    this.setState({contactEmail: event.target.value})
  }

  handleNameChange = (event) => {
    this.setState({contactName: event.target.value})
  }

  handleMessageChange = (event) =>{
    this.setState({contactMessage: event.target.value})
  }

    handleSubmit = (event) => {
    //   event.preventDefault()
    //   $(".inquery-form .button").click(function() {
    //     var data = {
    //         name: $("#form_name").val(),
    //         email: $("#form_email").val(),
    //         message: $("#msg_text").val()
    //     };
    // $.ajax({
    //     type: "POST",
    //     url: "index.php",
    //     data: data,
    //     success: function(){
    //         $('.success').fadeIn(1000);
    //     }
    // });
    //
    //     return false;
    //   });
    }

      resetForm(){
        document.getElementsByClassName('inquery-form')[0].reset();
      }

  render() {
    return (
      <div>
        <h1>Contact</h1>
        <form className="inquery-form" onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input type="text" id="name" name="name" required onChange={this.handleNameChange}/>
          <br/>
          <br/>
          <label>Email:</label>
          <input type="email" id="email" name="email" required onChange={this.handleEmailChange}/>
          <br/>
          <br/>
          <label>Message:</label><br/>
          <textarea className="inquery-message" type="text" id="message" name="message" required onChange={this.handleMessageChange}/>
          <br/><br/>
          <button className="button" name="submit" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Contact;
