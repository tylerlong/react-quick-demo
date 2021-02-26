import ReactDOM from 'react-dom';
import React from 'react';

class MyComponent extends React.Component {
  render() {
    return 'Hello world!';
  }
}

const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<MyComponent />, container);
