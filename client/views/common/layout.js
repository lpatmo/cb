Template.layout.helpers({
  navLayout: function () {
    return Settings.get('navLayout', 'top-nav');
  },
  pageName : function(){
    return getCurrentTemplate();
  },
  extraCode: function() {
    return Settings.get('extraCode');
  },
  heroModules: function () {
    return _.sortBy(heroModules, 'order');
  }
});

Template.layout.created = function(){
  Session.set('currentScroll', null);
};

Template.layout.rendered = function(){
  if(currentScroll=Session.get('currentScroll')){
    $('body').scrollTop(currentScroll);
    Session.set('currentScroll', null);
  }

  // favicon
  var link = document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = Settings.get('faviconUrl', '/img/favicon.ico');
  document.getElementsByTagName('head')[0].appendChild(link);

  //animated gif and silent icons
  $('a.category-silent-hangout').after('<span class="silent-icons"> <img src="http://codebuddies.org/images/icon-video-off.png" alt="turn off video" width="25" height="25"> <img src="http://codebuddies.org/images/icon-mute.png" alt="turn off microphone" width="25" height="25"></span>'); 

};

Template.layout.events({
  'click .inner-wrapper': function (e) {
    if ($('body').hasClass('mobile-nav-open')) {
      e.preventDefault();
      $('body').removeClass('mobile-nav-open');
    }
  }
});
