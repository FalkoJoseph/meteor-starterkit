// Subscriptions

Meteor.subscribe('tasks');

// Controller

TodoController = ApplicationController.extend({
  index: function () {
    this.render('TodoIndex');
  }
});

// Helpers

Template.TodoIndex.helpers({
  sampleArray: [
    { sampleTitle: 'Javascript' },
    { sampleTitle: 'is' },
    { sampleTitle: 'sexy!' }
  ],
  tasks: function() {
    if (Session.get('hideCompleted')) {
      return Tasks.find({checked: {$ne: true}}, {sort: {createdAt: -1}});
    } else {
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  },
  hideCompleted: function () {
    return Session.get('hideCompleted');
  },
  incompleteCount: function () {
    return Tasks.find({checked: {$ne: true}}).count();
  }
});

Template.task.helpers({
  isOwner: function () {
    return this.owner === Meteor.userId();
  }
});

// Events

Template.task.onRendered(function(){
  //this.$(obj).hide(); works too
  this.$('li').hide();
  this.$('li').fadeIn(150);
});

Template.TodoIndex.events({
  'submit .new-task': function (event) {
    event.preventDefault();
    var text = event.target.text.value;

    Meteor.call('addTask', text);

    event.target.text.value = '';
  },
  'change .hide-completed input': function (event) {
    Session.set('hideCompleted', event.target.checked);
  }
});

Template.task.events({
  'click .toggle-checked': function () {
    Meteor.call('setChecked', this._id, ! this.checked);
  },
  'click .delete': function (event) {
    var self = this;
    $(event.target).parent().fadeOut(150, function() {
      Meteor.call('deleteTask', self._id);
    });
  },
  'click .toggle-private': function () {
    Meteor.call('setPrivate', this._id, ! this.private);
  }
});
