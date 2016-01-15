Meteor.startup(function(){
  // Create a demo user
  if (Meteor.users.find().count() === 0) {
    Accounts.createUser({'username': 'demo', 'password': 'password'});
  }
  Accounts.config({
    sendVerificationEmail: true
 });
 process.env.MAIL_URL = 'smtp://es14btech11012@iith.ac.in:_G142ybF9IB42ytS2A18Sw@smtp.mandrillapp.com:587';
console.log('this is the mail_url: ', process.env.MAIL_URL);
});