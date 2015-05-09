(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// packages/telescope-base/lib/base.js                                                                        //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
// ------------------------------------- Schemas -------------------------------- //                          // 1
                                                                                                              // 2
// array containing properties to be added to the post/settings/comments schema on startup.                   // 3
addToPostSchema = [];                                                                                         // 4
addToCommentsSchema = [];                                                                                     // 5
addToSettingsSchema = [];                                                                                     // 6
addToUserSchema = [];                                                                                         // 7
                                                                                                              // 8
SimpleSchema.extendOptions({                                                                                  // 9
  editable: Match.Optional(Boolean),  // editable: true means the field can be edited by the document's owner // 10
  hidden: Match.Optional(Boolean)     // hidden: true means the field is never shown in a form no matter what // 11
});                                                                                                           // 12
// ----------------------------------- Posts Statuses ------------------------------ //                       // 13
                                                                                                              // 14
postStatuses = [                                                                                              // 15
  {                                                                                                           // 16
    value: 1,                                                                                                 // 17
    label: 'Pending'                                                                                          // 18
  },                                                                                                          // 19
  {                                                                                                           // 20
    value: 2,                                                                                                 // 21
    label: 'Approved'                                                                                         // 22
  },                                                                                                          // 23
  {                                                                                                           // 24
    value: 3,                                                                                                 // 25
    label: 'Rejected'                                                                                         // 26
  }                                                                                                           // 27
]                                                                                                             // 28
                                                                                                              // 29
STATUS_PENDING=1;                                                                                             // 30
STATUS_APPROVED=2;                                                                                            // 31
STATUS_REJECTED=3;                                                                                            // 32
                                                                                                              // 33
// ------------------------------------- Navigation -------------------------------- //                       // 34
                                                                                                              // 35
                                                                                                              // 36
// array containing nav items; initialize with views menu and admin menu                                      // 37
primaryNav = ['viewsMenu', 'adminMenu'];                                                                      // 38
                                                                                                              // 39
secondaryNav = ['userMenu', 'notificationsMenu', 'submitButton'];                                             // 40
                                                                                                              // 41
// array containing items in the admin menu                                                                   // 42
adminNav = [                                                                                                  // 43
  {                                                                                                           // 44
    route: 'posts_pending',                                                                                   // 45
    label: 'Pending',                                                                                         // 46
    description: 'posts_awaiting_moderation'                                                                  // 47
  },                                                                                                          // 48
  {                                                                                                           // 49
    route: 'posts_scheduled',                                                                                 // 50
    label: 'Scheduled',                                                                                       // 51
    description: 'future_scheduled_posts'                                                                     // 52
  },                                                                                                          // 53
  {                                                                                                           // 54
    route: 'all-users',                                                                                       // 55
    label: 'Users',                                                                                           // 56
    description: 'users_dashboard'                                                                            // 57
  },                                                                                                          // 58
  {                                                                                                           // 59
    route: 'settings',                                                                                        // 60
    label: 'Settings',                                                                                        // 61
    description: 'telescope_settings_panel'                                                                   // 62
  },                                                                                                          // 63
  {                                                                                                           // 64
    route: 'toolbox',                                                                                         // 65
    label: 'Toolbox',                                                                                         // 66
    description: 'various_utilities'                                                                          // 67
  }                                                                                                           // 68
];                                                                                                            // 69
                                                                                                              // 70
// array containing items in the views menu                                                                   // 71
viewNav = [                                                                                                   // 72
  {                                                                                                           // 73
    route: 'posts_top',                                                                                       // 74
    label: 'top',                                                                                             // 75
    description: 'most_popular_posts'                                                                         // 76
  },                                                                                                          // 77
  {                                                                                                           // 78
    route: 'posts_new',                                                                                       // 79
    label: 'new',                                                                                             // 80
    description: 'newest_posts'                                                                               // 81
  },                                                                                                          // 82
  {                                                                                                           // 83
    route: 'posts_best',                                                                                      // 84
    label: 'best',                                                                                            // 85
    description: 'highest_ranked_posts_ever'                                                                  // 86
  }                                                                                                           // 87
];                                                                                                            // 88
                                                                                                              // 89
// ------------------------------------- Views -------------------------------- //                            // 90
                                                                                                              // 91
                                                                                                              // 92
// object containing post list view parameters                                                                // 93
viewParameters = {};                                                                                          // 94
                                                                                                              // 95
// will be common to all other view unless specific properties are overwritten                                // 96
viewParameters.baseParameters = {                                                                             // 97
  find: {                                                                                                     // 98
    status: STATUS_APPROVED                                                                                   // 99
  },                                                                                                          // 100
  options: {                                                                                                  // 101
    limit: 10                                                                                                 // 102
  }                                                                                                           // 103
};                                                                                                            // 104
                                                                                                              // 105
viewParameters.top = function (terms) {                                                                       // 106
  return {                                                                                                    // 107
    options: {sort: {sticky: -1, score: -1}}                                                                  // 108
  };                                                                                                          // 109
}                                                                                                             // 110
                                                                                                              // 111
viewParameters.new = function (terms) {                                                                       // 112
  return {                                                                                                    // 113
    options: {sort: {sticky: -1, postedAt: -1}}                                                               // 114
  };                                                                                                          // 115
}                                                                                                             // 116
                                                                                                              // 117
viewParameters.best = function (terms) {                                                                      // 118
  return {                                                                                                    // 119
    options: {sort: {sticky: -1, baseScore: -1}}                                                              // 120
  };                                                                                                          // 121
}                                                                                                             // 122
                                                                                                              // 123
viewParameters.pending = function (terms) {                                                                   // 124
  return {                                                                                                    // 125
    find: {                                                                                                   // 126
      status: 1                                                                                               // 127
    },                                                                                                        // 128
    options: {sort: {createdAt: -1}},                                                                         // 129
    showFuture: true                                                                                          // 130
  };                                                                                                          // 131
}                                                                                                             // 132
                                                                                                              // 133
viewParameters.scheduled = function (terms) {                                                                 // 134
  return {                                                                                                    // 135
    find: {postedAt: {$gte: new Date()}},                                                                     // 136
    options: {sort: {postedAt: -1}}                                                                           // 137
  };                                                                                                          // 138
}                                                                                                             // 139
                                                                                                              // 140
viewParameters.userPosts = function (terms) {                                                                 // 141
  return {                                                                                                    // 142
    find: {userId: terms.userId},                                                                             // 143
    options: {limit: 5, sort: {postedAt: -1}}                                                                 // 144
  };                                                                                                          // 145
}                                                                                                             // 146
                                                                                                              // 147
viewParameters.userUpvotedPosts = function (terms) {                                                          // 148
  var user = Meteor.users.findOne(terms.userId);                                                              // 149
  var postsIds = _.pluck(user.votes.upvotedPosts, "itemId");                                                  // 150
  return {                                                                                                    // 151
    find: {_id: {$in: postsIds}, userId: {$ne: terms.userId}}, // exclude own posts                           // 152
    options: {limit: 5, sort: {postedAt: -1}}                                                                 // 153
  };                                                                                                          // 154
}                                                                                                             // 155
                                                                                                              // 156
viewParameters.userDownvotedPosts = function (terms) {                                                        // 157
  var user = Meteor.users.findOne(terms.userId);                                                              // 158
  var postsIds = _.pluck(user.votes.downvotedPosts, "itemId");                                                // 159
  // TODO: sort based on votedAt timestamp and not postedAt, if possible                                      // 160
  return {                                                                                                    // 161
    find: {_id: {$in: postsIds}},                                                                             // 162
    options: {limit: 5, sort: {postedAt: -1}}                                                                 // 163
  };                                                                                                          // 164
}                                                                                                             // 165
                                                                                                              // 166
heroModules = [];                                                                                             // 167
                                                                                                              // 168
footerModules = [];                                                                                           // 169
                                                                                                              // 170
postModules = [                                                                                               // 171
  {                                                                                                           // 172
    template: 'postUpvote',                                                                                   // 173
    order: 1                                                                                                  // 174
  },                                                                                                          // 175
  {                                                                                                           // 176
    template: 'postContent',                                                                                  // 177
    order: 5                                                                                                  // 178
  },                                                                                                          // 179
  {                                                                                                           // 180
    template: 'postAvatars',                                                                                  // 181
    order: 30                                                                                                 // 182
  },                                                                                                          // 183
  {                                                                                                           // 184
    template: 'postDiscuss',                                                                                  // 185
    order: 40                                                                                                 // 186
  },                                                                                                          // 187
  {                                                                                                           // 188
    template: 'postActions',                                                                                  // 189
    order: 50                                                                                                 // 190
  }                                                                                                           // 191
];                                                                                                            // 192
                                                                                                              // 193
postThumbnail = [];                                                                                           // 194
                                                                                                              // 195
postHeading = [                                                                                               // 196
  {                                                                                                           // 197
    template: 'postTitle',                                                                                    // 198
    order: 10                                                                                                 // 199
  },                                                                                                          // 200
  {                                                                                                           // 201
    template: 'postDomain',                                                                                   // 202
    order: 20                                                                                                 // 203
  }                                                                                                           // 204
];                                                                                                            // 205
                                                                                                              // 206
postMeta = [                                                                                                  // 207
  {                                                                                                           // 208
    template: 'postAuthor',                                                                                   // 209
    order: 10                                                                                                 // 210
  },                                                                                                          // 211
  {                                                                                                           // 212
    template: 'postInfo',                                                                                     // 213
    order: 20                                                                                                 // 214
  },                                                                                                          // 215
  {                                                                                                           // 216
    template: 'postCommentsLink',                                                                             // 217
    order: 30                                                                                                 // 218
  },                                                                                                          // 219
  {                                                                                                           // 220
    template: 'postAdmin',                                                                                    // 221
    order: 50                                                                                                 // 222
  }                                                                                                           // 223
]                                                                                                             // 224
// ------------------------------ Callbacks ------------------------------ //                                 // 225
                                                                                                              // 226
postSubmitRenderedCallbacks = [];                                                                             // 227
postSubmitClientCallbacks = [];                                                                               // 228
postSubmitMethodCallbacks = [];                                                                               // 229
postAfterSubmitMethodCallbacks = [];                                                                          // 230
                                                                                                              // 231
postEditRenderedCallbacks = [];                                                                               // 232
postEditClientCallbacks = [];                                                                                 // 233
postEditMethodCallbacks = []; // not used yet                                                                 // 234
postAfterEditMethodCallbacks = []; // not used yet                                                            // 235
                                                                                                              // 236
commentSubmitRenderedCallbacks = [];                                                                          // 237
commentSubmitClientCallbacks = [];                                                                            // 238
commentSubmitMethodCallbacks = [];                                                                            // 239
commentAfterSubmitMethodCallbacks = [];                                                                       // 240
                                                                                                              // 241
commentEditRenderedCallbacks = [];                                                                            // 242
commentEditClientCallbacks = [];                                                                              // 243
commentEditMethodCallbacks = []; // not used yet                                                              // 244
commentAfterEditMethodCallbacks = []; // not used yet                                                         // 245
                                                                                                              // 246
userEditRenderedCallbacks = [];                                                                               // 247
userEditClientCallbacks = [];                                                                                 // 248
userCreatedCallbacks = [];                                                                                    // 249
userProfileCompleteChecks = [];                                                                               // 250
                                                                                                              // 251
// ------------------------------------- User Profiles -------------------------------- //                    // 252
                                                                                                              // 253
userProfileDisplay = [                                                                                        // 254
  {                                                                                                           // 255
    template: 'userInfo',                                                                                     // 256
    order: 1                                                                                                  // 257
  },                                                                                                          // 258
  {                                                                                                           // 259
    template: 'userPosts',                                                                                    // 260
    order: 2                                                                                                  // 261
  },                                                                                                          // 262
  {                                                                                                           // 263
    template: 'userUpvotedPosts',                                                                             // 264
    order: 3                                                                                                  // 265
  },                                                                                                          // 266
  {                                                                                                           // 267
    template: 'userDownvotedPosts',                                                                           // 268
    order: 5                                                                                                  // 269
  },                                                                                                          // 270
  {                                                                                                           // 271
    template: 'userComments',                                                                                 // 272
    order: 5                                                                                                  // 273
  }                                                                                                           // 274
];                                                                                                            // 275
                                                                                                              // 276
userProfileEdit = [                                                                                           // 277
  {                                                                                                           // 278
    template: 'userAccount',                                                                                  // 279
    order: 1                                                                                                  // 280
  }                                                                                                           // 281
]                                                                                                             // 282
                                                                                                              // 283
userProfileCompleteChecks.push(                                                                               // 284
  function(user) {                                                                                            // 285
    return !!getEmail(user) && !!getUserName(user);                                                           // 286
  }                                                                                                           // 287
);                                                                                                            // 288
                                                                                                              // 289
// ------------------------------ Dynamic Templates ------------------------------ //                         // 290
                                                                                                              // 291
                                                                                                              // 292
templates = {}                                                                                                // 293
                                                                                                              // 294
getTemplate = function (name) {                                                                               // 295
  // if template has been overwritten, return this; else return template name                                 // 296
  return !!templates[name] ? templates[name] : name;                                                          // 297
}                                                                                                             // 298
                                                                                                              // 299
// ------------------------------ Theme Settings ------------------------------ //                            // 300
                                                                                                              // 301
themeSettings = {                                                                                             // 302
  'useDropdowns': true // whether or not to use dropdown menus in a theme                                     // 303
};                                                                                                            // 304
                                                                                                              // 305
// ------------------------------ Subscriptions ------------------------------ //                             // 306
                                                                                                              // 307
// array containing subscriptions to be preloaded                                                             // 308
preloadSubscriptions = [];                                                                                    // 309
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// packages/telescope-base/lib/base_client.js                                                                 //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
                                                                                                              // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);
