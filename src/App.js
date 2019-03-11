import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state ={
      key:''
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){ 
    this.setState({
      key:e.target.id
    })
    console.log(this.state.key)
  }
  
  render() {
    return (
      <div className="container-fluid">
        <div id="drum-machine">
          <div className="row">
            <div className="col-12">
              <button type="button" id="q" className="drum-pad btn btn-danger" onClick={this.handleClick}>
              Q
              </button>
              <button type="button" id="w" className="drum-pad btn btn-danger" onClick={this.handleClick}>W</button>
              <button type="button" id="e" className="drum-pad btn btn-danger" onClick={this.handleClick}>E</button>
            </div>
            <div className="col-12">
              <button type="button" id="a" className="drum-pad btn btn-danger" onClick={this.handleClick}>A</button>
              <button type="button" id="s" className="drum-pad btn btn-danger" onClick={this.handleClick}>S</button>
              <button type="button" id="d"className="drum-pad btn btn-danger" onClick={this.handleClick}>D</button>
            </div>
            <div className="col-12">
              <button type="button" id="z" className="drum-pad btn btn-danger" onClick={this.handleClick}>Z</button>
              <button type="button" id="x" className="drum-pad btn btn-danger"onClick={this.handleClick}>X</button>
              <button type="button" id="c" className="drum-pad btn btn-danger"onClick={this.handleClick}>C</button>
            </div>
          </div>        
      </div>
    </div>
    );
  }
}

export default App;
