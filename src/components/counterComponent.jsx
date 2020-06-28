import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    const { onIncrement, onDecrement, onDelete, onReset, counter } = this.props;

    return (
      <div>
        <span className={this.getCountBadge()}>{this.cleanCount()}</span>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={() => onDecrement(counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          -
        </button>
        <button
          onClick={() => onReset(counter)}
          className="btn btn-warning btn-sm m-2"
        >
          Reset
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getCountBadge() {
    if (this.props.counter.value > 0) {
      return "badge badge-primary m-2";
    } else {
      return "badge badge-secondary m-2";
    }
  }

  cleanCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}
