if (Meteor.isClient) {
  Template.hello.helpers({
    todos: function () {
      return TodosCollection.find({});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
