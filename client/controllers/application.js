if (Meteor.isClient) {
  ApplicationController = RouteController.extend({
    layoutTemplate: 'default',

    onBeforeAction: function () {
      // Before hook
      this.next();
    }
  });
}
