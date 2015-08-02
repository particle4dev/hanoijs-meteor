if (Meteor.isClient) {
  Template.hello.onCreated(function () {
    // Use this.subscribe inside onCreated callback
    this.subscribe("users");
  });
  Template.hello.helpers({
    users: function () {
      return Meteor.users.find();
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
