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

function upcomingEvents(weeks){
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
    window.alert(toString(request));

    request.execute(function(resp){
        var events = resp.items;
        appendPre('UpcomingEvents:');

        if(events.length > 0){
            for(var i = 0; i < events.length; i++){
                var event = events[i];
                var when = event.start.dateTime;
                if(!when){
                    when = event.start.date;
                }
                appendPre(event.summary + ' (' + when + ')');
            }
        }else {
            appendPre('No upcoming events found');
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
