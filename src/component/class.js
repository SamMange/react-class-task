import React from "react";

class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    return(
        <h1>Your not in componentDidMount</h1>
    )
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Updating Phase: Counter class component updated");
    if (prevState.count !== this.state.count) {
      console.log(
        `Previous count: ${prevState.count}, Current count: ${this.state.count}`,
      );
    }
    if (prevProps.appCount !== this.props.appCount) {
      console.log(
        `Previous app count: ${prevProps.appCount}, Current app count: ${this.props.appCount}`,
      );
    }
  }

  componentWillUnmount() {
    console.log("Unmounting Phase: Counter class component unmounted");
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>App Counter: {this.props.appCount}</h2>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default CounterClass;
