MusicCollection = new Mongo.Collection("music");

if (Meteor.isServer) {
    MusicCollection.find({}).observe({
        added: function (document) {
            console.log(document, '--added');
        },
        changed: function (newDocument, oldDocument) {
            console.log(newDocument, oldDocument, '--changed');
        },
        removed: function (oldDocument) {
            console.log(oldDocument, '--removed');
        },
        movedTo: function (document, fromIndex, toIndex, before) {
            console.log(document, fromIndex, toIndex, before, '--movedTo');
        }
    });
}
