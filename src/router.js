import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import EvaluatePage from './routes/EvaluatePage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/evaluate" exact component={EvaluatePage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
