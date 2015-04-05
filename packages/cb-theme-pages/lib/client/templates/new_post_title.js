Template[getTemplate('newPostTitle')].helpers({
  postLink: function(){
    return !!this.url ? getOutgoingUrl(this.url) : "/posts/"+this._id;
  },
  postTarget: function() {
    return !!this.url ? '_blank' : '';
  },
  formattedHangoutDate: function() {
    if (this.scheduledFor) {
      // Don't bother to show time for past hangouts. Cuz who cares yo.
      return moment(this.scheduledFor).format('dddd, MMMM Do @ h:mma'); 
    } else {
      return '';
    }
  },
  masteredDate: function() {
    if (this.scheduledEnd) {
      return moment(this.scheduledEnd).fromNow();
    }
  },
  endHangoutDate: function() {
    if (this.scheduledEnd) {
      // Time for when the hangout ends.
      return (this.scheduledEnd > Date.now()) ? moment(this.scheduledEnd).format('h:mma') :
                                                ''
    } else {
      return '';
    }
  },
  upcomingEvent: function () {
    var upcomingEvent = (this.scheduledFor > Date.now()) ? true : false;
    return upcomingEvent;
  },
  inProgress: function() {
    return inProgress(this);
  },
  completedEvent: function() {
      var completedEvent = (Date.now() > this.scheduledEnd) ? true : false;
      return completedEvent;
  },
  probablyNotExpired: function() {
      /*If user did not set an end time, hangout probably has not expired after 2 hours*/
      if (!this.scheduledEnd) {
      var probablyNotExpired = (Date.now() > this.scheduledFor || Date.now() < this.scheduledFor + 7200000)  ? true: false;
      return probablyNotExpired;
      }
      


  }
});
