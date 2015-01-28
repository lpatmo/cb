Meteor.startup(function() {
	Router.map(function() {
		this.route('about', {
			path: '/about',
			template: getTemplate('aboutPage')
		});
	});
	Template[getTemplate('heroPage')].helpers({
		showTabs: function() {
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
templates["post_page"] = "new_post_page";
templates["postTitle"] = "newPostTitle";
templates["postAuthor"] = "newPostAuthor";
templates["postInfo"] = "newPostInfo";
templates["submitButton"] = "newSubmitButton";
primaryNav.push({template: 'aboutLink'});
var i = primaryNav.indexOf("viewsMenu");
if(i != -1) {
	primaryNav.splice(i, 1);
}


upvoteCallbacks.push(function (collection, item, user) {
  if (collection === Posts) {
    subscribeItem(Posts, item._id, user);
  }
  return item;
});

