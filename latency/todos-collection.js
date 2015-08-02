TodosCollection = new Mongo.Collection('todos');

Meteor.methods({
	createTodo: function (t) {
		try {
			check(t, String);
			var doc = {
				title: t
			};
            if(!this.isSimulation){
              var Future = Npm.require('fibers/future');
              var Fiber = Npm.require('fibers');
              doc.isSimulation = false;
              var fiber = Fiber.current;
              setTimeout(function() {
                  fiber.run();
              }, 10000);
              Fiber.yield();
              return insertNewTodo(doc);
            }
            else {
              // Insert into MongoDB and Minimongo
              doc.isSimulation = true;
              return insertNewTodo(doc);
            }
        }
        catch(err){
            if(err.reason)
                throw new Meteor.Error(403, err.reason);
            throw new Meteor.Error(403, err.message);
        }		
	}
});

var insertNewTodo = function (doc) {
	doc.isDone = false;
	doc.updatedAt = new Date();
    doc.createdAt = new Date();
    return TodosCollection.insert(doc);
};