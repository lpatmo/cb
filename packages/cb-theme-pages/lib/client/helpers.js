inProgress = function (post) {
  return reactiveDate.nowMinutes.get() > post.scheduledFor && reactiveDate.nowMinutes.get() < post.scheduledEnd;
};

completedEvent = function(post) {
	return reactiveDate.nowMinutes.get() > post.scheduledEnd && reactiveDate.nowMinutes.get() > post.scheduledFor;
}

upcomingEvent = function(post) {
	return reactiveDate.nowMinutes.get() < post.scheduledFor;
}

reactiveDate = {
  nowMinutes: new ReactiveVar(new Date)
};

setInterval(function () {
  reactiveDate.nowMinutes.set(new Date);
}, 60 * 1000); // every minute

