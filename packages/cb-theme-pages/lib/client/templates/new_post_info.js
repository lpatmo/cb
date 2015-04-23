Meteor.startup(function () {

Template[getTemplate('newPostInfo')].helpers({
  pointsUnitDisplayText: function(){
    return this.upvotes == 1 ? i18n.t('person interested') : i18n.t('people interested');
  },
  getTemplate: function() {
    return getTemplate("newPostAuthor");
  }
});

});