/**
 * Config, variable
 */
var Future = Npm.require('fibers/future');
var Fiber = Npm.require('fibers');
var _autopublishFields = {
  loggedInUser: ['profile', 'username', 'emails'],
  otherUsers: ['profile', 'username']
};
// ['profile', 'username'] -> {profile: 1, username: 1}
var toFieldSelector = function (fields) {
  return _.object(_.map(fields, function (field) {
    return [field, 1];
  }));
};

/**
 * PUBLICATIONS
 */
Meteor.publish("delay", function(){
    var fiber = Fiber.current;
    setTimeout(function() {
        fiber.run();
    }, 10000);
    Fiber.yield();
    this.ready();
});

Meteor.publish("users", function(){
  if(this.userId){
      return Meteor.users.find({}, {fields: toFieldSelector(_autopublishFields.otherUsers)});
  }
  return [];
});
