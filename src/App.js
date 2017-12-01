import React, { Component } from 'react';
import './App.css';
import logo from './img/open.gif';
import pokemon from './img/Pokemon_Logo.png';
import request from 'superagent';
import Search from './Component/search';
import Notes from './Component/notes';
import Main from './Component/main';

  class App extends Component {
    state = {
      search: ''
    }

  handleChange(e) {
    this.setState({ search: e.target.value})
  }

  handleSearch () {
    const { search } = this.state
    const url = 'http://pokeapi.co/api/v2/pokemon'
    console.log('call api: ' , this.state.search)
    request.get(`${url}/${search}`)
    .end(function(err,res) {
      if(err) alert ('error')
        console.log('res:',res)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <center><img src={pokemon} className="pokemon" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" /></center>
        </header>
          <div className="panel">
            <Search handleChange={this.handleChange.bind(this)}
            handleSearch={this.handleSearch.bind(this)}/>
            <Main />
            <Notes />
        </div>
      </div>
    );
  }
}

export default App;
