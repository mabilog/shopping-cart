import React from 'react';
import styled from 'styled-components';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';

import './App.css';

function App() {
  return (
      <AppWrapper> 
        <Header />
        <Switch>
          <Route path='/' exact component={Home}/>
          {/* <Route path='/overview' exact component={Overview}/> 
          <Route path='/reports/2021' exact component={ReportsOne}/>
          <Route path='/reports/2020' exact component={ReportsTwo}/>
          <Route path='/reports/2019' exact component={ReportsThree}/> */}
        </Switch>
      </AppWrapper>
  );
}

const AppWrapper = styled(Router)`

`;

export default App;
