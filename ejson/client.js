if (Meteor.isClient) {
  // DEMO 1
  person = {
    name: "Ha Noi JS",
    createdAt: new Date(),
    file: new Uint8Array([104, 101, 108, 108, 111])
  };
  console.log(person);
  console.log('===============JSON===============');
  var json = JSON.stringify(person)
  console.log(json);
  console.log(EJSON.fromJSONValue(json))
  var valueJson = JSON.parse(json)
  console.log(valueJson);
  console.log('===============EJSON==============');
  var ejson = EJSON.stringify(person)
  console.log(ejson);
  var valueEjson = EJSON.parse(ejson)
  console.log(valueEjson);

  // DEMO 2
  // uploadPerson = function () {
  //   Meteor.call("uploadPerson", person);
  // }
  // uploadPerson();

  // DEMO 3
  // uploadAddress = function () {
  //   Meteor.call("uploadAddress", new Address('Cau giay', 'Ha noi'));
  // }
  // uploadAddress();
}