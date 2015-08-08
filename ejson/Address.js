Address = function (city, state) {
  this.city = city;
  this.state = state;
}

Address.prototype = {
  constructor: Address,

  toString: function () {
    return this.city + ', ' + this.state;
  },

  clone: function () {
    return new Address(this.city, this.state);
  },

  equals: function (other) {
    if (!(other instanceof Address))
      return false;

     return this.city == other.city && this.state == other.state;
  },

  typeName: function () {
    return "Address";
  },

  toJSONValue: function () {
    return {
      city: this.city,
      state: this.state
    };
  }
};

EJSON.addType("Address", function fromJSONValue(value) {
  return new Address(value.city, value.state);
});

