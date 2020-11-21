import React from 'react';
import {BrowserRouter,Route, Switch } from 'react-router-dom'
import {Provider} from 'react-redux'
import generateStore from '../redux/store'
//
import Home from '../containers/Home'
// 
import '../assets/style/App.scss'


function App() {
  const store = generateStore()
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route component={Home} path='/' />
        
      </Switch>

    
    </BrowserRouter>
    </Provider>
  );
}

export default App;
