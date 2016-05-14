/**
 * Created by joakim on 2016-05-14.
 */
function loadCalendarApi(){
    window.alert("Api loaded");
    gapi.client.load('calendar', 'v3');
}

function emptySchedule(startTime, stopTime, weeks){

}

function upcomingEvents(weeks){
    var request = gapi.client.calendar.events.list({
        'calendarId': 'primary',
        'timeMin': (new Date()).toISOString(),
        'showDeleted': false,
        'singleEvents': true,
        'maxResults': 14,
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

function getTimeSlots(){
    events = upcomingEvents();
}
