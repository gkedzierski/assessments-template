import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import CountryList from './pages/CountryList';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={CountryList} />
        <Route path="**">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
