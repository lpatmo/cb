Template[getTemplate('newPostInfo')].helpers({
  pointsUnitDisplayText: function(){
    return this.upvotes == 1 ? i18n.t('participant') : i18n.t('participants');
  },
  getTemplate: function() {
    return getTemplate("newPostAuthor");
  }
});