import './index.css';

import ReactDOM from 'react-dom';
import React from 'react';

class MyComponent extends React.Component<any> {
  render() {
    const {counter} = this.props;
    return (
      <div className="component">
        {counter}
        {counter > 1 ? <MyComponent counter={counter - 1} /> : ''}
      </div>
    );
  }
}

const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<MyComponent counter={3} />, container);
