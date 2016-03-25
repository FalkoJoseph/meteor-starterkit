// Controller

ApplicationController = RouteController.extend({
  layoutTemplate: 'default',

  onBeforeAction: function () {
    if (!Meteor.userId()) {
      console.log('login screen can be showed here...');
      this.next();
    } else {
      this.next();
    }
  }
});
