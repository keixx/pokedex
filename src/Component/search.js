import React, { Component } from 'react';
import request from 'superagent';
import '../App.css';

class search extends Component {
  render() {
    return (
    	<div className="row1">
            <center>
                <input type="text" placeholder="name of pokemon"  onChange={this.props.handleChange} />
                <input type="submit" name="submit" value="search" onClick={this.props.handleSearch} />
            </center>
         </div>
 	)
  }
}


export default search;
