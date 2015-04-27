templates.posts_list = 'cb_posts_list';

Meteor.startup(function () {

  Template.posts_list.helpers({
    inProgressPostsCursor: function () {
      var allItems = this.postsCursor.fetch();
      return _.filter(allItems, inProgress);
    },
    pastAndFuturePostsCursor: function() {
      var allItems = this.postsCursor.fetch();
      return _.reject(allItems, inProgress);
    },
    futurePostsCursor: function () {
      var allItems = this.postsCursor.fetch().reverse();
         return _.reject(allItems, inProgress);
    },
    pastPostsCursor: function () {
      var allItems = this.postsCursor.fetch();
         return _.filter(allItems, completedEvent);
    },
    postsLoadMore: function () {
    return getTemplate('postsLoadMore');
    },
    postsListIncoming: function () {
      return getTemplate('postsListIncoming');
    },
    postsListSort: function () {
      return getTemplate('postsListSort');
    }
  });

});


