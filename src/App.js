import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import FriendCard from './Components/FriendCard';
import Wrapper from './Components/Wrapper';
import data from './teams.json';

let note = "";
let currentScore = 0;
let topScore = 0;

class App extends Component {
  state = {
    data,
    currentScore: 0,
    topScore: 0,
    note
  }

  handleClick = id => {
    console.log(id)
  }

  handleItemClick = id => {
    const data = this.state.data;
    const teamClicked = data.filter(team => team.id === id);

    if (teamClicked[0].clicked) {
      note = 'Oh No. You clicked that twice.  Restart';
      
      for (let i = 0; i < data.length; i ++){
        data[i].clicked = false;
      }
      this.setState({note});
      this.setState({currentScore});
      this.setState({data});
    }else{
      teamClicked[0].clicked = true;
      currentScore = currentScore + 4;
      note = 'Great Job';

      if (currentScore > topScore) {
        topScore = currentScore;
        this.setState({topScore});
      }

      data.sort((a, b) => {
        return 0.5 - Math.random();
      });
      this.setState({data});
      this.setState({currentScore});
      this.setState({note})
    }
  };

  render() {
    return (
      <Wrapper>
        <div className="App">
          <h1 className="title">Football Memory Game</h1>
          <h2 className="note">{this.state.note}</h2>
      
          <Navbar 
            currentScore={this.state.currentScore} 
            topScore= {this.state.topScore} />
            {this.state.data.map(team => (
          <FriendCard 
            key = {team.id}
            id = {team.id}
            image = {team.image}
            handleItemClick = {this.handleClick}
          />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
