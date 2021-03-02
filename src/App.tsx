import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { CachePolicies, Provider } from 'use-http';
import CountryList from './pages/CountryList';
import ViewCountry from './pages/ViewCountry';

const App: React.FC = () => {
  return (
    <Provider options={{ cachePolicy: CachePolicies.CACHE_FIRST }}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={CountryList} />
          <Route path="/:code" component={ViewCountry} />

          <Route path="**">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
