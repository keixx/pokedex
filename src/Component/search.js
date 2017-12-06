import React, { Component } from 'react';
import '../App.css';

import top from '../img/banner.png';
import bottom from '../img/banner 2.png';



class Search extends Component {
  render() {
    return (
    	<div className="row1">
          <img src={top} className="pikanotes" alt="logo" />
          <hr /> <hr /> <hr /> <hr /> <hr /> <hr /> <hr />
            <center>
                <input type="text" placeholder="name of pokemon"  onChange={this.props.handleChange} />
                <button onClick={this.props.handleSearch} > Search </button>
            </center>
          <hr /> <hr /> <hr /> <hr /> <hr /> <hr /> <hr />
          <img src={bottom} className="pikanotes" alt="logo" />
      </div>
 	)
  }
}

export default Search;
