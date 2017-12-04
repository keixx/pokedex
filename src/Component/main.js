import React, { Component } from 'react';
import '../App.css';
//import PokemonType from './PokemonType';

class Main extends Component {
  state = { 
    result: {} 
  }
  componentWillReceiveProps(nextProps){
    this.setState({ result: nextProps.details})

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

renderTypes(types) {
  console.log(types)
  var type = []
  if(types) {
    types.map((item, index) => {
      if (index < 3) {
        type = type.concat(<h5 key={index}>{item.type.name}</h5>)
      }
    } )
  }
  return type
}



  render() {
    const { sprites,abilities,moves,name,types,descriptions,height,weight,weakness} = this.state.result
    const img = !sprites ? '' : sprites.front_default

    console.log(this.props, 'state: ', this.state)
    return (
    	<div className="row2" >
        <div className="panel">
        <div className="container"><img className="img" src = {img} />
        <h2 className="name">{name}</h2></div></div>
      <center>
        <table className="table">
        <tr>
          <th colspan="3" >Descriptions</th>
        </tr>
        <tr>
          {descriptions}
          <tr>
            <td className="def"><b>  Height: </b>{height} </td>
          </tr>
          <tr>
            <td className="def"><b>  Weight: </b>{weight} </td>
          </tr>
        </tr>
        <tr>
          <th>Types</th>
          <th>Moves</th>
          <th>Abilities</th>
        </tr>
        <tr>
          <td>{this.renderTypes(types)}</td>
          <td>{this.renderMoves(moves)}</td>
          <td>{this.renderAbilities(abilities)}</td>
        </tr>
        </table>
      </center>
      </div>
 	);
  }
}



export default Main;


