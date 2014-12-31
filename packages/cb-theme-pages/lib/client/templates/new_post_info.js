Template[getTemplate('postInfo')].helpers({
  pointsUnitDisplayText: function(){
    return this.upvotes == 1 ? i18n.t('participant') : i18n.t('participants');
  },
  can_edit: function(){
    return canEdit(Meteor.user(), this);
  },
  getTemplate: function() {
    return getTemplate("postAuthor");
  }
});