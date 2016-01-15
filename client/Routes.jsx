const {
  Router,
  Route,
  Link,
  IndexRoute,
  history
} = ReactRouter;

const browserHistory = history.createHistory();

Routes = React.createClass({
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={ Home }/>
          <Route path="home" component={ Home } />
          <Route path="login" component={Home} />
          <Route path="landing" component={Landing} />
        </Route>
      </Router>
    );
  }
});
