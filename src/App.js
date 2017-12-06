import React, { Component } from 'react';
import './App.css';
import request from 'superagent';

import Search from './Component/search';
import Notes from './Component/notes';
import Main from './Component/main';

import logo from './img/open.gif';
import pokemon from './img/Pokemon_Logo.png';



  class App extends Component {
    state = {
      search: '',
      note: '',
      notes: [],
      details: {}
    }

  handleChange(prop, e) {
    console.log(prop)
    this.setState({ [prop]: e.target.value })
  }

  handleSave(e) {
    var obj = {
      id : this.state.details.id,
      notes : this.state.note
    }
      this.setState ({
        notes : this.state.notes.concat(obj),
        note : ''
      })
  }

  handleSearch () {
    const { search } = this.state
    var that = this
    const url = 'https://pokeapi.co/api/v2/pokemon'
    console.log('call api: ' , this.state.search)
    request.get(`${url}/${search}`)
    .end(function(err,res) {
      if(err) alert ('No Data Found!')
      else{
        const pokeDetails = res.body
        const newUrl = 'https://pokeapi.co/api/v1/description'
        request.get(`${newUrl}/${pokeDetails.id}`)
        .end(function(err,res) {
          if(err) alert ('No Data Found!')
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
            <Search 
              handleChange={this.handleChange.bind(this,'search')}
              handleSearch={this.handleSearch.bind(this)}/>
            <Main details={this.state.details}/>
            <Notes 
              handleChange={this.handleChange.bind(this,'note')}
              handleSave={this.handleSave.bind(this)}
              {...this.state}
            />
        </div>
      </div>
    );
  }
}

export default App;
