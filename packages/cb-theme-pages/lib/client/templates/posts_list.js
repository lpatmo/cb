templates.posts_list = 'cb_posts_list';

Meteor.startup(function () {

  Template.posts_list.helpers({
    inProgressPostsCursor: function () {
      var allItems = this.postsCursor.fetch();
      return _.filter(allItems, inProgress);
    },
    futurePostsCursor: function () {
      var allItems = this.postsCursor.fetch().reverse();
      return _.filter(allItems, upcomingEvent);
    },
    pastPostsCursor: function () {
      var allItems = this.postsCursor.fetch();
      return _.filter(allItems, completedEvent);
    }
  });

});
