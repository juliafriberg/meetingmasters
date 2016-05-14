/**
 * Created by joakim on 2016-05-14.
 */
function loadCalendarApi(){
    gapi.client.load('calendar', 'v3');
    gapi.client.load('plus','v1');
    var request = gapi.client.plus.people.get({
        'userId': 'me'
    });
}

function emptySchedule(startTime, stopTime){

}

function upcomingEvents(days){

    var intervals = [];
    var calendars = gapi.client.calendar.calendarList.list();
    var calendarList = calendars.items;

    var request = gapi.client.calendar.events.list({
        'calendarId': 'primary',
        'timeMin': (new Date()).toISOString(),
        'showDeleted': false,
        'singleEvents': true,
        'maxResults': 1000,
        'orderBy': 'startTime'
    });

    request.execute(function(resp){
        var events = resp.items;

        if(events.length > 0){
            for(var i = 0; i < events.length; i++){
                var event = events[i];
                if (days.contains(event.getDay())){
                    var when = event.start.dateTime;
                    var to = event.end.dateTime;
                    for(var j = 0; j <intervals.length; j++){
                       if(intervals[j][0] > when && intervals[j][0] < to && intervals[j][1] < to){
                           intervals[j] = [when,to];
                       }else if(intervals[j][0] > when && intervals[j][0] < to){
                           intervals[j][0] = when;
                       }else if(intervals[j][0] < when && intervals[j][1] < to){
                           intervals[j][1] = to;
                       }else{
                           intervals.append([when,to]);
                       }

                    }
                    intervals.append(when,to, event.start.date)
                }
            }
        }
    });
}


function appendPre(message) {
    var pre = document.getElementById('output');
    var textContent = document.createTextNode(message + '\n');
    window.alert(textContent);
    pre.appendChild(textContent);
}

function getTimeSlots(startTime, endTime, duration, days){
    slots = emptySchedule(startTime, endTime, days)
    events = upcomingEvents();
}
