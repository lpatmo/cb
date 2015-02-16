Meteor.startup(function () {

  Router.map(function() {

    this.route('posts_recently_scheduled', {
      path: '/recently-scheduled',
      controller: PostsListController
    });

  });

});

viewNav.push(
  {
    route: 'posts_recently_scheduled',
    label: 'Recently Scheduled'
  }  
);