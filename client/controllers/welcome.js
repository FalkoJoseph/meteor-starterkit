// Controller

WelcomeController = ApplicationController.extend({
  index: function () {
    this.render('WelcomeIndex');
  },
  show: function () {
    Session.set('message', this.params._message);
    this.render('WelcomeShow', { data: {
      title: 'Awesome title'
    }});
  }
});

// Helpers

Template.WelcomeShow.helpers({
  message: function () {
    return Session.get('message');
  }
});
