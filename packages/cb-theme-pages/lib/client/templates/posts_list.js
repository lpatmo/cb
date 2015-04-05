templates.posts_list = 'cb_posts_list';

Template.cb_posts_list.helpers({
  inProgressPostsCursor: function () {
    var allItems = Template.cb_posts_list.__helpers[' postsCursor'].call(this) || [];
    return _.filter(allItems, inProgress);
  },
  pastAndFuturePostsCursor: function () {
    var allItems = Template.cb_posts_list.__helpers[' postsCursor'].call(this) || [];
    return _.reject(allItems, inProgress);
  }
});

