(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-module-share/lib/share.js                                                                  //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
postModules.push({                                                                                               // 1
  template: 'postShare',                                                                                         // 2
  order: 25                                                                                                      // 3
});                                                                                                              // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-module-share/lib/client/template.post_share.js                                             //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("postShare");                                                                               // 2
Template["postShare"] = new Template("Template.postShare", (function() {                                         // 3
  var view = this;                                                                                               // 4
  return [ HTML.A({                                                                                              // 5
    href: "#",                                                                                                   // 6
    "class": "share-link action"                                                                                 // 7
  }, "\n    ", HTML.Raw('<i class="action-icon icon-share"></i>'), "\n    ", HTML.SPAN({                         // 8
    "class": "action-label"                                                                                      // 9
  }, Blaze.View(function() {                                                                                     // 10
    return Spacebars.mustache(view.lookup("_"), "share");                                                        // 11
  })), "\n  "), "\n  ", HTML.DIV({                                                                               // 12
    "class": "share-options hidden"                                                                              // 13
  }, "\n    ", HTML.A({                                                                                          // 14
    "class": "mt-facebook mt-share-inline-square-sm",                                                            // 15
    href: function() {                                                                                           // 16
      return [ "https://www.facebook.com/sharer/sharer.php?u=", Spacebars.mustache(view.lookup("sourceLink")) ]; // 17
    },                                                                                                           // 18
    target: "_blank"                                                                                             // 19
  }, HTML.Raw('<img src="//mojotech-static.s3.amazonaws.com/facebook@2x.png">')), "\n    ", HTML.A({             // 20
    "class": "mt-twitter mt-share-inline-square-sm",                                                             // 21
    href: function() {                                                                                           // 22
      return [ "//twitter.com/intent/tweet?text=", Spacebars.mustache(view.lookup("title")), "&url=", Spacebars.mustache(view.lookup("sourceLink")), "&", Spacebars.mustache(view.lookup("viaTwitter")) ];
    },                                                                                                           // 24
    target: "_blank"                                                                                             // 25
  }, HTML.Raw('<img src="//mojotech-static.s3.amazonaws.com/twitter@2x.png">')), "\n    ", HTML.A({              // 26
    "class": "mt-linkedin mt-share-inline-square-sm",                                                            // 27
    href: function() {                                                                                           // 28
      return [ "//www.linkedin.com/shareArticle?mini=true&url=", Spacebars.mustache(view.lookup("sourceLink")), HTML.CharRef({
        html: "&amp;",                                                                                           // 30
        str: "&"                                                                                                 // 31
      }), "summary=", Spacebars.mustache(view.lookup("title")) ];                                                // 32
    },                                                                                                           // 33
    target: "_blank"                                                                                             // 34
  }, HTML.Raw('<img src="//mojotech-static.s3.amazonaws.com/linkedin@2x.png">')), "\n    ", HTML.A({             // 35
    "class": "mt-google mt-share-inline-square-sm",                                                              // 36
    href: function() {                                                                                           // 37
      return [ "https://plus.google.com/share?url=", Spacebars.mustache(view.lookup("sourceLink")) ];            // 38
    },                                                                                                           // 39
    target: "_blank"                                                                                             // 40
  }, HTML.Raw('<img src="//mojotech-static.s3.amazonaws.com/google@2x.png">')), "\n  ") ];                       // 41
}));                                                                                                             // 42
                                                                                                                 // 43
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-module-share/lib/client/post_share.js                                                      //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Meteor.startup(function () {                                                                                     // 1
  Template[getTemplate('postShare')].helpers({                                                                   // 2
    sourceLink: function(){                                                                                      // 3
      return !!this.url ? this.url : getSiteUrl() + "posts/"+this._id;                                           // 4
    },                                                                                                           // 5
    viaTwitter: function () {                                                                                    // 6
      return !!getSetting('twitterAccount') ? 'via='+getSetting('twitterAccount') : '';                          // 7
    }                                                                                                            // 8
  });                                                                                                            // 9
                                                                                                                 // 10
  Template[getTemplate('postShare')].events({                                                                    // 11
    'click .share-link': function(e){                                                                            // 12
      var $this = $(e.target).parents('.post-share').find('.share-link');                                        // 13
      var $share = $this.parents('.post-share').find('.share-options');                                          // 14
      e.preventDefault();                                                                                        // 15
      $('.share-link').not($this).removeClass("active");                                                         // 16
      $(".share-options").not($share).addClass("hidden");                                                        // 17
      $this.toggleClass("active");                                                                               // 18
      $share.toggleClass("hidden");                                                                              // 19
    }                                                                                                            // 20
  });                                                                                                            // 21
});                                                                                                              // 22
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);
