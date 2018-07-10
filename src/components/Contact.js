import React, { Component } from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import $ from 'jquery';

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

    debugger

    event.preventDefault();
    this.setState({ type: 'info', message: 'Sending…' });



    $.ajax({

    url: './index.php',
    type: 'POST',
    data: {
    "form_name": this.state.contactName,
    "form_email": this.state.contactEmail,
    "form_msg": this.state.contactMessage
    },
    cache: false,
    success: function(data) {

    // Success..
    this.setState({ type: 'success', message: 'We have received your message and will get in touch shortly. Thanks!' });

    }.bind(this),

    error: function(xhr, status, err) {
    this.setState({ type: 'danger', message: 'Sorry, there has been an error.  Please try again later or visit us at SZB 438.' });
    }.bind(this)

    });

}

  render() {
    return (
      <div>
        <h1>Contact</h1>
        <form className="inquery-form" method="POST" action="index.php" onSubmit={this.handleSubmit}>
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
          <input className="button" name="submit" type="submit" value="Send"/>
        </form>
      </div>
    );
  }
}

export default Contact;
