$(document).ready(function(){
    
    // Set interval for ever 0.1 seconds
    setInterval(function() {
        
        // Set the variables
        var time = getTime();
        
        var hash = window.location.hash;
        if (hash == '#continuous') {
            var color = getColorContinuous();
        } else {
            var color = getColor();
        }
        
        // Update the time
        $('#clock').text(time);
        
        // Change the background color
	$('body').animate({ backgroundColor: '#' + color }, 500);
        
    }, 1000);

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
    var hours   = Math.round(currentTime.getHours() * (255 / 23));
    var minutes = Math.round(currentTime.getMinutes() * (255 / 59));
    var seconds = Math.round(currentTime.getSeconds() * (255 / 59));
    
    // Convert decimal to hex
    var r = hours.toString(16);
    var g = minutes.toString(16);
    var b = seconds.toString(16);
    
    // Fix string lengths if needed
    if (r.length < 2) { r = '0' + r; }
    if (g.length < 2) { g = '0' + g; }
    if (b.length < 2) { b = '0' + b; }

    // Construct a string of the current time
    var hex = r + g + b;
    
    // Return the color string
    return hex;
}

function getColorContinuous() {
    // Instantiate the date object
    var currentTime = new Date();
    
    // Set the hours, minutes and seconds to variables
    var hours   = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var hex = ((hours * 3600) + (minutes * 60) + seconds) * 193.97;
    
    // Convert decimal to hex
    var hex = Math.round(hex);
    var hex = hex.toString(16);
    console.log(hex);
    
    while (hex.length < 6) {
        var hex = '0' + hex;        
    }

    // Return the color string
    return hex;
}
