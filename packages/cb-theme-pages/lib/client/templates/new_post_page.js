Template[getTemplate('new_post_page')].helpers({
  post_item: function () {
    return getTemplate('post_item');
  },
  post_body: function () {
    return getTemplate('post_body');
  },
  comment_form: function () {
    return getTemplate('comment_form');
  },
  comment_list: function () {
    return getTemplate('comment_list');
  },
  membersList: function() {
    users = Meteor.users.find({_id: {$in: this.upvoters}});
    //console.log(this.upvoters);
    //console.log(this.upvotes);
    return users;
     // return Meteor.users.find({_id: {$in: this.upvoters}});
  }
});

Template[getTemplate('new_post_page')].rendered = function(){
  $('body').scrollTop(0);
};