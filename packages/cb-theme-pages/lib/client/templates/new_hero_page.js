  Template[getTemplate('heroPage')].rendered = function () {
    Meteor.call('userCount', function (result) {
      Session.set('userCount', result);
    });
  };

  Template[getTemplate('heroPage')].helpers({
		showTabs: function() {
			var r = Router.current().location.get().path;
			console.log(r);
			if ( r == '/' || r.indexOf("category") > -1) {
				return true;
			} else {
				return false;
			}
		}, 
    userCount: function() {
      var userCount = Session.get('userCount');
      console.log(userCount);
      return userCount;
    }
	});


