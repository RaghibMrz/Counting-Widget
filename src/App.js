import React, { Component } from "react";
import Navbar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  onAdd = () => {
    if (this.state.counters.length === 0) {
      const counters = [{ id: 1, value: 0 }];
      this.setState({ counters });
      return;
    }
    const lastId = this.state.counters[this.state.counters.length - 1].id;
    const counters = [...this.state.counters];
    counters[this.state.counters.length] = { id: lastId + 1, value: 0 };
    this.setState({ counters });
  };

  onDelete = (id) => {
    this.setState({
      counters: this.state.counters.filter((c) => c.id !== id),
    });
  };

  onIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };

  onDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({ counters });
  };

  onReset = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value = 0;
    this.setState({ counters });
  };

  onResetAll = () => {
    this.setState({
      counters: this.state.counters.map((counter) => {
        counter.value = 0;
        return counter;
      }),
    });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar counterCount={this.state.counters.length} />
        <main className="container">
          <Counters
            onDelete={this.onDelete}
            onIncrement={this.onIncrement}
            onDecrement={this.onDecrement}
            onReset={this.onReset}
            onResetAll={this.onResetAll}
            counters={this.state.counters}
            onAdd={this.onAdd}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
