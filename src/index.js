import React, { Component } from 'react';
import {render} from 'react-dom';

class App extends Component {
  render(){
    return(
      <div>
       <p>
         Ma citation
         <span>- Auteur</span>
       </p>
       <button>Une autre citation !</button>
      </div>
    )
  }
}

render(
  <App />, document.getElementById('root')
);