if (Meteor.isServer) {
  Meteor.methods({
    uploadPerson: function (person) {
      console.log("typeOf createdAt: ", typeOf(person.createdAt));
      console.log("typeOf file: ", typeOf(person.file));
    },
    uploadAddress: function (address) {
      console.log("address: ", address.toString());
    }
  });
}
