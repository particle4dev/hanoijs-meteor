Template.main.onCreated(function () {
    // Use this.subscribe inside onCreated callback
    this.subscribe("users");
});


Template.user.helpers({
    age: function (b) {
        return moment().diff(new Date(b), 'years');;
    }
});

Template.main.helpers({
    users: function () {
        return Meteor.users.find({});
    },
    total: function () {
        return Meteor.users.find({}).count();
    }
});

Template.button.events({
    'click #loginButton': function (evt, tmp) {
        login();
    }
});

Template.menuRightButton.events({
    'click #logoutButton': function (evt, tmp) {
        Meteor.logout();
    }
});

Template.menuRight.rendered = function () {
    componentHandler.upgradeElement(document.getElementById('menuRight'))
};

Template.user.rendered = function () {
    // var button = document.createElement('button');
    // var textNode = document.createTextNode('Click Me!');
    // button.appendChild(textNode);
    // button.className = 'mdl-button mdl-js-button mdl-js-ripple-effect';
    // componentHandler.upgradeElement(button);
    // document.getElementById('container').appendChild(button);
};

//https://github.com/meteor/meteor/blob/47b022841b40f5ca37adccc778ade373559519e5/packages/accounts-ui-unstyled/login_buttons_single.js
// XXX from http://epeli.github.com/underscore.string/lib/underscore.string.js
capitalize = function(str){
    str = str == null ? '' : String(str);
    return str.charAt(0).toUpperCase() + str.slice(1);
};

function login() {
    var serviceName = 'facebook';

    var callback = function (err) {
        if (!err) {
            console.log("loginsuccessful");
        } else if (err instanceof Accounts.LoginCancelledError) {
            // do nothing
            console.log("logincancelled");
        } else if (err instanceof ServiceConfiguration.ConfigError) {
            // loginButtonsSession.configureService(serviceName);
            console.error("configureService");
        } else {
            console.error(err.reason || "Unknown error");
        }
    };
    // XXX Service providers should be able to specify their
    // `Meteor.loginWithX` method name.
    var loginWithService = Meteor["loginWith" +
        (serviceName === 'meteor-developer' ?
            'MeteorDeveloperAccount' :
            capitalize(serviceName))];

    var options = {}; // use default scope unless specified
    if (Accounts.ui._options.requestPermissions[serviceName])
        options.requestPermissions = Accounts.ui._options.requestPermissions[serviceName];
    if (Accounts.ui._options.requestOfflineToken[serviceName])
        options.requestOfflineToken = Accounts.ui._options.requestOfflineToken[serviceName];
    loginWithService(options, callback);
}