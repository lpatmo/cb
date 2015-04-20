Meteor.startup(function () {

Template[getTemplate('newPostDomain')].helpers({
  domain: function(){
    var a = document.createElement('a');
    a.href = this.url;
    console.log('hi')
    //return a.hostname;
    return a
  },
  notExpiredEvent: function () {
    if (this.scheduledEnd) {
      var notExpired = (this.scheduledEnd > Date.now()) ? true : false;
    } else {
      var notExpired = true;
    }
    return notExpired;
  },
  inProgress: function() {
    var inProgress = (Date.now() > this.scheduledFor && Date.now() < this.scheduledEnd) ? true : false;
    return inProgress;
  }
});

Template[getTemplate('newPostDomain')].events({
	'click .hangout-button': function(e, instance){
    //var post = this;
    if(!Meteor.user()){
      e.preventDefault();
      Router.go('atSignIn');
      flashMessage(i18n.t("please_log_in_first"), "info");
    }
  }
});


});