templates.posts_list = 'cb_posts_list';

Meteor.startup(function () {

  Template.posts_list.helpers({
    inProgressPostsCursor: function () {
      var allItems = this.postsCursor.fetch();
      return _.filter(allItems, inProgress);
    },
    pastAndFuturePostsCursor: function () {
      var allItems = this.postsCursor.fetch();
      return _.reject(allItems, inProgress);
    }
  });

});
