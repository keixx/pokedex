import React, { Component } from 'react';
import '../App.css';

class Search extends Component {
  render() {
    return (
    	<div className="row1">
          <hr /> <hr /> <hr /> <hr /> <hr /> <hr /> <hr /> <hr /> <hr /> <hr />
            <center>
                <input type="text" placeholder="name of pokemon"  onChange={this.props.handleChange} />
                <button onClick={this.props.handleSearch} > Search </button>
            </center>
          <hr /> <hr /> <hr /> <hr /> <hr /> <hr /> <hr /> <hr /> <hr /> <hr /> <hr />
      </div>
 	)
  }
}

export default Search;
