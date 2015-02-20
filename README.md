###About
Project platform for [codebuddies.org](http://codebuddies.org). Forked from Telescope. Open-sourced.

The goal of this platform is to help users schedule google hangouts more easily to learn to code together.


###Priority Issues
Below is the list of priority issues that we have. If you're interested in taking a look at one of these as an open-source contributor, leave a message on the issue link! Or leave a note in the [chatroom](https://gitter.im/lpatmo/codebuddies-meteor) if you have questions.
1. Recognize "active users" and give people a spot where they can write down what they're currently working on so that they can schedule ad-hoc study sessions spontaneously.

2. Create a "leaders" page that features a leaderboard of the top hangout organizers.

3. Create a "resources" page where users can submit links to tutorials or resources that they recommend. Also would be great if others could upvote and comment on the links.

4. Give titles to each category. Maybe recognize it inside the "Schedule a {{category}} study session" button.


###Non-priority issues (for now):
1. Add a class "active" to the menu tab label when the users is on that tab's page. DISCUSS HERE: https://github.com/lpatmo/cb/issues/21
2. BONUS: Allow users to award each other karma points for being helpful during hangouts. :) Also, create a page with a leaderboard of users listing karma points. DISCUSS HERE: https://github.com/lpatmo/cb/issues/25
3. Maybe use an alternative to Google Hangouts? DISCUSS HERE: https://github.com/lpatmo/cb/issues/27


###Closed Issues
~~
3. Add support for select option for hangout rooms in form (DONE!)
2. Differentiate between "previous hangouts" and "upcoming hangouts." DISCUSS HERE:  https://github.com/lpatmo/cb/issues/17 (DONE!)
4. Redesign home page so there's not so much text, and put up a NUMBER: "165 running partners for learning code..." (DONE!)
5. Re-think RSVP button 
3. Re-write forms to add a datepicker, and re-order hangouts using this new view. Bonus: have the date/time show up separately based on this datepicker time instead of putting it in the title. DISCUSS HERE: https://github.com/lpatmo/cb/issues/4 (DONE!)
1. Study session proposers can click a button to send a message to everyone who RSVPed to the hangout. Start by returning a list of e-mails of attendees that only the hangout proposer and admins can see. DISCUSS HERE: https://github.com/lpatmo/cb/issues/22
16. Question: migrating the DB from meteor.com to compose.io -- is it possible? UPDATE: Not an issue anymore.
13. Prettify the hero blurb on the home page (add a background image, etc.) DONE!
18. Question: is it possible to allow an admin to add other "moderators" for that post -- so that multiple people can edit a single post? Have to figure out logic. UPDATE: This is coming up as a future TelescopeJS feature.
7. Figure out a way to mark posts as completed. (PENDING - not important)
3. Limit post upvotes to 10 at a time.
4. Un-hide "upcoming scheduled" posts. DONE!
4. Deploy using DigitalOcean/Compose.io UPDATE: done!
3. Update the form with a "resources" URL. UPDATE: not important.
19. Figure out how to move edits to post_page.html and post_page.js over into a package so that changes aren't overwritten. UPDATE: done!
22. The little blue buttons at the bottom: because they are styled as buttons I tend to think they are performing an action of some sort. Maybe style them to be less prominent? Also on the homepage they are competing visually with the tabs across the top. (NOTE: Ignore for now. Only shows up if you put <a> tags in the footer as an admin.)
26. It's not totally clear what insights are at first. Perhaps title the comment field area underneath the study group description "Insights" to let people know that's what it is.
27. On the study group page, the "join hangout" button gets kind of lost.
28. Maybe clarify on the homepage that "hangouts" refers to Google Hangouts. People might think you mean hangouts in the physical sense. I don't think the word "hangout" has been entirely co-opted by Google yet. :)
29. On the hangout list items, the speech bubble icon seems to be a repeat of the info you're showing with "x insights." I would go with one or the other, and not repeat info. It might confuse people into thinking they are 2 separate things.
31. What does it mean to join a group (vs. a hangout) actually? Does it mean you get notifications about the group? UPDATE: people who join a hangout will get notifications in the future, pending pull request merge on Telescope.
32. On your profile, fix difference between "Study Groups" and "I joined these other study groups as well"? Study Groups the ones you created vs. the ones other people made that you then joined. (Low priority for now. Worrying about function first.)
9. Create static pages - "what can X let you do?" UPDATE: Created the /about page. (Linda)
10. Pull categories down so it's viewable on the jumbotron UPDATE: categories show up on the home page. (Linda)
11. Have the jumbotron appear only on the home page. (Linda)
5. Change the labels on the submit form. (Linda)
6. Get usernames users who "upvoted" a post and display it on a post page. (Linda, with some tips from Sacha)
20. The icon (up caret) for joining a study group is a little hard to understand at first. I thought it would open a menu of some sort upward. My advice is just to remove it. If icons don't clarify (make recognition of something faster), then maybe we don't need it.
21. Get rid of "View" UPDATE: Removed from nav (Linda)
25. It might be potentially confusing to someone what the difference between joining a study group and joining a hangout is. Suggestion: use a different word from "join" - like "subscribe to study group" / "launch hangout" or something like that. (Alan)
23. Speaking of the homepage tabs, I would find some way to make them more prominent (maybe bigger) and maybe continue them across all the other pages that have lists of hangouts. I was caught off guard when they went away after I clicked on some of the "View" options.
24. When you click on View and select one of the options under it, it would be nice to have some kind of title at the top of the page that indicates which view you're currently looking at. It's always good to help the user orient themselves within the context of the larger site.~~
