import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import EvaluatePage from './routes/EvaluatePage';
import EvaluateResultPage from './routes/EvaluateResultPage';
import RelationshipPage from './routes/RelationshipPage';
import SelectFriendPage from './routes/SelectFriendPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/evaluate" exact component={EvaluatePage} />
        <Route path="/result" exact component={EvaluateResultPage} />
        <Route path="/relationship" exact component={RelationshipPage} />
        <Route path="/friend" exact component={SelectFriendPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
