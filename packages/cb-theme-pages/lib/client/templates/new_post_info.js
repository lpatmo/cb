Meteor.startup(function () {

Template[getTemplate('newPostInfo')].helpers({
  pointsUnitDisplayText: function(){
    return this.upvotes == 1 ? i18n.t('subscriber') : i18n.t('subscribers');
  },
  getTemplate: function() {
    return getTemplate("newPostAuthor");
  }
});

});