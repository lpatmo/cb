Meteor.methods({
  getUserCount: function() {
    return Meteor.users.find().count();
  }
});