if (Meteor.isClient) {
  // VERSION 1
  Template.hello.helpers({
    light: function () {
      return light.get();
    }
  });
  window.light = new ReactiveVar('green');
  Tracker.autorun(function(c) {
    if(light.get() == 'black')
      c.stop();
    console.trace('The light is', light.get());
  });

  light.set('amber');
  light.set('red');
  light.set('green2');

  // VERSION 2
  // var i = 0;
  // window.deps = new Tracker.Dependency();
  // Tracker.autorun(function (c) {
  //   deps.depend();
  //   console.log('hello' + i);
  //   i++;
  // });
  // deps.changed();
  // deps.changed();
  // deps.changed();
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
