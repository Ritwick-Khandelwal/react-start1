import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
  constructor(props){
    super(props);
    this.state={
      brand: "Ford",
      model: "Vrin",
      color: "Grey",
      year: "1964" 
      
      };
  }

  render() {
    return (
      <div>
      <h1>I am a {this.state.brand}! </h1>
      <p>
      My date of birth is {this.state.year};
      My model is {this.state.model};
      </p>
      </div>
    );
  }
}
ReactDOM.render(<Car />, document.getElementById('root'));



