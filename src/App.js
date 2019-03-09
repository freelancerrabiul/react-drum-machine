import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div id="drum-machine">
          <div className="row">
            <div className="col-12">
              <button type="button" id="q" className="drum-pad btn btn-danger">Q
                {/* <audio className='clip' id="q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio> */}
              </button>
              <button type="button" id="w" className="drum-pad btn btn-danger">W</button>
              <button type="button" id="e" className="drum-pad btn btn-danger">E</button>
            </div>
            <div className="col-12">
              <button type="button" id="a" className="drum-pad btn btn-danger">A</button>
              <button type="button" id="s" className="drum-pad btn btn-danger">S</button>
              <button type="button" id="d"className="drum-pad btn btn-danger">D</button>
            </div>
            <div className="col-12">
              <button type="button" id="z" className="drum-pad btn btn-danger">Z</button>
              <button type="button" id="x" className="drum-pad btn btn-danger">X</button>
              <button type="button" id="c" className="drum-pad btn btn-danger">C</button>
            </div>
          </div>        
      </div>
    </div>
    );
  }
}

export default App;
