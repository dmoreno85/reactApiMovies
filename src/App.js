import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import viewCategory from './views/viewCategory';
import viewDetails from './views/viewDetails';
import viewPage404 from './views/viewPage404';
import Navbar from './components/navbar'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route
            path='/category/:categoryName'
            exact
            component={viewCategory}
          />
          <Route path='/movie/:id' exact component={viewDetails} />
          <Redirect path='/' exact to='category/upcoming' />
          <Route component={viewPage404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
