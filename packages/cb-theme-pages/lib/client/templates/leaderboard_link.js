Template[getTemplate('leaderboardLink')].helpers({
  userCount: function() {
      var totalUsers = Session.get('userCount');
      //console.log(totalUsers);
      return totalUsers;
    }
});

Template[getTemplate('leaderboardLink')].rendered = function () {
    Meteor.call('getUserCount', function (err, result) {
      Session.set('userCount', result);
    });
 };
