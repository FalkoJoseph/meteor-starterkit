// Events

Template.register.events({
  'submit form': function(event) {
    event.preventDefault();
    var emailVar = event.target.registerEmail.value;
    var passwordVar = event.target.registerPassword.value;

    Accounts.createUser({
        email: emailVar,
        password: passwordVar
    }, function(error) {
      if(error){
        Session.set('flash', error.reason);
      } else {
        Session.set('flash', false);
      }
    });
  }
});

Template.login.events({
  'submit form': function(event){
    event.preventDefault();
    var emailVar = event.target.loginEmail.value;
    var passwordVar = event.target.loginPassword.value;

    Meteor.loginWithPassword(emailVar, passwordVar, function(error) {
      if(error){
        Session.set('flash', error.reason);
      } else {
        Session.set('flash', false);
      }
    });
  }
});

Template.dashboard.events({
  'click .logout': function(event){
    event.preventDefault();
    Meteor.logout();
  }
});

Template.account.helpers({
  flash: function() {
    return Session.get('flash');
  }
});
