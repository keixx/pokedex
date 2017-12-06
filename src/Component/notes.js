import React, { Component } from 'react';
import request from 'superagent';

import top from '../img/banner.png';
import bottom from '../img/banner 2.png';
import '../App.css';



class Notes extends Component {



  render() {
      const { details, notes } = this.props
      const note = notes

      .filter((note) => {
        console.log ('comments',details, note)
        return details.id == note.id
      })
      // .map((msg, index) => <p key={index}>{msg.note}</p>)
      console.log(note)
    return (
    	<div className="row3">
        <img src={top} className="pikanotes" alt="logo" />
        <center><legend>Write Some Notes</legend>
        <textarea onChange={this.props.handleChange} name="message" rows="3" cols="40" className="note" value={this.props.note}/>
        <button onClick={this.props.handleSave} type="button" className="save">Save</button> 
          <div className="comment_box">
            {
              note.map((item, index) => {
                return <h4 key={index}>{item.notes}</h4>
              })
            }
          </div>
          </center>
        <img src={bottom} className="pikanotes1" alt="logo" />
      </div>
 	  )
  }
}

export default Notes
