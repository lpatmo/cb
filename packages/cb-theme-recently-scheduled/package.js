Package.describe({summary: "CB Recently Scheduled View"});

Package.on_use(function (api) {

  api.use(['telescope-lib', 'telescope-base'], ['client', 'server']);

  api.add_files(['lib/recently-scheduled.js'], ['client', 'server']);

  api.add_files(['lib/client/routes.js'], ['client']);
});	