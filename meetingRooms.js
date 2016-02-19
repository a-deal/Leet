/*
TC : 0(n log n)
SC : 0(n)
*/

var canAttendMeetings = function(intervals) {
    intervals = intervals.sort(function(a, b) { return a['start'] - b['start']; });

    for ( var i = 1; i < intervals.length; i++ ) {
        var lastEnd = intervals[i - 1]['end'], currentStart = intervals[i]['start'];
        if (lastEnd > currentStart) return false;
    }
    return true;
};
