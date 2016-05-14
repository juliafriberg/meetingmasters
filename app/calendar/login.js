/**
 * Created by joakim on 2016-05-14.
 */

var CLIENT_ID = '774472576212-duo5git07541f8rmbmb1t2r0ugldpga6.apps.googleusercontent.com';

var SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];

var token;

function checkAuth() {
    gapi.auth.authorize(
        {
            'client_id': CLIENT_ID,
            'scope': SCOPES.join(' '),
            'immediate': true
        }, handleAuthResult);
}

function handleAuthResult(authResult) {
    token = authResult;
}

function handleAuthClick(){
    gapi.auth.authorize(
        {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
        handleAuthResult);
    return false;
}


function validToken(){
    return !!(token && !token.error); /** window.alert("login clicked"); */
}