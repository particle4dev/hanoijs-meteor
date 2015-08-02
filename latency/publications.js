if(Meteor.isServer)
    Meteor.publish(null, function(){
        return TodosCollection.find({},{sort: {updatedAt: -1}});
    });