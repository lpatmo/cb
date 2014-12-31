Package.describe({
  summary: "CB theme",
  version: '0.1.0',
  name: "cb-theme"
});

Package.onUse(function (api) {

  api.use(['fourseven:scss', 'telescope-theme-hubble'], ['client']);

  api.addFiles([
    'lib/client/stylesheets/screen.scss',
    ], ['client']);

});