Package.describe({
  summary: "CodeBuddies theme pages package",
  version: '0.1.0',
  name: "cb-theme-pages"
});

Package.onUse(function (api) {

  api.use([
    'telescope-lib', 
    'telescope-base',
    'iron:router'
  ], ['client', 'server']);

  api.use([
    'templating'
  ], ['client']);

  api.add_files([
    'lib/client/templates/about_page.html',
    'lib/client/templates/about_link.html',
    'lib/client/templates/hero_page.html',
     'lib/client/templates/new_post_domain.html',
      'lib/client/templates/new_post_domain.js',
      'lib/client/templates/new_post_upvote.html',
      'lib/client/templates/new_post_upvote.js',
    'lib/client/about.js'
  ], ['client']);

});