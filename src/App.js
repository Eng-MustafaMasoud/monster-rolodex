import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list";
import { SearchField } from "./components/searchField/search";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchBox: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  handleChange = e => this.setState({ searchBox: e.target.value });

  render() {
    const { monsters, searchBox } = this.state;
    const searchfilter = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchBox.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="head">Monster Roledex</h1>
        <SearchField
          placeholder={"search monsters"}
          handleChange={this.handleChange}
        />
        <CardList monsters={searchfilter} />
      </div>
    );
  }
}

export default App;
