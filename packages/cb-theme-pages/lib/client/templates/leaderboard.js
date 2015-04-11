Template[getTemplate('leaderboard')].helpers({
  settings: function() {
    return {
      collection: 'leaderboard',
      rowsPerPage: 20,
      showFilter: true,
      fields: [
        { key: 'avatar', label: '', tmpl: Template.users_list_avatar, sortable: false },
        { key: 'username', label: 'Name', tmpl: Template.users_list_username },
        { key: 'karma', label: 'Karma', fn: function(val){return Math.round(100*val)/100} },
        { key: 'postCount', label: '# Hangouts Scheduled' },
        { key: 'votes.upvotedPosts.length', label: 'Meetups Joined' },
        { key: 'commentCount', label: 'Comments' },
        { key: 'createdAt', label: 'Member Since', tmpl: Template.users_list_created_at, sort: 'descending' }
      ]
    };
  },


});



