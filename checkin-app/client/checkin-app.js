Template.hello.onCreated(function () {
    // Use this.subscribe inside onCreated callback
    this.subscribe("users");
});

Template.hello.helpers({
    age: function (b) {
        return moment().diff(new Date(b), 'years');;
    },
    users: function () {
        return Meteor.users.find();
    }
});

Template.hello.rendered = function () {
    // var button = document.createElement('button');
    // var textNode = document.createTextNode('Click Me!');
    // button.appendChild(textNode);
    // button.className = 'mdl-button mdl-js-button mdl-js-ripple-effect';
    // componentHandler.upgradeElement(button);
    // document.getElementById('container').appendChild(button);
};