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
      return (this.scheduledFor > Date.now()) ? moment(this.scheduledFor).format('dddd, MMMM Do YYYY @ h:mma') :
                                                moment(this.scheduledFor).fromNow();
    } else {
      return '';
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
  notExpiredEvent: function () {
    var notExpired = (this.scheduledFor > Date.now()-86400000) ? true : false;
    /*Not expired as long as it was scheduled for within the last 24 hours*/
    return notExpired;
  }
});
