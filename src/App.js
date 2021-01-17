import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Row from "./components/Row";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Button from "./components/Button"


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    
  };
  
  baseState = {
    friends,
  };
  
  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  filterByOccupation = occupation =>{
    const friends = this.state.friends.filter(friend => friend.occupation === occupation);
    this.setState({ friends });
  };

  sortNameColumn = name =>{
    const friends = this.state.friends.sort(function(a, b){
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      if (nameA< nameB) {return -1;}
      if (nameA> nameB) {return 1;}
    })
    this.setState({ friends });
  }

  sortOccupationColumn = occupation =>{
    const friends = this.state.friends.sort(function(a, b){
      let nameA = a.occupation.toUpperCase();
      let nameB = b.occupation.toUpperCase();
      if (nameA< nameB) {return -1;}
      if (nameA> nameB) {return 1;}
    })
    this.setState({ friends });
  }

  sortLocationColumn = occupation =>{
    const friends = this.state.friends.sort(function(a, b){
      let nameA = a.location.toUpperCase();
      let nameB = b.location.toUpperCase();
      if (nameA< nameB) {return -1;}
      if (nameA> nameB) {return 1;}
    })
    this.setState({ friends });
  }


  restoreFriendList = () => {
    this.setState(this.baseState)
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employee List</Title>
          <br></br><p>*Click on occupation to filter by occupation</p>
          <Button 
          restoreFriendList={this.restoreFriendList}
          />
        <FriendCard
          sortNameColumn={this.sortNameColumn}
          sortOccupationColumn={this.sortOccupationColumn}
          sortLocationColumn={this.sortLocationColumn}
          >
        {this.state.friends.map(friend => (
          <Row
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
           // image={friend.image}
            occupation={friend.occupation}
            filterByOccupation={this.filterByOccupation}
            location={friend.location}
          />
        ))}
        </FriendCard>
      </Wrapper>
    );
  }
}

export default App;
