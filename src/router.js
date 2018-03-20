import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import ChildEvaluatePage from './routes/ChildEvaluatePage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/child_evaluate" exact component={ChildEvaluatePage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
