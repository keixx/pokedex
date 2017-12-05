import React, { Component } from 'react';
import '../App.css';

class Main extends Component {
  state = { 
    result: {} 
  }
  componentWillReceiveProps(nextProps){
    this.setState({ result: nextProps.details})

  }

renderTypes(types) {
  console.log(types)
  var type = []
  if(types) {
    types.map((item, index) => {
      if (index < 3) {
        type = type.concat(<h5 className="h5" key={index}>{ " * " + item.type.name}</h5>)
      }
    } )
  }
  return type
}

renderBaseStats(stats) {
  console.log(stats)
  var basestat = []
  if(stats) {
    stats.map((item, index) => {
      if (index < 6) {
        basestat = basestat.concat(<h5 key={index}>{item.stat.name + " : " + item.base_stat}</h5>)
      }
    } )
  }
  return basestat
}

renderMoves(moves) {
  console.log(moves)
  var move = []
  if(moves) {
    moves.map((item, index) => {
      if (index < 5) {
        move = move.concat(<h5 key={index}>{item.move.name}</h5>)
      }
    } )
  }
  return move
}

renderAbilities(abilities) {
  console.log(abilities)
  var ability = []
  if(abilities) {
    abilities.map((item, index) => {
      if (index < 5) {
        ability = ability.concat(<h5 key={index}>{item.ability.name}</h5>)
      }
    } )
  }
  return ability
}

  render() {
    const { sprites,abilities,moves,name,types,descriptions,height,weight,stats} = this.state.result
    const img = !sprites ? '' : sprites.front_default
    const des = !descriptions ? '' : descriptions.id

    console.log(this.props, 'state: ', this.state)
    return (
    	<div className="row2" >
        <div className="panel">
        <center>
        <div className="container">
        <img className="img" src = {img} />
        </div>
        </center></div>
        <center>
        <table className="table">
          <tbody>
            <tr>
              <th colSpan="3" >{name}</th>
            </tr>
            <tr>
              <td rowSpan="3" colSpan="2"/>
              <td ><b>Types: </b>{this.renderTypes(types)}</td>
            </tr>
            <tr>
              <td ><b>  Height: </b>{height} </td>
            </tr>
            <tr>
              <td ><b>  Weight: </b>{weight} </td>
            </tr>
            <tr>
              <th>Statistics</th>
              <th>Moves</th>
              <th>Abilities</th>
            </tr>
            <tr>
              <td>{this.renderBaseStats(stats)}</td>
              <td>{this.renderMoves(moves)}</td>
              <td>{this.renderAbilities(abilities)}</td>
            </tr>
          </tbody>
        </table>
      </center>
      </div>
 	);
  }
}



export default Main;


