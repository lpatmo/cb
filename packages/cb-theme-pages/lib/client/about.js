Meteor.startup(function() {
	Router.map(function() {
		this.route('about', {
			path: '/about',
			template: getTemplate('aboutPage')
		});
	});
	Template[getTemplate('heroPage')].helpers({
		isHomePage: function() {
			var r = Router.current().location.get().path;
			console.log(r);
			if ( r == '/' || r.indexOf("category") > -1) {
				return true;
			} else {
				return false;
			}
		}

	});
});

heroModules.push({
 				 template: 'heroPage'
});

primaryNav.push('aboutLink');
primaryNav.pop('Categories');


Meteor.startup(function () {
  Template[getTemplate('heroPage')].helpers({
    hasCategories: function(){
      return typeof Categories !== 'undefined' && Categories.find().count();
    },
    cat: function () {
      return __('categories')
    },
    categories: function(){
      return Categories.find({}, {sort: {order: 1, name: 1}});
    },
    categoryLink: function () {
      return getCategoryUrl(this.slug);
    }
  });
});

getCategoryUrl = function(slug){
  return getSiteUrl()+'category/'+slug;
};

/*Template Overrides*/
templates["postDomain"] = "newPostDomain";
templates["postUpvote"] = "newPostUpvote";
templates["postInfo"] = "newPostInfo";
templates["post_page"] = "new_post_page";
