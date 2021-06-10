import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { join } from 'lodash';

class App extends Component {
  render() {
    return (
      <div>
        <div>{join(['This', 'is', 'App'], ' ')}</div>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
