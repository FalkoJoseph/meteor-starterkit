// Controller

ApplicationController = RouteController.extend({
  layoutTemplate: 'default',

  onBeforeAction: function () {
    if (!Meteor.userId()) {
      console.log('Login screen can be showed here...');
      this.next();
    } else {
      this.next();
    }
  }
});
