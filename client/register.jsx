Register = React.createClass({
    getInitialState() {
        return {
            errors: {}
        }
    },
    getMeteorData() {
        return {

        }
    },
    onSubmit(event) {
        event.preventDefault();

        var username = $(event.target).find("[name=username]").val();
        var email = $(event.target).find("[name=email]").val();
        var password = $(event.target).find("[name=password]").val();
        var confirmPassword = $(event.target).find("[name=confirmPassword]").val();
        var contact = $(event.target).find("[name=contact]").val();

        var errors = {};

        if (!username) {
             console.log("username required")
        }

        if (!email) {
             console.log("email required")
        }

        if (!contact) {
            console.log("Contact")
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

        user = {
              username: username,
              password: password,
              contact: contact,
              email: email
          }

        Accounts.createUser(user, function (error) {
          if (error) {
            console.log(error);
          }else{
            console.log(user)
            url = "https://www.cognalys.com/api/v1/otp/?app_id=4698e006f75943379df8562&access_token=087c9d27e32aa33b8e7593bf0a2ec5789994d137&mobile=+91"+user.contact
            console.log(url)
            var result = Meteor.http.call("GET", url, function( error, response ){
              if ( error ) {
                console.log( error );
              } else {
                var keymatch = response.data.keymatch

                var otp = prompt("Please enter the no. from which you recieved a call for no. verification", "17742069258");
                if (otp != null) {
                    otpConfirmUrl = "https://www.cognalys.com/api/v1/otp/confirm/?app_id=4698e006f75943379df8562&access_token=087c9d27e32aa33b8e7593bf0a2ec5789994d137&keymatch="+ keymatch + "&otp=" + otp  ;
                }

                var resultConfirm = Meteor.http.call("GET", otpConfirmUrl, function( error, response ){
                    if ( error ) {
                    console.log( error );
                    } else {
                    console.log( response.data.status );
                    window.location.href = '/landing';
                    }});
                }});
          }
        });

        
    },
  render() {
    return (
      <form id="register-form"  onSubmit={this.onSubmit} role="form" className="registerForm">
        <div className="form-group">
            <input type="text" name="username" id="username" tabindex="1" className="form-control" placeholder="Username"/>
        </div>
        <div className="form-group">
            <input type="email" name="email" id="email" tabindex="1" className="form-control" placeholder="Email Address"/>
        </div>
        <div className="form-group">
            <input type="text" name="contact" id="contact" tabindex="1" className="form-control" placeholder="Contact no."/>
        </div>
        <div className="form-group">
            <input type="password" name="password" id="password" tabindex="2" className="form-control" placeholder="Password"/>
        </div>
        <div className="form-group">
            <input type="password" name="confirmPassword" id="confirmPassword" tabindex="2" className="form-control" placeholder="Confirm Password"/>
        </div>
        <div className="form-group">
            <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                    <input type="submit" name="register-submit" id="register-submit" tabindex="4" className="form-control btn btn-register" value="Register Now"/>
                </div>
            </div>
        </div>
    </form>
    );
  }
});