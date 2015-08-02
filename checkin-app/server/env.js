/**
 * Facebook configurations
 */
ServiceConfiguration.configurations.remove({service: 'facebook'});
if(/localhost/.test(Meteor.absoluteUrl())){
    if(!ServiceConfiguration.configurations.findOne({service: 'facebook'})){
        ServiceConfiguration.configurations.insert({
            service: "facebook",
            appId: Meteor.settings.facebook.dev.id,
            secret: Meteor.settings.facebook.dev.secret
        });
    }
}
else
    if(!ServiceConfiguration.configurations.findOne({service: 'facebook'})){
        ServiceConfiguration.configurations.insert({
            service: "facebook",
            appId: Meteor.settings.facebook.pro.id,
            secret: Meteor.settings.facebook.pro.secret
        });
    }
