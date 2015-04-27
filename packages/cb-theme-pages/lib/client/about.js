

Meteor.startup(function() {
	Router.map(function() {
		this.route('about', {
			path: '/about',
			template: getTemplate('aboutPage')
		});
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

// var i = primaryNav.indexOf("viewsMenu");
// if(i != -1) {
// 	primaryNav.splice(i, 1);
// }



upvoteCallbacks.push(function (collection, item, user) {
  if (collection === Posts) {
    subscribeItem(Posts, item._id, user);
  }
  return item;
});

//console.log(upvoteCallbacks);

primaryNav.push({template:'leaderboardLink'});




// Replace the words "silent hangout" with icons



