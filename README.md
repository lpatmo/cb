###About
Project platform for [codebuddies.org](http://codebuddies.org). Forked from Telescope. Open-sourced.

The goal of this platform is to help users schedule google hangouts more easily to learn to code together.


###Priority Issues
1. Ability to remove oneself from a group/post.
2. Figure out reminder notifications - or at the very least, admins can send reminder e-mails to everyone who's subscribed to a hangout.
3. Limit post upvotes to 10 at a time.
4. Un-hide "upcoming scheduled" posts.
5. Un-hide datepicker for non-admin users.

###Open Issues
2. See the hangout link only if you join a group. (PENDING - not important)
3. Update the form with a "resources" URL.
4. Deploy using DigitalOcean/Compose.io
7. Figure out a way to mark posts as completed. (PENDING - not important)
8. (image)--<join group>--<checkmark yes when clicked> (not P1)
12. Add a class "active" to the menu tab label when the users is on that tab's page.
13. Prettify the hero blurb on the home page (add a background image, etc.)
14. Add a button that lets post the creator send a reminder e-mail to all the participants of a group.
15. Figure out a better notification system -- i.e. have some text on the post that says "next hangout meeting is at: ... "
16. Question: migrating the DB from meteor.com to compose.io -- is it possible?
17. Allow users to give award other karma points for being helpful during hangouts (OPTIONAL - not important)
18. Question: is it possible to allow an admin to add other "moderators" for that post -- so that multiple people can edit a single post? Have to figure out logic.
19. Figure out how to move edits to post_page.html and post_page.js over into a package so that changes aren't overwritten.
#####Advice from @tinabeans:
22. The little blue buttons at the bottom: because they are styled as buttons I tend to think they are performing an action of some sort. Maybe style them to be less prominent? Also on the homepage they are competing visually with the tabs across the top. (NOTE: Ignore for now. Only shows up if you put <a> tags in the footer as an admin.)
26. It's not totally clear what insights are at first. Perhaps title the comment field area underneath the study group description "Insights" to let people know that's what it is.
27. On the study group page, the "join hangout" button gets kind of lost.
28. Maybe clarify on the homepage that "hangouts" refers to Google Hangouts. People might think you mean hangouts in the physical sense. I don't think the word "hangout" has been entirely co-opted by Google yet. :)
29. On the hangout list items, the speech bubble icon seems to be a repeat of the info you're showing with "x insights." I would go with one or the other, and not repeat info. It might confuse people into thinking they are 2 separate things.
30. Highlighting the date/time instead of having it as part of the title is a great idea. It will help make it clear that it's a scheduled thing, rather than something that's more ad hoc or "always on." You could also try graying out the "Join Hangout" button when the Hangout isn't currently in session.
31. What does it mean to join a group (vs. a hangout) actually? Does it mean you get notifications about the group?
32. On your profile, fix difference between "Study Groups" and "I joined these other study groups as well"? Study Groups the ones you created vs. the ones other people made that you then joined. (Low priority for now. Worrying about function first.)

###Closed Issues
9. Create static pages - "what can X let you do?" UPDATE: Created the /about page. (Linda)
10. Pull categories down so it's viewable on the jumbotron UPDATE: categories show up on the home page. (Linda)
11. Have the jumbotron appear only on the home page. (Linda)
5. Change the labels on the submit form. (Linda)
6. Get usernames users who "upvoted" a post and display it on a post page. (Linda, with some tips from Sacha)
20. The icon (up caret) for joining a study group is a little hard to understand at first. I thought it would open a menu of some sort upward. My advice is just to remove it. If icons don't clarify (make recognition of something faster), then maybe we don't need it.
21. Get rid of "View" UPDATE: Removed from nav (Linda)
25. It might be potentially confusing to someone what the difference between joining a study group and joining a hangout is. Suggestion: use a different word from "join" - like "subscribe to study group" / "launch hangout" or something like that. (Alan)
23. Speaking of the homepage tabs, I would find some way to make them more prominent (maybe bigger) and maybe continue them across all the other pages that have lists of hangouts. I was caught off guard when they went away after I clicked on some of the "View" options.
24. When you click on View and select one of the options under it, it would be nice to have some kind of title at the top of the page that indicates which view you're currently looking at. It's always good to help the user orient themselves within the context of the larger site.

###Help Contribute
1. Leave a note in the chatroom: [Chatroom](https://gitter.im/lpatmo/codebuddies-meteor)