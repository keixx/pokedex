import React, { Component } from 'react';
import '../App.css';
import notes from '../img/banner.png';
import notes2 from '../img/banner 2.png';

class Search extends Component {
  render() {
    return (
    	<div className="row1">
          <img src={notes} className="pikanotes" alt="logo" />
          <hr /> <hr /> <hr /> <hr /> <hr /> <hr /> <hr />
            <center>
                <input type="text" placeholder="name of pokemon"  onChange={this.props.handleChange} />
                <button onClick={this.props.handleSearch} > Search </button>
            </center>
          <hr /> <hr /> <hr /> <hr /> <hr /> <hr /> <hr />
          <img src={notes2} className="pikanotes" alt="logo" />
      </div>
 	)
  }
}

export default Search;
