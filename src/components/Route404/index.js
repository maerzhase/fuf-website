'use strict';

import React from 'react';

export default class Route404 extends React.Component {
  
  static initialActions(params){
    return []
  }

  render() {
    return (
      <div>
        <h1>Oops!</h1>
      </div>
    );
  }
}