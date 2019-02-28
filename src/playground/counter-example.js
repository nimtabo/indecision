class Counter extends React.Component {
  constructor(props){
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleRest = this.handleRest.bind(this);
    this.state = {
      count: 0
    };
  };
  componentDidMount() {
    const countString = localStorage.getItem("count");
    const count = parseInt(countString, 10);

    if (!isNaN(count)) {
      this.setState(() => ({ count }));
    }
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      // const json = JSON.stringify(this.state.count);
      // localStorage.setItem("count", json);
      localStorage.setItem("count", this.state.count);
    }
  }
  componentWillUnMount() {

  };

  handleAdd() {
    this.setState((prevState) => {
      return {
        count: prevState.count +1
      };
    });
  }

  handleMinus() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    });
  }

  handleRest() {
    this.setState(() => {
      return {
        count: 0
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAdd}>+1</button>
        <button onClick={this.handleMinus}>-1</button>
        <button onClick={this.handleRest}>Reset</button>
      </div>
    );
  }
}
// Counter.defaultProps = {
//   count: 0
// };

ReactDOM.render(<Counter />, document.getElementById('app'));
