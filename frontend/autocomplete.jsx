import React from 'react';

class Autocomplete extends React.Component{
  constructor(props){
    super(props);

    // debugger
    this.names = props.names;
    this.state = {
      matches: this.names,
      value: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.fillIn = this.fillIn.bind(this);
  }

  handleInput(e){
    const search = e.target.value;
    let matches;
    if (search.length === 0) {
      matches = this.names;
    } else {
      matches = this.names.filter((name) => {
        return name.slice(0,search.length).toLowerCase() === search.toLowerCase();
      });
    }

    this.setState({ matches, value: e.target.value });
  }

  fillIn(name) {
    const self = this;
    return (e) => {
      this.setState({
        value: name
      });
    };
  }

  render(){
    const items = this.state.matches.map((name, idx) => {
      return <li onClick={this.fillIn(name)} key={idx}> {name} </li>;
    });
    return(
      <div>
        <h1>Autocomplete</h1>

        <input value={this.state.value} onChange={this.handleInput}></input>
        <ul>
          { items }
        </ul>
      </div>
    );
  }
}

export default Autocomplete;
