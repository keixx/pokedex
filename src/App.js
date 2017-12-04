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
      search: '',
      details: {}
    }

  handleChange(e) {
    this.setState({ search: e.target.value})
  }

  handleSearch () {
    const { search } = this.state
    var that = this
    const url = 'http://pokeapi.co/api/v2/pokemon'
    console.log('call api: ' , this.state.search)
    request.get(`${url}/${search}`)
    .end(function(err,res) {
      if(err) alert ('error')
      else{
        const pokeDetails = res.body
        const newUrl = 'http://pokeapi.co/api/v1/description'
        request.get(`${newUrl}/${pokeDetails.id}`)
        .end(function(err,res) {
          if(err) alert ('error')
            that.setState({ details : pokeDetails,
              desc: res.body})
        })
      }
    })
  }

  render() {
    console.log('app state: ',this.state)
    return (
      <div className="App">
        <header className="App-header">
          <center><img src={pokemon} className="pokemon" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" /></center>
        </header>
          <div className="panel">
            <Search handleChange={this.handleChange.bind(this)}
            handleSearch={this.handleSearch.bind(this)}/>
            <Main details={this.state.details}/>
            <Notes />
        </div>
      </div>
    );
  }
}

export default App;
