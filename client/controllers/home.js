if (Meteor.isClient) {
  Session.setDefault('counter', 0);

  HomeController = ApplicationController.extend({
    action: function () {
      this.render('home');
    }
  });

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}
