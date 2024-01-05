function getPlaylistLength() {
    const ytTimeNodes = document.querySelectorAll(".style-scope ytd-thumbnail-overlay-time-status-renderer");
    let sum = 0;
    
    ytTimeNodes.forEach((ele) => sum += parseTime(ele.innerText));

    console.log("Current Playlist Total Time: ", parseDisplayTime(sum));

}

function parseDisplayTime(totalSeconds) {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    let seconds = totalSeconds - (hours * 3600) - (minutes * 60);
    let timeString = hours.toString().padStart(2, '0') + ':' + 
          minutes.toString().padStart(2, '0') + ':' + 
          seconds.toString().padStart(2, '0');

    return timeString;
}

function parseTime(inText) {
    const minutes = parseInt(inText.substring(0, inText.indexOf(":")));
    const seconds = parseInt(inText.substring(inText.indexOf(":") + 1, inText.length));

    return ((minutes * 60) + seconds);
}

getPlaylistLength();
