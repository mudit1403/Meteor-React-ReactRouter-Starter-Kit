const {
  Router,
  Route,
  Link,
  IndexRoute,
  history
} = ReactRouter;

Login = React.createClass({
    getInitialState() {
        return {
            errors: {}
        }
    },
    getMeteorData() {
        return {

        }
    },
    contextTypes: {
        router: React.PropTypes.func
      },
    onSubmit(event) {
        event.preventDefault();

        var username = $(event.target).find("[name=username]").val();
        var password = $(event.target).find("[name=password]").val();

        var errors = {};

        if (!username) {
             console.log("username required")
        }

        if (!password) {
            console.log("Password required")
        }

        this.setState({
            errors: errors
        });

        if (! _.isEmpty(errors)) {
            return;
        }

        Meteor.loginWithPassword(username, password, (err) => {
            if (err) {
                console.log("login failed")
                return;
            } else {
                console.log("sucess")
                window.location.href = '/landing';
            }
        });
    },
  render() {
    return (
      <form id="login-form"  onSubmit={this.onSubmit} role="form" className="loginForm">
        <div className="form-group">
            <input type="text" name="username" id="username" tabindex="1" hasError={!!this.state.errors.username} className="form-control" placeholder="Username" />
        </div>
        <div className="form-group">
            <input type="password" name="password" id="password" hasError={!!this.state.errors.password} tabindex="2" className="form-control" placeholder="Password"/>
        </div>
        <div className="form-group text-center">
            <input type="checkbox" tabindex="3" className="" name="remember" id="remember"/>
            <label for="remember"> Remember Me</label>
        </div>
        <div className="form-group">
            <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                     <input type="submit" name="login-submit" id="login-submit" tabindex="4" className="form-control btn btn-login" value="Log In"/>
                </div>
            </div>
        </div>
        <div className="form-group">
            <div className="row">
                <div className="col-lg-12">
                    <div className="text-center">
                        <a  tabindex="5" className="forgot-password">Forgot Password?</a>
                    </div>
                </div>
            </div>
        </div>
    </form>
    );
  }
});