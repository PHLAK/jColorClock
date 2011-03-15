$(document).ready(function(){
    
    // Set interval for ever 0.1 seconds
    setInterval(function() {
        
        // Set the variables
        var time = getTime();
        var color = getColor();
        
        // Update the time
        $('#clock').text(time);
        
        // Change the background color
        $('html').css('background-color', '#' + color);
        
    }, 100);

});

function getTime() {
    // Instantiate the date object
    var currentTime = new Date();
    
    // Set the hours, minutes and seconds to variables
    var hours   = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    
    // Fix variables when < 10
    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10){ minutes = "0" + minutes; }
    if (seconds < 10){ seconds = "0" + seconds; }

    // Construct a string of the current time
    var time = hours + ':' + minutes + ':' + seconds;
    
    // Return the time string
    return time;
}

function getColor() {
    // Instantiate the date object
    var currentTime = new Date();
    
    // Set the hours, minutes and seconds to variables
    var hours   = Math.round(currentTime.getHours() * 11.09);
    var minutes = Math.round(currentTime.getMinutes() * 4.32);
    var seconds = Math.round(currentTime.getSeconds() * 4.32);
    
    console.log(minutes);
    
    // Convert decimal to hex
    var r = hours.toString(16);
    var g = minutes.toString(16);
    var b = seconds.toString(16);

    // Construct a string of the current time
    var hex = r + g + b;
    
    
    console.log(r + '/' + g + '/' + b);
    
    // Return the color string
    return hex;
}