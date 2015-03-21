// Publish all users to reactive-table (if admin)
// Limit, filter, and sort handled by reactive-table.
// https://github.com/aslagle/reactive-table#server-side-pagination-and-filtering-beta

ReactiveTable.publish("leaderboard", function() {
    return Meteor.users;
});
