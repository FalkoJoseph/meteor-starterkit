// Controller

HomeController = ApplicationController.extend({
  action: function () {
    this.render('home');
  }
});

// Sessions

Session.setDefault('counter', 0);

// Helpers

Template.hello.helpers({
  counter: function () {
    return Session.get('counter');
  }
});

// Events

Template.hello.events({
  'click button': function () {
    Session.set('counter', Session.get('counter') + 1);
  }
});
