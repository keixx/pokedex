import React, { Component } from 'react';
import request from 'superagent';
import notes from '../img/notes.png';
import '../App.css';

class Notes extends Component {
  render() {
    return (
    	<div className="row3">
        <img src={notes} className="pikanotes" alt="logo" />
        <textarea name="message" rows="13" cols="45" className="notes" />
        <button type="button" className="save">Save</button> 
      </div>
 	  )
  }
}

export default Notes
