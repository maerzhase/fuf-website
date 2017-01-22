'use strict';

import Alt from 'alt';

class MyAlt extends Alt {

  constructor(config = {}) {
    super(config);
  }

  bootstrapAndUpdate(stores){
    this.bootstrap(stores);
    const updatedStores = this.stores;
    Object.keys(updatedStores).forEach((k)=>{
      const store = updatedStores[k];
      store.setState(store.getState());
    })
  }

}

// Create a new instance of alt and export it as a global singleton
export default new MyAlt();
