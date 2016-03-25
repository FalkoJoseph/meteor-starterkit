if (Meteor.isClient) {
  TodoController = ApplicationController.extend({
    index: function () {
      this.render('TodoIndex');
    }
  });

  Template.TodoIndex.helpers({
    sampleArray: [
      { sampleTitle: 'Javascript' },
      { sampleTitle: 'is' },
      { sampleTitle: 'sexy!' }
    ],
    tasks: function() {
      return Tasks.find({}, {sort: {createdAt: -1}}).fetch();
    }
  });

  Template.TodoIndex.events({
    'submit .new-task': function (event) {
      event.preventDefault();
      var text = event.target.text.value;

      Tasks.insert({
        text: text,
        createdAt: new Date()
      });

      event.target.text.value = '';
    }
  });

  Template.task.events({
    'click .toggle-checked': function () {
      // Set the checked property to the opposite of its current value
      Tasks.update(this._id, {
        $set: {checked: ! this.checked}
      });
    },
    'click .delete': function () {
      Tasks.remove(this._id);
    }
  });
}
