
//Sets up the nodes that should evaluated, calls the other functions
function getPlaylistLength() {
    const ytTimeNodes = document.querySelectorAll(".style-scope ytd-thumbnail-overlay-time-status-renderer");
    let sum = 0;
    
    ytTimeNodes.forEach((element) => sum += parseTime(element.innerText));

    const playlistLength = parseDisplayTime(sum)
    
    return playlistLength;
}

//Takes in a (int) time in seconds and returns the time in "hh:mm:ss" format
function parseDisplayTime(totalSeconds) {
    const secondsPerHour = 3600;
    const minutesPerHour = 60;
    
    const hours = Math.floor(totalSeconds / secondsPerHour);
    const minutes = Math.floor((totalSeconds - (hours * secondsPerHour)) / minutesPerHour);
    const seconds = totalSeconds - (hours * secondsPerHour) - (minutes * minutesPerHour);
    const timeString =
            hours.toString().padStart(2, '0') + 'h:' + 
            minutes.toString().padStart(2, '0') + 'm:' + 
            seconds.toString().padStart(2, '0') + 's';

    return timeString;
}

//Takes in a string "time" (in "hh:mm") format and returns the total time in (int) seconds for further calculation 
function parseTime(inText) {
    const minutes = parseInt(inText.substring(0, inText.indexOf(":")));
    const seconds = parseInt(inText.substring(inText.indexOf(":") + 1, inText.length));

    return ((minutes * 60) + seconds);
}

console.log("Current Playlist Total Time: ", getPlaylistLength());