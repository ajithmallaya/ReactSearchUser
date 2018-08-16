import * as  React from "react";
import Search from "./components/Search";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Search Users</h1>
        </header>
        <p className="App-intro">
         <Search />
        </p>
      </div>
    );
  }
}

export default App;
