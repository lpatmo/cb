Template[getTemplate('newPostDomain')].helpers({
  domain: function(){
    var a = document.createElement('a');
    a.href = this.url;
    console.log('hi')
    //return a.hostname;
    return a
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