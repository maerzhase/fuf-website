'use strict';
require('whatwg-fetch');
require('isomorphic-fetch');

export default {

  get(path) {
    return fetch(path)
      .then(r => r.json())
      .catch(ex => console.log('parsing failed', ex));
  }

};
