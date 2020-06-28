import React, { Component } from "react";
import CounterComponent from "./counterComponent";

export default class Counters extends Component {
  render() {
    //Argument destructruing for better readability
    const {
      onIncrement,
      onDecrement,
      onDelete,
      onReset,
      onResetAll,
      onAdd,
      counters,
    } = this.props;

    return (
      <div>
        {counters.map((counter) => (
          <CounterComponent
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onReset={onReset}
            key={counter.id}
            counter={counter}
          />
        ))}
        <button onClick={onAdd} className="btn btn-primary btn-sm m-2">
          + Counter
        </button>
        <button onClick={onResetAll} className="btn btn-danger btn-sm m-2">
          Reset All
        </button>
      </div>
    );
  }
}
