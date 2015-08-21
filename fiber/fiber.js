if (Meteor.isServer) {
    // FIBER
    // var Future = Npm.require('fibers/future');
    // var Fiber = Npm.require('fibers');
    // function sleep(ms) {
    //     var fiber = Fiber.current;
    //     setTimeout(function() {
    //         fiber.run();
    //     }, ms);
    //     Fiber.yield();
    // }
    // new Fiber(function () {
    //     console.log("before");
    //     sleep(2000);
    //     console.log("after");
    // }).run();

    // PROMISES
    // var p = new Promise(function(resolve, reject) {
    //     setTimeout(function () {
    //         resolve();
    //     }, 2000);
    //     console.log("before");
    // });
    // p.then(function () {
    //     console.log("after");
    // });

    // METEOR
    // let MusicCollection = new Mongo.Collection('music');
    // if(MusicCollection.find().count() === 0) {
    //     MusicCollection.insert({
    //         songTitle: 'Take Your Time',
    //         singer: 'Sam Hunt'
    //     });
    // }
    // let cursor = MusicCollection.find();
    // cursor.forEach(function (song) {
    //     console.log(song);
    // });
}
