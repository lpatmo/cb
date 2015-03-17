Template[getTemplate('heroPage')].helpers({
		showTabs: function() {
			var r = Router.current().location.get().path;
			//console.log(r);
			if ( r == '/' || r.indexOf("category") > -1) {
				return true;
			} else {
				return false;
			}
		}, 
    userCount: function() {
      var totalUsers = Session.get('userCount');
      //console.log(totalUsers);
      return totalUsers;
    }
	});

Template[getTemplate('heroPage')].rendered = function () {
    Meteor.call('getUserCount', function (err, result) {
      Session.set('userCount', result);
    });
    $('a.category-silent-hangout').after('<span class="silent-icons"> <img src="http://codebuddies.org/images/icon-video-off.png" alt="turn off video" width="25" height="25"> <img src="http://codebuddies.org/images/icon-mute.png" alt="turn off microphone" width="25" height="25"></span>'); 
 };

