// Controller

ApplicationController = RouteController.extend({
  layoutTemplate: 'default',

  onBeforeAction: function () {
    Session.set('flash', false);
    this.next();
  }
});
