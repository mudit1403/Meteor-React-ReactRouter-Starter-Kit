Index = React.createClass({
  componentWillMount() {
    // Update the page's title
    document.title = "Meteor And React Demo";
  },
  render() {
    return (
      <div>
        <div className = "container">
        <h2>Enterprise Application Portal </h2>
      </div>

      <div className="container">
          <div className="row">
            <div className="col-md-8">
              <ul className="feature-list">
              <li><i className="fa-li fa fa-check-square"></i><h3>Zeuritech Internal Application</h3><br/>
                Single Sign on with a simplified and centralized password management system eliminating the need for multiple username and passwords providing faster and secure access to internal applications</li>
              <li><i className="fa-li fa fa-check-square"></i><h3>Third Party Application</h3><br/>
                Single Gateway to access all necesarry third party application of daily use via Zeuritech network in secure way</li>
              <li><i className="fa-li fa fa-spinner fa-spin"></i><h3>Widgets</h3><br/>
                Your one stop widget warehouse providing you favourate information in a personalized way helping you save time and stay current by bringing an always updated information on the go at your Desktop. </li>
            </ul>
          </div>

          <div className="col-md-4">
            <div className="panel panel-login">
              <div className="panel-heading">
                <div className="row">
                  <div className="col-xs-6">
                    <a href="#" className="active" id="login-form-link">Login</a>
                  </div>
                  <div className="col-xs-6">
                    <a href="#" id="register-form-link">Register</a>
                  </div>
                </div>
                <hr/>
              </div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-lg-12">
                    <Login/>
                    <Register/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>    );
  }
});
