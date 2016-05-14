/**
 * Created by joakim on 2016-05-14.
 */

var CLIENT_ID = '774472576212-duo5git07541f8rmbmb1t2r0ugldpga6.apps.googleusercontent.com';

var SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];

function checkAuth() {
    gapi.auth.authorize(
        {
            'client_id': CLIENT_ID,
            'scope': SCOPES.join(' '),
            'immediate': true
        }, handleAuthResult);
}

function handleAuthResult(authResult) {
    var authorizeDiv = document.getElementById('authorize-div');
    if(authResult && !authResult.error) {
        authorizeDiv.style.display = 'none';
        loadCalendarApi();
    }else{
        authorizeDiv.style.display = 'inline';
    }
}

function handleAuthClick(event){
    gapi.auth.authorize(
        {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
        handleAuthResult);
    return false;
}

