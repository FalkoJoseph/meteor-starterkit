// Controller

ApplicationController = RouteController.extend({
  layoutTemplate: 'default',

  onBeforeAction: function () {
    this.next();
  }
});
