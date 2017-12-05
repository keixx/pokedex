import React, { Component } from 'react';
import request from 'superagent';
import notes from '../img/banner.png';
import notes2 from '../img/banner 2.png';
import '../App.css';

class Notes extends Component {
  render() {
    return (
    	<div className="row3">
        <img src={notes} className="pikanotes" alt="logo" />
        <center><legend>Write Some Notes</legend>
        <textarea name="message" rows="12" cols="45" className="notes" />
        <button type="button" className="save">Save</button> </center>
        <img src={notes2} className="pikanotes" alt="logo" />
      </div>
 	  )
  }
}

export default Notes
