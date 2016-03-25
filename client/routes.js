Router.route('/', {
  name: 'home',
  //layoutTemplate: 'default'
});

Router.route('/welcome/:_message', {
  name: 'welcome.show',
  controller: 'WelcomeController',
  action: 'show'
});

Router.route('/welcome', {
  name: 'welcome',
  controller: 'WelcomeController',
  action: 'index'
});

Router.route('/todo', {
  name: 'todo',
  controller: 'TodoController',
  action: 'index'
});

Router.onBeforeAction('loading');
